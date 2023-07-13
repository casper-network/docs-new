"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8306],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(f,s(s({ref:t},l),{},{components:n})):a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},494:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),s=["components"],i={title:"Introduction to dApps"},c="Introduction to dApps (Distributed Applications) on the Casper network",p={unversionedId:"concepts/intro-to-dapps",id:"concepts/intro-to-dapps",title:"Introduction to dApps",description:"What is a dApp?",source:"@site/source/docs/casper/concepts/intro-to-dapps.md",sourceDirName:"concepts",slug:"/concepts/intro-to-dapps",permalink:"/concepts/intro-to-dapps",draft:!1,editUrl:"https://github.com/casper-network/docs-new/tree/dev-new/source/docs/casper/concepts/intro-to-dapps.md",tags:[],version:"current",lastUpdatedAt:1689241759,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{title:"Introduction to dApps"},sidebar:"concepts",previous:{title:"Casper Concepts",permalink:"/concepts/"},next:{title:"Accounts and Keys",permalink:"/concepts/accounts-and-keys"}},l={},d=[{value:"What is a dApp?",id:"what-is-a-dapp",level:3},{value:"Interacting with a Casper Decentralized Network",id:"interacting-with-a-casper-decentralized-network",level:3},{value:"Updating data in a Casper dApp",id:"updating-data-in-a-casper-dapp",level:4},{value:"Post-Consensus Execution in a Casper network",id:"post-consensus-execution-in-a-casper-network",level:4},{value:"Deploy lifecycle",id:"deploy-lifecycle",level:4},{value:"Related reading",id:"related-reading",level:3}],u={toc:d},h="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-dapps-distributed-applications-on-the-casper-network"},"Introduction to dApps (Distributed Applications) on the Casper network"),(0,r.kt)("h3",{id:"what-is-a-dapp"},"What is a dApp?"),(0,r.kt)("p",null,"DApp stands for ",(0,r.kt)("strong",{parentName:"p"},"Decentralized Application"),". Specifically, it refers to an application built on a blockchain network which combines smart contracts and a user interface."),(0,r.kt)("p",null,"A decentralized network consists of a group of interchangeable machines (nodes) that can perform as a full system or distributed database. Additional machines strengthen the overall system by adding redundancy and computational power."),(0,r.kt)("p",null,"A dApp is not just a client-server application where the application can do some work offline, nor is it a web application which can operate in a disconnected mode. A dApp is conceived and built using a distributed architecture where a network of ",(0,r.kt)("a",{parentName:"p",href:"/concepts/glossary/N#node"},"nodes")," does the processing of smart contracts instead of a single central server."),(0,r.kt)("p",null,"Any dApp will need access to a decentralized network, in one form or another. In a Casper network, this means connecting to a ",(0,r.kt)("a",{parentName:"p",href:"/concepts/glossary/N#node"},"node"),". The decentralized nature of the network means that node is fundamentally interchangeable for this purpose. If the connected node fails, the dApp can switch to a different node and continue operating without losing data or functionality."),(0,r.kt)("h3",{id:"interacting-with-a-casper-decentralized-network"},"Interacting with a Casper Decentralized Network"),(0,r.kt)("p",null,"For a dApp to integrate with a Casper network, it must be able to send ",(0,r.kt)("a",{parentName:"p",href:"/concepts/glossary/D#deploy"},"Deploys")," via the ",(0,r.kt)("a",{parentName:"p",href:"/developers/json-rpc/"},"JSON-RPC"),". Business logic specific to the dApp can then be executed on chain via the Deploy. ",(0,r.kt)("a",{parentName:"p",href:"/developers/dapps/sending-deploys"},"Sending a Deploy")," to a node will result in that node ",(0,r.kt)("a",{parentName:"p",href:"/concepts/design/p2p#communications-gossiping"},"gossiping")," that Deploy to other nodes, assuming that the Deploy is valid and accepted. The Deploy will then be enqueued for execution."),(0,r.kt)("p",null,"A Deploy contains ",(0,r.kt)("a",{parentName:"p",href:"/concepts/glossary/S#session-code"},"session code")," in the form of ",(0,r.kt)("a",{parentName:"p",href:"/concepts/glossary/W#webassembly"},"Wasm")," to be executed in the context of the sending ",(0,r.kt)("a",{parentName:"p",href:"/concepts/glossary/A#account"},"account"),". Therefore, developers may use any programming language that can compile to Wasm when building a dApp for a Casper network. This session code may consist of Wasm to be executed once, or Wasm which will install contract code to be stored in global state. If the dApp requires periodic execution of the same Wasm, it is more efficient from both a gas and execution perspective to install the Wasm as a contract to be called later. As gas costs operate on a per-byte basis, smart contracts will incur less gas costs over time when compared against executing the same session code repeatedly. A dApp may send a Deploy simultaneously to each node it is connected to, but can only do so once per node, per Deploy."),(0,r.kt)("h4",{id:"updating-data-in-a-casper-dapp"},"Updating data in a Casper dApp"),(0,r.kt)("p",null,"Sending a Deploy is the only means by which a dApp can change ",(0,r.kt)("a",{parentName:"p",href:"/concepts/glossary/G#global-state"},"global state"),". All associated changes to global state occur after successful execution of the Deploy. In the case of a failed execution, the stack is unwound and any changes to global state as part of executing the Deploy are reverted. However, as there is a penalty payment that must be incurred, there is a change in global state through reducing the balance of the sending account. To send a Deploy, an account must hold a minimum balance greater than the network's penalty payment. This penalty payment can vary from network to network. On the public Casper Mainnet, the penalty payment is set to 2.5 CSPR."),(0,r.kt)("h4",{id:"post-consensus-execution-in-a-casper-network"},"Post-Consensus Execution in a Casper network"),(0,r.kt)("p",null,"Unlike other blockchain networks, a Casper network performs execution ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"after"))," ",(0,r.kt)("a",{parentName:"p",href:"/concepts/glossary/C#consensus"},"consensus"),". This means that observing the execution of the Deploy is sufficient proof of ",(0,r.kt)("a",{parentName:"p",href:"/concepts/glossary/B#block-finality"},"finality")," for most cases. For a stronger finality requirement, you can observe the finality signatures for the block that includes the given Deploy."),(0,r.kt)("h4",{id:"deploy-lifecycle"},"Deploy lifecycle"),(0,r.kt)("p",null,"There is an inherent timing consideration when sending a Deploy, from the point where it is sent to when it is executed. The ",(0,r.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#execution-semantics-phases"},"Deploy Lifecycle")," results in a delay longer than would be expected from a centralized application. The Deploy must be sent, accepted, gossiped, included in a finalized block and executed. This process varies from network to network. This delay should be taken into consideration when designing dApps for use with a Casper network, as the number of connected peers and the number of Deploys currently being sent may cause it to increase."),(0,r.kt)("h3",{id:"related-reading"},"Related reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/deploy-and-deploy-lifecycle"},"Deploys and the Deploy lifecycle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/concepts/global-state"},"Global State")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/concepts/session-code"},"Session Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/concepts/smart-contracts"},"Smart Contracts"))))}f.isMDXComponent=!0}}]);