import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import algoliasearch from "algoliasearch/lite";
import { createRef, default as React, useState, useMemo } from "react";
import { Configure, InstantSearch } from "react-instantsearch-hooks-web";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import useClickOutside from "./UseClickOutside";

interface ISearchProps {
    index: {
        name: string;
        title: string;
    };
    locale: string;
    placeholder: string;
    siteUrl: string;
}

const theme = {
    foreground: "#050505",
    background: "white",
    faded: "#888",
};

export default function Search({ index, placeholder, locale, siteUrl }: ISearchProps) {
    const { siteConfig } = useDocusaurusContext();

    const searchClient = useMemo(
        () => algoliasearch(siteConfig.customFields.siteAlgoliaAppId as string, siteConfig.customFields.siteAlgoliaApiKey as string),
        [],
    );

    return (
        <InstantSearch searchClient={searchClient} indexName={index.name}>
            <Configure hitsPerPage={20} filters={`locale:'${locale.toLocaleLowerCase()}'`}></Configure>
            <SearchBox placeholder={placeholder}></SearchBox>
            <SearchResult locale={locale} siteUrl={siteUrl}></SearchResult>
        </InstantSearch>
    );
}
