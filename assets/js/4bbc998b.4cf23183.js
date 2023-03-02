"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4531],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1609:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),o=["components"],s={},i="FAQ - General",u={unversionedId:"faq/faq-general",id:"faq/faq-general",title:"FAQ - General",description:"Accounts",source:"@site/source/docs/casper/faq/faq-general.md",sourceDirName:"faq",slug:"/faq/faq-general",permalink:"/faq/faq-general",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/faq/faq-general.md",tags:[],version:"current",lastUpdatedAt:1677770607,formattedLastUpdatedAt:"3/2/2023",frontMatter:{},sidebar:"faq",previous:{title:"Frequently Asked Questions (FAQ)",permalink:"/faq"},next:{title:"FAQ - Enterprise",permalink:"/faq/faq-enterpise"}},c={},p=[{value:"Accounts",id:"accounts",level:3},{value:"Minimum CSPR Balance",id:"minimum-cspr-balance",level:3},{value:"Ledger Support",id:"ledger-support",level:3},{value:"Staking",id:"staking",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"faq---general"},"FAQ - General"),(0,l.kt)("h3",{id:"accounts"},"Accounts"),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Should customers see their public key or the account hash while on an exchange website?")),"Exchange customers or end-users only need to see the public key. They do not need to know the account hash. The account hash is only needed in the backend to verify transactions.",(0,l.kt)("p",null,"Exchanges should store the account hash to query and monitor the account. Customers do not need to know this value, so to simplify their experience, we recommend storing both values and displaying only the public key.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"How do I generate an account hash?")),(0,l.kt)("p",null,"You must ensure the following prerequisites are met before you can generate an account hash:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/developers/prerequisites"},"Set up your machine")),(0,l.kt)("li",{parentName:"ol"},"Have a Casper Account and its ",(0,l.kt)("em",{parentName:"li"},"public key")),(0,l.kt)("li",{parentName:"ol"},"Install the Casper ",(0,l.kt)("a",{parentName:"li",href:"/developers/prerequisites#the-casper-command-line-client"},"command-line client"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Generating an Account Hash")),(0,l.kt)("p",null,"To generate an account hash use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client account-address --public-key <PUBLIC KEY HEX CODE>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample Output")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"account-hash-a2c2a41c282452195e5dd267272d12ed3e991467a5f881aab96306bac1cec3e8\n")),(0,l.kt)("p",null,"In the above output, ",(0,l.kt)("inlineCode",{parentName:"p"},"a2c2a41c282452195e5dd267272d12ed3e991467a5f881aab96306bac1cec3e8")," is the account hash and the prefix ",(0,l.kt)("inlineCode",{parentName:"p"},"account-hash-")," is used to make it a tight key.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"What is an `account-hex`?")),(0,l.kt)("p",null,"The ",(0,l.kt)("em",null,"account-hex")," term originates from the JS-SDK naming convention and refers to a public key. We store it and convert it to an account hash.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Is it possible to convert an account hash back to a public key?")),(0,l.kt)("p",null,"No. An account hash is a one-way hashed value of the public key.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Why is my account invalid when I can see it on the Testnet?")),(0,l.kt)("p",null,"You must deposit tokens to activate an account. You can request tokens from ",(0,l.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/tools/faucet"},"the faucet on Testnet"),".")),(0,l.kt)("h3",{id:"minimum-cspr-balance"},"Minimum CSPR Balance"),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"What is the minimum CSPR balance required to transfer?")),(0,l.kt)("p",null,"An account cannot transfer less than 2.5 CSPR.")),(0,l.kt)("h3",{id:"ledger-support"},"Ledger Support"),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Does Casper offer Ledger support?")),(0,l.kt)("p",null,"Yes. Follow ",(0,l.kt)("a",{parentName:"p",href:"https://support.ledger.com/hc/en-us/articles/4416379141009-Casper-CSPR-?docs=true"},"this guide")," to install the Casper app on your Ledger device to manage CSPR.")),(0,l.kt)("h3",{id:"staking"},"Staking"),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"What are the important aspects to consider when delegating tokens to a validator?")),(0,l.kt)("p",null,"Users should consider consistent uptime, prompt upgrades and delegation rates when choosing a validator. Offline and out-of-date validators do not generate rewards."),(0,l.kt)("p",null,"Active engagement in the community is another important aspect.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"How do I stake tokens via the command line?")),(0,l.kt)("p",null,"Follow ",(0,l.kt)("a",{parentName:"p",href:"/developers/cli/delegate"},"the delegation workflow")," to learn how to stake your tokens via the command line.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"How do I stake tokens using cspr.live?")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/users/delegate-ui"},"this article"),".")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"What is self-stake percentage?")),(0,l.kt)("p",null,"Self-stake is the amount of CSPR a validator personally staked on the network from their validating node, expressed as a percentage of the total amount of CSPR staked to that validator. Most validators choose to delegate their own tokens to their validating node as a security practice, which will show as a low self-stake percentage.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"What is slashing?")),(0,l.kt)("p",null,"Slashing is a penalty for inappropriate or malicious behavior. Ordinarily, the official node software will not act maliciously unless intentionally altered. When this happens, the validator in question gets slashed (Note: The network treats validator and delegator tokens equally)."),(0,l.kt)("p",null,"Slashing is not currently enabled on the Casper Mainnet. If a validator behaves poorly on the network, they face eviction from the network and loss of rewards. When slashing is enabled, poor behavior will result in token removal. In this case, you will lose any rewards accrued during the eviction period.")))}h.isMDXComponent=!0}}]);