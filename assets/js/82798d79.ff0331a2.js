"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5811],{3905:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return m}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(o),h=n,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return o?a.createElement(m,s(s({ref:t},l),{},{components:o})):a.createElement(m,s({ref:t},l))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<r;u++)s[u]=o[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},7749:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var a=o(3117),n=o(102),r=(o(7294),o(3905)),s=o(4996),i=["components"],c={},u="Gas and the Casper Blockchain",l={unversionedId:"concepts/economics/gas-concepts",id:"concepts/economics/gas-concepts",title:"Gas and the Casper Blockchain",description:"What is gas?",source:"@site/source/docs/casper/concepts/economics/gas-concepts.md",sourceDirName:"concepts/economics",slug:"/concepts/economics/gas-concepts",permalink:"/concepts/economics/gas-concepts",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/concepts/economics/gas-concepts.md",tags:[],version:"current",lastUpdatedAt:1678702186,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{},sidebar:"concepts",previous:{title:"Introduction",permalink:"/runtime"},next:{title:"Delegation Details",permalink:"/concepts/economics/delegation"}},p={},d=[{value:"What is gas?",id:"what-is-gas",level:2},{value:"How is gas cost determined?",id:"how-is-gas-cost-determined",level:2},{value:"Why do we need gas cost?",id:"why-do-we-need-gas-cost",level:2},{value:"Why do I see an \u2018Out of gas error\u2019?",id:"why-do-i-see-an-out-of-gas-error",level:2},{value:"How do I determine the gas cost for a transaction?",id:"how-do-i-determine-the-gas-cost-for-a-transaction",level:2},{value:"Why do I see a gas limit error?",id:"why-do-i-see-a-gas-limit-error",level:2}],h={toc:d},m="wrapper";function f(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)(m,(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gas-and-the-casper-blockchain"},"Gas and the Casper Blockchain"),(0,r.kt)("h2",{id:"what-is-gas"},"What is gas?"),(0,r.kt)("p",null,"Gas is a conceptual measure of resources utilized when executing transactions on the blockchain. Gas cost is the amount of gas consumed during the processing cycles that execute a transaction on the network. It is directly correlated with the amount of computer processing a validator needs to provide in order to execute a transaction."),(0,r.kt)("p",null,"Gas fees are consumed on the network irrespective of whether your transaction was successful or not. Even when a transaction fails, you have to pay the transaction fee because your deploy consumed resources and space on the block as the validator attempted to execute it on your behalf."),(0,r.kt)("h2",{id:"how-is-gas-cost-determined"},"How is gas cost determined?"),(0,r.kt)("p",null,"The amount of gas required for a transaction is determined by how much code is executed on the blockchain. Currently, gas is priced at a fixed price of 1 mote (1 CSPR is 10^9 motes) per 1 unit of gas. The gas charged for a transaction on the blockchain is paid to the network's validators."),(0,r.kt)("h2",{id:"why-do-we-need-gas-cost"},"Why do we need gas cost?"),(0,r.kt)("p",null,"Casper is a decentralized network of individual validators supplying their computational resources to keep the network live. As such, computations must be rate-limited and priced for the following reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rate-limiting is used to ensure a secure and live network:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It prevents a specific kind of denial-of-service (DoS) attack. In computer networks, rate-limiting is used to control the rate of requests sent or received by a network to prevent DoS attacks. Gas behaves in a similar fashion, because each block permits only a fixed amount of transactions (gas) to be included in the era."),(0,r.kt)("li",{parentName:"ul"},"It explicitly quantifies the system load. The gas cost helps us evaluate the use of computational resources and measure the amount of computational work that validators need to perform for each transaction. With this knowledge, we can specify minimum system requirements for validators."))),(0,r.kt)("li",{parentName:"ul"},"Pricing leads to more meaningful transactions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Issuers of transactions and smart contract writers will be more aware of the limited network resources because there is a cost associated with each transaction. Pricing prevents users from spamming arbitrary amounts of empty transactions because there is a price to pay for each deploy.")))),(0,r.kt)("h2",{id:"why-do-i-see-an-out-of-gas-error"},"Why do I see an \u2018Out of gas error\u2019?"),(0,r.kt)("p",null,"You might encounter an \u2018Out of gas error\u2019 when the gas payment you supplied for the transaction was insufficient to cover the actual cost of computation for the transaction. The amount of gas required for a transaction is determined by how much code is executed on the blockchain and also the storage utilized."),(0,r.kt)("p",null,"Here is an ",(0,r.kt)("a",{parentName:"p",href:"https://cspr.live/deploy/afeb43036c41e667af8bc34782c48a66cf4da3818defe9f761291fa515cc38b9"},"example")," of a transaction resulting in an \u2018Out of gas error\u2019 on the Mainnet."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 1"),": In the Deploys tab of an account on ",(0,r.kt)("a",{parentName:"p",href:"https://cspr.live/"},"cspr.live"),", a red exclamation mark is shown. By moving the cursor over it, the tooltip displays an 'Out of gas error'."),(0,r.kt)("img",{src:(0,s.Z)("/image/gas-concepts/error-deploys.png"),width:"550",alt:"Out of gas error"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 2"),": Click the specific deploy to see more details such as the deploy hash, cost, and the status as an 'Out of gas error'. This indicates that the transaction did not have sufficient payment to cover the gas required for it to complete successfully."),(0,r.kt)("img",{src:(0,s.Z)("/image/gas-concepts/error-account.png"),width:"550",alt:"Gas error in account"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 3"),": Click the ",(0,r.kt)("strong",{parentName:"p"},"Show raw data")," button, to see more details about the deploy. Towards the end of the raw data, you can see the error message."),(0,r.kt)("img",{src:(0,s.Z)("/image/gas-concepts/error-raw.png"),width:"550",alt:"Gas error in raw data"}),(0,r.kt)("h2",{id:"how-do-i-determine-the-gas-cost-for-a-transaction"},"How do I determine the gas cost for a transaction?"),(0,r.kt)("p",null,"Currently, we are hard at work to create tools to help you estimate gas costs. Meanwhile, we recommend using the NCTL tool on your local machine or the ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/"},"Testnet")," to ",(0,r.kt)("a",{parentName:"p",href:"/developers/dapps/sending-deploys"},"deploy your contracts")," in a test environment. You can check a deploy status and roughly see how much it would actually cost when deployed. You can estimate the costs in this way and then add a small buffer if the network state has changed. Note that when estimating gas cost locally or on the Testnet, the blockchain specification needs to match the specification of the Mainnet, where you will need to pay for the transaction with actual Casper (CSPR) tokens."),(0,r.kt)("h2",{id:"why-do-i-see-a-gas-limit-error"},"Why do I see a gas limit error?"),(0,r.kt)("p",null,"You may sometimes see an error such as ",(0,r.kt)("em",{parentName:"p"},"\u2018payment: 2.5, cost: 2.5, Error::GasLimit\u2019"),", This message seems to say that the transaction cost is 2.5 CSPR and you paid 2.5 CSPR, yet the transaction resulted in an error. Let\u2019s explore this error message a little further."),(0,r.kt)("p",null,"When a smart contract hits its gas limit (the payment amount), execution stops. If your limit is 2.5 CSPR, execution stops and that is the computation cost even if the smart contract did not run to completion. So, the error message tries to communicate to you that execution stopped at 2.5 CSPR. The computation resulted in an error because there were not enough funds to run to completion. It would have cost more than 2.5 CSPR to complete execution, but since you only supplied a payment of 2.5 CSPR worth of computation, the network stopped execution there and charged you that much, even though it was a failed transaction. The execution engine does not actually know how much it would have cost if allowed to run to completion, because it did not allow the contract to finish since the contract would have run over its gas limit."))}f.isMDXComponent=!0}}]);