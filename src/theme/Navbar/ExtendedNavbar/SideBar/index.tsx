import React from "react";
import Search from "../Search";
import SocialMedia from "../SocialMedia";
import Nav from "../Nav";
import styles from "./SideBar.module.scss";
import INavData from "../../../../plugins/docusaurus-plugin-navdata/src/interfaces/navbar/navData";
import INavItem from "../../../../plugins/docusaurus-plugin-navdata/dist/interfaces/navbar/navItem";
import ISocialMedia from "../../../../plugins/docusaurus-plugin-navdata/dist/interfaces/navbar/socialMedia";

interface ISidebar {
    sidebarOpen: boolean;
    header: INavData | undefined;
    currentLocale: string;
    dropdownParentRef: React.RefObject<HTMLElement>;
    handleClick: (title: string) => void;
    dropdownContent: INavItem | null;
    dropdownOpen: boolean;
    current: string;
    siteConfig: any;
    socialMedia: ISocialMedia[];
}

function Sidebar({
    sidebarOpen,
    header,
    dropdownParentRef,
    handleClick,
    dropdownContent,
    dropdownOpen,
    current,
    siteConfig,
    socialMedia,
    currentLocale,
}: ISidebar) {
    return (
        <section className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarClose : ""}`}>
            <div className={styles.sidebar_container}>
                {header && header.searchPlaceholder && (
                    <Search
                        index={{
                            name: `${siteConfig.customFields.siteAlgoliaIndexName}`,
                            title: `${siteConfig.customFields.siteAlgoliaIndexName}`,
                        }}
                        locale={currentLocale}
                        placeholder={header.searchPlaceholder}
                        siteUrl={siteConfig.customFields.siteUrl as string}
                    />
                )}
                {header && header.navItems && (
                    <section className={styles.sidebar_container_nav}>
                        <Nav
                            dropdownParentRef={dropdownParentRef}
                            header={header}
                            handleClick={handleClick}
                            dropdownContent={dropdownContent}
                            dropdownOpen={dropdownOpen}
                            current={current}
                            locale={currentLocale}
                        />
                    </section>
                )}
            </div>
            <section className={styles.sidebar_social}>
                <SocialMedia socialMedia={socialMedia} />
            </section>
        </section>
    );
}

export default Sidebar;
