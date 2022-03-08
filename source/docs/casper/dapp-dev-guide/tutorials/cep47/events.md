# Token Management
import useBaseUrl from '@docusaurus/useBaseUrl';

The NFT contract contains a set of event implementations for token management. These events occur when the contract tries to communicate with dApps and other smart contracts. The smart contract developers will decide when these events should be emitted and with what types of parameters.

There are seven main event implementations for the Casper CEP-47 token contract. Those are:
- [Mint](./events#minting-tokens)
- [Burn](./events#burning-tokens)
- [Mint Copies](./events#minting-copies-of-tokens)
- [Transfer](./events#transferring-tokens)
- [Approve](./events#approving-tokens)
- [Transfer From](./events#transferring-tokens-from-another-account)
- [Update Metadata](./events#updating-token-metadata)

We will go through each one with examples in the next sections. 

**Prerequisite**

Make sure you have [installed the CEP-47 contract](../cep47/deploy) on the Casper Network.

## Enabling the Event Stream
To execute the methods related to the contract event stream, you must run the *casper-contracts-js-clients/e2e/cep47/usage.ts* file using NodeJS. 

This is the command to run the file:
```bash
npm run e2e:cep47:usage
```

You will see the output as below:

<details>
<summary>Console output for deploying the token event stream</summary>

```bash
... Account Info:
{
  "_accountHash": "account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803",
  "namedKeys": [
    {
      "name": "bdk_nft_contract_contract_hash",
      "key": "hash-a47d35d835a5fa8a1bcd55a4426dc14e21da9b876c1617742f18813737a4ece0"
    },
    {
      "name": "bdk_nft_contract_contract_hash_wrapped",
      "key": "uref-ff9b562d357d9a258acb2b3798f82c6ec5db49a8852e2e96b0ed4b1faf873206-007"
    },
    {
      "name": "contract_package_hash",
      "key": "hash-2468facdc9a6f324f8442584fd46d911e3ac9b434dfa79435567bf71f9b8bd23"
    }
  ],
  "mainPurse": "uref-a33e25cb1e6baa38e8306dba0492183c65cb41db3dbe8f69546868a4c0cfd0d9-007",
  "associatedKeys": [
    {
      "accountHash": "account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803",
      "weight": 1
    }
  ],
  "actionThresholds": {
    "deployment": 1,
    "keyManagement": 1
  }
}
... Contract Hash: hash-a47d35d835a5fa8a1bcd55a4426dc14e21da9b876c1617742f18813737a4ece0
... Contract Package Hash: hash-2468facdc9a6f324f8442584fd46d911e3ac9b434dfa79435567bf71f9b8bd23
... Contract name: bdk_nft_token
... Contract symbol: BDK47
... Contract meta: [[{"isCLValue":true,"data":"1"},{"isCLValue":true,"data":"bdk-nft-1"}],[{"isCLValue":true,"data":"2"},{"isCLValue":true,"data":"bdk-nft-2"}]]
... Total supply: 0
```

</details>

### Minting tokens

The token minting process creates NFTs from certain items. The Casper virtual machine executes the code stored in the smart contract and maps the item to a blockchain token containing certain attributes known as metadata. The creator's public key serves as a certificate of authenticity for that particular NFT.

#### 1. Execute the mint method
The `mint` method requires input parameters like recipient address, token ID, token metadata, and the payment amount to generate the NFT token. The list of input parameters is specified in the *.env.cep47* file and can be customized for each NFT implementation. This method will execute those parameters and generate the deploy object as `mintDeploy`. Then that deploy object is sent to the network via the node address to get the `mintDeployHash`. The console will output the deploy hash, name of the event, CL values, and the token mint successful message.

The code snippet below is executing the [mint()](https://github.com/casper-network/casper-contracts-js-clients/blob/b210261ba6b772a7cb25f62f2bdf00f0f0064ed5/e2e/cep47/usage.ts#L123-L130) method. In this example, a toke with ID 1 is minted with the metadata *number* and *one*.


```javascript
const mintDeploy = await cep47.mint(
    KEYS.publicKey,
    ["1"],
    [new Map([['number', 'one']])],
    MINT_ONE_PAYMENT_AMOUNT!,
    KEYS.publicKey,
    [KEYS]
  );
```

#### 2. Check the account balance
After minting the token with ID 1, you can check the balance of tokens assigned to a specific public key using the `balanceOf` method. This method returns the number of tokens stored in this account.

```javascript
const balanceOf1 = await cep47.balanceOf(KEYS.publicKey);
```
#### 3. Check token ownership
You can check the token owner by calling the `getOwnerOf` method. This method takes the token ID as the input parameter and returns the prefixed account hash of the account owning this specific token. **Note**: the prefix is *account-hash-*. 

```javascript
const ownerOfTokenOne = await cep47.getOwnerOf("1");
```

#### Token index and metadata
You can also check the token metadata, the index of the token, and the token ID using the methods below.

```javascript
const tokenOneMeta = await cep47.getTokenMeta("1");
```

```javascript
const indexByToken1 = await cep47.getIndexByToken(KEYS.publicKey, "1");
```

```javascript
const tokenByIndex1 = await cep47.getTokenByIndex(KEYS.publicKey, indexByToken1);
```

<details>
<summary>Console output for token minting</summary>

```bash
... Mint token one
...... Mint deploy hash:  bd6f088d9687b51edf7d0669a1153365e7a9bd2b67064762979d03a21fd7aea2
*** EVENT ***
[
  {
    name: 'cep47_mint_one',
    clValue: t { isCLValue: true, refType: [Array], data: [Array] }
  }
]
*** ***
...... Token minted successfully
...... Balance of master account:  1
...... Owner of token one:  account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803
...... Token five metadata:  Map(1) { 'number' => 'one' }
...... index of token one:  0
...... token one id:  1
```

</details>

### Burning Tokens
The token burning process permanently removes the tokens from circulation within the blockchain network. The tokens are sent to a wallet address called "burner" or "eater" that cannot be used for transactions other than receiving these tokens. Even though the tokens will still exist on the blockchain, there will be no way of accessing them. 

#### Executing the burn() method
The code snippet below will execute when calling the [mint()](https://github.com/casper-network/casper-contracts-js-clients/blob/b210261ba6b772a7cb25f62f2bdf00f0f0064ed5/e2e/cep47/usage.ts#L123-L130) method.

```javascript
const burnDeploy = await cep47.burn(
    KEYS.publicKey,
    ["1"],
    MINT_ONE_PAYMENT_AMOUNT!,
    KEYS.publicKey,
    [KEYS]
  );
```

The `burn` method executes given the values passed in and generates a `burnDeploy` object, which is sent to the blockchain. After execution, the console outputs the deploy hash, the name of the event and corresponding CL values, and a message indicating success or failure.

<details>
<summary>Console output for token burning</summary>

```bash
... Burn token one

... Burn deploy hash:  76761cc2e1b51cb2fc6e91c61adc1139c9466316fd8bf98a4f2de05b22a31b63
... Account Info:
{
  "_accountHash": "account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803",
  "namedKeys": [
    {
      "name": "bdk_nft_contract_contract_hash",
      "key": "hash-a47d35d835a5fa8a1bcd55a4426dc14e21da9b876c1617742f18813737a4ece0"
    },
    {
      "name": "bdk_nft_contract_contract_hash_wrapped",
      "key": "uref-ff9b562d357d9a258acb2b3798f82c6ec5db49a8852e2e96b0ed4b1faf873206-007"
    },
    {
      "name": "contract_package_hash",
      "key": "hash-2468facdc9a6f324f8442584fd46d911e3ac9b434dfa79435567bf71f9b8bd23"
    }
  ],
  "mainPurse": "uref-a33e25cb1e6baa38e8306dba0492183c65cb41db3dbe8f69546868a4c0cfd0d9-007",
  "associatedKeys": [
    {
      "accountHash": "account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803",
      "weight": 1
    }
  ],
  "actionThresholds": {
    "deployment": 1,
    "keyManagement": 1
  }
}
... Contract Hash: hash-a47d35d835a5fa8a1bcd55a4426dc14e21da9b876c1617742f18813737a4ece0
... Contract Package Hash: hash-2468facdc9a6f324f8442584fd46d911e3ac9b434dfa79435567bf71f9b8bd23
... Contract name: bdk_nft_token
... Contract symbol: BDK47
... Contract meta: [[{"isCLValue":true,"data":"1"},{"isCLValue":true,"data":"bdk-nft-1"}],[{"isCLValue":true,"data":"2"},{"isCLValue":true,"data":"bdk-nft-2"}]]
... Total supply: 0

*************************
*** EVENT ***
[
  {
    name: 'cep47_burn_one',
    clValue: t { isCLValue: true, refType: [Array], data: [Array] }
  }
]
*** ***
... Token burned successfully
```

</details>

### Minting Copies of Tokens
The method `mintCopies` creates several tokens with different IDs but the same metadata. The process is the same as minting one token but with multiple IDs and metadata. The payment amount also changes accordingly.

#### Executing mintCopies
The below code snippet executes when calling the [mintCopies](https://github.com/casper-network/casper-contracts-js-clients/blob/b210261ba6b772a7cb25f62f2bdf00f0f0064ed5/e2e/cep47/usage.ts#L187-L195) method.

```javascript
const mintCopiesDeploy = await cep47.mintCopies(
    KEYS.publicKey,
    ["2", "3", "4", "5"],
    new Map([['number', 'from-series']]),
    4,
    MINT_COPIES_PAYMENT_AMOUNT!,
    KEYS.publicKey,
    [KEYS]
  );
```
This method takes multiple token IDs and metadata, the token count, and other general input parameters to generate the `mintCopiesDeploy` object. The output is a list of minted tokens. Since it is a series of tokens, we will check the token balance, owner, metadata, and index.

#### Checking token balance
This method will check the balance of tokens in the master account:
```javascript
 const balanceOf2 = await cep47.balanceOf(KEYS.publicKey);
```

#### Checking the owner
This method checks the owner of the token with ID 5:
```javascript
let ownerOfTokenFive = await cep47.getOwnerOf("5");
```

#### Checking token metadata
This method checks the metadata of the token with ID 5:
```javascript
const tokenFiveMeta = await cep47.getTokenMeta("5");
```

#### Checking the index 
This method checks the index of the token with ID 5:
```javascript
const indexByToken5 = await cep47.getIndexByToken(KEYS.publicKey, "5");
```

#### Checking the token ID 
This method checks the ID of token 5:
```javascript
 const tokenByIndex5 = await cep47.getTokenByIndex(KEYS.publicKey, indexByToken5);
```

<details>
<summary>Console output for minting copies of a token</summary>

```bash
... Mint copies #1

...... Mint deploy hash:  e1b75c38665463da71062983b7533dc0018991487ac80a4ed8b7838f5e258ab9
... Mint token one

...... Mint deploy hash:  bd6f088d9687b51edf7d0669a1153365e7a9bd2b67064762979d03a21fd7aea2
*** EVENT ***
[
  {
    name: 'cep47_mint_one',
    clValue: t { isCLValue: true, refType: [Array], data: [Array] }
  }
]
*** ***
...... Token minted successfully
...... Balance of master account:  1
...... Owner of token one:  account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803
...... Token five metadata:  Map(1) { 'number' => 'one' }
...... index of token one:  0
...... token one id:  1

^[*** EVENT ***
[
  {
    name: 'cep47_mint_one',
    clValue: t { isCLValue: true, refType: [Array], data: [Array] }
  },
  {
    name: 'cep47_mint_one',
    clValue: t { isCLValue: true, refType: [Array], data: [Array] }
  },
  {
    name: 'cep47_mint_one',
    clValue: t { isCLValue: true, refType: [Array], data: [Array] }
  },
  {
    name: 'cep47_mint_one',
    clValue: t { isCLValue: true, refType: [Array], data: [Array] }
  }
]
*** ***
...... Token minted successfully
...... Balance of master account:  4
...... Owner of token five:  account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803
...... Token five metadata:  Map(1) { 'number' => 'from-series' }
...... index of token five:  3
...... token five id:  5
```

</details>

### Transferring Tokens
This method enables NFT token transfers to other accounts. The transfer process will initiate from your account address and be sent to the selected recipient address. The recipient address will be a randomly selected account hash in this example.

#### Executing a transfer

The code snippet below executes when calling the [transfer](https://github.com/casper-network/casper-contracts-js-clients/blob/b210261ba6b772a7cb25f62f2bdf00f0f0064ed5/e2e/cep47/usage.ts#L234-L235) method.


Create the recipient address from a random number and assign it to `transferOneRecipient`.
```javascript
const transferOneRecipient = CLPublicKey.fromHex("016e5ee177b4008a538d5c9df7f8beb392a890a06418e5b9729231b077df9d7215");
```

Use the token with ID 2 and the `transferOneRecipient` address along with other input parameters to generate the `transferOneDeploy` object. This completes the transfer event call.

```javascript
const transferOneDeploy = await cep47.transfer(
    transferOneRecipient, 
    ["2"], 
    TRANSFER_ONE_PAYMENT_AMOUNT!, 
    KEYS.publicKey, 
    [KEYS]);
```

Then, send the deploy to the network.
```javascript
 const transferOneHash = await transferOneDeploy.send(NODE_ADDRESS!);
```

Finally, check the owner of the token with ID 2. Confirm that the owner has changed from your account hash to the recipient account hash.
```javascript
ownerOfTokenTwo = await cep47.getOwnerOf("2");
```

<details>
<summary>Console output for transferring tokens</summary>

```bash
... Transfer #1

...... Owner of token "2" is account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803
...... Transfer from account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803 to account-hash-ec0125ebcf79ab482046647049a26152166a2ed260f4ac95f279c77295b55212
...... Transfer #1 deploy hash:  e52f3cc6969fcc1641b677a66ef90c54c3368e7f141b26a3f7d4a2ba939412c2
*** EVENT ***
[
  {
    name: 'cep47_transfer_token',
    clValue: t { isCLValue: true, refType: [Array], data: [Array] }
  }
]
*** ***
...... Token transfered successfully
...... Owner of token "2" is account-hash-ec0125ebcf79ab482046647049a26152166a2ed260f4ac95f279c77295b55212
```

</details>

### Approving Tokens
This method is used to hand over the token transfer capability to another account. In this example, the new owner's public key is created before the transfer. Then the new account will perform the token transfer.

#### Executing the approve method
The below code snippet will execute when calling the [approve](https://github.com/casper-network/casper-contracts-js-clients/blob/b210261ba6b772a7cb25f62f2bdf00f0f0064ed5/e2e/cep47/usage.ts#L259-L267) method.

Create the `allowedAccount` recipient address using the `KEYS_USER` variable from the *.env.cep47* file. This variable indicates the new spender of the token.

```javascript
const allowedAccount = KEYS_USER!.publicKey;
```

Next, execute the `approve` method and create the `approveDeploy` object. Here, the token with ID 5 will be used for approval.

```javascript
  const approveDeploy = await cep47.approve(
    allowedAccount,
    ["5"],
    MINT_ONE_PAYMENT_AMOUNT!,
    KEYS.publicKey,
    [KEYS]
  );
```

#### Checking the new account
After generating the deploy hash for the approval, you can check which account is allowed to do the approval. It will return the account hash of the account owning this specific token.
```javascript
const allowanceOfTokenFive = await cep47.getAllowance(KEYS.publicKey, "5");
```

<details>
<summary>Console output for token approval</summary>

```bash
... Approve

...... Approval deploy hash:  940868f10945325e70ba6955c8edfe047c78ad71529bac86989d056d8ca1f26c
*** EVENT ***
[
  {
    name: 'cep47_approve_token',
    clValue: t { isCLValue: true, refType: [Array], data: [Array] }
  }
]
*** ***
...... Token approved successfully
...... Allowance of token 5 account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803
```

</details>

### Transferring Tokens from Another Account
Here, you will transfer tokens on behalf of another account. You will use some randomly generated account addresses to check the behavior of this method.

#### Executing the transferFrom method
The below code snippet will execute when calling the [transferFrom](https://github.com/casper-network/casper-contracts-js-clients/blob/b210261ba6b772a7cb25f62f2bdf00f0f0064ed5/e2e/cep47/usage.ts#L297-L302) method.

First, check the owner of the token with ID 5.

```javascript
ownerOfTokenFive = await cep47.getOwnerOf("5");
```

Then, generate the recipient address from a random number.
```javascript
const transferFromRecipient = CLPublicKey.fromHex("019548b4f31b06d1ce81ab4fd90c9a88e4a5aee9d71cac97044280905707248da4");
```
Then, you can generate the `transferFromDeploy` deploy object using the new recipient address and the rest of the input parameters and complete the transfer from another account process. This completes the transfer-from event call.
```javascript
const transferFromDeploy = await cep47.transferFrom(
    transferFromRecipient,
    KEYS.publicKey,
    ["5"],
    TRANSFER_ONE_PAYMENT_AMOUNT!,
    KEYS_USER.publicKey, [KEYS_USER]);
```

#### Checking the new owner
Finally, check the owner of the token with ID 5 and note that it has changed to the new recipient.
```javascript
ownerOfTokenFive = await cep47.getOwnerOf("5");
```

<details>
<summary>Console output for transferring tokens from another account</summary>

```bash
... Transfer From #1

...... Owner of token "5" is account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803
...... Transfer from account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803 to account-hash-fc36989e547ec1eba1d8aea840ffabbcbe7d27fb249801870551160eaa014306
...... Transfer From #1 deploy hash:  3a1e3632a401af565fad0e6c131e5347392e191e3b3c1e9a6f9c467409e055a0
*** EVENT ***
[
  {
    name: 'cep47_transfer_token',
    clValue: t { isCLValue: true, refType: [Array], data: [Array] }
  }
]
*** ***
...... Token transfered successfully
...... Owner of token "5" is account-hash-fc36989e547ec1eba1d8aea840ffabbcbe7d27fb249801870551160eaa014306
```

</details>

### Updating Token Metadata 
This method will update the metadata of a selected token.

#### Executing the updateTokenMeta method
The below code snippet will execute when calling the [update metadata](https://github.com/casper-network/casper-contracts-js-clients/blob/b210261ba6b772a7cb25f62f2bdf00f0f0064ed5/e2e/cep47/usage.ts#L329-L335) method.

First, check the metadata of the token with ID 4.

```javascript
let tokenFourMeta = await cep47.getTokenMeta("4");
```

Then, execute the `updateTokenMeta` method and generate the `updateMetadataDeploy` object. This completes the update metadata call.

```javascript
const updateMetadataDeploy = await cep47.updateTokenMeta(
    "4",
    new Map([["name", "four"]]),
    TRANSFER_ONE_PAYMENT_AMOUNT!,
    KEYS_USER.publicKey, 
    [KEYS_USER]
  );
```

Again, check the metadata of the token with ID 4 and confirm the data has changed.
```javascript
tokenFourMeta = await cep47.getTokenMeta("4");
```

<details>
<summary>Console output for updating token metadata</summary>

```bash
... Update metadata of token 4

...... Token 4 metadata:  Map(1) { 'number' => 'from-series' }
...... Update metadata deploy hash:  1b5d31481bb8177d798a8368e93d5f92bf34cc493bde8caf8a078d753cdd28ec
*** EVENT ***
[
  {
    name: 'cep47_metadata_update',
    clValue: t { isCLValue: true, refType: [Array], data: [Array] }
  }
]
*** ***
...... Token metadata updated successfully
...... Token 4 metadata:  Map(1) { 'name' => 'four' }

```

</details>




