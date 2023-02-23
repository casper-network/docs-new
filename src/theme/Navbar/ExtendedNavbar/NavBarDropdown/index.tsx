import INavItem from "src/plugins/docusaurus-plugin-navdata/src/interfaces/navbar/navItem";
import React from "react";
import NavBarColumn from "./NavBarColumn";
import styles from "./NavBarDropdown.module.scss";

interface INavBarDropdownProps {
    content: INavItem;
    locale: string;
}
export default function NavBarDropdown({ content, locale }: INavBarDropdownProps) {
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
