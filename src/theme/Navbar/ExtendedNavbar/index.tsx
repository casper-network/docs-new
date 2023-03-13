import React, { useRef, useState } from "react";
import styles from "./ExtendedNavbar.module.scss";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { useLocation } from "@docusaurus/router";
import useLocaleMap from "../../../hooks/useLocaleMap";
import { usePluginData } from "@docusaurus/useGlobalData";
import ISocialMedia from "../../../plugins/docusaurus-plugin-navdata/src/interfaces/navbar/socialMedia";
import INavData from "../../../plugins/docusaurus-plugin-navdata/src/interfaces/navbar/navData";
import SocialMedia from "./SocialMedia";
import Search from "./Search";
import INavItem from "../../../plugins/docusaurus-plugin-navdata/src/interfaces/navbar/navItem";
import useEventListener from "../../../hooks/useEventListener";
import useFocusTrap from "../../../hooks/useFocusTrap";
import Link from "@docusaurus/Link";
import icons from "../../../icons";
import useWindowWidth from "../../../hooks/useWindowWidth";
import Nav from "./Nav";
import Sidebar from "./SideBar";

export default function ExtendedNavbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownContent, setDropdownContent] = useState<INavItem | null>(null);
    const [current, setCurrent] = useState<string>("");
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const { siteConfig } = useDocusaurusContext();
    const navBarRef = useRef<HTMLHeadingElement>(null);
    const dropdownParentRef = useRef<HTMLElement>(null);

    const isDesktop = useWindowWidth(997);

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

    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    function handleClickOutside(event: any) {
        if (dropdownParentRef && dropdownParentRef.current && !dropdownParentRef.current.contains(event.target)) closeNavBarHandler();
    }

    useEventListener("keydown", handleKeyClose);

    useEventListener("click", handleClickOutside);

    const getExternalLink = (path: string) => {
        const url = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
        const truncatedPath = path.startsWith("/") ? path.slice(1) : path;
        if (siteConfig.customFields.defaultExternalLocales === externalLocale) {
            return `${url}/${truncatedPath}`;
        } else {
            return `${url}/${externalLocale}/${truncatedPath}`;
        }
    };

    return (
        <div className={styles.wrapper}>
            <header ref={navBarRef} className={styles.navbar_wrapper}>
                <div className={`${styles.container} containerSite`}>
                    <div className={`${styles.navbar}`}>
                        {navData && navData.navItems && (
                            <>
                                <div className={styles.navBarSectionBeginning}>
                                    {navData.logo && (
                                        <div className={styles.navbar_logo_container}>
                                            <Link href={getExternalLink("/")} onClick={() => closeNavBarHandler()}>
                                                <div dangerouslySetInnerHTML={{ __html: navData.logo }}></div>
                                            </Link>
                                        </div>
                                    )}
                                    {isDesktop && navData && navData.navItems && (
                                        <Nav
                                            dropdownParentRef={dropdownParentRef}
                                            header={navData}
                                            handleClick={handleClick}
                                            dropdownContent={dropdownContent}
                                            dropdownOpen={dropdownOpen}
                                            current={current}
                                            locale={externalLocale}
                                        />
                                    )}
                                </div>
                                {isDesktop ? (
                                    <>
                                        <div className={styles.navBarSectionEnd}>
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
                                        </div>
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
                                    </>
                                ) : (
                                    <div className={styles.icon} onClick={handleSidebar}>
                                        <div className={`${styles.icon_cancel} ${!sidebarOpen ? styles.icon_cancel_none : ""}`}>{icons.cancel}</div>
                                        <div className={`${styles.icon_menu} ${sidebarOpen ? styles.icon_menu_none : ""}`}>{icons.menu}</div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </header>
            {!isDesktop && (
                <Sidebar
                    sidebarOpen={sidebarOpen}
                    header={navData}
                    currentLocale={externalLocale}
                    dropdownParentRef={dropdownParentRef}
                    handleClick={handleClick}
                    dropdownContent={dropdownContent}
                    dropdownOpen={dropdownOpen}
                    current={current}
                    siteConfig={siteConfig}
                    socialMedia={data.socialMedia}
                />
            )}
        </div>
    );
}