import{aj as m,d as f,N as p,C as _,o as h,e as g,h as e,i as s,l as o,U as v,g as t,t as r,m as x,G as b,Q as w,B as y}from"./DmTmMO_-.js";import{u as k}from"./BHLlrkjG.js";import{S as j,M as A,g as B}from"./C100mYQ1.js";import"./DzMF6t2X.js";const n=m("/placeholder-file.png"),C={class:"group inline-flex items-center justify-center text-right"},M=t("button",{type:"button",class:"group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"},[t("div",{class:"relative inline-flex h-9 w-9 items-center justify-center rounded-full"},[t("img",{src:n,class:"max-w-full rounded-full object-cover shadow-sm dark:border-transparent",alt:""})])],-1),N={class:"p-6 text-center"},S=t("div",{class:"relative mx-auto flex h-20 w-20 items-center justify-center rounded-full"},[t("img",{src:n,class:"max-w-full rounded-full object-cover shadow-sm dark:border-transparent",alt:""})],-1),L={class:"mt-3"},R={class:"font-heading text-muted-800 text-sm font-medium dark:text-white"},T={class:"text-muted-400 mb-4 font-sans text-xs"},V={class:"p-6"},P=t("button",{type:"submit",shape:"curved",class:"w-full"},"Logout",-1),U=[P],z=f({__name:"ToolbarAccountMenu",setup($){const{$jwtAuth:i}=p(),l=_(),{user:a,loggedIn:D}=k();function c(){console.log("logout"),i.logout(()=>{l.push(w().public.auth.redirects.logout)})}return(E,G)=>{const d=y;return h(),g("div",C,[e(o(B),{as:"div",class:"relative h-9 w-9 text-left rtl:text-right"},{default:s(({close:u})=>[e(o(j),{as:"template"},{default:s(()=>[M]),_:1}),e(v,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:s(()=>[e(o(A),{class:"divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute end-0 mt-2 w-64 origin-top-right divide-y rounded-md border bg-white shadow-lg focus:outline-none"},{default:s(()=>[t("div",N,[S,t("div",L,[t("h6",R,r(o(a).name),1),t("p",T,r(o(a).email),1),e(d,{to:"/layouts/profile-edit",shape:"curved",class:"w-full",onClickPassive:u},{default:s(()=>[x("Manage Account ")]),_:2},1032,["onClickPassive"])])]),t("div",V,[t("form",{action:"#",method:"post",onSubmit:b(c,["prevent"])},U,32)])]),_:2},1024)]),_:2},1024)]),_:1})])}}});export{z as default};
