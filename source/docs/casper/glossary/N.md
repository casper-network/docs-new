# N

---

[A](/glossary/A.md) [B](/glossary/B.md) [C](/glossary/C.md) [D](/glossary/D.md) [E](/glossary/E.md) [F](/glossary/F.md) [G](/glossary/G.md) [H](/glossary/H.md) [I](/glossary/I.md) [J](/glossary/J.md) [K](/glossary/K.md) [L](/glossary/L.md) [M](/glossary/M.md) [N](/glossary/N.md) [O](/glossary/O.md) [P](/glossary/P.md) [Q](/glossary/Q.md) [R](/glossary/R.md) [S](/glossary/S.md) [T](/glossary/T.md) [U](/glossary/U.md) [V](/glossary/V.md) [W](/glossary/W.md) [X](/glossary/X.md) [Y](/glossary/Y.md) [Z](/glossary/Z.md)

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

See [operator](/glossary/O.md#operator).

## Non-Fungible Token (NFT) {#non-fungible-token}
Cryptographic assets on a blockchain with unique identification codes and metadata that distinguish them from each other. They cannot be traded or exchanged at equivalency. This differs from fungible tokens like cryptocurrencies, which are identical to each other and, therefore, can be used as a medium for commercial transactions.
