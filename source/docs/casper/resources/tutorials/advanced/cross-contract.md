import useBaseUrl from '@docusaurus/useBaseUrl';

# Cross Contract Communication

Level of the tutorial: `Advanced`

Time to complete the tutorial: `45 - 60 Minutes`

Important topics to read before going further:

- [getting started](../../../developers/writing-onchain-code/getting-started.md)
- [writing on-chain code](../../../developers/writing-onchain-code/simple-contract.md)
- [calling contracts](../../../developers/writing-onchain-code/calling-contracts.md)

This will assure that you have needed tools and base knowledge to complete this tutorial. If not everything was clear while reading these sections, don't worry as we will be doing a full walkthrough step by step.

## Outline of the tutorial {#outline}

This tutorial covers all possible variations of cross contract communication. While it not necessary when writing a simple contract which doesn't have to interact with other deployed contracts it is nontheless important to understand the ways to achieve this feat.

On a very high level a smart contract behaves like a class in object oriented programming. This would suggest, that the principles for object oriented programming also apply for smart contract development. What interests us the most is the responsibility separation of classes. On a conceptual level for very simple functionalities there is no need to separate the logic between more smart contracts. It is advised to think about it and preplan the development. A smart contract on Casper Network can be always updated, but for more complex scenarios there is a need to fully understand how the project can be segrageted into smaller units of logical work.

To better visualise this behaviour let's shortly look how the uniswap v2 protocol is built.

Uniswap v2 protocol consists of multiple smart contracts which govern a unified blockchain application and each contract serves a different purpose.
The contracts are as follows:
- Factory
- Pair
- Pair (ERC20)
- Library
- Router01
- Router02

Even considering the names of the smart contracts we can see that each smart contract should have a different function.
The Factory contract is generally used to create a token pair. It throws an event that a pair has been created and allows the user to read the pair created. The most important to notice is that the generation of a token pair actually creates a contract of type Pair under a new address hash.
The Pair smart contract is used to perform operations like mint or burn on a created pair of tokens.

The principle of responsibility separation is blockchain agnostic so analizing multi-contract applications will benefit every smart contract developer regardless of the technology used.
Having this in mind we will be building two contracts which reference each other in some shape or form. We will look at how the keys are deployed in the contracts context and how we can pass the contract hash into a deployed contract so another contract can be called.

## Creating the Project {#create-project}

In the appropriate folder create the project for the contract as follows:

```bash
cargo casper cross-contract
```

This will create the following structure under your desired smart contract folder:

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

After the project directory structure is created use the following commands to go into the project folder and compile the files:

```bash
cd cross-contract
make prepare
make build-contract
```

This will also create a target folder under the contract folder where the .wasm of the contract can be found.
Additionally you can check if the tests can be performed using the following command:

```bash
make test
```

This should produce the following outcome:

```bash
running 2 tests
test tests::should_error_on_missing_runtime_arg ... ok
test tests::should_store_hello_world ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.09s
```

:::tip

If this is not the case and an error has been produced similar to:

```bash
warning: `tests` (bin "integration-tests" test) generated 2 warnings
error: could not compile `tests` due to 3 previous errors; 2 warnings emitted
make: *** [test] Error 101
```

It is useful to check the dependencies in Cargo.toml if they all are still up to date. There can be a delay after the update of the network and update of the crates which might cause some problems during the development and testing process.

:::

## Changing the standard contract {#changing-contract}

The standard casper contract from the crate constructor has some methods that we will reuse however we will be getting rid of most of automaticaly created code. You might think it is better to create everything from scratch but `cargo casper` creates a proper folder structure with all appropriate dependencies so it is always better to use it for setting up a clean development environment for the smart contract part.

After removing the obsolete code from `main.rs` in your project you should have a structure exactly as displayed below.

```bash
#![no_std]
#![no_main]

#[cfg(not(target_arch = "wasm32"))]
compile_error!("target arch should be wasm32: compile with '--target wasm32-unknown-unknown'");

// We need to explicitly import the std alloc crate and `alloc::string::String` as we are in a
// `no_std` environment.
extern crate alloc;

use alloc::string::String;

use casper_contract::{
    contract_api::{runtime, storage},
    unwrap_or_revert::UnwrapOrRevert,
};
use casper_types::{ApiError, Key};


#[no_mangle]
pub extern "C" fn call() {

}
```
This will serve as a base for introducing the elements needed for the cross contract communication.

The first thing to be defined in a contract should be the call function. Since we are already drawing parallels between classes and smart contracts, this function could be understood as a `constructor` for the contract. Everything that will find itself in the call function will be visible as metadata on the network in the contract context. 
You should already be familiar with updating the call function from the writing on chain code. To refresh this knowledge let's just summarize the steps once more:

1. Definition of entry points of the contract.
2. Definition of the named keys which will be saved in the contract.
3. Creating a new contract object which will be saved in the global state.

These steps are always necessary and obligatory when starting writing a contract. If you need further information read carefully the information under the links listed in the beginning of the tutorial.

Let us fill the call function to see how our next step will look like.

```bash
#![no_std]
#![no_main]

#[cfg(not(target_arch = "wasm32"))]
compile_error!("target arch should be wasm32: compile with '--target wasm32-unknown-unknown'");

// We need to explicitly import the std alloc crate and `alloc::string::String` as we are in a
// `no_std` environment.
extern crate alloc;

// the elementary types 
use alloc::string::String;
use alloc::vec::Vec;
use alloc::collections::BTreeMap;
use crate::alloc::string::ToString;


// casper crates
use casper_types::{Key, CLType, Parameter, EntryPoint, EntryPoints, EntryPointType, EntryPointAccess};

use casper_contract::{
    contract_api::{runtime, storage},
    unwrap_or_revert::UnwrapOrRevert,
};


#[no_mangle]
pub extern "C" fn call() {

    // get the value of a passed parameter with the key "message"
    let value: String = runtime::get_named_arg("message");

    // the value will be wraped in a URef
    let value_ref = storage::new_uref(value);

    // creating the new set of named keys
    // the keys are a Map of Key/Value 
    let mut named_keys: BTreeMap<String, Key> = BTreeMap::new();

    // insert the new value into the named keys
    named_keys.insert(String::from("message"),value_ref.into()); // use into to wrap the value to the key
    // create a new vector 
    let mut vec = Vec::new();
    vec.push(Parameter::new("message", CLType::String));

    // create an Entry Point Object
    let mut entry_points = EntryPoints::new();

    // add the entry point to the entry points object
    entry_points.add_entry_point(EntryPoint::new(
        "update_msg",                   // the name of the entry point
        vec,                            // the arguments which can be passed into the entry point
        CLType::Unit,                   // return type of the entry point
        EntryPointAccess::Public,       // acces permissions - public can be accessed always
        EntryPointType::Contract        // in most cases it will be contract
    ));

    // the contract is stored in the global state
    let (stored_contract_hash, _contract_version) = storage::new_contract(
        entry_points,                                       // entry points
        Some(named_keys),                                   // named keys 
        Some("Hello_world_package_name".to_string()),       // package name
        Some("Hello_world_access_uref".to_string())         // access uref
    );

    // to access from the account - named keys of the account
    runtime::put_key("hello_world_contract", stored_contract_hash.into());

}
```

:::tip

We should notice that that runtime and storage appear quite frequently in our code. If you didn't have a chance to check out those modules yet it would be a perfect time to do so: [contract API](https://docs.rs/casper-contract/latest/casper_contract/contract_api/index.html).
The amount of native functions isn't that large so it might be advisable to think about which one of those could be used with your scenario.

:::

You should always keep the entry points and the functions of the contract in sync. If there is an entry point with name `update_msg` there should be also a function with the same name in the contract.

This is presented below:

```bash

#[no_mangle]
pub extern "C" fn update_msg() {

    // get the argument from the runtime so from the outside call
    let value: String = runtime::get_named_arg("message");

    // get the uref of the message stored in the global state
    let uref = runtime::get_key("message").unwrap_or_revert().into_uref().unwrap_or_revert();

    // write the new message to the global state
    storage::write(uref, String::from(value));
}

```

You can always try out storing different types in the context. A distinction between storing data in the context of a smart contract and using dictionaries has to be mentioned. The dictionaries can be used to store the data which is dapp centric. Just be sure to remember that the dictionary is not an SQL Database and only what is necessary and should be stored on the blockchain can go into the dictionary. The types stored in the contracts context could be regarded more as key links between parts of a bigger application.


## Deploying the contract {#deploying-contract}

There are many different possibilities to deploy a contract. The simplest would be using the CLI with the [put_deploy](../../../developers/cli/installing-contracts.md).
If you are doing only blockchain smart contract development and you aren't dealing with full-stack applications, this might be the primary way for you to interface with Casper Network.
We will be discussing how to deploy a smart contract and call its endpoints using CLI in this tutorial. We will be also showing how the to search for the deployed contract on the cspr.live and how CLI and data present on the Casper Block Explorer can provide a big picture of the deployed contract.

Perform the following actions from the [installing contracts](../../../developers/cli/installing-contracts.md) tutorial and make sure everything is in place:
1. Generate the keys using either casper-client command or with the block explorer.
2. Fund your account on the Testnet. This should net you 2.000 CSPR which you can use for testing.

After those actions have been performed you can deploy your contract to the Casper Network.

Compile the contract in the contract directory so you obtain the contracts `.wasm`: 

```bash
cd cross-contract
make prepare
make build-contract
```

In the end this should produce the following outcome:

```bash
cd contract && cargo build --release --target wasm32-unknown-unknown
    Finished release [optimized] target(s) in 0.13s
wasm-strip contract/target/wasm32-unknown-unknown/release/contract.wasm 2>/dev/null | true
```

With this step everything is in place to deploy the contract. It is always useful to keep a `.txt` file while using the CLI. This will save you time when interacting with the terminal commands.

Since we are using a standard contract structure the command called from the `cross-contract` folder should be the following:

```bash
casper-client put-deploy \
    --node-address http://136.243.187.84:7777 \
    --chain-name casper-test \
    --secret-key ./keys/secret_key.pem \
    --payment-amount 20000000000 \
    --session-path ./contract/target/wasm32-unknown-unknown/release/contract.wasm \
    --session-arg "message:string='hello world'"
```

The output of this command is:

```bash
{
  "id": -9119604526598719721,
  "jsonrpc": "2.0",
  "result": {
    "api_version": "1.4.13",
    "deploy_hash": "af42bc6dbc58f677d138eb968d897f965f1ed118a40980bc16efbcc2a0c71832"
  }
}
```

To verify if the contract was deployed successfuly we will call `get-deploy` providing the hash received from the `put-deploy`.

```bash
casper-client get-deploy \
    --node-address http://136.243.187.84:7777 af42bc6dbc58f677d138eb968d897f965f1ed118a40980bc16efbcc2a0c71832
```

This should produce the json output containing all the information regarding for example header data, approvers and payments. Take your time to familiarize yourself with the structure of the output. 

Since `af42bc6dbc58f677d138eb968d897f965f1ed118a40980bc16efbcc2a0c71832` is the deploy hash we can find this contract using the block explorer. When viewing through the explorer the status of the Deploy should be marked as `Success`.

In the account on the `cspr.live` in the tab `Named Keys` all of the contracts deployed using the private key connected with this account will be linked. Clicking the contract hash you can see all of the entry points of the contract as well as the named keys (parameters) with which the contract has been deployed. Just remember to keep the named keys organised so you don't loose overview during bigger implementations.

We can see a Tab `Deploys` in the contract as well. This is empty for now. If we had a cross-contract call within the developed contract and an entry point would have been called from a different contract this would mean that a Deploy has been invoked from this contract. We will see this behaviour when calling a different contract. For now just make sure to note the hash of the contract, which is `hash-b7a06298cc71d4cac05929cc0713dfd5a541c68b71cb500cd04547b5cd0385ea`, we will be using that soon.

## Create another contract for the cross-contract call {#cross-contract}

Let us write a contract, which we will also deploy on the Casper Network. This smart contract will contain an `call_contract_2` endpoint and after it's invocation the previous contracts endpoint `update_msg` will be called. This will provide us with more information regarding the behaviour of cross-contract communication.

There are many possibilities to develop a cross contract communication. Some variants might include:
- using the contract key to read the hash of the contract from the global state and use the hash for the calls
- passing the contract hash as argument into the caller method and use this to perfom the calls at the destination contract

In this tutorial we will be focusing on the second variation.

Similarily to the first contract let us construct the endpoints and prepare the method which will call the second contract entrypoint.

Prepare the `call` contract method as described below:

```bash

#[no_mangle]
pub extern "C" fn call() {
    
    // create a new vector - this will be the signature of the entrypoint
    let mut vec = Vec::new();
    vec.push(Parameter::new("new_message", CLType::String));
    vec.push(Parameter::new("hello_world_contract", CLType::Key));

    // In the named keys of the contract, add a key for the count.
    let mut named_keys = NamedKeys::new();

    // create an Entry Point Object
    let mut entry_points = EntryPoints::new();

    // add the entry point to the entry points object
    entry_points.add_entry_point(EntryPoint::new(
       "call_contract_2",
       vec,
       CLType::Unit,
       EntryPointAccess::Public,
       EntryPointType::Contract
    ));

    // the contract is stored in the global state
    let (stored_contract_hash, _contract_version) = storage::new_contract(
       entry_points,                                        // entry points
       Some(named_keys),                                    // named keys 
       Some("contract2_package_name".to_string()),          // package name
       Some("contract2_access_uref".to_string())            // access uref
    );

    // to access from the account - named keys of the account
    runtime::put_key("cross_contract_2", stored_contract_hash.into());
}

```

This would be the easiest implementation of the call function. There is only one entry point which accepts the key `contract2` of type `String` and the key `hello_world_contract` of the type `Key`. There aren't any named keys which will be saved in the contracts context. The contract is then stored in the global state and placed as a named key in the accounts context.

As we defined the `call_contract_2` endpoint, we should implement it as well. This endpoint will take the second contract hash as an argument and call the enpoint `update_msg` with appropriate message which will then change in the second contracts context. To be more interesting we wil be passing the new message also as a parameter to the function.

```bash
#[no_mangle]
pub extern "C" fn call_contract_2() {

    // get the contract hash from the named arguments passed to the call
    let contract_hash: ContractHash = runtime::get_named_arg::<Key>(CONTRACT_HASH)
    .into_hash()
    .map(|hash| ContractHash::new(hash))
    .unwrap();

    // get the value of the second parameter to which message should be changed
    let new_value: String = runtime::get_named_arg("new_message");

    // Call Counter to increment the value.
    let _: () = runtime::call_contract(
        contract_hash, 
        "update_msg", 
        runtime_args! {
            "message" => new_value,
        },
    );

}
```

The logic will take the contract hash from the `hello_world_contract` field and the new message from the `new_message` field and make further contract calls.

Some additional parameters have to be imported at the beginning of the contract so it should look similar to the imports below:

```bash

// the elementary types 
use alloc::string::String;
use alloc::vec::Vec;
use crate::alloc::string::ToString;
use crate::runtime_args::RuntimeArgs;

// casper crates
use casper_types::{
    api_error::ApiError,
    contracts::NamedKeys, runtime_args, CLType, Key, ContractHash, Parameter, EntryPoint, EntryPoints, EntryPointType, EntryPointAccess};

use casper_contract::{
    unwrap_or_revert::UnwrapOrRevert,
    contract_api::{runtime, storage},
};

// the contract key in the passed arguments
const CONTRACT_HASH: &str = "hello_world_contract";

```

After `make build-contract` you should obtain the outcome:

```bash
cd contract && cargo build --release --target wasm32-unknown-unknown
   Compiling contract v0.1.0 (/Users/karolmarter/Desktop/Rust_Projects/cross-contract-2/contract)
    Finished release [optimized] target(s) in 0.69s
wasm-strip contract/target/wasm32-unknown-unknown/release/contract.wasm 2>/dev/null | true
```

Be sure to copy the keys from the previous folder to the new contract folder. We will not be creating a new set of keys and instead reusing those which we already have. The call from the terminal will look as follows:

```bash
casper-client put-deploy \
    --node-address http://136.243.187.84:7777 \
    --chain-name casper-test \
    --secret-key ./keys/secret_key.pem \
    --payment-amount 20000000000 \
    --session-path ./contract/target/wasm32-unknown-unknown/release/contract.wasm
```

:::tip

We can notice that the contract.wasm is always the same when creating a new `cargo casper` project. While this is not crucial for small projects try to name the contracts appropriately in the `Makefile` in the main directory. We encourage to look at it and experiment a little with what happens when the `.wasm` filename will be changed and the following commands are called:

```bash
make prepare
make build-contract
```
:::

After the deploy we can check if it was successful and control the parameters of the deployed entrypoints.

The output of the deployment is:

```bash
{
  "id": -7557689417621513622,
  "jsonrpc": "2.0",
  "result": {
    "api_version": "1.4.13",
    "deploy_hash": "faeb7e4f010c20c88d2dd126da545933c26fd8ce370282b8cd49f7f6fe7304b9"
  }
}
```
:::tip

If the contract name doesn't change during concurrent deploys, the urefs/hashes will be overwritten in the account named keys.

:::

If we control the deploy we can see that it has been successful:

<img class="align-center" src={useBaseUrl("/image/tutorials/cross-contract/Deploy.png")} width="600" alt="Deploy" />

If we check the accounts named keys we can see all of the accounts deployed contracts:

<img class="align-center" src={useBaseUrl("/image/tutorials/cross-contract/NamedKeys.png")} width="600" alt="NamedKeys" />

As we have now managed to deploy those two contracts we can call the endpoint of this contract passing appropriate arguments to the function. Just remember that invoking an entry point of the contract is also a deploy to the network.

Let us quickly check the state of the message in the first contract:

<img class="align-center" src={useBaseUrl("/image/tutorials/cross-contract/HelloWorldBCC.png")} width="600" alt="HelloWorld" />

This is a simple `hello world` string. And after invoking the endpoint using the following command the message should be changed

```bash
casper-client put-deploy \
    --node-address http://136.243.187.84:7777 \
    --chain-name casper-test \
    --secret-key ./keys/secret_key.pem \
    --payment-amount 20000000000 \
    --session-hash hash-32ad0e54e874f68706708ebfd2c5aba7803eb64ccff71a50d3c4d4f29db15c92 \
    --session-entry-point "call_contract_2" \
    --session-arg "new_message:string='Hello new message!'" \
    --session-arg "hello_world_contract:Key='hash-b7a06298cc71d4cac05929cc0713dfd5a541c68b71cb500cd04547b5cd0385ea'"
```

The contract hash has to be of type `ContractHash` in the contract itself, we can pass the hash however as a Key argument and change it to `ContractHash` in the contract function.

The output of the above command is:

```bash
{
  "id": -6419793201665396463,
  "jsonrpc": "2.0",
  "result": {
    "api_version": "1.4.13",
    "deploy_hash": "15e11340d92fc9e64deb38bd942f4efb69caad0851eec24fd577070309d18537"
  }
}
```

After the deploy finishes successfuly, you should see a similar outcome to the following:

<img class="align-center" src={useBaseUrl("/image/tutorials/cross-contract/FunctionCall2.png")} width="600" alt="FunctionCall2" />

We would expect that the value of the message reference in the other contract would have changed, which we can check:

<img class="align-center" src={useBaseUrl("/image/tutorials/cross-contract/NewHelloWorld.png")} width="600" alt="NewHelloWorld" />

With this we have succesfully built a cross contract communication between two contracts.

## Summary of the tutorial {#summary}

The goal of this tutorial was to:
- give a brief overview why the cross contract communication is sometimes necessary
- develop two rust contracts on the Casper Network where one smart contract is calling an entry point of the second smart contract
- use attributes to pass values into the smart contract during method invocation

Be sure to take your time and get back to the parts which might be unclear and try to understand how things work.