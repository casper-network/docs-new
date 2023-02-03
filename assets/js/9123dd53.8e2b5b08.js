"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9960],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=d(n),h=r,y=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(y,o(o({ref:t},l),{},{components:n})):a.createElement(y,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2196:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],p={},s="Signing Deploys",d={unversionedId:"dapp-dev-guide/building-dapps/signing-a-deploy",id:"dapp-dev-guide/building-dapps/signing-a-deploy",title:"Signing Deploys",description:"When creating a Deploy to be executed on a Casper network, the account owner, or more accurately, enough authorized signers must sign the deploy using their account's cryptographic key-pair. This key-pair is a combination of the account's secret and public keys. The signatures attached to the Deploy allow the network to verify that it should be executed.",source:"@site/source/docs/casper/dapp-dev-guide/building-dapps/signing-a-deploy.md",sourceDirName:"dapp-dev-guide/building-dapps",slug:"/dapp-dev-guide/building-dapps/signing-a-deploy",permalink:"/dapp-dev-guide/building-dapps/signing-a-deploy",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/building-dapps/signing-a-deploy.md",tags:[],version:"current",lastUpdatedAt:1675422820,formattedLastUpdatedAt:"2/3/2023",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Development Prerequisites",permalink:"/dapp-dev-guide/setup"},next:{title:"Sending Deploys to the Network",permalink:"/dapp-dev-guide/building-dapps/sending-deploys"}},l={},u=[{value:"Public Key Cryptography",id:"public-key-cryptography",level:2}],c={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"signing-deploys"},"Signing Deploys"),(0,i.kt)("p",null,"When creating a ",(0,i.kt)("a",{parentName:"p",href:"/design/serialization-standard/#serialization-standard-deploy"},(0,i.kt)("inlineCode",{parentName:"a"},"Deploy"))," to be executed on a Casper network, the account owner, or more accurately, enough authorized signers must sign the deploy using their account's cryptographic key-pair. This key-pair is a combination of the account's secret and public keys. The signatures attached to the Deploy allow the network to verify that it should be executed."),(0,i.kt)("p",null,"When a signature is attached to a deploy, it is paired with the public key of the signer, and referred to as an ",(0,i.kt)("a",{parentName:"p",href:"/design/serialization-standard/#approval"},(0,i.kt)("inlineCode",{parentName:"a"},"Approval")),". Every valid deploy has at least one approval."),(0,i.kt)("p",null,"The signature creation process begins with the hashing of the payment and session of the deploy to create the ",(0,i.kt)("inlineCode",{parentName:"p"},"BodyHash"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"BodyHash")," becomes a component of the ",(0,i.kt)("a",{parentName:"p",href:"/design/serialization-standard/#deploy-header"},(0,i.kt)("inlineCode",{parentName:"a"},"DeployHeader"))," as outlined in the serialization standard. From there, the ",(0,i.kt)("inlineCode",{parentName:"p"},"DeployHeader")," can be hashed to create the ",(0,i.kt)("a",{parentName:"p",href:"/design/serialization-standard/#deploy-hash"},(0,i.kt)("inlineCode",{parentName:"a"},"DeployHash")),". As outlined above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"DeployHash")," is then combined with the account's key-pair to create the deploy's signature."),(0,i.kt)("p",null,"As the ",(0,i.kt)("inlineCode",{parentName:"p"},"DeployHash")," contains a hash of the deploy's body within, any variation to any aspect of the deploy or sending account's keys would render the ",(0,i.kt)("inlineCode",{parentName:"p"},"DeployHash")," invalid."),(0,i.kt)("h2",{id:"public-key-cryptography"},"Public Key Cryptography"),(0,i.kt)("p",null,"Casper networks are compatible with both ",(0,i.kt)("inlineCode",{parentName:"p"},"Ed25519")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"secp256k1")," public key cryptography. When ",(0,i.kt)("a",{parentName:"p",href:"/design/serialization-standard/"},"serialized"),", public keys and signatures are prefixed with a single byte, used as a tag to denote the applicable algorithm. Ed25519 public keys and signatures are prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", whereas secp256k1 are prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,i.kt)("p",null,"Casper uses ",(0,i.kt)("inlineCode",{parentName:"p"},"blake2b")," hashing within our ",(0,i.kt)("a",{parentName:"p",href:"/design/serialization-standard/"},"serialization"),". However, these hashed values will be hashed once again when they are signed over. The type of hashing depends on the associated keypair algorithm as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ed25519 signs over a SHA-512 digest.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"secp256k1 signs over a SHA-256 digest."))))}h.isMDXComponent=!0}}]);