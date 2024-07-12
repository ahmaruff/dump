import { a as _sfc_main$7, c as _sfc_main$d, _ as __nuxt_component_0$2 } from './server.mjs';
import { _ as __nuxt_component_11, a as _sfc_main$1 } from './BaseDropdownItem-eyL-Ji7e.mjs';
import { defineComponent, ref, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "detail-produk-varian",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref("tab-1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$7;
      const _component_BaseDropdown = __nuxt_component_11;
      const _component_BaseDropdownItem = _sfc_main$1;
      const _component_BaseCard = _sfc_main$d;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="ltablet:h-[410px] dark:bg-muted-800 absolute start-0 top-0 h-[590px] w-full bg-white lg:h-[410px]"></div><div class="ltablet:h-64 ltablet:flex-row relative flex h-[460px] w-full flex-col lg:h-64 lg:flex-row"><div class="ltablet:flex-row relative z-10 flex w-full flex-col gap-6 lg:flex-row"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714102945/waktoo-commerce/frame-image-20.png" class="img-detail-produk"><div class="ltablet:text-left text-center lg:text-left">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "xl",
        weight: "semibold",
        class: "ltablet:justify-start flex items-center justify-center gap-2 lg:justify-start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-800 dark:text-white"${_scopeId}>Kaos Polos Pria Tanpa Sablon Premium Terbaru Bahan Katun Combed 24s Nyaman</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-800 dark:text-white" }, "Kaos Polos Pria Tanpa Sablon Premium Terbaru Bahan Katun Combed 24s Nyaman")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mb-6 flex items-center gap-x-6"><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"> Pengunjung: </span><span class="text-muted-800 dark:text-muted-100 font-semibold"> 1512 </span></div><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"> Terjual: </span><span class="text-muted-800 dark:text-muted-100 font-semibold"> 92 </span></div><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"> Stok: </span><span class="text-muted-800 dark:text-muted-100 font-semibold"> 100 </span></div><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"> Nilai: </span><span class="text-muted-800 dark:text-muted-100 font-semibold"><span class="start-text">4.7</span><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png"></span></div></div><h1 class="txt-price">Rp30.000 - Rp120.000</h1><span class="txt-sm-alert3">Diskon</span> \xA0 <span class="txt-price-2 text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base">Rp40.000 - Rp130.000</span></div></div><div class="ltablet:justify-start ltablet:ms-auto ltablet:mt-0 mt-4 flex shrink-0 justify-center lg:ms-auto lg:mt-0 lg:justify-start">`);
      _push(ssrRenderComponent(_component_BaseDropdown, {
        flavor: "context",
        label: "Dropdown",
        orientation: "end",
        shape: "smooth"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseDropdownItem, {
              to: "#",
              title: "User",
              text: "View details",
              shape: "smooth"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseDropdownItem, {
                to: "#",
                title: "User",
                text: "View details",
                shape: "smooth"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full ltablet:bottom-[-70px] absolute bottom-[-48px] start-0 flex items-end gap-2 lg:bottom-[-70px]"><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "tab-1" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs"
      ])}"><span>Informasi Produk</span></button><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "tab-2" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs"
      ])}"><span>Atribut Produk</span></button><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "tab-3" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs"
      ])}"><span>Pengiriman</span></button><div class="shrink-0"><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "tab-4" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs"
      ])}"><span>Performa</span></button><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "tab-5" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs"
      ])}"><span>Nilai &amp; Ulasan</span></button></div></div></div><div class="w-full">`);
      if (unref(activeTab) === "tab-1") {
        _push(`<div class="mts2"><div class="space-y-16"><div><div class="mb-6 flex w-full items-center justify-between"><table width="100%"><tr><td width="200px" class="tdss"><span class="txt-desc">Kondisi</span></td><td class="tdss"><span class="txt-sm-alert5">Baru</span></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Kategori</span></td><td class="tdss"><span class="txt-desc"><b>Pakaian Pria</b></span></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Etalase</span></td><td class="tdss"><span class="txt-desc text-muted-500">Tidak Ada</span></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Video</span></td><td class="tdss"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714102945/waktoo-commerce/frame-image-20.png" class="img-detail-video"></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Foto</span></td><td class="tdss"><table width="100%"><tr><td class="tdsr"><div class="detail-foto"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714102945/waktoo-commerce/frame-image-20.png" class="img-detail-foto"></div></td><td class="tdsr"><div class="detail-foto"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714102945/waktoo-commerce/frame-image-20.png" class="img-detail-foto"></div></td><td class="tdsr"><div class="detail-foto"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714102945/waktoo-commerce/frame-image-20.png" class="img-detail-foto"></div></td><td class="tdsr"><div class="detail-foto"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714102945/waktoo-commerce/frame-image-20.png" class="img-detail-foto"></div></td><td class="tdsr"><div class="detail-foto"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714102945/waktoo-commerce/frame-image-20.png" class="img-detail-foto"></div></td><td class="tdsr"><div class="detail-foto"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714102945/waktoo-commerce/frame-image-20.png" class="img-detail-foto"></div></td><td class="tdsr"><div class="detail-foto"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714102945/waktoo-commerce/frame-image-20.png" class="img-detail-foto"></div></td><td class="tdsr"><div class="detail-foto"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714102945/waktoo-commerce/frame-image-20.png" class="img-detail-foto"></div></td><td class="tdsr"><div class="detail-foto"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714102945/waktoo-commerce/frame-image-20.png" class="img-detail-foto"></div></td><td class="tdsr"><div class="detail-foto"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714102945/waktoo-commerce/frame-image-20.png" class="img-detail-foto"></div></td><td class="tdsr"><div class="detail-foto"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714102945/waktoo-commerce/frame-image-20.png" class="img-detail-foto"></div></td></tr></table></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Deskripsi</span></td><td class="tdss"><div class="div-desc"> Materials :<br>Grey Red Cotton Maxcel 24&#39;s Basic Tee<br>100% Cotton<br>Gramasi 170-180 gsm<br><br>S : chest : 50 - length : 68 - sleeve : 20<br>M : chest : 51 - length : 70 - sleeve : 21<br>L : chest : 53 - length : 74 - sleeve : 23<br>XL : chest : 55 - length : 76 - sleeve : 24<br>2XL : chest : 60 - length : 79 - sleeve : 25<br>3XL : chest : 62 - length : 82 - sleeve : 26<br>4XL : chest : 66 - length : 84 - sleeve : 27<br><br>Warna yang terlihat pada gambar mungkin tidak 100% sama dengan produk yang sebenarnya, disebabkan faktor cahaya pada pengambilan gambar, atau kondisi gadget yang digunakan untuk melihat gambar. </div></td></tr></table></div></div></div></div>`);
      } else if (unref(activeTab) === "tab-2") {
        _push(`<div class="mt-28"><div class="space-y-16"><div><div class="mb-6 flex w-full items-center justify-between"><table width="100%"><tr><td width="200px" class="tdss"><span class="txt-desc">Status</span></td><td class="tdss"><span class="txt-sm-alert5">Aktif</span></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">SKU</span></td><td class="tdss"><span class="txt-desc">1</span></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Harga Satuan</span></td><td class="tdss"><span class="txt-desc">Rp50.000</span></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Harga Grosir</span></td><td class="tdss"><table width="100%" class="table-produk"><tr><td class="tdps" align="center">N0</td><td class="tdps" align="center">JUMLAH MINIMAL</td><td class="tdps" align="center">HARGA GROSIR</td></tr><tr><td class="txt-lskd">1</td><td class="txt-lskd">12</td><td class="txt-lskd">Rp45.000</td></tr><tr><td class="txt-lskd">2</td><td class="txt-lskd">12</td><td class="txt-lskd">Rp45.000</td></tr><tr><td class="txt-lskd">3</td><td class="txt-lskd">12</td><td class="txt-lskd">Rp45.000</td></tr><tr><td class="txt-lskd">4</td><td class="txt-lskd">12</td><td class="txt-lskd">Rp45.000</td></tr><tr><td class="txt-lskd">5</td><td class="txt-lskd">12</td><td class="txt-lskd">Rp45.000</td></tr><tr><td class="txt-lskd">6</td><td class="txt-lskd">12</td><td class="txt-lskd">Rp45.000</td></tr><tr><td class="txt-lskd">7</td><td class="txt-lskd">13</td><td class="txt-lskd">Rp45.000</td></tr></table></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Minimum Pesanan</span></td><td class="tdss"><span class="txt-desc">1</span></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Harga Grosir</span></td><td class="tdss"><span class="txt-sm-alert2">NonAktif</span></td></tr></table></div></div></div></div>`);
      } else if (unref(activeTab) === "tab-3") {
        _push(`<div class="mt-28"><div class="space-y-16"><div><div class="mb-6 flex w-full items-center justify-between"><table width="100%"><tr><td width="200px" class="tdss"><span class="txt-desc">Berat Produk</span></td><td class="tdss"><span class="txt-desc"><b>1.000 gram</b></span></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Ukuran Produk</span></td><td class="tdss"><span class="txt-desc"><ul><li>Panjang : 10cm</li><li>Tinggi : 9cm</li><li>Lebar : 8cm</li></ul></span></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Asuransi Pengiriman</span></td><td class="tdss"><span class="txt-sm-alert1">Opsional</span></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Layanan Pengiriman</span></td><td class="tdss"><span class="txt-desc"><b>Custom</b></span></td></tr><tr><td width="200px" class="tdss"></td><td class="tdss"><table width="100%" class="table-produk"><tr><td class="bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105600/waktoo-commerce/custome-1.png" class="icon-ons"> <div class="txt-lmss">JNE</div></td><td class="txt-lskd bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2"> <div class="txt-lmss2">Reguler</div></td><td class="txt-lskd bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/close.png" class="icon-ons2"> <div class="txt-lmss2">OKE</div></td><td class="txt-lskd bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2"> <div class="txt-lmss2">YES</div></td><td class="txt-lskd" width="20%"></td></tr></table><br><table width="100%" class="table-produk"><tr><td class="bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105599/waktoo-commerce/custome-2.png" class="icon-ons"> <div class="txt-lmss">POS Indonesia</div></td><td class="txt-lskd bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2"> <div class="txt-lmss2">Pos Reguler</div></td><td class="txt-lskd bdrg" width="20%"></td><td class="txt-lskd bdrg" width="20%"></td><td class="txt-lskd" width="20%"></td></tr></table><br><table width="100%" class="table-produk"><tr><td class="bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105599/waktoo-commerce/custome-3.png" class="icon-ons"> <div class="txt-lmss">TiKi</div></td><td class="txt-lskd bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2"> <div class="txt-lmss2">One Night Service</div></td><td class="txt-lskd bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2"> <div class="txt-lmss2">Siang Hari Delivery Service</div></td><td class="txt-lskd bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2"> <div class="txt-lmss2">Regular</div></td><td class="txt-lskd" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2"> <div class="txt-lmss2">Economy</div></td></tr></table></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Waktu Proses PreOrder</span></td><td class="tdss"><span class="txt-desc">3 Minggu</span></td></tr></table></div></div></div></div>`);
      } else if (unref(activeTab) === "tab-4") {
        _push(`<div class="mt-28"><div class="ltablet:col-span-9 col-span-12 lg:col-span-9"><div class="grid grid-cols-12 gap-4"><div class="col-span-12 md:col-span-3">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-1 flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h5",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Penjualan</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Penjualan")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="mb-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "3xl",
                weight: "bold",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Rp20.498.500</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Rp20.498.500")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm"${_scopeId}><span${_scopeId}>+2%</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:trending-up",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-muted-400 text-xs"${_scopeId}>sejak sebulan yang lalu</span></div>`);
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
        _push(`</div><div class="col-span-12 md:col-span-3">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-1 flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h5",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Pesanan</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Pesanan")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="mb-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "3xl",
                weight: "bold",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>65</span>`);
                  } else {
                    return [
                      createVNode("span", null, "65")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm"${_scopeId}><span${_scopeId}>-12%</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:trending-up",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-muted-400 text-xs"${_scopeId}>sejak sebulan yang lalu</span></div>`);
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
        _push(`</div><div class="col-span-12 md:col-span-3">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-1 flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h5",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Penjualan per Pesanan</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Penjualan per Pesanan")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="mb-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "3xl",
                weight: "bold",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Rp1.320.150</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Rp1.320.150")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm"${_scopeId}><span${_scopeId}>+2%</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:trending-up",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-muted-400 text-xs"${_scopeId}>sejak sebulan yang lalu</span></div>`);
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
        _push(`</div><div class="col-span-12 md:col-span-3">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-1 flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h5",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Tingkat Konversi</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Tingkat Konversi")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="mb-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "3xl",
                weight: "bold",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>7,98%</span>`);
                  } else {
                    return [
                      createVNode("span", null, "7,98%")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm"${_scopeId}><span${_scopeId}>+2%</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:trending-up",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-muted-400 text-xs"${_scopeId}>sejak sebulan yang lalu</span></div>`);
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
        _push(`</div></div></div><br><div class="ltablet:col-span-6 col-span-12 lg:col-span-6">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                size: "md",
                weight: "semibold",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Grafik setiap Kriteria</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Grafik setiap Kriteria")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
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
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else if (unref(activeTab) === "tab-5") {
        _push(`<div class="mt-28"><table width="100%" style="${ssrRenderStyle({ "border": "0px solid #ddd" })}"><td nowrap style="${ssrRenderStyle({ "border": "0px solid rgb(221, 221, 221)" })}" valign="top"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714087508/waktoo-commerce/frame-1000001739.png" style="${ssrRenderStyle({ "margin-left": "-40px", "margin-top": "-43px", "width": "450px" })}"></td><td style="${ssrRenderStyle({ "border": "0px solid rgb(221, 221, 221)" })}" valign="top"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714113750/waktoo-commerce/Frame-1000001757.png" style="${ssrRenderStyle({ "margin-top": "-30px", "margin-left": "-20px" })}"></td></table></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin-produk/detail-produk-varian.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
