"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4809],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9503:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],s={},l="Global State",c={unversionedId:"concepts/global-state",id:"concepts/global-state",title:"Global State",description:"global-state-head}",source:"@site/source/docs/casper/concepts/global-state.md",sourceDirName:"concepts",slug:"/concepts/global-state",permalink:"/concepts/global-state",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/concepts/global-state.md",tags:[],version:"current",lastUpdatedAt:1681294879,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{},sidebar:"concepts",previous:{title:"Deploys and the Deploy Lifecycle",permalink:"/deploy-and-deploy-lifecycle"},next:{title:"Smart Contracts",permalink:"/concepts/smart-contracts"}},u={},p=[{value:"Introduction",id:"global-state-intro",level:2},{value:"Merkle Trie Structure",id:"global-state-trie",level:2}],d={toc:p},h="wrapper";function f(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)(h,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"global-state-head"},"Global State"),(0,o.kt)("h2",{id:"global-state-intro"},"Introduction"),(0,o.kt)("p",null,"The storage layer for the Casper blockchain is called ",(0,o.kt)("em",{parentName:"p"},"global state")," and has the semantics of a key-value store with additional permissions logic. All accounts, contracts, and any associated data they have are stored in global state. Not all users can access all data, so permissions need to be set accordingly."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Refer to ",(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#serialization-standard-state-keys"},"Keys and Permissions")," for further information on keys.")),(0,o.kt)("p",null,"Each finalized block causes changes to the network's global state because of the execution of the deploys it contains. For validators to efficiently judge the correctness of these changes, information about the new state needs to be communicated succinctly. Moreover, the network must communicate portions of global state to users while allowing them to verify the correctness of the parts they receive. For these reasons, the key-value store is implemented as a ",(0,o.kt)("a",{parentName:"p",href:"#global-state-trie"},"Merkle trie"),"."),(0,o.kt)("h2",{id:"global-state-trie"},"Merkle Trie Structure"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Global State",src:a(7388).Z,width:"1111",height:"1021"})),(0,o.kt)("p",null,"At a high level, a Merkle trie is a key-value store data structure that can be shared piece-wise in a verifiable way (via a construction called a Merkle proof). Each node is labeled by the hash of its data. Leaf nodes are labeled with the hash of their data. Non-leaf nodes are labeled with the hash of the labels of their child nodes."),(0,o.kt)("p",null,"Casper's implementation of the trie has radix of 256, meaning each branch node can have up to 256 children. A path through the tree can be an array of bytes, and serialization directly links a key with a path through the tree as its associated value."),(0,o.kt)("p",null,"Formally, a trie node is one of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a leaf, which includes a key and a value"),(0,o.kt)("li",{parentName:"ul"},"a branch, which has up to 256 ",(0,o.kt)("inlineCode",{parentName:"li"},"blake2b256")," hashes, pointing to up to 256 other nodes in the trie (recall each node is labeled by its hash)"),(0,o.kt)("li",{parentName:"ul"},"an extension node, which includes a byte array (called the affix) and a ",(0,o.kt)("inlineCode",{parentName:"li"},"blake2b256")," hash pointing to another node in the trie")),(0,o.kt)("p",null,"The purpose of the extension node is to allow path compression. Consider an example where all keys use the same first four bytes for values in the trie. In this case, it would be inefficient to traverse through four branch nodes where there is only one choice; instead, the root node of the trie could be an extension node with an affix equal to those first four bytes and a pointer to the first non-trivial branch node."),(0,o.kt)("p",null,"The Rust implementation of Casper's trie can be found on GitHub:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node/blob/c8db6a737c41dcdfb86ed6bed16d24284cf5c3b9/execution_engine/src/storage/trie/mod.rs#L340"},"Definition of the trie data structure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node/blob/c8db6a737c41dcdfb86ed6bed16d24284cf5c3b9/execution_engine/src/storage/trie_store/operations/mod.rs#L44"},"Reading from the trie")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node/blob/c8db6a737c41dcdfb86ed6bed16d24284cf5c3b9/execution_engine/src/storage/trie_store/operations/mod.rs#L845"},"Writing to the trie"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Conceptually, each block has its trie because the state changes based on the deploys it contains. For this reason, Casper's implementation has a notion of a ",(0,o.kt)("inlineCode",{parentName:"p"},"TrieStore"),", which allows us to look up the root node for each trie.")))}f.isMDXComponent=!0},7388:function(e,t,a){t.Z=a.p+"assets/images/global-state-54ea70dd3a537dc33f8dec6cc67fc5b7.png"}}]);