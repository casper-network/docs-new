"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1677],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),u=i,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5415:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var n=a(3117),i=a(102),o=(a(7294),a(3905)),r=["components"],s={},l="Overview of a Casper Network",c={unversionedId:"concepts/design/casper-design",id:"concepts/design/casper-design",title:"Overview of a Casper Network",description:"Introduction",source:"@site/source/docs/casper/concepts/design/casper-design.md",sourceDirName:"concepts/design",slug:"/concepts/design/casper-design",permalink:"/concepts/design/casper-design",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/concepts/design/casper-design.md",tags:[],version:"current",lastUpdatedAt:1688572581,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{},sidebar:"concepts",previous:{title:"Introduction",permalink:"/design"},next:{title:"Network Communication",permalink:"/concepts/design/p2p"}},p={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Execution Semantics",id:"execution-semantics-head",level:2},{value:"Measuring Computational Work",id:"execution-semantics-gas",level:3},{value:"The Casper Network Runtime",id:"execution-semantics-runtime",level:3},{value:"Generating <code>URef</code>s",id:"execution-semantics-urefs",level:4},{value:"Accounts",id:"accounts-head",level:2},{value:"Creating an account",id:"accounts-creating",level:3},{value:"Permissions Model",id:"accounts-permissions",level:3},{value:"Actions and Thresholds",id:"accounts-actions-thresholds",level:4},{value:"Associated Keys and Weights",id:"accounts-associated-keys-weights",level:4},{value:"Key Management Actions",id:"accounts-key-management",level:4},{value:"Account security and recovery using key management",id:"accounts-recovery",level:4},{value:"The Account Context",id:"accounts-context",level:3},{value:"Unforgeable Reference (URef)",id:"uref-head",level:2},{value:"Permissions for <code>URef</code>s",id:"uref-permissions",level:3},{value:"<code>URef</code>s and Purses",id:"urefs-and-purses",level:3},{value:"Block Structure",id:"block-structure-head",level:2},{value:"Data Fields",id:"block-structure-data",level:3},{value:"<code>block_hash</code>",id:"block_hash",level:4},{value:"Header",id:"header",level:4},{value:"Body",id:"body",level:4},{value:"Tokens",id:"tokens-head",level:2},{value:"Token Generation and Distribution",id:"token-generation-and-distribution",level:3},{value:"Divisibility of Tokens",id:"tokens-divisibility",level:3},{value:"Purses and Accounts",id:"tokens-purses-and-accounts",level:3},{value:"The Casper Mint Contract",id:"mint-contract",level:3},{value:"The mint Contract Interface",id:"tokens-mint-interface",level:2}],d={toc:h},u="wrapper";function m(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)(u,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview-of-a-casper-network"},"Overview of a Casper Network"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Casper is a Proof-of-Stake blockchain platform with an account-based model that performs execution after ",(0,o.kt)("a",{parentName:"p",href:"/concepts/glossary/C#consensus"},"consensus"),". A Casper network stores data in a structure known as ",(0,o.kt)("a",{parentName:"p",href:"/concepts/global-state"},"Global State"),". Users interact with global state through session code sent in a ",(0,o.kt)("a",{parentName:"p",href:"/concepts/glossary/D#deploy"},"Deploy"),". Deploys contain ",(0,o.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"Wasm")," to be executed by the network, thus allowing developers to use their preferred programming language rather than a proprietary language."),(0,o.kt)("p",null,"A deploy executes in the context of the user's ",(0,o.kt)("a",{parentName:"p",href:"#accounts-head"},"Account")," but can call stored Wasm that will execute in its own context. User-related information other than an account is stored in global state as an ",(0,o.kt)("a",{parentName:"p",href:"#uref-head"},"Unforgeable Reference")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"URef"),". After a node accepts a deploy as valid, it places the deploy in a proposed ",(0,o.kt)("a",{parentName:"p",href:"#block-structure-head"},"Block")," and gossips it among nodes until the network reaches consensus. At this point, the network executes the Wasm included within the deploy."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#execution-semantics-head"},"Execution Semantics"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#accounts-head"},"Accounts"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#uref-head"},"Unforgeable Reference (URef)"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#block-structure-head"},"Block Structure"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#tokens-head"},"Tokens")))),(0,o.kt)("h2",{id:"execution-semantics-head"},"Execution Semantics"),(0,o.kt)("p",null,"A Casper network is a decentralized computation platform. This section describes aspects of the Casper computational model."),(0,o.kt)("h3",{id:"execution-semantics-gas"},"Measuring Computational Work"),(0,o.kt)("p",null,"Computation is done in a ",(0,o.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly (Wasm)")," interpreter, allowing any programming language which compiles to Wasm to become a smart contract language for the Casper blockchain. Similar to Ethereum, Casper uses ",(0,o.kt)("a",{parentName:"p",href:"/concepts/economics/gas-concepts"},(0,o.kt)("inlineCode",{parentName:"a"},"Gas"))," to measure computational work in a way that is consistent from node to node in a Casper network. Each Wasm opcode is assigned a ",(0,o.kt)("inlineCode",{parentName:"p"},"Gas")," cost, and the amount of gas spent is tracked by the runtime with each opcode executed by the interpreter."),(0,o.kt)("p",null,"Costs for opcode instructions on the Casper Mainnet network can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/dev/resources/production/chainspec.toml#L115"},"here"),"."),(0,o.kt)("p",null,"All executions are finite because each has a finite ",(0,o.kt)("em",{parentName:"p"},"gas limit")," that specifies the maximum amount of gas available to spend before the runtime terminates the computation. The payment executable session determines how to pay for the deploy. The gas limit is set by executing the payment code specified within the deploy."),(0,o.kt)("p",null,"Although the network measures costs in ",(0,o.kt)("inlineCode",{parentName:"p"},"Gas"),", payment for computation occurs in ",(0,o.kt)("a",{parentName:"p",href:"#tokens-divisibility"},"motes"),". Therefore, there is a conversion rate between ",(0,o.kt)("inlineCode",{parentName:"p"},"Gas")," and motes."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Please note that Casper will not refund any amount of unused gas."),(0,o.kt)("p",{parentName:"admonition"},"This decision is taken to incentivize the ",(0,o.kt)("a",{parentName:"p",href:"/runtime#runtime-economics"},"Casper Runtime Economics")," by efficiently allocating the computational resources. The ",(0,o.kt)("a",{parentName:"p",href:"/runtime#consensus-before-execution-basics-of-payment"},"consensus-before-execution model")," implements the mechanism to encourage the optimized gas consumption from users and to prevent the overuse of block space by poorly handled deploys.")),(0,o.kt)("h3",{id:"execution-semantics-runtime"},"The Casper Network Runtime"),(0,o.kt)("p",null,"A Wasm module is not natively able to create any effects outside of reading or writing from its own linear memory. Wasm modules must import functions from the host environment they are running in to enable other desired effects, such as reading or writing to global state."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Casper Network Runtime",src:a(9872).Z,width:"1220",height:"604"})),(0,o.kt)("p",null,"All these features are accessible via functions in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/1.4.4/casper_contract/ext_ffi/index.html"},"Casper External FFI"),"."),(0,o.kt)("h4",{id:"execution-semantics-urefs"},"Generating ",(0,o.kt)("inlineCode",{parentName:"h4"},"URef"),"s"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"URef"),"s are generated using a ",(0,o.kt)("a",{parentName:"p",href:"https://rust-random.github.io/rand/rand_chacha/struct.ChaCha20Rng.html"},"cryptographically secure random number generator")," using the ",(0,o.kt)("a",{parentName:"p",href:"https://cr.yp.to/chacha.html"},"ChaCha algorithm"),". The random number generator is seeded by taking the ",(0,o.kt)("inlineCode",{parentName:"p"},"blake2b256")," hash of the deploy hash concatenated with an index representing the current phase of execution (to prevent collisions between ",(0,o.kt)("inlineCode",{parentName:"p"},"URef"),"s generated in different phases of the same deploy)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Generating URefs",src:a(6125).Z,width:"1121",height:"289"})),(0,o.kt)("h2",{id:"accounts-head"},"Accounts"),(0,o.kt)("p",null,"The Casper blockchain uses an on-chain account-based model, uniquely identified by an ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountHash")," derived from a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"PublicKey"),". The ",(0,o.kt)("a",{parentName:"p",href:"#global-state-trie"},"global state trie store")," requires all keys to be the same length, so the AccountHash is a 32-byte derivative used to abstract any of the supported public key variants."),(0,o.kt)("p",null,"The Casper platform supports two types of keys for creating accounts and signing transactions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/concepts/accounts-and-keys#eddsa-keys"},"ed25519")," keys, which use the Edwards-curve Digital Signature Algorithm (EdDSA) and are 66 bytes long"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/concepts/accounts-and-keys#ethereum-keys"},"secp256k1")," keys, commonly known as Ethereum keys, which are 68 bytes long")),(0,o.kt)("p",null,'By default, a transactional interaction with the blockchain takes the form of a Deploy cryptographically signed by the key-pair corresponding to the PublicKey used to create the account. All user activity on the Casper blockchain (i.e., "deploys") must originate from an account. Each account has its own context where it can locally store information (e.g., references to useful contracts, metrics, and aggregated data from other parts of the blockchain). Each account also has a "main purse" where it can hold Casper tokens (see ',(0,o.kt)("a",{parentName:"p",href:"#tokens-purses-and-accounts"},"Tokens")," for more information)."),(0,o.kt)("p",null,"This chapter describes the permission model for accounts and their local storage capabilities and briefly mentions some runtime functions for interacting with accounts."),(0,o.kt)("h3",{id:"accounts-creating"},"Creating an account"),(0,o.kt)("p",null,"Account creation automatically happens upon transferring tokens to a yet unused ",(0,o.kt)("inlineCode",{parentName:"p"},"PublicKey"),". On account creation, the balance of its main purse is equal to the number of tokens transferred during the creation process. Its action thresholds are equal to 1, and there is one associated key. The associated key is the ",(0,o.kt)("inlineCode",{parentName:"p"},"PublicKey")," used to create the account. In this way, an account is essentially a context object encapsulating the main purse, used to pay for transactions. However, an account may have an additional purse beyond the main purse."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/image/design/account-structure.png",alt:"Image showing the account data structure",width:"200"})),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"Account")," contains the following data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"URef"),' representing the account\'s "main purse"'),(0,o.kt)("li",{parentName:"ul"},"A collection of named keys (playing the same role as the named keys in a stored contract)"),(0,o.kt)("li",{parentName:"ul"},'A collection of "associated keys" (see ',(0,o.kt)("a",{parentName:"li",href:"#accounts-associated-keys-weights"},"below for more information"),")"),(0,o.kt)("li",{parentName:"ul"},'"Action thresholds" (see ',(0,o.kt)("a",{parentName:"li",href:"#accounts-actions-thresholds"},"below for more information"),")")),(0,o.kt)("h3",{id:"accounts-permissions"},"Permissions Model"),(0,o.kt)("h4",{id:"accounts-actions-thresholds"},"Actions and Thresholds"),(0,o.kt)("p",null,"An account can perform two types of actions: sending deploys and managing keys. A deploy is simply executing some code on the blockchain, while key management involves changing the associated keys (which will be described in more detail later). Key management cannot be performed independently, as all effects on the blockchain must come via a deploy; therefore, a key management action implies that a deploy action is also taking place."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionThresholds")," contained in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account")," data structure set a ",(0,o.kt)("inlineCode",{parentName:"p"},"Weight"),", which must be met to perform that action. The next section describes these weight thresholds. Since a key management action requires a deploy action, the key management threshold should always be greater than or equal to the deploy threshold."),(0,o.kt)("h4",{id:"accounts-associated-keys-weights"},"Associated Keys and Weights"),(0,o.kt)("p",null,"Accounts on a Casper network can associate other key pairs through a multiple signature scheme for sending transactions. An account's ",(0,o.kt)("em",{parentName:"p"},"associated keys"),' are the set of public keys allowed to provide signatures on deploys for that account. Each associated key has a weight; these weights combine to meet the action thresholds provided in the previous section. Each deploy must be signed by one or more keys associated with the account that deploy is for, and the sum of the weights of those keys must be greater than or equal to the deployment threshold weight for that account. We call the keys that have signed a deploy the "authorizing keys". Similarly, if a deploy contains key management actions (detailed below), the sum of the weights of the authorizing keys must be greater than or equal to the key management action threshold of the account.'),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},'Any key may help authorize any action; there are no "special keys". All keys contribute their weight in exactly the same way.')),(0,o.kt)("h4",{id:"accounts-key-management"},"Key Management Actions"),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"key management action")," is a change to the account permissions, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adding or removing an associated key"),(0,o.kt)("li",{parentName:"ul"},"Changing the weight of an associated key"),(0,o.kt)("li",{parentName:"ul"},"Changing the threshold of any action")),(0,o.kt)("p",null,"Key management actions have validity rules preventing users from locking themselves out of their accounts. For example, one can set a threshold, at most, the sum of the weights of all associated keys."),(0,o.kt)("h4",{id:"accounts-recovery"},"Account security and recovery using key management"),(0,o.kt)("p",null,"This permissions model's purpose is to keep accounts safe from lost or stolen keys while allowing the usage of modern mobile devices. For example, it may be convenient to sign deploys from a smartphone without worrying about the repercussions of losing the phone. The recommended setup is to have a low-weight key on the phone, enough for the deploy threshold but not enough for key management. If the phone is lost or stolen, a key management action using other associated keys from another device (e.g., a home computer) can be used to remove the lost associated key and add a key that resides on a replacement phone."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},'It is extremely important to ensure there will always be access to a sufficient number of keys to perform the key management action. Otherwise, future recovery will be impossible (Casper currently does not support "inactive recovery").')),(0,o.kt)("h3",{id:"accounts-context"},"The Account Context"),(0,o.kt)("p",null,"A deploy is a user request to perform some execution on the blockchain (see ",(0,o.kt)("a",{parentName:"p",href:"#execution-semantics-head"},"Execution Semantics"),' for more information). It contains "payment code" and "session code", which are references to stored on-chain contracts or Wasm to be executed. For executable Wasm, its execution and the logic therein occur within the context of the account signing the deploy. This means that the executing Wasm has access to the named keys and main purse of the account\'s context.'),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In the case where there is a reference to stored on-chain Wasm (smart contracts), the execution of the on-chain Wasm will occur in its own separate runtime context. As a result, the stored Wasm will not have access to the named keys or main purse of the calling account.")),(0,o.kt)("h2",{id:"uref-head"},"Unforgeable Reference (URef)"),(0,o.kt)("p",null,"This key type is used for storing any value except ",(0,o.kt)("inlineCode",{parentName:"p"},"Account"),". Additionally, ",(0,o.kt)("inlineCode",{parentName:"p"},"URef"),"s used in Wasm carry permission information to prevent unauthorized usage of the value stored under the key. The runtime tracks this permission information. This means that if malicious Wasm attempts to produce a ",(0,o.kt)("inlineCode",{parentName:"p"},"URef"),' with permissions that the Wasm does not have, the Wasm has attempted to "forge" the unforgeable reference, and the runtime will raise a forged ',(0,o.kt)("inlineCode",{parentName:"p"},"URef")," error. Permissions for a ",(0,o.kt)("inlineCode",{parentName:"p"},"URef")," can be given across contract calls, allowing data stored under a ",(0,o.kt)("inlineCode",{parentName:"p"},"URef")," to be shared in a controlled way. The 32-byte identifier representing the key is generated randomly by the runtime (see ",(0,o.kt)("a",{parentName:"p",href:"#execution-semantics-head"},"Execution Semantics")," for more information). The serialization for ",(0,o.kt)("inlineCode",{parentName:"p"},"Access Rights")," that define the permissions for ",(0,o.kt)("inlineCode",{parentName:"p"},"URefs")," is detailed in the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard"},"CLValues")," section."),(0,o.kt)("h3",{id:"uref-permissions"},"Permissions for ",(0,o.kt)("inlineCode",{parentName:"h3"},"URef"),"s"),(0,o.kt)("p",null,"In the runtime, a ",(0,o.kt)("inlineCode",{parentName:"p"},"URef")," carries its permissions called ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessRights"),". Additionally, the runtime tracks what ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessRights")," would be valid for each ",(0,o.kt)("inlineCode",{parentName:"p"},"URef")," in each context. The system assumes that a sent ",(0,o.kt)("inlineCode",{parentName:"p"},"URef")," is invalid, regardless of declared ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessRights"),", and will check it against the executing context to determine validity on each usage. Only the host logic can add a ",(0,o.kt)("inlineCode",{parentName:"p"},"URef"),", in the following ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'It can exist in a set of "known" ',(0,o.kt)("inlineCode",{parentName:"li"},"URef"),"s"),(0,o.kt)("li",{parentName:"ul"},"It can be freshly created by the runtime via the ",(0,o.kt)("inlineCode",{parentName:"li"},"new_uref")," function"),(0,o.kt)("li",{parentName:"ul"},"For called contracts, the caller can pass it in via the arguments to ",(0,o.kt)("inlineCode",{parentName:"li"},"call_contract")),(0,o.kt)("li",{parentName:"ul"},"It can be returned to the caller from ",(0,o.kt)("inlineCode",{parentName:"li"},"call_contract")," via the ",(0,o.kt)("inlineCode",{parentName:"li"},"ret")," function")),(0,o.kt)("p",null,"Note that only valid ",(0,o.kt)("inlineCode",{parentName:"p"},"URef"),"s may be added to the known ",(0,o.kt)("inlineCode",{parentName:"p"},"URef"),"s or cross-call boundaries; this means the system cannot be tricked into accepting a forged ",(0,o.kt)("inlineCode",{parentName:"p"},"URef")," by getting it through a contract or stashing it in the known ",(0,o.kt)("inlineCode",{parentName:"p"},"URef"),"s."),(0,o.kt)("p",null,"The ability to pass ",(0,o.kt)("inlineCode",{parentName:"p"},"URef"),"s between contexts via ",(0,o.kt)("inlineCode",{parentName:"p"},"call_contract")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"ret"),", allows them to share state among a fixed number of parties while keeping it private from all others."),(0,o.kt)("h3",{id:"urefs-and-purses"},(0,o.kt)("inlineCode",{parentName:"h3"},"URef"),"s and Purses"),(0,o.kt)("p",null,"Purses represent a unique type of ",(0,o.kt)("inlineCode",{parentName:"p"},"URef")," used for accounting measures within a Casper network. ",(0,o.kt)("inlineCode",{parentName:"p"},"URef"),"s exist as a top-level entity, meaning that individual accounts do not own \u2018URef\u2019s. As described above, accounts and contracts possess certain ",(0,o.kt)("inlineCode",{parentName:"p"},"Access Rights"),", allowing them to interact with the given ",(0,o.kt)("inlineCode",{parentName:"p"},"URef"),". While an account will possess an associated ",(0,o.kt)("inlineCode",{parentName:"p"},"URef")," representing their main purse, this ",(0,o.kt)("inlineCode",{parentName:"p"},"URef")," exists as a ",(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#clvalue-unit"},(0,o.kt)("inlineCode",{parentName:"a"},"Unit"))," and corresponds to a ",(0,o.kt)("em",{parentName:"p"},"balance")," key within the Casper ",(0,o.kt)("em",{parentName:"p"},"mint"),". The individual balance key within the Casper mint is the account's purse, with transfers authorized solely through the associated ",(0,o.kt)("inlineCode",{parentName:"p"},"URef")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Access Rights")," granted to it."),(0,o.kt)("p",null,"Through this logic, the Casper mint holds all motes on the network and transfers between balance keys at the behest of accounts and contracts as required."),(0,o.kt)("h2",{id:"block-structure-head"},"Block Structure"),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"block")," is the primary data structure by which network nodes communicate information about the state of a Casper network. We briefly describe here the format of this data structure."),(0,o.kt)("h3",{id:"block-structure-data"},"Data Fields"),(0,o.kt)("p",null,"A block consists of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"block_hash")),(0,o.kt)("li",{parentName:"ul"},"A header"),(0,o.kt)("li",{parentName:"ul"},"A body")),(0,o.kt)("p",null,"Each of these fields is detailed in the subsequent sections."),(0,o.kt)("h4",{id:"block_hash"},(0,o.kt)("inlineCode",{parentName:"h4"},"block_hash")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"block_hash")," is the ",(0,o.kt)("inlineCode",{parentName:"p"},"blake2b256")," hash of the block header."),(0,o.kt)("h4",{id:"header"},"Header"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#serialization-standard-block"},"block header")," contains the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"parent_hash")),(0,o.kt)("p",{parentName:"li"},"A list of ",(0,o.kt)("inlineCode",{parentName:"p"},"block_hash"),"es giving the parents of the block.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"state_root_hash")),(0,o.kt)("p",{parentName:"li"},"The global state root hash produced by executing this block's body.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"body_hash")),(0,o.kt)("p",{parentName:"li"},"The hash of the block body.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"random_bit")),(0,o.kt)("p",{parentName:"li"},"A boolean needed for initializing a future era.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"accumulated_seed")),(0,o.kt)("p",{parentName:"li"},"A seed needed for initializing a future era.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"era_end")),(0,o.kt)("p",{parentName:"li"},"Contains equivocation and reward information to be included in the terminal finalized block. It is an optional field.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"timestamp")),(0,o.kt)("p",{parentName:"li"},"The timestamp from when the block was proposed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"era_id")),(0,o.kt)("p",{parentName:"li"},"Era ID in which this block was created.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"height")),(0,o.kt)("p",{parentName:"li"},"The height of this block, i.e., the number of ancestors.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"protocol_version")),(0,o.kt)("p",{parentName:"li"},"The version of the Casper network when this block was proposed."))),(0,o.kt)("h4",{id:"body"},"Body"),(0,o.kt)("p",null,"The block body contains an ",(0,o.kt)("strong",{parentName:"p"},"ordered")," list of ",(0,o.kt)("inlineCode",{parentName:"p"},"DeployHashes")," which refer to deploys, and an ",(0,o.kt)("strong",{parentName:"p"},"ordered")," list of ",(0,o.kt)("inlineCode",{parentName:"p"},"DeployHashes")," for native transfers (which are specialized deploys that only transfer tokens between accounts). All deploys, including a specialization such as native transfer, can be broadly categorized as some unit of work that, when executed and committed, affect change to ",(0,o.kt)("a",{parentName:"p",href:"#global-state-intro"},"Global State"),". A valid block may contain no deploys and / or native transfers."),(0,o.kt)("p",null,"The block body also contains the public key of the validator that proposed the block."),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard"},"Serialization Standard")," for additional information on how blocks and deploy are serialized."),(0,o.kt)("h2",{id:"tokens-head"},"Tokens"),(0,o.kt)("p",null,"Casper is a decentralized Proof-of-Stake blockchain platform that uses a consensus algorithm called ",(0,o.kt)("a",{parentName:"p",href:"/concepts/design/highway"},"Highway"),". Having a unit of value is required to make this system work because users must pay for computation, and validators must have ",(0,o.kt)("a",{parentName:"p",href:"/staking"},"stake")," to bond. In the blockchain space, this unit of value is a ",(0,o.kt)("em",{parentName:"p"},"token"),"."),(0,o.kt)("p",null,"This chapter describes tokens and how one can use them on the Casper platform."),(0,o.kt)("h3",{id:"token-generation-and-distribution"},"Token Generation and Distribution"),(0,o.kt)("p",null,"A blockchain system generally needs a supply of tokens available to pay for computation and reward validators for processing transactions on the network. The initial supply at the launch of Mainnet was 10 billion CSPR. The current supply is available ",(0,o.kt)("a",{parentName:"p",href:"https://api.cspr.live/supply"},"here"),". In addition to the initial supply, the system will have a low rate of inflation, the results of which will be paid out to validators in the form of seigniorage."),(0,o.kt)("p",null,"The number of tokens used to calculate seigniorage is the initial supply of tokens at genesis."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/image/design/token-lifecycle.png",alt:"Image showing the token lifecycle",width:"700"})),(0,o.kt)("h3",{id:"tokens-divisibility"},"Divisibility of Tokens"),(0,o.kt)("p",null,"Typically, a ",(0,o.kt)("em",{parentName:"p"},"token")," is divisible into some number of parts. We call the indivisible units which make up the CSPR token ",(0,o.kt)("em",{parentName:"p"},"motes"),". Each CSPR is divisible into 10",(0,o.kt)("sup",null,"9")," motes. To avoid rounding errors, it is essential to always represent token balances in motes. In comparison, Ether is divisible into 10",(0,o.kt)("sup",null,"18")," parts called Wei."),(0,o.kt)("p",null,"The concept of ",(0,o.kt)("inlineCode",{parentName:"p"},"CSPR")," is human-readable convenience and does not exist within the actual infrastructure of a Casper network. Instead, all transactions deal solely with ",(0,o.kt)("em",{parentName:"p"},"motes"),"."),(0,o.kt)("h3",{id:"tokens-purses-and-accounts"},"Purses and Accounts"),(0,o.kt)("p",null,"All ",(0,o.kt)("a",{parentName:"p",href:"#accounts-head"},"accounts")," on the Casper system have a purse associated with the Casper system mint, called the ",(0,o.kt)("em",{parentName:"p"},"main purse"),". However, for security reasons, the ",(0,o.kt)("inlineCode",{parentName:"p"},"URef")," of the main purse is only available to code running in the context of that account (i.e. only in payment or session code). Therefore, the mint's ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," method that accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"URef"),"s is not the most convenient when transferring between account main purses. For this reason, Casper supplies a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/system/fn.transfer_to_account.html"},"transfer_to_account")," function, which takes the public key used to derive the identity key of the account. This function uses the mint transfer function with the current account's main purse as the ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," and the main purse of the account at the provided key as the ",(0,o.kt)("inlineCode",{parentName:"p"},"target"),"."),(0,o.kt)("h3",{id:"mint-contract"},"The Casper Mint Contract"),(0,o.kt)("p",null,"The Casper ",(0,o.kt)("em",{parentName:"p"},"mint")," is a system contract that manages the balance of ",(0,o.kt)("em",{parentName:"p"},"motes")," within a Casper network. These motes are used to pay for computation and bonding on the network. The mint system contract holds all motes on a Casper network but maintains an internal ledger of the balances for each Account's ",(0,o.kt)("em",{parentName:"p"},"main purse"),". Each balance is associated with a ",(0,o.kt)("inlineCode",{parentName:"p"},"URef"),", which is a key to instruct the mint to perform actions on that balance (e.g., transfer motes). Informally, these balances are referred to as ",(0,o.kt)("em",{parentName:"p"},"purses")," and conceptually represent a container for motes. The ",(0,o.kt)("inlineCode",{parentName:"p"},"URef")," is how a purse is referenced externally, outside the mint."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessRights")," of the URefs permissions model determines what actions can be performed when using a ",(0,o.kt)("inlineCode",{parentName:"p"},"URef")," associated with a purse."),(0,o.kt)("p",null,"As all URef",(0,o.kt)("inlineCode",{parentName:"p"},"s are unforgeable, the only way to interact with a purse is for a "),"URef",(0,o.kt)("inlineCode",{parentName:"p"},"with appropriate"),"AccessRights` to be validly given to the current context."),(0,o.kt)("p",null,"The basic global state options map onto more standard monetary operations according to the table below:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Global State"),(0,o.kt)("th",{parentName:"tr",align:null},"Action Monetary Action"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Add"),(0,o.kt)("td",{parentName:"tr",align:null},"Deposit (i.e. transfer to)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Write"),(0,o.kt)("td",{parentName:"tr",align:null},"Withdraw (i.e. transfer from) Read Balance check")))),(0,o.kt)("h2",{id:"tokens-mint-interface"},"The mint Contract Interface"),(0,o.kt)("p",null,"The mint system contract exposes the following methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transfer(source: URef, target: URef, amount: Motes) -> TransferResult"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"source")," must have at least ",(0,o.kt)("inlineCode",{parentName:"li"},"Write")," access rights, ",(0,o.kt)("inlineCode",{parentName:"li"},"target")," must have at least ",(0,o.kt)("inlineCode",{parentName:"li"},"Add")," access rights"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TransferResult")," may be a success acknowledgment or an error in the case of invalid ",(0,o.kt)("inlineCode",{parentName:"li"},"source")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"target")," or insufficient balance in the ",(0,o.kt)("inlineCode",{parentName:"li"},"source")," purse"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mint(amount: Motes) -> MintResult"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MintResult")," either gives the created ",(0,o.kt)("inlineCode",{parentName:"li"},"URef")," (with full access rights), which now has a balance equal to the given ",(0,o.kt)("inlineCode",{parentName:"li"},"amount"),"; or an error due to the minting of new motes not being allowed"),(0,o.kt)("li",{parentName:"ul"},"In the Casper mint, only the system account can call ",(0,o.kt)("inlineCode",{parentName:"li"},"mint"),", and it has no private key to produce valid cryptographic signatures, which means only the software itself can execute contracts in the context of the system account"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"create() -> URef"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"a convenience function for ",(0,o.kt)("inlineCode",{parentName:"li"},"mint(0)")," which cannot fail because it is always allowed to create an empty purse"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"balance(purse: URef) -> Option<Motes>"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"purse")," must have at least ",(0,o.kt)("inlineCode",{parentName:"li"},"Read")," access rights"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BalanceResult")," either returns the number of motes held by the ",(0,o.kt)("inlineCode",{parentName:"li"},"purse"),", or nothing if the ",(0,o.kt)("inlineCode",{parentName:"li"},"URef")," is not valid")))))}m.isMDXComponent=!0},9872:function(e,t,a){t.Z=a.p+"assets/images/casper-runtime-9bc2eb0948168ce8a2eef7f037af6ba4.png"},6125:function(e,t,a){t.Z=a.p+"assets/images/generating-urefs-af02bd8d865f5da9599a205bb682678e.png"}}]);