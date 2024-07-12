import { d as _export_sfc, a as _sfc_main$7, b as __nuxt_component_1, c as _sfc_main$d, _ as __nuxt_component_0$2 } from './server.mjs';
import { _ as __nuxt_component_11, a as _sfc_main$1 } from './BaseDropdownItem-eyL-Ji7e.mjs';
import { _ as _sfc_main$2 } from './BaseSwitchThin-Cj-cBPdI.mjs';
import { _ as _sfc_main$3 } from './BaseButtonAction-CeDg9f4a.mjs';
import { useSSRContext, defineComponent, ref, reactive, resolveComponent, withCtx, createVNode, toDisplayString, unref, createTextVNode, mergeProps } from 'vue';
import { u as useTailwindColors } from './tailwind-DxNoTA1-.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
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
import '@headlessui/vue';
import './input-id-Bz_TYZXb.mjs';
import './index-CwDpmA7v.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "detail-produk",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTipe = ref("tipe1");
    const areaCustomers = reactive(useAreaCustomers());
    function useAreaCustomers() {
      const { primary, info, success } = useTailwindColors();
      const type = "area";
      const height = 258;
      const options = {
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: [primary.value, info.value, success.value],
        title: {
          show: false,
          text: void 0,
          align: "left"
        },
        legend: {
          show: true,
          position: "top"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2, 2, 2],
          curve: "smooth"
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2020-09-19T00:00:00.000Z",
            "2020-09-20T01:30:00.000Z",
            "2020-09-21T02:30:00.000Z",
            "2020-09-22T03:30:00.000Z",
            "2020-09-23T04:30:00.000Z",
            "2020-09-24T05:30:00.000Z",
            "2020-09-25T06:30:00.000Z"
          ]
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      };
      const series = ref([
        {
          name: "Returning",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "Newcomers",
          data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
          name: "Abandonned",
          data: [78, 53, 36, 10, 14, 5, 2]
        }
      ]);
      return {
        type,
        height,
        options,
        series
      };
    }
    const activeTab = ref("tab-1");
    const values = reactive({
      primary: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
      const _component_BaseHeading = _sfc_main$7;
      const _component_BaseDropdown = __nuxt_component_11;
      const _component_BaseDropdownItem = _sfc_main$1;
      const _component_nuxt_link = __nuxt_component_1;
      const _component_BaseSwitchThin = _sfc_main$2;
      const _component_BaseButtonAction = _sfc_main$3;
      const _component_BaseCard = _sfc_main$d;
      const _component_Icon = __nuxt_component_0$2;
      const _component_AddonApexcharts = resolveComponent("AddonApexcharts");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d983b873><div class="ltablet:h-[410px] dark:bg-muted-800 absolute start-0 top-0 h-[590px] w-full bg-white lg:h-[410px]" data-v-d983b873></div><div class="ltablet:h-64 ltablet:flex-row relative flex h-[460px] w-full flex-col lg:h-64 lg:flex-row" data-v-d983b873><div class="ltablet:flex-row relative flex w-full flex-col gap-6 lg:flex-row" data-v-d983b873>`);
      if ((_a = _ctx.product) == null ? void 0 : _a.images) {
        _push(`<img${ssrRenderAttr("src", (_b = _ctx.product) == null ? void 0 : _b.images[0])} class="img-detail-produk" data-v-d983b873>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="ltablet:text-left lg:text-left" data-v-d983b873>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "xl",
        weight: "semibold",
        class: "ltablet:justify-start flex items-center justify-center gap-2 lg:justify-start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<span class="text-muted-800 dark:text-white" data-v-d983b873${_scopeId}>${ssrInterpolate((_a2 = _ctx.product) == null ? void 0 : _a2.name)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-800 dark:text-white" }, toDisplayString((_b2 = _ctx.product) == null ? void 0 : _b2.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mb-6 flex items-center gap-x-6" data-v-d983b873><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row" data-v-d983b873><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base" data-v-d983b873> Pengunjung: </span><span class="text-muted-800 dark:text-muted-100 font-semibold" data-v-d983b873> 1512 </span></div><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row" data-v-d983b873><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base" data-v-d983b873> Terjual: </span><span class="text-muted-800 dark:text-muted-100 font-semibold" data-v-d983b873> 92 </span></div><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row" data-v-d983b873><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base" data-v-d983b873> Stok: </span><span class="text-muted-800 dark:text-muted-100 font-semibold" data-v-d983b873>${ssrInterpolate((_c = _ctx.product) == null ? void 0 : _c.stock)}</span></div><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row" data-v-d983b873><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base" data-v-d983b873> Nilai: </span><span class="text-muted-800 dark:text-muted-100 font-semibold" data-v-d983b873><span class="start-text" data-v-d983b873>4.7</span><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png" data-v-d983b873></span></div></div><h1 class="txt-price" data-v-d983b873>${ssrInterpolate(_ctx.formatCurrency((_d = _ctx.product) == null ? void 0 : _d.price))}</h1><span class="txt-sm-alert3" data-v-d983b873>Diskon</span> \xA0 <span class="txt-price-2 text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base" data-v-d983b873>Rp40.000 - Rp130.000</span></div></div><div class="ltablet:justify-start ltablet:ms-auto ltablet:mt-0 mt-4 flex shrink-0 justify-center lg:ms-auto lg:mt-0 lg:justify-start" data-v-d983b873>`);
      _push(ssrRenderComponent(_component_BaseDropdown, {
        flavor: "context",
        label: "Dropdown",
        orientation: "end",
        shape: "smooth"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseDropdownItem, {
              to: "#",
              title: "User",
              text: "View details",
              shape: "smooth"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseDropdownItem, {
              to: `/produk/edit/${(_a2 = _ctx.product) == null ? void 0 : _a2.id}`,
              title: "Edit",
              text: "Edit details",
              shape: "smooth"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseDropdownItem, {
                to: "#",
                title: "User",
                text: "View details",
                shape: "smooth"
              }),
              createVNode(_component_BaseDropdownItem, {
                to: `/produk/edit/${(_b2 = _ctx.product) == null ? void 0 : _b2.id}`,
                title: "Edit",
                text: "Edit details",
                shape: "smooth"
              }, null, 8, ["to"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full absolute bottom-[-48px] start-0 flex items-end gap-2 mb-270 grid-slls" data-v-d983b873><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "tab-1" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
      ])}" data-v-d983b873><span data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718182044/waktoo-commerce/icon-desc-1.svg" class="img-desc" data-v-d983b873> Informasi Produk</span></button><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "tab-2" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
      ])}" data-v-d983b873><span data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718182044/waktoo-commerce/icon-desc-2.svg" class="img-desc" data-v-d983b873> Atribut Produk</span></button><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "tab-3" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
      ])}" data-v-d983b873><span data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718182044/waktoo-commerce/icon-desc-3.svg" class="img-desc" data-v-d983b873> Pengiriman</span></button><div class="shrink-0 right-float relative-mobile" data-v-d983b873><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "tab-4" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
      ])}" data-v-d983b873><span data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718182044/waktoo-commerce/icon-desc-4.svg" class="img-desc" data-v-d983b873> Performa</span></button><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "tab-5" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
      ])}" data-v-d983b873><span data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718182044/waktoo-commerce/icon-desc-5.svg" class="img-desc" data-v-d983b873> Nilai &amp; Ulasan</span></button></div></div></div><div class="w-full mt-650" data-v-d983b873>`);
      if (unref(activeTab) === "tab-1") {
        _push(`<div class="mts2" data-v-d983b873><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-d983b873><div class="card-detail-commerce p-4" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-1.svg" class="img-icon-commrs" data-v-d983b873><span class="txt-cmrs-1" data-v-d983b873>Kondisi</span><br data-v-d983b873>`);
        if (((_e = _ctx.product) == null ? void 0 : _e.condition) == 0) {
          _push(`<span class="txt-cmrs-2" data-v-d983b873>Bekas</span>`);
        } else {
          _push(`<span class="txt-cmrs-2" data-v-d983b873>Baru</span>`);
        }
        _push(`</div><div class="card-detail-commerce p-4" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-2.svg" class="img-icon-commrs" data-v-d983b873><span class="txt-cmrs-1" data-v-d983b873>Kategori</span><br data-v-d983b873><span class="txt-cmrs-2" data-v-d983b873>${ssrInterpolate((_f = _ctx.product) == null ? void 0 : _f.category_name)}</span></div><div class="card-detail-commerce p-4" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-3.svg" class="img-icon-commrs" data-v-d983b873><span class="txt-cmrs-1" data-v-d983b873>Etalase</span><br data-v-d983b873><span class="txt-cmrs-2 clr-one" data-v-d983b873>Tidak Ada</span></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-d983b873><div class="card-detail-commerce p-4" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718209899/waktoo-commerce/icon-vector.svg" class="img-icon-vector" data-v-d983b873><span class="txt-cmrs-1" data-v-d983b873>Video</span><br data-v-d983b873>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: (_g = _ctx.product) == null ? void 0 : _g.video_url
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<iframe src="https://www.youtube.com/embed/upNOsrFhKcU" class="img-product" allowfullscreen title="" data-v-d983b873${_scopeId}></iframe>`);
            } else {
              return [
                createVNode("iframe", {
                  src: "https://www.youtube.com/embed/upNOsrFhKcU",
                  class: "img-product",
                  allowfullscreen: "",
                  title: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="card-detail-commerce p-4 md:col-span-2" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718209899/waktoo-commerce/icon-vector.svg" class="img-icon-vector" data-v-d983b873><span class="txt-cmrs-1" data-v-d983b873>Foto</span><br data-v-d983b873>`);
        if ((_h = _ctx.product) == null ? void 0 : _h.images) {
          _push(`<div class="grid grid-cols-2 md:grid-cols-7 gap-4" data-v-d983b873><div class="text-center md:row-span-2 md:col-span-2" data-v-d983b873><img${ssrRenderAttr("src", (_i = _ctx.product) == null ? void 0 : _i.images[0])} class="img-product img-product-width" data-v-d983b873></div><div class="text-center" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718211383/waktoo-commerce/baju-1.png" class="img-product-2" data-v-d983b873></div><div class="text-center" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718211383/waktoo-commerce/baju-2.png" class="img-product-2" data-v-d983b873></div><div class="text-center" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718211383/waktoo-commerce/baju-3.png" class="img-product-2" data-v-d983b873></div><div class="text-center" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718211383/waktoo-commerce/baju-4.png" class="img-product-2" data-v-d983b873></div><div class="text-center" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718211383/waktoo-commerce/baju-6.png" class="img-product-2" data-v-d983b873></div><div class="text-center" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718211383/waktoo-commerce/baju-7.png" class="img-product-2" data-v-d983b873></div><div class="text-center" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718211383/waktoo-commerce/baju-4.png" class="img-product-2" data-v-d983b873></div><div class="text-center" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718211383/waktoo-commerce/baju-3.png" class="img-product-2" data-v-d983b873></div><div class="text-center" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718211383/waktoo-commerce/baju-2.png" class="img-product-2" data-v-d983b873></div><div class="text-center" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718211383/waktoo-commerce/baju-1.png" class="img-product-2" data-v-d983b873></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-1 gap-4" data-v-d983b873><div class="card-detail-commerce p-4" data-v-d983b873><span class="txt-cmrs-1" data-v-d983b873>Deskripsi</span><br data-v-d983b873><div class="div-desc" data-v-d983b873>${ssrInterpolate((_j = _ctx.product) == null ? void 0 : _j.description)}</div></div></div></div>`);
      } else if (unref(activeTab) === "tab-2") {
        _push(`<div class="mts2" data-v-d983b873><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-d983b873><div class="card-detail-commerce p-4" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-9.svg" class="img-icon-commrs" data-v-d983b873><span class="txt-cmrs-1" data-v-d983b873>Status</span><br data-v-d983b873><span class="txt-cmrs-2 clr-three" data-v-d983b873>${ssrInterpolate((_k = _ctx.product) == null ? void 0 : _k.is_active)}</span></div><div class="card-detail-commerce p-4" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-5.svg" class="img-icon-commrs" data-v-d983b873><span class="txt-cmrs-1" data-v-d983b873>Harga Grosir</span><br data-v-d983b873><span class="txt-cmrs-2" data-v-d983b873>Rp30.000</span></div><div class="card-detail-commerce p-4" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-10.svg" class="img-icon-commrs" data-v-d983b873><span class="txt-cmrs-1" data-v-d983b873>SKU</span><br data-v-d983b873><span class="txt-cmrs-2" data-v-d983b873>KP149P110</span></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-d983b873><div class="card-detail-commerce p-4" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-4.svg" class="img-icon-commrs" data-v-d983b873><span class="txt-cmrs-1" data-v-d983b873>Minimum Pesanan</span><br data-v-d983b873><span class="txt-cmrs-2" data-v-d983b873>${ssrInterpolate((_l = _ctx.product) == null ? void 0 : _l.min_order)}</span></div><div class="card-detail-commerce p-4" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-5.svg" class="img-icon-commrs" data-v-d983b873><span class="txt-cmrs-1" data-v-d983b873>Harga Grosir</span><br data-v-d983b873><span class="txt-cmrs-2 clr-one" data-v-d983b873>Nonaktif</span></div></div><div class="table-mbrs" data-v-d983b873><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-d983b873><div class="p-4" data-v-d983b873><span class="txt-cmrs-1" data-v-d983b873>Tabel Varian</span></div><div class="p-4 right-value" data-v-d983b873>`);
        _push(ssrRenderComponent(_component_BaseSwitchThin, {
          modelValue: unref(values).primary,
          "onUpdate:modelValue": ($event) => unref(values).primary = $event,
          label: "Lihat Semua",
          color: "warning"
        }, null, _parent));
        _push(`</div></div><table width="100%" class="table-produk" data-v-d983b873><tr data-v-d983b873><td class="tdps" data-v-d983b873>GAMBAR</td><td class="tdps" data-v-d983b873>NAME</td><td class="tdps" data-v-d983b873>NILAI</td><td class="tdps" data-v-d983b873>HARGA</td><td class="tdps" data-v-d983b873>STOK</td><td class="tdps" align="center" data-v-d983b873>STATUS</td></tr><!--[-->`);
        ssrRenderList(_ctx.product.variants, (varian) => {
          _push(`<tr data-v-d983b873><td class="tdps" align="center" data-v-d983b873><img${ssrRenderAttr("src", varian == null ? void 0 : varian.images)} class="img-atribut-produk" data-v-d983b873></td><td class="txt-lskd" data-v-d983b873>${ssrInterpolate(varian.name)}</td><td class="tdps txt-lskd" data-v-d983b873><span class="start-text" data-v-d983b873>4.7</span><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png" data-v-d983b873><div style="${ssrRenderStyle({ "color": "#A2A5B9" })}" data-v-d983b873><b data-v-d983b873>12.049</b> Penilaian</div></td><td class="tdps txt-lskd" data-v-d983b873><span class="font-bold" data-v-d983b873>${ssrInterpolate(_ctx.formatCurrency(varian.price))}</span></td><td class="tdps txt-lskd" data-v-d983b873><span class="font-bold" data-v-d983b873>${ssrInterpolate(varian.stock)}</span></td><td class="tdps txt-lskd" data-v-d983b873>`);
          _push(ssrRenderComponent(_component_BaseSwitchThin, {
            label: "Aktifkan Produk",
            color: "primary",
            modelValue: varian.is_active,
            "onUpdate:modelValue": ($event) => varian.is_active = $event
          }, null, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></table></div><br data-v-d983b873><div class="table-mbrs-2" data-v-d983b873><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-d983b873><div class="p-4" data-v-d983b873><span class="txt-cmrs-1" data-v-d983b873>Harga Grosir</span></div></div><table width="100%" class="table-produk-3" data-v-d983b873><tr data-v-d983b873><td class="tdps" align="center" data-v-d983b873>N0</td><td class="tdps" align="center" data-v-d983b873>JUMLAH MINIMAL</td><td class="tdps" align="center" data-v-d983b873>HARGA GROSIR</td></tr><tr data-v-d983b873><td class="tdps" align="center" data-v-d983b873> 1 </td><td class="tdps txt-lskd" data-v-d983b873>12</td><td class="tdps txt-lskd" data-v-d983b873>Rp45.000</td></tr><tr data-v-d983b873><td class="tdps" align="center" data-v-d983b873> 1 </td><td class="tdps txt-lskd" data-v-d983b873>12</td><td class="tdps txt-lskd" data-v-d983b873>Rp45.000</td></tr><tr data-v-d983b873><td class="tdps" align="center" data-v-d983b873> 1 </td><td class="tdps txt-lskd" data-v-d983b873>12</td><td class="tdps txt-lskd" data-v-d983b873>Rp45.000</td></tr><tr data-v-d983b873><td class="tdps" align="center" data-v-d983b873> 1 </td><td class="tdps txt-lskd" data-v-d983b873>12</td><td class="tdps txt-lskd" data-v-d983b873>Rp45.000</td></tr><tr data-v-d983b873><td class="tdps" align="center" data-v-d983b873> 1 </td><td class="tdps txt-lskd" data-v-d983b873>12</td><td class="tdps txt-lskd" data-v-d983b873>Rp45.000</td></tr><tr data-v-d983b873><td class="tdps" align="center" data-v-d983b873> 1 </td><td class="tdps txt-lskd" data-v-d983b873>12</td><td class="tdps txt-lskd" data-v-d983b873>Rp45.000</td></tr><tr data-v-d983b873><td class="tdps" align="center" data-v-d983b873> 1 </td><td class="tdps txt-lskd" data-v-d983b873>12</td><td class="tdps txt-lskd" data-v-d983b873>Rp45.000</td></tr><tr data-v-d983b873><td class="tdps" align="center" data-v-d983b873> 1 </td><td class="tdps txt-lskd" data-v-d983b873>12</td><td class="tdps txt-lskd" data-v-d983b873>Rp45.000</td></tr><tr data-v-d983b873><td class="tdps" align="center" data-v-d983b873> 1 </td><td class="tdps txt-lskd" data-v-d983b873>12</td><td class="tdps txt-lskd" data-v-d983b873>Rp45.000</td></tr></table></div></div>`);
      } else if (unref(activeTab) === "tab-3") {
        _push(`<div class="mts2" data-v-d983b873><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-d983b873><div class="card-detail-commerce p-4" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-6.svg" class="img-icon-commrs" data-v-d983b873><span class="txt-cmrs-1" data-v-d983b873>Berat Produk</span><br data-v-d983b873><span class="txt-cmrs-2" data-v-d983b873>${ssrInterpolate((_m = _ctx.product) == null ? void 0 : _m.weight)} gram</span></div><div class="card-detail-commerce p-4" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-7.svg" class="img-icon-commrs" data-v-d983b873><span class="txt-cmrs-1" data-v-d983b873>Asuransi Pengiriman</span><br data-v-d983b873><span class="txt-cmrs-2 clr-two" data-v-d983b873>Opsional</span></div><div class="card-detail-commerce p-4" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-8.svg" class="img-icon-commrs" data-v-d983b873><span class="txt-cmrs-1" data-v-d983b873>Waktu Proses PreOrder</span><br data-v-d983b873><span class="txt-cmrs-2" data-v-d983b873>2 Minggu</span></div></div><div class="grid grid-cols-1 md:grid-cols-1 gap-4" data-v-d983b873><div class="card-detail-commerce p-4" data-v-d983b873><span class="txt-cmrs-1" data-v-d983b873>Ukuran Produk</span><br data-v-d983b873><br data-v-d983b873><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-d983b873><div align="center" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718216980/waktoo-commerce/up-1.svg" data-v-d983b873><span class="txt-cmrs-2" data-v-d983b873>: ${ssrInterpolate((_n = _ctx.product) == null ? void 0 : _n.length)} cm</span><br data-v-d983b873><span class="txt-cmrs-3" data-v-d983b873>Panjang</span></div><div align="center" class="border-two" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718216980/waktoo-commerce/up-2.svg" data-v-d983b873><span class="txt-cmrs-2" data-v-d983b873>${ssrInterpolate((_o = _ctx.product) == null ? void 0 : _o.height)} cm</span><br data-v-d983b873><span class="txt-cmrs-3" data-v-d983b873>Tinggi</span></div><div align="center" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718216980/waktoo-commerce/up-3.svg" data-v-d983b873><span class="txt-cmrs-2" data-v-d983b873>${ssrInterpolate((_p = _ctx.product) == null ? void 0 : _p.width)} cm</span><br data-v-d983b873><span class="txt-cmrs-3" data-v-d983b873>Lebar</span></div></div></div></div><div class="grid grid-cols-1 md:grid-cols-1 gap-4" data-v-d983b873><div class="card-detail-commerce p-4 scroll-mb" data-v-d983b873><span class="txt-cmrs-1" data-v-d983b873>Layanan Pengiriman Custom</span><br data-v-d983b873><table width="100%" class="table-produk-2" data-v-d983b873><tr data-v-d983b873><td class="bdrg" width="20%" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105600/waktoo-commerce/custome-1.png" class="icon-ons" data-v-d983b873> <div class="txt-lmss" data-v-d983b873>JNE</div></td><td class="txt-lskd bdrg" width="20%" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2" data-v-d983b873> <div class="txt-lmss2" data-v-d983b873>Reguler</div></td><td class="txt-lskd bdrg" width="20%" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/close.png" class="icon-ons2" data-v-d983b873> <div class="txt-lmss2" data-v-d983b873>OKE</div></td><td class="txt-lskd bdrg" width="20%" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2" data-v-d983b873> <div class="txt-lmss2" data-v-d983b873>YES</div></td><td class="txt-lskd" width="20%" data-v-d983b873></td></tr></table><table width="100%" class="table-produk-2" data-v-d983b873><tr data-v-d983b873><td class="bdrg" width="20%" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105599/waktoo-commerce/custome-2.png" class="icon-ons" data-v-d983b873> <div class="txt-lmss" data-v-d983b873>POS Indonesia</div></td><td class="txt-lskd bdrg" width="20%" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2" data-v-d983b873> <div class="txt-lmss2" data-v-d983b873>Pos Reguler</div></td><td class="txt-lskd bdrg" width="20%" data-v-d983b873></td><td class="txt-lskd bdrg" width="20%" data-v-d983b873></td><td class="txt-lskd" width="20%" data-v-d983b873></td></tr></table><table width="100%" class="table-produk-2" data-v-d983b873><tr data-v-d983b873><td class="bdrg" width="20%" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105599/waktoo-commerce/custome-3.png" class="icon-ons" data-v-d983b873> <div class="txt-lmss" data-v-d983b873>TiKi</div></td><td class="txt-lskd bdrg" width="20%" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2" data-v-d983b873> <div class="txt-lmss2" data-v-d983b873>One Night Service</div></td><td class="txt-lskd bdrg" width="20%" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2" data-v-d983b873> <div class="txt-lmss2" data-v-d983b873>Siang Hari Delivery Service</div></td><td class="txt-lskd bdrg" width="20%" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2" data-v-d983b873> <div class="txt-lmss2" data-v-d983b873>Regular</div></td><td class="txt-lskd" width="20%" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2" data-v-d983b873> <div class="txt-lmss2" data-v-d983b873>Economy</div></td></tr></table></div></div></div>`);
      } else if (unref(activeTab) === "tab-4") {
        _push(`<div class="mts2" data-v-d983b873><div style="${ssrRenderStyle({ "width": "100%", "margin-bottom": "40px" })}" data-v-d983b873><div class="float-right" data-v-d983b873>`);
        _push(ssrRenderComponent(_component_BaseButtonAction, {
          class: "tabs-bullets",
          color: unref(activeTipe) === "tipe1" ? "primary" : "default",
          onClick: ($event) => activeTipe.value = "tipe1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Hari Ini `);
            } else {
              return [
                createTextVNode(" Hari Ini ")
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
              _push2(` 7 Hari `);
            } else {
              return [
                createTextVNode(" 7 Hari ")
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
              _push2(` 1 Bulan `);
            } else {
              return [
                createTextVNode(" 1 Bulan ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="txtss-1" data-v-d983b873>Kriteria Utama</div><div class="txtss-2" data-v-d983b873>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="ltablet:col-span-9 col-span-12 lg:col-span-9" data-v-d983b873><div class="grid grid-cols-12 gap-4" data-v-d983b873><div class="col-span-12 md:col-span-3" data-v-d983b873>`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-1 flex items-center justify-between" data-v-d983b873${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h5",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-d983b873${_scopeId2}>Penjualan</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Penjualan")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="mb-2" data-v-d983b873${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "3xl",
                weight: "bold",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-d983b873${_scopeId2}>Rp20.498.500</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Rp20.498.500")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm" data-v-d983b873${_scopeId}><span data-v-d983b873${_scopeId}>+2%</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:trending-up",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-muted-400 text-xs" data-v-d983b873${_scopeId}>sejak sebulan yang lalu</span></div>`);
            } else {
              return [
                createVNode("div", { class: "mb-1 flex items-center justify-between" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h5",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Penjualan")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "mb-2" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "3xl",
                    weight: "bold",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Rp20.498.500")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "text-success-500 flex items-center gap-1 font-sans text-sm" }, [
                  createVNode("span", null, "+2%"),
                  createVNode(_component_Icon, {
                    name: "lucide:trending-up",
                    class: "h-5 w-5"
                  }),
                  createVNode("span", { class: "text-muted-400 text-xs" }, "sejak sebulan yang lalu")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="col-span-12 md:col-span-3" data-v-d983b873>`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-1 flex items-center justify-between" data-v-d983b873${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h5",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-d983b873${_scopeId2}>Pesanan</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Pesanan")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="mb-2" data-v-d983b873${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "3xl",
                weight: "bold",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-d983b873${_scopeId2}>65</span>`);
                  } else {
                    return [
                      createVNode("span", null, "65")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm" data-v-d983b873${_scopeId}><span data-v-d983b873${_scopeId}>-12%</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:trending-up",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-muted-400 text-xs" data-v-d983b873${_scopeId}>sejak sebulan yang lalu</span></div>`);
            } else {
              return [
                createVNode("div", { class: "mb-1 flex items-center justify-between" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h5",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Pesanan")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "mb-2" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "3xl",
                    weight: "bold",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "65")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "text-success-500 flex items-center gap-1 font-sans text-sm" }, [
                  createVNode("span", null, "-12%"),
                  createVNode(_component_Icon, {
                    name: "lucide:trending-up",
                    class: "h-5 w-5"
                  }),
                  createVNode("span", { class: "text-muted-400 text-xs" }, "sejak sebulan yang lalu")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="col-span-12 md:col-span-3" data-v-d983b873>`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-1 flex items-center justify-between" data-v-d983b873${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h5",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-d983b873${_scopeId2}>Penjualan per Pesanan</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Penjualan per Pesanan")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="mb-2" data-v-d983b873${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "3xl",
                weight: "bold",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-d983b873${_scopeId2}>Rp1.320.150</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Rp1.320.150")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm" data-v-d983b873${_scopeId}><span data-v-d983b873${_scopeId}>+2%</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:trending-up",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-muted-400 text-xs" data-v-d983b873${_scopeId}>sejak sebulan yang lalu</span></div>`);
            } else {
              return [
                createVNode("div", { class: "mb-1 flex items-center justify-between" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h5",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Penjualan per Pesanan")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "mb-2" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "3xl",
                    weight: "bold",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Rp1.320.150")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "text-success-500 flex items-center gap-1 font-sans text-sm" }, [
                  createVNode("span", null, "+2%"),
                  createVNode(_component_Icon, {
                    name: "lucide:trending-up",
                    class: "h-5 w-5"
                  }),
                  createVNode("span", { class: "text-muted-400 text-xs" }, "sejak sebulan yang lalu")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="col-span-12 md:col-span-3" data-v-d983b873>`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-1 flex items-center justify-between" data-v-d983b873${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h5",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-d983b873${_scopeId2}>Tingkat Konversi</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Tingkat Konversi")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="mb-2" data-v-d983b873${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "3xl",
                weight: "bold",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-d983b873${_scopeId2}>7,98%</span>`);
                  } else {
                    return [
                      createVNode("span", null, "7,98%")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm" data-v-d983b873${_scopeId}><span data-v-d983b873${_scopeId}>+2%</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:trending-up",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-muted-400 text-xs" data-v-d983b873${_scopeId}>sejak sebulan yang lalu</span></div>`);
            } else {
              return [
                createVNode("div", { class: "mb-1 flex items-center justify-between" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h5",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Tingkat Konversi")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "mb-2" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "3xl",
                    weight: "bold",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "7,98%")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "text-success-500 flex items-center gap-1 font-sans text-sm" }, [
                  createVNode("span", null, "+2%"),
                  createVNode(_component_Icon, {
                    name: "lucide:trending-up",
                    class: "h-5 w-5"
                  }),
                  createVNode("span", { class: "text-muted-400 text-xs" }, "sejak sebulan yang lalu")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div><br data-v-d983b873><div class="ltablet:col-span-6 col-span-12 lg:col-span-6" data-v-d983b873>`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-6" data-v-d983b873${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                size: "md",
                weight: "semibold",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-d983b873${_scopeId2}>Grafik setiap Kriteria</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Grafik setiap Kriteria")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(areaCustomers), { class: "-ms-4" }), null, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", { class: "mb-6" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "md",
                    weight: "semibold",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Grafik setiap Kriteria")
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_AddonApexcharts, mergeProps(unref(areaCustomers), { class: "-ms-4" }), null, 16)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else if (unref(activeTab) === "tab-5") {
        _push(`<div class="mts2" data-v-d983b873><table width="100%" style="${ssrRenderStyle({ "border": "0px solid #ddd" })}" data-v-d983b873><td nowrap style="${ssrRenderStyle({ "border": "0px solid rgb(221, 221, 221)" })}" valign="top" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714087508/waktoo-commerce/frame-1000001739.png" style="${ssrRenderStyle({ "margin-left": "-40px", "margin-top": "-43px", "width": "450px" })}" data-v-d983b873></td><td style="${ssrRenderStyle({ "border": "0px solid rgb(221, 221, 221)" })}" valign="top" data-v-d983b873><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714113750/waktoo-commerce/Frame-1000001757.png" style="${ssrRenderStyle({ "margin-top": "-30px", "margin-left": "-20px" })}" data-v-d983b873></td></table></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin-produk/detail-produk.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const detailProduk = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d983b873"]]);

export { detailProduk as default };
