# S

---

[A](/concepts/glossary/A.md) [B](/concepts/glossary/B.md) [C](/concepts/glossary/C.md) [D](/concepts/glossary/D.md) [E](/concepts/glossary/E.md) [F](/concepts/glossary/F.md) [G](/concepts/glossary/G.md) [H](/concepts/glossary/H.md) [I](/concepts/glossary/I.md) [J](/concepts/glossary/J.md) [K](/concepts/glossary/K.md) [L](/concepts/glossary/L.md) [M](/concepts/glossary/M.md) [N](/concepts/glossary/N.md) [O](/concepts/glossary/O.md) [P](/concepts/glossary/P.md) [Q](/concepts/glossary/Q.md) [R](/concepts/glossary/R.md) [S](/concepts/glossary/S.md) [T](/concepts/glossary/T.md) [U](/concepts/glossary/U.md) [V](/concepts/glossary/V.md) [W](/concepts/glossary/W.md) [X](/concepts/glossary/X.md) [Y](/concepts/glossary/Y.md) [Z](/concepts/glossary/Z.md)

---

## Safe {#safe}

When a protocol is provably safe, it means that all the participating nodes will make the same decision and continue to produce blocks at some interval. Also, see [CBC](/concepts/glossary/C.md#cbc).

## Secret key {#secret-key}

A cryptographic and confidential key that signs transactions to ensure their correct execution (carrying out only the user's intended operations).

## Seigniorage {#seigniorage}

The reward mechanism by which validators are rewarded for participating in consensus. New tokens are minted and given to validators.

## Session code {#session-code}

_Session code_ is Wasm executed in the context of an account through sending a [Deploy](/concepts/glossary/D/#deploy). The _session code_ contains code the user wishes to execute against the blockchain. When the session code executes, it performs changes to global state.

## Slashing {#slashing}

In Proof-of-Stake, the deposit acts as collateral. The validator guarantees that it correctly follows the protocol. If the validator node violates the protocol, the deposited amount gets _slashed_, i.e., a part of it is removed.

## Smart contract {#smart-contract}

Smart contracts are self-executing computer programs that perform specific actions based on pre-programmed terms stored on the blockchain. Once the pre-programmed terms are met, the smart contract executes the action and eliminates the need for a centralized third party.

On a Casper network, a smart contract is a WebAssembly (Wasm) program that the network stores as a value in the [global state](/concepts/glossary/G.md#global-state). The execution of a smart contract causes changes to the global state.

A smart contract can be invoked by a transaction or by another smart contract. Smart contracts can declare input data as the arguments of a function. When invoking a smart contract, one must provide the input values.

## Smart-contract platform {#smart-contract-platform}

A smart contract platform provides the required blockchain environment for the creation, deployment, and execution of smart contracts.

## Staker {#staker}

A person that deposits tokens in the [proof-of-stake](/concepts/glossary/P.md#proof-of-stake) contract. A staker is either a [validator](/concepts/glossary/V.md#validator) or a [delegator](/concepts/glossary/D.md#delegator). Stakers take on the slashing risk in exchange for rewards. Stakers will deposit their [tokens](/concepts/glossary/T.md#token) by sending a bonding request in the form of a transaction (deployment) to the system. If a validator is [slashed](#slashing), the staker will lose their tokens.

## Staking {#staking}

A feature of Proof-of-Stake protocols that allows token holders to actively participate in the protocol, thus securing the network. The [Staking Guide](/concepts/economics/staking.md) highlights the steps required to stake CSPR tokens on the Casper Mainnet.

## State root hash {#state-root-hash}

The state root hash is an identifier of the network's [global state](/concepts/glossary/G.md#global-state) at a moment in time. The state root hash changes with each block executed, containing deploys. Normally, empty blocks do not modify global state. But, if the empty block is the last one in an era, it will also change the state root hash due to changes introduced by the auction contract calculating the validators for future eras.

## Stateful {#stateful}

Stateful execution depends on a previous state, which makes the output differ each time. Such executions are performed with the context of previous executions and the current execution may be affected by what happened during previous executions.

## Stateless {#stateless}

Stateless means that the execution doesn't depend on a previous state, so the output of the execution is the same each time. It does not save or reference information about previous executions. Each execution is from scratch as if for the first time.

## Switch Block {#switch-block}

A `Switch Block` is the final block in an era, which contains the `era_summary`. See also [booking block](/concepts/glossary/B/#booking-block).
