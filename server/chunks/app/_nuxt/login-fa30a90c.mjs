import { u as useRouter, b as _sfc_main$q, e as _sfc_main$v, f as _sfc_main$a, _ as __nuxt_component_1 } from '../server.mjs';
import { defineComponent, ref, withCtx, createTextVNode, unref, isRef, useSSRContext } from 'vue';
import { u as useJwtAuth } from './composables-91439df8.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useJwtAuth();
    const email = ref("");
    const password = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$q;
      const _component_BaseInput = _sfc_main$v;
      const _component_BaseButton = _sfc_main$a;
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        size: "xl",
        lead: "loose",
        weight: "bold",
        class: "text-center mt-6 mb-10 w-full text-gray-800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Masuk Untuk Melanjutkan`);
          } else {
            return [
              createTextVNode("Masuk Untuk Melanjutkan")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><form action="#" method="post" class="mt-4">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(email),
        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
        rounded: "md",
        label: "Username atau Email",
        type: "email",
        placeholder: "Heru Budi",
        class: "mb-4",
        size: "lg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
        rounded: "md",
        label: "Password",
        type: "password",
        placeholder: "****",
        class: "mb-4",
        size: "lg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseButton, {
        class: "w-full block bg-waktoo-500 text-white mb-4 hover:bg-waktoo-700",
        type: "submit",
        variant: "solid",
        color: "none",
        size: "lg"
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
      _push(`</form>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "text-waktoo-500 hover:text-waktoo-800 text-right w-full block mb-10 mt-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Lupa password? `);
          } else {
            return [
              createTextVNode(" Lupa password? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><p class="text-center text-gray-700">Anda belum punya akun? <a href="/auth/register" class="text-waktoo-500 pb-8 hover:text-gray-700">daftar sekarang!</a></p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
