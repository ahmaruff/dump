import{d as S,ah as N,o as a,t as g,w as l,W as P,h as e,a1 as D,x as n,b as s,z as d,f as B,y as f,a as m,v as $,s as V,c as L,e as u,ai as h,aj as v,T as R,_ as T,m as j}from"./entry.95308f2b.js";import{y as I,R as M,h as A,M as E}from"./menu.a6da7bb5.js";const W={class:"nui-item-content"},q={key:0,class:"text-muted-400 font-sans text-xs"},Z=S({__name:"BaseDropdownItem",props:{type:{default:void 0},to:{default:void 0},href:{default:void 0},disabled:{type:Boolean,default:!1},shape:{default:void 0},color:{default:"default"},rel:{default:void 0},target:{default:void 0},title:{default:void 0},text:{default:void 0},classes:{default:()=>({title:"font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white",text:"text-muted-400 font-sans text-xs"})}},setup(_){const t=_,y={straight:"",rounded:"nui-item-rounded",smooth:"nui-item-smooth",curved:"nui-item-curved"},c={default:"nui-item-default",contrast:"nui-item-contrast"},{is:b,attributes:x}=N(t);return(o,k)=>(a(),g(e(I),{as:"div"},{default:l(({active:r,close:C})=>[(a(),g(P(e(b)),D(e(x),{class:["nui-dropdown-item",[r&&"nui-active",t.shape&&y[t.shape],c[t.color]]],onClickPassive:C}),{default:l(()=>[n(o.$slots,"start"),s("div",W,[s("div",{class:d(t.classes.title)},[n(o.$slots,"default",{},()=>[B(f(t.title),1)])],2),"text"in o.$slots||t.text?(a(),m("p",q,[n(o.$slots,"text",{},()=>[B(f(t.text),1)])])):$("",!0)]),n(o.$slots,"end")]),_:2},1040,["class","onClickPassive"]))]),_:3}))}}),F={key:1,type:"button",class:"nui-context-button"},G={class:"nui-context-button-inner"},H={key:2,type:"button",class:"nui-text-button"},J={class:"nui-text-button-inner"},K={key:0,class:"nui-menu-header"},O={class:"nui-menu-header-inner"},Q={class:"nui-menu-header-title"},U={class:"nui-menu-content"},tt=S({__name:"BaseDropdown",props:{flavor:{default:"button"},buttonColor:{default:"default"},color:{default:"white"},shape:{default:void 0},orientation:{default:"start"},size:{default:"md"},label:{default:""},headerLabel:{default:void 0}},setup(_){const t=_,y=V(),c=L(()=>t.shape??y.nui.defaultShapes?.dropdown),b={start:"nui-dropdown-start",end:"nui-dropdown-end"},x={md:"nui-menu-md",lg:"nui-menu-lg"},o={straight:"",rounded:"nui-menu-rounded",smooth:"nui-menu-smooth",curved:"nui-menu-curved",full:"nui-menu-curved"},k={white:"nui-menu-white","white-contrast":"nui-menu-white-contrast",muted:"nui-menu-muted","muted-contrast":"nui-menu-muted-contrast",primary:"nui-menu-primary",info:"nui-menu-info",success:"nui-menu-success",warning:"nui-menu-warning",danger:"nui-menu-danger",none:""};return(r,C)=>{const w=T,z=j;return a(),m("div",{class:d(["nui-dropdown",[b[t.orientation]]])},[u(e(E),{as:"div",class:"nui-menu"},{default:l(({open:i,close:p})=>[u(e(M),{as:"template"},{default:l(()=>[n(r.$slots,"button",h(v({open:i,close:p})),()=>[t.flavor==="button"?(a(),g(z,{key:0,color:t.buttonColor,shape:e(c),class:"!pe-3 !ps-4"},{default:l(()=>[n(r.$slots,"label",h(v({open:i,close:p})),()=>[s("span",null,f(t.label),1)]),u(w,{name:"lucide:chevron-down",class:d(["nui-chevron",i&&"rotate-180"])},null,8,["class"])]),_:2},1032,["color","shape"])):t.flavor==="context"?(a(),m("button",F,[s("span",G,[u(w,{name:"lucide:more-horizontal",class:d(["nui-context-icon",i&&"rotate-90"])},null,8,["class"])])])):t.flavor==="text"?(a(),m("button",H,[n(r.$slots,"label",h(v({open:i,close:p})),()=>[s("span",J,f(t.label),1)]),u(w,{name:"lucide:chevron-down",class:d(["nui-chevron",i&&"rotate-180"])},null,8,["class"])])):$("",!0)])]),_:2},1024),u(R,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:l(()=>[u(e(A),{class:d(["nui-dropdown-menu",[e(c)&&o[e(c)],x[t.size],k[t.color]]])},{default:l(()=>[t.headerLabel?(a(),m("div",K,[s("div",O,[s("h4",Q,f(t.headerLabel),1)])])):$("",!0),s("div",U,[n(r.$slots,"default",h(v({open:i,close:p})))])]),_:2},1032,["class"])]),_:2},1024)]),_:3})],2)}}});export{Z as _,tt as a};