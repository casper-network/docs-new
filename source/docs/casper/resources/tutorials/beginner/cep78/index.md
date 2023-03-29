---
title: Installing a Cep78 contract, minting NFTs
---
Level: Intermediate, time to complete: 15-30 minutes depending on
experience.

## Install an instance of the Cep-78 contract
An instantiation of the
[Cep-78](https://github.com/casper-ecosystem/cep-78-enhanced-nft/)
contract is essentially an NFT collection that holds different methods like
`Mint`, `Burn` and `Transfer`,
as well as references to metadata on the storage system of the Blockchain.

## Prerequisites
1. Rust must be installed as per
[getting-started](../../../../developers/writing-onchain-code/getting-started.md#installing-rust)
2. Casper-client must be installed as per the
[prerequisites](../../../../developers/prerequisites.md#the-casper-command-line-client)

## Metadata
The structure of an NFTs metadata is defined by a json schema. Cep-78 supports both standardized and custom json schemes. Standardized schemes
are easier to integrate, whilst custom schemes can be individualized to suit a projects needs best.

### Standardized
Example metadata in Cep-78 form:

```json
{
  "name": "Example NFT",
  "token_uri": "https://SOME_BACKEND/id",
  "checksum":
  "0x00..."
}
```
In this example the webserver at `token_uri` should return json data containing all relevant information regarding the NFT, such as a url to the image/jpg file, name and description.

### Custom {#custom-metadata-example}
Alternatively, one could define a custom metadata schema to, for example, store binary data instead of a weblink as the NFT's metadata.

See below an **example of a custom metadata schema**, that we will be using in this tutorial:

```json
{
   "properties":{
      "nft_name":{
        "name":"nft_name",
        "description":"name_of_nft",
        "required":true
      },
      "nft_description":{
        "name":"nft_description",
        "description":"description_of_nft",
        "required":true
      },
      "nft_url":{
        "name":"nft_url",
        "description":"url_of_nft",
        "required":true
      }
   }
}
```

### Compile the Cep-78 contract
Clone the source code from
[Github](https://github.com/casper-ecosystem/cep-78-enhanced-nft/):
```bash
git clone https://github.com/casper-ecosystem/cep-78-enhanced-nft/
```
Build the contract using the makefile:
```bash
cd cep-78-enhanced-nft
make prepare
make build-contract
```
the compiled `contract.wasm` will be in `./contract/target/wasm32-unknown-unknown/release`

### Install the Cep-78 contract
```bash
casper-client put-deploy \
  --node-address <NODE ADDRESS> \
  --chain-name casper-test \
  --secret-key <PATH TO SECRET KEY> \
  --payment-amount <GAS FEE IN MOTES> \
  --session-path <PATH TO contract.wasm> \
  --session-arg <see below>
```
- for `--payment-amount`: 1 CSPR = 1*10^9 Motes.
- Overview of [Session Arguments](#session-arguments-overview)
- Quickstart [installing with Session Arguments](#session-arguments-example)
-> returns a `deploy hash`. Once the deploy was successfully processed,
the instance of Cep-78 should be installed on the Blockchain.

### Session Arguments {#session-arguments-overview}
**Mandatory arguments**
- `collection_name`: The name of the NFT collection, passed in as a
String. This parameter is required and cannot be changed post
installation.
- `collection_symbol`: The symbol representing a given NFT collection,
passed in as a String. This parameter is required and cannot be changed
post installation.
- `total_token_supply`: The total number of NFTs that a specific instance
of a contract will mint passed in as a U64 value. This parameter is
required and cannot be changed post installation.
-
[_ownership_mode_](https://github.com/casper-ecosystem/cep-78-enhanced-nft#ownership):
The OwnershipMode modality that dictates the ownership behavior of the NFT
contract. This argument is passed in as a u8 value and is required at the
time of installation.
-
[_nft_kind_](https://github.com/casper-ecosystem/cep-78-enhanced-nft#nftkind):
The NFTKind modality that specifies the off-chain items represented by the
on-chain NFT data. This argument is passed in as a u8 value and is
required at the time of installation.
-
[_json_schema_](https://github.com/casper-ecosystem/cep-78-enhanced-nft#nftmetadatakind):
The JSON schema for the NFT tokens that will be minted by the NFT contract
passed in as a String. This parameter is required if the metadata kind is
set to CustomValidated(4) and cannot be changed post installation.
-
[_nft_metadata_kind_](https://github.com/casper-ecosystem/cep-78-enhanced-nft#nftmetadatakind):
The metadata schema for the NFTs to be minted by the NFT contract. This
argument is passed in as a u8 value and is required at the time of
installation.
-
[_identifier_mode_](https://github.com/casper-ecosystem/cep-78-enhanced-nft#nftidentifiermode):
The NFTIdentifierMode modality dictates the primary identifier for NFTs
minted by the contract. This argument is passed in as a u8 value and is
required at the time of installation.
-
[_metadata_mutability_](https://github.com/casper-ecosystem/cep-78-enhanced-nft#metadata-mutability):
The MetadataMutability modality dictates whether the metadata of minted
NFTs can be updated. This argument is passed in as a u8 value and is
required at the time of installation.
**Optional Reverse lookup**
-
[_reverse_lookup_](https://github.com/casper-ecosystem/cep-78-enhanced-nft#ownerreverselookupmode):
Needs to be set in order to be able to track the ownership of NFTs.

### Example installation with Session Arguments
For this tutorial, please install an instance of Cep78 using the following
command and replace the [JSON SCHEMA ESCAPED STRING] with the example
ESCAPED STRING that's explained in-depth below the command.
```bash
casper-client put-deploy \
  --session-path ./contract/target/wasm32-unknown-unknown/release/contract.wasm \
  --chain-name casper-test \
  --node-address http://195.201.167.179:7777 \
  --secret-key ./secret_key.pem \
  --payment-amount 300000000000 \
  --session-arg "collection_name:string='MY_COLLECTION'" \
  --session-arg "collection_symbol:string='MY_SYMBOL'" \
  --session-arg "total_token_supply:u64='1000'" \
  --session-arg "ownership_mode:u8='2'" \
  --session-arg "nft_kind:u8='2'" \
  --session-arg "identifier_mode:u8='1'" \
  --session-arg "nft_holder_mode:u8='2'" \
  --session-arg "minting_mode:u8='1'" \
  --session-arg "metadata_mutability:u8='0'" \
  --session-arg "burn_mode:u8='1'" \
  --session-arg "nft_metadata_kind:u8='3'" \
  --session-arg "owner_reverse_lookup_mode:u8='1'" \
  --session-arg [JSON SCHEMA ESCAPED STRING]

```
replace [JSON SCHEMA ESCAPED STRING] with the escaped version of
[above](#custom-metadata-example) example of a custom JSON SCHEMA:
```
"json_schema:string='{\"properties\":{\"nft_name\":{\"name\":\"nft_name\",\"description\":\"name_of_nft\",\"required\":true},\"nft_description\":{\"name\":\"nft_description\",\"description\":\"description_of_nft\",\"required\":true},\"nft_url\":{\"name\":\"nft_url\",\"description\":\"url_of_nft\",\"required\":true}}}'"
```
Example output:
```json
{
  "id": 414006690162046374,
  "jsonrpc": "2.0",
  "result": {
    "api_version": "1.4.13",
    "deploy_hash": "a7cdcd4d32b38620090843dd0564418e7219f0d03cb46291b3a4e4fc5a5ea4e1"
  }
}
```
Use this external [tool](https://jsontostring.com/) to escape a custom
JSON schema like [above](#custom-metadata-example) or the one from the Cep78 [readme](https://github.com/casper-ecosystem/cep-78-enhanced-nft#example-custom-validated-schema).

_Only escaped JSON metadata can be passed as a session argument when installing the contract or minting an NFT._

## Mint an NFT
Mint an NFT by calling the previously installed instance of the Cep-78 NFT standard.
### Query your account
1. Obtain a `state-root-hash` from the node
```bash
casper-client get-state-root-hash --node-address <NODE_ADDRESS>
```
Example output:
```json
{
  "id": -7027300282865772761,
  "jsonrpc": "2.0",
  "result": {
    "api_version": "1.4.13",
    "state_root_hash": "e67fc4806287aff050e12e47afb636e328a24dad3a32170701cd4334fde53fb3"
  }
}
```
2. Query account state at said `state-root-hash`
```bash
casper-client query-state --node-address <NODE_ADDRESS> \
  --state-root-hash <STATE_ROOT_HASH> \
  --key <account-hash-YOUR_ACCOUNT_HASH>
```
Example:
```
casper-client query-state \
  --node-address http://195.201.167.179:7777 \
  -state-root-hash a8b6097502623dbd8a2a8fee17f10e32e46928b2a6f1ed3d01f10aba16140758 \
  --key account-hash-32e24c2eb139804ad8db550dd79d78c370559069c137519a48b048bd77ca7da4
```
When querying an account, make sure to add the `account-hash-` prefix as shown above.
`get-account-state` returns a list of associated keys. One of these
associated keys should be the `contract hash` of the Cep-78 instance.

-> find the `contract_hash` of the deploy named "nft_contract" in the output and save it.
Example output:
```json
{
  "id": 4412230244715552265,
  "jsonrpc": "2.0",
  "result": {
    "api_version": "1.4.13",
    "block_header": null,
    "merkle_proof": "[29776 hex chars]",
    "stored_value": {
      "Account": {
        "account_hash":
"account-hash-32e24c2eb139804ad8db550dd79d78c370559069c137519a48b048bd77ca7da4",
        "action_thresholds": {
          "deployment": 1,
          "key_management": 1
        },
        "associated_keys": [
          {
            "account_hash":
"account-hash-32e24c2eb139804ad8db550dd79d78c370559069c137519a48b048bd77ca7da4",
            "weight": 1
          }
        ],
        "main_purse":
"uref-f4ab4e000c4ac146ae9bb748a2e8ab8127707c1d3705a2aafec4f2049d95e139-007",
        "named_keys": [
          {
            "key":
"hash-b1d96ea7536bf6c9a2f65484ad75651f9a86ed72ba9897593054a0dc847f08de",
            "name": "cep78_contract_hash_MY_COLLECTION"
          },
          {
            "key":
"hash-c8ef8d01c8f6933dd4dc4d542ec132b21a31622f190889a33b982f8653a4f16c",
            "name": "cep78_contract_package_MY_COLLECTION"
          },
          {
            "key":
"uref-30905d7fbba2550e5fead69281400dab80cf34e5c1565fad63c685cd41e31da7-007",
            "name": "cep78_contract_package_access_MY_COLLECTION"
          },
          {
            "key":
"uref-7a1dc2dc77650a602952fbebf31f9ca732d1fc887d68918ca0820ba6af11abaa-007",
            "name": "cep78_contract_version_MY_COLLECTION"
          }
        ]
      }
    }
  }
}
```
In this case the `contract_hash` is "hash-b1d96ea7536bf6c9a2f65484ad75651f9a86ed72ba9897593054a0dc847f08de".

### Call the `Mint` entry point to produce an NFT with some `metadata`
Example:
```bash
  casper-client put-deploy \
  --node-address http://195.201.167.179:7777 \
  --chain-name casper-test \
  --secret-key ./secret_key.pem \
  --payment-amount 100000000000 \
  --session-hash hash-b1d96ea7536bf6c9a2f65484ad75651f9a86ed72ba9897593054a0dc847f08de \
  --session-entry-point mint \
  --session-arg "token_owner:key='account-hash-32e24c2eb139804ad8db550dd79d78c370559069c137519a48b048bd77ca7da4'" \
  --session-arg [METADATA OF NFT]
```
Replace [METADATA OF NFT] with:
```
"token_meta_data:string='{\"nft_name\":\"somename01\",\"nft_description\":\"somedescription01\",\"nft_url\":\"someurl01\"}'"
```
_and execute the command._

Example output:
```json
{
  "id": -1859215013112499175,
  "jsonrpc": "2.0",
  "result": {
    "api_version": "1.4.13",
    "deploy_hash": "51d343037b46d98bdf2c804f742db53fa081c295a2ef1c74d06e2c4ef35491b6"
  }
}
```
Note that here, again, we had to escape the json metadata of the NFT using
a [tool](https://jsontostring.com/). This works the exact same for
metadata as for the metadata/json schema. As you can see, the metadata
json has the same fields as the schema:
1. `nft_name`
2. `nft_description`
3. `nft_url`

Once this deploy was successful, our Cep-78 NFT should live on the blockchain.

Note that in this example we use an instance of Cep-78 with the _cep-78 standard metadata schema_.

**Review the `Modalities` in the [readme](https://github.com/casper-ecosystem/cep-78-enhanced-nft/) if this is unclear at this point of the tutorial.**

## Track ownership of NFTs
Cep78 implements a page-wise ownership system, where a dictionary is created under the owner's account, if the `reverse_lookup` modality is set to a value other than 0 (NoLookup). See [details](https://github.com/casper-ecosystem/cep-78-enhanced-nft#ownerreverselookupmode).
In the example above, we installed an instance of Cep78 with `reverse_lookup` enabled.
It is recommended to complete [this tutorial](https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/tutorials/token-ownership-tutorial.md) on `reverse_lookup of ownership` next, to unlock the full potential of the Cep78 standard.
