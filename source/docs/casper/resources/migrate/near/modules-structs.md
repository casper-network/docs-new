---
title: Modules & Structs
---

# Modules & Structs

During Smart Contract development you will use programming concepts which are similar to those from Near.
You will use the following:

- Modules
- Collections

## Modules & Structs

It is a good practice to keep your code organized. This is secured by the libraries provided by Casper.

- [Casper Contract](https://crates.io/crates/casper-contract) - a library supporting communication with the blockchain. This is the main library you will need to write smart contracts.
- [Casper Test Support](https://crates.io/crates/casper-engine-test-support) - a virtual machine against which you can test your smart contracts.
- [Casper Types](https://crates.io/crates/casper-types) - a library with types we use across the Rust ecosystem.

Be sure to check the details [here](../../../developers/writing-onchain-code/simple-contract.md#directory-structure).

## Types

When writing contracts you have native as well as custom Casper types at your disposal.

The standard types use the alloc crate:

```rust
// the elementary types 
use alloc::string::String;
use alloc::vec::Vec;
```

You can also find the casper types in the `casper_types` crate. Some examples below:

```rust
// casper crates
use casper_types::{
    api_error::ApiError,
    contracts::NamedKeys, 
    runtime_args, 
    CLType, 
    Key, 
    ContractHash, 
    Parameter, 
    EntryPoint, 
    EntryPoints, 
    EntryPointType, 
    EntryPointAccess};
```

## SDK Collections

The concept of SDK collections as known in Near does not exist in the Casper Blockchain. The data is stored in `dictionaries`. They are suitable for storing large amounts of data. Some references can be stored in the Named Keys, this should be only used for linking for example contracts with each other or to store simple values.

The details can be found [here](../../../concepts/dictionaries.md).
