"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2894],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,f=u["".concat(i,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(f,s(s({ref:t},l),{},{components:n})):a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:r,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},298:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),s=["components"],c={title:"Casper Concepts"},i=void 0,p={unversionedId:"concepts/index",id:"concepts/index",title:"Casper Concepts",description:"Introduction",source:"@site/source/docs/casper/concepts/index.md",sourceDirName:"concepts",slug:"/concepts/",permalink:"/concepts/",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/concepts/index.md",tags:[],version:"current",lastUpdatedAt:1681294879,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{title:"Casper Concepts"},sidebar:"concepts",next:{title:"Introduction to dApps",permalink:"/concepts/intro-to-dapps"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Casper Concepts",id:"casper-concepts",level:2},{value:"Accounts and Cryptographic Keys",id:"accounts-and-cryptographic-keys",level:3},{value:"Hash Types",id:"hash-types",level:3},{value:"Call Stacks",id:"call-stacks",level:3},{value:"Contracts and Session Code",id:"contracts-and-session-code",level:3},{value:"Dictionaries",id:"dictionaries",level:3},{value:"Design",id:"design",level:3},{value:"Economics",id:"economics",level:3},{value:"Glossary",id:"glossary",level:3}],d={toc:u},h="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This section is intended for the developer or user who has had little or no exposure to Casper, and who wants to understand the concepts underpinning the platform. Working with the Casper blockchain requires an understanding of some core concepts. Some of these concepts are more generally applicable to blockchain technology, while others are Casper-specific. If you are new to Casper, we recommend that you first familiarize yourself with these concepts in order to prevent confusion at a further stage of your educative process."),(0,o.kt)("p",null,"Once you understand the basic concepts underpinning Casper, here are some further learning paths you may wish to pursue;"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are just getting started and looking for help in building your first Casper-based app, we recommend the ",(0,o.kt)("a",{parentName:"li",href:"/tutorials"},"beginner tutorials")," section."),(0,o.kt)("li",{parentName:"ul"},"If you have already started your Casper education and want to continue your journey with more advanced tutorials, try our ",(0,o.kt)("a",{parentName:"li",href:"/resources/tutorials/advanced/"},"advanced tutorials")," section."),(0,o.kt)("li",{parentName:"ul"},"If you already have experience with or knowledge of the Casper platform and you are looking for specific information about a development topic, head on over to the ",(0,o.kt)("a",{parentName:"li",href:"/developers"},"development")," area.")),(0,o.kt)("h2",{id:"casper-concepts"},"Casper Concepts"),(0,o.kt)("h3",{id:"accounts-and-cryptographic-keys"},(0,o.kt)("a",{parentName:"h3",href:"/concepts/accounts-and-keys"},"Accounts and Cryptographic Keys")),(0,o.kt)("p",null,"The Casper programming model is account-based. An understanding of how Casper accounts work, and how they are secured, may be read ",(0,o.kt)("a",{parentName:"p",href:"/concepts/accounts-and-keys"},"here"),"."),(0,o.kt)("h3",{id:"hash-types"},(0,o.kt)("a",{parentName:"h3",href:"/concepts/hash-types"},"Hash Types")),(0,o.kt)("p",null,"Hashes are used everywhere in Casper for keys, addresses, packaging data nd more. Find a description of these hash types ",(0,o.kt)("a",{parentName:"p",href:"/concepts/hash-types"},"here")),(0,o.kt)("h3",{id:"call-stacks"},(0,o.kt)("a",{parentName:"h3",href:"/concepts/callstack"},"Call Stacks")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/concepts/callstack"},"This document")," contains a discussion of how Casper manages the calling of a contract, and some essential concepts to understand when running this kind of code."),(0,o.kt)("h3",{id:"contracts-and-session-code"},(0,o.kt)("a",{parentName:"h3",href:"/concepts/session-code"},"Contracts and Session Code")),(0,o.kt)("p",null,"Read ",(0,o.kt)("a",{parentName:"p",href:"/concepts/session-code"},"this")," to understand the different kinds of code which execute on te Casper platform, the differences between them and why you would use one versus the other."),(0,o.kt)("h3",{id:"dictionaries"},(0,o.kt)("a",{parentName:"h3",href:"/concepts/dictionaries"},"Dictionaries")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/concepts/dictionaries"},"Dictionaries")," are a primary construct for storing and retrieving data in Casper code."),(0,o.kt)("h3",{id:"design"},(0,o.kt)("a",{parentName:"h3",href:"/design"},"Design")),(0,o.kt)("p",null,"An in-depth look at the high-level design and architecture of the Casper eco-system can be found ",(0,o.kt)("a",{parentName:"p",href:"/design"},"here")),(0,o.kt)("h3",{id:"economics"},(0,o.kt)("a",{parentName:"h3",href:"/economics"},"Economics")),(0,o.kt)("p",null,"Learn how the on-chain economics of Casper work ",(0,o.kt)("a",{parentName:"p",href:"/economics"},"here"),"."),(0,o.kt)("h3",{id:"glossary"},(0,o.kt)("a",{parentName:"h3",href:"/glossary"},"Glossary")),(0,o.kt)("p",null,"A compendium of all the terms used in Casper, in alphabetical order. We have tried to make these documentation pages as self-explanatory as possible, but if there is a term that isn't explained, or that you don't recognize, you will find a short definition in ",(0,o.kt)("a",{parentName:"p",href:"/glossary"},"these pages"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/concepts/accounts-and-keys"},"Accounts and Cryptographic Keys")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/concepts/hash-types"},"Understanding Hash Types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/concepts/global-state"},"Understanding Global State")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/concepts/callstack"},"Understanding Call Stacks")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/concepts/session-code"},"Contracts and Session Code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/concepts/smart-contracts"},"Smart Contracts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/concepts/dictionaries"},"Dictionaries")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/design"},"Design")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/economics"},"Economics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/glossary"},"Glossary"))))}f.isMDXComponent=!0}}]);