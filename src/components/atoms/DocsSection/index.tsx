import React from "react";
import styles from "./DocsSection.module.scss";
import { DocsTile, IDocsTileProps } from "./DocsTile";
import useWindowWidth from "../../../hooks/useWindowWidth";

export interface IDocsSectionProps {
    header: string;
    subheader: string;
    tiles: Array<IDocsTileProps>;
}

export function DocsSection({ header, subheader, tiles }: IDocsSectionProps) {
    const desktop = useWindowWidth(1401);
    return (
        <section className={`${styles.docstiles} containerSite`}>
            <div className={`${styles.docstiles_content_text} contentBox`}>
                <div className={`${styles.docstiles_content_text_span} span-12`}>
                    <h2>{header}</h2>
                    <p className="primaryParagraph">{subheader}</p>
                </div>
            </div>
            <div className={`${styles.docstiles_content} contentBox`}>
                {tiles.map((data: any, index: number) => (
                    <section className={`${styles.docstiles_content_container} ${desktop && "span-4"}`} key={`section-${index}`}>
                        <DocsTile {...data} />
                    </section>
                ))}
            </div>
        </section>
    );
}
