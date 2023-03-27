import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SDK Client Library Usage

## Installation

<Tabs>

<TabItem value="js" label="JavaScript">

Use `npm` or `yarn` to install [casper-js-sdk](https://www.npmjs.com/package/casper-js-sdk) package:

```bash
npm install casper-js-sdk
```
```bash
yarn install casper-js-sdk
```

</TabItem>

<TabItem value="python" label="Python">

Install using the [pip package manager](https://pypi.org/project/pip/).

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
import pycspr
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

---

## Transferring CSPR

Using the `keypair` created above in [Accounts](#accounts), you can sign a CSPR transferral deploy.

<Tabs>

<TabItem value="js" label="JavaScript">

```javascript
const { CasperClient, DeployUtil } = require("casper-js-sdk");

const casperClient = new CasperClient("http://NODE_ADDRESS:7777/rpc");
const receipientPublicKeyHex = "01e8c84f4fbb58d37991ef373c08043a45c44cd7f499453fa2bd3e141cc0113b3c"

let deployParams = new DeployUtil.DeployParams(
  keypair.publicKey,
  "casper" // or "casper-test" for testnet
);

const session = DeployUtil.ExecutableDeployItem.newTransferWithOptionalTransferId(
  amount,
  recipientPublicKeyHex
);

const payment = DeployUtil.standardPayment(100000000); // Gas payment in motes
const deploy = DeployUtil.makeDeploy(deployParams, session, payment);
const signedDeploy = DeployUtil.signDeploy(deploy, keypair);

console.log(await casperClient.putDeploy(signedDeploy));
```

*Note: You can find active online peers to communicate with from the `CasperClient` object at [cspr.live](https://cspr.live/tools/peers) for mainnet and for testnet: [testnet.cspr.live](https://testnet.cspr.live/tools/peers).*

</TabItem>

<TabItem value="python" label="Python">

```python
import pycspr

client = NodeClient(NodeConnection(host = "NODE_ADDRESS", port_rpc = 7777))
recipientPublicKeyHex = "01e8c84f4fbb58d37991ef373c08043a45c44cd7f499453fa2bd3e141cc0113b3c"
recipientPublicKeyBytes = pycspr.crypto.cl_checksum.decode(recipientPublicKeyHex)

deployParams = pycspr.create_deploy_parameters(
    account = keypair,
    chain_name = "casper" # or "casper-test" for testnet
)

deploy = pycspr.create_transfer(
    params = deployParams,
    amount = int(2.5e9), # Minimum transfer, 2.5 CSPR
    target = recipientPublicKeyBytes
)

deploy.approve(keypair)
client.send_deploy(deploy)
print(deploy.hash.hex())
```

*Note: You can find active online peers to communicate with from the `NodeConnection` object at [cspr.live](https://cspr.live/tools/peers) for mainnet and for testnet: [testnet.cspr.live](https://testnet.cspr.live/tools/peers).*

</TabItem>

</Tabs>

Once submitted, the above snippet will print the deploy hash in the console.

---

## Installing Contracts

<Tabs>

<TabItem value="js" label="JavaScript">

```javascript
const { CasperClient, Contracts, RuntimeArgs, CLValueBuilder }

const casperClient = new CasperClient("http://NODE_ADDRESS:7777/rpc")
const contract = new Contracts.Contract(client)

const contractWasm = new Uint8Array(fs.readFileSync("/path/to/contract.wasm").buffer)

const runtimeArguments = RuntimeArgs.fromMap({
  "argument": CLValueBuilder.string("Hello world!")
})

const deploy = contract.install(
	contractWasm,
	runtimeArguments,
	"10000000000", // Gas payment (10 CSPR)
	keypair.publicKey,
	"casper", // or "casper-test" for testnet
	[keypair]
)

console.log(await casperClient.putDeploy(deploy))
```

</TabItem>

<TabItem value="python" label="Python">

```python
import pycspr
from pycspr.types import ModuleBytes, CL_String

client = NodeClient(NodeConnection(host = "NODE_ADDRESS", port_rpc = 7777))

deployParams = pycspr.create_deploy_parameters(
    account = keypair,
    chain_name = "casper" # or "casper-test" for testnet
)
payment = pycspr.create_standard_payment(10000000000) # 10 CSPR
session = ModuleBytes(
    module_bytes = pycspr.read_wasm("/path/to/contract.wasm"),
    args = {
        "message": CL_String("Hello world!"),
    }
)

deploy = pycspr.create_deploy(deployParams, payment, session)

deploy.approve(keypair)
client.send_deploy(deploy)
print(deploy.hash.hex())
```

</TabItem>

</Tabs>

Once submitted, the above snippet will print the deploy hash in the console.
