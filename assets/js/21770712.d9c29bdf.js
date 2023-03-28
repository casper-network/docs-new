"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4056],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,y=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?o.createElement(y,s(s({ref:t},c),{},{components:n})):o.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:a,s[1]=r;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8622:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return d}});var o=n(3117),a=n(102),i=(n(7294),n(3905)),s=["components"],r={title:"Deploys and the Deploy Lifecycle",slug:"/deploy-and-deploy-lifecycle"},l="Deploys and the Deploy Lifecycle",p={unversionedId:"concepts/deploy-and-deploy-lifecycle",id:"concepts/deploy-and-deploy-lifecycle",title:"Deploys and the Deploy Lifecycle",description:"Deploys",source:"@site/source/docs/casper/concepts/deploy-and-deploy-lifecycle.md",sourceDirName:"concepts",slug:"/deploy-and-deploy-lifecycle",permalink:"/deploy-and-deploy-lifecycle",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/concepts/deploy-and-deploy-lifecycle.md",tags:[],version:"current",lastUpdatedAt:1680009069,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{title:"Deploys and the Deploy Lifecycle",slug:"/deploy-and-deploy-lifecycle"},sidebar:"concepts",previous:{title:"Understanding Hash Types",permalink:"/concepts/understanding-hash-types"},next:{title:"Global State",permalink:"/concepts/global-state"}},c={},d=[{value:"Deploys",id:"execution-semantics-deploys",level:2},{value:"The Deploy Lifecycle",id:"execution-semantics-phases",level:2},{value:"Deploy Received",id:"deploy-received",level:3},{value:"Deploy Gossiped",id:"deploy-gossiped",level:3},{value:"Block Proposed",id:"block-proposed",level:3},{value:"Block Gossiped",id:"block-gossiped",level:3},{value:"Consensus Reached",id:"consensus-reached",level:3},{value:"Deploy Executed",id:"deploy-executed",level:3}],u={toc:d},h="wrapper";function y(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)(h,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploys-and-the-deploy-lifecycle"},"Deploys and the Deploy Lifecycle"),(0,i.kt)("h2",{id:"execution-semantics-deploys"},"Deploys"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#serialization-standard-deploy"},"Deploy")," is a data structure containing Wasm and the requester's signature(s). Additionally, the deploy header contains additional metadata about the deploy itself. A deploy\u2019s structure is as follows:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/image/design/deploy-structure.png",alt:"Image showing the deploy data structure",width:"500"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Body: Containing payment code and session code (more details on these below)"),(0,i.kt)("li",{parentName:"ul"},"Header: containing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#publickey"},"Public Key")," of the account in whose context the deploy will run"),(0,i.kt)("li",{parentName:"ul"},"The timestamp of the deploy\u2019s creation"),(0,i.kt)("li",{parentName:"ul"},"A time-to-live, after which the deploy expires and cannot be included in a block"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"blake2b256")," hash of the body"))),(0,i.kt)("li",{parentName:"ul"},"Deploy hash: the ",(0,i.kt)("inlineCode",{parentName:"li"},"blake2b")," hash of the Header"),(0,i.kt)("li",{parentName:"ul"},"Approvals: the set of signatures which have signed the deploy hash; these are used in the ",(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#accounts-associated-keys-weights"},"account permissions model"))),(0,i.kt)("h2",{id:"execution-semantics-phases"},"The Deploy Lifecycle"),(0,i.kt)("p",null,"A deploy goes through the following phases on Casper:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Deploy Received"),(0,i.kt)("li",{parentName:"ol"},"Deploy Gossiped"),(0,i.kt)("li",{parentName:"ol"},"Block Proposed"),(0,i.kt)("li",{parentName:"ol"},"Block Gossiped"),(0,i.kt)("li",{parentName:"ol"},"Consensus Reached"),(0,i.kt)("li",{parentName:"ol"},"Deploy Executed")),(0,i.kt)("h3",{id:"deploy-received"},"Deploy Received"),(0,i.kt)("p",null,"A client sending the deploy will send it to one or more nodes via their JSON RPC servers. The node will ensure that a given deploy matches configuration settings outlined in the network's chainspec. Deploy configuration for the Casper Mainnet can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/dev/resources/production/chainspec.toml#L79"},"here"),". Once accepted, the system returns the deploy hash to the client to indicate it has been enqueued for execution. The deploy could expire while waiting to be gossiped; whenever this happens, a ",(0,i.kt)("inlineCode",{parentName:"p"},"DeployExpired")," event is emitted by the event stream servers of all nodes which have the expired deploy."),(0,i.kt)("h3",{id:"deploy-gossiped"},"Deploy Gossiped"),(0,i.kt)("p",null,"After a node accepts a new deploy, it will gossip to all other nodes. A validator node will put the deploy into the block proposer buffer. The validator leader will pick the deploy from the block proposer buffer to create a new proposed block for the chain. This mechanism is efficient and ensures all nodes in the network eventually hold the given deploy. Each node that accepts a gossiped deploy also emits a ",(0,i.kt)("inlineCode",{parentName:"p"},"DeployAccepted")," event on its event stream server. The deploy may expire while waiting for a node to add it to the block. Whenever this happens, the node emits a ",(0,i.kt)("inlineCode",{parentName:"p"},"DeployExpired")," event."),(0,i.kt)("h3",{id:"block-proposed"},"Block Proposed"),(0,i.kt)("p",null,"The validator leader for this round will propose a block that includes as many deploys from the block proposer buffer as can fit in a block."),(0,i.kt)("h3",{id:"block-gossiped"},"Block Gossiped"),(0,i.kt)("p",null,"The proposed block propagates to all other nodes."),(0,i.kt)("h3",{id:"consensus-reached"},"Consensus Reached"),(0,i.kt)("p",null,"Once the other validators reach consensus that the proposed block is valid, all deploys in the block are executed, and this block becomes the final block added to the chain. Whenever reaching consensus, the event stream server emits a ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockAdded"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"FinalitySignature")," events emit shortly after that. Finality signatures for the new block arrive from the validators."),(0,i.kt)("h3",{id:"deploy-executed"},"Deploy Executed"),(0,i.kt)("p",null,"A deploy executes in distinct phases to accommodate flexibly paying for computation. The phases of a deploy are ",(0,i.kt)("em",{parentName:"p"},"payment"),", ",(0,i.kt)("em",{parentName:"p"},"session"),", and ",(0,i.kt)("em",{parentName:"p"},"finalization"),". Payment code executes during the payment phase. If it is successful, the session code executes during the session phase. And, independently of session code execution, the finalization phase does some bookkeeping around the payment. Once the deploy is executed, a ",(0,i.kt)("inlineCode",{parentName:"p"},"DeployProcessed")," event is emitted by the event stream server."),(0,i.kt)("p",null,"In the event of execution failure, the sender will be charged the minimum penalty payment - 2.5 CSPR on the Casper Mainnet. This prevents malicious spamming of faulty deploys."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Payment code")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Payment code")," determines the payment amount for the computation requested and how much the sender is willing to pay. Payment code may include arbitrary logic, providing flexibility in paying for a deploy. For example, the simplest payment code could use the account's ",(0,i.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#tokens-purses-and-accounts"},"main purse"),". In contrast, an enterprise application may require a multi-signature scheme that accesses a corporate purse. To ensure the payment code will pay for its own computation, only accounts with a balance in their main purse greater than or equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"MAX_PAYMENT_COST")," may execute deploys. Based on the current conversion rate between gas and motes, we restrict the gas limit of the payment code execution so that the process spends no more than ",(0,i.kt)("inlineCode",{parentName:"p"},"MAX_PAYMENT_COST")," motes (a constant of the system.) If the payment is absent or not enough, then payment execution is not successful. In this case, the effects of the payment code on global state are reverted, and the system covers the cost of the computation with motes taken from the offending account's main purse."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Session code")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Session code")," provides the main logic for the deploy. It only executes if the payment code is successful. The gas limit for this computation is determined based on the amount of payment given (after subtracting the cost of the payment code itself)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Specifying payment code and session code")),(0,i.kt)("p",null,"The user-defined logic of a deploy can be specified in a number of ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a Wasm module in binary format representing valid session code, including logic to be executed in the context of an account or to store Wasm in the form of a contract to be executed later. (Note that the named keys from the context of the account the deploy is running in.)"),(0,i.kt)("li",{parentName:"ul"},"a 32-byte identifier representing the ",(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#serialization-standard-hash-key"},"hash")," where a contract is already stored in the global state"),(0,i.kt)("li",{parentName:"ul"},"a name corresponding to a named key in the account, where a contract is stored under the key")),(0,i.kt)("p",null,"Payment and session code can be independently specified, so different methods of specifying them may be used (e.g. payment could be specified by a hash key, while the session is explicitly provided as a Wasm module)."))}y.isMDXComponent=!0}}]);