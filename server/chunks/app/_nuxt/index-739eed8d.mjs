import { _ as _sfc_main$1 } from './BaseButtonAction-9b998a35.mjs';
import { q as useTailwindColors, o as _sfc_main$D, b as _sfc_main$q, a as __nuxt_component_2$1 } from '../server.mjs';
import { _ as _sfc_main$2 } from './AddonApexcharts-47238aef.mjs';
import { defineComponent, ref, reactive, unref, withCtx, createTextVNode, createVNode, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButtonAction = _sfc_main$1;
      const _component_BaseCard = _sfc_main$D;
      const _component_BaseHeading = _sfc_main$q;
      const _component_Icon = __nuxt_component_2$1;
      const _component_AddonApexcharts = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "width": "100%", "margin-bottom": "40px" })}"><div class="float-right">`);
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
