import React from "react";
import styles from "./SocialSection.module.scss";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { ISocialTileProps, SocialTile } from "./SocialTile";

interface ISocialSectionProps {
    header: string;
    subheader: string;
    tiles: ISocialTileProps[];
}

export function SocialSection({ header, subheader, tiles }: ISocialSectionProps) {
    const desktop = useWindowWidth(1390);
    return (
        <section className={`${styles.socialtiles} container`}>
            <div className={`${styles.socialtiles_content} contentBox`}>
                <div className={`${styles.socialtiles_content_text} span-12`}>
                    <h2>{header}</h2>
                    <p className="primaryParagraph">{subheader}</p>
                </div>
            </div>
            <div className={`${styles.socialtiles_content_tiles} contentBox`}>
                {tiles.map((data: any, index: number) => (
                    <section className={`${styles.socialtiles_content_tiles_container} ${desktop && "span-4"}`} key={`section-${index}`}>
                        <SocialTile {...data} />
                    </section>
                ))}
            </div>
        </section>
    );
}
