"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4752],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(a),p=r,h=g["".concat(s,".").concat(p)]||g[p]||d[p]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3451:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return g}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=a(4996),l=["components"],s={},c="Delegating with Ledger Devices",u={unversionedId:"workflow/staking-ledger",id:"workflow/staking-ledger",title:"Delegating with Ledger Devices",description:"Ledger Initialization",source:"@site/source/docs/casper/workflow/staking-ledger.md",sourceDirName:"workflow",slug:"/workflow/staking-ledger",permalink:"/workflow/staking-ledger",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/staking-ledger.md",tags:[],version:"current",lastUpdatedAt:1675422820,formattedLastUpdatedAt:"2/3/2023",frontMatter:{}},d={},g=[{value:"Ledger Initialization",id:"1-initialization",level:2},{value:"<strong>Important Notes</strong>",id:"important-notes",level:3},{value:"Staking with a Validator",id:"2-staking",level:2},{value:"Connect and Login with Ledger",id:"connect-and-login-with-ledger",level:3},{value:"Receive Tokens from External Wallet",id:"receive-tokens-from-external-wallet",level:3},{value:"Staking Tokens",id:"staking-tokens",level:3},{value:"Unstaking with a Validator",id:"3-unstaking",level:2},{value:"Initiate the Undelegation",id:"initiate-the-undelegation",level:3},{value:"Sign the Undelegation",id:"sign-the-undelegation",level:3}],p={toc:g};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"delegating-with-ledger-devices"},"Delegating with Ledger Devices"),(0,i.kt)("h2",{id:"1-initialization"},"Ledger Initialization"),(0,i.kt)("p",null,"Before getting started, you need to complete two prerequisite steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Setup your Ledger device from their ",(0,i.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/4416379141009-Casper-CSPR-?docs=true"},"official documentation"),"."),(0,i.kt)("li",{parentName:"ol"},"Connect your Ledger to your ",(0,i.kt)("a",{parentName:"li",href:"https://cspr.live/"},"cspr.live")," account by following the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.casperlabs.io/workflow/ledger-setup/"},"Ledger Setup")," guide.")),(0,i.kt)("h3",{id:"important-notes"},(0,i.kt)("strong",{parentName:"h3"},"Important Notes")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("span",{style:{color:"#ee5945"}},"CRITICAL")),": Write down and hide your recovery codes! Without these, you will never be able to restore your account in the event that you lose or damage the hardware key."),(0,i.kt)("li",{parentName:"ol"},"Currently, Casper accounts do not link to the Ledger Live application, so your account balances will not show on Ledger Live. However, you can still safely use the Casper application on the hardware key to transact with and store tokens."),(0,i.kt)("li",{parentName:"ol"},"When logging in to ",(0,i.kt)("a",{parentName:"li",href:"https://cspr.live/"},"cspr.live"),", the UI will offer numerous public keys. Choose any of them. They are all derived from the Master Seed that is secured in the Ledger key (",(0,i.kt)("a",{parentName:"li",href:"https://www.ledger.com/back-to-basics-part-1where-are-my-coins"},"more info here"),"). Make sure you write down whichever public key(s) that you end up using so that you have no confusion when trying to login in the future.")),(0,i.kt)("h2",{id:"2-staking"},"Staking with a Validator"),(0,i.kt)("h3",{id:"connect-and-login-with-ledger"},"Connect and Login with Ledger"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect your Ledger to your computer via USB and enter your PIN to unlock it.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the Casper app on the Ledger (you will see the message \u201cCasper Ready\u201d)."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger1.png"),alt:"Casper Ready",width:"400"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sign in to ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/"},"cspr.live")," with your Ledger by clicking \u201cConnect\u201d under the Ledger option as shown in the screenshot below."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger2.png"),alt:"Casper Ready",width:"800"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the public key connected to your Ledger account."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger3.png"),alt:"Casper Ready",width:"800"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"View your account by clicking on your public key at the top right corner."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger4.png"),alt:"Casper Ready",width:"800"}))),(0,i.kt)("h3",{id:"receive-tokens-from-external-wallet"},"Receive Tokens from External Wallet"),(0,i.kt)("p",null,"This portion will vary slightly depending on where your funds are currently stored. However, the process will require that you send tokens to your public key as described in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.casperlabs.io/workflow/ledger-setup/#receive-tokens"},"documentation"),"."),(0,i.kt)("h3",{id:"staking-tokens"},"Staking Tokens"),(0,i.kt)("p",null,"Once you have tokens in your account, staking (delegating) with a validator is easy!"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Go back to your account but this time open the "delegate" tab located at: ',(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/delegate-stake"},"https://cspr.live/delegate-stake")," (alternatively, you click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Wallet \u21d2 Delegate Stake")," to go there).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the validator list, choose any validator you like. You will notice they all charge different fees and have different amounts staked to them. This may inform your decision in choosing the validator that is right for you.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Specify the amount you wish to stake or click \u201cDelegate max\u201d as shown below. Notes:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Keep in mind that the total delegation amount to one validator cannot be less than 500 CSPR."),(0,i.kt)("li",{parentName:"ol"},"Both delegation and undelegation have an associated fee, so you may wish to leave some funds in your account to cover transaction fees. Otherwise, you may need to deposit additional funds to undelegate later."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click \u201cNext\u201d to continue as shown below."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger5.png"),alt:"Casper Ready",width:"800"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The page will update with a confirmation page asking you to verify all the details. If everything looks correct, click the \u201cConfirm and delegate stake\u201d button.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You will be presented with a final page asking you to sign the transaction with Ledger. Click the \u201cSign with Ledger\u201d button at the bottom."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Note"),": If you get an error showing a \u201cTransaction rejected\u201d message, then make sure your Ledger device is active and connected to your computer. You may also need to re-enter your PIN if it locked itself due to inactivity."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger6.png"),alt:"Casper Ready",width:"800"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the Ledger, you will see a message saying \u201cPlease review\u201d. Click through the fields and verify everything matches what is being shown to you on ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live"},"cspr.live"),"."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger7.png"),alt:"Casper Ready",width:"400"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once you click \u201cApprove\u201d you will see the Delegation Completed screen verifying that your staking successfully was submitted to the blockchain."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger8.png"),alt:"Casper Ready",width:"400"})," ",(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger9.png"),alt:"Casper Ready",width:"800"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"At this point, you can return to your account and wait until the completion of the era when the block gets included into the chain. Once the era completes, you will see that your liquid balance has decreased by your staked amount and reflected in the \u201cStaked As Delegator\u201d row in your account."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Note"),": If you staked your full balance, don\u2019t panic if you see a 0 CSPR balance whenever you log in! This is just because it is showing your liquid assets, not your total balance. If you want to see your full balance and asset breakdown between liquid, staked, and undelegated tokens, you can go to your account details page as shown below."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger10.png"),alt:"Casper Ready",width:"800"}))),(0,i.kt)("h2",{id:"3-unstaking"},"Unstaking with a Validator"),(0,i.kt)("h3",{id:"initiate-the-undelegation"},"Initiate the Undelegation"),(0,i.kt)("p",null,"Now that you have funds delegated, you may wish to liquidate them by unstaking. As demonstrated below, on your account\u2019s profile page, click \u201cUndelegate\u201d to get started."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger11.png"),alt:"Casper Ready",width:"800"}),(0,i.kt)("p",null,"The next page \u201cUndelegation details\u201d will ask you how much you wish to undelegate. If you select \u201cUndelegate max\u201d, it will attempt to liquidate all of your staked assets (minus the transaction fee). Once you enter a valid amount, the \u201cNext\u201d button will become clickable. Below you can see that I entered 313.02931 CSPR to be able to proceed."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger12.png"),alt:"Casper Ready",width:"800"}),(0,i.kt)("p",null,"You will next be shown a confirmation screen. If everything looks good, then click \u201cConfirm and undelegate stake\u201d to proceed."),(0,i.kt)("h3",{id:"sign-the-undelegation"},"Sign the Undelegation"),(0,i.kt)("p",null,"You will have to sign the transaction to verify your account is initiating this action."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect your Ledger device to your computer if it is not already.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Unlock your Ledger by entering your PIN.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the \u201cCasper\u201d app and make sure that you see \u201cCasper Ready\u201d.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then back on ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live"},"cspr.live")," click the \u201cSign with Ledger\u201d button shown below."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger13.png"),alt:"Casper Ready",width:"800"}))),(0,i.kt)("p",null,"On your Ledger, you will see the transaction details. Verify all the information with what is being presented to you on the screen. If it looks good, then approve the transaction. If all goes according to plan, you will be presented with an \u201cUndelegation completed!\u201d screen."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger14.png"),alt:"Casper Ready",width:"800"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": There is a 7 era delay to undelegate. Era duration is approximately 120 minutes. While the funds go through undelegation, the balance will appear in the \u201cUndelegation\u201d row in your account profile page as you can see below."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/ledger/staking/ledger15.png"),alt:"Casper Ready",width:"800"}),(0,i.kt)("p",null,"After the undelegation period completes, your funds will be liquid and available for you to re-stake, withdraw, or use however you wish."),(0,i.kt)("p",null,"Enjoy the fruits of your staking labor!"))}h.isMDXComponent=!0}}]);