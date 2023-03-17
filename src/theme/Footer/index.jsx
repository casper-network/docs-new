import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import FooterLinks from "@theme/Footer/Links";
import FooterLogo from "@theme/Footer/Logo";
import FooterCopyright from "@theme/Footer/Copyright";
import FooterLayout from "@theme/Footer/Layout";
import ExtendedFooter from "./ExtendedFooter";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Footer() {
    const { footer } = useThemeConfig();
    console.log(footer);
    if (!footer) {
        return null;
    }
    const { copyright, links, logo, style } = footer;

    const { siteConfig } = useDocusaurusContext();
    const { customFields } = siteConfig;
    return (
        <div>
            {customFields.directusUrl && customFields.directusGraphqlUrl && customFields.siteUrl && <ExtendedFooter />}
            <FooterLayout
                style={style}
                links={links && links.length > 0 && <FooterLinks links={links} />}
                logo={logo && <FooterLogo logo={logo} />}
                copyright={copyright && <FooterCopyright copyright={copyright} />}
            />
        </div>
    );
}
export default React.memo(Footer);
