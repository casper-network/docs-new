import { usePluginData } from "@docusaurus/useGlobalData";
import ISocialMedia from "../../../plugins/docusaurus-plugin-navdata/src/interfaces/navbar/socialMedia";
import INavData from "../../../plugins/docusaurus-plugin-navdata/src/interfaces/navbar/navData";
import IFooterData from "../../../plugins/docusaurus-plugin-navdata/src/interfaces/navbar/footerData";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useLocaleMap from "../../../hooks/useLocaleMap";
import { useLocation } from "@docusaurus/router";
import React from "react";

export default function ExtendedFooter() {
    console.log("HOLA");
    const location = useLocation();
    const { siteConfig } = useDocusaurusContext();
    const baseUrl = siteConfig.customFields.baseUrl as string;
    const siteUrl = siteConfig.customFields.siteUrl as string;
    // -- Remove the base url from the location
    const path = location.pathname.replace(baseUrl, "");

    // -- Take the locale, if the locale isn't part of the path, the mapper is going to return the default external locale
    const internalLocale = path.split("/")[0];

    const externalLocale = useLocaleMap(internalLocale);
    const data = usePluginData("docusaurus-plugin-navdata") as { socialMedia: Array<ISocialMedia>; navData: Array<INavData>; footerData: Array<IFooterData> };
    const footerData =
        data.footerData.find((x) => x.languageCode === externalLocale) ||
        data.footerData.find((x) => x.languageCode === siteConfig.customFields.defaultExternalLocales);
    return <div></div>;
}
