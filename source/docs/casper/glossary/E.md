# E

---

[A](/glossary/A.md) [B](/glossary/B.md) [C](/glossary/C.md) [D](/glossary/D.md) [E](/glossary/E.md) [F](/glossary/F.md) [G](/glossary/G.md) [H](/glossary/H.md) [I](/glossary/I.md) [J](/glossary/J.md) [K](/glossary/K.md) [L](/glossary/L.md) [M](/glossary/M.md) [N](/glossary/N.md) [O](/glossary/O.md) [P](/glossary/P.md) [Q](/glossary/Q.md) [R](/glossary/R.md) [S](/glossary/S.md) [T](/glossary/T.md) [U](/glossary/U.md) [V](/glossary/V.md) [W](/glossary/W.md) [X](/glossary/X.md) [Y](/glossary/Y.md) [Z](/glossary/Z.md)

---

## Ecosystem {#ecosystem}

The ecosystem layer in Casper encompasses dApp design and operation.

## Entry point {#entry-point}

See [EntryPoint](/developers/json-rpc/types_chain/#entrypoint) and [Defining the Contract Entry Points](/resources/tutorials/beginner/rust-contracts/#step-4-defining-the-contract-entry-points).

## Era {#era}

A period of time during which the validator set does not change.

In a Casper network, validators cannot join and leave at any point in time, but only at era boundaries. An era's validators are determined using an [auction](/glossary/A.md#auction). At the beginning of the era, the validators create a new instance of the Highway protocol and run this consensus protocol until they finalize the era's last block (see [booking block](/glossary/B.md#booking-block)).

## Eviction {#eviction}

Validators that fail to participate in [era](/glossary/E.md#era) will have their bid deactivated by the protocol, suspending their participation until they signal readiness to resume participation by invoking a method in the [auction contract](/glossary/A.md#auction-contract).

## External client {#external-client}

Any hardware/software connecting to a Node for the purpose of sending deploys or querying the state of the blockchain.
