# A

---

[A](/concepts/glossary/A.md) [B](/concepts/glossary/B.md) [C](/concepts/glossary/C.md) [D](/concepts/glossary/D.md) [E](/concepts/glossary/E.md) [F](/concepts/glossary/F.md) [G](/concepts/glossary/G.md) [H](/concepts/glossary/H.md) [I](/concepts/glossary/I.md) [J](/concepts/glossary/J.md) [K](/concepts/glossary/K.md) [L](/concepts/glossary/L.md) [M](/concepts/glossary/M.md) [N](/concepts/glossary/N.md) [O](/concepts/glossary/O.md) [P](/concepts/glossary/P.md) [Q](/concepts/glossary/Q.md) [R](/concepts/glossary/R.md) [S](/concepts/glossary/S.md) [T](/concepts/glossary/T.md) [U](/concepts/glossary/U.md) [V](/concepts/glossary/V.md) [W](/concepts/glossary/W.md) [X](/concepts/glossary/X.md) [Y](/concepts/glossary/Y.md) [Z](/concepts/glossary/Z.md)

---

## Account {#account}

An Account is a structure that represents a user on a Casper network. Information on creating an account can be found [here](/concepts/design/casper-design/#accounts-head).

## Account Hash {#account-hash}

The account hash is a 32-byte hash of the public key representing the user account. Information on generating an account hash can be found [here](/faq/faq-general/#accounts).

## AssemblyScript {#assemblyscript}

AssemblyScript is a TypeScript-based programming language (JavaScript with static types) that is optimized for WebAssembly and compiled to WebAssembly using _asc_, the reference AssemblyScript compiler. It is developed by the AssemblyScript Project and the AssemblyScript community.

## Auction {#auction}

The auction determines the composition of the validator set for each era of the protocol. It is a "first-price" auction (where winning bids become stakes) with a fixed number of spots chosen to balance security with performance. Because rewards are proportional to the stake, it is expected that this competitive mechanism will provide a powerful impetus for staking as many tokens as possible.

## Auction contract {#auction-contract}

The auction contract acts as a front-end user interface to the auction by directly accepting bids from validators and delegators. It also contains the logic necessary for carrying out the auction.

## Auction delay {#auction-delay}

The number of full eras that pass between the [booking block](/concepts/glossary/B.md#booking-block) and the era whose validator set it defines. The auction delay is configurable and can be several eras long.
