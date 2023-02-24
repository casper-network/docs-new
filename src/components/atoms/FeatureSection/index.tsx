import React from "react";
import { ImageAndTextBlock, IImageAndTextBlockProps } from "../ImageAndTextBlock";
import styles from "./FeatureSection.module.scss";
import { FeatureTile, IFeatureTiledProps } from "./FeatureTile";
import useWindowWidth from "../../../hooks/useWindowWidth";

interface IFeatureSectionProps {
    header: string;
    subheader?: string;
    tiles: IFeatureTiledProps[];
    imageAndTextBlock: IImageAndTextBlockProps;
}

export function FeatureSection({ header, subheader, tiles, imageAndTextBlock }: IFeatureSectionProps) {
    const desktop = useWindowWidth(1401);
    return (
        <section className={`${styles.feature} containerSite`}>
            <section className={`${styles.feature_content} contentBox`}>
                <div className={`${styles.feature_content_title} span-12`}>
                    <h2>{header}</h2>
                    {subheader && <p className="primaryParagraph">{subheader}</p>}
                </div>
            </section>
            <ImageAndTextBlock {...imageAndTextBlock} />
            <section className={`${styles.resource_content} contentBox`}>
                {tiles.map((data, index) => (
                    <div key={index} className={`${styles.resource_content_card} ${desktop && "span-4"}`}>
                        <FeatureTile {...data} />
                    </div>
                ))}
            </section>
        </section>
    );
}
