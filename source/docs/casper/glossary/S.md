# S

---

[A](/glossary/A.md) [B](/glossary/B.md) [C](/glossary/C.md) [D](/glossary/D.md) [E](/glossary/E.md) [F](/glossary/F.md) [G](/glossary/G.md) [H](/glossary/H.md) [I](/glossary/I.md) [J](/glossary/J.md) [K](/glossary/K.md) [L](/glossary/L.md) [M](/glossary/M.md) [N](/glossary/N.md) [O](/glossary/O.md) [P](/glossary/P.md) [Q](/glossary/Q.md) [R](/glossary/R.md) [S](/glossary/S.md) [T](/glossary/T.md) [U](/glossary/U.md) [V](/glossary/V.md) [W](/glossary/W.md) [X](/glossary/X.md) [Y](/glossary/Y.md) [Z](/glossary/Z.md)

---

## Safe {#safe}

When a protocol is provably safe, it means that all the participating nodes will make the same decision and continue to produce blocks at some interval. Also, see [CBC](/glossary/C.md#cbc).

## Secret key {#secret-key}

A cryptographic and confidential key that signs transactions to ensure their correct execution (carrying out only the user's intended operations).

## Seigniorage {#seigniorage}

The reward mechanism by which validators are rewarded for participating in consensus. New tokens are minted and given to validators.

## Session code {#session-code}

_Session code_ is Wasm executed in the context of an account through sending a [Deploy](/glossary/D/#deploy). The _session code_ contains code the user wishes to execute against the blockchain. When the session code executes, it performs changes to global state.

## Slashing {#slashing}

In Proof-of-Stake, the deposit acts as collateral. The validator guarantees that it correctly follows the protocol. If the validator node violates the protocol, the deposited amount gets _slashed_, i.e., a part of it is removed.

## Smart contract {#smart-contract}

Smart contracts are self-executing computer programs that perform specific actions based on pre-programmed terms stored on the blockchain. Once the pre-programmed terms are met, the smart contract executes the action and eliminates the need for a centralized third party.

On a Casper network, a smart contract is a WebAssembly (Wasm) program that the network stores as a value in the [global state](/glossary/G.md#global-state). The execution of a smart contract causes changes to the global state.

A smart contract can be invoked by a transaction or by another smart contract. Smart contracts can declare input data as the arguments of a function. When invoking a smart contract, one must provide the input values.

## Smart-contract platform {#smart-contract-platform}

A smart contract platform provides the required blockchain environment for the creation, deployment, and execution of smart contracts.

## Staker {#staker}

A person that deposits tokens in the [proof-of-stake](/glossary/P.md#proof-of-stake) contract. A staker is either a [validator](/glossary/V.md#validator) or a [delegator](/glossary/D.md#delegator). Stakers take on the slashing risk in exchange for rewards. Stakers will deposit their [tokens](/glossary/T.md#token) by sending a bonding request in the form of a transaction (deployment) to the system. If a validator is [slashed](#slashing), the staker will lose their tokens.

## Staking {#staking}

A feature of Proof-of-Stake protocols that allows token holders to actively participate in the protocol, thus securing the network. The [Staking Guide](/economics/staking.md) highlights the steps required to stake CSPR tokens on the Casper Mainnet.

## State root hash {#state-root-hash}

The state root hash is an identifier of the network's [global state](/glossary/G.md#global-state) at a moment in time. The state root hash changes with each block executed, containing deploys. Normally, empty blocks do not modify global state. But, if the empty block is the last one in an era, it will also change the state root hash due to changes introduced by the auction contract calculating the validators for future eras.

## Stateful {#stateful}

Stateful execution depends on a previous state, which makes the output differ each time. Such executions are performed with the context of previous executions and the current execution may be affected by what happened during previous executions.

## Stateless {#stateless}

Stateless means that the execution doesn't depend on a previous state, so the output of the execution is the same each time. It does not save or reference information about previous executions. Each execution is from scratch as if for the first time.

## Switch Block {#switch-block}

A `Switch Block` is the final block in an era, which contains the `era_summary`. See also [booking block](/glossary/B/#booking-block).
