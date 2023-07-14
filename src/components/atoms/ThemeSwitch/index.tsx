import React from "react";
import icons from "../../../icons";
import styles from "./ThemeSwitch.module.scss";
function ThemeSwitch({ className, value, onChange }) {
    function handleThemeChange() {
        onChange(value === "light" ? "dark" : "light");
    }
    return (
        <div className={styles.switchWrapper}>
            <label htmlFor="switch" className={value === "light" ? styles.light : "dark"}>
                {value === "light" ? icons.sun : icons.moon}
            </label>
            <input id="switch" type="checkbox" aria-hidden="true" onChange={handleThemeChange}></input>
        </div>
    );
}

export default ThemeSwitch;
