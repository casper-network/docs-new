import React from "react";
import icons from "../../../icons";
import styles from "./ThemeSwitch.module.scss";
import { useColorMode, useThemeConfig } from "@docusaurus/theme-common";
function ThemeSwitch() {
    const disabled = useThemeConfig().colorMode.disableSwitch;
    const { colorMode, setColorMode } = useColorMode();
    if (disabled) {
        return null;
    }
    function handleThemeChange() {
        setColorMode(colorMode === "light" ? "dark" : "light");
    }
    return (
        <div className={styles.switchWrapper}>
            <label htmlFor="switch" className={colorMode === "light" ? styles.light : "dark"}>
                {colorMode === "light" ? icons.sun : icons.moon}
            </label>
            <input id="switch" type="checkbox" aria-hidden="true" onChange={handleThemeChange}></input>
        </div>
    );
}

export default ThemeSwitch;
