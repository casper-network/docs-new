# G

---

[A](/glossary/A.md) [B](/glossary/B.md) [C](/glossary/C.md) [D](/glossary/D.md) [E](/glossary/E.md) [F](/glossary/F.md) [G](/glossary/G.md) [H](/glossary/H.md) [I](/glossary/I.md) [J](/glossary/J.md) [K](/glossary/K.md) [L](/glossary/L.md) [M](/glossary/M.md) [N](/glossary/N.md) [O](/glossary/O.md) [P](/glossary/P.md) [Q](/glossary/Q.md) [R](/glossary/R.md) [S](/glossary/S.md) [T](/glossary/T.md) [U](/glossary/U.md) [V](/glossary/V.md) [W](/glossary/W.md) [X](/glossary/X.md) [Y](/glossary/Y.md) [Z](/glossary/Z.md)

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

When thinking of a [blockchain](/glossary/B.md#blockchain) as a decentralized computer, the global state is its memory state.

When thinking of a [blockchain](/glossary/B.md#blockchain) as a shared database, the global state is the snapshot of the database's data.

Technically, a [global state](/glossary/G.md#global-state) is a (possibly extensive) collection of key-value pairs, where the keys are references (Refs), and the values are large binary objects (BLOBs).

For every [block](/glossary/B.md#block) B in the [blockchain](/glossary/B.md#blockchain), one can compute the [global state](/glossary/G.md#global-state) achieved by executing all [transactions](/glossary/T.md#transaction) in this block and its ancestors. The [root hash](/glossary/R.md#root-hash) identifying this state is stored in every executed block.
