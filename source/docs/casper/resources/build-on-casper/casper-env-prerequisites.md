---
title: Casper Network development environment prerequisites
---

# Casper Network development environment prerequisites

To be able to develop comfortably on the Casper Network you should use either `macOS` or `Linux Ubuntu 20.04`. Developing on Windows is not advised.
Follow the steps below to install necessary software for the development environment.

## Install the environment on macOS {#install-macos}

### Install xcode command line tools {#install-xcode}

```bash
xcode-select --install
```

Check the version 

```bash
xcode-select -p
```

### Install rust {#install-rust}

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Check the rustup version

```bash
rustup --version
```

### Install brew {#install-brew}

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Install additional packages to be able to install cargo-casper and casper-client {#install-adds}

```bash
brew install pkg-config
brew install openssl 
```

### Install the cargo-casper {#install-cargo-casper}

```bash
cargo install cargo-casper
```

Check the version

```bash
cargo-casper --version
```

### Install the casper client {#install-casper-client}

```bash
cargo install casper-client
```

Check the version

```bash
casper-client --version
```

For more information about supported commands, you can check it with:

```bash
casper-client --help
```

:::tip

Optionally if you are going to run a Casper Network validator install cmake with the command below:

:::

### Install cmake {#install-cmake}

```bash
brew install cmake
```

Check the version of cmake
```bash
cmake --version
```

With all the above steps you should be able to succesfully go through the examples and tutorials in the documentation.

## Install the environment on Linux {#install-linux}

### Get curl {#install-curl}

```bash
sudo apt install curl
```

### Install rust {#install-linux-rust}

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Install additional libraries so the installation of cargo-casper succeeds {#install-linux-adds}

```bash
sudo apt-get install pkg-config
sudo apt-get install openssl
sudo apt-get install libssl-dev
```

### Install cargo {#install-linux-cargo}

```bash
sudo apt install cargo
```

### Install the cargo-casper {#install-linux-cargo-casper}

```bash
cargo install cargo-casper
```

Check the version

```bash
cargo-casper --version
```

### Install the essentials package so the casper-client can be installed {#install-linux-essentials}

```bash
sudo apt install build-essential
```

### Install the casper client {#install-linux-casper-client}

```bash
cargo install casper-client
```

Check the version
```bash
casper-client --version
```

:::tip

Optionally if you are going to run a Casper Network validator install cmake with the command below:

:::

### Install cmake {#install-linux-cmake}

```bash
sudo apt-get -y install cmake
```

Check the version of cmake
```bash
cmake --version
```

With all the above steps you should be able to succesfully go through the examples and tutorials in the documentation.

## Install the IDE

For the development we advise to use Visual Studio Code. Follow the instructions [here](../../developers/writing-onchain-code/getting-started.md#setting-ide) to set up VSC and install plugins to help during development.