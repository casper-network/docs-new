---
title: Cep78
---
Level: Intermediate, time to complete: 15-30 minutes depending on experience.

## Install an instantiation of the Cep-78 contract
An instantiation of the [Cep-78](https://github.com/casper-ecosystem/cep-78-enhanced-nft/) contract is essentially an NFT collection that hold different methods like _Mint_, _Burn_ and _Transfer_,
as well as references to metadata on the storage system of the Blockchain.

## Prerequisites
1. Rust must be installed as per [getting-started](../../../../developers/writing-onchain-code/getting-started.md#installing-rust)
2. Casper-client must be installed as per the [prerequisites](../../../../developers/prerequisites.md#the-casper-command-line-client)

## Metadata
The structure of an NFTs metadata is defined by a json schema. Cep-78 supports both standardized and custom json schemes. Standardized schemes are easier to integrate, whilst custom schemes can be individualized to suit a projects needs best.

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
In this example the webserver at _token_uri_ should return json data containing all relevant information regarding the NFT, such as a url to the image/jpg file, name and description.

### Custom {#custom-metadata-example}
Alternatively, one could define a custom metadata schema to, for example, store binary data instead of a weblink as the NFT's metadata.
Example custom metadata schema:

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
Clone the source code from [Github](https://github.com/casper-ecosystem/cep-78-enhanced-nft/):
```bash
git clone https://github.com/casper-ecosystem/cep-78-enhanced-nft/
```
Build the contract using the makefile:
```bash
cd cep-78-enhanced-nft
make prepare
make build-contract
```
the compiled contract.wasm will be in ./contract/target/wasm32-unknown-unknown/release

### Deploy the Cep-78 contract
```bash
casper-client put-deploy \
  --node-address <NODE ADDRESS> \
  --chain-name casper-test \
  --secret-key <PATH TO SECRET KEY> \
  --payment-amount <GAS FEE IN MOTES> \
  --session-path <PATH TO contract.wasm> \
  --session-arg <see below>
```
for --payment-amount: 1 CSPR = 1*10^9 Motes.
-> returns a _deploy hash_. Once the deploy was successfully processed, the instance of Cep-78 should be installed on the Blockchain.

### Session Arguments
List of **mandatory session arguments**:

- _collection_name_: The name of the NFT collection, passed in as a String. This parameter is required and cannot be changed post installation.
- _collection_symbol_: The symbol representing a given NFT collection, passed in as a String. This parameter is required and cannot be changed post installation.
- _total_token_supply_: The total number of NFTs that a specific instance of a contract will mint passed in as a U64 value. This parameter is required and cannot be changed post installation.
- [_ownership_mode_](https://github.com/casper-ecosystem/cep-78-enhanced-nft#ownership): The OwnershipMode modality that dictates the ownership behavior of the NFT contract. This argument is passed in as a u8 value and is required at the time of installation.
- [_nft_kind_](https://github.com/casper-ecosystem/cep-78-enhanced-nft#nftkind): The NFTKind modality that specifies the off-chain items represented by the on-chain NFT data. This argument is passed in as a u8 value and is required at the time of installation.
- [_json_schema_](https://github.com/casper-ecosystem/cep-78-enhanced-nft#nftmetadatakind): The JSON schema for the NFT tokens that will be minted by the NFT contract passed in as a String. This parameter is required if the metadata kind is set to CustomValidated(4) and cannot be changed post installation.
- [_nft_metadata_kind_](https://github.com/casper-ecosystem/cep-78-enhanced-nft#nftmetadatakind): The metadata schema for the NFTs to be minted by the NFT contract. This argument is passed in as a u8 value and is required at the time of installation.
- [_identifier_mode_](https://github.com/casper-ecosystem/cep-78-enhanced-nft#nftidentifiermode): The NFTIdentifierMode modality dictates the primary identifier for NFTs minted by the contract. This argument is passed in as a u8 value and is required at the time of installation.
- [_metadata_mutability_](https://github.com/casper-ecosystem/cep-78-enhanced-nft#metadata-mutability): The MetadataMutability modality dictates whether the metadata of minted NFTs can be updated. This argument is passed in as a u8 value and is required at the time of installation.

### Example installation with Session Arguments
For this tutorial, please install an instance of Cep78 using the following command and replace the [JSON SCHEMA ESCAPED STRING] with the example ESCAPED STRING that's explained in-depth below the command.
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
  --session-arg [JSON SCHEMA ESCAPED STRING]

```
replace [JSON SCHEMA ESCAPED STRING] with the [above](#custom-metadata-example) example of a custom JSON SCHEMA, formatted as an ESCAPED STRING:
```
"json_schema:string='{\"properties\":{\"nft_name\":{\"name\":\"nft_name\",\"description\":\"name_of_nft\",\"required\":true},\"nft_description\":{\"name\":\"nft_description\",\"description\":\"description_of_nft\",\"required\":true},\"nft_url\":{\"name\":\"nft_url\",\"description\":\"url_of_nft\",\"required\":true}}}'"
```
Use this external [tool](https://jsontostring.com/) to escape a custom JSON schema like [above](#custom-metadata-example) or the one from the Cep78 [readme](https://github.com/casper-ecosystem/cep-78-enhanced-nft#example-custom-validated-schema). Only escaped JSON metadata can be passed as a session argument when installing the contract or minting an NFT.

## Mint an NFT
Mint an NFT by calling the previously installed instance of the Cep-78 NFT standard.

### Query your account
```bash
casper-client get-state-root-hash <node-address>
```
-> outputs a _state-root-hash_
```bash
casper-client get-account-state --node-address<NODE_ADDRESS> --state-root-hash <STATE_ROOT_HASH> --key <account-hash-YOUR_ACCOUNT_HASH>
```
_get-account-state_ returns a list of associated keys. One of these associated keys should be the _contract hash_ of the Cep-78 instance.
-> find the _contract_hash_ of the deploy named "nft_contract" in the output and copy it.

### Call the _Mint_ entry point to produce an NFT with some _metadata_
```bash
  [Example]

  casper-client put-deploy \
  --node-address http://136.243.187.84:7777 \
  --chain-name casper-test \
  --secret-key ./private.pem \
  --payment-amount 1000000000 \
  --session-hash hash-b4b78992e0324be09f174637c3dda2d29cc5c21c44430b72a0943d3ba6d2c827 \
  --session-entry-point mint \
  --session-arg "token_owner:key='account-hash-5a54f173e71d3c219940dcb9dfec222b024cd81aa7e0672de59ba5fab296448b'" \
  --session-arg [METADATA OF NFT]
```
Replace [METADATA OF NFT] with
```
"token_meta_data:string='{\"nft_name\":\"somename01\",\"nft_description\":\"somedescription01\",\"nft_url\":\"someurl01\"}'"
```
and execute the command.

-> outputs a deploy hash.

Note that here, again, we had to escape the json metadata of the NFT using a [tool](https://jsontostring.com/). This works the exact same for metadata as for the metadata/json schema. As you can see, the metadata json has the same fields as the schema:
1. _nft_name_
2. _nft_description_
3. _nft_url_

Once this deploy was successful, our Cep-78 NFT should live on the blockchain.

**Note that in this example we use an instance of Cep-78 with the _cep-78 standard metadata schema_. Review the _Modalities_ in the [readme](https://github.com/casper-ecosystem/cep-78-enhanced-nft/) if this is unclear at this point of the tutorial.**

## Query NFTs
Retrieve information about NFTs and owners.

### Query owned NFTs by account
In order to access the Metadata of an NFT, it is necessary to know which NFTs are owned by a given account. The Cep-78 contract’s named_keys store contain a dictionary named _owned_tokens_.

Find the Ids or Hashs of NFTs owned by your account. Whether your NFT is identified by a hash identifier or numerical Id depends on the modality _NFTIdentifierModethat_ defaults to _Ordinal_ (numerical instead of hash):

```bash
  [Example]

  casper-client get-dictionary-item \
  -n http://136.243.187.84:7777 \
  -s 256d0445121f1144a09394c739c9baf82b5624b66dced181a0c1c8b8e936652b \
  --account-hash hash-b4b78992e0324be09f174637c3dda2d29cc5c21c44430b72a0943d3ba6d2c827 \
  --dictionary-name owned_tokens \
  --dictionary-item-key 5a54f173e71d3c219940dcb9dfec222b024cd81aa7e0672de59ba5fab296448b
```
where --dictionary-item-key is set to my account-hash and -s is a new state-root-hash.
```json
A copy of the output:
{
  "id": 6249115604543280689,
  "jsonrpc": "2.0",
  "result": {
    "api_version": "1.4.6",
    "dictionary_key": "dictionary-6bded5cf061dd95463e0064996f24cb88d19a6a7b24962a1347a5392356a35a0",
    "merkle_proof": "[38054 hex chars]",
    "stored_value": {
      "CLValue": {
        "bytes": "[280 hex chars]",
        "cl_type": {
          "List": "String"
        },
        "parsed": [
          "8bc73bf6cfdb48d0e88f16e0c02d5adff6c60a61a4b6bd65349d75fcb7b500d8",
          "0e557acd2b5a43a91c23c2f0e01687cc8a5342e105be22777b7bf97daf757c4f"
        ]
      }
    }
  }
}
```
The _parsed_ value is a list of _hash identifiers_ representing all NFTs owned by the account:
```json
  "8bc73bf6cfdb48d0e88f16e0c02d5adff6c60a61a4b6bd65349d75fcb7b500d8",
  "0e557acd2b5a43a91c23c2f0e01687cc8a5342e105be22777b7bf97daf757c4f"
```

### Query NFT metadata from the Blockchain
The metadata that is passed as an argument when minting an NFT using Cep-78 is saved in a dictionary on the blockchain, where the key is the hash or numeric identifier, depending on the _identifier_mode_ modality. The name of the dictionary depends on the _metadata_kind_ modality.

The NFT metadata can be found in the related dictionary:

```bash
1. "metadata_custom_validated"
2. "metadata_cep78"
3. "metadata_nft721"
4. "metadata_raw"
```

```javascript
  const client = await new CasperClient(node_addr);
  var cep78_contract = new Contracts.Contract(client);
  cep78_contract.setContractHash(cep78_contract_hash);
  const nft_hashes = [YOUR_NFT_HASH_IDs];
  let meta = [];
  for (item in nft_hashes) {
    console.log("Item is: ", nft_hashes[item].toString());
    await cep78_contract.queryContractDictionary(
      "metadata_custom_validated",
      nft_hashes[item]
    ).then(response => {
      meta.push(response.data);
    }).catch(error => {
      console.log(error);
    })
  }
```
This examples shows how the javascript SDK can be used to query metadata for a list of _nft hashes_. The _metadata_custom_validated_ indicates, that the instance of Cep-78 in use was configured to support a custom metadata schema, not the Cep-78 or NFT-721 standard. Always make sure to query the correct dictionary for your configuration.
