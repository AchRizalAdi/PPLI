(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab4e7"],{"155b":function(e,t,c){"use strict";c.r(t);var a=c("7a23");const n={class:"page-wrap"},l={class:"header-section has-header-main bg-pattern-3"},r={class:"user-panel-section section-space"},o={class:"container"},i={class:"row"},s={class:"col-lg-3"},d=Object(a["createStaticVNode"])('<div class="sidebar-head d-flex flex-wrap align-items-center justify-content-between"><h3 class="sidebar-head-title">Kemitraan</h3><div class="sidebar-head-action d-flex align-items-center"><div class="sidebar-drop dropdown"><a class="icon-btn menu-toggler-user-open" href="#"><em class="ni ni-menu"></em></a></div></div></div>',1),b={class:"sidebar sidebar-user-mobile"},m=Object(a["createElementVNode"])("a",{href:"#",class:"icon-btn menu-toggler-user-close"},[Object(a["createElementVNode"])("em",{class:"ni ni-cross"})],-1),j={class:"sidebar-widget"},O={class:"user-nav"},u=Object(a["createElementVNode"])("em",{class:"ni ni-home me-2"},null,-1),N=Object(a["createTextVNode"])("Home"),V=Object(a["createElementVNode"])("em",{class:"ni ni-share me-2"},null,-1),h=Object(a["createTextVNode"])("Pengaturan"),v=Object(a["createElementVNode"])("em",{class:"ni ni-user me-2"},null,-1),E=Object(a["createTextVNode"])("Register"),k=Object(a["createElementVNode"])("em",{class:"ni ni-users me-2"},null,-1),g=Object(a["createTextVNode"])("Member"),p={class:"active"},f=Object(a["createElementVNode"])("em",{class:"ni ni-user-check me-2"},null,-1),x=Object(a["createTextVNode"])("Mitra"),w=Object(a["createElementVNode"])("em",{class:"ni ni-wallet-saving me-2"},null,-1),C=Object(a["createTextVNode"])("iuran"),T=Object(a["createElementVNode"])("em",{class:"ni ni-swap-alt me-2"},null,-1),B=Object(a["createTextVNode"])("Transaksi"),_=Object(a["createElementVNode"])("em",{class:"ni ni-user-round me-2"},null,-1),P=Object(a["createTextVNode"])("Contacts"),y=Object(a["createElementVNode"])("em",{class:"ni ni-calendar me-2"},null,-1),S=Object(a["createTextVNode"])("Kegiatan"),D=Object(a["createElementVNode"])("em",{class:"ni ni-tags me-2"},null,-1),L=Object(a["createTextVNode"])("Pengumuman");function J(e,t,c,J,M,q){const H=Object(a["resolveComponent"])("HeaderDashboard"),K=Object(a["resolveComponent"])("router-link"),F=Object(a["resolveComponent"])("DaftarMitraSection"),I=Object(a["resolveComponent"])("Footer");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,[Object(a["createElementVNode"])("header",l,[Object(a["createVNode"])(H)]),Object(a["createElementVNode"])("section",r,[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("div",s,[d,Object(a["createElementVNode"])("div",b,[m,Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("ul",O,[Object(a["createElementVNode"])("li",null,[q.checkPrivilege("home")?(Object(a["openBlock"])(),Object(a["createBlock"])(K,{key:0,to:"homeadmin"},{default:Object(a["withCtx"])(()=>[u,N]),_:1})):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("li",null,[q.checkPrivilege("pengaturan")?(Object(a["openBlock"])(),Object(a["createBlock"])(K,{key:0,to:"pengaturan"},{default:Object(a["withCtx"])(()=>[V,h]),_:1})):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("li",null,[q.checkPrivilege("register-index")?(Object(a["openBlock"])(),Object(a["createBlock"])(K,{key:0,to:"offers"},{default:Object(a["withCtx"])(()=>[v,E]),_:1})):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(K,{to:"member"},{default:Object(a["withCtx"])(()=>[k,g]),_:1})]),Object(a["createElementVNode"])("li",p,[Object(a["createVNode"])(K,{to:"daftar-mitra"},{default:Object(a["withCtx"])(()=>[f,x]),_:1})]),Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(K,{to:"iuran"},{default:Object(a["withCtx"])(()=>[w,C]),_:1})]),Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(K,{to:"transaksi"},{default:Object(a["withCtx"])(()=>[T,B]),_:1})]),Object(a["createElementVNode"])("li",null,[q.checkPrivilege("kontak-index")?(Object(a["openBlock"])(),Object(a["createBlock"])(K,{key:0,to:"transactions"},{default:Object(a["withCtx"])(()=>[_,P]),_:1})):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(K,{to:"kegiatan"},{default:Object(a["withCtx"])(()=>[y,S]),_:1})]),Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(K,{to:"pengumuman"},{default:Object(a["withCtx"])(()=>[D,L]),_:1})])])])])]),Object(a["createVNode"])(F)])])]),Object(a["createVNode"])(I,{classname:"bg-dark on-dark"})])}var M=c("07a4"),q={name:"Prov",data(){return{SectionData:M["a"]}},methods:{checkPrivilege(e){const t=localStorage.getItem("permission");let c=!1;return JSON.parse(t).forEach(t=>{t===e&&(c=!0)}),c}},mounted(){var e=document.querySelector(".menu-toggler-user-open"),t=document.querySelector(".sidebar-user-mobile");function c(){e&&e.addEventListener("click",(function(e){e.preventDefault(),t.classList.add("active")}))}c(),t.addEventListener("click",(function(){this.classList.remove("active")}))}},H=c("6b0d"),K=c.n(H);const F=K()(q,[["render",J]]);t["default"]=F}}]);