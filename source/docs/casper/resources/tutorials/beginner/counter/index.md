---
title: Introduction
slug: /counter
---

# A Counter on an NCTL Network

This tutorial installs a simple counter contract on a local Casper Network with NCTL. The contract is straightforward and simply maintains a counter variable. If you want to learn to send deploys to the Testnet, you can follow a [similar tutorial](/resources/tutorials/beginner/counter-testnet/index.md). Once you are familiar with this process, the next step will be to write more practical smart contracts.

Before we go through the tutorial, we will give a high-level overview of this tutorial's walkthrough and briefly summarize the relevant commands (and respective arguments).

- [Tutorial Overview](/resources/tutorials/beginner/counter/overview.md)
- [Important Commands](/resources/tutorials/beginner/counter/commands.md)
- [Tutorial Walkthrough](/resources/tutorials/beginner/counter/walkthrough.md)

## Prerequisites {#prerequisites}

1.  You have completed the [Getting Started tutorial](/developers/writing-onchain-code/getting-started.md) to set up your development environment, including tools like _cmake_ (version 3.1.4+), _cargo_, and _Rust_.
2.  You have completed the [NCTL tutorial](/dapp-dev-guide/building-dapps/setup-nctl), which introduces you to the CLI tool to set up and control local Casper networks for development.
3. Follow the installation instructions for the [Casper client](/dapp-dev-guide/setup/#the-casper-command-line-client). We will use the _casper-client_ to send deploys to the chain.
