---
title: Contract Class
---

## Contract Class

The contract class on Casper contains similar elements to that of Near. The main differences are:

|                        | `Near`             | `Casper`           | 
| ---------------------- | ------------------ | ------------------ | 
| Contract's state       | Attributes define contract's state | Is stored in the `Named Keys` / `dictionaries` |
| Initialization method  | Defines initial state of the contract | The call method defines initial state of the contract |
| Public methods         | Act as contract interface | Act as contract interface |

## Defining the Contract

The contract on the Casper Blockchain is not a pure class with attributes and methods. It can be divided into the following 3 distinct sections:

1. Define the data types and import of the libraries.
2. Expose the public methods (entry points) and use of the `#[no_mangle]` line to ensure that the system does not change critical syntax within the method names.
3. Prepare the call method to include the initial state of the contract

You can find more information about writing a simple contract [here](../../../developers/writing-onchain-code/simple-contract.md).

## The State

There are three types of storing data on the Casper Blockchain:

1. [`Named Keys`](../../../concepts/serialization-standard.md#namedkey) in the Account.
2. [`Named Keys`](../../../concepts/serialization-standard.md#namedkey) in the Contract.
3. [`Dictionaries`](../../../concepts/dictionaries.md) in the `Global State`.

Simple references can be stored in the `Named Keys` of the Account or the Contract. They usually store data that can be reused in the Dapps.
The dictionaries will store the collections, which would be for example ownership of the NFTs.

## Initializing the State

The state in the Casper smart contract is initilalized by the call function. Following steps need to be performed to initialize the contract:

1. Define the runtime arguments.
2. Add the entry points into the `call` function.
3. Create the contract's `Named Keys`.
4. Create the contract object so it is stored in the global state.
5. Create additional `Named Keys`.

You can find detailed explanation of the aforementioned steps [here](../../../developers/writing-onchain-code/simple-contract.md).

## Default State

As discussed, the state in the Casper smart contract is divided between the `Named Keys` and the `dictionaries`.
The default state would mean, that there are no `Named Keys` and no `dictionaries` created during the contract deployment process. 

## Methods (Entry Points)

All entry points are defined as public. They usually do not have any parameters in the definition and the data is passed through the `args` variable.

