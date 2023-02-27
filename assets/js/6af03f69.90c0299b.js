"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4316],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},928:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(3117),a=n(102),o=(n(7294),n(3905)),r=["components"],s={},l="Consensus Economics",c={unversionedId:"concepts/economics/consensus",id:"concepts/economics/consensus",title:"Consensus Economics",description:"Highway consensus is a continuous, trust-less process where a fixed set of validators engage in scheduled communication to advance the linear chain of finalized blocks, representing the history of changes to the global state of the blockchain. The fixed set of validators may change at each era boundary. The economics of this layer revolve around validator selection and incentivization of participation according to the schedule.",source:"@site/source/docs/casper/concepts/economics/consensus.md",sourceDirName:"concepts/economics",slug:"/concepts/economics/consensus",permalink:"/concepts/economics/consensus",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/concepts/economics/consensus.md",tags:[],version:"current",lastUpdatedAt:1677502053,formattedLastUpdatedAt:"2/27/2023",frontMatter:{},sidebar:"concepts",previous:{title:"Overview",permalink:"/economics"},next:{title:"Introduction",permalink:"/runtime"}},d={},u=[{value:"Entry",id:"entry",level:2},{value:"Bids",id:"bids",level:3},{value:"Delegation",id:"delegation",level:3},{value:"Incentives",id:"incentives",level:2},{value:"Participation",id:"participation",level:3},{value:"Distribution",id:"distribution",level:4},{value:"Participation schedule",id:"participation-schedule",level:5},{value:"Eligibility",id:"eligibility",level:5},{value:"Inactivity",id:"inactivity",level:3},{value:"Slashing",id:"slashing",level:3},{value:"Founding validators",id:"founding-validators",level:2}],p={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"consensus-economics"},"Consensus Economics"),(0,o.kt)("p",null,"Highway consensus is a continuous, trust-less process where a fixed set of validators engage in scheduled communication to advance the linear chain of finalized blocks, representing the history of changes to the global state of the blockchain. The fixed set of validators may change at each era boundary. The economics of this layer revolve around validator selection and incentivization of participation according to the schedule."),(0,o.kt)("h2",{id:"entry"},"Entry"),(0,o.kt)("p",null,"After genesis, the system selects a set of validators using a stake auction process. The auction takes place in the last block of an era, also called a switch block. An auction contract governs the validator selection process, and a ",(0,o.kt)("em",{parentName:"p"},"chainspec")," configuration file specifies a few key parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"auction_delay")," specifies the amount of time that needs to pass before the system enables a new set of validators. For example, the ",(0,o.kt)("em",{parentName:"li"},"auction_delay")," is 1 for Mainnet. Therefore, after a delay of 1 era, the winning validators become the validating set for the new era."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"validator_slots")," parameter specifies how many validators can win an auction. The auction selects a fixed number of validators based on their highest bids.")),(0,o.kt)("h3",{id:"bids"},"Bids"),(0,o.kt)("p",null,"Each bid is a collection of tokens from a prospective or current validator and its delegators, considered in the auction as a single total. Bids and delegations can increase freely, but withdrawals are subject to an unbonding period governed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"unbonding_delay")," chainspec parameter. Tokens that are in the unbonding period are not part of the sum total considered in the auction. Consequently, the exact amount of the bid, which translates into protocol weight for winning validators, can vary within an era. The bids are visible in the switch block that determines the winners."),(0,o.kt)("p",null,"Each bid contains a delegation rate and activity status. The delegation rate can change at any time. Both of these properties are described further in this document."),(0,o.kt)("h3",{id:"delegation"},"Delegation"),(0,o.kt)("p",null,"Delegation allows third parties to participate in consensus by adding weight to their preferred validators. Rewards received by validators are distributed in proportion to tokens bid and delegated. The current or prospective validator responsible for the bid receives a portion of the delegator rewards set by the delegation rate."),(0,o.kt)("p",null,"Currently, delegation is unrestricted. Please visit ",(0,o.kt)("a",{parentName:"p",href:"/concepts/economics/delegation"},"Delegation details")," page to check more about delegation cost and related details."),(0,o.kt)("h2",{id:"incentives"},"Incentives"),(0,o.kt)("p",null,"Correct operation of the Highway protocol requires the economics of the platform to discourage equivocation for safety and incentivize participation for liveness. Participation consists of on-time block proposals and timely responses to block proposals."),(0,o.kt)("p",null,"Safety may be incentivized through slashing for equivocation. This feature is currently disabled but may be reactivated in the future."),(0,o.kt)("p",null,"The network incentivizes participation by scaling rewards for on-time proposals and responses, taking into account the speed of finalizing blocks. All rewards are added directly to the corresponding bids and delegations."),(0,o.kt)("h3",{id:"participation"},"Participation"),(0,o.kt)("p",null,"Issuance of new tokens and their distribution to validators incentivizes work even under low transaction load."),(0,o.kt)("p",null,"CSPR is issued at a fixed rate and distributed to validators (and, indirectly, delegators) in proportion to their stake. This is analogous to block rewards in Proof-of-Work blockchains, outlining the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The growth of CSPR supply is exponential"),(0,o.kt)("li",{parentName:"ul"},"Issuance takes into account slashed CSPR")),(0,o.kt)("p",null,"With slashing disabled, we can compute block rewards starting with the formula below, where we have these parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"i")," - the era's index as a positive integer ","[","0, 1, 2, ",".",".., n","]"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"initial_supply")," - the number of CSPR at genesis"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"issuance_rate")," - the annual rate at which new CSPR tokens are minted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ticks_per_year")," - the number of milliseconds in a year equal to 31,536,000,000")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"supply(i) = initial_supply * (1 + issuance_rate)^(tick_at_era_start(i) / ticks_per_year)\n")),(0,o.kt)("p",null,"We introduce the ",(0,o.kt)("em",{parentName:"p"},"round issuance rate")," (corresponding to the chainspec parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"round_seigniorage_rate"),") with this formula:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"round_issuance_rate = (1 + issuance_rate)^(2^minimum_round_exponent / ticks_per_year) - 1\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"round issuance rate")," is the annual issuance rate adjusted to a single round of length determined by the chainspec parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"minimum_round_exponent"),". For illustration, an exponent of 14 corresponds to a round length of roughly 16 seconds."),(0,o.kt)("p",null,"Finally, the base round reward is computed as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"base_round_reward(i) = round_issuance_rate * supply(i)\n")),(0,o.kt)("p",null,"This value gives us the maximum amount of CSPR that the validators can collectively receive from a proposed block."),(0,o.kt)("h4",{id:"distribution"},"Distribution"),(0,o.kt)("p",null,"Validators receive tokens for proposing and finalizing blocks according to their performance. The concept of weight is crucial for understanding this distribution scheme:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Weight:")," A validator's bonded stake, used in consensus"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Assigned weight of a block/round:")," The total stake of validators scheduled to participate in a block"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Participated weight of a block/round:")," The total stake of validators that end up participating or sending messages to finalize a block before the end of their respective round")),(0,o.kt)("p",null,"To determine eligibility, we look at ",(0,o.kt)("strong",{parentName:"p"},"on-time finalization (OTF)"),". Validators should finalize blocks on time by sending required messages before the end of their respective round."),(0,o.kt)("p",null,"Switch blocks are not visible to the issuance calculation (as this calculation is performed in the switch block itself for each era), and, consequently, no tokens are issued for switch blocks."),(0,o.kt)("h5",{id:"participation-schedule"},"Participation schedule"),(0,o.kt)("p",null,"The participation schedule is segmented into rounds, which are allocated dynamically according to the validators' exponents and a deterministic (randomized at era start) assignment of validators to milliseconds of an era. Thus, a validator with the round exponent ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," must participate in rounds that repeat every ",(0,o.kt)("inlineCode",{parentName:"p"},"2^n")," ticks."),(0,o.kt)("p",null,"Each validator is assessed according to its round exponent. All assigned validators become eligible to receive tokens as long as the block gets finalized with messages sent within each validator's round."),(0,o.kt)("h5",{id:"eligibility"},"Eligibility"),(0,o.kt)("p",null,"Once a block has been proposed and enough time has passed, the history of protocol messages can be examined to detect whether the block was finalized on time, according to the conditions given above. If the block was ",(0,o.kt)("em",{parentName:"p"},"not")," finalized on time, validators receive a fraction of the expected tokens, governed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"reduced_reward_multiplier")," chainspec parameter. If the block was finalized on time, assigned validators share the reward proportionally to their stake, regardless of whether they have sent messages or not."),(0,o.kt)("h3",{id:"inactivity"},"Inactivity"),(0,o.kt)("p",null,"Validators who send no messages during an entire era are marked as inactive and cease participating in the auction until they send a special deploy that reactivates their bid."),(0,o.kt)("h3",{id:"slashing"},"Slashing"),(0,o.kt)("p",null,"Please review our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/ceps/blob/master/text/0038-equivocator-policy.md"},"Equivocator Policy"),". We are currently conducting research into the utility of slashing as an incentive mechanism."),(0,o.kt)("h2",{id:"founding-validators"},"Founding validators"),(0,o.kt)("p",null,"Founding validators are subject to token lock-up, which prevents them from withdrawing any tokens from their bids for 90 days, then releases their genesis bid tokens in weekly steps, linearly, over an additional 90 days."))}h.isMDXComponent=!0}}]);