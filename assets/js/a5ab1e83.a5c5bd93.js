"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7598],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(f,s(s({ref:r},l),{},{components:t})):n.createElement(f,s({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3241:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=t(3117),o=t(102),a=(t(7294),t(3905)),s=["components"],c={},i="Execution Error Codes",p={unversionedId:"developers/cli/execution-error-codes",id:"developers/cli/execution-error-codes",title:"Execution Error Codes",description:"This section covers smart contract execution error codes.",source:"@site/source/docs/casper/developers/cli/execution-error-codes.md",sourceDirName:"developers/cli",slug:"/developers/cli/execution-error-codes",permalink:"/developers/cli/execution-error-codes",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/cli/execution-error-codes.md",tags:[],version:"current",lastUpdatedAt:1677508417,formattedLastUpdatedAt:"2/27/2023",frontMatter:{},sidebar:"developers",previous:{title:"Calling Smart Contracts with the Rust Client",permalink:"/developers/cli/calling-contracts"}},l={},u=[],d={toc:u};function m(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"execution-error-codes"},"Execution Error Codes"),(0,a.kt)("p",null,"This section covers smart contract execution error codes."),(0,a.kt)("p",null,"As mentioned in ",(0,a.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/simple-contract#using-error-codes"},"Writing Rust Contracts"),", smart contracts can exit with an error code defined by an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html"},"ApiError"),". Descriptions of each variant are found ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html#variants"},"here")," and include the following sub-types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html#variant.HandlePayment"},"payment errors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html#variant.Mint"},"mint errors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html#variant.User"},"custom user errors"))),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiError")," of one of these sub-types maps to an exit code with an offset defined by the sub-type. For example, an ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiError::User(2)")," maps to an exit code of ",(0,a.kt)("inlineCode",{parentName:"p"},"65538")," (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"65536 + 2"),"). You can find a mapping from contract exit codes to ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiError")," variants ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html#variants"},"here"),"."))}m.isMDXComponent=!0}}]);