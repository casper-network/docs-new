"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6236],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5322:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=["components"],i={},s="Undelegating Tokens with the Casper Client",p={unversionedId:"workflow/developers/undelegate",id:"workflow/developers/undelegate",title:"Undelegating Tokens with the Casper Client",description:"This document details a workflow where tokens delegated to a validator on a Casper network can be undelegated.",source:"@site/source/docs/casper/workflow/developers/undelegate.md",sourceDirName:"workflow/developers",slug:"/workflow/developers/undelegate",permalink:"/workflow/developers/undelegate",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/developers/undelegate.md",tags:[],version:"current",lastUpdatedAt:1677498417,formattedLastUpdatedAt:"2/27/2023",frontMatter:{},sidebar:"workflow",previous:{title:"Delegating with the Casper Client",permalink:"/workflow/developers/delegate"}},d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Sending the Undelegation Request",id:"sending-the-undelegation-deploy",level:2},{value:"Verifying the Undelegation",id:"asserting-the-undelegation",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"undelegating-tokens-with-the-casper-client"},"Undelegating Tokens with the Casper Client"),(0,o.kt)("p",null,"This document details a workflow where tokens delegated to a validator on a Casper network can be undelegated."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You meet all ",(0,o.kt)("a",{parentName:"li",href:"/dapp-dev-guide/setup"},"prerequisites"),", including having a valid ",(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," and the Casper command-line client"),(0,o.kt)("li",{parentName:"ol"},"You have ",(0,o.kt)("a",{parentName:"li",href:"/workflow/developers/delegate"},"delegated tokens")," to a validator on a Casper network and you have the validator's public key"),(0,o.kt)("li",{parentName:"ol"},"As part of the delegation process, you have ",(0,o.kt)("a",{parentName:"li",href:"/workflow/developers/delegate#building-the-delegation-wasm"},"built the casper-node contracts")," that produced the undelegation Wasm to execute on the network")),(0,o.kt)("h2",{id:"sending-the-undelegation-deploy"},"Sending the Undelegation Request"),(0,o.kt)("p",null,"We recommend testing the following steps on the official Testnet before performing them in a live environment like the Casper Mainnet."),(0,o.kt)("p",null,"In this example, we use the Casper client to send a deploy containing the ",(0,o.kt)("inlineCode",{parentName:"p"},"undelegate.wasm")," to the network to initiate the undelegation process."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"casper-client put-deploy \\\n--node-address http://<peer-ip-addres>:7777 \\\n--chain-name casper-test \\\n--session-path <path-to-wasm>/undelegate.wasm \\\n--payment-amount 2500000000 \\\n--session-arg \"validator:public_key='<hex-encoded-validator-public-key>'\" \\\n--session-arg \"amount:u512='<amount-to-delegate>'\"\n--session-arg \"delegator:public_key='<hex-encoded-public-key>'\" \\\n--secret-key <delegator-secret-key>.pem\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," The delegator's public key and the secret key that signs the deploy must be part of the same account key pair."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"node-address")," - An IP address of a node on the network")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"secret-key")," - Path to secret key file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"chain-name")," - Name of the chain, to avoid the deploy from being accidentally or maliciously included in a different chain"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"chain-name")," for Testnet is ",(0,o.kt)("strong",{parentName:"li"},"casper-test")),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"chain-name")," for Mainnet is ",(0,o.kt)("strong",{parentName:"li"},"casper")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"session-path")," - The path to where the ",(0,o.kt)("inlineCode",{parentName:"p"},"undelegate.wasm")," is located")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"session-arg")," - The arguments to the ",(0,o.kt)("inlineCode",{parentName:"p"},"undelegate")," request"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The argument ",(0,o.kt)("inlineCode",{parentName:"li"},"validator")," is the public key of the validator from whom the tokens will be undelegated"),(0,o.kt)("li",{parentName:"ul"},"The argument ",(0,o.kt)("inlineCode",{parentName:"li"},"amount")," is the number of tokens to be undelegated"),(0,o.kt)("li",{parentName:"ul"},"The argument ",(0,o.kt)("inlineCode",{parentName:"li"},"delegator")," is the public key of the account undelegating tokens from a validator")))),(0,o.kt)("h2",{id:"asserting-the-undelegation"},"Verifying the Undelegation"),(0,o.kt)("p",null,"To verify that the undelegation succeeded, you can use the Casper command-line client to generate an RPC request to query the auction state. The subsequent RPC response will confirm that the undelegation request was successfully processed."),(0,o.kt)("p",null,"Here is how you can check the status of the auction to confirm that your bid was withdrawn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info \\\n--node-address http://<peer-ip-address>:7777\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network")),(0,o.kt)("p",null,"If the public key and the amount are absent from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bids")," structure, we can safely conclude that we have indeed undelegated from the validator."),(0,o.kt)("p",null,"If your account is on the official Testnet or Mainnet, you can use the block explorer to look up your account balance and see that the tokens have been added to your balance:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://testnet.cspr.live/"},"Testnet explorer")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://cspr.live/"},"Mainnet explorer"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important Note"),": After undelegating tokens from a validator, you must wait for the unbonding period to lapse before redelegating tokens to either the same validator or a different validator."))}m.isMDXComponent=!0}}]);