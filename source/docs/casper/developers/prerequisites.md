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

Users can create an account through the Casper command-line client. Alternatively, some Casper networks such as the official Testnet and Mainnet provide a browser-based block explorer that allows account creation. Using the Casper command-line client or a block explorer will also create a cryptographic key-pair.

### Option 1: Key generation using the Casper client {#option-1-key-generation-using-the-casper-client}

This option describes how you can use the Casper command-line client to set up your accounts. For more information about cryptographic keys, see [Working with Cryptographic Keys](../concepts/accounts-and-keys.md).

Execute the following command to generate your keys:

```bash
casper-client keygen .
```

The above command will create three files in the current working directory:

1. `secret_key.pem` - PEM encoded secret key
2. `public_key.pem` - PEM encoded public key
3. `public_key_hex` - Hexadecimal-encoded string of the public key

**Note**: Save your keys to a safe place, preferably offline.

After generating keys for the account, you may add funds to the account's purse to finish the account creation process.

**Note**: Responses from the node contain `AccountHashes` instead of the direct hexadecimal-encoded public key. To view the account hash for a public key, use the `account-address` option of the client:

```bash
casper-client account-address --public-key <path-to-public_key.pem/public-key-hex>
```

### Option 2: Key generation using a Block Explorer {#option-2-key-generation-using-a-block-explorer}

This option is available on networks that have a block explorer.

For instance, on the official Testnet network, the [CSPR.live](https://testnet.cspr.live/) block explorer is available, and the following instructions assume you are using it.

Start by creating an Account using the [Casper Signer](https://docs.cspr.community/docs/user-guides/SignerGuide.html). The Signer will prompt you to download the secret key of your new account by clicking on the `Download` option. The Signer will download the secret key in a file ending in `secret_key.cer`. We recommend securely storing this file. Note that the account is not stored on chain.

<img src={useBaseUrl("/image/workflow/download-prompt.png")} alt="Signer Secret Key Download Prompt" width="200" />

The Signer does not allow you to download the corresponding public key and hexadecimal representation of the public key. But, you can view them if you click the account details.

<img src={useBaseUrl("/image/workflow/account-details.png")} alt="Signer Account Details" width="200" class="inline-img" />

For [ed25519](../concepts/accounts-and-keys.md#eddsa-keys) keys, you can generate the `public_key.pem` and `public_key_hex` using [these commands](https://github.com/casper-network/casper-node/wiki/ed25519-public-keys-from-secret_key.pem).

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
