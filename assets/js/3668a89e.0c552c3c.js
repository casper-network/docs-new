"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9421],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return h}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},s=Object.keys(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),l=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=l(t.components);return r.createElement(i.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,s=t.originalType,i=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=l(a),m=n,h=c["".concat(i,".").concat(m)]||c[m]||u[m]||s;return a?r.createElement(h,o(o({ref:e},d),{},{components:a})):r.createElement(h,o({ref:e},d))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=a.length,o=new Array(s);o[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[c]="string"==typeof t?t:n,o[1]=p;for(var l=2;l<s;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1333:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var r=a(3117),n=a(102),s=(a(7294),a(3905)),o=["components"],p={title:"Introduction to SDKs",slug:"/sdk"},i="Introduction to SDKs",l={unversionedId:"developers/dapps/sdk/index",id:"developers/dapps/sdk/index",title:"Introduction to SDKs",description:"This section covers the software development kits (SDKs) published by third parties available for interacting with the Casper blockchain. These SDKs are client-side libraries providing functions or methods (depending on the language) to interact with a Casper network. You can use them as a model to develop your application and accomplish tasks such as generating account keys, sending transfers, or other blockchain transactions.",source:"@site/source/docs/casper/developers/dapps/sdk/index.md",sourceDirName:"developers/dapps/sdk",slug:"/sdk",permalink:"/sdk",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/dapps/sdk/index.md",tags:[],version:"current",lastUpdatedAt:1678705380,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{title:"Introduction to SDKs",slug:"/sdk"},sidebar:"developers",previous:{title:"Overview",permalink:"/developers/dapps/"},next:{title:"JavaScript/TypeScript SDK",permalink:"/developers/dapps/sdk/script-sdk"}},d={},c=[],u={toc:c},m="wrapper";function h(t){var e=t.components,a=(0,n.Z)(t,o);return(0,s.kt)(m,(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"introduction-to-sdks"},"Introduction to SDKs"),(0,s.kt)("p",null,"This section covers the software development kits (SDKs) published by third parties available for interacting with the Casper blockchain. These SDKs are client-side libraries providing functions or methods (depending on the language) to interact with a Casper network. You can use them as a model to develop your application and accomplish tasks such as generating account keys, sending transfers, or other blockchain transactions."),(0,s.kt)("p",null,"Each of these SDKs can be used to build dApps. For browser interaction you can use the JavaScript SDK, for desktop applications there is C#, Java, etc. Click the link on your preferred SDK to learn how to use it in dApp development. You may visit the SDKs' Github repositories to delve into the source code."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"SDK Documentation"),(0,s.kt)("th",{parentName:"tr",align:null},"GitHub Location"),(0,s.kt)("th",{parentName:"tr",align:null},"Organization"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/developers/dapps/sdk/script-sdk"},"JavaScript/TypeScript")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem/casper-js-sdk/"},"Casper-js-sdk")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem"},"Casper Ecosystem"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Java SDK"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/casper-network/casper-java-sdk/"},"Casper-java-sdk")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/casper-network"},"Casper Association"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/developers/dapps/sdk/csharp-sdk"},"C# SDK")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/make-software/casper-net-sdk"},"Casper-net-sdk")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/make-software"},"MAKE"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/developers/dapps/sdk/go-sdk"},"Golang SDK")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem/casper-golang-sdk/"},"Casper-golang-sdk")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem"},"Casper Ecosystem"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/developers/dapps/sdk/python-sdk"},"Python SDK")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/casper-network/casper-python-sdk/"},"Casper-python-sdk")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/casper-network"},"Casper Association"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Java SDK by SyntiFi"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/syntifi/casper-sdk"},"Casper-sdk")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/syntifi"},"SyntiFi"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"PHP SDK"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/make-software/casper-php-sdk"},"Casper-php-sdk")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/make-software"},"MAKE"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Scala SDK"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/abahmanem/casper-scala-sdk"},"Casper-scala-sdk")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/abahmanem"},"M. Abahmane"))))),(0,s.kt)("p",null,"Each such third party is solely responsible for the SDK it provides, any warranties (to the extent that such warranties have not been disclaimed), and for any claims you may have relating to your access or use thereof. We do not approve or endorse any such SDKs by providing a link thereto, and assume no responsibility for your access or use thereof. The SDKs may be subject to additional licenses and disclaimers as set out in the relevant GitHub repositories."))}h.isMDXComponent=!0}}]);