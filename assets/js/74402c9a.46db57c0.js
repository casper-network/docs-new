"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2507],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9772:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],s={},l="Two-Party Multi-Signature Deploys",c={unversionedId:"workflow/developers/two-party-multi-sig",id:"workflow/developers/two-party-multi-sig",title:"Two-Party Multi-Signature Deploys",description:"Accounts on a Casper network can associate other accounts to allow or require a multiple-signature scheme for deploys.",source:"@site/source/docs/casper/workflow/developers/two-party-multi-sig.md",sourceDirName:"workflow/developers",slug:"/workflow/developers/two-party-multi-sig",permalink:"/workflow/developers/two-party-multi-sig",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/developers/two-party-multi-sig.md",tags:[],version:"current",lastUpdatedAt:1677498417,formattedLastUpdatedAt:"2/27/2023",frontMatter:{},sidebar:"workflow",previous:{title:"Querying a Casper Network",permalink:"/workflow/developers/querying"},next:{title:"Introduction",permalink:"/workflow/developers/transfers"}},p={},u=[{value:"Configuring the Main Account",id:"configuring-the-main-account",level:2},{value:"Running session code to set up associated keys",id:"running-session-code-to-set-up-associated-keys",level:3},{value:"Confirming Processing and Account Status",id:"confirming-execution-and-account-status",level:3}],d={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"two-party-multi-signature-deploys"},"Two-Party Multi-Signature Deploys"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/design/casper-design#accounts-head"},"Accounts")," on a Casper network can associate other accounts to allow or require a multiple-signature scheme for deploys."),(0,r.kt)("p",null,"This workflow describes how a trivial two-party multi-signature scheme for signing and sending deploys can be enforced for an account on a Casper network. This workflow assumes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You meet the ",(0,r.kt)("a",{parentName:"li",href:"/dapp-dev-guide/setup"},"prerequisites"),", including having the Casper command-line client and a valid node address"),(0,r.kt)("li",{parentName:"ol"},"You have the main account's ",(0,r.kt)("inlineCode",{parentName:"li"},"PublicKey")," hex (",(0,r.kt)("strong",{parentName:"li"},"MA"),") and another ",(0,r.kt)("inlineCode",{parentName:"li"},"PublicKey")," hex to associate (",(0,r.kt)("strong",{parentName:"li"},"AA"),")"),(0,r.kt)("li",{parentName:"ol"},"You have previously ",(0,r.kt)("a",{parentName:"li",href:"/dapp-dev-guide/building-dapps/sending-deploys"},"sent deploys")," to a Casper network")),(0,r.kt)("h2",{id:"configuring-the-main-account"},"Configuring the Main Account"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CAUTION"),": Incorrect account configurations could render accounts defunct and unusable. We highly recommend executing any changes to an account in a test environment like Testnet before performing them in a live environment like Mainnet."),(0,r.kt)("p",null,"Each Account has an ",(0,r.kt)("inlineCode",{parentName:"p"},"associated_keys")," field, which is a list containing account hashes and their corresponding weights. Accounts can be associated by adding the account hash to the ",(0,r.kt)("inlineCode",{parentName:"p"},"associated_keys")," field."),(0,r.kt)("p",null,"An Account on a Casper network assigns weights to keys associated with it. For a single key to sign a deploy, or edit the state of the account, its weight must be greater than or equal to a set threshold. The thresholds are labeled as the ",(0,r.kt)("inlineCode",{parentName:"p"},"action_thresholds")," for the account."),(0,r.kt)("p",null,"Each account within a Casper network has two action thresholds that manage the permissions to send deploys or manage the account. Each threshold defines the minimum weight that a single key or a combination of keys must have to either:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Send a deploy to the network; determined by the ",(0,r.kt)("inlineCode",{parentName:"li"},"deployment")," threshold"),(0,r.kt)("li",{parentName:"ol"},"Edit the ",(0,r.kt)("inlineCode",{parentName:"li"},"associated keys")," and the ",(0,r.kt)("inlineCode",{parentName:"li"},"action_thresholds"),"; determined by the ",(0,r.kt)("inlineCode",{parentName:"li"},"key_management")," threshold")),(0,r.kt)("p",null,"To enforce the multi-signature (multi-sig) feature for an account on a Casper network, the ",(0,r.kt)("em",{parentName:"p"},"main key")," and ",(0,r.kt)("em",{parentName:"p"},"associated key"),"'s combined weight must be greater than or equal to the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment")," threshold. This can be achieved by having each key's weight equal to half of the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment")," threshold."),(0,r.kt)("h3",{id:"running-session-code-to-set-up-associated-keys"},"Running session code to set up associated keys"),(0,r.kt)("p",null,"To set up the associated keys for an Account, you must run session code that executes within the account's context. You will find an example of such session code on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/two-party-multi-sig/"},"GitHub"),". Note that this session code is not a general-purpose program and needs to be modified for each use case."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/casper-ecosystem/two-party-multi-sig\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/two-party-multi-sig/blob/main/contract/src/main.rs"},"session code")," executes ",(0,r.kt)("strong",{parentName:"p"},"3 crucial steps")," to enforce the multi-sig scheme for the main account:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Adds an associated key to the account; we will refer to this key as ",(0,r.kt)("strong",{parentName:"li"},"AA")),(0,r.kt)("li",{parentName:"ol"},"Raises the ",(0,r.kt)("inlineCode",{parentName:"li"},"action")," threshold to ",(0,r.kt)("inlineCode",{parentName:"li"},"2"),", because action thresholds for deploys cannot be greater than the action threshold for key management. By default, all action thresholds are set to ",(0,r.kt)("inlineCode",{parentName:"li"},"1")),(0,r.kt)("li",{parentName:"ol"},"Raises the ",(0,r.kt)("inlineCode",{parentName:"li"},"deployment")," threshold to ",(0,r.kt)("inlineCode",{parentName:"li"},"2"),", such that the weight required to send a deploy is split equally between the keys associated with the account")),(0,r.kt)("p",null,"The repository contains a ",(0,r.kt)("em",{parentName:"p"},"Makefile")," with the build commands necessary to compile the contract and generate the necessary Wasm."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd two-party-multi-sig\nmake build-contract\n")),(0,r.kt)("p",null,"The compiled Wasm will be saved on this path:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"target/wasm32-unknown-unknown/release/contract.wasm\n")),(0,r.kt)("p",null,"The Casper command-line client can be used to send the compiled Wasm to the network for execution."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n--node-address http://<peer-ip-address>:7777 \\\n--secret-key <secret-key-MA>.pem \\\n--chain-name casper-test \\\n--payment-amount 2500000000 \\\n--session-path <path-to-contract-wasm> \\\n--session-arg \"deployment-account:account_hash='account-hash-<hash-AA>'\"\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"secret-key")," - The file name containing the secret key of the main account"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"chain-name")," - The chain-name to the network where you wish to send the deploy (this example uses the Testnet)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"payment-amount")," - The cost of the deploy"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"session-path")," - The path to the contract Wasm"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"session-arg")," - The contract takes the account hash of the associated account as an argument labeled ",(0,r.kt)("inlineCode",{parentName:"li"},"deployment-account"),". You can pass this argument using the ",(0,r.kt)("inlineCode",{parentName:"li"},"--session-arg")," flag in the command line client")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important response fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"result"."deploy_hash"')," - the address of the executed deploy, needed to look up additional information about the transfer")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Save the returned ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy_hash")," from the output to query information about execution status."),(0,r.kt)("h3",{id:"confirming-execution-and-account-status"},"Confirming Processing and Account Status"),(0,r.kt)("p",null,"Account configuration on a Casper blockchain is stored in a ",(0,r.kt)("a",{parentName:"p",href:"/glossary/M#merkle-tree"},"Merkle Tree")," and is a snapshot of the blockchain's ",(0,r.kt)("a",{parentName:"p",href:"/design/casper-design#global-state-head"},"Global State"),". The representation of global state for a given block can be computed by executing the deploys (including transfers) within the block and its ancestors. The root node of the Merkle Tree identifying a particular state is called the ",(0,r.kt)("inlineCode",{parentName:"p"},"state-root-hash")," and is stored in every executed block."),(0,r.kt)("p",null,"To check that the account was configured correctly, you need the ",(0,r.kt)("inlineCode",{parentName:"p"},"state-root-hash")," corresponding to the block that contains your deploy. To obtain the ",(0,r.kt)("inlineCode",{parentName:"p"},"state-root-hash"),", you need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/workflow/developers/querying#querying-deploys"},"Confirm the execution status of the deploy")," and obtain the hash of the block containing it"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/workflow/developers/querying#querying-blocks"},"Query the block containing the deploy")," to obtain the corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"state_root_hash"))),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"state_root_hash")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"hex-encoded-public-key")," of the main account, query the network and check the account's configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n--node-address http://<peer-ip-address>:7777 \\\n--state-root-hash <state-root-hash-from-block> \\\n--key <hex-encoded-public-key-MA>\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1126043166167626077,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "merkle_proof": "2226 chars",\n        "stored_value": {\n            "Account": {\n                "account_hash": "account-hash-dc88a1819381c5ebbc3432e5c1d94df18cdcd7253b85259eeebe0ec8661bb84a",\n                "action_thresholds": {\n                    "deployment": 2,\n                    "key_management": 2\n                },\n                "associated_keys": [\n                    {\n                        "account_hash": "account-hash-12dee9fe535bfd8fd335fce1ba1f972f26bb60029a303b310d85419357d18f51",\n                        "weight": 1\n                    },\n                    {\n                        "account_hash": "account-hash-dc88a1819381c5ebbc3432e5c1d94df18cdcd7253b85259eeebe0ec8661bb84a",\n                        "weight": 1\n                    }\n                ],\n                "main_purse": "uref-74b20e9722d3f087f9dc431e9f0fcc6a803c256e005fa45b64a101512001cb78-007",\n                "named_keys": []\n            }\n        }\n    }\n}\n'))),(0,r.kt)("p",null,"In the example output, you can see the account hashes listed within the ",(0,r.kt)("inlineCode",{parentName:"p"},"associated_keys")," section. Each key has weight ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"; since the action threshold for ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),", neither account can sign and send a deploy individually. Thus, the deploy needs to be signed by the secret keys of each account to reach the required threshold."))}h.isMDXComponent=!0}}]);