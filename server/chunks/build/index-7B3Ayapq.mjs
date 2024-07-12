import { u as useJwtAuth } from './composables-DmWjNlaH.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, withCtx, openBlock, createBlock, toDisplayString, unref, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as __nuxt_component_4 } from './Loading-DgGIgVLA.mjs';
import { d as _export_sfc, o as useNuxtApp, a as _sfc_main$7, g as _sfc_main$3 } from './server.mjs';
import { _ as _imports_0 } from './virtual_public-C7rh60UP.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "OrderList",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    useJwtAuth();
    const orders = ref([]);
    const loading = ref(false);
    ref(null);
    const totalWeight = computed(() => {
      return orders.value.reduce((acc, order) => {
        return acc + order.order_items.reduce((innerAcc, item) => innerAcc + parseFloat(item.total_weight), 0);
      }, 0).toFixed(2);
    });
    const totalQuantity = computed(() => {
      return orders.value.reduce((acc, order) => {
        return acc + order.order_items.reduce((innerAcc, item) => innerAcc + item.quantity, 0);
      }, 0);
    });
    const formatCurrency = (price) => {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      });
      return formatter.format(price);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loading = __nuxt_component_4;
      const _component_BaseHeading = _sfc_main$7;
      const _component_BaseButton = _sfc_main$3;
      if (loading.value) {
        _push(ssrRenderComponent(_component_Loading, mergeProps({ type: "spinner" }, _attrs), null, _parent));
      } else {
        _push(`<!--[-->`);
        ssrRenderList(orders.value, (order, index2) => {
          var _a, _b;
          _push(`<!--[--><div class="w-full bg-white" data-v-3f5daf9b><div class="flex border-x border-t border-gray-300" data-v-3f5daf9b><div class="w-9/12 flex p-2" data-v-3f5daf9b><div class="flex px-4 py-3" data-v-3f5daf9b><img${ssrRenderAttr("src", _imports_0)} class="img-toko" data-v-3f5daf9b><span class="txt-header" data-v-3f5daf9b>${ssrInterpolate(order == null ? void 0 : order.shop_name)}</span></div><div class="flex px-4 py-3" data-v-3f5daf9b><span class="txt-head" data-v-3f5daf9b>Id Pesanan </span><span class="txt-header" data-v-3f5daf9b>${ssrInterpolate(order == null ? void 0 : order.order_number)}</span></div><div class="flex px-4 py-3" data-v-3f5daf9b><img src="https://res.cloudinary.com/daraki09f/image/upload/v1720513037/waktoo-commerce/Vector_2.svg" class="img-logo" data-v-3f5daf9b><span class="txt-header" data-v-3f5daf9b>${ssrInterpolate(order == null ? void 0 : order.receiver_name)}</span></div><div class="flex px-4 py-3" data-v-3f5daf9b><img src="https://res.cloudinary.com/daraki09f/image/upload/v1720512410/waktoo-commerce/date_range.svg" class="img-logo" data-v-3f5daf9b><span class="txt-header" data-v-3f5daf9b>${ssrInterpolate(order == null ? void 0 : order.order_date)}</span></div></div><div class="w-4/12 flex justify-end p-2" data-v-3f5daf9b><div class="px-4 py-3" data-v-3f5daf9b><span class="txt-head" data-v-3f5daf9b>Status Pembayaran</span></div><div class="my-2" data-v-3f5daf9b>`);
          if ((order == null ? void 0 : order.payment_status) == "Dibayar") {
            _push(`<span class="text-xs font-sans text-lime-500 border-lime-500 font-medium border rounded-full p-2" data-v-3f5daf9b>${ssrInterpolate(order == null ? void 0 : order.payment_status)}</span>`);
          } else {
            _push(`<span class="text-xs font-sans font-medium border rounded-full border-slate-400 p-2" data-v-3f5daf9b>${ssrInterpolate(order == null ? void 0 : order.payment_status)}</span>`);
          }
          _push(`</div></div></div><div class="flex border-x border-y border-gray-300" data-v-3f5daf9b><div class="w-7/12 flex p-3" data-v-3f5daf9b><div class="ltablet:flex-row relative flex w-full flex-col gap-6 lg:flex-row" data-v-3f5daf9b>`);
          if ((_a = order == null ? void 0 : order.order_items) == null ? void 0 : _a[0]) {
            _push(`<img${ssrRenderAttr("src", (_b = order == null ? void 0 : order.order_items) == null ? void 0 : _b[0].product_data_images)} class="img-pesanan" alt="img" data-v-3f5daf9b>`);
          } else {
            _push(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1718211383/waktoo-commerce/baju-2.png" class="img-pesanan" alt="img" data-v-3f5daf9b>`);
          }
          _push(`<div class="ltablet:text-left lg:text-left" data-v-3f5daf9b>`);
          _push(ssrRenderComponent(_component_BaseHeading, {
            as: "h2",
            size: "xl",
            weight: "semibold",
            class: "ltablet:justify-start flex items-center justify-center gap-2 lg:justify-start"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a2, _b2, _c, _d;
              if (_push2) {
                if ((_a2 = order == null ? void 0 : order.order_items) == null ? void 0 : _a2[0]) {
                  _push2(`<span class="txt-name" data-v-3f5daf9b${_scopeId}>${ssrInterpolate((_b2 = order == null ? void 0 : order.order_items) == null ? void 0 : _b2[0].product_data_name)}</span>`);
                } else {
                  _push2(`<span class="txt-name" data-v-3f5daf9b${_scopeId}>-</span>`);
                }
              } else {
                return [
                  ((_c = order == null ? void 0 : order.order_items) == null ? void 0 : _c[0]) ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "txt-name"
                  }, toDisplayString((_d = order == null ? void 0 : order.order_items) == null ? void 0 : _d[0].product_data_name), 1)) : (openBlock(), createBlock("span", {
                    key: 1,
                    class: "txt-name"
                  }, "-"))
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<h1 class="txt-price" data-v-3f5daf9b>${ssrInterpolate(formatCurrency(order == null ? void 0 : order.total_product_price))}</h1></div></div></div><div class="w-5/12 p-3 border-l border-gray-300" data-v-3f5daf9b><span class="txt-alamat" data-v-3f5daf9b>Alamat</span><br data-v-3f5daf9b><span class="txt-head" data-v-3f5daf9b>${ssrInterpolate(order == null ? void 0 : order.destination_address)}</span><br data-v-3f5daf9b><span class="txt-alamat" data-v-3f5daf9b>Kurir</span><br data-v-3f5daf9b><span class="txt-head" data-v-3f5daf9b>${ssrInterpolate(order == null ? void 0 : order.courier)} - ${ssrInterpolate(order == null ? void 0 : order.service_name)} (${ssrInterpolate(unref(totalWeight))} kg)</span><br data-v-3f5daf9b><span class="txt-alamat" data-v-3f5daf9b>${ssrInterpolate(formatCurrency(order == null ? void 0 : order.shipping_cost))}</span></div></div></div><div class="w-full flex hasil" data-v-3f5daf9b><div class="flex w-9/12 px-4 py-3" data-v-3f5daf9b><span class="txt-header" data-v-3f5daf9b>Total Harga</span><span class="txt-price" data-v-3f5daf9b> (${ssrInterpolate(unref(totalQuantity))} Barang)</span></div><div class="flex justify-end w-3/12 px-4 py-3" data-v-3f5daf9b><span class="txt-pay" data-v-3f5daf9b>${ssrInterpolate(formatCurrency(order == null ? void 0 : order.total_payment))}</span></div></div><div class="w-full flex bg-white" data-v-3f5daf9b><div class="flex w-8/12 px-4 py-3" data-v-3f5daf9b>`);
          _push(ssrRenderComponent(_component_BaseButton, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1720605130/waktoo-commerce/Vector_3.svg" class="img-logo" data-v-3f5daf9b${_scopeId}> \xA0 Chat Pembeli `);
              } else {
                return [
                  createVNode("img", {
                    src: "https://res.cloudinary.com/daraki09f/image/upload/v1720605130/waktoo-commerce/Vector_3.svg",
                    class: "img-logo"
                  }),
                  createTextVNode(" \xA0 Chat Pembeli ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="flex justify-end w-4/12 px-4 py-3" data-v-3f5daf9b>`);
          _push(ssrRenderComponent(_component_BaseButton, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1720685371/waktoo-commerce/cancel.svg" class="img-logo" data-v-3f5daf9b${_scopeId}> Dibatalkan `);
              } else {
                return [
                  createVNode("img", {
                    src: "https://res.cloudinary.com/daraki09f/image/upload/v1720685371/waktoo-commerce/cancel.svg",
                    class: "img-logo"
                  }),
                  createTextVNode(" Dibatalkan ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(` \xA0 `);
          _push(ssrRenderComponent(_component_BaseButton, {
            type: "submit",
            color: "primary",
            variant: "solid"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Terima Pesanan `);
              } else {
                return [
                  createTextVNode(" Terima Pesanan ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div><br data-v-3f5daf9b><!--]-->`);
        });
        _push(`<!--]-->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pesanan/OrderList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const OrderList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3f5daf9b"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DaftarPesanan",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    useJwtAuth();
    ref("tipe1");
    const activeTab = ref("tab-1");
    ref(null);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-af0e832c><div class="ltablet:flex-column relative flex w-full flex-col gap-6 lg:flex-column" data-v-af0e832c></div><div class="ltablet:h-8 ltablet:flex-row relative flex h-[460px] w-full flex-col lg:h-8 lg:flex-row" data-v-af0e832c><div class="w-full absolute bottom-[-5px] bg-white start-0 flex items-end gap-2 mb-270 grid-slls" data-v-af0e832c><button type="button" class="${ssrRenderClass([
        activeTab.value === "tab-1" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
      ])}" data-v-af0e832c><span data-v-af0e832c>Pesanan Baru</span></button><button type="button" class="${ssrRenderClass([
        activeTab.value === "tab-2" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
      ])}" data-v-af0e832c><span data-v-af0e832c>Dibatalkan</span></button><button type="button" class="${ssrRenderClass([
        activeTab.value === "tab-3" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
      ])}" data-v-af0e832c><span data-v-af0e832c>Diproses</span></button><button type="button" class="${ssrRenderClass([
        activeTab.value === "tab-4" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
      ])}" data-v-af0e832c><span data-v-af0e832c>Dalam Pengiriman</span></button><button type="button" class="${ssrRenderClass([
        activeTab.value === "tab-5" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
      ])}" data-v-af0e832c><span data-v-af0e832c>Pesanan Selesai</span></button><button type="button" class="${ssrRenderClass([
        activeTab.value === "tab-6" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
      ])}" data-v-af0e832c><span data-v-af0e832c>Dikembalikan</span></button></div></div><div class="w-full" data-v-af0e832c>`);
      if (activeTab.value === "tab-1") {
        _push(`<div class="mt-12" data-v-af0e832c>`);
        _push(ssrRenderComponent(OrderList, null, null, _parent));
        _push(`</div>`);
      } else if (activeTab.value === "tab-2") {
        _push(`<div class="mt-12" data-v-af0e832c></div>`);
      } else if (activeTab.value === "tab-3") {
        _push(`<div class="mt-12" data-v-af0e832c></div>`);
      } else if (activeTab.value === "tab-4") {
        _push(`<div class="mt-12" data-v-af0e832c></div>`);
      } else if (activeTab.value === "tab-5") {
        _push(`<div class="mt-12" data-v-af0e832c></div>`);
      } else if (activeTab.value === "tab-6") {
        _push(`<div class="mt-12" data-v-af0e832c><table width="100%" style="${ssrRenderStyle({ "border": "0px solid #ddd" })}" data-v-af0e832c><td nowrap style="${ssrRenderStyle({ "border": "0px solid rgb(221, 221, 221)" })}" valign="top" data-v-af0e832c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714087508/waktoo-commerce/frame-1000001739.png" style="${ssrRenderStyle({ "margin-left": "-40px", "margin-top": "-43px", "width": "450px" })}" data-v-af0e832c></td><td style="${ssrRenderStyle({ "border": "0px solid rgb(221, 221, 221)" })}" valign="top" data-v-af0e832c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714113750/waktoo-commerce/Frame-1000001757.png" style="${ssrRenderStyle({ "margin-top": "-30px", "margin-left": "-20px" })}" data-v-af0e832c></td></table></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pesanan/DaftarPesanan.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-af0e832c"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DaftarPesanan = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1793920c>`);
      _push(ssrRenderComponent(_component_DaftarPesanan, { class: "pe-4 xl:pe-10" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pesanan/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1793920c"]]);

export { index as default };
