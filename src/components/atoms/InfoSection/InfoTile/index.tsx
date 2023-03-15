import React, { useEffect, useRef, useState } from "react";
import useWindowWidth from "../../../../hooks/useWindowWidth";
import styles from "./InfoTile.module.scss";

export interface IInfoTile {
    title: string;
    content: string;
    image: string;
    image_title: string;
}

export interface IInfoTileProps {
    tile: IInfoTile;
    span: number;
}

export default function InfoTile({ tile, span }: IInfoTileProps) {
    const { title, content, image, image_title } = tile;
    const isDesktop = useWindowWidth(1024);
    const ref = useRef(null);
    const [addAtribute, setAddAtribute] = useState<boolean>(false);

    useEffect(() => {
        const element = ref.current.scrollHeight;
        if (element > 120) {
            setAddAtribute(true);
        }
    }, []);

    return (
        <div className={`${styles.infoTileWrapper} ${isDesktop ? `span-${span}` : "span-6"}`}>
            {image && title && (
                <div className={styles.image}>
                    <img alt={image_title ? `InfoSection - ${image_title}` : `InfoSection - ${title}`} src={image} />
                </div>
            )}
            <h4 className={styles.title}>{title}</h4>
            <p className={`primaryParagraph ${styles.paragraph}`} ref={ref} tabIndex={addAtribute ? 0 : -1}>
                {content}
            </p>
        </div>
    );
}
