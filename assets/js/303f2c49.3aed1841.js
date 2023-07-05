"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2882],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(4334),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(3117),r=n(7294),o=n(4334),i=n(2466),s=n(6550),l=n(1980),c=n(7392),u=n(12);function p(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function m(e){var t,n,a,o,i=e.defaultValue,s=e.queryString,l=void 0!==s&&s,c=e.groupId,p=d(e),m=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),b=m[0],v=m[1],y=f({queryString:l,groupId:c}),g=y[0],k=y[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,u.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),T=w[0],N=w[1],C=function(){var e=null!=g?g:T;return h({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){C&&v(C)}),[C]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),k(e),N(e)}),[k,N,p]),tabValues:p}}var b=n(2389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){var t=e.className,n=e.block,s=e.selectedValue,l=e.selectValue,c=e.tabValues,u=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(p(t),l(a))},h=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;n=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;n=null!=(o=u[i])?o:u[u.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return u.push(e)},onKeyDown:h,onClick:d},i,{className:(0,o.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function g(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function k(e){var t=m(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function w(e){var t=(0,b.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},8438:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return h}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=n(4866),s=n(5162),l=["components"],c={},u="dApp Technology Stack",p={unversionedId:"developers/dapps/technology-stack",id:"developers/dapps/technology-stack",title:"dApp Technology Stack",description:"There are 3 layers to building a decentralized application that interacts with a Casper network: Front-end, backend, and on-chain logic. This document outlines lists the requirements for each.",source:"@site/source/docs/casper/developers/dapps/technology-stack.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/technology-stack",permalink:"/developers/dapps/technology-stack",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/dapps/technology-stack.md",tags:[],version:"current",lastUpdatedAt:1688572581,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Go SDK",permalink:"/developers/dapps/sdk/go-sdk"},next:{title:"Setting up a Local Network with NCTL",permalink:"/developers/dapps/setup-nctl"}},d={},h=[{value:"Front-End",id:"front-end",level:2},{value:"Signing Transactions",id:"signing-transactions",level:3},{value:"Querying Global State",id:"querying-global-state",level:3},{value:"Backend",id:"backend",level:2},{value:"Blockchain",id:"blockchain",level:2}],f={toc:h},m="wrapper";function b(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)(m,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dapp-technology-stack"},"dApp Technology Stack"),(0,o.kt)("p",null,"There are 3 layers to building a decentralized application that interacts with a Casper network: Front-end, backend, and on-chain logic. This document outlines lists the requirements for each."),(0,o.kt)("h2",{id:"front-end"},"Front-End"),(0,o.kt)("p",null,"The front-end, or ",(0,o.kt)("em",{parentName:"p"},"client-side")," of a dApp consists of the interface that the user uses to interact with smart contracts on a Casper Network. This interface usually comes in the form of a website/webpage, mobile device application or computer program, but could also include APIs with endpoints that may be called or queried."),(0,o.kt)("p",null,"You will need to choose a Casper-compatible SDK for the language you are using to call and query smart contracts on a Casper network. Casper's SDKs have methods available for constructing Deploys and gathering global state data. While these interactions can be prepared on the front-end, they must be sent to the backend of your application before being sent off to a network, so as to fulfill ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS")," requirements."),(0,o.kt)("h3",{id:"signing-transactions"},"Signing Transactions"),(0,o.kt)("p",null,"The signing of transactions will, in many cases, need to be performed by the user on the front-end, for which you have a couple options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Casper Wallet"),(0,o.kt)("p",{parentName:"li"},"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://www.casperwallet.io/develop"},"Casper Wallet")," to sign deploys for a Casper network. Deploy objects are first converted to JSON, then sent to the Wallet to be signed, then must be sent to the backend and forwarded to a node."),(0,o.kt)("admonition",{parentName:"li",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The Casper Signer has been deprecated and replaced with the ",(0,o.kt)("a",{parentName:"p",href:"https://www.casperwallet.io"},"Casper Wallet"),". We are in the process of updating this page. Meanwhile, visit the guide on ",(0,o.kt)("a",{parentName:"p",href:"https://www.casperwallet.io/develop"},"Building with the Casper Wallet"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Third-party signers"),(0,o.kt)("p",{parentName:"li"},"Third-party signers may be used as well. A JSON representation of the unsigned transaction should be forwarded to the third-party signer and accept a callback containing the signed deploy object."))),(0,o.kt)("h3",{id:"querying-global-state"},"Querying Global State"),(0,o.kt)("p",null,"To execute a query of global state, such as retrieving smart contract data or getting current chain information, the preparation may be done on the front-end, but the query to a node must ultimately originate from your application's backend. This preparatory stage comes only in the form of defining a contract hash and the path which you'd like to query data. Alternately, for chain information, you must define the endpoint you'd like to query."),(0,o.kt)("h2",{id:"backend"},"Backend"),(0,o.kt)("p",null,"The backend of a dApp consists of the server-side code that connects the blockchain to the front-end interface and deals with data-parsing and application-layer communication. A backend server is necessary for building dApps on Casper as Casper's nodes expect ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS headers")," from a specified origin on the HTTP requests they receive. Backend servers are helpful for other reasons too, such as queueing requests and analyzing the traffic moving between your dApp and the blockchain."),(0,o.kt)("p",null,"As the backend server of a dApp is the software communicating with Casper nodes (the blockchain), it needs to receive information such as which node and endpoint to connect to."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const client = new CasperClient("http://NODE_ADDRESS:7777/rpc");\n'))),(0,o.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'client = NodeClient(NodeConnection((host = "NODE_ADDRESS"), (port_rpc = 7777)));\n')))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can find online peers for Mainnet at ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live"},"cspr.live")," or testnet at ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.cspr.live"},"testnet.cspr.live"))),(0,o.kt)("p",null,"There are two main types of blockchain interactions that will originate from the front-end: deploys and queries. In the case of a dApp, both of these will pass through the back-end."),(0,o.kt)("p",null,"Blockchain interaction for state queries is handled solely on the backend. On the front-end, a user simply chooses the path at which they want to query data. This path is sent to the backend where the server will perform the state query and send the result back to the front-end."),(0,o.kt)("p",null,"In the case of a user-signed transaction originating from the dApp's front-end, the backend will need to accept this transaction and forward it to a Casper network. This is often accomplished by opening a POST endpoint that accepts JSON formatted transactions and forwards them along."),(0,o.kt)("h2",{id:"blockchain"},"Blockchain"),(0,o.kt)("p",null,"The last stop for a deploy or query is the blockchain itself. Like the majority of smart contract blockchains, Casper networks maintain a forever-growing, immutable ledger that can be read and written to. When building a dApp for a Casper network, user interactions in the form of queries and deploys originate from the front-end, are forwarded to the backend, and are then sent to a Casper node for interaction with the blockchain. You can communicate with Casper nodes using JSON RPC calls, and have a variety of open ",(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/json-rpc-transactional"},"transactional"),", ",(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/json-rpc-informational"},"informational"),", and ",(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/json-rpc-pos"},"Proof-of-Stake")," endpoints. By utilizing an SDK on the backend, you won't need to construct these JSON RPC calls yourself, they'll be done for you within the available methods."),(0,o.kt)("p",null,"More than likely, you will want your dApp to perform personalized functions, store custom data, and perhaps even store or transact upon tokens with monetary value. All of these behaviors can be implemented by writing custom smart contracts for your application. Smart contracts on a Casper network can perform any function that a classical computer can. Casper's smart contracts are executed as ",(0,o.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly")," binaries, and can be written in any language that compiles to WebAssembly. Currently, most developers choose to write their smart contracts in ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," for its reliability and ease-of-use. Additionally, Casper's smart contract documentation is written for Rust."),(0,o.kt)("p",null,"To learn how to write smart contracts for your dApp, read the ",(0,o.kt)("a",{parentName:"p",href:"/writing-contracts"},"smart contract documentation"),"."))}b.isMDXComponent=!0}}]);