import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

# Monitor and Consume Events

The Casper Network emits events through its native event stream, which can be captured by applications that are actively listning for them. Using Casper's client side SDKs, you can consume these events within your dApp and perform actions based on event data.

The default configuration of the Casper node provides event streaming via the port specified as the `event_stream_server.address` in the node's *config.toml*, which is by default `9999` for nodes on [Testnet](https://testnet.cspr.live/tools/peers) and [Mainnet](https://cspr.live/tools/peers). 

## Listen to the Event Stream

Setup an event listener in your app using the following:

<Tabs>

<TabItem value="js" label="JavaScript">

```javascript
const { EventStream, EventName } = require("casper-js-sdk")

const es = new EventStream("http://NODE_ADDRESS:9999/events/" + CHANNEL)
es.start()
es.subscribe(EventName.EVENT_NAME, eventHandler)

function eventHandler(event) {
    console.log(event)
}
```

</TabItem>

<TabItem value="python" label="Python">

```python
from pycspr import NodeClient, NodeConnection, NodeEventChannel, NodeEventType

def eventHandler(event):
    print(event)

client = NodeClient(NodeConnection(host = "NODE_ADDRESS", port_rpc = 7777))
client.get_events(eventHandler, NodeEventChannel.CHANNEL, NodeEventType.EVENT_NAME)
```

</TabItem>

</Tabs>

*Note: You can find active online peers' `NODE_ADDRESS`es at [cspr.live](https://cspr.live/tools/peers) for mainnet and [testnet.cspr.live](https://testnet.cspr.live/tools/peers) for testnet.*

Where `CHANNEL` is set to;
 `main` for the following event types;
 `ApiVersion`, `BlockAdded`, `DeployExpired`, `DeployProcessed`, `Fault` or `Step`. 
`deploys` for event types;
 `DeployAccepted`, or 
`sigs` for event type `FinalitySignature`.

And where `EVENT_NAME` is one of the following different types of events emitted by the Casper Network:

## Event Types

### BlockAdded

Emitted when a new block is added to the blockchain and stored locally in the node.

<details>
<summary>Expand to view output</summary>

```json
{
  "BlockAdded": {
    "block_hash": "62ddf902e9b6988b978413e2a9a2c6c95f8e1ddf452afd8e8a68f0ac22bf391a",
    "block": {
      "hash": "62ddf105e9b6988b378413e2a9a2c6c95f8e1ddf458afd8e8268f0ac72bfe91a",
      "header": {
        "parent_hash": "ed11ac2117edb9c5b26cf0cde318a807fd68e76206855a70429012ef16b557f5",
        "state_root_hash": "3c1ad31757ae40f934de4825a818274e0c246d304c661daf656e22b65174ad66",
        "body_hash": "eb2344f37193395bbc83587e498bc12ad5f0019055abcfa4c3b989d382a7969a",
        "random_bit": true,
        "accumulated_seed": "b8b671530f2221c8fdf201083f43c51e215e2f6ffcbe2d63238a2779eb177922",
        "era_end": null,
        "timestamp": "2023-01-01T09:55:25.312Z",
        "era_id": 8426,
        "height": 1566677,
        "protocol_version": "1.4.13"
      },
      "body": {
        "proposer": "010e5669b0f0545e2b32bc66363b9d3d4390fca56bf52305f1411b7fa12ca311c7",
        "deploy_hashes": [],
        "transfer_hashes": []
      },
      "proofs": []
    }
  }
}
```

- [block_hash](../../concepts/serialization-standard.md#block-hash)

  The cryptographic hash that is used to identify a block.

- [block](../../concepts/serialization-standard.md#serialization-standard-block)

  The JSON representation of the block.

- [proposer](../../concepts/serialization-standard.md#body)

  The validator selected to propose the block.

</details>

### DeployAccepted

Emitted when a deploy executes successfully and is accepted on the network.

<details>
<summary>Expand to view output</summary>

```json
{
  "DeployAccepted": {
    "hash": "db84ba229ea37716230ac9874f66c0f12b9731d8d42f28060e481ef3d7263ead",
    "header": {
      "account": "012481699f9231e36ecf002675cd7186b48e6a735d10ec1b30f587ca716937752c",
      "timestamp": "2023-01-01T20:22:45.383Z",
      "ttl": "30m",
      "gas_price": 1,
      "body_hash": "8a377b07a01ac23905b2e416ff388508301feffbb9bdf275c59f87be1e9d0de5",
      "dependencies": [],
      "chain_name": "casper-test"
    },
    "payment": {
      "ModuleBytes": {
        "module_bytes": "",
        "args": [
          [
            "amount",
            {
              "cl_type": "U512",
              "bytes": "040008af2f",
              "parsed": "800000000"
            }
          ]
        ]
      }
    },
    "session": {
      "StoredContractByHash": {
        "hash": "1040f40d06f0355a80149befc4b5d1f203231231d66c4903688e178c36066539",
        "entry_point": "test_entry_point",
        "args": [
          [
            "cost",
            {
              "cl_type": "U512",
              "bytes": "0500c817a804",
              "parsed": "20000000000"
            }
          ]
        ]
      }
    },
    "approvals": [
      {
        "signer": "012481699f9231e36ecf002675cd7186b48e6a735d10ec1b30f587ca716937752c",
        "signature": "01d81d4dc9504a356c23d3c161b87b39b1708cd282b59d3e44d9b999e787643ab495f168475bed8dc48d1056605e06c8ba74d96c69ae5b506c4312be8871c0c701"
      }
    ]
  }
}
```

* [hash](../../concepts/hash-types.md)

  The blake2b hash of the deploy.

* [account](../../concepts/serialization-standard.md#serialization-standard-account)

  The hexadecimal-encoded public key of the account submitting the deploy.

* [body_hash](../../concepts/hash-types.md)

  The blake2b hash of the deploy body.

* [payment](../../concepts/glossary/P.md#payment-code)

  Gas payment information.

* [session](../../concepts/session-code.md#what-is-session-code)

  The session logic defining the deploy's functionality.

* [approvals](../json-rpc/types_chain.md#approval)

  The signer's hexadecimal-encoded public key along with its signature.

</details>

### FinalitySignature

This event indicates that the final approvals from validators are signed and further alterations to the block will not be allowed. Refer to the [consensus reached](../../concepts/design/casper-design.md#consensus-reached) and [block finality](../../concepts/glossary/B.md#block-finality) sections to learn more about finality signatures.

<details>
<summary>Expand to view output</summary>

```json
{
  "FinalitySignature": {
    "block_hash": "eceed827e11f7969a7d3fe91d6fa4ce9749dd79d9f3ea26474fe2014db90e98d",
    "era_id": 8419,
    "signature": "0117087ef4b9a786e5a0ea8f198050e9de93dd94f87469b8124c346aeae5f36ad9adf80f670ee9c5887263267ed32cf932dce9b370353c596d59f91fbd57a1a205",
    "public_key": "01c375b425a36de25dc325c9182861679db2f634abcacd9ae2ee27b84ba62ac1f7"
  }
}
```

- [block_hash](../../concepts/serialization-standard.md#block-hash)

  A cryptographic hash that is used to identify a block.

- [era_id](../../concepts/serialization-standard.md#eraid)

  The period of time used to specify when specific events in a blockchain network occur.

- [signature](../../concepts/serialization-standard.md#signature)

  A serialized byte representation of the validator's signature.

- [public_key](../../concepts/serialization-standard.md#publickey)

  The hexadecimal-encoded public key of the validator.

</details>

### DeployProcessed

Emitted when a deploy is processed on the blockchain. This applies to every deploy; to listen to deploys from a certain account, during a certain time, containing certain data, etc, parse the data and discard what is not needed.

<details>
<summary>Expand to view output</summary>

```json
{
  "DeployProcessed": {
    "deploy_hash": "0f33be8f56ff23d7d503a9804675472e043830a6c17e6141dce717b4f0973c7d",
    "account": "0201cbff12155b6ae1e99d571c01d56e9e1ba0def6719a6f06bc3e4a08f30a887444",
    "timestamp": "2023-01-01T10:07:00.401Z",
    "ttl": "30m",
    "dependencies": [],
    "block_hash": "509b754648168a73e6ab67e64d4a783cf580d6fc0c7c0ec560c6650f717841e0",
    "execution_result": {
      "Success": {
        "effect": {
          "operations": [],
          "transforms": [
            {
              "key": "account-hash-a8261377ef9cf8e7411d6858801c71e28c9322e66355586549c75ab24cdd73f2",
              "transform": "Identity"
            },
          ]
        },
        "transfers": [
          "transfer-3389144d15238240f48f5966f2dc299b6b20eb19c13d834409b4d28fc50fa909"
        ],
        "cost": "100000000"
      }
    }
  }
}
```

* [deploy_hash](../../concepts/serialization-standard.md#deploy-hash)

  The cryptographic hash of a Deploy.

* [account](../../concepts/serialization-standard.md#serialization-standard-account)

  The hexadecimal-encoded public key of the account submitting the deploy.

* [timestamp](../../concepts/serialization-standard.md#timestamp)

  A timestamp type, representing a concrete moment in time.

* [dependencies](../../concepts/serialization-standard.md#deploy-header)

  A list of Deploy hashes. 

* [block_hash](../../concepts/serialization-standard.md#block-hash)

  A cryptographic hash that is used to identify a Block.

* [execution_result](../../concepts/serialization-standard.md#executionresult)

  The execution status of the deploy (Success or Failure).

</details>

### DeployExpired

`DeployExpired` event is emitted when a Deploy becomes no longer valid to be executed or added to a block due to their times to live (TTLs) expiring.

<details>
  <summary>Expand to view output</summary>

```json
{
  "DeployExpired": {
    "deploy_hash": "7ecf22fc284526d6db16fbf455f489e0a9cbf782234131c010cf3078fb9be353"
  }
}
```

* [deploy_hash](../../concepts/serialization-standard.md#deploy-hash)

  The cryptographic hash of a Deploy.

</details>

### Fault

The `Fault` event is emitted if there is a validator error.

<details>
<summary>Expand the below section to view the Fault event details:</summary>

```json
{
  "Fault": {
    "era_id": 4591448806312642600,
    "public_key": "013da85eb06279da42e28530e1116be04bfd2aa25ed8d63401ebff4d9153a609a9",
    "timestamp": "2023-01-01T01:26:58.364Z"
  }
}
```

* [era_id](../../concepts/serialization-standard.md#eraid) - The period of time used to specify when specific events in a blockchain network occur.
* [public_key](../../concepts/serialization-standard.md#publickey) - The hexadecimal-encoded public key of the validator that faulted.
* [timestamp](../../concepts/serialization-standard.md#timestamp) - A timestamp representing the moment the validator faulted.

</details>

### Step

The `Step` event is emitted at the end of every era and contains the execution effects produced by running the auction contract's `step` function.

<details>
<summary>Expand to view output:</summary>

```json 
{
  "Step": {
    "era_id": 1,
    "execution_effect": {
      "operations": [],
      "transforms": [
        {
          "key": "uref-53df18bf01396fbd1ef3a8757c7bdffc684c407d90f2cfeebff166db1d923613-000",
          "transform": "Identity"
        },
        {
          "key": "uref-f268de37fcea55f8fb1abeba8536a1cc041b2aed2691f1cf34aeaaf0ae379aa5-000",
          "transform": "Identity"
        },
        {
          "key": "bid-278e5af1ca6cddf5d5438999cb072b47f0d65e1484799f692c3c9c40304be30e",
          "transform": "Identity"
        },
        {
          "key": "bid-278e5af1ca6cddf5d5438999cb072b47f0d65e1484799f692c3c9c40304be30e",
          "transform": {
            "WriteBid": {
              "validator_public_key": "0133eaae2821f090ac3ba0eadc0a897742094c0604df72b465c41d4b773298a7b9",
              "bonding_purse": "uref-136552c255d4d737bf7e43d2be250f9f38691b9fe5d9e34446bff18d6d1cf984-007",
              "staked_amount": "1000000000000005",
              "delegation_rate": 5,
              "vesting_schedule": {
                "initial_release_timestamp_millis": 1664475057182,
                "locked_amounts": null
              },
              "delegators": {
                "012a241eaa9fa3bd6ccb0e0aaaf4658538f3540e04e2f58973614a168f2f2f813d": {
                  "delegator_public_key": "012a241eaa9fa3bd6ccb0e0aaaf4658538f3540e04e2f58973614a168f2f2f813d",
                  "staked_amount": "51312014671568117976319379",
                  "bonding_purse": "uref-c5ad00f9e6b2f2631ca647ad188187e63799a278a0a46ca25f6b4da64d556662-007",
                  "validator_public_key": "0133eaae2821f090ac3ba0eadc0a897742094c0604df72b465c41d4b773298a7b9",
                  "vesting_schedule": {
                    "initial_release_timestamp_millis": 1664475057182,
                    "locked_amounts": null
                  }
                }
              },
              "inactive": false
            }
          }
        }
      ]
    }
  }
}
```

* [era_id](../../concepts/serialization-standard.md#eraid)

  The period of time is used to specify when specific events in a blockchain network will occur.

* [execution_effect](../../concepts/serialization-standard.md#executioneffect)

  The journal of execution transforms from a single Deploy.

* [operations](../../concepts/serialization-standard.md#operation)

  Operations performed while executing a deploy.

* [transform](../../concepts/serialization-standard.md#transform)

  The actual transformation performed while executing a deploy.

</details>

### Shutdown

The `Shutdown` event is emitted when the node is about to shut down, usually for an upgrade. This causes a termination of the event stream.

<details>
<summary>Expand the below section to view the Shutdown event details:</summary>

```bash
"Shutdown"
```
* Shutdown

  The "Shutdown" text notifies the event listener that a shutdown will be occurring.

</details>

---

Refer to the [serialization standard](../../concepts/serialization-standard.md) page to get details on required custom serializations and the [types](../json-rpc/types_chain.md) page to find definitions of the terms used in the event stream output.

## Act on Events

To perform functions upon receiving event data, you will need to parse each event that is recognized and respond in your own way. You may choose to act on some events and not others, or you may act upon them all. For each event type, there will be more data you can check to decide if the event received is one you want to react to. For example, `DeployAccepted` events will contain the public key of the account that submitted the deploy, the contract address, and more. You can use this information to determine whether you would like to react and how, or not.

<Tabs>

<TabItem value="js" label="JavaScript">

```javascript
function eventHandler(event) {
  if (event.body.DeployAccepted.header.account == "012481699f9231e36ecf002675cd7186b48e6a735d10ec1b30f587ca716937752c") {
    // Perform an action
  }
}
```

</TabItem>

<TabItem value="python" label="Python">

```python
def eventHandler(event):
  if event["DeployAccepted"]["header"]["account"] == "012481699f9231e36ecf002675cd7186b48e6a735d10ec1b30f587ca716937752c":
    # Perform an action
```

</TabItem>

</Tabs>

## Unsubscribe from Events

In many cases, you may want to only be subscribed to events for a certain amount of time, or may want to unsubscribe from some events but not others. Casper's SDKs provide this ability:

<Tabs>

<TabItem value="js" label="JavaScript">

```javascript
es.unsubscribe(EventName.EVENT_NAME)
```

</TabItem>

</Tabs>

Where `EVENT_NAME` is one of the different [event types](#event-types) emitted by the Casper Network.

## Stop Streaming Events

If at any time in the lifecycle of your dApp you would like to cease listening to events altogether, you may do so using:

<Tabs>

<TabItem value="js" label="JavaScript">

```javascript
es.stop()
```

</TabItem>

</Tabs>