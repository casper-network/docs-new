"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9753],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(d,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6979:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={},d="Joining a Running Network",l={unversionedId:"operators/setup/joining",id:"operators/setup/joining",title:"Joining a Running Network",description:"Each Casper network is permissionless, enabling new validators to join the network and provide additional security to the system. This page outlines the sequence of recommended steps to spin up a validating node and join an existing network.",source:"@site/source/docs/casper/operators/setup/joining.md",sourceDirName:"operators/setup",slug:"/operators/setup/joining",permalink:"/operators/setup/joining",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/operators/setup/joining.md",tags:[],version:"current",lastUpdatedAt:1681294879,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{},sidebar:"operators",previous:{title:"Upgrading the Node",permalink:"/operators/setup/upgrade"},next:{title:"Bonding as a Validator",permalink:"/operators/becoming-a-validator/bonding"}},p={},u=[{value:"Step 1: Provision Hardware",id:"step-1-provision-hardware",level:2},{value:"Step 2: Set Up the Node",id:"step-2-set-up-the-node",level:2},{value:"Step 3: Build the Required Contracts",id:"step-3-build-contracts",level:2},{value:"Step 4: Create and Fund Keys for Bonding",id:"step-4-create--fund-keys-for-bonding",level:2},{value:"Step 5: Update the Trusted Hash",id:"step-5-update-the-trusted-hash",level:2},{value:"Step 6: Start the Node",id:"step-6-start-the-node",level:2},{value:"Step 7: Confirm the Node is Synchronized",id:"step-7-confirm-the-node-is-synchronized",level:2},{value:"Step 8: Send the Bonding Request",id:"step-7-send-the-bonding-request",level:2}],c={toc:u},h="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"joining-a-running-network"},"Joining a Running Network"),(0,o.kt)("p",null,"Each Casper network is permissionless, enabling new validators to join the network and provide additional security to the system. This page outlines the sequence of recommended steps to spin up a validating node and join an existing network."),(0,o.kt)("h2",{id:"step-1-provision-hardware"},"Step 1: Provision Hardware"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/hardware"},"Hardware Specifications")," section and provision your node hardware."),(0,o.kt)("h2",{id:"step-2-set-up-the-node"},"Step 2: Set Up the Node"),(0,o.kt)("p",null,"Follow the instructions on the ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/install-node"},"Node Setup")," page."),(0,o.kt)("h2",{id:"step-3-build-contracts"},"Step 3: Build the Required Contracts"),(0,o.kt)("p",null,"Use the commands below to build all the necessary contracts for bonding, retrieving rewards, and unbonding."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clone the casper-node repository.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/casper-network/casper-node\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Use the following commands to build the contracts in release mode. Make sure you have ",(0,o.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/getting-started#installing-rust"},"installed Rust"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd casper-node\nmake setup-rs\nmake build-client-contracts\n")),(0,o.kt)("p",null,"These commands will build all the necessary Wasm contracts for operating as a validator:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"activate_bid.wasm")," - Reactivates an ejected validator"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"add_bid.wasm")," - Enables bonding for validator stake"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"delegate.wasm")," - Delegates stake"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"undelegate.wasm")," - Undelegates stake"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"withdraw_bid.wasm")," - Enables unbonding for validator stake")),(0,o.kt)("h2",{id:"step-4-create--fund-keys-for-bonding"},"Step 4: Create and Fund Keys for Bonding"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/basic-node-configuration#create-fund-keys"},"Node Setup")," instructions if you have not generated and funded your validator keys."),(0,o.kt)("h2",{id:"step-5-update-the-trusted-hash"},"Step 5: Update the Trusted Hash"),(0,o.kt)("p",null,"The node's ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," needs to be updated with a recent trusted hash."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/basic-node-configuration#trusted-hash-for-synchronizing"},"Trusted Hash for Synchronizing")," instructions if you have not set up a trusted hash during node installation."),(0,o.kt)("h2",{id:"step-6-start-the-node"},"Step 6: Start the Node"),(0,o.kt)("p",null,"Start the node with the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node-launcher"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start casper-node-launcher\n")),(0,o.kt)("p",null,"The above Debian package installs a casper-node service for systemd."),(0,o.kt)("p",null,"For more information, visit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/wiki#node-operators"},"GitHub"),"."),(0,o.kt)("h2",{id:"step-7-confirm-the-node-is-synchronized"},"Step 7: Confirm the Node is Synchronized"),(0,o.kt)("p",null,"While the node is synchronizing, the ",(0,o.kt)("inlineCode",{parentName:"p"},"/status")," endpoint is available. You will be able to compare this to another node's status endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"era_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," to determine if you are caught up. You will not be able to perform any ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-client")," calls to your ",(0,o.kt)("inlineCode",{parentName:"p"},"7777")," RPC port until your node is fully caught up."),(0,o.kt)("p",null,"Towards the end of the following output, notice the ",(0,o.kt)("inlineCode",{parentName:"p"},"era_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," that you can use to determine if your node has completed synchronizing."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Sample output of the ",(0,o.kt)("code",null,"/status")," endpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "api_version": "1.4.3",\n  "chainspec_name": "casper-test",\n  "starting_state_root_hash": "e2218b6bdb8137a178f242e9de24ef5db06af7925e8e4c65fa82d41df38f4576",\n  "peers": [\n    {\n      "node_id": "tls:0097..b253",\n      "address": "18.163.249.168:35000"\n    },\n    ...\n    ...\n    ...\n    {\n      "node_id": "tls:ff95..c014",\n      "address": "93.186.201.14:35000"\n    }\n  ],\n  "last_added_block_info": {\n    "hash": "8280de05cb34071f276fbe7c69a07cb325ddd373f685877911238b614bdcc5b1",\n    "timestamp": "2022-01-04T15:33:08.224Z",\n    "era_id": 3240,\n    "height": 430162,\n    "state_root_hash": "ec4ff5c4d0a9021984b56e2b6de4a57188101c24e09b765c3fee740353690076",\n    "creator": "01ace6578907bfe6eba3a618e863bbe7274284c88e405e2857be80dd094726a223"\n  },\n  "our_public_signing_key": "01cb41ee07d1827e243588711d45040fe46402bf3901fb550abfd08d1341700270",\n  "round_length": null,\n  "next_upgrade": null,\n  "build_version": "1.4.3-a44bed1fd-casper-mainnet",\n  "uptime": "25days 1h 48m 22s 47ms"\n}\n'))),(0,o.kt)("h2",{id:"step-7-send-the-bonding-request"},"Step 8: Send the Bonding Request"),(0,o.kt)("p",null,"You can submit a ",(0,o.kt)("a",{parentName:"p",href:"/operators/becoming-a-validator/bonding"},"bonding request")," to change your synchronized node to a validating node."),(0,o.kt)("p",null,"The bonding request must be sent after the node has synchronized the protocol state and linear blockchain to avoid being ejected for liveness failures."))}m.isMDXComponent=!0}}]);