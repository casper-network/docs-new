"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8163],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,c(c({ref:t},p),{},{components:n})):a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},319:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),c=(n(4996),["components"]),s={},i="Upgrading a Contract",l={unversionedId:"resources/tutorials/beginner/upgrade-contract",id:"resources/tutorials/beginner/upgrade-contract",title:"Upgrading a Contract",description:"This tutorial examines how to upgrade an existing contract, a process similar to upgrading any other software. You can change an unlocked contract package by adding a new contract and updating the default contract version that the contract package should use. You will need to know the contract package hash and use the addcontractversion API. You can also create a locked contract package that cannot be versioned and is therefore not upgradable.",source:"@site/source/docs/casper/resources/tutorials/beginner/upgrade-contract.md",sourceDirName:"resources/tutorials/beginner",slug:"/resources/tutorials/beginner/upgrade-contract",permalink:"/resources/tutorials/beginner/upgrade-contract",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/resources/tutorials/beginner/upgrade-contract.md",tags:[],version:"current",lastUpdatedAt:1684750573,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{},sidebar:"resources",previous:{title:"Querying a Casper Network",permalink:"/resources/tutorials/beginner/querying-network"},next:{title:"Launching a Casper Node with AWS Marketplace",permalink:"/resources/tutorials/beginner/aws-node"}},p={},u=[{value:"Video Tutorial",id:"video-tutorial",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Contract Versioning Flow",id:"contract-versioning-flow",level:2},{value:"Step 1. Create a new unlocked contract",id:"step-1-create-a-new-unlocked-contract",level:3},{value:"Step 2. Add a new contract to the package",id:"step-2-add-a-new-contract-to-the-package",level:3},{value:"Step 3. Build the contract Wasm",id:"step-3-build-the-contract-wasm",level:3},{value:"Step 4. Install the contract",id:"step-4-install-the-contract",level:3},{value:"Step 5. Verify your changes",id:"step-5-verify-your-changes",level:3},{value:"Disabling a Contract Version",id:"disabling-a-contract-version",level:2},{value:"Creating a Locked Contract Package",id:"locked-contract-package",level:2}],d={toc:u},h="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upgrading-a-contract"},"Upgrading a Contract"),(0,o.kt)("p",null,"This tutorial examines how to upgrade an existing contract, a process similar to upgrading any other software. You can change an unlocked ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/struct.ContractPackage.html"},"contract package")," by adding a new contract and updating the default contract version that the contract package should use. You will need to know the contract package hash and use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.add_contract_version.html"},"add_contract_version")," API. You can also create a ",(0,o.kt)("a",{parentName:"p",href:"#locked-contract-package"},"locked contract package")," that cannot be versioned and is therefore not upgradable."),(0,o.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,o.kt)("p",null,"Here is a video walkthrough of this tutorial."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed?v=Q4ZXNV8EVTk&list=PL8oWxbJ-csEogSV-M0IPiofWP5I_dLji6&index=4",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/contracts/struct.ContractPackageHash.html"},"ContractPackageHash")," referencing the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/struct.ContractPackage.html"},"ContractPackage")," where an unlocked contract is stored in global state."),(0,o.kt)("li",{parentName:"ul"},"You should be familiar with ",(0,o.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/simple-contract"},"writing smart contracts"),", ",(0,o.kt)("a",{parentName:"li",href:"/developers/dapps/sending-deploys"},"on-chain contracts"),", and ",(0,o.kt)("a",{parentName:"li",href:"/developers/cli/calling-contracts"},"calling contracts")," on a Casper network."),(0,o.kt)("li",{parentName:"ul"},"You have installed ",(0,o.kt)("a",{parentName:"li",href:"/counter-testnet/"},"A Counter on the Testnet")," that you will upgrade as part of this tutorial.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Installing the first version of the contract (contract-v1.wasm) as shown in the ",(0,o.kt)("a",{parentName:"p",href:"/counter-testnet"},"counter tutorial")," is a prerequisite before installing the second version of the contract (contract-v2.wasm).")),(0,o.kt)("p",null,"If you explore ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter/"},"the code"),", you will observe the different versions of the contract:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contract-v1")," is the counter contract you can see in the ",(0,o.kt)("a",{parentName:"li",href:"/counter-testnet/"},"A Counter on the Testnet")," tutorial."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contract-v2")," is the contract with the new ",(0,o.kt)("inlineCode",{parentName:"li"},"counter_decrement")," entry point.")),(0,o.kt)("h2",{id:"contract-versioning-flow"},"Contract Versioning Flow"),(0,o.kt)("p",null,"The following is an example workflow for creating a versioned contract package. Your workflow may differ if you have already created the contract package and have a handle on its hash."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a contract in the most common way, using ",(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_contract.html"},"new_contract"),"."),(0,o.kt)("li",{parentName:"ol"},"Add a new version of the contract using ",(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.add_contract_version.html"},"add_contract_version"),"."),(0,o.kt)("li",{parentName:"ol"},"Build the new contract and generate the corresponding ",(0,o.kt)("inlineCode",{parentName:"li"},".wasm")," file."),(0,o.kt)("li",{parentName:"ol"},"Install the contract on the network via a deploy."),(0,o.kt)("li",{parentName:"ol"},"Verify that your new contract version works as desired.")),(0,o.kt)("p",null,"In this tutorial, you will use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter/blob/master/contract-v2/src/main.rs"},"the second version")," of the counter contract to perform the upgrade."),(0,o.kt)("h3",{id:"step-1-create-a-new-unlocked-contract"},"Step 1. Create a new unlocked contract"),(0,o.kt)("p",null,"Create a new contract using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_contract.html"},"new_contract")," function and store the ContractHash returned under a key in global state for later access. Under the hood, the execution engine will create a contract package (a container for the contract) that can be versioned."),(0,o.kt)("p",null,"When creating the contract, you can specify the package name and access URef for further modifications. Without the access key URef, you cannot add new contract versions for security reasons. Optionally, you can also save the latest version of the contract package under a named key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    // Create a new contract and specify a package name and access URef for further modifications\n    let (stored_contract_hash, contract_version) = storage::new_contract(\n        contract_entry_points,\n        Some(contract_named_keys),\n        Some("contract_package_name".to_string()),\n        Some("contract_access_uref".to_string()),\n    );\n\n    // The hash of the installed contract will be reachable through a named key\n    runtime::put_key(CONTRACT_KEY, stored_contract_hash.into());\n\n    // The current version of the contract will be reachable through a named key\n    let version_uref = storage::new_uref(contract_version);\n    runtime::put_key(CONTRACT_VERSION_KEY, version_uref.into());\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter/blob/57e3912735f93e1d0f667b936675964ecfdc6594/contract-v1/src/main.rs#L94"},"first version of the counter")," shows you a contract package that can be versioned. This step is covered in the tutorial for ",(0,o.kt)("a",{parentName:"p",href:"/counter-testnet/"},"A Counter on the Testnet"),"."),(0,o.kt)("p",null,"Additional details:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We are versioning the contract package, not the contract. The contract is always at a set version, and the package specifies the contract version to be used."),(0,o.kt)("li",{parentName:"ol"},"The Wasm file name of the new contract could differ from the old contract; after sending the deploy to the network, the contract package hash connects the different contract versions.")),(0,o.kt)("h3",{id:"step-2-add-a-new-contract-to-the-package"},"Step 2. Add a new contract to the package"),(0,o.kt)("p",null,"There are many changes you could make to a Casper contract, like adding new entry points, modifying the behavior of an existing entry point, or completely re-writing the contract."),(0,o.kt)("p",null,"To add a new contract version in the package, invoke the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.add_contract_version.html"},"add_contract_version")," function and pass in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/struct.ContractPackageHash.html"},"ContractPackageHash"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/struct.EntryPoints.html"},"EntryPoints"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/type.NamedKeys.html"},"NamedKeys"),". In the counter example, you will find the ",(0,o.kt)("inlineCode",{parentName:"p"},"add_contract_version")," call ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter/blob/57e3912735f93e1d0f667b936675964ecfdc6594/contract-v2/src/main.rs#L164"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    let (contract_hash, contract_version) =\n    storage::add_contract_version(contract_package_hash,\n                                  entry_points,\n                                  named_keys);\n")),(0,o.kt)("p",null,"Explanation of arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contract_package_hash")," - This hash directs you to the contract package. See ",(0,o.kt)("a",{parentName:"li",href:"/concepts/hash-types#hash-and-key-explanations"},"Hash and Key Explanations"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"entry_points")," - Entry points of the contract, which can be modified or newly added."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"named_keys")," - Named key pairs of the contract.")),(0,o.kt)("p",null,"The new contract version carries on named keys from the previous version. If you specify a new set of named keys, they will be combined with the old named keys in the new contract version. If the old and new contract versions use the same named keys, then the new values would be present in the new version of the contract."),(0,o.kt)("p",null,"You will need to manage contract versioning, considering clients that may use older versions. Here are a few options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Pin your client contract to the contract hash of a specific version."),(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.call_versioned_contract.html"},"call_versioned_contract")," with a version number to pin your client contract to that version."),(0,o.kt)("li",{parentName:"ol"},"Call a contract using ",(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.call_versioned_contract.html"},"call_versioned_contract"),' and version "None", which uses the newest version of the contract.')),(0,o.kt)("h3",{id:"step-3-build-the-contract-wasm"},"Step 3. Build the contract Wasm"),(0,o.kt)("p",null,"Use these commands to prepare and build the newly added contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make prepare\n\nmake build-contract\n")),(0,o.kt)("h3",{id:"step-4-install-the-contract"},"Step 4. Install the contract"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/developers/dapps/sending-deploys#sending-the-deploy"},"Install the contract")," on the network via a deploy and verify the deploy status. You can also ",(0,o.kt)("a",{parentName:"p",href:"/developers/dapps/sending-deploys#monitoring-the-event-stream-for-deploys"},"monitor the event stream")," to see when your deploy is accepted."),(0,o.kt)("p",null,"To observe the upgrade workflow, you can install the second contract version on the chain. This version contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"counter_decrement")," entry point."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Installing the first version of the contract, as shown in the ",(0,o.kt)("a",{parentName:"p",href:"/counter-testnet"},"Counter tutorial"),", is a prerequisite before installing the second version.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n    --node-address http://[NODE_IP]:7777 \\\n    --chain-name casper-test \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount 5000000000000 \\\n    --session-path ./contract-v2/target/wasm32-unknown-unknown/release/counter-v2.wasm\n")),(0,o.kt)("h3",{id:"step-5-verify-your-changes"},"Step 5. Verify your changes"),(0,o.kt)("p",null,"You can write unit tests to verify the behavior of the new contract version with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.call_contract.html"},"call_contract")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.call_versioned_contract.html"},"call_versioned_contract"),". When you add a new contract to the package (which increments the highest enabled version), you will obtain a new contract hash, the primary identifier of the contract. You can use the contract hash with call_contract. Alternatively, you can use call_versioned_contract and specify the contract_package_hash and the newly added version."),(0,o.kt)("p",null,"For the simple example counter above, here are the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter/blob/master/tests/src/integration_tests.rs"},"corresponding tests"),". Notice how the tests store and verify the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter/blob/57e3912735f93e1d0f667b936675964ecfdc6594/contract-v1/src/main.rs#L107"},"contract's version")," and entry points."),(0,o.kt)("p",null,"You could store the latest version of the contract package under a NamedKey, as shown ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter/blob/57e3912735f93e1d0f667b936675964ecfdc6594/contract-v1/src/main.rs#L107"},"here"),". Then, you can query the NamedKey to check the latest version of the contract package."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Example test function")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    // Verify the contract version is now 2.\n    let account = builder\n        .get_account(*DEFAULT_ACCOUNT_ADDR)\n        .expect("should have account");\n\n    let version_key = *account\n        .named_keys()\n        .get(CONTRACT_VERSION_KEY)\n        .expect("version uref should exist");\n\n    let version = builder\n        .query(None, version_key, &[])\n        .expect("should be stored value.")\n        .as_cl_value()\n        .expect("should be cl value.")\n        .clone()\n        .into_t::<u32>()\n        .expect("should be u32.");\n\n    assert_eq!(version, 2);\n'))),(0,o.kt)("p",null,"You can also test the new entry point by using the Rust command-line client."),(0,o.kt)("p",null,"Get the NEW state-root-hash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address http://[NODE_IP]:7777\n")),(0,o.kt)("p",null,"Check the new contract entry points. You should see the ",(0,o.kt)("em",{parentName:"p"},"counter_decrement")," entry point now."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-global-state \\\n    --node-address http://[NODE_IP]:7777 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] -q "counter"\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Example output")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},' {\n  "id": 5602352547578277096,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.13",\n    "block_header": null,\n    "merkle_proof": "[54054 hex chars]",\n    "stored_value": {\n      "Contract": {\n        "contract_package_hash": "contract-package-wasmc014187ccf3366cca70317d6d567cd56a05ecf1ee50ed3bd02727c2864e3d3a8",\n        "contract_wasm_hash": "contract-wasm-64d252f1ab72c7295a85d15c3f456f8bdda586580b0b7106e203fa4fd83f05d7",\n        "entry_points": [\n          {\n            "access": "Public",\n            "args": [],\n            "entry_point_type": "Contract",\n            "name": "counter_decrement",\n            "ret": "Unit"\n          },\n          {\n            "access": "Public",\n            "args": [],\n            "entry_point_type": "Contract",\n            "name": "counter_get",\n            "ret": "I32"\n          },\n          {\n            "access": "Public",\n            "args": [],\n            "entry_point_type": "Contract",\n            "name": "counter_inc",\n            "ret": "Unit"\n          }\n        ],\n        "named_keys": [\n          {\n            "key": "uref-ca980a2e4c08dc3f233b728b22b909cd4e894295155a7902bf88a59eac1531d1-007",\n            "name": "count"\n          }\n        ],\n        "protocol_version": "1.4.13"\n      }\n    }\n  }\n}\n'))),(0,o.kt)("p",null,"Check the version and package details with the latest state root hash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-global-state \\\n    --node-address http://[NODE_IP]:7777 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] -q "version"\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Example output")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'{\n  "id": 9084525900533244372,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.13",\n    "block_header": null,\n    "merkle_proof": "[64874 hex chars]",\n    "stored_value": {\n      "CLValue": {\n        "bytes": "02000000",\n        "cl_type": "U32",\n        "parsed": 2\n      }\n    }\n  }\n\n'))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-global-state \\\n    --node-address http://[NODE_IP]:7777 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] -q "counter_package_name"\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Example output")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'{\n  "id": 6933525663267881367,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.13",\n    "block_header": null,\n    "merkle_proof": "[52174 hex chars]",\n    "stored_value": {\n      "ContractPackage": {\n        "access_key": "uref-101817ffd5aa47b08ca710649dbdc41edf0a20d7802c736d34053656c0a99eaf-007",\n        "disabled_versions": [],\n        "groups": [],\n        "versions": [\n          {\n            "contract_hash": "contract-4ee8a4cfbc0a183d189611b6a14c0f7b57e7635fa17a8acfc5c645fec4c36316",\n            "contract_version": 1,\n            "protocol_version_major": 1\n          },\n          {\n            "contract_hash": "contract-2cd9f6485423ba846fae83729016b03df26d9babb939466906c8f1d168b40949",\n            "contract_version": 2,\n            "protocol_version_major": 1\n          }\n        ]\n      }\n    }\n  }\n}\n\n\n'))),(0,o.kt)("p",null,"Call the new entry point, ",(0,o.kt)("em",{parentName:"p"},"counter_decrement"),", using the package name and check the results."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy \\\n    --node-address http://[NODE_IP]:7777 \\\n    --chain-name casper-test \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount 5000000000000 \\\n    --session-package-name "counter_package_name" \\\n    --session-entry-point "counter_decrement"\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"There are two ways to call versioned contracts:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/calling-contracts/#StoredVersionedContractByHash"},"Calling Contracts by Package Hash")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/calling-contracts/#StoredVersionedContractByName"},"Calling Contracts by Package Name")))),(0,o.kt)("p",null,"After calling the entry point, the count value should be decremented. You can verify it by querying the network again using the new state root hash."),(0,o.kt)("h2",{id:"disabling-a-contract-version"},"Disabling a Contract Version"),(0,o.kt)("p",null,"You can disable the indicated contract version of the indicated contract package by using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.disable_contract_version.html"},"disable_contract_version")," function. Disabled contract versions can no longer be executed."),(0,o.kt)("h2",{id:"locked-contract-package"},"Creating a Locked Contract Package"),(0,o.kt)("p",null,"You can create a locked contract package with the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_locked_contract.html"},"new_locked_contract")," function. This contract can never be upgraded."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let (stored_contract_hash, _) = storage::new_locked_contract(\n    contract_entry_points,\n    Some(contract_named_keys),\n    Some("contract_package_name".to_string()),\n    Some("contract_access_uref".to_string()),\n);\n')),(0,o.kt)("p",null,"Apply the contract entry points and named keys when you call the function. You can also specify a hash_name and uref_name that will be put in the context's named keys. You do not need to save the version number returned since the version of this contract package would always be equal to 1."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Creating a locked contract package is an irreversible decision. To upgrade a contract, use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_contract.html"},"new_contract")," as Step 1 explains.")))}m.isMDXComponent=!0}}]);