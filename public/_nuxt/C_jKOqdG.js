import{d as K,a9 as q,aa as G,I as f,r as L,J as O,o as n,e as s,n as i,l,K as d,m as b,t as y,j as r,g as w,S as C,as as D,p as P,P as R,h as S,c as Q,i as W,ah as X,_ as Y}from"./DmTmMO_-.js";import{_ as Z}from"./DLP8OW-a.js";import{u as ee}from"./C5pBaPI_.js";const te=["for"],le=["id","type","placeholder"],ne=["id","type","placeholder"],oe=["for"],se={key:3,class:"nui-input-placeload"},re=K({inheritAttrs:!1,__name:"BaseInput",props:q({id:{default:void 0},type:{default:"text"},label:{default:void 0},labelFloat:{type:Boolean},icon:{default:void 0},placeholder:{default:void 0},error:{type:[String,Boolean],default:!1},colorFocus:{type:Boolean},loading:{type:Boolean},contrast:{default:void 0},rounded:{default:void 0},size:{default:void 0},classes:{default:()=>({})}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(_,{expose:x}){const e=_;function T(t){const o=Number.parseFloat(t);return Number.isNaN(o)?t:o}const[a,p]=G(_,"modelValue",{set(t){return p.number?T(t):p.trim&&typeof t=="string"?t.trim():t}}),g=f(e,"BaseInput","contrast"),h=f(e,"BaseInput","rounded"),B=f(e,"BaseInput","size"),c=L(),u=ee(()=>e.id),j={none:"",sm:"nui-input-rounded-sm",md:"nui-input-rounded-md",lg:"nui-input-rounded-lg",full:"nui-input-rounded-full"},U={sm:"nui-input-sm",md:"nui-input-md",lg:"nui-input-lg",xl:"nui-input-xl"},A={default:"nui-input-default","default-contrast":"nui-input-default-contrast",muted:"nui-input-muted","muted-contrast":"nui-input-muted-contrast"};x({el:c,id:u});const v=O(()=>{if(!e.loading)return e.labelFloat?e.label:e.placeholder});return(t,o)=>{var k,N,F,V,$,I,z,M;const E=X,H=Y,J=Z;return n(),s("div",{class:i(["nui-input-wrapper",[l(g)&&A[l(g)],l(B)&&U[l(B)],l(h)&&j[l(h)],e.error&&!e.loading&&"nui-input-error",e.loading&&"nui-input-loading",e.labelFloat&&"nui-input-label-float",e.icon&&"nui-has-icon",e.colorFocus&&"nui-input-focus",(k=e.classes)==null?void 0:k.wrapper]])},["label"in t.$slots&&!e.labelFloat||e.label&&!e.labelFloat?(n(),s("label",{key:0,class:i(["nui-input-label",(N=e.classes)==null?void 0:N.label]),for:l(u)},[d(t.$slots,"label",{},()=>[b(y(e.label),1)])],10,te)):r("",!0),w("div",{class:i(["nui-input-outer",(F=e.classes)==null?void 0:F.outer])},[w("div",null,[l(p).lazy?C((n(),s("input",P({key:0,id:l(u),ref_key:"inputRef",ref:c,"onUpdate:modelValue":o[0]||(o[0]=m=>R(a)?a.value=m:null),type:e.type},t.$attrs,{class:["nui-input",(V=e.classes)==null?void 0:V.input],placeholder:l(v)}),null,16,le)),[[D,l(a),void 0,{lazy:!0}]]):C((n(),s("input",P({key:1,id:l(u),ref_key:"inputRef",ref:c,"onUpdate:modelValue":o[1]||(o[1]=m=>R(a)?a.value=m:null),type:e.type},t.$attrs,{class:["nui-input",($=e.classes)==null?void 0:$.input],placeholder:l(v)}),null,16,ne)),[[D,l(a)]]),"label"in t.$slots&&e.labelFloat||e.label&&e.labelFloat?(n(),s("label",{key:2,class:i(["nui-label-float",(I=e.classes)==null?void 0:I.label]),for:l(u)},[d(t.$slots,"label",{},()=>[b(y(e.label),1)])],10,oe)):r("",!0),e.loading?(n(),s("div",se,[S(E,{class:"nui-placeload"})])):r("",!0),e.icon?(n(),s("div",{key:4,class:i(["nui-input-icon",(z=e.classes)==null?void 0:z.icon])},[d(t.$slots,"icon",{},()=>[S(H,{name:e.icon,class:"nui-input-icon-inner"},null,8,["name"])])],2)):r("",!0),d(t.$slots,"action")]),e.error&&typeof e.error=="string"?(n(),Q(J,{key:0,color:"danger",class:i((M=e.classes)==null?void 0:M.error)},{default:W(()=>[b(y(e.error),1)]),_:1},8,["class"])):r("",!0)],2)],2)}}});export{re as _};