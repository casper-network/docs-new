"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2691],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(4334),i={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(3117),r=n(7294),i=n(4334),l=n(2466),o=n(6550),s=n(1980),d=n(7392),c=n(12);function p(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function u(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,d.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,o.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function h(e){var t,n,a,i,l=e.defaultValue,o=e.queryString,s=void 0!==o&&o,d=e.groupId,p=u(e),h=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:p})})),v=h[0],k=h[1],b=f({queryString:s,groupId:d}),y=b[0],g=b[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),E=N[0],w=N[1],T=function(){var e=null!=y?y:E;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){T&&k(T)}),[T]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);k(e),g(e),w(e)}),[g,w,p]),tabValues:p}}var v=n(2389),k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,o=e.selectedValue,s=e.selectValue,d=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=c.indexOf(t),a=d[n].value;a!==o&&(p(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var i,l=c.indexOf(e.currentTarget)-1;n=null!=(i=c[l])?i:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},d.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:u},l,{className:(0,i.Z)("tabs__item",k.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=i.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function g(e){var t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){var t=(0,v.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},9827:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=n(4866),o=n(5162),s=["components"],d={},c="Monitoring and Consuming Events",p={unversionedId:"developers/dapps/monitor-and-consume-events",id:"developers/dapps/monitor-and-consume-events",title:"Monitoring and Consuming Events",description:"The Casper platform uses event streaming to signal state changes in smart contracts and nodes. Using Casper's client-side SDKs, dApps actively listening for emitted events can consume these events and perform actions based on event data.",source:"@site/source/docs/casper/developers/dapps/monitor-and-consume-events.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/monitor-and-consume-events",permalink:"/developers/dapps/monitor-and-consume-events",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/dapps/monitor-and-consume-events.md",tags:[],version:"current",lastUpdatedAt:1688996346,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Sending Deploys to a Casper network using the Rust Client",permalink:"/developers/dapps/sending-deploys"},next:{title:"Overview",permalink:"/developers/cli/"}},u={},m=[{value:"Listening to the Event Stream",id:"listening-to-the-event-stream",level:2},{value:"Event Types",id:"event-types",level:2},{value:"ApiVersion",id:"apiversion",level:3},{value:"BlockAdded",id:"blockadded",level:3},{value:"DeployAccepted",id:"deployaccepted",level:3},{value:"DeployProcessed",id:"deployprocessed",level:3},{value:"DeployExpired",id:"deployexpired",level:3},{value:"Fault",id:"fault",level:3},{value:"FinalitySignature",id:"finalitysignature",level:3},{value:"Step",id:"step",level:3},{value:"Shutdown",id:"shutdown",level:3},{value:"Reacting to Events",id:"reacting-to-events",level:2},{value:"Unsubscribing from Events",id:"unsubscribing-from-events",level:2},{value:"Stopping the Event Stream",id:"stopping-the-event-stream",level:2},{value:"Replaying the Event Stream",id:"replaying-the-event-stream",level:2}],f={toc:m},h="wrapper";function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)(h,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"monitoring-and-consuming-events"},"Monitoring and Consuming Events"),(0,i.kt)("p",null,"The Casper platform uses event streaming to signal state changes in smart contracts and nodes. Using Casper's client-side SDKs, dApps actively listening for emitted events can consume these events and perform actions based on event data."),(0,i.kt)("p",null,"Each Casper node streams events through the SSE (Server Sent Event) server via the port specified as the ",(0,i.kt)("inlineCode",{parentName:"p"},"event_stream_server.address")," in the node's ",(0,i.kt)("em",{parentName:"p"},"config.toml"),". This port is by default ",(0,i.kt)("inlineCode",{parentName:"p"},"9999")," for nodes on ",(0,i.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/tools/peers"},"Testnet")," and ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/tools/peers"},"Mainnet"),"."),(0,i.kt)("p",null,"Events are divided into three categories and streamed on their respective endpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Deploy events")," - Associated with ",(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#execution-semantics-deploys"},"Deploys")," on a node. Currently, only a ",(0,i.kt)("inlineCode",{parentName:"li"},"DeployAccepted")," event is emitted. The URL to consume deploy-related events on Mainnet and Testnet is ",(0,i.kt)("inlineCode",{parentName:"li"},"http://<HOST>:9999/events/deploys/"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Finality Signature events")," - Emitted when a block has been finalized and cannot be altered. The URL to consume finality signature events on Mainnet and Testnet is ",(0,i.kt)("inlineCode",{parentName:"li"},"http://<HOST>:9999/events/sigs/"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Main events")," - All other events fall under this type, including: ",(0,i.kt)("inlineCode",{parentName:"li"},"BlockAdded"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DeployProcessed"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DeployExpired"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Fault"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Step"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"Shutdown")," events. The URL to consume these events on Mainnet and Testnet is ",(0,i.kt)("inlineCode",{parentName:"li"},"http://<HOST>:9999/events/main/"),".")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"An ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiVersion")," event is always emitted when a new client connects to a node's SSE server, informing the client of the node's software version.")),(0,i.kt)("h2",{id:"listening-to-the-event-stream"},"Listening to the Event Stream"),(0,i.kt)("p",null,"Applications can listen for such events for a specific account during a particular era, containing certain data. Then, they can parse the data and discard what they do not need. To consume the event stream, set up an event listener in your dApp using the following code:"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const { EventStream, EventName } = require("casper-js-sdk");\n\nconst es = new EventStream("http://NODE_ADDRESS:9999/events/" + CHANNEL);\nes.start();\nes.subscribe(EventName.EVENT_NAME, eventHandler);\n\nconst eventHandler = (event) => {\n    console.log(event);\n};\n'))),(0,i.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from pycspr import NodeClient, NodeConnection, NodeEventChannel, NodeEventType\n\ndef eventHandler(event):\n    print(event)\n\nclient = NodeClient(NodeConnection(host = "NODE_ADDRESS", port_rpc = 7777))\nclient.get_events(eventHandler, NodeEventChannel.CHANNEL, NodeEventType.EVENT_NAME)\n'))),(0,i.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://NODE_ADDRESS:9999/events/CHANNEL\n")))),(0,i.kt)("p",null,"You can find node addresses of active online peers to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ADDRESS"),", by navigating to ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/tools/peers"},"cspr.live")," for Mainnet and ",(0,i.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/tools/peers"},"testnet.cspr.live")," for Testnet."),(0,i.kt)("p",null,"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"EVENT_NAME")," with one of the event types listed ",(0,i.kt)("a",{parentName:"p",href:"#event-types"},"below"),"."),(0,i.kt)("p",null,"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"CHANNEL")," with one of the following event streams:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"main")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"ApiVersion"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"BlockAdded"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DeployExpired"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DeployProcessed"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Fault"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"Step")," events."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deploys")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"DeployAccepted")," events."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sigs")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"FinalitySignature")," events.")),(0,i.kt)("h2",{id:"event-types"},"Event Types"),(0,i.kt)("h3",{id:"apiversion"},"ApiVersion"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiVersion")," event is always the first event emitted when a new client connects to a node's SSE server. It specifies the protocol version of a node on the Casper platform. The following example contains the JSON representation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiVersion")," event structure."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'data:{"ApiVersion":"1.0.0"}\n')),(0,i.kt)("h3",{id:"blockadded"},"BlockAdded"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockAdded")," event is emitted when a new block is added to the blockchain and stored locally in the node."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand to view output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "BlockAdded": {\n        "block_hash": "62ddf902e9b6988b978413e2a9a2c6c95f8e1ddf452afd8e8a68f0ac22bf391a",\n        "block": {\n            "hash": "62ddf105e9b6988b378413e2a9a2c6c95f8e1ddf458afd8e8268f0ac72bfe91a",\n            "header": {\n                "parent_hash": "ed11ac2117edb9c5b26cf0cde318a807fd68e76206855a70429012ef16b557f5",\n                "state_root_hash": "3c1ad31757ae40f934de4825a818274e0c246d304c661daf656e22b65174ad66",\n                "body_hash": "eb2344f37193395bbc83587e498bc12ad5f0019055abcfa4c3b989d382a7969a",\n                "random_bit": true,\n                "accumulated_seed": "b8b671530f2221c8fdf201083f43c51e215e2f6ffcbe2d63238a2779eb177922",\n                "era_end": null,\n                "timestamp": "2023-01-01T09:55:25.312Z",\n                "era_id": 8426,\n                "height": 1566677,\n                "protocol_version": "1.4.13"\n            },\n            "body": {\n                "proposer": "010e5669b0f0545e2b32bc66363b9d3d4390fca56bf52305f1411b7fa12ca311c7",\n                "deploy_hashes": [],\n                "transfer_hashes": []\n            },\n            "proofs": []\n        }\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#block-hash"},"block_hash")," - The cryptographic hash that identifies a block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#serialization-standard-block"},"block")," - The JSON representation of the block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#body"},"proposer")," - The validator selected to propose the block."))),(0,i.kt)("h3",{id:"deployaccepted"},"DeployAccepted"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DeployAccepted")," events are emitted when a node on the network receives a deploy."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand to view output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "DeployAccepted": {\n        "hash": "db84ba229ea37716230ac9874f66c0f12b9731d8d42f28060e481ef3d7263ead",\n        "header": {\n            "account": "012481699f9231e36ecf002675cd7186b48e6a735d10ec1b30f587ca716937752c",\n            "timestamp": "2023-01-01T20:22:45.383Z",\n            "ttl": "30m",\n            "gas_price": 1,\n            "body_hash": "8a377b07a01ac23905b2e416ff388508301feffbb9bdf275c59f87be1e9d0de5",\n            "dependencies": [],\n            "chain_name": "casper-test"\n        },\n        "payment": {\n            "ModuleBytes": {\n                "module_bytes": "",\n                "args": [\n                    [\n                        "amount",\n                        {\n                            "cl_type": "U512",\n                            "bytes": "040008af2f",\n                            "parsed": "800000000"\n                        }\n                    ]\n                ]\n            }\n        },\n        "session": {\n            "StoredContractByHash": {\n                "hash": "1040f40d06f0355a80149befc4b5d1f203231231d66c4903688e178c36066539",\n                "entry_point": "test_entry_point",\n                "args": [\n                    [\n                        "cost",\n                        {\n                            "cl_type": "U512",\n                            "bytes": "0500c817a804",\n                            "parsed": "20000000000"\n                        }\n                    ]\n                ]\n            }\n        },\n        "approvals": [\n            {\n                "signer": "012481699f9231e36ecf002675cd7186b48e6a735d10ec1b30f587ca716937752c",\n                "signature": "01d81d4dc9504a356c23d3c161b87b39b1708cd282b59d3e44d9b999e787643ab495f168475bed8dc48d1056605e06c8ba74d96c69ae5b506c4312be8871c0c701"\n            }\n        ]\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/hash-types"},"hash")," - The blake2b hash of the Deploy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#serialization-standard-account"},"account")," - The hexadecimal-encoded public key of the account submitting the Deploy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/hash-types"},"body_hash")," - The blake2b hash of the Deploy body."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/glossary/P#payment-code"},"payment")," - Gas payment information."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/session-code#what-is-session-code"},"session")," - The session logic defining the Deploy's functionality."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/developers/json-rpc/types_chain#approval"},"approvals")," - The signer's hexadecimal-encoded public key and signature."))),(0,i.kt)("p",null,"For details on custom serializations, check the ",(0,i.kt)("a",{parentName:"p",href:"/concepts/serialization-standard"},"Serialization Standard"),". Also, the ",(0,i.kt)("a",{parentName:"p",href:"/developers/json-rpc/types_chain"},"Types")," page defines the terms used in the event stream output."),(0,i.kt)("h3",{id:"deployprocessed"},"DeployProcessed"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"DeployProcessed")," event is emitted when a given Deploy has been executed."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand to view output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "DeployProcessed": {\n        "deploy_hash": "0f33be8f56ff23d7d503a9804675472e043830a6c17e6141dce717b4f0973c7d",\n        "account": "0201cbff12155b6ae1e99d571c01d56e9e1ba0def6719a6f06bc3e4a08f30a887444",\n        "timestamp": "2023-01-01T10:07:00.401Z",\n        "ttl": "30m",\n        "dependencies": [],\n        "block_hash": "509b754648168a73e6ab67e64d4a783cf580d6fc0c7c0ec560c6650f717841e0",\n        "execution_result": {\n            "Success": {\n                "effect": {\n                    "operations": [],\n                    "transforms": [\n                        {\n                            "key": "account-hash-a8261377ef9cf8e7411d6858801c71e28c9322e66355586549c75ab24cdd73f2",\n                            "transform": "Identity"\n                        }\n                    ]\n                },\n                "transfers": ["transfer-3389144d15238240f48f5966f2dc299b6b20eb19c13d834409b4d28fc50fa909"],\n                "cost": "100000000"\n            }\n        }\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#deploy-hash"},"deploy_hash")," - The cryptographic hash of a Deploy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#serialization-standard-account"},"account")," - The hexadecimal-encoded public key of the account submitting the Deploy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#timestamp"},"timestamp")," - A timestamp type representing a concrete moment in time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#deploy-header"},"dependencies")," - A list of Deploy hashes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#block-hash"},"block_hash")," - A cryptographic hash identifying a Block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#executionresult"},"execution_result")," - The execution status of the Deploy, which is either ",(0,i.kt)("inlineCode",{parentName:"li"},"Success")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Failure"),"."))),(0,i.kt)("h3",{id:"deployexpired"},"DeployExpired"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"DeployExpired")," event is emitted when the Deploy is no longer valid for processing or being added to a block due to its time to live (TTL) having expired."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand to view output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "DeployExpired": {\n        "deploy_hash": "7ecf22fc284526d6db16fbf455f489e0a9cbf782234131c010cf3078fb9be353"\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#deploy-hash"},"deploy_hash")," - The cryptographic hash of a Deploy."))),(0,i.kt)("h3",{id:"fault"},"Fault"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Fault")," event is emitted if there is a validator error."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand the below section to view the Fault event details:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Fault": {\n        "era_id": 4591448806312642600,\n        "public_key": "013da85eb06279da42e28530e1116be04bfd2aa25ed8d63401ebff4d9153a609a9",\n        "timestamp": "2023-01-01T01:26:58.364Z"\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#eraid"},"era_id")," - A period of time during which the validator set does not change."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#publickey"},"public_key")," - The hexadecimal-encoded public key of the validator that caused the fault."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#timestamp"},"timestamp")," - A timestamp representing the moment the validator faulted."))),(0,i.kt)("h3",{id:"finalitysignature"},"FinalitySignature"),(0,i.kt)("p",null,"This event indicates validators have signed the final approvals and further alterations to the block will not be allowed. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"/deploy-and-deploy-lifecycle#consensus-reached"},"consensus reached")," and ",(0,i.kt)("a",{parentName:"p",href:"/concepts/glossary/B#block-finality"},"block finality")," sections to learn more about finality signatures."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand to view output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "FinalitySignature": {\n        "block_hash": "eceed827e11f7969a7d3fe91d6fa4ce9749dd79d9f3ea26474fe2014db90e98d",\n        "era_id": 8419,\n        "signature": "0117087ef4b9a786e5a0ea8f198050e9de93dd94f87469b8124c346aeae5f36ad9adf80f670ee9c5887263267ed32cf932dce9b370353c596d59f91fbd57a1a205",\n        "public_key": "01c375b425a36de25dc325c9182861679db2f634abcacd9ae2ee27b84ba62ac1f7"\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#block-hash"},"block_hash")," - A cryptographic hash identifying a Block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#eraid"},"era_id")," - A period of time during which the validator set does not change."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#signature"},"signature")," - Serialized bytes representing the validator's signature."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#publickey"},"public_key")," - The hexadecimal-encoded public key of the validator."))),(0,i.kt)("h3",{id:"step"},"Step"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Step")," event is emitted at the end of every era and contains the execution effects produced by running the auction contract's ",(0,i.kt)("inlineCode",{parentName:"p"},"step")," function."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand to view output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Step": {\n        "era_id": 1,\n        "execution_effect": {\n            "operations": [],\n            "transforms": [\n                {\n                    "key": "uref-53df18bf01396fbd1ef3a8757c7bdffc684c407d90f2cfeebff166db1d923613-000",\n                    "transform": "Identity"\n                },\n                {\n                    "key": "uref-f268de37fcea55f8fb1abeba8536a1cc041b2aed2691f1cf34aeaaf0ae379aa5-000",\n                    "transform": "Identity"\n                },\n                {\n                    "key": "bid-278e5af1ca6cddf5d5438999cb072b47f0d65e1484799f692c3c9c40304be30e",\n                    "transform": "Identity"\n                },\n                {\n                    "key": "bid-278e5af1ca6cddf5d5438999cb072b47f0d65e1484799f692c3c9c40304be30e",\n                    "transform": {\n                        "WriteBid": {\n                            "validator_public_key": "0133eaae2821f090ac3ba0eadc0a897742094c0604df72b465c41d4b773298a7b9",\n                            "bonding_purse": "uref-136552c255d4d737bf7e43d2be250f9f38691b9fe5d9e34446bff18d6d1cf984-007",\n                            "staked_amount": "1000000000000005",\n                            "delegation_rate": 5,\n                            "vesting_schedule": {\n                                "initial_release_timestamp_millis": 1664475057182,\n                                "locked_amounts": null\n                            },\n                            "delegators": {\n                                "012a241eaa9fa3bd6ccb0e0aaaf4658538f3540e04e2f58973614a168f2f2f813d": {\n                                    "delegator_public_key": "012a241eaa9fa3bd6ccb0e0aaaf4658538f3540e04e2f58973614a168f2f2f813d",\n                                    "staked_amount": "51312014671568117976319379",\n                                    "bonding_purse": "uref-c5ad00f9e6b2f2631ca647ad188187e63799a278a0a46ca25f6b4da64d556662-007",\n                                    "validator_public_key": "0133eaae2821f090ac3ba0eadc0a897742094c0604df72b465c41d4b773298a7b9",\n                                    "vesting_schedule": {\n                                        "initial_release_timestamp_millis": 1664475057182,\n                                        "locked_amounts": null\n                                    }\n                                }\n                            },\n                            "inactive": false\n                        }\n                    }\n                }\n            ]\n        }\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#eraid"},"era_id")," - A period of time during which the validator set does not change."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#executioneffect"},"execution_effect")," - The journal of execution transforms from a single Deploy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#operation"},"operations")," - Operations performed while executing a Deploy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#transform"},"transform")," - The actual transformation performed while executing a Deploy."))),(0,i.kt)("h3",{id:"shutdown"},"Shutdown"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Shutdown")," event is emitted when the node is about to shut down, usually for an upgrade, causing a termination of the event stream."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand the below section to view the Shutdown event details:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'"Shutdown"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Shutdown - The "Shutdown" text notifies the event listener that a shutdown will occur.'))),(0,i.kt)("h2",{id:"reacting-to-events"},"Reacting to Events"),(0,i.kt)("p",null,"An application may parse each event needed for its use case and respond accordingly. The dApp may act on some events and not others, or it may act upon them all, depending on its use case. Each event type contains additional data that might help in deciding whether or not to take an action. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"DeployAccepted")," events contain the account's public key that submitted the deploy, the contract address, and more. This information can help determine how to proceed or whether or not to react."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const eventHandler = (event) => {\n    if (event.body.DeployAccepted.header.account == "012481699f9231e36ecf002675cd7186b48e6a735d10ec1b30f587ca716937752c") {\n        // Perform an action\n    }\n};\n'))),(0,i.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def eventHandler(event):\n  if event["DeployAccepted"]["header"]["account"] == "012481699f9231e36ecf002675cd7186b48e6a735d10ec1b30f587ca716937752c":\n    # Perform an action\n')))),(0,i.kt)("h2",{id:"unsubscribing-from-events"},"Unsubscribing from Events"),(0,i.kt)("p",null,"In many cases, an application may need to unsubscribe after a certain time or may want to unsubscribe from some events but not others. The Casper SDKs provide this ability with the ",(0,i.kt)("inlineCode",{parentName:"p"},"unsubscribe")," function:"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"es.unsubscribe(EventName.EVENT_NAME);\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EVENT_NAME")," - One of the different ",(0,i.kt)("a",{parentName:"li",href:"#event-types"},"event types")," emitted by a Casper node.")),(0,i.kt)("h2",{id:"stopping-the-event-stream"},"Stopping the Event Stream"),(0,i.kt)("p",null,"A dApp may cease listening to all events using the ",(0,i.kt)("inlineCode",{parentName:"p"},"stop")," function:"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"es.stop();\n")))),(0,i.kt)("h2",{id:"replaying-the-event-stream"},"Replaying the Event Stream"),(0,i.kt)("p",null,"This command will replay the event stream from an old event onward. Replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ADDRESS"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CHANNEL"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"ID")," fields with the values of your scenario."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sN http://NODE_ADDRESS:9999/events/CHANNEL?start_from=ID\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sN http://65.21.235.219:9999/events/main?start_from=29267508\n")))),(0,i.kt)("p",null,"Each URL can have a query string added to the form ",(0,i.kt)("inlineCode",{parentName:"p"},"?start_from=ID"),", where ID is an integer representing an old event ID. With this query, you can replay the event stream from that old event onward. If you specify an event ID already purged from the cache, the server will replay all the cached events."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The server keeps only a limited number of events cached to allow replaying the stream to clients using the ",(0,i.kt)("inlineCode",{parentName:"p"},"?start_from=")," query string. The cache size can be set differently on each node using the ",(0,i.kt)("inlineCode",{parentName:"p"},"event_stream_buffer_length")," value in the ",(0,i.kt)("em",{parentName:"p"},"config.toml"),". By default, it is only 5000. The intended use case is to allow a client consuming the event stream that loses its connection to reconnect and catch up with events that were emitted while it was disconnected.")))}v.isMDXComponent=!0}}]);