"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7657],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5524:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),s=["components"],i={id:"welcome",title:"Welcome",slug:"/about",tags:["Must read","Legal","Introduction","CasperLabs","CSPR"]},c=void 0,l={unversionedId:"welcome",id:"welcome",title:"Welcome",description:"What is Casper?",source:"@site/source/docs/casper/about.md",sourceDirName:".",slug:"/about",permalink:"/about",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/about.md",tags:[{label:"Must read",permalink:"/tags/must-read"},{label:"Legal",permalink:"/tags/legal"},{label:"Introduction",permalink:"/tags/introduction"},{label:"CasperLabs",permalink:"/tags/casper-labs"},{label:"CSPR",permalink:"/tags/cspr"}],version:"current",lastUpdatedAt:1679994717,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{id:"welcome",title:"Welcome",slug:"/about",tags:["Must read","Legal","Introduction","CasperLabs","CSPR"]}},p={},u=[{value:"What is Casper?",id:"what-is-casper",level:2},{value:"How does Casper work?",id:"how-does-casper-work",level:2}],d={toc:u},f="wrapper";function h(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-casper"},"What is Casper?"),(0,a.kt)("p",null,"Casper is a new ",(0,a.kt)("a",{parentName:"p",href:"/concepts/glossary/T#turing-complete-blockchain"},"Turing-complete")," smart-contracting platform, backed by a Proof-of-Stake (PoS) consensus algorithm and WebAssembly (Wasm). The network is a ",(0,a.kt)("a",{parentName:"p",href:"/concepts/glossary/P#permissionless"},"permissionless"),", decentralized, public blockchain."),(0,a.kt)("p",null,"The network's consensus protocol is called ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2101.02159.pdf"},"Highway"),", and it has several benefits over classic Byzantine Fault Tolerant (BFT) consensus protocols. First, Highway allows networks to reach higher thresholds of ",(0,a.kt)("em",{parentName:"p"},"finality"),", meaning that more blocks are finalized, and validators agree to add them to the blockchain. Second, the protocol achieves flexibility by expressing block finality in ways not possible in BFT models. This protocol is built on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cbc-casper/cbc-casper-paper"},"correct-by-construction (CBC) Casper")," research."),(0,a.kt)("p",null,"Additionally, the Casper Network is optimized for enterprise and developer adoption. While leveraging blockchain technology, the network seeks to accelerate business operations via unique features like predictable network fees, upgradeable contracts, on-chain governance, privacy flexibility, and developer-friendly languages. Casper's ",(0,a.kt)("a",{parentName:"p",href:"/resources/build-on-casper/introduction"},"core features and strengths")," enable developers and enterprises to reap the benefits of blockchain technology."),(0,a.kt)("p",null,"Casper also solves the scalability trilemma. Notably, the network is optimized for security, decentralization, and high throughput. All this is achieved while evolving to provide leading solutions for open-source projects and enterprises."),(0,a.kt)("h2",{id:"how-does-casper-work"},"How does Casper work?"),(0,a.kt)("p",null,"Casper relies on a group of validators to verify transactions and uphold the network. Unlike Proof-of-Work networks, which need to centralize validators for economies of scale, Casper allows for the geographical decentralization of validators. Casper validators verify transactions based on staked tokens and receive CSPR rewards for participating in the PoS consensus mechanism. CSPR is the native token on the Casper Network."))}h.isMDXComponent=!0}}]);