# V

---

[A](/concepts/glossary/A.md) [B](/concepts/glossary/B.md) [C](/concepts/glossary/C.md) [D](/concepts/glossary/D.md) [E](/concepts/glossary/E.md) [F](/concepts/glossary/F.md) [G](/concepts/glossary/G.md) [H](/concepts/glossary/H.md) [I](/concepts/glossary/I.md) [J](/concepts/glossary/J.md) [K](/concepts/glossary/K.md) [L](/concepts/glossary/L.md) [M](/concepts/glossary/M.md) [N](/concepts/glossary/N.md) [O](/concepts/glossary/O.md) [P](/concepts/glossary/P.md) [Q](/concepts/glossary/Q.md) [R](/concepts/glossary/R.md) [S](/concepts/glossary/S.md) [T](/concepts/glossary/T.md) [U](/concepts/glossary/U.md) [V](/concepts/glossary/V.md) [W](/concepts/glossary/W.md) [X](/concepts/glossary/X.md) [Y](/concepts/glossary/Y.md) [Z](/concepts/glossary/Z.md)

---

## Validator {#validator}

Validators are responsible for maintaining platform security by building an ever-growing chain of finalized blocks, backing this chain's security with their stakes. Their importance (often referred to as "weight") both to protocol operation and security is, in fact, equal to their stake, which includes both their own and delegated tokens.

The responsibilities of a validator include:

-   [block creation](/concepts/glossary/B.md#block-creation) and [block proposal](/concepts/glossary/B.md#block-proposal)
-   [block validation](/concepts/glossary/B.md#block-validation)
-   [block gossiping](/concepts/glossary/B.md#block-gossiping)

Validators are bonded because they are responsible for progressing the system's state as clients use it (e.g., sending deploys). Validators and [stakers](/concepts/glossary/S.md#staker) can lose their bond (be slashed) for not following the protocol correctly. Validators are also paid for by creating blocks (also by validating blocks -- though this is only indirectly; validators cannot be paid for if they do not validate by design), giving them more incentive to serve the network correctly.
