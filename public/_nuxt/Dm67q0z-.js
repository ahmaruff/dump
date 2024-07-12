import{_ as F}from"./CS1u5HP7.js";import{o as w}from"./D56F-Hv2.js";import{d as y,r as g,ao as N,E as T,a3 as C,a2 as I,O as S,u as B,N as A,w as P,f as x,o as v,e as b,g as s,h as L,i as K,F as R,k as $,c as j,G as V,H as J}from"./DmTmMO_-.js";import{u as k}from"./BHLlrkjG.js";import{u as M}from"./BCX54yQo.js";import"./DLP8OW-a.js";import"./C5pBaPI_.js";const O=y({props:{as:{type:String,default:"div"},nextKeys:{type:[Array,String],default:"PageDown"},prevKeys:{type:[Array,String],default:"PageUp"},prevent:{type:Boolean,default:!0}},setup(u,{slots:n}){const c=g(),r=new Map;let p=[],a=null,l=0;function m(){var o,t;for(const e of p)(o=e.node)==null||o.removeEventListener("focus",e.focusListener),(t=e.node)==null||t.removeEventListener("focusout",e.focusOutListener);p=[]}function f(){if(c.value){const o=document.createTreeWalker(c.value,NodeFilter.SHOW_ELEMENT,{acceptNode(e){return e.disabled||!e.isConnected?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});m(),r.clear();let t=0;for(;o.nextNode();){const e=o.currentNode,i=t;r.set(t,e);const _=()=>{a=i},d=()=>{a=null};e.addEventListener("focus",_),e.addEventListener("focusout",d),p.push({focusListener:_,focusOutListener:d,node:e}),l=t,t+=1}}}return N(f),T(f),C(m),w(u.nextKeys,o=>{var t,e;a!==null&&(u.prevent&&o.preventDefault(),a+1<=l?(t=r.get(a+1))==null||t.focus():(e=r.get(0))==null||e.focus())}),w(u.prevKeys,o=>{var t,e;a!==null&&(u.prevent&&o.preventDefault(),a>0?(t=r.get(a-1))==null||t.focus():(e=r.get(l))==null||e.focus())}),()=>{var o;return I(u.as,{ref:c},(o=n==null?void 0:n.default)==null?void 0:o.call(n))}}}),U={class:"dark:bg-muted-900 bg-white py-24"},D={class:"mx-auto w-full max-w-7xl px-4"},G={class:"ptablet:grid-cols-2 grid gap-6 sm:grid-cols-3"},W=s("span",{class:"txt-title-2"},"Pilih Jasa Pengiriman",-1),H=s("br",null,null,-1),z=s("span",{class:"txt-price-big"},null,-1),q=s("br",null,null,-1),Q=s("br",null,null,-1),X=s("br",null,null,-1),Y=s("div",{class:"text-center md:col-span-5"},[s("div",{class:"-mt-4 inline-flex w-full items-center justify-center gap-2 sm:w-auto"},[s("button",{type:"button",rel:"",target:"",class:"nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-default !h-12 w-full sm:w-40"}," Cancel "),s("button",{type:"submit",rel:"",target:"",class:"nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-primary !h-12 w-full sm:w-40"}," Submit ")])],-1),Z=y({__name:"TokoJasa",async setup(u){let n,c;S();const r=B();A();const{token:p}=k(),a=M();k();const l=g([]),m=g([]),f=g(!1),o=g(null);try{f.value=!0;const e=([n,c]=P(()=>x("https://api.dev.commerce.waktoo.com:443/api/shipping").headers({"Content-Type":"application/json"}).get().json()),n=await n,c(),n);e&&e.status==="success"?m.value=e.data.courier:console.error("Failed to fetch data from product-courier API:",e)}catch(e){o.value=e.message,console.error("Error:",e)}finally{f.value=!1}const t=async()=>{try{const e=r.params.id,i={available_courier:l.value};console.log("kurir ",l.value),console.log("body ",i),console.log("token ",p.value),console.log("id ",e);const d=await(await x(`https://api.dev.commerce.waktoo.com:443/api/shops/${e}`).headers({Authorization:`Bearer ${p.value}`,"Content-Type":"application/json"}).put(i).res()).json();console.log("Save Layanan Response:",d),d.status=="success"?a.show({title:"Sukses",message:"Berhasil edit toko",closable:!0,color:"success"}):a.show({title:"Gagal",message:"Gagal edit toko",closable:!0,color:"danger"}),J(`/toko-admin/${e}`)}catch(e){console.error("Error:",e)}};return(e,i)=>{const _=F,d=O;return v(),b("form",{onSubmit:V(t,["prevent"])},[s("div",U,[s("div",D,[s("div",G,[s("div",null,[W,H,z,q,Q,L(d,{class:"grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"},{default:K(()=>[(v(!0),b(R,null,$(m.value,h=>(v(),j(_,{key:h,value:h,label:h,modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=E=>l.value=E),rounded:"none",color:"warning"},null,8,["value","label","modelValue"]))),128))]),_:1})])])])]),X,Y],32)}}}),le=y({__name:"[id]",setup(u){return(n,c)=>{const r=Z;return v(),b("div",null,[L(r)])}}});export{le as default};
