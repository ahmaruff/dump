import { _ as _sfc_main$2 } from './LandingFooter-843f9743.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, resolveComponent, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { z as useRoute, g as _export_sfc } from '../server.mjs';
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
  __name: "DetailToko",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    ref("tipe1");
    ref("tab-1");
    const shop = ref();
    const subdistrict = ref();
    const loading = ref(false);
    const error = ref(null);
    const route = useRoute();
    const shopId = route.params.id;
    console.log(shopId);
    try {
      loading.value = true;
      const response = ([__temp, __restore] = withAsyncContext(() => wretch(
        `https://api.dev.commerce.waktoo.com:443/api/shops/${shopId}`
      ).headers({
        // Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json"
      }).get().json()), __temp = await __temp, __restore(), __temp);
      if (response && response.status === "success") {
        shop.value = response.data.shop;
      } else {
        error.value = "Failed to fetch shop data";
        console.error("Failed to fetch shop data:", response);
      }
    } catch (error2) {
      console.error("Error:", error2);
    }
    const subdistrictId = shop.value.origin_id;
    try {
      loading.value = true;
      const response1 = ([__temp, __restore] = withAsyncContext(() => wretch(
        `https://api.dev.commerce.waktoo.com:443/api/shipping/subdistrict/${subdistrictId}`
      ).headers({
        // Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json"
      }).get().json()), __temp = await __temp, __restore(), __temp);
      if (response1 && response1.status === "success") {
        subdistrict.value = response1.data.subdistrict;
      } else {
        error.value = "Failed to fetch subdistrict data";
        console.error("Failed to fetch subdistrict data:", response1);
      }
    } catch (error2) {
      console.error("Error:", error2);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 bg-white py-24" }, _attrs))} data-v-5172a0fc><div class="mx-auto w-full max-w-7xl px-4" data-v-5172a0fc><div class="ptablet:grid-cols-2 grid gap-6 sm:grid-cols-3" data-v-5172a0fc><div data-v-5172a0fc><span class="txt-title-2" data-v-5172a0fc>${ssrInterpolate(unref(shop)?.name)}</span><br data-v-5172a0fc><span class="txt-title-2" data-v-5172a0fc>${ssrInterpolate(unref(shop)?.description)}</span><br data-v-5172a0fc><br data-v-5172a0fc><br data-v-5172a0fc><div class="txt-content-1" data-v-5172a0fc>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: `/toko/layanan/${unref(shop)?.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="txt-title-2" data-v-5172a0fc${_scopeId}>Pilih Layanan</span><br data-v-5172a0fc${_scopeId}>`);
          } else {
            return [
              createVNode("span", { class: "txt-title-2" }, "Pilih Layanan"),
              createVNode("br")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><br data-v-5172a0fc><br data-v-5172a0fc><div class="txt-content-1" data-v-5172a0fc>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: `/toko/bank/${unref(shop)?.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="txt-title-2" data-v-5172a0fc${_scopeId}>Tambah Rekening Bank</span><br data-v-5172a0fc${_scopeId}>`);
          } else {
            return [
              createVNode("span", { class: "txt-title-2" }, "Tambah Rekening Bank"),
              createVNode("br")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><br data-v-5172a0fc><br data-v-5172a0fc><div class="txt-content-1" data-v-5172a0fc>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: `/toko/edit/${unref(shop)?.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="txt-title-2" data-v-5172a0fc${_scopeId}>Edit</span><br data-v-5172a0fc${_scopeId}>`);
          } else {
            return [
              createVNode("span", { class: "txt-title-2" }, "Edit"),
              createVNode("br")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="txt-title-2" data-v-5172a0fc>Detail Toko</span><br data-v-5172a0fc><span class="txt-title-4" data-v-5172a0fc>Deskripsi</span><br data-v-5172a0fc> ${ssrInterpolate(unref(shop)?.description)} <br data-v-5172a0fc><br data-v-5172a0fc><span class="txt-title-4" data-v-5172a0fc>Phone</span><br data-v-5172a0fc> ${ssrInterpolate(unref(shop)?.phone)} <br data-v-5172a0fc><br data-v-5172a0fc><span class="txt-title-4" data-v-5172a0fc>Provinsi</span><br data-v-5172a0fc> ${ssrInterpolate(unref(subdistrict)?.provice_name)} <br data-v-5172a0fc><br data-v-5172a0fc><span class="txt-title-4" data-v-5172a0fc>Kota / Kabupaten</span><br data-v-5172a0fc> ${ssrInterpolate(unref(subdistrict)?.city_name)} <br data-v-5172a0fc><br data-v-5172a0fc><span class="txt-title-4" data-v-5172a0fc>Kecamatan</span><br data-v-5172a0fc> ${ssrInterpolate(unref(subdistrict)?.subdistrict_name)} <br data-v-5172a0fc><br data-v-5172a0fc><span class="txt-title-2" data-v-5172a0fc>Jasa Pengiriman</span><br data-v-5172a0fc><!--[-->`);
      ssrRenderList(unref(shop)?.available_courier, (img) => {
        _push(`<span class="txt-title-4" data-v-5172a0fc>${ssrInterpolate(img)} <br data-v-5172a0fc></span>`);
      });
      _push(`<!--]--><br data-v-5172a0fc><br data-v-5172a0fc></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DetailToko.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DetailToko = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5172a0fc"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(DetailToko, null, null, _parent));
      _push(ssrRenderComponent(_component_LandingFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/toko/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
