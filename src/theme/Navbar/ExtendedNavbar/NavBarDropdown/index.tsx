import INavItem from "src/plugins/docusaurus-plugin-navdata/src/interfaces/navbar/navItem";
import React, { useEffect, useRef, useState } from "react";
import NavBarColumn from "./NavBarColumn";
import styles from "./NavBarDropdown.module.scss";

interface INavBarDropdownProps extends INavItem {
    setDropdownOpen: any;
    setCurrentSubSection?: any;
    position: any;
    locale: string;
}
export default function NavBarDropdown({ columns, setCurrentSubSection, setDropdownOpen, position, locale }: INavBarDropdownProps) {
    useEffect(() => {
        document.body.classList.add("dropdownOpen");
        return () => {
            document.body.classList.remove("dropdownOpen");
            document.body.classList.add("dropdownIsClosing");

            setTimeout(() => {
                document.body.classList.remove("dropdownIsClosing");
            }, 200);
        };
    }, []);

    return (
        <div className={styles.wrapper} style={{ [`--position` as string]: `${position}px` }}>
            <div className={styles.dropdown}>
                {columns.map((column, i) => {
                    return <NavBarColumn key={`column_${i}`} {...{ locale, ...column }} />;
                })}
            </div>
        </div>
    );
}
