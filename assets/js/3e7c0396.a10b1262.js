"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1714],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),l=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(i.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,c=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||c;return r?n.createElement(f,o(o({ref:e},p),{},{components:r})):n.createElement(f,o({ref:e},p))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var c=r.length,o=new Array(c);o[0]=d;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[u]="string"==typeof t?t:a,o[1]=s;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9305:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(3117),a=r(102),c=(r(7294),r(3905)),o=["components"],s={},i="Smart Contracts",l={unversionedId:"concepts/smart-contracts",id:"concepts/smart-contracts",title:"Smart Contracts",description:"Smart Contracts in General",source:"@site/source/docs/casper/concepts/smart-contracts.md",sourceDirName:"concepts",slug:"/concepts/smart-contracts",permalink:"/concepts/smart-contracts",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/concepts/smart-contracts.md",tags:[],version:"current",lastUpdatedAt:1679992279,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{},sidebar:"concepts",previous:{title:"Global State",permalink:"/concepts/global-state"},next:{title:"Understanding Call Stacks",permalink:"/concepts/callstack"}},p={},u=[{value:"Smart Contracts in General",id:"smart-contracts-in-general",level:2},{value:"Casper Smart Contracts",id:"casper-smart-contracts",level:2},{value:"Further Reading",id:"further-reading",level:3}],m={toc:u},d="wrapper";function f(t){var e=t.components,r=(0,a.Z)(t,o);return(0,c.kt)(d,(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"smart-contracts"},"Smart Contracts"),(0,c.kt)("h2",{id:"smart-contracts-in-general"},"Smart Contracts in General"),(0,c.kt)("p",null,"A smart contract is a self-executing program that automates the actions required in a digital agreement. Once completed, the transactions are trackable and irreversible. Smart contracts permit trusted transactions and agreements among disparate, anonymous parties without the need for a central authority, legal system, or external enforcement mechanism."),(0,c.kt)("h2",{id:"casper-smart-contracts"},"Casper Smart Contracts"),(0,c.kt)("p",null,"Casper smart contracts can be implemented in any programming language that compiles to ",(0,c.kt)("a",{parentName:"p",href:"/concepts/glossary/W#webassembly"},"Wasm"),", which can be installed and executed on-chain using ",(0,c.kt)("a",{parentName:"p",href:"/concepts/glossary/D#deploy"},"Deploys"),". Most documentation examples and the Casper system contracts are written in Rust. You can find a guide to writing a simple, smart contract in Rust ",(0,c.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/simple-contract"},"here"),"."),(0,c.kt)("h3",{id:"further-reading"},"Further Reading"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/simple-contract"},"Writing Contracts")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/developers/dapps/sending-deploys"},"Sending a Deploy")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/developers/cli/installing-contracts"},"Installing Smart Contracts")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/calling-contracts"},"Calling Smart Contracts")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/developers/cli/calling-contracts"},"Calling Smart Contracts using the Casper Client"))))}f.isMDXComponent=!0}}]);