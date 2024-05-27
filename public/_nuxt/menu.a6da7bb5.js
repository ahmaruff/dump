import{r as y,P as O,R as $,aH as f,d as D,aI as K,c as R,aJ as j,aK as H,I as U,aL as V,aM as _,aN as x,aO as P,aP as F,aQ as q,aR as w,aS as J,J as S,H as Q,aT as m,aU as W,aV as k,aW as L,aX as X}from"./entry.95308f2b.js";import{p as Y,u as Z,x as z,a as M}from"./use-tracked-pointer.585c84ee.js";function E(t,u){if(t)return t;let l=u??"button";if(typeof l=="string"&&l.toLowerCase()==="button")return"button"}function G(t,u){let l=y(E(t.value.type,t.value.as));return O(()=>{l.value=E(t.value.type,t.value.as)}),$(()=>{var i;l.value||f(u)&&f(u)instanceof HTMLButtonElement&&!((i=f(u))!=null&&i.hasAttribute("type"))&&(l.value="button")}),l}let A=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function C(t){var u,l;let i=(u=t.innerText)!=null?u:"",e=t.cloneNode(!0);if(!(e instanceof HTMLElement))return i;let s=!1;for(let g of e.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))g.remove(),s=!0;let r=s?(l=e.innerText)!=null?l:"":i;return A.test(r)&&(r=r.replace(A,"")),r}function ee(t){let u=t.getAttribute("aria-label");if(typeof u=="string")return u.trim();let l=t.getAttribute("aria-labelledby");if(l){let i=l.split(" ").map(e=>{let s=document.getElementById(e);if(s){let r=s.getAttribute("aria-label");return typeof r=="string"?r.trim():C(s).trim()}return null}).filter(Boolean);if(i.length>0)return i.join(", ")}return C(t).trim()}function te(t){let u=y(""),l=y("");return()=>{let i=f(t);if(!i)return"";let e=i.innerText;if(u.value===e)return l.value;let s=ee(i).trim().toLowerCase();return u.value=e,l.value=s,s}}var ae=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(ae||{}),ne=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(ne||{});function le(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let B=Symbol("MenuContext");function T(t){let u=Q(B,null);if(u===null){let l=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,T),l}return u}let oe=D({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:u,attrs:l}){let i=y(1),e=y(null),s=y(null),r=y([]),g=y(""),p=y(null),v=y(1);function a(o=c=>c){let c=p.value!==null?r.value[p.value]:null,d=X(o(r.value.slice()),I=>f(I.dataRef.domRef)),n=c?d.indexOf(c):null;return n===-1&&(n=null),{items:d,activeItemIndex:n}}let b={menuState:i,buttonRef:e,itemsRef:s,items:r,searchQuery:g,activeItemIndex:p,activationTrigger:v,closeMenu:()=>{i.value=1,p.value=null},openMenu:()=>i.value=0,goToItem(o,c,d){let n=a(),I=z(o===M.Specific?{focus:M.Specific,id:c}:{focus:o},{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:h=>h.id,resolveDisabled:h=>h.dataRef.disabled});g.value="",p.value=I,v.value=d??1,r.value=n.items},search(o){let c=g.value!==""?0:1;g.value+=o.toLowerCase();let d=(p.value!==null?r.value.slice(p.value+c).concat(r.value.slice(0,p.value+c)):r.value).find(I=>I.dataRef.textValue.startsWith(g.value)&&!I.dataRef.disabled),n=d?r.value.indexOf(d):-1;n===-1||n===p.value||(p.value=n,v.value=1)},clearSearch(){g.value=""},registerItem(o,c){let d=a(n=>[...n,{id:o,dataRef:c}]);r.value=d.items,p.value=d.activeItemIndex,v.value=1},unregisterItem(o){let c=a(d=>{let n=d.findIndex(I=>I.id===o);return n!==-1&&d.splice(n,1),d});r.value=c.items,p.value=c.activeItemIndex,v.value=1}};return K([e,s],(o,c)=>{var d;b.closeMenu(),j(c,H.Loose)||(o.preventDefault(),(d=f(e))==null||d.focus())},R(()=>i.value===0)),U(B,b),V(R(()=>_(i.value,{[0]:x.Open,[1]:x.Closed}))),()=>{let o={open:i.value===0,close:b.closeMenu};return P({ourProps:{},theirProps:t,slot:o,slots:u,attrs:l,name:"Menu"})}}}),ie=D({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${F()}`}},setup(t,{attrs:u,slots:l,expose:i}){let e=T("MenuButton");i({el:e.buttonRef,$el:e.buttonRef});function s(v){switch(v.key){case m.Space:case m.Enter:case m.ArrowDown:v.preventDefault(),v.stopPropagation(),e.openMenu(),S(()=>{var a;(a=f(e.itemsRef))==null||a.focus({preventScroll:!0}),e.goToItem(M.First)});break;case m.ArrowUp:v.preventDefault(),v.stopPropagation(),e.openMenu(),S(()=>{var a;(a=f(e.itemsRef))==null||a.focus({preventScroll:!0}),e.goToItem(M.Last)});break}}function r(v){switch(v.key){case m.Space:v.preventDefault();break}}function g(v){t.disabled||(e.menuState.value===0?(e.closeMenu(),S(()=>{var a;return(a=f(e.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(v.preventDefault(),e.openMenu(),le(()=>{var a;return(a=f(e.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let p=G(R(()=>({as:t.as,type:u.type})),e.buttonRef);return()=>{var v;let a={open:e.menuState.value===0},{id:b,...o}=t,c={ref:e.buttonRef,id:b,type:p.value,"aria-haspopup":"menu","aria-controls":(v=f(e.itemsRef))==null?void 0:v.id,"aria-expanded":e.menuState.value===0,onKeydown:s,onKeyup:r,onClick:g};return P({ourProps:c,theirProps:o,slot:a,attrs:u,slots:l,name:"MenuButton"})}}}),se=D({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${F()}`}},setup(t,{attrs:u,slots:l,expose:i}){let e=T("MenuItems"),s=y(null);i({el:e.itemsRef,$el:e.itemsRef}),Y({container:R(()=>f(e.itemsRef)),enabled:R(()=>e.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function r(a){var b;switch(s.value&&clearTimeout(s.value),a.key){case m.Space:if(e.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),e.search(a.key);case m.Enter:if(a.preventDefault(),a.stopPropagation(),e.activeItemIndex.value!==null){let o=e.items.value[e.activeItemIndex.value];(b=f(o.dataRef.domRef))==null||b.click()}e.closeMenu(),L(f(e.buttonRef));break;case m.ArrowDown:return a.preventDefault(),a.stopPropagation(),e.goToItem(M.Next);case m.ArrowUp:return a.preventDefault(),a.stopPropagation(),e.goToItem(M.Previous);case m.Home:case m.PageUp:return a.preventDefault(),a.stopPropagation(),e.goToItem(M.First);case m.End:case m.PageDown:return a.preventDefault(),a.stopPropagation(),e.goToItem(M.Last);case m.Escape:a.preventDefault(),a.stopPropagation(),e.closeMenu(),S(()=>{var o;return(o=f(e.buttonRef))==null?void 0:o.focus({preventScroll:!0})});break;case m.Tab:a.preventDefault(),a.stopPropagation(),e.closeMenu(),S(()=>W(f(e.buttonRef),a.shiftKey?k.Previous:k.Next));break;default:a.key.length===1&&(e.search(a.key),s.value=setTimeout(()=>e.clearSearch(),350));break}}function g(a){switch(a.key){case m.Space:a.preventDefault();break}}let p=q(),v=R(()=>p!==null?(p.value&x.Open)===x.Open:e.menuState.value===0);return()=>{var a,b;let o={open:e.menuState.value===0},{id:c,...d}=t,n={"aria-activedescendant":e.activeItemIndex.value===null||(a=e.items.value[e.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(b=f(e.buttonRef))==null?void 0:b.id,id:c,onKeydown:r,onKeyup:g,role:"menu",tabIndex:0,ref:e.itemsRef};return P({ourProps:n,theirProps:d,slot:o,attrs:u,slots:l,features:w.RenderStrategy|w.Static,visible:v.value,name:"MenuItems"})}}}),ve=D({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${F()}`}},setup(t,{slots:u,attrs:l,expose:i}){let e=T("MenuItem"),s=y(null);i({el:s,$el:s});let r=R(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===t.id:!1),g=te(s),p=R(()=>({disabled:t.disabled,get textValue(){return g()},domRef:s}));O(()=>e.registerItem(t.id,p)),J(()=>e.unregisterItem(t.id)),$(()=>{e.menuState.value===0&&r.value&&e.activationTrigger.value!==0&&S(()=>{var n,I;return(I=(n=f(s))==null?void 0:n.scrollIntoView)==null?void 0:I.call(n,{block:"nearest"})})});function v(n){if(t.disabled)return n.preventDefault();e.closeMenu(),L(f(e.buttonRef))}function a(){if(t.disabled)return e.goToItem(M.Nothing);e.goToItem(M.Specific,t.id)}let b=Z();function o(n){b.update(n)}function c(n){b.wasMoved(n)&&(t.disabled||r.value||e.goToItem(M.Specific,t.id,0))}function d(n){b.wasMoved(n)&&(t.disabled||r.value&&e.goToItem(M.Nothing))}return()=>{let{disabled:n}=t,I={active:r.value,disabled:n,close:e.closeMenu},{id:h,...N}=t;return P({ourProps:{id:h,ref:s,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,disabled:void 0,onClick:v,onFocus:a,onPointerenter:o,onMouseenter:o,onPointermove:c,onMousemove:c,onPointerleave:d,onMouseleave:d},theirProps:{...l,...N},slot:I,attrs:l,slots:u,name:"MenuItem"})}}});export{oe as M,ie as R,se as h,ve as y};
