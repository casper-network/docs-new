import React, { ChangeEventHandler } from "react";
import { useCallback } from "react";
import { useSearchBox } from "react-instantsearch-hooks-web";

export default function SearchBox({ placeholder }: any) {
    const memoizedSearch = useCallback((query: string, search: (p: string) => void) => {
        search(query);
    }, []);
    const { refine } = useSearchBox({
        queryHook: memoizedSearch,
    });
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event: any) => {
        refine(event.target.value);
    };
    return <input onChange={handleChange} placeholder={placeholder} />;
}
