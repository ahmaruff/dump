import { _ as _sfc_main$2 } from './LandingFooter-843f9743.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, withCtx, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { z as useRoute, A as _sfc_main$x } from '../server.mjs';
import { _ as _sfc_main$3 } from './BaseCheckbox-bb4e3b0e.mjs';
import { u as useJwtAuth } from './composables-91439df8.mjs';
import wretch from 'wretch';
import { useRouter } from 'vue-router';
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
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@headlessui/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LayananToko",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRouter();
    useRoute();
    useJwtAuth();
    const selectedCouriers = ref([]);
    const couriers = ref([]);
    const loading = ref(false);
    const error = ref(null);
    try {
      loading.value = true;
      const response = ([__temp, __restore] = withAsyncContext(() => wretch("https://api.dev.commerce.waktoo.com:443/api/shipping").headers({ "Content-Type": "application/json" }).get().json()), __temp = await __temp, __restore(), __temp);
      if (response && response.status === "success") {
        couriers.value = response.data.courier;
      } else {
        console.error("Failed to fetch data from product-courier API:", response);
      }
    } catch (err) {
      error.value = err.message;
      console.error("Error:", err);
    } finally {
      loading.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseFocusLoop = _sfc_main$x;
      const _component_BaseCheckbox = _sfc_main$3;
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="dark:bg-muted-900 bg-white py-24"><div class="mx-auto w-full max-w-7xl px-4"><div class="ptablet:grid-cols-2 grid gap-6 sm:grid-cols-3"><div><span class="txt-title-2">Pilih Jasa Pengiriman</span><br><span class="txt-price-big"></span><br><br>`);
      _push(ssrRenderComponent(_component_BaseFocusLoop, { class: "grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(couriers.value, (courier) => {
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                key: courier,
                value: courier,
                label: courier,
                modelValue: selectedCouriers.value,
                "onUpdate:modelValue": ($event) => selectedCouriers.value = $event,
                rounded: "none",
                color: "warning"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(couriers.value, (courier) => {
                return openBlock(), createBlock(_component_BaseCheckbox, {
                  key: courier,
                  value: courier,
                  label: courier,
                  modelValue: selectedCouriers.value,
                  "onUpdate:modelValue": ($event) => selectedCouriers.value = $event,
                  rounded: "none",
                  color: "warning"
                }, null, 8, ["value", "label", "modelValue", "onUpdate:modelValue"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><br><div class="text-center md:col-span-5"><div class="-mt-4 inline-flex w-full items-center justify-center gap-2 sm:w-auto"><button type="button" rel="" target="" class="nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-default !h-12 w-full sm:w-40"> Cancel </button><button type="submit" rel="" target="" class="nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-primary !h-12 w-full sm:w-40"> Submit </button></div></div></form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LayananToko.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_component_LandingFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/toko/layanan/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
