import { e as _sfc_main$v, o as _sfc_main$D, a as __nuxt_component_2$1, f as _sfc_main$a, g as _export_sfc } from '../server.mjs';
import { _ as _sfc_main$3 } from './BaseSelect-11c1e165.mjs';
import { _ as _sfc_main$4 } from './BaseTextarea-9479699a.mjs';
import { _ as _sfc_main$5 } from './BaseRadioHeadless-904482cd.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode, unref, isRef, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "LandingHero3",
  __ssrInlineRender: true,
  setup(__props) {
    ref("tipe1");
    ref("tab-1");
    const value = ref("value_1");
    const value02 = ref("values_1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$v;
      const _component_BaseSelect = _sfc_main$3;
      const _component_BaseTextarea = _sfc_main$4;
      const _component_BaseRadioHeadless = _sfc_main$5;
      const _component_BaseCard = _sfc_main$D;
      const _component_Icon = __nuxt_component_2$1;
      const _component_BaseButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 bg-white py-24" }, _attrs))} data-v-0c65a076><div class="mx-auto w-full max-w-7xl px-4" data-v-0c65a076><div class="mb-10 max-w-2xl" data-v-0c65a076><div class="txt-title-2" data-v-0c65a076>Checkout Item</div><div class="txt-subtitle-2" data-v-0c65a076>Silahkan isi data agar memudahkan pengiriman barang ke alamat anda. </div></div><div class="container" data-v-0c65a076><div class="grid grid-cols-3 gap-4" data-v-0c65a076><div class="col-span-full col-span-1 md:col-span-2 lg:col-span-2" data-v-0c65a076><div class="card-keranjang" data-v-0c65a076><div class="txt-title-3" data-v-0c65a076>Informasi Personal</div><hr class="horizontal-hr2" data-v-0c65a076><div class="col-span-12 mb-3" data-v-0c65a076>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Nama Lengkap",
        rounded: "none",
        placeholder: "cth : Farhan Maulana",
        type: "text"
      }, null, _parent));
      _push(`</div><div class="col-span-12 mb-3" data-v-0c65a076>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Nomor Telepon",
        rounded: "none",
        placeholder: "cth : 0822 1234 5678",
        type: "text"
      }, null, _parent));
      _push(`</div><div class="col-span-12 mb-3" data-v-0c65a076>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Email",
        rounded: "none",
        placeholder: "cth : ahmadmufid@mail.com",
        type: "text"
      }, null, _parent));
      _push(`</div></div><div class="card-keranjang" data-v-0c65a076><div class="txt-title-3" data-v-0c65a076>Pengiriman</div><hr class="horizontal-hr2" data-v-0c65a076><div class="col-span-12 mb-3" data-v-0c65a076>`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        rounded: "none",
        label: "Provinsi"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option value="" data-v-0c65a076${_scopeId}>Pilih Provinsi</option><option value="Jawa Barat" data-v-0c65a076${_scopeId}>Jawa Barat</option><option value="Jawa Timur" data-v-0c65a076${_scopeId}>Jawa Timur</option><option value="Jawa Tengah" data-v-0c65a076${_scopeId}>Jawa Tengah</option><option value="DKI Jakarta" data-v-0c65a076${_scopeId}>DKI Jakarta</option>`);
          } else {
            return [
              createVNode("option", { value: "" }, "Pilih Provinsi"),
              createVNode("option", { value: "Jawa Barat" }, "Jawa Barat"),
              createVNode("option", { value: "Jawa Timur" }, "Jawa Timur"),
              createVNode("option", { value: "Jawa Tengah" }, "Jawa Tengah"),
              createVNode("option", { value: "DKI Jakarta" }, "DKI Jakarta")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 mb-3" data-v-0c65a076>`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        rounded: "none",
        label: "Kabupaten/Kota"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option value="" data-v-0c65a076${_scopeId}>Kabupaten/Kota</option><option value="Bandung" data-v-0c65a076${_scopeId}>Bandung</option><option value="Jakarta" data-v-0c65a076${_scopeId}>Jakarta</option><option value="Surabaya" data-v-0c65a076${_scopeId}>Surabaya</option><option value="Garut" data-v-0c65a076${_scopeId}>Garut</option>`);
          } else {
            return [
              createVNode("option", { value: "" }, "Kabupaten/Kota"),
              createVNode("option", { value: "Bandung" }, "Bandung"),
              createVNode("option", { value: "Jakarta" }, "Jakarta"),
              createVNode("option", { value: "Surabaya" }, "Surabaya"),
              createVNode("option", { value: "Garut" }, "Garut")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 mb-3" data-v-0c65a076>`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        rounded: "none",
        label: "Kecamatan"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option value="" data-v-0c65a076${_scopeId}>Pilih Kecamatan</option><option value="Batununggal" data-v-0c65a076${_scopeId}>Batununggal</option><option value="Cibangkong" data-v-0c65a076${_scopeId}>Cibangkong</option><option value="Sukajadi" data-v-0c65a076${_scopeId}>Sukajadi</option><option value="Cihapit" data-v-0c65a076${_scopeId}>Cihapit</option>`);
          } else {
            return [
              createVNode("option", { value: "" }, "Pilih Kecamatan"),
              createVNode("option", { value: "Batununggal" }, "Batununggal"),
              createVNode("option", { value: "Cibangkong" }, "Cibangkong"),
              createVNode("option", { value: "Sukajadi" }, "Sukajadi"),
              createVNode("option", { value: "Cihapit" }, "Cihapit")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 mb-3" data-v-0c65a076>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Kode Pos",
        rounded: "none",
        placeholder: "cth : 526172",
        type: "text"
      }, null, _parent));
      _push(`</div><div class="col-span-12 mb-3" data-v-0c65a076>`);
      _push(ssrRenderComponent(_component_BaseTextarea, {
        label: "Detail Alamat / Catatan",
        placeholder: "Cth:  Rumah Warna Biru. Jl Kenanga no 21 Bandung"
      }, null, _parent));
      _push(`</div></div><div class="card-keranjang" data-v-0c65a076><div class="txt-title-3" data-v-0c65a076>Metode Pengiriman</div><hr class="horizontal-hr2" data-v-0c65a076><div class="grid gap-6 sm:grid-cols-3" data-v-0c65a076>`);
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "radio_custom",
        value: "value_1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "lg",
              class: "peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col" data-v-0c65a076${_scopeId2}><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_14.png" class="img-mbs" data-v-0c65a076${_scopeId2}> <span class="teksmbs margin-left-80" data-v-0c65a076${_scopeId2}>JNE</span></div><div class="child absolute end-2 top-3 opacity-0" data-v-0c65a076${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-success-500 size-7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("img", {
                        src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_14.png",
                        class: "img-mbs"
                      }),
                      createTextVNode(),
                      createVNode("span", { class: "teksmbs margin-left-80" }, "JNE")
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
              _: 1
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
                      src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_14.png",
                      class: "img-mbs"
                    }),
                    createTextVNode(),
                    createVNode("span", { class: "teksmbs margin-left-80" }, "JNE")
                  ]),
                  createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 size-7"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "radio_custom",
        value: "value_2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "lg",
              class: "peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col" data-v-0c65a076${_scopeId2}><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_15.png" class="img-mbs" data-v-0c65a076${_scopeId2}> <span class="teksmbs margin-left-80" data-v-0c65a076${_scopeId2}>TIKI</span></div><div class="child absolute end-2 top-3 opacity-0" data-v-0c65a076${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-success-500 size-7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("img", {
                        src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_15.png",
                        class: "img-mbs"
                      }),
                      createTextVNode(),
                      createVNode("span", { class: "teksmbs margin-left-80" }, "TIKI")
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
              _: 1
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
                      src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_15.png",
                      class: "img-mbs"
                    }),
                    createTextVNode(),
                    createVNode("span", { class: "teksmbs margin-left-80" }, "TIKI")
                  ]),
                  createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 size-7"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "radio_custom",
        value: "value_3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "lg",
              class: "peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col" data-v-0c65a076${_scopeId2}><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_16.png" class="img-mbs height15" data-v-0c65a076${_scopeId2}> <span class="teksmbs margin-left-80" data-v-0c65a076${_scopeId2}>J&amp;T Express</span></div><div class="child absolute end-2 top-3 opacity-0" data-v-0c65a076${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-success-500 size-7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("img", {
                        src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_16.png",
                        class: "img-mbs height15"
                      }),
                      createTextVNode(),
                      createVNode("span", { class: "teksmbs margin-left-80" }, "J&T Express")
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
              _: 1
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
                      src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_16.png",
                      class: "img-mbs height15"
                    }),
                    createTextVNode(),
                    createVNode("span", { class: "teksmbs margin-left-80" }, "J&T Express")
                  ]),
                  createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 size-7"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "radio_custom",
        value: "value_4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "lg",
              class: "peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col" data-v-0c65a076${_scopeId2}><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_17.png" class="img-mbs" data-v-0c65a076${_scopeId2}> <span class="teksmbs margin-left-80" data-v-0c65a076${_scopeId2}>SiCepat</span></div><div class="child absolute end-2 top-3 opacity-0" data-v-0c65a076${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-success-500 size-7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("img", {
                        src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_17.png",
                        class: "img-mbs"
                      }),
                      createTextVNode(),
                      createVNode("span", { class: "teksmbs margin-left-80" }, "SiCepat")
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
              _: 1
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
                      src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_17.png",
                      class: "img-mbs"
                    }),
                    createTextVNode(),
                    createVNode("span", { class: "teksmbs margin-left-80" }, "SiCepat")
                  ]),
                  createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 size-7"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "radio_custom",
        value: "value_5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "lg",
              class: "peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col" data-v-0c65a076${_scopeId2}><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_18.png" class="img-mbs" data-v-0c65a076${_scopeId2}> <span class="teksmbs margin-left-80" data-v-0c65a076${_scopeId2}>AnterAja</span></div><div class="child absolute end-2 top-3 opacity-0" data-v-0c65a076${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-success-500 size-7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("img", {
                        src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_18.png",
                        class: "img-mbs"
                      }),
                      createTextVNode(),
                      createVNode("span", { class: "teksmbs margin-left-80" }, "AnterAja")
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
              _: 1
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
                      src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_18.png",
                      class: "img-mbs"
                    }),
                    createTextVNode(),
                    createVNode("span", { class: "teksmbs margin-left-80" }, "AnterAja")
                  ]),
                  createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 size-7"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "radio_custom",
        value: "value_6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "lg",
              class: "peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col" data-v-0c65a076${_scopeId2}><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_19.png" class="img-mbs height21" data-v-0c65a076${_scopeId2}> <span class="teksmbs margin-left-80" data-v-0c65a076${_scopeId2}>SAP Express</span></div><div class="child absolute end-2 top-3 opacity-0" data-v-0c65a076${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-success-500 size-7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("img", {
                        src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_19.png",
                        class: "img-mbs height21"
                      }),
                      createTextVNode(),
                      createVNode("span", { class: "teksmbs margin-left-80" }, "SAP Express")
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
              _: 1
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
                      src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/image_19.png",
                      class: "img-mbs height21"
                    }),
                    createTextVNode(),
                    createVNode("span", { class: "teksmbs margin-left-80" }, "SAP Express")
                  ]),
                  createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 size-7"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="card-keranjang" data-v-0c65a076><div class="txt-title-3" data-v-0c65a076>Metode Pembayaran</div><hr class="horizontal-hr2" data-v-0c65a076><div class="grid gap-6 sm:grid-cols-3" data-v-0c65a076>`);
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(value02),
        "onUpdate:modelValue": ($event) => isRef(value02) ? value02.value = $event : null,
        name: "radio_custom2",
        value: "values_1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "lg",
              class: "peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col" data-v-0c65a076${_scopeId2}><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/Mandiri.png" class="img-mbs2" data-v-0c65a076${_scopeId2}> <span class="teksmbs margin-left-80" data-v-0c65a076${_scopeId2}>Mandiri</span></div><div class="child absolute end-2 top-3 opacity-0" data-v-0c65a076${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-success-500 size-7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("img", {
                        src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/Mandiri.png",
                        class: "img-mbs2"
                      }),
                      createTextVNode(),
                      createVNode("span", { class: "teksmbs margin-left-80" }, "Mandiri")
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
              _: 1
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
                      src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/Mandiri.png",
                      class: "img-mbs2"
                    }),
                    createTextVNode(),
                    createVNode("span", { class: "teksmbs margin-left-80" }, "Mandiri")
                  ]),
                  createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 size-7"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(value02),
        "onUpdate:modelValue": ($event) => isRef(value02) ? value02.value = $event : null,
        name: "radio_custom2",
        value: "values_2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "lg",
              class: "peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col" data-v-0c65a076${_scopeId2}><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/BCA.png" class="img-mbs2" data-v-0c65a076${_scopeId2}> <span class="teksmbs margin-left-80" data-v-0c65a076${_scopeId2}>Bank BCA</span></div><div class="child absolute end-2 top-3 opacity-0" data-v-0c65a076${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-success-500 size-7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("img", {
                        src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/BCA.png",
                        class: "img-mbs2"
                      }),
                      createTextVNode(),
                      createVNode("span", { class: "teksmbs margin-left-80" }, "Bank BCA")
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
              _: 1
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
                      src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/BCA.png",
                      class: "img-mbs2"
                    }),
                    createTextVNode(),
                    createVNode("span", { class: "teksmbs margin-left-80" }, "Bank BCA")
                  ]),
                  createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 size-7"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(value02),
        "onUpdate:modelValue": ($event) => isRef(value02) ? value02.value = $event : null,
        name: "radio_custom2",
        value: "values_3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "lg",
              class: "peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col" data-v-0c65a076${_scopeId2}><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/BNI.png" class="img-mbs2" data-v-0c65a076${_scopeId2}> <span class="teksmbs margin-left-80" data-v-0c65a076${_scopeId2}>Bank BNI</span></div><div class="child absolute end-2 top-3 opacity-0" data-v-0c65a076${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-success-500 size-7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("img", {
                        src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/BNI.png",
                        class: "img-mbs2"
                      }),
                      createTextVNode(),
                      createVNode("span", { class: "teksmbs margin-left-80" }, "Bank BNI")
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
              _: 1
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
                      src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/BNI.png",
                      class: "img-mbs2"
                    }),
                    createTextVNode(),
                    createVNode("span", { class: "teksmbs margin-left-80" }, "Bank BNI")
                  ]),
                  createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 size-7"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(value02),
        "onUpdate:modelValue": ($event) => isRef(value02) ? value02.value = $event : null,
        name: "radio_custom2",
        value: "values_4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "lg",
              class: "peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col" data-v-0c65a076${_scopeId2}><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/BRI.png" class="img-mbs2" data-v-0c65a076${_scopeId2}> <span class="teksmbs margin-left-80" data-v-0c65a076${_scopeId2}>Bank BRI</span></div><div class="child absolute end-2 top-3 opacity-0" data-v-0c65a076${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-success-500 size-7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("img", {
                        src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/BRI.png",
                        class: "img-mbs2"
                      }),
                      createTextVNode(),
                      createVNode("span", { class: "teksmbs margin-left-80" }, "Bank BRI")
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
              _: 1
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
                      src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/BRI.png",
                      class: "img-mbs2"
                    }),
                    createTextVNode(),
                    createVNode("span", { class: "teksmbs margin-left-80" }, "Bank BRI")
                  ]),
                  createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 size-7"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(value02),
        "onUpdate:modelValue": ($event) => isRef(value02) ? value02.value = $event : null,
        name: "radio_custom2",
        value: "values_5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "lg",
              class: "peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col" data-v-0c65a076${_scopeId2}><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/CIMB.png" class="img-mbs2" data-v-0c65a076${_scopeId2}> <span class="teksmbs margin-left-80" data-v-0c65a076${_scopeId2}>CIMB Niaga</span></div><div class="child absolute end-2 top-3 opacity-0" data-v-0c65a076${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-success-500 size-7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("img", {
                        src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/CIMB.png",
                        class: "img-mbs2"
                      }),
                      createTextVNode(),
                      createVNode("span", { class: "teksmbs margin-left-80" }, "CIMB Niaga")
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
              _: 1
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
                      src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/CIMB.png",
                      class: "img-mbs2"
                    }),
                    createTextVNode(),
                    createVNode("span", { class: "teksmbs margin-left-80" }, "CIMB Niaga")
                  ]),
                  createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 size-7"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(value02),
        "onUpdate:modelValue": ($event) => isRef(value02) ? value02.value = $event : null,
        name: "radio_custom2",
        value: "values_6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "lg",
              class: "peer-checked:!border-success-500 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100 height-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col" data-v-0c65a076${_scopeId2}><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/BTN.png" class="img-mbs2" data-v-0c65a076${_scopeId2}> <span class="teksmbs margin-left-80" data-v-0c65a076${_scopeId2}>Bank BTN</span></div><div class="child absolute end-2 top-3 opacity-0" data-v-0c65a076${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-success-500 size-7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("img", {
                        src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/BTN.png",
                        class: "img-mbs2"
                      }),
                      createTextVNode(),
                      createVNode("span", { class: "teksmbs margin-left-80" }, "Bank BTN")
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
              _: 1
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
                      src: "https://res.cloudinary.com/daraki09f/image/upload/v1714689780/waktoo-commerce/BTN.png",
                      class: "img-mbs2"
                    }),
                    createTextVNode(),
                    createVNode("span", { class: "teksmbs margin-left-80" }, "Bank BTN")
                  ]),
                  createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 size-7"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-span-full col-span-1 md:col-span-2 lg:col-span-1" data-v-0c65a076><div class="card-three height400" data-v-0c65a076><div class="txts-1" data-v-0c65a076>Ringkasan Belanja</div><br data-v-0c65a076><div data-v-0c65a076><div class="txtsdss dxz-1" data-v-0c65a076>Women&#39;s Monogram Top Handle Bag / Sling Bag / Crossbody Bag (Tas Tangan / Tas Selempang) - Elegant</div><div class="txts-3" data-v-0c65a076>x2</div><div class="txts-4 font-500" data-v-0c65a076>Rp4.000.000</div></div><br data-v-0c65a076><br data-v-0c65a076><div data-v-0c65a076><div class="txtsdss dxz-1" data-v-0c65a076>Biaya Pengiriman</div><div class="txts-3" data-v-0c65a076>1.000 gram</div><div class="txts-4 font-500" data-v-0c65a076>Rp21.000</div></div><hr class="horizontal-hr" data-v-0c65a076><div class="txts-4" data-v-0c65a076>Rp8.000.000</div><div class="txtsxx" data-v-0c65a076>Total Harga</div><div class="mgsh" data-v-0c65a076>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        class: "!h-11 w-full blue-full",
        shape: "straight",
        flavor: "outline",
        to: "/checkout"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-0c65a076${_scopeId}>Beli Sekarang</span>`);
          } else {
            return [
              createVNode("span", null, "Beli Sekarang")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/landing/components/LandingHero3.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0c65a076"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingHero3 = __nuxt_component_0;
      const _component_LandingFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LandingHero3, null, null, _parent));
      _push(ssrRenderComponent(_component_LandingFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
