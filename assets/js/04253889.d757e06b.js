"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9415],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(i,".").concat(h)]||c[h]||d[h]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2852:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],l={title:"Installation"},i="Installing a Node",p={unversionedId:"operators/setup/install-node",id:"operators/setup/install-node",title:"Installation",description:"Ensure the requirements listed in the following sections are met before you start setting up the node on the network, either on Mainnet or Testnet.",source:"@site/source/docs/casper/operators/setup/install-node.md",sourceDirName:"operators/setup",slug:"/operators/setup/install-node",permalink:"/operators/setup/install-node",draft:!1,editUrl:"https://github.com/casper-network/docs-new/tree/dev-new/source/docs/casper/operators/setup/install-node.md",tags:[],version:"current",lastUpdatedAt:1692636406,formattedLastUpdatedAt:"Aug 21, 2023",frontMatter:{title:"Installation"},sidebar:"operators",previous:{title:"Endpoints",permalink:"/operators/setup/node-endpoints"},next:{title:"Open Files Limit",permalink:"/operators/setup/open-files"}},u={},c=[{value:"Network Requirements",id:"network-requirements",level:2},{value:"Operating System Requirements",id:"operating-system-requirements",level:2},{value:"Required Number of Open Files",id:"required-number-of-open-files",level:2},{value:"Required Clean Up",id:"required-clean-up",level:2},{value:"Required Packages",id:"required-packages",level:2},{value:"Required Tools",id:"required-tools",level:2},{value:"Enable Bash Auto-Completion for <code>casper-client</code> (Optional)",id:"enable-bash-auto-completion-for-casper-client-optional",level:2},{value:"Installing All Protocols",id:"installing-all-protocols",level:2},{value:"Validator Keys",id:"validator-keys",level:2},{value:"Getting a Trusted Hash",id:"getting-a-trusted-hash",level:2},{value:"Starting the Node",id:"starting-the-node",level:2},{value:"Monitoring the Synchronization Process",id:"monitoring-the-synchronization-process",level:3},{value:"Monitoring the Running Node",id:"monitoring-the-running-node",level:3}],d={toc:c},h="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)(h,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-a-node"},"Installing a Node"),(0,o.kt)("p",null,"Ensure the requirements listed in the following sections are met before you start setting up the node on the network, either on Mainnet or Testnet."),(0,o.kt)("h2",{id:"network-requirements"},"Network Requirements"),(0,o.kt)("p",null,"The following ports are used by the node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"35000 (required to be externally visible)"),(0,o.kt)("li",{parentName:"ul"},"7777 RPC endpoint for interaction with JSON-RPC API"),(0,o.kt)("li",{parentName:"ul"},"8888 REST endpoint for status and metrics (having this accessible allows your node to be part of network status)"),(0,o.kt)("li",{parentName:"ul"},"9999 SSE endpoint for event stream")),(0,o.kt)("p",null,"Of these ",(0,o.kt)("inlineCode",{parentName:"p"},"35000")," is the only port required to be open for your node to function, however, opening ",(0,o.kt)("inlineCode",{parentName:"p"},"8888")," will allow others to know general network health. For more details, see the additional information on ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/node-endpoints"},"Node Endpoints"),"."),(0,o.kt)("h2",{id:"operating-system-requirements"},"Operating System Requirements"),(0,o.kt)("p",null,"The recommended OS version is Ubuntu 20.04."),(0,o.kt)("h2",{id:"required-number-of-open-files"},"Required Number of Open Files"),(0,o.kt)("p",null,"Before beginning, ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/open-files"},"update the maximum open files limit")," for your system. Specifically, update the node's ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/security/limits.conf")," file as described ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/open-files#updating-limits-conf"},"here"),", to ensure proper node operation."),(0,o.kt)("h2",{id:"required-clean-up"},"Required Clean Up"),(0,o.kt)("p",null,"If you were running a previous node on this box, this will clean up state. If packages are not installed, the ",(0,o.kt)("inlineCode",{parentName:"p"},"apt remove")," may give errors, but this is not a problem."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl stop casper-node-launcher.service\nsudo apt remove -y casper-client\nsudo apt remove -y casper-node\nsudo apt remove -y casper-node-launcher\nsudo rm /etc/casper/casper-node-launcher-state.toml\nsudo rm -rf /etc/casper/1_*\nsudo rm -rf /var/lib/casper/*\n")),(0,o.kt)("h2",{id:"required-packages"},"Required Packages"),(0,o.kt)("p",null,"The following commands will set up the Casper Labs repository for packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo "deb https://repo.casperlabs.io/releases" bionic main | sudo tee -a /etc/apt/sources.list.d/casper.list\ncurl -O https://repo.casperlabs.io/casper-repo-pubkey.asc\nsudo apt-key add casper-repo-pubkey.asc\nsudo apt update\n')),(0,o.kt)("h2",{id:"required-tools"},"Required Tools"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install -y casper-client casper-node-launcher jq\n")),(0,o.kt)("h2",{id:"enable-bash-auto-completion-for-casper-client-optional"},"Enable Bash Auto-Completion for ",(0,o.kt)("inlineCode",{parentName:"h2"},"casper-client")," (Optional)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo casper-client generate-completion\n")),(0,o.kt)("p",null,"It defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"bash")," but can be changed with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--shell")," argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"--shell <STRING>    The type of shell to generate the completion script for [default: bash]  [possible values:\n                            zsh, bash, fish, powershell, elvish]\n\nsudo casper-client generate-completion --shell powershell\n")),(0,o.kt)("p",null,"You need to source the new auto completion script or log out and log in again to activate it for the current shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source /usr/share/bash-completion/completions/casper-client\n")),(0,o.kt)("p",null,"Now you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-client")," and press the ",(0,o.kt)("inlineCode",{parentName:"p"},"tab")," key to get auto completion for your commands."),(0,o.kt)("h2",{id:"installing-all-protocols"},"Installing All Protocols"),(0,o.kt)("p",null,"On ",(0,o.kt)("strong",{parentName:"p"},"Mainnet"),", run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper /etc/casper/node_util.py stage_protocols casper.conf\n")),(0,o.kt)("p",null,"On ",(0,o.kt)("strong",{parentName:"p"},"Testnet"),", run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper /etc/casper/node_util.py stage_protocols casper-test.conf\n")),(0,o.kt)("h2",{id:"validator-keys"},"Validator Keys"),(0,o.kt)("p",null,"If you do not have keys yet, you can create them using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper casper-client keygen /etc/casper/validator_keys\n")),(0,o.kt)("p",null,"For more details, see the ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/basic-node-configuration#create-fund-keys"},"Node Setup")," page."),(0,o.kt)("h2",{id:"getting-a-trusted-hash"},"Getting a Trusted Hash"),(0,o.kt)("p",null,"To get a trusted hash, use the command below. Replace the node address with an address from a node on the network of your choice."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo sed -i \"/trusted_hash =/c\\trusted_hash = '$(casper-client get-block --node-address http://3.14.161.135:7777 -b 20 | jq -r .result.block.hash | tr -d '\\n')'\" /etc/casper/1_0_0/config.toml\n")),(0,o.kt)("p",null,"You can find active peers at ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/tools/peers"},"https://cspr.live/tools/peers"),"."),(0,o.kt)("h2",{id:"starting-the-node"},"Starting the Node"),(0,o.kt)("p",null,"Start the node using the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo /etc/casper/node_util.py rotate_logs\nsudo /etc/casper/node_util.py start\n")),(0,o.kt)("h3",{id:"monitoring-the-synchronization-process"},"Monitoring the Synchronization Process"),(0,o.kt)("p",null,"The following command will display the node synchronization details:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/casper/node_util.py watch\n")),(0,o.kt)("p",null,"When you first run the watch command, you may see the message ",(0,o.kt)("inlineCode",{parentName:"p"},"RPC: Not Ready"),". Once the node is synchronized, the status will change to ",(0,o.kt)("inlineCode",{parentName:"p"},"RPC: Ready")," and a similar output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Last Block: 630151 (Era: 4153)\nPeer Count: 297\nUptime: 4days 6h 40m 18s 553ms\nBuild: 1.4.5-a7f6a648d-casper-mainnet\nKey: 0147b4cae09d64ab6acd02dd0868722be9a9bcc355c2fdff7c2c244cbfcd30f158\nNext Upgrade: None\n\nRPC: Ready\n\n\u25cf casper-node-launcher.service - Casper Node Launcher\n   Loaded: loaded (/lib/systemd/system/casper-node-launcher.service; enabled; vendor preset: enabled)\n   Active: active (running) since Wed 2022-03-16 21:08:50 UTC; 4 days ago\n     Docs: https://docs.casper.network\n Main PID: 2934 (casper-node-lau)\n    Tasks: 12 (limit: 4915)\n   CGroup: /system.slice/casper-node-launcher.service\n           \u251c\u2500 2934 /usr/bin/casper-node-launcher\n           \u2514\u250016842 /var/lib/casper/bin/1_4_5/casper-node validator /etc/casper/1_4_5/config.toml\n")),(0,o.kt)("p",null,"If the node is not showing active (running) status, it is either stopped or in the process of restarting."),(0,o.kt)("h3",{id:"monitoring-the-running-node"},"Monitoring the Running Node"),(0,o.kt)("p",null,"The community has created a few tools to monitor your node once it is running, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Status.py: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/RapidMark/casper-tools"},"https://github.com/RapidMark/casper-tools")),(0,o.kt)("li",{parentName:"ul"},"Grafana: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/matsuro-hadouken/casper-tools"},"https://github.com/matsuro-hadouken/casper-tools"))))}m.isMDXComponent=!0}}]);