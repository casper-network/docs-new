"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[984],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||a;return n?o.createElement(m,s(s({ref:t},l),{},{components:n})):o.createElement(m,s({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var d=2;d<a;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},910:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return p}});var o=n(3117),i=n(102),a=(n(7294),n(3905)),s=["components"],r={},c="Network Communication",d={unversionedId:"concepts/design/p2p",id:"concepts/design/p2p",title:"Network Communication",description:"communications-head}",source:"@site/source/docs/casper/concepts/design/p2p.md",sourceDirName:"concepts/design",slug:"/concepts/design/p2p",permalink:"/concepts/design/p2p",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/concepts/design/p2p.md",tags:[],version:"current",lastUpdatedAt:1677502053,formattedLastUpdatedAt:"2/27/2023",frontMatter:{},sidebar:"concepts",previous:{title:"Introduction",permalink:"/design"},next:{title:"The Highway Consensus Protocol",permalink:"/concepts/design/highway"}},l={},p=[{value:"Identity",id:"identity",level:2},{value:"Inter-node connections",id:"inter-node-connections",level:2},{value:"Network",id:"network",level:2},{value:"Gossiping",id:"communications-gossiping",level:2},{value:"Requesting missing data",id:"requesting-missing-data",level:2},{value:"Validation",id:"validation",level:3},{value:"Node Discovery",id:"node-discovery",level:2}],u={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"communications-head"},"Network Communication"),(0,a.kt)("h2",{id:"identity"},"Identity"),(0,a.kt)("p",null,"Each node has an identity on the network (which is not the same as its identity in the consensus process). The network identity (ID) is based on the fingerprint of the public key of a TLS certificate. A node generates a new private key each time it starts, ensuring a unique ID."),(0,a.kt)("p",null,"Each identity is linked with an address, which is an IP and port pair where the node is reachable. This address is also called an endpoint."),(0,a.kt)("h2",{id:"inter-node-connections"},"Inter-node connections"),(0,a.kt)("p",null,"Should a node want to connect to another node with a known endpoint, it opens a TLS connection to the endpoint's address. In the context of common TLS terminology, this makes the connecting node the ",(0,a.kt)("em",{parentName:"p"},"client")," and the remote node the ",(0,a.kt)("em",{parentName:"p"},"server")," for this connection."),(0,a.kt)("p",null,"During connection setup, the client checks the server's certificate, matching the endpoint's expected public identity to ensure we have connected to the right node. Additionally, the TLS parameters of the connection and certificate are required to contain the same ciphers, digests, etc., to protect against downgrade attacks."),(0,a.kt)("p",null,"Simultaneously, the connecting node sends its certificate as the client certificate, allowing the server to perform the same check-in reverse and establish the client's ID. At the end of the process, both nodes can be sure to which peer they are connected."),(0,a.kt)("p",null,"Once a connection is established, the server will immediately seek to connect back to the client based on its endpoint (see ",(0,a.kt)("a",{parentName:"p",href:"#node-discovery"},"Node Discovery")," on how the server finds endpoints)."),(0,a.kt)("p",null,"Connections are used for sending messages one-way only; only the node initiating a connection will send messages on it."),(0,a.kt)("h2",{id:"network"},"Network"),(0,a.kt)("p",null,"As soon as a node has connected to one node in the network, it partakes in ",(0,a.kt)("a",{parentName:"p",href:"#node-discovery"},"Node Discovery"),". In general, any node will attempt to connect to any other node on the network it finds as described above, leading to a fully connected network."),(0,a.kt)("p",null,"Two classes of data transfers happen in the network; broadcasts and gossiping. A broadcast message is sent once, without guarantees, to all the nodes connected to it. The process of gossiping is described further below."),(0,a.kt)("p",null,"In general, only consensus messages, which are only sent by active validators, are broadcast. Everything else is gossipped."),(0,a.kt)("h2",{id:"communications-gossiping"},"Gossiping"),(0,a.kt)("p",null,"Multiple types of objects are gossipped, the most prominent ones being blocks, deploys, and endpoints (see ",(0,a.kt)("a",{parentName:"p",href:"#identity"},"Identity"),"). Each of these objects is immutable and can be identified by a unique hash."),(0,a.kt)("p",null,"Gossiping is a process of distributing a value across the entire network without directly sending it to each node. This process allows only a subset of nodes to be connected to the original sender and spreading the bandwidth and processing requirements across the network at the cost of latency and overall bandwidth consumed."),(0,a.kt)("p",null,"The process can be summarized as follows:"),(0,a.kt)("p",null,"Given a message ",(0,a.kt)("em",{parentName:"p"},"M")," to gossip, the desired saturation ",(0,a.kt)("em",{parentName:"p"},"S"),", and an infection limit ",(0,a.kt)("em",{parentName:"p"},"L"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Pick a subset ",(0,a.kt)("em",{parentName:"li"},"T")," of ",(0,a.kt)("em",{parentName:"li"},"K")," nodes from all currently connected nodes."),(0,a.kt)("li",{parentName:"ol"},"Send ",(0,a.kt)("em",{parentName:"li"},"M")," to each node in ",(0,a.kt)("em",{parentName:"li"},"T"),", noting which nodes were already infected (a node is considered infected if it already had received or known ",(0,a.kt)("em",{parentName:"li"},"M"),")."),(0,a.kt)("li",{parentName:"ol"},"For every node shown as already infected, add another random node outside to ",(0,a.kt)("em",{parentName:"li"},"T")," and send it ",(0,a.kt)("em",{parentName:"li"},"M"),", again noting the response."),(0,a.kt)("li",{parentName:"ol"},"End when we confirm infection of ",(0,a.kt)("em",{parentName:"li"},"L")," new nodes or encountered ",(0,a.kt)("em",{parentName:"li"},"S")," already infected nodes.")),(0,a.kt)("p",null,"Through this process, a message will spread to almost all nodes over time."),(0,a.kt)("h2",{id:"requesting-missing-data"},"Requesting missing data"),(0,a.kt)("p",null,"While gossiping and broadcasting are sufficient to distribute data across the network in most cases, nodes can also request missing data from peers should they require it. A common example is a missing deploy from a block."),(0,a.kt)("h3",{id:"validation"},"Validation"),(0,a.kt)("p",null,"Objects have a concept of dependencies. For example, a block depends on all the deploys whose hashes are listed inside it. A node considers any object valid if all of its dependencies are available on the local node."),(0,a.kt)("p",null,"Should a node receive an object from a peer that is not valid yet, it will attempt to complete its validation before processing it further. In the case of gossiping, this means pausing the gossiping of the object until all its dependencies can be retrieved."),(0,a.kt)("p",null,"Any node is responsible for only propagating valid objects. Should a node not retrieve all missing dependencies of an object from the peer that sent it, it may punish the peer for doing so."),(0,a.kt)("h2",{id:"node-discovery"},"Node Discovery"),(0,a.kt)("p",null,"Node discovery happens by each node periodically gossiping its public address. Upon receiving an address via gossip, each node immediately tries to establish a connection to it and notes the resulting endpoint, if successful."))}h.isMDXComponent=!0}}]);