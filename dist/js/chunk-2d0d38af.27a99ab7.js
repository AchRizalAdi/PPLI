(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d38af"],{"5ce0":function(e,t,c){"use strict";c.r(t);var a=c("7a23");const n={class:"page-wrap"},l={class:"header-section has-header-main bg-pattern-3"},o={class:"user-panel-section section-space"},r={class:"container"},i={class:"row"},s={class:"col-lg-3"},d=Object(a["createStaticVNode"])('<div class="sidebar-head d-flex flex-wrap align-items-center justify-content-between"><h3 class="sidebar-head-title">Setting Email</h3><div class="sidebar-head-action d-flex align-items-center"><div class="sidebar-drop dropdown"><a class="icon-btn menu-toggler-user-open" href="#"><em class="ni ni-menu"></em></a></div></div></div>',1),m={class:"sidebar sidebar-user-mobile"},b=Object(a["createElementVNode"])("a",{href:"#",class:"icon-btn menu-toggler-user-close"},[Object(a["createElementVNode"])("em",{class:"ni ni-cross"})],-1),O={class:"sidebar-widget"},j={class:"user-nav"},u=Object(a["createElementVNode"])("em",{class:"ni ni-home me-2"},null,-1),k=Object(a["createTextVNode"])("Home"),N={class:"active"},V=Object(a["createElementVNode"])("em",{class:"ni ni-share me-2"},null,-1),h=Object(a["createTextVNode"])("Pengaturan"),g=Object(a["createElementVNode"])("em",{class:"ni ni-user me-2"},null,-1),v=Object(a["createTextVNode"])("Register"),p=Object(a["createElementVNode"])("em",{class:"ni ni-users me-2"},null,-1),E=Object(a["createTextVNode"])("Member"),x=Object(a["createElementVNode"])("em",{class:"ni ni-user-check me-2"},null,-1),f=Object(a["createTextVNode"])("Mitra"),C=Object(a["createElementVNode"])("em",{class:"ni ni-wallet-saving me-2"},null,-1),w=Object(a["createTextVNode"])("iuran"),B=Object(a["createElementVNode"])("em",{class:"ni ni-swap-alt me-2"},null,-1),y=Object(a["createTextVNode"])("Transaksi"),P=Object(a["createElementVNode"])("em",{class:"ni ni-user-round me-2"},null,-1),T=Object(a["createTextVNode"])("Contacts"),_=Object(a["createElementVNode"])("em",{class:"ni ni-calendar me-2"},null,-1),S=Object(a["createTextVNode"])("Kegiatan"),L=Object(a["createElementVNode"])("em",{class:"ni ni-tags me-2"},null,-1),D=Object(a["createTextVNode"])("Pengumuman");function J(e,t,c,J,q,H){const M=Object(a["resolveComponent"])("HeaderDashboard"),F=Object(a["resolveComponent"])("router-link"),I=Object(a["resolveComponent"])("SettingEmailSection"),K=Object(a["resolveComponent"])("Footer");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,[Object(a["createElementVNode"])("header",l,[Object(a["createVNode"])(M)]),Object(a["createElementVNode"])("section",o,[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("div",s,[d,Object(a["createElementVNode"])("div",m,[b,Object(a["createElementVNode"])("div",O,[Object(a["createElementVNode"])("ul",j,[Object(a["createElementVNode"])("li",null,[H.checkPrivilege("home")?(Object(a["openBlock"])(),Object(a["createBlock"])(F,{key:0,to:"/homeadmin"},{default:Object(a["withCtx"])(()=>[u,k]),_:1})):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("li",N,[H.checkPrivilege("pengaturan")?(Object(a["openBlock"])(),Object(a["createBlock"])(F,{key:0,to:"/pengaturan"},{default:Object(a["withCtx"])(()=>[V,h]),_:1})):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("li",null,[H.checkPrivilege("register-index")?(Object(a["openBlock"])(),Object(a["createBlock"])(F,{key:0,to:"/offers"},{default:Object(a["withCtx"])(()=>[g,v]),_:1})):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("li",null,[H.checkPrivilege("member-index")?(Object(a["openBlock"])(),Object(a["createBlock"])(F,{key:0,to:"/member"},{default:Object(a["withCtx"])(()=>[p,E]),_:1})):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("li",null,[H.checkPrivilege("mitra-index")?(Object(a["openBlock"])(),Object(a["createBlock"])(F,{key:0,to:"/daftar-mitra"},{default:Object(a["withCtx"])(()=>[x,f]),_:1})):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("li",null,[H.checkPrivilege("iuran-index")?(Object(a["openBlock"])(),Object(a["createBlock"])(F,{key:0,to:"/iuran"},{default:Object(a["withCtx"])(()=>[C,w]),_:1})):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("li",null,[H.checkPrivilege("transaksi-index")?(Object(a["openBlock"])(),Object(a["createBlock"])(F,{key:0,to:"/transaksi"},{default:Object(a["withCtx"])(()=>[B,y]),_:1})):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("li",null,[H.checkPrivilege("kontak-index")?(Object(a["openBlock"])(),Object(a["createBlock"])(F,{key:0,to:"/transactions"},{default:Object(a["withCtx"])(()=>[P,T]),_:1})):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("li",null,[H.checkPrivilege("kegiatan-index")?(Object(a["openBlock"])(),Object(a["createBlock"])(F,{key:0,to:"/kegiatan"},{default:Object(a["withCtx"])(()=>[_,S]),_:1})):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("li",null,[H.checkPrivilege("pengumuman-index")?(Object(a["openBlock"])(),Object(a["createBlock"])(F,{key:0,to:"/pengumuman"},{default:Object(a["withCtx"])(()=>[L,D]),_:1})):Object(a["createCommentVNode"])("",!0)])])])])]),Object(a["createVNode"])(I)])])]),Object(a["createVNode"])(K,{classname:"bg-dark on-dark"})])}var q=c("07a4"),H={name:"Offers",data(){return{SectionData:q["a"]}},methods:{checkPrivilege(e){const t=localStorage.getItem("permission");let c=!1;return JSON.parse(t).forEach(t=>{t===e&&(c=!0)}),c}},mounted(){var e=document.querySelector(".menu-toggler-user-open"),t=document.querySelector(".sidebar-user-mobile");function c(){e&&e.addEventListener("click",(function(e){e.preventDefault(),t.classList.add("active")}))}c(),t.addEventListener("click",(function(){this.classList.remove("active")}))}},M=c("6b0d"),F=c.n(M);const I=F()(H,[["render",J]]);t["default"]=I}}]);