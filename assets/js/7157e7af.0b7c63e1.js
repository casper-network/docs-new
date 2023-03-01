"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9212],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,y=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(y,o(o({ref:t},l),{},{components:n})):a.createElement(y,o({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1056:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],s={},c="Reading and Writing to Dictionaries",d={unversionedId:"concepts/dictionaries",id:"concepts/dictionaries",title:"Reading and Writing to Dictionaries",description:"In a Casper network, you can now store sets of data under Keys. Previously, URefs were the exclusive means by which users could store data in global state. To maintain persistent access to these URefs, they would have to be stored within an Account or Contract context. In the case of Contracts, sustained and continuous use of URefs would result in the expansion of the associated NamedKeys structures.",source:"@site/source/docs/casper/concepts/dictionaries.md",sourceDirName:"concepts",slug:"/concepts/dictionaries",permalink:"/concepts/dictionaries",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/concepts/dictionaries.md",tags:[],version:"current",lastUpdatedAt:1677674474,formattedLastUpdatedAt:"3/1/2023",frontMatter:{},sidebar:"concepts",previous:{title:"Contracts and Session Code",permalink:"/concepts/session-code"},next:{title:"Introduction",permalink:"/design"}},l={},p=[{value:"Seed URefs",id:"seed-urefs",level:2},{value:"Understanding Dictionaries",id:"understanding-dictionaries",level:2},{value:"Practical Dictionary Examples",id:"practical-dictionary-examples",level:2},{value:"Creating Dictionaries in a Contract&#39;s Context",id:"creating-dictionaries-in-a-contracts-context",level:2},{value:"Writing Entries into a Dictionary",id:"writing-entries-into-a-dictionary",level:2},{value:"Reading Items from a Dictionary using the JSON-RPC",id:"reading-items-from-a-dictionary-using-the-json-rpc",level:2},{value:"<code>ContractNamedKey</code> lookup via a Contract&#39;s named keys.",id:"contractnamedkey-lookup-via-a-contracts-named-keys",level:3},{value:"<code>URef</code> lookup via the dictionary&#39;s seed URef.",id:"uref-lookup-via-the-dictionarys-seed-uref",level:3},{value:"<code>Dictionary</code> lookup via the unique dictionary item key.",id:"dictionary-lookup-via-the-unique-dictionary-item-key",level:3}],u={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reading-and-writing-to-dictionaries"},"Reading and Writing to Dictionaries"),(0,r.kt)("p",null,"In a Casper network, you can now store sets of data under ",(0,r.kt)("a",{parentName:"p",href:"/concepts/understanding-hash-types#hash-and-key-explanations"},(0,r.kt)("inlineCode",{parentName:"a"},"Keys")),". Previously, URefs were the exclusive means by which users could store data in global state. To maintain persistent access to these URefs, they would have to be stored within an ",(0,r.kt)("inlineCode",{parentName:"p"},"Account")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract")," context. In the case of Contracts, sustained and continuous use of URefs would result in the expansion of the associated ",(0,r.kt)("inlineCode",{parentName:"p"},"NamedKeys")," structures."),(0,r.kt)("p",null,"Individual value changes to data stored within the NamedKeys would require deserializing the entire NamedKeys data structure, increasing gas costs over time and thus having a negative impact. Additionally, users storing large subsets of mapped data structures would face the same deep copy problem where minor or single updates required the complete deserialization of the map structure, also leading to increased gas costs."),(0,r.kt)("p",null,"As a solution to this problem, the Casper platform provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dictionary")," feature, which allows users a more efficient and scalable means to aggregate data over time."),(0,r.kt)("p",null,"In almost all cases, dictionaries are the better form of data storage. They allow greater flexibility in altering stored data at a lower cost."),(0,r.kt)("h2",{id:"seed-urefs"},"Seed URefs"),(0,r.kt)("p",null,"Items within a dictionary exist as individual records stored underneath their unique ",(0,r.kt)("a",{parentName:"p",href:"/concepts/understanding-hash-types#hash-and-key-explanations"},"dictionary address")," in global state. In other words, items associated with a specific dictionary share the same seed ",(0,r.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#uref-head"},(0,r.kt)("inlineCode",{parentName:"a"},"URef"))," but are otherwise independent of each other. Dictionary items are not stored beneath this URef, it is only used to create the dictionary key."),(0,r.kt)("p",null,"As each dictionary item exists as a stand-alone entity in global state, regularly used dictionary keys may be used directly without referencing their seed URef."),(0,r.kt)("h2",{id:"understanding-dictionaries"},"Understanding Dictionaries"),(0,r.kt)("p",null,"Dictionaries are ideal for storing larger volumes of data for which ",(0,r.kt)("inlineCode",{parentName:"p"},"NamedKeys")," would be less suitable."),(0,r.kt)("p",null,"Creating a new dictionary is fairly simple and done within the context of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy")," sent to a Casper network. The associated code is included within the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/"},(0,r.kt)("inlineCode",{parentName:"a"},"casper_contract"))," crate. Creating a dictionary also stores the associated seed URef within the named keys of the current context."),(0,r.kt)("p",null,"Developers should always consider context when creating dictionaries. We recommend creating a dictionary within the context of a Contract."),(0,r.kt)("p",null,"While you can create a dictionary in the context of an Account and then pass associated access rights to a Contract, this approach can create potential security issues. If a third party uses the Contract, the initiating Account with access rights to the dictionary may be undesirable. To rectify this, you may send an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy")," removing those access rights, but it is better to create the dictionary within the context of the Contract."),(0,r.kt)("p",null,"Dictionaries allow a contract to store additional data without drastically expanding the size of the ",(0,r.kt)("inlineCode",{parentName:"p"},"NamedKeys")," within their context. If a contract's ",(0,r.kt)("inlineCode",{parentName:"p"},"NamedKeys")," expand too far, they may run into system limitations that would unintentionally disable the contract's functionality."),(0,r.kt)("p",null,"A dictionary item key can be no longer than 64 bytes in length."),(0,r.kt)("h2",{id:"practical-dictionary-examples"},"Practical Dictionary Examples"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft"},"Casper CEP-78 Enhanced NFT Standard")," includes several practical applications of dictionaries."),(0,r.kt)("p",null,"Simple examples for dictionary use within CEP-78 include the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/contract/src/main.rs#L772"},(0,r.kt)("inlineCode",{parentName:"a"},"approve"))," dictionary."),(0,r.kt)("p",null,"More advanced dictionary functionality can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft#the-cep-78-page-system"},"CEP-78 Page System"),", which uses a series of dictionaries to keep track of token ownership. These dictionaries form the basis of the reverse lookup mode, which allows users to easily view a list of owned tokens by account or contract."),(0,r.kt)("h2",{id:"creating-dictionaries-in-a-contracts-context"},"Creating Dictionaries in a Contract's Context"),(0,r.kt)("p",null,"The following code snippet shows the most basic example of creating a dictionary."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"\ncasper_contract::contract_api::storage::new_dictionary(dict_name)\n\n")),(0,r.kt)("p",null,"The following example includes the creation of a dictionary ",(0,r.kt)("inlineCode",{parentName:"p"},'"ledger"')," within a contract's context. In this instance, the dictionary will be used to track donations made to a fundraising purse also created by the ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," entry point. In any case where you want to use a dictionary within your contract, it should be set up within the initializing entry point."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'\n#[no_mangle]\npub extern "C" fn init() {\n    let fundraising_purse = system::create_purse();\n    runtime::put_key("fundraising_purse", fundraising_purse.into());\n    // Create a dictionary to track the mapping of account hashes to number of donations made.\n    storage::new_dictionary("ledger").unwrap_or_revert();\n}\n\n')),(0,r.kt)("h2",{id:"writing-entries-into-a-dictionary"},"Writing Entries into a Dictionary"),(0,r.kt)("p",null,"After the creation of a dictionary, you may then add entries through the use of the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"\nstorage::dictionary_put(dictionary_uref, &dictionary_item_key, value);\n\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dictionary_uref")," refers to the seed URef established during the dictionary creation process. The ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," is the unique identifier for this dictionary item, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," is the data to be stored within the dictionary."),(0,r.kt)("p",null,"As stated above, these dictionary items do not require the seed URef, and they exist as individual keys in global state. If you know an individual key's address, you do not need to go through the process of identifying the seed URef first."),(0,r.kt)("p",null,"The following function serves to add an entry to the dictionary. If the item already exists, the entry point will update the value stored and referenced by that key. In this case, the code is storing the number of donations made. Any Rust structure may be stored under a dictionary item, but when updating a value within a larger structure (i.e., a list), the entire structure will be overwritten as part of the update. Updating a larger structure will incur the full cost of writing the structure to a dictionary item."),(0,r.kt)("p",null,"The first section acquiring the ",(0,r.kt)("inlineCode",{parentName:"p"},"LEDGER")," seed URef to assign the new dictionary item to the proper dictionary."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'\nfn update_ledger_record(dictionary_item_key: String) {\n    // Acquiring the LEDGER seed URef to properly assign the dictionary item.\n    let ledger_seed_uref = *runtime::get_key("ledger")\n        .unwrap_or_revert_with(FundRaisingError::MissingLedgerSeedURef)\n        .as_uref()\n        .unwrap_or_revert();\n\n')),(0,r.kt)("p",null,"The second section uses ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/1.4.4/casper_contract/contract_api/storage/fn.dictionary_get.html"},(0,r.kt)("inlineCode",{parentName:"a"},"dictionary_get"))," to read an entry within the ",(0,r.kt)("inlineCode",{parentName:"p"},"LEDGER")," dictionary. If the entry does not exist on global state, it will create the entry. If it already exists, the entry is updated with the current value using a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/1.4.4/casper_contract/contract_api/storage/fn.dictionary_put.html"},(0,r.kt)("inlineCode",{parentName:"a"},"dictionary_put"))," operation. As stated above, regardless of the size of the change within the entry, the entire dictionary entry will need to be overwritten and will incur the associated cost."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"\n    // This identifies an item within the dictionary and either creates or updates the associated value.\n    match storage::dictionary_get::<u64>(ledger_seed_uref, &dictionary_item_key).unwrap_or_revert()\n    {\n        None => storage::dictionary_put(ledger_seed_uref, &dictionary_item_key, 1u64),\n        Some(current_number_of_donations) => storage::dictionary_put(\n            ledger_seed_uref,\n            &dictionary_item_key,\n            current_number_of_donations + 1u64,\n        ),\n    }\n}\n\n")),(0,r.kt)("h2",{id:"reading-items-from-a-dictionary-using-the-json-rpc"},"Reading Items from a Dictionary using the JSON-RPC"),(0,r.kt)("p",null,"The Casper platform provides several means of looking up a dictionary item. These means are explained within the ",(0,r.kt)("a",{parentName:"p",href:"/developers/json-rpc/types_chain#dictionaryidentifier"},(0,r.kt)("inlineCode",{parentName:"a"},"DictionaryIdentifier"))," JSON-RPC type. The following explains how to query the dictionary items using the ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/casper-client"},"Casper client"),"."),(0,r.kt)("h3",{id:"contractnamedkey-lookup-via-a-contracts-named-keys"},(0,r.kt)("inlineCode",{parentName:"h3"},"ContractNamedKey")," lookup via a Contract's named keys."),(0,r.kt)("p",null,"Reading a dictionary item using the Contract's ",(0,r.kt)("inlineCode",{parentName:"p"},"NamedKeys")," requires the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Node Address")," - The IP and port of a node on a Casper network. In the example below, the node address is pointing to a local NCTL network.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"State Root Hash")," - The current state root hash of a Casper network hosting the dictionary item you are attempting to read.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Contract Hash")," - The hash of the contract that references the dictionary in its ",(0,r.kt)("inlineCode",{parentName:"p"},"NamedKeys"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Dictionary Name")," - The name of the dictionary as a ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," stored in the Contract's ",(0,r.kt)("inlineCode",{parentName:"p"},"NamedKeys"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Dictionary Item Key")," - The specific dictionary item key to be read, as a ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\ncasper-client get-dictionary-item \\\n    --node-address http://localhost:11101 \\\n    --state-root-hash 50c34ccbe1315d58ce22bf7518071164d16acd20a1becb0b423293418297416d \\\n    --contract-hash hash-09c8fa7c1441ae7c1cbe27ae3a722fd4ffc5290315f8546454454c1b9f85c842 \\\n    --dictionary-name <String> \\\n    --dictionary-item-key <String>\n\n")),(0,r.kt)("h3",{id:"uref-lookup-via-the-dictionarys-seed-uref"},(0,r.kt)("inlineCode",{parentName:"h3"},"URef")," lookup via the dictionary's seed URef."),(0,r.kt)("p",null,"Reading a dictionary item using the dictionary's seed URef requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node Address"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"State Root Hash")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Dictionary Item Key")," as above. However, it does not require the ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract Hash")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Dictionary Name"),". Instead, it requires:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Seed URef")," - The ",(0,r.kt)("a",{parentName:"li",href:"#seed-urefs"},"Seed URef")," of the dictionary to reference.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\ncasper-client get-dictionary-item \\\n    --node-address http://localhost:11101 \\\n    --state-root-hash 50c34ccbe1315d58ce22bf7518071164d16acd20a1becb0b423293418297416d \\\n    --dictionary-item-key <String> \\\n    --seed-uref uref-90b4a8d936b881d3b45b73a102adb2b652181d75c76b7547ae9d1bb213f8db6b-007\n\n")),(0,r.kt)("h3",{id:"dictionary-lookup-via-the-unique-dictionary-item-key"},(0,r.kt)("inlineCode",{parentName:"h3"},"Dictionary")," lookup via the unique dictionary item key."),(0,r.kt)("p",null,"In the event that you know the ",(0,r.kt)("inlineCode",{parentName:"p"},"dictionary address")," of the dictionary item key you need to read, you can read it directly using the following Casper client command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\ncasper-client get-dictionary-item \\\n    --node-address http://localhost:11101 \\\n    --state-root-hash 50c34ccbe1315d58ce22bf7518071164d16acd20a1becb0b423293418297416d \\\n    --dictionary-address dictionary-<string>\n\n")))}h.isMDXComponent=!0}}]);