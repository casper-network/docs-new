"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8306],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(h,r(r({ref:t},l),{},{components:n})):a.createElement(h,r({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},494:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(3117),o=n(102),i=(n(7294),n(3905)),r=["components"],s={title:"Introduction to DApps",slug:"/intro-to-dapps"},c="Introduction to DApps (Distributed Applications)",p={unversionedId:"concepts/intro-to-dapps",id:"concepts/intro-to-dapps",title:"Introduction to DApps",description:"Definition of a DApp",source:"@site/source/docs/casper/concepts/intro-to-dapps.md",sourceDirName:"concepts",slug:"/intro-to-dapps",permalink:"/intro-to-dapps",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/concepts/intro-to-dapps.md",tags:[],version:"current",lastUpdatedAt:1679529808,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{title:"Introduction to DApps",slug:"/intro-to-dapps"},sidebar:"concepts",previous:{title:"Casper Concepts",permalink:"/concepts"},next:{title:"Accounts and Keys",permalink:"/concepts/accounts-and-keys"}},l={},d=[{value:"Definition of a DApp",id:"definition-of-a-dapp",level:2},{value:"Benefits of a DApp",id:"benefits-of-a-dapp",level:2},{value:"Downsides to DApps",id:"downsides-to-dapps",level:2},{value:"Some popular use cases",id:"some-popular-use-cases",level:2}],u={toc:d},f="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)(f,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction-to-dapps-distributed-applications"},"Introduction to DApps (Distributed Applications)"),(0,i.kt)("h2",{id:"definition-of-a-dapp"},"Definition of a DApp"),(0,i.kt)("p",null,"First, some definitions. What exactly is a DApp? DApp stands for ",(0,i.kt)("strong",{parentName:"p"},"Decentralized Application"),". Specifically, an app built on a blockchain network which combines smart contracts and a user interface. To be considered a DApp, an app should fulfill the following requirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Decentralized: DApps are run by thousands of nodes around the globe. No party can take control of it, including governments and the developers."),(0,i.kt)("li",{parentName:"ul"},"Deterministic: The execution of DApps is not affected by any changes in the environment."),(0,i.kt)("li",{parentName:"ul"},"Turing complete: DApps can perform any action given the required resources."),(0,i.kt)("li",{parentName:"ul"},"Isolated: DApps are executed in an isolated situation. If a DApp has a bug, it won't affect the normal functioning of the Blockchain network.")),(0,i.kt)("p",null,"So a DApp is not just a client-server application where the application can do some work offline, nor a web application which can operate in a disconnected mode, where there is a central server which acts as a repository of information and business logic. A DApp is conceived and built using a distributed architecture where the network of nodes does the processing of smart contracts instead of a central server."),(0,i.kt)("h2",{id:"benefits-of-a-dapp"},"Benefits of a DApp"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Durability/uptime characteristics. Because of the fact that each operation on a DApp is processed by one or many identical nodes in a network, if one node goes down it has no effect on the overall operation of the network. DApps can maintain 24/7, uninterrupted uptime without investment in massive data centers or secure facilities. A DApp cannot be attacked by Denial of Service (DDOS) attacks."),(0,i.kt)("li",{parentName:"ol"},"User Privacy: You do not need to provide some real-world identification, such as a GMail or Facebook account, to interact with a Blockchain network."),(0,i.kt)("li",{parentName:"ol"},"Resistance to outside control. No single entity can block another from accessing the blockchain, reading data, deploying or interacting with DApps, or submitting transactions to the chain."),(0,i.kt)("li",{parentName:"ol"},"Trust in the state of the block chain: The data stored on the blockchain is immutable and indisputable, rather than relying on a centralized authority. Users may not change the transaction record or other data that has already been launched to the public.")),(0,i.kt)("h2",{id:"downsides-to-dapps"},"Downsides to DApps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Maintenance: Compared to traditional applications, once a DApp is published, it is more difficult to maintain as the data is stored on the Blockchain which is immutable. If bugs are found, developers can\u2019t fix them as easily as with a traditional client-server architecture."),(0,i.kt)("li",{parentName:"ol"},"Network Efficiency: DApp networks and platforms need to agree consensus before mutating the state of the chain. This means that processing millions of transactions per second, such as in a low-latency trading or betting application, is not possible. If blistering network performance is a prerequisite, then perhaps DApps are not the correct architecture for the application.")),(0,i.kt)("h2",{id:"some-popular-use-cases"},"Some popular use cases"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"DeFi. ",(0,i.kt)("a",{parentName:"li",href:"https://www.investopedia.com/decentralized-finance-defi-5113835"},"De-Fi (Decentralized Finance)"),' refers to a movement towards financial systems without the need for centralized authorities, like banks or governments, to act as intermediaries and verify transactions on them. This is enabled by the "trustless" model provided under a blockchain system, where the validity of a transaction is ensured by the very nature of the platform, not by any over-arching organization. This represents a challenge to traditional systems of digitized finance, with additional possibilities and concerns.'),(0,i.kt)("li",{parentName:"ol"},"Gaming apps and NFTs. ",(0,i.kt)("a",{parentName:"li",href:"https://gamefi.org/"},"Game-Fi")," is a gaming model based on blockchain tech. The idea is that users of a gaming app can earn crypto and non-fungible tokens ",(0,i.kt)("a",{parentName:"li",href:"https://www.investopedia.com/non-fungible-tokens-nft-5115211"},"(NFT)")," which can then be traded in the market, so they can securely earn money while gaming.")))}h.isMDXComponent=!0}}]);