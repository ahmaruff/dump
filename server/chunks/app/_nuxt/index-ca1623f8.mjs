import { _ as __nuxt_component_0$1 } from './BaseButtonGroup-8a4e5e7e.mjs';
import { f as _sfc_main$a, e as _sfc_main$v, g as _export_sfc } from '../server.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, unref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import wretch from 'wretch';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@headlessui/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HomeToko",
  __ssrInlineRender: true,
  props: {
    shops: {
      type: Array
    }
  },
  setup(__props) {
    const props = __props;
    const { shops } = props;
    console.log(shops);
    ref("tipe1");
    ref("tab-1");
    const truncate = (text, length) => {
      return text.length > length ? text.substring(0, length) + "..." : text;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButtonGroup = __nuxt_component_0$1;
      const _component_BaseButton = _sfc_main$a;
      const _component_BaseInput = _sfc_main$v;
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 bg-white py-24" }, _attrs))} data-v-45809b78><div class="mx-auto w-full max-w-7xl px-4" data-v-45809b78><div class="grid grid-cols-1 md:grid-cols-12" data-v-45809b78><div class="md:col-span-2" style="${ssrRenderStyle({ "margin-right": "30px" })}" data-v-45809b78><div class="txt-filter" data-v-45809b78>Filter</div><br data-v-45809b78><div class="txt-filter" data-v-45809b78>harga</div>`);
      _push(ssrRenderComponent(_component_BaseButtonGroup, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "muted",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-45809b78${_scopeId2}>Rp</span>`);
                } else {
                  return [
                    createVNode("span", null, "Rp")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseInput, {
              type: "number",
              placeholder: "Minimum Price",
              size: "sm"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButton, {
                color: "muted",
                size: "sm"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "Rp")
                ]),
                _: 1
              }),
              createVNode(_component_BaseInput, {
                type: "number",
                placeholder: "Minimum Price",
                size: "sm"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br data-v-45809b78>`);
      _push(ssrRenderComponent(_component_BaseButtonGroup, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "muted",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-45809b78${_scopeId2}>Rp</span>`);
                } else {
                  return [
                    createVNode("span", null, "Rp")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseInput, {
              type: "number",
              size: "sm",
              placeholder: "Maximum  Price"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButton, {
                color: "muted",
                size: "sm"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "Rp")
                ]),
                _: 1
              }),
              createVNode(_component_BaseInput, {
                type: "number",
                size: "sm",
                placeholder: "Maximum  Price"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br data-v-45809b78><div class="txt-filter" data-v-45809b78>TOKO</div><br data-v-45809b78><br data-v-45809b78><div class="txt-filter2" data-v-45809b78>Semua Kategori</div><br data-v-45809b78><div class="txt-kategori-active" data-v-45809b78>Kategori 1</div><div class="txt-kategori-nonactive" data-v-45809b78>Kategori 2</div><div class="txt-kategori-nonactive" data-v-45809b78>Kategori 3</div><div class="txt-kategori-active" data-v-45809b78>Kategori 4</div><div class="txt-kategori-active" data-v-45809b78>Kategori 5</div><div class="txt-kategori-nonactive" data-v-45809b78>Kategori 6</div><br data-v-45809b78><div class="txt-filter" data-v-45809b78>Short by</div><br data-v-45809b78><br data-v-45809b78><div class="txt-kategori-active" data-v-45809b78>Terbaru</div><div class="txt-kategori-nonactive" data-v-45809b78>Termurah</div><div class="txt-kategori-nonactive" data-v-45809b78>Terlaris</div><div class="txt-kategori-nonactive" data-v-45809b78>Terfavorit</div></div><div class="md:col-span-10" data-v-45809b78><div class="grid grid-cols-1 md:grid-cols-12 gap-8" data-v-45809b78><div class="md:col-span-4" data-v-45809b78>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        icon: "lucide:search",
        size: "lg",
        rounded: "lg",
        placeholder: "Search"
      }, null, _parent));
      _push(`</div><div class="md:col-span-4" data-v-45809b78></div><div class="md:col-span-4" align="right" data-v-45809b78><span class="card-shop" data-v-45809b78><img src="https://res.cloudinary.com/daraki09f/image/upload/v1715805814/waktoo-commerce/icon-shop-1.svg" class="shhps" data-v-45809b78><img src="https://res.cloudinary.com/daraki09f/image/upload/v1715805814/waktoo-commerce/icon-shop-2.svg" class="shhps" data-v-45809b78><img src="https://res.cloudinary.com/daraki09f/image/upload/v1715805814/waktoo-commerce/icon-shop-3.svg" class="shhps" data-v-45809b78><img src="https://res.cloudinary.com/daraki09f/image/upload/v1715805814/waktoo-commerce/icon-shop-4.svg" class="shhps" data-v-45809b78></span></div>`);
      if (unref(shops).length <= 0) {
        _push(`<div class="col-span-12" data-v-45809b78><h1 class="leading-1 txt-filter mx-auto text-center" data-v-45809b78>Data toko ini masih kosong</h1><h3 data-v-45809b78>`);
        _push(ssrRenderComponent(_component_router_link, { to: `/toko/create` }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Buat toko Terlebih dahulu `);
            } else {
              return [
                createTextVNode(" Buat toko Terlebih dahulu ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</h3></div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(shops), (shop) => {
          _push(`<div class="md:col-span-4" data-v-45809b78>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: `/toko/${shop?.id}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="txt-produk" data-v-45809b78${_scopeId}>${ssrInterpolate(truncate(shop.name, 20))}</div><div class="txt-produk" data-v-45809b78${_scopeId}>${ssrInterpolate(truncate(shop.description, 20))}</div>`);
              } else {
                return [
                  createVNode("div", { class: "txt-produk" }, toDisplayString(truncate(shop.name, 20)), 1),
                  createVNode("div", { class: "txt-produk" }, toDisplayString(truncate(shop.description, 20)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeToko.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-45809b78"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const shops = ref([]);
    try {
      const response1 = ([__temp, __restore] = withAsyncContext(() => wretch("https://api.dev.commerce.waktoo.com:443/api/shops").headers({
        "Content-Type": "application/json"
      }).get().json()), __temp = await __temp, __restore(), __temp);
      console.log(response1);
      if (response1 && response1?.status === "success") {
        shops.value = response1?.data?.shop;
        console.log(shops);
      } else {
        console.error("Failed to fetch data from shop API:", response1);
      }
    } catch (error) {
      error.value = error.message;
      console.error("Error:", error);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeToko = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HomeToko, { shops: unref(shops) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/toko/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
