"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7925],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8471:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"Unbonding"},l="Unbonding as a Validator",c={unversionedId:"operators/becoming-a-validator/unbonding",id:"operators/becoming-a-validator/unbonding",title:"Unbonding",description:"Once a bid is placed, it will remain in the state of the auction contract, even if the bid fails to win a slot immediately. New slots may become available if bonded validators leave the network or reduce their bond amounts. Therefore, a bid must be explicitly withdrawn to remove it from the auction.",source:"@site/source/docs/casper/operators/becoming-a-validator/unbonding.md",sourceDirName:"operators/becoming-a-validator",slug:"/operators/becoming-a-validator/unbonding",permalink:"/operators/becoming-a-validator/unbonding",draft:!1,editUrl:"https://github.com/casper-network/docs-new/tree/dev-new/source/docs/casper/operators/becoming-a-validator/unbonding.md",tags:[],version:"current",lastUpdatedAt:1692636406,formattedLastUpdatedAt:"Aug 21, 2023",frontMatter:{title:"Unbonding"},sidebar:"operators",previous:{title:"Bonding",permalink:"/operators/becoming-a-validator/bonding"},next:{title:"Recovery",permalink:"/operators/becoming-a-validator/recovering"}},d={},p=[{value:"Method 1: Unbonding with the System Auction Contract",id:"withdraw-system-auction",level:2},{value:"Method 2: Unbonding with Compiled Wasm",id:"withdraw-compiled-wasm",level:2},{value:"Check the Auction Contract",id:"check-the-auction-contract",level:2},{value:"Unbonding Wait Period",id:"unbonding-wait-period",level:2}],u={toc:p},m="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unbonding-as-a-validator"},"Unbonding as a Validator"),(0,r.kt)("p",null,"Once a bid is placed, it will remain in the state of the auction contract, even if the bid fails to win a slot immediately. New slots may become available if bonded validators leave the network or reduce their bond amounts. Therefore, a bid must be explicitly withdrawn to remove it from the auction."),(0,r.kt)("h2",{id:"withdraw-system-auction"},"Method 1: Unbonding with the System Auction Contract"),(0,r.kt)("p",null,"This method withdraws a bid using the system auction contract. Call the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw_bid")," entry point from the system auction contract. Using this method, you do not need to build any contracts, reducing costs and complexity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT_IN_MOTES> \\\n--session-hash <SESSION_HASH> \\\n--session-entry-point withdraw_bid \\\n--session-arg=\"public_key:public_key='<PUBLIC_KEY_HEX>'\" \\\n--session-arg=\"amount:u512='<AMOUNT_TO_WITHDRAW>'\"\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"secret-key")," - The file name containing the secret key of the account paying for the Deploy"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"chain-name")," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,r.kt)("em",{parentName:"li"},"casper"),". For Testnet, use ",(0,r.kt)("em",{parentName:"li"},"casper-test")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"payment-amount")," - The payment for the Deploy in motes. This entry point call needs 2.5 CSPR for node version ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml"},"1.5.1")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"session-hash")," - Hex-encoded hash of the stored auction contract, which depends on the network you are using. For Casper's Mainnet and Testnet, the hashes are as follows:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Testnet"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mainnet"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"hash-ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea"))),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"session-entry-point")," - Name of the entrypoint that will be used when calling the contract")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw_bid")," entry point expects two arguments, while the third one is optional:"),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"public key"),": The hexadecimal public key of the account's purse to withdraw. This key must match the secret key that signs the deploy and has to match the public key of a bid in the auction contract"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"amount"),": The amount being withdrawn")),(0,r.kt)("p",null,"The command will return a deploy hash, which is needed to verify the deploy's processing results."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw_bid")," entry point on the auction contract has a fixed cost of 2.5 CSPR.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"This example command uses the Casper Testnet to withdraw 5 CSPR from the bid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper casper-client put-deploy \\\n--node-address http://65.21.75.254:7777 \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--chain-name casper-test \\\n--payment-amount 2500000000 \\\n--session-hash hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2 \\\n--session-entry-point withdraw_bid \\\n--session-arg \"public_key:public_key='01c297d2931fec7e22b2fb1ae3ca5afdfacc2c82ba501e8ed158eecef82b4dcdee'\" \\\n--session-arg \"amount:U512='$[5 * 1000000000]'\"\n")),(0,r.kt)("p",null,"Below is the same command with the optional purse set to a different purse where the amount will be returned. ",(0,r.kt)("strong",{parentName:"p"},"Adjust all the values to your use case.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper casper-client put-deploy \\\n--node-address http://65.21.75.254:7777 \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--chain-name casper-test \\\n--payment-amount 2500000000 \\\n--session-hash hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2 \\\n--session-entry-point withdraw_bid \\\n--session-arg \"public_key:public_key='01c297d2931fec7e22b2fb1ae3ca5afdfacc2c82ba501e8ed158eecef82b4dcdee'\" \\\n--session-arg \"amount:U512='$[5 * 1000000000]'\"\n")),(0,r.kt)("h2",{id:"withdraw-compiled-wasm"},"Method 2: Unbonding with Compiled Wasm"),(0,r.kt)("p",null,"There is a second way to withdraw a bid, using the compiled Wasm ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw_bid.wasm"),". The process is the same as bonding but uses a different contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT> \\\n--session-path <PATH>/casper-node/target/wasm32-unknown-unknown/release/withdraw_bid.wasm \\\n--session-arg=\"public_key:public_key='<PUBLIC_KEY_HEX>'\" \\\n--session-arg=\"amount:u512='<AMOUNT_TO_WITHDRAW>'\"\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"secret-key")," - The file name containing the secret key of the account paying for the Deploy"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"chain-name")," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,r.kt)("em",{parentName:"li"},"casper"),". For Testnet, use ",(0,r.kt)("em",{parentName:"li"},"casper-test")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"payment-amount")," - The payment for the Deploy in motes estimated"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"session-path")," - The path to the compiled Wasm on your computer")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw_bid.wasm")," expects two arguments, while the third one is optional:"),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"public key"),": The hexadecimal public key of the account's purse to withdraw. This key must match the secret key that signs the deploy and has to match the public key of a bid in the auction contract"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"amount"),": The amount being withdrawn")),(0,r.kt)("p",null,"The command will return a deploy hash, which is needed to verify the deploy's processing results."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This method is more expensive than calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw_bid")," entrypoint in the system auction contract, which has a fixed cost of 2.5 CSPR.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"Here is an example request to unbond stake using the ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw_bid.wasm"),". The payment amount specified is 4 CSPR. You must modify the payment and other values in the deploy based on the network's ",(0,r.kt)("a",{parentName:"p",href:"/concepts/glossary/C#chainspec"},"chainspec.toml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper casper-client put-deploy \\\n--node-address http://65.21.75.254:7777 \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--chain-name casper-test \\\n--session-path $HOME/casper-node/target/wasm32-unknown-unknown/release/withdraw_bid.wasm \\\n--payment-amount 4000000000 \\\n--session-arg=\"public_key:public_key='01c297d2931fec7e22b2fb1ae3ca5afdfacc2c82ba501e8ed158eecef82b4dcdee'\" \\\n--session-arg=\"amount:u512='1000000000000'\"\n")),(0,r.kt)("h2",{id:"check-the-auction-contract"},"Check the Auction Contract"),(0,r.kt)("p",null,"Check the auction contract for updates to the bid amounts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info --node-address http://<HOST:PORT>\n")),(0,r.kt)("h2",{id:"unbonding-wait-period"},"Unbonding Wait Period"),(0,r.kt)("p",null,"To prevent long-range attacks, requests to unbond must go through a mandatory wait period, currently set to 7 eras lasting approximately 14-16 hours."))}h.isMDXComponent=!0}}]);