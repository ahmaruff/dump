import{d as _,E as w,r as p,L as k,o as b,e as h,h as s,i as o,g as e,l as d,P as u,s as g,m as V}from"./DmTmMO_-.js";import{_ as j}from"./CS1u5HP7.js";import{u as y}from"./CoBg3nwE.js";import"./DLP8OW-a.js";import"./C5pBaPI_.js";const B=e("p",{class:"text-sm text-center"},"Pilih cara mana saja yang ingin Anda gunakan dalam menjual produk.",-1),M={class:"mt-4 flex flex-col justify-start items-start w-full gap-2"},T={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full"},N=e("div",null,[e("p",{class:"text-md text-muted-800"},"Toko Online"),e("p",{class:"text-xs text-muted"},"Buat website toko online anda sendiri")],-1),O={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full"},U=e("div",null,[e("p",{class:"text-md text-muted-800"},"Online Marketplace"),e("p",{class:"text-xs text-muted"},"Berjualan dan menampilkan produk di Tokopedia, Shopee dll")],-1),F={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full"},S=e("div",null,[e("p",{class:"text-md text-muted-800"},"Media Sosial"),e("p",{class:"text-xs text-muted"},"Berjualan di Instagram, Facebook, Tiktok, dll")],-1),q={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full"},A=e("div",null,[e("p",{class:"text-md text-muted-800"},"Website atau Blog"),e("p",{class:"text-xs text-muted"},"Menambah tautan produk ke website atau blog")],-1),C={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full"},D=e("div",null,[e("p",{class:"text-md text-muted-800"},"Toko Fisik"),e("p",{class:"text-xs text-muted"},"Berjualan di toko fisik dan retail lainnya")],-1),E=e("div",{class:"h-32 w-full"},null,-1),Q=_({__name:"step-4",setup(P){var c;const{data:i,nextNotOk:x}=y();w(()=>{m()});const n=p({question:"Di mana Anda akan berjualan?",answer:((c=i.value.qna[2])==null?void 0:c.answer)||[]}),t=p(n.value.answer||[]);k(t,f=>{n.value.answer=t.value,i.value.qna[2]={...n.value},m()});const m=()=>{x.value=t.value.length===0};return(f,l)=>{const v=g,r=j;return b(),h("div",null,[s(v,{as:"h2",class:"txt-onboarding-1 margin-40 text-center",weight:"medium"},{default:o(()=>[V(" Di mana Anda akan berjualan? ")]),_:1}),B,e("div",M,[e("div",T,[s(r,{class:"w-full",value:"Toko Online",modelValue:d(t),"onUpdate:modelValue":l[0]||(l[0]=a=>u(t)?t.value=a:null),color:"primary",classes:{wrapper:"flex flex-row justify-start items-center"}},{default:o(a=>[N]),_:1},8,["modelValue"])]),e("div",O,[s(r,{class:"w-full",value:"Online Marketplace",modelValue:d(t),"onUpdate:modelValue":l[1]||(l[1]=a=>u(t)?t.value=a:null),color:"primary",classes:{wrapper:"flex flex-row justify-start items-center"}},{default:o(a=>[U]),_:1},8,["modelValue"])]),e("div",F,[s(r,{class:"w-full",value:"Media Sosial",modelValue:d(t),"onUpdate:modelValue":l[2]||(l[2]=a=>u(t)?t.value=a:null),color:"primary",classes:{wrapper:"flex flex-row justify-start items-center"}},{default:o(a=>[S]),_:1},8,["modelValue"])]),e("div",q,[s(r,{class:"w-full",value:"Website atau Blog",modelValue:d(t),"onUpdate:modelValue":l[3]||(l[3]=a=>u(t)?t.value=a:null),color:"primary",classes:{wrapper:"flex flex-row justify-start items-center"}},{default:o(a=>[A]),_:1},8,["modelValue"])]),e("div",C,[s(r,{class:"w-full",value:"Toko Fisik",modelValue:d(t),"onUpdate:modelValue":l[4]||(l[4]=a=>u(t)?t.value=a:null),color:"primary",classes:{wrapper:"flex flex-row justify-start items-center"}},{default:o(a=>[D]),_:1},8,["modelValue"])])]),E])}}});export{Q as default};
