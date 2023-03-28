---
title: Casper Network development environment prerequisites
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Casper Network development environment prerequisites

To be able to develop comfortably on the Casper Network you should use either `macOS` or `Linux Ubuntu 20.04`. Developing on Windows is not advised.

:::caution

Casper Network does not officialy support `macOS`. If you encounter any problems reach out to the community on Telegram or Discord.

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

Check the version

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

Check the rustup version

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

### Install the cargo-casper {#install-cargo-casper}

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

Check the version

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

Check the version

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

Check the version of cmake

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

For the development we advise to use Visual Studio Code. Follow the instructions [here](../../developers/writing-onchain-code/getting-started.md#setting-ide) to set up VSC and install plugins to help during development.