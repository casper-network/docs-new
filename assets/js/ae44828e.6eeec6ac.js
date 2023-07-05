"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5779],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(4334),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(3117),r=n(7294),o=n(4334),i=n(2466),l=n(6550),s=n(1980),p=n(7392),c=n(12);function u(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:u(n);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function f(e){var t,n,a,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,p=e.groupId,u=d(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:u})})),g=f[0],b=f[1],y=h({queryString:s,groupId:p}),k=y[0],v=y[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=N[0],C=N[1],S=function(){var e=null!=k?k:w;return m({value:e,tabValues:u})?e:null}();return(0,r.useLayoutEffect)((function(){S&&b(S)}),[S]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:u}))throw new Error("Can't select invalid tab value="+e);b(e),v(e),C(e)}),[v,C,u]),tabValues:u}}var g=n(2389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,p=e.tabValues,c=[],u=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==l&&(u(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function v(e){var t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function N(e){var t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},4095:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=(n(4866),n(5162),["components"]),l={},s="Front-end Template with React",p={unversionedId:"developers/dapps/template-frontend",id:"developers/dapps/template-frontend",title:"Front-end Template with React",description:"For building web applications, it is most common to use the Casper JS SDK with React. This is a popular solution among developers, but you may use any front-end library or framework, including none at all, to interact with the Casper Network via the Casper JS SDK.",source:"@site/source/docs/casper/developers/dapps/template-frontend.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/template-frontend",permalink:"/developers/dapps/template-frontend",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/dapps/template-frontend.md",tags:[],version:"current",lastUpdatedAt:1688572581,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Testing Smart Contracts with NCTL",permalink:"/developers/dapps/nctl-test"},next:{title:"Signing Deploys",permalink:"/developers/dapps/signing-a-deploy"}},c={},u=[{value:"Get Started",id:"get-started",level:2},{value:"Casper Signer Integration",id:"casper-signer-integration",level:2},{value:"Call a Smart Contract",id:"call-a-smart-contract",level:2},{value:"Query a Smart Contract",id:"query-a-smart-contract",level:2},{value:"Test Application",id:"test-application",level:2},{value:"Build for Production",id:"build-for-production",level:2}],d={toc:u},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"front-end-template-with-react"},"Front-end Template with React"),(0,o.kt)("p",null,"For building web applications, it is most common to use the Casper JS SDK with React. This is a popular solution among developers, but you may use any front-end library or framework, including none at all, to interact with the Casper Network via the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/casper-js-sdk"},"Casper JS SDK"),"."),(0,o.kt)("p",null,"This guide will walk you through setting up and developing a React application with ",(0,o.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," that communicates with the Casper Network. Experience with Vite is not required, however if you have never built a React app, you should begin by ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/getting-started.html"},"reading the React documentation"),"."),(0,o.kt)("h2",{id:"get-started"},"Get Started"),(0,o.kt)("p",null,"Begin by opening a terminal and running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\n")),(0,o.kt)("p",null,"To get your Node.js version."),(0,o.kt)("p",null,"To ensure compatibility, you should be running Node.js version 18 or above. If you are running an earlier version, upgrade to version 18 using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"Node Version Manager")," or another tool."),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),", create a new Vite project by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm create vite@latest\n")),(0,o.kt)("p",null,'Name your project, select "React", then choose JavaScript or TypeScript.'),(0,o.kt)("p",null,"Head into your new project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd vite-project/\n")),(0,o.kt)("p",null,"replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"vite-project")," with your project name."),(0,o.kt)("p",null,"Run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nvite dev\n")),(0,o.kt)("p",null,"to test the server."),(0,o.kt)("p",null,"Quit the server by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"q"),". Install the Casper JS SDK by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install casper-js-sdk\n")),(0,o.kt)("p",null,"This guide will use ",(0,o.kt)("a",{parentName:"p",href:"https://axios-http.com/"},"axios")," to communicate with the backend, install it by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install axios\n")),(0,o.kt)("h2",{id:"casper-signer-integration"},"Casper Signer Integration"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Signer")," class within the Casper JS SDK to connect with the Casper Signer, retrieve the user's active public key, and sign deploys. To ensure that a user's public key will be available to all necessary components, create a React state variable in ",(0,o.kt)("em",{parentName:"p"},"src/App.js")," or another parent component that encapsulates the components you'd like the public key to be available to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport Connect from "./Connect";\n\nfunction App() {\n    const [publicKey, setPublicKey] = React.useState(null);\n    return (\n        <>\n            <Connect setPublicKey={setPublicKey} />\n        </>\n    );\n}\n')),(0,o.kt)("p",null,"This is an example of ",(0,o.kt)("em",{parentName:"p"},"src/App.js")," that imports and displays the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect")," component that is described next. The ",(0,o.kt)("inlineCode",{parentName:"p"},"setPublicKey")," function is passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect")," component as a ",(0,o.kt)("a",{parentName:"p",href:"https://legacy.reactjs.org/docs/components-and-props.html"},"prop")," so that it may set the public key and make it available to all of ",(0,o.kt)("em",{parentName:"p"},"src/App.js"),". This way when more components are added to ",(0,o.kt)("em",{parentName:"p"},"src/App.js"),", they may utilize the ",(0,o.kt)("inlineCode",{parentName:"p"},"publicKey")," variable."),(0,o.kt)("p",null,"To connect to the Casper Signer within your React app, create the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect")," component and import the ",(0,o.kt)("inlineCode",{parentName:"p"},"Signer")," class from the Casper JS SDK."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/Connect.js\n")),(0,o.kt)("p",null,"Open the file and write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Signer } from "casper-js-sdk";\n\nfunction Connect(props) {\n    return <button onClick={() => connectToSigner(props)}>Connect Signer</button>;\n}\n\nexport default Connect;\n')),(0,o.kt)("p",null,"Notice that ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect")," accepts props, and forwards them to the ",(0,o.kt)("inlineCode",{parentName:"p"},"connectToSigner")," function described below. This function is called when the button is clicked, and allows it to set the public key within ",(0,o.kt)("em",{parentName:"p"},"src/App.js")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"props.setPublicKey()"),"."),(0,o.kt)("p",null,"Write the ",(0,o.kt)("inlineCode",{parentName:"p"},"connectToSigner")," function under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect")," function component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function connectToSigner(props) {\n    Signer.isConnected()\n        .then((connected) => {\n            if (!connected) {\n                Signer.sendConnectionRequest();\n            } else {\n                Signer.getActivePublicKey()\n                    .then((publicKey) => {\n                        props.setPublicKey(publicKey);\n                    })\n                    .catch((error) => {\n                        alert(error.message);\n                    });\n            }\n        })\n        .catch((error) => {\n            alert(error.message);\n        });\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"connectToSigner()")," function calls ",(0,o.kt)("inlineCode",{parentName:"p"},"Signer.isConnected()")," to check if the Signer is already connected. If it is, it gets the public key of the selected account, if it's not, it opens up a connection request within the Signer. ",(0,o.kt)("inlineCode",{parentName:"p"},"Signer.isConnected()")," will throw an error if the Signer is not installed as an extension or if the Signer is locked."),(0,o.kt)("h2",{id:"call-a-smart-contract"},"Call a Smart Contract"),(0,o.kt)("p",null,'For this example we\'ll be calling a hypothetical "hello world" contract that contains a single entrypoint "update_message". We\'ll call the "update_message" entrypoint with text entered by the user in an HTML ',(0,o.kt)("inlineCode",{parentName:"p"},"input")," field."),(0,o.kt)("p",null,"When calling smart contracts from React, you'll need to implement the logic within a function accessible from a React component. You can obtain user-entered data from the DOM using elements like ",(0,o.kt)("inlineCode",{parentName:"p"},"input"),", then grab the value within the smart-contract-calling function."),(0,o.kt)("p",null,"Create a new component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/UpdateMessage.js\n")),(0,o.kt)("p",null,"Open the file and write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Contracts, CasperClient, RuntimeArgs, CLValueBuilder, DeployUtil, Signer } from "casper-js-sdk";\nimport axios from "axios";\n\nfunction UpdateMessage(props) {\n  return (\n        <>\n            <input id="message" type="text">\n            <button onClick={ () => updateMessage(props) }>Update Message</button>\n        </>\n    );\n}\n\nexport default UpdateMessage;\n')),(0,o.kt)("p",null,"On the front-end you'll need to build the transaction and forward it to the Casper Signer to be signed. In most cases you will be calling smart contract entrypoints. This example deploy shows the calling of entrypoint \"update_message\" which will update the state of the chain to reflect the new data. You'll need the user's active public key to prepare the deploy, and you may retrieve this from the ",(0,o.kt)("inlineCode",{parentName:"p"},"publicKey")," variable passed in as a prop from ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.js"),". Write this function under your ",(0,o.kt)("inlineCode",{parentName:"p"},"UpdateMessage")," component function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'function updateMessage(props) {\n    const contract = Contracts.Contract(new CasperClient("http://NODE_ADDRESS:7777/rpc"));\n    contract.setContractHash("hash-75143aa708275b7dead20ac2cc06c1c3eccff4ffcf1eb9aebb8cce7c35cea041");\n    const runtimeArguments = RuntimeArgs.fromMap({\n        message: CLValueBuilder.string(userInputElement.value),\n    });\n    const deploy = contract.callEntrypoint(\n        "update_message",\n        args,\n        CLPublicKey.fromHex(props.publicKey),\n        "casper", // "casper-test" for testnet\n        "1000000000", // 1 CSPR (10^9 Motes)\n    );\n    const deployJSON = DeployUtil.deployToJson(deploy);\n    Signer.sign(deployJSON, props.publicKey)\n        .then((signedDeploy) => {\n            // Initiates sign request\n            axios\n                .post("/sendDeploy", signedDeploy, {\n                    headers: {\n                        "Content-Type": "application/json",\n                    },\n                })\n                .then((response) => {\n                    alert(response.data);\n                })\n                .catch((error) => {\n                    console.error(error.message);\n                });\n        })\n        .catch((error) => {\n            console.error(error.message);\n        });\n}\n')),(0,o.kt)("p",null,"In this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"updateMessage")," builds a deploy and forwards it to the Casper Signer to be signed by the user. Once it's been signed, ",(0,o.kt)("inlineCode",{parentName:"p"},"signedDeploy")," is forwarded to the backend at the ",(0,o.kt)("inlineCode",{parentName:"p"},"/sendDeploy")," endpoint using ",(0,o.kt)("inlineCode",{parentName:"p"},"axios.post")," before being sent off to a Casper node. If an error occurs, or the user rejects the signature request, it will be logged to ",(0,o.kt)("inlineCode",{parentName:"p"},"stderr"),". In this particular example, the result of this deployment will be presented to the user in the form of a JavaScript ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/alert"},"alert"),", however you may do with the response data as you please."),(0,o.kt)("p",null,"Now that this component is created, render it to the user interface in ",(0,o.kt)("em",{parentName:"p"},"src/App.js"),", passing along the ",(0,o.kt)("inlineCode",{parentName:"p"},"publicKey")," as a prop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport Connect from "./Connect";\nimport UpdateMessage from "./UpdateMessage";\n\nfunction App() {\n    const [publicKey, setPublicKey] = React.useState(null);\n    return (\n        <>\n            <Connect setPublicKey={setPublicKey} />\n            <UpdateMessage publicKey={publicKey} />\n        </>\n    );\n}\n')),(0,o.kt)("h2",{id:"query-a-smart-contract"},"Query a Smart Contract"),(0,o.kt)("p",null,"Consider that the message written to the chain during the ",(0,o.kt)("inlineCode",{parentName:"p"},"update_message")," entrypoint invocation is stored in the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/glossary/D#dictionary"},"dictionary")," ",(0,o.kt)("inlineCode",{parentName:"p"},"messages")," in the contract. Further consider that each account may write their own message, and that the messages are stored under the account's ",(0,o.kt)("a",{parentName:"p",href:"/concepts/glossary/A#account-hash"},"account hash")," as the dictionary key. Querying this kind of data is important in any dApp, here is how to communicate contract data to and from the front-end."),(0,o.kt)("p",null,"Create a new component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/Query.js\n")),(0,o.kt)("p",null,"Open the file and write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import axios from "axios";\nimport { CLPublicKey } from "casper-js-sdk";\n\nfunction Query(props) {\n    return <button onClick={() => query(props)}>Query</button>;\n}\n\nfunction query(props) {\n    const accountHash = CLPublicKey.fromHex(props.publicKey).toAccountHashStr().substring(13);\n    axios\n        .get("/queryMessage?accountHash=" + accountHash)\n        .then((response) => {\n            alert(response.data);\n        })\n        .catch((error) => {\n            console.error(error.message);\n        });\n}\n\nexport default Query;\n')),(0,o.kt)("p",null,"All this component does is render an HTML ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," element that, when pressed, performs a ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," request to the backend that includes the user's active account hash. The account hash is derived from the active public key, and is used to lookup the message stored by the current user."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"toAccountHashStr"),' method produces a string that is prepended by the text "account-hash-". In this case this text is not needed, so it is discarded by chaining on the ',(0,o.kt)("inlineCode",{parentName:"p"},"substring(13)")," method.")),(0,o.kt)("p",null,"Now add this component to ",(0,o.kt)("em",{parentName:"p"},"src/App.js"),", making available the ",(0,o.kt)("inlineCode",{parentName:"p"},"publicKey")," state variable via a prop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport Connect from "./Connect";\nimport UpdateMessage from "./UpdateMessage";\nimport Query from "./Query";\n\nfunction App() {\n    const [publicKey, setPublicKey] = React.useState(null);\n    return (\n        <>\n            <Connect setPublicKey={setPublicKey} />\n            <UpdateMessage publicKey={publicKey} />\n            <Query publicKey={publicKey} />\n        </>\n    );\n}\n')),(0,o.kt)("h2",{id:"test-application"},"Test Application"),(0,o.kt)("p",null,"Test your application by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vite dev\n")),(0,o.kt)("p",null,"Your application will start locally and a URL will be shown where you can visit your application. Alternatively, press ",(0,o.kt)("inlineCode",{parentName:"p"},"h"),", then ",(0,o.kt)("inlineCode",{parentName:"p"},"o")," to open the app in a browser."),(0,o.kt)("h2",{id:"build-for-production"},"Build for Production"),(0,o.kt)("p",null,"When you're ready to release your application, you'll want to compile it to pure JavaScript and serve it from a web server. Do so by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vite build\n")),(0,o.kt)("p",null,"Once this is complete you can preview your production build by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vite preview\n")))}h.isMDXComponent=!0}}]);