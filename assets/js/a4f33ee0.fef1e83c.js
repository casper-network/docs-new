"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1472],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||c[f]||o;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5373:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=n(4996),s=["components"],i={},p="Transferring Tokens using a Multi-sig Deploy",d={unversionedId:"developers/cli/transfers/multisig-deploy-transfer",id:"developers/cli/transfers/multisig-deploy-transfer",title:"Transferring Tokens using a Multi-sig Deploy",description:"This topic explores using a deploy file to transfer Casper tokens (CSPR) between purses on a Casper network. This method of transferring tokens is recommended when you want to implement multi-signature deploys. The make-transfer command allows you to create a transfer Deploy and save the output to a file. You can then have the Deploy signed by other parties using the sign-deploy command and send it to the network for execution using the send-deploy command.",source:"@site/source/docs/casper/developers/cli/transfers/multisig-deploy-transfer.md",sourceDirName:"developers/cli/transfers",slug:"/developers/cli/transfers/multisig-deploy-transfer",permalink:"/developers/cli/transfers/multisig-deploy-transfer",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/cli/transfers/multisig-deploy-transfer.md",tags:[],version:"current",lastUpdatedAt:1677502053,formattedLastUpdatedAt:"2/27/2023",frontMatter:{},sidebar:"developers",previous:{title:"Direct Token Transfer",permalink:"/developers/cli/transfers/direct-token-transfer"},next:{title:"Verifying a Transfer",permalink:"/developers/cli/transfers/verify-transfer"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Token Transfer Workflow",id:"token-transfer-workflow",level:2},{value:"Preparing the Transfer",id:"preparing-the-transfer",level:3},{value:"Signing the Deploy using the Casper Client",id:"signing-the-deploy-using-the-casper-client",level:3},{value:"Sending the Deploy",id:"sending-the-deploy",level:3},{value:"Verifying the Transfer",id:"verifying-the-transfer",level:2}],f={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transferring-tokens-using-a-multi-sig-deploy"},"Transferring Tokens using a Multi-sig Deploy"),(0,o.kt)("p",null,"This topic explores using a deploy file to transfer Casper tokens (CSPR) between purses on a Casper network. This method of transferring tokens is recommended when you want to implement multi-signature deploys. The ",(0,o.kt)("inlineCode",{parentName:"p"},"make-transfer")," command allows you to create a transfer Deploy and save the output to a file. You can then have the Deploy signed by other parties using the ",(0,o.kt)("inlineCode",{parentName:"p"},"sign-deploy")," command and send it to the network for execution using the ",(0,o.kt)("inlineCode",{parentName:"p"},"send-deploy")," command."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You must ensure the following prerequisites are met."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set up all the prerequisites listed ",(0,o.kt)("a",{parentName:"li",href:"/developers/prerequisites"},"here"),", including:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A funded ",(0,o.kt)("a",{parentName:"li",href:"/developers/prerequisites#setting-up-an-account"},"Account")," on Testnet or Mainnet"),(0,o.kt)("li",{parentName:"ul"},"A valid ",(0,o.kt)("em",{parentName:"li"},"node address")," from the ",(0,o.kt)("a",{parentName:"li",href:"https://testnet.cspr.live/tools/peers"},"Testnet peers")," or ",(0,o.kt)("a",{parentName:"li",href:"https://cspr.live/tools/peers"},"Mainnet peers")),(0,o.kt)("li",{parentName:"ul"},"The Casper ",(0,o.kt)("a",{parentName:"li",href:"/developers/prerequisites#the-casper-command-line-client"},"command-line client")))),(0,o.kt)("li",{parentName:"ol"},"Set up the source account for multi-signature deploys, as outlined in the ",(0,o.kt)("a",{parentName:"li",href:"/resources/tutorials/advanced/two-party-multi-sig"},"Two-Party Multi-Signature Deploys")," workflow"),(0,o.kt)("li",{parentName:"ol"},"Get the path of the source account's ",(0,o.kt)("em",{parentName:"li"},"secret key")," file"),(0,o.kt)("li",{parentName:"ol"},"Get the path of a target account's ",(0,o.kt)("em",{parentName:"li"},"public key")," hex file")),(0,o.kt)("h2",{id:"token-transfer-workflow"},"Token Transfer Workflow"),(0,o.kt)("p",null,"The high-level flow to transfer tokens using a deploy file is described in the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"make-deploy")," command to prepare a transfer and save the output in a file"),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"send-deploy")," command to send the deploy to the network through a valid node")),(0,o.kt)("img",{src:(0,l.Z)("/image/workflow/deploy-flow.png"),width:"600"}),(0,o.kt)("h3",{id:"preparing-the-transfer"},"Preparing the Transfer"),(0,o.kt)("p",null,"This section explains the ",(0,o.kt)("inlineCode",{parentName:"p"},"make-transfer")," command using an example you can try on the Testnet. For this example, we are transferring 2500000000 motes from the source account (with the secret",(0,o.kt)("em",{parentName:"p"},"key.pem file) to a target account. To use this example on the Mainnet, the ","_","chain-name")," would be ",(0,o.kt)("inlineCode",{parentName:"p"},"casper")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-test"),". Note that we are saving the output of the ",(0,o.kt)("inlineCode",{parentName:"p"},"make-deploy")," command in a ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer.deploy")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client make-transfer --amount 2500000000 \\\n--secret-key [PATH]/secret_key.pem \\\n--chain-name casper-test \\\n--target-account [PUBLIC_KEY_HEX] \\\n--transfer-id 3 \\\n--payment-amount 10000\n--output transfer.deploy\n")),(0,o.kt)("p",null,"The following table explains the parameters used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"make-transfer")," command."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"amount"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of motes you wish to transfer (1 CSPR = 1,000,000,000 motes)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"secret-key"),(0,o.kt)("td",{parentName:"tr",align:null},"The path of the secret key file for the source account")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"chain-name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the chain, to avoid the deploy from being accidentally or maliciously included in a different chain ",(0,o.kt)("ul",null,(0,o.kt)("li",null,"For Testnet use ",(0,o.kt)("strong",{parentName:"td"},"casper-test")),(0,o.kt)("li",null,"For Mainnet use ",(0,o.kt)("strong",{parentName:"td"},"casper"))))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"target-account"),(0,o.kt)("td",{parentName:"tr",align:null},"Hex-encoded public key of the target account from which the main purse will be used")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"transfer-id"),(0,o.kt)("td",{parentName:"tr",align:null},"A user-defined identifier permanently associated with the transfer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"payment-amount"),(0,o.kt)("td",{parentName:"tr",align:null},"The amount used to pay for executing the code on the network")))),(0,o.kt)("p",null,"In the output, you will see a section named ",(0,o.kt)("strong",{parentName:"p"},"approvals"),". This is where a signature from the source account is added to the Deploy."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Sample output of the make-transfer command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "hash": "0e17da4c7b6d12984910aa25e397fc85db53e5cd896776d47494cb4a5f2083f1",\n    "header": {\n        "account": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf",\n        "timestamp": "2023-01-05T11:30:05.269Z",\n        "ttl": "30m",\n        "gas_price": 1,\n        "body_hash": "5d7d30965d503dba0459d5e6b3a0c923059f89e6a7179f76aec0fda1263b7819",\n        "dependencies": [],\n        "chain_name": "casper-test"\n    },\n    "payment": {\n        "ModuleBytes": {\n            "module_bytes": "",\n            "args": [\n                [\n                    "amount",\n                    {\n                        "cl_type": "U512",\n                        "bytes": "021027",\n                        "parsed": "10000"\n                    }\n                ]\n            ]\n        }\n    },\n    "session": {\n        "Transfer": {\n            "args": [\n                [\n                    "amount",\n                    {\n                        "cl_type": "U512",\n                        "bytes": "0400f90295",\n                        "parsed": "2500000000"\n                    }\n                ],\n                [\n                    "target",\n                    {\n                        "cl_type": "PublicKey",\n                        "bytes": "01f48f5b095518be188286d896921d33e97f9729f5945237d5ff6cf7b077aabf1f",\n                        "parsed": "01f48f5b095518be188286d896921d33e97f9729f5945237d5ff6cf7b077aabf1f"\n                    }\n                ],\n                [\n                    "id",\n                    {\n                        "cl_type": {\n                            "Option": "U64"\n                        },\n                        "bytes": "013930000000000000",\n                        "parsed": 3\n                    }\n                ]\n            ]\n        }\n    },\n    "approvals": [\n        {\n            "signer": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf",\n            "signature": "016853b69b98434f236ac2eacb053b244f5853f0ec2a1d86b8f8a35601353cebe160f3c57606be9f289da34b7ccd5b7285751d1e6edc9cc76a84c14fb286272702"\n        }\n    ]\n}\n'))),(0,o.kt)("h3",{id:"signing-the-deploy-using-the-casper-client"},"Signing the Deploy using the Casper Client"),(0,o.kt)("p",null,"Once the deploy file is created, you can sign the deploy using other designated accounts. For this example, we are signing the deploy with a second secret key and saving the output in a ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer2.deploy")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client sign-deploy \\\n--input transfer.deploy \\\n--secret-key [PATH]/another_secret_key.pem \\\n--output transfer2.deploy\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"input"),(0,o.kt)("td",{parentName:"tr",align:null},"The path of the deploy file, which needs to be signed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"secret-key"),(0,o.kt)("td",{parentName:"tr",align:null},"The path of the secret key file used to sign the deploy")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"output"),(0,o.kt)("td",{parentName:"tr",align:null},"The path of the output file used to save the deploy with multiple signatures")))),(0,o.kt)("p",null,"Towards the end of the following output, you can observe that there is an ",(0,o.kt)("strong",{parentName:"p"},"approvals")," section, which has two signatures, one from the account initiating the transfer and the second from the account used to sign the deploy."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Sample output saved in the transfer2.deploy file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "hash": "959ba7154a58bf3a9ec555b38fb2c96dba81523b49f9a086630d0cf44d74cacc",\n    "header": {\n        "account": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf",\n        "timestamp": "2023-01-05T11:42:23.311Z",\n        "ttl": "30m",\n        "gas_price": 1,\n        "body_hash": "5d7d30965d503dba0459d5e6b3a0c923059f89e6a7179f76aec0fda1263b7819",\n        "dependencies": [],\n        "chain_name": "casper-test"\n    },\n    "payment": {\n        "ModuleBytes": {\n            "module_bytes": "",\n            "args": [\n                [\n                    "amount",\n                    {\n                        "cl_type": "U512",\n                        "bytes": "021027",\n                        "parsed": "10000"\n                    }\n                ]\n            ]\n        }\n    },\n    "session": {\n        "Transfer": {\n            "args": [\n                [\n                    "amount",\n                    {\n                        "cl_type": "U512",\n                        "bytes": "0400f90295",\n                        "parsed": "2500000000"\n                    }\n                ],\n                [\n                    "target",\n                    {\n                        "cl_type": "PublicKey",\n                        "bytes": "01f48f5b095518be188286d896921d33e97f9729f5945237d5ff6cf7b077aabf1f",\n                        "parsed": "01f48f5b095518be188286d896921d33e97f9729f5945237d5ff6cf7b077aabf1f"\n                    }\n                ],\n                [\n                    "id",\n                    {\n                        "cl_type": {\n                            "Option": "U64"\n                        },\n                        "bytes": "013930000000000000",\n                        "parsed": 3\n                    }\n                ]\n            ]\n        }\n    },\n    "approvals": [\n        {\n            "signer": "01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986",\n            "signature": "014c2dc520a1d7f2b7cc18fe704899dd158c02448a4c575bc5214bad3384cb4fff6e32ece196768a8d21b5644c96850fea8b980bd2f6c1fe3c717c1c45a6b75508"\n        },\n        {\n            "signer": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf",\n            "signature": "0107b684e395879fed81d8387b0b4422301c1e4fcbd76672cf3fb7ab2ea8a2ef1429622a999fbbb56bcb79d871bfaeeb107415d67c78a57e8f67987e7f4368980c"\n        }\n    ]\n}\n'))),(0,o.kt)("h3",{id:"sending-the-deploy"},"Sending the Deploy"),(0,o.kt)("p",null,"The next step is to send the deploy for processing on the network. As described in the ",(0,o.kt)("a",{parentName:"p",href:"#prerequisites"},"Prerequisites")," section, you need to get an active node address from the corresponding network to complete this task. The following example uses the node ",(0,o.kt)("a",{parentName:"p",href:"http://80.92.204.108"},"http://80.92.204.108")," from the Testnet; replace this with an active node before using the command. Port ",(0,o.kt)("inlineCode",{parentName:"p"},"7777")," is the RPC endpoint for interacting with the Casper client."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client send-deploy --input transfer2.deploy --node-address http://65.21.235.219:7777\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"input"),(0,o.kt)("td",{parentName:"tr",align:null},"The path of the deploy file, which is used as the input")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"node-address"),(0,o.kt)("td",{parentName:"tr",align:null},"The Hostname or IP and port of the node")))),(0,o.kt)("p",null,"Make a note of the ",(0,o.kt)("em",{parentName:"p"},"deploy_hash")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"send-deploy")," command output to verify the status of the deploy."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Successful output of the send-deploy command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 261147078494867680,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.3.4",\n        "deploy_hash": "87912f9ea859159dcf2f0554751ba0bce8b1df41f4b4339bc6de370d7734bdae"\n    }\n}\n'))),(0,o.kt)("p",null,"If you get an account authorization error, you must set up the source account to allow multi-signature deploys using session code. The ",(0,o.kt)("a",{parentName:"p",href:"/resources/tutorials/advanced/two-party-multi-sig"},"Two-Party Multi-Signature Deploys")," workflow is an example of how to accomplish this."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example of an account authorization error"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": -32008,\n    "message": "deploy parameter failure: account authorization invalid at prestate_hash: 5f0392de8ac3512a48a110acfc5bc10d4a6a07109b350ae14cbec0428656c8ac"\n}\n'))),(0,o.kt)("h2",{id:"verifying-the-transfer"},"Verifying the Transfer"),(0,o.kt)("p",null,"To verify the transfer status, see ",(0,o.kt)("a",{parentName:"p",href:"/developers/cli/transfers/verify-transfer"},"Verifying a Transfer"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can also verify if the transfer was successful by checking your account balance using a ",(0,o.kt)("a",{parentName:"p",href:"/users/block-explorer"},"block explorer"),"."))))}m.isMDXComponent=!0}}]);