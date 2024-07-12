import { defineComponent, computed, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { f as useRouter$1 } from './server.mjs';
import { u as useToaster } from './toaster-B1V8z_xL.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { z, u as useForm, t as toTypedSchema } from './vee-validate-zod.esm-Bmzui0dy.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'wretch';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "verifikasi-email",
  __ssrInlineRender: true,
  setup(__props) {
    const VALIDATION_TEXT = {
      EMAIL_REQUIRED: "A valid email is required",
      PASSWORD_LENGTH: "Password must be at least 8 characters",
      PASSWORD_CONTAINS_EMAIL: "Password cannot contain your email",
      PASSWORD_MATCH: "Passwords do not match",
      TERMS_REQUIRED: "You must agree to the terms and conditions"
    };
    const zodSchema = z.object({
      email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
      password: z.string().min(8, VALIDATION_TEXT.PASSWORD_LENGTH),
      confirmPassword: z.string(),
      terms: z.boolean()
    }).superRefine((data, ctx) => {
      if (data.password.includes(data.email)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.PASSWORD_CONTAINS_EMAIL,
          path: ["password"]
        });
      }
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.PASSWORD_MATCH,
          path: ["confirmPassword"]
        });
      }
      if (!data.terms) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.TERMS_REQUIRED,
          path: ["terms"]
        });
      }
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = computed(() => ({
      email: "",
      password: "",
      confirmPassword: "",
      terms: false
    }));
    const { handleSubmit, isSubmitting } = useForm({
      validationSchema,
      initialValues
    });
    const router = useRouter$1();
    const toaster = useToaster();
    handleSubmit(async (values) => {
      console.log("auth-success", values);
      try {
        await new Promise((resolve) => setTimeout(resolve, 4e3));
        toaster.clearAll();
        toaster.show({
          title: "Success",
          message: `Account created!`,
          color: "success",
          icon: "ph:user-circle-fill",
          closable: true
        });
      } catch (error) {
        return;
      }
      router.push("/layouts/onboarding-1");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_center = resolveComponent("center");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4" }, _attrs))}><div class="flex w-full items-center justify-center text-center margin-40"><div class="relative mx-auto w-full max-w-3xl"><table width="100%" border="0"><tr><td align="center" valign="top"><table width="800px" border="0" align="center" bgcolor="#fff" class="tdss"><tr><td align="left" valign="top" class="td-email" bgcolor="F9F9F9">`);
      _push(ssrRenderComponent(_component_center, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1716956244/waktoo-commerce/frame-19924.png"${_scopeId}>`);
          } else {
            return [
              createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1716956244/waktoo-commerce/frame-19924.png" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="txt-title-email">Akun kamu sudah siap digunakan. <div style="${ssrRenderStyle({ "text-align": "left !important", "font-size": "16px !important", "line-height": "22px", "margin": "20px 30%" })}"> Email: tokoberas@waktoo.com<br> Kata Sandi: JDSCO390 </div></div></td></tr><tr><td align="left" valign="top" class="td-email-2"><div class="txt-content-email">Please use <a href="https://devcrm.waktoo.com/login" style="${ssrRenderStyle({ "color": "#0000ff", "text-decoration": "underline" })}">sign in page</a> to access your account.</div><div class="hrr"></div><div class="txt-content-email">If you want to reset your password, please <a href="javascript:;" style="${ssrRenderStyle({ "color": "#0000ff", "text-decoration": "underline" })}">click here.</a></div><div class="hrr"></div><div class="txt-content-email">If you need any further assistance, please reach out to <a href="mailto:support@Waktoo.com" style="${ssrRenderStyle({ "color": "#0000ff", "text-decoration": "underline" })}">support@Waktoo.com</a></div><br><br><br><br><br><table width="100%"><tr><td align="left"><div class="txt-content-email pddsh">Download Waktoo Application</div> <br><a href="https://play.google.com/store/apps/details?id=com.kazee.waktoo" target="_blank"><img src="https://devcrm.waktoo.com/images/icon-googleplay.png" class="img-play"></a>\xA0 <a href="https://apps.apple.com/id/app/waktoo/id1483719784" target="_blank"><img src="https://devcrm.waktoo.com/images/icon-appstore.png" class="img-play"></a></td><td align="right"><div class="txt-content-email pddsh2">Follow us</div><br><a href="https://www.instagram.com/waktoocom/" target="_blank"><img src="https://devcrm.waktoo.com/images/icon-ig.png" class="dspps"></a> \xA0\xA0 <a href="https://www.linkedin.com/company/kazeeid/" target="_blank"><img src="https://devcrm.waktoo.com/images/icon-lin.png" class="dspps"></a></td></tr></table></td></tr></table><br><br><a href="https://waktoo.com/" class="wcs" target="_blank">www.waktoo.com</a></td></tr></table></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/verifikasi-email.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
