import { f as _sfc_main$a } from '../server.mjs';
import __nuxt_component_1 from './Waktoo-8a990f48.mjs';
import { _ as __nuxt_component_1$1 } from './nuxt-img-285f3071.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$a;
      const _component_LogoWaktoo = __nuxt_component_1;
      const _component_NuxtImg = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-24" }, _attrs))}><div class="mx-auto w-full max-w-7xl px-4"><div class="mx-auto w-full max-w-6xl"><div class="bg-amber-500 ltablet:grid ltablet:grid-cols-2 ltablet:gap-4 overflow-hidden rounded-3xl shadow-xl lg:grid lg:grid-cols-2 lg:gap-4"><div class="ltablet:py-28 ltablet:pr-0 flex items-center px-6 pb-12 pt-10 sm:px-16 sm:pt-16 lg:py-28 lg:pr-0 xl:px-20"><div class="ltablet:self-center font-sans lg:self-center"><h2 class="text-3xl font-medium text-white sm:text-4xl"><span class="block">Sudah siap berbelanja?</span><span class="block">Jelajahi semua produk terbaik, disini</span></h2><p class="mt-6 text-lg leading-6 text-white"> Kami mengembangkan plaftorm penjualan online yang spesial untuk anda. Bikin toko sendiri, Jadi menonjol di dunia maya! </p><div class="mt-8 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        to: "/auth/login",
        shape: "curved",
        class: "!h-11 font-medium block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login Disini!`);
          } else {
            return [
              createTextVNode("Login Disini!")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-10 text-white"><div class="py-3 rounded-sm flex flex-row justify-start items-center gap-3"><p class="font-medium">Powered by</p>`);
      _push(ssrRenderComponent(_component_LogoWaktoo, { class: "h-4 w-auto" }, null, _parent));
      _push(`</div></div></div></div><div class="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 -mt-6">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "ltablet:translate-y-20 block translate-x-6 translate-y-6 rounded-md object-cover object-left-top dark:hidden sm:translate-x-16 lg:translate-y-20",
        src: "/img/apps/tairo-screen-full.png",
        alt: "Tairo demo screenshot lightmode",
        format: "webp",
        width: "568",
        height: "532",
        loading: "lazy",
        decoding: "async"
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
