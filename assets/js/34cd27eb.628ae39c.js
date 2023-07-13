"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1290],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7668:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=(r(4996),["components"]),l={},s="Table of Contents",c={unversionedId:"developers/table-of-contents",id:"developers/table-of-contents",title:"Table of Contents",description:"These developer guides highlight key features and capabilities of the Casper blockchain.",source:"@site/source/docs/casper/developers/table-of-contents.md",sourceDirName:"developers",slug:"/developers/table-of-contents",permalink:"/developers/table-of-contents",draft:!1,editUrl:"https://github.com/casper-network/docs-new/tree/dev-new/source/docs/casper/developers/table-of-contents.md",tags:[],version:"current",lastUpdatedAt:1689241759,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Overview",permalink:"/developers"},next:{title:"Development Prerequisites",permalink:"/developers/prerequisites"}},p={},u=[],f={toc:u},d="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(d,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("p",null,"These developer guides highlight key features and capabilities of the Casper blockchain."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/prerequisites"},"Development Prerequisites"),": setup needed for various workflows"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/writing-contracts"},"Writing On-chain code"),": writing contracts in Rust and Wasm for a Casper network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/json-rpc/"},"Casper JSON-RPC API"),": JSON-RPC API endpoints and types definitions for developers crafting a Casper SDK"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/dapps/"},"Building DApps"),": useful information for dApp developers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/cli/"},"Interacting With The Blockchain Using CLI"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/cli/transfers/"},"Transferring Tokens using the Command-line"),": transferring tokens from one account to another using the command-line"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/cli/delegate"},"Delegating tokens"),": delegating tokens to a Validator on a Casper network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/cli/undelegate"},"Undelegating tokens"),": undelegating tokens from a validator on a Casper network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/cli/installing-contracts"},"Installing Smart Contracts and Querying Global State"),": steps to install a contract on a Casper network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/cli/calling-contracts"},"Calling Smart Contracts with the Rust Client"),": various ways to call a contract's entry-points"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/cli/execution-error-codes"},"Execution Error Codes"),": smart contract execution error codes")))),(0,o.kt)("p",null,"You may find other helpful guides in GitHub."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/casper-network/erc20-guide-extraction/"},"Using the Casper Fungible Token Contract"),": using the Casper fungible token contract to understand the fungible token transfer workflow")))}m.isMDXComponent=!0}}]);