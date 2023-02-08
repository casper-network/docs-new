"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9961],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=r,k=c["".concat(d,".").concat(h)]||c[h]||u[h]||o;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1629:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],l={},d="Delegating with the Casper Client",s={unversionedId:"workflow/developers/delegate",id:"workflow/developers/delegate",title:"Delegating with the Casper Client",description:"This document details a workflow where an account holder on a Casper network can delegate tokens to a validator.",source:"@site/source/docs/casper/workflow/developers/delegate.md",sourceDirName:"workflow/developers",slug:"/workflow/developers/delegate",permalink:"/workflow/developers/delegate",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/developers/delegate.md",tags:[],version:"current",lastUpdatedAt:1675797037,formattedLastUpdatedAt:"2/7/2023",frontMatter:{},sidebar:"workflow",previous:{title:"Verifying a Transfer",permalink:"/workflow/developers/verify-transfer"},next:{title:"Undelegating Tokens with the Casper Client",permalink:"/workflow/developers/undelegate"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Building The Delegation Wasm",id:"building-the-delegation-wasm",level:3},{value:"Acquiring a Validator&#39;s Public Key",id:"acquiring-a-validators-public-key",level:3},{value:"Sending the Delegation Request",id:"sending-the-delegation-request",level:2},{value:"Confirming the Delegation",id:"confirming-the-delegation",level:3},{value:"Checking Validator Status",id:"checking-validator-status",level:3}],c={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"delegating-with-the-casper-client"},"Delegating with the Casper Client"),(0,o.kt)("p",null,"This document details a workflow where an account holder on a Casper network can delegate tokens to a validator."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You meet all prerequisites listed ",(0,o.kt)("a",{parentName:"li",href:"/dapp-dev-guide/setup"},"here"),", including having a valid ",(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," and the Casper command-line client"),(0,o.kt)("li",{parentName:"ol"},"You have previously ",(0,o.kt)("a",{parentName:"li",href:"/dapp-dev-guide/building-dapps/sending-deploys"},"deployed a smart contract")," to a Casper network")),(0,o.kt)("p",null,"The workflow will take you through two additional prerequisites before sending the ",(0,o.kt)("a",{parentName:"p",href:"/workflow/developers/delegate/#sending-the-delegation-request"},"delegation request"),":"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Building the delegation Wasm to execute on the network"),(0,o.kt)("li",{parentName:"ol"},"Getting the public key of a validator on the network")),(0,o.kt)("h3",{id:"building-the-delegation-wasm"},"Building The Delegation Wasm"),(0,o.kt)("p",null,"Obtain the ",(0,o.kt)("inlineCode",{parentName:"p"},"delegate.wasm")," by cloning the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node"},"casper-node")," repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/casper-network/casper-node\n")),(0,o.kt)("p",null,"Prepare the Rust environment and then build the contracts using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/dev/Makefile"},"Makefile")," provided in the repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd casper-node\nmake setup-rs\nmake build-contracts-rs\n")),(0,o.kt)("p",null,"Once you build the contracts, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"delegate.wasm")," to create a deploy that will initiate the delegation process. The Wasm can be found in this directory: ",(0,o.kt)("inlineCode",{parentName:"p"},"target/wasm32-unknown-unknown/release/"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ls target/wasm32-unknown-unknown/release/delegate.wasm\n")),(0,o.kt)("h3",{id:"acquiring-a-validators-public-key"},"Acquiring a Validator's Public Key"),(0,o.kt)("p",null,"The official Casper Testnet and Mainnet provide a browser-based block explorer to look up the list of validators:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://cspr.live/validators"},"Validators on Mainnet")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://testnet.cspr.live/validators"},"Validators on Testnet"))),(0,o.kt)("p",null,"You will see a list of validators present on the network and their total stake (including tokens from other delegators)."),(0,o.kt)("p",null,"You can click on any validator listed to see more information about the validator, including the validator's personal stake."),(0,o.kt)("p",null,"As a prospective delegator, selecting a trustworthy validator with a favorable rate is essential. Each validator shows the delegation rate, which is a percentage of ",(0,o.kt)("strong",{parentName:"p"},"your")," reward share that the validator will retain. Thus, a 10% rate implies that the validator will retain 10% of your reward share. Please do your due diligence before staking your tokens with a validator."),(0,o.kt)("p",null,"Note the ",(0,o.kt)("inlineCode",{parentName:"p"},"PublicKey")," of the validator you have selected to delegate your tokens."),(0,o.kt)("p",null,"Suppose you observe your delegation request in the bid structure but do not see the associated validator key in the ",(0,o.kt)("inlineCode",{parentName:"p"},"era_validators")," structure. In that case, the validator you selected is not part of the current validator set. In this event, your tokens will only be earning rewards if you un-delegate, wait through the unbonding period, and re-delegate to another validator."),(0,o.kt)("p",null,"Additionally, any rewards earned are re-delegated by default to the validator from the initial delegation request. Therefore at the time of un-delegation, you should consider un-delegating the initial amount plus any additional rewards earned through the delegation process."),(0,o.kt)("p",null,"The active validator set constantly rotates; therefore, when delegating to a validator, remember that the validator you selected may have been rotated out of the set."),(0,o.kt)("h2",{id:"sending-the-delegation-request"},"Sending the Delegation Request"),(0,o.kt)("p",null,"We recommend testing the following steps on the official Testnet before performing them in a live environment like the Casper Mainnet."),(0,o.kt)("p",null,"In this example, we use the Casper client to send a deploy containing the ",(0,o.kt)("inlineCode",{parentName:"p"},"delegate.wasm")," to the network to initiate the delegation process."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"casper-client put-deploy \\\n--node-address http://<peer-ip-address>:7777 \\\n--chain-name casper-test \\\n--session-path <path-to-wasm>/delegate.wasm \\\n--payment-amount 5000000000 \\\n--session-arg \"validator:public_key='<hex-encoded-validator-public-key>'\" \\\n--session-arg \"amount:u512='<amount-to-delegate>'\" \\\n--session-arg \"delegator:public_key='<hex-encoded-public-key>'\" \\\n--secret-key <delegator-secret-key>.pem\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," The delegator's public key and the secret key that signs the deploy must be part of the same account key pair."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"node-address")," - An IP address of a node on the network")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"secret-key")," - Path to the secret key file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"chain-name")," - Name of the chain, to avoid the deploy from being accidentally or maliciously included in a different chain"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"chain-name")," for Testnet is ",(0,o.kt)("strong",{parentName:"li"},"casper-test")),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"chain-name")," for Mainnet is ",(0,o.kt)("strong",{parentName:"li"},"casper")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"session-path")," - The path to where the ",(0,o.kt)("inlineCode",{parentName:"p"},"delegate.wasm")," is located")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"session-arg")," - The arguments to the ",(0,o.kt)("inlineCode",{parentName:"p"},"delegate")," request"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The argument ",(0,o.kt)("inlineCode",{parentName:"li"},"validator")," is the public key of the validator to whom the tokens will be delegated"),(0,o.kt)("li",{parentName:"ul"},"The argument ",(0,o.kt)("inlineCode",{parentName:"li"},"amount")," is the number of tokens to be delegated"),(0,o.kt)("li",{parentName:"ul"},"The argument ",(0,o.kt)("inlineCode",{parentName:"li"},"delegator")," is the public key of the account delegating tokens to a validator")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important response fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"result"."deploy_hash"')," - the address of the executed delegation request.")),(0,o.kt)("p",null,"Save the returned ",(0,o.kt)("em",{parentName:"p"},"deploy_hash")," from the output to query information about the delegation deploy later."),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/workflow/developers/querying#deploy-status"},"Deploy Status")," section to learn how to confirm that your deploy was executed successfully."),(0,o.kt)("h3",{id:"confirming-the-delegation"},"Confirming the Delegation"),(0,o.kt)("p",null,"A Casper network maintains an ",(0,o.kt)("em",{parentName:"p"},"auction")," where validators ",(0,o.kt)("em",{parentName:"p"},"bid")," on slots to become part of the active validator set. Delegation rewards are only earned for a validator who has won the auction and is part of the active set. Thus to ensure the delegated tokens can earn rewards, we must first check that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Our delegation is part of the ",(0,o.kt)("em",{parentName:"li"},"bid")," to the ",(0,o.kt)("em",{parentName:"li"},"auction")),(0,o.kt)("li",{parentName:"ol"},"The validator is part of the ",(0,o.kt)("em",{parentName:"li"},"active")," validator set")),(0,o.kt)("p",null,"Once the deploy has been processed, we can query the auction for information to confirm our delegation. We can use the Casper command-line client to create an RPC request with the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info \\\n--node-address http://<peer-ip-address>:7777\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"get-auction-info")," call will return all the bids currently in the auction contract and the list of active validators for ",(0,o.kt)("inlineCode",{parentName:"p"},"4")," future eras from the present era."),(0,o.kt)("p",null,"Below is a sample output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"bids": [\n{\n  "bid": {\n    "bonding_purse": "uref-a5ce7dbc5f7e02ef52048e64b2ff4693a472a1a56fe71e83b180cd33271b2ed9-007",\n    "delegation_rate": 1,\n    "delegators": [\n      {\n        "bonding_purse": "uref-ca9247ad56a4d5be70484303133e2d6db97f7d7385772155763749af98ace0b0-007",\n        "delegatee": "0102db4e11bccb3f9d823c82b9389625d383867d00d09b343043cdbe5ca56dd1fd",\n        "public_key": "010c7fef89bf1fc38363bd2ec20bbfb5e1152d6a9579c8847615c59c7e461ece89",\n        "staked_amount": "1"\n      },\n      {\n        "bonding_purse": "uref-38a2e9cad51b380e478c9a325578f4bbdaa0337b99b9ab9bf1dc2a114eb948b9-007",\n        "delegatee": "0102db4e11bccb3f9d823c82b9389625d383867d00d09b343043cdbe5ca56dd1fd",\n        "public_key": "016ebb38d613f2550e7c21ff9d99f6249b4ae5fb9e30938f6ece2d84a22a36b035",\n        "staked_amount": "478473232415318176495746923"\n      }\n    ],\n    "inactive": false,\n    "staked_amount": "493754513995516852173468935"\n  },\n  "public_key": "0102db4e11bccb3f9d823c82b9389625d383867d00d09b343043cdbe5ca56dd1fd"\n},\n')),(0,o.kt)("p",null,"The delegation request has been processed successfully if your public key and associated amount appear in the ",(0,o.kt)("inlineCode",{parentName:"p"},"bid")," data structure. However, this does not mean the associated validator is part of the validator set, so you must check the validator status."),(0,o.kt)("h3",{id:"checking-validator-status"},"Checking Validator Status"),(0,o.kt)("p",null,"The auction maintains a field called ",(0,o.kt)("inlineCode",{parentName:"p"},"era_validators"),", which contains the validator information for 4 future eras from the current era. An entry for a specific era lists the ",(0,o.kt)("inlineCode",{parentName:"p"},"PublicKeys")," of the active validators for that era, along with their stake in the network."),(0,o.kt)("p",null,"If a validator is part of the set, its public key will be in the ",(0,o.kt)("inlineCode",{parentName:"p"},"era_validators")," field as part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Auction")," data structure. We can use the Casper command-line client to create an RPC request to obtain auction information and assert that the selected validator is part of the active validator set."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info \\\n--node-address http://<peer-ip-address>:7777\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important Response fields"),":"),(0,o.kt)("p",null,"In the response, check the ",(0,o.kt)("inlineCode",{parentName:"p"},'"auction_state"."era_validators"')," structure, which should contain the public key of the selected validator for the era in which the validator will be active."),(0,o.kt)("p",null,"Below is an example of the ",(0,o.kt)("inlineCode",{parentName:"p"},"era_validators")," structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"block_height":105,\n     "era_validators":[\n        {\n           "era_id":9,\n           "validator_weights":[\n              {\n                 "public_key":"0102db4e11bccb3f9d823c82b9389625d383867d00d09b343043cdbe5ca56dd1fd",\n                 "weight":"648151805935226166098427654"\n              },\n              {\n                 "public_key":"01aa67009b37a23c7ad0ca632da5da239d5db46067d4b34125f61b04611f610baf",\n                 "weight":"648151805938466925128109996"\n              },\n              {\n                 "public_key":"01b7afa2beeddffd13458b763d7a00259f7dc0fa45498dfed05b4d7df4b7d65e2c",\n                 "weight":"648151805935226166098427656"\n              },\n              {\n                 "public_key":"01ca5463dac047cbd750d97ee42dd810cf1e081ece7d83ae4fc03b25a9ecad3b6a",\n                 "weight":"648151805938466925128109998"\n              },\n              {\n                 "public_key":"01f4a7644695aa129eba09fb3f11d0277b2bea1a3d5bc1933bcda93fdb4ad17e55",\n                 "weight":"648151805938466925128110000"\n              }\n           ]\n        },\n')),(0,o.kt)("p",null,"In the above example, we see the public keys of the active validators in Era ",(0,o.kt)("inlineCode",{parentName:"p"},"9"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": Validators earn delegation rewards only when they are part of the active set. This information is time-sensitive; therefore, a validator selected today may not be part of the set tomorrow. Keep this in mind when creating a delegation request."))}h.isMDXComponent=!0}}]);