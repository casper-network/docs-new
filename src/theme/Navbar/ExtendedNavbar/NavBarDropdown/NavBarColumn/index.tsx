import IColumn from "src/plugins/docusaurus-plugin-navdata/src/interfaces/navbar/column";
import React from "react";
import styles from "./NavBarColumn.module.scss";
import NavBarGroup from "./NavBarGroup";

interface INavBarColumnProps extends IColumn {
    locale: string;
}
export default function NavBarColumn(props: INavBarColumnProps) {
    const { groups, locale } = props;
    return (
        <div className={styles.dropdown_column}>
            {groups &&
                groups.map((group, i) => {
                    return <NavBarGroup key={`column_group_${i}`} {...{ locale, ...group }} />;
                })}
        </div>
    );
}
