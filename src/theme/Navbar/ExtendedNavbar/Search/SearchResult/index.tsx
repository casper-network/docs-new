import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import * as React from "react";
import { useHits } from "react-instantsearch-hooks-web";

interface ISearchResultProps {
    locale: string;
    siteUrl: string;
}

export default function SearchResult({ locale, siteUrl }: ISearchResultProps) {
    const { hits } = useHits({});
    const { siteConfig } = useDocusaurusContext();
    const { customFields } = siteConfig;

    const getLink = (hit) => {
        const url = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
        if (customFields.defaultExternalLocales === locale) {
            return `${url}${hit.path}`;
        } else {
            return `${url}${locale}${hit.path}`;
        }
    };

    return (
        <>
            {hits.map((hit, i) => (
                <div key={`linkwrapper-${i}`}>
                    <a href={getLink(hit)}>{hit.title as string}</a>
                </div>
            ))}
        </>
    );
}
