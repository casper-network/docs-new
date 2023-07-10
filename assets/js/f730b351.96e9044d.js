"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3815],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1626:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=r(3117),n=r(102),o=(r(7294),r(3905)),s=["components"],i={id:"welcome",title:"Welcome",slug:"/",tags:["Must read","Legal","Introduction","CasperLabs","CSPR"]},l="Welcome to the Casper Network Documentation",p={unversionedId:"welcome",id:"welcome",title:"Welcome",description:"What is Casper?",source:"@site/source/docs/casper/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/index.md",tags:[{label:"Must read",permalink:"/tags/must-read"},{label:"Legal",permalink:"/tags/legal"},{label:"Introduction",permalink:"/tags/introduction"},{label:"CasperLabs",permalink:"/tags/casper-labs"},{label:"CSPR",permalink:"/tags/cspr"}],version:"current",lastUpdatedAt:1688996346,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{id:"welcome",title:"Welcome",slug:"/",tags:["Must read","Legal","Introduction","CasperLabs","CSPR"]}},c={},u=[{value:"What is Casper?",id:"what-is-casper",level:2},{value:"Other Sections",id:"other-sections",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome-to-the-casper-network-documentation"},"Welcome to the Casper Network Documentation"),(0,o.kt)("h2",{id:"what-is-casper"},"What is Casper?"),(0,o.kt)("p",null,"Casper is a new ",(0,o.kt)("a",{parentName:"p",href:"/concepts/glossary/T#turing-complete-blockchain"},"Turing-complete")," smart-contracting platform, backed by a Proof-of-Stake (PoS) consensus algorithm and WebAssembly (Wasm). The network is a ",(0,o.kt)("a",{parentName:"p",href:"/concepts/glossary/P#permissionless"},"permissionless"),", decentralized, public blockchain."),(0,o.kt)("p",null,"Read more about Casper ",(0,o.kt)("a",{parentName:"p",href:"/welcome"},"here"),". For a discussion of the Casper design read ",(0,o.kt)("a",{parentName:"p",href:"/concepts/design/casper-design"},"this article"),"."),(0,o.kt)("h1",{id:"using-this-documentation"},"Using this documentation"),(0,o.kt)("p",null,"The Casper documentation is primarily organized around what you want to do with the Casper blockchain. We identify three loosely defined types of person interested in Casper."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"users"},(0,o.kt)("a",{parentName:"h3",href:"/users/"},"Users")),"Individuals who are interested in Casper from the point of view of personal interest, people using using an app based on Casper, people evaluating Casper, non-technical staff who wish to gain an understanding of the platform and its advantages and disadvantages. In this case, the ",(0,o.kt)("a",{parentName:"li",href:"/concepts/"},"Concepts")," area is the best place to start, and will contain enough information for most casual users to gain an understanding of the platform."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"developers"},(0,o.kt)("a",{parentName:"h3",href:"/developers"},"Developers")),"The ",(0,o.kt)("a",{parentName:"li",href:"/developers"},"Developers")," area caters to software developers interested in build dApps on the Casper platform. This includes experienced developers with prior experience of Casper who are looking for specific information about certain features or API reference, as well as first-time developers looking to get their feet wet, learn the basics and create their first Casper dApp. For new developers, it is recommended to also check out the ",(0,o.kt)("a",{parentName:"li",href:"/concepts/"},"concepts")," section first. It may be helpful to work through some of our ",(0,o.kt)("a",{parentName:"li",href:"/resources/tutorials/"},"tutorials"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"operators"},(0,o.kt)("a",{parentName:"h3",href:"/operators"},"Operators")),"The ",(0,o.kt)("a",{parentName:"li",href:"/operators"},"Operators")," section caters for people who want to run and administrate a Casper network. This includes technical staff, responsible for a production Casper network, developers who want to run a test node privately, individuals who run a Casper validator node.")),(0,o.kt)("h1",{id:"most-visited-pages"},"Most Visited Pages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/concepts/"},"Core Concepts of Casper")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/resources/tutorials/beginner/getting-started-tutorial"},"Tutorial - Build your first dApp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators"},"Running a node as an operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/design"},"Design")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/economics"},"Economics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/staking"},"Staking Guide"))),(0,o.kt)("h2",{id:"other-sections"},"Other Sections"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/resources/"},"Resources"),": Resources such as setup information, tutorials, further reading, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/resources/tutorials/"},"Tutorials"),": All of our tutorials are organized here for easy access."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/glossary"},"Glossary"),": An aplphabetized list of all terms used within the Casper documentation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/disclaimer"},"Disclaimer"),": Legal Disclaimer")))}f.isMDXComponent=!0}}]);