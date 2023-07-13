"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9557],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),g=r,h=p["".concat(l,".").concat(g)]||p[g]||u[g]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3332:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=a(4996),s=["components"],l={title:"Staking",slug:"/staking",tags:["finance","staking","governance"]},c="Staking",d={unversionedId:"concepts/economics/staking",id:"concepts/economics/staking",title:"Staking",description:"A feature of Proof-of-Stake protocols is that token holders can actively participate in the protocol through a mechanism known as staking or delegation. They can stake their tokens with any validator on a Casper network. Alternatively, it is possible to stake tokens via an exchange or custody provider.",source:"@site/source/docs/casper/concepts/economics/staking.md",sourceDirName:"concepts/economics",slug:"/staking",permalink:"/staking",draft:!1,editUrl:"https://github.com/casper-network/docs-new/tree/dev-new/source/docs/casper/concepts/economics/staking.md",tags:[{label:"finance",permalink:"/tags/finance"},{label:"staking",permalink:"/tags/staking"},{label:"governance",permalink:"/tags/governance"}],version:"current",lastUpdatedAt:1689241759,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{title:"Staking",slug:"/staking",tags:["finance","staking","governance"]},sidebar:"concepts",previous:{title:"Staking Concepts",permalink:"/concepts/economics/concepts"},next:{title:"Delegation Details",permalink:"/concepts/economics/delegation"}},p={},u=[{value:"Staking vs. Delegating",id:"staking-vs-delegating",level:2},{value:"Slashing",id:"slashing",level:2},{value:"Delegation Rate",id:"delegation-rate",level:2},{value:"Delegation Fees",id:"delegation-fees",level:2},{value:"Rewards",id:"rewards",level:2},{value:"Selecting a Node for Delegating",id:"selecting-a-node-for-delegating",level:2},{value:"Monitoring Rewards",id:"monitoring-rewards",level:2},{value:"Unbonding Period",id:"unbonding-period",level:2},{value:"Tutorials",id:"tutorials",level:2}],g={toc:u},h="wrapper";function k(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)(h,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"staking"},"Staking"),(0,o.kt)("p",null,"A feature of Proof-of-Stake protocols is that token holders can actively participate in the protocol through a mechanism known as ",(0,o.kt)("strong",{parentName:"p"},"staking")," or ",(0,o.kt)("strong",{parentName:"p"},"delegation"),". They can stake their tokens with any validator on a Casper network. Alternatively, it is possible to stake tokens via an exchange or custody provider."),(0,o.kt)("p",null,"Here are a few common topics related to staking, but we also encourage you to do your own research."),(0,o.kt)("h2",{id:"staking-vs-delegating"},"Staking vs. Delegating"),(0,o.kt)("p",null,"Node operators stake their tokens to earn eligibility to propose and approve blocks on the network. They also run and maintain servers connected to the network. If they win a validator slot, they become validators and help enable the Proof-of-Stake aspect of the network, a process different from mining tokens. Validators thus earn rewards for participating and for securing the network."),(0,o.kt)("p",null,"Anyone can participate in the protocol to earn rewards without maintaining a Casper node (a server that stores a copy of the blockchain). One can delegate or allocate CSPR tokens to a chosen validator on the network. Validators retain a percentage of the rewards generated from staked tokens. Participating in the protocol this way, the community can help improve the network's decentralization and security and earn rewards in return. Block explorers connected to the network usually post the base annual reward rate."),(0,o.kt)("p",null,"Casper does not treat validator stake differently than delegator stake for security reasons."),(0,o.kt)("h2",{id:"slashing"},"Slashing"),(0,o.kt)("p",null,"Presently Casper does not slash if a validator equivocates or misbehaves. If a node equivocates, other validators will ignore its messages, and the node will become inactive. The node will terminate once it detects that it has equivocated."),(0,o.kt)("h2",{id:"delegation-rate"},"Delegation Rate"),(0,o.kt)("p",null,"Validators define a delegation rate that they take in exchange for providing staking services. This rate is a percentage of the rewards that the validator retains for their services."),(0,o.kt)("h2",{id:"delegation-fees"},"Delegation Fees"),(0,o.kt)("p",null,"It is important to know that the cost of the delegation process is approximately 3 CSPR. Ensure you have extra CSPR in your account's main purse apart from the amount you are delegating; otherwise, the transaction will fail. For example, if you want to delegate 1000 CSPR, you need to have at least 1003 CSPR in your account's main purse."),(0,o.kt)("h2",{id:"rewards"},"Rewards"),(0,o.kt)("p",null,"Validators receive rewards proportional to their stake for securing the network and participating in consensus (by voting and finalizing blocks). Delegators receive a portion of the validator's rewards, proportional to what they delegated, minus the validator's delegation rate. The rewards earned are reduced if a validator is offline or cannot vote on many blocks."),(0,o.kt)("p",null,"There is no precise reward per block. Rewards are split proportionally among stakes within an era and are distributed at the end of each era."),(0,o.kt)("h2",{id:"selecting-a-node-for-delegating"},"Selecting a Node for Delegating"),(0,o.kt)("p",null,"As a prospective delegator, it is essential to select a validating node that you can trust. Block explorers such as ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live"},"cspr.live")," provide ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/validators"},"validator performance statistics"),", including a performance score, total stake, number of delegators, and fees. Please do your due diligence before staking tokens with a validator."),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/staking/1.validators.png"),alt:"4.3",width:"500"}),(0,o.kt)("h2",{id:"monitoring-rewards"},"Monitoring Rewards"),(0,o.kt)("p",null,"It's recommended that you check in on how your stake is performing from time to time. If the validator you staked with decides to unbond, your stake will also be unbonded and you will not earn rewards. Ensure that the validator you selected performs as per your expectations."),(0,o.kt)("p",null,"Validators have to win a staking auction by competing for a validator slot with prospective and current validators. This process is permissionless, meaning validators can join and leave the auction without restrictions, except for the unbonding wait period, which lasts 14 hours."),(0,o.kt)("h2",{id:"unbonding-period"},"Unbonding Period"),(0,o.kt)("p",null,"For security purposes, whenever tokens are un-delegated, the protocol will continue to keep the token locked for 14 hours."),(0,o.kt)("h2",{id:"tutorials"},"Tutorials"),(0,o.kt)("p",null,"Navigate to these pages for step-by-step tutorials on creating an account and delegating and undelegating tokens."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.casperwallet.io/"},"Creating an account with the Casper Wallet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/users/funding-from-exchanges"},"Funding an account from an exchange")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/users/delegate-ui"},"Delegating tokens using a block explorer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/users/staking-ledger"},"Delegating with Ledger devices")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/cli/delegate"},"Delegating with the Casper client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/users/undelegate-ui"},"Undelegating tokens using a block explorer"))))}k.isMDXComponent=!0}}]);