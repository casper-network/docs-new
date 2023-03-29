"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1199],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5257:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),s=["components"],o={},c="The Casper Event Sidecar",l={unversionedId:"operators/event-sidecar",id:"operators/event-sidecar",title:"The Casper Event Sidecar",description:"The Casper Event Sidecar is an application running alongside the node process, allowing subscribers to monitor the event stream without querying the node. The application usually runs on the same machine as the node process, but it can be configured to run remotely if necessary. The load on the node process is thus drastically reduced. Users needing access to the JSON-RPC will still need to query the node directly.",source:"@site/source/docs/casper/operators/event-sidecar.md",sourceDirName:"operators",slug:"/operators/event-sidecar",permalink:"/operators/event-sidecar",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/operators/event-sidecar.md",tags:[],version:"current",lastUpdatedAt:1680109217,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{}},d={},u=[{value:"Installing the Sidecar Service",id:"installing-the-sidecar",level:2},{value:"Monitoring the Sidecar Service",id:"monitoring-the-sidecar",level:3},{value:"Configuring the Sidecar Service",id:"configuring-the-sidecar",level:2},{value:"Monitoring the Event Stream",id:"monitoring-the-event-stream",level:2}],p={toc:u},m="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-casper-event-sidecar"},"The Casper Event Sidecar"),(0,i.kt)("p",null,"The Casper Event Sidecar is an application running alongside the node process, allowing subscribers to monitor the event stream without querying the node. The application usually runs on the same machine as the node process, but it can be configured to run remotely if necessary. The load on the node process is thus drastically reduced. Users needing access to the JSON-RPC will still need to query the node directly."),(0,i.kt)("p",null,"An alternate name for this application is the SSE Sidecar because it uses the node's Event Stream API returning Server-Sent Events (SSEs) in JSON format. Visit GitHub for detailed information on the following:"),(0,i.kt)("h2",{id:"installing-the-sidecar"},"Installing the Sidecar Service"),(0,i.kt)("p",null,"The following command will install the Debian package for the Casper Event Sidecar service on various flavors of Linux."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install ./casper-event-sidecar_0.1.0-0_amd64.deb\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Sample output")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Reading package lists... Done\nBuilding dependency tree\nReading state information... Done\nNote, selecting 'casper-event-sidecar' instead of './casper-event-sidecar_0.1.0-0_amd64.deb'\nThe following NEW packages will be installed:\n  casper-event-sidecar\n0 upgraded, 1 newly installed, 0 to remove and 18 not upgraded.\nNeed to get 0 B/4162 kB of archives.\nAfter this operation, 20.2 MB of additional disk space will be used.\nGet:1 /home/ubuntu/casper-event-sidecar_0.1.0-0_amd64.deb casper-event-sidecar amd64 0.1.0-0 [4162 kB]\nSelecting previously unselected package casper-event-sidecar.\n(Reading database ... 102241 files and directories currently installed.)\nPreparing to unpack .../casper-event-sidecar_0.1.0-0_amd64.deb ...\nUnpacking casper-event-sidecar (0.1.0-0) ...\nSetting up casper-event-sidecar (0.1.0-0) ...\nAdding system user `csidecar' (UID 114) ...\nAdding new group `csidecar' (GID 120) ...\nAdding new user `csidecar' (UID 114) with group `csidecar' ...\nNot creating home directory `/home/csidecar'.\nCreated symlink /etc/systemd/system/multi-user.target.wants/casper-event-sidecar.service \u2192 /lib/systemd/system/casper-event-sidecar.service.\n"))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"monitoring-the-sidecar"},"Monitoring the Sidecar Service"),(0,i.kt)("p",null,"Check the service status:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status casper-event-sidecar\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Sample output")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"casper-event-sidecar.service - Casper Event Sidecar\n     Loaded: loaded (/lib/systemd/system/casper-event-sidecar.service; enabled; vendor preset: enabled)\n     Active: active (running) since Wed 2022-12-07 20:33:29 UTC; 1min 3s ago\n       Docs: https://docs.casperlabs.io\n   Main PID: 16707 (casper-event-si)\n      Tasks: 5 (limit: 9401)\n     Memory: 7.1M\n     CGroup: /system.slice/casper-event-sidecar.service\n             \u2514\u250016707 /usr/bin/casper-event-sidecar /etc/casper-event-sidecar/config.toml\n\nDec 07 20:33:29 user systemd[1]: Started Casper Event Sidecar.\n"))),(0,i.kt)("br",null),(0,i.kt)("p",null,"Check the logs and make sure the service is running as expected."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl --no-pager -u casper-event-sidecar\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Sample output")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Dec 05 17:24:53 user systemd[1]: Started Casper Event Sidecar.\n"))),(0,i.kt)("br",null),(0,i.kt)("p",null,"If you see any errors, you may need to ",(0,i.kt)("a",{parentName:"p",href:"#configuring-the-service"},"update the configuration")," and re-start the service with the commands below."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Stopping the service:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl stop casper-event-sidecar.service\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Starting the service:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start casper-event-sidecar.service\n")),(0,i.kt)("h2",{id:"configuring-the-sidecar"},"Configuring the Sidecar Service"),(0,i.kt)("p",null,"Detailed node configuration instructions are available in GitHub."),(0,i.kt)("p",null,"If the service was installed on a Casper node, this file holds a default configuration: ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/casper-event-sidecar/config.toml"),". The file is also available in GitHub."),(0,i.kt)("p",null,"Operators will need to update this file according to their needs. GitHub has further details regarding each configuration option."),(0,i.kt)("h2",{id:"monitoring-the-event-stream"},"Monitoring the Event Stream"),(0,i.kt)("p",null,"It is possible to monitor the Sidecar's event stream using ",(0,i.kt)("em",{parentName:"p"},"cURL"),", depending on how the HOST and PORT are configured."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://<HOST:PORT>/events/<TYPE>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HOST")," - The IP address where the Sidecar is running"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PORT")," - The port number where the Sidecar emits events"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TYPE")," - The type of emitted event")),(0,i.kt)("p",null,"Given the default configuration, the command would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sN http://127.0.0.1:19999/events/deploys\n")),(0,i.kt)("p",null,"For more information on various event types, visit the ",(0,i.kt)("a",{parentName:"p",href:"/operators/node-events"},"Monitoring Node Events")," page."))}h.isMDXComponent=!0}}]);