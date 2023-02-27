"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5715],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1014:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),l=(a(4996),["components"]),s={},i="Quickstart",p={unversionedId:"resources/quick-start",id:"resources/quick-start",title:"Quickstart",description:"Here is a list of commands for developers who already meet the prerequisites and want to quickly send a sample contract to the Testnet. Consult the complete documentation for context and additional help.",source:"@site/source/docs/casper/resources/quick-start.md",sourceDirName:"resources",slug:"/resources/quick-start",permalink:"/resources/quick-start",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/resources/quick-start.md",tags:[],version:"current",lastUpdatedAt:1677502053,formattedLastUpdatedAt:"2/27/2023",frontMatter:{},sidebar:"resources",previous:{title:"Ecosystem Open-Source Software",permalink:"/resources/build-on-casper/casper-open-source-software"},next:{title:"Overview",permalink:"/resources/tutorials/"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2}],m={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"Here is a list of commands for developers who already meet the prerequisites and want to quickly send a sample contract to the ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/"},"Testnet"),". Consult the ",(0,o.kt)("a",{parentName:"p",href:"/writing-contracts"},"complete documentation")," for context and additional help."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You have installed ",(0,o.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"Rust"),". Verify the installation with this command: ",(0,o.kt)("inlineCode",{parentName:"li"},"rustup --version"),". Restart the shell if needed."),(0,o.kt)("li",{parentName:"ol"},"You have installed ",(0,o.kt)("a",{parentName:"li",href:"https://cmake.org/install/"},"cmake"),". Verify the installation with this command: ",(0,o.kt)("inlineCode",{parentName:"li"},"cmake --version"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"On Ubuntu, you can follow ",(0,o.kt)("a",{parentName:"li",href:"https://cgold.readthedocs.io/en/latest/first-step/installation.html"},"this guide"),"."),(0,o.kt)("li",{parentName:"ul"},"On MacOS, use this command: ",(0,o.kt)("inlineCode",{parentName:"li"},"brew install cmake"),"."))),(0,o.kt)("li",{parentName:"ol"},"You have an integrated development environment (IDE). On Windows, you will need to download the C++ build developer tools, without which you cannot install ",(0,o.kt)("inlineCode",{parentName:"li"},"cargo-casper"),"."),(0,o.kt)("li",{parentName:"ol"},"You have download ",(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/download/"},"Git"),".")),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install Cargo Casper with this command:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"cargo install cargo-casper"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the ",(0,o.kt)("a",{parentName:"p",href:"/developers/prerequisites#the-casper-command-line-client"},"Casper client"),":"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"cargo install casper-client")),(0,o.kt)("p",{parentName:"li"},"If you have issues installing the casper-client, you may need additional libraries."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"On MacOS:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install pkg-config\nbrew install openssl\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"On Ubuntu:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install pkg-config\nsudo apt-get install openssl\nsudo apt-get install libssl-dev\n")))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Make sure you also have the development packages of ",(0,o.kt)("inlineCode",{parentName:"p"},"openssl")," installed. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"libssl-dev")," on Ubuntu or ",(0,o.kt)("inlineCode",{parentName:"p"},"openssl-devel")," on Fedora.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Test the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-client")," by ",(0,o.kt)("a",{parentName:"p",href:"/developers/prerequisites#acquire-node-address-from-network-peers"},"querying a node")," on the network and getting the latest ",(0,o.kt)("a",{parentName:"p",href:"/concepts/glossary/S#state-root-hash"},"state root hash"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address http://65.21.235.219:7777\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set up a ",(0,o.kt)("a",{parentName:"p",href:"/developers/prerequisites#setting-up-an-account"},"Casper Account"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone a simple counter contract or download it from GitHub:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/casper-ecosystem/counter"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the folder and prepare the dependencies to build the contract:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd counter\nmake prepare\n")),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},"Build the contract and tests:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"make test")),(0,o.kt)("ol",{start:12},(0,o.kt)("li",{parentName:"ol"},"Install the contract on Testnet using the ",(0,o.kt)("inlineCode",{parentName:"li"},"casper-client"),"'s ",(0,o.kt)("inlineCode",{parentName:"li"},"put-deploy")," command. Replace the secret key with your path. Record the deploy hash from the output.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n--node-address [NODE_ADDRESS] \\\n--chain-name casper-test \\\n--secret-key [YOUR_PATH_TO_SECRET_KEY_FILE] \\\n--payment-amount 30000000000 \\\n--session-path contracts/counter-v1/target/wasm32-unknown-unknown/release/counter-v1.wasm\n")),(0,o.kt)("ol",{start:13},(0,o.kt)("li",{parentName:"ol"},"Check the deploy status given the deploy hash from the previous command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-deploy --node-address [NODE_ADDRESS] [DEPLOY_HASH]\n")),(0,o.kt)("ol",{start:14},(0,o.kt)("li",{parentName:"ol"},"Get the latest state root hash:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address [NODE_ADDRESS]\n")),(0,o.kt)("ol",{start:15},(0,o.kt)("li",{parentName:"ol"},"Open the deploy tab of the account on the Testnet to see the deploy details.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As an alternative to step 15, check your account using the command line:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n--node-address [NODE_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HASH] \\\n--key [PATH_TO_PUBLIC_KEY]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As another alternative, use the account hash for the ",(0,o.kt)("inlineCode",{parentName:"li"},"--key")," argument. To get the account hash, look at the account details on the block explorer, or run this command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client account-address --public-key [PATH_TO_PUBLIC_KEY]\n")),(0,o.kt)("p",null,"Then, query the blockchain using the account hash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n--node-address [NODE_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HASH] \\\n--key [ACCOUNT_HASH]\n")),(0,o.kt)("ol",{start:16},(0,o.kt)("li",{parentName:"ol"},'Now, you can play with the smart contract and increment the value it manages from 0 to 1. First, let\'s make sure the value is 0. Look at the "parsed" value returned in the output. An expected example output is shown below.')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-global-state \\\n--node-address [NODE_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HASH] \\\n--key [ACCOUNT_HASH] \\\n-q "counter/count"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example output:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 8523290678829319485,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.4.6",\n        "block_header": null,\n        "merkle_proof": "[85716 hex chars]",\n        "stored_value": {\n            "CLValue": {\n                "bytes": "01000000",\n                "cl_type": "I32",\n                "parsed": 0\n            }\n        }\n    }\n}\n')),(0,o.kt)("ol",{start:17},(0,o.kt)("li",{parentName:"ol"},"Now increment the count value by calling the entry point ",(0,o.kt)("inlineCode",{parentName:"li"},"counter_inc"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy \\\n--node-address [NODE_ADDRESS] \\\n--chain-name [CHAIN_NAME] \\\n--secret-key [PATH_TO_YOUR_KEY] \\\n--payment-amount 100000000 \\\n--session-name "counter" \\\n--session-entry-point "counter_inc"\n')),(0,o.kt)("ol",{start:18},(0,o.kt)("li",{parentName:"ol"},"Get the NEW ",(0,o.kt)("inlineCode",{parentName:"li"},"state root hash"),", to get the latest snapshot of the blockchain state \u2013 this is EXTREMELY IMPORTANT!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address [NODE_ADDRESS]\n")),(0,o.kt)("ol",{start:19},(0,o.kt)("li",{parentName:"ol"},"Query the state of the network.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-state \\\n--node-address [NODE_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HASH] \\\n--key [ACCOUNT_HASH] \\\n-q "counter/count"\n')),(0,o.kt)("p",null,'If everything went according to plan, the value should be 1. Look at the "parsed" value below.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 8523290678829319485,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.4.6",\n        "block_header": null,\n        "merkle_proof": "[85716 hex chars]",\n        "stored_value": {\n            "CLValue": {\n                "bytes": "01000000",\n                "cl_type": "I32",\n                "parsed": 1\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"You have successfully invoked a contract on the Casper Testnet to increment a value from 0 to 1. Now you have all the infrastructure required to work with more meaningful contracts."))}d.isMDXComponent=!0}}]);