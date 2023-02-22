import ISocialMedia from "src/plugins/docusaurus-plugin-navdata/src/interfaces/navbar/socialMedia";
import React from "react";
import styles from "./SocialMedia.module.scss";

interface ISocialMediaProps {
    socialMedia: Array<ISocialMedia>;
}

function SocialMedia(props: ISocialMediaProps) {
    const { socialMedia } = props;
    return (
        <div className={styles.socialIconsContainer}>
            {socialMedia &&
                socialMedia.map((social) => {
                    return (
                        <a key={social.name} href={social.url!}>
                            <div dangerouslySetInnerHTML={{ __html: social.icon }} className={styles.tileCard_img}></div>
                        </a>
                    );
                })}
        </div>
    );
}

export default SocialMedia;
