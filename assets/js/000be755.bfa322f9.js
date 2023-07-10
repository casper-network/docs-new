"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6688],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},825:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],s={title:"Introduction",slug:"/operators"},p="Operators",l={unversionedId:"operators/index",id:"operators/index",title:"Introduction",description:"Operators who wish to run node infrastructure on a Casper network, either as a standalone private network, or as part of the public network should explore this section.",source:"@site/source/docs/casper/operators/index.md",sourceDirName:"operators",slug:"/operators",permalink:"/operators",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/operators/index.md",tags:[],version:"current",lastUpdatedAt:1688996346,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"Introduction",slug:"/operators"},sidebar:"operators",next:{title:"Recommended Hardware Specifications",permalink:"/operators/setup/hardware"}},u={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Table of Contents",id:"table-of-contents",level:2}],d={toc:c},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"operators"},"Operators"),(0,o.kt)("p",null,"Operators who wish to run node infrastructure on a Casper network, either as a standalone private network, or as part of the public network should explore this section."),(0,o.kt)("p",null,"Prior knowledge of Unix-based operating systems and proficiency with systemd and bash scripting are recommended. If you are unfamiliar with systemd, the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/title/systemd"},"Arch Linux page on systemd")," is a good introduction."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Operators should know the ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/hardware"},"Hardware requirements")," before running a node.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Also, the ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/install-node/#network-requirements"},"Network requirements")," specify how to open ports and modify the network firewall to which the node is connected. This step is necessary to allow incoming connections, enabling communication among nodes."))),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("p",null,"Review the ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/basic-node-configuration"},"node's configuration")," first."),(0,o.kt)("p",null,"Then, you can follow the node ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/install-node"},"installation instructions"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setting up a Node",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/setup/hardware"},"Recommended Hardware Specifications"),": system requirements for the Casper Mainnet and Testnet"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/setup/basic-node-configuration"},"Basic Node Configuration"),": processes and files involved in setting up a Casper node"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/setup/install-node"},"Installing a Node"),": step-by-step instructions to install a Casper node"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/setup/open-files"},"Setting the Open Files Limit"),": required setting for the Casper node to run correctly"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/setup/upgrade"},"Upgrading the Node"),": before joining the network, the node needs to be upgraded"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/setup/joining"},"Joining a Running Network"),": steps to join an existing Casper network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/setup/non-root-user"},"Setting up a Non-Root User"),": logging into the node remotely using a key"))),(0,o.kt)("li",{parentName:"ul"},"Becoming a Validator",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/becoming-a-validator/bonding"},"Bonding as a Validator"),": a guide about the bonding process and submitting a bid"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/becoming-a-validator/unbonding"},"Unbonding as a Validator"),": the process to withdraw a bid and unbonding"))),(0,o.kt)("li",{parentName:"ul"},"Setting up a Network",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/setup-network/chain-spec"},"The Chain Specification"),": files needed to create a genesis block"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/setup-network/create-private"},"Setting up a Private Casper Network"),": a step-by-step guide to establishing and configuring a private Casper network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/setup-network/staging-files-for-new-network"},"Staging Files for a New Network"),": a guide to hosting protocol files for a new Casper network"))),(0,o.kt)("li",{parentName:"ul"},"Advanced Topics",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/advanced-topics/archiving-and-restoring"},"Archiving and Restoring a Database"),": using ",(0,o.kt)("inlineCode",{parentName:"li"},"zstd")," for the compression and decompression of a Casper node database and streaming from a backup location"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/advanced-topics/moving-node"},"Moving a Validating Node"),": ways to move a validator node to another machine")))))}f.isMDXComponent=!0}}]);