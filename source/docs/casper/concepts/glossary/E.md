# E

---

[A](/concepts/glossary/A.md) [B](/concepts/glossary/B.md) [C](/concepts/glossary/C.md) [D](/concepts/glossary/D.md) [E](/concepts/glossary/E.md) [F](/concepts/glossary/F.md) [G](/concepts/glossary/G.md) [H](/concepts/glossary/H.md) [I](/concepts/glossary/I.md) [J](/concepts/glossary/J.md) [K](/concepts/glossary/K.md) [L](/concepts/glossary/L.md) [M](/concepts/glossary/M.md) [N](/concepts/glossary/N.md) [O](/concepts/glossary/O.md) [P](/concepts/glossary/P.md) [Q](/concepts/glossary/Q.md) [R](/concepts/glossary/R.md) [S](/concepts/glossary/S.md) [T](/concepts/glossary/T.md) [U](/concepts/glossary/U.md) [V](/concepts/glossary/V.md) [W](/concepts/glossary/W.md) [X](/concepts/glossary/X.md) [Y](/concepts/glossary/Y.md) [Z](/concepts/glossary/Z.md)

---

## Ecosystem {#ecosystem}

The ecosystem layer in Casper encompasses dApp design and operation.

## Entry point {#entry-point}

See [EntryPoint](/developers/json-rpc/types_chain/#entrypoint) and [Defining the Contract Entry Points](/developers/writing-onchain-code/simple-contract/#step-4-defining-the-contract-entry-points).

## Era {#era}

A period of time during which the validator set does not change.

In a Casper network, validators cannot join and leave at any point in time, but only at era boundaries. An era's validators are determined using an [auction](/concepts/glossary/A.md#auction). At the beginning of the era, the validators create a new instance of the Highway protocol and run this consensus protocol until they finalize the era's last block (see [booking block](/concepts/glossary/B.md#booking-block)).

## Eviction {#eviction}

Validators that fail to participate in [era](/concepts/glossary/E.md#era) will have their bid deactivated by the protocol, suspending their participation until they signal readiness to resume participation by invoking a method in the [auction contract](/concepts/glossary/A.md#auction-contract).

## External client {#external-client}

Any hardware/software connecting to a Node for the purpose of sending deploys or querying the state of the blockchain.
