"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1301],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return b}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),h=i,b=p["".concat(d,".").concat(h)]||p[h]||u[h]||o;return t?a.createElement(b,r(r({ref:n},l),{},{components:t})):a.createElement(b,r({ref:n},l))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=h;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7030:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=t(3117),i=t(102),o=(t(7294),t(3905)),r=["components"],s={},d="Bonding as a Validator",c={unversionedId:"operators/becoming-a-validator/bonding",id:"operators/becoming-a-validator/bonding",title:"Bonding as a Validator",description:"It is recommended that a bonding request be sent once the node has completed the synchronization process. In a Casper network, bonding takes place through the auction contract via the add_bid.wasm contract. The auction runs for a future era, every era. The chainspec.toml specifies the number of slots available, and the auction will take the top N slots and create the validator set for the future era.",source:"@site/source/docs/casper/operators/becoming-a-validator/bonding.md",sourceDirName:"operators/becoming-a-validator",slug:"/operators/becoming-a-validator/bonding",permalink:"/operators/becoming-a-validator/bonding",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/operators/becoming-a-validator/bonding.md",tags:[],version:"current",lastUpdatedAt:1687978399,formattedLastUpdatedAt:"Jun 28, 2023",frontMatter:{},sidebar:"operators",previous:{title:"Setting up a Non-Root User",permalink:"/operators/setup/non-root-user"},next:{title:"Recovering from Validator Eviction",permalink:"/operators/becoming-a-validator/recovering"}},l={},p=[{value:"Method 1: Bonding with the System Auction Contract",id:"bonding-system-auction",level:2},{value:"Method 2: Bonding with Compiled Wasm",id:"bonding-compiled-wasm",level:2},{value:"Checking the Bid Status",id:"check-the-status-of-the-bid-in-the-auction",level:2},{value:"A Losing Bid",id:"losing-bid",level:2},{value:"Avoiding Ejection",id:"avoiding-ejection",level:2},{value:"Withdrawing a Bid",id:"withdrawing-a-bid",level:2}],u={toc:p},h="wrapper";function b(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)(h,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bonding-as-a-validator"},"Bonding as a Validator"),(0,o.kt)("p",null,"It is recommended that a bonding request be sent once the node has completed the synchronization process. In a Casper network, bonding takes place through the auction contract via the ",(0,o.kt)("inlineCode",{parentName:"p"},"add_bid.wasm")," contract. The auction runs for a future era, every era. The ",(0,o.kt)("inlineCode",{parentName:"p"},"chainspec.toml")," specifies the number of slots available, and the auction will take the top N slots and create the validator set for the future era."),(0,o.kt)("p",null,"In the Testnet, era durations are approximately two hours. The entire process takes approximately 3 eras. Therefore, ",(0,o.kt)("strong",{parentName:"p"},"the time for bid submission to inclusion in the validator set is a minimum of six hours"),". Bonding requests (bids) are transactions like any other. Because they are generic transactions, they are more resistant to censorship."),(0,o.kt)("h2",{id:"bonding-system-auction"},"Method 1: Bonding with the System Auction Contract"),(0,o.kt)("p",null,"This method submits a bid using the system auction contract. Call the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"add_bid")," entry point from the system auction contract. Using this method, you do not need to build any contracts, reducing costs and complexity."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT_IN_MOTES> \\\n--session-hash <SESSION_HASH> \\\n--session-entry-point add_bid \\\n--session-arg=\"public_key:public_key='<PUBLIC_KEY_HEX>'\" \\\n--session-arg=\"amount:u512='<BID_AMOUNT>'\" \\\n--session-arg=\"delegation_rate:u8='<PERCENT_TO_KEEP_FROM_DELEGATORS>'\"\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"secret-key")," - The file name containing the secret key of the account paying for the Deploy"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"chain-name")," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,o.kt)("em",{parentName:"li"},"casper"),". For Testnet, use ",(0,o.kt)("em",{parentName:"li"},"casper-test")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"payment-amount")," - The payment for the Deploy in motes. This entry point call needs 2.5 CSPR for node version ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml"},"1.5.1")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"session-hash")," - Hex-encoded hash of the stored auction contract, which depends on the network you are using. For Casper's Mainnet and Testnet, the hashes are as follows:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Testnet"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Mainnet"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"hash-ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea"))),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"session-entry-point")," - Name of the entrypoint that will be used when calling the contract")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"add_bid")," entry point expects three arguments:"),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"public key"),": The hexadecimal public key of the account's purse submitting the bid. This key must match the secret key that signs the bid"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"amount"),": The bidding amount"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"delegation_rate"),": Percentage of the rewards that the node operator retains for their services")),(0,o.kt)("p",null,"The command will return a deploy hash, which is needed to verify the deploy's processing results."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"add_bid")," entry point on the auction contract has a fixed cost of 2.5 CSPR.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("p",null,"This example command uses the Casper Testnet to bid 10,000 CSPR for a validating slot:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper casper-client put-deploy \\\n--node-address http://65.21.75.254:7777 \\\n--chain-name casper-test \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--payment-amount 2500000000 \\\n--session-hash hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2 \\\n--session-entry-point add_bid \\\n--session-arg \"public_key:public_key='01c297d2931fec7e22b2fb1ae3ca5afdfacc2c82ba501e8ed158eecef82b4dcdee'\" \\\n--session-arg \"amount:U512='$[10000 * 1000000000]'\" \\\n--session-arg=\"delegation_rate:u8='10'\"\n")),(0,o.kt)("p",null,"Next, ",(0,o.kt)("a",{parentName:"p",href:"#check-the-status-of-the-bid-in-the-auction"},"check the status of the auction")," to see if you have won a validator slot."),(0,o.kt)("h2",{id:"bonding-compiled-wasm"},"Method 2: Bonding with Compiled Wasm"),(0,o.kt)("p",null,"Another way to send a bonding transaction to the network is via a deploy containing the compiled ",(0,o.kt)("inlineCode",{parentName:"p"},"add_bid.wasm"),". For details, refer to ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/joining#step-3-build-contracts"},"Building the Required Contracts"),"."),(0,o.kt)("p",null,"The following deploy is a template for sending a bonding request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper casper-client put-deploy \\\n--node-address http://<HOST:PORT> \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT> \\\n--session-path $HOME/casper-node/target/wasm32-unknown-unknown/release/add_bid.wasm \\\n--session-arg=\"public_key:public_key='<PUBLIC_KEY_HEX>'\" \\\n--session-arg=\"amount:u512='<BID-AMOUNT>'\" \\\n--session-arg=\"delegation_rate:u8='<PERCENT_TO_KEEP_FROM_DELEGATORS>'\"\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"secret-key")," - The file name containing the secret key of the account paying for the Deploy"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"chain-name")," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,o.kt)("em",{parentName:"li"},"casper"),". For Testnet, use ",(0,o.kt)("em",{parentName:"li"},"casper-test")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"payment-amount")," - The payment for the Deploy in motes"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"session-path")," - The path to the compiled Wasm on your computer")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"add_bid.wasm")," expects three arguments:"),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"public_key"),": The hexadecimal public key of the account's purse submitting the bid. This key must match the secret key that signs the bid"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"amount"),": The bidding amount"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"delegation_rate"),": Percentage of the rewards that the node operator retains for their services")),(0,o.kt)("p",null,"The command will return a deploy hash, which is needed to verify the deploy's processing results."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This method is more expensive than calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"add_bid")," entrypoint in the system auction contract, which has a fixed cost of 2.5 CSPR.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("p",null,"Here is an example request to bond using the ",(0,o.kt)("inlineCode",{parentName:"p"},"add_bid.wasm"),". The payment amount specified is 3 CSPR. You must modify the payment and other values in the deploy based on the network's ",(0,o.kt)("a",{parentName:"p",href:"/concepts/glossary/C#chainspec"},"chainspec.toml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper casper-client put-deploy \\\n--node-address http://65.21.235.219:7777 \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--chain-name casper-test \\\n--payment-amount 3000000000 \\\n--session-path ~/casper-node/target/wasm32-unknown-unknown/release/add_bid.wasm \\\n--session-arg \"public_key:public_key='01c297d2931fec7e22b2fb1ae3ca5afdfacc2c82ba501e8ed158eecef82b4dcdee'\" \\\n--session-arg \"amount:U512='$[10000 * 1000000000]'\" \\\n--session-arg=\"delegation_rate:u8='10'\"\n")),(0,o.kt)("p",null,"Next, check the bid status to see if you have won a validator slot."),(0,o.kt)("h2",{id:"check-the-status-of-the-bid-in-the-auction"},"Checking the Bid Status"),(0,o.kt)("p",null,"Since the bid was submitted using a deploy like any other, perform ",(0,o.kt)("inlineCode",{parentName:"p"},"get-deploy")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-client"),", to see the execution status."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-deploy --node-address http://<HOST:PORT> <DEPLOY_HASH>\n")),(0,o.kt)("p",null,"If the bid wins the auction, the public key and associated bonded amount will appear in the auction contract as part of the validator set for a future era. To determine if the bid was accepted, query the auction contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info --node-address http://<HOST:PORT>\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Example auction info response")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n"jsonrpc": "2.0",\n"result": {\n "bids": [\n   {\n     "bid": {\n       "bonding_purse": "uref-488a0bbc3c3729f5696965da7a3aeee83805392944e36157909da273255fdb85-007",\n       "delegation_rate": 0,\n       "delegators": [],\n       "release_era": null,\n       "reward": "93328432442428418861229954179737",\n       "staked_amount": "10000000000000000"\n     },\n     "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012"\n   },\n   {\n     "bid": {\n       "bonding_purse": "uref-14e128b099b0c3680100520226e6999b322989586cc22db0630db5ec1329f0a7-007",\n       "delegation_rate": 10,\n       "delegators": [],\n       "release_era": null,\n       "reward": "0",\n       "staked_amount": "9000000000000000"\n     },\n     "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87"\n   },\n   {\n     "bid": {\n       "bonding_purse": "uref-6c0bf8cee1c0749dd9766376910867a84b2e826eaf6c118fcb0224c7d8d229dd-007",\n       "delegation_rate": 10,\n       "delegators": [],\n       "release_era": null,\n       "reward": "266185120443441810685787",\n       "staked_amount": "100000000"\n     },\n     "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f"\n   },\n   {\n     "bid": {\n       "bonding_purse": "uref-3880b3daf95f962f57e6a4b1589564abf7deef58a1fb0753d1108316bba7b3d7-007",\n       "delegation_rate": 10,\n       "delegators": [],\n       "release_era": null,\n       "reward": "0",\n       "staked_amount": "9000000000000000"\n     },\n     "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643"\n   },\n   {\n     "bid": {\n       "bonding_purse": "uref-5a777c9cd53456b49eecf25dcc13e12ddff4106175a69f8e24a7c9a4c135df0d-007",\n       "delegation_rate": 0,\n       "delegators": [],\n       "release_era": null,\n       "reward": "93328432442428418861229954179737",\n       "staked_amount": "10000000000000000"\n     },\n     "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e"\n   }\n ],\n "block_height": 318,\n "era_validators": [\n   {\n     "era_id": 20,\n     "validator_weights": [\n       {\n         "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012",\n         "weight": "10000000000000000"\n       },\n       {\n         "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f",\n         "weight": "100000000"\n       },\n       {\n         "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e",\n         "weight": "10000000000000000"\n       }\n     ]\n   },\n   {\n     "era_id": 21,\n     "validator_weights": [\n       {\n         "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012",\n         "weight": "10000000000000000"\n       },\n       {\n         "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f",\n         "weight": "100000000"\n       },\n       {\n         "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e",\n         "weight": "10000000000000000"\n       }\n     ]\n   },\n   {\n     "era_id": 22,\n     "validator_weights": [\n       {\n         "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012",\n         "weight": "10000000000000000"\n       },\n       {\n         "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f",\n         "weight": "100000000"\n       },\n       {\n         "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e",\n         "weight": "10000000000000000"\n       }\n     ]\n   },\n   {\n     "era_id": 23,\n     "validator_weights": [\n       {\n         "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012",\n         "weight": "10000000000000000"\n       },\n       {\n         "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f",\n         "weight": "100000000"\n       },\n       {\n         "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e",\n         "weight": "10000000000000000"\n       }\n     ]\n   }\n ],\n "state_root_hash": "c16ba80ea200d786008f8100ea79f9cfeb8d7d5ee8b133eda5a50dcf1c7131e8"\n},\n"id": -3624528661787095850\n}\n'))),(0,o.kt)("br",null),(0,o.kt)("p",null,"Note the ",(0,o.kt)("inlineCode",{parentName:"p"},"era_id")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"validator_weights")," in the response above. The current era is the one with the lowest ID in the ",(0,o.kt)("inlineCode",{parentName:"p"},"era_validators")," array. For a given ",(0,o.kt)("inlineCode",{parentName:"p"},"era_id"),", a set of validators is defined. If the public key associated with a bid appears in the ",(0,o.kt)("inlineCode",{parentName:"p"},"validator_weights")," structure for an era, then the account is bonded in that era."),(0,o.kt)("h2",{id:"losing-bid"},"A Losing Bid"),(0,o.kt)("p",null,"If a bid doesn't win a slot in the auction, it is too low. The resolution is to increase the bid amount. It is possible to submit additional bids, to increase the odds of winning a slot. It is also possible to encourage token holders to delegate stake to you for bonding."),(0,o.kt)("h2",{id:"avoiding-ejection"},"Avoiding Ejection"),(0,o.kt)("p",null,"To stay bonded and avoid ejection, each validator must keep their node running and in sync with the rest of the network. To recover from ejection, you will find more details ",(0,o.kt)("a",{parentName:"p",href:"/operators/becoming-a-validator/recovering"},"here"),"."),(0,o.kt)("h2",{id:"withdrawing-a-bid"},"Withdrawing a Bid"),(0,o.kt)("p",null,"Follow the steps in ",(0,o.kt)("a",{parentName:"p",href:"/operators/becoming-a-validator/unbonding"},"Unbonding")," to withdraw a bid."))}b.isMDXComponent=!0}}]);