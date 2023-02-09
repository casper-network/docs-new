# P

---

[A](/glossary/A.md) [B](/glossary/B.md) [C](/glossary/C.md) [D](/glossary/D.md) [E](/glossary/E.md) [F](/glossary/F.md) [G](/glossary/G.md) [H](/glossary/H.md) [I](/glossary/I.md) [J](/glossary/J.md) [K](/glossary/K.md) [L](/glossary/L.md) [M](/glossary/M.md) [N](/glossary/N.md) [O](/glossary/O.md) [P](/glossary/P.md) [Q](/glossary/Q.md) [R](/glossary/R.md) [S](/glossary/S.md) [T](/glossary/T.md) [U](/glossary/U.md) [V](/glossary/V.md) [W](/glossary/W.md) [X](/glossary/X.md) [Y](/glossary/Y.md) [Z](/glossary/Z.md)

---

## Partial synchrony {#partial-synchrony}

Partial synchrony is used to define the fault tolerance of a consensus protocol, which is a time-bound mechanism to note suspicions or problems (failure, crashes, etc.). When a protocol is provably live under partial synchrony, it means that the nodes will make a decision within a fixed time period. Once the decision is made and a block is committed, it cannot be reverted. Also, see [CBC](/glossary/C.md#cbc).

## Participate in consensus {#participate-in-consensus}

The process of following the [consensus](/glossary/C.md#consensus) algorithm. The primary participants are [validators](/glossary/V.md#validator), bonded with their stake and part of the validator set for that particular era. [Delegators](/glossary/D.md#delegator) participate indirectly by delegating their tokens to one or more of these validators and contributing by increasing the total stake that ensures the security of the network.

## Payment code {#payment-code}

The _payment code_ is the [Wasm](/glossary/W.md#webassembly) program that pays the transaction execution fee.

## Peer node {#peer-node}

A node on a peer-to-peer (P2P) network.

## Permissionless

A permissionless blockchain network has its consensus and transaction validation process open and available for anyone to participate. Being permissionless is an essential characteristic of most public blockchains, enabling decentralization, transparency, and value exchange between participants.

## Primary token {#primary-token}

See [CSPR](/glossary/C.md#cspr).

## Private key {#private-key}

See [secret key](/glossary/S.md#secret-key).

## Proof-of-Stake {#proof-of-stake}

Proof-of-Stake (PoS) is a mechanism by which a cryptocurrency blockchain network achieves permissionless-ness. The voting power in consensus is proportional to the number of staked tokens (digital currency specific to this system). The validator vouches with their tokens for the correct operation of their node. A popular choice in such systems is to periodically (once per era, in our case) delegate a fixed size committee of participants, which then is responsible for running the consensus on which blocks to add to the blockchain.

## Proof-of-Work {#proof-of-work}

A mechanism used in Bitcoin and Etherium for incentivizing participation and securing the system. In these protocols, a participant's voting power is proportional to the amount of computational power possessed.

## Proof-of-Stake contract {#proof-of-stake-contract}

The Proof-of-Stake (PoS) contract holds on to transaction fees for the time while the state transition is happening (contracts are being executed). The PoS contract remits the transaction fees to the block proposer.

## Proposer {#proposer}
The proposer is a selected validator by a Casper network to propose the next block. A validator becomes a proposer by proposing a block to be added to the chain and receiving the appropriate reward. The proposing process assures that new blocks will be added to the blockchain.

## Proto block {#proto-block}

The block proposed by the leader, which the consensus processes (in [highway](/glossary/H.md#highway)). Only after consensus is complete, the proto block is executed, and the global state is updated.

A leader is selected from the validator set of that era for each round. The chance of getting selected as a leader is in proportion to the stake one has in that era.

## Purse {#purse}

A `purse` is a unique type of [URef](/glossary/U/#uref) representing a token balance. An account's *main purse* represents the balance of CSPR tokens (in [motes](/glossary/m/#motes)) the account has access to on a Casper network. An account may have more than one purse in some instances. More information on purses can be found [here](/design/casper-design/#urefs-and-purses).