import{r as S,u as w,J as s,R as v,N as P,L as d}from"./DmTmMO_-.js";import{a as g}from"./DxbODIPu.js";const x={circularMenu:{enabled:!1,tools:[]},navigation:{enabled:!0,logo:{component:"LogoCommerce",props:{}},startOpen:!1,items:[{title:"Dashboards",to:"/dashboards",icon:{name:"IconDashboard"}},{title:"Channel",to:"/channel",icon:{name:"IconChannel"}},{title:"Kontak",to:"/kontak",icon:{name:"IconContact"}},{title:"Produk",to:"/produk",icon:{name:"IconProduct"}},{title:"Produk tes",to:"/tes",icon:{name:"IconProduct"}}]},toolbar:{enabled:!0,showNavBurger:!0,showTitle:!0,tools:[]}},r=S();function I(){return{setSidebarConfig:i=>{r.value=i},getSidebarConfig:()=>r.value||x,sidebarConfig:r}}const{getSidebarConfig:N}=I();function B(){const c=w(),l=s(()=>N()),i=s(()=>{var e,a,o,n;return((e=l.value.navigation)==null?void 0:e.enabled)==!1||((o=(a=l.value.navigation)==null?void 0:a.items)==null?void 0:o.length)===0?[]:(n=l.value.navigation)==null?void 0:n.items}),u=v("sidebar-name",()=>""),t=v("sidebar-open",()=>{}),p=s(()=>{var e;return(e=i.value)==null?void 0:e.some(a=>{var o;return(o=a.subsidebar)==null?void 0:o.component})}),m=s(()=>{var e;if(u.value)return(e=i.value)==null?void 0:e.find(({title:a})=>a===u.value)});function b(){var e,a;if(console.log("awal",t),!u.value&&!t.value){if(!((a=(e=i.value)==null?void 0:e[0])!=null&&a.title))return;u.value=i.value[0].title}console.log("awal1",t.value),console.log("awal1",!t.value),t.value=!t.value,console.log("akhir",t)}function h(e=!1){t.value=!1,e&&(u.value="")}function C(e){u.value=e,t.value=!0}function f(){var a,o;if(!((a=l.value.navigation)!=null&&a.startOpen)){t.value=!1;return}const e=(o=i.value)==null?void 0:o.find(n=>(n==null?void 0:n.activePath)&&c.fullPath.startsWith(n.activePath));e&&(u.value=e.title,g().xl.value,t.value=!1)}function k(){const a=P().hook("page:finish",n=>{f(),a()}),{xl:o}=g();d(o,n=>{n||(t.value=!1)}),d(()=>u,n=>{n?o.value&&(t.value=!0):t.value=!1})}return{sidebarConfiguration:l,sidebars:i,hasSubsidebar:p,current:m,currentName:u,isOpen:t,toggle:b,close:h,open:C,detect:f,setup:k}}export{I as a,B as u};