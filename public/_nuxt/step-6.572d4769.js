import{_ as h}from"./DemoWizardStepTitle.vue.1d272d25.js";import{d as _,r as x,a7 as b,a8 as k,o as d,a as c,h as t,y as p,v as w,b as o,ap as V,ax as S,a1 as y,n as C,x as D,ai as $,aj as B,aG as N,e as g,K as R,L as j,w as f,O as A}from"./entry.95308f2b.js";import{u as M}from"./multi-step-form.342d425a.js";const P={class:"group/nui-checkbox-headless relative"},T=["for"],H={class:"relative"},I=["id","true-value","false-value"],z=_({inheritAttrs:!1,__name:"BaseCheckboxHeadless",props:{label:{default:void 0},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1},modelValue:{default:void 0},id:{default:void 0}},emits:["update:modelValue"],setup(v,{expose:i,emit:m}){const s=v,l=x(),a=b(s,"modelValue",m,{passive:!0});i({el:l});const r=k(()=>s.id);return(n,e)=>(d(),c("div",P,[s.label?(d(),c("label",{key:0,for:t(r),class:"text-muted-400 mb-1 inline-block cursor-pointer select-none font-sans text-sm"},p(s.label),9,T)):w("",!0),o("div",H,[V(o("input",y({id:t(r),ref_key:"inputRef",ref:l,"onUpdate:modelValue":e[0]||(e[0]=u=>C(a)?a.value=u:null),"true-value":s.trueValue,"false-value":s.falseValue},n.$attrs,{class:"peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0",type:"checkbox"}),null,16,I),[[S,t(a)]]),D(n.$slots,"default",$(B({value:t(a)})))])]))}}),F={class:"mx-auto grid max-w-4xl gap-4 px-4 sm:grid-cols-3"},G={class:"flex items-center gap-3"},L=["src"],U={class:"text-muted-800 dark:text-muted-100 text-sm font-medium"},E={class:"text-muted-400 text-xs"},W=_({__name:"step-6",setup(v){const{data:i}=M();N({title:"Project tools"});const m=[{name:"Illustrator",description:"Design Software",logo:"/img/logos/tools/illustrator.svg"},{name:"Photoshop",description:"Design Software",logo:"/img/logos/tools/photoshop.svg"},{name:"Adobe XD",description:"Design Software",logo:"/img/logos/tools/xd.svg"},{name:"Figma",description:"Design Software",logo:"/img/logos/tools/xd.svg"},{name:"Invision",description:"Design Software",logo:"/img/logos/tools/invision.svg"},{name:"Jira",description:"Issue Tracker",logo:"/img/logos/tools/jira.svg"},{name:"Taiga",description:"Scrumboard",logo:"/img/logos/tools/taiga.svg"},{name:"Slack",description:"Messaging App",logo:"/img/logos/tools/slack.svg"},{name:"Asana",description:"Task Manager",logo:"/img/logos/tools/asana.svg"},{name:"Teamwork",description:"Collaborative App",logo:"/img/logos/tools/teamwork.svg"},{name:"GitHub",description:"Code Repository",logo:"/img/logos/tools/github.svg"},{name:"Gitlab",description:"Code Repository",logo:"/img/logos/tools/gitlab.svg"}];return(s,l)=>{const a=h,r=A,n=z;return d(),c("div",null,[g(a),o("div",F,[(d(),c(R,null,j(m,e=>o("div",{key:e.name,class:"relative"},[g(n,{modelValue:t(i).tools,"onUpdate:modelValue":l[0]||(l[0]=u=>t(i).tools=u),value:e,name:e.name},{default:f(()=>[g(r,{shape:"curved",class:"peer-checked:border-primary-500 peer-checked:shadow-muted-300/30 dark:peer-checked:shadow-muted-900/30 p-4 peer-checked:shadow-xl"},{default:f(()=>[o("div",G,[o("img",{src:e.logo,class:"h-8 w-8"},null,8,L),o("div",null,[o("div",U,p(e.name),1),o("div",E,p(e.description),1)])])]),_:2},1024)]),_:2},1032,["modelValue","value","name"])])),64))])])}}});export{W as default};
