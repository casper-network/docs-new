import React from "react";
import NavbarLayout from "@theme/Navbar/Layout";
import NavbarContent from "@theme/Navbar/Content";
import ExtendedNavbar from "./ExtendedNavbar";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Navbar() {
    const { siteConfig } = useDocusaurusContext();
    const { customFields } = siteConfig;
    return (
        <NavbarLayout>
            {customFields.directusUrl && customFields.directusGraphqlUrl && customFields.directusToken && customFields.siteUrl && <ExtendedNavbar />}
            <NavbarContent />
        </NavbarLayout>
    );
}
