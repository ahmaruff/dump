import{d as v,E as x,r as n,L as b,o as V,e as g,h as d,i as w,g as o,l as r,s as _,m as k}from"./DmTmMO_-.js";import{_ as y}from"./CK18j4Hi.js";import{u as h}from"./CoBg3nwE.js";import"./DLP8OW-a.js";import"./C5pBaPI_.js";const j=o("p",{class:"text-sm text-center"},"Pilih aplikasi POS, merketplace atau ecommerce yang saat ini Anda gunakan.",-1),B={class:"mt-4 grid grid-cols-2 gap-2"},U={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center"},A={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center"},L={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center"},N={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center"},T={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center"},q={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center"},z={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center"},P={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center"},$=v({__name:"step-3",setup(S){var p;const{data:s,nextNotOk:u}=h();x(()=>{m()});const e=n({question:"Apakah Anda saat ini juga berjualan di platfrom lain?",answer:((p=s.value.qna[1])==null?void 0:p.answer)||""});n(!1),b(()=>e.value.answer,f=>{f&&(s.value.qna[1]={...e.value}),m()});const m=()=>{e.value.answer!=""?u.value=!1:u.value=!0},i=n("");return b(()=>i,()=>{s.value.qna[1].answer=i.value}),(f,a)=>{const c=_,t=y;return V(),g("div",null,[d(c,{as:"h2",class:"txt-onboarding-1 margin-40 text-center",weight:"medium"},{default:w(()=>[k(" Apakah Anda saat ini juga berjualan di platfrom lain? ")]),_:1}),j,o("div",B,[o("div",U,[d(t,{modelValue:r(e).answer,"onUpdate:modelValue":a[0]||(a[0]=l=>r(e).answer=l),value:"Tidak menggunakan platform apapun",label:"Tidak menggunakan platform apapun",rounded:"full",color:"primary"},null,8,["modelValue"])]),o("div",A,[d(t,{modelValue:r(e).answer,"onUpdate:modelValue":a[1]||(a[1]=l=>r(e).answer=l),value:"eBay",label:"eBay",rounded:"full",color:"primary"},null,8,["modelValue"])]),o("div",L,[d(t,{modelValue:r(e).answer,"onUpdate:modelValue":a[2]||(a[2]=l=>r(e).answer=l),value:"Tokopedia",label:"Tokopedia",rounded:"full",color:"primary"},null,8,["modelValue"])]),o("div",N,[d(t,{modelValue:r(e).answer,"onUpdate:modelValue":a[3]||(a[3]=l=>r(e).answer=l),value:"Shopee",label:"Shopee",rounded:"full",color:"primary"},null,8,["modelValue"])]),o("div",T,[d(t,{modelValue:r(e).answer,"onUpdate:modelValue":a[4]||(a[4]=l=>r(e).answer=l),value:"Lazada",label:"Lazada",rounded:"full",color:"primary"},null,8,["modelValue"])]),o("div",q,[d(t,{modelValue:r(e).answer,"onUpdate:modelValue":a[5]||(a[5]=l=>r(e).answer=l),value:"Amazon",label:"Amazon",rounded:"full",color:"primary"},null,8,["modelValue"])]),o("div",z,[d(t,{modelValue:r(e).answer,"onUpdate:modelValue":a[6]||(a[6]=l=>r(e).answer=l),value:"WordPress",label:"WordPress",rounded:"full",color:"primary"},null,8,["modelValue"])]),o("div",P,[d(t,{modelValue:r(e).answer,"onUpdate:modelValue":a[7]||(a[7]=l=>r(e).answer=l),value:"BukaLapak",label:"BukaLapak",rounded:"full",color:"primary"},null,8,["modelValue"])])])])}}});export{$ as default};
