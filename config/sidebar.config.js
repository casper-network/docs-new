const { items } = require("./navbar.config");

module.exports = {
    workflow: [
        "workflow/index",
        {
            type: "category",
            label: "Operator How To's",
            collapsible: true,
            collapsed: true,
            items: ["workflow/operators/index", "workflow/operators/setup-private-network", "workflow/operators/staging-files-for-new-network"],
        },
        {
            type: "category",
            label: "Developer How To's",
            collapsible: true,
            collapsed: true,
            items: ["workflow/developers/index"],
        },
    ],
    concepts: [
        "concepts/index",
        "concepts/intro-to-dapps",
        "concepts/accounts-and-keys",
        "concepts/understanding-hash-types",
        "concepts/deploy-and-deploy-lifecycle",
        "concepts/global-state",
        "concepts/session-code",
        "concepts/smart-contracts",
        "concepts/dictionaries",
        {
            type: "category",
            label: "Design",
            collapsible: true,
            collapsed: true,
            items: ["design/casper-design", "design/highway", "design/p2p", "design/reading-and-writing-to-the-blockchain"],
        },
        {
            type: "category",
            label: "Economics",
            collapsible: true,
            collapsed: true,
            items: ["economics/index", "economics/consensus", "economics/runtime", "economics/gas-concepts", "economics/delegation", "staking/index"],
        },
        {
            type: "category",
            label: "Glossary",
            collapsible: true,
            collapsed: true,
            items: [
                "glossary/index",
                "glossary/A",
                "glossary/B",
                "glossary/C",
                "glossary/D",
                "glossary/E",
                "glossary/F",
                "glossary/G",
                "glossary/H",
                "glossary/I",
                "glossary/J",
                "glossary/K",
                "glossary/L",
                "glossary/M",
                "glossary/N",
                "glossary/O",
                "glossary/P",
                "glossary/Q",
                "glossary/R",
                "glossary/S",
                "glossary/T",
                "glossary/U",
                "glossary/V",
                "glossary/W",
                "glossary/X",
                "glossary/Y",
                "glossary/Z",
            ],
        },
    ],
    resources: [
        "resources/index",
        "resources/quick-start",
        "resources/sample-projects",
        {
            type: "category",
            label: "Tutorials",
            collapsible: true,
            collapsed: true,
            items: [
                "resources/tutorials/index",
                {
                    type: "category",
                    label: "Beginner tutorials",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        "resources/tutorials/beginner/index",
                        "resources/tutorials/beginner/use-javascript-sdk",
                        "resources/tutorials/beginner/rust-contracts",
                        "resources/tutorials/beginner/querying-network",
                        "resources/tutorials/beginner/upgrade-contract",
                    ],
                },
                {
                    type: "category",
                    label: "Advanced tutorials",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        "resources/tutorials/advanced/index",
                        "resources/tutorials/advanced/transfer-token-to-contract",
                        "resources/tutorials/advanced/two-party-multi-sig",
                        "resources/tutorials/advanced/return-values-tutorial",
                        "dapp-dev-guide/list-cspr",
                    ],
                },
                {
                    type: "category",
                    label: "Build Counter on the Testnet",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        "resources/tutorials/beginner/counter-testnet/index",
                        "resources/tutorials/beginner/counter-testnet/overview",
                        "resources/tutorials/beginner/counter-testnet/commands",
                        "resources/tutorials/beginner/counter-testnet/walkthrough",
                    ],
                },
                {
                    type: "category",
                    label: "Build Counter on an NCTL Network",
                    collapsible: true,
                    collapsed: true,
                    className: "text_transform_reset",
                    items: [
                        "resources/tutorials/beginner/counter/index",
                        "resources/tutorials/beginner/counter/overview",
                        "resources/tutorials/beginner/counter/commands",
                        "resources/tutorials/beginner/counter/walkthrough",
                    ],
                },
            ],
        },
        "resources/contribute-to-docs",
        "resources/changelog",
        "resources/support",
    ],
    developers: [
        "developers/index",
        "developers/prerequisites",
        {
            type: "category",
            label: "Writing On-Chain Code",
            collapsible: true,
            collapsed: true,
            items: [
                "developers/writing-onchain-code/index",
                "developers/writing-onchain-code/prerequisites",
                "developers/writing-onchain-code/getting-started",
                "developers/writing-onchain-code/assembly-script",
                "developers/writing-onchain-code/simple-contract",
                "developers/writing-onchain-code/testing-contracts",
                "developers/writing-onchain-code/upgrading-contracts",
                "developers/writing-onchain-code/contracts-and-session-code",
                "developers/writing-onchain-code/writing-session-code",
                "developers/writing-onchain-code/testing-session-code",
                "developers/writing-onchain-code/best-practices",
            ],
        },
        {
            type: "category",
            label: "Casper JSON-RPC API",
            collapsible: true,
            collapsed: true,
            items: [
                "developers/json-rpc/index",
                {
                    type: "category",
                    label: "SDK Client Libraries",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        "developers/json-rpc/sdk/index",
                        "developers/json-rpc/sdk/script-sdk",
                        "developers/json-rpc/sdk/csharp-sdk",
                        "developers/json-rpc/sdk/go-sdk",
                        "developers/json-rpc/sdk/python-sdk",
                        "developers/json-rpc/sdk/additional-libraries",
                    ],
                },
                "developers/json-rpc/guidance",
                "developers/json-rpc/minimal-compliance",
                "developers/json-rpc/json-rpc-transactional",
                "developers/json-rpc/json-rpc-informational",
                "developers/json-rpc/json-rpc-pos",
                "developers/json-rpc/types_chain",
                "developers/json-rpc/types_cl",
            ],
        },
        {
            type: "category",
            label: "Build dApps",
            collapsible: true,
            collapsed: true,
            items: [
                "developers/dapps/index",
                "developers/dapps/prerequisites",
                "developers/dapps/technology-stack",
                "developers/dapps/template-frontend",
                "developers/dapps/signing-a-deploy",
                "developers/dapps/sending-deploys",
                "developers/dapps/using-casper-signer",
                "developers/dapps/callstack-based",
                "developers/dapps/explanation-session-and-contract",
                "developers/dapps/monitor-and-consume-events",
            ],
        },
        {
            type: "category",
            label: "Interacting with the Blockchain using CLI",
            collapsible: true,
            collapsed: true,
            items: [
                "developers/cli/index",
                {
                    type: "category",
                    label: "Transferring Tokens",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        "developers/cli/transfers/index",
                        "developers/cli/transfers/direct-token-transfer",
                        "developers/cli/transfers/multisig-deploy-transfer",
                        "developers/cli/transfers/verify-transfer",
                    ],
                },
                "developers/cli/delegate",
                "developers/cli/undelegate",
                "developers/cli/installing-contracts",
                "developers/cli/calling-contracts",
                "developers/cli/execution-error-codes",
            ],
        },
    ],
    "dapp-dev-guide": [
        "dapp-dev-guide/json-rpc",
        "dapp-dev-guide/list-cspr",
        "dapp-dev-guide/setup",
        {
            type: "category",
            label: "Building dApps",
            collapsible: true,
            collapsed: true,
            items: [
                "dapp-dev-guide/building-dapps/dapp",
                "dapp-dev-guide/building-dapps/calling-contracts",
                "dapp-dev-guide/building-dapps/callstack",
                "dapp-dev-guide/building-dapps/setup-nctl",
                "dapp-dev-guide/building-dapps/nctl-test",
            ],
        },
        //{
        //    type: "category",
        //    label: "Tutorials",
        //    collapsible: true,
        //    collapsed: true,
        //    items: [
        //        // TODO Hiding these 2 tutorials until we can refresh them
        //        //                "dapp-dev-guide/tutorials/kv-storage-tutorial",
        //        //                {
        //        //                    type: "category",
        //        //                    label: "Multi-Signature Tutorial",
        //        //                    collapsible: true,
        //        //                    collapsed: true,
        //        //                    items: [
        //        //                        "dapp-dev-guide/tutorials/multi-sig/index",
        //        //                        "dapp-dev-guide/tutorials/multi-sig/concepts",
        //        //                        "dapp-dev-guide/tutorials/multi-sig/contract",
        //        //                        "dapp-dev-guide/tutorials/multi-sig/client",
        //        //                        "dapp-dev-guide/tutorials/multi-sig/example",
        //        //                        "dapp-dev-guide/tutorials/multi-sig/additional",
        //        //                   ],
        //        //                },
        //    ],
        //},
    ],
    operators: [
        "operators/index",
        {
            type: "category",
            label: "Get set up",
            collapsible: true,
            collapsed: true,
            items: [
                "operators/setup/hardware",
                "operators/setup/basic-node-configuration",
                "operators/becoming-a-validator/install-node",
                "operators/becoming-a-validator/joining",
            ],
        },
        {
            type: "category",
            label: "Setting up a Network",
            collapsible: true,
            collapsed: true,
            items: [
                "operators/setup-network/development-prerequisites",
                "operators/setup-network/create-private",
                "operators/setup-network/staging-files-network",
            ],
        },
        {
            type: "category",
            label: "Becoming a Validator",
            collapsible: true,
            collapsed: true,
            items: ["operators/becoming-a-validator/bonding", "operators/becoming-a-validator/unbonding", "operators/becoming-a-validator/upgrade"],
        },
    ],
    users: [
        "users/index",
        "users/block-explorer",
        "users/delegate-ui",
        "users/undelegate-ui",
        "users/ledger-setup",
        "users/token-transfer",
        "users/funding-from-exchanges",
        "users/testnet-faucet",
        "dapp-dev-guide/setup",
        {
            type: "category",
            label: "Why Build on Casper",
            collapsible: true,
            collapsed: true,
            items: ["dapp-dev-guide/build-on-casper/index", "dapp-dev-guide/build-on-casper/casper-open-source-software"],
        },
    ],
    design: [
        "design/index",
        "design/p2p",
        "design/highway",
        "design/casper-design",
        "design/reading-and-writing-to-the-blockchain",
        "design/serialization-standard",
    ],
    economics: [
        "economics/index",
        "economics/consensus",
        {
            type: "category",
            label: "Runtime Economics",
            collapsible: true,
            collapsed: true,
            items: ["economics/runtime", "economics/gas-concepts"],
        },
        "economics/delegation",
        "economics/concepts",
    ],
    faq: ["faq/index", "faq/faq-general", "faq/faq-enterpise", "faq/faq-developer", "faq/faq-validator"],
    staking: ["staking/index"],
};
