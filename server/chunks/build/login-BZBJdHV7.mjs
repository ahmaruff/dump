import { d as _export_sfc, o as useNuxtApp, f as useRouter$1, a as _sfc_main$7, _ as __nuxt_component_0$2, b as __nuxt_component_1, g as _sfc_main$3 } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseParagraph-DtUiLRkC.mjs';
import { _ as _sfc_main$2 } from './BaseInput-BgsoGXSG.mjs';
import { useSSRContext, defineComponent, computed, ref, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, unref, isRef, withModifiers } from 'vue';
import { u as useJwtAuth } from './composables-DmWjNlaH.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { z, u as useForm, F as Field, t as toTypedSchema } from './vee-validate-zod.esm-Bmzui0dy.mjs';
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
import './BaseInputHelpText-CmEQTnIf.mjs';
import './input-id-Bz_TYZXb.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const VALIDATION_TEXT = {
      EMAIL_REQUIRED: "A valid email is required",
      PASSWORD_REQUIRED: "A password is required"
    };
    const zodSchema = z.object({
      email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
      password: z.string().min(1, VALIDATION_TEXT.PASSWORD_REQUIRED),
      trustDevice: z.boolean()
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = computed(() => ({
      email: "",
      password: "",
      trustDevice: false
    }));
    const {
      handleSubmit,
      isSubmitting,
      setFieldError,
      meta,
      values,
      errors,
      resetForm,
      setFieldValue,
      setErrors
    } = useForm({
      validationSchema,
      initialValues
    });
    useNuxtApp();
    useRouter$1();
    useJwtAuth();
    const showPasswordField = ref(true);
    ref(0);
    const password = ref("");
    const email = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$7;
      const _component_BaseParagraph = _sfc_main$1;
      const _component_Icon = __nuxt_component_0$2;
      const _component_BaseInput = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_BaseButton = _sfc_main$3;
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-800 flex min-h-screen bg-white" }, _attrs))} data-v-da94b7da><div class="relative flex flex-1 flex-col justify-center px-6 lg:w-2/5 lg:flex-none width-plus" data-v-da94b7da><div class="dark:bg-muted-800 relative mx-auto w-full max-w-sm bg-white" data-v-da94b7da><div data-v-da94b7da>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        lead: "relaxed",
        weight: "medium",
        class: "txt-login mt-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Login `);
          } else {
            return [
              createTextVNode(" Login ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-small-login mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Selamat Datang di <span class="bold-600" data-v-da94b7da${_scopeId}>Waktoo Commerce</span><br data-v-da94b7da${_scopeId}>\u{1F590}\uFE0F `);
          } else {
            return [
              createTextVNode(" Selamat Datang di "),
              createVNode("span", { class: "bold-600" }, "Waktoo Commerce"),
              createVNode("br"),
              createTextVNode("\u{1F590}\uFE0F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-wrap justify-between gap-4" data-v-da94b7da><button class="dark:bg-muted-700 text-muted-800 border-muted-300 dark:border-muted-600 nui-focus relative inline-flex grow items-center justify-center gap-2 rounded border bg-white px-6 py-4 dark:text-white border-radius" data-v-da94b7da>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:google-icon",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`<div class="text-login-google" data-v-da94b7da>Masuk menggunakan Google</div></button></div><div class="flex-100 mt-8 flex items-center" data-v-da94b7da><hr class="border-muted-200 dark:border-muted-700 flex-auto border-t-2" data-v-da94b7da><span class="text-muted-600 dark:text-muted-300 px-4 font-sans font-light" data-v-da94b7da> Atau </span><hr class="border-muted-200 dark:border-muted-700 flex-auto border-t-2" data-v-da94b7da></div></div><form method="POST" action="" class="mt-6" novalidate data-v-da94b7da><div class="mt-5" data-v-da94b7da><div data-v-da94b7da><div class="space-y-4" data-v-da94b7da>`);
      _push(ssrRenderComponent(unref(Field), { name: "email" }, {
        default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(email),
              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
              type: "email",
              label: "Email",
              placeholder: "Email",
              autocomplete: "email"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                modelValue: unref(email),
                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                type: "email",
                label: "Email",
                placeholder: "Email",
                autocomplete: "email"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
        type: unref(showPasswordField) ? "password" : "text",
        label: "Kata Sandi",
        placeholder: "Password"
      }, {
        action: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="leading-0 text-muted-400 peer-focus-within:text-primary-500 absolute right-0 top-0 flex passShow w-10 items-center justify-center text-center text-xl" data-v-da94b7da${_scopeId}><div class="relative flex h-full w-full items-center justify-center"${ssrRenderAttr("data-nui-tooltip", `${unref(showPasswordField) ? "Show" : "Hide"} password`)} data-v-da94b7da${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: unref(showPasswordField) ? "mdi:eye-outline" : "mdi:eye-off-outline",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</div></button>`);
          } else {
            return [
              createVNode("button", {
                class: "leading-0 text-muted-400 peer-focus-within:text-primary-500 absolute right-0 top-0 flex passShow w-10 items-center justify-center text-center text-xl",
                onClick: withModifiers(($event) => showPasswordField.value = !unref(showPasswordField), ["prevent"])
              }, [
                createVNode("div", {
                  class: "relative flex h-full w-full items-center justify-center",
                  "data-nui-tooltip": `${unref(showPasswordField) ? "Show" : "Hide"} password`
                }, [
                  createVNode(_component_Icon, {
                    name: unref(showPasswordField) ? "mdi:eye-outline" : "mdi:eye-off-outline",
                    class: "h-5 w-5"
                  }, null, 8, ["name"])
                ], 8, ["data-nui-tooltip"])
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-6 flex items-center justify-between" data-v-da94b7da>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/recover",
        class: "text-primary-600 hover:text-primary-500 font-sans font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Lupa kata sandi? `);
          } else {
            return [
              createTextVNode(" Lupa kata sandi? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-6" data-v-da94b7da><div class="block w-full rounded-md shadow-sm" data-v-da94b7da>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        disabled: unref(isSubmitting),
        loading: unref(isSubmitting),
        type: "submit",
        color: "primary",
        class: "!h-11 w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Masuk `);
          } else {
            return [
              createTextVNode(" Masuk ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="text-footer-login" data-v-da94b7da> Belum punya akun? `);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/onboarding",
        class: "color-orange"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Daftar di sini`);
          } else {
            return [
              createTextVNode("Daftar di sini")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br data-v-da94b7da><br data-v-da94b7da> Baca <span class="color-orange" data-v-da94b7da>Ketentuan Layanan</span> dan <span class="color-orange" data-v-da94b7da>Kebijakan Privasi</span> kami.<br data-v-da94b7da></div></div></form></div></div><div class="bg-muted-100 dark:bg-muted-900 relative hidden w-0 flex-1 justify-center lg:flex lg:w-3/5 bg-login-auth" data-v-da94b7da><div class="mx-auto w-full max-w-4xl" data-v-da94b7da><div class="card-login-auth" data-v-da94b7da><span class="txt-title-login" data-v-da94b7da>Kelola Toko Anda <br data-v-da94b7da>di Mana Saja</span><img src="https://res.cloudinary.com/daraki09f/image/upload/v1716887978/waktoo-commerce/icon-mask.png" class="img-logo-auth" data-v-da94b7da><img src="https://res.cloudinary.com/daraki09f/image/upload/v1716955046/waktoo-commerce/img-beautiful.png" class="img-beautiful" data-v-da94b7da></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-da94b7da"]]);

export { login as default };
