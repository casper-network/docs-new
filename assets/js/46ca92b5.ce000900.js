"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5814],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9302:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={},p="Setting the Open Files Limit",s={unversionedId:"operators/setup/open-files",id:"operators/setup/open-files",title:"Setting the Open Files Limit",description:"When the casper-node launches, it tries to set the maximum open files limit (nofile) for the process to 64000. With some systems, this limit will be larger than the default hard limit of 4096.",source:"@site/source/docs/casper/operators/setup/open-files.md",sourceDirName:"operators/setup",slug:"/operators/setup/open-files",permalink:"/operators/setup/open-files",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/operators/setup/open-files.md",tags:[],version:"current",lastUpdatedAt:1688996346,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{},sidebar:"operators",previous:{title:"Installing a Node",permalink:"/operators/setup/install-node"},next:{title:"Upgrading the Node",permalink:"/operators/setup/upgrade"}},u={},c=[{value:"Setting the Limit Manually",id:"updating-manually",level:2},{value:"Updating the <code>limits.conf</code> File",id:"updating-limits-conf",level:2}],m={toc:c},d="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setting-the-open-files-limit"},"Setting the Open Files Limit"),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"casper-node")," launches, it tries to set the maximum open files limit (",(0,i.kt)("inlineCode",{parentName:"p"},"nofile"),") for the process to ",(0,i.kt)("inlineCode",{parentName:"p"},"64000"),". With some systems, this limit will be larger than the default hard limit of ",(0,i.kt)("inlineCode",{parentName:"p"},"4096"),"."),(0,i.kt)("p",null,"The node software uses file handles for both files and network connections. Since network connections are unpredictable, running out of file handles can stop critical file writes from occurring. Therefore, the default ",(0,i.kt)("inlineCode",{parentName:"p"},"nofile")," limit needs to be increased."),(0,i.kt)("p",null,"With the ",(0,i.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," running, you can see what the system allocated by finding the process ID (PID) for the ",(0,i.kt)("inlineCode",{parentName:"p"},"casper-node")," with the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'pgrep "casper-node$"\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Sample output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ pgrep "casper-node$"\n275928\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This PID will change, so you need to run the above command to get the current version with your system. Also, it will not be ",(0,i.kt)("inlineCode",{parentName:"p"},"275928")," each time."))),(0,i.kt)("p",null,"If you do not get a value in return, you do not have the ",(0,i.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," running correctly."),(0,i.kt)("p",null,"To find the current ",(0,i.kt)("inlineCode",{parentName:"p"},"nofile")," (number of open files) hard limit, run ",(0,i.kt)("inlineCode",{parentName:"p"},"prlimit")," with the PID from the previous command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo prlimit -n -p <PID>\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Sample output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo prlimit -n -p 275928\nRESOURCE DESCRIPTION              SOFT HARD UNITS\nNOFILE   max number of open files 1024 4096 files\n"))),(0,i.kt)("p",null,"You can also embed both commands as shown here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sudo prlimit -n -p $(pgrep "casper-node$")\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Sample output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ sudo prlimit -n -p $(pgrep "casper-node$")\nRESOURCE DESCRIPTION              SOFT HARD UNITS\nNOFILE   max number of open files 1024 4096 files\n'))),(0,i.kt)("p",null,"If you receive ",(0,i.kt)("inlineCode",{parentName:"p"},"prlimit: option requires an argument -- 'p'"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},'pgrep "casper-node$"')," is not returning anything because the ",(0,i.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," is no longer running."),(0,i.kt)("h2",{id:"updating-manually"},"Setting the Limit Manually"),(0,i.kt)("p",null,"Run the command below to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"nofile")," limit for an active process without restarting the ",(0,i.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"casper-node")," processes. Note that this setting is active only while the ",(0,i.kt)("inlineCode",{parentName:"p"},"casper-node")," process runs. To make this setting permanent, ",(0,i.kt)("a",{parentName:"p",href:"#updating-limits-conf"},"update the ",(0,i.kt)("inlineCode",{parentName:"a"},"limits.conf"))," file instead."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sudo prlimit --nofile=64000 --pid=$(pgrep "casper-node$")`\n')),(0,i.kt)("p",null,"Next, check that the ",(0,i.kt)("inlineCode",{parentName:"p"},"prlimit")," has changed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sudo prlimit -n -p $(pgrep "casper-node$")\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Sample output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ sudo prlimit -n -p $(pgrep "casper-node$")\nRESOURCE DESCRIPTION               SOFT  HARD UNITS\nNOFILE   max number of open files 64000 64000 files\n'))),(0,i.kt)("h2",{id:"updating-limits-conf"},"Updating the ",(0,i.kt)("inlineCode",{parentName:"h2"},"limits.conf")," File"),(0,i.kt)("p",null,"It is possible to persist the ",(0,i.kt)("inlineCode",{parentName:"p"},"nofile")," limit across server reboots, ",(0,i.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," restarts, and protocol upgrades, by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"nofile")," setting for the ",(0,i.kt)("inlineCode",{parentName:"p"},"casper")," user in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/security/limits.conf"),"."),(0,i.kt)("p",null,"Add the following row to the bottom of the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/security/limits.conf")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"casper          hard    nofile          64000\n")),(0,i.kt)("p",null,"Afterward, log out of any shells to enable this change. Restarting the node should maintain the correct ",(0,i.kt)("inlineCode",{parentName:"p"},"nofile")," setting."))}f.isMDXComponent=!0}}]);