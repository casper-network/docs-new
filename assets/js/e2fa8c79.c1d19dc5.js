"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4080],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(n),y=r,m=u["".concat(p,".").concat(y)]||u[y]||d[y]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(4334),o={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(3117),r=n(7294),o=n(4334),l=n(2466),s=n(6550),p=n(1980),i=n(7392),c=n(12);function u(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:u(n);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function y(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,s.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,p._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function k(e){var t,n,a,o,l=e.defaultValue,s=e.queryString,p=void 0!==s&&s,i=e.groupId,u=d(e),k=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!y({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:u})})),f=k[0],h=k[1],b=m({queryString:p,groupId:i}),v=b[0],g=b[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:i}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=N[0],C=N[1],T=function(){var e=null!=v?v:w;return y({value:e,tabValues:u})?e:null}();return(0,r.useLayoutEffect)((function(){T&&h(T)}),[T]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!y({value:e,tabValues:u}))throw new Error("Can't select invalid tab value="+e);h(e),g(e),C(e)}),[g,C,u]),tabValues:u}}var f=n(2389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,s=e.selectedValue,p=e.selectValue,i=e.tabValues,c=[],u=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==s&&(u(t),p(a))},y=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;n=null!=(o=c[l])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return c.push(e)},onKeyDown:y,onClick:d},l,{className:(0,o.Z)("tabs__item",h.tabItem,null==l?void 0:l.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function v(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function g(e){var t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){var t=(0,f.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},4139:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return y}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=n(4866),s=n(5162),p=["components"],i={},c="SDK Client Library Usage",u={unversionedId:"developers/dapps/sdk/client-library-usage",id:"developers/dapps/sdk/client-library-usage",title:"SDK Client Library Usage",description:"Installation",source:"@site/source/docs/casper/developers/dapps/sdk/client-library-usage.md",sourceDirName:"developers/dapps/sdk",slug:"/developers/dapps/sdk/client-library-usage",permalink:"/developers/dapps/sdk/client-library-usage",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/dapps/sdk/client-library-usage.md",tags:[],version:"current",lastUpdatedAt:1680010537,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Introduction to SDKs",permalink:"/sdk"},next:{title:".NET SDK",permalink:"/developers/dapps/sdk/csharp-sdk"}},d={},y=[{value:"Installation",id:"installation",level:2},{value:"Accounts",id:"accounts",level:2},{value:"Create new keypair",id:"create-new-keypair",level:3},{value:"Exporting Keys",id:"exporting-keys",level:3},{value:"Load from private key",id:"load-from-private-key",level:3},{value:"Transferring CSPR",id:"transferring-cspr",level:2},{value:"Installing Contracts",id:"installing-contracts",level:2}],m={toc:y},k="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sdk-client-library-usage"},"SDK Client Library Usage"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," to install ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/casper-js-sdk"},"casper-js-sdk")," package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install casper-js-sdk\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install casper-js-sdk\n"))),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/pip/"},(0,o.kt)("inlineCode",{parentName:"a"},"pip"))," to install ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/pycspr/"},"pycspr")," package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pycspr\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"accounts"},"Accounts"),(0,o.kt)("p",null,"You may use the SDKs to interact with accounts on the Casper Network. Accounts can be of either ed25519 or secp256k1 cryptography."),(0,o.kt)("h3",{id:"create-new-keypair"},"Create new keypair"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { Keys } = require("casper-js-sdk");\nconst keypair = Keys.ALGO.new();\nconst { publicKey, privateKey } = keypair;\n')),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"ALGO")," with your key algorithm: ",(0,o.kt)("inlineCode",{parentName:"p"},"Ed25519")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Secp256K1"),".")),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pycspr.crypto import KeyAlgorithm, get_key_pair\nkeypair = get_key_pair(KeyAlgorithm.ALGO)\n")),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"ALGO")," with your key algorithm: ",(0,o.kt)("inlineCode",{parentName:"p"},"ED25519")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"SECP256K1"),"."))),(0,o.kt)("h3",{id:"exporting-keys"},"Exporting Keys"),(0,o.kt)("p",null,"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"keypair")," variable is a private key and a public key. There are many reasons you may want to use, read, or export your public key. You may also want access to the account hash as it is often used within smart contracts on the Casper Network. The following methods show you how to dissect your keypair."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Create a hexadecimal representation of the public key and account hash.\nconst publicKeyHex = publicKey.toHex();\nconst accountHashBytes = publicKey.toAccountHash();\nconst accountHashHex = Buffer.from(accountHashBytes).toString("hex");\n'))),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import pycspr.crypto\n\npublicKeyBytes = keypair.account_key\npublicKeyHex = pycspr.crypto.cl_checksum.encode(publicKeyBytes)\naccountHashBytes = pycspr.crypto.cl_operations.get_account_hash(publicKeyBytes)\naccountHashHex = pycspr.crypto.cl_checksum.encode(accountHashBytes)\n")))),(0,o.kt)("h3",{id:"load-from-private-key"},"Load from private key"),(0,o.kt)("p",null,"When you want to use a specific account, you should not include your private key within your source code, but instead load in your keypair from a local file."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { Keys } = require("casper-js-sdk");\nconst keypair = Keys.ALGO.loadKeyPairFromPrivateFile("./secret_key.pem");\n')),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"ALGO")," with your key algorithm: ",(0,o.kt)("inlineCode",{parentName:"p"},"Ed25519")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Secp256K1"),".")),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import pycspr\nkeypair = pycspr.parse_private_key(\n    "./secret_key.pem",\n    pycspr.crypto.KeyAlgorithm.ALGO\n)\n')),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"ALGO")," with your key algorithm: ",(0,o.kt)("inlineCode",{parentName:"p"},"ED25519")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"SECP256K1"),"."))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"transferring-cspr"},"Transferring CSPR"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"keypair")," created above in ",(0,o.kt)("a",{parentName:"p",href:"#accounts"},"Accounts"),", you can sign a CSPR transferral deploy."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { CasperClient, DeployUtil } = require("casper-js-sdk");\n\nconst casperClient = new CasperClient("http://NODE_ADDRESS:7777/rpc");\nconst receipientPublicKeyHex = "01e8c84f4fbb58d37991ef373c08043a45c44cd7f499453fa2bd3e141cc0113b3c";\n\nlet deployParams = new DeployUtil.DeployParams(\n    keypair.publicKey,\n    "casper", // or "casper-test" for testnet\n);\n\nconst session = DeployUtil.ExecutableDeployItem.newTransferWithOptionalTransferId(amount, recipientPublicKeyHex);\n\nconst payment = DeployUtil.standardPayment(100000000); // Gas payment in motes\nconst deploy = DeployUtil.makeDeploy(deployParams, session, payment);\nconst signedDeploy = DeployUtil.signDeploy(deploy, keypair);\n\nconsole.log(await casperClient.putDeploy(signedDeploy));\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: You can find active online peers to communicate with from the ",(0,o.kt)("inlineCode",{parentName:"em"},"CasperClient")," object at ",(0,o.kt)("a",{parentName:"em",href:"https://cspr.live/tools/peers"},"cspr.live")," for mainnet and for testnet: ",(0,o.kt)("a",{parentName:"em",href:"https://testnet.cspr.live/tools/peers"},"testnet.cspr.live"),"."))),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import pycspr\n\nclient = NodeClient(NodeConnection(host = "NODE_ADDRESS", port_rpc = 7777))\nrecipientPublicKeyHex = "01e8c84f4fbb58d37991ef373c08043a45c44cd7f499453fa2bd3e141cc0113b3c"\nrecipientPublicKeyBytes = pycspr.crypto.cl_checksum.decode(recipientPublicKeyHex)\n\ndeployParams = pycspr.create_deploy_parameters(\n    account = keypair,\n    chain_name = "casper" # or "casper-test" for testnet\n)\n\ndeploy = pycspr.create_transfer(\n    params = deployParams,\n    amount = int(2.5e9), # Minimum transfer, 2.5 CSPR\n    target = recipientPublicKeyBytes\n)\n\ndeploy.approve(keypair)\nclient.send_deploy(deploy)\nprint(deploy.hash.hex())\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: You can find active online peers to communicate with from the ",(0,o.kt)("inlineCode",{parentName:"em"},"NodeConnection")," object at ",(0,o.kt)("a",{parentName:"em",href:"https://cspr.live/tools/peers"},"cspr.live")," for mainnet and for testnet: ",(0,o.kt)("a",{parentName:"em",href:"https://testnet.cspr.live/tools/peers"},"testnet.cspr.live"),".")))),(0,o.kt)("p",null,"Once submitted, the above snippet will print the deploy hash in the console."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"installing-contracts"},"Installing Contracts"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { CasperClient, Contracts, RuntimeArgs, CLValueBuilder };\n\nconst casperClient = new CasperClient("http://NODE_ADDRESS:7777/rpc");\nconst contract = new Contracts.Contract(client);\n\nconst contractWasm = new Uint8Array(fs.readFileSync("/path/to/contract.wasm").buffer);\n\nconst runtimeArguments = RuntimeArgs.fromMap({\n    argument: CLValueBuilder.string("Hello world!"),\n});\n\nconst deploy = contract.install(\n    contractWasm,\n    runtimeArguments,\n    "10000000000", // Gas payment (10 CSPR)\n    keypair.publicKey,\n    "casper", // or "casper-test" for testnet\n    [keypair],\n);\n\nconsole.log(await casperClient.putDeploy(deploy));\n'))),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import pycspr\nfrom pycspr.types import ModuleBytes, CL_String\n\nclient = NodeClient(NodeConnection(host = "NODE_ADDRESS", port_rpc = 7777))\n\ndeployParams = pycspr.create_deploy_parameters(\n    account = keypair,\n    chain_name = "casper" # or "casper-test" for testnet\n)\npayment = pycspr.create_standard_payment(10000000000) # 10 CSPR\nsession = ModuleBytes(\n    module_bytes = pycspr.read_wasm("/path/to/contract.wasm"),\n    args = {\n        "message": CL_String("Hello world!"),\n    }\n)\n\ndeploy = pycspr.create_deploy(deployParams, payment, session)\n\ndeploy.approve(keypair)\nclient.send_deploy(deploy)\nprint(deploy.hash.hex())\n')))),(0,o.kt)("p",null,"Once submitted, the above snippet will print the deploy hash in the console."))}f.isMDXComponent=!0}}]);