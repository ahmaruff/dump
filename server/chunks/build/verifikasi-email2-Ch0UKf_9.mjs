import { defineComponent, computed, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { f as useRouter$1 } from './server.mjs';
import { u as useToaster } from './toaster-B1V8z_xL.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "verifikasi-email2",
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
      _push(`<div class="txt-title-email">Akun kamu sudah siap digunakan.</div></td></tr><tr><td align="left" valign="top" class="td-email-2"><div class="txt-content-email"> Terima kasih telah melakukan pendaftaran di Waktoo Commerce!\u2028Kami senang Anda bergabung dengan kami. </div><div class="hrr"></div><div class="txt-content-email"> Untuk menyelesaikan pendaftaran dan mulai menggunakan Waktoo Commerce, silakan klik tautan berikut untuk memverifikasi alamat email Anda: </div><br><br>`);
      _push(ssrRenderComponent(_component_center, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="javascript:;" class="txt-verifikasi"${_scopeId}>Verifikasi Akun</a>`);
          } else {
            return [
              createVNode("a", {
                href: "javascript:;",
                class: "txt-verifikasi"
              }, "Verifikasi Akun")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br><br><div class="txt-content-email"> Pesan verifikasi ini akan kedaluwarsa dalam 24 jam. Jika Anda tidak memverifikasi email Anda dalam waktu tersebut, Anda perlu mengirimkan pesan verifikasi ulang melali aplikasi Waktoo Commerce. </div></td></tr></table><br><br><a href="https://waktoo.com/" class="wcs" target="_blank">www.waktoo.com</a></td></tr></table></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/verifikasi-email2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
