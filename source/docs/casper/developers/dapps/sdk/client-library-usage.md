# SDK Client Library Usage

## Installation

<Tabs>

<TabItem value="js" label="JavaScript">

Use `npm` or `yarn` to install.

```bash
npm install casper-js-sdk
```

or

```bash
yarn install casper-js-sdk
```

</TabItem>

<TabItem value="python" label="Python">

```bash
pip install pycspr
```

</TabItem>

</Tabs>

---

## Accounts

You may use the SDKs to interact with accounts on the Casper Network. Accounts can be of either ed25519 or secp256k1 cryptography.

### Create new keypair

<Tabs>

<TabItem value="js" label="JavaScript">

```javascript
const { Keys } = require("casper-js-sdk");
const keypair = Keys.ALGO.new();
const { publicKey, privateKey } = keypair;
```

Replace `ALGO` with your key algorithm: `Ed25519` or `Secp256K1`.

</TabItem>

<TabItem value="python" label="Python">

```python
from pycspr.crypto import KeyAlgorithm, get_key_pair
keypair = get_key_pair(KeyAlgorithm.ALGO)
```

Replace `ALGO` with your key algorithm: `ED25519` or `SECP256K1`.

</TabItem>

</Tabs>

### Load from private key

When you want to use a specific account, you should not include your private key within your source code, but instead load in your keypair from a local file.

<Tabs>

<TabItem value="js" label="JavaScript">

```javascript
const { Keys } = require("casper-js-sdk");
const keypair = Keys.ALGO.loadKeyPairFromPrivateFile("./secret_key.pem");
```

Replace `ALGO` with your key algorithm: `Ed25519` or `Secp256K1`.

</TabItem>

<TabItem value="python" label="Python">

```python
import pycspr.crypto
keypair = pycspr.parse_private_key(
    "./secret_key.pem",
    pycspr.crypto.KeyAlgorithm.ALGO
)
```

Replace `ALGO` with your key algorithm: `ED25519` or `SECP256K1`.

</TabItem>

</Tabs>

### Exporting Keys

In your `keypair` variable is a private key and a public key. There are many reasons you may want to use, read, or export your public key. You may also want access to the account hash as it is often used within smart contracts on the Casper Network. The following methods show you how to dissect your keypair.

<Tabs>

<TabItem value="js" label="JavaScript">

```javascript
const publicKeyHex = keypair.publicKey.toHex();
const accountHashHex = keypair.publicKey.toAccountHash();
```

</TabItem>

<TabItem value="python" label="Python">

```python
import pycspr.crypto
publicKeyBytes = keypair.account_key
publicKeyHex = pycspr.crypto.cl_checksum.encode(publicKeyBytes)
accountHashBytes = pycspr.crypto.cl_operations.get_account_hash(publicKeyBytes)
accountHashHex = pycspr.crypto.cl_checksum.encode(accountHashBytes)
```

</TabItem>

</Tabs>
