import U from"./TairoLogo.d10447db.js";import{d as L,c as V,u as E,o as N,a as O,b as e,e as t,w as o,g as C,f as _,h as s,M as $,i as D,j as M,k as W,l as z,m as H,_ as F,O as G}from"./entry.95308f2b.js";import{_ as Q}from"./BaseThemeToggle.vue.9a0e5679.js";import{_ as Z}from"./BaseCheckbox.vue.60037f21.js";import{u as q}from"./toaster.e1925728.js";import{_ as X}from"./9.f560f128.js";import{_ as J,a as K}from"./19.be22248a.js";import{_ as Y,a as ee}from"./12.11484cfc.js";import{_ as te,a as se}from"./24.85a5a111.js";import{_ as oe}from"./3.72e019ed.js";import{z as m,u as ae,F as h,t as le}from"./vee-validate.esm.ca5a3e05.js";const re=""+globalThis.__publicAssetsURL("img/avatars/1.svg"),de=""+globalThis.__publicAssetsURL("img/avatars/20.svg"),ie=""+globalThis.__publicAssetsURL("img/avatars/10.svg"),ne=""+globalThis.__publicAssetsURL("img/avatars/5.svg"),ce={class:"bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4"},me={class:"mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4"},ue={class:"flex w-full items-center justify-center"},_e={class:"relative mx-auto w-full max-w-2xl"},he=$('<img class="ltablet:block absolute start-0 top-[30%] hidden h-12 w-12 rounded-full object-cover duration-[cubic-bezier(0.86,0,0.07,1)] lg:block" src="'+re+'" alt="Avatar" width="48" height="48"><img class="ltablet:block absolute -start-[25%] top-[40%] hidden h-16 w-16 rounded-full object-cover lg:block" src="'+X+'" alt="Avatar" width="64" height="64"><img class="ltablet:block absolute -start-[5%] top-[52%] hidden h-16 w-16 rounded-full object-cover lg:block" src="'+J+'" alt="Avatar" width="64" height="64"><img class="ltablet:block absolute -start-[35%] top-[65%] hidden h-24 w-24 rounded-full object-cover lg:block" src="'+Y+'" alt="Avatar" width="96" height="96"><img class="ltablet:block absolute -start-[35%] top-[20%] hidden h-10 w-10 rounded-full object-cover lg:block" src="'+ee+'" alt="Avatar" width="40" height="40"><img class="ltablet:block absolute -start-[55%] top-[40%] hidden h-20 w-20 rounded-full object-cover lg:block" src="'+de+'" alt="Avatar" width="80" height="80"><img class="ltablet:block absolute end-0 top-[30%] hidden h-12 w-12 rounded-full object-cover lg:block" src="'+te+'" alt="Avatar" width="48" height="48"><img class="ltablet:block absolute -end-[25%] top-[40%] hidden h-16 w-16 rounded-full object-cover lg:block" src="'+ie+'" alt="Avatar" width="64" height="64"><img class="ltablet:block absolute -end-[5%] top-[52%] hidden h-16 w-16 rounded-full object-cover lg:block" src="'+K+'" alt="Avatar" width="64" height="64"><img class="ltablet:block absolute -end-[35%] top-[65%] hidden h-24 w-24 rounded-full object-cover lg:block" src="'+se+'" alt="Avatar" width="96" height="96"><img class="ltablet:block absolute -end-[35%] top-[20%] hidden h-10 w-10 rounded-full object-cover lg:block" src="'+oe+'" alt="Avatar" width="40" height="40"><img class="ltablet:block absolute -end-[55%] top-[40%] hidden h-20 w-20 rounded-full object-cover lg:block" src="'+ne+'" alt="Avatar" width="80" height="80">',12),be={class:"me-auto ms-auto mt-4 w-full"},pe={class:"text-center"},fe={class:"mb-4 space-y-4"},ge={class:"mb-6"},ve={class:"mt-6 flex items-center justify-between"},we=e("span",null,[e("span",null,"I accept the"),e("a",{href:"#",class:"text-primary-500 hover:underline focus:underline"}," Terms of Service ")],-1),xe={class:"mb-6"},ke=e("div",{class:"mb-6 grid gap-0 sm:grid-cols-3"},[e("hr",{class:"border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block"}),e("span",{class:"dark:bg-muted-800 text-muted-400 relative top-0.5 bg-white text-center font-sans text-sm"}," Or continue with "),e("hr",{class:"border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block"})],-1),Ae={class:"grid grid-cols-3 gap-2"},ye={type:"button",class:"bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300"},Se={type:"button",class:"bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300"},Te={type:"button",class:"bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300"},je={class:"text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"},Be=e("span",null,"Already have an account?",-1),Me=L({__name:"signup-3",setup(Pe){const u={EMAIL_REQUIRED:"A valid email is required",PASSWORD_LENGTH:"Password must be at least 8 characters",PASSWORD_CONTAINS_EMAIL:"Password cannot contain your email",PASSWORD_MATCH:"Passwords do not match"},w=m.object({email:m.string().email(u.EMAIL_REQUIRED),password:m.string().min(8,u.PASSWORD_LENGTH),confirmPassword:m.string()}).superRefine((r,l)=>{r.password.includes(r.email)&&l.addIssue({code:m.ZodIssueCode.custom,message:u.PASSWORD_CONTAINS_EMAIL,path:["password"]}),r.password!==r.confirmPassword&&l.addIssue({code:m.ZodIssueCode.custom,message:u.PASSWORD_MATCH,path:["confirmPassword"]})}),x=le(w),k=V(()=>({email:"",password:"",confirmPassword:""})),{handleSubmit:A,isSubmitting:c}=ae({validationSchema:x,initialValues:k}),y=E(),f=q(),g=A(async r=>{console.log("auth-success",r);try{await new Promise(l=>setTimeout(l,4e3)),f.clearAll(),f.show({title:"Success",message:"Account created!",color:"success",icon:"ph:user-circle-fill",closable:!0})}catch{return}y.push("/layouts/onboarding-1")});return(r,l)=>{const S=U,v=D,T=Q,j=M,B=W,b=z,P=Z,I=H,p=F,R=G;return N(),O("div",ce,[e("div",me,[t(v,{to:"/",class:"text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"},{default:o(()=>[t(S,{class:"h-10 w-10"})]),_:1}),e("div",null,[t(T)])]),e("div",ue,[e("div",_e,[he,e("div",be,[e("form",{method:"POST",action:"",onSubmit:l[0]||(l[0]=C((...a)=>s(g)&&s(g)(...a),["prevent"])),class:"me-auto ms-auto mt-4 w-full max-w-md",novalidate:""},[e("div",pe,[t(j,{as:"h2",size:"3xl",weight:"medium"},{default:o(()=>[_(" Welcome to Tairo ")]),_:1}),t(B,{size:"sm",class:"text-muted-400 mb-6"},{default:o(()=>[_(" Let's start by creating you account ")]),_:1})]),t(R,{class:"p-8"},{default:o(()=>[e("div",fe,[t(s(h),{name:"email"},{default:o(({field:a,errorMessage:d,handleChange:i,handleBlur:n})=>[t(b,{"model-value":a.value,error:d,disabled:s(c),type:"email",label:"Email address",placeholder:"ex: maya@cssninja.io",icon:"lucide:mail",classes:{input:"h-12 !ps-12",icon:"h-12 w-12"},"onUpdate:modelValue":i,onBlur:n},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1}),t(s(h),{name:"password"},{default:o(({field:a,errorMessage:d,handleChange:i,handleBlur:n})=>[t(b,{"model-value":a.value,error:d,disabled:s(c),type:"password",label:"Password",placeholder:"••••••••••",icon:"lucide:lock",classes:{input:"h-12 !ps-12",icon:"h-12 w-12"},"onUpdate:modelValue":i,onBlur:n},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1}),t(s(h),{name:"confirmPassword"},{default:o(({field:a,errorMessage:d,handleChange:i,handleBlur:n})=>[t(b,{"model-value":a.value,error:d,disabled:s(c),type:"password",label:"Confirm Password",placeholder:"••••••••••",icon:"lucide:lock",classes:{input:"h-12 !ps-12",icon:"h-12 w-12"},"onUpdate:modelValue":i,onBlur:n},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),e("div",ge,[e("div",ve,[t(s(h),{name:"terms"},{default:o(({field:a,errorMessage:d,handleChange:i,handleBlur:n})=>[t(P,{"model-value":a.value,disabled:s(c),error:d,shape:"rounded",color:"primary","onUpdate:modelValue":i,onBlur:n},{default:o(()=>[we]),_:2},1032,["model-value","disabled","error","onUpdate:modelValue","onBlur"])]),_:1})])]),e("div",xe,[t(I,{disabled:s(c),loading:s(c),type:"submit",color:"primary",class:"!h-12 w-full"},{default:o(()=>[_(" Sign Up ")]),_:1},8,["disabled","loading"])]),ke,e("div",Ae,[e("button",ye,[t(p,{name:"fa6-brands:google",class:"h-5 w-5"})]),e("button",Se,[t(p,{name:"fa6-brands:twitter",class:"h-5 w-5"})]),e("button",Te,[t(p,{name:"fa6-brands:linkedin-in",class:"h-5 w-5"})])]),e("p",je,[Be,t(v,{to:"/auth/login-3",class:"text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"},{default:o(()=>[_(" Sign in ")]),_:1})])]),_:1})],32)])])])])}}});export{Me as default};