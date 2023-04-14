import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Development Prerequisites

This section explains how to fulfill the prerequisites needed to interact with a Casper network.

This section covers:

1. Setting up a [Rust](#install-rust) development environment
2. Installing the official Casper [command-line client](#install-casper-client)
3. [Setting up an Account](#setting-up-an-account) on a Casper network
4. [Acquiring the IP](#acquire-node-address-from-network-peers) address of a peer on the official Testnet or Mainnet

To be able to develop comfortably on the Casper Network you should use either `macOS` or `Linux Ubuntu 20.04`. Developing on Windows is not advised.

:::caution

Casper Network does not officially support `macOS`. If you encounter any problems reach out to the community on Telegram or Discord.

:::

Follow the steps below to install necessary software for the development environment.

## Install the environment on macOS / Linux

## Step 1.

### Install xcode command line tools on macOS {#install-xcode}


<Tabs>
<TabItem value="macOS" label="macOS">

```bash
xcode-select --install
```

</TabItem>
</Tabs>

Verify the installation with:

<Tabs>
<TabItem value="macOS" label="macOS">

```bash
xcode-select -p
```

</TabItem>
</Tabs>

### Get curl on Linux {#install-curl}

<Tabs>
<TabItem value="Linux" label="Linux">

```bash
sudo apt install curl
```
</TabItem>
</Tabs>

## Step 2.

### Install rust {#install-rust}

<Tabs>
<TabItem value="macOS" label="macOS">

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

</TabItem>
</Tabs>

Verify the installation with:

<Tabs>
<TabItem value="macOS" label="macOS">

```bash
rustup --version
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
rustup --version
```

</TabItem>
</Tabs>

The installation script automatically adds Rust to your system PATH after your next login.
To start using Rust right away instead of restarting your terminal, run the following command in your shell to add Rust to your system PATH manually:

<Tabs>
<TabItem value="macOS" label="macOS">

```bash
source $HOME/.cargo/env
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
source $HOME/.cargo/env
```

</TabItem>
</Tabs>

## Step 3.

### Install brew on macOS {#install-brew}

<Tabs>
<TabItem value="macOS" label="macOS">

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
</TabItem>
</Tabs>

### Install additional packages to be able to install cargo-casper and casper-client {#install-adds}

<Tabs>
<TabItem value="macOS" label="macOS">

```bash
brew install pkg-config
brew install openssl
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
sudo apt-get install pkg-config
sudo apt-get install openssl
sudo apt-get install libssl-dev
```

</TabItem>
</Tabs>

### Install cargo on Linux {#install-linux-cargo}

<Tabs>
<TabItem value="Linux" label="Linux">

```bash
sudo apt install cargo
```

</TabItem>
</Tabs>

## Step 4.

### Install cargo-casper {#install-cargo-casper}

<Tabs>
<TabItem value="macOS" label="macOS">

```bash
cargo install cargo-casper
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
cargo install cargo-casper
```

</TabItem>
</Tabs>

Verify the installation with:

<Tabs>
<TabItem value="macOS" label="macOS">

```bash
cargo-casper --version
```
</TabItem>
<TabItem value="Linux" label="Linux">

```bash
cargo-casper --version
```
</TabItem>
</Tabs>

### Install the essentials package so the casper-client can be installed on Linux {#install-linux-essentials}

<Tabs>
<TabItem value="Linux" label="Linux">

```bash
sudo apt install build-essential
```

</TabItem>
</Tabs>

## Step 5.

### Install the casper client {#install-casper-client}

<Tabs>
<TabItem value="macOS" label="macOS">

```bash
cargo install casper-client
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
cargo install casper-client
```

</TabItem>
</Tabs>

Verify the installation with

<Tabs>
<TabItem value="macOS" label="macOS">

```bash
casper-client --version
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
casper-client --version
```

</TabItem>
</Tabs>

For more information about supported commands, you can check it with:

```bash
casper-client --help
```

For the compilation to work install the nightly compiler:

<Tabs>
<TabItem value="macOS" label="macOS">

```bash
rustup toolchain install nightly
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
rustup toolchain install nightly
```

</TabItem>
</Tabs>

:::info

OPTIONAL: if you are going to run a Casper Network validator install cmake with the command below:

:::

### Install cmake {#install-cmake}

<Tabs>
<TabItem value="macOS" label="macOS">

```bash
brew install cmake
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
sudo apt-get -y install cmake
```

</TabItem>
</Tabs>

Verify the installation with

<Tabs>
<TabItem value="macOS" label="macOS">

```bash
cmake --version
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
cmake --version
```

</TabItem>
</Tabs>

With all the above steps you should be able to succesfully go through the examples and tutorials in the documentation.

## Install the IDE

For the development we advise to use Visual Studio Code. Follow the instructions [here](./writing-onchain-code/getting-started.md#setting-ide) to set up VSC and install plugins to help during development.

## Setting up an Account {#setting-up-an-account}

The [Account](../concepts/design/casper-design.md#accounts-head) creation process consists of two steps:

1. Creating the Account
2. Funding the Account

The following video complements the instructions below, showing you the expected output.

<p align="center">
<iframe width="400" height="225" src="https://www.youtube.com/embed?v=sA1HTPjV_bc&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=3" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>

## Creating an Account {#creating-an-account}

The Casper blockchain uses an on-chain account-based model, uniquely identified by an `AccountHash` derived from a specific `PublicKey`.

By default, a transactional interaction with the blockchain takes the form of a `Deploy` cryptographically signed by the key-pair corresponding to the `PublicKey` used to create the account.

Users can create accounts using the [Casper command-line client](../concepts/accounts-and-keys.md#option-1-generating-keys-using-the-casper-client-option-1-key-generation-using-the-casper-client). 

Alternatively, some Casper networks, such as the official Testnet and Mainnet, provide a browser-based block explorer that allows account creation as outlined [here](../concepts/accounts-and-keys.md#option-2-generating-keys-using-a-block-explorer-option-2-key-generation-using-a-block-explorer). 

Use either method to generate an account and its corresponding cryptographic key-pair.

### Generating the account hash

As a developer, you will often use an account hash, which is a 32-byte hash of the public key. This is because responses from the node contain `AccountHashes` instead of the direct hexadecimal-encoded public key. To view the account hash for a public key, use the `account-address` option of the Casper CLI client:

```bash
casper-client account-address --public-key <path-to-public_key.pem/public-key-hex>
```

## Funding Accounts {#fund-your-account}

After generating the cryptographic key-pair for an Account, you must fund the account's main purse to create it on-chain.

On Testnet, you can fund an account by requesting test tokens according to [this guide](../users/testnet-faucet.md). You can request test tokens **only once** for each account.

On Mainnet, a pre-existing account will have to transfer CSPR tokens to the newly created account's main purse to finalize the setup. The source account needs to transfer CSPR tokens to the hexadecimal-encoded public key of the target account. This transfer will automatically create the target account if it does not exist. Currently, this is the only way to create an account on Mainnet.

## Acquiring a Node Address from the Network {#acquire-node-address-from-network-peers}

Clients can interact with a node on the blockchain via requests sent to that node's JSON-RPC endpoint, `http://<node-ip-address>:7777` by default.

The node address is the IP of a peer node.

Both the official Testnet and Mainnet provide block explorers that list the IP addresses of nodes on their respective networks.

You can get the `node-ip-address` of a node on the network by visiting the following block explorers:

* [Peers](https://testnet.cspr.live/tools/peers) on Testnet
* [Peers](https://cspr.live/tools/peers) on Mainnet

You will see a list of peers, and you can select the IP of any peer on the list.

**Note**: If the selected peer is unresponsive, pick a different peer and try again.
