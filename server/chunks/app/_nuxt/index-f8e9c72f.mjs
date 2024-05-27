import { _ as _sfc_main$5, a as _sfc_main$4, b as _sfc_main$3, c as _sfc_main$2, d as _sfc_main$1$1, e as _sfc_main$6 } from './BaseSwitchBall-446dfa2b.mjs';
import { z as useRoute, u as useRouter, e as _sfc_main$v, f as _sfc_main$a, a as __nuxt_component_2$1 } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseCheckbox-bb4e3b0e.mjs';
import { _ as _sfc_main$7 } from './BaseSelect-11c1e165.mjs';
import { defineComponent, ref, computed, watch, resolveComponent, withCtx, unref, isRef, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
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

function useProducts(route) {
  const products = ref([]);
  const categories = ref([]);
  const error = ref(null);
  const loading = ref(false);
  const fetchProducts = async () => {
    loading.value = true;
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      const [productCategoriesResponse, productDataResponse] = await Promise.all([
        wretch("https://api.dev.commerce.waktoo.com:443/api/product-categories").headers({
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }).get().json(),
        wretch("https://api.dev.commerce.waktoo.com:443/api/product-data").headers({
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }).get().json()
      ]);
      if (productCategoriesResponse.status === "success") {
        categories.value = productCategoriesResponse.data.product_category;
      } else {
        console.error("Failed to fetch data from product-categories API:", productCategoriesResponse);
      }
      if (productDataResponse.status === "success") {
        products.value = productDataResponse.data.product_data;
      } else {
        console.error("Failed to fetch data from product-data API:", productDataResponse);
      }
    } catch (err) {
      error.value = err.message;
      console.error("Error fetching products:", err);
    } finally {
      loading.value = false;
    }
  };
  return {
    categories,
    products,
    error,
    loading,
    fetchProducts
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    ref(route);
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const values = ref(true);
    const filter = ref("");
    const perPage = ref(10);
    const { categories, products, error, loading, fetchProducts } = useProducts();
    fetchProducts();
    watch([filter, perPage], () => {
      router.push({
        query: {
          page: void 0
        }
      });
    });
    computed(() => {
      return {
        filter: filter.value,
        perPage: perPage.value,
        page: page.value
      };
    });
    const selected = ref([]);
    const formatCurrency = (price) => {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      });
      return formatter.format(price);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$5;
      const _component_BaseInput = _sfc_main$v;
      const _component_BaseButton = _sfc_main$a;
      const _component_Icon = __nuxt_component_2$1;
      const _component_TairoTable = _sfc_main$4;
      const _component_TairoTableHeading = _sfc_main$3;
      const _component_BaseCheckbox = _sfc_main$1;
      const _component_TairoTableRow = _sfc_main$2;
      const _component_TairoTableCell = _sfc_main$1$1;
      const _component_router_link = resolveComponent("router-link");
      const _component_BaseSwitchBall = _sfc_main$6;
      const _component_BaseSelect = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoContentWrapper, null, {
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(filter),
              "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
              icon: "lucide:search",
              placeholder: "Pencarian",
              classes: {
                wrapper: "w-full"
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, { class: "w-full sm:w-32" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:filter",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(` \xA0 Filter `);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:filter",
                      class: "h-4 w-4"
                    }),
                    createTextVNode(" \xA0 Filter ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                modelValue: unref(filter),
                "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
                icon: "lucide:search",
                placeholder: "Pencarian",
                classes: {
                  wrapper: "w-full"
                }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseButton, { class: "w-full sm:w-32" }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "lucide:filter",
                    class: "h-4 w-4"
                  }),
                  createTextVNode(" \xA0 Filter ")
                ]),
                _: 1
              })
            ];
          }
        }),
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              to: "/shop-admin/create",
              class: "w-full sm:w-42"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Tambah Produk</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, "Tambah Produk")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButton, {
                color: "primary",
                to: "/shop-admin/create",
                class: "w-full sm:w-42"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "lucide:plus",
                    class: "h-4 w-4"
                  }),
                  createVNode("span", null, "Tambah Produk")
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div${_scopeId}><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TairoTable, {
              shape: "rounded",
              scrollable: false
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: "",
                    class: "p-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_BaseCheckbox, {
                          name: "table-1-main",
                          shape: "rounded",
                          class: "text-primary-500"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_BaseCheckbox, {
                              name: "table-1-main",
                              shape: "rounded",
                              class: "text-primary-500"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` NAMA PRODUK `);
                      } else {
                        return [
                          createTextVNode(" NAMA PRODUK ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`NILAI`);
                      } else {
                        return [
                          createTextVNode("NILAI")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`HARGA`);
                      } else {
                        return [
                          createTextVNode("HARGA")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`DISKON`);
                      } else {
                        return [
                          createTextVNode("DISKON")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`KATEGORI`);
                      } else {
                        return [
                          createTextVNode("KATEGORI")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` STOK `);
                      } else {
                        return [
                          createTextVNode(" STOK ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`AKTIF`);
                      } else {
                        return [
                          createTextVNode("AKTIF")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: "",
                      class: "p-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(_component_BaseCheckbox, {
                            name: "table-1-main",
                            shape: "rounded",
                            class: "text-primary-500"
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" NAMA PRODUK ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("NILAI")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("HARGA")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("DISKON")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("KATEGORI")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" STOK ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("AKTIF")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(selected).length > 0) {
                    _push3(ssrRenderComponent(_component_TairoTableRow, { hoverable: false }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TairoTableCell, {
                            colspan: "8",
                            class: "bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<a href="#" class="outline-none hover:underline focus:underline"${_scopeId4}>Click here to everything</a>`);
                              } else {
                                return [
                                  createVNode("a", {
                                    href: "#",
                                    class: "outline-none hover:underline focus:underline"
                                  }, "Click here to everything")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TairoTableCell, {
                              colspan: "8",
                              class: "bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"
                            }, {
                              default: withCtx(() => [
                                createVNode("a", {
                                  href: "#",
                                  class: "outline-none hover:underline focus:underline"
                                }, "Click here to everything")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(products), (product) => {
                    _push3(ssrRenderComponent(_component_TairoTableRow, {
                      key: product?.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex items-center"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_BaseCheckbox, {
                                  modelValue: unref(selected),
                                  "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                                  value: product?.id,
                                  name: `item-checkbox-${product?.id}`,
                                  shape: "rounded",
                                  class: "text-primary-500"
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode(_component_BaseCheckbox, {
                                      modelValue: unref(selected),
                                      "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                                      value: product?.id,
                                      name: `item-checkbox-${product?.id}`,
                                      shape: "rounded",
                                      class: "text-primary-500"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TairoTableCell, {
                            spaced: "",
                            style: { "width": "300px" }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_router_link, {
                                  to: `/shop-admin/${product?.id}`
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="flex items-center"${_scopeId5}>`);
                                      if (product?.images) {
                                        _push6(`<img${ssrRenderAttr("src", product?.images[0])} alt="image description" style="${ssrRenderStyle({ "width": "50px", "height": "50px" })}" class="img-produk"${_scopeId5}>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`<div class="ms-3 leading-none"${_scopeId5}><h4 class="font-sans text-sm font-medium dxz-2"${_scopeId5}>${ssrInterpolate(product?.name)}</h4></div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "flex items-center" }, [
                                          product?.images ? (openBlock(), createBlock("img", {
                                            key: 0,
                                            src: product?.images[0],
                                            alt: "image description",
                                            style: { "width": "50px", "height": "50px" },
                                            class: "img-produk"
                                          }, null, 8, ["src"])) : createCommentVNode("", true),
                                          createVNode("div", { class: "ms-3 leading-none" }, [
                                            createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(product?.name), 1)
                                          ])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_router_link, {
                                    to: `/shop-admin/${product?.id}`
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-center" }, [
                                        product?.images ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          src: product?.images[0],
                                          alt: "image description",
                                          style: { "width": "50px", "height": "50px" },
                                          class: "img-produk"
                                        }, null, 8, ["src"])) : createCommentVNode("", true),
                                        createVNode("div", { class: "ms-3 leading-none" }, [
                                          createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(product?.name), 1)
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TairoTableCell, {
                            light: "",
                            spaced: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="start-text"${_scopeId4}>4.7</span><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png"${_scopeId4}><b${_scopeId4}>12.049</b> Penilaian `);
                              } else {
                                return [
                                  createVNode("span", { class: "start-text" }, "4.7"),
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png" }),
                                  createVNode("b", null, "12.049"),
                                  createTextVNode(" Penilaian ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TairoTableCell, {
                            light: "",
                            spaced: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="font-bold"${_scopeId4}>${ssrInterpolate(formatCurrency(product?.price))}</span><br${_scopeId4}><s${_scopeId4}>${ssrInterpolate(formatCurrency(product?.price))}</s>`);
                              } else {
                                return [
                                  createVNode("span", { class: "font-bold" }, toDisplayString(formatCurrency(product?.price)), 1),
                                  createVNode("br"),
                                  createVNode("s", null, toDisplayString(formatCurrency(product?.price)), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TairoTableCell, {
                            spaced: "",
                            class: "capitalize"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="txt-sm-alert3"${_scopeId4}>-</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "txt-sm-alert3" }, "-")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (product?.product_category_id === 1) {
                                  _push5(`<span class="txt-sm-alert4"${_scopeId4}>Minuman &amp; Makanan</span>`);
                                } else if (product?.product_category_id === 2) {
                                  _push5(`<span class="txt-sm-alert2"${_scopeId4}>Fashion Pria</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  product?.product_category_id === 1 ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "txt-sm-alert4"
                                  }, "Minuman & Makanan")) : product?.product_category_id === 2 ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "txt-sm-alert2"
                                  }, "Fashion Pria")) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h4 class="font-sans text-sm font-medium"${_scopeId4}>${ssrInterpolate(product?.stock)}</h4>`);
                              } else {
                                return [
                                  createVNode("h4", { class: "font-sans text-sm font-medium" }, toDisplayString(product?.stock), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_BaseSwitchBall, {
                                  modelValue: unref(values).success,
                                  "onUpdate:modelValue": ($event) => unref(values).success = $event,
                                  color: "success"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_BaseSwitchBall, {
                                    modelValue: unref(values).success,
                                    "onUpdate:modelValue": ($event) => unref(values).success = $event,
                                    color: "success"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(_component_BaseCheckbox, {
                                    modelValue: unref(selected),
                                    "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                                    value: product?.id,
                                    name: `item-checkbox-${product?.id}`,
                                    shape: "rounded",
                                    class: "text-primary-500"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, {
                              spaced: "",
                              style: { "width": "300px" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_router_link, {
                                  to: `/shop-admin/${product?.id}`
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center" }, [
                                      product?.images ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: product?.images[0],
                                        alt: "image description",
                                        style: { "width": "50px", "height": "50px" },
                                        class: "img-produk"
                                      }, null, 8, ["src"])) : createCommentVNode("", true),
                                      createVNode("div", { class: "ms-3 leading-none" }, [
                                        createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(product?.name), 1)
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "start-text" }, "4.7"),
                                createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png" }),
                                createVNode("b", null, "12.049"),
                                createTextVNode(" Penilaian ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "font-bold" }, toDisplayString(formatCurrency(product?.price)), 1),
                                createVNode("br"),
                                createVNode("s", null, toDisplayString(formatCurrency(product?.price)), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, {
                              spaced: "",
                              class: "capitalize"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "txt-sm-alert3" }, "-")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                product?.product_category_id === 1 ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "txt-sm-alert4"
                                }, "Minuman & Makanan")) : product?.product_category_id === 2 ? (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "txt-sm-alert2"
                                }, "Fashion Pria")) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode("h4", { class: "font-sans text-sm font-medium" }, toDisplayString(product?.stock), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_BaseSwitchBall, {
                                  modelValue: unref(values).success,
                                  "onUpdate:modelValue": ($event) => unref(values).success = $event,
                                  color: "success"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    unref(selected).length > 0 ? (openBlock(), createBlock(_component_TairoTableRow, {
                      key: 0,
                      hoverable: false
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_TairoTableCell, {
                          colspan: "8",
                          class: "bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"
                        }, {
                          default: withCtx(() => [
                            createVNode("a", {
                              href: "#",
                              class: "outline-none hover:underline focus:underline"
                            }, "Click here to everything")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(products), (product) => {
                      return openBlock(), createBlock(_component_TairoTableRow, {
                        key: product?.id
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(_component_BaseCheckbox, {
                                  modelValue: unref(selected),
                                  "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                                  value: product?.id,
                                  name: `item-checkbox-${product?.id}`,
                                  shape: "rounded",
                                  class: "text-primary-500"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TairoTableCell, {
                            spaced: "",
                            style: { "width": "300px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_router_link, {
                                to: `/shop-admin/${product?.id}`
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center" }, [
                                    product?.images ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: product?.images[0],
                                      alt: "image description",
                                      style: { "width": "50px", "height": "50px" },
                                      class: "img-produk"
                                    }, null, 8, ["src"])) : createCommentVNode("", true),
                                    createVNode("div", { class: "ms-3 leading-none" }, [
                                      createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(product?.name), 1)
                                    ])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TairoTableCell, {
                            light: "",
                            spaced: ""
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "start-text" }, "4.7"),
                              createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png" }),
                              createVNode("b", null, "12.049"),
                              createTextVNode(" Penilaian ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TairoTableCell, {
                            light: "",
                            spaced: ""
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "font-bold" }, toDisplayString(formatCurrency(product?.price)), 1),
                              createVNode("br"),
                              createVNode("s", null, toDisplayString(formatCurrency(product?.price)), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TairoTableCell, {
                            spaced: "",
                            class: "capitalize"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "txt-sm-alert3" }, "-")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx(() => [
                              product?.product_category_id === 1 ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "txt-sm-alert4"
                              }, "Minuman & Makanan")) : product?.product_category_id === 2 ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: "txt-sm-alert2"
                              }, "Fashion Pria")) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "font-sans text-sm font-medium" }, toDisplayString(product?.stock), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_BaseSwitchBall, {
                                modelValue: unref(values).success,
                                "onUpdate:modelValue": ($event) => unref(values).success = $event,
                                color: "success"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseSelect, {
              modelValue: unref(perPage),
              "onUpdate:modelValue": ($event) => isRef(perPage) ? perPage.value = $event : null,
              label: "",
              classes: {
                wrapper: "w-full sm:w-40 absolute-page"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option${ssrRenderAttr("value", 10)}${_scopeId2}>10 data per halaman</option><option${ssrRenderAttr("value", 25)}${_scopeId2}>25 data per halaman</option><option${ssrRenderAttr("value", 50)}${_scopeId2}>50 data per halaman</option><option${ssrRenderAttr("value", 100)}${_scopeId2}>100 data per halaman</option>`);
                } else {
                  return [
                    createVNode("option", { value: 10 }, "10 data per halaman"),
                    createVNode("option", { value: 25 }, "25 data per halaman"),
                    createVNode("option", { value: 50 }, "50 data per halaman"),
                    createVNode("option", { value: 100 }, "100 data per halaman")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", null, [
                  createVNode("div", { class: "w-full" }, [
                    createVNode(_component_TairoTable, {
                      shape: "rounded",
                      scrollable: false
                    }, {
                      header: withCtx(() => [
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: "",
                          class: "p-4"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_BaseCheckbox, {
                                name: "table-1-main",
                                shape: "rounded",
                                class: "text-primary-500"
                              })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" NAMA PRODUK ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("NILAI")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("HARGA")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("DISKON")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("KATEGORI")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" STOK ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("AKTIF")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        unref(selected).length > 0 ? (openBlock(), createBlock(_component_TairoTableRow, {
                          key: 0,
                          hoverable: false
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_TairoTableCell, {
                              colspan: "8",
                              class: "bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"
                            }, {
                              default: withCtx(() => [
                                createVNode("a", {
                                  href: "#",
                                  class: "outline-none hover:underline focus:underline"
                                }, "Click here to everything")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(products), (product) => {
                          return openBlock(), createBlock(_component_TairoTableRow, {
                            key: product?.id
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode(_component_BaseCheckbox, {
                                      modelValue: unref(selected),
                                      "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                                      value: product?.id,
                                      name: `item-checkbox-${product?.id}`,
                                      shape: "rounded",
                                      class: "text-primary-500"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                spaced: "",
                                style: { "width": "300px" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_router_link, {
                                    to: `/shop-admin/${product?.id}`
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-center" }, [
                                        product?.images ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          src: product?.images[0],
                                          alt: "image description",
                                          style: { "width": "50px", "height": "50px" },
                                          class: "img-produk"
                                        }, null, 8, ["src"])) : createCommentVNode("", true),
                                        createVNode("div", { class: "ms-3 leading-none" }, [
                                          createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(product?.name), 1)
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                light: "",
                                spaced: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "start-text" }, "4.7"),
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png" }),
                                  createVNode("b", null, "12.049"),
                                  createTextVNode(" Penilaian ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TairoTableCell, {
                                light: "",
                                spaced: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "font-bold" }, toDisplayString(formatCurrency(product?.price)), 1),
                                  createVNode("br"),
                                  createVNode("s", null, toDisplayString(formatCurrency(product?.price)), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                spaced: "",
                                class: "capitalize"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "txt-sm-alert3" }, "-")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  product?.product_category_id === 1 ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "txt-sm-alert4"
                                  }, "Minuman & Makanan")) : product?.product_category_id === 2 ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "txt-sm-alert2"
                                  }, "Fashion Pria")) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "font-sans text-sm font-medium" }, toDisplayString(product?.stock), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseSwitchBall, {
                                    modelValue: unref(values).success,
                                    "onUpdate:modelValue": ($event) => unref(values).success = $event,
                                    color: "success"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode(_component_BaseSelect, {
                      modelValue: unref(perPage),
                      "onUpdate:modelValue": ($event) => isRef(perPage) ? perPage.value = $event : null,
                      label: "",
                      classes: {
                        wrapper: "w-full sm:w-40 absolute-page"
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode("option", { value: 10 }, "10 data per halaman"),
                        createVNode("option", { value: 25 }, "25 data per halaman"),
                        createVNode("option", { value: 50 }, "50 data per halaman"),
                        createVNode("option", { value: 100 }, "100 data per halaman")
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop-admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
