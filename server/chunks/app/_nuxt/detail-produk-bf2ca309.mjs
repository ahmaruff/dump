import { _ as _sfc_main$3 } from './BaseButtonAction-9b998a35.mjs';
import { f as _sfc_main$a, a as __nuxt_component_2$1, g as _export_sfc } from '../server.mjs';
import { useSSRContext, defineComponent, ref, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './LandingFooter-843f9743.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LandingHero",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTipe = ref("tipe1");
    const activeTab = ref("tab-1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_BaseButtonAction = _sfc_main$3;
      const _component_BaseButton = _sfc_main$a;
      const _component_Icon = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 bg-white py-24" }, _attrs))} data-v-a763b5b5><div class="mx-auto w-full max-w-7xl px-4" data-v-a763b5b5><div class="mb-10 max-w-1xl" data-v-a763b5b5><table width="100%" data-v-a763b5b5><td class="border-tabel-unset" nowrap width="40px" valign="middle" data-v-a763b5b5>`);
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
      _push(`</td><td class="border-tabel-unset" nowrap width="40px" valign="middle" data-v-a763b5b5><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714374271/waktoo-commerce/icon-arrow-right.svg" class="img-arrow-right" data-v-a763b5b5></td><td class="border-tabel-unset" nowrap width="40px" valign="middle" data-v-a763b5b5>`);
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
      _push(`</td><td class="border-tabel-unset" nowrap width="40px" valign="middle" data-v-a763b5b5><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714374271/waktoo-commerce/icon-arrow-right.svg" class="img-arrow-right" data-v-a763b5b5></td><td class="border-tabel-unset" nowrap width="40px" valign="middle" data-v-a763b5b5>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/contact",
        class: "txt-link-title"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="color-bold" data-v-a763b5b5${_scopeId}>Tas</span>`);
          } else {
            return [
              createVNode("span", { class: "color-bold" }, "Tas")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</td><td class="border-tabel-unset" nowrap align="right" valign="middle" data-v-a763b5b5><span class="card-shop" data-v-a763b5b5><img src="https://res.cloudinary.com/daraki09f/image/upload/v1715805814/waktoo-commerce/icon-shop-1.svg" class="shhps" data-v-a763b5b5><img src="https://res.cloudinary.com/daraki09f/image/upload/v1715805814/waktoo-commerce/icon-shop-2.svg" class="shhps" data-v-a763b5b5><img src="https://res.cloudinary.com/daraki09f/image/upload/v1715805814/waktoo-commerce/icon-shop-3.svg" class="shhps" data-v-a763b5b5><img src="https://res.cloudinary.com/daraki09f/image/upload/v1715805814/waktoo-commerce/icon-shop-4.svg" class="shhps" data-v-a763b5b5></span></td></table></div><div class="ptablet:grid-cols-2 grid gap-6 sm:grid-cols-3" data-v-a763b5b5><div data-v-a763b5b5><table width="100%" data-v-a763b5b5><tr data-v-a763b5b5><td colspan="4" class="border-tabel-unset" data-v-a763b5b5><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714375441/waktoo-commerce/tas-bag.png" class="img-bag-fahsion" data-v-a763b5b5></td></tr><tr data-v-a763b5b5><td width="25%" class="border-tabel-unset" align="center" data-v-a763b5b5><div class="card-img-small" data-v-a763b5b5><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714375437/waktoo-commerce/tas-small-1.png" class="img-small-fahsion" data-v-a763b5b5></div></td><td width="25%" class="border-tabel-unset" align="center" data-v-a763b5b5><div class="card-img-small" data-v-a763b5b5><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714375437/waktoo-commerce/tas-small-2.png" class="img-small-fahsion" data-v-a763b5b5></div></td><td width="25%" class="border-tabel-unset" align="center" data-v-a763b5b5><div class="card-img-small" data-v-a763b5b5><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714375437/waktoo-commerce/tas-small-3.png" class="img-small-fahsion" data-v-a763b5b5></div></td><td width="25%" class="border-tabel-unset" align="center" data-v-a763b5b5><div class="card-img-small" data-v-a763b5b5><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714375437/waktoo-commerce/tas-small-4.png" class="img-small-fahsion" data-v-a763b5b5></div></td></tr></table></div><div data-v-a763b5b5><span class="txt-title-2" data-v-a763b5b5>Women&#39;s Monogram Top Handle Bag / Sling Bag / Crossbody Bag (Tas Tangan / Tas Selempang) - Elegant</span><br data-v-a763b5b5><span class="txt-price-big" data-v-a763b5b5>Rp. 2.000.000</span><br data-v-a763b5b5><br data-v-a763b5b5>`);
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
      _push(`<br data-v-a763b5b5><br data-v-a763b5b5><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "tab-1" ? "border-primary-400 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs"
      ])}" data-v-a763b5b5><span data-v-a763b5b5>Deskripsi</span></button><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "tab-2" ? "border-primary-400 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs"
      ])}" data-v-a763b5b5><span data-v-a763b5b5>Informasi Lainnya</span></button>`);
      if (unref(activeTab) === "tab-1") {
        _push(`<div class="txt-content-1" data-v-a763b5b5> Kenalkan, Women&#39;s Monogram Top Handle Bag kami, sebuah aksesori yang serbaguna yang menyatukan keanggunan dan fungsionalitas. Tas yang sangat cantik ini dirancang untuk memenuhi gaya hidup dinamis wanita modern, menawarkan tiga pilihan membawa yang stylish: tas tangan yang elegan, tas selempang yang trendi, dan tas crossbody yang nyaman.<br data-v-a763b5b5><br data-v-a763b5b5> Tas ini adalah representasi dari selera yang halus, menampilkan pola monogram yang anggun untuk memberikan sentuhan keanggunan pada setiap gaya. Perhatian detail yang cermat terlihat dalam setiap jahitan, menunjukkan keahlian tinggi yang digunakan dalam pembuatan aksesori ini.<br data-v-a763b5b5><br data-v-a763b5b5> Pemegang atas memungkinkan Anda membawa tas ini dengan anggun dan sopan, menjadikannya teman ideal untuk acara formal atau pengaturan profesional. Pindah dengan mudah dengan memasang tali yang dapat disesuaikan untuk digunakan sebagai tas selempang yang modis, cocok untuk kegiatan santai dan kenyamanan tanpa tangan.<br data-v-a763b5b5><br data-v-a763b5b5> Untuk momen di mana Anda sedang terburu-buru, ubah menjadi tas crossbody untuk menikmati kebebasan bergerak sambil tetap membawa barang-barang penting Anda. Kompartemen yang dirancang dengan baik memberikan ruang yang cukup untuk kebutuhan sehari-hari Anda, memastikan Anda tetap terorganisir tanpa mengorbankan gaya.<br data-v-a763b5b5><br data-v-a763b5b5><span class="txt-cllr-1" data-v-a763b5b5>Baca lebih sedikit...</span></div>`);
      } else if (unref(activeTab) === "tab-2") {
        _push(`<div class="txt-content-1" data-v-a763b5b5> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="card-three" data-v-a763b5b5><div class="txts-1" data-v-a763b5b5>Atur Jumlah Pembelian</div><div class="input-group" data-v-a763b5b5><input type="button" value="-" class="button-minus border-radius-1" data-field="quantity" data-v-a763b5b5><input type="number" step="1" max="" value="1" name="quantity" class="quantity-field" data-v-a763b5b5><input type="button" value="+" class="button-plus border-radius-2" data-field="quantity" data-v-a763b5b5><span class="txts-2" data-v-a763b5b5>Stok Total : 5.553</span></div><div class="txts-3" data-v-a763b5b5>Sub Total</div><div class="txts-4" data-v-a763b5b5>Rp4.000.000</div><div class="mgsh" data-v-a763b5b5>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        class: "!h-11 w-full blue-full",
        shape: "straight",
        flavor: "outline",
        to: "/keranjang"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-a763b5b5${_scopeId}>Masukkan Keranjang</span>`);
          } else {
            return [
              createVNode("span", null, "Masukkan Keranjang")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div data-v-a763b5b5>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        class: "!h-11 w-full blue-full2",
        shape: "straight",
        flavor: "outline",
        to: "/checkout"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-a763b5b5${_scopeId}>Beli Langsung</span>`);
          } else {
            return [
              createVNode("span", null, "Beli Langsung")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="txt-wishlist" data-v-a763b5b5>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/landing/components/LandingHero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a763b5b5"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "detail-produk",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingHero = __nuxt_component_0;
      const _component_LandingFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LandingHero, null, null, _parent));
      _push(ssrRenderComponent(_component_LandingFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/detail-produk.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
