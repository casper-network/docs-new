"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7666],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),l=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=l(t.components);return n.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,c=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),h=l(a),u=r,m=h["".concat(i,".").concat(u)]||h[u]||d[u]||c;return a?n.createElement(m,o(o({ref:e},p),{},{components:a})):n.createElement(m,o({ref:e},p))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=a.length,o=new Array(c);o[0]=h;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var l=2;l<c;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7174:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=a(3117),r=a(102),c=(a(7294),a(3905)),o=(a(4996),["components"]),s={},i="Upgrading a Contract",l={unversionedId:"dapp-dev-guide/tutorials/upgrade-contract",id:"dapp-dev-guide/tutorials/upgrade-contract",title:"Upgrading a Contract",description:"This tutorial examines how to upgrade an existing contract, a process similar to upgrading any other software. You can change an unlocked contract package by adding a new contract and updating the default contract version that the contract package should use. You will need to know the contract package hash and use the addcontractversion API.",source:"@site/source/docs/casper/dapp-dev-guide/tutorials/upgrade-contract.md",sourceDirName:"dapp-dev-guide/tutorials",slug:"/dapp-dev-guide/tutorials/upgrade-contract",permalink:"/dapp-dev-guide/tutorials/upgrade-contract",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/tutorials/upgrade-contract.md",tags:[],version:"current",lastUpdatedAt:1675797037,formattedLastUpdatedAt:"2/7/2023",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Interacting with Runtime Return Values",permalink:"/dapp-dev-guide/tutorials/return-values-tutorial"},next:{title:"Safely Transfer Tokens to a Contract",permalink:"/dapp-dev-guide/tutorials/transfer-token-to-contract"}},p={},d=[{value:"Video Tutorial",id:"video-tutorial",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Contract Versioning Flow",id:"contract-versioning-flow",level:2},{value:"Step 1. Create a new unlocked contract",id:"step-1-create-a-new-unlocked-contract",level:3},{value:"Step 2. Add a new contract to the package",id:"step-2-add-a-new-contract-to-the-package",level:3},{value:"Step 3. Build the contract Wasm",id:"step-3-build-the-contract-wasm",level:3},{value:"Step 4. Install the contract",id:"step-4-install-the-contract",level:3},{value:"Step 5. Verify your changes",id:"step-5-verify-your-changes",level:3},{value:"Disabling a Contract Version",id:"disabling-a-contract-version",level:2},{value:"Creating a Locked Contract Package",id:"locked-contract-package",level:2}],h={toc:d};function u(t){var e=t.components,a=(0,r.Z)(t,o);return(0,c.kt)("wrapper",(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"upgrading-a-contract"},"Upgrading a Contract"),(0,c.kt)("p",null,"This tutorial examines how to upgrade an existing contract, a process similar to upgrading any other software. You can change an unlocked ",(0,c.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/struct.ContractPackage.html"},"contract package")," by adding a new contract and updating the default contract version that the contract package should use. You will need to know the contract package hash and use the ",(0,c.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.add_contract_version.html"},"add_contract_version")," API."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Note:")," you can also create a ",(0,c.kt)("a",{parentName:"p",href:"#locked-contract-package"},"locked contract package")," that cannot be versioned and is therefore not upgradable."),(0,c.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,c.kt)("p",null,"Here is a video walkthrough of this tutorial."),(0,c.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed?v=Q4ZXNV8EVTk&list=PL8oWxbJ-csEogSV-M0IPiofWP5I_dLji6&index=4",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,c.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"The ",(0,c.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/contracts/struct.ContractPackageHash.html"},"ContractPackageHash")," referencing the ",(0,c.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/struct.ContractPackage.html"},"ContractPackage")," where an unlocked contract is stored in global state"),(0,c.kt)("li",{parentName:"ul"},"You should be familiar with ",(0,c.kt)("a",{parentName:"li",href:"/writing-contracts"},"writing smart contracts"),", ",(0,c.kt)("a",{parentName:"li",href:"/dapp-dev-guide/building-dapps/sending-deploys/"},"on-chain contracts"),", and ",(0,c.kt)("a",{parentName:"li",href:"/dapp-dev-guide/writing-contracts/calling-contracts"},"calling contracts")," on a Casper network")),(0,c.kt)("h2",{id:"contract-versioning-flow"},"Contract Versioning Flow"),(0,c.kt)("p",null,"Here is an example workflow for creating a versioned contract package. Your workflow may differ if you have already created the contract package and have a handle on its hash."),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"Create a contract in the most common way, using ",(0,c.kt)("a",{parentName:"li",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_contract.html"},"new_contract")),(0,c.kt)("li",{parentName:"ol"},"Add a new version of the contract using ",(0,c.kt)("a",{parentName:"li",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.add_contract_version.html"},"add_contract_version")),(0,c.kt)("li",{parentName:"ol"},"Build the new contract and generate the corresponding ",(0,c.kt)("inlineCode",{parentName:"li"},".wasm")," file"),(0,c.kt)("li",{parentName:"ol"},"Install the contract on the network via a deploy"),(0,c.kt)("li",{parentName:"ol"},"Verify that your new contract version works as desired")),(0,c.kt)("h3",{id:"step-1-create-a-new-unlocked-contract"},"Step 1. Create a new unlocked contract"),(0,c.kt)("p",null,"Create a new contract using the ",(0,c.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_contract.html"},"new_contract")," function and store the ContractHash returned under a key in global state for later access. Under the hood, the execution engine will create a contract package (a container for the contract) that can be versioned."),(0,c.kt)("p",null,"When creating the contract, you can specify the package name and access URef for further modifications. Without the access key URef, you cannot add new contract versions for security reasons. Optionally, you can also save the latest version of the contract package under a named key."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-rust"},'    // Create a new contract and specify a package name and access URef for further modifications\n    let (stored_contract_hash, contract_version) = storage::new_contract(\n        contract_entry_points,\n        Some(contract_named_keys),\n        Some("contract_package_name".to_string()),\n        Some("contract_access_uref".to_string()),\n    );\n\n    // The hash of the installed contract will be reachable through a named key\n    runtime::put_key(CONTRACT_KEY, stored_contract_hash.into());\n\n    // The current version of the contract will be reachable through a named key\n    let version_uref = storage::new_uref(contract_version);\n    runtime::put_key(CONTRACT_VERSION_KEY, version_uref.into());\n')),(0,c.kt)("p",null,"This ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter/blob/67a7eb8b306e5dcc9da9ff596987b6c4f0a98fd6/contracts/counter-define/src/main.rs#L79-L83"},"simple counter example")," shows you a contract package that can be versioned."),(0,c.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("ul",{parentName:"div"},(0,c.kt)("li",{parentName:"ul"},"We are versioning the contract package, not the contract. The contract is always at a set version, and it is the package that specifies the contract version to be used"),(0,c.kt)("li",{parentName:"ul"},"The Wasm file name of the new contract could differ from the old contract; after sending the deploy to the network, the contract package hash connects the different contract versions")))),(0,c.kt)("h3",{id:"step-2-add-a-new-contract-to-the-package"},"Step 2. Add a new contract to the package"),(0,c.kt)("p",null,"There are many changes you could make to a Casper contract, including:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Adding new entry points"),(0,c.kt)("li",{parentName:"ul"},"Modifying the behavior of an existing entry point in the contract"),(0,c.kt)("li",{parentName:"ul"},"Completely re-writing the contract")),(0,c.kt)("p",null,"To add a new contract version in the package, invoke the ",(0,c.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.add_contract_version.html"},"add_contract_version")," function and pass in the ",(0,c.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/struct.ContractPackageHash.html"},"ContractPackageHash"),", ",(0,c.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/struct.EntryPoints.html"},"EntryPoints"),", and ",(0,c.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/type.NamedKeys.html"},"NamedKeys"),". In the counter example, you will find the ",(0,c.kt)("inlineCode",{parentName:"p"},"add_contract_version")," call ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/18571e0c22d7918a953f497649b733151cfb3c3c/smart_contracts/contracts/client/counter-define/src/main.rs#L78-L79"},"here"),"."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-rust"},"    let (contract_hash, contract_version) =\n    storage::add_contract_version(contract_package_hash,\n                                  entry_points,\n                                  named_keys);\n")),(0,c.kt)("p",null,"Explanation of arguments:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"contract_package_hash")," - This hash directs you to the contract package. See ",(0,c.kt)("a",{parentName:"li",href:"/dapp-dev-guide/understanding-hash-types#hash-and-key-explanations"},"Hash and Key Explanations")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"entry_points")," - Entry points of the contract, which can be modified or newly added"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"named_keys")," - Named key pairs of the contract")),(0,c.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("ul",{parentName:"div"},(0,c.kt)("li",{parentName:"ul"},"The new contract version carries on named keys from the previous version. If you specify a new set of named keys, they will be combined with the old named keys in the new contract version. If the old and new contract versions use the same named keys, then the new values would be present in the new version of the contract"),(0,c.kt)("li",{parentName:"ul"},"You will need to manage contract versioning, considering clients that may use older versions. Here are a few options:",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"Pin your client contract to the contract hash of a specific version"),(0,c.kt)("li",{parentName:"ul"},"Use ",(0,c.kt)("a",{parentName:"li",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.call_versioned_contract.html"},"call_versioned_contract")," with a version number to pin your client contract to that version"),(0,c.kt)("li",{parentName:"ul"},"Call a contract using ",(0,c.kt)("a",{parentName:"li",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.call_versioned_contract.html"},"call_versioned_contract"),' and version "None", which uses the newest version of the contract')))))),(0,c.kt)("h3",{id:"step-3-build-the-contract-wasm"},"Step 3. Build the contract Wasm"),(0,c.kt)("p",null,"Use these commands to prepare and build the newly added contract:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"make prepare\n\nmake build-contract\n")),(0,c.kt)("h3",{id:"step-4-install-the-contract"},"Step 4. Install the contract"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/dapp-dev-guide/building-dapps/sending-deploys/#sending-the-deploy"},"Install the contract")," on the network via a deploy and verify the deploy status. You can also ",(0,c.kt)("a",{parentName:"p",href:"/dapp-dev-guide/building-dapps/sending-deploys/#monitoring-the-event-stream-for-deploys"},"monitor the event stream")," to see when your deploy is accepted."),(0,c.kt)("h3",{id:"step-5-verify-your-changes"},"Step 5. Verify your changes"),(0,c.kt)("p",null,"You can write unit tests to verify the behavior of the new contract version with ",(0,c.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.call_contract.html"},"call_contract")," or ",(0,c.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.call_versioned_contract.html"},"call_versioned_contract"),". When you add a new contract to the package (which increments the highest enabled version), you will obtain a new contract hash, the primary identifier of the contract. You can use the contract hash with call_contract. Alternatively, you can use call_versioned_contract and specify the contract_package_hash and the newly added version."),(0,c.kt)("p",null,"For the simple example counter above, here are the ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/dev/smart_contracts/contracts/test/contract-context/src/main.rs"},"corresponding tests"),". Notice how the tests store and verify the ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/8356f393d361832b18fee7227b5dcd65e29db768/smart_contracts/contracts/test/contract-context/src/main.rs#L172-L173"},"contract's version"),"."),(0,c.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"You could store the latest version of the contract package under a NamedKey, as shown ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/8356f393d361832b18fee7227b5dcd65e29db768/smart_contracts/contracts/client/counter-define/src/main.rs#L81"},"here"),". Then, you can query the NamedKey to check the latest version of the contract package."),(0,c.kt)("details",null,(0,c.kt)("summary",null,(0,c.kt)("b",null,"Example test function")),(0,c.kt)("pre",{parentName:"div"},(0,c.kt)("code",{parentName:"pre",className:"language-rust"},'        // Query latest global state under the account and get the last contract version.\n        fn get_version(&self) -> u32 {\n            self.test_builder\n                .query(\n                    None,\n                    Key::Account(self.account_address),\n                    &[CONTRACT_VERSION_KEY.to_string()], // Defined as: const CONTRACT_VERSION_KEY: &str = "contract_version";\n                )\n                .expect("should be stored value.")\n                .as_cl_value()\n                .expect("should be cl value.")\n                .clone()\n                .into_t::<u32>()\n                .expect("should be u32.")\n        }\n'))))),(0,c.kt)("h2",{id:"disabling-a-contract-version"},"Disabling a Contract Version"),(0,c.kt)("p",null,"You can disable the indicated contract version of the indicated contract package by using the ",(0,c.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.disable_contract_version.html"},"disable_contract_version")," function. Disabled contract versions can no longer be executed."),(0,c.kt)("h2",{id:"locked-contract-package"},"Creating a Locked Contract Package"),(0,c.kt)("p",null,"You can create a locked contract package with the ",(0,c.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_locked_contract.html"},"new_locked_contract")," function. This contract can never be upgraded."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-rust"},'let (stored_contract_hash, _) = storage::new_locked_contract(\n    contract_entry_points,\n    Some(contract_named_keys),\n    Some("contract_package_name".to_string()),\n    Some("contract_access_uref".to_string()),\n);\n')),(0,c.kt)("p",null,"Apply the contract entry points and named keys when you call the function. You can also specify a hash_name and uref_name that will be put in the context's named keys. You do not need to save the version number returned since the version of this contract package would always be equal to 1."),(0,c.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"Creating a locked contract package is an irreversible decision. For a contract that can be upgraded, use new_contract as explained above."))))}u.isMDXComponent=!0}}]);