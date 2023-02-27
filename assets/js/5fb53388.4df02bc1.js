"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[84],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=s,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9304:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=n(3117),s=n(102),r=(n(7294),n(3905)),o=(n(4996),["components"]),i={tags:["smart contract developers","rust","put-deploy"]},l="Calling Smart Contracts with the Rust Client",c={unversionedId:"dapp-dev-guide/writing-contracts/calling-contracts",id:"dapp-dev-guide/writing-contracts/calling-contracts",title:"Calling Smart Contracts with the Rust Client",description:"Smart contracts exist as stored on-chain logic, allowing disparate users to call the included entry points. This tutorial covers different ways to call Casper contracts with the Casper command-line client and the put-deploy command. Each section below includes a short video demonstrating some example output.",source:"@site/source/docs/casper/dapp-dev-guide/writing-contracts/calling-contracts.md",sourceDirName:"dapp-dev-guide/writing-contracts",slug:"/dapp-dev-guide/writing-contracts/calling-contracts",permalink:"/dapp-dev-guide/writing-contracts/calling-contracts",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/writing-contracts/calling-contracts.md",tags:[{label:"smart contract developers",permalink:"/tags/smart-contract-developers"},{label:"rust",permalink:"/tags/rust"},{label:"put-deploy",permalink:"/tags/put-deploy"}],version:"current",lastUpdatedAt:1677498417,formattedLastUpdatedAt:"2/27/2023",frontMatter:{tags:["smart contract developers","rust","put-deploy"]},sidebar:"dapp-dev-guide",previous:{title:"Installing Smart Contracts and Querying Global State",permalink:"/dapp-dev-guide/writing-contracts/installing-contracts"},next:{title:"Upgrading and Maintaining Smart Contracts",permalink:"/dapp-dev-guide/writing-contracts/upgrading-contracts"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Calling Contracts by Contract Hash",id:"calling-contracts-by-hash",level:2},{value:"Calling Contracts with Session Arguments",id:"calling-contracts-with-session-args",level:2},{value:"Calling Contracts by Package Hash",id:"calling-contracts-by-package-hash",level:2},{value:"Calling Contracts by Contract Name",id:"calling-contracts-by-name",level:2},{value:"Calling Contracts by Package Name",id:"calling-contracts-by-package-name",level:2},{value:"Calling a Contract using Wasm",id:"calling-a-contract-using-wasm",level:2},{value:"Calling Contracts that Return a Value",id:"calling-contracts-that-return-a-value",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],u={toc:d};function h(e){var t=e.components,n=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"calling-smart-contracts-with-the-rust-client"},"Calling Smart Contracts with the Rust Client"),(0,r.kt)("p",null,"Smart contracts exist as stored on-chain logic, allowing disparate users to call the included entry points. This tutorial covers different ways to call Casper contracts with the ",(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/setup#the-casper-command-line-client"},"Casper command-line client")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"put-deploy")," command. Each section below includes a short video demonstrating some example output."),(0,r.kt)("p",null,"The following examples use two contracts on ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/"},"Testnet"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/casper-ecosystem/counter/blob/master/contract-v1/src/main.rs"},"Counter contract")," described while ",(0,r.kt)("a",{parentName:"li",href:"/dapp-dev-guide/writing-contracts/rust-contracts"},"Writing a Basic Smart Contract in Rust"),". You will need to ",(0,r.kt)("a",{parentName:"li",href:"/dapp-dev-guide/writing-contracts/installing-contracts"},"install this contract")," on Testnet"),(0,r.kt)("li",{parentName:"ul"},"The Auction contract found in ",(0,r.kt)("a",{parentName:"li",href:"https://testnet.cspr.live/contract-package/e375d42c29c0e4b2baefa63cf2d70af34439eda851e08129d8515515d63bd6a9"},"this contract package"),", already installed on Testnet as a system contract. The examples will call its ",(0,r.kt)("inlineCode",{parentName:"li"},"delegate")," entry point")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You know how to ",(0,r.kt)("a",{parentName:"li",href:"/dapp-dev-guide/building-dapps/sending-deploys"},"send and verify deploys")),(0,r.kt)("li",{parentName:"ul"},"You know how to ",(0,r.kt)("a",{parentName:"li",href:"/dapp-dev-guide/writing-contracts/installing-contracts"},"install contracts and query global state")," using the ",(0,r.kt)("a",{parentName:"li",href:"/dapp-dev-guide/setup#the-casper-command-line-client"},"default Casper client")),(0,r.kt)("li",{parentName:"ul"},"Install the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/casper-ecosystem/counter/blob/master/contract-v1/src/main.rs"},"Counter contract")," on Testnet if you have not done so already"),(0,r.kt)("li",{parentName:"ul"},"Review the ",(0,r.kt)("a",{parentName:"li",href:"https://testnet.cspr.live/contract-package/e375d42c29c0e4b2baefa63cf2d70af34439eda851e08129d8515515d63bd6a9"},"system Auction contract")," on Testnet")),(0,r.kt)("h2",{id:"calling-contracts-by-hash"},"Calling Contracts by Contract Hash"),(0,r.kt)("p",null,"After ",(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/writing-contracts/installing-contracts"},"installing a contract")," in global state, you can use the contract's hash to call one of its entry points. The following usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"put-deploy")," allows you to call an entry point and receive a deploy hash. The hash is needed to verify that the deploy was processed successfully."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name [CHAIN_NAME] \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-hash [HEX_STRING] \\\n    --session-entry-point [ENTRY_POINT_FUNCTION]\n")),(0,r.kt)("p",null,"The arguments used above are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a peer on the network. The default port for JSON-RPC servers on Mainnet and Testnet is 7777"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chain-name")," - The chain name of the network where you wish to send the deploy. For Mainnet, use ",(0,r.kt)("em",{parentName:"li"},"casper"),". For Testnet, use ",(0,r.kt)("em",{parentName:"li"},"casper-test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secret-key")," - The file name containing the secret key of the account paying for the deploy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"payment-amount")," - The payment for the deploy in motes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session-hash")," - Hex-encoded hash of the stored contract to be called as the session"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session-entry-point")," - Name of the method that will be used when calling the session contract")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example - Calling the Counter contract by hash:")),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"--session-hash"),' option identifies a stored contract with an entry-point called "counter-inc".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'casper-client put-deploy \\\n    --node-address http://65.21.235.219:7777 \\\n    --chain-name casper-test \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount 100000000 \\\n    --session-hash hash-22228188b85b6ee4a4a41c7e98225c3918139e9a5eb4b865711f2e409d85e88e \\\n    --session-entry-point "counter-inc"\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This ",(0,r.kt)("inlineCode",{parentName:"p"},"put-deploy")," command is nearly identical to the command used to ",(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/writing-contracts/installing-contracts#installing-contract-code"},"install the contract"),". Here, instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"session-path")," pointing to the Wasm binary, we have ",(0,r.kt)("inlineCode",{parentName:"p"},"session-hash")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"session-entry-point")," identifying the on-chain contract and its associated entry point. No Wasm file is needed in this example since the contract is already on the blockchain, and the entry point doesn\u2019t return a value. If an entry point returns a value, use code to ",(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/tutorials/return-values-tutorial"},"interact with runtime return values"),"."))),(0,r.kt)("p",null,"The following sample response contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy_hash"),", needed to verify the changes in global state, as described ",(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/writing-contracts/installing-contracts#querying-global-state"},"here"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Sample response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'{\n  "id": 1197172763279676268,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "deploy_hash": "24b58fbc0cbbfa3be978e7b78b9b37fc1d17c887b1abed2b2e2e704f7ee5427c"\n  }\n}\n'))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Video - Calling a contract by hash:")),(0,r.kt)("p",null,"This video shows how to query a previously installed Counter contract by hash."),(0,r.kt)("p",{align:"center"},(0,r.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=11",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("h2",{id:"calling-contracts-with-session-args"},"Calling Contracts with Session Arguments"),(0,r.kt)("p",null,"When calling contract entry points, you may need to pass in information using session arguments. The ",(0,r.kt)("inlineCode",{parentName:"p"},"put-deploy")," command allows you to do this with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--session-arg")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name [CHAIN_NAME] \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-hash [HEX_STRING] \\\n    --session-entry-point [ENTRY_POINT_FUNCTION] \\\n    --session-arg ["NAME:TYPE=\'VALUE\'" OR "NAME:TYPE=null"]...\n')),(0,r.kt)("p",null,"The arguments of interest are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session-hash")," - Hex-encoded hash of the stored contract to be called as the session"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session-entry-point")," - Name of the method that will be used when calling the session contract"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session-arg")," - For simple CLTypes, a named and typed arg is passed to the Wasm code. To see an example for each type, run: 'casper-client put-deploy --show-arg-examples'")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example - Calling the Auction contract using session arguments:")),(0,r.kt)("p",null,"This example demonstrates how to call the Auction contract's entry point ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate")," with three arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The argument ",(0,r.kt)("inlineCode",{parentName:"li"},"validator")," is the public key of the validator to whom the tokens will be delegated"),(0,r.kt)("li",{parentName:"ul"},"The argument ",(0,r.kt)("inlineCode",{parentName:"li"},"amount")," is the number of tokens to be delegated"),(0,r.kt)("li",{parentName:"ul"},"The argument ",(0,r.kt)("inlineCode",{parentName:"li"},"delegator")," is the public key of the account delegating tokens to a validator")),(0,r.kt)("p",null,"To make the call, we use the contract hash, ",(0,r.kt)("inlineCode",{parentName:"p"},"hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2"),", and the ",(0,r.kt)("inlineCode",{parentName:"p"},"--session-hash")," option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'casper-client put-deploy \\\n    --node-address http://65.21.235.219:7777 \\\n    --chain-name casper-test \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount 2500000000 \\\n    --session-hash hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2 \\\n    --session-entry-point "delegate" \\\n    --session-arg "validator:public_key=\'0145fb72c75e1b459839555d70356a5e6172e706efa204d86c86050e2f7878960f\'" \\\n    --session-arg "amount:u512=\'500000000000\'" \\\n    --session-arg "delegator:public_key=\'0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf\'"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Video - Calling a contract with session arguments:")),(0,r.kt)("p",null,"This video shows how to call a modified Counter contract using session arguments."),(0,r.kt)("p",{align:"center"},(0,r.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=14",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("h2",{id:"calling-contracts-by-package-hash"},"Calling Contracts by Package Hash"),(0,r.kt)("p",null,"You can also call an entry point in a contract that is part of a contract package (see ",(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/writing-contracts/upgrading-contracts"},"contract upgrades"),"). Call ",(0,r.kt)("inlineCode",{parentName:"p"},"put-deploy")," using the stored package hash, the entry point you wish to access, the contract version number, and any runtime arguments. The call defaults to the highest enabled version if no version was specified."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name [CHAIN_NAME] \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-package-hash [HEX_STRING] \\\n    --session-entry-point [ENTRY_POINT_FUNCTION] \\\n    --session-version [INTEGER]\n")),(0,r.kt)("p",null,"The arguments of interest are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session-package-hash")," - Hex-encoded hash of the stored package to be called as the session"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session-entry-point")," - Name of the method that will be used when calling the session contract"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session-version")," - Version of the called session contract. The latest will be used by default")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1 - Calling the Counter using the package hash and version:")),(0,r.kt)("p",null,'In this example, we call the Counter contract by its package hash and version number. The entry point invoked is "counter-inc".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'casper-client put-deploy \\\n    --node-address http://65.21.235.219:7777 \\\n    --chain-name casper-test \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount 100000000 \\\n    --session-package-hash hash-76a8c3daa6d6ac799ce9f46d82ac98efb271d2d64b517861ec89a06051ef019e \\\n    --session-entry-point "counter-inc" \\\n    --session-version 1\n')),(0,r.kt)("p",null,"To find the contract package hash, look at the account's named keys associated with the contract. Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "key": "hash-76a8c3daa6d6ac799ce9f46d82ac98efb271d2d64b517861ec89a06051ef019e",\n    "name": "counter_package_name"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2 - Calling the Auction using the package hash and version:")),(0,r.kt)("p",null,"This example demonstrates how to call the Auction contract's ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate")," entry point by specifying the package hash using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--session-package-hash")," option. The call defaults to the highest enabled version since no version was specified with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--session-version")," option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'casper-client put-deploy \\\n    --node-address http://65.21.235.219:7777 \\\n    --chain-name casper-test \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount 2500000000 \\\n    --session-package-hash hash-e375d42c29c0e4b2baefa63cf2d70af34439eda851e08129d8515515d63bd6a9 \\\n    --session-entry-point "delegate" \\\n    --session-arg "validator:public_key=\'0145fb72c75e1b459839555d70356a5e6172e706efa204d86c86050e2f7878960f\'" \\\n    --session-arg "amount:u512=\'500000000000\'" \\\n    --session-arg "delegator:public_key=\'0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf\'"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Video - Calling a contract using the package hash:")),(0,r.kt)("p",null,"The video shows how to query the previously installed Counter contract package."),(0,r.kt)("p",{align:"center"},(0,r.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=15",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("h2",{id:"calling-contracts-by-name"},"Calling Contracts by Contract Name"),(0,r.kt)("p",null,"We can also reference a contract using a key as the contract name. When you write the contract, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"put_key")," function to add the ContractHash under the contract's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/type.NamedKeys.html#"},"NamedKeys"),"."),(0,r.kt)("p",null,"Having a key enables you to call a contract's entry-point in global state by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"put-deploy")," command as illustrated here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name [CHAIN_NAME] \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-name [NAMED_KEY_FOR_SMART_CONTRACT] \\\n    --session-entry-point [ENTRY_POINT_FUNCTION]\n")),(0,r.kt)("p",null,"The arguments of interest are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session-name")," - Name of the stored contract (associated with the executing account) to be called as the session"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session-entry-point")," - Name of the method that will be used when calling the session contract")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1 - Calling the Counter contract using a named key:")),(0,r.kt)("p",null,'This example uses the Counter contract stored in global state under the "counter" named key. The code stores the ContractHash into a URef, which can be referenced once the contract is installed in global state. The full implementation is available on ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter/blob/934a452ccba8c5cf12f8bde706736400e047fba5/contract-v1/src/main.rs#L110"},"GitHub"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"runtime::put_key(CONTRACT_KEY, stored_contract_hash.into());\n")),(0,r.kt)("p",null,'The following command invokes the entry point "counter_inc" and the contract stored under the "counter" named key.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'casper-client put-deploy \\\n    --node-address http://65.21.235.219:7777 \\\n    --chain-name casper-test \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount 100000000 \\\n    --session-name "counter" \\\n    --session-entry-point "counter_inc"\n')),(0,r.kt)("p",null,"The sample response will contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy_hash"),", which you need to use as described ",(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/writing-contracts/installing-contracts#querying-global-state"},"here")," to verify the changes in global state."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2 - Calling the Auction contract using a named key:")),(0,r.kt)("p",null,'This example uses the system Auction contract stored in global state under the "auction" key and its ',(0,r.kt)("inlineCode",{parentName:"p"},"delegate")," entry point."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'casper-client put-deploy \\\n    --node-address http://65.21.235.219:7777 \\\n    --chain-name casper-test \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount 2500000000 \\\n    --session-name "auction" \\\n    --session-entry-point "delegate" \\\n    --session-arg "validator:public_key=\'0145fb72c75e1b459839555d70356a5e6172e706efa204d86c86050e2f7878960f\'" \\\n    --session-arg "amount:u512=\'500000000000\'" \\\n    --session-arg "delegator:public_key=\'0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf\'"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Video - Calling a contract using a named key:")),(0,r.kt)("p",null,"This short video shows how to query the previously installed Counter contract using a named key, which is the name used to reference the contract."),(0,r.kt)("p",{align:"center"},(0,r.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=12",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("h2",{id:"calling-contracts-by-package-name"},"Calling Contracts by Package Name"),(0,r.kt)("p",null,"To call an entry point in a contract by referencing the contract package name, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"session-package-name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"session-entry-point"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"session-version")," arguments. This will enable you to access the entry point in global state by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"put-deploy")," command as illustrated here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name [CHAIN_NAME] \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-package-name [NAMED_KEY_FOR_PACKAGE] \\\n    --session-entry-point [ENTRY_POINT_FUNCTION] \\\n    --session-version [INTEGER]\n")),(0,r.kt)("p",null,"The arguments of interest are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session-package-name")," - Name of the stored package to be called as the session"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session-entry-point")," - Name of the method that will be used when calling the session contract"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session-version")," - Version of the called session contract. The latest will be used by default")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1 - Specifying the package name and version number:")),(0,r.kt)("p",null,'This example calls the entry point "counter-inc" as part of the contract package name "counter_package_name", version 1, without any runtime arguments.'),(0,r.kt)("p",null,"You should have previously created the contract by using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_contract.html"},"new_contract"),", and provided the contract package name as the ",(0,r.kt)("inlineCode",{parentName:"p"},"hash_name")," argument of ",(0,r.kt)("inlineCode",{parentName:"p"},"new_contract"),"."),(0,r.kt)("p",null,'This example code stores the "contract_package_name" into a NamedKey, which you can reference once you install the contract in global state.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    let (stored_contract_hash, contract_version) =\n        storage::new_contract(counter_entry_points,\n            Some(counter_named_keys),\n            Some("counter_package_name".to_string()),\n            Some("counter_access_uref".to_string())\n    );\n')),(0,r.kt)("p",null,"Here is the command to call the contract using the package name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'casper-client put-deploy \\\n    --node-address http://65.21.235.219:7777 \\\n    --chain-name casper-test \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount 100000000 \\\n    --session-package-name "counter_package_name" \\\n    --session-entry-point "counter-inc" \\\n    --session-version 1\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2 - Calling the package without specifying the version:")),(0,r.kt)("p",null,"This example demonstrates how to call a contract that is part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"erc20_test_call"),' package using runtime arguments. The call invokes the "check_balance_of" entry point and defaults to the highest enabled version since no version was specified.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    casper-client put-deploy \\\n    --node-address http://3.143.158.19:7777 \\\n    --chain-name integration-test \\\n    --secret-key ~/casper/demo/user_a/secret_key.pem \\\n    --payment-amount 1000000000 \\\n    --session-package-name "erc20_test_call" \\\n    --session-entry-point "check_balance_of" \\\n    --session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n    --session-arg "address:key=\'account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd\'"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Video - Calling a contract using the package name:")),(0,r.kt)("p",null,"This video demonstrates how to call versioned contracts by package name."),(0,r.kt)("p",{align:"center"},(0,r.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=16",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("h2",{id:"calling-a-contract-using-wasm"},"Calling a Contract using Wasm"),(0,r.kt)("p",null,"Session code or contract code (compiled to Wasm) can act on a contract and change its state. The ",(0,r.kt)("inlineCode",{parentName:"p"},"put-deploy")," command supports this mechanism as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name [CHAIN_NAME] \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-path [PATH]/[FILE_NAME].wasm\n")),(0,r.kt)("p",null,"The argument of interest is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session-path")," - The path to the compiled Wasm on your computer")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example - Session code acting on a contract:")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/counter"},"Counter Contract Tutorial")," shows how to change the state of a contract (counter-v1.wasm) using session code (counter-call.wasm)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"\ncasper-client put-deploy \\\n    --node-address http://65.21.235.219:7777 \\\n    --chain-name casper-test \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount 25000000000 \\\n    --session-path [PATH_TO_YOUR_COMPILED_WASM]/counter-call.wasm\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Video - Calling a contract using Wasm:")),(0,r.kt)("p",{align:"center"},(0,r.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=13",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("h2",{id:"calling-contracts-that-return-a-value"},"Calling Contracts that Return a Value"),(0,r.kt)("p",null,"Visit the ",(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/tutorials/return-values-tutorial"},"Interacting with Runtime Return Values")," tutorial to learn how to call a contract that returns a value using session code or contract code."),(0,r.kt)("h2",{id:"whats-next"},"What's Next?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"/counter"},"Counter Contract Tutorial")," takes you through a detailed walkthrough on how to query global state to verify a contract's state"),(0,r.kt)("li",{parentName:"ul"},"Learn more about ",(0,r.kt)("a",{parentName:"li",href:"/workflow/developers/delegate"},"Delegating with the Casper Client")),(0,r.kt)("li",{parentName:"ul"},"Look into the ",(0,r.kt)("a",{parentName:"li",href:"/tutorials/"},"Tutorials for Smart Contract Authors")),(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"/workflow/developers"},"Developer How To Guides"))))}h.isMDXComponent=!0}}]);