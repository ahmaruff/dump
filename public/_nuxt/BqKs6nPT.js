import{d as w,I as e,J as g,o as y,e as b,g as h,n as m,l as s,a7 as k}from"./DmTmMO_-.js";const z=["aria-valuenow","aria-valuemax"],C=w({__name:"BaseProgress",props:{value:{default:void 0},max:{default:100},color:{default:void 0},contrast:{default:void 0},rounded:{default:void 0},size:{default:void 0},classes:{default:()=>({})}},setup(f){const r=f,t=e(r,"BaseProgress","color"),u=e(r,"BaseProgress","contrast"),i=e(r,"BaseProgress","rounded"),l=e(r,"BaseProgress","size"),v={primary:"nui-progress-primary",info:"nui-progress-info",success:"nui-progress-success",warning:"nui-progress-warning",danger:"nui-progress-danger",light:"nui-progress-light",dark:"nui-progress-dark",black:"nui-progress-black"},x={default:"nui-progress-default",contrast:"nui-progress-contrast"},_={none:"",sm:"nui-progress-rounded-sm",md:"nui-progress-rounded-md",lg:"nui-progress-rounded-lg",full:"nui-progress-rounded-full"},B={xs:"nui-progress-xs",sm:"nui-progress-sm",md:"nui-progress-md",lg:"nui-progress-lg",xl:"nui-progress-xl"},o=g(()=>{const{value:a,max:n}=r;return n===0?0:typeof a=="number"?a/n*100:void 0}),d=g(()=>typeof o.value!="number");return(a,n)=>{var c,p;return y(),b("div",{role:"progressbar","aria-valuenow":s(o),"aria-valuemax":r.max,class:m(["nui-progress",[s(l)&&B[s(l)],s(u)&&x[s(u)],s(t)&&v[s(t)],s(i)&&_[s(i)],(c=r.classes)==null?void 0:c.wrapper]])},[h("div",{class:m(["nui-progress-bar",[s(d)&&"nui-progress-indeterminate animate-nui-progress-indeterminate",(p=r.classes)==null?void 0:p.progress]]),style:k(s(d)?"width: 100%":`width: ${s(o)}%`)},null,6)],10,z)}}});export{C as _};