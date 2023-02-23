import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import { useHits, useSearchBox } from "react-instantsearch-hooks-web";
import useEventListener from "../../../../../hooks/useEventListener";
import SearchResult from "../SearchResult";
import useClickOutside from "../UseClickOutside";
import styles from "./styles.module.scss";

export default function SearchBox({ placeholder, locale, siteUrl }: any) {
    const refInput = useRef<HTMLInputElement>(null);
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const [showResults, setShowResults] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>("");

    let delayDebounceFn: NodeJS.Timeout;

    const memoizedSearch = useCallback((query: string, search: (p: string) => void) => {
        search(query);
    }, []);

    const { refine, clear } = useSearchBox({
        queryHook: memoizedSearch,
    });

    const { hits } = useHits({ escapeHTML: false });

    function handleChangeSearchTerm(e: React.ChangeEvent<HTMLInputElement>) {
        clearTimeout(delayDebounceFn);
        delayDebounceFn = setTimeout(() => {
            setShowResults(false);
            const value = e.target.value;
            setSearchTerm(value);

            if (value) {
                refine(value);
            } else {
                clear();
            }
        }, 500);
    }

    const handleKeyClose = (e: KeyboardEvent): void => {
        if (e.keyCode === 27) resetState();
    };

    function resetState() {
        setSearchTerm("");
        clearInput("inputSearch");
    }

    useEffect(() => {
        // -- Only true if search term has a value
        // -- Avoid to show the empty results
        setShowResults(searchTerm ? true : false);
    }, [hits]);

    useEventListener("keydown", handleKeyClose);

    useClickOutside(refInput, (isInside: boolean) => setHasFocus(isInside));

    function clearInput(elemId: string) {
        (document.getElementById(elemId) as HTMLInputElement).value = "";
        setSearchTerm("");
        setShowResults(false);
    }
    return (
        <div ref={refInput} tabIndex={-1} className={styles.container} onFocus={() => setHasFocus(true)}>
            <input
                id="inputSearch"
                tabIndex={0}
                className={styles.container_input}
                onChange={handleChangeSearchTerm}
                placeholder={placeholder}
                autoComplete="off"
            />
            <span className={styles.container_icon_search}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.6499 19.8884L14.6937 12.9321C15.7731 11.5366 16.3571 9.83036 16.3571 8.03571C16.3571 5.8875 15.5187 3.87321 14.0026 2.35446C12.4865 0.835714 10.4669 0 8.32136 0C6.17582 0 4.15618 0.838393 2.64011 2.35446C1.12136 3.87054 0.285645 5.8875 0.285645 8.03571C0.285645 10.1812 1.12404 12.2009 2.64011 13.717C4.15618 15.2357 6.17314 16.0714 8.32136 16.0714C10.116 16.0714 11.8196 15.4875 13.2151 14.4107L20.1714 21.3643C20.1918 21.3847 20.216 21.4009 20.2426 21.4119C20.2693 21.423 20.2979 21.4287 20.3267 21.4287C20.3556 21.4287 20.3841 21.423 20.4108 21.4119C20.4375 21.4009 20.4617 21.3847 20.4821 21.3643L21.6499 20.1991C21.6703 20.1787 21.6865 20.1545 21.6976 20.1278C21.7086 20.1012 21.7143 20.0726 21.7143 20.0438C21.7143 20.0149 21.7086 19.9863 21.6976 19.9597C21.6865 19.933 21.6703 19.9088 21.6499 19.8884ZM12.5642 12.2786C11.4285 13.4116 9.92314 14.0357 8.32136 14.0357C6.71957 14.0357 5.21422 13.4116 4.0785 12.2786C2.94547 11.1429 2.32136 9.6375 2.32136 8.03571C2.32136 6.43393 2.94547 4.92589 4.0785 3.79286C5.21422 2.65982 6.71957 2.03571 8.32136 2.03571C9.92314 2.03571 11.4312 2.65714 12.5642 3.79286C13.6973 4.92857 14.3214 6.43393 14.3214 8.03571C14.3214 9.6375 13.6973 11.1455 12.5642 12.2786Z"
                        fill="#F4F4F4"
                    />
                </svg>
            </span>
            {searchTerm && (
                <button className={styles.container_icon_cancel} onClick={() => clearInput("inputSearch")}>
                    <svg width="20" height="20" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.8499 16L27.2249 4.82504C27.3821 4.63932 27.2499 4.35718 27.0071 4.35718H24.1571C23.9892 4.35718 23.8285 4.43218 23.7178 4.56075L15.9857 13.7786L8.25351 4.56075C8.14637 4.43218 7.98565 4.35718 7.81422 4.35718H4.96422C4.72137 4.35718 4.58922 4.63932 4.74637 4.82504L14.1214 16L4.74637 27.175C4.71116 27.2164 4.68858 27.2671 4.6813 27.3209C4.67401 27.3748 4.68233 27.4296 4.70527 27.4788C4.72821 27.5281 4.7648 27.5697 4.8107 27.5988C4.8566 27.6279 4.90989 27.6432 4.96422 27.6429H7.81422C7.98208 27.6429 8.1428 27.5679 8.25351 27.4393L15.9857 18.2215L23.7178 27.4393C23.8249 27.5679 23.9857 27.6429 24.1571 27.6429H27.0071C27.2499 27.6429 27.3821 27.3608 27.2249 27.175L17.8499 16Z"
                            fill="#f4f4f4"
                        />
                    </svg>
                </button>
            )}
            {hasFocus && showResults && <SearchResult locale={locale} siteUrl={siteUrl} hits={hits}></SearchResult>}
        </div>
    );
}
