import React from "react";

import { Button } from "../../atoms";

import styles from "./Hero.module.scss";

export interface HeroProps {
    title?: string;
    subTitle?: string;
    actionLabel?: string;
    actionTo?: string;
    children?: React.ReactNode;
}

export const Hero = (props: HeroProps) => {
    return (
        <div className={styles.heroContainer}>
            <img className={styles.heroBg} src="/icon/curves.svg" />
            <h1>{props.title}</h1>
            <h4>{props?.subTitle}</h4>
            <Button className={styles.actionBtn} label={props.actionLabel} to={props.actionTo} />
            {!!props.children && <div className={styles.content}>{props.children}</div>}
        </div>
    );
};
