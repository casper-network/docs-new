"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5240],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9533:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(3117),i=n(102),o=(n(7294),n(3905)),r=["components"],l={},s="Basic Node Configuration",p={unversionedId:"operators/setup/basic-node-configuration",id:"operators/setup/basic-node-configuration",title:"Basic Node Configuration",description:"This page outlines the processes and files involved in setting up a Casper node. For step-by-step node installation instructions, follow the Node Setup guide.",source:"@site/source/docs/casper/operators/setup/basic-node-configuration.md",sourceDirName:"operators/setup",slug:"/operators/setup/basic-node-configuration",permalink:"/operators/setup/basic-node-configuration",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/operators/setup/basic-node-configuration.md",tags:[],version:"current",lastUpdatedAt:1677770607,formattedLastUpdatedAt:"3/2/2023",frontMatter:{},sidebar:"operators",previous:{title:"Recommended Hardware Specifications",permalink:"/operators/setup/hardware"},next:{title:"Installing a Node",permalink:"/operators/setup/install-node"}},d={},c=[{value:"The Casper Node Launcher",id:"casper-node-launcher",level:2},{value:"File Locations",id:"file-locations",level:2},{value:"<code>/usr/bin/</code>",id:"usrbin",level:3},{value:"<code>/etc/casper/</code>",id:"etccasper",level:3},{value:"<code>/var/lib/casper/</code>",id:"varlibcasper",level:3},{value:"Node Version Installation",id:"node-version-installation",level:2},{value:"The Node Configuration File",id:"config-file",level:2},{value:"The Trusted Hash for Synchronizing",id:"trusted-hash-for-synchronizing",level:3},{value:"Known Addresses",id:"known-addresses",level:3},{value:"Updating the <code>config.toml</code> file",id:"updating-config-file",level:3},{value:"Secret Keys",id:"secret-keys",level:3},{value:"Networking and Gossiping",id:"networking--gossiping",level:3},{value:"Rust Client Installation",id:"client-installation",level:2},{value:"Creating Keys and Funding Accounts",id:"create-fund-keys",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basic-node-configuration"},"Basic Node Configuration"),(0,o.kt)("p",null,"This page outlines the processes and files involved in setting up a Casper node. For step-by-step node installation instructions, follow the ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/install-node"},"Node Setup")," guide."),(0,o.kt)("h2",{id:"casper-node-launcher"},"The Casper Node Launcher"),(0,o.kt)("p",null,"A node is usually run by executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node-launcher"),", which executes the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node")," as a child process and also handles upgrades to bring the node to the latest version released."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," can be installed via a Debian package, which also creates the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper")," user and directory structures and sets up a ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd")," unit and logging."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," Debian package can be obtained from ",(0,o.kt)("a",{parentName:"p",href:"https://repo.casperlabs.io"},"https://repo.casperlabs.io"),". You only need to run the steps detailed there once."),(0,o.kt)("p",null,"Then, proceed to install the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," by running these commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install casper-node-launcher\n")),(0,o.kt)("p",null,"You can also build ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node-launcher"},"from source"),". However, all the setup and pull of casper-node releases will be manual."),(0,o.kt)("h2",{id:"file-locations"},"File Locations"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," Debian installation creates the directories and files needed to run ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node")," versions and perform upgrades. A ",(0,o.kt)("inlineCode",{parentName:"p"},"casper")," user and ",(0,o.kt)("inlineCode",{parentName:"p"},"casper")," group are created during installation and used to run the software. Two main folders are relevant for our software: ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/casper")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/casper"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The casper-node install version")),(0,o.kt)("p",null,"Each version of the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node")," install is located based on the semantic version with underscores. For example, version 1.0.3 is represented by a directory named ",(0,o.kt)("inlineCode",{parentName:"p"},"1_0_3"),". This convention applies to both binary and configuration file locations. Versioning with ",(0,o.kt)("inlineCode",{parentName:"p"},"[m_n_p]")," represents the major, minor, and patch of a semantic version."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Multiple versioned folders will exist on a system when upgrades are set up."))),(0,o.kt)("p",null,"The following is the filesystem's state after installing the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-client")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," Debian packages, and after running the command ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo -u casper /etc/casper/node_util.py stage_protocols casper.conf")," (Use casper-test.conf if on Testnet)."),(0,o.kt)("h3",{id:"usrbin"},(0,o.kt)("inlineCode",{parentName:"h3"},"/usr/bin/")),(0,o.kt)("p",null,"The default location for executables from the Debian package install is ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/bin"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"casper-client")," - A client for interacting with a Casper network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"casper-node-launcher")," - The launcher application which starts the ",(0,o.kt)("inlineCode",{parentName:"li"},"casper-node")," as a child process")),(0,o.kt)("h3",{id:"etccasper"},(0,o.kt)("inlineCode",{parentName:"h3"},"/etc/casper/")),(0,o.kt)("p",null,"This is the default location for configuration files. It can be overwritten with the ",(0,o.kt)("inlineCode",{parentName:"p"},"CASPER_CONFIG_DIR")," environment variable. The paths in this document assume the default configuration file location of ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/casper"),". The data is organized as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"delete_local_db.sh")," - Removes ",(0,o.kt)("inlineCode",{parentName:"li"},"*.lmdb*")," files from ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/lib/casper/casper-node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pull_casper_node_version.sh")," - Pulls ",(0,o.kt)("inlineCode",{parentName:"li"},"bin.tar.gz")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"config.tar.gz")," from ",(0,o.kt)("a",{parentName:"li",href:"https://genesis.casperlabs.io/"},"genesis.casperlabs.io")," for a specified protocol version and extracts them into ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/lib/bin/<protocol_version>")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/casper/<protocol_version>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config_from_example.sh")," - Gets external IP to replace and create the ",(0,o.kt)("inlineCode",{parentName:"li"},"config.toml")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"config-example.toml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node_util.py")," - A script that will be replacing other scripts and is the preferred method of performing the actions of ",(0,o.kt)("inlineCode",{parentName:"li"},"pull_casper_node_version.sh"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"config_from_example.sh"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"delete_local_db.sh"),". Other scripts will be deprecated in future releases of ",(0,o.kt)("inlineCode",{parentName:"li"},"casper-node-launcher"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"casper-node-launcher-state.toml")," - The local state for the ",(0,o.kt)("inlineCode",{parentName:"li"},"casper-node-launcher")," which is created during the first run"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"validator_keys/")," - The default folder for node keys, containing:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"README.md")," - Instructions on how to create validator keys using the ",(0,o.kt)("inlineCode",{parentName:"li"},"casper-client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"secret_key.pem")," - Secret key used by the validator node to sign blocks and peer-to-peer messages"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"public_key.pem")," - Public key associated with the secret key above, stored in PEM format"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"public_key_hex")," - Public key associated with the secret key above, stored in hex format"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1_0_0/")," - Folder for genesis configuration files, containing:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"accounts.toml")," - Contains the genesis validators and delegators"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chainspec.toml")," - Contains invariant network settings, with the ",(0,o.kt)("inlineCode",{parentName:"li"},"activation_point")," (network start time) as a timestamp"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config-example.toml")," - Example for creating a ",(0,o.kt)("inlineCode",{parentName:"li"},"config.toml")," file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config.toml")," - Contains variable node configuration settings, created by a node operator manually or by running ",(0,o.kt)("inlineCode",{parentName:"li"},"config_from_example.sh 1_0_0")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"m_n_p/")," - Folder for each installed upgrade package's configuration files, containing:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chainspec.toml")," - Contains invariant network settings, with the ",(0,o.kt)("inlineCode",{parentName:"li"},"activation_point")," as an era ID (the era at which this protocol version of the node became or will become active)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config-example.toml")," - As per ",(0,o.kt)("inlineCode",{parentName:"li"},"1_0_0/config-example.toml"),", but compatible with the ",(0,o.kt)("inlineCode",{parentName:"li"},"m.n.p")," version of the node"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config.toml")," - As per ",(0,o.kt)("inlineCode",{parentName:"li"},"1_0_0/config.toml"),", but compatible with the ",(0,o.kt)("inlineCode",{parentName:"li"},"m.n.p")," version of the node")))),(0,o.kt)("h3",{id:"varlibcasper"},(0,o.kt)("inlineCode",{parentName:"h3"},"/var/lib/casper/")),(0,o.kt)("p",null,"This is the location for larger and variable data for the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node"),", organized in the following folders and files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"bin/")," - The parent folder storing the versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node")," executables. This location can be overwritten with the ",(0,o.kt)("inlineCode",{parentName:"p"},"CASPER_BIN_DIR")," environment variable. The paths in this document assume the default of ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/casper/bin/"),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1_0_0/")," - Folder for genesis binary files, containing:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"casper-node")," - The node executable - defaults to the Ubuntu 20.04 compatible binary"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"README.md")," - Information about the repository location and the Git hash used for compilation to allow a rebuild on other platforms"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"m_n_p/")," - Folder for each installed upgrade package, containing:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"casper-node")," - As per ",(0,o.kt)("inlineCode",{parentName:"li"},"1_0_0/casper-node"),", but the ",(0,o.kt)("inlineCode",{parentName:"li"},"m.n.p")," version of the node"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"README.md")," - As per ",(0,o.kt)("inlineCode",{parentName:"li"},"1_0_0/README.md"),", but compatible with the ",(0,o.kt)("inlineCode",{parentName:"li"},"m.n.p")," version of the node"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"casper-node/<NETWORK NAME>")," - Folder containing databases and related files produced by the node binary. For Mainnet, the network name is ",(0,o.kt)("inlineCode",{parentName:"p"},"casper")," and for Testnet it is ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-test"),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data.lmdb")," - Persistent global state store of the network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data.lmbd-lock")," - Lockfile for the ",(0,o.kt)("inlineCode",{parentName:"li"},"data.lmdb")," database"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"storage.lmdb")," - Persistent store of all other network data, primarily Blocks and Deploys"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"storage.lmdb-lock")," - Lockfile for the ",(0,o.kt)("inlineCode",{parentName:"li"},"storage.lmdb")," database"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"unit_files/")," - Folder containing transient caches of consensus information")))),(0,o.kt)("h2",{id:"node-version-installation"},"Node Version Installation"),(0,o.kt)("p",null,"Included with the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"node_util.py")," for installing ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node")," versions. This command will stage all current ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node")," versions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper /etc/casper/node_util.py stage_protocols <NETWORK_CONFIG>\n")),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"<NETWORK_CONFIG>"),", we use ",(0,o.kt)("inlineCode",{parentName:"p"},"casper.conf")," for Mainnet and ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-test.conf")," for Testnet. This will install all currently released protocols in one step."),(0,o.kt)("p",null,"This command will do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/lib/casper/bin/1_0_2/")," and expand the ",(0,o.kt)("inlineCode",{parentName:"li"},"bin.tar.gz")," containing at a minimum ",(0,o.kt)("inlineCode",{parentName:"li"},"casper-node")),(0,o.kt)("li",{parentName:"ul"},"Create ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/casper/1_0_2/")," and expand the ",(0,o.kt)("inlineCode",{parentName:"li"},"config.tar.gz")," containing ",(0,o.kt)("inlineCode",{parentName:"li"},"chainspec.toml"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"config-example.toml"),", and possibly ",(0,o.kt)("inlineCode",{parentName:"li"},"accounts.csv")," and other files"),(0,o.kt)("li",{parentName:"ul"},"Remove the archive files and run ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/casper/config_from_example.sh 1_0_2")," to create a ",(0,o.kt)("inlineCode",{parentName:"li"},"config.toml")," from the ",(0,o.kt)("inlineCode",{parentName:"li"},"config-example.toml"))),(0,o.kt)("p",null,"Release versions are invoked using the underscore format, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper /etc/casper/pull_casper_node_version.sh 1_0_2\n")),(0,o.kt)("h2",{id:"config-file"},"The Node Configuration File"),(0,o.kt)("p",null,"One ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," file exists for each ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node")," version installed. It is located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/casper/[m_n_p]/")," directory, where ",(0,o.kt)("inlineCode",{parentName:"p"},"m_n_p")," is the current semantic version. This can be created from the ",(0,o.kt)("inlineCode",{parentName:"p"},"config-example.toml")," by using ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/casper/config_from_example.sh [m_n_p]")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"[m_n_p]")," is replaced with the current version, using underscores."),(0,o.kt)("p",null,"Below are some fields in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," that you may need to adjust."),(0,o.kt)("h3",{id:"trusted-hash-for-synchronizing"},"The Trusted Hash for Synchronizing"),(0,o.kt)("p",null,"Each Casper network is a permissionless, Proof-of-Stake network, implying that nodes can join and leave the network. As a result, some nodes may not be synchronized or as secure as bonded validators. Ideally, all nodes will join the network using a trusted source, such as a bonded validator."),(0,o.kt)("p",null,"When joining the network, the system will start from the hash of a recent block and then work backward to obtain the finalized blocks from the linear block store. Here is the process to get the trusted hash of a bonded validator:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Find a list of trusted validators"),(0,o.kt)("li",{parentName:"ul"},"Query the status endpoint of a trusted validator (",(0,o.kt)("inlineCode",{parentName:"li"},"http://<NODE_IP_ADDRESS>:8888/status"),")"),(0,o.kt)("li",{parentName:"ul"},"Obtain the hash of a block from the status endpoint"),(0,o.kt)("li",{parentName:"ul"},"Update the ",(0,o.kt)("inlineCode",{parentName:"li"},"config.toml")," for the node to include the trusted hash. There is a field dedicated to this near the top of the file")),(0,o.kt)("p",null,"Here is an example command for obtaining a trusted hash. Replace the node address with an updated address from a node on the network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo sed -i \"/trusted_hash =/c\\trusted_hash = '$(casper-client get-block --node-address http://3.14.161.135:7777 -b 20 | jq -r .result.block.hash | tr -d '\\n')'\" /etc/casper/1_0_0/config.toml\n")),(0,o.kt)("h3",{id:"known-addresses"},"Known Addresses"),(0,o.kt)("p",null,"For the node to connect to a network, the node needs a set of trusted peers for that network. For ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/"},"Mainnet"),", these are listed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"known_addresses"),". For other networks, locate and update the list to include at least two trusted IP addresses for peers in that network. Here is an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-protocol-release/blob/main/config/config-example.toml"},"example configuration"),". The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-protocol-release"},"casper-protocol-release")," repository stores configurations for various environments, which you can also use as examples."),(0,o.kt)("h3",{id:"updating-config-file"},"Updating the ",(0,o.kt)("inlineCode",{parentName:"h3"},"config.toml")," file"),(0,o.kt)("p",null,"At the top of a ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," file as shown here, enter the trusted block hash to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"'HEX-FORMATTED BLOCK HASH'")," and uncomment the line by deleting the leading '#'. See the ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/basic-node-configuration#config-file"},"Configuration File")," for more details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# ================================\n# Configuration options for a node\n# ================================\n[node]\n\n# If set, use this hash as a trust anchor when joining an existing network.\n#trusted_hash = 'HEX-FORMATTED BLOCK HASH'\n")),(0,o.kt)("h3",{id:"secret-keys"},"Secret Keys"),(0,o.kt)("p",null,"Provide the path to the secret keys for the node. This path is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"etc/casper/validator_keys/")," by default. See ",(0,o.kt)("a",{parentName:"p",href:"#create-fund-keys"},"Creating Keys and Funding Accounts")," for more details."),(0,o.kt)("h3",{id:"networking--gossiping"},"Networking and Gossiping"),(0,o.kt)("p",null,"The node requires a publicly accessible IP address. The ",(0,o.kt)("inlineCode",{parentName:"p"},"config_from_example.sh")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"node_util.py")," both allow IP for network address translation (NAT) setup. Specify the public IP address of the node. If you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"config_from_example.sh")," external services are called to find your IP and this is inserted into the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," created."),(0,o.kt)("p",null,"The following default values are specified in the file if you want to change them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The port that will be used for status and deploys"),(0,o.kt)("li",{parentName:"ul"},"The port used for networking"),(0,o.kt)("li",{parentName:"ul"},"Known_addresses - these are the bootstrap nodes (there is no need to change these)")),(0,o.kt)("h2",{id:"client-installation"},"Rust Client Installation"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/developers/prerequisites#the-casper-command-line-client"},"Prerequisites")," page lists installation instructions for the Casper client, which is useful for generating keys and retrieving information from the network."),(0,o.kt)("h2",{id:"create-fund-keys"},"Creating Keys and Funding Accounts"),(0,o.kt)("p",null,"The following command will create keys in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/casper/validator_keys")," folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper casper-client keygen /etc/casper/validator_keys\n")),(0,o.kt)("p",null,"To learn about other options for generating keys, see ",(0,o.kt)("a",{parentName:"p",href:"/concepts/accounts-and-keys"},"Accounts and Cryptographic Keys")," or run the Rust client ",(0,o.kt)("inlineCode",{parentName:"p"},"keygen")," command with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper casper-client keygen --help\n")),(0,o.kt)("p",null,"More about keys and key generation can also be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/casper/validator_keys/README.md")," if the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," was installed from the Debian package."),(0,o.kt)("p",null,"To submit a bonding request, you will need to ",(0,o.kt)("a",{parentName:"p",href:"/developers/prerequisites#fund-your-account"},"fund your account")," as well."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Save your keys in a secure location, preferably offline."))))}m.isMDXComponent=!0}}]);