"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9850],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=r,m=h["".concat(i,".").concat(d)]||h[d]||u[d]||o;return n?a.createElement(m,c(c({ref:t},p),{},{components:n})):a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[h]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9587:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),c=n(4996),s=["components"],i={title:"Cross-Contract Communication"},l="Tutorial: Cross-Contract Communication",p={unversionedId:"resources/tutorials/advanced/cross-contract",id:"resources/tutorials/advanced/cross-contract",title:"Cross-Contract Communication",description:"|                   |                   |",source:"@site/source/docs/casper/resources/tutorials/advanced/cross-contract.md",sourceDirName:"resources/tutorials/advanced",slug:"/resources/tutorials/advanced/cross-contract",permalink:"/resources/tutorials/advanced/cross-contract",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/resources/tutorials/advanced/cross-contract.md",tags:[],version:"current",lastUpdatedAt:1681294879,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{title:"Cross-Contract Communication"},sidebar:"resources",previous:{title:"Introduction",permalink:"/resources/tutorials/advanced/"},next:{title:"Safely Transfer Tokens to a Contract",permalink:"/resources/tutorials/advanced/transfer-token-to-contract"}},h={},u=[{value:"Outline of the tutorial",id:"outline",level:2},{value:"Creating the Project",id:"create-project",level:2},{value:"Changing the standard contract",id:"changing-contract",level:2},{value:"Deploying the contract",id:"deploying-contract",level:2},{value:"Create another contract for the cross-contract call",id:"cross-contract",level:2},{value:"Summary",id:"summary",level:2}],d={toc:u},m="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial-cross-contract-communication"},"Tutorial: Cross-Contract Communication"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Level:"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Advanced"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Time to complete:"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"45 - 60 Minutes"))))),(0,o.kt)("p",null,"Make sure you have installed the software/packages needed for this tutorial."),(0,o.kt)("p",null,"This tutorial assumes that you have worked through these examples, if you have not already done so then we recommend that you do so now:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/getting-started"},"getting started")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/simple-contract"},"writing on-chain code"))),(0,o.kt)("h2",{id:"outline"},"Outline of the tutorial"),(0,o.kt)("p",null,"This tutorial covers some variations of cross-contract communication. Most complex scenarios use cross-contract communication, so it is crucial to understand how this works. It is best explained using the uniswap v2 protocol."),(0,o.kt)("p",null,"Uniswap v2 protocol consists of multiple smart contracts which govern a unified blockchain application and each contract serves a different purpose. The contracts are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Factory"),(0,o.kt)("li",{parentName:"ul"},"Pair"),(0,o.kt)("li",{parentName:"ul"},"Pair (ERC20)"),(0,o.kt)("li",{parentName:"ul"},"Library"),(0,o.kt)("li",{parentName:"ul"},"Router01"),(0,o.kt)("li",{parentName:"ul"},"Router02")),(0,o.kt)("p",null,"The Factory contract is generally used to create a token pair. It throws an event that a pair has been created and allows the user to read the pair created. The most important to notice is that the generation of a token pair actually creates a contract of type Pair under a new address hash. The Pair smart contract is used to perform operations like mint or burn on a created pair of tokens."),(0,o.kt)("p",null,"Having this in mind we will be building two contracts which reference each other in some shape or form. We will look at how the keys are deployed in the contracts context and how we can pass the contract hash into a deployed contract so another contract can be called."),(0,o.kt)("h2",{id:"create-project"},"Creating the Project"),(0,o.kt)("p",null,"In the appropriate folder create the project for the contract as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo casper cross-contract\n")),(0,o.kt)("p",null,"This will create the following structure under your desired smart contract folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"project-directory/\n\u2514\u2500\u2500 contract/\n    \u251c\u2500\u2500 .cargo/\n        \u2514\u2500\u2500 config.toml\n    \u251c\u2500\u2500 src/\n        \u2514\u2500\u2500 main.rs\n    \u2514\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 tests/\n    \u251c\u2500\u2500 src/\n        \u2514\u2500\u2500 integration-tests.rs\n    \u2514\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 .travis.yml\n\u2514\u2500\u2500 Makefile\n\u2514\u2500\u2500 rust-toolchain\n")),(0,o.kt)("p",null,"After the project directory structure is created use the following commands to go into the project folder and compile the files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd cross-contract\nmake prepare\nmake build-contract\n")),(0,o.kt)("p",null,"This will also create a target folder under the contract folder where the .wasm of the contract can be found. Additionally you can check if the tests can be performed using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make test\n")),(0,o.kt)("p",null,"This should produce the following outcome:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"running 2 tests\ntest tests::should_error_on_missing_runtime_arg ... ok\ntest tests::should_store_hello_world ... ok\n\ntest result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.09s\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If this is not the case and an error has been produced similar to:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'warning: `tests` (bin "integration-tests" test) generated 2 warnings\nerror: could not compile `tests` due to 3 previous errors; 2 warnings emitted\nmake: *** [test] Error 101\n')),(0,o.kt)("p",{parentName:"admonition"},"Then it is useful to check if the dependencies in ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," are still up to date."),(0,o.kt)("img",{class:"align-center",src:(0,c.Z)("/image/tutorials/cross-contract/CargoToml.png"),width:"600",alt:"CargoToml"}),(0,o.kt)("p",{parentName:"admonition"},"If you see the red cross it means the version is not up to date and has to be updated.")),(0,o.kt)("h2",{id:"changing-contract"},"Changing the standard contract"),(0,o.kt)("p",null,"The standard Casper contract from the crate constructor contains some methods that we will reuse. However, we will be getting rid of most auto-generated code."),(0,o.kt)("p",null,"We will be changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.rs")," file. Your code should look exactly as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#![no_std]\n#![no_main]\n\n#[cfg(not(target_arch = "wasm32"))]\ncompile_error!("target arch should be wasm32: compile with \'--target wasm32-unknown-unknown\'");\n\n// We need to explicitly import the std alloc crate and `alloc::string::String` as we are in a\n// `no_std` environment.\nextern crate alloc;\n\n// the elementary types\nuse alloc::string::String;\nuse alloc::vec::Vec;\nuse alloc::collections::BTreeMap;\nuse crate::alloc::string::ToString;\n\n\n// casper crates\nuse casper_types::{Key, CLType, Parameter, EntryPoint, EntryPoints, EntryPointType, EntryPointAccess};\n\nuse casper_contract::{\n    contract_api::{runtime, storage},\n    unwrap_or_revert::UnwrapOrRevert,\n};\n\n\n#[no_mangle]\npub extern "C" fn call() {\n\n}\n')),(0,o.kt)("p",null,"This will serve as a base for introducing the elements needed for the cross-contract communication."),(0,o.kt)("p",null,"The first thing to be defined in a contract should be the call function. It should be understood as a ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor")," for the contract. Everything that will find itself in the call function will be visible as metadata on the Casper Network in the contracts context. You should already be familiar with the call function from the ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/simple-contract"},"writing on-chain code"),". If this is not the case be sure to familiarize yourself with it now."),(0,o.kt)("p",null,"The contract code with changes to the call function should look as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#![no_std]\n#![no_main]\n\n#[cfg(not(target_arch = "wasm32"))]\ncompile_error!("target arch should be wasm32: compile with \'--target wasm32-unknown-unknown\'");\n\n// We need to explicitly import the std alloc crate and `alloc::string::String` as we are in a\n// `no_std` environment.\nextern crate alloc;\n\n// the elementary types\nuse alloc::string::String;\nuse alloc::vec::Vec;\nuse alloc::collections::BTreeMap;\nuse crate::alloc::string::ToString;\n\n\n// casper crates\nuse casper_types::{Key, CLType, Parameter, EntryPoint, EntryPoints, EntryPointType, EntryPointAccess};\n\nuse casper_contract::{\n    contract_api::{runtime, storage},\n    unwrap_or_revert::UnwrapOrRevert,\n};\n\n\n#[no_mangle]\npub extern "C" fn call() {\n\n    // get the value of a passed parameter with the key "message"\n    let value: String = runtime::get_named_arg("message");\n\n    // the value will be wraped in a URef\n    let value_ref = storage::new_uref(value);\n\n    // creating the new set of named keys\n    // the keys are a Map of Key/Value\n    let mut named_keys: BTreeMap<String, Key> = BTreeMap::new();\n\n    // insert the new value into the named keys\n    named_keys.insert(String::from("message"),value_ref.into()); // use into to wrap the value to the key\n    // create a new vector\n    let mut vec = Vec::new();\n    vec.push(Parameter::new("message", CLType::String));\n\n    // create an Entry Point Object\n    let mut entry_points = EntryPoints::new();\n\n    // add the entry point to the entry points object\n    entry_points.add_entry_point(EntryPoint::new(\n        "update_msg",                   // the name of the entry point\n        vec,                            // the arguments which can be passed into the entry point\n        CLType::Unit,                   // return type of the entry point\n        EntryPointAccess::Public,       // acces permissions - public can be accessed always\n        EntryPointType::Contract        // in most cases it will be contract\n    ));\n\n    // the contract is stored in the global state\n    let (stored_contract_hash, _contract_version) = storage::new_contract(\n        entry_points,                                       // entry points\n        Some(named_keys),                                   // named keys\n        Some("Hello_world_package_name".to_string()),       // package name\n        Some("Hello_world_access_uref".to_string())         // access uref\n    );\n\n    // to access from the account - named keys of the account\n    runtime::put_key("hello_world_contract", stored_contract_hash.into());\n\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We should notice that that runtime and storage appear quite frequently in our code. If you didn't have a chance to check out those modules yet, it would be a perfect time to do so: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/index.html"},"contract API"),".")),(0,o.kt)("p",null,"Each entry point in the call function must have a corresponding function with the same name defined in the contract. This means that if you change the key of an entry point, make sure to update the corresponding function name to avoid runtime errors, and vice versa. The compiler will not catch this error for you, so it is important to check this yourself. In our case we will add the function ",(0,o.kt)("inlineCode",{parentName:"p"},"update_msg")," to the contract code just before the call function."),(0,o.kt)("p",null,"Your complete contract should look as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#![no_std]\n#![no_main]\n\n#[cfg(not(target_arch = "wasm32"))]\ncompile_error!("target arch should be wasm32: compile with \'--target wasm32-unknown-unknown\'");\n\n// We need to explicitly import the std alloc crate and `alloc::string::String` as we are in a\n// `no_std` environment.\nextern crate alloc;\n\n// the elementary types\nuse alloc::string::String;\nuse alloc::vec::Vec;\nuse alloc::collections::BTreeMap;\nuse crate::alloc::string::ToString;\n\n\n// casper crates\nuse casper_types::{Key, CLType, Parameter, EntryPoint, EntryPoints, EntryPointType, EntryPointAccess};\n\nuse casper_contract::{\n    contract_api::{runtime, storage},\n    unwrap_or_revert::UnwrapOrRevert,\n};\n\n#[no_mangle]\npub extern "C" fn update_msg() {\n\n    let value: String = runtime::get_named_arg("message");\n    // get the uref of the message stored in the global state\n    let uref = runtime::get_key("message").unwrap_or_revert().into_uref().unwrap_or_revert();\n    // write the message to the global state\n    storage::write(uref, String::from(value));\n}\n\n\n#[no_mangle]\npub extern "C" fn call() {\n    // get the value of a passed parameter with the key "message"\n    let value: String = runtime::get_named_arg("message");\n    // the value will be wraped in a URef\n    let value_ref = storage::new_uref(value);\n    // creating the new set of named keys\n    // the keys are a Map of Key/Value\n    let mut named_keys: BTreeMap<String, Key> = BTreeMap::new();\n    // insert the new value into the named keys\n    named_keys.insert(String::from("message"),value_ref.into()); // use into to wrap the value to the key\n    // create a new vector\n    let mut vec = Vec::new();\n    vec.push(Parameter::new("message", CLType::String));\n    // create an Entry Point Object\n    let mut entry_points = EntryPoints::new();\n\n    // add the entry point to the entry points object\n    entry_points.add_entry_point(EntryPoint::new(\n        "update_msg",\n        vec,\n        CLType::Unit,\n        EntryPointAccess::Public,\n        EntryPointType::Contract\n    ));\n\n    // the contract is stored in the global state\n    let (stored_contract_hash, _contract_version) = storage::new_contract(\n        entry_points,                                       // entry points\n        Some(named_keys),                                   // named keys\n        Some("Hello_world_package_name".to_string()),       // package name\n        Some("Hello_world_access_uref".to_string())         // access uref\n    );\n\n    // to access from the account - named keys of the account\n    runtime::put_key("hello_world_contract", stored_contract_hash.into());\n}\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can always try out storing different types in the context. There is a distinction between storing data in the context of a smart contract and using dictionaries. The dictionaries can be used to store the data which is dapp centric. Just be sure to remember that the dictionary is not an SQL Database and only what is necessary and should be stored on the blockchain can go into the dictionary. The objects referenced in a contract should only be used as links between contracts/dictionaries in a bigger application.")),(0,o.kt)("h2",{id:"deploying-contract"},"Deploying the contract"),(0,o.kt)("p",null,"There are many different ways to deploy a contract. The simplest method is to use the CLI with the ",(0,o.kt)("a",{parentName:"p",href:"/developers/cli/installing-contracts#installing-contract-code"},"put_deploy"),". If you are doing only blockchain smart contract development and you aren't dealing with full-stack applications, this might be the primary way for you to interface with Casper Network."),(0,o.kt)("p",null,"Be sure to go through the prerequisites from the ",(0,o.kt)("a",{parentName:"p",href:"/developers/cli/installing-contracts"},"installing contracts")," and make sure that after doing this you have:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Valid private key for your account."),(0,o.kt)("li",{parentName:"ol"},"Funded account with 2.000 CSPR on the Testnet, which you can use for testing.")),(0,o.kt)("p",null,"Create the ",(0,o.kt)("inlineCode",{parentName:"p"},"keys")," folder in the main folder of your project and make sure that the private key which you put into the folder is called ",(0,o.kt)("inlineCode",{parentName:"p"},"secret_key.pem"),"."),(0,o.kt)("p",null,"Compile the contract in the contract directory so you obtain the contracts ",(0,o.kt)("inlineCode",{parentName:"p"},".wasm"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd cross-contract\nmake prepare\nmake build-contract\n")),(0,o.kt)("p",null,"This should produce the following outcome:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd contract && cargo build --release --target wasm32-unknown-unknown\n    Finished release [optimized] target(s) in 0.13s\nwasm-strip contract/target/wasm32-unknown-unknown/release/contract.wasm 2>/dev/null | true\n")),(0,o.kt)("p",null,"With this step everything is in place to deploy the contract."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When working with lengthy command strings, it may help to maintain a .txt file where you can edit the parameters of the commands before sending them to the CLI. This will save you time and frustration when working with multiple contracts and commands.")),(0,o.kt)("p",null,"Since we are using a standard contract structure, the command called from the ",(0,o.kt)("inlineCode",{parentName:"p"},"cross-contract")," folder should be the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n    --node-address http://136.243.187.84:7777 \\\n    --chain-name casper-test \\\n    --secret-key ./keys/secret_key.pem \\\n    --payment-amount 20000000000 \\\n    --session-path ./contract/target/wasm32-unknown-unknown/release/contract.wasm \\\n    --session-arg \"message:string='hello world'\"\n")),(0,o.kt)("p",null,"The output of this command is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": -9119604526598719721,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.13",\n    "deploy_hash": "af42bc6dbc58f677d138eb968d897f965f1ed118a40980bc16efbcc2a0c71832"\n  }\n}\n')),(0,o.kt)("p",null,"To verify that the contract was successfully deployed, call ",(0,o.kt)("inlineCode",{parentName:"p"},"get-deploy"),", providing as parameter the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy-hash")," received from the ",(0,o.kt)("inlineCode",{parentName:"p"},"put-deploy")," above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-deploy \\\n    --node-address http://136.243.187.84:7777 af42bc6dbc58f677d138eb968d897f965f1ed118a40980bc16efbcc2a0c71832\n")),(0,o.kt)("p",null,"This should return json output containing information such as header data, approvers and payments. Take time to familiarize yourself with the structure of the output."),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"af42bc6dbc58f677d138eb968d897f965f1ed118a40980bc16efbcc2a0c71832")," is the deploy hash we can find this contract using the block explorer. When viewing through the explorer the status of the Deploy should be marked as ",(0,o.kt)("inlineCode",{parentName:"p"},"Success"),"."),(0,o.kt)("p",null,"In your account on ",(0,o.kt)("inlineCode",{parentName:"p"},"cspr.live"),", in the tab ",(0,o.kt)("inlineCode",{parentName:"p"},"Named Keys"),", all contracts which were deployed using the private key connected with this account will be linked. By clicking the contract hash, you can see all of the entry points of the contract, as well as the named keys (parameters) with which the contract has been deployed. Remember to keep these named keys organised, so you don't lose overview during bigger implementations."),(0,o.kt)("p",null,"We can see a Tab ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploys")," in the contract as well. This is empty for now. If we had a cross-contract call and an entry point to a different contract would have been called, this would be visible here. For now just make sure to note the hash of the contract, which is ",(0,o.kt)("inlineCode",{parentName:"p"},"hash-b7a06298cc71d4cac05929cc0713dfd5a541c68b71cb500cd04547b5cd0385ea")," in this case."),(0,o.kt)("h2",{id:"cross-contract"},"Create another contract for the cross-contract call"),(0,o.kt)("p",null,"Let us write another contract, which we will also deploy on the Casper Network. This smart contract will contain a ",(0,o.kt)("inlineCode",{parentName:"p"},"call_contract_2")," endpoint and after its invocation the previous contracts endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"update_msg")," will be called."),(0,o.kt)("p",null,"In this tutorial we will be passing the contract hash as an argument into the caller method and use this to perform the calls to the destination contract."),(0,o.kt)("p",null,"Prepare the ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," contract method as described below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\n#[no_mangle]\npub extern "C" fn call() {\n\n    // create a new vector - this will be the signature of the entrypoint\n    let mut vec = Vec::new();\n    vec.push(Parameter::new("new_message", CLType::String));\n    vec.push(Parameter::new("hello_world_contract", CLType::Key));\n\n    // In the named keys of the contract, add a key for the count.\n    let mut named_keys = NamedKeys::new();\n\n    // create an Entry Point Object\n    let mut entry_points = EntryPoints::new();\n\n    // add the entry point to the entry points object\n    entry_points.add_entry_point(EntryPoint::new(\n       "call_contract_2",\n       vec,\n       CLType::Unit,\n       EntryPointAccess::Public,\n       EntryPointType::Contract\n    ));\n\n    // the contract is stored in the global state\n    let (stored_contract_hash, _contract_version) = storage::new_contract(\n       entry_points,                                        // entry points\n       Some(named_keys),                                    // named keys\n       Some("contract2_package_name".to_string()),          // package name\n       Some("contract2_access_uref".to_string())            // access uref\n    );\n\n    // to access from the account - named keys of the account\n    runtime::put_key("cross_contract_2", stored_contract_hash.into());\n}\n\n')),(0,o.kt)("p",null,"This would be the easiest implementation of the call function. There is only one entry point which accepts the key ",(0,o.kt)("inlineCode",{parentName:"p"},"contract2")," of type ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," and the key ",(0,o.kt)("inlineCode",{parentName:"p"},"hello_world_contract")," of the type ",(0,o.kt)("inlineCode",{parentName:"p"},"Key"),". There aren't any named keys which will be saved in the contracts context. The contract is then stored in the global state and placed as a named key in the accounts context."),(0,o.kt)("p",null,"Now that we have defined the ",(0,o.kt)("inlineCode",{parentName:"p"},"call_contract_2")," endpoint, we must implement the corresponding function. This endpoint will take the second contract hash as an argument and call the endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"update_msg")," passing as parameter a message which will then be stored in the second contract's context."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#[no_mangle]\npub extern "C" fn call_contract_2() {\n\n    // get the contract hash from the named arguments passed to the call\n    let contract_hash: ContractHash = runtime::get_named_arg::<Key>(CONTRACT_HASH)\n    .into_hash()\n    .map(|hash| ContractHash::new(hash))\n    .unwrap();\n\n    // get the value of the message from the second parameter\n    let new_value: String = runtime::get_named_arg("new_message");\n\n    // Call the update_msg endpoint on the other contract with the parameter values\n    let _: () = runtime::call_contract(\n        contract_hash,\n        "update_msg",\n        runtime_args! {\n            "message" => new_value,\n        },\n    );\n\n}\n')),(0,o.kt)("p",null,"Your complete contract implementation should look as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\n#![no_std]\n#![no_main]\n\n#[cfg(not(target_arch = "wasm32"))]\ncompile_error!("target arch should be wasm32: compile with \'--target wasm32-unknown-unknown\'");\n\n// We need to explicitly import the std alloc crate and `alloc::string::String` as we are in a\n// `no_std` environment.\nextern crate alloc;\n\n// the elementary types\nuse alloc::string::String;\nuse alloc::vec::Vec;\nuse crate::alloc::string::ToString;\nuse crate::runtime_args::RuntimeArgs;\n\n// casper crates\nuse casper_types::{\n    api_error::ApiError,\n    contracts::NamedKeys, runtime_args, CLType, Key, ContractHash, Parameter, EntryPoint, EntryPoints, EntryPointType, EntryPointAccess};\n\nuse casper_contract::{\n    unwrap_or_revert::UnwrapOrRevert,\n    contract_api::{runtime, storage},\n};\n\n// the contract key in the account named keys\nconst CONTRACT_HASH: &str = "hello_world_contract";\n\n#[no_mangle]\npub extern "C" fn call_contract_2() {\n\n    let contract_hash: ContractHash = runtime::get_named_arg::<Key>(CONTRACT_HASH)\n    .into_hash()\n    .map(|hash| ContractHash::new(hash))\n    .unwrap();\n\n    let new_value: String = runtime::get_named_arg("new_message");\n\n    let _: () = runtime::call_contract(\n        contract_hash,\n        "update_msg",\n        runtime_args! {\n            // key    => value\n            "message" => new_value,\n        },\n     );\n\n}\n\n#[no_mangle]\npub extern "C" fn call() {\n\n    // create a new vector - this will be the signature of the entrypoint\n    let mut vec = Vec::new();\n    vec.push(Parameter::new("new_message", CLType::String));\n    vec.push(Parameter::new("hello_world_contract", CLType::Key));\n\n    // In the named keys of the contract, add a key for the count.\n    let named_keys = NamedKeys::new();\n\n    // create an Entry Point Object\n    let mut entry_points = EntryPoints::new();\n\n    // add the entry point to the entry points object\n    entry_points.add_entry_point(EntryPoint::new(\n       "call_contract_2",\n       vec,\n       CLType::Unit,\n       EntryPointAccess::Public,\n       EntryPointType::Contract\n    ));\n\n    // the contract is stored in the global state\n    let (stored_contract_hash, _contract_version) = storage::new_contract(\n       entry_points,                                        // entry points\n       Some(named_keys),                                    // named keys\n       Some("contract2_package_name".to_string()),          // package name\n       Some("contract2_access_uref".to_string())            // access uref\n    );\n\n    // to access from the account - named keys of the account\n    runtime::put_key("cross_contract_2", stored_contract_hash.into());\n\n}\n')),(0,o.kt)("p",null,"After you run ",(0,o.kt)("inlineCode",{parentName:"p"},"make build-contract")," in your second contract's directory, you should obtain the outcome:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd contract && cargo build --release --target wasm32-unknown-unknown\n   Compiling contract v0.1.0 (/Users/karolmarter/Desktop/Rust_Projects/cross-contract-2/contract)\n    Finished release [optimized] target(s) in 0.69s\nwasm-strip contract/target/wasm32-unknown-unknown/release/contract.wasm 2>/dev/null | true\n")),(0,o.kt)("p",null,"Create the ",(0,o.kt)("inlineCode",{parentName:"p"},"keys")," subfolder and copy the keys from the ",(0,o.kt)("inlineCode",{parentName:"p"},"keys")," subfolder in the first contract into this subfolder. The call from the terminal will look as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n    --node-address http://136.243.187.84:7777 \\\n    --chain-name casper-test \\\n    --secret-key ./keys/secret_key.pem \\\n    --payment-amount 20000000000 \\\n    --session-path ./contract/target/wasm32-unknown-unknown/release/contract.wasm\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You may have noticed that the contract.wasm is always output to the same filename for each new ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo casper")," project. You can change this by editing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Makefile")," in the main directory. You can then observe the result by recompiling your contract with these commands;"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make prepare\nmake build-contract\n"))),(0,o.kt)("p",null,"After the deploy we can check if it was successful and inspect the parameters of the deployed entry points."),(0,o.kt)("p",null,"The output of the deployment is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": -7557689417621513622,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.13",\n    "deploy_hash": "faeb7e4f010c20c88d2dd126da545933c26fd8ce370282b8cd49f7f6fe7304b9"\n  }\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If the contract name doesn't change during concurrent deploys, the urefs/hashes will be overwritten in the account's named keys.")),(0,o.kt)("p",null,"Observing the deploy, we can see that it has been successful:"),(0,o.kt)("img",{class:"align-center",src:(0,c.Z)("/image/tutorials/cross-contract/Deploy.png"),width:"600",alt:"Deploy"}),(0,o.kt)("p",null,"If we check the account's named keys, we can see all of the account's deployed contracts:"),(0,o.kt)("img",{class:"align-center",src:(0,c.Z)("/image/tutorials/cross-contract/NamedKeys.png"),width:"600",alt:"NamedKeys"}),(0,o.kt)("p",null,"As we have now managed to deploy two contracts, we can call the endpoint of this contract, passing appropriate arguments to the function."),(0,o.kt)("p",null,"The Uref of the message variable is stored under the Named Keys in the contract. Checking the state of the message in the first contract, we observe the following:"),(0,o.kt)("img",{class:"align-center",src:(0,c.Z)("/image/tutorials/cross-contract/HelloWorldBCC.png"),width:"600",alt:"HelloWorld"}),(0,o.kt)("p",null,"This is a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"hello world")," string. After invoking the endpoint using the command below this value should change."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"--session-hash")," - is the contract hash, which is returned from the put-deploy."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"--session-arg"),' "hello world_contract:Key= ..." the hash of the contract which we want to call from within the contract identified by the session-hash.')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy \\\n    --node-address http://136.243.187.84:7777 \\\n    --chain-name casper-test \\\n    --secret-key ./keys/secret_key.pem \\\n    --payment-amount 20000000000 \\\n    --session-hash hash-32ad0e54e874f68706708ebfd2c5aba7803eb64ccff71a50d3c4d4f29db15c92 \\\n    --session-entry-point "call_contract_2" \\\n    --session-arg "new_message:string=\'Hello new message!\'" \\\n    --session-arg "hello_world_contract:Key=\'hash-b7a06298cc71d4cac05929cc0713dfd5a541c68b71cb500cd04547b5cd0385ea\'"\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The contract hash has to be of type ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractHash")," in the contract itself, we can pass the hash as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Key")," argument and change it to ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractHash")," in the smart contract.")),(0,o.kt)("p",null,"The output of the above command is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": -6419793201665396463,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.13",\n    "deploy_hash": "15e11340d92fc9e64deb38bd942f4efb69caad0851eec24fd577070309d18537"\n  }\n}\n')),(0,o.kt)("p",null,"After the deploy finishes successfuly, you should see a similar outcome to the following:"),(0,o.kt)("img",{class:"align-center",src:(0,c.Z)("/image/tutorials/cross-contract/FunctionCall2.png"),width:"600",alt:"FunctionCall2"}),(0,o.kt)("p",null,"We would expect that the value of the message reference in the other contract would have changed, which we can check:"),(0,o.kt)("img",{class:"align-center",src:(0,c.Z)("/image/tutorials/cross-contract/NewHelloWorld.png"),width:"600",alt:"NewHelloWorld"}),(0,o.kt)("p",null,"With this we have succesfully built a cross contract communication between two contracts."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In this tutorial, we:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Discussed why cross-contract communication is sometimes necessary"),(0,o.kt)("li",{parentName:"ul"},"Developed two Rust contracts on the Casper Network where one smart contract is calling an entry point of the second smart contract"),(0,o.kt)("li",{parentName:"ul"},"Called an entry point on one contract from the other contract, passing a value as argument to this entry point.")))}g.isMDXComponent=!0}}]);