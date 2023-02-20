# U

---

[A](/concepts/glossary/A.md) [B](/concepts/glossary/B.md) [C](/concepts/glossary/C.md) [D](/concepts/glossary/D.md) [E](/concepts/glossary/E.md) [F](/concepts/glossary/F.md) [G](/concepts/glossary/G.md) [H](/concepts/glossary/H.md) [I](/concepts/glossary/I.md) [J](/concepts/glossary/J.md) [K](/concepts/glossary/K.md) [L](/concepts/glossary/L.md) [M](/concepts/glossary/M.md) [N](/concepts/glossary/N.md) [O](/concepts/glossary/O.md) [P](/concepts/glossary/P.md) [Q](/concepts/glossary/Q.md) [R](/concepts/glossary/R.md) [S](/concepts/glossary/S.md) [T](/concepts/glossary/T.md) [U](/concepts/glossary/U.md) [V](/concepts/glossary/V.md) [W](/concepts/glossary/W.md) [X](/concepts/glossary/X.md) [Y](/concepts/glossary/Y.md) [Z](/concepts/glossary/Z.md)

---

## Unbonding {#unbonding}

Withdrawing money from the [auction](/concepts/glossary/A.md#auction) contract with _withdraw bid_ and possibly ceasing to be a validator. The unbonding request is a transaction that informs the auction contract that the sender wants to decrease their deposit. In the next booking block, only the decreased deposit is considered when determining a future validator set. If it has been decreased to 0, the sender will not be included in the validator set anymore. However, the amount only gets transferred to the sender after the unbonding period. If during that period their node exhibits a fault, the unbonded amount can still be slashed.

## URef {#uref}

An **U**nforgeable **Ref**erence, used by a Casper network to store any value other than `Account`. More information can be found [here](/concepts/design/casper-design/#uref-head).

## Users {#users}

Users execute session and contract code using the platform's computational resources.
