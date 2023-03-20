import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

# Front-end Template with React

For building web applications, it is most common to use the Casper JS SDK with React. This is a popular solution among developers, but you may use any front-end library or framework, including none at all, to interact with the Casper Network via the [Casper JS SDK](https://github.com/casper-ecosystem/casper-js-sdk).

This guide will walk you through setting up and developing a React application with [Vite](https://vitejs.dev/) that communicates with the Casper Network. Experience with Vite is not required, however if you have never built a React app, you should begin by [reading the React documentation](https://reactjs.org/docs/getting-started.html).

## Get Started

Begin by opening a terminal and running:

```bash
node -v
```

To get your Node.js version.

To ensure compatibility, you should be running Node.js version 18 or above. If you are running an earlier version, upgrade to version 18 using the [Node Version Manager](https://github.com/nvm-sh/nvm) or another tool.

Using `npm`, create a new Vite project by running:

```bash
npm create vite@latest
```

Name your project, select "React", then choose JavaScript or TypeScript.

Head into your new project directory:

```bash
cd vite-project/
```

replacing `vite-project` with your project name.

Run

```bash
npm install
npm run dev
```

to test the server.

Quit the server by pressing `q`. Install the Casper JS SDK by running:

```bash
npm install casper-js-sdk
```

## Casper Signer Integration

To connect to the Casper Signer within your React app, first create a new component that imports the `Signer` class from the Casper JS SDK and stores a public key in a state variable.

```bash
touch src/Signer.js
```

Open the file and write:

```javascript
import { Signer } from "casper-js-sdk";

const [publicKey, setPublicKey] = React.useState(null);
function Connect() {
  
}

export default Connect;
```

Within the component, return a single button that calls a function `connectToSigner()`

```jsx
function Connect() {
  return <button onClick={() => connectToSigner()}>Connect Signer</button>;
}
```

Now write the `connectToSigner()` function under the `Connect` function component:

```javascript
function connectToSigner() {
	Signer.isConnected().then(connected => {
			if (!connected) {
				Signer.sendConnectionRequest();
			} else {
				Signer.getActivePublicKey()
					.then(publicKey => {
						setPublicKey(publicKey);
					})
					.catch(error => {
						alert(error.message);
					});
			}
		})
		.catch(error => {
			alert(error.message);
		});
}
```

The `connectToSigner()` function calls `Signer.isConnected()` to check if the Signer is already connected. If it is, it gets the public key of the selected account, if it's not, it opens up a connection request within the Signer. `Signer.isConnected()` will throw an error if the Signer is not installed as an extension or if the Signer is locked.

## Call a Smart Contract

For this example we'll be calling a hypothetical "hello world" contract that contains a single entrypoint "update_message". We'll call the "update_message" entrypoint with text entered by the user in an HTML `input` field.

When calling smart contracts from React, you'll need to implement the logic within a function accessible from a React component. You can obtain user-entered data from the DOM using elements like `input` then grab the value within the smart-contract-calling function.

Create a new component:

```bash
touch src/UpdateMessage.js
```

Open the file and write:

```jsx
import { Contracts, CasperClient, RuntimeArgs, CLValueBuilder, DeployUtil, Signer } from "casper-js-sdk";

function UpdateMessage() {
  return (
  	<>
      <input id="message" type="text">
      <button onClick={ updateMessage() }>Update Message</button>
    </>
  )
}

export default UpdateMessage;
```

On the front-end you'll need to build the transaction and forward it to the Casper Signer to be signed. In most cases you will be calling smart contract entrypoints. This example transaction shows the calling of entrypoint "update_message" which will update the state of the chain to reflect the new data. Write this function under your `UpdateMessage` component function.

```javascript
function updateMessage() {
	const contract = Contracts.Contract(new CasperClient("http://NODE_ADDRESS:7777/rpc"));
	contract.setContractHash("hash-75143aa708275b7dead20ac2cc06c1c3eccff4ffcf1eb9aebb8cce7c35cea041");
	const runtimeArguments = RuntimeArgs.fromMap({
		"message": CLValueBuilder.string(userInputElement.value)
	});
	const deploy = contract.callEntrypoint(
		"update_message",
		args,
		CLPublicKey.fromHex(publicKey),
		"casper", // "casper-test" for testnet
		"1000000000", // 1 CSPR (10^9 Motes)
	);
	const deployJSON = DeployUtil.deployToJson(deploy);
	Signer.sign(deployJSON, publicKey).then((signedDeploy) => { // Initiates sign request
		// Send `signedDeploy` to backend via POST request
	}).catch((error) => {
		// Handle `error`
	});
}
```

  ## Query a Smart Contract

Consider that the message written to the chain during the `update_message` entrypoint invocation is stored in the [dictionary](../../concepts/glossary/D.md#dictionary) "messages" in the contract. Further consider that each account may write their own message, and that the messages are stored under the account's [account hash](../../concepts/glossary/A.md#account-hash) as the dictionary key. Querying this kind of data is important in any dApp, here is how to communicate contract data to and from the front-end.

Create a new component:

```bash
touch src/Query.js
```

Open the file and write:

```jsx
function Query() {
  return (
    <>
      <input id="accountHash" type="text">
      <button onClick={ query() }>Query</button>
    </>
  );
}

function query() {
  const accountHash = document.getElementById("accountHash").value;
  // Query the backend using GET/POST with the `accountHash`
}
```