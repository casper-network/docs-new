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
        <div className={`containerSite`}>
            <div className={`contentBox`}>
                <div className={`${styles.pullquotes} span-12`}>
                    <div className={`${styles.card}`}>
                        <div className={styles.image}>
                            <img src={image} alt={`PullQuotesAutor-${name}`} />
                        </div>
                        <div className={styles.text}>
                            <div className={styles.paragraph}>
                                <h3 dangerouslySetInnerHTML={{ __html: paragraph! }}></h3>
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
