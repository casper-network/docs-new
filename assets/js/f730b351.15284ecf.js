"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3815],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return u}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return a?r.createElement(f,o(o({ref:t},h),{},{components:a})):r.createElement(f,o({ref:t},h))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1626:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=a(3117),n=a(102),i=(a(7294),a(3905)),o=["components"],s={id:"welcome",title:"Welcome",slug:"/",tags:["Must read","Legal","Introduction","CasperLabs","CSPR"]},c="Welcome to the Casper Network",l={unversionedId:"welcome",id:"welcome",title:"Welcome",description:"This article provides an overview of the Casper project.",source:"@site/source/docs/casper/index.md",sourceDirName:".",slug:"/",permalink:"/",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/index.md",tags:[{label:"Must read",permalink:"/tags/must-read"},{label:"Legal",permalink:"/tags/legal"},{label:"Introduction",permalink:"/tags/introduction"},{label:"CasperLabs",permalink:"/tags/casper-labs"},{label:"CSPR",permalink:"/tags/cspr"}],version:"current",lastUpdatedAt:1677674474,formattedLastUpdatedAt:"3/1/2023",frontMatter:{id:"welcome",title:"Welcome",slug:"/",tags:["Must read","Legal","Introduction","CasperLabs","CSPR"]}},h={},p=[{value:"What is Casper?",id:"what-is-casper",level:2},{value:"How does Casper work?",id:"how-does-casper-work",level:2},{value:"Where can I learn more?",id:"where-can-i-learn-more",level:2},{value:"Disclaimer",id:"disclaimer",level:4},{value:"Preliminary Nature of this Whitepaper",id:"preliminary-nature-of-this-whitepaper",level:4},{value:"Forward-Looking Statements",id:"forward-looking-statements",level:4},{value:"Risk Factors",id:"risk-factors",level:4}],d={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"welcome-to-the-casper-network"},"Welcome to the Casper Network"),(0,i.kt)("p",null,"This article provides an overview of the Casper project."),(0,i.kt)("h2",{id:"what-is-casper"},"What is Casper?"),(0,i.kt)("p",null,"Casper is a new ",(0,i.kt)("a",{parentName:"p",href:"/concepts/glossary/T#turing-complete-blockchain"},"Turing-complete")," smart-contracting platform, backed by a Proof-of-Stake (PoS) consensus algorithm and WebAssembly (Wasm). The network is a ",(0,i.kt)("a",{parentName:"p",href:"/concepts/glossary/P#permissionless"},"permissionless"),", decentralized, public blockchain."),(0,i.kt)("p",null,"The network's consensus protocol is called ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2101.02159.pdf"},"Highway"),", and it has several benefits over classic Byzantine Fault Tolerant (BFT) consensus protocols. First, Highway allows networks to reach higher thresholds of ",(0,i.kt)("em",{parentName:"p"},"finality"),", meaning that more blocks are finalized, and validators agree to add them to the blockchain. Second, the protocol achieves flexibility by expressing block finality in ways not possible in BFT models. This protocol is built on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cbc-casper/cbc-casper-paper"},"correct-by-construction (CBC) Casper")," research."),(0,i.kt)("p",null,"Additionally, the Casper Network is optimized for enterprise and developer adoption. While leveraging blockchain technology, the network seeks to accelerate business operations via unique features like predictable network fees, upgradeable contracts, on-chain governance, privacy flexibility, and developer-friendly languages. Casper's ",(0,i.kt)("a",{parentName:"p",href:"/resources/build-on-casper/introduction"},"core features and strengths")," enable developers and enterprises to reap the benefits of blockchain technology."),(0,i.kt)("p",null,"Casper also solves the scalability trilemma. Notably, the network is optimized for security, decentralization, and high throughput. All this is achieved while evolving to provide leading solutions for open-source projects and enterprises."),(0,i.kt)("h2",{id:"how-does-casper-work"},"How does Casper work?"),(0,i.kt)("p",null,"Casper relies on a group of validators to verify transactions and uphold the network. Unlike Proof-of-Work networks, which need to centralize validators for economies of scale, Casper allows for the geographical decentralization of validators. Casper validators verify transactions based on staked tokens and receive CSPR rewards for participating in the PoS consensus mechanism. CSPR is the native token on the Casper Network."),(0,i.kt)("h2",{id:"where-can-i-learn-more"},"Where can I learn more?"),(0,i.kt)("p",null,"Follow the links below to learn more about the Casper Network."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Category"),(0,i.kt)("th",{parentName:"tr",align:null},"Content"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/developers"},"Developers")),(0,i.kt)("td",{parentName:"tr",align:null},"Get started with smart contract development on the Casper blockchain in Rust")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/operators"},"Node Operators")),(0,i.kt)("td",{parentName:"tr",align:null},"Run node infrastructure on the Casper Network")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/design"},"Design")),(0,i.kt)("td",{parentName:"tr",align:null},"Understand the architecture of the Casper Network, including network communication, execution semantics, account management, block structure, global state, serialization, unforgeable references, and tokens")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/economics"},"Economics")),(0,i.kt)("td",{parentName:"tr",align:null},"Conceptualize Casper's economic activity by understanding consensus, runtime, ecosystem, and the macroeconomy")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/staking"},"Staking Guide")),(0,i.kt)("td",{parentName:"tr",align:null},"Participate in the protocol by staking CSPR tokens with a validator in the Casper Network")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/glossary"},"Glossary")),(0,i.kt)("td",{parentName:"tr",align:null},"Explore key definitions in the context of the Casper Network")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/faq"},"FAQ")),(0,i.kt)("td",{parentName:"tr",align:null},"Find answers regarding the Casper Network, CasperLabs, and the CSPR token sale Changelog Review past technical releases and changelogs for the Casper Network")))),(0,i.kt)("h4",{id:"disclaimer"},"Disclaimer"),(0,i.kt)("p",null,"By accepting this CasperLabs Tech Spec (this \u201cWhitepaper\u201d), each recipient hereof acknowledges and agrees that is not authorised to, and may not, forward or deliver this Whitepaper, electronically or otherwise, to any other person or reproduce this Whitepaper in any manner whatsoever. Any forwarding, distribution or reproduction of this Whitepaper in whole or in part is unauthorised. Failure to comply with this directive may result in a violation of applicable laws of any affected or involved jurisdiction."),(0,i.kt)("p",null,"Nothing in this Whitepaper constitutes an offer to sell, or a solicitation to purchase, the tokens native to the Casper blockchain (\u201cCSPR\u201d). In any event, were this Whitepaper to be deemed to be such an offer or solicitation, no such offer or solicitation is intended or conveyed by this Whitepaper in any jurisdiction where it is unlawful to do so, where such an offer or solicitation would require a license or registration, or where such an offer or solicitation is subject to restrictions. In particular, any CSPR to be issued have not been, and, as of the date of issuance of this Whitepaper, are not intended to be, registered under the securities or similar laws of any jurisdiction, whether or not such jurisdiction considers the CSPR to be a security or similar instrument, and specifically, have not been, and, as of the date of issuance of this Whitepaper are not intended to be, registered under the U.S. Securities Act of 1933, as amended, or the securities laws of any state of the United States of America or any other jurisdiction and may not be offered or sold in any jurisdiction where to do so would constitute a violation of the relevant laws of such jurisdiction."),(0,i.kt)("p",null,"This Whitepaper constitutes neither a prospectus according to Art. 652a of the Swiss Code of Obligations (the \u201cCO\u201d) or Art. 1156 CO nor a prospectus or basic information sheet according to the Swiss Financial Services Act (the \u201cFinSA\u201d) nor a listing prospectus nor a simplified prospectus according to Art. 5 of the Swiss Collective Investment Schemes Act (the \u201cCISA\u201d) nor any other prospectus according to CISA nor a prospectus under any other applicable laws."),(0,i.kt)("p",null,"The CSPR are not expected to be instruments in an offer and sale which are subject to the jurisdiction or oversight of the U.S. Securities Exchange Commission (the \u201cSEC\u201d). In any event, however, CSPR have not been approved or disapproved by, and are not expected to be approved or disapproved by, the SEC nor by the securities regulatory authority of any state of the United States of America or of any other jurisdiction, and neither the SEC nor any such securities regulatory authority has passed, or is expected to pass, upon the accuracy or adequacy of this Whitepaper."),(0,i.kt)("p",null,"The distribution of this Whitepaper and the purchase, holding, and/or disposal of CSPR may be restricted by law in certain jurisdictions. Persons reading this Whitepaper should inform themselves as to (i) the possible tax consequences, (ii) the legal and regulatory requirements, and (iii) any foreign exchange restrictions or exchange control requirements, which they might encounter under the laws of the countries of their citizenship, residence or domi-cile and which might be relevant to the purchase, holding or disposal of CSPR. No action has been taken to authorise the distribution of this Whitepaper in any jurisdiction in which such authorisation might be required."),(0,i.kt)("p",null,"No action has been or is intended to be taken by CasperLabs Networks AG and/or any of its affiliates in any jurisdiction that would or is intended to, permit a public sale or offering of any CSPR, or possession or distribution of this Whitepaper (in preliminary, proof or final form) or any other sale, offering or publicity material relating to the CSPR, in any country or jurisdiction where action for that purpose is required. Each recipient of this Whitepaper is reminded that it has received this Whitepaper on the basis that it is a person into whose possession this Whitepaper may be lawfully delivered in accordance with the laws of the jurisdiction in which it is located and/or bound and it may not nor is it authorised to deliver this document, electronically or otherwise, to any other person. If the recipient receives this document by e-mail, then its use of this e-mail is at its own risk and it is the recipient\u2019s responsibility to take precautions to ensure that such e-mail is free from viruses and other items of a destructive nature."),(0,i.kt)("h4",{id:"preliminary-nature-of-this-whitepaper"},"Preliminary Nature of this Whitepaper"),(0,i.kt)("p",null,"This Whitepaper is a draft and the information set out herein is of a preliminary nature. Consequently, neither CasperLabs Networks AG nor any of its affiliates assumes any responsibility that the information set out herein is final or correct and each of the foregoing disclaims, to the fullest extent permitted by applicable law, any and all liability whether arising in tort, contract or otherwise in respect of this Whitepaper. Neither this Whitepaper nor anything contained herein shall form the basis of or be relied on in connection with or act as an inducement to enter into any contract or commitment whatsoever. Recipients should note that the final structuring of CSPR and the Casper blockchain is subject to ongoing technical, legal, regulatory and tax considerations and each is, therefore, subject to material changes. In particular, neither the applicability nor the non-applicability of Swiss financial market regulations on the CSPR sale has not been confirmed by the Swiss Financial Market Supervisory Authority (\u201cFINMA\u201d). CasperLabs Networks AG and all its affiliates reserve the right to not assist in the completion of the software underlying CSPR and the CasperLabs blockchain, to not participate in the issuance or creation of CSPR or to change the structure of CSPR and/or the Casper blockchain for any reason, each at its sole discretion."),(0,i.kt)("h4",{id:"forward-looking-statements"},"Forward-Looking Statements"),(0,i.kt)("p",null,"This Whitepaper includes \u201cforward-looking statements\u201d, which are all statements other than statements of historical facts included in this Whitepaper. Words like \u201cbelieve\u201d, \u201canticipate\u201d, \u201cexpect\u201d, \u201cproject\u201d, \u201cestimate\u201d, \u201cpredict\u201d, \u201cintend\u201d, \u201ctarget\u201d, \u201cassume\u201d, \u201cmay\u201d, \u201cmight\u201d, \u201ccould\u201d, \u201cshould\u201d, \u201cwill\u201d and similar expressions are intended to identify such forward-looking statements. Such forward-looking statements involve known and unknown risks, uncertainties and other factors, which may cause the actual functionality, performance or features of the Casper blockchain and/or CSPR to be materially different from any future functionality, performance or features expressed or implied by such forward-looking statements. Such forward-looking statements are based on numerous assumptions regarding the CasperLabs Networks AG\u2019s and/or any of its affiliates\u2019 present and future expectations regarding the development of the Casper blockchain and the associated software."),(0,i.kt)("p",null,"These forward-looking statements speak only as of the date of this Whitepaper. CasperLabs Networks AG and its affiliates expressly disclaim any obligation or undertaking to release any updates of or revisions to any forward-looking statement contained herein to reflect any change in CasperLabs Networks AG\u2019s and/or any of its affiliates\u2019 expectations with regard thereto or any change in events, conditions or circumstances on which any such statement is based."),(0,i.kt)("h4",{id:"risk-factors"},"Risk Factors"),(0,i.kt)("p",null,"Furthermore, by accepting this Whitepaper, the recipient of hereof (the \u201cRecipient\u201d) acknowledges and agrees that it understands the inherent risks associated with blockchain and distributed ledger technology, tokens and cryptocurrencies in general and the CSPR in particular, including, but not limited to, those outlined hereinafter."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Risks associated with CasperLabs Networks AG\u2019s experience"),": the Recipient is aware that CasperLabs Networks AG and its affiliates constitute a start-up group of companies. Inability of such companies to manage their affairs, including any failure to attract and retain appropriate personnel, could affect the completion and functionality of the Casper blockchain.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Risks associated with CSPR relative value"),": the Recipient understands and accepts that a purchaser of CSPR may experience financial losses relative to other assets, including fiat currency and/or any other cryptocurrency (including any cryptocurrency used to acquire CSPR). Potential purchasers and holders of CSPR are urged to carefully review this Whitepaper and assess and understand the risk factors relating to the CSPR and the Casper blockchain before acquiring CSPR (when and if CSPR become available).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"*","*","Risks associated with (intellectual) property rights: the Recipient understands and accepts that, due to a lack of originality of the software and to the immaterial character of the CSPR, there may be no title of ownership in and to the intellectual property rights relating to CSPR.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Risks associated with blockchain"),": the Recipient understands and accepts that the smart contract, the underlying software application and software platform (i.e. the Casper blockchain) is still in an early development stage and unproven. The Recipient understands and accepts that there is no warranty that the process for creating the CSPR and/or the Casper blockchain will be uninterrupted or error-free and acknowledges that there is an inherent risk that the software could contain weaknesses, vulnerabilities or bugs causing, inter alia, the complete loss of CSPR. The Recipient understands and accepts that, after launch of the Casper blockchain, the smart contract and/or underlying protocols and/or the Casper blockchain and/or any other software involved may either delay and/or not execute a contribution due to the overall contribution volume, mining attacks and/or similar events.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Risk of weaknesses in the field of cryptography"),": the Recipient understands and accepts that cryptography is a technology that evolves relatively fast over time. At the same time, methods and tools to decrypt, access and/or manipulate data stored on a distributed ledger or blockchain are highly likely to progress in parallel and in addition, new technological developments such as quantum computers may pose as of now unpredictable risks to the CSPR and the Casper blockchain that could increase the risk of theft or loss of CSPR (if and when CSPR are created and/or issued).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Regulatory risks"),": the Recipient understands and accepts that it is possible that certain jurisdictions will apply existing regulations on, or introduce new regulations addressing, distributed ledger technology and/or blockchain technology based applications, which may be contrary to the current setup of the smart contract or the CasperLabs Networks AG project and which may, inter alia, result in substantial modifications of the smart contract and/or the CasperLabs Networks AG project, including its termination and the loss of the CSPR, if and when created and/or issued, or entitlements to receive CSPR, for the Recipient.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Risks associated with abandonment / lack of success"),": the Recipient understands and accepts that the creation of the CSPR and the development of the Casper blockchain as well as the CasperLabs Networks AG project may be abandoned for a number of reasons, including lack of interest from the public, lack of funding, lack of prospects (e.g. caused by competing projects) and legal, tax or regulatory considerations. The Recipient therefore understands that there is no assurance that, even if the CSPR/CasperLabs blockchain project is partially or fully developed and launched, the Recipient will receive any benefits through the CSPR held by it (if and when created and/or issued).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Risks associated with a loss of private key"),": the Recipient understands and accepts that CSPR, if and when created and/or issued, will only be accessed by using a wallet technically compatible with CSPR and with a combination of the Recipient\u2019s account information (address) and private key, seed or password. The Recipient understands and accepts that if its private key or password gets lost or stolen, the CSPR associated with the Recipient\u2019s account (address) will be unrecoverable and will be permanently lost.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Risks associated with wallets"),": the Recipient understands and accepts that CasperLabs Networks AG or any of its affiliates, employees, partners or advisors are in no way responsible for the wallet to which any CSPR are transferred. The Recipient understands and agrees that it is solely responsible for the access and security of its wallet, for any security breach of its wallet and/or with any loss of CSPR resulting from its wallet service provider, including any termination of the service by the wallet provider and/or bankruptcy of the wallet provider.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Risks associated with theft/hacks"),": the Recipient understands and accepts that the smart contract, the website, the underlying software application and software platform (i.e. the Casper blockchain), during its development and after its launch, may be exposed to attacks by hackers or other individuals that could result in an inability to launch the Casper blockchain or the theft or loss of CSPR. Any such event could also result in the loss of financial and other support of the CasperLabs Networks AG project impacting the ability to develop the CasperLabs Networks AG project and Casper blockchain.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Risks associated with mining attacks"),": the Recipient understands and accepts that, as with other cryptocurrencies and tokens, if and when launched, the Casper blockchain is susceptible to attacks relating to validators. Any successful attack presents a risk to the smart contract, expected proper execution and sequencing of transactions, and expected proper execution and sequencing of contract computations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Risks associated with a lack of consensus"),": the Recipient understands and accepts that the network of validators will be ultimately in control of the genesis block and future blocks and that there is no warranty or assurance that the network of validators will perform their functions and reach proper consensus and allocate the CSPR to the Recipient as proposed by any terms. The Recipient further understands that a majority of the validators could agree at any point to make changes to the software and/or smart contracts and to run the new version of the software and/or smart contracts. Such a scenario could lead to the CSPR losing intrinsic value.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Risks associated with liquidity of CSPR"),": the Recipient understands and accepts that with regard to the CSPR, if and when created and/or issued, no market liquidity may be guaranteed and that the value of CSPR relative to other assets, including fiat currency and/or any other cryptocurrency (including any cryptocurrency used to acquire CSPR) over time may experience extreme volatility or depreciate in full (including to zero) resulting in loss that will be borne exclusively by the Recipient.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Risks associated with forking"),": the Recipient understands and accepts that hard and soft forks as well as similar events may, inter alia, lead to the creation of new or competing tokens to the CSPR, adversely affect the functionality, convertibility or transferability or result in a full or partial loss of units or reduction (including reduction to zero) of value of the Recipient\u2019s CSPR (if and when created and/or issued)."))))}u.isMDXComponent=!0}}]);