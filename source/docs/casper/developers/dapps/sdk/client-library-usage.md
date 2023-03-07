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

## Accounts

You may use the SDKs to interact with accounts on the Casper Network.

### Create new keypair

<Tabs>

<TabItem value="js" label="JavaScript">

### Ed25519

```javascript
const { Keys } = require("casper-js-sdk");

const keypair = Keys.Ed25519.new();
const { publicKey, privateKey } = keypair;
```

### Secp256k1

```javascript
const { Keys } = require("casper-js-sdk");

const keypair = Keys.Secp256k1.new();
const { publicKey, privateKey } = keypair;
```

</TabItem>

<TabItem value="python" label="Python">

### Ed25519

```python
from pycspr.crypto import KeyAlgorithm, get_key_pair

key_pair = get_key_pair(KeyAlgorithm.ED25519)
```

### Secp256k1

```python
from pycspr.crypto import KeyAlgorithm, get_key_pair

keypair = get_key_pair(KeyAlgorithm.SECP256K1)
```

</TabItem>

</Tabs>

### Reading Public Keys

<Tabs>

<TabItem value="js" label="JavaScript">

```javascript
const accountAddress = publicKey.toHex();
const accountHash = publicKey.toAccountHash();
```

</TabItem>

<TabItem value="python" label="Python">

```python

```

</TabItem>

</Tabs>
