"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4140],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return b}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(a),d=l,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||r;return a?n.createElement(b,s(s({ref:t},c),{},{components:a})):n.createElement(b,s({ref:t},c))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[p]="string"==typeof e?e:l,s[1]=u;for(var i=2;i<r;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),l=a(4334),r={tabItem:"tabItem_Ymn6"};function s(e){var t=e.children,a=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,s),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return T}});var n=a(3117),l=a(7294),r=a(4334),s=a(2466),u=a(6550),o=a(1980),i=a(7392),c=a(12);function p(e){return function(e){return l.Children.map(e,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,a=e.children;return(0,l.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,r=(0,u.k6)(),s=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,o._X)(s),(0,l.useCallback)((function(e){if(s){var t=new URLSearchParams(r.location.search);t.set(s,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[s,r])]}function v(e){var t,a,n,r,s=e.defaultValue,u=e.queryString,o=void 0!==u&&u,i=e.groupId,p=m(e),v=(0,l.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var l=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:s,tabValues:p})})),k=v[0],h=v[1],f=b({queryString:o,groupId:i}),g=f[0],y=f[1],T=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:i}.groupId),a=(0,c.Nk)(t),n=a[0],r=a[1],[n,(0,l.useCallback)((function(e){t&&r.set(e)}),[t,r])]),x=T[0],N=T[1],I=function(){var e=null!=g?g:x;return d({value:e,tabValues:p})?e:null}();return(0,l.useLayoutEffect)((function(){I&&h(I)}),[I]),{selectedValue:k,selectValue:(0,l.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),y(e),N(e)}),[y,N,p]),tabValues:p}}var k=a(2389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){var t=e.className,a=e.block,u=e.selectedValue,o=e.selectValue,i=e.tabValues,c=[],p=(0,s.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,a=c.indexOf(t),n=i[a].value;n!==u&&(p(t),o(n))},d=function(e){var t,a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var n,l=c.indexOf(e.currentTarget)+1;a=null!=(n=c[l])?n:c[0];break;case"ArrowLeft":var r,s=c.indexOf(e.currentTarget)-1;a=null!=(r=c[s])?r:c[c.length-1]}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},i.map((function(e){var t=e.value,a=e.label,s=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:m},s,{className:(0,r.Z)("tabs__item",h.tabItem,null==s?void 0:s.className,{"tabs__item--active":u===t})}),null!=a?a:t)})))}function g(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var r=a.find((function(e){return e.props.value===n}));return r?(0,l.cloneElement)(r,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function y(e){var t=v(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},l.createElement(f,(0,n.Z)({},e,t)),l.createElement(g,(0,n.Z)({},e,t)))}function T(e){var t=(0,k.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}},4606:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=a(3117),l=a(102),r=(a(7294),a(3905)),s=a(4866),u=a(5162),o=["components"],i={title:"Casper Network development environment prerequisites"},c="Casper Network development environment prerequisites",p={unversionedId:"resources/build-on-casper/casper-env-prerequisites",id:"resources/build-on-casper/casper-env-prerequisites",title:"Casper Network development environment prerequisites",description:"To be able to develop comfortably on the Casper Network you should use either macOS or Linux Ubuntu 20.04. Developing on Windows is not advised.",source:"@site/source/docs/casper/resources/build-on-casper/casper-env-prerequisites.md",sourceDirName:"resources/build-on-casper",slug:"/resources/build-on-casper/casper-env-prerequisites",permalink:"/resources/build-on-casper/casper-env-prerequisites",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/resources/build-on-casper/casper-env-prerequisites.md",tags:[],version:"current",lastUpdatedAt:1679994717,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{title:"Casper Network development environment prerequisites"}},m={},d=[{value:"Install the environment on macOS / Linux",id:"install-the-environment-on-macos--linux",level:2},{value:"Step 1.",id:"step-1",level:2},{value:"Install xcode command line tools on macOS",id:"install-xcode",level:3},{value:"Get curl on Linux",id:"install-curl",level:3},{value:"Step 2.",id:"step-2",level:2},{value:"Install rust",id:"install-rust",level:3},{value:"Step 3.",id:"step-3",level:2},{value:"Install brew on macOS",id:"install-brew",level:3},{value:"Install additional packages to be able to install cargo-casper and casper-client",id:"install-adds",level:3},{value:"Install cargo on Linux",id:"install-linux-cargo",level:3},{value:"Step 4.",id:"step-4",level:2},{value:"Install the cargo-casper",id:"install-cargo-casper",level:3},{value:"Install the essentials package so the casper-client can be installed on Linux",id:"install-linux-essentials",level:3},{value:"Step 5.",id:"step-5",level:2},{value:"Install the casper client",id:"install-casper-client",level:3},{value:"Install cmake",id:"install-cmake",level:3},{value:"Install the IDE",id:"install-the-ide",level:2}],b={toc:d},v="wrapper";function k(e){var t=e.components,a=(0,l.Z)(e,o);return(0,r.kt)(v,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"casper-network-development-environment-prerequisites"},"Casper Network development environment prerequisites"),(0,r.kt)("p",null,"To be able to develop comfortably on the Casper Network you should use either ",(0,r.kt)("inlineCode",{parentName:"p"},"macOS")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Linux Ubuntu 20.04"),". Developing on Windows is not advised."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Casper Network does not officialy support ",(0,r.kt)("inlineCode",{parentName:"p"},"macOS"),". If you encounter any problems reach out to the community on Telegram or Discord.")),(0,r.kt)("p",null,"Follow the steps below to install necessary software for the development environment."),(0,r.kt)("h2",{id:"install-the-environment-on-macos--linux"},"Install the environment on macOS / Linux"),(0,r.kt)("h2",{id:"step-1"},"Step 1."),(0,r.kt)("h3",{id:"install-xcode"},"Install xcode command line tools on macOS"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xcode-select --install\n")))),(0,r.kt)("p",null,"Check the version"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xcode-select -p\n")))),(0,r.kt)("h3",{id:"install-curl"},"Get curl on Linux"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install curl\n")))),(0,r.kt)("h2",{id:"step-2"},"Step 2."),(0,r.kt)("h3",{id:"install-rust"},"Install rust"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"))),(0,r.kt)(u.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")))),(0,r.kt)("p",null,"Check the rustup version"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rustup --version\n"))),(0,r.kt)(u.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rustup --version\n")))),(0,r.kt)("h2",{id:"step-3"},"Step 3."),(0,r.kt)("h3",{id:"install-brew"},"Install brew on macOS"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')))),(0,r.kt)("h3",{id:"install-adds"},"Install additional packages to be able to install cargo-casper and casper-client"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install pkg-config\nbrew install openssl\n"))),(0,r.kt)(u.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install pkg-config\nsudo apt-get install openssl\nsudo apt-get install libssl-dev\n")))),(0,r.kt)("h3",{id:"install-linux-cargo"},"Install cargo on Linux"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install cargo\n")))),(0,r.kt)("h2",{id:"step-4"},"Step 4."),(0,r.kt)("h3",{id:"install-cargo-casper"},"Install the cargo-casper"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-casper\n"))),(0,r.kt)(u.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-casper\n")))),(0,r.kt)("p",null,"Check the version"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo-casper --version\n"))),(0,r.kt)(u.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo-casper --version\n")))),(0,r.kt)("h3",{id:"install-linux-essentials"},"Install the essentials package so the casper-client can be installed on Linux"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install build-essential\n")))),(0,r.kt)("h2",{id:"step-5"},"Step 5."),(0,r.kt)("h3",{id:"install-casper-client"},"Install the casper client"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install casper-client\n"))),(0,r.kt)(u.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install casper-client\n")))),(0,r.kt)("p",null,"Check the version"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client --version\n"))),(0,r.kt)(u.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client --version\n")))),(0,r.kt)("p",null,"For more information about supported commands, you can check it with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client --help\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"OPTIONAL: if you are going to run a Casper Network validator install cmake with the command below:")),(0,r.kt)("h3",{id:"install-cmake"},"Install cmake"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install cmake\n"))),(0,r.kt)(u.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get -y install cmake\n")))),(0,r.kt)("p",null,"Check the version of cmake"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cmake --version\n"))),(0,r.kt)(u.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cmake --version\n")))),(0,r.kt)("p",null,"With all the above steps you should be able to succesfully go through the examples and tutorials in the documentation."),(0,r.kt)("h2",{id:"install-the-ide"},"Install the IDE"),(0,r.kt)("p",null,"For the development we advise to use Visual Studio Code. Follow the instructions ",(0,r.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/getting-started#setting-ide"},"here")," to set up VSC and install plugins to help during development."))}k.isMDXComponent=!0}}]);