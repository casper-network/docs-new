"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7925],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8471:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={},c="Unbonding as a Validator",l={unversionedId:"operators/becoming-a-validator/unbonding",id:"operators/becoming-a-validator/unbonding",title:"Unbonding as a Validator",description:"Once a bid is placed, it will remain in the state of the auction contract, even if the bid fails to win a slot immediately. This is because new slots may become available if bonded validators leave the network or reduce their bond amounts. Therefore, a bid must be explicitly withdrawn to remove it from the auction. Bonded validators also have a bid in the auction; to unbond stake, this bid must be reduced. Since tokens will be transferred out of the bid purse, it's essential to compile the contract to withdraw the bid yourself so there is confidence in the correctness of the contract. The process is essentially the same as bonding but uses a different contract, withdraw_bid.wasm.",source:"@site/source/docs/casper/operators/becoming-a-validator/unbonding.md",sourceDirName:"operators/becoming-a-validator",slug:"/operators/becoming-a-validator/unbonding",permalink:"/operators/becoming-a-validator/unbonding",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/operators/becoming-a-validator/unbonding.md",tags:[],version:"current",lastUpdatedAt:1680518904,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{},sidebar:"operators",previous:{title:"Inactive vs. Faulty Validator Nodes",permalink:"/operators/becoming-a-validator/inactive-vs-faulty"},next:{title:"The Chain Specification",permalink:"/operators/setup-network/chain-spec"}},u={},d=[{value:"Withdrawal Request",id:"withdrawal-request",level:2},{value:"Contract Arguments",id:"contract-arguments",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Example Response",id:"example-response",level:3},{value:"Check the Auction Contract",id:"check-the-auction-contract",level:2},{value:"Unbonding Wait Period",id:"unbonding-wait-period",level:2}],p={toc:d},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"unbonding-as-a-validator"},"Unbonding as a Validator"),(0,o.kt)("p",null,"Once a bid is placed, it will remain in the state of the auction contract, even if the bid fails to win a slot immediately. This is because new slots may become available if bonded validators leave the network or reduce their bond amounts. Therefore, a bid must be explicitly withdrawn to remove it from the auction. Bonded validators also have a bid in the auction; to unbond stake, this bid must be reduced. Since tokens will be transferred out of the bid purse, it's essential to compile the contract to withdraw the bid yourself so there is confidence in the correctness of the contract. The process is essentially the same as bonding but uses a different contract, ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw_bid.wasm"),"."),(0,o.kt)("h2",{id:"withdrawal-request"},"Withdrawal Request"),(0,o.kt)("p",null,"To withdraw a bid, compile the contract and submit a deploy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo casper-client put-deploy \\\n--chain-name <CHAIN_NAME> \\\n--node-address http://<HOST>:<PORT> \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--session-path $HOME/casper-node/target/wasm32-unknown-unknown/release/withdraw_bid.wasm \\\n--payment-amount 300000000 \\\n--session-arg="public_key:public_key=\'<PUBLIC_KEY_HEX>\'" \\\n--session-arg="amount:u512=\'<AMOUNT_TO_WITHDRAW>\'" \\\n--session-arg="unbond_purse:opt_uref=null"\n')),(0,o.kt)("p",null,"Note the following command options above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The chain name for Mainnet is ",(0,o.kt)("inlineCode",{parentName:"li"},"casper")," and for Testnet is ",(0,o.kt)("inlineCode",{parentName:"li"},"casper-test")),(0,o.kt)("li",{parentName:"ul"},"The default port for node address is 7777"),(0,o.kt)("li",{parentName:"ul"},"The path to the contract and keys"),(0,o.kt)("li",{parentName:"ul"},"The session arguments need to be encased in double-quotes, with the parameter values in single quotes"),(0,o.kt)("li",{parentName:"ul"},"The payment amount is specified in motes")),(0,o.kt)("h3",{id:"contract-arguments"},"Contract Arguments"),(0,o.kt)("p",null,"The withdraw_bid contract accepts 3 arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"public key"),": The hexadecimal public key of the account's purse to withdraw. This key must match the secret key that signs the deployment and has to match the public key of a bid in the auction contract."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"amount"),": This is the amount that is being withdrawn."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"unbond_purse")," (optional): The purse to which the withdrawal amount will be remitted. Defaults to the main purse for the account if not provided.")),(0,o.kt)("h3",{id:"example-request"},"Example Request"),(0,o.kt)("p",null,"Here is an example request to unbond stake:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo -u casper casper-client put-deploy \\\n --chain-name casper-test \\\n --node-address http://65.21.235.219:7777 \\\n --secret-key /etc/casper/validator_keys/secret_key.pem \\\n --session-path $HOME/casper-node/target/wasm32-unknown-unknown/release/withdraw_bid.wasm \\\n --payment-amount 3000000000 \\\n --session-arg="public_key:public_key=\'01da0e438afc74181beb2afae798e9e6851bdf897117a306eb32caafe46c1c0bc8\'" \\\n --session-arg="amount:u512=\'5000000000000\'" \\\n --session-arg="unbond_purse:opt_uref=null"\n')),(0,o.kt)("h3",{id:"example-response"},"Example Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": 250941394679501522,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.8",\n    "deploy_hash": "8fca736d6beb59e225da6cf7b553031a28b3f100997c84058cab6d09c58d7188"\n  }\n}\n')),(0,o.kt)("h2",{id:"check-the-auction-contract"},"Check the Auction Contract"),(0,o.kt)("p",null,"Check the auction contract for updates to the bid amounts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info --node-address http://<HOST:PORT>\n")),(0,o.kt)("h2",{id:"unbonding-wait-period"},"Unbonding Wait Period"),(0,o.kt)("p",null,"In order to prevent 'long range attacks', requests to unbond must go through a mandatory wait period. This wait period is presently set to 15 eras."))}h.isMDXComponent=!0}}]);