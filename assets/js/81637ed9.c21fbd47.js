"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7576],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6032:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),s=["components"],i={},c="Introduction",u={unversionedId:"developers/cli/transfers/index",id:"developers/cli/transfers/index",title:"Introduction",description:"The following topics describe how to use the Casper command-line client to transfer tokens between purses on a Casper network. Depending on the type of accounts, you can choose a direct transfer or a multiple-signature (multi-sig) deploy transfer.",source:"@site/source/docs/casper/developers/cli/transfers/index.md",sourceDirName:"developers/cli/transfers",slug:"/developers/cli/transfers/",permalink:"/developers/cli/transfers/",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/cli/transfers/index.md",tags:[],version:"current",lastUpdatedAt:1677502053,formattedLastUpdatedAt:"2/27/2023",frontMatter:{},sidebar:"developers",previous:{title:"Overview",permalink:"/developers/cli/"},next:{title:"Direct Token Transfer",permalink:"/developers/cli/transfers/direct-token-transfer"}},l={},p=[],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The following topics describe how to use the Casper command-line client to transfer tokens between purses on a Casper network. Depending on the type of accounts, you can choose a direct transfer or a multiple-signature (multi-sig) deploy transfer."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transferring Tokens using Direct Transfer")),(0,a.kt)("p",null,"You can use the direct method to transfer tokens when you have an account with a single primary key, and it is capable of signing a transaction. To use a direct transfer, see ",(0,a.kt)("a",{parentName:"p",href:"/developers/cli/transfers/direct-token-transfer"},"Transferring Tokens using Direct Transfer"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transferring Tokens using Multi-sig Deploy")),(0,a.kt)("p",null,"When the account used to initiate the transfer has multiple associated keys that need to sign the deploy, you can use a multi-sig deploy transfer. To set up the account's associated keys, see the ",(0,a.kt)("a",{parentName:"p",href:"/resources/tutorials/advanced/two-party-multi-sig"},"Two-Party Multi-Signature Deploys")," workflow. To use a multi-sig deploy transfer, see ",(0,a.kt)("a",{parentName:"p",href:"/developers/cli/transfers/multisig-deploy-transfer"},"Transferring Tokens using a Multi-sig Account"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Verifying a Transfer using the Command-line Client")),(0,a.kt)("p",null,"To verify the status of a transfer, see ",(0,a.kt)("a",{parentName:"p",href:"/developers/cli/transfers/verify-transfer"},"Verifying a Transfer"),"."))}d.isMDXComponent=!0}}]);