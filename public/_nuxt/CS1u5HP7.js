import{A as y,o as n,e as a,g as s,d as N,a9 as S,aa as j,I as b,r as A,$ as D,S as P,T as R,l as o,p as T,P as z,h as u,n as x,K as E,m as v,t as g,j as $,i as L}from"./DmTmMO_-.js";import{_ as H}from"./DLP8OW-a.js";import{u as K}from"./C5pBaPI_.js";const U={},q={"aria-hidden":"true",viewBox:"0 0 17 12"},F=s("path",{fill:"currentColor",d:"M16.576.414a1.386 1.386 0 0 1 0 1.996l-9.404 9.176A1.461 1.461 0 0 1 6.149 12c-.37 0-.74-.139-1.023-.414L.424 6.998a1.386 1.386 0 0 1 0-1.996 1.47 1.47 0 0 1 2.046 0l3.68 3.59L14.53.414a1.47 1.47 0 0 1 2.046 0z"},null,-1),G=[F];function J(t,l){return n(),a("svg",q,G)}const O=y(U,[["render",J]]),Q={},W={"aria-hidden":"true",viewBox:"0 0 24 24"},X=s("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4",d:"M2 12h20"},null,-1),Y=[X];function Z(t,l){return n(),a("svg",W,Y)}const ee=y(Q,[["render",Z]]),oe={class:"nui-checkbox-outer"},se=["id","value","true-value","false-value","disabled"],ne=s("div",{class:"nui-checkbox-inner"},null,-1),ae={class:"nui-checkbox-label-wrapper"},te=["for"],ce={key:1,class:"nui-checkbox-error"},de=N({inheritAttrs:!1,__name:"BaseCheckbox",props:S({value:{default:void 0},trueValue:{default:!0},falseValue:{default:!1},id:{default:void 0},label:{default:void 0},error:{type:[String,Boolean],default:""},disabled:{type:Boolean},indeterminate:{type:Boolean},color:{default:void 0},rounded:{default:void 0},classes:{default:()=>({})}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(t,{expose:l}){const e=t,[r]=j(t,"modelValue"),_=b(e,"BaseCheckbox","color"),f=b(e,"BaseCheckbox","rounded"),c=A(),i=K(()=>e.id),V={none:"",sm:"nui-checkbox-rounded-sm",md:"nui-checkbox-rounded-md",lg:"nui-checkbox-rounded-lg",full:"nui-checkbox-rounded-full"},B={default:"nui-checkbox-default",muted:"nui-checkbox-muted",light:"nui-checkbox-light",dark:"nui-checkbox-dark",black:"nui-checkbox-black",primary:"nui-checkbox-primary",info:"nui-checkbox-info",success:"nui-checkbox-success",warning:"nui-checkbox-warning",danger:"nui-checkbox-danger"};return D(()=>{c.value&&(c.value.indeterminate=e.indeterminate??!1)}),l({el:c,id:i}),(d,h)=>{var m,p,k;const C=O,w=ee,I=H;return n(),a("div",{class:x(["nui-checkbox",[e.disabled&&"opacity-50",o(f)&&V[o(f)],o(_)&&B[o(_)],(m=e.classes)==null?void 0:m.wrapper]])},[s("div",oe,[P(s("input",T({id:o(i),ref_key:"inputRef",ref:c,"onUpdate:modelValue":h[0]||(h[0]=M=>z(r)?r.value=M:null),value:e.value,"true-value":e.trueValue,"false-value":e.falseValue,class:(p=e.classes)==null?void 0:p.input,disabled:e.disabled},d.$attrs,{class:"nui-checkbox-input",type:"checkbox"}),null,16,se),[[R,o(r)]]),ne,u(C,{class:"nui-icon-check"}),u(w,{class:"nui-icon-indeterminate"})]),s("div",ae,[e.label||"default"in d.$slots?(n(),a("label",{key:0,for:o(i),class:x(["nui-checkbox-label-text",(k=e.classes)==null?void 0:k.label])},[E(d.$slots,"default",{},()=>[v(g(e.label),1)])],10,te)):$("",!0),e.error&&typeof e.error=="string"?(n(),a("div",ce,[u(I,{color:"danger"},{default:L(()=>[v(g(e.error),1)]),_:1})])):$("",!0)])],2)}}});export{de as _,O as a};
