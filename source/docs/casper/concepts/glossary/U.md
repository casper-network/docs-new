# U

---

[A](/glossary/A.md) [B](/glossary/B.md) [C](/glossary/C.md) [D](/glossary/D.md) [E](/glossary/E.md) [F](/glossary/F.md) [G](/glossary/G.md) [H](/glossary/H.md) [I](/glossary/I.md) [J](/glossary/J.md) [K](/glossary/K.md) [L](/glossary/L.md) [M](/glossary/M.md) [N](/glossary/N.md) [O](/glossary/O.md) [P](/glossary/P.md) [Q](/glossary/Q.md) [R](/glossary/R.md) [S](/glossary/S.md) [T](/glossary/T.md) [U](/glossary/U.md) [V](/glossary/V.md) [W](/glossary/W.md) [X](/glossary/X.md) [Y](/glossary/Y.md) [Z](/glossary/Z.md)

---

## Unbonding {#unbonding}

Withdrawing money from the [auction](/glossary/A.md#auction) contract with _withdraw bid_ and possibly ceasing to be a validator. The unbonding request is a transaction that informs the auction contract that the sender wants to decrease their deposit. In the next booking block, only the decreased deposit is considered when determining a future validator set. If it has been decreased to 0, the sender will not be included in the validator set anymore. However, the amount only gets transferred to the sender after the unbonding period. If during that period their node exhibits a fault, the unbonded amount can still be slashed.

## URef {#uref}

An **U**nforgeable **Ref**erence, used by a Casper network to store any value other than `Account`. More information can be found [here](/concepts/design/casper-design/#uref-head).

## Users {#users}

Users execute session and contract code using the platform's computational resources.
