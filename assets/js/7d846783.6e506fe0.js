"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1002],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5262:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={},c="Best Practices for Casper Smart Contract Authors",l={unversionedId:"developers/writing-onchain-code/best-practices",id:"developers/writing-onchain-code/best-practices",title:"Best Practices for Casper Smart Contract Authors",description:"At its core, the Casper platform is software, and best practices for general software development will apply. However, there are specific variables and situations that should be considered when developing for a Casper network. For example, a smart contract installed on global state cannot access file systems or open a connection to external resources.",source:"@site/source/docs/casper/developers/writing-onchain-code/best-practices.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/best-practices",permalink:"/developers/writing-onchain-code/best-practices",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/writing-onchain-code/best-practices.md",tags:[],version:"current",lastUpdatedAt:1677502053,formattedLastUpdatedAt:"2/27/2023",frontMatter:{},sidebar:"developers",previous:{title:"Testing Session Code",permalink:"/developers/writing-onchain-code/testing-session-code"},next:{title:"Introduction",permalink:"/developers/json-rpc/"}},p={},u=[{value:"Data Efficiency",id:"data-efficiency",level:2},{value:"Costs",id:"costs",level:2},{value:"Testing",id:"testing",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"best-practices-for-casper-smart-contract-authors"},"Best Practices for Casper Smart Contract Authors"),(0,o.kt)("p",null,"At its core, the Casper platform is software, and best practices for general software development will apply. However, there are specific variables and situations that should be considered when developing for a Casper network. For example, a smart contract installed on global state cannot access file systems or open a connection to external resources."),(0,o.kt)("h2",{id:"data-efficiency"},"Data Efficiency"),(0,o.kt)("p",null,"When developing on Casper, a policy of efficient data usage will ensure the lowest possible cost for on-chain computation. To this end, minimizing the number of necessary ",(0,o.kt)("a",{parentName:"p",href:"/developers/dapps/sending-deploys"},"Deploys")," will drastically decrease the overall cost."),(0,o.kt)("p",null,"When creating smart contracts, including an explicit initialization entry point allows the contract to self-initialize without a subsequent Deploy of session code. This entry point creates the internal structure of the contract and cannot be called after the initial deploy. Below is an example of a self-initalizing entry point that can be used within the ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," function."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Example Self-initialization Entry Point")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'\n// This entry point initializes the donation system, setting up the fundraising purse\n// and creating a dictionary to track the account hashes and the number of donations\n// made.\n#[no_mangle]\npub extern "C" fn init() {\n    let fundraising_purse = system::create_purse();\n    runtime::put_key(FUNDRAISING_PURSE, fundraising_purse.into());\n    // Create a dictionary to track the mapping of account hashes to number of donations made.\n    storage::new_dictionary(LEDGER).unwrap_or_revert();\n}\n\n'))),(0,o.kt)("p",null,"Bear in mind, the host node will not enforce this. The smart contract author must create the entry point and ensure it cannot be called after initial deployment."),(0,o.kt)("h2",{id:"costs"},"Costs"),(0,o.kt)("p",null,"Computations occurring on-chain come with associated ",(0,o.kt)("a",{parentName:"p",href:"/concepts/economics/gas-concepts"},"gas costs"),". Efficient coding can help to minimize gas costs, through the reduction of overall Wasm sent to global state. Beginning with 1.5.0, even invalid Wasm will incur gas costs when sent to global state. As such, proper testing prior to sending a Deploy is critical."),(0,o.kt)("p",null,"Further, there is a set cost of 2.5 CSPR to create a new purse. If possible, the ",(0,o.kt)("a",{parentName:"p",href:"/resources/tutorials/advanced/transfer-token-to-contract#scenario2"},"reuse of purses")," should be considered to reduce this cost. If reusing purses, proper access management must be maintained to prevent lapses in security. Ultimately, any choices made in regards to security and contract safeguards rely on the smart contract author."),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Testing all Deploys prior to committing them to ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/"},"Mainnet")," can assist authors in detecting bugs and inefficiencies prior to incurring gas fees. Casper provides several methods of testing, including unit testing, testing using NCTL and sending Deploys to ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/"},"Testnet"),"."),(0,o.kt)("p",null,"Information on these processes can be found at the following locations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/testing-session-code"},"Unit Testing Session Code"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/testing-contracts"},"Testing Smart Contracts"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/dapp-dev-guide/building-dapps/nctl-test"},"Testing Smart Contracts with NCTL")))),(0,o.kt)("p",null,"Additionally, the following two tutorials outline sending an example contract using both NCTL and Testnet:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/counter/"},"A Counter On An NCTL Network"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/counter-testnet"},"A Counter On The Testnet")))))}f.isMDXComponent=!0}}]);