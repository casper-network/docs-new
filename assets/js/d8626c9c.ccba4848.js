"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7787],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,y=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(y,i(i({ref:t},l),{},{components:n})):a.createElement(y,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1931:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={},c="Calling Contracts",d={unversionedId:"dapp-dev-guide/building-dapps/calling-contracts",id:"dapp-dev-guide/building-dapps/calling-contracts",title:"Calling Contracts",description:"Calling a contract on a Casper network requires the use of a deploy. When using the Casper Rust client, JavaScript SDK, or any other client, the intermediary client crafts the deploy for you, using the arguments you provide. This document outlines the various deploy variants through which you can execute Wasm or invoke the execution of on-chain Wasm.",source:"@site/source/docs/casper/dapp-dev-guide/building-dapps/calling-contracts.md",sourceDirName:"dapp-dev-guide/building-dapps",slug:"/dapp-dev-guide/building-dapps/calling-contracts",permalink:"/dapp-dev-guide/building-dapps/calling-contracts",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/building-dapps/calling-contracts.md",tags:[],version:"current",lastUpdatedAt:1675797037,formattedLastUpdatedAt:"2/7/2023",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Sending Deploys to a Casper network using the Rust Client",permalink:"/dapp-dev-guide/building-dapps/sending-deploys"},next:{title:"Understanding Call Stacks",permalink:"/dapp-dev-guide/building-dapps/callstack"}},l={},p=[{value:"Using Deploy Variants",id:"using-deploy-variants",level:2},{value:"ModuleBytes",id:"modulebytes",level:3},{value:"StoredContractByHash",id:"storedcontractbyhash",level:3},{value:"StoredContractByName",id:"storedcontractbyname",level:3},{value:"StoredVersionedContractByHash",id:"storedversionedcontractbyhash",level:3},{value:"StoredVersionedContractByName",id:"storedversionedcontractbyname",level:3},{value:"Transfer",id:"transfer",level:3}],u={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"calling-contracts"},"Calling Contracts"),(0,o.kt)("p",null,"Calling a contract on a Casper network requires the use of a deploy. When using the Casper Rust client, JavaScript SDK, or any other client, the intermediary client crafts the deploy for you, using the arguments you provide. This document outlines the various deploy variants through which you can execute Wasm or invoke the execution of on-chain Wasm."),(0,o.kt)("h2",{id:"using-deploy-variants"},"Using Deploy Variants"),(0,o.kt)("h3",{id:"modulebytes"},"ModuleBytes"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ModuleBytes")," is a deploy variant that allows you to pass opaque Wasm bytes to a network. This variant is used to install a contract on the chain or execute Wasm."),(0,o.kt)("p",null,"However, you can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleBytes")," to deploy session code that calls a contract."),(0,o.kt)("p",null,"Further information on the structure of ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleBytes")," can be found in ",(0,o.kt)("a",{parentName:"p",href:"/dapp-dev-guide/sdkspec/types_chain/#modulebytes"},"here"),"."),(0,o.kt)("h3",{id:"storedcontractbyhash"},"StoredContractByHash"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"StoredContractByHash")," is a deploy variant that invokes on-chain Wasm by specifying the contract hash and an entry point within the contract. When you don't need to send additional Wasm, you can use this deploy variant to invoke on-chain Wasm. It accepts any runtime arguments necessary for the entry point in question."),(0,o.kt)("p",null,"While there is no Wasm associated with this variant, it is still a deploy sent to a node that invokes an installed contract."),(0,o.kt)("p",null,"Further information on the structure of ",(0,o.kt)("inlineCode",{parentName:"p"},"StoredContractByHash")," can be found ",(0,o.kt)("a",{parentName:"p",href:"/dapp-dev-guide/sdkspec/types_chain/#storedcontractbyhash"},"here"),"."),(0,o.kt)("h3",{id:"storedcontractbyname"},"StoredContractByName"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"StoredContractByName")," is similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"StoredContractByHash"),", with the main difference being the reference used to invoke on-chain Wasm. Where ",(0,o.kt)("inlineCode",{parentName:"p"},"StoredContractByHash")," requires the contract hash, ",(0,o.kt)("inlineCode",{parentName:"p"},"StoredContractByName")," uses a string stored as a ",(0,o.kt)("a",{parentName:"p",href:"dapp-dev-guide/sdkspec/types_chain/#namedkey"},(0,o.kt)("inlineCode",{parentName:"a"},"NamedKey"))," in the caller's account."),(0,o.kt)("p",null,"This allows the caller to more easily reference a contract stored on-chain for later use but requires pre-planning to store the name within their account's ",(0,o.kt)("inlineCode",{parentName:"p"},"NamedKeys"),"."),(0,o.kt)("h3",{id:"storedversionedcontractbyhash"},"StoredVersionedContractByHash"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"StoredVersionedContractByHash")," is a deploy variant that invokes on-chain Wasm based on the contract package hash rather than the contract hash directly. This variant allows the caller to specify a version within the contract package, but if a specific version is not supplied, it will use the most recent version of the contract within the package."),(0,o.kt)("p",null,"This makes ",(0,o.kt)("inlineCode",{parentName:"p"},"StoredVersionedContractByHash")," more stable than ",(0,o.kt)("inlineCode",{parentName:"p"},"StoredContractByHash"),", as any caller will be directed to the most recent version of the internal contract without needing to specify the hash of that specific contract. Callers that regularly interact with a contract that they know will be upgraded can use this variant to ensure they are always using the most up-to-date version."),(0,o.kt)("p",null,"DApp developers that use contracts developed by other parties can use ",(0,o.kt)("inlineCode",{parentName:"p"},"StoredVersionedContractByHash")," to avoid interruptions from contract version changes."),(0,o.kt)("p",null,"Further information on the structure of ",(0,o.kt)("inlineCode",{parentName:"p"},"StoredVersionedContractByHash")," can be found ",(0,o.kt)("a",{parentName:"p",href:"/dapp-dev-guide/sdkspec/types_chain/#storedversioncontractbyhash"},"here"),"."),(0,o.kt)("h3",{id:"storedversionedcontractbyname"},"StoredVersionedContractByName"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"StoredVersionedContractByName")," combines the functionality of ",(0,o.kt)("inlineCode",{parentName:"p"},"StoredContractByName")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"StoredVersionedContractByHash"),". It allows a developer to store a reference string as a ",(0,o.kt)("inlineCode",{parentName:"p"},"NamedKey")," within their account context that references a contract by its contract package hash."),(0,o.kt)("p",null,"Further information on the structure of ",(0,o.kt)("inlineCode",{parentName:"p"},"StoredVersionedContractByName")," can be found ",(0,o.kt)("a",{parentName:"p",href:"/dapp-dev-guide/sdkspec/types_chain/#storedversioncontractbyname"},"here"),"."),(0,o.kt)("h3",{id:"transfer"},"Transfer"),(0,o.kt)("p",null,"Native ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer"),"s are Wasmless transfers on a Casper network. This is how most transfers take place, albeit through a system like the Rust client that crafts the associated deploy and sends it to the network."),(0,o.kt)("p",null,"Further information on the structure of a native ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer")," can be found ",(0,o.kt)("a",{parentName:"p",href:"/dapp-dev-guide/sdkspec/types_chain/#transfer"},"here"),"."))}h.isMDXComponent=!0}}]);