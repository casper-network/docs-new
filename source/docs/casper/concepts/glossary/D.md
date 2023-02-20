# D

---

[A](/concepts/glossary/A.md) [B](/concepts/glossary/B.md) [C](/concepts/glossary/C.md) [D](/concepts/glossary/D.md) [E](/concepts/glossary/E.md) [F](/concepts/glossary/F.md) [G](/concepts/glossary/G.md) [H](/concepts/glossary/H.md) [I](/concepts/glossary/I.md) [J](/concepts/glossary/J.md) [K](/concepts/glossary/K.md) [L](/concepts/glossary/L.md) [M](/concepts/glossary/M.md) [N](/concepts/glossary/N.md) [O](/concepts/glossary/O.md) [P](/concepts/glossary/P.md) [Q](/concepts/glossary/Q.md) [R](/concepts/glossary/R.md) [S](/concepts/glossary/S.md) [T](/concepts/glossary/T.md) [U](/concepts/glossary/U.md) [V](/concepts/glossary/V.md) [W](/concepts/glossary/W.md) [X](/concepts/glossary/X.md) [Y](/concepts/glossary/Y.md) [Z](/concepts/glossary/Z.md)

---

## dApp {#dapp}

A decentralized application (dApp) employs [smart contracts](/concepts/glossary/S.md#smart-contract) installed on a decentralized peer-to-peer network such as a blockchain.

## Delegation rate {#delegation-rate}

Node operators ([validators](/concepts/glossary/V.md#validator)) define a delegation rate that they take in exchange for providing staking services. This delegation rate is a percentage of the rewards that the node operator retains for their services.

## Delegator {#delegator}

Delegators are users who participate in the platform's security by delegating their tokens to validators (which adds to their weight) and collecting a part of the rewards proportional to their delegations, net of a cut ("delegation rate") that is collected by the validator.

## Deploy {#deploy}

Deploys are units of work when executed cause global state to be altered. Deploys can contain Wasm to be executed and/or Wasm to be stored on chain. Among many examples, Deploys can transfer tokens from one Account's purse to another, reward node validation, or execute Wasm on the network.

All deploys on a Casper network can be broadly categorized as some unit of work that, when executed and committed, affects change to the [global state](/concepts/glossary/G.md#global-state).

Review the [deploy data structure](/concepts/design/serialization-standard.md#deploy) and the [deploy implementation](https://github.com/casper-network/casper-node/blob/master/node/src/types/deploy.rs#L475) for more details.

## Dictionary {#dictionary}

A `Dictionary` is a storage data structure on a Casper network. Dictionaries represent a more efficient and scalable form of data storage when compared to [`NamedKeys`](/concepts/glossary/N.md#namedkeys).

More information can be found in the [Reading and Writing to Dictionaries](/concepts/dictionaries.md) document.