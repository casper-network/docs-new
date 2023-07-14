import React from "react";
import { useColorMode, useThemeConfig } from "@docusaurus/theme-common";
import ThemeSwitch from "../../../components/atoms/ThemeSwitch";
export default function NavbarColorModeToggle({ className }) {
    const disabled = useThemeConfig().colorMode.disableSwitch;
    const { colorMode, setColorMode } = useColorMode();
    if (disabled) {
        return null;
    }
    return <ThemeSwitch className={className} value={colorMode} onChange={setColorMode} />;
}
