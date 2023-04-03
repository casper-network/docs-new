---
title: Transfers & Actions
---

# Transfers & Actions

Smart contracts on the Casper Network can perform some native `Actions` such as transferring Casper or calling other contracts.

The `Actions` can't be aggregated into `Batches` as on Near. The calls between Contracts are performed synchronously, and the values are returned immediately after the `entry point` invocation.

## Transfer CSPR

There are a few different native ways to send CSPR on the Casper Network. They require some initial setup in the Contract.

The scenario, which is the most basic one, involves sending CSPR between two purses. Be sure to familiarize yourself with this scenario [here](../../tutorials/advanced/transfer-token-to-contract.md).

There are following additional ways to transfer CSPR:

- transfer_from_purse_to_account - Transfers the `amount` of motes from the `source` purse to `target` account. If the `target` does not exist it will be created.

```rust
    system::transfer_from_purse_to_account(
        source,     // URef 
        target,     // AccountHash
        amount,     // U512
        None
    ).unwrap_or_revert();
```

- transfer_from_purse_to_public_key - Transfers the `amount` of motes from the `source` purse to the main purse of the `target`. If the account referenced by the `target` does not exist, it will be created.

```rust
    system::transfer_from_purse_to_public_key(
        source,     // URef 
        target,     // PublicKey
        amount,     // U512
        None
    ).unwrap_or_revert();
```

- transfer_to_account - Transfers `amount` of motes from from the `default purse` of the account to the `target` account. If `target` does not exist it will be created.

```rust
    system::transfer_to_account(
        target,     // AccountHash
        amount,     // U512
        None
    ).unwrap_or_revert();
```

- transfer_to_public_key - Transfers `amount` of motes from the `main purse` of the caller's account to the `main purse` of the `target`. If the account referenced by the target does not exist it will be created. 

```rust
    system::transfer_to_public_key(
        target,     // Public Key
        amount,     // U512
        None
    ).unwrap_or_revert();
```

:::info

The functions `transfer_to_account` and `transfer_to_public_key` are performed in the context of the account and should be only used inside the session code. 

:::

## Cross-Contract invocation

Cross-Contract invocation allows one contract to call `entry points` in another. Exactly as in Near, you can do the following:

1. Query the information from another contract
2. Execute methods in another contract

To understand how Cross-Contract invocation is performed, go through [this tutorial](../../tutorials/advanced/cross-contract.md).