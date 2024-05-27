import { g as _export_sfc, Q as __nuxt_component_0$1, _ as __nuxt_component_1, a as __nuxt_component_2$1 } from '../server.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLoadingIndicator = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_1;
  const _component_Icon = __nuxt_component_2$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_NuxtLoadingIndicator, null, null, _parent));
  _push(`<div class="dark:bg-muted-800 flex min-h-screen bg-white"><div class="flex flex-1 flex-col justify-center px-6 py-12 lg:w-2/5 lg:flex-none"><div class="flex flex-col items-center justify-center mx-auto w-full max-w-sm"><div class="w-full mb-3">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "",
    class: "text-left text-muted-400 hover:text-waktoo-500 transition-colors duration-300 text-2xl"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, { name: "mdi:arrow-left" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, { name: "mdi:arrow-left" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mt-6 w-full flex justify-center items-center"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1672893249/waktoocom/lp2023/logo.png"></div></div><div class="dark:bg-muted-800 relative mx-auto w-full max-w-sm bg-white"><div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div><div class="bg-muted-100 dark:bg-muted-900 hidden w-0 flex-1 items-center justify-center lg:flex lg:w-3/5"><div class="mx-auto w-full max-w-4xl"><div class="flex flex-col items-center justify-center"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1674717156/waktoocom/landingpage/images/mac-studio.png" class="w-60"><div><h2 class="text-center text-gray-800 text-3xl font-bold mt-8"> Drive your bussiness to the <span class="text-waktoo-500 hover:text-waktoo-700">next level</span></h2></div></div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { auth as default };
