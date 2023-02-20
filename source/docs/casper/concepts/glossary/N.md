# N

---

[A](/concepts/glossary/A.md) [B](/concepts/glossary/B.md) [C](/concepts/glossary/C.md) [D](/concepts/glossary/D.md) [E](/concepts/glossary/E.md) [F](/concepts/glossary/F.md) [G](/concepts/glossary/G.md) [H](/concepts/glossary/H.md) [I](/concepts/glossary/I.md) [J](/concepts/glossary/J.md) [K](/concepts/glossary/K.md) [L](/concepts/glossary/L.md) [M](/concepts/glossary/M.md) [N](/concepts/glossary/N.md) [O](/concepts/glossary/O.md) [P](/concepts/glossary/P.md) [Q](/concepts/glossary/Q.md) [R](/concepts/glossary/R.md) [S](/concepts/glossary/S.md) [T](/concepts/glossary/T.md) [U](/concepts/glossary/U.md) [V](/concepts/glossary/V.md) [W](/concepts/glossary/W.md) [X](/concepts/glossary/X.md) [Y](/concepts/glossary/Y.md) [Z](/concepts/glossary/Z.md)

---

## NamedKeys {#named-keys}

[NamedKeys](https://docs.rs/casper-types/latest/casper_types/contracts/type.NamedKeys.html)
are a collection of String-Key pairs used to easily identify some data on the network.

- The [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html) is the name given to identify the data
- The [Key](https://docs.rs/casper-types/latest/casper_types/enum.Key.html) is the data to be referenced


## Node {#node}

A Casper node is a physical or virtual device that is participating in a Casper network. They store, validate, and preserve the blockchain data.

You will encounter different types of nodes on the network:

-   **Bonded node**: a node that has tokens staked as bond and is part of the validator set participating in consensus in that particular era.
-   **Unbonded node**: a type of node on the network that receives and processes blocks but does not create blocks and is not a validator. It is otherwise a fully functioning node, following the consensus protocol to know the current status of the blockchain (and therefore also the VM state). Such nodes are useful for querying the status of the blockchain (e.g., to learn information about transaction finalization).

## Node operator {#node-operator}

See [operator](/concepts/glossary/O.md#operator).

## Non-Fungible Token (NFT) {#non-fungible-token}
Cryptographic assets on a blockchain with unique identification codes and metadata that distinguish them from each other. They cannot be traded or exchanged at equivalency. This differs from fungible tokens like cryptocurrencies, which are identical to each other and, therefore, can be used as a medium for commercial transactions.
