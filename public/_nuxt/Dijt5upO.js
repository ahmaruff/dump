import{d as D,J as C,N,C as P,r as u,b as T,o as $,e as F,g as e,h as t,i as l,G as b,l as s,P as x,m as a,q as L,s as M,_ as U,v as Q,B as z,y as K,z as O,Q as q,H,A as W}from"./DmTmMO_-.js";import{_ as G}from"./DKoeNxAj.js";import{_ as J}from"./C_jKOqdG.js";import{u as X}from"./BHLlrkjG.js";import{z as m,u as Y,F as Z,t as ee}from"./C2BeTHEC.js";import"./DLP8OW-a.js";import"./C5pBaPI_.js";const o=d=>(K("data-v-da94b7da"),d=d(),O(),d),te={class:"dark:bg-muted-800 flex min-h-screen bg-white"},ae={class:"relative flex flex-1 flex-col justify-center px-6 lg:w-2/5 lg:flex-none width-plus"},se={class:"dark:bg-muted-800 relative mx-auto w-full max-w-sm bg-white"},oe=o(()=>e("span",{class:"bold-600"},"Waktoo Commerce",-1)),le=o(()=>e("br",null,null,-1)),ne={class:"flex flex-wrap justify-between gap-4"},ie={class:"dark:bg-muted-700 text-muted-800 border-muted-300 dark:border-muted-600 nui-focus relative inline-flex grow items-center justify-center gap-2 rounded border bg-white px-6 py-4 dark:text-white border-radius"},de=o(()=>e("div",{class:"text-login-google"},"Masuk menggunakan Google",-1)),re=o(()=>e("div",{class:"flex-100 mt-8 flex items-center"},[e("hr",{class:"border-muted-200 dark:border-muted-700 flex-auto border-t-2"}),e("span",{class:"text-muted-600 dark:text-muted-300 px-4 font-sans font-light"}," Atau "),e("hr",{class:"border-muted-200 dark:border-muted-700 flex-auto border-t-2"})],-1)),ce={class:"mt-5"},ue={class:"space-y-4"},me=["data-nui-tooltip"],_e={class:"mt-6 flex items-center justify-between"},pe={class:"mt-6"},fe={class:"block w-full rounded-md shadow-sm"},ge={class:"text-footer-login"},he=o(()=>e("br",null,null,-1)),ve=o(()=>e("br",null,null,-1)),be=o(()=>e("span",{class:"color-orange"},"Ketentuan Layanan",-1)),xe=o(()=>e("span",{class:"color-orange"},"Kebijakan Privasi",-1)),we=o(()=>e("br",null,null,-1)),ke=L('<div class="bg-muted-100 dark:bg-muted-900 relative hidden w-0 flex-1 justify-center lg:flex lg:w-3/5 bg-login-auth" data-v-da94b7da><div class="mx-auto w-full max-w-4xl" data-v-da94b7da><div class="card-login-auth" data-v-da94b7da><span class="txt-title-login" data-v-da94b7da>Kelola Toko Anda <br data-v-da94b7da>di Mana Saja</span><img src="https://res.cloudinary.com/daraki09f/image/upload/v1716887978/waktoo-commerce/icon-mask.png" class="img-logo-auth" data-v-da94b7da><img src="https://res.cloudinary.com/daraki09f/image/upload/v1716955046/waktoo-commerce/img-beautiful.png" class="img-beautiful" data-v-da94b7da></div></div></div>',1),ye=D({__name:"login",setup(d){const p={EMAIL_REQUIRED:"A valid email is required",PASSWORD_REQUIRED:"A password is required"},w=m.object({email:m.string().email(p.EMAIL_REQUIRED),password:m.string().min(1,p.PASSWORD_REQUIRED),trustDevice:m.boolean()}),k=ee(w),y=C(()=>({email:"",password:"",trustDevice:!1})),{handleSubmit:Se,isSubmitting:f,setFieldError:Ee,meta:Ae,values:Ie,errors:Re,resetForm:Ve,setFieldValue:Be,setErrors:je}=Y({validationSchema:k,initialValues:y}),{$jwtAuth:S}=N();P(),X();const i=u(!0);u(0);const r=u(""),c=u("");async function E(){const g={email:c.value,password:r.value,app_version:q().public.app_version||"v1"};console.log("login bruh"),await S.login(g),H("/dashboard")}return(g,n)=>{const A=M,I=G,h=U,v=J,R=Q,V=z,B=T("router-link");return $(),F("div",te,[e("div",ae,[e("div",se,[e("div",null,[t(A,{lead:"relaxed",weight:"medium",class:"txt-login mt-6"},{default:l(()=>[a(" Login ")]),_:1}),t(I,{size:"sm",class:"text-small-login mb-6"},{default:l(()=>[a(" Selamat Datang di "),oe,le,a("🖐️ ")]),_:1}),e("div",ne,[e("button",ie,[t(h,{name:"logos:google-icon",class:"h-5 w-5"}),de])]),re]),e("form",{method:"POST",action:"",onSubmit:b(E,["prevent"]),class:"mt-6",novalidate:""},[e("div",ce,[e("div",null,[e("div",ue,[t(s(Z),{name:"email"},{default:l(({field:_,errorMessage:De,handleChange:Ce,handleBlur:Ne})=>[t(v,{modelValue:s(c),"onUpdate:modelValue":n[0]||(n[0]=j=>x(c)?c.value=j:null),type:"email",label:"Email",placeholder:"Email",autocomplete:"email"},null,8,["modelValue"])]),_:1}),t(v,{modelValue:s(r),"onUpdate:modelValue":n[2]||(n[2]=_=>x(r)?r.value=_:null),type:s(i)?"password":"text",label:"Kata Sandi",placeholder:"Password"},{action:l(()=>[e("button",{class:"leading-0 text-muted-400 peer-focus-within:text-primary-500 absolute right-0 top-0 flex passShow w-10 items-center justify-center text-center text-xl",onClick:n[1]||(n[1]=b(_=>i.value=!s(i),["prevent"]))},[e("div",{class:"relative flex h-full w-full items-center justify-center","data-nui-tooltip":`${s(i)?"Show":"Hide"} password`},[t(h,{name:s(i)?"mdi:eye-outline":"mdi:eye-off-outline",class:"h-5 w-5"},null,8,["name"])],8,me)])]),_:1},8,["modelValue","type"])]),e("div",_e,[t(R,{to:"/auth/recover",class:"text-primary-600 hover:text-primary-500 font-sans font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"},{default:l(()=>[a(" Lupa kata sandi? ")]),_:1})]),e("div",pe,[e("div",fe,[t(V,{disabled:s(f),loading:s(f),type:"submit",color:"primary",class:"!h-11 w-full"},{default:l(()=>[a(" Masuk ")]),_:1},8,["disabled","loading"])])])]),e("div",ge,[a(" Belum punya akun? "),t(B,{to:"/onboarding",class:"color-orange"},{default:l(()=>[a("Daftar di sini")]),_:1}),he,ve,a(" Baca "),be,a(" dan "),xe,a(" kami."),we])])],32)])]),ke])}}}),Qe=W(ye,[["__scopeId","data-v-da94b7da"]]);export{Qe as default};
