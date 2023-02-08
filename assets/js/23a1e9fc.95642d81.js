"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9211],{3905:function(e,n,a){a.d(n,{Zo:function(){return i},kt:function(){return b}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),f=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},i=function(e){var n=f(e.components);return t.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=f(a),b=r,u=p["".concat(s,".").concat(b)]||p[b]||l[b]||c;return a?t.createElement(u,o(o({ref:n},i),{},{components:a})):t.createElement(u,o({ref:n},i))}));function b(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=p;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var f=2;f<c;f++)o[f]=a[f];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4012:function(e,n,a){a.r(n),a.d(n,{assets:function(){return i},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return l}});var t=a(3117),r=a(102),c=(a(7294),a(3905)),o=["components"],d={},s="Direct Token Transfer",f={unversionedId:"workflow/developers/transfer-workflow",id:"workflow/developers/transfer-workflow",title:"Direct Token Transfer",description:"This workflow describes how to use the Casper command-line client to transfer tokens between purses on a Casper network.",source:"@site/source/docs/casper/workflow/developers/transfer-workflow.md",sourceDirName:"workflow/developers",slug:"/workflow/developers/transfer-workflow",permalink:"/workflow/developers/transfer-workflow",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/developers/transfer-workflow.md",tags:[],version:"current",lastUpdatedAt:1675797037,formattedLastUpdatedAt:"2/7/2023",frontMatter:{},sidebar:"workflow",previous:{title:"Introduction",permalink:"/workflow/developers/transfers"},next:{title:"Transferring Tokens using a Multi-sig Deploy",permalink:"/workflow/developers/deploy-transfer"}},i={},l=[{value:"Transfer",id:"transfer",level:2},{value:"Deploy Status",id:"deploy-status",level:3}],p={toc:l};function b(e){var n=e.components,a=(0,r.Z)(e,o);return(0,c.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"direct-token-transfer"},"Direct Token Transfer"),(0,c.kt)("p",null,"This workflow describes how to use the Casper command-line client to transfer tokens between purses on a Casper network."),(0,c.kt)("p",null,"This workflow assumes:"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"You meet the ",(0,c.kt)("a",{parentName:"li",href:"/dapp-dev-guide/setup"},"prerequisites")),(0,c.kt)("li",{parentName:"ol"},"You are using the Casper command-line client"),(0,c.kt)("li",{parentName:"ol"},"You have a target ",(0,c.kt)("em",{parentName:"li"},"public key")," hex the path to the source ",(0,c.kt)("em",{parentName:"li"},"secret key")),(0,c.kt)("li",{parentName:"ol"},"You have a valid ",(0,c.kt)("em",{parentName:"li"},"node-address")),(0,c.kt)("li",{parentName:"ol"},"You must be able to sign a deploy for the source account")),(0,c.kt)("h2",{id:"transfer"},"Transfer"),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"transfer")," command allows you to move CSPR from one account's purse to another as denominated in ",(0,c.kt)("a",{parentName:"p",href:"/design/casper-design/#tokens-divisibility"},"Motes"),". A ",(0,c.kt)("em",{parentName:"p"},"Mote")," is a denomination of the cryptocurrency CSPR, where 1 CSPR = 1,000,000,000 Motes."),(0,c.kt)("p",null,"For transfers of at least 2.5 CSPR (2,500,000,000 Motes) from a single sender to a single recipient on a Casper network, the most efficient option is to use the direct transfer capability."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Direct transfer example"),":"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client transfer \\\n--id 1 \\\n--transfer-id 123456789012345 \\\n--node-address http://<node-ip-address>:7777 \\\n--amount <amount-to-transfer> \\\n--secret-key <source-account-secret-key>.pem \\\n--chain-name casper \\\n--target-account <hex-encoded-target-account-public-key> \\\n--payment-amount 10000\n")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Request fields:")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"p"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"p"},"transfer-id")," -<64-BIT INTEGER> The ",(0,c.kt)("inlineCode",{parentName:"p"},"transfer-id")," is a memo field, providing additional information about the recipient, which is necessary when transferring tokens to some recipients. For example, if depositing tokens into an account's purse where off-chain management keeps track of individual sub-balances, it is necessary to provide a memo ID uniquely identifying the actual recipient. If this is not necessary for a given recipient, you may pass ",(0,c.kt)("inlineCode",{parentName:"p"},"0")," or some ",(0,c.kt)("inlineCode",{parentName:"p"},"u64")," value that is meaningful to you")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"p"},"node-address")," - Hostname or IP and port of a node on a network bound to a JSON-RPC endpoint ","[","default:",(0,c.kt)("a",{parentName:"p",href:"http://localhost:7777"},"http://localhost:7777"),"]")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"p"},"amount")," -<512-BIT INTEGER> The number of motes to transfer (1 CSPR = 1,000,000,000 ",(0,c.kt)("inlineCode",{parentName:"p"},"Motes"),")")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"p"},"secret-key")," - Path to secret key file")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"p"},"chain-name")," - Name of the chain, to avoid the deploy from being accidentally or maliciously included in a different chain"),(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"The ",(0,c.kt)("em",{parentName:"li"},"chain-name")," for testnet is ",(0,c.kt)("strong",{parentName:"li"},"casper-test")),(0,c.kt)("li",{parentName:"ul"},"The ",(0,c.kt)("em",{parentName:"li"},"chain-name")," for mainnet is ",(0,c.kt)("strong",{parentName:"li"},"casper")))),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"p"},"target-account")," - Hex-encoded public key of the account from which the main purse will be used as the target"))),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Important response fields:")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},'"result"."deploy_hash"')," - the address of the executed transfer, needed to look up additional information about the transfer")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Note"),": Save the returned ",(0,c.kt)("em",{parentName:"p"},"deploy_hash")," from the output to query information about the transfer deploy later."),(0,c.kt)("details",null,(0,c.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "jsonrpc": "2.0",\n    "method": "account_put_deploy",\n    "params": {\n        "deploy": {\n            "approvals": [\n                {\n                    "signature": "130 chars",\n                    "signer": "010f50b0116f213ef65b99d1bd54483f92bf6131de2f8aceb7e3f825a838292150"\n                }\n            ],\n            "hash": "ec2d477a532e00b08cfa9447b7841a645a27d34ee12ec55318263617e5740713",\n            "header": {\n                "account": "010f50b0116f213ef65b99d1bd54483f92bf6131de2f8aceb7e3f825a838292150",\n                "body_hash": "da35b095640a403324306c59ac6f18a446dfcc28faf753ce58b96b635587dd8e",\n                "chain_name": "casper-net-1",\n                "dependencies": [],\n                "gas_price": 1,\n                "timestamp": "2021-04-20T18:04:40.333Z",\n                "ttl": "1h"\n            },\n            "payment": {\n                "ModuleBytes": {\n                    "args": [\n                        [\n                            "amount",\n                            {\n                                "bytes": "021027",\n                                "cl_type": "U512",\n                                "parsed": "10000"\n                            }\n                        ]\n                    ],\n                    "module_bytes": ""\n                }\n            },\n            "session": {\n                "Transfer": {\n                    "args": [\n                        [\n                            "amount",\n                            {\n                                "bytes": "0400f90295",\n                                "cl_type": "U512",\n                                "parsed": "2500000000"\n                            }\n                        ],\n                        [\n                            "target",\n                            {\n                                "bytes": "8ae68a6902ff3c029cea32bb67ae76b25d26329219e4c9ceb676745981fd3668",\n                                "cl_type": {\n                                    "ByteArray": 32\n                                },\n                                "parsed": "8ae68a6902ff3c029cea32bb67ae76b25d26329219e4c9ceb676745981fd3668"\n                            }\n                        ],\n                        [\n                            "id",\n                            {\n                                "bytes": "00",\n                                "cl_type": {\n                                    "Option": "U64"\n                                },\n                                "parsed": null\n                            }\n                        ]\n                    ]\n                }\n            }\n        }\n    }\n}\n')),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "deploy_hash": "ec2d477a532e00b08cfa9447b7841a645a27d34ee12ec55318263617e5740713"\n    }\n}\n'))),(0,c.kt)("h3",{id:"deploy-status"},"Deploy Status"),(0,c.kt)("p",null,"A transfer on a Casper network is only executed after it has been included in a finalized block."),(0,c.kt)("p",null,"Refer to the Section on ",(0,c.kt)("a",{parentName:"p",href:"/workflow/developers/querying#deploy-status"},"querying deploys")," within the network to check the execution status of the transfer."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Important response fields:")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},'"result"."execution_results"[0]."transfers[0]"')," - the address of the executed transfer that the source account initiated. We will use it to look up additional information about the transfer"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},'"result"."execution_results"[0]."block_hash"')," - contains the block hash of the block that included our transfer. We will require the ",(0,c.kt)("em",{parentName:"li"},"state_root_hash")," of this block to look up information about the accounts and their purse balances")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Note"),": Transfer addresses use a ",(0,c.kt)("inlineCode",{parentName:"p"},"transfer-")," string prefix."),(0,c.kt)("details",null,(0,c.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 2,\n    "jsonrpc": "2.0",\n    "method": "info_get_deploy",\n    "params": {\n        "deploy_hash": "ec2d477a532e00b08cfa9447b7841a645a27d34ee12ec55318263617e5740713"\n    }\n}\n')),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 6054990863558097019,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.4.6",\n        "deploy": {\n            "approvals": [\n                {\n                    "signature": "01c8c1704a2c921988cd546fe85d249f27bc9da198e8c2f79d91e19a40e015e59a099723b5540c20c57a1ebffef2e4d2e333d9e52f1f27fef9d6b9a4ec5080b40a",\n                    "signer": "01ea8ff63a2b3bcf42c3e8e057959d864043fb989082ddc54464ef9a2ea7338ba0"\n                }\n            ],\n            "hash": "d5862af0c7d06df6cb265c2dee9a014ce570a8db75eb0689f14d819c632c305d",\n            "header": {\n                "account": "01ea8ff63a2b3bcf42c3e8e057959d864043fb989082ddc54464ef9a2ea7338ba0",\n                "body_hash": "9ccc49a951b9b783bbb20746007e221e8326fbbb48f002aaa40d664abf35995d",\n                "chain_name": "casper-test",\n                "dependencies": [],\n                "gas_price": 1,\n                "timestamp": "2022-07-05T22:39:20.190Z",\n                "ttl": "30m"\n            },\n            "payment": {\n                "ModuleBytes": {\n                    "args": [\n                        [\n                            "amount",\n                            {\n                                "bytes": "0400e1f505",\n                                "cl_type": "U512",\n                                "parsed": "100000000"\n                            }\n                        ]\n                    ],\n                    "module_bytes": ""\n                }\n            },\n            "session": {\n                "Transfer": {\n                    "args": [\n                        [\n                            "amount",\n                            {\n                                "bytes": "0400f90295",\n                                "cl_type": "U512",\n                                "parsed": "2500000000"\n                            }\n                        ],\n                        [\n                            "target",\n                            {\n                                "bytes": "0203343d88a5dd8a67ab8c9d572c50c7f4604960d78f8a41ea48b98d3dcec6316834",\n                                "cl_type": "PublicKey",\n                                "parsed": "0203343d88a5dd8a67ab8c9d572c50c7f4604960d78f8a41ea48b98d3dcec6316834"\n                            }\n                        ],\n                        [\n                            "id",\n                            {\n                                "bytes": "01e6c6720000000000",\n                                "cl_type": {\n                                    "Option": "U64"\n                                },\n                                "parsed": 7522022\n                            }\n                        ]\n                    ]\n                }\n            }\n        },\n        "execution_results": [\n            {\n                "block_hash": "b357fc78f105e43be66f268bb8d7308f357fe37e0e55d92d26f8e255c9292529",\n                "result": {\n                    "Success": {\n                        "cost": "100000000",\n                        "effect": {\n                            "operations": [],\n                            "transforms": [\n                                {\n                                    "key": "account-hash-aff4921ce6f73072a914f04e7327a946b72ec4562a7d99f107e9411d1592c3f6",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "account-hash-aff4921ce6f73072a914f04e7327a946b72ec4562a7d99f107e9411d1592c3f6",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "hash-624dbe2395b9d9503fbee82162f1714ebff6b639f96d2084d26d944c354ec4c5",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "hash-9824d60dc3a5c44a20b9fd260a412437933835b52fc683d8ae36e4ec2114843e",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "balance-20c3a137051eaa98efa048fd8f888ed4b342bcc1c8166f475e25b6a627d669a4",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "balance-20c3a137051eaa98efa048fd8f888ed4b342bcc1c8166f475e25b6a627d669a4",\n                                    "transform": {\n                                        "WriteCLValue": {\n                                            "bytes": "0500a7d0dd2c",\n                                            "cl_type": "U512",\n                                            "parsed": "192700000000"\n                                        }\n                                    }\n                                },\n                                {\n                                    "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                                    "transform": {\n                                        "AddUInt512": "100000000"\n                                    }\n                                },\n                                {\n                                    "key": "account-hash-aff4921ce6f73072a914f04e7327a946b72ec4562a7d99f107e9411d1592c3f6",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "account-hash-aff4921ce6f73072a914f04e7327a946b72ec4562a7d99f107e9411d1592c3f6",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "hash-624dbe2395b9d9503fbee82162f1714ebff6b639f96d2084d26d944c354ec4c5",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "hash-9824d60dc3a5c44a20b9fd260a412437933835b52fc683d8ae36e4ec2114843e",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "balance-20c3a137051eaa98efa048fd8f888ed4b342bcc1c8166f475e25b6a627d669a4",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "balance-20c3a137051eaa98efa048fd8f888ed4b342bcc1c8166f475e25b6a627d669a4",\n                                    "transform": {\n                                        "WriteCLValue": {\n                                            "bytes": "0500a7d0dd2c",\n                                            "cl_type": "U512",\n                                            "parsed": "192700000000"\n                                        }\n                                    }\n                                },\n                                {\n                                    "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                                    "transform": {\n                                        "AddUInt512": "100000000"\n                                    }\n                                },\n                                {\n                                    "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "hash-9824d60dc3a5c44a20b9fd260a412437933835b52fc683d8ae36e4ec2114843e",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "balance-20c3a137051eaa98efa048fd8f888ed4b342bcc1c8166f475e25b6a627d669a4",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "balance-be85882962304905286b2b4d3602f7f287095536ef4ce3e9a5360930c729ec2c",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "balance-20c3a137051eaa98efa048fd8f888ed4b342bcc1c8166f475e25b6a627d669a4",\n                                    "transform": {\n                                        "WriteCLValue": {\n                                            "bytes": "0500aecd482c",\n                                            "cl_type": "U512",\n                                            "parsed": "190200000000"\n                                        }\n                                    }\n                                },\n                                {\n                                    "key": "balance-be85882962304905286b2b4d3602f7f287095536ef4ce3e9a5360930c729ec2c",\n                                    "transform": {\n                                        "AddUInt512": "2500000000"\n                                    }\n                                },\n                                {\n                                    "key": "transfer-86760957e94a46839bcd03bee35c9db6b8a906e6fbfe87e69e93383df3d41b2a",\n                                    "transform": {\n                                        "WriteTransfer": {\n                                            "amount": "2500000000",\n                                            "deploy_hash": "d5862af0c7d06df6cb265c2dee9a014ce570a8db75eb0689f14d819c632c305d",\n                                            "from": "account-hash-9aed70924116013bdd5517109bea97678d9cff449640457a8a4ed3e561d864d4",\n                                            "gas": "0",\n                                            "id": 7522022,\n                                            "source": "uref-20c3a137051eaa98efa048fd8f888ed4b342bcc1c8166f475e25b6a627d669a4-007",\n                                            "target": "uref-be85882962304905286b2b4d3602f7f287095536ef4ce3e9a5360930c729ec2c-004",\n                                            "to": "account-hash-aff4921ce6f73072a914f04e7327a946b72ec4562a7d99f107e9411d1592c3f6"\n                                        }\n                                    }\n                                },\n                                {\n                                    "key": "deploy-d5862af0c7d06df6cb265c2dee9a014ce570a8db75eb0689f14d819c632c305d",\n                                    "transform": {\n                                        "WriteDeployInfo": {\n                                            "deploy_hash": "d5862af0c7d06df6cb265c2dee9a014ce570a8db75eb0689f14d819c632c305d",\n                                            "from": "account-hash-9aed70924116013bdd5517109bea97678d9cff449640457a8a4ed3e561d864d4",\n                                            "gas": "100000000",\n                                            "source": "uref-20c3a137051eaa98efa048fd8f888ed4b342bcc1c8166f475e25b6a627d669a4-007",\n                                            "transfers": ["transfer-86760957e94a46839bcd03bee35c9db6b8a906e6fbfe87e69e93383df3d41b2a"]\n                                        }\n                                    }\n                                },\n                                {\n                                    "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "hash-624dbe2395b9d9503fbee82162f1714ebff6b639f96d2084d26d944c354ec4c5",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "hash-9824d60dc3a5c44a20b9fd260a412437933835b52fc683d8ae36e4ec2114843e",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "balance-874289dbe721508e8d2893efd86364ea1ca67a6a2456825259efd6db8efb427c",\n                                    "transform": "Identity"\n                                },\n                                {\n                                    "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                                    "transform": {\n                                        "WriteCLValue": {\n                                            "bytes": "00",\n                                            "cl_type": "U512",\n                                            "parsed": "0"\n                                        }\n                                    }\n                                },\n                                {\n                                    "key": "balance-874289dbe721508e8d2893efd86364ea1ca67a6a2456825259efd6db8efb427c",\n                                    "transform": {\n                                        "AddUInt512": "100000000"\n                                    }\n                                }\n                            ]\n                        },\n                        "transfers": ["transfer-86760957e94a46839bcd03bee35c9db6b8a906e6fbfe87e69e93383df3d41b2a"]\n                    }\n                }\n            }\n        ]\n    }\n}\n'))))}b.isMDXComponent=!0}}]);