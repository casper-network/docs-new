"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2864],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,h=d["".concat(s,".").concat(p)]||d[p]||g[p]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2771:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return g}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=a(4996),l=["components"],s={},c="Delegating with Ledger Devices",u={unversionedId:"users/staking-ledger",id:"users/staking-ledger",title:"Delegating with Ledger Devices",description:"Ledger Initialization",source:"@site/source/docs/casper/users/staking-ledger.md",sourceDirName:"users",slug:"/users/staking-ledger",permalink:"/users/staking-ledger",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/users/staking-ledger.md",tags:[],version:"current",lastUpdatedAt:1688572581,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{},sidebar:"users",previous:{title:"Ledger Setup with Casper",permalink:"/users/ledger-setup"},next:{title:"Transferring Tokens using a Block Explorer",permalink:"/users/token-transfer"}},d={},g=[{value:"Ledger Initialization",id:"1-initialization",level:2},{value:"<strong>Important Notes</strong>",id:"important-notes",level:3},{value:"Staking with a Validator",id:"2-staking",level:2},{value:"Connect and Login with Ledger",id:"connect-and-login-with-ledger",level:3},{value:"Receive Tokens from an External Source",id:"receive-tokens-from-an-external-source",level:3},{value:"Staking Tokens",id:"staking-tokens",level:3},{value:"Unstaking with a Validator",id:"3-unstaking",level:2},{value:"Initiate the Undelegation",id:"initiate-the-undelegation",level:3},{value:"Sign the Undelegation",id:"sign-the-undelegation",level:3}],p={toc:g},h="wrapper";function k(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"delegating-with-ledger-devices"},"Delegating with Ledger Devices"),(0,i.kt)("h2",{id:"1-initialization"},"Ledger Initialization"),(0,i.kt)("p",null,"Before getting started, you need to complete two prerequisite steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set up your Ledger device using the ",(0,i.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/4416379141009-Casper-CSPR-?docs=true"},"official documentation"),"."),(0,i.kt)("li",{parentName:"ol"},"Connect the Ledger to your ",(0,i.kt)("a",{parentName:"li",href:"https://cspr.live/"},"cspr.live")," account by following the ",(0,i.kt)("a",{parentName:"li",href:"/users/ledger-setup"},"Ledger Setup")," guide.")),(0,i.kt)("h3",{id:"important-notes"},(0,i.kt)("strong",{parentName:"h3"},"Important Notes")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("span",{style:{color:"#ee5945"}},"CRITICAL")),": Write down and hide your recovery codes! These are necessary to be able to restore your account if you lose or damage the hardware key."),(0,i.kt)("li",{parentName:"ol"},"Currently, Casper accounts do not link to the Ledger Live application, so your account balances will not show on Ledger Live. However, you can still safely use the Casper application on the hardware key to transact with and store tokens."),(0,i.kt)("li",{parentName:"ol"},"When logging in to ",(0,i.kt)("a",{parentName:"li",href:"https://cspr.live/"},"cspr.live"),", the UI will offer numerous public keys. Choose any of them. They are all derived from the Master Seed that is secured in the Ledger key (",(0,i.kt)("a",{parentName:"li",href:"https://www.ledger.com/academy/crypto/where-are-my-coins"},"more info here"),"). Make sure you write down whichever public key(s) you end up using so that you have no confusion when trying to log in.")),(0,i.kt)("h2",{id:"2-staking"},"Staking with a Validator"),(0,i.kt)("h3",{id:"connect-and-login-with-ledger"},"Connect and Login with Ledger"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect your Ledger to your computer via USB and enter your PIN to unlock it.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Open the Casper app on the Ledger (you will see the message "Casper Ready").'),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger1.png"),alt:"Casper Ready",width:"400"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sign in to ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/"},"cspr.live"),' with your Ledger by clicking "Connect" under the Ledger option, as shown in the screenshot below.'),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger2.png"),alt:"Casper Ready",width:"800"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the public key connected to your Ledger account."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger3.png"),alt:"Casper Ready",width:"800"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"View your account by clicking on your public key at the top right corner."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger4.png"),alt:"Casper Ready",width:"800"}))),(0,i.kt)("h3",{id:"receive-tokens-from-an-external-source"},"Receive Tokens from an External Source"),(0,i.kt)("p",null,"This portion will vary slightly depending on where your funds are currently stored. However, the process will require that you send tokens to your public key as described in the ",(0,i.kt)("a",{parentName:"p",href:"/users/ledger-setup#receive-tokens"},"documentation"),"."),(0,i.kt)("h3",{id:"staking-tokens"},"Staking Tokens"),(0,i.kt)("p",null,"Once you have tokens in your account, staking (delegating) with a validator is easy."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Go back to your account, but this time open the "delegate" tab located at: ',(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/delegate-stake"},"https://cspr.live/delegate-stake")," (alternatively, click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Wallet \u21d2 Delegate Stake")," to go there).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the validator list, choose any validator you like. You will notice that validators charge different fees and have different amounts staked to them. This may inform your decision to choose the right validator for you.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Specify the amount you wish to stake or click "Delegate max" as shown below. Notes:'),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Remember that the total delegation amount to one validator cannot be less than 500 CSPR."),(0,i.kt)("li",{parentName:"ol"},"Both delegation and undelegation have an associated fee, so you need to leave some funds in your account to cover transaction fees. Otherwise, you may need to deposit additional funds to undelegate later."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click "Next" to continue, as shown below.'),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger5.png"),alt:"Casper Ready",width:"800"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'The page will update with a confirmation page asking you to verify all the details. If everything looks correct, click the "Confirm and delegate stake" button.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'You will be presented with a final page asking you to sign the transaction with Ledger. Click the "Sign with Ledger" button at the bottom.'),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Note"),': If you get an error showing a "Transaction rejected" message, make sure your Ledger device is active and connected to your computer. You may also need to re-enter your PIN if it locked itself due to inactivity.'),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger6.png"),alt:"Casper Ready",width:"800"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'On the Ledger, you will see a message saying, "Please review". Click through the fields and verify everything matches what is being shown to you on ',(0,i.kt)("a",{parentName:"p",href:"https://cspr.live"},"cspr.live"),"."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger7.png"),alt:"Casper Ready",width:"400"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Once you click "Approve", you will see the Delegation Completed screen verifying that your staking successfully was submitted to the blockchain.'),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger8.png"),alt:"Casper Ready",width:"400"})," ",(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger9.png"),alt:"Casper Ready",width:"800"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'At this point, you can return to your account and wait until the completion of the era when the block gets included in the chain. Once the era completes, you will see that your liquid balance has decreased by your staked amount and is reflected in the "Staked As Delegator" row.'),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Note"),": If you staked your full balance, don't panic if you see a 0 CSPR balance whenever you log in! This is because it shows your liquid assets, not your total balance. You can go to your account details page, as shown below, to see your full balance and asset breakdown between liquid, staked, and undelegated tokens."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger10.png"),alt:"Casper Ready",width:"800"}))),(0,i.kt)("h2",{id:"3-unstaking"},"Unstaking with a Validator"),(0,i.kt)("h3",{id:"initiate-the-undelegation"},"Initiate the Undelegation"),(0,i.kt)("p",null,'Now that you have funds delegated, you can liquidate them by undelegating them first. As demonstrated below, on your account\'s profile page, click "Undelegate" to get started.'),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger11.png"),alt:"Casper Ready",width:"800"}),(0,i.kt)("p",null,'The next page, "Undelegation details", will ask you how much you wish to undelegate. If you select "Undelegate max", it will attempt to liquidate all of your staked assets (minus the transaction fee). Once you enter a valid amount, the "Next" button will become clickable. Below you can see that I entered 313.02931 CSPR to be able to proceed.'),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger12.png"),alt:"Casper Ready",width:"800"}),(0,i.kt)("p",null,'You will next be shown a confirmation screen. If everything looks good, then click "Confirm and undelegate stake" to proceed.'),(0,i.kt)("h3",{id:"sign-the-undelegation"},"Sign the Undelegation"),(0,i.kt)("p",null,"You will have to sign the transaction to verify your account is initiating this action."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect your Ledger device to your computer.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Unlock your Ledger by entering your PIN.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Open the "Casper" app and ensure you see "Casper Ready".')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then back on ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live"},"cspr.live"),' click the "Sign with Ledger" button shown below.'),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger13.png"),alt:"Casper Ready",width:"800"}))),(0,i.kt)("p",null,'On your Ledger, you will see the transaction details. Verify all the information with what is being presented on the screen. If it looks good, then approve the transaction. If all goes according to plan, you will be presented with an "Undelegation completed!" screen.'),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger14.png"),alt:"Casper Ready",width:"800"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),': There is a 7 era delay to undelegate. Era duration is approximately 120 minutes. While the funds go through undelegation, the balance will appear in the "Undelegation" row on your account profile page, as you can see below.'),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger15.png"),alt:"Casper Ready",width:"800"}),(0,i.kt)("p",null,"After the undelegation period completes, your funds will be liquid and available for you to re-stake, withdraw, or use however you wish."))}k.isMDXComponent=!0}}]);