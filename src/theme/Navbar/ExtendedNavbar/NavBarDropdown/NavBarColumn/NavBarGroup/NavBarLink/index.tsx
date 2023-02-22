import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";
import ILink from "src/plugins/docusaurus-plugin-navdata/src/interfaces/navbar/link";
import styles from "./NavBarLink.module.scss";

interface INavBarLinkProps extends ILink {
    locale: string;
}

export default function NavBarLink(props: INavBarLinkProps) {
    const { siteConfig } = useDocusaurusContext();
    const { customFields } = siteConfig;
    const { title, url, type, children, locale } = props;

    const getLink = (path: string) => {
        const siteUrl = customFields.siteUrl as string;
        const url = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
        if (customFields.defaultExternalLocales === locale) {
            return `${url}${path}`;
        } else {
            return `${url}${locale}${path}`;
        }
    };
    const renderLink = (type: "internal" | "external", title: string, url: string) => {
        switch (type) {
            case "internal":
                return <a href={getLink(url)}>{title}</a>;

            case "external":
                return <a href={url}>{title}</a>;
            default:
                return <span>{title}</span>;
        }
    };

    return (
        <li className={styles.link}>
            <span>{renderLink(type, title, url)}</span>
            {children && (
                <ul className={styles.subLinkList}>
                    {children.map((subLink, i) => {
                        return <li key={`column_group_link_subLink_${subLink.title}_${i}`}>{renderLink(subLink!.type, subLink.title!, subLink.url)}</li>;
                    })}
                </ul>
            )}
        </li>
    );
}
