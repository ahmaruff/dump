import { g as _export_sfc, _ as __nuxt_component_1 } from '../server.mjs';
import { useSSRContext, defineComponent, withCtx, createTextVNode } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  data() {
    return {
      product: null
      // Data produk
    };
  },
  async created() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1;
  _push(`<!--[--><div class="flex w-full flex-wrap items-center justify-between px-3 ml-5 -mt-16"><h1 class="mb-2 mt-0 text-2xl font-medium leading-tight text-black"> Detail Produk </h1><div class="relative flex items-center"><a class="me-4 text-neutral-600 dark:text-white" href="#"><span class="[&amp;&gt;svg]:w-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path></svg></span></a><div class="relative" data-twe-dropdown-ref data-twe-dropdown-alignment="end"><a class="me-4 flex items-center text-neutral-600 dark:text-white" href="#" id="dropdownMenuButton1" role="button" data-twe-dropdown-toggle-ref aria-expanded="false"><span class="[&amp;&gt;svg]:w-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd"></path></svg></span><span class="absolute -mt-4 ms-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white">1</span></a><ul class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark" aria-labelledby="dropdownMenuButton1" data-twe-dropdown-menu-ref><li><a class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25" href="#" data-twe-dropdown-item-ref>Aktif</a></li><li><a class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25" href="#" data-twe-dropdown-item-ref>Another action</a></li><li><a class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25" href="#" data-twe-dropdown-item-ref>Something else here</a></li></ul></div><div class="relative" data-twe-dropdown-ref data-twe-dropdown-alignment="end"><a class="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none" href="#" id="dropdownMenuButton2" role="button" data-twe-dropdown-toggle-ref aria-expanded="false"><img src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" class="rounded-full" style="${ssrRenderStyle({ "height": "25px", "width": "25px" })}" alt="" loading="lazy"></a><ul class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark" aria-labelledby="dropdownMenuButton2" data-twe-dropdown-menu-ref><li><a class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25" href="#" data-twe-dropdown-item-ref>Action</a></li><li><a class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25" href="#" data-twe-dropdown-item-ref>Another action</a></li><li><a class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25" href="#" data-twe-dropdown-item-ref>Something else here</a></li></ul></div></div></div><div class="border-muted-200"><div class="nui-card nui-card-rounded-sm nui-card-default"><div class="bg-white dark:bg-muted-800/70 p-10"><div class="col-span-12 mt-6"><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"><img src="#" alt="" loading="lazy"></div><button type="submit" rel="" target="/shop-admin/create" class="nui-button nui-button-small nui-button-rounded nui-button-solid nui-button-warning float-right">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: `/shop-admin/edit/${_ctx.product?.id}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Edit Produk`);
      } else {
        return [
          createTextVNode("Edit Produk")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div><div class="col-span-12 mt-6"><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"><label class="nui-input-label" for="nui-input-89b0cb01-2c29-4d47-9e2d-2a62d6ead7cf">Nama Produk</label><h2 class="text-2xl font-semibold mb-4">${ssrInterpolate(_ctx.product?.name)}</h2></div><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"><label class="nui-input-label" for="nui-input-89b0cb01-2c29-4d47-9e2d-2a62d6ead7cf">Kondisi</label><h5 class="text-2xl font-semibold mb-4">${ssrInterpolate(_ctx.product?.condition)}</h5></div><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"><label class="nui-input-label" for="nui-input-89b0cb01-2c29-4d47-9e2d-2a62d6ead7cf">Price</label><h5 class="text-2xl font-semibold mb-4"> Rp. ${ssrInterpolate(_ctx.product?.price)}</h5></div><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"><label class="nui-input-label" for="nui-input-89b0cb01-2c29-4d47-9e2d-2a62d6ead7cf">Stock</label><h5 class="text-2xl font-semibold mb-4">${ssrInterpolate(_ctx.product?.stock)}</h5></div><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"><label class="nui-input-label" for="nui-input-89b0cb01-2c29-4d47-9e2d-2a62d6ead7cf">Description</label><h5 class="text-2xl font-semibold mb-4">${ssrInterpolate(_ctx.product?.description)}</h5></div></div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/produk/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
