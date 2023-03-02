"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1825],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4006:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={},c="Contract Example",s={unversionedId:"dapp-dev-guide/tutorials/multi-sig/contract",id:"dapp-dev-guide/tutorials/multi-sig/contract",title:"Contract Example",description:"This section covers an example smart contract used for key management.",source:"@site/source/docs/casper/dapp-dev-guide/tutorials/multi-sig/contract.md",sourceDirName:"dapp-dev-guide/tutorials/multi-sig",slug:"/dapp-dev-guide/tutorials/multi-sig/contract",permalink:"/dapp-dev-guide/tutorials/multi-sig/contract",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/tutorials/multi-sig/contract.md",tags:[],version:"current",lastUpdatedAt:1677608313,formattedLastUpdatedAt:"2/28/2023",frontMatter:{}},p={},m=[{value:"Implementing the Smart Contract",id:"implementing-the-smart-contract",level:2},{value:"Building the Smart Contract",id:"building-the-smart-contract",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contract-example"},"Contract Example"),(0,o.kt)("p",null,"This section covers an example smart contract used for key management."),(0,o.kt)("h2",{id:"implementing-the-smart-contract"},"Implementing the Smart Contract"),(0,o.kt)("p",null,"First, download ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/keys-manager"},"the example contract and client")," for key management."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/casper-ecosystem/keys-manager\n")),(0,o.kt)("p",null,"This smart contract can help you manage your account. You can add keys and remove keys from your account, define weights for each key, and set thresholds for key management and network deployments."),(0,o.kt)("p",null,"You could also refer to this smart contract as the ",(0,o.kt)("em",{parentName:"p"},"account code"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Once you deploy this smart contract, you cannot change it. As a result, you can rely on its behavior and state as if it were a binding agreement."))),(0,o.kt)("p",null,"The account code execution starts in ",(0,o.kt)("inlineCode",{parentName:"p"},"main.rs"),", where the ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," function calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," function. This code is similar to a script that executes and implements your account behavior. Remember that when you send a contract (Wasm file) to the network, the contract execution engine will invoke the ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," function."),(0,o.kt)("p",null,"The following functions defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"main.rs")," will help you manage your keys."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"set_key_weight"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets the weight for a specific key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"set_deployment_threshold"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets the threshold for deployments, given the permission level and associated weight")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"set_key_management_threshold"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets the threshold for key management, given the permission level and associated weight")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"set_all"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets all the three parameters: weight for a specific key, and thresholds for deployments and key management")))),(0,o.kt)("p",null,"Possible errors that can arise are defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"errors.rs"),"."),(0,o.kt)("p",null,"In the next section, you will prepare and build the smart contract for deployment."),(0,o.kt)("h2",{id:"building-the-smart-contract"},"Building the Smart Contract"),(0,o.kt)("p",null,"Before building the smart contract for this tutorial, you need to ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/getting-started"},"install Rust")," and ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/getting-started#development-environment-setup"},"set up the development environment"),"."),(0,o.kt)("p",null,"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"keys-manager")," folder and compile the smart contract to generate the corresponding Wasm file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd keys-manager\nmake prepare\nmake build-contract\n")),(0,o.kt)("p",null,"If the commands are successful, you will find a ",(0,o.kt)("inlineCode",{parentName:"p"},"keys-manager.wasm")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/keys-manager/contract/target/wasm32-unknown-unknown/release/keys-manager.wasm")," directory."),(0,o.kt)("p",null,"Next, we will review the sample client that invokes this contract to set up the account and perform key management."))}d.isMDXComponent=!0}}]);