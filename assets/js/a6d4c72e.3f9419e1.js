"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2691],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(4334),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(3117),r=a(7294),o=a(4334),i=a(2466),l=a(6550),s=a(1980),p=a(7392),c=a(12);function d(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function u(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(a);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function h(e){var t,a,n,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,p=e.groupId,d=u(e),h=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!f({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:d})})),k=h[0],b=h[1],v=m({queryString:s,groupId:p}),y=v[0],N=v[1],g=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),a=(0,c.Nk)(t),n=a[0],o=a[1],[n,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=g[0],E=g[1],T=function(){var e=null!=y?y:w;return f({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){T&&b(T)}),[T]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),N(e),E(e)}),[N,E,d]),tabValues:d}}var k=a(2389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){var t=e.className,a=e.block,l=e.selectedValue,s=e.selectValue,p=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==l&&(d(t),s(n))},f=function(e){var t,a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;a=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;a=null!=(o=c[i])?o:c[c.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:u},i,{className:(0,o.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function N(e){var t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function g(e){var t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},9827:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return f}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=a(4866),l=a(5162),s=["components"],p={},c="Monitor and Consume Events",d={unversionedId:"developers/dapps/monitor-and-consume-events",id:"developers/dapps/monitor-and-consume-events",title:"Monitor and Consume Events",description:"The Casper Network emits events through its native event stream, which can be captured by applications that are actively listning for them. Using Casper's client side SDKs, you can consume these events within your dApp and perform actions based on event data.",source:"@site/source/docs/casper/developers/dapps/monitor-and-consume-events.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/monitor-and-consume-events",permalink:"/developers/dapps/monitor-and-consume-events",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/dapps/monitor-and-consume-events.md",tags:[],version:"current",lastUpdatedAt:1686299724,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Sending Deploys to a Casper network using the Rust Client",permalink:"/developers/dapps/sending-deploys"},next:{title:"Overview",permalink:"/developers/cli/"}},u={},f=[{value:"Listen to the Event Stream",id:"listen-to-the-event-stream",level:2},{value:"Event Types",id:"event-types",level:2},{value:"BlockAdded",id:"blockadded",level:3},{value:"DeployAccepted",id:"deployaccepted",level:3},{value:"FinalitySignature",id:"finalitysignature",level:3},{value:"DeployProcessed",id:"deployprocessed",level:3},{value:"DeployExpired",id:"deployexpired",level:3},{value:"Fault",id:"fault",level:3},{value:"Step",id:"step",level:3},{value:"Shutdown",id:"shutdown",level:3},{value:"Act on Events",id:"act-on-events",level:2},{value:"Unsubscribe from Events",id:"unsubscribe-from-events",level:2},{value:"Stop Streaming Events",id:"stop-streaming-events",level:2}],m={toc:f},h="wrapper";function k(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitor-and-consume-events"},"Monitor and Consume Events"),(0,o.kt)("p",null,"The Casper Network emits events through its native event stream, which can be captured by applications that are actively listning for them. Using Casper's client side SDKs, you can consume these events within your dApp and perform actions based on event data."),(0,o.kt)("p",null,"The default configuration of the Casper node provides event streaming via the port specified as the ",(0,o.kt)("inlineCode",{parentName:"p"},"event_stream_server.address")," in the node's ",(0,o.kt)("em",{parentName:"p"},"config.toml"),", which is by default ",(0,o.kt)("inlineCode",{parentName:"p"},"9999")," for nodes on ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/tools/peers"},"Testnet")," and ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/tools/peers"},"Mainnet"),"."),(0,o.kt)("h2",{id:"listen-to-the-event-stream"},"Listen to the Event Stream"),(0,o.kt)("p",null,"Setup an event listener in your app using the following:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { EventStream, EventName } = require("casper-js-sdk");\n\nconst es = new EventStream("http://NODE_ADDRESS:9999/events/" + CHANNEL);\nes.start();\nes.subscribe(EventName.EVENT_NAME, eventHandler);\n\nfunction eventHandler(event) {\n    console.log(event);\n}\n'))),(0,o.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pycspr import NodeClient, NodeConnection, NodeEventChannel, NodeEventType\n\ndef eventHandler(event):\n    print(event)\n\nclient = NodeClient(NodeConnection(host = "NODE_ADDRESS", port_rpc = 7777))\nclient.get_events(eventHandler, NodeEventChannel.CHANNEL, NodeEventType.EVENT_NAME)\n')))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: You can find active online peers' ",(0,o.kt)("inlineCode",{parentName:"em"},"NODE_ADDRESS"),"es at ",(0,o.kt)("a",{parentName:"em",href:"https://cspr.live/tools/peers"},"cspr.live")," for mainnet and ",(0,o.kt)("a",{parentName:"em",href:"https://testnet.cspr.live/tools/peers"},"testnet.cspr.live")," for testnet.")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"CHANNEL")," is set to; ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," for the following event types; ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiVersion"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"BlockAdded"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DeployExpired"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DeployProcessed"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Fault")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Step"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"deploys")," for event types; ",(0,o.kt)("inlineCode",{parentName:"p"},"DeployAccepted"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"sigs")," for event type ",(0,o.kt)("inlineCode",{parentName:"p"},"FinalitySignature"),"."),(0,o.kt)("p",null,"And where ",(0,o.kt)("inlineCode",{parentName:"p"},"EVENT_NAME")," is one of the following different types of events emitted by the Casper Network:"),(0,o.kt)("h2",{id:"event-types"},"Event Types"),(0,o.kt)("h3",{id:"blockadded"},"BlockAdded"),(0,o.kt)("p",null,"Emitted when a new block is added to the blockchain and stored locally in the node."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to view output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "BlockAdded": {\n        "block_hash": "62ddf902e9b6988b978413e2a9a2c6c95f8e1ddf452afd8e8a68f0ac22bf391a",\n        "block": {\n            "hash": "62ddf105e9b6988b378413e2a9a2c6c95f8e1ddf458afd8e8268f0ac72bfe91a",\n            "header": {\n                "parent_hash": "ed11ac2117edb9c5b26cf0cde318a807fd68e76206855a70429012ef16b557f5",\n                "state_root_hash": "3c1ad31757ae40f934de4825a818274e0c246d304c661daf656e22b65174ad66",\n                "body_hash": "eb2344f37193395bbc83587e498bc12ad5f0019055abcfa4c3b989d382a7969a",\n                "random_bit": true,\n                "accumulated_seed": "b8b671530f2221c8fdf201083f43c51e215e2f6ffcbe2d63238a2779eb177922",\n                "era_end": null,\n                "timestamp": "2023-01-01T09:55:25.312Z",\n                "era_id": 8426,\n                "height": 1566677,\n                "protocol_version": "1.4.13"\n            },\n            "body": {\n                "proposer": "010e5669b0f0545e2b32bc66363b9d3d4390fca56bf52305f1411b7fa12ca311c7",\n                "deploy_hashes": [],\n                "transfer_hashes": []\n            },\n            "proofs": []\n        }\n    }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#block-hash"},"block_hash")),(0,o.kt)("p",{parentName:"li"},"The cryptographic hash that is used to identify a block.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#serialization-standard-block"},"block")),(0,o.kt)("p",{parentName:"li"},"The JSON representation of the block.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#body"},"proposer")),(0,o.kt)("p",{parentName:"li"},"The validator selected to propose the block.")))),(0,o.kt)("h3",{id:"deployaccepted"},"DeployAccepted"),(0,o.kt)("p",null,"Emitted when a deploy executes successfully and is accepted on the network."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to view output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "DeployAccepted": {\n        "hash": "db84ba229ea37716230ac9874f66c0f12b9731d8d42f28060e481ef3d7263ead",\n        "header": {\n            "account": "012481699f9231e36ecf002675cd7186b48e6a735d10ec1b30f587ca716937752c",\n            "timestamp": "2023-01-01T20:22:45.383Z",\n            "ttl": "30m",\n            "gas_price": 1,\n            "body_hash": "8a377b07a01ac23905b2e416ff388508301feffbb9bdf275c59f87be1e9d0de5",\n            "dependencies": [],\n            "chain_name": "casper-test"\n        },\n        "payment": {\n            "ModuleBytes": {\n                "module_bytes": "",\n                "args": [\n                    [\n                        "amount",\n                        {\n                            "cl_type": "U512",\n                            "bytes": "040008af2f",\n                            "parsed": "800000000"\n                        }\n                    ]\n                ]\n            }\n        },\n        "session": {\n            "StoredContractByHash": {\n                "hash": "1040f40d06f0355a80149befc4b5d1f203231231d66c4903688e178c36066539",\n                "entry_point": "test_entry_point",\n                "args": [\n                    [\n                        "cost",\n                        {\n                            "cl_type": "U512",\n                            "bytes": "0500c817a804",\n                            "parsed": "20000000000"\n                        }\n                    ]\n                ]\n            }\n        },\n        "approvals": [\n            {\n                "signer": "012481699f9231e36ecf002675cd7186b48e6a735d10ec1b30f587ca716937752c",\n                "signature": "01d81d4dc9504a356c23d3c161b87b39b1708cd282b59d3e44d9b999e787643ab495f168475bed8dc48d1056605e06c8ba74d96c69ae5b506c4312be8871c0c701"\n            }\n        ]\n    }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/hash-types"},"hash")),(0,o.kt)("p",{parentName:"li"},"The blake2b hash of the deploy.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#serialization-standard-account"},"account")),(0,o.kt)("p",{parentName:"li"},"The hexadecimal-encoded public key of the account submitting the deploy.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/hash-types"},"body_hash")),(0,o.kt)("p",{parentName:"li"},"The blake2b hash of the deploy body.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/glossary/P#payment-code"},"payment")),(0,o.kt)("p",{parentName:"li"},"Gas payment information.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/session-code#what-is-session-code"},"session")),(0,o.kt)("p",{parentName:"li"},"The session logic defining the deploy's functionality.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/types_chain#approval"},"approvals")),(0,o.kt)("p",{parentName:"li"},"The signer's hexadecimal-encoded public key along with its signature.")))),(0,o.kt)("h3",{id:"finalitysignature"},"FinalitySignature"),(0,o.kt)("p",null,"This event indicates that the final approvals from validators are signed and further alterations to the block will not be allowed. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#consensus-reached"},"consensus reached")," and ",(0,o.kt)("a",{parentName:"p",href:"/concepts/glossary/B#block-finality"},"block finality")," sections to learn more about finality signatures."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to view output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "FinalitySignature": {\n        "block_hash": "eceed827e11f7969a7d3fe91d6fa4ce9749dd79d9f3ea26474fe2014db90e98d",\n        "era_id": 8419,\n        "signature": "0117087ef4b9a786e5a0ea8f198050e9de93dd94f87469b8124c346aeae5f36ad9adf80f670ee9c5887263267ed32cf932dce9b370353c596d59f91fbd57a1a205",\n        "public_key": "01c375b425a36de25dc325c9182861679db2f634abcacd9ae2ee27b84ba62ac1f7"\n    }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#block-hash"},"block_hash")),(0,o.kt)("p",{parentName:"li"},"A cryptographic hash that is used to identify a block.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#eraid"},"era_id")),(0,o.kt)("p",{parentName:"li"},"The period of time used to specify when specific events in a blockchain network occur.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#signature"},"signature")),(0,o.kt)("p",{parentName:"li"},"A serialized byte representation of the validator's signature.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#publickey"},"public_key")),(0,o.kt)("p",{parentName:"li"},"The hexadecimal-encoded public key of the validator.")))),(0,o.kt)("h3",{id:"deployprocessed"},"DeployProcessed"),(0,o.kt)("p",null,"Emitted when a deploy is processed on the blockchain. This applies to every deploy; to listen to deploys from a certain account, during a certain time, containing certain data, etc, parse the data and discard what is not needed."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to view output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "DeployProcessed": {\n        "deploy_hash": "0f33be8f56ff23d7d503a9804675472e043830a6c17e6141dce717b4f0973c7d",\n        "account": "0201cbff12155b6ae1e99d571c01d56e9e1ba0def6719a6f06bc3e4a08f30a887444",\n        "timestamp": "2023-01-01T10:07:00.401Z",\n        "ttl": "30m",\n        "dependencies": [],\n        "block_hash": "509b754648168a73e6ab67e64d4a783cf580d6fc0c7c0ec560c6650f717841e0",\n        "execution_result": {\n            "Success": {\n                "effect": {\n                    "operations": [],\n                    "transforms": [\n                        {\n                            "key": "account-hash-a8261377ef9cf8e7411d6858801c71e28c9322e66355586549c75ab24cdd73f2",\n                            "transform": "Identity"\n                        }\n                    ]\n                },\n                "transfers": ["transfer-3389144d15238240f48f5966f2dc299b6b20eb19c13d834409b4d28fc50fa909"],\n                "cost": "100000000"\n            }\n        }\n    }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#deploy-hash"},"deploy_hash")),(0,o.kt)("p",{parentName:"li"},"The cryptographic hash of a Deploy.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#serialization-standard-account"},"account")),(0,o.kt)("p",{parentName:"li"},"The hexadecimal-encoded public key of the account submitting the deploy.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#timestamp"},"timestamp")),(0,o.kt)("p",{parentName:"li"},"A timestamp type, representing a concrete moment in time.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#deploy-header"},"dependencies")),(0,o.kt)("p",{parentName:"li"},"A list of Deploy hashes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#block-hash"},"block_hash")),(0,o.kt)("p",{parentName:"li"},"A cryptographic hash that is used to identify a Block.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#executionresult"},"execution_result")),(0,o.kt)("p",{parentName:"li"},"The execution status of the deploy (Success or Failure).")))),(0,o.kt)("h3",{id:"deployexpired"},"DeployExpired"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DeployExpired")," event is emitted when a Deploy becomes no longer valid to be executed or added to a block due to their times to live (TTLs) expiring."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to view output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "DeployExpired": {\n        "deploy_hash": "7ecf22fc284526d6db16fbf455f489e0a9cbf782234131c010cf3078fb9be353"\n    }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#deploy-hash"},"deploy_hash")),(0,o.kt)("p",{parentName:"li"},"The cryptographic hash of a Deploy.")))),(0,o.kt)("h3",{id:"fault"},"Fault"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Fault")," event is emitted if there is a validator error."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand the below section to view the Fault event details:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Fault": {\n        "era_id": 4591448806312642600,\n        "public_key": "013da85eb06279da42e28530e1116be04bfd2aa25ed8d63401ebff4d9153a609a9",\n        "timestamp": "2023-01-01T01:26:58.364Z"\n    }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#eraid"},"era_id")," - The period of time used to specify when specific events in a blockchain network occur."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#publickey"},"public_key")," - The hexadecimal-encoded public key of the validator that faulted."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#timestamp"},"timestamp")," - A timestamp representing the moment the validator faulted."))),(0,o.kt)("h3",{id:"step"},"Step"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Step")," event is emitted at the end of every era and contains the execution effects produced by running the auction contract's ",(0,o.kt)("inlineCode",{parentName:"p"},"step")," function."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to view output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Step": {\n        "era_id": 1,\n        "execution_effect": {\n            "operations": [],\n            "transforms": [\n                {\n                    "key": "uref-53df18bf01396fbd1ef3a8757c7bdffc684c407d90f2cfeebff166db1d923613-000",\n                    "transform": "Identity"\n                },\n                {\n                    "key": "uref-f268de37fcea55f8fb1abeba8536a1cc041b2aed2691f1cf34aeaaf0ae379aa5-000",\n                    "transform": "Identity"\n                },\n                {\n                    "key": "bid-278e5af1ca6cddf5d5438999cb072b47f0d65e1484799f692c3c9c40304be30e",\n                    "transform": "Identity"\n                },\n                {\n                    "key": "bid-278e5af1ca6cddf5d5438999cb072b47f0d65e1484799f692c3c9c40304be30e",\n                    "transform": {\n                        "WriteBid": {\n                            "validator_public_key": "0133eaae2821f090ac3ba0eadc0a897742094c0604df72b465c41d4b773298a7b9",\n                            "bonding_purse": "uref-136552c255d4d737bf7e43d2be250f9f38691b9fe5d9e34446bff18d6d1cf984-007",\n                            "staked_amount": "1000000000000005",\n                            "delegation_rate": 5,\n                            "vesting_schedule": {\n                                "initial_release_timestamp_millis": 1664475057182,\n                                "locked_amounts": null\n                            },\n                            "delegators": {\n                                "012a241eaa9fa3bd6ccb0e0aaaf4658538f3540e04e2f58973614a168f2f2f813d": {\n                                    "delegator_public_key": "012a241eaa9fa3bd6ccb0e0aaaf4658538f3540e04e2f58973614a168f2f2f813d",\n                                    "staked_amount": "51312014671568117976319379",\n                                    "bonding_purse": "uref-c5ad00f9e6b2f2631ca647ad188187e63799a278a0a46ca25f6b4da64d556662-007",\n                                    "validator_public_key": "0133eaae2821f090ac3ba0eadc0a897742094c0604df72b465c41d4b773298a7b9",\n                                    "vesting_schedule": {\n                                        "initial_release_timestamp_millis": 1664475057182,\n                                        "locked_amounts": null\n                                    }\n                                }\n                            },\n                            "inactive": false\n                        }\n                    }\n                }\n            ]\n        }\n    }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#eraid"},"era_id")),(0,o.kt)("p",{parentName:"li"},"The period of time is used to specify when specific events in a blockchain network will occur.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#executioneffect"},"execution_effect")),(0,o.kt)("p",{parentName:"li"},"The journal of execution transforms from a single Deploy.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#operation"},"operations")),(0,o.kt)("p",{parentName:"li"},"Operations performed while executing a deploy.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#transform"},"transform")),(0,o.kt)("p",{parentName:"li"},"The actual transformation performed while executing a deploy.")))),(0,o.kt)("h3",{id:"shutdown"},"Shutdown"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Shutdown")," event is emitted when the node is about to shut down, usually for an upgrade. This causes a termination of the event stream."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand the below section to view the Shutdown event details:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'"Shutdown"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Shutdown"),(0,o.kt)("p",{parentName:"li"},'The "Shutdown" text notifies the event listener that a shutdown will be occurring.')))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard"},"serialization standard")," page to get details on required custom serializations and the ",(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/types_chain"},"types")," page to find definitions of the terms used in the event stream output."),(0,o.kt)("h2",{id:"act-on-events"},"Act on Events"),(0,o.kt)("p",null,"To perform functions upon receiving event data, you will need to parse each event that is recognized and respond in your own way. You may choose to act on some events and not others, or you may act upon them all. For each event type, there will be more data you can check to decide if the event received is one you want to react to. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"DeployAccepted")," events will contain the public key of the account that submitted the deploy, the contract address, and more. You can use this information to determine whether you would like to react and how, or not."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'function eventHandler(event) {\n    if (event.body.DeployAccepted.header.account == "012481699f9231e36ecf002675cd7186b48e6a735d10ec1b30f587ca716937752c") {\n        // Perform an action\n    }\n}\n'))),(0,o.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def eventHandler(event):\n  if event["DeployAccepted"]["header"]["account"] == "012481699f9231e36ecf002675cd7186b48e6a735d10ec1b30f587ca716937752c":\n    # Perform an action\n')))),(0,o.kt)("h2",{id:"unsubscribe-from-events"},"Unsubscribe from Events"),(0,o.kt)("p",null,"In many cases, you may want to only be subscribed to events for a certain amount of time, or may want to unsubscribe from some events but not others. Casper's SDKs provide this ability:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"es.unsubscribe(EventName.EVENT_NAME);\n")))),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"EVENT_NAME")," is one of the different ",(0,o.kt)("a",{parentName:"p",href:"#event-types"},"event types")," emitted by the Casper Network."),(0,o.kt)("h2",{id:"stop-streaming-events"},"Stop Streaming Events"),(0,o.kt)("p",null,"If at any time in the lifecycle of your dApp you would like to cease listening to events altogether, you may do so using:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"es.stop();\n")))))}k.isMDXComponent=!0}}]);