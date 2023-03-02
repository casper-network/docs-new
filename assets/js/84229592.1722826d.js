"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4416],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=r,m=h["".concat(i,".").concat(u)]||h[u]||d[u]||o;return n?a.createElement(m,c(c({ref:t},p),{},{components:n})):a.createElement(m,c({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8441:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return h}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),c=n(4996),s=["components"],i={},l="Understanding Call Stacks",p={unversionedId:"concepts/callstack",id:"concepts/callstack",title:"Understanding Call Stacks",description:"Users wishing to interact with a Casper network must do so through sending a Deploy. All Deploys consist of session code run in the context of the user account that sent the Deploy. The session code may install contract code to global state, or interact with previously installed contract code.",source:"@site/source/docs/casper/concepts/callstack.md",sourceDirName:"concepts",slug:"/concepts/callstack",permalink:"/concepts/callstack",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/concepts/callstack.md",tags:[],version:"current",lastUpdatedAt:1677608313,formattedLastUpdatedAt:"2/28/2023",frontMatter:{},sidebar:"concepts",previous:{title:"Understanding Hash Types",permalink:"/concepts/understanding-hash-types"},next:{title:"Contracts and Session Code",permalink:"/concepts/session-code"}},d={},h=[{value:"The Caller",id:"the-caller",level:2},{value:"The Immediate Caller",id:"the-immediate-caller",level:2},{value:"Limitations",id:"limitations",level:2}],u={toc:h};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"understanding-call-stacks"},"Understanding Call Stacks"),(0,o.kt)("p",null,"Users wishing to interact with a Casper network must do so through ",(0,o.kt)("a",{parentName:"p",href:"/developers/dapps/sending-deploys"},"sending a Deploy"),". All Deploys consist of ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/writing-session-code"},"session code")," run in the context of the user account that sent the Deploy. The session code may ",(0,o.kt)("a",{parentName:"p",href:"/developers/cli/installing-contracts"},"install contract code to global state"),", or interact with previously ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/calling-contracts"},"installed contract code"),"."),(0,o.kt)("p",null,"When the session code within a Deploy interacts with one or more contracts, this is the beginning of a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/system/enum.CallStackElement.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Call Stack")),". A call stack is the chronological order in which contracts call other contracts, initiated by an instance of session code."),(0,o.kt)("h2",{id:"the-caller"},"The Caller"),(0,o.kt)("p",null,"In every instance of a call stack, the originating ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/system/mint/trait.RuntimeProvider.html#tymethod.get_caller"},"caller")," is the session code within the account's context that began the interaction. Contract code cannot spontaneously act without session code to activate it. As such, the session code represents the ",(0,o.kt)("em",{parentName:"p"},"zeroth")," entity in each call stack."),(0,o.kt)("h2",{id:"the-immediate-caller"},"The Immediate Caller"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/1.5.0/casper_types/system/mint/trait.RuntimeProvider.html#tymethod.get_immediate_caller"},"immediate caller")," is the caller that interacted directly with the contract in question."),(0,o.kt)("p",null,"If session code calls a contract, which in turn calls another contract, then the session code would represent the ",(0,o.kt)("em",{parentName:"p"},"zeroth")," entity in the stack, the contract called by the initiating session code would be the ",(0,o.kt)("em",{parentName:"p"},"first")," and the contract called by the first contract would be the ",(0,o.kt)("em",{parentName:"p"},"second"),"."),(0,o.kt)("p",null,"In this example, the first contract would be the ",(0,o.kt)("inlineCode",{parentName:"p"},"immediate caller")," of the second contract. The session code would remain the ",(0,o.kt)("inlineCode",{parentName:"p"},"caller"),"."),(0,o.kt)("img",{class:"align-center",src:(0,c.Z)("/image/callstack.png"),width:"450",alt:"Call Stack"}),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"Casper networks place a limitation on the maximum height of a call stack at ",(0,o.kt)("inlineCode",{parentName:"p"},"10")," contracts. This does not include the initiating session code, which would still count as the ",(0,o.kt)("em",{parentName:"p"},"zeroth")," instance within the stack."),(0,o.kt)("p",null,"As such, a call stack may consist of up to ten consecutive called smart contracts."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Contract code cannot call session code, only other contract code."))))}m.isMDXComponent=!0}}]);