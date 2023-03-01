"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8669],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7248:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],s={},l="Introduction",p={unversionedId:"developers/json-rpc/index",id:"developers/json-rpc/index",title:"Introduction",description:"This document outlines the JSON-RPC API endpoints and types definitions for developers crafting an SDK for use with Casper networks.",source:"@site/source/docs/casper/developers/json-rpc/index.md",sourceDirName:"developers/json-rpc",slug:"/developers/json-rpc/",permalink:"/developers/json-rpc/",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/json-rpc/index.md",tags:[],version:"current",lastUpdatedAt:1677674474,formattedLastUpdatedAt:"3/1/2023",frontMatter:{},sidebar:"developers",previous:{title:"Best Practices for Casper Smart Contract Authors",permalink:"/developers/writing-onchain-code/best-practices"},next:{title:"Guidance for JSON-RPC SDK Compliance",permalink:"/developers/json-rpc/guidance"}},c={},d=[{value:"Creating a Casper SDK",id:"creating-a-casper-sdk",level:2},{value:"Serialization",id:"serialization",level:3},{value:"SDK Standard Index",id:"sdk-standard-index",level:2}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This document outlines the JSON-RPC API endpoints and types definitions for developers crafting an SDK for use with Casper networks."),(0,o.kt)("h2",{id:"creating-a-casper-sdk"},"Creating a Casper SDK"),(0,o.kt)("p",null,"The Casper Association provides a JavaScript SDK that is compliant with this SDK Standard. However, those that prefer other languages may build an SDK using their language of choice."),(0,o.kt)("p",null,"For examples of such SDKs, please refer to our ",(0,o.kt)("a",{parentName:"p",href:"/sdk"},"SDK Client Libraries")," section."),(0,o.kt)("h3",{id:"serialization"},"Serialization"),(0,o.kt)("p",null,"The Casper platform uses a custom serialization format. To this end, we've established a ",(0,o.kt)("a",{parentName:"p",href:"/concepts/design/serialization-standard"},"serialization standard")," that describes the format, which SDK developers must implement in their language of choice."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"sdk-standard-index"},"SDK Standard Index"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Page"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/json-rpc/guidance"},"Guidance for JSON-RPC SDK Compliance")),(0,o.kt)("td",{parentName:"tr",align:null},"Guide on the requirements for a compliant Casper SDK.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/json-rpc/minimal-compliance"},"Required JSON-RPC Methods for Minimal Compliance")),(0,o.kt)("td",{parentName:"tr",align:null},"Methods required for a minimally compliant Casper SDK.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/json-rpc/json-rpc-transactional"},"Transactional JSON-RPC Method")),(0,o.kt)("td",{parentName:"tr",align:null},"Description of ",(0,o.kt)("inlineCode",{parentName:"td"},"account_put_deploy"),", the only means by which users can send their compiled Wasm (as part of a Deploy) to a node on a Casper network. Also includes the ",(0,o.kt)("inlineCode",{parentName:"td"},"speculative_exec")," method.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/json-rpc/json-rpc-informational"},"Informational JSON-RPC Methods")),(0,o.kt)("td",{parentName:"tr",align:null},"Descriptions of methods that return information from a network or node within a network.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/json-rpc/json-rpc-pos"},"Proof-of-Stake JSON-RPC Methods")),(0,o.kt)("td",{parentName:"tr",align:null},"Descriptions of methods that pertain to Proof-of-Stake functionality on a Casper network.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/json-rpc/types_chain"},"Types")),(0,o.kt)("td",{parentName:"tr",align:null},"Information on types used within JSON-RPC methods.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/json-rpc/types_cl"},"CL Types")),(0,o.kt)("td",{parentName:"tr",align:null},"Information specifically relating to CL Types.")))))}m.isMDXComponent=!0}}]);