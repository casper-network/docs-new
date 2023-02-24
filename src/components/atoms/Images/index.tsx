import React from "react";
import styles from "./styles.module.scss";

export interface IImagesProps {
    images: IImage[];
}

interface IImage {
    numberCol: "full" | "half" | "third";
    image: string;
    name: string;
}

export function Images({ images }: IImagesProps) {
    return (
        <section className={`${styles.images} containerSite`}>
            <div className={`${styles.images_content} contentBox`}>
                {images.map((data, index) => (
                    <div
                        className={`${styles.images_content_section} ${data.numberCol == "full" ? "span-12" : data.numberCol == "half" ? "span-6" : "span-4"} `}
                        key={index}
                    >
                        <img src={data.image} alt={data.name} />
                    </div>
                ))}
            </div>
        </section>
    );
}
