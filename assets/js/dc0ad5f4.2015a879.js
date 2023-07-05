"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7806],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||f[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6250:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=n(4996),s=["components"],c={},l="Funding Mainnet Accounts from an Exchange",u={unversionedId:"users/funding-from-exchanges",id:"users/funding-from-exchanges",title:"Funding Mainnet Accounts from an Exchange",description:"To send CSPR tokens from an exchange to a Mainnet account, you need the Mainnet account's public key. Then, you can set up a withdrawal request from the exchange using this public key. The transfer will take a few minutes.",source:"@site/source/docs/casper/users/funding-from-exchanges.md",sourceDirName:"users",slug:"/users/funding-from-exchanges",permalink:"/users/funding-from-exchanges",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/users/funding-from-exchanges.md",tags:[],version:"current",lastUpdatedAt:1688572581,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{},sidebar:"users",previous:{title:"Transferring Tokens using a Block Explorer",permalink:"/users/token-transfer"},next:{title:"Funding Testnet Accounts",permalink:"/users/testnet-faucet"}},p={},f=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Transfers from Coinlist to Casper Mainnet",id:"transfers-from-coinlist-to-casper-mainnet",level:2}],h={toc:f},m="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)(m,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"funding-mainnet-accounts-from-an-exchange"},"Funding Mainnet Accounts from an Exchange"),(0,i.kt)("p",null,"To send CSPR tokens from an exchange to a Mainnet account, you need the ",(0,i.kt)("strong",{parentName:"p"},"Mainnet account's public key"),". Then, you can set up a withdrawal request from the exchange using this public key. The transfer will take a few minutes."),(0,i.kt)("p",null,"This guide demonstrates a withdrawal from ",(0,i.kt)("a",{parentName:"p",href:"https://coinlist.co/"},"Coinlist")," to the Casper Mainnet using the ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/"},"cspr.live")," block explorer. You need to contact the exchange for instructions if you are working with a different exchange."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before starting, copy the public key where you wish to transfer funds. The screenshot below shows the account page on ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/"},"https://cspr.live/")," and the field you need to specify in the withdrawal request from Coinlist."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/exchanges/1.account-public-key.png"),alt:"Account public key from CSPR.live"}),(0,i.kt)("h2",{id:"transfers-from-coinlist-to-casper-mainnet"},"Transfers from Coinlist to Casper Mainnet"),(0,i.kt)("p",null,"Try these steps with a small amount of CSPR first. After one successful transfer, you will be more comfortable transferring larger amounts."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log into your ",(0,i.kt)("a",{parentName:"li",href:"https://coinlist.co/"},"https://coinlist.co/")," account."),(0,i.kt)("li",{parentName:"ol"},'Go to the "Wallet" tab.')),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/exchanges/2.coinlist-wallet.png"),alt:"Coinlist Wallet tab",width:"200"}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},'Click on the "CSPR" section.')),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/exchanges/3.cspr-section-coinlist.png"),alt:"CSPR on Coinlist",width:"200"}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},'Click on the "Withdraw" button.')),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/exchanges/4.withdraw-coinlist.png"),alt:"Withdraw on Coinlist"}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},'Enter the public key of the Mainnet account in the "Recipient Address" field of the withdrawal request.')),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/tutorials/exchanges/5.withdraw-fields-coinlist.png"),alt:"Withdrawal fields on Coinlist",width:"400"}),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Enter 0 in the "Transfer ID" field or another value that is meaningful to you. ',(0,i.kt)("strong",{parentName:"p"},"You MUST enter a value, or the transfer will fail!"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the CSPR amount you wish to transfer.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click "Review".')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit the transfer request. Wait approximately 5 minutes, and then go to the ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/"},"https://cspr.live/"),' site to verify your account details. On the account page, you should see that the "Liquid Account Balance" reflects the amount you have transferred.'))))}d.isMDXComponent=!0}}]);