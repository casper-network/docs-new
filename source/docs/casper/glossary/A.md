# A

---

[A](/glossary/A.md) [B](/glossary/B.md) [C](/glossary/C.md) [D](/glossary/D.md) [E](/glossary/E.md) [F](/glossary/F.md) [G](/glossary/G.md) [H](/glossary/H.md) [I](/glossary/I.md) [J](/glossary/J.md) [K](/glossary/K.md) [L](/glossary/L.md) [M](/glossary/M.md) [N](/glossary/N.md) [O](/glossary/O.md) [P](/glossary/P.md) [Q](/glossary/Q.md) [R](/glossary/R.md) [S](/glossary/S.md) [T](/glossary/T.md) [U](/glossary/U.md) [V](/glossary/V.md) [W](/glossary/W.md) [X](/glossary/X.md) [Y](/glossary/Y.md) [Z](/glossary/Z.md)

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

The number of full eras that pass between the [booking block](/glossary/B.md#booking-block) and the era whose validator set it defines. The auction delay is configurable and can be several eras long.
