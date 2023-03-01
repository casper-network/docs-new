"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3617],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,p(p({ref:t},i),{},{components:n})):a.createElement(f,p({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6607:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),p=["components"],l={},c="Transactional JSON-RPC Method",s={unversionedId:"developers/json-rpc/json-rpc-transactional",id:"developers/json-rpc/json-rpc-transactional",title:"Transactional JSON-RPC Method",description:"transactional}",source:"@site/source/docs/casper/developers/json-rpc/json-rpc-transactional.md",sourceDirName:"developers/json-rpc",slug:"/developers/json-rpc/json-rpc-transactional",permalink:"/developers/json-rpc/json-rpc-transactional",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/json-rpc/json-rpc-transactional.md",tags:[],version:"current",lastUpdatedAt:1677674474,formattedLastUpdatedAt:"3/1/2023",frontMatter:{},sidebar:"developers",previous:{title:"Required Methods for Minimal Compliance",permalink:"/developers/json-rpc/minimal-compliance"},next:{title:"Informational JSON-RPC Methods",permalink:"/developers/json-rpc/json-rpc-informational"}},i={},d=[{value:"account_put_deploy",id:"account-put-deploy",level:2},{value:"<code>account_put_deploy_result</code>",id:"account_put_deploy_result",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transactional"},"Transactional JSON-RPC Method"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"account-put-deploy"},"account_put_deploy"),(0,o.kt)("p",null,"This is the only means by which users can send their compiled Wasm (as part of a Deploy) to a node on a Casper network. The request takes in the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#execution-semantics-deploys"},"Deploy")," as a parameter, prior to sending it to a node on a network for execution."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/json-rpc/types_chain#deploy"},"deploy")),(0,o.kt)("td",{parentName:"tr",align:null},"Object"),(0,o.kt)("td",{parentName:"tr",align:null},"A Deploy consists of an item containing a smart contract along with the requester's signature(s).")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": You can find a list of ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/joining#known-addresses"},"trusted peers")," in the network's configuration file, ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml"),". Here is an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/dev/resources/production/config-example.toml#L131"},"example config.toml"),". You may send deploys to one of the trusted nodes or use them to query other online nodes.")),(0,o.kt)("h3",{id:"account_put_deploy_result"},(0,o.kt)("inlineCode",{parentName:"h3"},"account_put_deploy_result")),(0,o.kt)("p",null,"The result contains the ",(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/types_chain#deployhash"},"deploy_hash"),", which is the primary identifier of a Deploy within a Casper network."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"api_version"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"The RPC API version.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/json-rpc/types_chain#deployhash"},"deploy_hash")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"A hex-encoded hash of the Deploy as sent.")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Example account_put_deploy")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\n{\n          "name": "account_put_deploy_example",\n          "params": [\n            {\n              "name": "deploy",\n              "value": {\n                "approvals": [\n                  {\n                    "signature": "012dbf03817a51794a8e19e0724884075e6d1fbec326b766ecfa6658b41f81290da85e23b24e88b1c8d9761185c961daee1adab0649912a6477bcd2e69bd91bd08",\n                    "signer": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c"\n                  }\n                ],\n                "hash": "5c9b3b099c1378aa8e4a5f07f59ff1fcdc69a83179427c7e67ae0377d94d93fa",\n                "header": {\n                  "account": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",\n                  "body_hash": "d53cf72d17278fd47d399013ca389c50d589352f1a12593c0b8e01872a641b50",\n                  "chain_name": "casper-example",\n                  "dependencies": [\n                    "0101010101010101010101010101010101010101010101010101010101010101"\n                  ],\n                  "gas_price": 1,\n                  "timestamp": "2020-11-17T00:39:24.072Z",\n                  "ttl": "1h"\n                },\n                "payment": {\n                  "StoredContractByName": {\n                    "args": [\n                      [\n                        "amount",\n                        {\n                          "bytes": "e8030000",\n                          "cl_type": "I32",\n                          "parsed": 1000\n                        }\n                      ]\n                    ],\n                    "entry_point": "example-entry-point",\n                    "name": "casper-example"\n                  }\n                },\n                "session": {\n                  "Transfer": {\n                    "args": [\n                      [\n                        "amount",\n                        {\n                          "bytes": "e8030000",\n                          "cl_type": "I32",\n                          "parsed": 1000\n                        }\n                      ]\n                    ]\n                  }\n                }\n              }\n            }\n          ],\n          "result": {\n            "name": "account_put_deploy_example_result",\n            "value": {\n              "api_version": "1.4.4",\n              "deploy_hash": "5c9b3b099c1378aa8e4a5f07f59ff1fcdc69a83179427c7e67ae0377d94d93fa"\n            }\n          }\n        }\n\n'))))}m.isMDXComponent=!0}}]);