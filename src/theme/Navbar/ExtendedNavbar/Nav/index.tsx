import React from "react";
import styles from "./Nav.module.scss";
import NavBarDropdown from "../NavBarDropdown";
import icons from "../../../../icons";
import INavItem from "../../../../plugins/docusaurus-plugin-navdata/src/interfaces/navbar/navItem";
import INavData from "../../../../plugins/docusaurus-plugin-navdata/src/interfaces/navbar/navData";

interface INav {
    dropdownParentRef: React.RefObject<HTMLElement>;
    header: INavData;
    handleClick: (title: string) => void;
    dropdownContent: INavItem | null;
    dropdownOpen: Boolean;
    current: string;
    locale: string;
}

function Nav({ dropdownParentRef, header, handleClick, dropdownContent, dropdownOpen, current, locale }: INav) {
    return (
        <nav className={styles.navbar_list} ref={dropdownParentRef}>
            <div className={styles.navbar_list_container}>
                {header.navItems.map((item, i: number) => {
                    return (
                        <div className={styles.navbar_list_container_button} key={`navItem_${i}`}>
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
                                {icons.chevronDown}
                            </button>
                            {dropdownContent && dropdownContent.title && item && dropdownContent.title === item.title && dropdownOpen && (
                                <NavBarDropdown content={dropdownContent} locale={locale} />
                            )}
                        </div>
                    );
                })}
            </div>
        </nav>
    );
}

export default Nav;
