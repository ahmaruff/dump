import{d as _,E as w,r as c,L as b,o as V,e as y,h as a,i as r,g as l,l as d,P as u,s as h,m as g}from"./DmTmMO_-.js";import{_ as j}from"./CS1u5HP7.js";import{u as k}from"./CoBg3nwE.js";import"./DLP8OW-a.js";import"./C5pBaPI_.js";const U=l("p",{class:"text-sm text-center"},"Pilih jawaban yang paling sesuai dari mana Anda mengetahui di Waktoo Commerce.",-1),C={class:"mt-4 grid grid-cols-1 md:grid-cols-2 gap-2"},M={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full"},B=l("div",null,[l("p",{class:"text-md text-muted-800"},"Penelusuran Google")],-1),W={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full"},P=l("div",null,[l("p",{class:"text-md text-muted-800"},"Seminar atau Workshop")],-1),N={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full"},S=l("div",null,[l("p",{class:"text-md text-muted-800"},"Rekomendasi Teman")],-1),E={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full"},q=l("div",null,[l("p",{class:"text-md text-muted-800"},"Pameran")],-1),A={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full"},D=l("div",null,[l("p",{class:"text-md text-muted-800"},"Iklan Cetak")],-1),L={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full"},R=l("div",null,[l("p",{class:"text-md text-muted-800"},"Media Sosial")],-1),T={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full"},G=l("div",null,[l("p",{class:"text-md text-muted-800"},"Email Marketing")],-1),I={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full"},$=l("div",null,[l("p",{class:"text-md text-muted-800"},"Artikel Website")],-1),F={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full"},H=l("div",null,[l("p",{class:"text-md text-muted-800"},"Mitra Bisnis")],-1),O={class:"border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full"},Q=l("div",null,[l("p",{class:"text-md text-muted-800"},"Lainnya")],-1),z=l("div",{class:"h-32 w-full"},null,-1),le=_({__name:"step-6",setup(J){var f;const{data:i,nextNotOk:p}=k();w(()=>{m()});const n=c({question:"Darimana anda mengetahui Waktoo Commerce?",answer:(f=i.value.qna[4])==null?void 0:f.answer}),e=c(n.value.answer||[]);b(e,x=>{n.value.answer=e.value,i.value.qna[4]={...n.value},m()});const m=()=>{p.value=e.value.length===0};return(x,s)=>{const v=h,o=j;return V(),y("div",null,[a(v,{as:"h2",class:"txt-onboarding-1 margin-40 text-center",weight:"medium"},{default:r(()=>[g(" Darimana anda mengetahui Waktoo Commerce? ")]),_:1}),U,l("div",C,[l("div",M,[a(o,{class:"w-full",value:"Penelusuran Google",modelValue:d(e),"onUpdate:modelValue":s[0]||(s[0]=t=>u(e)?e.value=t:null),color:"primary",classes:{wrapper:"flex flex-row justify-start items-center"}},{default:r(t=>[B]),_:1},8,["modelValue"])]),l("div",W,[a(o,{class:"w-full",value:"Seminar atau Workshop",modelValue:d(e),"onUpdate:modelValue":s[1]||(s[1]=t=>u(e)?e.value=t:null),color:"primary",classes:{wrapper:"flex flex-row justify-start items-center"}},{default:r(t=>[P]),_:1},8,["modelValue"])]),l("div",N,[a(o,{class:"w-full",value:"Rekomendasi Teman",modelValue:d(e),"onUpdate:modelValue":s[2]||(s[2]=t=>u(e)?e.value=t:null),color:"primary",classes:{wrapper:"flex flex-row justify-start items-center"}},{default:r(t=>[S]),_:1},8,["modelValue"])]),l("div",E,[a(o,{class:"w-full",value:"Pameran",modelValue:d(e),"onUpdate:modelValue":s[3]||(s[3]=t=>u(e)?e.value=t:null),color:"primary",classes:{wrapper:"flex flex-row justify-start items-center"}},{default:r(t=>[q]),_:1},8,["modelValue"])]),l("div",A,[a(o,{class:"w-full",value:"Iklan Cetak",modelValue:d(e),"onUpdate:modelValue":s[4]||(s[4]=t=>u(e)?e.value=t:null),color:"primary",classes:{wrapper:"flex flex-row justify-start items-center"}},{default:r(t=>[D]),_:1},8,["modelValue"])]),l("div",L,[a(o,{class:"w-full",value:"Media Sosial",modelValue:d(e),"onUpdate:modelValue":s[5]||(s[5]=t=>u(e)?e.value=t:null),color:"primary",classes:{wrapper:"flex flex-row justify-start items-center"}},{default:r(t=>[R]),_:1},8,["modelValue"])]),l("div",T,[a(o,{class:"w-full",value:"Email Marketing",modelValue:d(e),"onUpdate:modelValue":s[6]||(s[6]=t=>u(e)?e.value=t:null),color:"primary",classes:{wrapper:"flex flex-row justify-start items-center"}},{default:r(t=>[G]),_:1},8,["modelValue"])]),l("div",I,[a(o,{class:"w-full",value:"Artikel Website",modelValue:d(e),"onUpdate:modelValue":s[7]||(s[7]=t=>u(e)?e.value=t:null),color:"primary",classes:{wrapper:"flex flex-row justify-start items-center"}},{default:r(t=>[$]),_:1},8,["modelValue"])]),l("div",F,[a(o,{class:"w-full",value:"Mitra Bisnis",modelValue:d(e),"onUpdate:modelValue":s[8]||(s[8]=t=>u(e)?e.value=t:null),color:"primary",classes:{wrapper:"flex flex-row justify-start items-center"}},{default:r(t=>[H]),_:1},8,["modelValue"])]),l("div",O,[a(o,{class:"w-full",value:"Lainnya",modelValue:d(e),"onUpdate:modelValue":s[9]||(s[9]=t=>u(e)?e.value=t:null),color:"primary",classes:{wrapper:"flex flex-row justify-start items-center"}},{default:r(t=>[Q]),_:1},8,["modelValue"])])]),z])}}});export{le as default};
