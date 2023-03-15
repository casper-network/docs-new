import React from "react";
import styles from "./BlogTile.module.scss";
import { ISiteButtonProps, SiteButton } from "../../SiteButton";
import useWindowWidth from "../../../../hooks/useWindowWidth";

export interface IBlogTileProps {
    image: string;
    category: string;
    title: string;
    date: string;
    button: ISiteButtonProps;
    span: number;
}

export function BlogTile({ image, category, title, span, date, button }: IBlogTileProps) {
    const desktop = useWindowWidth(1025);
    return (
        <div className={`${styles.card} ${desktop ? `span-${span}` : ""}`}>
            <div className={`${styles.card_img}`}>
                <img src={image} alt={`BlogTile-${title}`} />
            </div>
            <div className={styles.card_content}>
                <div className={styles.text}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <p className="halfTitleEyebrow">{category}</p>
                        </div>
                    </div>
                    <div className={styles.paragraph}>
                        <h4>{title}</h4>
                    </div>
                </div>
                <div className={`${styles.buttonLearn}`}>
                    <SiteButton {...button} />
                    <div className={`${styles.date}`}>
                        <p className="halfTitleEyebrow"> {date} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
