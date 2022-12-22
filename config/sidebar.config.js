module.exports = {
    workflow: [
        "workflow/index",
        "workflow/block-explorer",
        "workflow/delegate-ui",
        "workflow/undelegate-ui",
        "workflow/ledger-setup",
        "workflow/signer-guide",
        "workflow/token-transfer",
        "workflow/funding-from-exchanges",
        "workflow/testnet-faucet",
        "workflow/setup-private-network",
        "workflow/staging-files-for-new-network",
        "workflow/setup",
        "workflow/querying",
        "workflow/account-hash",
        "workflow/two-party-multi-sig",
        {
            type: "category",
            label: "Transferring Tokens",
            collapsible: true,
            collapsed: true,
            items: ["workflow/transfers", "workflow/transfer-workflow", "workflow/deploy-transfer", "workflow/verify-transfer"],
        },
        "workflow/delegate",
        "workflow/undelegate",
        "workflow/contribute",
    ],
    "dapp-dev-guide": [
        "dapp-dev-guide/index",
        {
            type: "category",
            label: "Why Build on Casper",
            collapsible: true,
            collapsed: true,
            items: ["dapp-dev-guide/build-on-casper/index", "dapp-dev-guide/build-on-casper/casper-open-source-software"],
        },
        "dapp-dev-guide/keys",
        "dapp-dev-guide/understanding-hash-types",
        "dapp-dev-guide/json-rpc",
        {
            type: "category",
            label: "Casper SDK Standard",
            collapsible: true,
            collapsed: true,
            items: [
                "dapp-dev-guide/sdkspec/introduction",
                "dapp-dev-guide/sdkspec/guidance",
                "dapp-dev-guide/sdkspec/json-rpc-minimal",
                "dapp-dev-guide/sdkspec/json-rpc-transactional",
                "dapp-dev-guide/sdkspec/json-rpc-informational",
                "dapp-dev-guide/sdkspec/json-rpc-pos",
                "dapp-dev-guide/sdkspec/types_chain",
                "dapp-dev-guide/sdkspec/types_cl",
            ],
        },
        "dapp-dev-guide/list-cspr",
        {
            type: "category",
            label: "Building dApps",
            collapsible: true,
            collapsed: true,
            items: [
                "dapp-dev-guide/building-dapps/signing-a-deploy",
                "dapp-dev-guide/building-dapps/sending-deploys",
                "dapp-dev-guide/building-dapps/calling-contracts",
                "dapp-dev-guide/building-dapps/callstack",
                {
                    type: "category",
                    label: "SDK Client Libraries",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        "dapp-dev-guide/building-dapps/sdk/index",
                        "dapp-dev-guide/building-dapps/sdk/script-sdk",
                        "dapp-dev-guide/building-dapps/sdk/csharp-sdk",
                        "dapp-dev-guide/building-dapps/sdk/go-sdk",
                        "dapp-dev-guide/building-dapps/sdk/python-sdk",
                    ],
                },
                "dapp-dev-guide/building-dapps/setup-nctl",
                "dapp-dev-guide/building-dapps/nctl-test",
                "dapp-dev-guide/building-dapps/monitoring-events",
                "dapp-dev-guide/building-dapps/casper-signer",
            ],
        },
        {
            type: "category",
            label: "Writing On-Chain Code",
            collapsible: true,
            collapsed: true,
            items: [
                "dapp-dev-guide/writing-contracts/index",
                "dapp-dev-guide/writing-contracts/getting-started",
                "dapp-dev-guide/writing-contracts/best-practices",
                "dapp-dev-guide/writing-contracts/rust-contracts",
                "dapp-dev-guide/writing-contracts/testing-contracts",
                "dapp-dev-guide/writing-contracts/contract-vs-session",
                "dapp-dev-guide/writing-contracts/session-code",
                "dapp-dev-guide/writing-contracts/testing-session-code",
                "dapp-dev-guide/writing-contracts/installing-contracts",
                "dapp-dev-guide/writing-contracts/calling-contracts",
                "dapp-dev-guide/writing-contracts/upgrading-contracts",
                "dapp-dev-guide/writing-contracts/dictionaries",
                "dapp-dev-guide/writing-contracts/execution-error-codes",
                "dapp-dev-guide/writing-contracts/assembly-script",
            ],
        },
        {
            type: "category",
            label: "Tutorials",
            collapsible: true,
            collapsed: true,
            items: [
                "dapp-dev-guide/tutorials/index",
                "dapp-dev-guide/tutorials/getting-started-tutorial",
                {
                    type: "category",
                    label: "A Counter on an NCTL Network",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        "dapp-dev-guide/tutorials/counter/index",
                        "dapp-dev-guide/tutorials/counter/overview",
                        "dapp-dev-guide/tutorials/counter/commands",
                        "dapp-dev-guide/tutorials/counter/walkthrough",
                    ],
                },
                {
                    type: "category",
                    label: "A Counter on the Testnet",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        "dapp-dev-guide/tutorials/counter-testnet/index",
                        "dapp-dev-guide/tutorials/counter-testnet/overview",
                        "dapp-dev-guide/tutorials/counter-testnet/commands",
                        "dapp-dev-guide/tutorials/counter-testnet/walkthrough",
                    ],
                },
                // TODO Hiding these 2 tutorials until we can refresh them
                //                "dapp-dev-guide/tutorials/kv-storage-tutorial",
                //                {
                //                    type: "category",
                //                    label: "Multi-Signature Tutorial",
                //                    collapsible: true,
                //                    collapsed: true,
                //                    items: [
                //                        "dapp-dev-guide/tutorials/multi-sig/index",
                //                        "dapp-dev-guide/tutorials/multi-sig/concepts",
                //                        "dapp-dev-guide/tutorials/multi-sig/contract",
                //                        "dapp-dev-guide/tutorials/multi-sig/client",
                //                        "dapp-dev-guide/tutorials/multi-sig/example",
                //                        "dapp-dev-guide/tutorials/multi-sig/additional",
                //                   ],
                //                },
                "dapp-dev-guide/tutorials/return-values-tutorial",
                "dapp-dev-guide/tutorials/upgrade-contract",
                "dapp-dev-guide/tutorials/transfer-token-to-contract",
            ],
        },
    ],
    operators: [
        "operators/index",
        "operators/hardware",
        "operators/setup",
        "operators/create",
        "operators/install-node",
        "operators/upgrade",
        "operators/joining",
        "operators/bonding",
        "operators/unbonding",
        "operators/node-events",
        "operators/event-sidecar",
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
    glossary: [
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
    staking: ["staking/index"],
};
