"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[716],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),h=i,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5711:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={title:"Delegating Tokens"},s="Delegating with the Casper Client",d={unversionedId:"developers/cli/delegate",id:"developers/cli/delegate",title:"Delegating Tokens",description:"This document details a workflow where an account holder on a Casper network can delegate tokens to a validator.",source:"@site/source/docs/casper/developers/cli/delegate.md",sourceDirName:"developers/cli",slug:"/developers/cli/delegate",permalink:"/developers/cli/delegate",draft:!1,editUrl:"https://github.com/casper-network/docs-new/tree/dev-new/source/docs/casper/developers/cli/delegate.md",tags:[],version:"current",lastUpdatedAt:1691069605,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{title:"Delegating Tokens"},sidebar:"developers",previous:{title:"Verifying a Transfer",permalink:"/developers/cli/transfers/verify-transfer"},next:{title:"Undelegating Tokens",permalink:"/developers/cli/undelegate"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Acquiring a Validator&#39;s Public Key",id:"acquiring-a-validators-public-key",level:3},{value:"Sending the Delegation Request",id:"sending-the-delegation-request",level:2},{value:"Method 1: Delegating with the System Auction Contract",id:"delegating-system-auction",level:3},{value:"Method 2: Delegating with Compiled Wasm",id:"delegating-compiled-wasm",level:3},{value:"Building the delegation Wasm",id:"building-the-delegation-wasm",level:4},{value:"Sending the delegation request",id:"sending-the-delegation-wasm-request",level:4},{value:"Confirming the Delegation",id:"confirming-the-delegation",level:2},{value:"Checking Validator Status",id:"checking-validator-status",level:3}],u={toc:c},h="wrapper";function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"delegating-with-the-casper-client"},"Delegating with the Casper Client"),(0,r.kt)("p",null,"This document details a workflow where an account holder on a Casper network can delegate tokens to a validator."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You meet all prerequisites listed ",(0,r.kt)("a",{parentName:"li",href:"/developers/prerequisites"},"here"),", including having a valid ",(0,r.kt)("inlineCode",{parentName:"li"},"node-address")," and the Casper command-line client"),(0,r.kt)("li",{parentName:"ol"},"You have previously ",(0,r.kt)("a",{parentName:"li",href:"/developers/cli/sending-deploys"},"installed a smart contract")," to a Casper network"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#acquiring-a-validators-public-key"},"Acquiring a Validator's Public Key"))),(0,r.kt)("h3",{id:"acquiring-a-validators-public-key"},"Acquiring a Validator's Public Key"),(0,r.kt)("p",null,"This workflow will take you through the additional prerequisite to acquire a validator's public key before sending the ",(0,r.kt)("a",{parentName:"p",href:"/developers/cli/delegate#sending-the-delegation-request"},"delegation request"),"."),(0,r.kt)("p",null,"Any rewards earned are also redelegated by default to the validator from the initial delegation request. Therefore at the time of undelegation, you should consider undelegating the initial amount plus any additional rewards earned through the delegation process."),(0,r.kt)("p",null,"The active validator set constantly rotates; therefore, when delegating to a validator, remember that the validator you selected may have been rotated out of the set."),(0,r.kt)("h2",{id:"sending-the-delegation-request"},"Sending the Delegation Request"),(0,r.kt)("p",null,"There are two ways to delegate CSPR to a validator. The recommended and cheaper method is to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate")," entry point from the system auction contract. The second method involves building the ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate.wasm")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node")," repository and installing it on the network."),(0,r.kt)("p",null,"We recommend testing the following steps on the official Testnet before performing them in a live environment like the Casper Mainnet."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The minimum amount to delegate is 500 CSPR (500,000,000,000 motes).")),(0,r.kt)("h3",{id:"delegating-system-auction"},"Method 1: Delegating with the System Auction Contract"),(0,r.kt)("p",null,"This method calls the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate")," entry point from the system auction contract. Using this method, you do not need to build any contracts, reducing costs and complexity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT_IN_MOTES> \\\n--session-hash <SESSION_HASH> \\\n--session-entry-point delegate \\\n--session-arg \"validator:public_key='<HEX_ENCODED_VALIDATOR_PULIC_KEY>'\" \\\n--session-arg \"amount:u512='<AMOUNT_TO_DELEGATE>'\" \\\n--session-arg \"delegator:public_key='<HEX_ENCODED_DELEGATOR_PULIC_KEY>'\"\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"secret-key")," - The file name containing the secret key of the account paying for the Deploy"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"chain-name")," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,r.kt)("em",{parentName:"li"},"casper"),". For Testnet, use ",(0,r.kt)("em",{parentName:"li"},"casper-test")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"payment-amount")," - The payment for the Deploy in motes. This entry point call needs 2.5 CSPR for node version ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml"},"1.5.1")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"session-hash")," - Hex-encoded hash of the stored auction contract, which depends on the network you are using. For Casper's Mainnet and Testnet, the hashes are as follows:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Testnet"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mainnet"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"hash-ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea"))),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"session-entry-point")," - Name of the entry point that will be used when calling the contract")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate")," entry point expects three arguments:"),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"validator"),": The hexadecimal public key of the validator receiving the delegated tokens"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"amount"),": The number of tokens to be delegated"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"delegator"),": The hexadecimal public key of the account delegating tokens to a validator. ",(0,r.kt)("strong",{parentName:"li"},"This key must match the secret key that signs the delegation"))),(0,r.kt)("p",null,"The command will return a deploy hash, which is needed to verify the deploy's processing results. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/resources/tutorials/beginner/querying-network#deploy-status"},"Deploy Status")," section for more details."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate")," entry point on the auction contract has a fixed cost of 2.5 CSPR.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"This example shows an account delegating 500 CSPR:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n--node-address http://65.21.75.254:7777  \\\n--chain-name casper-test \\\n--secret-key ~/KEYS/secret_key.pem \\\n--payment-amount 2500000000 \\\n--session-hash hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2 \\\n--session-entry-point delegate \\\n--session-arg \"validator:public_key='01aa17f7b9889480b1bd34c3f94f263b229c7a9b01dd4dda19c2dd1d38d176c7a0'\" \\\n--session-arg \"amount:u512='500000000000'\" \\\n--session-arg \"delegator:public_key='01e3d3392c2e0b943abe709b25de5c353e5e1e9d95c7a76e3dd343d8aa1aa08d51'\"\n")),(0,r.kt)("p",null,"Next, ",(0,r.kt)("a",{parentName:"p",href:"#confirming-the-delegation"},"confirm the delegation"),"."),(0,r.kt)("h3",{id:"delegating-compiled-wasm"},"Method 2: Delegating with Compiled Wasm"),(0,r.kt)("p",null,"Another way to send a delegation is to compile the ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate.wasm")," and send it to the network via a deploy. Here are the steps to compile the contract yourself."),(0,r.kt)("h4",{id:"building-the-delegation-wasm"},"Building the delegation Wasm"),(0,r.kt)("p",null,"Obtain the ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate.wasm")," by cloning the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node"},"casper-node")," repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/casper-network/casper-node\n")),(0,r.kt)("p",null,"Prepare the Rust environment and then build the contracts using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/dev/Makefile"},"Makefile")," provided in the repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd casper-node\nmake setup-rs\nmake build-contracts-rs\n")),(0,r.kt)("p",null,"Once you build the contracts, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate.wasm")," to create a deploy that will initiate the delegation process. The Wasm can be found in this directory: ",(0,r.kt)("inlineCode",{parentName:"p"},"target/wasm32-unknown-unknown/release/"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls target/wasm32-unknown-unknown/release/delegate.wasm\n")),(0,r.kt)("h4",{id:"sending-the-delegation-wasm-request"},"Sending the delegation request"),(0,r.kt)("p",null,"In this example, we use the Casper client to send a deploy containing the ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate.wasm")," to the network to initiate the delegation process."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT_IN_MOTES> \\\n--session-path <PATH_TO_WASM>/delegate.wasm \\\n--session-arg \"validator:public_key='<HEX_ENCODED_VALIDATOR_PULIC_KEY>'\" \\\n--session-arg \"amount:u512='<AMOUNT_TO_DELEGATE>'\" \\\n--session-arg \"delegator:public_key='<HEX_ENCODED_DELEGATOR_PULIC_KEY>'\"\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"secret-key")," - The file name containing the secret key of the account paying for the Deploy"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"chain-name")," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,r.kt)("em",{parentName:"li"},"casper"),". For Testnet, use ",(0,r.kt)("em",{parentName:"li"},"casper-test")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"payment-amount")," - The payment for the Deploy in motes. This entry point call needs 2.5 CSPR for node version ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml"},"1.5.1")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"session-path")," - The path to where the ",(0,r.kt)("inlineCode",{parentName:"li"},"delegate.wasm")," is located")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate")," entry point expects three arguments:"),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"validator"),": The hexadecimal public key of the validator receiving the delegated tokens"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"amount"),": The number of tokens to be delegated"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"delegator"),": The hexadecimal public key of the account delegating tokens to a validator. ",(0,r.kt)("strong",{parentName:"li"},"This key must match the secret key that signs the delegation"))),(0,r.kt)("p",null,"The command will return a deploy hash, which is needed to verify the deploy's processing results. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/resources/tutorials/beginner/querying-network#deploy-status"},"Deploy Status")," section for more details."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"This example command uses the Casper Testnet to delegate 500 CSPR, and the payment amount is 6 CSPR. The payment amount varies based on each deploy and network ",(0,r.kt)("a",{parentName:"p",href:"/concepts/glossary/C#chainspec"},"chainspec"),". However, notice that this method is more expensive than the previous one that calls the delegate entry point."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n--node-address http://65.21.75.254:7777  \\\n--chain-name casper-test \\\n--secret-key ~/KEYS/secret_key.pem \\\n--payment-amount 20000000000 \\\n--session-path ~/delegate.wasm \\\n--session-arg \"validator:public_key='01aa17f7b9889480b1bd34c3f94f263b229c7a9b01dd4dda19c2dd1d38d176c7a0'\" \\\n--session-arg \"amount:u512='500000000000'\" \\\n--session-arg \"delegator:public_key='01e3d3392c2e0b943abe709b25de5c353e5e1e9d95c7a76e3dd343d8aa1aa08d51'\"\n")),(0,r.kt)("p",null,"Next, ",(0,r.kt)("a",{parentName:"p",href:"#confirming-the-delegation"},"confirm the delegation"),"."),(0,r.kt)("h2",{id:"confirming-the-delegation"},"Confirming the Delegation"),(0,r.kt)("p",null,"A Casper network maintains an ",(0,r.kt)("em",{parentName:"p"},"auction")," where validators ",(0,r.kt)("em",{parentName:"p"},"bid")," on slots to become part of the active validator set. Delegation rewards are only earned for a validator who has won the auction and is part of the active set. Thus to ensure the delegated tokens can earn rewards, you must first check the foloowing:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Your delegation is part of the ",(0,r.kt)("em",{parentName:"li"},"bid")," to the ",(0,r.kt)("em",{parentName:"li"},"auction")),(0,r.kt)("li",{parentName:"ol"},"The validator is part of the ",(0,r.kt)("em",{parentName:"li"},"active")," validator set")),(0,r.kt)("p",null,"Once the deploy has been processed, you can query the auction for information to confirm our delegation. Use the Casper command-line client to create an RPC request with the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info \\\n--node-address http://<peer-ip-address>:7777\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request fields"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"get-auction-info")," call will return all the bids currently in the auction contract and the list of active validators for ",(0,r.kt)("inlineCode",{parentName:"p"},"4")," future eras from the present era."),(0,r.kt)("p",null,"Below is a sample output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"bids": [\n{\n  "bid": {\n    "bonding_purse": "uref-a5ce7dbc5f7e02ef52048e64b2ff4693a472a1a56fe71e83b180cd33271b2ed9-007",\n    "delegation_rate": 1,\n    "delegators": [\n      {\n        "bonding_purse": "uref-ca9247ad56a4d5be70484303133e2d6db97f7d7385772155763749af98ace0b0-007",\n        "delegatee": "0102db4e11bccb3f9d823c82b9389625d383867d00d09b343043cdbe5ca56dd1fd",\n        "public_key": "010c7fef89bf1fc38363bd2ec20bbfb5e1152d6a9579c8847615c59c7e461ece89",\n        "staked_amount": "1"\n      },\n      {\n        "bonding_purse": "uref-38a2e9cad51b380e478c9a325578f4bbdaa0337b99b9ab9bf1dc2a114eb948b9-007",\n        "delegatee": "0102db4e11bccb3f9d823c82b9389625d383867d00d09b343043cdbe5ca56dd1fd",\n        "public_key": "016ebb38d613f2550e7c21ff9d99f6249b4ae5fb9e30938f6ece2d84a22a36b035",\n        "staked_amount": "478473232415318176495746923"\n      }\n    ],\n    "inactive": false,\n    "staked_amount": "493754513995516852173468935"\n  },\n  "public_key": "0102db4e11bccb3f9d823c82b9389625d383867d00d09b343043cdbe5ca56dd1fd"\n},\n')),(0,r.kt)("p",null,"The delegation request has been processed successfully if your public key and associated amount appear in the ",(0,r.kt)("inlineCode",{parentName:"p"},"bid")," data structure. However, this does not mean the associated validator is part of the validator set, so you must check the validator status."),(0,r.kt)("h3",{id:"checking-validator-status"},"Checking Validator Status"),(0,r.kt)("p",null,"The auction maintains a field called ",(0,r.kt)("inlineCode",{parentName:"p"},"era_validators"),", which contains the validator information for 4 future eras from the current era. An entry for a specific era lists the ",(0,r.kt)("inlineCode",{parentName:"p"},"PublicKeys")," of the active validators for that era, along with their stake in the network."),(0,r.kt)("p",null,"If a validator is part of the set, its public key will be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"era_validators")," field as part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Auction")," data structure. We can use the Casper command-line client to create an RPC request to obtain auction information and assert that the selected validator is part of the active validator set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info \\\n--node-address http://<peer-ip-address>:7777\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request fields"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important Response fields"),":"),(0,r.kt)("p",null,"In the response, check the ",(0,r.kt)("inlineCode",{parentName:"p"},'"auction_state"."era_validators"')," structure, which should contain the public key of the selected validator for the era in which the validator will be active."),(0,r.kt)("p",null,"Below is an example of the ",(0,r.kt)("inlineCode",{parentName:"p"},"era_validators")," structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"block_height":105,\n     "era_validators":[\n        {\n           "era_id":9,\n           "validator_weights":[\n              {\n                 "public_key":"0102db4e11bccb3f9d823c82b9389625d383867d00d09b343043cdbe5ca56dd1fd",\n                 "weight":"648151805935226166098427654"\n              },\n              {\n                 "public_key":"01aa67009b37a23c7ad0ca632da5da239d5db46067d4b34125f61b04611f610baf",\n                 "weight":"648151805938466925128109996"\n              },\n              {\n                 "public_key":"01b7afa2beeddffd13458b763d7a00259f7dc0fa45498dfed05b4d7df4b7d65e2c",\n                 "weight":"648151805935226166098427656"\n              },\n              {\n                 "public_key":"01ca5463dac047cbd750d97ee42dd810cf1e081ece7d83ae4fc03b25a9ecad3b6a",\n                 "weight":"648151805938466925128109998"\n              },\n              {\n                 "public_key":"01f4a7644695aa129eba09fb3f11d0277b2bea1a3d5bc1933bcda93fdb4ad17e55",\n                 "weight":"648151805938466925128110000"\n              }\n           ]\n        },\n')),(0,r.kt)("p",null,"In the above example, we see the public keys of the active validators in Era ",(0,r.kt)("inlineCode",{parentName:"p"},"9"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Validators earn delegation rewards only when they are part of the active set. This information is time-sensitive; therefore, a validator selected today may not be part of the set tomorrow. Keep this in mind when creating a delegation request."))}m.isMDXComponent=!0}}]);