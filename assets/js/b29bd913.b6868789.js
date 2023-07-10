"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5977],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(i,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[h]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2769:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),s=["components"],l={},i="Tutorial Walkthrough",c={unversionedId:"resources/tutorials/beginner/counter-testnet/walkthrough",id:"resources/tutorials/beginner/counter-testnet/walkthrough",title:"Tutorial Walkthrough",description:"Now that you are familiar with the basic commands, you can begin the tutorial walkthrough.",source:"@site/source/docs/casper/resources/tutorials/beginner/counter-testnet/walkthrough.md",sourceDirName:"resources/tutorials/beginner/counter-testnet",slug:"/resources/tutorials/beginner/counter-testnet/walkthrough",permalink:"/resources/tutorials/beginner/counter-testnet/walkthrough",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/resources/tutorials/beginner/counter-testnet/walkthrough.md",tags:[],version:"current",lastUpdatedAt:1688996346,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{},sidebar:"resources",previous:{title:"Casper-Client Commands",permalink:"/resources/tutorials/beginner/counter-testnet/commands"},next:{title:"Introduction",permalink:"/counter"}},u={},h=[{value:"Clone the Repository",id:"clone-the-repository",level:2},{value:"View the Network State",id:"view-the-network-state",level:2},{value:"Install the Contract",id:"install-the-contract",level:2},{value:"View the Updated Network State",id:"view-the-updated-network-state",level:2},{value:"Increment the Counter",id:"increment-the-counter",level:2},{value:"View the Updated Network State Again",id:"view-the-updated-network-state-again",level:2},{value:"Increment the Counter Again",id:"increment-the-counter-again",level:2},{value:"View the Final Network State",id:"view-the-final-network-state",level:2}],p={toc:h},d="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial-walkthrough"},"Tutorial Walkthrough"),(0,o.kt)("p",null,"Now that you are familiar with the basic commands, you can begin the tutorial walkthrough."),(0,o.kt)("h2",{id:"clone-the-repository"},"Clone the Repository"),(0,o.kt)("p",null,"First, you will need to clone ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter"},"the counter contract repository")," on our local machine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/casper-ecosystem/counter\n")),(0,o.kt)("p",null,"If you explore the source code, you will see that there are two versions of the counter contract and one file with session code that calls the contract's entry-points:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"contract-v1")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is the first version of the counter contract."),(0,o.kt)("li",{parentName:"ul"},"Defines two named keys: ",(0,o.kt)("em",{parentName:"li"},"counter")," to reference the contract and an associated variable ",(0,o.kt)("em",{parentName:"li"},"count")," to store a value."),(0,o.kt)("li",{parentName:"ul"},"Provides a function to get the current count (",(0,o.kt)("em",{parentName:"li"},"count_get"),")."),(0,o.kt)("li",{parentName:"ul"},"Provides a function to increment the current count (",(0,o.kt)("em",{parentName:"li"},"counter_inc"),")."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"contract-v2")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is a second version of the counter contract, which will not be used in this tutorial."),(0,o.kt)("li",{parentName:"ul"},"This version provides an additional function to decrement the counter and to demonstrate contract upgrades in another tutorial."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"counter-call"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This is session code that retrieves the ",(0,o.kt)("em",{parentName:"p"},"contract-v1")," contract, gets the current count value, increments it, and ensures the count was incremented by 1."))),(0,o.kt)("h2",{id:"view-the-network-state"},"View the Network State"),(0,o.kt)("p",null,"With a network up and running, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-client query-global-state")," command to check the status of the network. However, you first need an ",(0,o.kt)("inlineCode",{parentName:"p"},"account hash")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"state-root-hash")," so that you can get the current snapshot. Once you have that information, you can check the status of the network."),(0,o.kt)("p",null,"You will need to use the following three commands:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"casper-client account-address --public-key [PATH_TO_PUBLIC_KEY]")," - Get the account-hash"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"casper-client get-state-root-hash")," - Get the state-root-hash"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"casper-client query-state")," - Query the network state")),(0,o.kt)("p",null,"Run through these commands in order."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client account-address --public-key [PATH_TO_PUBLIC_KEY]\n")),(0,o.kt)("p",null,"You will need to specify the location of your public-key files. If you used the block explorer to generate the keys, you will need to download them first."),(0,o.kt)("p",null,"Next, get the state-root-hash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address http://[NODE_IP]:7777\n")),(0,o.kt)("p",null,"You need to use the IP address of one of the ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/tools/peers"},"connected peers")," on the Testnet as the node server since the network is running in a decentralized fashion. Make a note of the returned state root hash, but keep in mind that this hash value will need to be updated every time you modify the network state."),(0,o.kt)("p",null,"Finally, query the actual state:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n    --node-address http://[NODE_IP]:7777 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH]\n")),(0,o.kt)("p",null,"Substitute the state root hash and account hash values you just retrieved into this command and execute it. Do not be surprised if you see nothing on the network. That is because you have not sent anything to the network yet."),(0,o.kt)("h2",{id:"install-the-contract"},"Install the Contract"),(0,o.kt)("p",null,"Before installing the contract on the chain, you will need to compile it to Wasm."),(0,o.kt)("p",null,"The Makefile included in the repository makes compilation trivial. With these two commands, you can build (in release mode) and test the contract before installing it. ",(0,o.kt)("em",{parentName:"p"},"make prepare")," sets the Wasm target and ",(0,o.kt)("em",{parentName:"p"},"make test")," builds the contracts and verifies them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd counter\nmake prepare\nmake test\n")),(0,o.kt)("p",null,"With the compiled contract, you can call the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-client put-deploy")," command to install the contract on the chain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n    --node-address http://[NODE_IP]:7777 \\\n    --chain-name casper-test \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-path ./contract-v1/target/wasm32-unknown-unknown/release/counter-v1.wasm\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Replace the ",(0,o.kt)("inlineCode",{parentName:"li"},"[PATH_TO_YOUR_KEY]")," field with the actual path of where your secret key is stored."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"session-path")," argument should point to wherever you compiled the counter-v1.wasm on your computer. The code snippet shows you the default path if the counter folder is in the same directory.")),(0,o.kt)("p",null,"Once you call this command, it will return a deploy hash. You can use this hash to verify that the deploy successfully took place."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"casper-client get-deploy \\\n    --node-address http://[NODE_IP]:7777 [DEPLOY_HASH]\n")),(0,o.kt)("h2",{id:"view-the-updated-network-state"},"View the Updated Network State"),(0,o.kt)("p",null,"Hopefully, the deploy was successful. Call the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-client query-global-state")," command to check if the named key is visible on the chain."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You must get the new state root hash since you just wrote a deploy to the chain.")),(0,o.kt)("p",null,"If you run these two commands, there will be a new counter named key on the chain."),(0,o.kt)("p",null,"Get the NEW state-root-hash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address http://[NODE_IP]:7777\n")),(0,o.kt)("p",null,"Get the network state:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n    --node-address http://[NODE_IP]:7777 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH]\n")),(0,o.kt)("p",null,"You can actually dive further into the data stored on the chain using the query path argument or directly querying the deploy hash. Try the following commands and notice that each one gives you a different level of detail."),(0,o.kt)("p",null,"Retrieve the specific counter contract details:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-global-state --node-address http://[NODE_IP]:7777 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] -q "counter"\n')),(0,o.kt)("p",null,"Retrieve the specific count value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-global-state --node-address http://[NODE_IP]:7777 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] -q "counter/count"\n')),(0,o.kt)("p",null,"Retrieve the specific deploy details:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state --node-address http://[NODE_IP]:7777 \\\n    --state-root-hash [STATE_ROOT_HASH] --key deploy-[DEPLOY_HASH]\n")),(0,o.kt)("p",null,"The first two commands access the ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," named keys, respectively, using the query path argument. The third command uses the deploy hash (the return value of ",(0,o.kt)("em",{parentName:"p"},"put-deploy"),") to query the state of that specific deploy only."),(0,o.kt)("h2",{id:"increment-the-counter"},"Increment the Counter"),(0,o.kt)("p",null,"You now have a counter on the chain, and you can increment it by calling the entry-point ",(0,o.kt)("em",{parentName:"p"},"counter_inc"),", the function defined in the contract. You can call an entry-point in an installed contract by using the ",(0,o.kt)("em",{parentName:"p"},"put-deploy")," command as illustrated here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy \\\n    --node-address http://[NODE_IP]:7777 \\\n    --chain-name casper-test \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-name "counter" \\\n    --session-entry-point "counter_inc"\n')),(0,o.kt)("p",null,"Notice that this command is nearly identical to the command used to deploy the contract. However, instead of ",(0,o.kt)("em",{parentName:"p"},"session-path")," pointing to the Wasm binary, you have ",(0,o.kt)("em",{parentName:"p"},"session-name")," and ",(0,o.kt)("em",{parentName:"p"},"session-entry-point")," identifying the on-chain contract and its associated entry-point to execute."),(0,o.kt)("h2",{id:"view-the-updated-network-state-again"},"View the Updated Network State Again"),(0,o.kt)("p",null,"After calling the entry-point, theoretically, the count value should increment by one, but how can you be sure of that? You can query the network again, however, remember that you have to get a new state root hash. Check if the count was incremented by looking at it with the query argument."),(0,o.kt)("p",null,"Get the NEW state-root-hash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address http://[NODE_IP]:7777\n")),(0,o.kt)("p",null,"Get the network state, specifically for the count variable this time:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-global-state --node-address http://[NODE_IP]:7777 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] -q "counter/count"\n')),(0,o.kt)("p",null,"You should be able to see the count value and observe that it has increased."),(0,o.kt)("h2",{id:"increment-the-counter-again"},"Increment the Counter Again"),(0,o.kt)("p",null,"If you recall, in the repository there is session code called ",(0,o.kt)("em",{parentName:"p"},"counter-call"),". Try to increment the count using that session code instead of the session entry-point used above."),(0,o.kt)("p",null,"Keep in mind, this is another ",(0,o.kt)("em",{parentName:"p"},"put-deploy")," call just like when you installed the contract. The session-path is once again going to be different for you depending on where you compiled the contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n    --node-address http://[NODE_IP]:7777 \\\n    --chain-name casper-test \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-path ./counter/target/wasm32-unknown-unknown/release/counter-call.wasm\n")),(0,o.kt)("h2",{id:"view-the-final-network-state"},"View the Final Network State"),(0,o.kt)("p",null,"To make sure that the session code ran successfully, get the new state root hash and query the network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address http://[NODE_IP]:7777\n")),(0,o.kt)("p",null,"Get the network state, specifically for the count variable this time:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-global-state --node-address http://[NODE_IP]:7777 \\\n    --state-root-hash [STATE_ROOT_HASH]\n    --key [ACCOUNT_HASH] -q "counter/count"\n')),(0,o.kt)("p",null,"If all went according to plan, your count value should be 2 at this point."),(0,o.kt)("p",null,"Congratulations on building, installing, and using a smart contract on the Testnet!"))}m.isMDXComponent=!0}}]);