import{d as q,N as E,D as L,O as z,r as b,a as B,o as i,e as r,h as l,i as g,g as e,F as f,k as x,j as S,m as p,G as T,t as G,f as P,ae as W,B as J,y as X,z as H,A as Q}from"./DmTmMO_-.js";import{_ as Y}from"./C_jKOqdG.js";import{_ as Z}from"./B4A7ptYP.js";import{_ as ee}from"./Wwwchkvl.js";import{_ as te}from"./CtInf2Mp.js";import{u as oe}from"./BHLlrkjG.js";import{u as se}from"./BCX54yQo.js";import"./DLP8OW-a.js";import"./C5pBaPI_.js";import"./DzMF6t2X.js";import"./CSxYk3-N.js";const a=_=>(X("data-v-314f012b"),_=_(),H(),_),le={class:"flex w-full items-center justify-between p-4 md:p-6",style:{border:"1px solid #ddd"}},ae=a(()=>e("h3",{class:"font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"}," Tambah Form Definition ",-1)),ne={class:"p-4 mrgn scroll-y"},ie={class:"grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"},re=a(()=>e("div",{class:"line-height-normal"},[e("span",{class:"title-m-3"},"Label"),p(),e("span",{class:"alert-red"},"Wajib"),e("br")],-1)),de={class:"line-height-normal"},ce={class:"grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"},ue=a(()=>e("div",{class:"line-height-normal"},[e("span",{class:"title-m-3"},"Placeholder"),e("br")],-1)),me={class:"line-height-normal"},pe={class:"grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"},_e=a(()=>e("div",{class:"line-height-normal"},[e("span",{class:"title-m-3"},"Required"),e("br")],-1)),he={class:"line-height-normal"},ge={class:"grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"},ve=a(()=>e("div",{class:"line-height-normal"},[e("span",{class:"title-m-3"},"Type"),p(),e("span",{class:"alert-red"},"Wajib"),e("br")],-1)),be={class:"line-height-normal"},fe=a(()=>e("option",{value:null},"Pilih Type",-1)),ye=a(()=>e("option",{value:"text"},"Text",-1)),we=a(()=>e("option",{value:"number"},"Number",-1)),xe=a(()=>e("option",{value:"select"},"Select",-1)),Ve={key:0,class:"grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"},ke=a(()=>e("div",{class:"line-height-normal"},[e("span",{class:"title-m-3"},"Options"),p(),e("br")],-1)),Ce={class:"line-height-normal"},$e=["onClick"],Be={class:"grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"},Se={class:"line-height-normal text-right"},Te={class:"dark:bg-muted-900 bg-white py-24"},qe={class:"mx-auto w-full max-w-7xl px-4"},Ne={class:"bg-white dark:bg-muted-800/70 p-10"},Ue={class:"col-span-12 mt-6"},Fe={class:"col-span-12"},Ke={class:"col-span-12 mt-6"},je=["value"],Ae=["onClick"],Me={class:"col-span-12 mt-4"},De=a(()=>e("br",null,null,-1)),Ie=a(()=>e("div",{class:"text-center md:col-span-5"},[e("div",{class:"-mt-4 inline-flex w-full items-center justify-center gap-2 sm:w-auto"},[e("button",{type:"button",class:"nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-default !h-12 w-full sm:w-40"},"Cancel"),e("button",{type:"submit",class:"nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-primary !h-12 w-full sm:w-40"},"Submit")])],-1)),Oe=q({__name:"TokoKategori",setup(_){E();const{token:V}=oe(),v=se(),y=L(),N=z(),k=y.params.id,u=b([]),w=B({name:"",shop_id:k,form_definition:u.value}),o=B({id:"",label:"",name:"",type:"",placeholder:"",required:!1,value:"",options:[]}),C=b(!1);b(null);const U=()=>{o.name=o.label.split(" ").join("_").toLowerCase(),u.value.push({...o,id:u.value.length+1}),j(),m.value=!1},F=()=>{o.options.push("")},K=d=>{o.options.splice(d,1)},j=()=>{o.label="",o.placeholder="",o.type="",o.required=!1,o.value="",o.options=[]},A=async()=>{try{C.value=!0;const d={...w,form_definition:u.value};(await P("https://api.dev.commerce.waktoo.com/api/product-categories").headers({Authorization:`Bearer ${V.value}`}).post(d).json()).status==="success"?(v.show({title:"Sukses",message:"Berhasil Membuat Kategori",closable:!0,color:"success"}),N.push(`/toko-admin/${k}`)):v.show({title:"Gagal",message:"Gagal Membuat Kategori",closable:!0,color:"danger"})}catch(d){console.error("Error:",d),v.show({title:"Error",message:"An error occurred while adding Kategori",closable:!0,color:"danger"})}finally{C.value=!1}},M=d=>{u.value.splice(d,1)},m=b(!1);return(d,s)=>{const D=W,h=Y,I=Z,O=ee,$=J,R=te;return i(),r(f,null,[l(R,{open:m.value,size:"3xl",onClose:s[6]||(s[6]=t=>m.value=!1)},{header:g(()=>[e("div",le,[ae,l(D,{onClick:s[0]||(s[0]=t=>m.value=!1)})])]),default:g(()=>[e("form",{onSubmit:T(U,["prevent"])},[e("div",ne,[e("div",ie,[re,e("div",de,[l(h,{placeholder:"Contoh: Label dalam Kategori",modelValue:o.label,"onUpdate:modelValue":s[1]||(s[1]=t=>o.label=t)},null,8,["modelValue"])])]),e("div",ce,[ue,e("div",me,[l(h,{placeholder:"Contoh: Placeholder dalam Kategori",modelValue:o.placeholder,"onUpdate:modelValue":s[2]||(s[2]=t=>o.placeholder=t)},null,8,["modelValue"])])]),e("div",pe,[_e,e("div",he,[l(I,{label:"Required Kategori",color:"primary",modelValue:o.required,"onUpdate:modelValue":s[3]||(s[3]=t=>o.required=t)},null,8,["modelValue"])])]),e("div",ge,[ve,e("div",be,[l(O,{rounded:"sm",modelValue:o.type,"onUpdate:modelValue":s[4]||(s[4]=t=>o.type=t)},{default:g(()=>[fe,ye,we,xe]),_:1},8,["modelValue"])])]),o.type==="select"?(i(),r("div",Ve,[ke,e("div",Ce,[(i(!0),r(f,null,x(o.options,(t,c)=>(i(),r("div",{key:c,class:"flex items-center"},[l(h,{placeholder:"Enter option",modelValue:o.options[c],"onUpdate:modelValue":n=>o.options[c]=n},null,8,["modelValue","onUpdate:modelValue"]),e("button",{type:"button",onClick:n=>K(c),class:"ml-2 p-1 bg-red-500 text-white rounded"},"Remove",8,$e)]))),128)),e("button",{type:"button",onClick:F,class:"mt-2 p-1 bg-green-500 text-white rounded"},"Add Option")])])):S("",!0),e("div",Be,[e("div",Se,[l($,{onClick:s[5]||(s[5]=t=>m.value=!1)},{default:g(()=>[p("Batal")]),_:1}),p("   "),l($,{type:"submit",color:"primary",variant:"solid"},{default:g(()=>[p("Simpan")]),_:1})])])])],32)]),_:1},8,["open"]),e("form",{onSubmit:T(A,["prevent"]),class:"mx-auto w-full"},[e("div",Te,[e("div",qe,[e("div",Ne,[e("div",Ue,[e("div",Fe,[l(h,{label:"Category Name",placeholder:"Enter Category Name",modelValue:w.name,"onUpdate:modelValue":s[7]||(s[7]=t=>w.name=t)},null,8,["modelValue"])])]),e("div",Ke,[(i(!0),r(f,null,x(u.value,(t,c)=>(i(),r("div",{key:c,class:"col-span-12 mt-4"},[l(h,{label:t.label,is:t.type==="select"?"select":"input",modelValue:t.value,"onUpdate:modelValue":n=>t.value=n,type:t.type,placeholder:t.placeholder,required:t.required,name:t.name,id:`field_${c}`,disabled:""},null,8,["label","is","modelValue","onUpdate:modelValue","type","placeholder","required","name","id"]),t.type==="select"?(i(!0),r(f,{key:0},x(t.options,n=>(i(),r("option",{key:n,value:n},G(n),9,je))),128)):S("",!0),e("button",{type:"button",class:"ml-2 p-1 bg-red-500 mt-4 text-white rounded",onClick:n=>M(c)},"Remove",8,Ae)]))),128)),e("div",Me,[e("button",{type:"button",class:"p-2 bg-green-500 text-white rounded",onClick:s[8]||(s[8]=t=>m.value=!0)},"Add Field")])])])])]),De,Ie],32)],64)}}}),Re=Q(Oe,[["__scopeId","data-v-314f012b"]]),Ze=q({__name:"[id]",setup(_){return(V,v)=>{const y=Re;return i(),r("div",null,[l(y)])}}});export{Ze as default};
