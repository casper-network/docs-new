"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5282],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=c(r),h=o,d=k["".concat(s,".").concat(h)]||k[h]||u[h]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},9882:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],l={},s="Block Explorers on Casper Network",c={unversionedId:"workflow/block-explorer",id:"workflow/block-explorer",title:"Block Explorers on Casper Network",description:"The Casper blockchain is available as the Mainnet and Testnet. The Mainnet is the Casper blockchain that utilizes Casper tokens (CSPR). The Testnet is an alternate Casper blockchain used to test applications without spending CSPR tokens on the Casper Mainnet. You can use block explorers such as cspr.live and Casper.info to explore the Casper blockchain.",source:"@site/source/docs/casper/workflow/block-explorer.md",sourceDirName:"workflow",slug:"/workflow/block-explorer",permalink:"/workflow/block-explorer",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/block-explorer.md",tags:[],version:"current",lastUpdatedAt:1675422820,formattedLastUpdatedAt:"2/3/2023",frontMatter:{},sidebar:"workflow",previous:{title:"Overview",permalink:"/workflow"},next:{title:"Delegating Tokens with a Block Explorer",permalink:"/workflow/delegate-ui"}},p={},u=[{value:"What is a Block Explorer",id:"what-is-a-block-explorer",level:2},{value:"Using a Block Explorer",id:"using-a-block-explorer",level:2}],k={toc:u};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"block-explorers-on-casper-network"},"Block Explorers on Casper Network"),(0,a.kt)("p",null,"The Casper blockchain is available as the Mainnet and Testnet. The Mainnet is the Casper blockchain that utilizes Casper tokens (CSPR). The Testnet is an alternate Casper blockchain used to test applications without spending CSPR tokens on the Casper Mainnet. You can use block explorers such as ",(0,a.kt)("a",{parentName:"p",href:"https://cspr.live/"},"cspr.live")," and ",(0,a.kt)("a",{parentName:"p",href:"https://casper-trench.vercel.app/"},"Casper.info")," to explore the Casper blockchain."),(0,a.kt)("h2",{id:"what-is-a-block-explorer"},"What is a Block Explorer"),(0,a.kt)("p",null,"A block explorer is a search engine for the blockchain. It allows you to find information such as the transactions executed on the blockchain, the transaction statistics, the validators on the network and similar blockchain activity. A block explorer gives you information on your wallet and all the transactions carried out using the wallet. It can be used to find a specific transaction or view the transaction history of the blockchain."),(0,a.kt)("h2",{id:"using-a-block-explorer"},"Using a Block Explorer"),(0,a.kt)("p",null,"You can use a block explorer on the Casper Network to view the blockchain statistics, list of validators, list of blocks executed on the blockchain, list of deploys/transactions, and list of nodes operating on the blockchain."),(0,a.kt)("p",null,"You can also transfer CSPR tokens, delegate stake or undelegate stake using a block explorer. To perform these actions, you must sign in to your CSPR wallet using the Casper Signer. The following topics link you to detailed instructions on using a block explorer to access and work with your CSPR tokens:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Learn how to access your CSPR wallet using the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.cspr.community/docs/user-guides/SignerGuide.html"},"Signer guide")),(0,a.kt)("li",{parentName:"ul"},"Understand the process of transferring CSPR tokens from ",(0,a.kt)("a",{parentName:"li",href:"/workflow/token-transfer"},"Transferring Tokens using a Block Explorer")),(0,a.kt)("li",{parentName:"ul"},"Explore the concepts and the process of staking, delegating and undelegating CSPR tokens using the ",(0,a.kt)("a",{parentName:"li",href:"/workflow/delegate-ui"},"Delegation")," and ",(0,a.kt)("a",{parentName:"li",href:"/workflow/undelegate-ui"},"Undelegation")," pages")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The guides listed above use the ",(0,a.kt)("a",{parentName:"p",href:"https://cspr.live/"},"cspr.live")," block explorer as an example."))))}h.isMDXComponent=!0}}]);