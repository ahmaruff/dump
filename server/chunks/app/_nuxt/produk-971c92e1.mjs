import { _ as _sfc_main$2 } from './LandingFooter-843f9743.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './BaseButtonAction-9b998a35.mjs';
import { z as useRoute, g as _export_sfc, f as _sfc_main$a, a as __nuxt_component_2$1 } from '../server.mjs';
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
  __name: "DetailProduk",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const activeTipe = ref("tipe1");
    const activeTab = ref("tab-1");
    const product = ref();
    const route = useRoute();
    const productId = route.params.product_id;
    console.log(productId);
    const response = ([__temp, __restore] = withAsyncContext(() => wretch(
      `https://api.dev.commerce.waktoo.com:443/api/product-data/${productId}`
    ).headers({
      // Authorization: `Bearer ${userToken}`,
      "Content-Type": "application/json"
    }).get().json()), __temp = await __temp, __restore(), __temp);
    if (response && response.status === "success") {
      product.value = response.data.product_data;
    } else {
      error.value = "Failed to fetch product data";
      console.error("Failed to fetch product data:", response);
    }
    const formatCurrency = (price) => {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      });
      return formatter.format(price);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_BaseButtonAction = _sfc_main$3;
      const _component_BaseButton = _sfc_main$a;
      const _component_Icon = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 bg-white py-24" }, _attrs))} data-v-3ffda86b><div class="mx-auto w-full max-w-7xl px-4" data-v-3ffda86b><div class="mb-10 max-w-1xl" data-v-3ffda86b><table width="100%" data-v-3ffda86b><td class="border-tabel-unset" nowrap width="40px" valign="middle" data-v-3ffda86b>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/home",
        class: "txt-link-title"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</td><td class="border-tabel-unset" nowrap width="40px" valign="middle" data-v-3ffda86b><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714374271/waktoo-commerce/icon-arrow-right.svg" class="img-arrow-right" data-v-3ffda86b></td><td class="border-tabel-unset" nowrap width="40px" valign="middle" data-v-3ffda86b>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/about",
        class: "txt-link-title"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Fashion Wanita`);
          } else {
            return [
              createTextVNode("Fashion Wanita")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</td><td class="border-tabel-unset" nowrap width="40px" valign="middle" data-v-3ffda86b><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714374271/waktoo-commerce/icon-arrow-right.svg" class="img-arrow-right" data-v-3ffda86b></td><td class="border-tabel-unset" nowrap width="40px" valign="middle" data-v-3ffda86b>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/contact",
        class: "txt-link-title"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="color-bold" data-v-3ffda86b${_scopeId}>Tas</span>`);
          } else {
            return [
              createVNode("span", { class: "color-bold" }, "Tas")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</td><td class="border-tabel-unset" nowrap align="right" valign="middle" data-v-3ffda86b><span class="card-shop" data-v-3ffda86b><img src="https://res.cloudinary.com/daraki09f/image/upload/v1715805814/waktoo-commerce/icon-shop-1.svg" class="shhps" data-v-3ffda86b><img src="https://res.cloudinary.com/daraki09f/image/upload/v1715805814/waktoo-commerce/icon-shop-2.svg" class="shhps" data-v-3ffda86b><img src="https://res.cloudinary.com/daraki09f/image/upload/v1715805814/waktoo-commerce/icon-shop-3.svg" class="shhps" data-v-3ffda86b><img src="https://res.cloudinary.com/daraki09f/image/upload/v1715805814/waktoo-commerce/icon-shop-4.svg" class="shhps" data-v-3ffda86b></span></td></table></div><div class="ptablet:grid-cols-2 grid gap-6 sm:grid-cols-3" data-v-3ffda86b><div data-v-3ffda86b><table width="100%" data-v-3ffda86b><tr data-v-3ffda86b><td colspan="4" class="border-tabel-unset" data-v-3ffda86b>`);
      if (unref(product)?.images) {
        _push(`<img${ssrRenderAttr("src", unref(product)?.images[0])} alt="image description" class="img-bag-fahsion" data-v-3ffda86b>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</td></tr>`);
      if (unref(product)?.images) {
        _push(`<tr data-v-3ffda86b><!--[-->`);
        ssrRenderList(unref(product)?.images, (img) => {
          _push(`<td width="25%" class="border-tabel-unset" align="center" data-v-3ffda86b><div class="card-img-small" data-v-3ffda86b><img${ssrRenderAttr("src", img)} class="img-small-fahsion" data-v-3ffda86b></div></td>`);
        });
        _push(`<!--]--></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</table></div><div data-v-3ffda86b><span class="txt-title-2" data-v-3ffda86b>${ssrInterpolate(unref(product)?.name)}</span><br data-v-3ffda86b><span class="txt-price-big" data-v-3ffda86b>${ssrInterpolate(formatCurrency(unref(product)?.price))}</span><br data-v-3ffda86b><br data-v-3ffda86b>`);
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        class: "tabs-bullets",
        color: unref(activeTipe) === "tipe1" ? "primary" : "default",
        onClick: ($event) => activeTipe.value = "tipe1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tipe 1 `);
          } else {
            return [
              createTextVNode(" Tipe 1 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        class: "tabs-bullets",
        color: unref(activeTipe) === "tipe2" ? "primary" : "default",
        onClick: ($event) => activeTipe.value = "tipe2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tipe 2 `);
          } else {
            return [
              createTextVNode(" Tipe 2 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        class: "tabs-bullets",
        color: unref(activeTipe) === "tipe3" ? "primary" : "default",
        onClick: ($event) => activeTipe.value = "tipe3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tipe 3 `);
          } else {
            return [
              createTextVNode(" Tipe 3 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        class: "tabs-bullets",
        color: unref(activeTipe) === "tipe4" ? "primary" : "default",
        onClick: ($event) => activeTipe.value = "tipe4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tipe 4 `);
          } else {
            return [
              createTextVNode(" Tipe 4 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br data-v-3ffda86b><br data-v-3ffda86b><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "tab-1" ? "border-primary-400 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs"
      ])}" data-v-3ffda86b><span data-v-3ffda86b>Deskripsi</span></button><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "tab-2" ? "border-primary-400 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs"
      ])}" data-v-3ffda86b><span data-v-3ffda86b>Informasi Lainnya</span></button>`);
      if (unref(activeTab) === "tab-1") {
        _push(`<div class="txt-content-1" data-v-3ffda86b>${ssrInterpolate(unref(product)?.description)}</div>`);
      } else if (unref(activeTab) === "tab-2") {
        _push(`<div class="txt-content-1" data-v-3ffda86b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="card-three" data-v-3ffda86b><div class="txts-1" data-v-3ffda86b>Atur Jumlah Pembelian</div><div class="input-group" data-v-3ffda86b><input type="button" value="-" class="button-minus border-radius-1" data-field="quantity" data-v-3ffda86b><input type="number" step="1" max="" value="1" name="quantity" class="quantity-field" data-v-3ffda86b><input type="button" value="+" class="button-plus border-radius-2" data-field="quantity" data-v-3ffda86b><span class="txts-2" data-v-3ffda86b>Stok Total : ${ssrInterpolate(unref(product)?.stock)}</span></div><div class="txts-3" data-v-3ffda86b>Sub Total</div><div class="txts-4" data-v-3ffda86b>${ssrInterpolate(formatCurrency(unref(product)?.price))}</div><div class="mgsh" data-v-3ffda86b>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        class: "!h-11 w-full blue-full",
        shape: "straight",
        flavor: "outline",
        to: "/keranjang"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-3ffda86b${_scopeId}>Masukkan Keranjang</span>`);
          } else {
            return [
              createVNode("span", null, "Masukkan Keranjang")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div data-v-3ffda86b>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        class: "!h-11 w-full blue-full2",
        shape: "straight",
        flavor: "outline",
        to: "/checkout"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-3ffda86b${_scopeId}>Beli Langsung</span>`);
          } else {
            return [
              createVNode("span", null, "Beli Langsung")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="txt-wishlist" data-v-3ffda86b>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-regular:heart",
        class: "text-muted-400 dark:text-muted-500 block size-8"
      }, null, _parent));
      _push(` Wishlist </div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DetailProduk.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DetailProduk = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3ffda86b"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "produk",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(DetailProduk, null, null, _parent));
      _push(ssrRenderComponent(_component_LandingFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/toko/[id]/produk/produk.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
