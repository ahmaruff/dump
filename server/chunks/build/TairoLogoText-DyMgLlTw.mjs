import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { d as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    class: "shrink-0",
    viewBox: "0 0 1524.6 500"
  }, _attrs))}><defs><path id="a" d="M180.5 391.1c-53-2.4-77.4-18-77.4-74.2V191.3h79.5V88.2h-79.5V1.7H0V321c0 119.2 69.5 168.6 180.5 168.8h2.1v-98.7h-2.1z"></path></defs><use xlink:href="#a" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd"></use><clipPath id="b"><use xlink:href="#a" class="overflow-visible"></use></clipPath><path fill="currentColor" d="M0 1.7h182.6v488.1H0z" clip-path="url(#b)"></path><defs><path id="c" d="M409.2 181.2c59.6 0 107.8 48.3 107.8 107.8 0 59.6-48.3 107.8-107.8 107.8-59.6 0-107.8-48.3-107.8-107.8s48.3-107.8 107.8-107.8m206.7-93h-98.5v43C486.2 98.3 443.2 79.6 394 79.6c-104.7 0-197.2 90.6-197.2 210.2 0 118.8 92.5 209.4 197.2 209.4 49.2 0 92.2-18.8 123.5-51.6v43H616V88.2z"></path></defs><use xlink:href="#c" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd"></use><clipPath id="d"><use xlink:href="#c" class="overflow-visible"></use></clipPath><path fill="currentColor" d="M196.8 79.6H616v419.7H196.8z" clip-path="url(#d)"></path><defs><path id="e" d="M674.2 88.2h103.2v402.5H674.2z"></path></defs><use xlink:href="#e" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd"></use><clipPath id="f"><use xlink:href="#e" class="overflow-visible"></use></clipPath><path fill="currentColor" d="M674.2 88.2h103.2v402.5H674.2z" clip-path="url(#f)"></path><defs><path id="g" d="M1047.4 80.4C913.8 64 834.8 143.7 834.8 257.8v232.9H938V257.8c0-57 43.8-92.2 109.4-80.5V80.4z"></path></defs><use xlink:href="#g" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd"></use><clipPath id="h"><use xlink:href="#g" class="overflow-visible"></use></clipPath><path fill="currentColor" d="M834.8 63.9h212.6v426.7H834.8z" clip-path="url(#h)"></path><defs><path id="i" d="M1270.4 181.2c59.6 0 107.8 48.3 107.8 107.8 0 59.6-48.3 107.8-107.8 107.8-59.6 0-107.8-48.3-107.8-107.8-.1-59.5 48.2-107.8 107.8-107.8m0-103.2c-116.5 0-211 94.5-211 211s94.5 211 211 211 211-94.5 211-211c0-25.2-4.4-49.5-12.6-71.9-5.2-14.4-16.9-24.2-32-26.9-45.1-7.9-82-39.7-97.1-81.9-5.2-14.5-16.8-24.3-31.9-27-12.1-2.1-24.6-3.3-37.4-3.3z"></path></defs><use xlink:href="#i" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd"></use><clipPath id="j"><use xlink:href="#i" class="overflow-visible"></use></clipPath><path fill="currentColor" d="M1059.4 78h422v422h-422z" clip-path="url(#j)"></path><defs><path id="k" d="M1458.8 0c36.3 0 65.8 29.5 65.8 65.8s-29.5 65.8-65.8 65.8-65.8-29.5-65.8-65.8S1422.4 0 1458.8 0"></path></defs><use xlink:href="#k" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd"></use><clipPath id="l"><use xlink:href="#k" class="overflow-visible"></use></clipPath><path fill="currentColor" d="M1393 0h131.6v131.6H1393z" clip-path="url(#l)"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/global/TairoLogoText.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TairoLogoText = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { TairoLogoText as default };
