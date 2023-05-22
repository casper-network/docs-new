"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7576],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6032:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],s={},c="Introduction",l={unversionedId:"developers/cli/transfers/index",id:"developers/cli/transfers/index",title:"Introduction",description:"The following topics describe using the Casper command-line client to transfer tokens between purses on a Casper network. Depending on the account configuration, a direct transfer or a multiple-signature (multi-sig) deploy transfer can be utilized.",source:"@site/source/docs/casper/developers/cli/transfers/index.md",sourceDirName:"developers/cli/transfers",slug:"/developers/cli/transfers/",permalink:"/developers/cli/transfers/",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/cli/transfers/index.md",tags:[],version:"current",lastUpdatedAt:1684750573,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Overview",permalink:"/developers/cli/"},next:{title:"Direct Token Transfer",permalink:"/developers/cli/transfers/direct-token-transfer"}},u={},p=[],f={toc:p},d="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(d,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The following topics describe using the Casper command-line client to transfer tokens between purses on a Casper network. Depending on the account configuration, a direct transfer or a multiple-signature (multi-sig) deploy transfer can be utilized."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transferring tokens using a direct transfer")),(0,a.kt)("p",null,"Tokens can be transferred directly when the signing key has enough weight to approve the transaction. This is the most common scenario, applicable by default for accounts with a single primary key. To use a direct transfer, see ",(0,a.kt)("a",{parentName:"p",href:"/developers/cli/transfers/direct-token-transfer"},"Transferring Tokens Using Direct Transfer"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transferring tokens using a multi-sig deploy")),(0,a.kt)("p",null,"Multi-sig deploy transfers are typically used when the account initiating the transfer has multiple associated keys that need to sign the deploy. To set up the account's associated keys, see the ",(0,a.kt)("a",{parentName:"p",href:"/resources/tutorials/advanced/two-party-multi-sig"},"Two-Party Multi-Signature Deploys")," workflow. To use a multi-sig deploy transfer, see ",(0,a.kt)("a",{parentName:"p",href:"/developers/cli/transfers/multisig-deploy-transfer"},"Transferring Tokens Using a Multi-sig Account"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Verifying a transfer using the command-line client")),(0,a.kt)("p",null,"To verify the status of a transfer, see ",(0,a.kt)("a",{parentName:"p",href:"/developers/cli/transfers/verify-transfer"},"Verifying a Transfer"),"."))}m.isMDXComponent=!0}}]);