import { _ as __nuxt_component_4 } from './Loading-DgGIgVLA.mjs';
import { _ as _sfc_main$2 } from './BaseBreadcrumb-cZDskCmn.mjs';
import { u as useRoute$1, _ as __nuxt_component_0$2, a as _sfc_main$7, b as __nuxt_component_1, c as _sfc_main$d, d as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_11, a as _sfc_main$3 } from './BaseDropdownItem-eyL-Ji7e.mjs';
import { _ as _sfc_main$4 } from './BaseSwitchThin-Cj-cBPdI.mjs';
import { _ as _sfc_main$5 } from './BaseButtonAction-CeDg9f4a.mjs';
import { u as useJwtAuth } from './composables-DmWjNlaH.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, reactive, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, unref, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import wretch from 'wretch';
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
import '@headlessui/vue';
import './input-id-Bz_TYZXb.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProdukDetail",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { token } = useJwtAuth();
    const product = ref([]);
    const route = useRoute$1();
    const productId = route.params.id;
    ref(null);
    const loading = ref(false);
    try {
      loading.value = true;
      const response1 = ([__temp, __restore] = withAsyncContext(() => wretch(`https://api.dev.commerce.waktoo.com:443/api/product-data/${productId}`).headers({
        Authorization: `Bearer ${token.value}`,
        "Content-Type": "application/json"
      }).get().json()), __temp = await __temp, __restore(), __temp);
      if (response1 && response1.status === "success") {
        product.value = response1.data.product_data;
        console.log(product.value);
      } else {
        console.error("Failed to fetch data from product-data API:", response1);
      }
    } catch (error2) {
      error2.value = error2.message;
      console.error("Error:", error2);
    }
    product.value.product_category_id;
    const formatCurrency = (price) => {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      });
      return formatter.format(price);
    };
    const activeTab = ref("tab-1");
    const values = reactive({
      primary: true
    });
    const demoBreadcrumbOne = [
      {
        label: "Home",
        hideLabel: false,
        icon: "lucide:home",
        to: "/toko-admin"
      },
      {
        label: "Produk",
        hideLabel: false,
        to: "/admin-produk"
      },
      {
        label: "Detail Produk",
        hideLabel: false,
        to: "#"
        // Use backticks for template literals
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
      const _component_Loading = __nuxt_component_4;
      const _component_BaseBreadcrumb = _sfc_main$2;
      const _component_Icon = __nuxt_component_0$2;
      const _component_BaseHeading = _sfc_main$7;
      const _component_BaseDropdown = __nuxt_component_11;
      const _component_BaseDropdownItem = _sfc_main$3;
      const _component_nuxt_link = __nuxt_component_1;
      const _component_BaseSwitchThin = _sfc_main$4;
      const _component_BaseButtonAction = _sfc_main$5;
      const _component_BaseCard = _sfc_main$d;
      const _component_AddonApexcharts = resolveComponent("AddonApexcharts");
      if (loading.value && _ctx.products) {
        _push(ssrRenderComponent(_component_Loading, mergeProps({ type: "spinner" }, _attrs), null, _parent));
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-4877f92c><div class="ltablet:h-[410px] dark:bg-muted-800 absolute start-0 top-0 h-[590px] w-full bg-white lg:h-[410px]" data-v-4877f92c></div><div class="ltablet:flex-column relative flex w-full flex-col gap-6 lg:flex-column" data-v-4877f92c>`);
        _push(ssrRenderComponent(_component_BaseBreadcrumb, { items: demoBreadcrumbOne }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:chevron-right",
                class: "block size-3"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:chevron-right",
                  class: "block size-3"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:h-64 ltablet:flex-row relative flex h-[460px] w-full flex-col lg:h-64 lg:flex-row" data-v-4877f92c><div class="ltablet:flex-row relative flex w-full flex-col gap-6 lg:flex-row" data-v-4877f92c>`);
        if ((_a = product.value) == null ? void 0 : _a.images) {
          _push(`<img${ssrRenderAttr("src", (_b = product.value) == null ? void 0 : _b.images[0])} class="img-detail-produk" data-v-4877f92c>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="ltablet:text-left lg:text-left" data-v-4877f92c>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h2",
          size: "xl",
          weight: "semibold",
          class: "ltablet:justify-start flex items-center justify-center gap-2 lg:justify-start"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2;
            if (_push2) {
              _push2(`<span class="text-muted-800 dark:text-white" data-v-4877f92c${_scopeId}>${ssrInterpolate((_a2 = product.value) == null ? void 0 : _a2.name)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-800 dark:text-white" }, toDisplayString((_b2 = product.value) == null ? void 0 : _b2.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="mb-6 flex items-center gap-x-6" data-v-4877f92c><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row" data-v-4877f92c><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base" data-v-4877f92c> Pengunjung: </span><span class="text-muted-800 dark:text-muted-100 font-semibold" data-v-4877f92c> 1512 </span></div><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row" data-v-4877f92c><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base" data-v-4877f92c> Terjual: </span><span class="text-muted-800 dark:text-muted-100 font-semibold" data-v-4877f92c> 92 </span></div><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row" data-v-4877f92c><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base" data-v-4877f92c> Stok: </span><span class="text-muted-800 dark:text-muted-100 font-semibold" data-v-4877f92c>${ssrInterpolate((_c = product.value) == null ? void 0 : _c.stock)}</span></div><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row" data-v-4877f92c><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base" data-v-4877f92c> Nilai: </span><span class="text-muted-800 dark:text-muted-100 font-semibold" data-v-4877f92c><span class="start-text" data-v-4877f92c>4.7</span><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png" data-v-4877f92c></span></div></div>`);
        if ((_d = product.value) == null ? void 0 : _d.variant_price) {
          _push(`<h1 class="txt-price" data-v-4877f92c>${ssrInterpolate((_e = product.value) == null ? void 0 : _e.variant_price)}</h1>`);
        } else if ((_f = product.value) == null ? void 0 : _f.price) {
          _push(`<h1 class="txt-price" data-v-4877f92c>${ssrInterpolate(formatCurrency((_g = product.value) == null ? void 0 : _g.price))}</h1>`);
        } else {
          _push(`<h1 class="txt-price" data-v-4877f92c>-</h1>`);
        }
        _push(`</div></div><div class="ltablet:justify-start ltablet:ms-auto ltablet:mt-0 mt-4 flex shrink-0 justify-center lg:ms-auto lg:mt-0 lg:justify-start" data-v-4877f92c>`);
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
                to: `/produk/edit/${(_a2 = product.value) == null ? void 0 : _a2.id}`,
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
                  to: `/produk/edit/${(_b2 = product.value) == null ? void 0 : _b2.id}`,
                  title: "Edit",
                  text: "Edit details",
                  shape: "smooth"
                }, null, 8, ["to"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="w-full absolute bottom-[-5px] start-0 flex items-end gap-2 mb-270 grid-slls" data-v-4877f92c><button type="button" class="${ssrRenderClass([
          activeTab.value === "tab-1" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
          "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
        ])}" data-v-4877f92c><span data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718182044/waktoo-commerce/icon-desc-1.svg" class="img-desc" data-v-4877f92c> Informasi Produk</span></button><button type="button" class="${ssrRenderClass([
          activeTab.value === "tab-2" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
          "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
        ])}" data-v-4877f92c><span data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718182044/waktoo-commerce/icon-desc-2.svg" class="img-desc" data-v-4877f92c> Atribut Produk</span></button><button type="button" class="${ssrRenderClass([
          activeTab.value === "tab-3" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
          "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
        ])}" data-v-4877f92c><span data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718182044/waktoo-commerce/icon-desc-3.svg" class="img-desc" data-v-4877f92c> Pengiriman</span></button><div class="shrink-0 right-float relative-mobile" data-v-4877f92c><button type="button" class="${ssrRenderClass([
          activeTab.value === "tab-4" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
          "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
        ])}" data-v-4877f92c><span data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718182044/waktoo-commerce/icon-desc-4.svg" class="img-desc" data-v-4877f92c> Performa</span></button><button type="button" class="${ssrRenderClass([
          activeTab.value === "tab-5" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
          "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
        ])}" data-v-4877f92c><span data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718182044/waktoo-commerce/icon-desc-5.svg" class="img-desc" data-v-4877f92c> Nilai &amp; Ulasan</span></button></div></div></div><div class="w-full mt-650" data-v-4877f92c>`);
        if (activeTab.value === "tab-1") {
          _push(`<div class="mts2" data-v-4877f92c><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-4877f92c><div class="card-detail-commerce p-4" data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-1.svg" class="img-icon-commrs" data-v-4877f92c><span class="txt-cmrs-1" data-v-4877f92c>Kondisi</span><br data-v-4877f92c>`);
          if (((_h = product.value) == null ? void 0 : _h.condition) == 0) {
            _push(`<span class="txt-cmrs-2" data-v-4877f92c>Bekas</span>`);
          } else {
            _push(`<span class="txt-cmrs-2" data-v-4877f92c>Baru</span>`);
          }
          _push(`</div><div class="card-detail-commerce p-4" data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-2.svg" class="img-icon-commrs" data-v-4877f92c><span class="txt-cmrs-1" data-v-4877f92c>Kategori</span><br data-v-4877f92c><span class="txt-cmrs-2" data-v-4877f92c>${ssrInterpolate((_i = product.value) == null ? void 0 : _i.product_category_name)}</span></div><div class="card-detail-commerce p-4" data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-3.svg" class="img-icon-commrs" data-v-4877f92c><span class="txt-cmrs-1" data-v-4877f92c>Etalase</span><br data-v-4877f92c><span class="txt-cmrs-2 clr-one" data-v-4877f92c>Tidak Ada</span></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-4877f92c><div class="card-detail-commerce p-4" data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718209899/waktoo-commerce/icon-vector.svg" class="img-icon-vector" data-v-4877f92c><span class="txt-cmrs-1" data-v-4877f92c>Video</span><br data-v-4877f92c>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: (_j = product.value) == null ? void 0 : _j.video_url
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<iframe src="https://www.youtube.com/embed/upNOsrFhKcU" class="img-product" allowfullscreen title="" data-v-4877f92c${_scopeId}></iframe>`);
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
          _push(`</div><div class="card-detail-commerce p-4 md:col-span-2" data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718209899/waktoo-commerce/icon-vector.svg" class="img-icon-vector" data-v-4877f92c><span class="txt-cmrs-1" data-v-4877f92c>Foto</span><br data-v-4877f92c>`);
          if ((_k = product.value) == null ? void 0 : _k.images) {
            _push(`<!--[-->`);
            if (((_l = product.value) == null ? void 0 : _l.images.length) < 3) {
              _push(`<div class="grid grid-cols-2 md:grid-cols-7 gap-4" data-v-4877f92c><!--[-->`);
              ssrRenderList((_m = product.value) == null ? void 0 : _m.images, (img) => {
                _push(`<div class="text-center md:row-span-2 md:col-span-2" data-v-4877f92c><img${ssrRenderAttr("src", img)} class="img-product img-product-width" data-v-4877f92c></div>`);
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<div class="grid grid-cols-2 md:grid-cols-7 gap-4" data-v-4877f92c><div class="text-center md:row-span-2 md:col-span-2" data-v-4877f92c><img${ssrRenderAttr("src", (_n = product.value) == null ? void 0 : _n.images[0])} class="img-product img-product-width" data-v-4877f92c></div><!--[-->`);
              ssrRenderList((_o = product.value) == null ? void 0 : _o.images.slice(1), (img, index) => {
                _push(`<div class="text-center" data-v-4877f92c>`);
                if (img.length) {
                  _push(`<img${ssrRenderAttr("src", img)} class="img-product-2" data-v-4877f92c>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`</div>`);
              });
              _push(`<!--]--></div>`);
            }
            _push(`<!--]-->`);
          } else {
            _push(`<div class="grid grid-cols-2 md:grid-cols-7 gap-4" data-v-4877f92c><div class="text-center md:row-span-2 md:col-span-2" data-v-4877f92c><img alt="foto" class="img-product img-product-width" data-v-4877f92c></div></div>`);
          }
          _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-1 gap-4" data-v-4877f92c><div class="card-detail-commerce p-4" data-v-4877f92c><span class="txt-cmrs-1" data-v-4877f92c>Deskripsi</span><br data-v-4877f92c><div class="div-desc" data-v-4877f92c>${ssrInterpolate((_p = product.value) == null ? void 0 : _p.description)}</div></div></div></div>`);
        } else if (activeTab.value === "tab-2") {
          _push(`<div class="mts2" data-v-4877f92c><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-4877f92c><div class="card-detail-commerce p-4" data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-9.svg" class="img-icon-commrs" data-v-4877f92c><span class="txt-cmrs-1" data-v-4877f92c>Status</span><br data-v-4877f92c>`);
          if (((_q = product.value) == null ? void 0 : _q.is_active) == true) {
            _push(`<span class="txt-cmrs-2 clr-three" data-v-4877f92c>Aktif</span>`);
          } else {
            _push(`<span class="txt-cmrs-2 clr-one" data-v-4877f92c>Nonaktif</span>`);
          }
          _push(`</div><div class="card-detail-commerce p-4" data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-10.svg" class="img-icon-commrs" data-v-4877f92c><span class="txt-cmrs-1" data-v-4877f92c>SKU</span><br data-v-4877f92c><span class="txt-cmrs-2 clr-one" data-v-4877f92c>Nonaktif</span></div><div class="card-detail-commerce p-4" data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-4.svg" class="img-icon-commrs" data-v-4877f92c><span class="txt-cmrs-1" data-v-4877f92c>Minimum Pesanan</span><br data-v-4877f92c><span class="txt-cmrs-2" data-v-4877f92c>${ssrInterpolate((_r = product.value) == null ? void 0 : _r.min_order)}</span></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-4877f92c><div class="card-detail-commerce p-4" data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-5.svg" class="img-icon-commrs" data-v-4877f92c><span class="txt-cmrs-1" data-v-4877f92c>Harga Satuan</span><br data-v-4877f92c><span class="txt-cmrs-2 clr-one" data-v-4877f92c>${ssrInterpolate(formatCurrency((_s = product.value) == null ? void 0 : _s.price))}</span></div><div class="card-detail-commerce p-4" data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-5.svg" class="img-icon-commrs" data-v-4877f92c><span class="txt-cmrs-1" data-v-4877f92c>Harga Grosir</span><br data-v-4877f92c>`);
          if (((_t = product.value) == null ? void 0 : _t.is_wholesale_active) == true) {
            _push(`<span class="txt-cmrs-2 clr-three" data-v-4877f92c>Aktif</span>`);
          } else {
            _push(`<span class="txt-cmrs-2 clr-one" data-v-4877f92c>Nonaktif</span>`);
          }
          _push(`</div></div>`);
          if ((_u = product.value) == null ? void 0 : _u.variants[0]) {
            _push(`<div class="table-mbrs" data-v-4877f92c><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-4877f92c><div class="p-4" data-v-4877f92c><span class="txt-cmrs-1" data-v-4877f92c>Tabel Varian</span></div><div class="p-4 right-value" data-v-4877f92c>`);
            _push(ssrRenderComponent(_component_BaseSwitchThin, {
              modelValue: unref(values).primary,
              "onUpdate:modelValue": ($event) => unref(values).primary = $event,
              label: "Lihat Semua",
              color: "warning"
            }, null, _parent));
            _push(`</div></div><table width="100%" class="table-produk" data-v-4877f92c><tr data-v-4877f92c><td class="tdps" data-v-4877f92c>NAME</td><td class="tdps" data-v-4877f92c>NILAI</td><td class="tdps" data-v-4877f92c>HARGA</td><td class="tdps" data-v-4877f92c>STOK</td><td class="tdps" align="center" data-v-4877f92c>STATUS</td></tr><!--[-->`);
            ssrRenderList(product.value.variants, (varian) => {
              _push(`<tr data-v-4877f92c><td class="tdps txt-lskd" data-v-4877f92c>${ssrInterpolate(varian.name)}</td><td class="tdps txt-lskd" data-v-4877f92c><span class="start-text" data-v-4877f92c>4.7</span><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png" data-v-4877f92c><div style="${ssrRenderStyle({ "color": "#A2A5B9" })}" data-v-4877f92c><b data-v-4877f92c>12.049</b> Penilaian</div></td><td class="tdps txt-lskd" data-v-4877f92c><span class="font-bold" data-v-4877f92c>${ssrInterpolate(formatCurrency(varian.price))}</span></td><td class="tdps txt-lskd" data-v-4877f92c><span class="font-bold" data-v-4877f92c>${ssrInterpolate(varian.stock)}</span></td><td class="tdps txt-lskd" data-v-4877f92c>`);
              _push(ssrRenderComponent(_component_BaseSwitchThin, {
                color: "primary",
                modelValue: varian.is_active,
                "onUpdate:modelValue": ($event) => varian.is_active = $event
              }, null, _parent));
              _push(`</td></tr>`);
            });
            _push(`<!--]--></table></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<br data-v-4877f92c>`);
          if (((_v = product.value) == null ? void 0 : _v.is_wholesale_active) == true) {
            _push(`<div class="table-mbrs-2" data-v-4877f92c><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-4877f92c><div class="p-4" data-v-4877f92c><span class="txt-cmrs-1" data-v-4877f92c>Harga Grosir</span></div></div><table width="100%" class="table-produk-3" data-v-4877f92c><tr data-v-4877f92c><td class="tdps" align="center" data-v-4877f92c>N0</td><td class="tdps" align="center" data-v-4877f92c>JUMLAH MINIMAL</td><td class="tdps" align="center" data-v-4877f92c>HARGA GROSIR</td></tr><tr data-v-4877f92c><td class="tdps" align="center" data-v-4877f92c> 1 </td><td class="tdps txt-lskd" data-v-4877f92c>12</td><td class="tdps txt-lskd" data-v-4877f92c>Rp45.000</td></tr><tr data-v-4877f92c><td class="tdps" align="center" data-v-4877f92c> 1 </td><td class="tdps txt-lskd" data-v-4877f92c>12</td><td class="tdps txt-lskd" data-v-4877f92c>Rp45.000</td></tr><tr data-v-4877f92c><td class="tdps" align="center" data-v-4877f92c> 1 </td><td class="tdps txt-lskd" data-v-4877f92c>12</td><td class="tdps txt-lskd" data-v-4877f92c>Rp45.000</td></tr><tr data-v-4877f92c><td class="tdps" align="center" data-v-4877f92c> 1 </td><td class="tdps txt-lskd" data-v-4877f92c>12</td><td class="tdps txt-lskd" data-v-4877f92c>Rp45.000</td></tr><tr data-v-4877f92c><td class="tdps" align="center" data-v-4877f92c> 1 </td><td class="tdps txt-lskd" data-v-4877f92c>12</td><td class="tdps txt-lskd" data-v-4877f92c>Rp45.000</td></tr><tr data-v-4877f92c><td class="tdps" align="center" data-v-4877f92c> 1 </td><td class="tdps txt-lskd" data-v-4877f92c>12</td><td class="tdps txt-lskd" data-v-4877f92c>Rp45.000</td></tr><tr data-v-4877f92c><td class="tdps" align="center" data-v-4877f92c> 1 </td><td class="tdps txt-lskd" data-v-4877f92c>12</td><td class="tdps txt-lskd" data-v-4877f92c>Rp45.000</td></tr><tr data-v-4877f92c><td class="tdps" align="center" data-v-4877f92c> 1 </td><td class="tdps txt-lskd" data-v-4877f92c>12</td><td class="tdps txt-lskd" data-v-4877f92c>Rp45.000</td></tr><tr data-v-4877f92c><td class="tdps" align="center" data-v-4877f92c> 1 </td><td class="tdps txt-lskd" data-v-4877f92c>12</td><td class="tdps txt-lskd" data-v-4877f92c>Rp45.000</td></tr></table></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else if (activeTab.value === "tab-3") {
          _push(`<div class="mts2" data-v-4877f92c><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-4877f92c><div class="card-detail-commerce p-4" data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-6.svg" class="img-icon-commrs" data-v-4877f92c><span class="txt-cmrs-1" data-v-4877f92c>Berat Produk</span><br data-v-4877f92c><span class="txt-cmrs-2" data-v-4877f92c>${ssrInterpolate((_w = product.value) == null ? void 0 : _w.weight)} gram</span></div><div class="card-detail-commerce p-4" data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-7.svg" class="img-icon-commrs" data-v-4877f92c><span class="txt-cmrs-1" data-v-4877f92c>Asuransi Pengiriman</span><br data-v-4877f92c><span class="txt-cmrs-2 clr-two" data-v-4877f92c>Opsional</span></div><div class="card-detail-commerce p-4" data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718208863/waktoo-commerce/sosmed-icon-8.svg" class="img-icon-commrs" data-v-4877f92c><span class="txt-cmrs-1" data-v-4877f92c>Waktu Proses PreOrder</span><br data-v-4877f92c><span class="txt-cmrs-2" data-v-4877f92c>2 Minggu</span></div></div><div class="grid grid-cols-1 md:grid-cols-1 gap-4" data-v-4877f92c><div class="card-detail-commerce p-4" data-v-4877f92c><span class="txt-cmrs-1" data-v-4877f92c>Ukuran Produk</span><br data-v-4877f92c><br data-v-4877f92c><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-4877f92c><div align="center" data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718216980/waktoo-commerce/up-1.svg" data-v-4877f92c><span class="txt-cmrs-2" data-v-4877f92c>${ssrInterpolate((_x = product.value) == null ? void 0 : _x.length)} cm</span><br data-v-4877f92c><span class="txt-cmrs-3" data-v-4877f92c>Panjang</span></div><div align="center" class="border-two" data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718216980/waktoo-commerce/up-2.svg" data-v-4877f92c><span class="txt-cmrs-2" data-v-4877f92c>${ssrInterpolate((_y = product.value) == null ? void 0 : _y.height)} cm</span><br data-v-4877f92c><span class="txt-cmrs-3" data-v-4877f92c>Tinggi</span></div><div align="center" data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718216980/waktoo-commerce/up-3.svg" data-v-4877f92c><span class="txt-cmrs-2" data-v-4877f92c>${ssrInterpolate((_z = product.value) == null ? void 0 : _z.width)} cm</span><br data-v-4877f92c><span class="txt-cmrs-3" data-v-4877f92c>Lebar</span></div></div></div></div></div>`);
        } else if (activeTab.value === "tab-4") {
          _push(`<div class="mts2" data-v-4877f92c><div style="${ssrRenderStyle({ "width": "100%", "margin-bottom": "40px" })}" data-v-4877f92c><div class="float-right" data-v-4877f92c>`);
          _push(ssrRenderComponent(_component_BaseButtonAction, {
            class: "tabs-bullets",
            color: _ctx.activeTipe === "tipe1" ? "primary" : "default",
            onClick: ($event) => _ctx.activeTipe = "tipe1"
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
            color: _ctx.activeTipe === "tipe2" ? "primary" : "default",
            onClick: ($event) => _ctx.activeTipe = "tipe2"
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
            color: _ctx.activeTipe === "tipe3" ? "primary" : "default",
            onClick: ($event) => _ctx.activeTipe = "tipe3"
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
          _push(`</div><div class="txtss-1" data-v-4877f92c>Kriteria Utama</div><div class="txtss-2" data-v-4877f92c>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="ltablet:col-span-9 col-span-12 lg:col-span-9" data-v-4877f92c><div class="grid grid-cols-12 gap-4" data-v-4877f92c><div class="col-span-12 md:col-span-3" data-v-4877f92c>`);
          _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="mb-1 flex items-center justify-between" data-v-4877f92c${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  as: "h5",
                  size: "sm",
                  weight: "medium",
                  lead: "tight",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-4877f92c${_scopeId2}>Penjualan</span>`);
                    } else {
                      return [
                        createVNode("span", null, "Penjualan")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="mb-2" data-v-4877f92c${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  as: "h4",
                  size: "3xl",
                  weight: "bold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-4877f92c${_scopeId2}>Rp20.498.500</span>`);
                    } else {
                      return [
                        createVNode("span", null, "Rp20.498.500")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm" data-v-4877f92c${_scopeId}><span data-v-4877f92c${_scopeId}>+2%</span>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:trending-up",
                  class: "h-5 w-5"
                }, null, _parent2, _scopeId));
                _push2(`<span class="text-muted-400 text-xs" data-v-4877f92c${_scopeId}>sejak sebulan yang lalu</span></div>`);
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
          _push(`</div><div class="col-span-12 md:col-span-3" data-v-4877f92c>`);
          _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="mb-1 flex items-center justify-between" data-v-4877f92c${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  as: "h5",
                  size: "sm",
                  weight: "medium",
                  lead: "tight",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-4877f92c${_scopeId2}>Pesanan</span>`);
                    } else {
                      return [
                        createVNode("span", null, "Pesanan")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="mb-2" data-v-4877f92c${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  as: "h4",
                  size: "3xl",
                  weight: "bold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-4877f92c${_scopeId2}>65</span>`);
                    } else {
                      return [
                        createVNode("span", null, "65")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm" data-v-4877f92c${_scopeId}><span data-v-4877f92c${_scopeId}>-12%</span>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:trending-up",
                  class: "h-5 w-5"
                }, null, _parent2, _scopeId));
                _push2(`<span class="text-muted-400 text-xs" data-v-4877f92c${_scopeId}>sejak sebulan yang lalu</span></div>`);
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
          _push(`</div><div class="col-span-12 md:col-span-3" data-v-4877f92c>`);
          _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="mb-1 flex items-center justify-between" data-v-4877f92c${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  as: "h5",
                  size: "sm",
                  weight: "medium",
                  lead: "tight",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-4877f92c${_scopeId2}>Penjualan per Pesanan</span>`);
                    } else {
                      return [
                        createVNode("span", null, "Penjualan per Pesanan")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="mb-2" data-v-4877f92c${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  as: "h4",
                  size: "3xl",
                  weight: "bold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-4877f92c${_scopeId2}>Rp1.320.150</span>`);
                    } else {
                      return [
                        createVNode("span", null, "Rp1.320.150")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm" data-v-4877f92c${_scopeId}><span data-v-4877f92c${_scopeId}>+2%</span>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:trending-up",
                  class: "h-5 w-5"
                }, null, _parent2, _scopeId));
                _push2(`<span class="text-muted-400 text-xs" data-v-4877f92c${_scopeId}>sejak sebulan yang lalu</span></div>`);
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
          _push(`</div><div class="col-span-12 md:col-span-3" data-v-4877f92c>`);
          _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="mb-1 flex items-center justify-between" data-v-4877f92c${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  as: "h5",
                  size: "sm",
                  weight: "medium",
                  lead: "tight",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-4877f92c${_scopeId2}>Tingkat Konversi</span>`);
                    } else {
                      return [
                        createVNode("span", null, "Tingkat Konversi")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="mb-2" data-v-4877f92c${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  as: "h4",
                  size: "3xl",
                  weight: "bold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-4877f92c${_scopeId2}>7,98%</span>`);
                    } else {
                      return [
                        createVNode("span", null, "7,98%")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm" data-v-4877f92c${_scopeId}><span data-v-4877f92c${_scopeId}>+2%</span>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:trending-up",
                  class: "h-5 w-5"
                }, null, _parent2, _scopeId));
                _push2(`<span class="text-muted-400 text-xs" data-v-4877f92c${_scopeId}>sejak sebulan yang lalu</span></div>`);
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
          _push(`</div></div></div><br data-v-4877f92c><div class="ltablet:col-span-6 col-span-12 lg:col-span-6" data-v-4877f92c>`);
          _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="mb-6" data-v-4877f92c${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-4877f92c${_scopeId2}>Grafik setiap Kriteria</span>`);
                    } else {
                      return [
                        createVNode("span", null, "Grafik setiap Kriteria")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
                _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(_ctx.areaCustomers, { class: "-ms-4" }), null, _parent2, _scopeId));
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
                  createVNode(_component_AddonApexcharts, mergeProps(_ctx.areaCustomers, { class: "-ms-4" }), null, 16)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div>`);
        } else if (activeTab.value === "tab-5") {
          _push(`<div class="mts2" data-v-4877f92c><table width="100%" style="${ssrRenderStyle({ "border": "0px solid #ddd" })}" data-v-4877f92c><td nowrap style="${ssrRenderStyle({ "border": "0px solid rgb(221, 221, 221)" })}" valign="top" data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714087508/waktoo-commerce/frame-1000001739.png" style="${ssrRenderStyle({ "margin-left": "-40px", "margin-top": "-43px", "width": "450px" })}" data-v-4877f92c></td><td style="${ssrRenderStyle({ "border": "0px solid rgb(221, 221, 221)" })}" valign="top" data-v-4877f92c><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714113750/waktoo-commerce/Frame-1000001757.png" style="${ssrRenderStyle({ "margin-top": "-30px", "margin-left": "-20px" })}" data-v-4877f92c></td></table></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/produk/ProdukDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4877f92c"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProdukDetail = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ProdukDetail, { class: "pe-4 xl:pe-10" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin-produk/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
