import React from "react";
import { ImageAndTextBlock, IImageAndTextBlockProps } from "../ImageAndTextBlock";
import styles from "./FeatureSection.module.scss";
import { FeatureTile, IFeatureTiledProps } from "./FeatureTile";
import useWindowWidth from "../../../hooks/useWindowWidth";
import Section from "../../containers/Section";

interface IFeatureSectionProps {
    header: string;
    subheader?: string;
    tiles: IFeatureTiledProps[];
    imageAndTextBlock: IImageAndTextBlockProps;
}

export function FeatureSection({ header, subheader, tiles, imageAndTextBlock }: IFeatureSectionProps) {
    const desktop = useWindowWidth(1336);

    const multipleOfThree = (index: number) => {
        let tileIndex = index + 1;
        if (tileIndex % 3 == 0) {
            return true;
        } else {
            return false;
        }
    };

    const multipleOfTwo = (index: number) => {
        let tileIndex = index + 1;
        if (tileIndex % 2 == 0) {
            return true;
        } else {
            return false;
        }
    };

    const checkMultiplicity = (index: number) => {
        if ((desktop && multipleOfThree(index)) || (!desktop && multipleOfTwo(index))) return styles.border_none;
        else return "";
    };

    const lastTile = (index: number) => {
        const numberTiles = tiles.length;
        if (index + 1 == numberTiles) {
            return styles.border_none;
        } else return "";
    };

    return (
        <Section header={header} subheader={subheader}>
            <ImageAndTextBlock {...imageAndTextBlock} />
            <div className={`${styles.resource_content} containerSite`}>
                <section className={`contentBox ${styles.resource_content_box}`}>
                    {tiles.map((data, index) => (
                        <div
                            key={index}
                            className={`${styles.resource_content_card} ${desktop ? "span-4" : ""} ${checkMultiplicity(index)} ${lastTile(index)} `}
                        >
                            <FeatureTile {...data} />
                        </div>
                    ))}
                </section>
            </div>
        </Section>
    );
}
