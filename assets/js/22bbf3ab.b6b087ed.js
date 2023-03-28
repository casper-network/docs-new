"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4809],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,f=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9503:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),i=["components"],s={},l="Global State",c={unversionedId:"concepts/global-state",id:"concepts/global-state",title:"Global State",description:"global-state-head}",source:"@site/source/docs/casper/concepts/global-state.md",sourceDirName:"concepts",slug:"/concepts/global-state",permalink:"/concepts/global-state",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/concepts/global-state.md",tags:[],version:"current",lastUpdatedAt:1680010537,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{},sidebar:"concepts",previous:{title:"Deploy & Deploy Lifecycle",permalink:"/deploy-and-deploy-lifecycle"},next:{title:"Smart Contracts",permalink:"/concepts/smart-contracts"}},p={},u=[{value:"Introduction",id:"global-state-intro",level:2}],h={toc:u},d="wrapper";function f(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)(d,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"global-state-head"},"Global State"),(0,r.kt)("h2",{id:"global-state-intro"},"Introduction"),(0,r.kt)("p",null,'The "global state" is the storage layer for the blockchain. All accounts, contracts, and any associated data they have are stored in the global state. Our global state has the semantics of a key-value store (with additional permissions logic since not all users can access all values in the same way).'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Refer to ",(0,r.kt)("a",{parentName:"mdxAdmonitionTitle",href:"/concepts/serialization-standard#serialization-standard-state-keys"},"Keys and Permissions")," for further information on keys. :::"),(0,r.kt)("p",{parentName:"admonition"},"Each block causes changes to this global state because of the execution of the deploys it contains. For validators to efficiently judge the correctness of these changes, information about the new state needs to be communicated succinctly. Moreover, we need to communicate pieces of the global state to users while allowing them to verify the correctness of the parts they receive. For these reasons, the key-value store is implemented as a ",(0,r.kt)("a",{parentName:"p",href:"#global-state-trie"},"Merkle trie"),"."),(0,r.kt)("h2",{parentName:"admonition",id:"global-state-trie"},"Merkle trie structure"),(0,r.kt)("p",{parentName:"admonition"},"At a high level, a Merkle trie is a key-value store data structure that can be shared piece-wise in a verifiable way (via a construction called a Merkle proof). Each node is labeled by the hash of its data. Leaf nodes are labeled with the hash of their data. Non-leaf nodes are labeled with the hash of the labels of their child nodes."),(0,r.kt)("p",{parentName:"admonition"},"Our implementation of the trie has radix of 256, meaning each branch node can have up to 256 children. A path through the tree can be an array of bytes, and serialization directly links a key with a path through the tree as its associated value."),(0,r.kt)("p",{parentName:"admonition"},"Formally, a trie node is one of the following:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"a leaf, which includes a key and a value"),(0,r.kt)("li",{parentName:"ul"},"a branch, which has up to 256 ",(0,r.kt)("inlineCode",{parentName:"li"},"blake2b256")," hashes, pointing to up to 256 other nodes in the trie (recall each node is labeled by its hash)"),(0,r.kt)("li",{parentName:"ul"},"an extension node, which includes a byte array (called the affix) and a ",(0,r.kt)("inlineCode",{parentName:"li"},"blake2b256")," hash pointing to another node in the trie")),(0,r.kt)("p",{parentName:"admonition"},"The purpose of the extension node is to allow path compression. Consider an example where all keys use the same first four bytes for values in the trie. In this case, it would be inefficient to traverse through four branch nodes where there is only one choice; instead, the root node of the trie could be an extension node with affix equal to those first four bytes and pointer to the first non-trivial branch node."),(0,r.kt)("p",{parentName:"admonition"},"The Rust implementation of Casper's trie can be found on GitHub:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node/blob/v1.4.13/execution_engine/src/storage/trie/mod.rs#L340"},"Definition of the trie data structure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node/blob/v1.4.13/execution_engine/src/storage/trie_store/operations/mod.rs#L44"},"Reading from the trie")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node/blob/dev/execution_engine/src/storage/trie_store/operations/mod.rs#L845"},"Writing to the trie")))),(0,r.kt)("p",null,"Conceptually, each block has its trie because the state changes based on the deploys it contains. For this reason, Casper's implementation has a notion of a ",(0,r.kt)("inlineCode",{parentName:"p"},"TrieStore"),", which allows us to look up the root node for each trie."),(0,r.kt)("p",null,":::"))}f.isMDXComponent=!0}}]);