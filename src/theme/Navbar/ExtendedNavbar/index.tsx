import React, { useEffect, useState } from "react";
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

export default function ExtendedNavbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownContent, setDropdownContent] = useState<any | null>(null);
    const [positionDropdown, setPositionDropdown] = useState<number | undefined>(0);
    const { siteConfig } = useDocusaurusContext();

    const location = useLocation();

    const baseUrl = siteConfig.customFields.baseUrl as string;
    // -- Remove the base url from the location
    const path = location.pathname.replace(baseUrl, "");
    // -- Take the locale, if the locale isn't part of the path, the mapper is going to return the default external locale
    const internalLocale = path.split("/")[0];

    const externalLocale = useLocaleMap(internalLocale);

    const data = usePluginData("docusaurus-plugin-navdata") as { socialMedia: Array<ISocialMedia>; navData: Array<INavData> };

    const navData =
        data.navData.find((x) => x.languageCode === externalLocale) ||
        data.navData.find((x) => x.languageCode === siteConfig.customFields.defaultExternalLocales);

    const handleClick = (title: string, currentElement: string) => {
        if (!currentElement) return;
        let currentContent = navData.navItems.find((elem) => elem.title === title);
        currentContent && setDropdown(currentContent);
        const elem = document.getElementById(currentElement);
        setPositionDropdown(elem?.getBoundingClientRect().left);
    };

    const setDropdown = (current: any) => {
        if (current.name === dropdownContent?.name) {
            setDropdownOpen(false);
        }

        if (!dropdownOpen) {
            setDropdownOpen(true);
        }
        setDropdownContent(current);
    };

    const handleKeyClose = (e: KeyboardEvent): void => {
        if (e.keyCode === 27) setDropdownOpen(false);
    };

    // useEventListener("keydown", handleKeyClose);

    return (
        <header className={styles.wrapper}>
            <div className={`${styles.container} container`}>
                <div className={`${styles.navbar} navBar`}>
                    <>
                        {navData.logo && <div className={styles.logo} dangerouslySetInnerHTML={{ __html: navData.logo }}></div>}
                        <nav className={styles.navbar_list}>
                            {navData.navItems.map((item, i) => {
                                return (
                                    <button
                                        key={`navItem_${i}`}
                                        id={`navItem_${i}`}
                                        className={styles.navbar_list_item}
                                        tabIndex={0}
                                        onClick={() => handleClick(item.title || "", `navItem_${i}`)}
                                    >
                                        <span>{item.title}</span>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.9822 2.57144H9.97778C9.90948 2.57144 9.84519 2.60492 9.80501 2.65983L6.0001 7.90448L2.19519 2.65983C2.15501 2.60492 2.09072 2.57144 2.02242 2.57144H1.01796C0.930903 2.57144 0.880011 2.67055 0.930903 2.74153L5.65322 9.2518C5.82465 9.48751 6.17555 9.48751 6.34564 9.2518L11.068 2.74153C11.1202 2.67055 11.0693 2.57144 10.9822 2.57144Z"
                                                fill="#F4F4F4"
                                            />
                                        </svg>
                                        {dropdownContent && dropdownOpen && (
                                            <NavBarDropdown
                                                columns={item.columns}
                                                title={item.title}
                                                setDropdownOpen={setDropdownOpen}
                                                position={positionDropdown}
                                                locale={externalLocale}
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </nav>
                    </>

                    <div className={styles.search}>
                        <Search
                            index={{
                                name: `${siteConfig.customFields.siteAlgoliaIndexName}`,
                                title: `${siteConfig.customFields.siteAlgoliaIndexName}`,
                            }}
                            locale={externalLocale}
                            placeholder={navData.searchPlaceholder!}
                            siteUrl={siteConfig.customFields.siteUrl as string}
                        />
                    </div>

                    <SocialMedia socialMedia={data.socialMedia} />

                    {/* {!user && (
                        <div className={styles.login} onClick={login}>
                            <button>
                                {header && <span className="halfTitleEyebrow">{header.login_text}</span>}
                                <Icons icon={iconType.login} />
                            </button>
                        </div>
                    )}
                    {user && (
                        <button>
                            <span className={styles.loggedIn}>
                                {user.name} {user.email}
                            </span>
                            <Icons icon={iconType.login} />
                        </button>
                    )} */}
                </div>
            </div>
        </header>
    );
}
