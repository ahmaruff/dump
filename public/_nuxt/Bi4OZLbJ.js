import{_ as Be}from"./C_jKOqdG.js";import{d as ue,a9 as Se,aa as je,r as h,I as Ue,o as c,e as m,g as e,p as Ae,l as N,n as G,h as l,t as g,N as Te,J as H,D as ze,O as Fe,E as Ne,b as de,i as t,m as r,F as R,k as L,c as q,j as X,G as Re,f as Y,H as re,_ as De,B as Me,ae as Ke,af as Ee,y as Ge,z as We,A as Oe}from"./DmTmMO_-.js";import{_ as Je}from"./Wwwchkvl.js";import{_ as He,a as Le}from"./COXD0Gwp.js";import{_ as qe}from"./CK18j4Hi.js";import{_ as Xe}from"./B4A7ptYP.js";import{_ as Ye}from"./CtInf2Mp.js";import{_ as Qe}from"./DKAPklYH.js";import{a as Ze,_ as ea}from"./CS1u5HP7.js";import{_ as aa,a as sa,b as la,c as ta,d as oa}from"./Dp2P3cTD.js";import{u as na}from"./C5pBaPI_.js";import{u as ia}from"./BHLlrkjG.js";import{u as ca}from"./BCX54yQo.js";const da=["for"],ra=["id","checked"],ua={key:0,class:"nui-switch-ball-single-label"},ma={key:1,class:"nui-switch-ball-dual-label"},pa={class:"nui-switch-ball-label"},_a={class:"nui-switch-ball-sublabel"},ha=ue({inheritAttrs:!1,__name:"BaseSwitchBall",props:Se({id:{default:void 0},label:{default:void 0},sublabel:{default:void 0},color:{default:void 0},classes:{default:()=>({})}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(I,{expose:y}){const _=I,[b]=je(I,"modelValue"),$=h(),B=na(()=>_.id),C=Ue(_,"BaseSwitchBall","color"),S={primary:"nui-switch-ball-primary",info:"nui-switch-ball-info",success:"nui-switch-ball-success",warning:"nui-switch-ball-warning",danger:"nui-switch-ball-danger",dark:"nui-switch-ball-dark",black:"nui-switch-ball-black"};return y({el:$,id:B}),(x,T)=>{var z,W,O,v,P,D;const u=Ze;return c(),m("label",{for:N(B),class:G(["nui-switch-ball",[N(C)&&S[N(C)],(z=_.classes)==null?void 0:z.wrapper]])},[e("span",{class:G(["nui-switch-ball-outer",(W=_.classes)==null?void 0:W.outer])},[e("input",Ae({id:N(B),ref_key:"inputRef",ref:$,checked:N(b)},x.$attrs,{type:"checkbox",class:["nui-switch-ball-input peer",(O=_.classes)==null?void 0:O.input],onChange:T[0]||(T[0]=j=>b.value=!N(b))}),null,16,ra),e("span",{class:G(["nui-switch-ball-handle",(v=_.classes)==null?void 0:v.handle])},null,2),e("span",{class:G(["nui-switch-ball-track",(P=_.classes)==null?void 0:P.track])},null,2),l(u,{class:G(["nui-switch-ball-icon",(D=_.classes)==null?void 0:D.icon])},null,8,["class"])],2),_.sublabel?(c(),m("span",ma,[e("span",pa,g(_.label),1),e("span",_a,g(_.sublabel),1)])):(c(),m("span",ua,g(_.label),1))],10,da)}}}),n=I=>(Ge("data-v-d47fbff7"),I=I(),We(),I),ga=n(()=>e("span",null,"Tambah Produk",-1)),va={class:"flex w-full items-center justify-between p-4 md:p-6",style:{border:"1px solid #ddd"}},fa=n(()=>e("h3",{class:"font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"}," Tambah Produk ",-1)),ka={class:"p-4 mrgn scroll-y"},ba=n(()=>e("div",{class:"mlls"},[e("div",{class:"title-m-1"},"Informasi Produk"),e("div",{class:"title-m-2"},"Ini adalah informasi yang pertama ditampilkan untuk pelanggan")],-1)),ya={class:"grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"},wa=n(()=>e("div",{class:"line-height-normal"},[e("span",{class:"title-m-3"},"Nama Produk"),r(),e("span",{class:"alert-red"},"Wajib"),e("br"),e("span",{class:"title-m-2"},"Nama produk minimal mempunyai 40 karakter dengan memasukkan merek, jenis produk, warna, bahan, atau tipe.")],-1)),Va={class:"line-height-normal"},$a={class:"grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"},Ca=n(()=>e("div",{class:"line-height-normal"},[e("span",{class:"title-m-3"},"Kategori"),r(),e("span",{class:"alert-red"},"Wajib"),e("br"),e("span",{class:"title-m-2"},"Pilih kategori yang sesuai dengan produk. Pemilihan kategori yang tepat akan mempermudah barang untuk dicari oleh pembeli.")],-1)),xa={class:"line-height-normal"},Pa=n(()=>e("option",{value:null},"Pilih Kategori",-1)),Ia=["value"],Ba={class:"grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"},Sa=n(()=>e("div",{class:"line-height-normal"},[e("span",{class:"title-m-3"},"Foto Produk"),r(),e("span",{class:"alert-red"},"Wajib"),e("br"),e("span",{class:"title-m-2"},[r("Wajib menambahkan minimal 1 dari 10 foto produk."),e("br"),r("Format foto harus jpg jpeg ong dan mempunyai ukuran minimal 300 × 300 px (untuk gambar optimal, gunakan ukuran min. 1.200 x 1.200 px).")])],-1)),ja={class:"line-height-normal"},Ua={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4"},Aa={class:"relative size-20"},Ta=["src"],za={key:1,class:"kotak-dotted"},Fa=n(()=>e("img",{src:"https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg"},null,-1)),Na=n(()=>e("br",null,null,-1)),Ra={key:2,class:"absolute bottom-0 end-0 z-20"},Da={key:3,class:"absolute bottom-0 end-0 z-20"},Ma={class:"relative","data-nui-tooltip":"Upload image"},Ka={class:"grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"},Ea=n(()=>e("div",{class:"line-height-normal"},[e("span",{class:"title-m-3"},"Kondisi"),r(),e("span",{class:"alert-red"},"Wajib"),e("br"),e("span",{class:"title-m-2"},"Wajib menambahkan keterangan kondisi produk baru atau bekas")],-1)),Ga={class:"line-height-normal",style:{"margin-left":"15px"}},Wa={class:"grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"},Oa={class:"grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"},Ja=n(()=>e("div",{class:"line-height-normal"},[e("span",{class:"title-m-3"},"Minimum Pesanan"),r(),e("span",{class:"alert-red"},"Wajib"),e("br"),e("span",{class:"title-m-2"},"Atur jumlah minimum yang harus dibeli untuk produk ini.")],-1)),Ha={class:"line-height-normal"},La={class:"grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"},qa=n(()=>e("div",{class:"line-height-normal"},[e("span",{class:"title-m-3"},"Harga Satuan"),r(),e("span",{class:"alert-red"},"Wajib"),e("br"),e("span",{class:"title-m-2"},"Atur jumlah minimum yang harus dibeli untuk produk ini.")],-1)),Xa={class:"line-height-normal"},Ya={class:"grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"},Qa=n(()=>e("div",{class:"line-height-normal"},[e("span",{class:"title-m-3"},"Status Produk"),e("br"),e("span",{class:"title-m-2"},"Jika status aktif, produkmu dapat dicari oleh calon pembeli.")],-1)),Za={class:"line-height-normal"},es={class:"grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"},as=n(()=>e("div",{class:"line-height-normal"},[e("span",{class:"title-m-3"},"Stok Produk"),e("br"),e("span",{class:"title-m-2"},"Jumlah barang atau unit yang tersedia untuk dijual.")],-1)),ss={class:"line-height-normal"},ls={class:"grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"},ts=n(()=>e("div",{class:"line-height-normal"},[e("span",{class:"title-m-3"},"Berat Produk"),e("br"),e("span",{class:"title-m-2"},"Jumlah barang atau unit yang tersedia untuk dijual.")],-1)),os={class:"line-height-normal"},ns={class:"grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"},is=n(()=>e("div",{class:"line-height-normal"},[e("span",{class:"title-m-3"},"Ukuran Produk"),e("br"),e("span",{class:"title-m-2"},"Masukkan ukuran produk setelah dikemas untuk menghitung berat volume.")],-1)),cs={class:"line-height-normal"},ds={class:"grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"},rs={class:"line-height-normal"},us={class:"line-height-normal text-right"},ms=n(()=>e("img",{class:"block dark:hidden",src:"https://res.cloudinary.com/daraki09f/image/upload/v1714112315/waktoo-commerce/data-empty-table.svg",alt:"Placeholder image"},null,-1)),ps=n(()=>e("img",{class:"hidden dark:block",src:"https://res.cloudinary.com/daraki09f/image/upload/v1714112315/waktoo-commerce/data-empty-table.svg",alt:"Placeholder image"},null,-1)),_s={class:"flex items-center"},hs=n(()=>e("a",{href:"#",class:"outline-none hover:underline focus:underline"},"Click here to everything",-1)),gs={class:"flex items-center"},vs=["onClick"],fs={class:"flex items-center"},ks=["src"],bs={class:"ms-3 leading-none"},ys={class:"font-sans text-sm font-medium dxz-2"},ws=n(()=>e("span",{class:"start-text"},"4.7",-1)),Vs=n(()=>e("img",{src:"https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png"},null,-1)),$s=n(()=>e("b",null,"12.049",-1)),Cs={key:0,class:"font-bold"},xs={key:1,class:"font-bold"},Ps={key:2,class:"font-bold"},Is={class:"txt-sm-alert4"},Bs={class:"font-sans text-sm font-medium"},Ss={class:"flex items-center"},js={class:"flex items-center"},Us={class:"ms-3 leading-none"},As={class:"font-sans text-sm font-medium dxz-2"},Ts=n(()=>e("span",{class:"start-text"},"4.7",-1)),zs=n(()=>e("img",{src:"https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png"},null,-1)),Fs=n(()=>e("b",null,"12.049",-1)),Ns={key:0,class:"font-bold"},Rs={key:1,class:"font-bold"},Ds={class:"font-sans text-sm font-medium"},Ms={class:"w-full flex flex-col md:flex-row justify-between items-center mt-6"},Ks={class:"w-full md:w-52"},Es=n(()=>e("option",{value:10},"10 data per halaman",-1)),Gs=n(()=>e("option",{value:25},"25 data per halaman",-1)),Ws=n(()=>e("option",{value:50},"50 data per halaman",-1)),Os=n(()=>e("option",{value:100},"100 data per halaman",-1)),Js={class:"flex flex-row gap-4 justify-end items-center"},Hs=ue({__name:"ProdukList",setup(I){Te();const{token:y}=ia(),_=h(null),b=ca(),$=h([]),B=h([]),C=h(null);h(null);const S=h(!1);h(!1);const x=h(!1),T=h(Array(10).fill(null)),u=h({name:"",description:"",stock:null,price:null,images:null,condition:null,video_url:null,min_order:null,weight:null,length:null,width:null,height:null,is_active:!0,product_category_id:""}),z=H({get:()=>C.value?C.value.id:null,set:o=>{C.value=B.value.find(s=>s.id===o)||null}}),W=()=>{sessionStorage.setItem("formData",JSON.stringify(u.value)),O.push("/admin-produk/tambah-produk")};ze();const O=Fe(),v=h(1),P=h(""),D=h(""),j=h(10);Ne(async()=>{{const o=sessionStorage.getItem("shopId");y.value&&await J(o)}});const ae=async(o,s)=>{try{const i=Object.keys(s).map(k=>`${encodeURIComponent(k)}=${encodeURIComponent(s[k])}`).join("&"),p=`${o}?${i}`;return S.value=!0,await Y(p).headers({Authorization:`Bearer ${y.value}`,"Content-Type":"application/json"}).get().json()}catch(i){throw console.error("API Error:",i),i}},J=async o=>{if(o)try{S.value=!0,console.log("page",v.value),console.log("per_page",j.value),j.value>10&&(v.value=1,console.log("page baru",v.value));const s={per_page:j.value,page:v.value,s:P.value},i=await ae("https://api.dev.commerce.waktoo.com:443/api/product-data",s);(i==null?void 0:i.status)==="success"&&(console.log("Products:",i.data.product_data),$.value=i.data.product_data,D.value=i.data.pagination);const p=await ae(`https://api.dev.commerce.waktoo.com:443/api/shops/${o}/categories`,{});(p==null?void 0:p.status)==="success"&&(console.log("Categories:",p.data.category),B.value=p.data.category),S.value=!1}catch(s){console.error("Error fetching data:",s),s.value="Failed to fetch data",S.value=!1}},me=()=>{let o=[...$.value];if(C.value&&(o=o.filter(s=>s.product_category_id===C.value.id)),P.value){const s=P.value.toLowerCase();o=o.filter(i=>i.name.toLowerCase().includes(s))}return o},pe=H(()=>me()),_e=o=>{j.value=parseInt(o.target.value),J(sessionStorage.getItem("shopId"))},he=()=>{v.value>1&&(v.value=v.value-1,J(sessionStorage.getItem("shopId")))},ge=()=>{v.value=v.value+1,J(sessionStorage.getItem("shopId")),console.log(v.value)},se=H(()=>D.value.total_pages),ve=async()=>{try{const o={...u.value,product_category_id:z.value};if(!y.value){console.error("Token not found");return}console.log(o),console.log(y);const s=await Y("https://api.dev.commerce.waktoo.com:443/api/product-data").headers({Authorization:`Bearer ${y.value}`}).post(o).json();if(s.status==="success"){const i=s.data.product_data.id,p=new FormData;T.value.forEach((K,te)=>{K&&p.append("images[]",K[0])}),console.log("Save Images:",p);const M=await(await fetch(`https://api.dev.commerce.waktoo.com:443/api/files/product-images/${i}`,{method:"POST",headers:{Authorization:`Bearer ${y.value}`},body:p})).json();console.log("Save Images Response:",M),M.status==="success"?(b.show({title:"Sukses",message:"Berhasil membuat produk",closable:!0,color:"success"}),re("/admin-produk")):(b.show({title:"Gagal",message:"Berhasil membuat produk dan gagal upload gambar ",closable:!0,color:"success"}),console.error("Failed to save images:",M.error),re("/admin-produk"))}else b.show({title:"Gagal",message:"gagal membuat produk",closable:!0,color:"success"}),console.error("Failed to save product:",s.error)}catch(o){console.error("Error:",o)}},fe=async o=>{try{const s="https://api.dev.commerce.waktoo.com:443/api/product-data",i=!o.is_active,p=o.product_category_id;(await Y(`${s}/${o.id}`).headers({Authorization:`Bearer ${y.value}`,"Content-Type":"application/json"}).put({is_active:i,product_category_id:p}).json()).status=="success"?b.show({title:"Sukses",message:"Berhasil mengubah status produk",closable:!0,color:"success"}):b.show({title:"Gagal",message:"Gagal mengubah status produk",closable:!0,color:"danger"})}catch(s){console.error("API Error:",s)}},ke=async o=>{try{const s="https://api.dev.commerce.waktoo.com:443/api/product-data";console.log("variant",o);const i=!o.is_active;(await Y(`${s}/${o.product_data_id}/variants/${o.id}`).headers({Authorization:`Bearer ${y.value}`,"Content-Type":"application/json"}).put({is_active:i}).json()).status=="success"?b.show({title:"Sukses",message:"Berhasil mengubah status varian",closable:!0,color:"success"}):b.show({title:"Gagal",message:"Gagal mengubah status varian",closable:!0,color:"danger"})}catch(s){console.error("API Error:",s)}},le=o=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(o),be=o=>{_.value==o?_.value=null:o!==-1&&(console.log(o),_.value=o,console.log(_))},w=h([]),Q=H(()=>w.value.length===$.value.length);function ye(){Q.value?w.value=[]:w.value=$.value.map(o=>o.id)}return h("default"),h(!0),(o,s)=>{const i=Be,p=De,k=Me,M=Ke,K=Je,te=de("center"),oe=He,we=Le,ne=qe,Ve=Xe,$e=Ye,Ce=Qe,xe=Ee,Z=ea,U=aa,f=sa,ee=la,ie=de("router-link"),ce=ha,Pe=ta,Ie=oa;return c(),m("div",null,[l(Ie,null,{right:t(()=>[l(i,{modelValue:P.value,"onUpdate:modelValue":s[0]||(s[0]=E=>P.value=E),icon:"lucide:search",placeholder:"Pencarian",classes:{wrapper:"w-full"}},null,8,["modelValue"]),l(k,{class:"w-full sm:w-32"},{default:t(()=>[l(p,{name:"lucide:filter",class:"h-4 w-4"}),r("   Filter ")]),_:1})]),left:t(()=>[l(k,{color:"primary",onClick:s[1]||(s[1]=E=>x.value=!0),class:"w-full sm:w-42"},{default:t(()=>[l(p,{name:"lucide:plus",class:"h-4 w-4"}),ga]),_:1})]),default:t(()=>{var E;return[l($e,{open:x.value,size:"3xl",onClose:s[15]||(s[15]=a=>x.value=!1)},{header:t(()=>[e("div",va,[fa,l(M,{onClick:s[2]||(s[2]=a=>x.value=!1)})])]),default:t(()=>[e("form",{onSubmit:ve},[e("div",ka,[ba,e("div",ya,[wa,e("div",Va,[l(i,{placeholder:"Contoh: Jenis/Kategori Produk + Merek + Keterangan",modelValue:u.value.name,"onUpdate:modelValue":s[3]||(s[3]=a=>u.value.name=a)},null,8,["modelValue"])])]),e("div",$a,[Ca,e("div",xa,[l(K,{rounded:"sm",modelValue:z.value,"onUpdate:modelValue":s[4]||(s[4]=a=>z.value=a)},{default:t(()=>[Pa,(c(!0),m(R,null,L(B.value,a=>(c(),m("option",{key:a.id,value:a.id},g(a.name),9,Ia))),128))]),_:1},8,["modelValue"])])]),e("div",Ba,[Sa,e("div",ja,[e("div",Ua,[(c(),m(R,null,L(10,a=>e("div",{key:a,class:"photo-upload-item"},[l(we,{modelValue:T.value[a-1],"onUpdate:modelValue":A=>T.value[a-1]=A,accept:"image/*"},{default:t(({open:A,remove:d,preview:F,files:V})=>[e("div",Aa,[V!=null&&V.length&&V.item(0)?(c(),m("img",{key:0,src:F(V.item(0)).value,alt:"Upload preview",class:"img-close-foto"},null,8,Ta)):(c(),m("div",za,[l(te,null,{default:t(()=>[Fa]),_:1}),Na,r(" "+g(a===1?"Foto Utama":"Foto Ke - "+a),1)])),V!=null&&V.length&&V.item(0)?(c(),m("div",Ra,[l(oe,{size:"sm",rounded:"full","data-nui-tooltip":"Remove image",class:"scale-90",onClick:Ls=>d(V.item(0))},{default:t(()=>[l(p,{name:"lucide:x",class:"size-4"})]),_:2},1032,["onClick"])])):(c(),m("div",Da,[e("div",Ma,[l(oe,{size:"sm",rounded:"full",class:"button-foto",onClick:A},{default:t(()=>[l(p,{name:"lucide:plus",class:"size-4"})]),_:2},1032,["onClick"])])]))])]),_:2},1032,["modelValue","onUpdate:modelValue"])])),64))])])]),e("div",Ka,[Ea,e("div",Ga,[e("div",Wa,[l(ne,{modelValue:u.value.condition,"onUpdate:modelValue":s[5]||(s[5]=a=>u.value.condition=a),name:"checkbox_base",value:"1",label:"baru",color:"warning",type:"number"},null,8,["modelValue"]),l(ne,{modelValue:u.value.condition,"onUpdate:modelValue":s[6]||(s[6]=a=>u.value.condition=a),name:"checkbox_base",value:"0",label:"bekas",color:"warning",type:"number"},null,8,["modelValue"])])])]),e("div",Oa,[Ja,e("div",Ha,[l(i,{placeholder:"Contoh: 3",modelValue:u.value.min_order,"onUpdate:modelValue":s[7]||(s[7]=a=>u.value.min_order=a),type:"number"},null,8,["modelValue"])])]),e("div",La,[qa,e("div",Xa,[l(i,{placeholder:"Contoh: Rp10.000",modelValue:u.value.price,"onUpdate:modelValue":s[8]||(s[8]=a=>u.value.price=a),type:"number"},null,8,["modelValue"])])]),e("div",Ya,[Qa,e("div",Za,[l(Ve,{label:"Aktifkan Produk",color:"primary",modelValue:u.value.is_active,"onUpdate:modelValue":s[9]||(s[9]=a=>u.value.is_active=a)},null,8,["modelValue"])])]),e("div",es,[as,e("div",ss,[l(i,{placeholder:"Contoh: 3",modelValue:u.value.stock,"onUpdate:modelValue":s[10]||(s[10]=a=>u.value.stock=a),type:"number"},null,8,["modelValue"])])]),e("div",ls,[ts,e("div",os,[l(i,{placeholder:"Contoh: 1",modelValue:u.value.weight,"onUpdate:modelValue":s[11]||(s[11]=a=>u.value.weight=a),type:"number"},null,8,["modelValue"])])]),e("div",ns,[is,e("div",cs,[l(i,{placeholder:"Contoh: 1",modelValue:u.value.length,"onUpdate:modelValue":s[12]||(s[12]=a=>u.value.length=a),type:"number"},null,8,["modelValue"])])]),e("div",ds,[e("div",rs,[l(k,{variant:"solid",onClick:W},{default:t(()=>[r(" Buka Form Selengkapnya ")]),_:1})]),e("div",us,[l(k,{onClick:s[13]||(s[13]=a=>x.value=!1)},{default:t(()=>[r(" Batal ")]),_:1}),r("   "),l(k,{type:"submit",color:"primary",variant:"solid",onClick:s[14]||(s[14]=a=>x.value=!1)},{default:t(()=>[r(" Simpan ")]),_:1})])])])],32)]),_:1},8,["open"]),S.value?(c(),q(Ce,{key:0,type:"spinner"})):((E=$.value)==null?void 0:E.length)===0?(c(),q(xe,{key:1,title:"Produk Masih Kosong",subtitle:"Data di tabel ini masih kosong. Anda bisa menambahkannya menggunakan tombol “Tambah Produk."},{image:t(()=>[ms,ps]),_:1})):(c(),m(R,{key:2},[l(Pe,{shape:"rounded",scrollable:!1},{header:t(()=>[l(U,{uppercase:"",spaced:"",class:"p-4"},{default:t(()=>[e("div",_s,[l(Z,{"model-value":Q.value,indeterminate:w.value.length>0&&!Q.value,name:"table-1-main",shape:"rounded",class:"text-primary-500",onClick:ye},null,8,["model-value","indeterminate"])])]),_:1}),l(U,{uppercase:"",spaced:""},{default:t(()=>[r(" NAMA PRODUK ")]),_:1}),l(U,{uppercase:"",spaced:""},{default:t(()=>[r("NILAI")]),_:1}),l(U,{uppercase:"",spaced:""},{default:t(()=>[r("HARGA")]),_:1}),l(U,{uppercase:"",spaced:""},{default:t(()=>[r("KATEGORI")]),_:1}),l(U,{uppercase:"",spaced:""},{default:t(()=>[r(" STOK ")]),_:1}),l(U,{uppercase:"",spaced:""},{default:t(()=>[r("AKTIF")]),_:1})]),default:t(()=>[w.value.length>0?(c(),q(ee,{key:0,hoverable:!1},{default:t(()=>[l(f,{colspan:"8",class:"bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"},{default:t(()=>[r(" You have selected "+g(w.value.length)+" items of the total "+g($.value.length)+" items. ",1),hs]),_:1})]),_:1})):X("",!0),(c(!0),m(R,null,L(pe.value,(a,A)=>(c(),m(R,{key:a==null?void 0:a.id},[l(ee,null,{default:t(()=>[l(f,{spaced:"",class:"border-solid"},{default:t(()=>[e("div",gs,[l(Z,{modelValue:w.value,"onUpdate:modelValue":s[16]||(s[16]=d=>w.value=d),value:a==null?void 0:a.id,name:`item-checkbox-${a==null?void 0:a.id}`,shape:"rounded",class:"text-primary-500"},null,8,["modelValue","value","name"]),a!=null&&a.variants[0]?(c(),m("button",{key:0,onClick:Re(d=>be(A),["prevent"])},[l(p,{name:_.value==A?"ic:baseline-keyboard-arrow-down":"ic:baseline-keyboard-arrow-right",size:"24"},null,8,["name"])],8,vs)):X("",!0)])]),_:2},1024),l(f,{spaced:"",class:"tdps",style:{width:"300px"}},{default:t(()=>[l(ie,{to:`/admin-produk/${a==null?void 0:a.id}`},{default:t(()=>[e("div",fs,[a!=null&&a.images?(c(),m("img",{key:0,src:a==null?void 0:a.images[0],alt:"image description",class:"img-produk"},null,8,ks)):X("",!0),e("div",bs,[e("h4",ys,g(a==null?void 0:a.name),1)])])]),_:2},1032,["to"])]),_:2},1024),l(f,{light:"",spaced:"",class:"tdps"},{default:t(()=>[ws,Vs,$s,r(" Penilaian ")]),_:1}),l(f,{light:"",spaced:"",class:"tdps"},{default:t(()=>[a.variant_price?(c(),m("span",Cs,g(a.variant_price),1)):a.price?(c(),m("span",xs,g(le(a.price)),1)):(c(),m("span",Ps," - "))]),_:2},1024),l(f,{spaced:"",class:"tdps"},{default:t(()=>[e("span",Is,g(a==null?void 0:a.product_category_name),1)]),_:2},1024),l(f,{spaced:"",class:"tdps"},{default:t(()=>[e("h4",Bs,g(a==null?void 0:a.stock),1)]),_:2},1024),l(f,{spaced:"",class:"tdps"},{default:t(()=>[l(ce,{modelValue:a.is_active,"onUpdate:modelValue":d=>a.is_active=d,color:"success",onChange:d=>fe(a)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1024)]),_:2},1024),_.value==A?(c(!0),m(R,{key:0},L(a.variants,d=>(c(),q(ee,{class:"pl-4 !bg-commerce-50 hover:!bg-commerce-100"},{default:t(()=>[l(f,{spaced:""},{default:t(()=>[e("div",Ss,[l(Z,{modelValue:w.value,"onUpdate:modelValue":s[17]||(s[17]=F=>w.value=F),value:d==null?void 0:d.id,name:`item-checkbox-${d==null?void 0:d.id}`,shape:"rounded",class:"text-primary-500"},null,8,["modelValue","value","name"])])]),_:2},1024),l(f,{spaced:"",style:{width:"300px"}},{default:t(()=>[l(ie,{to:`/admin-produk/${a==null?void 0:a.id}`},{default:t(()=>[e("div",js,[e("div",Us,[e("h4",As,g(d==null?void 0:d.name),1)])])]),_:2},1032,["to"])]),_:2},1024),l(f,{light:"",spaced:""},{default:t(()=>[Ts,zs,Fs,r(" Penilaian ")]),_:1}),l(f,{light:"",spaced:""},{default:t(()=>[d.price?(c(),m("span",Ns,g(le(d.price)),1)):(c(),m("span",Rs," - "))]),_:2},1024),l(f,{spaced:""}),l(f,{spaced:""},{default:t(()=>[e("h4",Ds,g(d==null?void 0:d.stock),1)]),_:2},1024),l(f,{spaced:""},{default:t(()=>[l(ce,{modelValue:d.is_active,"onUpdate:modelValue":F=>d.is_active=F,color:"success",onChange:F=>ke(d)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1024)]),_:2},1024))),256)):X("",!0)],64))),128))]),_:1}),e("div",Ms,[e("div",Ks,[l(K,{modelValue:j.value,"onUpdate:modelValue":s[18]||(s[18]=a=>j.value=a),onChange:s[19]||(s[19]=a=>_e(a)),label:""},{default:t(()=>[Es,Gs,Ws,Os]),_:1},8,["modelValue"])]),e("div",Js,[e("p",null,"Halaman ke "+g(v.value)+" dari "+g(se.value),1),l(k,{variant:"solid",color:"light",onClick:he,disabled:v.value<=1},{default:t(()=>[r("Previous")]),_:1},8,["disabled"]),l(k,{variant:"solid",color:"success",onClick:ge,disabled:v.value>=se.value},{default:t(()=>[r("Next")]),_:1},8,["disabled"])])])],64))]}),_:1})])}}}),cl=Oe(Hs,[["__scopeId","data-v-d47fbff7"]]);export{cl as _};