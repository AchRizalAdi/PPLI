(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de315"],{8535:function(e,t,a){"use strict";a.r(t);var l=a("7a23");const c={class:"page-wrap"},o={class:"header-section has-header-main bg-pattern-3"},n={class:"create-section section-space-b pt-4 pt-md-5 mt-md-4"},s={class:"container"},r={class:"row justify-content-center"},i={class:"col-lg-8"},d={class:"section-head-sm"},m=Object(l["createElementVNode"])("em",{class:"ni ni-arrow-left"},null,-1),b={class:"mt-2"},p={class:"col-lg-8"},f={action:"#",class:"form-create mb-5 mb-lg-0"},u=Object(l["createStaticVNode"])('<div class="form-item mb-4"><h5 class="mb-3">Upload file</h5><div class="file-upload-wrap"><p class="file-name mb-4" id="file-name">PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p><input id="file-upload" class="file-upload-input" data-target="file-name" type="file" hidden><label for="file-upload" class="input-label btn btn-dark">Choose File</label></div></div>',1),j={class:"form-item mb-4"},v=Object(l["createElementVNode"])("h5",{class:"mb-3"},"Select Method",-1),h={class:"row g-4 nav nav-tabs nav-tabs-s2",id:"myTab",role:"tablist"},O=["id","data-bs-target"],E={class:"nav-link-title mt-1 d-block"},g=Object(l["createElementVNode"])("div",{class:"tab-content mt-4",id:"myTabContent"},[Object(l["createElementVNode"])("div",{class:"tab-pane fade show active",id:"fixed-price",role:"tabpanel","aria-labelledby":"fixed-price-tab"},[Object(l["createElementVNode"])("div",{class:"form-create-tab-wrap"},[Object(l["createElementVNode"])("label",{class:"mb-2 form-label"},"Price"),Object(l["createElementVNode"])("input",{type:"text",class:"form-control form-control-s1",placeholder:"Enter a price for item"})])]),Object(l["createElementVNode"])("div",{class:"tab-pane fade",id:"timed-auction",role:"tabpanel","aria-labelledby":"timed-auction-tab"},[Object(l["createElementVNode"])("div",{class:"form-create-tab-wrap"},[Object(l["createElementVNode"])("label",{class:"mb-2 form-label"},"Minimum bid"),Object(l["createElementVNode"])("input",{type:"text",class:"form-control form-control-s1",placeholder:"Enter Minimum bid"}),Object(l["createElementVNode"])("div",{class:"row mt-3"},[Object(l["createElementVNode"])("div",{class:"col-lg-6"},[Object(l["createElementVNode"])("label",{class:"mb-2 form-label"},"Starting date"),Object(l["createElementVNode"])("input",{type:"date",class:"form-control form-control-s1"})]),Object(l["createElementVNode"])("div",{class:"col-lg-6"},[Object(l["createElementVNode"])("label",{class:"mb-2 form-label"},"Expiration date"),Object(l["createElementVNode"])("input",{type:"date",class:"form-control form-control-s1"})])])])]),Object(l["createElementVNode"])("div",{class:"tab-pane fade",id:"open-for-bids",role:"tabpanel","aria-labelledby":"open-for-bids-tab"},[Object(l["createElementVNode"])("div",{class:"form-create-tab-wrap"},[Object(l["createElementVNode"])("label",{class:"mb-2 form-label"},"Minimum bid"),Object(l["createElementVNode"])("input",{type:"text",class:"form-control form-control-s1",placeholder:"Enter Minimum bid"})])])],-1),V=Object(l["createStaticVNode"])('<div class="form-item mb-3"><div class="switch-wrap"><div class="d-flex align-items-center justify-content-between"><div class="me-2"><h5 class="mb-1">Unlock once purchased</h5><p class="form-text">Content will be unlocked after successful transaction</p></div><div class="form-check form-switch form-switch-s1"><input class="form-check-input checkbox-switcher" data-target="switch-content-unlock" type="checkbox"></div></div><div class="switch-content-unlock mt-4" id="switch-content-unlock"><input type="text" name="text" class="form-control form-control-s1" placeholder="Access key, code to redeem or link to a file..."></div></div></div>',1),N={class:"form-item mb-4"},w=Object(l["createElementVNode"])("h5",{class:"mb-1"},"Choose collection",-1),k=Object(l["createElementVNode"])("p",{class:"form-text mb-3"},"This is the collection where your item will appear.",-1),y=Object(l["createStaticVNode"])('<div class="form-item mb-4"><div class="mb-4"><label class="mb-2 form-label">Title</label><input type="text" class="form-control form-control-s1" placeholder="e. g. Redeemable T-Shirt with logo"></div><div class="mb-4"><label class="mb-2 form-label">Description</label><textarea name="message" class="form-control form-control-s1" placeholder="e. g. After purchasing you’ll be able to get the real T-Shirt"></textarea></div><div class="mb-3"><label class="mb-2 form-label">Royalties</label><input type="text" class="form-control form-control-s1" placeholder="e.g 10%"><p class="form-text mt-1">Suggested: 0, 10%, 20%, 30%. Maximum is 70%</p></div></div><button class="btn btn-dark" type="button">Create Item</button>',2);function x(e,t,a,x,S,M){const C=Object(l["resolveComponent"])("HeaderMain"),T=Object(l["resolveComponent"])("router-link"),D=Object(l["resolveComponent"])("v-select"),B=Object(l["resolveComponent"])("Footer");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",c,[Object(l["createElementVNode"])("header",o,[Object(l["createVNode"])(C)]),Object(l["createElementVNode"])("section",n,[Object(l["createElementVNode"])("div",s,[Object(l["createElementVNode"])("div",r,[Object(l["createElementVNode"])("div",i,[Object(l["createElementVNode"])("div",d,[Object(l["createVNode"])(T,{to:S.SectionData.createMultipleData.path,class:"btn-link fw-semibold"},{default:Object(l["withCtx"])(()=>[m,Object(l["createTextVNode"])(" "+Object(l["toDisplayString"])(S.SectionData.createMultipleData.btnText),1)]),_:1},8,["to"]),Object(l["createElementVNode"])("h1",b,Object(l["toDisplayString"])(S.SectionData.createMultipleData.title),1)])]),Object(l["createElementVNode"])("div",p,[Object(l["createElementVNode"])("form",f,[u,Object(l["createElementVNode"])("div",j,[v,Object(l["createElementVNode"])("ul",h,[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(S.SectionData.selectMethodTabNavTwo,e=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("li",{class:"nav-item col-6 col-sm-4 col-lg-3",role:"presentation",key:e.id},[Object(l["createElementVNode"])("button",{class:Object(l["normalizeClass"])(["nav-link",e.isActive]),id:e.slug,"data-bs-toggle":"tab","data-bs-target":e.bsTarget,type:"button"},[Object(l["createElementVNode"])("em",{class:Object(l["normalizeClass"])(["ni nav-link-icon",e.icon])},null,2),Object(l["createElementVNode"])("span",E,Object(l["toDisplayString"])(e.title),1)],10,O)]))),128))]),g]),V,Object(l["createElementVNode"])("div",N,[w,k,Object(l["createVNode"])(D,{class:"generic-select",modelValue:S.selected,"onUpdate:modelValue":t[0]||(t[0]=e=>S.selected=e),options:S.options},null,8,["modelValue","options"])]),y])])])])]),Object(l["createVNode"])(B,{classname:"bg-dark on-dark"})])}a("caad");var S=a("07a4"),M={name:"CreateMultiple",data(){return{SectionData:S["a"],selected:"Select Collection",options:["Select Collection","Abstraction","Patternlicious","Skecthify","Cartoonism","Virtuland","Papercut"]}},mounted(){function e(e){let t=document.querySelectorAll(e);t.length>0&&t.forEach(e=>{e.addEventListener("change",(function(){var t=document.getElementById(e.dataset.target),a=["jpg","png","gif","webp","mp4","mp3"],l=this.value.split(".").pop(),c=this.value.lastIndexOf("."),o=this.value.substring(c+1),n=t.value=o;a.includes(l)?t.innerHTML=e.files[0].name:(alert(n+" file type not allowed, Please upload jpg, png, gif, webp, mp4 or mp3 file"),t.innerHTML="Please upload jpg, png, gif, webp, mp4 or mp3 file")}))})}function t(e){let t=document.querySelectorAll(e);t.length>0&&t.forEach(e=>{e.addEventListener("change",(function(){let t=document.getElementById(e.dataset.target);this.checked?t.classList.add("is-shown"):t.classList.remove("is-shown")}))})}e(".file-upload-input"),t(".checkbox-switcher")}},C=a("6b0d"),T=a.n(C);const D=T()(M,[["render",x]]);t["default"]=D}}]);