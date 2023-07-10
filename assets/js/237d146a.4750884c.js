"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8382],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(h,s(s({ref:t},d),{},{components:n})):o.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5779:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),s=n(4996),i=["components"],c={},l="Contracts and Session Code",d={unversionedId:"concepts/session-code",id:"concepts/session-code",title:"Contracts and Session Code",description:"What is Session Code?",source:"@site/source/docs/casper/concepts/session-code.md",sourceDirName:"concepts",slug:"/concepts/session-code",permalink:"/concepts/session-code",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/concepts/session-code.md",tags:[],version:"current",lastUpdatedAt:1688996346,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{},sidebar:"concepts",previous:{title:"Call Stacks",permalink:"/concepts/callstack"},next:{title:"Dictionaries",permalink:"/concepts/dictionaries"}},p={},u=[{value:"What is Session Code?",id:"what-is-session-code",level:2},{value:"Comparing Session and Contract Code",id:"comparing-session-and-contract",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],m={toc:u},h="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)(h,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contracts-and-session-code"},"Contracts and Session Code"),(0,a.kt)("h2",{id:"what-is-session-code"},"What is Session Code?"),(0,a.kt)("p",null,"Session code is the simplest logic one can execute on a Casper network. It is essential because it is often used to trigger contract logic stored on the chain. Session code requires only one entry point, the ",(0,a.kt)("inlineCode",{parentName:"p"},"call")," function, and it runs within the context of the account executing the session code. As a result, the session code runs with the account's permissions, such as having access to the account's main purse. For example, the session code could transfer tokens from the account's main purse."),(0,a.kt)("p",null,"The best use of session code is when the situation calls for ",(0,a.kt)("a",{parentName:"p",href:"/concepts/glossary/S#stateless"},"stateless")," execution, and very little or no internal data needs to be tracked. Session code is required when interacting and accepting values returned across the Wasm boundary."),(0,a.kt)("h2",{id:"comparing-session-and-contract"},"Comparing Session and Contract Code"),(0,a.kt)("p",null,"The following table summarizes the key differences between session code and contract code on a Casper network."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Session Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Contract Code"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Session code always executes in the context of the account that signed the deploy containing the session code."),(0,a.kt)("td",{parentName:"tr",align:null},"A smart contract, which is stored on-chain logic, executes within its own context.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Session code has only one entry point, ",(0,a.kt)("inlineCode",{parentName:"td"},"call"),", which can be used to interact with the session code."),(0,a.kt)("td",{parentName:"tr",align:null},"A smart contract can have multiple entry points that can be invoked.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("inlineCode",{parentName:"td"},"call")," entry point initiates any action the session code takes."),(0,a.kt)("td",{parentName:"tr",align:null},"Any action undertaken by a contract must initiate through an outside call, usually via session code.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"When a ",(0,a.kt)("inlineCode",{parentName:"td"},"put_key")," call is made within the body of the session code, the key is added to the account's named keys."),(0,a.kt)("td",{parentName:"tr",align:null},"When a ",(0,a.kt)("inlineCode",{parentName:"td"},"put_key")," call is made within the smart contract's context, the contract's record is modified to have a new named_key entry.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"For more information on how to write session code, see ",(0,a.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/writing-session-code"},"Writing Session Code"),"."),(0,a.kt)("td",{parentName:"tr",align:null},"For more information on writing contracts, see ",(0,a.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/simple-contract"},"Writing a Basic Smart Contract in Rust"),".")))),(0,a.kt)("p",null,"The following image depicts the comparison presented in the table."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,s.Z)("/image/dApp/contract-vs-session.png"),alt:"Comparing Session and Contract Code"})),(0,a.kt)("h2",{id:"whats-next"},"What's Next?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Learn to ",(0,a.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/writing-session-code"},"write session code")),(0,a.kt)("li",{parentName:"ul"},"Learn to ",(0,a.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/testing-session-code"},"test session code"))))}f.isMDXComponent=!0}}]);