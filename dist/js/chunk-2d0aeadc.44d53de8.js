(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aeadc"],{"0aa6":function(e,a,t){"use strict";t.r(a);var n=t("7a23");const o={class:"page-wrap"},c={class:"header-section has-header-main bg-pattern-3"},r={class:"user-panel-section section-space"},s={class:"container"},i={class:"row"};function l(e,a,t,l,b,d){const u=Object(n["resolveComponent"])("HeaderDashboard"),m=Object(n["resolveComponent"])("AuthorHero"),h=Object(n["resolveComponent"])("UserSidebar"),v=Object(n["resolveComponent"])("PurchasesSaleSection"),D=Object(n["resolveComponent"])("Footer");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createElementVNode"])("header",c,[Object(n["createVNode"])(u),Object(n["createVNode"])(m,{avatarSize:"avatar-3",coverimg:b.SectionData.authorPersonalData.coverImg,img:b.SectionData.authorPersonalData.img,title:b.SectionData.authorPersonalData.title,username:b.SectionData.authorPersonalData.userName,btntext:b.SectionData.authorPersonalData.btnText,btnlink:b.SectionData.authorPersonalData.btnLink},null,8,["coverimg","img","title","username","btntext","btnlink"])]),Object(n["createElementVNode"])("section",r,[Object(n["createElementVNode"])("div",s,[Object(n["createElementVNode"])("div",i,[Object(n["createVNode"])(h,{title:b.SectionData.salePurchaseSidebarData.title,lists:b.SectionData.salePurchaseSidebarData.navList,navs:b.SectionData.purchaseAndSaleTabNavMobile},null,8,["title","lists","navs"]),Object(n["createVNode"])(v)])])]),Object(n["createVNode"])(D,{classname:"bg-dark on-dark"})])}var b=t("07a4"),d={name:"PurchasesSales",data(){return{SectionData:b["a"]}}},u=t("6b0d"),m=t.n(u);const h=m()(d,[["render",l]]);a["default"]=h}}]);