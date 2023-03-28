"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1714],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9305:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),c=["components"],i={},s="Smart Contracts",l={unversionedId:"concepts/smart-contracts",id:"concepts/smart-contracts",title:"Smart Contracts",description:"General/Intro",source:"@site/source/docs/casper/concepts/smart-contracts.md",sourceDirName:"concepts",slug:"/concepts/smart-contracts",permalink:"/concepts/smart-contracts",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/concepts/smart-contracts.md",tags:[],version:"current",lastUpdatedAt:1680010537,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{},sidebar:"concepts",previous:{title:"Global State",permalink:"/concepts/global-state"},next:{title:"Call Stacks",permalink:"/concepts/callstack"}},p={},u=[{value:"General/Intro",id:"generalintro",level:2},{value:"Smart Contracts in Casper",id:"smart-contracts-in-casper",level:2},{value:"Further Reading",id:"further-reading",level:4}],m={toc:u},d="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"smart-contracts"},"Smart Contracts"),(0,o.kt)("h2",{id:"generalintro"},"General/Intro"),(0,o.kt)("p",null,"A smart contract is a self-executing program that automates the actions required in an agreement or contract. Once completed, the transactions are trackable and irreversible. Smart contracts permit trusted transactions and agreements to be carried out among disparate, anonymous parties without the need for a central authority, legal system, or external enforcement mechanism."),(0,o.kt)("h2",{id:"smart-contracts-in-casper"},"Smart Contracts in Casper"),(0,o.kt)("p",null,"Smart Contracts in Casper are implemented in the Rust programming language, and compiled to ",(0,o.kt)("a",{parentName:"p",href:"/concepts/glossary/W#webassembly"},"WASM")," which is then installed and executed on-chain. You can find a guide to writing a simple smart contract ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/simple-contract"},"here"),". Smart Contracts are installed to the chain as part of a ",(0,o.kt)("a",{parentName:"p",href:"/concepts/glossary/D#deploy"},"Deploy"),"."),(0,o.kt)("h4",{id:"further-reading"},"Further Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/simple-contract"},"Writing Contracts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/dapps/sending-deploys"},"Sending a Deploy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/cli/installing-contracts"},"Installing Smart Contracts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/calling-contracts"},"Calling Smart Contracts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/cli/calling-contracts"},"Calling Smart Contracts using the Casper Client"))))}f.isMDXComponent=!0}}]);