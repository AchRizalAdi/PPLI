(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21ad49"],{bcd6:function(e,t,c){"use strict";c.r(t);var a=c("7a23");const n={class:"page-wrap"},l={class:"header-section has-header-main bg-pattern-3"},o={class:"user-panel-section section-space"},r={class:"container"},i={class:"row"},s={class:"col-lg-3"},d=Object(a["createStaticVNode"])('<div class="sidebar-head d-flex flex-wrap align-items-center justify-content-between"><h3 class="sidebar-head-title">Kegiatan</h3><div class="sidebar-head-action d-flex align-items-center"><div class="sidebar-drop dropdown"><a class="icon-btn menu-toggler-user-open" href="#"><em class="ni ni-menu"></em></a></div></div></div>',1),b={class:"sidebar sidebar-user-mobile"},m=Object(a["createElementVNode"])("a",{href:"#",class:"icon-btn menu-toggler-user-close"},[Object(a["createElementVNode"])("em",{class:"ni ni-cross"})],-1),j={class:"sidebar-widget"},O={class:"user-nav"},u=Object(a["createElementVNode"])("em",{class:"ni ni-home me-2"},null,-1),N=Object(a["createTextVNode"])("Home"),V=Object(a["createElementVNode"])("em",{class:"ni ni-share me-2"},null,-1),h=Object(a["createTextVNode"])("Pengaturan"),g=Object(a["createElementVNode"])("em",{class:"ni ni-user me-2"},null,-1),k=Object(a["createTextVNode"])("Register"),E=Object(a["createElementVNode"])("em",{class:"ni ni-users me-2"},null,-1),v=Object(a["createTextVNode"])("Member"),p=Object(a["createElementVNode"])("em",{class:"ni ni-user-check me-2"},null,-1),f=Object(a["createTextVNode"])("Mitra"),x=Object(a["createElementVNode"])("em",{class:"ni ni-wallet-saving me-2"},null,-1),w=Object(a["createTextVNode"])("iuran"),C=Object(a["createElementVNode"])("em",{class:"ni ni-swap-alt me-2"},null,-1),T=Object(a["createTextVNode"])("Transaksi"),B=Object(a["createElementVNode"])("em",{class:"ni ni-user-round me-2"},null,-1),_=Object(a["createTextVNode"])("Contacts"),y={class:"active"},P=Object(a["createElementVNode"])("em",{class:"ni ni-calendar me-2"},null,-1),S=Object(a["createTextVNode"])("Kegiatan"),L=Object(a["createElementVNode"])("em",{class:"ni ni-tags me-2"},null,-1),D=Object(a["createTextVNode"])("Pengumuman");function J(e,t,c,J,K,q){const H=Object(a["resolveComponent"])("HeaderDashboard"),M=Object(a["resolveComponent"])("router-link"),F=Object(a["resolveComponent"])("KegiatanSection"),I=Object(a["resolveComponent"])("Footer");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,[Object(a["createElementVNode"])("header",l,[Object(a["createVNode"])(H)]),Object(a["createElementVNode"])("section",o,[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("div",s,[d,Object(a["createElementVNode"])("div",b,[m,Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("ul",O,[Object(a["createElementVNode"])("li",null,[q.checkPrivilege("home")?(Object(a["openBlock"])(),Object(a["createBlock"])(M,{key:0,to:"homeadmin"},{default:Object(a["withCtx"])(()=>[u,N]),_:1})):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("li",null,[q.checkPrivilege("pengaturan")?(Object(a["openBlock"])(),Object(a["createBlock"])(M,{key:0,to:"pengaturan"},{default:Object(a["withCtx"])(()=>[V,h]),_:1})):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("li",null,[q.checkPrivilege("register-index")?(Object(a["openBlock"])(),Object(a["createBlock"])(M,{key:0,to:"offers"},{default:Object(a["withCtx"])(()=>[g,k]),_:1})):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(M,{to:"member"},{default:Object(a["withCtx"])(()=>[E,v]),_:1})]),Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(M,{to:"daftar-mitra"},{default:Object(a["withCtx"])(()=>[p,f]),_:1})]),Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(M,{to:"iuran"},{default:Object(a["withCtx"])(()=>[x,w]),_:1})]),Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(M,{to:"transaksi"},{default:Object(a["withCtx"])(()=>[C,T]),_:1})]),Object(a["createElementVNode"])("li",null,[q.checkPrivilege("kontak-index")?(Object(a["openBlock"])(),Object(a["createBlock"])(M,{key:0,to:"transactions"},{default:Object(a["withCtx"])(()=>[B,_]),_:1})):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("li",y,[Object(a["createVNode"])(M,{to:"kegiatan"},{default:Object(a["withCtx"])(()=>[P,S]),_:1})]),Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(M,{to:"pengumuman"},{default:Object(a["withCtx"])(()=>[L,D]),_:1})])])])])]),Object(a["createVNode"])(F,{class:"mt-4 mt-lg-0"})])])]),Object(a["createVNode"])(I,{classname:"bg-dark on-dark"})])}var K=c("07a4"),q={name:"kegiatan",data(){return{SectionData:K["a"]}},methods:{checkPrivilege(e){const t=localStorage.getItem("permission");let c=!1;return JSON.parse(t).forEach(t=>{t===e&&(c=!0)}),c}},mounted(){var e=document.querySelector(".menu-toggler-user-open"),t=document.querySelector(".sidebar-user-mobile");function c(){e&&e.addEventListener("click",(function(e){e.preventDefault(),t.classList.add("active")}))}c(),t.addEventListener("click",(function(){this.classList.remove("active")}))}},H=c("6b0d"),M=c.n(H);const F=M()(q,[["render",J]]);t["default"]=F}}]);