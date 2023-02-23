import INavItem from "src/plugins/docusaurus-plugin-navdata/src/interfaces/navbar/navItem";
import React, { useEffect, useRef, useState } from "react";
import NavBarColumn from "./NavBarColumn";
import styles from "./NavBarDropdown.module.scss";

interface INavBarDropdownProps {
    content: INavItem;
    locale: string;
}
export default function NavBarDropdown({ content, locale }: INavBarDropdownProps) {
    console.log(content);
    /* useEffect(() => {
        document.body.classList.add("dropdownOpen");
        return () => {
            document.body.classList.remove("dropdownOpen");
            document.body.classList.add("dropdownIsClosing");

            setTimeout(() => {
                document.body.classList.remove("dropdownIsClosing");
            }, 200);
        };
    }, []); */

    return (
        <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
            <div className={styles.dropdown}>
                {content.columns &&
                    content.columns.map((column, i) => {
                        return <NavBarColumn key={`column_${i}`} {...{ locale, ...column }} />;
                    })}
            </div>
        </div>
    );
}
