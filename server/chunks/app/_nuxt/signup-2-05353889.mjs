import { u as useRouter, _ as __nuxt_component_1, b as _sfc_main$q, d as _sfc_main$p, e as _sfc_main$v, f as _sfc_main$a, a as __nuxt_component_2$1 } from '../server.mjs';
import __nuxt_component_1$1 from './TairoLogo-a768bb4f.mjs';
import { _ as _sfc_main$1 } from './BaseThemeToggle-3a34801d.mjs';
import { _ as _sfc_main$2 } from './BaseCheckbox-bb4e3b0e.mjs';
import { defineComponent, computed, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { u as useToaster } from './toaster-74e9c6eb.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, Field } from 'vee-validate';
import { z } from 'zod';
import '../../nitro/node-server.mjs';
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
import 'fs';
import 'path';
import 'ipx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'wretch';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@headlessui/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "signup-2",
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
    const router = useRouter();
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
      const _component_NuxtLink = __nuxt_component_1;
      const _component_TairoLogo = __nuxt_component_1$1;
      const _component_BaseThemeToggle = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$q;
      const _component_BaseParagraph = _sfc_main$p;
      const _component_BaseInput = _sfc_main$v;
      const _component_BaseCheckbox = _sfc_main$2;
      const _component_BaseButton = _sfc_main$a;
      const _component_Icon = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4" }, _attrs))}><div class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogo, { class: "h-10 w-10" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogo, { class: "h-10 w-10" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseThemeToggle, null, null, _parent));
      _push(`</div></div><div class="flex w-full items-center justify-center"><div class="relative mx-auto w-full max-w-2xl"><div class="me-auto ms-auto mt-4 w-full"><form method="POST" action="" class="me-auto ms-auto mt-4 w-full max-w-md" novalidate><div class="text-center">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "3xl",
        weight: "medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Welcome to Tairo `);
          } else {
            return [
              createTextVNode(" Welcome to Tairo ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-400 mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Let&#39;s start by creating you account `);
          } else {
            return [
              createTextVNode(" Let's start by creating you account ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="px-8 py-4"><div class="mb-4 space-y-4">`);
      _push(ssrRenderComponent(unref(Field), { name: "email" }, {
        default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              "model-value": field.value,
              error: errorMessage,
              disabled: unref(isSubmitting),
              type: "email",
              label: "Email address",
              placeholder: "ex: maya@cssninja.io",
              autocomplete: "email",
              classes: {
                input: "h-12"
              },
              "onUpdate:modelValue": handleChange,
              onBlur: handleBlur
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting),
                type: "email",
                label: "Email address",
                placeholder: "ex: maya@cssninja.io",
                autocomplete: "email",
                classes: {
                  input: "h-12"
                },
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Field), { name: "password" }, {
        default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              "model-value": field.value,
              error: errorMessage,
              disabled: unref(isSubmitting),
              type: "password",
              label: "Password",
              placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
              autocomplete: "new-password",
              classes: {
                input: "h-12"
              },
              "onUpdate:modelValue": handleChange,
              onBlur: handleBlur
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting),
                type: "password",
                label: "Password",
                placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                autocomplete: "new-password",
                classes: {
                  input: "h-12"
                },
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Field), { name: "confirmPassword" }, {
        default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              "model-value": field.value,
              error: errorMessage,
              disabled: unref(isSubmitting),
              type: "password",
              label: "Confirm Password",
              placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
              classes: {
                input: "h-12"
              },
              "onUpdate:modelValue": handleChange,
              onBlur: handleBlur
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting),
                type: "password",
                label: "Confirm Password",
                placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                classes: {
                  input: "h-12"
                },
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-6"><div class="mt-6 flex items-center justify-between">`);
      _push(ssrRenderComponent(unref(Field), { name: "terms" }, {
        default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              "model-value": field.value,
              disabled: unref(isSubmitting),
              error: errorMessage,
              shape: "rounded",
              color: "primary",
              "onUpdate:modelValue": handleChange,
              onBlur: handleBlur
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}><span${_scopeId2}>I accept the</span><a href="#" class="text-primary-500 hover:underline focus:underline"${_scopeId2}> Terms of Service </a></span>`);
                } else {
                  return [
                    createVNode("span", null, [
                      createVNode("span", null, "I accept the"),
                      createVNode("a", {
                        href: "#",
                        class: "text-primary-500 hover:underline focus:underline"
                      }, " Terms of Service ")
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCheckbox, {
                "model-value": field.value,
                disabled: unref(isSubmitting),
                error: errorMessage,
                shape: "rounded",
                color: "primary",
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, {
                default: withCtx(() => [
                  createVNode("span", null, [
                    createVNode("span", null, "I accept the"),
                    createVNode("a", {
                      href: "#",
                      class: "text-primary-500 hover:underline focus:underline"
                    }, " Terms of Service ")
                  ])
                ]),
                _: 2
              }, 1032, ["model-value", "disabled", "error", "onUpdate:modelValue", "onBlur"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mb-6">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        disabled: unref(isSubmitting),
        loading: unref(isSubmitting),
        type: "submit",
        color: "primary",
        class: "!h-12 w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign Up `);
          } else {
            return [
              createTextVNode(" Sign Up ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-6 grid gap-0 sm:grid-cols-3"><hr class="border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block"><span class="bg-muted-100 dark:bg-muted-900 text-muted-400 relative top-0.5 text-center font-sans text-sm"> Or continue with </span><hr class="border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block"></div><div class="grid grid-cols-3 gap-2"><button type="button" class="bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300 hover:bg-white">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-brands:google",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</button><button type="button" class="bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300 hover:bg-white">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-brands:twitter",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</button><button type="button" class="bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300 hover:bg-white">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-brands:linkedin-in",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</button></div><p class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"><span>Already have an account?</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/login-2",
        class: "text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign in `);
          } else {
            return [
              createTextVNode(" Sign in ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></form></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/signup-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
