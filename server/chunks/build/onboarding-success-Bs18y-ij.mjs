import { _ as _sfc_main$1 } from './BaseProgress-sSCoY-sf.mjs';
import { d as _export_sfc, a as _sfc_main$7, g as _sfc_main$3 } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "onboarding-success",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseProgress = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$7;
      const _component_BaseButton = _sfc_main$3;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-full md:h-screen bg-white dark:bg-muted-900 p-4 flex flex-col justify-center md:items-center" }, _attrs))} data-v-56b23bd9><div class="mx-auto w-full" data-v-56b23bd9><div class="flex flex-col justify-center items-center" data-v-56b23bd9><img src="https://res.cloudinary.com/daraki09f/image/upload/v1716887978/waktoo-commerce/icon-mask.png" class="img-logo-auth" data-v-56b23bd9><img src="https://res.cloudinary.com/daraki09f/image/upload/v1716956244/waktoo-commerce/frame-19924.png" data-v-56b23bd9></div><div class="w-full flex flex-col justify-center items-center px-64" data-v-56b23bd9>`);
      _push(ssrRenderComponent(_component_BaseProgress, {
        title: "Onboarding Progress",
        class: "mt-4 mb-2",
        size: "md",
        value: 100,
        color: "primary"
      }, null, _parent));
      _push(`</div></div><div class="w-full px-4 md:px-40 lg:px-60 overflow-y-auto custom-scrollbar" data-v-56b23bd9><div class="mb-8 flex flex-col justify-center items-center w-full" data-v-56b23bd9>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        class: "txt-onboarding-1 margin-40 text-center",
        weight: "medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Selamat!!! <br data-v-56b23bd9${_scopeId}> Registrasi Akun Anda Telah Berhasil `);
          } else {
            return [
              createTextVNode(" Selamat!!! "),
              createVNode("br"),
              createTextVNode(" Registrasi Akun Anda Telah Berhasil ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div data-v-56b23bd9><div class="flex flex-col justify-center items-center" data-v-56b23bd9><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718242268/waktoo-commerce/frame-email2.png" class="w-12 h-12" data-v-56b23bd9></div><br data-v-56b23bd9><div class="text-center text-muted-400 text-sm" data-v-56b23bd9> Jangkau jutaan pelanggan baru, tingkatkan penjualan, dan raih kesuksesan di dunia digital dengan toko online Anda yang profesional dan mudah dikelola. Waktoo Commerce akan menjadi mitra tepercaya dalam perjalanan e-commerce Anda. </div></div></div><div class="flex flex-row gap-4 justify-center items-center fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-6 transition-opacity duration-300 w-full px-4 md:px-16" data-v-56b23bd9>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        class: "w-full md:w-64",
        shadow: "hover",
        size: "lg",
        rounded: "lg",
        color: "primary",
        to: "/home"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Menuju ke Beranda `);
          } else {
            return [
              createTextVNode(" Menuju ke Beranda ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/onboarding-success.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const onboardingSuccess = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-56b23bd9"]]);

export { onboardingSuccess as default };
