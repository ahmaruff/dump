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
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 500 500",
    style: { "enable-background": "new 0 0 500 500" },
    "xml:space": "preserve",
    class: "shrink-0"
  }, _attrs))}><g><g><defs><path id="LOGOSVGID_1_" d="M228.4,181.2c59.6,0,107.8,48.3,107.8,107.8c0,59.6-48.3,107.8-107.8,107.8
					c-59.6,0-107.8-48.3-107.8-107.8C120.6,229.5,168.8,181.2,228.4,181.2 M228.4,78c-116.5,0-211,94.5-211,211
					c0,116.5,94.5,211,211,211c116.5,0,211-94.5,211-211c0-25.2-4.4-49.5-12.6-71.9c-5.2-14.4-16.9-24.2-32-26.9
					c-45.1-7.9-82-39.7-97.1-81.9c-5.2-14.5-16.8-24.3-31.9-27C253.7,79.2,241.2,78,228.4,78z"></path></defs><use xlink:href="#LOGOSVGID_1_" clip-rule="evenodd" fill-rule="evenodd" fill="currentColor" class="overflow-visible"></use><clipPath id="LOGOSVGID_2_"><use xlink:href="#LOGOSVGID_1_" class="overflow-visible"></use></clipPath><rect x="17.4" y="78" clip-path="url(#LOGOSVGID_2_)" width="422" height="422" fill="currentColor"></rect></g><g><defs><path id="LOGOSVGID_3_" d="M416.8,0c36.3,0,65.8,29.5,65.8,65.8c0,36.3-29.5,65.8-65.8,65.8c-36.3,0-65.8-29.5-65.8-65.8
					C351,29.5,380.5,0,416.8,0"></path></defs><use xlink:href="#LOGOSVGID_3_" clip-rule="evenodd" fill-rule="evenodd" fill="currentColor" class="overflow-visible"></use><clipPath id="LOGOSVGID_4_"><use xlink:href="#LOGOSVGID_3_" class="overflow-visible"></use></clipPath><rect x="351" y="0" clip-path="url(#LOGOSVGID_4_)" width="131.6" height="131.6" fill="currentColor"></rect></g></g></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/global/TairoLogo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as default };
