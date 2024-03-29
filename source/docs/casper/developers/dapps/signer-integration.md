# Using the Casper Signer in dApp Development

:::caution

The Casper Signer has been deprecated and replaced with the [Casper Wallet](https://www.casperwallet.io). We are in the process of updating this page. Meanwhile, visit the guide on [Building with the Casper Wallet](https://www.casperwallet.io/develop).

:::

The [Casper Signer](https://github.com/casper-ecosystem/signer) is a browser plugin for interfacing with Casper accounts. You can interact with the Casper Signer using the `Signer` class in the [Casper JavaScript SDK](https://github.com/casper-ecosystem/casper-js-sdk/).

## Integrating with the Casper Signer

To connect to the Casper Signer from a dApp's front-end is simple. Start by importing the `Signer` class from the Casper JS SDK.

Using ES5 syntax:

```javascript
const { Signer } = require("casper-js-sdk");
```

Using ES6:

```javascript
import { Signer } from "casper-js-sdk";
```

You can then use the `Signer` class to send a connection request to the Casper Signer:

```javascript
Signer.sendConnectionRequest()
```

Check if the Casper Signer is connected using the following:

```javascript
Signer.isConnected()
```

## Creating Vaults & Accounts

You can use the available JavaScript methods to create new vaults and accounts within the Signer. A vault is designed to hold many accounts, whereas an account is an entity with a single public and private key that can interact with a Casper network.

To check if the user has created a vault, read the boolean result of the promissory function:

```javascript
Signer.hasCreatedVault()
```

To create a new vault, call the following function, providing a password for the vault:

```javascript
Signer.createNewVault("password")
```

You may also create a test account that will remain persistent in the Signer using the following code, where `privateKey` is the Base16 private key of the account as a `String`.

```javascript
Signer.createTestAccount("Account Name", privateKey)
```


## Getting an Account's Public Key

Two methods exist for getting the active account's public key in different formats. There are many reasons you may want to read the public key of the active account, the main being the use of it in a smart contract call or query. 

To get the account's public key in hexadecimal format, execute the following:

```javascript
Signer.getActivePublicKey()
```

This function resolves to a `string`, or rejects with an error.

## Signing Messages and Transactions

### Signing a message

When a message is signed with a Casper account, it serves as proof that the account owner sent the message and that the message has not been tampered with since it was signed. The signature is generated using the account's private key, which only the account owner can access. The signature can then be verified by anyone with access to the message, the signature, and the public key associated with the Casper account.

To sign a given message using the Casper JS SDK, initiate a signature request using this function, where `publicKey` is the Base16 `String`-typed public key of the active account within the Casper Signer.

```javascript
Signer.signMessage("Message to be signed", publicKey)
```


### Signing a transaction

Transactions can be forwarded to the Casper Signer to be signed by a user without revealing their private key to the application. To accomplish this, convert a valid, unsigned `Deploy` object to JSON and call the `sign` method on the `Signer` class:

```javascript
const publicKeyHex = await Signer.getActivePublicKey()

const unsignedDeploy = contract.callEntrypoint(
  "test_entrypoint",
  runtimeArguments,
  CLPublicKey.fromHex(publicKeyHex),
  "casper", // Or "casper-test" for Testnet
  "1000000000", // Gas payment, 10^9 motes or 1 CSPR
  [] // Empty signing-keys array
);

const unsignedDeployJSON = DeployUtil.deployToJSON(unsignedDeploy);

const signedDeployJSON = await Signer.sign(unsignedDeployJSON, publicKeyHex)
```

The `sign` function throws an error if the Casper Signer is not connected (see `isConnected`) or if the signing public key (`publicKeyHex` above) does not match the active public key in the Signer.

Once you have the `signedDeployJSON`, you can craft a [POST request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) to your dApp's backend, passing along the signed JSON deploy in the body. Set the `Content-Type` header to `application/json`.

## Responding to Signer Events

The Casper Signer will emit events when it changes state. Your application can update and change state as well by listening to these events.

For example, the Casper Signer will lock itself automatically after a set interval of disuse (2-10 minutes). When this occurs, the Casper Signer emits the `signer:locked` event. We can listen for this event using `addEventListener` on the `window`.

```javascript
window.addEventListener("signer:locked", (msg) => {
  // Disable buttons, forget the active public key, etc
});
```

The variable `msg` shown above contains event information specific to the event, such as `isConnected`, `isUnlocked`, and the active public key.

There are a few different events you may listen to:

* `signer:connected` - Emitted when the Casper Signer connects to the dApp.

* `signer:disconnected` - Emitted when the Casper Signer disconnects from the dApp.

* `signer:tabUpdated` - Emitted when a tab is updated within the Signer.

* `signer:activeKeyChanged` - Emitted when the active account changes within the Signer.

* `signer:locked` - Emitted when the Casper Signer is locked. Can be performed by the user or occur due to timeout.

* `signer:unlocked` - Emitted when the Casper Signer is unlocked.

## Disconnecting

After connecting the Casper Signer to your dApp, you may, at some point, want to disconnect. There is a method available for this:

```javascript
Signer.disconnectFromSite()
```
