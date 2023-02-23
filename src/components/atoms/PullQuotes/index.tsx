import React from "react";
import styles from "./PullQuotes.module.scss";

export interface IPullQuoteProps {
    image: string;
    paragraph: string;
    name: string;
    description: string;
}

export function PullQuotes({ image, paragraph, name, description }: IPullQuoteProps) {
    return (
        <div className={`container`}>
            <div className={`contentBox`}>
                <div className={`${styles.pullquotes} span-12`}>
                    <div className={`${styles.card}`}>
                        <div className={styles.image}>
                            <img src={image} />
                        </div>
                        <div className={styles.text}>
                            <div className={styles.paragraph}>
                                <h3>{paragraph}</h3>
                            </div>
                            <div className={styles.autor}>
                                <p className={`${styles.autorname} halfTitleEyebrow`}>{name}</p>
                                <p className={`primaryParagraph`}>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
