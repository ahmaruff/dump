import { q as useTailwindColors, b as _sfc_main$q, _ as __nuxt_component_1, o as _sfc_main$D, a as __nuxt_component_2$1 } from '../server.mjs';
import { _ as _sfc_main$1, a as _sfc_main$2 } from './BaseDropdownItem-0bc7e124.mjs';
import { _ as _sfc_main$3 } from './BaseButtonAction-9b998a35.mjs';
import { _ as _sfc_main$4 } from './AddonApexcharts-47238aef.mjs';
import { defineComponent, ref, reactive, unref, withCtx, createVNode, toDisplayString, createTextVNode, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import wretch from 'wretch';
import { useRoute } from 'vue-router';
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
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@headlessui/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

function useProduct(productId) {
  const product = ref(null);
  const error = ref(null);
  const loading = ref(false);
  async function fetchProduct() {
    loading.value = true;
    const userToken = localStorage.getItem("token");
    console.log(userToken);
    if (userToken) {
      try {
        console.log(productId);
        const response = await wretch(
          `https://api.dev.commerce.waktoo.com:443/api/product-data/${productId}`
        ).headers({
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json"
        }).get().json();
        if (response && response.status === "success") {
          product.value = response.data.product_data;
        } else {
          error.value = "Failed to fetch product data";
          console.error("Failed to fetch product data:", response);
        }
      } catch (err) {
        error.value = "Error fetching product data";
        console.error("Error fetching product data:", err);
      } finally {
        loading.value = false;
      }
    } else {
      error.value = "User token not found";
    }
  }
  return {
    product,
    error,
    loading,
    fetchProduct
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const productId = route.params.id;
    const { product, error, loading, fetchProduct } = useProduct(productId);
    fetchProduct();
    const activeTipe = ref("tipe1");
    const areaCustomers = reactive(useAreaCustomers());
    reactive(useRadialBarTeam());
    reactive(useBarProfit());
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
    function useRadialBarTeam() {
      const { primary } = useTailwindColors();
      const type = "radialBar";
      const height = 455;
      const options = {
        title: {
          text: void 0
        },
        chart: {
          sparkline: {
            enabled: true
          },
          toolbar: {
            show: false
          }
        },
        colors: [primary.value],
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5,
              // margin is in pixels
              dropShadow: {
                enabled: false,
                top: 2,
                left: 0,
                color: "#999",
                opacity: 1,
                blur: 2
              }
            },
            hollow: {
              margin: 0,
              size: "40%"
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -2,
                fontSize: "22px"
              }
            }
          }
        },
        grid: {
          padding: {
            top: 80
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            shadeIntensity: 0.1,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          }
        },
        labels: ["Average Results"]
      };
      const series = ref([76]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useBarProfit() {
      const { primary } = useTailwindColors();
      const type = "bar";
      const height = 255;
      const options = {
        chart: {
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top"
              // top, center, bottom
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function(val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"]
          }
        },
        xaxis: {
          categories: ["May", "Jun", "Jul", "Aug", "Sep"],
          position: "top",
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: true
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: function(val) {
              return val + "%";
            }
          }
        },
        colors: [primary.value],
        title: {
          text: void 0,
          align: "left"
        }
      };
      const series = ref([
        {
          name: "Ratio",
          data: [2.3, 3.1, 4, 10.1, 4]
        }
      ]);
      return {
        type,
        height,
        options,
        series
      };
    }
    const formatCurrency = (price) => {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      });
      return formatter.format(price);
    };
    const activeTab = ref("tab-1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$q;
      const _component_BaseDropdown = _sfc_main$1;
      const _component_BaseDropdownItem = _sfc_main$2;
      const _component_nuxt_link = __nuxt_component_1;
      const _component_BaseButtonAction = _sfc_main$3;
      const _component_BaseCard = _sfc_main$D;
      const _component_Icon = __nuxt_component_2$1;
      const _component_AddonApexcharts = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="ltablet:h-[410px] dark:bg-muted-800 absolute start-0 top-0 h-[590px] w-full bg-white lg:h-[410px]"></div><div class="ltablet:h-64 ltablet:flex-row relative flex h-[460px] w-full flex-col lg:h-64 lg:flex-row"><div class="ltablet:flex-row relative z-10 flex w-full flex-col gap-6 lg:flex-row">`);
      if (unref(product)?.images) {
        _push(`<img class="img-detail-produk"${ssrRenderAttr("src", unref(product)?.images[0])} alt="image description">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="ltablet:text-left text-center lg:text-left">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "xl",
        weight: "semibold",
        class: "ltablet:justify-start flex items-center justify-center gap-2 lg:justify-start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-800 dark:text-white"${_scopeId}>${ssrInterpolate(unref(product)?.name)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-800 dark:text-white" }, toDisplayString(unref(product)?.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mb-6 flex items-center gap-x-6"><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"> Pengunjung: </span><span class="text-muted-800 dark:text-muted-100 font-semibold"> 1512 </span></div><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"> Terjual: </span><span class="text-muted-800 dark:text-muted-100 font-semibold"> 92 </span></div><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"> Stok: </span><span class="text-muted-800 dark:text-muted-100 font-semibold">${ssrInterpolate(unref(product)?.stock)}</span></div><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"> Nilai: </span><span class="text-muted-800 dark:text-muted-100 font-semibold"><span class="start-text">4.7</span><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png"></span></div></div><h1 class="txt-price">${ssrInterpolate(formatCurrency(unref(product)?.price))}</h1><span class="txt-sm-alert3">Diskon</span> \xA0 <span class="txt-price-2 text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base">Rp40.000 - Rp130.000</span></div></div><div class="ltablet:justify-start ltablet:ms-auto ltablet:mt-0 mt-4 flex shrink-0 justify-center lg:ms-auto lg:mt-0 lg:justify-start">`);
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
            _push2(ssrRenderComponent(_component_BaseDropdownItem, {
              to: `/shop-admin/edit/${unref(product)?.id}`,
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
                to: `/shop-admin/edit/${unref(product)?.id}`,
                title: "Edit",
                text: "Edit details",
                shape: "smooth"
              }, null, 8, ["to"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full ltablet:bottom-[-70px] absolute bottom-[-48px] start-0 flex items-end gap-2 lg:bottom-[-70px]"><button type="button" class="${ssrRenderClass([
        activeTab.value === "tab-1" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs"
      ])}"><span>Informasi Produk</span></button><button type="button" class="${ssrRenderClass([
        activeTab.value === "tab-2" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs"
      ])}"><span>Atribut Produk</span></button><button type="button" class="${ssrRenderClass([
        activeTab.value === "tab-3" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs"
      ])}"><span>Pengiriman</span></button><div class="shrink-0 right-float"><button type="button" class="${ssrRenderClass([
        activeTab.value === "tab-4" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs"
      ])}"><span>Performa</span></button><button type="button" class="${ssrRenderClass([
        activeTab.value === "tab-5" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs"
      ])}"><span>Nilai &amp; Ulasan</span></button></div></div></div><div class="w-full">`);
      if (activeTab.value === "tab-1") {
        _push(`<div class="mts2"><div class="space-y-16"><div><div class="mb-6 flex w-full items-center justify-between"><table width="100%"><tr><td width="200px" class="tdss"><span class="txt-desc">Kondisi</span></td><td class="tdss">`);
        if (unref(product)?.condition == 0) {
          _push(`<span class="txt-sm-alert5">Bekas</span>`);
        } else {
          _push(`<span class="txt-sm-alert5">Baru</span>`);
        }
        _push(`</td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Kategori</span></td><td class="tdss">`);
        if (unref(product)?.product_category_id === 1) {
          _push(`<span class="txt-desc"><b>Makanan &amp; Minuman</b></span>`);
        } else if (unref(product)?.product_category_id === 2) {
          _push(`<span class="txt-desc"><b>Fashion Pria</b></span>`);
        } else {
          _push(`<span class="txt-desc"><b>-</b></span>`);
        }
        _push(`</td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Etalase</span></td><td class="tdss"><span class="txt-desc text-muted-500">Tidak Ada</span></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Video</span></td><td class="tdss">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: unref(product)?.video_url
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(product)?.video_url)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(product)?.video_url), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Foto</span></td><td class="tdss"><table width="100%">`);
        if (unref(product)?.images) {
          _push(`<div class="flex flex-row flex-nowrap gap-1 justify-start py-3 overflow-x-auto"><!--[-->`);
          ssrRenderList(unref(product)?.images, (img) => {
            _push(`<div class="detail-foto"><img class="img-detail-foto"${ssrRenderAttr("src", img)} alt="image description"></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</table></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Deskripsi</span></td><td class="tdss"><div class="div-desc">${ssrInterpolate(unref(product)?.description)}</div></td></tr></table></div></div></div></div>`);
      } else if (activeTab.value === "tab-2") {
        _push(`<div class="mt-28"><div class="space-y-16"><div><div class="mb-6 flex w-full items-center justify-between"><table width="100%"><tr><td width="200px" class="tdss"><span class="txt-desc">Varian</span></td><td class="tdss"><span class="txt-desc">Tabel Varian</span></td></tr><tr><td width="200px" class="tdss"></td><td class="tdss"><table width="100%" class="table-produk"><tr><td class="tdps" align="center">GAMBAR</td><td class="tdps" align="center">UKURAN</td><td class="tdps" align="center">LENGAN</td><td class="tdps" align="center">NILAI</td><td class="tdps" align="center">HARGA</td><td class="tdps" align="center">DISKON</td><td class="tdps" align="center">STOK</td><td class="tdps" align="center">SKU</td><td class="tdps" align="center">BERAT</td></tr><tr><td align="center"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714103200/waktoo-commerce/frame-baju-1974.png" class="img-atribut-produk"></td><td class="txt-lskd">XL</td><td class="txt-lskd">Pendek</td><td class="txt-lskd"><span class="start-text">4.7</span><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png"><div style="${ssrRenderStyle({ "color": "#A2A5B9" })}"><b>12.049</b> Penilaian</div></td><td class="txt-lskd"><span class="font-bold">Rp120.000</span><br><span class="txt-price3">Rp130.000</span></td><td class="txt-lskd"><span class="txt-sm-alert1">30%</span></td><td class="txt-lskd">5</td><td class="txt-lskd">KP149P110</td><td class="txt-lskd">1.000 g</td></tr><tr><td align="center"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714103200/waktoo-commerce/frame-baju-1974.png" class="img-atribut-produk"></td><td class="txt-lskd">XL</td><td class="txt-lskd">Pendek</td><td class="txt-lskd"><span class="start-text">4.7</span><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png"><div style="${ssrRenderStyle({ "color": "#A2A5B9" })}"><b>12.049</b> Penilaian</div></td><td class="txt-lskd"><span class="font-bold">Rp120.000</span><br><span class="txt-price3">Rp130.000</span></td><td class="txt-lskd"><span class="txt-sm-alert3">-Rp30.000</span></td><td class="txt-lskd">5</td><td class="txt-lskd">KP149P110</td><td class="txt-lskd">1.000 g</td></tr><tr><td align="center"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714103200/waktoo-commerce/frame-baju-1974.png" class="img-atribut-produk"></td><td class="txt-lskd">XL</td><td class="txt-lskd">Pendek</td><td class="txt-lskd"><span class="start-text">4.7</span><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png"><div style="${ssrRenderStyle({ "color": "#A2A5B9" })}"><b>12.049</b> Penilaian</div></td><td class="txt-lskd"><span class="font-bold">Rp120.000</span><br><span class="txt-price3">Rp130.000</span></td><td class="txt-lskd"><span class="txt-sm-alert2">Tidak Aktif</span></td><td class="txt-lskd">5</td><td class="txt-lskd">KP149P110</td><td class="txt-lskd">1.000 g</td></tr></table></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Minimum Pesanan</span></td><td class="tdss"><span class="txt-desc">1</span></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Harga Grosir</span></td><td class="tdss"><span class="txt-sm-alert2">NonAktif</span></td></tr></table></div></div></div></div>`);
      } else if (activeTab.value === "tab-3") {
        _push(`<div class="mt-28"><div class="space-y-16"><div><div class="mb-6 flex w-full items-center justify-between"><table width="100%"><tr><td width="200px" class="tdss"><span class="txt-desc">Berat Produk</span></td><td class="tdss"><span class="txt-desc"><b>${ssrInterpolate(unref(product)?.weight)} gram</b></span></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Ukuran Produk</span></td><td class="tdss"><span class="txt-desc"><ul><li>Panjang : ${ssrInterpolate(unref(product)?.length)} cm</li><li>Tinggi : ${ssrInterpolate(unref(product)?.height)} cm</li><li>Lebar : ${ssrInterpolate(unref(product)?.width)} cm</li></ul></span></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Asuransi Pengiriman</span></td><td class="tdss"><span class="txt-sm-alert1">Opsional</span></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Layanan Pengiriman</span></td><td class="tdss"><span class="txt-desc"><b>Custom</b></span></td></tr><tr><td width="200px" class="tdss"></td><td class="tdss"><table width="100%" class="table-produk"><tr><td class="bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105600/waktoo-commerce/custome-1.png" class="icon-ons"> <div class="txt-lmss">JNE</div></td><td class="txt-lskd bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2"> <div class="txt-lmss2">Reguler</div></td><td class="txt-lskd bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/close.png" class="icon-ons2"> <div class="txt-lmss2">OKE</div></td><td class="txt-lskd bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2"> <div class="txt-lmss2">YES</div></td><td class="txt-lskd" width="20%"></td></tr></table><br><table width="100%" class="table-produk"><tr><td class="bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105599/waktoo-commerce/custome-2.png" class="icon-ons"> <div class="txt-lmss">POS Indonesia</div></td><td class="txt-lskd bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2"> <div class="txt-lmss2">Pos Reguler</div></td><td class="txt-lskd bdrg" width="20%"></td><td class="txt-lskd bdrg" width="20%"></td><td class="txt-lskd" width="20%"></td></tr></table><br><table width="100%" class="table-produk"><tr><td class="bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105599/waktoo-commerce/custome-3.png" class="icon-ons"> <div class="txt-lmss">TiKi</div></td><td class="txt-lskd bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2"> <div class="txt-lmss2">One Night Service</div></td><td class="txt-lskd bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2"> <div class="txt-lmss2">Siang Hari Delivery Service</div></td><td class="txt-lskd bdrg" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2"> <div class="txt-lmss2">Regular</div></td><td class="txt-lskd" width="20%"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714105722/waktoo-commerce/checklist.png" class="icon-ons2"> <div class="txt-lmss2">Economy</div></td></tr></table></td></tr><tr><td width="200px" class="tdss"><span class="txt-desc">Waktu Proses PreOrder</span></td><td class="tdss"><span class="txt-desc">3 Minggu</span></td></tr></table></div></div></div></div>`);
      } else if (activeTab.value === "tab-4") {
        _push(`<div class="mt-28"><div style="${ssrRenderStyle({ "width": "100%", "margin-bottom": "40px" })}"><div class="float-right">`);
        _push(ssrRenderComponent(_component_BaseButtonAction, {
          class: "tabs-bullets",
          color: activeTipe.value === "tipe1" ? "primary" : "default",
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
          color: activeTipe.value === "tipe2" ? "primary" : "default",
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
          color: activeTipe.value === "tipe3" ? "primary" : "default",
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
        _push(`</div><div class="txtss-1">Kriteria Utama</div><div class="txtss-2">Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="ltablet:col-span-9 col-span-12 lg:col-span-9"><div class="grid grid-cols-12 gap-4"><div class="col-span-12 md:col-span-3">`);
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
      } else if (activeTab.value === "tab-5") {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop-admin/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
