import { _ as _sfc_main$5 } from './BaseBreadcrumb-cZDskCmn.mjs';
import { m as useRoute, o as useNuxtApp, c as _sfc_main$d, _ as __nuxt_component_0$2, a as _sfc_main$7, d as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_11, a as _sfc_main$6 } from './BaseDropdownItem-eyL-Ji7e.mjs';
import { _ as __nuxt_component_5 } from './ProdukList-pFVACWQ9.mjs';
import { useSSRContext, defineComponent, mergeModels, useModel, ref, mergeProps, unref, resolveComponent, withCtx, createVNode, toDisplayString, withAsyncContext, createTextVNode } from 'vue';
import { u as useNinjaId } from './input-id-Bz_TYZXb.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrLooseEqual, ssrGetDynamicModelProps, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$8 } from './BaseButtonAction-CeDg9f4a.mjs';
import { u as useJwtAuth } from './composables-DmWjNlaH.mjs';
import { _ as _imports_0 } from './virtual_public-C7rh60UP.mjs';
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
import './TairoTableCell-B3KTDGbV.mjs';
import './BaseInput-BgsoGXSG.mjs';
import './BaseInputHelpText-CmEQTnIf.mjs';
import './TairoModal-Bw9szyQw.mjs';
import './BaseSelect-BU4F-qvb.mjs';
import './BaseButtonIcon-BwaQtzFl.mjs';
import './BaseRadio-Bcx0iNXD.mjs';
import './BaseSwitchThin-Cj-cBPdI.mjs';
import './Loading-DgGIgVLA.mjs';
import './BaseCheckbox-BfPzSTfU.mjs';
import './toaster-B1V8z_xL.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseRadioHeadless",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    value: { default: void 0 },
    id: { default: void 0 },
    name: { default: void 0 },
    label: { default: void 0 }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const [modelValue] = useModel(__props, "modelValue");
    const inputRef = ref();
    const id = useNinjaId(() => props.id);
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: inputRef,
      /**
       * The internal id of the radio input.
       */
      id
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group/nui-radio-headless relative" }, _attrs))}>`);
      if (_ctx.label) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="text-muted-400 mb-1 inline-block cursor-pointer select-none font-sans text-sm">${ssrInterpolate(props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative"><input${ssrRenderAttrs((_temp0 = mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        checked: ssrLooseEqual(unref(modelValue), props.value)
      }, _ctx.$attrs, {
        type: "radio",
        value: props.value,
        name: props.name,
        class: "peer absolute inset-0 z-20 size-full cursor-pointer appearance-none"
      }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(modelValue)))))}>`);
      ssrRenderSlot(_ctx.$slots, "default", { value: unref(modelValue) }, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.2.1_nuxt@3.12.3/node_modules/@shuriken-ui/nuxt/components/form/BaseRadioHeadless.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BankList",
  __ssrInlineRender: true,
  setup(__props) {
    const banks = ref([]);
    const selectedValue = ref(null);
    ref(false);
    ref(null);
    const route = useRoute();
    const shopId = route.params.id;
    const bankImages = {
      "Bank Mandiri": "https://res.cloudinary.com/daraki09f/image/upload/v1714691840/waktoo-commerce/mandiri.png",
      "Bank Syariah Mandiri": "https://res.cloudinary.com/daraki09f/image/upload/v1719304395/waktoo-commerce/bank_mandiri_syariah.png",
      "Bank Rakyat Indonesia (BRI)": "https://res.cloudinary.com/daraki09f/image/upload/v1714691833/waktoo-commerce/BRI.png",
      "Bank BRI Syariah": "https://res.cloudinary.com/daraki09f/image/upload/v1719383257/waktoo-commerce/bri_syariah.png",
      "Bank Central Asia (BCA)": "https://res.cloudinary.com/daraki09f/image/upload/v1714691838/waktoo-commerce/BCA.png",
      "Bank BCA Syariah": "https://res.cloudinary.com/daraki09f/image/upload/v1719383322/waktoo-commerce/bca-syariah.png",
      "Bank Negara Indonesia (BNI)": "https://res.cloudinary.com/daraki09f/image/upload/v1714691834/waktoo-commerce/BNI.png",
      "Bank BNI Syariah": "https://res.cloudinary.com/daraki09f/image/upload/v1719383257/waktoo-commerce/bni_syariah.png",
      "Bank CIMB Niaga": "https://res.cloudinary.com/daraki09f/image/upload/v1714691517/waktoo-commerce/CIMB.png",
      "Bank Tabungan Negara (BTN)": "https://res.cloudinary.com/daraki09f/image/upload/v1714691516/waktoo-commerce/BTN.png",
      "Bank Permata": "https://res.cloudinary.com/daraki09f/image/upload/v1719383321/waktoo-commerce/permata.png",
      "Bank Panin": "https://res.cloudinary.com/daraki09f/image/upload/v1719383613/waktoo-commerce/Panin_Bank_-_Koleksilogo.png",
      "Bank OCBC NISP": "https://res.cloudinary.com/daraki09f/image/upload/v1719383301/waktoo-commerce/ocbc.png",
      "Bank Danamon": "https://res.cloudinary.com/daraki09f/image/upload/v1719383257/waktoo-commerce/danamon.png",
      "Bank Maybank Indonesia": "https://res.cloudinary.com/daraki09f/image/upload/v1719383257/waktoo-commerce/maybank.png",
      "Bank Mega": "https://res.cloudinary.com/daraki09f/image/upload/v1719383267/waktoo-commerce/mega.png",
      "Bank Sinarmas": "https://res.cloudinary.com/daraki09f/image/upload/v1719305292/waktoo-commerce/sinarmas.png",
      "Bank BTPN": "https://res.cloudinary.com/daraki09f/image/upload/v1719305293/waktoo-commerce/btpn.jpg",
      "Bank Bukopin": "https://res.cloudinary.com/daraki09f/image/upload/v1719305293/waktoo-commerce/bukopin.png",
      "Bank Muamalat": "https://res.cloudinary.com/daraki09f/image/upload/v1719383283/waktoo-commerce/mualamat.jpg"
    };
    const getBankImageUrl = (bankName) => {
      return bankImages[bankName] || "https://default-image.url";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_BaseRadioHeadless = _sfc_main$4;
      const _component_BaseCard = _sfc_main$d;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-12 flex w-full items-center justify-between" }, _attrs))} data-v-3a00479c>`);
      if (banks.value.length <= 0) {
        _push(`<div class="card-keranjang w-full" data-v-3a00479c><h1 class="leading-1 txt-filter mx-auto text-center" data-v-3a00479c>Akun Bank ini masih kosong</h1><hr class="horizontal-hr2" data-v-3a00479c><div class="grid gap-6 sm:grid-cols-3" data-v-3a00479c>`);
        _push(ssrRenderComponent(_component_router_link, {
          to: `/toko-admin/bank/${unref(shopId)}`,
          class: "w-full sm:w-42"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseRadioHeadless, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseCard, {
                      rounded: "lg",
                      class: "bg-orange-400 peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "lucide:plus",
                            class: "h-8 w-8"
                          }, null, _parent4, _scopeId3));
                          _push4(`<span data-v-3a00479c${_scopeId3}>Tambah Akun Bank</span>`);
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "lucide:plus",
                              class: "h-8 w-8"
                            }),
                            createVNode("span", null, "Tambah Akun Bank")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseCard, {
                        rounded: "lg",
                        class: "bg-orange-400 peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:plus",
                            class: "h-8 w-8"
                          }),
                          createVNode("span", null, "Tambah Akun Bank")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseRadioHeadless, null, {
                  default: withCtx(() => [
                    createVNode(_component_BaseCard, {
                      rounded: "lg",
                      class: "bg-orange-400 peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "h-8 w-8"
                        }),
                        createVNode("span", null, "Tambah Akun Bank")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="card-keranjang w-full" data-v-3a00479c><div class="grid gap-6 sm:grid-cols-3" data-v-3a00479c><!--[-->`);
        ssrRenderList(banks.value, (bank) => {
          _push(ssrRenderComponent(_component_BaseRadioHeadless, {
            modelValue: selectedValue.value,
            "onUpdate:modelValue": ($event) => selectedValue.value = $event,
            name: "radio_custom",
            value: bank,
            key: bank.account_number
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BaseCard, {
                  rounded: "lg",
                  class: "peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex flex-col" data-v-3a00479c${_scopeId2}><img${ssrRenderAttr("src", getBankImageUrl(bank.bank_name))} class="img-mbs" data-v-3a00479c${_scopeId2}><span class="teksmbs margin-left-80" data-v-3a00479c${_scopeId2}>${ssrInterpolate(bank.bank_name)}</span><span class="teksmbs margin-left-80" data-v-3a00479c${_scopeId2}>${ssrInterpolate(bank.account_number)}</span></div><div class="child absolute end-2 top-3 opacity-0" data-v-3a00479c${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:check-circle-duotone",
                        class: "text-success-500 size-7"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("img", {
                            src: getBankImageUrl(bank.bank_name),
                            class: "img-mbs"
                          }, null, 8, ["src"]),
                          createVNode("span", { class: "teksmbs margin-left-80" }, toDisplayString(bank.bank_name), 1),
                          createVNode("span", { class: "teksmbs margin-left-80" }, toDisplayString(bank.account_number), 1)
                        ]),
                        createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                          createVNode(_component_Icon, {
                            name: "ph:check-circle-duotone",
                            class: "text-success-500 size-7"
                          })
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_BaseCard, {
                    rounded: "lg",
                    class: "peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("img", {
                          src: getBankImageUrl(bank.bank_name),
                          class: "img-mbs"
                        }, null, 8, ["src"]),
                        createVNode("span", { class: "teksmbs margin-left-80" }, toDisplayString(bank.bank_name), 1),
                        createVNode("span", { class: "teksmbs margin-left-80" }, toDisplayString(bank.account_number), 1)
                      ]),
                      createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                        createVNode(_component_Icon, {
                          name: "ph:check-circle-duotone",
                          class: "text-success-500 size-7"
                        })
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_router_link, {
          to: `/toko-admin/bank/${unref(shopId)}`,
          class: "w-full sm:w-42"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseRadioHeadless, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseCard, {
                      rounded: "lg",
                      class: "bg-orange-400 peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "lucide:plus",
                            class: "h-8 w-8"
                          }, null, _parent4, _scopeId3));
                          _push4(`<span data-v-3a00479c${_scopeId3}>Tambah Akun Bank</span>`);
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "lucide:plus",
                              class: "h-8 w-8"
                            }),
                            createVNode("span", null, "Tambah Akun Bank")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseCard, {
                        rounded: "lg",
                        class: "bg-orange-400 peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:plus",
                            class: "h-8 w-8"
                          }),
                          createVNode("span", null, "Tambah Akun Bank")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseRadioHeadless, null, {
                  default: withCtx(() => [
                    createVNode(_component_BaseCard, {
                      rounded: "lg",
                      class: "bg-orange-400 peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "h-8 w-8"
                        }),
                        createVNode("span", null, "Tambah Akun Bank")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/toko-admin/BankList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3a00479c"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LayananList",
  __ssrInlineRender: true,
  setup(__props) {
    const availableCouriers = ref([]);
    const selectedCourier = ref(null);
    ref(false);
    ref(null);
    const route = useRoute();
    const shopId = route.params.id;
    const courierImages = {
      "pos": "https://res.cloudinary.com/daraki09f/image/upload/v1714105599/waktoo-commerce/custome-2.png",
      "wahana": "https://res.cloudinary.com/daraki09f/image/upload/v1719303270/waktoo-commerce/wahana_png.jpg",
      "jnt": "https://res.cloudinary.com/daraki09f/image/upload/v1714689800/waktoo-commerce/image_16.png",
      "sap": "https://res.cloudinary.com/daraki09f/image/upload/v1714689793/waktoo-commerce/image_19.png",
      "sicepat": "https://res.cloudinary.com/daraki09f/image/upload/v1714689796/waktoo-commerce/image_17.png",
      "jet": "https://res.cloudinary.com/daraki09f/image/upload/v1719303377/waktoo-commerce/jet.png",
      "dse": "https://res.cloudinary.com/daraki09f/image/upload/v1719304318/waktoo-commerce/dse.jpg",
      "first": "https://res.cloudinary.com/daraki09f/image/upload/v1719303651/waktoo-commerce/first_kurir.jpg",
      "ninja": "https://res.cloudinary.com/daraki09f/image/upload/v1719303903/waktoo-commerce/ninja.png",
      "lion": "https://res.cloudinary.com/daraki09f/image/upload/v1719303903/waktoo-commerce/lion.png",
      "idl": "https://res.cloudinary.com/daraki09f/image/upload/v1719304146/waktoo-commerce/idl.jpg",
      "rex": "https://res.cloudinary.com/daraki09f/image/upload/v1719304076/waktoo-commerce/rex.png",
      "ide": "https://res.cloudinary.com/daraki09f/image/upload/v1719303908/waktoo-commerce/ide.png",
      "sentral": "https://res.cloudinary.com/daraki09f/image/upload/v1719303903/waktoo-commerce/sentral.png",
      "anteraja": "https://res.cloudinary.com/daraki09f/image/upload/v1714689781/waktoo-commerce/image_18.png",
      "jtl": "https://res.cloudinary.com/daraki09f/image/upload/v1719303908/waktoo-commerce/jtl.png",
      "star": "https://res.cloudinary.com/daraki09f/image/upload/v1719303905/waktoo-commerce/star.jpg",
      "jne": "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_14.png",
      "tiki": "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_15.png"
      // Tambahkan peta nama kurir dan URL gambar lainnya
    };
    const getCourierImageUrl = (courierName) => {
      return courierImages[courierName] || "https://default-courier-image.url";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_BaseRadioHeadless = _sfc_main$4;
      const _component_BaseCard = _sfc_main$d;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-12 flex w-full items-center justify-between" }, _attrs))} data-v-79a7afe0>`);
      if (availableCouriers.value.length <= 0) {
        _push(`<div class="card-keranjang w-full" data-v-79a7afe0><h1 class="leading-1 txt-filter mx-auto text-center" data-v-79a7afe0>Kurir ini masih kosong</h1><hr class="horizontal-hr2" data-v-79a7afe0><div class="grid gap-6 sm:grid-cols-3" data-v-79a7afe0>`);
        _push(ssrRenderComponent(_component_router_link, {
          to: `/toko-admin/jasa/${unref(shopId)}`,
          class: "w-full sm:w-42"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseRadioHeadless, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseCard, {
                      rounded: "lg",
                      class: "bg-orange-400 peer-checked:!border-success-500 relative border-2 p-4 peer-checked:[&_.child]:!opacity-100 height-auto"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "lucide:plus",
                            class: "h-8 w-8"
                          }, null, _parent4, _scopeId3));
                          _push4(`<span data-v-79a7afe0${_scopeId3}>Tambah Layanan Pengiriman</span>`);
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "lucide:plus",
                              class: "h-8 w-8"
                            }),
                            createVNode("span", null, "Tambah Layanan Pengiriman")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseCard, {
                        rounded: "lg",
                        class: "bg-orange-400 peer-checked:!border-success-500 relative border-2 p-4 peer-checked:[&_.child]:!opacity-100 height-auto"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:plus",
                            class: "h-8 w-8"
                          }),
                          createVNode("span", null, "Tambah Layanan Pengiriman")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseRadioHeadless, null, {
                  default: withCtx(() => [
                    createVNode(_component_BaseCard, {
                      rounded: "lg",
                      class: "bg-orange-400 peer-checked:!border-success-500 relative border-2 p-4 peer-checked:[&_.child]:!opacity-100 height-auto"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "h-8 w-8"
                        }),
                        createVNode("span", null, "Tambah Layanan Pengiriman")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="card-keranjang w-full" data-v-79a7afe0><div class="txt-title-3" data-v-79a7afe0>Kurir Tersedia</div><hr class="horizontal-hr2" data-v-79a7afe0><div class="grid gap-6 sm:grid-cols-3" data-v-79a7afe0><!--[-->`);
        ssrRenderList(availableCouriers.value, (courier) => {
          _push(ssrRenderComponent(_component_BaseRadioHeadless, {
            modelValue: selectedCourier.value,
            "onUpdate:modelValue": ($event) => selectedCourier.value = $event,
            name: "radio_courier",
            value: courier,
            key: courier.id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BaseCard, {
                  rounded: "lg",
                  class: "peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex flex-col" data-v-79a7afe0${_scopeId2}><img${ssrRenderAttr("src", getCourierImageUrl(courier))} class="img-mbs" data-v-79a7afe0${_scopeId2}><span class="teksmbs margin-left-80" data-v-79a7afe0${_scopeId2}>${ssrInterpolate(courier)}</span></div><div class="child absolute end-2 top-3 opacity-0" data-v-79a7afe0${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:check-circle-duotone",
                        class: "text-success-500 size-7"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("img", {
                            src: getCourierImageUrl(courier),
                            class: "img-mbs"
                          }, null, 8, ["src"]),
                          createVNode("span", { class: "teksmbs margin-left-80" }, toDisplayString(courier), 1)
                        ]),
                        createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                          createVNode(_component_Icon, {
                            name: "ph:check-circle-duotone",
                            class: "text-success-500 size-7"
                          })
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_BaseCard, {
                    rounded: "lg",
                    class: "peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("img", {
                          src: getCourierImageUrl(courier),
                          class: "img-mbs"
                        }, null, 8, ["src"]),
                        createVNode("span", { class: "teksmbs margin-left-80" }, toDisplayString(courier), 1)
                      ]),
                      createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                        createVNode(_component_Icon, {
                          name: "ph:check-circle-duotone",
                          class: "text-success-500 size-7"
                        })
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_router_link, {
          to: `/toko-admin/jasa/${unref(shopId)}`,
          class: "w-full sm:w-42"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseRadioHeadless, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseCard, {
                      rounded: "lg",
                      class: "bg-orange-400 peer-checked:!border-success-500 relative border-2 p-4 peer-checked:[&_.child]:!opacity-100 height-auto"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "lucide:plus",
                            class: "h-8 w-8"
                          }, null, _parent4, _scopeId3));
                          _push4(`<span data-v-79a7afe0${_scopeId3}>Tambah Layanan Pengiriman</span>`);
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "lucide:plus",
                              class: "h-8 w-8"
                            }),
                            createVNode("span", null, "Tambah Layanan Pengiriman")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseCard, {
                        rounded: "lg",
                        class: "bg-orange-400 peer-checked:!border-success-500 relative border-2 p-4 peer-checked:[&_.child]:!opacity-100 height-auto"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:plus",
                            class: "h-8 w-8"
                          }),
                          createVNode("span", null, "Tambah Layanan Pengiriman")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseRadioHeadless, null, {
                  default: withCtx(() => [
                    createVNode(_component_BaseCard, {
                      rounded: "lg",
                      class: "bg-orange-400 peer-checked:!border-success-500 relative border-2 p-4 peer-checked:[&_.child]:!opacity-100 height-auto"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "h-8 w-8"
                        }),
                        createVNode("span", null, "Tambah Layanan Pengiriman")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/toko-admin/LayananList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-79a7afe0"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TokoDetail",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    useNuxtApp();
    const { user, token } = useJwtAuth();
    const activeTipe = ref("tipe1");
    const activeTab = ref("tab-1");
    const shop = ref();
    const subdistrict = ref();
    ref();
    const loading = ref(false);
    const error = ref(null);
    ref([]);
    ref([]);
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
      if (response && (response == null ? void 0 : response.status) === "success") {
        shop.value = (_a = response.data) == null ? void 0 : _a.shop;
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
    const demoBreadcrumbOne = [
      {
        label: "Home",
        hideLabel: false,
        icon: "lucide:home",
        to: "/toko-admin"
      },
      {
        label: "Detail Toko",
        hideLabel: false,
        to: "#"
        // Use backticks for template literals
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d, _e, _f;
      const _component_BaseBreadcrumb = _sfc_main$5;
      const _component_Icon = __nuxt_component_0$2;
      const _component_BaseHeading = _sfc_main$7;
      const _component_BaseDropdown = __nuxt_component_11;
      const _component_BaseDropdownItem = _sfc_main$6;
      const _component_ProdukList = __nuxt_component_5;
      const _component_BankList = __nuxt_component_6;
      const _component_LayananList = __nuxt_component_7;
      const _component_BaseButtonAction = _sfc_main$8;
      const _component_BaseCard = _sfc_main$d;
      const _component_AddonApexcharts = resolveComponent("AddonApexcharts");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d4bd7435><div class="ltablet:h-[410px] dark:bg-muted-800 absolute start-0 top-0 h-[590px] w-full bg-white lg:h-[410px]" data-v-d4bd7435></div><div class="ltablet:flex-column relative flex w-full flex-col gap-6 lg:flex-column" data-v-d4bd7435>`);
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
      _push(`</div><div class="ltablet:h-64 ltablet:flex-row relative flex h-[460px] w-full flex-col lg:h-64 lg:flex-row" data-v-d4bd7435><div class="ltablet:flex-row relative flex w-full flex-col gap-6 lg:flex-row" data-v-d4bd7435><img${ssrRenderAttr("src", _imports_0)} class="img-detail-produk" alt="image description" data-v-d4bd7435><div class="ltablet:text-left text-center lg:text-left" data-v-d4bd7435>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "xl",
        weight: "semibold",
        class: "ltablet:justify-start flex items-center justify-center gap-2 lg:justify-start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2;
          if (_push2) {
            _push2(`<span class="text-muted-800 dark:text-white" data-v-d4bd7435${_scopeId}>${ssrInterpolate((_a3 = shop.value) == null ? void 0 : _a3.name)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-800 dark:text-white" }, toDisplayString((_b2 = shop.value) == null ? void 0 : _b2.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mb-6 flex items-center gap-x-6" data-v-d4bd7435><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row" data-v-d4bd7435><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base" data-v-d4bd7435> Pengunjung: </span><span class="text-muted-800 dark:text-muted-100 font-semibold" data-v-d4bd7435> 1512 </span></div><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row" data-v-d4bd7435><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base" data-v-d4bd7435> Barang Terjual: </span><span class="text-muted-800 dark:text-muted-100 font-semibold" data-v-d4bd7435> 92 </span></div><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row" data-v-d4bd7435><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base" data-v-d4bd7435> Nilai: </span><span class="text-muted-800 dark:text-muted-100 font-semibold" data-v-d4bd7435><span class="start-text" data-v-d4bd7435>4.7</span><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png" data-v-d4bd7435></span></div></div></div></div><div class="ltablet:justify-start ltablet:ms-auto ltablet:mt-0 mt-4 flex shrink-0 justify-center lg:ms-auto lg:mt-0 lg:justify-start" data-v-d4bd7435>`);
      _push(ssrRenderComponent(_component_BaseDropdown, {
        flavor: "context",
        label: "Dropdown",
        orientation: "end",
        shape: "smooth"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2, _c2, _d2, _e2, _f2, _g, _h;
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseDropdownItem, {
              to: "#",
              title: "User",
              text: "View details",
              shape: "smooth"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseDropdownItem, {
              to: `/toko-admin/edit/${(_a3 = shop.value) == null ? void 0 : _a3.id}`,
              title: "Edit",
              text: "Edit details",
              shape: "smooth"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseDropdownItem, {
              to: `/toko-admin/kategori/${(_b2 = shop.value) == null ? void 0 : _b2.id}`,
              title: "Kategori",
              text: "Kategori",
              shape: "smooth"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseDropdownItem, {
              to: `/toko-admin/jasa/${(_c2 = shop.value) == null ? void 0 : _c2.id}`,
              title: "Jasa Pengiriman",
              text: "Jasa Pengiriman",
              shape: "smooth"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseDropdownItem, {
              to: `/toko-admin/bank/${(_d2 = shop.value) == null ? void 0 : _d2.id}`,
              title: "Akun Bank",
              text: "Akun Bank",
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
                to: `/toko-admin/edit/${(_e2 = shop.value) == null ? void 0 : _e2.id}`,
                title: "Edit",
                text: "Edit details",
                shape: "smooth"
              }, null, 8, ["to"]),
              createVNode(_component_BaseDropdownItem, {
                to: `/toko-admin/kategori/${(_f2 = shop.value) == null ? void 0 : _f2.id}`,
                title: "Kategori",
                text: "Kategori",
                shape: "smooth"
              }, null, 8, ["to"]),
              createVNode(_component_BaseDropdownItem, {
                to: `/toko-admin/jasa/${(_g = shop.value) == null ? void 0 : _g.id}`,
                title: "Jasa Pengiriman",
                text: "Jasa Pengiriman",
                shape: "smooth"
              }, null, 8, ["to"]),
              createVNode(_component_BaseDropdownItem, {
                to: `/toko-admin/bank/${(_h = shop.value) == null ? void 0 : _h.id}`,
                title: "Akun Bank",
                text: "Akun Bank",
                shape: "smooth"
              }, null, 8, ["to"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full absolute bottom-[-5px] start-0 flex items-end gap-2 mb-270 grid-slls" data-v-d4bd7435><button type="button" class="${ssrRenderClass([
        activeTab.value === "tab-1" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
      ])}" data-v-d4bd7435><span data-v-d4bd7435><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718182044/waktoo-commerce/icon-desc-1.svg" class="img-desc" data-v-d4bd7435> Detail Toko</span></button><button type="button" class="${ssrRenderClass([
        activeTab.value === "tab-2" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
      ])}" data-v-d4bd7435><span data-v-d4bd7435><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718182044/waktoo-commerce/icon-desc-2.svg" class="img-desc" data-v-d4bd7435> Produk</span></button><button type="button" class="${ssrRenderClass([
        activeTab.value === "tab-3" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
      ])}" data-v-d4bd7435><span data-v-d4bd7435><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718182044/waktoo-commerce/icon-desc-3.svg" class="img-desc" data-v-d4bd7435> Akun Bank</span></button><button type="button" class="${ssrRenderClass([
        activeTab.value === "tab-4" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
      ])}" data-v-d4bd7435><span data-v-d4bd7435><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718182044/waktoo-commerce/icon-desc-3.svg" class="img-desc" data-v-d4bd7435>Layanan Pengiriman</span></button><div class="shrink-0 right-float relative-mobile" data-v-d4bd7435><button type="button" class="${ssrRenderClass([
        activeTab.value === "tab-5" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
      ])}" data-v-d4bd7435><span data-v-d4bd7435><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718182044/waktoo-commerce/icon-desc-4.svg" class="img-desc" data-v-d4bd7435> Performa</span></button><button type="button" class="${ssrRenderClass([
        activeTab.value === "tab-6" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-500",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm text-tabs dsps"
      ])}" data-v-d4bd7435><span data-v-d4bd7435><img src="https://res.cloudinary.com/daraki09f/image/upload/v1718182044/waktoo-commerce/icon-desc-5.svg" class="img-desc" data-v-d4bd7435> Nilai &amp; Ulasan</span></button></div></div></div><div class="w-full" data-v-d4bd7435>`);
      if (activeTab.value === "tab-1") {
        _push(`<div class="mt-12" data-v-d4bd7435><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-d4bd7435><div data-v-d4bd7435><div class="title-m-1" data-v-d4bd7435>Informasi</div><div class="title-m-2" data-v-d4bd7435>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div data-v-d4bd7435><div class="title-m-1" data-v-d4bd7435>Alamat</div><div class="title-m-2" data-v-d4bd7435>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div></div><br data-v-d4bd7435><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-d4bd7435><div class="card-detail-commerce p-2" data-v-d4bd7435><div class="title-m-1" data-v-d4bd7435>Kontak Toko</div><table class="w-full" data-v-d4bd7435><tr data-v-d4bd7435><td class="w-2/6" data-v-d4bd7435><span class="ml-px txt-desc text-muted-500" data-v-d4bd7435>Email</span></td><td class="w-4/6" data-v-d4bd7435><span class="txt-desc" data-v-d4bd7435>: ${ssrInterpolate((_a2 = unref(user)) == null ? void 0 : _a2.email)}</span></td></tr><tr data-v-d4bd7435><td class="w-2/6" data-v-d4bd7435><span class="ml-px txt-desc text-muted-500" data-v-d4bd7435>Telepon</span></td><td class="w-4/6" data-v-d4bd7435><span class="txt-desc" data-v-d4bd7435>: ${ssrInterpolate((_b = shop.value) == null ? void 0 : _b.phone)}</span></td></tr><tr data-v-d4bd7435><td data-v-d4bd7435><span class="txt-desc text-muted-500" data-v-d4bd7435>Website</span></td><td class="w-4/6" data-v-d4bd7435><span class="txt-desc" data-v-d4bd7435>: -</span></td></tr><tr data-v-d4bd7435><td data-v-d4bd7435><span class="txt-desc text-muted-500" data-v-d4bd7435>Instagram</span></td><td class="w-4/6" data-v-d4bd7435><span class="txt-desc" data-v-d4bd7435>: -</span></td></tr><tr data-v-d4bd7435><td data-v-d4bd7435><span class="txt-desc text-muted-500" data-v-d4bd7435>Tiktok</span></td><td class="w-4/6" data-v-d4bd7435><span class="txt-desc" data-v-d4bd7435>: -</span></td></tr><tr data-v-d4bd7435><td data-v-d4bd7435><span class="txt-desc text-muted-500" data-v-d4bd7435>Facebook</span></td><td class="w-4/6" data-v-d4bd7435><span class="txt-desc" data-v-d4bd7435>: -</span></td></tr></table></div><div class="card-detail-commerce1 p-2" data-v-d4bd7435><div class="title-m-1" data-v-d4bd7435>Alamat</div><table class="w-full" data-v-d4bd7435><tr data-v-d4bd7435><td class="w-2/6" data-v-d4bd7435><span class="ml-px txt-desc text-muted-500" data-v-d4bd7435>Provinsi</span></td><td class="w-4/6" data-v-d4bd7435><span class="txt-desc" data-v-d4bd7435>: ${ssrInterpolate((_c = subdistrict.value) == null ? void 0 : _c.provice_name)}</span></td></tr><tr data-v-d4bd7435><td class="w-2/6" data-v-d4bd7435><span class="ml-px txt-desc text-muted-500" data-v-d4bd7435>Kota / Kabupaten</span></td><td class="w-4/6" data-v-d4bd7435><span class="txt-desc" data-v-d4bd7435>: ${ssrInterpolate((_d = subdistrict.value) == null ? void 0 : _d.city_name)}</span></td></tr><tr data-v-d4bd7435><td class="w-2/6" data-v-d4bd7435><span class="ml-px txt-desc text-muted-500" data-v-d4bd7435>Kecamatan</span></td><td class="w-4/6" data-v-d4bd7435><span class="txt-desc" data-v-d4bd7435>: ${ssrInterpolate((_e = subdistrict.value) == null ? void 0 : _e.subdistrict_name)}</span></td></tr><tr data-v-d4bd7435><td class="w-2/6" data-v-d4bd7435><span class="ml-px txt-desc text-muted-500" data-v-d4bd7435>Kelurahan</span></td><td class="w-4/6" data-v-d4bd7435><span class="txt-desc" data-v-d4bd7435>: -</span></td></tr><tr data-v-d4bd7435><td class="w-2/6" data-v-d4bd7435><span class="ml-px txt-desc text-muted-500" data-v-d4bd7435>Kode Pos</span></td><td class="w-4/6" data-v-d4bd7435><span class="txt-desc" data-v-d4bd7435>: ${ssrInterpolate((_f = shop.value) == null ? void 0 : _f.postal_code)}</span></td></tr></table></div></div></div>`);
      } else if (activeTab.value === "tab-2") {
        _push(`<div class="mt-12" data-v-d4bd7435>`);
        _push(ssrRenderComponent(_component_ProdukList, null, null, _parent));
        _push(`</div>`);
      } else if (activeTab.value === "tab-3") {
        _push(`<div class="mt-12" data-v-d4bd7435>`);
        _push(ssrRenderComponent(_component_BankList, null, null, _parent));
        _push(`</div>`);
      } else if (activeTab.value === "tab-4") {
        _push(`<div class="mt-12" data-v-d4bd7435>`);
        _push(ssrRenderComponent(_component_LayananList, null, null, _parent));
        _push(`</div>`);
      } else if (activeTab.value === "tab-5") {
        _push(`<div class="mt-28" data-v-d4bd7435><div style="${ssrRenderStyle({ "width": "100%", "margin-bottom": "40px" })}" data-v-d4bd7435><div class="float-right" data-v-d4bd7435>`);
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
        _push(`</div><div class="txtss-1" data-v-d4bd7435>Kriteria Utama</div><div class="txtss-2" data-v-d4bd7435>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="ltablet:col-span-9 col-span-12 lg:col-span-9" data-v-d4bd7435><div class="grid grid-cols-12 gap-4" data-v-d4bd7435><div class="col-span-12 md:col-span-3" data-v-d4bd7435>`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-1 flex items-center justify-between" data-v-d4bd7435${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h5",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-d4bd7435${_scopeId2}>Penjualan</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Penjualan")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="mb-2" data-v-d4bd7435${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "3xl",
                weight: "bold",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-d4bd7435${_scopeId2}>Rp20.498.500</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Rp20.498.500")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm" data-v-d4bd7435${_scopeId}><span data-v-d4bd7435${_scopeId}>+2%</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:trending-up",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-muted-400 text-xs" data-v-d4bd7435${_scopeId}>sejak sebulan yang lalu</span></div>`);
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
        _push(`</div><div class="col-span-12 md:col-span-3" data-v-d4bd7435>`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-1 flex items-center justify-between" data-v-d4bd7435${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h5",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-d4bd7435${_scopeId2}>Pesanan</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Pesanan")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="mb-2" data-v-d4bd7435${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "3xl",
                weight: "bold",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-d4bd7435${_scopeId2}>65</span>`);
                  } else {
                    return [
                      createVNode("span", null, "65")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm" data-v-d4bd7435${_scopeId}><span data-v-d4bd7435${_scopeId}>-12%</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:trending-up",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-muted-400 text-xs" data-v-d4bd7435${_scopeId}>sejak sebulan yang lalu</span></div>`);
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
        _push(`</div><div class="col-span-12 md:col-span-3" data-v-d4bd7435>`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-1 flex items-center justify-between" data-v-d4bd7435${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h5",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-d4bd7435${_scopeId2}>Penjualan per Pesanan</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Penjualan per Pesanan")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="mb-2" data-v-d4bd7435${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "3xl",
                weight: "bold",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-d4bd7435${_scopeId2}>Rp1.320.150</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Rp1.320.150")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm" data-v-d4bd7435${_scopeId}><span data-v-d4bd7435${_scopeId}>+2%</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:trending-up",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-muted-400 text-xs" data-v-d4bd7435${_scopeId}>sejak sebulan yang lalu</span></div>`);
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
        _push(`</div><div class="col-span-12 md:col-span-3" data-v-d4bd7435>`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-1 flex items-center justify-between" data-v-d4bd7435${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h5",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-d4bd7435${_scopeId2}>Tingkat Konversi</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Tingkat Konversi")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="mb-2" data-v-d4bd7435${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "3xl",
                weight: "bold",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-d4bd7435${_scopeId2}>7,98%</span>`);
                  } else {
                    return [
                      createVNode("span", null, "7,98%")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm" data-v-d4bd7435${_scopeId}><span data-v-d4bd7435${_scopeId}>+2%</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:trending-up",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-muted-400 text-xs" data-v-d4bd7435${_scopeId}>sejak sebulan yang lalu</span></div>`);
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
        _push(`</div></div></div><br data-v-d4bd7435><div class="ltablet:col-span-6 col-span-12 lg:col-span-6" data-v-d4bd7435>`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-6" data-v-d4bd7435${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                size: "md",
                weight: "semibold",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-d4bd7435${_scopeId2}>Grafik setiap Kriteria</span>`);
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
      } else if (activeTab.value === "tab-6") {
        _push(`<div class="mt-28" data-v-d4bd7435><table width="100%" style="${ssrRenderStyle({ "border": "0px solid #ddd" })}" data-v-d4bd7435><td nowrap style="${ssrRenderStyle({ "border": "0px solid rgb(221, 221, 221)" })}" valign="top" data-v-d4bd7435><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714087508/waktoo-commerce/frame-1000001739.png" style="${ssrRenderStyle({ "margin-left": "-40px", "margin-top": "-43px", "width": "450px" })}" data-v-d4bd7435></td><td style="${ssrRenderStyle({ "border": "0px solid rgb(221, 221, 221)" })}" valign="top" data-v-d4bd7435><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714113750/waktoo-commerce/Frame-1000001757.png" style="${ssrRenderStyle({ "margin-top": "-30px", "margin-left": "-20px" })}" data-v-d4bd7435></td></table></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/toko-admin/TokoDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d4bd7435"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TokoDetail = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TokoDetail, { class: "pe-4 xl:pe-10" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/toko-admin/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
