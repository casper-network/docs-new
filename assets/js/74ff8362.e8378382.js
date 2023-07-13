"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1132],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6665:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=(n(4996),["components"]),s={},l="Getting Started with Rust",u={unversionedId:"developers/writing-onchain-code/getting-started",id:"developers/writing-onchain-code/getting-started",title:"Getting Started with Rust",description:"This guide covers the basic tools you will need to write your first Casper smart contract. You will also be able to build a sample smart contract and run a few basic tests on it on your local machine.",source:"@site/source/docs/casper/developers/writing-onchain-code/getting-started.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/getting-started",permalink:"/developers/writing-onchain-code/getting-started",draft:!1,editUrl:"https://github.com/casper-network/docs-new/tree/dev-new/source/docs/casper/developers/writing-onchain-code/getting-started.md",tags:[],version:"current",lastUpdatedAt:1689241759,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Introduction",permalink:"/writing-contracts"},next:{title:"Getting Started with AssemblyScript",permalink:"/developers/writing-onchain-code/assembly-script"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing Rust",id:"installing-rust",level:3},{value:"Installing Dependencies",id:"installing-dependencies",level:3},{value:"Development Environment Setup",id:"development-environment-setup",level:2},{value:"Installing the Casper Crates",id:"installing-the-casper-crates",level:3},{value:"Creating a Project",id:"creating-a-project",level:3},{value:"Compiling to Wasm",id:"compiling-to-wasm",level:3},{value:"Test the Contract",id:"test-the-contract",level:3},{value:"Installing the Casper Client",id:"installing-the-casper-client",level:3},{value:"Setting up an IDE",id:"setting-ide",level:3},{value:"Creating an Account",id:"creating-an-account",level:3},{value:"Video Walkthrough",id:"video-walkthrough",level:2},{value:"Rust Resources",id:"rust-resources",level:2}],m={toc:p},d="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-rust"},"Getting Started with Rust"),(0,o.kt)("p",null,"This guide covers the basic tools you will need to write your first Casper smart contract. You will also be able to build a sample smart contract and run a few basic tests on it on your local machine."),(0,o.kt)("p",null,"Casper's blockchain is built upon the Rust programming language and compiles down to WebAssembly. This guide will walk you through the steps to set up your development environment and write your first contract."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h3",{id:"installing-rust"},"Installing Rust"),(0,o.kt)("p",null,"Install the ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org"},"Rust programming language")," if you don't already have it on your computer."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"official Rust guide")," recommends installing Rust by using ",(0,o.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,o.kt)("p",null,"The installation script automatically adds Rust to your system PATH after your next login. To start using Rust right away instead of restarting your terminal, run the following command in your shell to add Rust to your system PATH manually:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source $HOME/.cargo/env\n")),(0,o.kt)("p",null,"You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"brew")," on MacOS or ",(0,o.kt)("inlineCode",{parentName:"p"},"apt")," on Linux to install Rust."),(0,o.kt)("p",null,"Once you finish installing Rust, check your version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustup --version\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rust-nightly")," You will need the latest nightly toolchain to develop smart contracts in Rust. Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/rustup/concepts/channels.html"},"Rust Documentation on Channels")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/rustup/concepts/toolchains.html"},"Rust Documentation on Toolchains")," for further information."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rust-nightly quickstart")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustup toolchain install nightly\nrustup default nightly\n")),(0,o.kt)("p",null,"To check your current version of rust-nightly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustup run nightly rustc --version\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Casper Rust Packages")),(0,o.kt)("p",null,"We publish three crates on ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/"},"crates.io")," to support smart contract development with Rust:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/casper-contract"},"Casper Contract")," - a library supporting communication with the blockchain. This is the main library you will need to write smart contracts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/casper-engine-test-support"},"Casper Test Support")," - a virtual machine against which you can test your smart contracts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/casper-types"},"Casper Types")," - a library with types we use across the Rust ecosystem.")),(0,o.kt)("p",null,"A crate is a compilation unit, which can be compiled into a binary or a library."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"API Documentation for Smart Contracts")),(0,o.kt)("p",null,"Each of the Casper crates comes with API documentation and examples for each function, located at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/releases/search?query=casper"},"https://docs.rs"),". The contract API documentation is specific for a given version. For example, you can find documentation for version ",(0,o.kt)("strong",{parentName:"p"},"0.7.6")," at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/0.7.6"},"https://docs.rs/casper-contract/0.7.6"),"."),(0,o.kt)("h3",{id:"installing-dependencies"},"Installing Dependencies"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. CMake")),(0,o.kt)("p",null,"CMake is a popular build tool that we will utilize, and you may very well have it already installed. If you do, make sure that you have the latest version. If you need to install or upgrade it, follow the steps located here: ",(0,o.kt)("a",{parentName:"p",href:"https://cmake.org/install/"},"https://cmake.org/install/"),". Once installed, check your version as shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cmake --version\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cmake version 3.20.0 (or above)\n\nCMake suite maintained and supported by Kitware (kitware.com/cmake).\n")),(0,o.kt)("h2",{id:"development-environment-setup"},"Development Environment Setup"),(0,o.kt)("h3",{id:"installing-the-casper-crates"},"Installing the Casper Crates"),(0,o.kt)("p",null,"The best and fastest way to set up a Casper Rust project is to use ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo casper"),". Using this will create a simple contract, a runtime environment, and a testing framework with a simple test. ",(0,o.kt)("em",{parentName:"p"},"Cargo")," is a build system and package manager for Rust (much like ",(0,o.kt)("em",{parentName:"p"},"pip")," if you are familiar with Python, or ",(0,o.kt)("em",{parentName:"p"},"npm")," and ",(0,o.kt)("em",{parentName:"p"},"yarn")," for those familiar with Javascript). It is also possible to use this configuration in your CI/CD pipeline."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-casper\n")),(0,o.kt)("p",null,"If you run into any issues with this command and you have not recently installed Rust from scratch, please make sure to update your Rust version with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustup update\n")),(0,o.kt)("h3",{id:"creating-a-project"},"Creating a Project"),(0,o.kt)("p",null,"You can create a new sample project very easily with the Casper crate. For example, let's say that I want to create a project named ",(0,o.kt)("strong",{parentName:"p"},"my-project")," for this tutorial (you can choose a different name if you wish), then I can simply run the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo casper my-project\n")),(0,o.kt)("p",null,"If you look inside the newly-created ",(0,o.kt)("em",{parentName:"p"},"my-project")," folder, you will find two crates: ",(0,o.kt)("inlineCode",{parentName:"p"},"contract")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tests"),". This is a complete basic smart contract that saves a value, passed as an argument, on the blockchain. The ",(0,o.kt)("inlineCode",{parentName:"p"},"tests")," crate provides a runtime environment of the Casper virtual machine, and a basic smart contract test."),(0,o.kt)("h3",{id:"compiling-to-wasm"},"Compiling to Wasm"),(0,o.kt)("p",null,"The Casper blockchain uses WebAssembly (Wasm) in its runtime environment. Compilation targets for Wasm are available for Rust, giving developers access to all the Rust ecosystem tools when developing smart contracts."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Note: Wasm allows for the use of other languages, including but not limited to: C/C++, C#, Go, Julia, Lobster and ZIG.")),(0,o.kt)("p",null,"To compile the smart contract into Wasm, go into the ",(0,o.kt)("em",{parentName:"p"},"my-project")," folder, and run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-project\nmake prepare\nmake build-contract\n")),(0,o.kt)("p",null,"You can find the compiled contract on this path: ",(0,o.kt)("inlineCode",{parentName:"p"},"my-project/contract/target/wasm32-unknown-unknown/release/contract.wasm"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Linting")),(0,o.kt)("p",null,"Casper contracts support Rust tooling such as ",(0,o.kt)("inlineCode",{parentName:"p"},"clippy")," for linting contracts. Feel free to use them! You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"make check-lint")," command for linting your contract. Run this command inside the ",(0,o.kt)("em",{parentName:"p"},"my-project")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make check-lint\n")),(0,o.kt)("h3",{id:"test-the-contract"},"Test the Contract"),(0,o.kt)("p",null,"In addition to creating the contract, the Casper crate also automatically created sample tests in the ",(0,o.kt)("em",{parentName:"p"},"my-project/tests")," folder."),(0,o.kt)("p",null,"The Casper local environment provides a virtual machine against which you can run your contract for testing. When you run the test crate, it will automatically build the smart contract in release mode and then run a series of tests against it in the Casper runtime environment. The custom build script is named ",(0,o.kt)("em",{parentName:"p"},"build.rs")," if you are interested in looking more into it."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Since the test script automatically builds the contract, during development you only need to run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"make test")," without the need for ",(0,o.kt)("inlineCode",{parentName:"p"},"make build-contract"),".")),(0,o.kt)("p",null,"A successful test run indicates that your smart contract environment is set up correctly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make test\n")),(0,o.kt)("p",null,"After the compilation finishes, the test should run and you should see output similar to this message in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"running 2 tests\ntest tests::should_error_on_missing_runtime_arg ... ok\ntest tests::should_store_hello_world ... ok\n\ntest result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.09s\n")),(0,o.kt)("p",null,"As a brief example, open up ",(0,o.kt)("em",{parentName:"p"},"my-project/contract/src/main.rs")," in your editor, modify the ",(0,o.kt)("em",{parentName:"p"},"KEY_NAME")," value in the contract, and then rerun the ",(0,o.kt)("inlineCode",{parentName:"p"},"make test")," command. You should observe that the smart contract recompiles and the test fails now."),(0,o.kt)("h3",{id:"installing-the-casper-client"},"Installing the Casper Client"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/developers/prerequisites#the-casper-command-line-client"},"Casper command-line client")," is a Rust CLI tool that can help you send deploys and install code on-chain. It's recommended to install the client as it's used to deploy contracts and session code in other on-chain tutorials."),(0,o.kt)("h3",{id:"setting-ide"},"Setting up an IDE"),(0,o.kt)("p",null,"There are many IDEs available for Rust development. The most popular IDEs for Rust are the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com"},"Visual Studio Code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/clion/"},"CLion")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/idea/"},"IntelliJ Idea")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.vim.org/"},"Vim"))),(0,o.kt)("p",null,"You can use any IDE you wish. This documentation and examples use Visual Studio Code (VSC), a popular IDE with many extensions that might be helpful during development."),(0,o.kt)("p",null,"If you are using VSC, you might find the following extensions useful:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CodeLLDB")," \u2013 An important extension for debugging Rust code"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rust-analyzer")," \u2013 The official Rust language extension"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Better TOML")," \u2013 Support for formatting TOML files"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"crates")," \u2013 An extension to help manage crates"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Error Lens")," \u2013 Enhances the programming experience by highlighting syntax errors")),(0,o.kt)("h3",{id:"creating-an-account"},"Creating an Account"),(0,o.kt)("p",null,"To interact with a Casper network and install code on-chain, you will need to ",(0,o.kt)("a",{parentName:"p",href:"/developers/prerequisites#setting-up-an-account"},"create a Casper Account")," with a public and secret key pair."),(0,o.kt)("h2",{id:"video-walkthrough"},"Video Walkthrough"),(0,o.kt)("p",null,"The following video tutorial complements this guide."),(0,o.kt)("p",{align:"center"},(0,o.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=TRmmiFBwPr0&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=2",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("h2",{id:"rust-resources"},"Rust Resources"),(0,o.kt)("p",null,"These Rust resources are excellent and we highly recommend them:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/foreword.html"},"https://doc.rust-lang.org/book/foreword.html")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://rustwasm.github.io/docs/book/"},"https://rustwasm.github.io/docs/book/")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/stable/rust-by-example"},"https://doc.rust-lang.org/stable/rust-by-example"))))}h.isMDXComponent=!0}}]);