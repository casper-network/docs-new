"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5390],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(4334),l={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(3117),r=n(7294),l=n(4334),o=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function f(e){var t,n,a,l,o=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,p=d(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),g=f[0],k=f[1],v=m({queryString:s,groupId:u}),b=v[0],y=v[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),w=N[0],C=N[1],T=function(){var e=null!=b?b:w;return h({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){T&&k(T)}),[T]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),C(e)}),[y,C,p]),tabValues:p}}var g=n(2389),k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){var t=e.className,n=e.block,i=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(p(t),s(a))},h=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var l,o=c.indexOf(e.currentTarget)-1;n=null!=(l=c[o])?l:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},o,{className:(0,l.Z)("tabs__item",k.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=l.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function N(e){var t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},3235:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return h}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),o=(n(4996),n(4866)),i=n(5162),s=["components"],u={},c="Development Prerequisites",p={unversionedId:"developers/prerequisites",id:"developers/prerequisites",title:"Development Prerequisites",description:"This section explains how to fulfill the prerequisites to interact with a Casper network.",source:"@site/source/docs/casper/developers/prerequisites.md",sourceDirName:"developers",slug:"/developers/prerequisites",permalink:"/developers/prerequisites",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/prerequisites.md",tags:[],version:"current",lastUpdatedAt:1688572581,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Table of Contents",permalink:"/developers/table-of-contents"},next:{title:"Introduction",permalink:"/writing-contracts"}},d={},h=[{value:"Preparing your Development Environment",id:"preparing-your-development-environment",level:2},{value:"Installing <code>curl</code>",id:"install-curl",level:3},{value:"Installing essential Linux packages",id:"install-essential",level:3},{value:"Installing packages required for Casper tools",id:"install-adds",level:3},{value:"Installing <code>cargo</code> on Linux",id:"install-linux-cargo",level:3},{value:"Installing Xcode developer tools for macOS",id:"install-xcode",level:3},{value:"Installing <code>brew</code>",id:"install-brew",level:3},{value:"Installing packages required for Casper tools",id:"install-adds-macos",level:3},{value:"Installing Rust",id:"install-rust",level:2},{value:"Installing <code>cargo-casper</code>",id:"install-cargo-casper",level:2},{value:"Installing the Casper client",id:"install-casper-client",level:2},{value:"Accessing the Casper client source code",id:"building-client-from-source",level:3},{value:"Installing <code>cmake</code>",id:"install-cmake",level:2},{value:"Installing an IDE",id:"installing-an-ide",level:2},{value:"Setting up a Casper Account",id:"setting-up-an-account",level:2},{value:"Creating an account",id:"creating-an-account",level:3},{value:"Generating the account hash",id:"generating-the-account-hash",level:3},{value:"Funding an Account",id:"fund-your-account",level:2},{value:"Acquiring a Node Address from the Network",id:"acquire-node-address-from-network-peers",level:2}],m={toc:h},f="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"development-prerequisites"},"Development Prerequisites"),(0,l.kt)("p",null,"This section explains how to fulfill the prerequisites to interact with a Casper network."),(0,l.kt)("p",null,"This section covers the following:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Setting up a ",(0,l.kt)("a",{parentName:"li",href:"#install-rust"},"Rust")," development environment"),(0,l.kt)("li",{parentName:"ol"},"Installing the official Casper ",(0,l.kt)("a",{parentName:"li",href:"#install-casper-client"},"command-line client")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#setting-up-an-account"},"Setting up an Account")," on a Casper network"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#acquire-node-address-from-network-peers"},"Acquiring the IP")," address of a peer on the official Testnet or Mainnet")),(0,l.kt)("p",null,"To develop comfortably for the Casper network, you should use ",(0,l.kt)("inlineCode",{parentName:"p"},"Linux Ubuntu 20.04")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"macOS"),". Developing on Windows is not advised."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Casper does not officially support ",(0,l.kt)("inlineCode",{parentName:"p"},"macOS"),". If you encounter any problems, reach out to the community on ",(0,l.kt)("a",{parentName:"p",href:"https://t.me/casperblockchain"},"Telegram")," or ",(0,l.kt)("a",{parentName:"p",href:"https://discord.com/invite/Q38s3Vh"},"Discord"),".")),(0,l.kt)("p",null,"Follow the steps below to install the necessary software for your development environment."),(0,l.kt)("h2",{id:"preparing-your-development-environment"},"Preparing your Development Environment"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,l.kt)("h3",{id:"install-curl"},"Installing ",(0,l.kt)("inlineCode",{parentName:"h3"},"curl")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install curl\n")),(0,l.kt)("h3",{id:"install-essential"},"Installing essential Linux packages"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install build-essential\n")),(0,l.kt)("h3",{id:"install-adds"},"Installing packages required for Casper tools"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install pkg-config\nsudo apt-get install openssl\nsudo apt-get install libssl-dev\n")),(0,l.kt)("h3",{id:"install-linux-cargo"},"Installing ",(0,l.kt)("inlineCode",{parentName:"h3"},"cargo")," on Linux"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install cargo\n"))),(0,l.kt)(i.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,l.kt)("h3",{id:"install-xcode"},"Installing Xcode developer tools for macOS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"xcode-select --install\n")),(0,l.kt)("p",null,"Verify the installation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"xcode-select -p\n")),(0,l.kt)("h3",{id:"install-brew"},"Installing ",(0,l.kt)("inlineCode",{parentName:"h3"},"brew")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,l.kt)("h3",{id:"install-adds-macos"},"Installing packages required for Casper tools"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install pkg-config\nbrew install openssl\n")))),(0,l.kt)("h2",{id:"install-rust"},"Installing Rust"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,l.kt)("p",null,"After your next login, the installation script automatically adds Rust to your system PATH. To start using Rust immediately, run the following command in your shell instead of restarting your terminal. The command will add Rust to your system PATH."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"source $HOME/.cargo/env\n")),(0,l.kt)("p",null,"Verify the installation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rustup --version\n")),(0,l.kt)("h2",{id:"install-cargo-casper"},"Installing ",(0,l.kt)("inlineCode",{parentName:"h2"},"cargo-casper")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-casper\n")),(0,l.kt)("p",null,"Verify the installation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo-casper --version\n")),(0,l.kt)("h2",{id:"install-casper-client"},"Installing the Casper client"),(0,l.kt)("p",null,"The default Casper client is on ",(0,l.kt)("a",{parentName:"p",href:"https://crates.io/crates/casper-client"},"crates.io"),". This client can transmit your deploys to a Casper network."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install casper-client\n")),(0,l.kt)("p",null,"Verify the installation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client --version\n")),(0,l.kt)("p",null,"The Casper client can print out help information, which provides an up-to-date list of supported commands. To do so, use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client --help\n")),(0,l.kt)("p",null,"You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"help")," for each command to get the most up-to-date arguments and descriptions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rustup toolchain install nightly\n")),(0,l.kt)("h3",{id:"building-client-from-source"},"Accessing the Casper client source code"),(0,l.kt)("p",null,"You can access the Casper client source code ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/casper-client-rs"},"here"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"lib")," directory contains the source for the client library, which may be called directly rather than through the CLI binary. The CLI app ",(0,l.kt)("inlineCode",{parentName:"p"},"casper-client")," uses this library to implement its functionality."),(0,l.kt)("p",null,"If you wish to compile it, you will need to first install the nightly Rust compiler with this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rustup toolchain install nightly\n")),(0,l.kt)("p",null,"Then, compile the source code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release\n")),(0,l.kt)("p",null,"You will find the ",(0,l.kt)("inlineCode",{parentName:"p"},"casper-client")," executable in the ",(0,l.kt)("inlineCode",{parentName:"p"},"target/release")," directory."),(0,l.kt)("h2",{id:"install-cmake"},"Installing ",(0,l.kt)("inlineCode",{parentName:"h2"},"cmake")),(0,l.kt)("p",null,"If you plan to compile contracts from the source code, including those provided in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node"},"casper-node")," repository, install ",(0,l.kt)("inlineCode",{parentName:"p"},"cmake")," with the commands below."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get -y install cmake\n"))),(0,l.kt)(i.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install cmake\n")))),(0,l.kt)("p",null,"Verify the installation with"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cmake --version\n")),(0,l.kt)("h2",{id:"installing-an-ide"},"Installing an IDE"),(0,l.kt)("p",null,"We advise using an integrated development environment such as Visual Studio Code (VSC) for development. Follow these ",(0,l.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/getting-started#setting-ide"},"instructions")," to set up VSC and install plugins that would be helpful during development."),(0,l.kt)("h2",{id:"setting-up-an-account"},"Setting up a Casper Account"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#accounts-head"},"Account")," creation process consists of two steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Creating an Account"),(0,l.kt)("li",{parentName:"ol"},"Funding the Account")),(0,l.kt)("p",null,"The following video complements the instructions below, showing you the expected output."),(0,l.kt)("p",{align:"center"},(0,l.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sA1HTPjV_bc&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=3",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,l.kt)("h3",{id:"creating-an-account"},"Creating an account"),(0,l.kt)("p",null,"The Casper blockchain uses an on-chain account-based model, uniquely identified by an ",(0,l.kt)("inlineCode",{parentName:"p"},"AccountHash")," derived from a specific ",(0,l.kt)("inlineCode",{parentName:"p"},"PublicKey"),"."),(0,l.kt)("p",null,"By default, a transactional interaction with the blockchain takes the form of a ",(0,l.kt)("inlineCode",{parentName:"p"},"Deploy")," cryptographically signed by the key-pair corresponding to the ",(0,l.kt)("inlineCode",{parentName:"p"},"PublicKey")," used to create the account."),(0,l.kt)("p",null,"Users can create accounts using the ",(0,l.kt)("a",{parentName:"p",href:"/concepts/accounts-and-keys#option-1-generating-keys-using-the-casper-client-option-1-key-generation-using-the-casper-client"},"Casper command-line client"),"."),(0,l.kt)("p",null,"Alternatively, some Casper networks, such as the official Testnet and Mainnet, provide a browser-based block explorer that allows account creation as outlined ",(0,l.kt)("a",{parentName:"p",href:"/concepts/accounts-and-keys#option-2-generating-keys-using-a-block-explorer-option-2-key-generation-using-a-block-explorer"},"here"),"."),(0,l.kt)("p",null,"Use either method to generate an account and its corresponding cryptographic key-pair."),(0,l.kt)("h3",{id:"generating-the-account-hash"},"Generating the account hash"),(0,l.kt)("p",null,"As a developer, you will often use an account hash, which is a 32-byte hash of the public key. This is because responses from the node contain ",(0,l.kt)("inlineCode",{parentName:"p"},"AccountHashes")," instead of the direct hexadecimal-encoded public key. To view the account hash for a public key, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"account-address")," option of the Casper CLI client:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client account-address --public-key <path-to-public_key.pem/public-key-hex>\n")),(0,l.kt)("h2",{id:"fund-your-account"},"Funding an Account"),(0,l.kt)("p",null,"After generating the cryptographic key-pair for an Account, you must fund the account's main purse to create it on-chain."),(0,l.kt)("p",null,"On Testnet, you can fund an account by requesting test tokens according to ",(0,l.kt)("a",{parentName:"p",href:"/users/testnet-faucet"},"this guide"),". You can request test tokens ",(0,l.kt)("strong",{parentName:"p"},"only once")," for each account."),(0,l.kt)("p",null,"On Mainnet, a pre-existing account must transfer CSPR tokens to the newly created account's main purse to finalize the setup. The source account needs to transfer CSPR tokens to the hexadecimal-encoded public key of the target account. This transfer will automatically create the target account if it does not exist. Currently, this is the only way to create an account on Mainnet."),(0,l.kt)("h2",{id:"acquire-node-address-from-network-peers"},"Acquiring a Node Address from the Network"),(0,l.kt)("p",null,"Clients can interact with a node on the blockchain via requests sent to that node's JSON-RPC endpoint, ",(0,l.kt)("inlineCode",{parentName:"p"},"http://<node-ip-address>:7777")," by default."),(0,l.kt)("p",null,"The node address is the IP of a peer node."),(0,l.kt)("p",null,"Both the official Testnet and Mainnet provide block explorers that list the IP addresses of nodes on their respective networks."),(0,l.kt)("p",null,"You can get the ",(0,l.kt)("inlineCode",{parentName:"p"},"node-ip-address")," of a node on the network by visiting the following block explorers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://testnet.cspr.live/tools/peers"},"Peers")," on Testnet"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cspr.live/tools/peers"},"Peers")," on Mainnet")),(0,l.kt)("p",null,"You will see a list of peers, and you can select the IP of any peer on the list."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": If the selected peer is unresponsive, pick a different peer and try again."))}g.isMDXComponent=!0}}]);