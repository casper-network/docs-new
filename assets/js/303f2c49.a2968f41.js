"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2882],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6846:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return v}});var a=n(3117),r=n(102),o=n(7294),i=n(3905),s=n(2389),l=n(9553),c=n(6010),p="tabItem_LplD";function u(e){var t,n,r,i=e.lazy,s=e.block,u=e.defaultValue,d=e.values,h=e.groupId,f=e.className,m=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:m.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===u?u:null!=(t=null!=u?u:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=m[0])?void 0:r.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.UB)(),g=v.tabGroupChoices,w=v.setTabGroupChoices,N=(0,o.useState)(k),T=N[0],C=N[1],O=[],S=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var j=g[h];null!=j&&j!==T&&b.some((function(e){return e.value===j}))&&C(j)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==T&&(S(t),C(a),null!=h&&w(h,a))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":s},f)},b.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:A,onFocus:E,onClick:E},r,{className:(0,c.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(m.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,s.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}function h(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}var f=["components"],m={},b=void 0,y={unversionedId:"developers/dapps/technology-stack",id:"developers/dapps/technology-stack",title:"technology-stack",description:"There are 3 layers to building a decentralized application that interacts with the Casper Network: Front-end, backend, and blockchain. This document outlines lists the requirements for each.",source:"@site/source/docs/casper/developers/dapps/technology-stack.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/technology-stack",permalink:"/developers/dapps/technology-stack",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/dapps/technology-stack.md",tags:[],version:"current",lastUpdatedAt:1678114677,formattedLastUpdatedAt:"3/6/2023",frontMatter:{},sidebar:"developers",previous:{title:"Python SDK",permalink:"/developers/dapps/sdk/python-sdk"},next:{title:"Signing Deploys",permalink:"/developers/dapps/signing-a-deploy"}},k={},v=[{value:"Front-end",id:"front-end",level:2},{value:"Signing Transactions",id:"signing-transactions",level:3},{value:"Querying the Blockchain State",id:"querying-the-blockchain-state",level:3},{value:"Backend",id:"backend",level:2},{value:"Blockchain",id:"blockchain",level:2}],g={toc:v};function w(e){var t=e.components,n=(0,r.Z)(e,f);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dapp-technology-stack"},"dApp Technology Stack"),(0,i.kt)("p",null,"There are 3 layers to building a decentralized application that interacts with the Casper Network: Front-end, backend, and blockchain. This document outlines lists the requirements for each."),(0,i.kt)("h2",{id:"front-end"},"Front-end"),(0,i.kt)("p",null,'The front-end, or "client-side" of a dApp consists of the interface that the user uses to interact with the smart contracts on the Casper Network. This interface usually comes in the form of a website/webpage, mobile device application, or computer program, but could also include APIs with callable/queryable endpoints.'),(0,i.kt)("p",null,"You will need to choose a Casper-compatible SDK for the language you are using to call and query smart contracts on the Network. Casper's SDKs have methods available for constructing deployments and gathering state data. While these interactions can be prepared on the front-end, they must be sent to the backend of your application before being sent off to the Network, so as to fulfill ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS")," requirements."),(0,i.kt)("h3",{id:"signing-transactions"},"Signing Transactions"),(0,i.kt)("p",null,"The signing of transactions will in many cases need to be performed by the user on the front-end, for which you may implement one or more of a few different options:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The Casper Signer"),(0,i.kt)("p",{parentName:"li"},"The Casper JS SDK has a class ",(0,i.kt)("inlineCode",{parentName:"p"},"Signer")," that, when implemented, allows a user to sign transactions using the Casper Signer browser extension. Deploy objects are first converted to JSON, then sent to the Signer to be signed, then must be sent to the backend for deployment to a node.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Third-party signers"),(0,i.kt)("p",{parentName:"li"},"Third-party signers may be used as well. A JSON representation of the unsigned transaction should be forwarded to the third-party signer and accept a callback containing the signed deploy object.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pasted private key (not recommended)"),(0,i.kt)("p",{parentName:"li"},"It is also possible to allow a user to paste/type in their private key to be used to sign the transaction. This is not recommended for security reasons."))),(0,i.kt)("h3",{id:"querying-the-blockchain-state"},"Querying the Blockchain State"),(0,i.kt)("p",null,"To execute a blockchain state query, like retreiving smart contract data or getting current chain information, the preparation may be done on the front-end, but the query to a node must ultimately originate from your application's backend. This preparatory stage comes only in the form of defining a contract hash and the path which you'd like to query data, or for chain information, the endpoint you'd like to query."),(0,i.kt)("h2",{id:"backend"},"Backend"),(0,i.kt)("p",null,"The backend of a dApp consists of the server-side code that connects the blockchain to the front-end interface, and deals with data-parsing and app-layer communication. A backend server is necessary for building dApps on Casper as Casper's nodes expect ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS headers")," from a specified origin on HTTP requests they receive. Backend servers are helpful for other reasons too, such as queueing requests and analyzing the traffic moving between your dApp and the blockchain."),(0,i.kt)("p",null,"As the backend (server) of a dApp is the software communicating with Casper nodes, and therefore the blockchain, it is what needs to be given information such as which node to connect to, and which endpoints to communicate with."),(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(h,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const client = new CasperClient("http://NODE_ADDRESS:7777/rpc");\n'))),(0,i.kt)(h,{value:"py",label:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'client = NodeClient(NodeConnection((host = "NODE_ADDRESS"), (port_rpc = 7777)));\n')))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: You can find online peers for mainnet at ",(0,i.kt)("a",{parentName:"em",href:"https://cspr.live"},"cspr.live")," or testnet at ",(0,i.kt)("a",{parentName:"em",href:"https://testnet.cspr.live"},"testnet.cspr.live"))),(0,i.kt)("p",null,"There are two main types of queries that will be sent from the backend to the blockchain, transactions and queries. In the case of a dApp, these will both originate from the front-end."),(0,i.kt)("p",null,"Blockchain interaction for state queries is handled solely on the backend, where on the front-end, a user simply chooses the path at which they want to query data. This path is sent to the backend where the server will perform the state query and send the result back to the front-end."),(0,i.kt)("p",null,"In the case of a user-signed transaction originating from the dApp's front-end, the backend will need to accept this transaction and forward it to the Casper Network. This is often accomplished by opening a POST endpoint that accepts JSON formatted transactions and forwards them along."),(0,i.kt)("h2",{id:"blockchain"},"Blockchain"),(0,i.kt)("p",null,"The last stop for a transaction or query is the blockchain itself. Like the majority of smart contract blockchains, the Casper Network maintains a forever-growing, immutable ledger that can be read and written to. When building a dApp for the Casper Network, user interactions in the form of queries and transactions originate from the front-end, are forwarded to the backend, and are then sent to a Casper node for interaction with the blockchain. Casper nodes can be communicated with via JSON RPC calls, and have a variety of open ",(0,i.kt)("a",{parentName:"p",href:"/developers/json-rpc/json-rpc-transactional"},"transactional"),", ",(0,i.kt)("a",{parentName:"p",href:"/developers/json-rpc/json-rpc-informational"},"informational"),", and ",(0,i.kt)("a",{parentName:"p",href:"/developers/json-rpc/json-rpc-pos"},"Proof-of-Stake")," endpoints. By utilizing an SDK on the backend, you won't need to construct these JSON RPC calls yourself, they'll be done for you within the available methods."),(0,i.kt)("p",null,"More than likely, you will want your dApp to perform personalized functions, store custom data, and perhaps even store or transact upon tokens with monetary value. All of these behaviors can be implemented by writing custom smart contracts for your application. Smart contracts on the Casper Network can perform any function that a classical computer can. Casper's smart contracts are executed as ",(0,i.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly")," binaries, and can be written in any language that compiles to WebAssembly. Currently, most developers choose to write their smart contracts in ",(0,i.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," for its reliability and ease-of-use. Additionally, Casper's smart contract documentation is written for Rust."),(0,i.kt)("p",null,"To learn how to write smart contracts for your dApp, read the ",(0,i.kt)("a",{parentName:"p",href:"about:blank"},"smart contract documentation"),"."))}w.isMDXComponent=!0}}]);