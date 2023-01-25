const docsOnlyMode = process.env.DOCS_MODE || true;
const routePrefix = !docsOnlyMode ? "docs" : "";

module.exports = {
    title: "",
    logo: {
        alt: "Casper Logo",
        src: "/icon/Casper_Wordmark_Red_RGB.png",
        srcDark: "/icon/Casper_Wordmark_White_RGB.png",
    },
    // hideOnScroll: true,
    items: [
        {
            to: `${routePrefix}/concepts`,
            activeBasePath: "${routePrefix}/concepts",
            label: "Concepts",
            position: "left",
        },
        {
            to: `${routePrefix}/workflow`,
            activeBasePath: `${routePrefix}/workflow`,
            label: "How To's",
            position: "left",
        },
        {
            to: `${routePrefix}/dapp-dev-guide`,
            activeBasePath: `${routePrefix}/dapp-dev-guide`,
            label: "Developers",
            position: "left",
        },
        {
            to: `${routePrefix}/operators`,
            activeBasePath: `${routePrefix}/operators`,
            label: "Operators",
            position: "left",
        },
        {
            to: `${routePrefix}/design`,
            activeBasePath: `${routePrefix}/design`,
            label: "Design",
            position: "left",
        },
        {
            to: `${routePrefix}/economics`,
            activeBasePath: `${routePrefix}/economics`,
            label: "Economics",
            position: "left",
        },
        {
            to: `${routePrefix}/staking`,
            activeBasePath: `${routePrefix}/staking`,
            label: "Staking",
            position: "left",
        },
        {
            to: `${routePrefix}/glossary`,
            activeBasePath: `${routePrefix}/glossary`,
            label: "Glossary",
            position: "left",
        },
        {
            to: `${routePrefix}/faq`,
            activeBasePath: `${routePrefix}/faq`,
            label: "FAQ",
            position: "left",
        },
        {
            href: "https://discord.com/invite/Q38s3Vh",
            label: "Chat",
        },
        {
            type: "localeDropdown",
            position: "right",
        },
        // Remove comment to show version control item
        // {
        //     type: "docsVersionDropdown",
        //     position: "right",
        //     dropdownActiveClassDisabled: true,
        //     dropdownItemsAfter: [
        //         {
        //             to: "/versions",
        //             label: "All versions",
        //         },
        //     ],
        // },
        {
            href: "https://github.com/casper-network/docs-app",
            label: "GitHub",
            position: "right",
        },
    ],
};
