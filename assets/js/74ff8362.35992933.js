"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1132],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6665:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=a(4996),s=["components"],l={},c="Getting Started with Rust",p={unversionedId:"developers/writing-onchain-code/getting-started",id:"developers/writing-onchain-code/getting-started",title:"Getting Started with Rust",description:"This guide covers the basic tools you will need to set up your first Casper smart contract. You will also be able to build a sample smart contract and run a few basic tests on it on your local machine.",source:"@site/source/docs/casper/developers/writing-onchain-code/getting-started.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/getting-started",permalink:"/developers/writing-onchain-code/getting-started",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/writing-onchain-code/getting-started.md",tags:[],version:"current",lastUpdatedAt:1677508417,formattedLastUpdatedAt:"2/27/2023",frontMatter:{},sidebar:"developers",previous:{title:"Introduction",permalink:"/writing-contracts"},next:{title:"Getting Started with AssemblyScript",permalink:"/developers/writing-onchain-code/assembly-script"}},u={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing Rust",id:"installing-rust",level:3},{value:"Installing Dependencies",id:"installing-dependencies",level:3},{value:"Development Environment Setup",id:"development-environment-setup",level:2},{value:"Installing the Casper Crates",id:"installing-the-casper-crates",level:3},{value:"Creating a Project",id:"creating-a-project",level:3},{value:"Compiling to Wasm",id:"compiling-to-wasm",level:3},{value:"Test the Contract",id:"test-the-contract",level:3},{value:"Installing the Casper Client",id:"installing-the-casper-client",level:3},{value:"Setting up an IDE",id:"setting-up-an-ide",level:3},{value:"Creating an Account",id:"creating-an-account",level:3},{value:"Video Walkthrough",id:"video-walkthrough",level:2},{value:"Rust Resources",id:"rust-resources",level:2}],d={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-rust"},"Getting Started with Rust"),(0,o.kt)("p",null,"This guide covers the basic tools you will need to set up your first Casper smart contract. You will also be able to build a sample smart contract and run a few basic tests on it on your local machine."),(0,o.kt)("p",null,"Casper's blockchain is built upon the Rust programming language and compiles down to WebAssembly. This guide will walk you through the steps to set up your development environment and build your first contract."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h3",{id:"installing-rust"},"Installing Rust"),(0,o.kt)("p",null,"Install the ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org"},"Rust programming language")," if you don't already have it on your computer."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"official Rust guide")," recommends installing Rust by using ",(0,o.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,o.kt)("p",null,"You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"brew")," on MacOS or ",(0,o.kt)("inlineCode",{parentName:"p"},"apt")," on Linux to install Rust."),(0,o.kt)("p",null,"Once you finish installing Rust, check your version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustup --version\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Casper Rust Packages")),(0,o.kt)("p",null,"We publish three crates on ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/"},"crates.io")," to support smart contract development with Rust:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/casper-contract"},"Casper Contract")," - a library supporting communication with the blockchain. This is the main library you will need to write smart contracts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/casper-engine-test-support"},"Casper Test Support")," - a virtual machine against which you can test your smart contracts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/casper-types"},"Casper Types")," - a library with types we use across the Rust ecosystem.")),(0,o.kt)("p",null,"A crate is a compilation unit, which can be compiled into a binary or a library."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"API Documentation for Smart Contracts")),(0,o.kt)("p",null,"Each of the Casper crates comes with API documentation and examples for each function, located at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/releases/search?query=casper"},"https://docs.rs"),". The contract API documentation is specific for a given version. For example, you can find documentation for version ",(0,o.kt)("strong",{parentName:"p"},"0.7.6")," at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/0.7.6"},"https://docs.rs/casper-contract/0.7.6"),"."),(0,o.kt)("h3",{id:"installing-dependencies"},"Installing Dependencies"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. CMake")),(0,o.kt)("p",null,"CMake is a popular build tool that we will utilize, and you may very well have it already installed. If you do, make sure that you have the latest version. If you need to install or upgrade it, follow the steps located here: ",(0,o.kt)("a",{parentName:"p",href:"https://cmake.org/install/"},"https://cmake.org/install/"),". Once installed, check your version as shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cmake --version\ncmake version 3.20.0\n\nCMake suite maintained and supported by Kitware (kitware.com/cmake).\n")),(0,o.kt)("h2",{id:"development-environment-setup"},"Development Environment Setup"),(0,o.kt)("h3",{id:"installing-the-casper-crates"},"Installing the Casper Crates"),(0,o.kt)("p",null,"The best and fastest way to set up a Casper Rust Smart Contract project is to use ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-casper"),". When you use this, it will set the project up with a simple contract, a runtime environment and a testing framework with a simple test. ",(0,o.kt)("em",{parentName:"p"},"Cargo")," is a build system and package manager for Rust (much like ",(0,o.kt)("em",{parentName:"p"},"pip")," if you are familiar with Python). It is possible to use this configuration in your CI/CD pipeline as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-casper\n")),(0,o.kt)("p",null,"If you run into any issues with this command and you have not recently installed Rust from scratch, please make sure to update your Rust version with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustup update\n")),(0,o.kt)("h3",{id:"creating-a-project"},"Creating a Project"),(0,o.kt)("p",null,"You can create a new sample project very easily with the Casper crate. For example, let's say that I want to create a project named ",(0,o.kt)("strong",{parentName:"p"},"my-project")," for this tutorial (you can choose a different name if you wish), then I can simply run the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo casper my-project\n")),(0,o.kt)("p",null,"If you look inside the newly-created ",(0,o.kt)("em",{parentName:"p"},"my-project")," folder, you will find two crates: ",(0,o.kt)("inlineCode",{parentName:"p"},"contract")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tests"),". This is a complete basic smart contract that saves a value, passed as an argument, on the blockchain. The ",(0,o.kt)("inlineCode",{parentName:"p"},"tests")," crate provides a runtime environment of the Casper virtual machine, and a basic smart contract test."),(0,o.kt)("h3",{id:"compiling-to-wasm"},"Compiling to Wasm"),(0,o.kt)("p",null,"The Casper blockchain uses WebAssembly (Wasm) in its runtime environment. Compilation targets for Wasm are available for Rust, giving developers access to all the Rust ecosystem tools when developing smart contracts."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Note: Wasm allows for the use of other languages, including but not limited to: C/C++, C#, Go, Julia, Lobster and ZIG.")),(0,o.kt)("p",null,"To compile the smart contract into Wasm, go into the ",(0,o.kt)("em",{parentName:"p"},"my-project")," folder, and run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-project\nmake prepare\nmake build-contract\n")),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("em",{parentName:"p"},"contract")," folder, you will now see a ",(0,o.kt)("em",{parentName:"p"},"target")," folder that contains the compiled smart contract named ",(0,o.kt)("em",{parentName:"p"},"contract.wasm")," at ",(0,o.kt)("inlineCode",{parentName:"p"},"my-project/contract/target/wasm32-unknown-unknown/release/contract.wasm"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Linting")),(0,o.kt)("p",null,"Casper contracts support Rust tooling such as ",(0,o.kt)("inlineCode",{parentName:"p"},"clippy")," for linting contracts. Feel free to use them! You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"make check-lint")," command for linting your contract. Run this command inside the ",(0,o.kt)("em",{parentName:"p"},"my-project")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make check-lint\n")),(0,o.kt)("h3",{id:"test-the-contract"},"Test the Contract"),(0,o.kt)("p",null,"In addition to creating the contract, the Casper crate also automatically created sample tests in the ",(0,o.kt)("em",{parentName:"p"},"my-project/tests")," folder."),(0,o.kt)("p",null,"The Casper local environment provides a virtual machine against which you can run your contract for testing. When you run the test crate, it will automatically build the smart contract in release mode and then run a series of tests against it in the Casper runtime environment. The custom build script is named ",(0,o.kt)("em",{parentName:"p"},"build.rs")," if you are interested in looking more into it."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Since the test script automatically builds the contract, during development you only need to run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"make test")," without the need for ",(0,o.kt)("inlineCode",{parentName:"p"},"make build-contract"),"."))),(0,o.kt)("p",null,"A successful test run indicates that your smart contract environment is set up correctly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make test\n")),(0,o.kt)("p",null,"After the compilation finishes, the test should run and you should see output similar to this message in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"running 2 tests\ntest tests::should_error_on_missing_runtime_arg ... ok\ntest tests::should_store_hello_world ... ok\n\ntest result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.09s\n")),(0,o.kt)("p",null,"As a brief example, open up ",(0,o.kt)("em",{parentName:"p"},"my-project/contract/src/main.rs")," in your editor, modify the ",(0,o.kt)("em",{parentName:"p"},"KEY_NAME")," value in the contract, and then rerun the ",(0,o.kt)("inlineCode",{parentName:"p"},"make test")," command. You should observe that the smart contract recompiles and the test fails now."),(0,o.kt)("h3",{id:"installing-the-casper-client"},"Installing the Casper Client"),(0,o.kt)("p",null,"We also provide a ",(0,o.kt)("a",{parentName:"p",href:"/developers/prerequisites#the-casper-command-line-client"},"Casper command-line client"),", a Rust CLI tool that can help you transmit deploys and install code on-chain."),(0,o.kt)("h3",{id:"setting-up-an-ide"},"Setting up an IDE"),(0,o.kt)("p",null,"There are many IDEs available for Rust development. The most popular IDEs for Rust are the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Visual Studio Code"),(0,o.kt)("li",{parentName:"ul"},"CLion"),(0,o.kt)("li",{parentName:"ul"},"IntelliJ Idea"),(0,o.kt)("li",{parentName:"ul"},"Vim")),(0,o.kt)("p",null,"You can use whatever IDE you feel the most comfortable using. In all the exercises and tutorials, we will be using Visual Studio Code as it is the most popular one and has a lot of additional extensions, which might prove useful during the development process. The easiest way of installing the VSC is to get it from the ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"official site"),":"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:(0,i.Z)("/image/introduction/download-vscode.png"),alt:"download-vscode",width:"400"})),(0,o.kt)("p",null,"We advise installing the following extensions to support the development process:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Better TOML \u2013 support for formatting the TOML files"),(0,o.kt)("li",{parentName:"ul"},"CodeLLDB \u2013 the Debug Extension \u2013 without it, it is impossible to debug the RUST Code from the IDE"),(0,o.kt)("li",{parentName:"ul"},"crates \u2013 will help managing the crates"),(0,o.kt)("li",{parentName:"ul"},"Error Lens \u2013 enhances the experience during programming and highlights the syntax errors to be more prominent and easily identifiable"),(0,o.kt)("li",{parentName:"ul"},"rust-analyzer \u2013 official supported Rust Language extension")),(0,o.kt)("p",null,"During the exercises and tutorials, ways to leverage the extensions will be briefly described."),(0,o.kt)("h3",{id:"creating-an-account"},"Creating an Account"),(0,o.kt)("p",null,"To interact with a Casper network and install code on-chain, you will need to ",(0,o.kt)("a",{parentName:"p",href:"/developers/prerequisites#setting-up-an-account"},"create a Casper Account")," with a public and secret key pair."),(0,o.kt)("h2",{id:"video-walkthrough"},"Video Walkthrough"),(0,o.kt)("p",null,"The following video tutorial complements this guide. You can also consult the ",(0,o.kt)("a",{parentName:"p",href:"/faq/faq-developer"},"FAQ page")," for more details."),(0,o.kt)("p",{align:"center"},(0,o.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=TRmmiFBwPr0&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=2",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("h2",{id:"rust-resources"},"Rust Resources"),(0,o.kt)("p",null,"These Rust resources are excellent and we highly recommend them:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/foreword.html"},"https://doc.rust-lang.org/book/foreword.html")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://rustwasm.github.io/docs/book/"},"https://rustwasm.github.io/docs/book/")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/stable/rust-by-example"},"https://doc.rust-lang.org/stable/rust-by-example"))))}h.isMDXComponent=!0}}]);