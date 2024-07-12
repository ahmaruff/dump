import { _ as _sfc_main$2 } from './BaseBreadcrumb-cZDskCmn.mjs';
import { _ as __nuxt_component_0$2, d as _export_sfc } from './server.mjs';
import { useSSRContext, defineComponent, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as __nuxt_component_5 } from './ProdukList-pFVACWQ9.mjs';
import './BaseDropdownItem-eyL-Ji7e.mjs';
import '@headlessui/vue';
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
import './TairoTableCell-B3KTDGbV.mjs';
import './BaseInput-BgsoGXSG.mjs';
import './BaseInputHelpText-CmEQTnIf.mjs';
import './input-id-Bz_TYZXb.mjs';
import './TairoModal-Bw9szyQw.mjs';
import './BaseSelect-BU4F-qvb.mjs';
import './BaseButtonIcon-BwaQtzFl.mjs';
import './BaseRadio-Bcx0iNXD.mjs';
import './BaseSwitchThin-Cj-cBPdI.mjs';
import './Loading-DgGIgVLA.mjs';
import './BaseCheckbox-BfPzSTfU.mjs';
import './composables-DmWjNlaH.mjs';
import './toaster-B1V8z_xL.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Produk",
  __ssrInlineRender: true,
  setup(__props) {
    const demoBreadcrumbOne = [
      {
        label: "Home",
        hideLabel: false,
        icon: "lucide:home",
        to: "/toko-admin"
      },
      {
        label: "Produk",
        hideLabel: false,
        to: "#"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseBreadcrumb = _sfc_main$2;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7c056901><div class="mb-2" data-v-7c056901>`);
      _push(ssrRenderComponent(_component_BaseBreadcrumb, { items: demoBreadcrumbOne }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:chevron-right",
              class: "block size-3"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:chevron-right",
                class: "block size-3"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(__nuxt_component_5, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/produk/Produk.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7c056901"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Produk = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Produk, { class: "pe-4 xl:pe-10" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin-produk/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
