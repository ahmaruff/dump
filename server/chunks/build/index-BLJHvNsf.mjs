import { _ as _sfc_main$4, a as _sfc_main$3$1, b as _sfc_main$2$1, c as _sfc_main$1$1, d as _sfc_main$7 } from './TairoTableCell-B3KTDGbV.mjs';
import { _ as _sfc_main$2 } from './BaseInput-BgsoGXSG.mjs';
import { o as useNuxtApp, g as _sfc_main$3, _ as __nuxt_component_0$2, s as _sfc_main$6 } from './server.mjs';
import { _ as __nuxt_component_4 } from './Loading-DgGIgVLA.mjs';
import { _ as _sfc_main$5 } from './BaseCheckbox-BfPzSTfU.mjs';
import { _ as __nuxt_component_11, a as _sfc_main$8 } from './BaseDropdownItem-eyL-Ji7e.mjs';
import { _ as _sfc_main$9 } from './BaseSelect-BU4F-qvb.mjs';
import { u as useJwtAuth } from './composables-DmWjNlaH.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, computed, resolveComponent, withCtx, createVNode, createTextVNode, unref, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-C7rh60UP.mjs';
import wretch from 'wretch';
import './BaseInputHelpText-CmEQTnIf.mjs';
import './input-id-Bz_TYZXb.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TokoAdmin",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useNuxtApp();
    const { user, token } = useJwtAuth();
    const shops = ref([]);
    const userId = user.value.id;
    console.log(userId);
    try {
      const response1 = ([__temp, __restore] = withAsyncContext(() => wretch(`https://api.dev.commerce.waktoo.com:443/api/users/${userId}/shops`).headers({
        Authorization: `Bearer ${token.value}`,
        "Content-Type": "application/json"
      }).get().json()), __temp = await __temp, __restore(), __temp);
      if (response1 && response1.status === "success") {
        shops.value = response1.data.shop;
      } else {
        console.error("Failed to fetch data from shop API:", response1);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
    const selected = ref([]);
    const isAllVisibleSelected = computed(() => {
      return selected.value.length === shops.value.length;
    });
    function toggleAllVisibleSelection() {
      if (isAllVisibleSelected.value) {
        selected.value = [];
      } else {
        selected.value = shops.value.map((shop) => shop.id);
      }
    }
    const value = ref("default");
    ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$4;
      const _component_BaseInput = _sfc_main$2;
      const _component_BaseButton = _sfc_main$3;
      const _component_Icon = __nuxt_component_0$2;
      const _component_Loading = __nuxt_component_4;
      const _component_BasePlaceholderPage = _sfc_main$6;
      const _component_TairoTable = _sfc_main$3$1;
      const _component_TairoTableHeading = _sfc_main$2$1;
      const _component_BaseCheckbox = _sfc_main$5;
      const _component_TairoTableRow = _sfc_main$1$1;
      const _component_TairoTableCell = _sfc_main$7;
      const _component_router_link = resolveComponent("router-link");
      const _component_BaseDropdown = __nuxt_component_11;
      const _component_BaseDropdownItem = _sfc_main$8;
      const _component_BaseSelect = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoContentWrapper, null, {
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: value.value,
              "onUpdate:modelValue": ($event) => value.value = $event,
              icon: "lucide:search",
              placeholder: "Pencarian",
              classes: { wrapper: "w-full" }
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
                modelValue: value.value,
                "onUpdate:modelValue": ($event) => value.value = $event,
                icon: "lucide:search",
                placeholder: "Pencarian",
                classes: { wrapper: "w-full" }
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
              to: `/toko-admin/create`,
              class: "w-full sm:w-42"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Tambah Toko</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, "Tambah Toko")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButton, {
                color: "primary",
                to: `/toko-admin/create`,
                class: "w-full sm:w-42"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "lucide:plus",
                    class: "h-4 w-4"
                  }),
                  createVNode("span", null, "Tambah Toko")
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (shops.value.length <= 0) {
              _push2(ssrRenderComponent(_component_Loading, { type: "spinner" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BasePlaceholderPage, {
                      title: "Toko Masih Kosong",
                      subtitle: "Data di tabel ini masih kosong. Anda bisa menambahkannya menggunakan tombol \u201CTambah Produk."
                    }, {
                      image: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img class="block dark:hidden" src="https://res.cloudinary.com/daraki09f/image/upload/v1714112315/waktoo-commerce/data-empty-table.svg" alt="Placeholder image"${_scopeId3}><img class="hidden dark:block" src="https://res.cloudinary.com/daraki09f/image/upload/v1714112315/waktoo-commerce/data-empty-table.svg" alt="Placeholder image"${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              class: "block dark:hidden",
                              src: "https://res.cloudinary.com/daraki09f/image/upload/v1714112315/waktoo-commerce/data-empty-table.svg",
                              alt: "Placeholder image"
                            }),
                            createVNode("img", {
                              class: "hidden dark:block",
                              src: "https://res.cloudinary.com/daraki09f/image/upload/v1714112315/waktoo-commerce/data-empty-table.svg",
                              alt: "Placeholder image"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BasePlaceholderPage, {
                        title: "Toko Masih Kosong",
                        subtitle: "Data di tabel ini masih kosong. Anda bisa menambahkannya menggunakan tombol \u201CTambah Produk."
                      }, {
                        image: withCtx(() => [
                          createVNode("img", {
                            class: "block dark:hidden",
                            src: "https://res.cloudinary.com/daraki09f/image/upload/v1714112315/waktoo-commerce/data-empty-table.svg",
                            alt: "Placeholder image"
                          }),
                          createVNode("img", {
                            class: "hidden dark:block",
                            src: "https://res.cloudinary.com/daraki09f/image/upload/v1714112315/waktoo-commerce/data-empty-table.svg",
                            alt: "Placeholder image"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<div${_scopeId}>`);
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
                            "model-value": unref(isAllVisibleSelected),
                            indeterminate: selected.value.length > 0 && !unref(isAllVisibleSelected),
                            name: "table-1-main",
                            shape: "rounded",
                            class: "text-primary-500",
                            onClick: toggleAllVisibleSelection
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_BaseCheckbox, {
                                "model-value": unref(isAllVisibleSelected),
                                indeterminate: selected.value.length > 0 && !unref(isAllVisibleSelected),
                                name: "table-1-main",
                                shape: "rounded",
                                class: "text-primary-500",
                                onClick: toggleAllVisibleSelection
                              }, null, 8, ["model-value", "indeterminate"])
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
                          _push4(`NAMA TOKO`);
                        } else {
                          return [
                            createTextVNode("NAMA TOKO")
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
                          _push4(`PENGUNJUNG`);
                        } else {
                          return [
                            createTextVNode("PENGUNJUNG")
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
                          _push4(`PRODUK TERJUAL`);
                        } else {
                          return [
                            createTextVNode("PRODUK TERJUAL")
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
                          _push4(`KELENGKAPAN PROFIL`);
                        } else {
                          return [
                            createTextVNode("KELENGKAPAN PROFIL")
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
                          _push4(`AKSI`);
                        } else {
                          return [
                            createTextVNode("AKSI")
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
                              "model-value": unref(isAllVisibleSelected),
                              indeterminate: selected.value.length > 0 && !unref(isAllVisibleSelected),
                              name: "table-1-main",
                              shape: "rounded",
                              class: "text-primary-500",
                              onClick: toggleAllVisibleSelection
                            }, null, 8, ["model-value", "indeterminate"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("NAMA TOKO")
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
                          createTextVNode("PENGUNJUNG")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("PRODUK TERJUAL")
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
                          createTextVNode("KELENGKAPAN PROFIL")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("AKSI")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (selected.value.length > 0) {
                      _push3(ssrRenderComponent(_component_TairoTableRow, { hoverable: false }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_TairoTableCell, {
                              colspan: "8",
                              class: "bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` You have selected ${ssrInterpolate(selected.value.length)} items of the total ${ssrInterpolate(shops.value.length)} items. <a href="#" class="outline-none hover:underline focus:underline"${_scopeId4}>Click here to everything</a>`);
                                } else {
                                  return [
                                    createTextVNode(" You have selected " + toDisplayString(selected.value.length) + " items of the total " + toDisplayString(shops.value.length) + " items. ", 1),
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
                                  createTextVNode(" You have selected " + toDisplayString(selected.value.length) + " items of the total " + toDisplayString(shops.value.length) + " items. ", 1),
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
                    ssrRenderList(shops.value, (shop) => {
                      _push3(ssrRenderComponent(_component_TairoTableRow, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_TairoTableCell, {
                              spaced: "",
                              class: "border-solid"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex items-center"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_BaseCheckbox, {
                                    modelValue: selected.value,
                                    "onUpdate:modelValue": ($event) => selected.value = $event,
                                    value: shop.id,
                                    name: `item-checkbox-${shop.id}`,
                                    shape: "rounded",
                                    class: "text-primary-500 text-center"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex items-center" }, [
                                      createVNode(_component_BaseCheckbox, {
                                        modelValue: selected.value,
                                        "onUpdate:modelValue": ($event) => selected.value = $event,
                                        value: shop.id,
                                        name: `item-checkbox-${shop.id}`,
                                        shape: "rounded",
                                        class: "text-primary-500 text-center"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TairoTableCell, {
                              spaced: "",
                              class: "tdps",
                              style: { "width": "300px" }
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_router_link, {
                                    to: `/toko-admin/${shop.id}`
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="flex items-center"${_scopeId5}><img${ssrRenderAttr("src", _imports_0)} alt="image description" class="img-produk"${_scopeId5}><div class="ms-3 leading-none"${_scopeId5}><h4 class="font-sans text-sm font-medium dxz-2"${_scopeId5}>${ssrInterpolate(shop.name)}</h4></div></div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "flex items-center" }, [
                                            createVNode("img", {
                                              src: _imports_0,
                                              alt: "image description",
                                              class: "img-produk"
                                            }),
                                            createVNode("div", { class: "ms-3 leading-none" }, [
                                              createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(shop.name), 1)
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
                                      to: `/toko-admin/${shop.id}`
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center" }, [
                                          createVNode("img", {
                                            src: _imports_0,
                                            alt: "image description",
                                            class: "img-produk"
                                          }),
                                          createVNode("div", { class: "ms-3 leading-none" }, [
                                            createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(shop.name), 1)
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
                              spaced: "",
                              class: "tdps"
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
                              spaced: "",
                              class: "tdps"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span class="font-bold"${_scopeId4}>7942</span>`);
                                } else {
                                  return [
                                    createVNode("span", { class: "font-bold" }, "7942")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TairoTableCell, {
                              light: "",
                              spaced: "",
                              class: "tdps"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span class="font-bold"${_scopeId4}>3256</span>`);
                                } else {
                                  return [
                                    createVNode("span", { class: "font-bold" }, "3256")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TairoTableCell, {
                              spaced: "",
                              class: "tdps"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span class="txt-sm-alert4"${_scopeId4}>kategori</span>`);
                                } else {
                                  return [
                                    createVNode("span", { class: "txt-sm-alert4" }, "kategori")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TairoTableCell, {
                              spaced: "",
                              class: "tdps"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<h4 class="font-sans text-sm font-medium"${_scopeId4}>12,5%</h4>`);
                                } else {
                                  return [
                                    createVNode("h4", { class: "font-sans text-sm font-medium" }, "12,5%")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TairoTableCell, {
                              spaced: "",
                              class: "tdps"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_BaseDropdown, {
                                    flavor: "context",
                                    label: "Dropdown",
                                    orientation: "end",
                                    shape: "smooth"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_BaseDropdownItem, {
                                          to: `/toko-admin/edit/${shop.id}`,
                                          title: "Edit",
                                          text: "Edit details",
                                          shape: "smooth"
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_BaseDropdownItem, {
                                            to: `/toko-admin/edit/${shop.id}`,
                                            title: "Edit",
                                            text: "Edit details",
                                            shape: "smooth"
                                          }, null, 8, ["to"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_BaseDropdown, {
                                      flavor: "context",
                                      label: "Dropdown",
                                      orientation: "end",
                                      shape: "smooth"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_BaseDropdownItem, {
                                          to: `/toko-admin/edit/${shop.id}`,
                                          title: "Edit",
                                          text: "Edit details",
                                          shape: "smooth"
                                        }, null, 8, ["to"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_TairoTableCell, {
                                spaced: "",
                                class: "border-solid"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode(_component_BaseCheckbox, {
                                      modelValue: selected.value,
                                      "onUpdate:modelValue": ($event) => selected.value = $event,
                                      value: shop.id,
                                      name: `item-checkbox-${shop.id}`,
                                      shape: "rounded",
                                      class: "text-primary-500 text-center"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                spaced: "",
                                class: "tdps",
                                style: { "width": "300px" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_router_link, {
                                    to: `/toko-admin/${shop.id}`
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-center" }, [
                                        createVNode("img", {
                                          src: _imports_0,
                                          alt: "image description",
                                          class: "img-produk"
                                        }),
                                        createVNode("div", { class: "ms-3 leading-none" }, [
                                          createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(shop.name), 1)
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
                                spaced: "",
                                class: "tdps"
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
                                spaced: "",
                                class: "tdps"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "font-bold" }, "7942")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TairoTableCell, {
                                light: "",
                                spaced: "",
                                class: "tdps"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "font-bold" }, "3256")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TairoTableCell, {
                                spaced: "",
                                class: "tdps"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "txt-sm-alert4" }, "kategori")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TairoTableCell, {
                                spaced: "",
                                class: "tdps"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "font-sans text-sm font-medium" }, "12,5%")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TairoTableCell, {
                                spaced: "",
                                class: "tdps"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseDropdown, {
                                    flavor: "context",
                                    label: "Dropdown",
                                    orientation: "end",
                                    shape: "smooth"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_BaseDropdownItem, {
                                        to: `/toko-admin/edit/${shop.id}`,
                                        title: "Edit",
                                        text: "Edit details",
                                        shape: "smooth"
                                      }, null, 8, ["to"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      selected.value.length > 0 ? (openBlock(), createBlock(_component_TairoTableRow, {
                        key: 0,
                        hoverable: false
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_TairoTableCell, {
                            colspan: "8",
                            class: "bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" You have selected " + toDisplayString(selected.value.length) + " items of the total " + toDisplayString(shops.value.length) + " items. ", 1),
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
                      (openBlock(true), createBlock(Fragment, null, renderList(shops.value, (shop) => {
                        return openBlock(), createBlock(_component_TairoTableRow, {
                          key: shop.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_TairoTableCell, {
                              spaced: "",
                              class: "border-solid"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(_component_BaseCheckbox, {
                                    modelValue: selected.value,
                                    "onUpdate:modelValue": ($event) => selected.value = $event,
                                    value: shop.id,
                                    name: `item-checkbox-${shop.id}`,
                                    shape: "rounded",
                                    class: "text-primary-500 text-center"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, {
                              spaced: "",
                              class: "tdps",
                              style: { "width": "300px" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_router_link, {
                                  to: `/toko-admin/${shop.id}`
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center" }, [
                                      createVNode("img", {
                                        src: _imports_0,
                                        alt: "image description",
                                        class: "img-produk"
                                      }),
                                      createVNode("div", { class: "ms-3 leading-none" }, [
                                        createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(shop.name), 1)
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
                              spaced: "",
                              class: "tdps"
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
                              spaced: "",
                              class: "tdps"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "font-bold" }, "7942")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: "",
                              class: "tdps"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "font-bold" }, "3256")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, {
                              spaced: "",
                              class: "tdps"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "txt-sm-alert4" }, "kategori")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, {
                              spaced: "",
                              class: "tdps"
                            }, {
                              default: withCtx(() => [
                                createVNode("h4", { class: "font-sans text-sm font-medium" }, "12,5%")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, {
                              spaced: "",
                              class: "tdps"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BaseDropdown, {
                                  flavor: "context",
                                  label: "Dropdown",
                                  orientation: "end",
                                  shape: "smooth"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_BaseDropdownItem, {
                                      to: `/toko-admin/edit/${shop.id}`,
                                      title: "Edit",
                                      text: "Edit details",
                                      shape: "smooth"
                                    }, null, 8, ["to"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="w-full flex flex-col md:flex-row justify-between items-center mt-6"${_scopeId}><div class="w-full md:w-52"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseSelect, {
                modelValue: _ctx.per_page,
                "onUpdate:modelValue": ($event) => _ctx.per_page = $event,
                onChange: ($event) => _ctx.handlePerPageChange($event),
                label: ""
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
              _push2(`</div><div class="flex flex-row gap-4 justify-end items-center"${_scopeId}><p${_scopeId}>Halaman ke ${ssrInterpolate(_ctx.page)} dari ${ssrInterpolate(_ctx.totalPages)}</p>`);
              _push2(ssrRenderComponent(_component_BaseButton, {
                variant: "solid",
                color: "light",
                onClick: _ctx.previousPage,
                disabled: _ctx.page <= 1
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Previous`);
                  } else {
                    return [
                      createTextVNode("Previous")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseButton, {
                variant: "solid",
                color: "success",
                onClick: _ctx.nextPage,
                disabled: _ctx.page >= _ctx.totalPages
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Next `);
                  } else {
                    return [
                      createTextVNode("Next ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            }
          } else {
            return [
              shops.value.length <= 0 ? (openBlock(), createBlock(_component_Loading, {
                key: 0,
                type: "spinner"
              }, {
                default: withCtx(() => [
                  createVNode(_component_BasePlaceholderPage, {
                    title: "Toko Masih Kosong",
                    subtitle: "Data di tabel ini masih kosong. Anda bisa menambahkannya menggunakan tombol \u201CTambah Produk."
                  }, {
                    image: withCtx(() => [
                      createVNode("img", {
                        class: "block dark:hidden",
                        src: "https://res.cloudinary.com/daraki09f/image/upload/v1714112315/waktoo-commerce/data-empty-table.svg",
                        alt: "Placeholder image"
                      }),
                      createVNode("img", {
                        class: "hidden dark:block",
                        src: "https://res.cloudinary.com/daraki09f/image/upload/v1714112315/waktoo-commerce/data-empty-table.svg",
                        alt: "Placeholder image"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : (openBlock(), createBlock("div", { key: 1 }, [
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
                            "model-value": unref(isAllVisibleSelected),
                            indeterminate: selected.value.length > 0 && !unref(isAllVisibleSelected),
                            name: "table-1-main",
                            shape: "rounded",
                            class: "text-primary-500",
                            onClick: toggleAllVisibleSelection
                          }, null, 8, ["model-value", "indeterminate"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("NAMA TOKO")
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
                        createTextVNode("PENGUNJUNG")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("PRODUK TERJUAL")
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
                        createTextVNode("KELENGKAPAN PROFIL")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("AKSI")
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    selected.value.length > 0 ? (openBlock(), createBlock(_component_TairoTableRow, {
                      key: 0,
                      hoverable: false
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_TairoTableCell, {
                          colspan: "8",
                          class: "bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" You have selected " + toDisplayString(selected.value.length) + " items of the total " + toDisplayString(shops.value.length) + " items. ", 1),
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
                    (openBlock(true), createBlock(Fragment, null, renderList(shops.value, (shop) => {
                      return openBlock(), createBlock(_component_TairoTableRow, {
                        key: shop.id
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_TairoTableCell, {
                            spaced: "",
                            class: "border-solid"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(_component_BaseCheckbox, {
                                  modelValue: selected.value,
                                  "onUpdate:modelValue": ($event) => selected.value = $event,
                                  value: shop.id,
                                  name: `item-checkbox-${shop.id}`,
                                  shape: "rounded",
                                  class: "text-primary-500 text-center"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TairoTableCell, {
                            spaced: "",
                            class: "tdps",
                            style: { "width": "300px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_router_link, {
                                to: `/toko-admin/${shop.id}`
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("img", {
                                      src: _imports_0,
                                      alt: "image description",
                                      class: "img-produk"
                                    }),
                                    createVNode("div", { class: "ms-3 leading-none" }, [
                                      createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(shop.name), 1)
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
                            spaced: "",
                            class: "tdps"
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
                            spaced: "",
                            class: "tdps"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "font-bold" }, "7942")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TairoTableCell, {
                            light: "",
                            spaced: "",
                            class: "tdps"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "font-bold" }, "3256")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TairoTableCell, {
                            spaced: "",
                            class: "tdps"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "txt-sm-alert4" }, "kategori")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TairoTableCell, {
                            spaced: "",
                            class: "tdps"
                          }, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "font-sans text-sm font-medium" }, "12,5%")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TairoTableCell, {
                            spaced: "",
                            class: "tdps"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BaseDropdown, {
                                flavor: "context",
                                label: "Dropdown",
                                orientation: "end",
                                shape: "smooth"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseDropdownItem, {
                                    to: `/toko-admin/edit/${shop.id}`,
                                    title: "Edit",
                                    text: "Edit details",
                                    shape: "smooth"
                                  }, null, 8, ["to"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "w-full flex flex-col md:flex-row justify-between items-center mt-6" }, [
                  createVNode("div", { class: "w-full md:w-52" }, [
                    createVNode(_component_BaseSelect, {
                      modelValue: _ctx.per_page,
                      "onUpdate:modelValue": ($event) => _ctx.per_page = $event,
                      onChange: ($event) => _ctx.handlePerPageChange($event),
                      label: ""
                    }, {
                      default: withCtx(() => [
                        createVNode("option", { value: 10 }, "10 data per halaman"),
                        createVNode("option", { value: 25 }, "25 data per halaman"),
                        createVNode("option", { value: 50 }, "50 data per halaman"),
                        createVNode("option", { value: 100 }, "100 data per halaman")
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                  ]),
                  createVNode("div", { class: "flex flex-row gap-4 justify-end items-center" }, [
                    createVNode("p", null, "Halaman ke " + toDisplayString(_ctx.page) + " dari " + toDisplayString(_ctx.totalPages), 1),
                    createVNode(_component_BaseButton, {
                      variant: "solid",
                      color: "light",
                      onClick: _ctx.previousPage,
                      disabled: _ctx.page <= 1
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Previous")
                      ]),
                      _: 1
                    }, 8, ["onClick", "disabled"]),
                    createVNode(_component_BaseButton, {
                      variant: "solid",
                      color: "success",
                      onClick: _ctx.nextPage,
                      disabled: _ctx.page >= _ctx.totalPages
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Next ")
                      ]),
                      _: 1
                    }, 8, ["onClick", "disabled"])
                  ])
                ])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/toko-admin/TokoAdmin.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TokoAdmin = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TokoAdmin, { class: "pe-4 xl:pe-10" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/toko-admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
