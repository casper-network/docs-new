import IGroup from "src/plugins/docusaurus-plugin-navdata/src/interfaces/navbar/group";
import React from "react";
import styles from "./NavBarGroup.module.scss";
import NavBarLink from "./NavBarLink";

interface INavBarGroupProps extends IGroup {
    locale: string;
}
export default function NavBarGroup(props: INavBarGroupProps) {
    const { links, title, locale } = props;
    return (
        <div className={styles.linkGroup}>
            <span className="halfTitleEyebrow">{title}</span>
            <ul className={`primaryParagraph ${styles.linkList}`}>
                {links &&
                    links.map((link, i) => {
                        return <NavBarLink key={`column_group_link_${i}`} {...{ locale, ...link }} />;
                    })}
            </ul>
        </div>
    );
}
