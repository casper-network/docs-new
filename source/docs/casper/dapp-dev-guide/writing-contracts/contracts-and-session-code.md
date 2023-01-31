# Smart Contracts and Session Code
import useBaseUrl from '@docusaurus/useBaseUrl';

# 1. Session Code {#session-code}
Session code is the simplest logic one can execute on a Casper network. It is essential because it is often used to trigger contract logic stored on the chain. Session code requires only one entry point, the `call` function, and it runs within the context of the account executing the session code. As a result, the session code runs with the account's permissions, such as having access to the account's main purse. For example, the session code could transfer tokens from the account's main purse.

The best use of session code is when the situation calls for [stateless](/glossary/S.md/#stateless) execution, and very little or no internal data needs to be tracked. Session code is required when interacting and accepting values returned across the Wasm boundary.

## Comparing Session and Contract Code

The following table summarises the key differences between session code and contract code on a Casper network.

| Session Code | Contract Code |
| --- | --- |
| Session code always executes in the context of the account that signed the deploy containing the session code. | A smart contract,  which is stored on-chain logic, executes within its own context. |
| Session code has only one entry point, `call`, which can be used to interact with the session code. | A smart contract can have multiple entry points that can be invoked.|  
| The `call` entry point initiates any action the session code takes. | Any action undertaken by a contract must initiate through an outside call, usually via session code.|
| When a `put_key` call is made within the body of the session code, the key is added to the account's named keys. | When a `put_key` call is made within the smart contract's context, the contract's record is modified to have a new named_key entry. |
| For more information on how to write session code, see [Writing Session Code](/dapp-dev-guide/writing-contracts/contracts-and-session-code#writing-session-code). | For more information on writing contracts, see [Writing a Basic Smart Contract in Rust](/dapp-dev-guide/writing-contracts/rust-contracts). |

The following image depicts the comparison presented in the table.

<p align="center"><img src={useBaseUrl("/image/dApp/contract-vs-session.png")} alt="Comparing Session and Contract Code" /></p>

**When should you use Session Code?**
1. When transferring funds from the account's main purse
2. When configuring multisig thresholds or assigning weights to keys
3. When you need to call a Smart Contract Entry Point in the account's context

## Video Walkthrough

The following brief video describes [sample session code](https://github.com/casper-ecosystem/two-party-multi-sig/) for configuring an account.

<p align="center">
<iframe width="400" height="225" src="https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=4" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>

## Example: Native Token transfers using Session Code {#writing-session-code}
```
pub extern "C" fn call():
    let account_purse: URef = account::get_main_purse();
    let amount: U512 = runtime::get_named_arg("amount");
    let recipient_account_hash: AccountHash = runtime::get_named_arg("recipient");
    system::transfer_from_purse_to_account(account_purse, recipient_account_hash, amount, None);

```

This Session code emits a transfer from the account that was used to sign the session deploy to an account_hash that is specified as a runtime argument. Other transfer functions in system include:
1. transfer_from_purse_to_purse
2. transfer_to_account
3. transfer_from_purse_to_public

## Compiling Session Code

Before running session code to interact with a contract or other entities on the network, you must compile it to Wasm. Run the following command in the directory hosting the `Cargo.toml` file and `src` folder.

```bash
cargo build --release --target wasm32-unknown-unknown
```

For the examples above, you may use the Makefiles provided:

```bash
make build-contract
```
## Use put_deploy to run Session Code

Session code can execute on a Casper network via a [Deploy](/glossary/D.md#deploy). All deploys can be broadly categorized as some unit of work that, when executed and committed, affects change to the network's global state.
The [Casper command-line client](/dapp-dev-guide/setup/#the-casper-command-line-client) and its `put-deploy` command provide one way to execute session code.

```bash
casper-client put-deploy \
    --node-address <HOST:PORT> \
    --chain-name <NETWORK-NAME> \
    --secret-key <PATH> \
    --payment-amount <PAYMENT-AMOUNT> \
    --session-path <SESSION-PATH> \
    --session-arg <"NAME:TYPE='VALUE'" OR "NAME:TYPE=null">
```

-   `node-address` - An IP address of a peer on the network. The default port for JSON-RPC servers on Mainnet and Testnet is 7777.
-   `secret-key` - The file name containing the secret key of the account paying for the deploy.
-   `chain-name` - The network where the deploy should be sent. For Mainnet, use *casper*. For Testnet, use *casper-test*.
-   `payment-amount` - Payment for the deploy in motes.  
-   `session-path` - Path to the contract Wasm, pointing to the compiled contract.
-   `session-arg` - A named and typed argument passed to the Wasm code.

Use the `--help` option to view an updated list of supported arguments.

```bash
casper-client put-deploy --help
```
## Testing Session Code
Learn to [test Session Code](/dapp-dev-guide/writing-contracts/testing-session-code)

# 2. Smart Contracts

A smart contract is a self-contained program installed on a blockchain. In the context of a Casper network, a smart contract consists of contract code installed on-chain using a [Deploy](/design/casper-design.md/#execution-semantics-deploys). Casper smart contracts are programs that run on a Casper network. They interact with accounts and other contracts through entry points, allowing for various triggers, conditions, and logic.

Smart contracts exist as stored on-chain logic, allowing disparate users to call the included entry points. These contracts can, in turn, call one another to perform interconnected operations and create more complex programs. The decentralized nature of blockchain technology means that these smart contracts do not suffer from any single point of failure. Even if a Casper node leaves the network, other nodes will continue to allow the contract to operate as intended.

## Key Features of Casper Contracts

On the Casper platform, developers may write smart contracts in any language that compiles to Wasm binaries. This tutorial focuses specifically on writing a smart contract in the Rust language. The Rust compiler compiles the contract code into Wasm. After that, the Wasm binary can be [sent to a node](/dapp-dev-guide/writing-contracts/installing-contracts/) on a Casper network using a Deploy. Nodes within the network then [gossip deploys](/design/p2p/#communications-gossiping), include them within a block, and finalize them. After finalizing, the network executes the deploys within the block.

Further, the Casper platform allows for [upgradable contracts](/dapp-dev-guide/writing-contracts/upgrading-contracts/). A [ContractPackage](https://docs.rs/casper-types/latest/casper_types/contracts/struct.ContractPackage.html) is created through the [new_contract](https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_contract.html) or [new_locked_contract](https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_locked_contract.html) methods. Through these methods, the Casper execution engine creates the new contract package automatically and assigns a [`ContractPackageHash`](/dapp-dev-guide/understanding-hash-types#hash-and-key-explanations). The new contract is added to this package with a [`ContractHash`](https://docs.rs/casper-types/latest/casper_types/contracts/struct.ContractHash.html) key. The execution engine stores the new contract within the contract package alongside any previously installed contract versions, if applicable.

The `new_contract` and `new_locked_contract` methods are a convenience that automatically creates the package associated with a new contract. Developers choosing not to use these methods must first create a contract package to function as a container for their new contract.

The contract contains required metadata, and it is primarily identified by its `ContractHash`. While the contract hash identifies a specific [ContractVersion](https://docs.rs/casper-types/latest/casper_types/contracts/type.ContractVersion.html), the `ContractPackageHash` serves as an identifier for the most recent contract version in the contract package.

## Creating the Directory Structure {#directory-structure}

To begin creating a smart contract, you need to set up the project structure, either manually or automatically, as shown below.

```bash
project-directory/
└── contract/
    ├── src/
        └── main.rs
    └── Cargo.toml
└── tests/
    ├── src/
        └── integration-tests.rs
    └── Cargo.toml
```

## Writing a Basic Smart Contract
{#basic-contract}

This section covers the process of writing a smart contract in Rust, using example code from the [counter contract](https://github.com/casper-ecosystem/counter/). This simple contract allows callers to increment and retrieve an integer. Casper provides a [contract API](https://docs.rs/casper-contract/latest/casper_contract/contract_api/index.html) within the [`casper_contract`](https://docs.rs/casper-contract/latest/casper_contract/index.html) crate.
### Dependencies in `Cargo.toml`

The `Cargo.toml` file includes the dependencies and versions the contract requires. At a minimum, you need to import the latest versions of the [casper-contract](https://docs.rs/casper-contract/latest/casper_contract/) and [casper-types](https://docs.rs/casper-types/latest/casper_types/) crates. The following dependencies and version numbers are only examples and must be adjusted based on your requirements.

```typescript
[dependencies]
// A library for developing Casper network smart contracts.
casper-contract = "1.4.4"
// Types shared by many Casper crates for use on a Casper Network.
casper-types = "1.5.0"
```

- `casper-contract = "1.4.4"` - Provides the SDK for the execution engine (EE). The latest version of the crate is published [here](https://crates.io/crates/casper-contract).
- `casper-types = "1.5.0"` - Includes types shared by many Casper crates for use on a Casper network. This crate is necessary for the EE to understand and interpret the session code. The latest version of the crate is published [here](https://crates.io/crates/casper-types).

### Updating the `main.rs` File

To begin writing contract code, add the following file attributes to support the Wasm execution environment. If you have an auto-generated `main.rs` file, remove the auto-generated main function.

```rust
#![no_std]
#![no_main]
```

- `#![no_main]` - This attribute tells the program not to use the standard main function as its entry point.
- `#![no_std]` - This attribute tells the program not to import the standard libraries.
#### Defining Required Dependencies

Add the required imports and dependencies. The example code for the counter contract declares the following dependencies.

```rust
// This code imports necessary aspects of external crates that we will use in our contract code.
extern crate alloc;

// Importing Rust types.
use alloc::{
    string::{String, ToString},
    vec::Vec,
};
// Importing aspects of the Casper platform.
use casper_contract::{
    contract_api::{runtime, storage},
    unwrap_or_revert::UnwrapOrRevert,
};
// Importing specific Casper types.
use casper_types::{
    api_error::ApiError,
    contracts::{EntryPoint, EntryPointAccess, EntryPointType, EntryPoints, NamedKeys},
    CLType, CLValue, URef,
};
```
#### Defining the Contract Entry Points

Entry points provide access to contract code installed in global state. Either [session code](#session-code) or another smart contract may call these entry points. A contract must have at least one entry point and may have more than one entry point. Entry points are defined by their name, and those names should be clear and self-describing. Each entry point is equivalent to a static main entry point in a traditional program.

Entry points are not functions or methods, and they have no arguments. They are static entry points into the contract's logic. Yet, the contract logic can access parameters by name, passed along with the Deploy. Note that another smart contract may access any of these entry points.

If an entry point has one or more mandatory parameters that will cause the logic to revert if they are not included, declare them within that entry point. Optional and non-critical parameters should be excluded.

When defining entry points, begin with a `#[no_mangle]` line to ensure that the system does not change critical syntax within the method names. Each entry point should contain the contract code that drives the action you wish it to accomplish. Finally, include any storage or return values needed, as applicable.

The following entry point is an example from the counter contract. To see all the available entry points, review the contract in [GitHub](https://github.com/casper-ecosystem/counter/blob/master/contract-v1/src/main.rs).

```rust
#[no_mangle]
pub extern "C" fn counter_inc() {
    let uref: URef = runtime::get_key(COUNT_KEY)
        .unwrap_or_revert_with(ApiError::MissingKey)
        .into_uref()
        .unwrap_or_revert_with(ApiError::UnexpectedKeyVariant);
    storage::add(uref, 1); // Increment the count by 1.
}
```

#### Defining the `call` Function

The `call` function starts the code execution and is responsible for installing the contract on-chain. In some cases, it also initializes some constructs, such as a Dictionary for record-keeping or a purse. The following steps describe how to structure the `call` function. Review the [call function](https://github.com/casper-ecosystem/counter/blob/8a622cd92d768893b9ef9fc2b150c674415be87e/contract-v1/src/main.rs#L55) in the counter contract.

1) Define the runtime arguments.

At the time of contract installation, pass in parameters as runtime arguments. Use this pattern of variable definition to collect any sentinel values that dictate the behavior of the contract. If the entry point takes in arguments, you must declare those as part of the entry point's definition.

Look at the [CEP-78 contract](https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/contract/src/main.rs) to see examples of entry points taking in arguments. The counter contract does not use variable parameters since it is too simple.

2) Add the entry points into the `call` function.

The `call` function replaces a traditional `main` function and executes automatically when a caller interacts with the contract. Within the `call` function, we define entry points that the caller can access using session code or another contract. When writing code that calls an entry point, there must be a one-to-one mapping of the entry point name. Otherwise, the execution engine will return an error that the entry point does not exist.

Each entry point should have these arguments:

- `name` - The name of the entry point, which should be the same as the initial definition.
- `arguments` - A list of runtime arguments declared as part of the definition of the entry point.
- `return type` - The CLType that is returned by the entry point. Use the type *Unit* for empty return types.
- `access level` - Access permissions of the entry point.
- `entry point type` - This can be `contract` or `session` code.

This step adds the individual entry points to a `counter_entry_points` object using the `add_entry_point` method. This object will later be passed to the `new_contract` method.

```rust
    // Create the entry points for this contract
    let mut counter_entry_points = EntryPoints::new();

    counter_entry_points.add_entry_point(EntryPoint::new(
        ENTRY_POINT_COUNTER_GET,
        Vec::new(),
        CLType::I32,
        EntryPointAccess::Public,
        EntryPointType::Contract,
    ));

    counter_entry_points.add_entry_point(EntryPoint::new(
        ENTRY_POINT_COUNTER_INC,
        Vec::new(),
        CLType::Unit,
        EntryPointAccess::Public,
        EntryPointType::Contract,
    ));
```

3) Create the contract's named keys.

[NamedKeys](https://docs.rs/casper-types/latest/casper_types/contracts/type.NamedKeys.html) are a collection of String-Key pairs used to easily identify some network data.

- The [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html) is the name given to identify the data
- The [Key](https://docs.rs/casper-types/latest/casper_types/enum.Key.html) is the data to be referenced

You can create named keys to store any record or value as needed, such as other accounts, smart contracts, URefs, transfers, deploy information, purse balances, etc. The entire list of possible Key variants can be found [here](https://docs.rs/casper-types/latest/casper_types/enum.Key.html).

For the counter, we store the integer that we increment into a named key.

```rust
    // In the named keys of the counter contract, add a key for the count.
    let mut counter_named_keys = NamedKeys::new();
    let key_name = String::from(COUNT_KEY);
    counter_named_keys.insert(key_name, count_start.into());
```

4) Create the contract.

Use the [new_contract](https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_contract.html) method to create the contract, with its named keys and entry points. This method creates the contract object and saves the access URef and the contract package hash in the caller's context. The execution engine automatically creates a contract package and assigns it a `contractPackageHash`. Then, it adds the contract to the package with a [`contractHash`](https://docs.rs/casper-types/latest/casper_types/contracts/struct.ContractHash.html).

```rust
    // Create a new contract package that can be upgraded.
    let (stored_contract_hash, contract_version) = storage::new_contract(
        counter_entry_points,
        Some(counter_named_keys),
        Some(CONTRACT_PACKAGE_NAME.to_string()),
        Some(CONTRACT_ACCESS_UREF.to_string()),
    );
```

Usually, these contracts are upgradeable with the ability to add new [versions](https://docs.rs/casper-types/latest/casper_types/contracts/type.ContractVersion.html). To add a new contract version, you will need the access URef to the contract package. This can be accomplished by passing the `Some(CONTRACT_ACCESS_UREF.to_string())` argument to the `new_contract` method. To prevent any upgrades to a contract, use the `new_locked_contract` method described [below](#locked-contracts).

5) Create additional named keys.

Generally, the `Contract_Hash` and `Contract_Version` are saved as `NamedKeys` in the account's context for later use.

```rust
    // Store the contract version in the context's named keys.
    let version_uref = storage::new_uref(contract_version);
    runtime::put_key(CONTRACT_VERSION_KEY, version_uref.into());

    // Create a named key for the contract hash.
    runtime::put_key(CONTRACT_KEY, stored_contract_hash.into());
```

## Locked Contracts {#locked-contracts}

Locked contracts cannot contain other contract [versions](https://docs.rs/casper-types/latest/casper_types/contracts/type.ContractVersion.html) in the same contract package; thus, they cannot be upgraded. In this scenario, the Casper execution engine will create a contract package, add a contract to that package and prevent any further upgrades to the contract. Use locked contracts when you need to ensure high security and will not require updates to the contract.

```rust
pub fn new_locked_contract(
    entry_points: EntryPoints,
    named_keys: Option<NamedKeys>,
    hash_name: Option<String>,
    uref_name: Option<String>,
) -> (ContractHash, ContractVersion) {
    create_contract(entry_points, named_keys, hash_name, uref_name, true)
}
```

- `entry_points` - The set of entry points defined inside the smart contract.
- `named_keys` - Any [named-key](https://docs.rs/casper-types/latest/casper_types/contracts/type.NamedKeys.html) pairs for the contract.
- `hash_name` - Contract hash value. Puts [contractHash](https://docs.rs/casper-types/latest/casper_types/contracts/struct.ContractHash.html) in the current context's named keys under `hash_name`.
- `uref_name` - Access URef value. Puts access_uref in the current context's named keys under `uref_name`.

**Note**: The current context is the context of the person who initiated the `call` function, usually an account.

The counter contract in our example would be locked if we created it this way:

```rust
let (stored_contract_hash, _) =
        storage::new_locked_contract(counter_entry_points, Some(counter_named_keys), None, None);
```
## Compiling Contract Code {#compiling-contract-code}

To compile the smart contract, run the following command in the directory hosting the `Cargo.toml` file and `src` folder.

```bash
cargo build --release --target wasm32-unknown-unknown
```

For the counter example, you may use the Makefile provided:

```bash
make build-contract
```

## Executing Contract Code {#executing-contract-code}

Contract execution must be initiated through an outside call, usually via [session code](#session-code) or another smart contract. Developers should also be familiar with the difference between contract code and session code, explained in the next section.

## Video Walkthrough
{#video-walkthrough-smart-contracts}

The following brief video accompanies this guide.

<p align="center">
<iframe width="400" height="225" src="https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=6" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>

## Testing a basic Smart Contract
Learn to [test Smart Contracts using the "counter" example](/dapp-dev-guide/writing-contracts/testing-contracts/)

## Installing Smart Contracts and Querying global state {#install-contract}
Learn to [install a compiled Wasm Contract](/dapp-dev-guide/writing-contracts/installing-contracts/)

## Calling Smart Contracts with the Rust Client
Learn to [call an installed Contract](/dapp-dev-guide/writing-contracts/calling-contracts/)

## Reading from and Writing to Dictionaries
Learn to [use dictionaries on Casper](/dapp-dev-guide/writing-contracts/dictionaries/)

# 3. Advanced Example: Managing a Vault Contract funded through Session Code
**Description** \
This is a new example that'll help developers better understand when to use Session Code and when to write Smart Contracts.

Additionally, it'll teach the creation of re-useable purses, runtime context and vault funding.

Context-stack/Caller-stack overview:
1. A Contract (C1) is installed
2. A Contract (C1) is called to install a new Contract (C2). (C2= a Vault Contract with a purse under it)
3. Session code is used to transfer funds to the Vault Contract's (C2) purse

**End of Description**

Contract (C1) [source](https://github.com/jonas089/C3PRL0CK)

Install Contract (C1) as per [install smart contracts](/dapp-dev-guide/writing-contracts/contracts-and-session-code#install-contract) and supply an amount as a session arg for funding a Vault Contract (C2) on installation / migration.

### How Contract (C1) works:
Contract (C1) [main.rs](https://github.com/jonas089/C3PRL0CK/blob/master/contract/src/main.rs)

Contract (C1) holds an Entry Point named "migrate":
```rust
#[no_mangle]
pub extern "C" fn migrate(){
    let owner_account: AccountHash = runtime::get_named_arg("owner_account");
    // create a new purse to later be stored in the contract's named keys
    let destination: URef = system::create_purse();
    let entry_points = {
        let mut entry_points = EntryPoints::new();
        let approve = EntryPoint::new(
            "approve",
            vec![Parameter::new(ARG_ACCOUNT, CLType::Any)],
            CLType::Unit,
            EntryPointAccess::Public,
            EntryPointType::Contract
        );
        let redeem = EntryPoint::new(
            "redeem",
            vec![Parameter::new(ARG_AMOUNT, CLType::U512)],
            CLType::Unit,
            EntryPointAccess::Public,
            EntryPointType::Contract
        );
        let get_purse = EntryPoint::new(
            "get_purse",
            vec![],
            CLType::URef,
            EntryPointAccess::Public,
            EntryPointType::Contract
        );
        entry_points.add_entry_point(approve);
        entry_points.add_entry_point(redeem);
        entry_points.add_entry_point(get_purse);
        entry_points
    };
    let named_keys = {
        let mut named_keys = NamedKeys::new();
        named_keys.insert(OWNER_ACCOUNT.to_string(), owner_account.into());
        let approved_list = storage::new_dictionary(APPROVED_LIST).unwrap_or_revert();
        named_keys.insert(APPROVED_LIST.to_string(), approved_list.into());
        // store the newly created purse in the contract's named keys
        named_keys.insert(ARG_DESTINATION.to_string(), destination.into());

        named_keys
    };
    let (contract_hash, contract_version) = storage::new_contract(
        entry_points,
        Some(named_keys),
        Some("child_contract_hash".to_string()),
        Some("child_contract_uref".to_string()),
    );
    let _destination = CLValue::from_t(destination).unwrap_or_revert();
    // return new purse for this child contract
    runtime::ret(_destination);
}
```
We can split this Entry Point up to make it easier to understand.
### First, it creates a new purse named "destination" in the Contract's (C1) context:
```rust
    // create a new purse to later be stored in the contract's named keys
    let destination: URef = system::create_purse();
```
### Then adds the newly created "destination" purse to a new Vault Contract's (C2) named keys:
```rust
    let named_keys = {
        ...
        // store the newly created purse in the contract's named keys
        named_keys.insert(ARG_DESTINATION.to_string(), destination.into());

        named_keys
    };
```
### Lastly the new Contract (C2) is installed on-chain and the "destination" purse is returned from the Contract's (C2) named keys.
```rust
    let (contract_hash, contract_version) = storage::new_contract(
        entry_points,
        Some(named_keys),
        Some("child_contract_hash".to_string()),
        Some("child_contract_uref".to_string()),
    );
    let _destination = CLValue::from_t(destination).unwrap_or_revert();
    // return new purse
    runtime::ret(_destination);
```
You will find the new Contract (C2) in the current execution context's named keys. As we are calling a Smart Contract's (C1) "migrate" Entry Point, the context of execution will be the Contract (C1) that holds the "migrate" Entry Point. Therefore we need to query the named keys of the Smart Contract (C1) that holds this Entry Point to find our newly installed Contract (C2) with the purse stored under its named keys. The reason we install C2 through C1 is for us to be able to install and manage multiple instances of Vault contracts with little modification of the C1 contract.
1. Query Contract (C1) to find the contract hash of Vault Contract (C2)
2. Query Vault Contract (C2) to find the Vault Contract's purse in named keys
Summary: C1 "migrate" Entry Point is called to install C2 (with purse in named keys)
C2 returns the purse for use in Session Code.
## Deposit Casper in a Vault Contract through Session Code
To transfer Casper from an account to the "destination" purse, we need a Session Code (S) that is executed in the account's context. We supply the contract_hash of the "Vault" Contract (C2) as a session argument when running the Session Code (S) as follows:
```rust
#[no_mangle]
pub extern "C" fn call() {
    let contract_hash: ContractHash = runtime::get_named_arg("contract_hash");
    let amount: U512 = runtime::get_named_arg("amount");
    let source: URef = account::get_main_purse();
    let contract_purse:URef = runtime::call_contract::<URef>(
        contract_hash,
        "get_purse",
        runtime_args! {
        },
    );
    system::transfer_from_purse_to_purse(source, contract_purse, amount, None);
}
```
The get_purse Entry Point of Vault Contract (C2) returns the stored purse from a Vault Contract's (C2) named keys.
The contract_hash can be found in the newly installed contract's named keys.
## Redeem from Vault Contract or approve accounts to redeem from Vault Contract
1. Redeem Entry Point:

```rust
#[no_mangle]
pub extern "C" fn redeem(){
    let caller: AccountHash = runtime::get_caller();
    let owner_account_uref: URef = match runtime::get_key(OWNER_ACCOUNT){
        Some(key) => key,
        None => runtime::revert(ApiError::MissingKey)
    }.into_uref().unwrap_or_revert();
    let owner_account: AccountHash = storage::read_or_revert(owner_account_uref);
    let amount: U512 = runtime::get_named_arg(ARG_AMOUNT);
    let approved_list_uref: URef = match runtime::get_key(APPROVED_LIST){
        Some(key) => key,
        None => runtime::revert(ApiError::MissingKey)
    }.into_uref().unwrap_or_revert();
    let approved_list_option = storage::dictionary_get::<Vec<AccountHash>>(approved_list_uref, &owner_account.to_string()).unwrap_or_revert();
    let approved_list:Vec<AccountHash> = match approved_list_option{
        Some(list) => list,
        None => runtime::revert(ApiError::MissingKey)
    };

    if owner_account != caller && !approved_list.contains(&caller){
        runtime::revert(ApiError::PermissionDenied);
    };
    let stored_purse_uref: URef = match runtime::get_key(ARG_DESTINATION){
        Some(key) => key,
        None => runtime::revert(ApiError::MissingKey)
    }.into_uref().unwrap_or_revert();
    system::transfer_from_purse_to_account(stored_purse_uref, caller, amount, None);
}
```
To redeem from the Vault Contract (C2), call the "redeem" Entry Point of Vault Contract (C2).
Above you see an example from [main.rs](https://github.com/jonas089/C3PRL0CK/blob/master/contract/src/main.rs) in Contract (C1).
C1 and C2 have to share this Entry Point, as C2 is installed through C1.
We are however not interested in calling any Entry Point other than "migrate" in the context of C1.
You can use the casper-client or an SDK to call entry points on Smart Contracts.

2. Approve Entry Point:

```rust
#[no_mangle]
pub extern "C" fn approve(){
    let owner_account_uref: URef = match runtime::get_key(OWNER_ACCOUNT){
        Some(key) => key,
        None => runtime::revert(ApiError::MissingKey)
    }.into_uref().unwrap_or_revert();
    let owner_account: AccountHash = storage::read_or_revert(owner_account_uref);
    let new_account: AccountHash = runtime::get_named_arg(ARG_ACCOUNT);
    let approved_list_uref: URef = match runtime::get_key(APPROVED_LIST){
        Some(key) => key,
        None => runtime::revert(ApiError::MissingKey)
    }.into_uref().unwrap_or_revert();
    let approved_list = storage::dictionary_get::<Vec<AccountHash>>(approved_list_uref, &owner_account.to_string()).unwrap_or_revert();
    let res = match approved_list{
        Some(mut v) => {
            v.push(new_account);
            v
        },
        None => {
            let mut _approved_list: Vec<AccountHash> = Vec::new();
            _approved_list.push(new_account);
            _approved_list
        }
    };
    storage::dictionary_put(approved_list_uref, &owner_account.to_string(), res);
}
```
The "destination" purse is not the only named key that C2 holds. We also specified an approval list in C2's named keys.
To successfully redeem funds from C2, one has to either be the installer/ "owner" or a member of the approval list.
The installer can add account_hashes to the approval list through the "approve" entry point described above.

## Multi Sig Session Code Example
[Example Session Code](https://github.com/casper-ecosystem/two-party-multi-sig/blob/main/contract/src/main.rs)
```rust
#[no_mangle]
pub extern "C" fn call() {
    // Account hash for the account to be associated.
    let deployment_account: AccountHash = runtime::get_named_arg(ASSOCIATED_ACCOUNT);

    // Add the CA key to half the deployment threshold (i.e 1)
    account::add_associated_key(deployment_account, Weight::new(1)).unwrap_or_revert();

    // Deployment threshold <= Key management threshold.
    // Therefore update the key management threshold value.
    account::set_action_threshold(ActionType::KeyManagement, Weight::new(2)).unwrap_or_revert();

    // Set the deployment threshold to 2 enforcing multisig to send deploys.
    account::set_action_threshold(ActionType::Deployment, Weight::new(2)).unwrap_or_revert();
}
```

## Videos and Tutorials

To learn more about versioning contracts, consult the following video, which builds upon the previous topics and videos in the [Writing On-Chain Code](/writing-contracts) documentation.

<p align="center">
<iframe width="400" height="225" src="https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=10" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>

Or, for a different perspective, consult the [Smart Contract Upgrade Tutorial](/dapp-dev-guide/tutorials/upgrade-contract.md).
