"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6646],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7207:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={title:"Undelegating Tokens"},s="Undelegating Tokens with the Casper Client",d={unversionedId:"developers/cli/undelegate",id:"developers/cli/undelegate",title:"Undelegating Tokens",description:"This document details a workflow where tokens delegated to a validator on a Casper network can be undelegated.",source:"@site/source/docs/casper/developers/cli/undelegate.md",sourceDirName:"developers/cli",slug:"/developers/cli/undelegate",permalink:"/developers/cli/undelegate",draft:!1,editUrl:"https://github.com/casper-network/docs-new/tree/dev-new/source/docs/casper/developers/cli/undelegate.md",tags:[],version:"current",lastUpdatedAt:1691069605,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{title:"Undelegating Tokens"},sidebar:"developers",previous:{title:"Delegating Tokens",permalink:"/developers/cli/delegate"},next:{title:"Sending Deploys",permalink:"/developers/cli/sending-deploys"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Sending the Undelegation Request",id:"sending-the-undelegation-deploy",level:2},{value:"Method 1: Undelegating with the System Auction Contract",id:"undelegating-system-auction",level:3},{value:"Method 2: Undelegating with Compiled Wasm",id:"undelegating-compiled-wasm",level:3},{value:"Verifying the Undelegation",id:"verifying-the-undelegation",level:2}],u={toc:c},h="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"undelegating-tokens-with-the-casper-client"},"Undelegating Tokens with the Casper Client"),(0,r.kt)("p",null,"This document details a workflow where tokens delegated to a validator on a Casper network can be undelegated."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You meet all ",(0,r.kt)("a",{parentName:"li",href:"/developers/prerequisites"},"prerequisites"),", including having a valid ",(0,r.kt)("inlineCode",{parentName:"li"},"node-address")," and the Casper command-line client"),(0,r.kt)("li",{parentName:"ol"},"You have ",(0,r.kt)("a",{parentName:"li",href:"/developers/cli/delegate"},"delegated tokens")," to a validator on a Casper network and you have the validator's public key")),(0,r.kt)("h2",{id:"sending-the-undelegation-deploy"},"Sending the Undelegation Request"),(0,r.kt)("p",null,"There are two ways to undelegate CSPR from a validator. The recommended and cheaper method is to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"undelegate")," entry point from the system auction contract. The second method involves building the ",(0,r.kt)("inlineCode",{parentName:"p"},"undelegate.wasm")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node")," repository and installing it on the network."),(0,r.kt)("p",null,"We recommend testing the following steps on the official Testnet before performing them in a live environment like the Casper Mainnet."),(0,r.kt)("h3",{id:"undelegating-system-auction"},"Method 1: Undelegating with the System Auction Contract"),(0,r.kt)("p",null,"This method calls the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"undelegate")," entry point from the system auction contract. Using this method, you do not need to build any contracts, reducing costs and complexity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT_IN_MOTES> \\\n--session-hash <SESSION_HASH> \\\n--session-entry-point undelegate \\\n--session-arg \"validator:public_key='<HEX_ENCODED_VALIDATOR_PULIC_KEY>'\" \\\n--session-arg \"amount:u512='<AMOUNT_TO_UNDELEGATE>'\" \\\n--session-arg \"delegator:public_key='<HEX_ENCODED_DELEGATOR_PULIC_KEY>'\"\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"secret-key")," - The file name containing the secret key of the account paying for the Deploy"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"chain-name")," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,r.kt)("em",{parentName:"li"},"casper"),". For Testnet, use ",(0,r.kt)("em",{parentName:"li"},"casper-test")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"payment-amount")," - The payment for the Deploy in motes. This entry point call needs 2.5 CSPR for node version ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml"},"1.5.1")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"session-hash")," - Hex-encoded hash of the stored auction contract, which depends on the network you are using. For Casper's Mainnet and Testnet, the hashes are as follows:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Testnet"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mainnet"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"hash-ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea"))),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"session-entry-point")," - Name of the entry point that will be used when calling the contract")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"undelegate")," entry point expects three arguments:"),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"validator"),": The hexadecimal public key of the validator from whom the tokens will be undelegated"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"amount"),": The number of tokens to be undelegated"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"delegator"),": The hexadecimal public key of the account undelegating tokens from a validator. ",(0,r.kt)("strong",{parentName:"li"},"This key must match the secret key that signs the delegation"))),(0,r.kt)("p",null,"The command will return a deploy hash, which is needed to verify the deploy's processing results. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/resources/tutorials/beginner/querying-network#deploy-status"},"Deploy Status")," section for more details."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"undelegate")," entry point on the auction contract has a fixed cost of 2.5 CSPR. There is no minimum amount required for the undelegation call.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"This example shows an account delegating 100 CSPR:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n--node-address http://65.21.75.254:7777  \\\n--chain-name casper-test \\\n--secret-key ~/KEYS/secret_key.pem \\\n--payment-amount 2500000000 \\\n--session-hash hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2 \\\n--session-entry-point undelegate \\\n--session-arg \"validator:public_key='01aa17f7b9889480b1bd34c3f94f263b229c7a9b01dd4dda19c2dd1d38d176c7a0'\" \\\n--session-arg \"amount:u512='100000000000'\" \\\n--session-arg \"delegator:public_key='01e3d3392c2e0b943abe709b25de5c353e5e1e9d95c7a76e3dd343d8aa1aa08d51'\"\n")),(0,r.kt)("p",null,"Next, ",(0,r.kt)("a",{parentName:"p",href:"#verifying-the-undelegation"},"confirm the undelegation"),"."),(0,r.kt)("h3",{id:"undelegating-compiled-wasm"},"Method 2: Undelegating with Compiled Wasm"),(0,r.kt)("p",null,"As part of this process, you need to ",(0,r.kt)("a",{parentName:"p",href:"/developers/cli/delegate#building-the-delegation-wasm"},"build the casper-node contracts")," that produce the undelegation Wasm."),(0,r.kt)("p",null,"Next, use the Casper CLI client to send a deploy containing the ",(0,r.kt)("inlineCode",{parentName:"p"},"undelegate.wasm")," to the network to initiate the undelegation process."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT_IN_MOTES> \\\n--session-path <PATH_TO_WASM>/undelegate.wasm \\\n--session-arg \"validator:public_key='<HEX_ENCODED_VALIDATOR_PULIC_KEY>'\" \\\n--session-arg \"amount:u512='<AMOUNT_TO_UNDELEGATE>'\" \\\n--session-arg \"delegator:public_key='<HEX_ENCODED_DELEGATOR_PULIC_KEY>'\"\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"secret-key")," - The file name containing the secret key of the account paying for the Deploy"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"chain-name")," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,r.kt)("em",{parentName:"li"},"casper"),". For Testnet, use ",(0,r.kt)("em",{parentName:"li"},"casper-test")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"payment-amount")," - The payment for the Deploy in motes. This entry point call needs 2.5 CSPR for node version ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml"},"1.5.1")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"session-path")," - The path to where the ",(0,r.kt)("inlineCode",{parentName:"li"},"delegate.wasm")," is located")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"undelegate")," entry point expects three arguments:"),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"validator"),": The hexadecimal public key of the validator from whom the tokens will be undelegated"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"amount"),": The number of tokens to be undelegated"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"delegator"),": The hexadecimal public key of the account undelegating tokens from a validator. ",(0,r.kt)("strong",{parentName:"li"},"This key must match the secret key that signs the delegation"))),(0,r.kt)("p",null,"The command will return a deploy hash, which is needed to verify the deploy's processing results. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/resources/tutorials/beginner/querying-network#deploy-status"},"Deploy Status")," section for more details."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"This example command uses the Casper Testnet to undelegate 100 CSPR, and the payment amount is 6 CSPR. The payment amount varies based on each deploy and network ",(0,r.kt)("a",{parentName:"p",href:"/concepts/glossary/C#chainspec"},"chainspec"),". However, notice that this method is more expensive than the previous one that calls the undelegate entry point."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n--node-address http://65.21.75.254:7777  \\\n--chain-name casper-test \\\n--secret-key ~/KEYS/secret_key.pem \\\n--payment-amount 6000000000 \\\n--session-path ~/undelegate.wasm \\\n--session-arg \"validator:public_key='01aa17f7b9889480b1bd34c3f94f263b229c7a9b01dd4dda19c2dd1d38d176c7a0'\" \\\n--session-arg \"amount:u512='100000000000'\" \\\n--session-arg \"delegator:public_key='01e3d3392c2e0b943abe709b25de5c353e5e1e9d95c7a76e3dd343d8aa1aa08d51'\"\n")),(0,r.kt)("p",null,"Next, ",(0,r.kt)("a",{parentName:"p",href:"#verifying-the-undelegation"},"confirm the undelegation"),"."),(0,r.kt)("h2",{id:"verifying-the-undelegation"},"Verifying the Undelegation"),(0,r.kt)("p",null,"To verify that the undelegation succeeded, you can use the Casper command-line client to generate an RPC request to query the auction state. The subsequent RPC response will confirm that the undelegation request was successfully processed."),(0,r.kt)("p",null,"Here is how you can check the status of the auction to confirm that your bid was withdrawn:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info \\\n--node-address http://<peer-ip-address>:7777\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request fields"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network")),(0,r.kt)("p",null,"If the public key and the amount are absent from the ",(0,r.kt)("inlineCode",{parentName:"p"},"bids")," structure, we can safely conclude that we have indeed undelegated from the validator."),(0,r.kt)("p",null,"If your account is on the official Testnet or Mainnet, you can use the block explorer to look up your account balance and see that the tokens have been added to your balance:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://testnet.cspr.live/"},"Testnet explorer")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://cspr.live/"},"Mainnet explorer"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important Note"),": After undelegating tokens from a validator, you must wait for the unbonding period to lapse before redelegating tokens to either the same validator or a different validator."))}m.isMDXComponent=!0}}]);