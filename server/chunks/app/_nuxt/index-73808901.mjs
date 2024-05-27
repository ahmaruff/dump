import { _ as __nuxt_component_0$1 } from './BaseButtonGroup-8a4e5e7e.mjs';
import { z as useRoute, f as _sfc_main$a, e as _sfc_main$v, g as _export_sfc } from '../server.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, unref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "LandingP",
  __ssrInlineRender: true,
  props: {
    products: {
      type: Array
    }
    // review: {
    //   type: Object,
    //   required: true,
    // },
  },
  setup(__props) {
    const props = __props;
    const { products } = props;
    console.log(products);
    ref("tipe1");
    ref("tab-1");
    const truncate = (text, length) => {
      return text.length > length ? text.substring(0, length) + "..." : text;
    };
    const formatCurrency = (price) => {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      });
      return formatter.format(price);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButtonGroup = __nuxt_component_0$1;
      const _component_BaseButton = _sfc_main$a;
      const _component_BaseInput = _sfc_main$v;
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 bg-white py-24" }, _attrs))} data-v-f4aa7a6b><div class="mx-auto w-full max-w-7xl px-4" data-v-f4aa7a6b><div class="grid grid-cols-1 md:grid-cols-12" data-v-f4aa7a6b><div class="md:col-span-2" style="${ssrRenderStyle({ "margin-right": "30px" })}" data-v-f4aa7a6b><div class="txt-filter" data-v-f4aa7a6b>Filter</div><br data-v-f4aa7a6b><div class="txt-filter" data-v-f4aa7a6b>harga</div>`);
      _push(ssrRenderComponent(_component_BaseButtonGroup, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "muted",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-f4aa7a6b${_scopeId2}>Rp</span>`);
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
      _push(`<br data-v-f4aa7a6b>`);
      _push(ssrRenderComponent(_component_BaseButtonGroup, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "muted",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-f4aa7a6b${_scopeId2}>Rp</span>`);
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
      _push(`<br data-v-f4aa7a6b><div class="txt-filter" data-v-f4aa7a6b>Kategori</div><br data-v-f4aa7a6b><br data-v-f4aa7a6b><div class="txt-filter2" data-v-f4aa7a6b>Semua Kategori</div><br data-v-f4aa7a6b><div class="txt-kategori-active" data-v-f4aa7a6b>Kategori 1</div><div class="txt-kategori-nonactive" data-v-f4aa7a6b>Kategori 2</div><div class="txt-kategori-nonactive" data-v-f4aa7a6b>Kategori 3</div><div class="txt-kategori-active" data-v-f4aa7a6b>Kategori 4</div><div class="txt-kategori-active" data-v-f4aa7a6b>Kategori 5</div><div class="txt-kategori-nonactive" data-v-f4aa7a6b>Kategori 6</div><br data-v-f4aa7a6b><div class="txt-filter" data-v-f4aa7a6b>Short by</div><br data-v-f4aa7a6b><br data-v-f4aa7a6b><div class="txt-kategori-active" data-v-f4aa7a6b>Terbaru</div><div class="txt-kategori-nonactive" data-v-f4aa7a6b>Termurah</div><div class="txt-kategori-nonactive" data-v-f4aa7a6b>Terlaris</div><div class="txt-kategori-nonactive" data-v-f4aa7a6b>Terfavorit</div></div><div class="md:col-span-10" data-v-f4aa7a6b><div class="grid grid-cols-1 md:grid-cols-12 gap-8" data-v-f4aa7a6b><div class="md:col-span-4" data-v-f4aa7a6b>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        icon: "lucide:search",
        size: "lg",
        rounded: "lg",
        placeholder: "Search"
      }, null, _parent));
      _push(`</div><div class="md:col-span-4" data-v-f4aa7a6b></div><div class="md:col-span-4" align="right" data-v-f4aa7a6b><span class="card-shop" data-v-f4aa7a6b><img src="https://res.cloudinary.com/daraki09f/image/upload/v1715805814/waktoo-commerce/icon-shop-1.svg" class="shhps" data-v-f4aa7a6b><img src="https://res.cloudinary.com/daraki09f/image/upload/v1715805814/waktoo-commerce/icon-shop-2.svg" class="shhps" data-v-f4aa7a6b><img src="https://res.cloudinary.com/daraki09f/image/upload/v1715805814/waktoo-commerce/icon-shop-3.svg" class="shhps" data-v-f4aa7a6b><img src="https://res.cloudinary.com/daraki09f/image/upload/v1715805814/waktoo-commerce/icon-shop-4.svg" class="shhps" data-v-f4aa7a6b></span></div>`);
      if (unref(products).length <= 0) {
        _push(`<div class="col-span-12" data-v-f4aa7a6b><h1 class="leading-1 txt-filter mx-auto text-center" data-v-f4aa7a6b>Data produk pada toko ini masih kosong</h1><h3 data-v-f4aa7a6b>`);
        _push(ssrRenderComponent(_component_router_link, { to: `/toko/1/create` }, {
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
        ssrRenderList(unref(products), (product) => {
          _push(`<div class="md:col-span-4" data-v-f4aa7a6b>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: `/toko/1/produk/${product?.id}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (product?.images) {
                  _push2(`<img${ssrRenderAttr("src", product.images[0])} alt="image description" class="img-produk" data-v-f4aa7a6b${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="txt-produk" data-v-f4aa7a6b${_scopeId}>${ssrInterpolate(truncate(product.name, 20))}</div>`);
                if (typeof product.price === "number") {
                  _push2(`<div class="txt-price-produk" data-v-f4aa7a6b${_scopeId}>${ssrInterpolate(formatCurrency(product.price))}</div>`);
                } else {
                  _push2(`<div class="txt-price-produk" data-v-f4aa7a6b${_scopeId}>${ssrInterpolate(product.price)}</div>`);
                }
              } else {
                return [
                  product?.images ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: product.images[0],
                    alt: "image description",
                    class: "img-produk"
                  }, null, 8, ["src"])) : createCommentVNode("", true),
                  createVNode("div", { class: "txt-produk" }, toDisplayString(truncate(product.name, 20)), 1),
                  typeof product.price === "number" ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "txt-price-produk"
                  }, toDisplayString(formatCurrency(product.price)), 1)) : (openBlock(), createBlock("div", {
                    key: 2,
                    class: "txt-price-produk"
                  }, toDisplayString(product.price), 1))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingP.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f4aa7a6b"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const products = ref([]);
    const route = useRoute();
    const id = route.params.id;
    try {
      const response1 = ([__temp, __restore] = withAsyncContext(() => wretch("https://api.dev.commerce.waktoo.com:443/api/shops/" + id + "/products").headers({
        "Content-Type": "application/json"
      }).get().json()), __temp = await __temp, __restore(), __temp);
      console.log(response1);
      if (response1 && response1?.status === "success") {
        products.value = response1?.data?.product;
        console.log(products);
      } else {
        console.error("Failed to fetch data from product-data API:", response1);
      }
    } catch (error) {
      error.value = error.message;
      console.error("Error:", error);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingP = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LandingP, { products: unref(products) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/toko/[id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
