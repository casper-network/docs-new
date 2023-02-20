# D

---

[A](/glossary/A.md) [B](/glossary/B.md) [C](/glossary/C.md) [D](/glossary/D.md) [E](/glossary/E.md) [F](/glossary/F.md) [G](/glossary/G.md) [H](/glossary/H.md) [I](/glossary/I.md) [J](/glossary/J.md) [K](/glossary/K.md) [L](/glossary/L.md) [M](/glossary/M.md) [N](/glossary/N.md) [O](/glossary/O.md) [P](/glossary/P.md) [Q](/glossary/Q.md) [R](/glossary/R.md) [S](/glossary/S.md) [T](/glossary/T.md) [U](/glossary/U.md) [V](/glossary/V.md) [W](/glossary/W.md) [X](/glossary/X.md) [Y](/glossary/Y.md) [Z](/glossary/Z.md)

---

## dApp {#dapp}

A decentralized application (dApp) employs [smart contracts](/glossary/S.md#smart-contract) installed on a decentralized peer-to-peer network such as a blockchain.

## Delegation rate {#delegation-rate}

Node operators ([validators](/glossary/V.md#validator)) define a delegation rate that they take in exchange for providing staking services. This delegation rate is a percentage of the rewards that the node operator retains for their services.

## Delegator {#delegator}

Delegators are users who participate in the platform's security by delegating their tokens to validators (which adds to their weight) and collecting a part of the rewards proportional to their delegations, net of a cut ("delegation rate") that is collected by the validator.

## Deploy {#deploy}

Deploys are units of work when executed cause global state to be altered. Deploys can contain Wasm to be executed and/or Wasm to be stored on chain. Among many examples, Deploys can transfer tokens from one Account's purse to another, reward node validation, or execute Wasm on the network.

All deploys on a Casper network can be broadly categorized as some unit of work that, when executed and committed, affects change to the [global state](/glossary/G.md#global-state).

Review the [deploy data structure](/concepts/design/serialization-standard.md#deploy) and the [deploy implementation](https://github.com/casper-network/casper-node/blob/master/node/src/types/deploy.rs#L475) for more details.

## Dictionary {#dictionary}

A `Dictionary` is a storage data structure on a Casper network. Dictionaries represent a more efficient and scalable form of data storage when compared to [`NamedKeys`](/glossary/N.md#namedkeys).

More information can be found in the [Reading and Writing to Dictionaries](/concepts/dictionaries.md) document.