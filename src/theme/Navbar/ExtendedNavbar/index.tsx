import React, { useRef, useState } from "react";
import styles from "./ExtendedNavbar.module.scss";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { useLocation } from "@docusaurus/router";
import useLocaleMap from "../../../hooks/useLocaleMap";
import { usePluginData } from "@docusaurus/useGlobalData";
import ISocialMedia from "src/plugins/docusaurus-plugin-navdata/src/interfaces/navbar/socialMedia";
import INavData from "src/plugins/docusaurus-plugin-navdata/src/interfaces/navbar/navData";
import SocialMedia from "./SocialMedia";
import NavBarDropdown from "./NavBarDropdown";
import Search from "./Search";
import INavItem from "src/plugins/docusaurus-plugin-navdata/src/interfaces/navbar/navItem";
import useEventListener from "../../../hooks/useEventListener";
import useFocusTrap from "../../../hooks/useFocusTrap";
import Link from "@docusaurus/Link";

export default function ExtendedNavbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownContent, setDropdownContent] = useState<INavItem | null>(null);
    const [current, setCurrent] = useState<string>("");
    const { siteConfig } = useDocusaurusContext();
    const navBarRef = useRef<HTMLHeadingElement>(null);
    const dropdownParentRef = useRef<HTMLElement>(null);

    const location = useLocation();
    const baseUrl = siteConfig.customFields.baseUrl as string;
    const siteUrl = siteConfig.customFields.siteUrl as string;
    // -- Remove the base url from the location
    const path = location.pathname.replace(baseUrl, "");
    // -- Take the locale, if the locale isn't part of the path, the mapper is going to return the default external locale
    const internalLocale = path.split("/")[0];

    const externalLocale = useLocaleMap(internalLocale);

    useFocusTrap(navBarRef, "a[href], button:not([disabled]), input", dropdownOpen, dropdownContent);

    const data = usePluginData("docusaurus-plugin-navdata") as { socialMedia: Array<ISocialMedia>; navData: Array<INavData> };

    const navData =
        data.navData.find((x) => x.languageCode === externalLocale) ||
        data.navData.find((x) => x.languageCode === siteConfig.customFields.defaultExternalLocales);

    const handleClick = (title: string) => {
        if (title === current) {
            if (dropdownOpen) closeNavBarHandler();
            else setDropdownOpen(!dropdownOpen);
        } else {
            setCurrent(title);
        }

        if (navData && navData.navItems) {
            let currentContent: INavItem | undefined = navData.navItems.find((elem: INavItem) => elem?.title === title);
            currentContent && currentContent.title && currentContent.columns && currentContent.columns.length > 0 && setDropdown(currentContent);
        }
    };

    const setDropdown = (currentContent: INavItem) => {
        if (!dropdownOpen) setDropdownOpen(true);

        setDropdownContent(currentContent);
    };

    const handleKeyClose = (e: KeyboardEvent): void => {
        if (e.keyCode === 27) setDropdownOpen(false);
    };

    const closeNavBarHandler = () => {
        setDropdownOpen(false);
        setCurrent("");
    };

    function handleClickOutside(event: any) {
        if (dropdownParentRef && dropdownParentRef.current && !dropdownParentRef.current.contains(event.target)) closeNavBarHandler();
    }

    useEventListener("keydown", handleKeyClose);

    useEventListener("click", handleClickOutside);

    const getExternalLink = (path: string) => {
        const url = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
        return `${url}/${externalLocale}${path}`;
    };

    return (
        <div className={styles.wrapper}>
            <header ref={navBarRef} className={styles.navbar_wrapper}>
                <div className={`${styles.container} container`}>
                    <div className={`${styles.navbar} navBarSite`}>
                        {navData && navData.navItems && (
                            <>
                                {navData.logo && (
                                    <Link href={getExternalLink("/")}>
                                        <div className={styles.navbar_logo_container} dangerouslySetInnerHTML={{ __html: navData.logo }}></div>
                                    </Link>
                                )}
                                <nav className={styles.navbar_list} ref={dropdownParentRef}>
                                    <div className={styles.navbar_list_container}>
                                        {navData.navItems.map((item, i: number) => {
                                            return (
                                                <button
                                                    key={`navItem_${i}`}
                                                    id={`navItem_${i}`}
                                                    className={`${styles.navbar_list_item} ${item?.title === current ? styles.isActive : ""}`}
                                                    tabIndex={0}
                                                    onClick={() => {
                                                        handleClick(item.title || "");
                                                    }}
                                                >
                                                    <span>{item.title}</span>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M10.9822 2.57144H9.97778C9.90948 2.57144 9.84519 2.60492 9.80501 2.65983L6.0001 7.90448L2.19519 2.65983C2.15501 2.60492 2.09072 2.57144 2.02242 2.57144H1.01796C0.930903 2.57144 0.880011 2.67055 0.930903 2.74153L5.65322 9.2518C5.82465 9.48751 6.17555 9.48751 6.34564 9.2518L11.068 2.74153C11.1202 2.67055 11.0693 2.57144 10.9822 2.57144Z"
                                                            fill="#F4F4F4"
                                                        />
                                                    </svg>
                                                    {dropdownContent && dropdownContent && item && dropdownContent.title === item.title && dropdownOpen && (
                                                        <NavBarDropdown content={dropdownContent} locale={externalLocale} />
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </nav>
                            </>
                        )}
                        {navData && navData.searchPlaceholder && (
                            <Search
                                index={{
                                    name: `${siteConfig.customFields.siteAlgoliaIndexName}`,
                                    title: `${siteConfig.customFields.siteAlgoliaIndexName}`,
                                }}
                                locale={externalLocale}
                                placeholder={navData.searchPlaceholder}
                                siteUrl={siteConfig.customFields.siteUrl as string}
                            />
                        )}

                        {data && data.socialMedia && <SocialMedia socialMedia={data.socialMedia} />}
                        {/* Hide Log In button per Casper request on a meeting, since there's nothing to show if a users log in*/}
                        {/* {false && data.user && (
                            <div className={styles.login} onClick={login}>
                                <button>
                                    {header && <span className="halfTitleEyebrow noWrap">{header?.login_text}</span>}
                                    {icons.login}
                                </button>
                            </div>
                        )}
                        {user && (
                            <button>
                                <span className={styles.loggedIn}>
                                    {user.name} {user.email}
                                </span>
                                {icons.login}
                            </button>
                        )} */}
                    </div>
                </div>
            </header>
        </div>
    );
}
