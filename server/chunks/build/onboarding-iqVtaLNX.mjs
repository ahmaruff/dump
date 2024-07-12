import { _ as _sfc_main$3 } from './BaseProgress-sSCoY-sf.mjs';
import { u as useMultiStepForm, c as createMultiStepForm } from './multi-step-form-BjeY9Jgk.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, ref, watchEffect, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { d as _export_sfc, u as useRoute$1, o as useNuxtApp, w as useRuntimeConfig, q as navigateTo, g as _sfc_main$3$1, _ as __nuxt_component_0$2, x as __nuxt_component_1$2 } from './server.mjs';
import { u as useJwtAuth } from './composables-DmWjNlaH.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      data,
      getStep,
      steps,
      progress,
      currentStep
    } = useMultiStepForm();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseProgress = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-full" }, _attrs))}><div class="flex flex-col justify-center items-center"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1716887978/waktoo-commerce/icon-mask.png" class="img-logo-auth"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1716956244/waktoo-commerce/frame-19924.png"></div><div class="w-full flex flex-col justify-center items-center px-4 md:px-64">`);
      _push(ssrRenderComponent(_component_BaseProgress, {
        title: "Onboarding Progress",
        class: "mt-4 mb-2",
        size: "md",
        value: unref(progress),
        color: "primary"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/onboarding/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Action",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute$1();
    const {
      data,
      nextNotOk,
      loading,
      complete,
      isLastStep,
      isFirstStep,
      currentStep,
      getPrevStep,
      getNextStep,
      getStep
    } = useMultiStepForm();
    const skipUrl = ref("");
    watchEffect(() => {
      var _a;
      if (((_a = data.value.qna[0]) == null ? void 0 : _a.answer) === "Saya baru mau memulai usaha.") {
        skipUrl.value = "/onboarding/step-4";
      } else {
        skipUrl.value = "";
      }
      console.log("skip", skipUrl.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_BaseButton = _sfc_main$3$1;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row gap-4 justify-between items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        class: "w-full md:w-40",
        shadow: "hover",
        size: "lg",
        rounded: "lg",
        color: "default",
        to: (_a = unref(getPrevStep)()) == null ? void 0 : _a.to,
        disabled: !((_b = unref(getPrevStep)()) == null ? void 0 : _b.to)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "lucide:chevron-left" }, null, _parent2, _scopeId));
            _push2(` Kembali `);
          } else {
            return [
              createVNode(_component_Icon, { name: "lucide:chevron-left" }),
              createTextVNode(" Kembali ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      if (unref(route).path != "/onboarding") {
        _push(ssrRenderComponent(_component_BaseButton, {
          class: "mx-1",
          shadow: "hover",
          size: "lg",
          rounded: "lg",
          type: "submit",
          color: "default"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Lewati Semua `);
            } else {
              return [
                createTextVNode(" Lewati Semua ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(route).path != "/onboarding") {
        _push(ssrRenderComponent(_component_BaseButton, {
          class: "mx-1",
          shadow: "hover",
          size: "lg",
          rounded: "lg",
          type: "submit",
          color: "default",
          to: (_c = unref(getNextStep)()) == null ? void 0 : _c.to
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Lewati `);
            } else {
              return [
                createTextVNode(" Lewati ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isLastStep)) {
        _push(ssrRenderComponent(_component_BaseButton, {
          class: "w-full md:w-40 ms-1",
          shadow: "hover",
          size: "lg",
          rounded: "lg",
          type: "submit",
          color: "primary",
          disabled: unref(nextNotOk) || unref(loading) || unref(complete)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Selesai `);
            } else {
              return [
                createTextVNode(" Selesai ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (unref(nextNotOk) || unref(loading) || unref(complete)) {
        _push(ssrRenderComponent(_component_BaseButton, {
          class: "w-full md:w-40 ms-1",
          shadow: "hover",
          size: "lg",
          rounded: "lg",
          color: "primary",
          type: "button",
          disabled: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Selanjutnya `);
            } else {
              return [
                createTextVNode(" Selanjutnya ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (unref(skipUrl)) {
        _push(ssrRenderComponent(_component_BaseButton, {
          class: "w-full md:w-40 ms-1",
          shadow: "hover",
          size: "lg",
          rounded: "lg",
          color: "primary",
          to: unref(skipUrl),
          disabled: unref(nextNotOk) || unref(loading) || unref(complete)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Selanjutnya `);
            } else {
              return [
                createTextVNode(" Selanjutnya ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_BaseButton, {
          class: "w-full md:w-40 ms-1",
          shadow: "hover",
          size: "lg",
          rounded: "lg",
          color: "primary",
          to: (_d = unref(getNextStep)()) == null ? void 0 : _d.to,
          disabled: unref(nextNotOk) || unref(loading) || unref(complete)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Selanjutnya `);
            } else {
              return [
                createTextVNode(" Selanjutnya ")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/onboarding/Action.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "onboarding",
  __ssrInlineRender: true,
  setup(__props) {
    const { $jwtAuth } = useNuxtApp();
    const skipUrl = ref("/onboarding/step-3");
    function getEmailPrefix(email) {
      const parts = email.split("@");
      return parts[0];
    }
    const initialState = ref({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      progress: 0,
      qna: [],
      leads: {
        id: "",
        data: ""
      }
    });
    const {
      data,
      reset,
      handleSubmit
    } = createMultiStepForm({
      initialState,
      async onSubmit(values) {
        const authCred = {
          email: data.value.email,
          name: data.value.name || getEmailPrefix(data.value.email),
          app_version: useRuntimeConfig().public.app_version,
          password: data.value.password,
          password_confirmation: data.value.password_confirmation
        };
        await $jwtAuth.register(authCred);
        useJwtAuth();
        console.log("Form submitted");
        navigateTo("/onboarding-success");
      },
      steps: [
        {
          to: "/onboarding",
          meta: {
            name: "Registrasi",
            description: "Registrasi Akun User"
          }
        },
        {
          to: "/onboarding/step-2",
          meta: {
            name: "Tujuan Bisnis Anda",
            description: "Pilih kategori yang paling sesuai dengan tujuan bisnis anda"
          }
        },
        {
          to: skipUrl.value,
          meta: {
            name: "Siapakah Anda",
            description: "Pilih kategori yang paling sesuai dengan tujuan anda di Waktoo Commerce"
          }
        },
        {
          to: "/onboarding/step-4",
          meta: {
            name: "Dimana Anda Ingin Berjualan?",
            description: "Pilih metode apa saja yang ingin anda gunakan dalam berjualan"
          }
        },
        {
          to: "/onboarding/step-5",
          meta: {
            name: "Jumlah Produk yang Akan Anda Jual",
            description: "Pilih kategori yang paling sesuai dengan tujuan bisnis anda"
          }
        },
        {
          to: "/onboarding/step-6",
          meta: {
            name: "Leads",
            description: "Darimana anda mengetahui Waktoo Commerce?"
          }
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OnboardingHeader = _sfc_main$2;
      const _component_NuxtPage = __nuxt_component_1$2;
      const _component_OnboardingAction = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-full md:h-screen bg-white dark:bg-muted-900 p-4 flex flex-col justify-center md:items-center" }, _attrs))} data-v-5080e14e>`);
      _push(ssrRenderComponent(_component_OnboardingHeader, null, null, _parent));
      _push(`<form class="w-full px-4 md:px-40 lg:px-60 overflow-y-auto custom-scrollbar" data-v-5080e14e><div class="mb-8 flex flex-col justify-center items-center w-full" data-v-5080e14e>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_OnboardingAction, { class: "fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-6 transition-opacity duration-300 w-full px-4 md:px-16" }, null, _parent));
      _push(`</form></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/onboarding.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const onboarding = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5080e14e"]]);

export { onboarding as default };
