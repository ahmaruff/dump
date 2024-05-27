import{r,a4 as A,d as O,a9 as L,u as M,c as R,C as q,a2 as G,o as u,a as h,e,w as a,h as i,n as b,f as c,b as s,t as N,v as T,K as H,L as W,l as J,_ as Q,m as X,y as w}from"./entry.95308f2b.js";import{_ as Y}from"./BaseCheckbox.vue.60037f21.js";import{_ as Z,a as ee,b as ae,c as se,d as te,e as oe}from"./TairoContentWrapper.vue.6ec55e1e.js";import{_ as ne}from"./BaseSelect.vue.e398a32e.js";function le(F){const m=r([]),g=r([]),v=r(null),p=r(!1);return{categories:g,products:m,error:v,loading:p,fetchProducts:async()=>{p.value=!0;try{const o=localStorage.getItem("token");if(!o)throw new Error("No token found");const[y,f]=await Promise.all([A("https://api.dev.commerce.waktoo.com:443/api/product-categories").headers({Authorization:`Bearer ${o}`,"Content-Type":"application/json"}).get().json(),A("https://api.dev.commerce.waktoo.com:443/api/product-data").headers({Authorization:`Bearer ${o}`,"Content-Type":"application/json"}).get().json()]);y.status==="success"?g.value=y.data.product_category:console.error("Failed to fetch data from product-categories API:",y),f.status==="success"?m.value=f.data.product_data:console.error("Failed to fetch data from product-data API:",f)}catch(o){v.value=o.message,console.error("Error fetching products:",o)}finally{p.value=!1}}}}const ce=s("span",null,"Tambah Produk",-1),re={class:"w-full"},de={class:"flex items-center"},ue=s("a",{href:"#",class:"outline-none hover:underline focus:underline"},"Click here to everything",-1),ie={class:"flex items-center"},pe={class:"flex items-center"},_e=["src"],me={class:"ms-3 leading-none"},fe={class:"font-sans text-sm font-medium dxz-2"},he=s("span",{class:"start-text"},"4.7",-1),ge=s("img",{src:"https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png"},null,-1),ve=s("b",null,"12.049",-1),ye={class:"font-bold"},ke=s("br",null,null,-1),we=s("span",{class:"txt-sm-alert3"},"-",-1),xe={key:0,class:"txt-sm-alert4"},be={key:1,class:"txt-sm-alert2"},Te={class:"font-sans text-sm font-medium"},Ve={class:"mt-6"},Ie=s("option",{value:10},"10 data per halaman",-1),Pe=s("option",{value:25},"25 data per halaman",-1),$e=s("option",{value:50},"50 data per halaman",-1),Be=s("option",{value:100},"100 data per halaman",-1),Ke=O({__name:"index",setup(F){const m=L();r(m);const g=M(),v=R(()=>parseInt(m.query.page??"1")),p=r(!0),_=r(""),o=r(10),{categories:y,products:f,error:Ce,loading:Ae,fetchProducts:D}=le();D(),q([_,o],()=>{g.push({query:{page:void 0}})}),R(()=>({filter:_.value,perPage:o.value,page:v.value}));const k=r([]),V=I=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(I);return(I,n)=>{const K=J,P=Q,$=X,B=Y,d=Z,l=ee,C=ae,S=G("router-link"),U=oe,j=se,z=ne,E=te;return u(),h("div",null,[e(E,null,{right:a(()=>[e(K,{modelValue:i(_),"onUpdate:modelValue":n[0]||(n[0]=t=>b(_)?_.value=t:null),icon:"lucide:search",placeholder:"Pencarian",classes:{wrapper:"w-full"}},null,8,["modelValue"]),e($,{class:"w-full sm:w-32"},{default:a(()=>[e(P,{name:"lucide:filter",class:"h-4 w-4"}),c("   Filter ")]),_:1})]),left:a(()=>[e($,{color:"primary",to:"/shop-admin/create",class:"w-full sm:w-42"},{default:a(()=>[e(P,{name:"lucide:plus",class:"h-4 w-4"}),ce]),_:1})]),default:a(()=>[s("div",null,[s("div",null,[s("div",re,[e(j,{shape:"rounded",scrollable:!1},{header:a(()=>[e(d,{uppercase:"",spaced:"",class:"p-4"},{default:a(()=>[s("div",de,[e(B,{name:"table-1-main",shape:"rounded",class:"text-primary-500"})])]),_:1}),e(d,{uppercase:"",spaced:""},{default:a(()=>[c(" NAMA PRODUK ")]),_:1}),e(d,{uppercase:"",spaced:""},{default:a(()=>[c("NILAI")]),_:1}),e(d,{uppercase:"",spaced:""},{default:a(()=>[c("HARGA")]),_:1}),e(d,{uppercase:"",spaced:""},{default:a(()=>[c("DISKON")]),_:1}),e(d,{uppercase:"",spaced:""},{default:a(()=>[c("KATEGORI")]),_:1}),e(d,{uppercase:"",spaced:""},{default:a(()=>[c(" STOK ")]),_:1}),e(d,{uppercase:"",spaced:""},{default:a(()=>[c("AKTIF")]),_:1})]),default:a(()=>[i(k).length>0?(u(),N(C,{key:0,hoverable:!1},{default:a(()=>[e(l,{colspan:"8",class:"bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"},{default:a(()=>[ue]),_:1})]),_:1})):T("",!0),(u(!0),h(H,null,W(i(f),t=>(u(),N(C,{key:t?.id},{default:a(()=>[e(l,{spaced:""},{default:a(()=>[s("div",ie,[e(B,{modelValue:i(k),"onUpdate:modelValue":n[1]||(n[1]=x=>b(k)?k.value=x:null),value:t?.id,name:`item-checkbox-${t?.id}`,shape:"rounded",class:"text-primary-500"},null,8,["modelValue","value","name"])])]),_:2},1024),e(l,{spaced:"",style:{width:"300px"}},{default:a(()=>[e(S,{to:`/shop-admin/${t?.id}`},{default:a(()=>[s("div",pe,[t?.images?(u(),h("img",{key:0,src:t?.images[0],alt:"image description",style:{width:"50px",height:"50px"},class:"img-produk"},null,8,_e)):T("",!0),s("div",me,[s("h4",fe,w(t?.name),1)])])]),_:2},1032,["to"])]),_:2},1024),e(l,{light:"",spaced:""},{default:a(()=>[he,ge,ve,c(" Penilaian ")]),_:1}),e(l,{light:"",spaced:""},{default:a(()=>[s("span",ye,w(V(t?.price)),1),ke,s("s",null,w(V(t?.price)),1)]),_:2},1024),e(l,{spaced:"",class:"capitalize"},{default:a(()=>[we]),_:1}),e(l,{spaced:""},{default:a(()=>[t?.product_category_id===1?(u(),h("span",xe,"Minuman & Makanan")):t?.product_category_id===2?(u(),h("span",be,"Fashion Pria")):T("",!0)]),_:2},1024),e(l,{spaced:""},{default:a(()=>[s("h4",Te,w(t?.stock),1)]),_:2},1024),e(l,{spaced:""},{default:a(()=>[e(U,{modelValue:i(p).success,"onUpdate:modelValue":n[2]||(n[2]=x=>i(p).success=x),color:"success"},null,8,["modelValue"])]),_:1})]),_:2},1024))),128))]),_:1})]),s("div",Ve,[e(z,{modelValue:i(o),"onUpdate:modelValue":n[3]||(n[3]=t=>b(o)?o.value=t:null),label:"",classes:{wrapper:"w-full sm:w-40 absolute-page"}},{default:a(()=>[Ie,Pe,$e,Be]),_:1},8,["modelValue"])])])])]),_:1})])}}});export{Ke as default};