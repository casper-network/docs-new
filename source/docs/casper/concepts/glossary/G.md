# G

---

[A](/concepts/glossary/A.md) [B](/concepts/glossary/B.md) [C](/concepts/glossary/C.md) [D](/concepts/glossary/D.md) [E](/concepts/glossary/E.md) [F](/concepts/glossary/F.md) [G](/concepts/glossary/G.md) [H](/concepts/glossary/H.md) [I](/concepts/glossary/I.md) [J](/concepts/glossary/J.md) [K](/concepts/glossary/K.md) [L](/concepts/glossary/L.md) [M](/concepts/glossary/M.md) [N](/concepts/glossary/N.md) [O](/concepts/glossary/O.md) [P](/concepts/glossary/P.md) [Q](/concepts/glossary/Q.md) [R](/concepts/glossary/R.md) [S](/concepts/glossary/S.md) [T](/concepts/glossary/T.md) [U](/concepts/glossary/U.md) [V](/concepts/glossary/V.md) [W](/concepts/glossary/W.md) [X](/concepts/glossary/X.md) [Y](/concepts/glossary/Y.md) [Z](/concepts/glossary/Z.md)

---

## Gas {#gas}

Gas is the virtual currency for calculating the cost of transaction execution. The transaction cost is expressed as a given amount of gas consumed and can be seen intuitively as some cycles of the virtual processor that has to be used to run the computation defined as the transaction's code.

## Genesis {#genesis}

The state of the virtual machine at the beginning of the blockchain.

## Groups {#groups}
The *user groups* feature provides access control to the entry points of a contract by creating a new user group for that contract (versioned or not). This feature restricts the use of the constructor entry_point, which sets up the necessary data storage in the runtime context that belongs to the contract. Here is how it works:
- User groups associate a set of URefs with a label.
- The entry points on a contract can accept a list of labels
- The runtime checks that a URef from at least one of the allowed groups is present in the caller's context before execution.

## Global state {#global-state}

When thinking of a [blockchain](/concepts/glossary/B.md#blockchain) as a decentralized computer, the global state is its memory state.

When thinking of a [blockchain](/concepts/glossary/B.md#blockchain) as a shared database, the global state is the snapshot of the database's data.

Technically, a [global state](/concepts/glossary/G.md#global-state) is a (possibly extensive) collection of key-value pairs, where the keys are references (Refs), and the values are large binary objects (BLOBs).

For every [block](/concepts/glossary/B.md#block) B in the [blockchain](/concepts/glossary/B.md#blockchain), one can compute the [global state](/concepts/glossary/G.md#global-state) achieved by executing all [transactions](/concepts/glossary/T.md#transaction) in this block and its ancestors. The [root hash](/concepts/glossary/R.md#root-hash) identifying this state is stored in every executed block.
