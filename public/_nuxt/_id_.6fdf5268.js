import{d,a4 as r,$ as s,a as l,b as e,e as u,w as c,y as a,K as p,i as b,o as f,f as h}from"./entry.95308f2b.js";const w=d({data(){return{product:null}},async created(){{const t=localStorage.getItem("token");if(t)try{const o=this.$route.params.id,n=await r(`https://api.dev.commerce.waktoo.com:443/api/product-data/${o}`).headers({Authorization:`Bearer ${t}`,"Content-Type":"application/json"}).get().json();n&&n.status==="success"?this.product=n.data.product_data:console.error("Failed to fetch product data:",n)}catch(o){console.error("Error:",o)}}}}),m=e("div",{class:"flex w-full flex-wrap items-center justify-between px-3 ml-5 -mt-16"},[e("h1",{class:"mb-2 mt-0 text-2xl font-medium leading-tight text-black"}," Detail Produk "),e("div",{class:"relative flex items-center"},[e("a",{class:"me-4 text-neutral-600 dark:text-white",href:"#"},[e("span",{class:"[&>svg]:w-5"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},[e("path",{d:"M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"})])])]),e("div",{class:"relative","data-twe-dropdown-ref":"","data-twe-dropdown-alignment":"end"},[e("a",{class:"me-4 flex items-center text-neutral-600 dark:text-white",href:"#",id:"dropdownMenuButton1",role:"button","data-twe-dropdown-toggle-ref":"","aria-expanded":"false"},[e("span",{class:"[&>svg]:w-5"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z","clip-rule":"evenodd"})])]),e("span",{class:"absolute -mt-4 ms-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white"},"1")]),e("ul",{class:"absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark","aria-labelledby":"dropdownMenuButton1","data-twe-dropdown-menu-ref":""},[e("li",null,[e("a",{class:"block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25",href:"#","data-twe-dropdown-item-ref":""},"Aktif")]),e("li",null,[e("a",{class:"block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25",href:"#","data-twe-dropdown-item-ref":""},"Another action")]),e("li",null,[e("a",{class:"block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25",href:"#","data-twe-dropdown-item-ref":""},"Something else here")])])]),e("div",{class:"relative","data-twe-dropdown-ref":"","data-twe-dropdown-alignment":"end"},[e("a",{class:"flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none",href:"#",id:"dropdownMenuButton2",role:"button","data-twe-dropdown-toggle-ref":"","aria-expanded":"false"},[e("img",{src:"https://tecdn.b-cdn.net/img/new/avatars/2.jpg",class:"rounded-full",style:{height:"25px",width:"25px"},alt:"",loading:"lazy"})]),e("ul",{class:"absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark","aria-labelledby":"dropdownMenuButton2","data-twe-dropdown-menu-ref":""},[e("li",null,[e("a",{class:"block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25",href:"#","data-twe-dropdown-item-ref":""},"Action")]),e("li",null,[e("a",{class:"block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25",href:"#","data-twe-dropdown-item-ref":""},"Another action")]),e("li",null,[e("a",{class:"block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25",href:"#","data-twe-dropdown-item-ref":""},"Something else here")])])])])],-1),g={class:"border-muted-200"},x={class:"nui-card nui-card-rounded-sm nui-card-default"},k={class:"bg-white dark:bg-muted-800/70 p-10"},v={class:"col-span-12 mt-6"},_=e("div",{class:"nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"},[e("img",{src:"#",alt:"",loading:"lazy"})],-1),z={type:"submit",rel:"",target:"/shop-admin/create",class:"nui-button nui-button-small nui-button-rounded nui-button-solid nui-button-warning float-right"},y={class:"col-span-12 mt-6"},B={class:"nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"},A=e("label",{class:"nui-input-label",for:"nui-input-89b0cb01-2c29-4d47-9e2d-2a62d6ead7cf"},"Nama Produk",-1),$={class:"text-2xl font-semibold mb-4"},M={class:"nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"},C=e("label",{class:"nui-input-label",for:"nui-input-89b0cb01-2c29-4d47-9e2d-2a62d6ead7cf"},"Kondisi",-1),S={class:"text-2xl font-semibold mb-4"},j={class:"nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"},N=e("label",{class:"nui-input-label",for:"nui-input-89b0cb01-2c29-4d47-9e2d-2a62d6ead7cf"},"Price",-1),P={class:"text-2xl font-semibold mb-4"},V={class:"nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"},D=e("label",{class:"nui-input-label",for:"nui-input-89b0cb01-2c29-4d47-9e2d-2a62d6ead7cf"},"Stock",-1),E={class:"text-2xl font-semibold mb-4"},T={class:"nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"},F=e("label",{class:"nui-input-label",for:"nui-input-89b0cb01-2c29-4d47-9e2d-2a62d6ead7cf"},"Description",-1),H={class:"text-2xl font-semibold mb-4"};function I(t,o,n,K,R,q){const i=b;return f(),l(p,null,[m,e("div",g,[e("div",x,[e("div",k,[e("div",v,[_,e("button",z,[u(i,{to:`/shop-admin/edit/${t.product?.id}`},{default:c(()=>[h("Edit Produk")]),_:1},8,["to"])])]),e("div",y,[e("div",B,[A,e("h2",$,a(t.product?.name),1)]),e("div",M,[C,e("h5",S,a(t.product?.condition),1)]),e("div",j,[N,e("h5",P," Rp. "+a(t.product?.price),1)]),e("div",V,[D,e("h5",E,a(t.product?.stock),1)]),e("div",T,[F,e("h5",H,a(t.product?.description),1)])])])])])],64)}const J=s(w,[["render",I]]);export{J as default};
