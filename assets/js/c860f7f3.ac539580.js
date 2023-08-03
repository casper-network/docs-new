"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[875],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2163:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"Interacting with the Blockchain"},c="Using the Casper CLI Client",s={unversionedId:"developers/cli/index",id:"developers/cli/index",title:"Interacting with the Blockchain",description:"This section explains how to interact with a Casper network using the Casper command-line client written in Rust.",source:"@site/source/docs/casper/developers/cli/index.md",sourceDirName:"developers/cli",slug:"/developers/cli/",permalink:"/developers/cli/",draft:!1,editUrl:"https://github.com/casper-network/docs-new/tree/dev-new/source/docs/casper/developers/cli/index.md",tags:[],version:"current",lastUpdatedAt:1691069605,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{title:"Interacting with the Blockchain"},sidebar:"developers",previous:{title:"Monitoring and Consuming Events",permalink:"/developers/dapps/monitor-and-consume-events"},next:{title:"Introduction",permalink:"/developers/cli/transfers/"}},p={},u=[],d={toc:u},m="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-the-casper-cli-client"},"Using the Casper CLI Client"),(0,o.kt)("p",null,"This section explains how to interact with a Casper network using the Casper command-line client written in Rust."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Topic"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/cli/transfers/"},"Transferring Tokens")),(0,o.kt)("td",{parentName:"tr",align:null},"Transferring tokens from one account to another using the Casper command-line client")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/cli/delegate"},"Delegating tokens")),(0,o.kt)("td",{parentName:"tr",align:null},"Delegating tokens to a validator on a Casper network")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/cli/undelegate"},"Undelegating Tokens with the Casper Client")),(0,o.kt)("td",{parentName:"tr",align:null},"Undelegating tokens from a validator on a Casper network")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/cli/sending-deploys"},"Sending Deploys to a Network")),(0,o.kt)("td",{parentName:"tr",align:null},"Sending Deploys to a Casper network using the Rust CLI Client")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/cli/installing-contracts"},"Installing Smart Contracts")),(0,o.kt)("td",{parentName:"tr",align:null},"Steps to install a contract on a Casper network")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/cli/querying-global-state"},"Querying Global State")),(0,o.kt)("td",{parentName:"tr",align:null},"How to query global state after contract installation")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/cli/calling-contracts"},"Calling Smart Contracts with the Rust Client")),(0,o.kt)("td",{parentName:"tr",align:null},"Various ways to call a contract's entry-points")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/cli/execution-error-codes"},"Execution Error Codes")),(0,o.kt)("td",{parentName:"tr",align:null},"Error codes for smart contract execution")))))}g.isMDXComponent=!0}}]);