(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-006faecb"],{"49cc":function(e,t,c){"use strict";var a=c("7a23");const r={class:"container"},n={class:"hero-content text-center py-0"},o={"aria-label":"breadcrumb"},s={class:"breadcrumb breadcrumb-s1 justify-content-center mt-3 mb-0"},l={class:"breadcrumb-item"},b=Object(a["createTextVNode"])("Kontak");function i(e,t,c,i,d,m){const j=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:Object(a["normalizeClass"])(["hero-wrap sub-header",c.classnameTwo])},[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("h1",{class:Object(a["normalizeClass"])(c.classname)},Object(a["toDisplayString"])(c.title),3),Object(a["createElementVNode"])("nav",o,[Object(a["createElementVNode"])("ol",s,[Object(a["createElementVNode"])("li",l,[Object(a["createVNode"])(j,{to:"/transactions"},{default:Object(a["withCtx"])(()=>[b]),_:1})]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(c.lists,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{class:"breadcrumb-item",key:t},Object(a["toDisplayString"])(e.title),1))),128))])])])])],2)}var d={name:"HeroFour",props:["title","lists","classname","classnameTwo"]},m=c("6b0d"),j=c.n(m);const O=j()(d,[["render",i]]);t["a"]=O},"816d":function(e,t,c){"use strict";c.r(t);var a=c("7a23");const r={class:"page-wrap"},n={class:"header-section has-header-main bg-pattern-3"},o={class:"user-panel-section"},s={class:"container"},l={class:"row"};function b(e,t,c,b,i,d){const m=Object(a["resolveComponent"])("HeaderDashboard"),j=Object(a["resolveComponent"])("HeroFour"),O=Object(a["resolveComponent"])("VirtualCardSection"),u=Object(a["resolveComponent"])("Footer");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",r,[Object(a["createElementVNode"])("header",n,[Object(a["createVNode"])(m),Object(a["createVNode"])(j,{classname:"hero-title",title:i.SectionData.breadcrumbData.breadcrumbList.title,lists:i.SectionData.breadcrumbData.breadcrumbList.navList},null,8,["title","lists"])]),Object(a["createElementVNode"])("section",o,[Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("div",l,[Object(a["createVNode"])(O,{class:"mt-lg-0"})])])]),Object(a["createVNode"])(u,{classname:"bg-dark on-dark"})])}var i=c("07a4"),d=c("49cc"),m={name:"Transactions",components:{HeroFour:d["a"]},data(){return{SectionData:i["a"]}}},j=c("6b0d"),O=c.n(j);const u=O()(m,[["render",b]]);t["default"]=u}}]);