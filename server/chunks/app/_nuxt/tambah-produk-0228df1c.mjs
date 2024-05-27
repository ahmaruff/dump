import { e as _sfc_main$v, a as __nuxt_component_2$1, f as _sfc_main$a } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseInputFileHeadless-563a3359.mjs';
import { _ as _sfc_main$2 } from './BaseButtonIcon-e5109a33.mjs';
import { _ as _sfc_main$3 } from './BaseRadio-017acd77.mjs';
import { _ as _sfc_main$4 } from './BaseTextarea-9479699a.mjs';
import { defineComponent, ref, resolveComponent, mergeProps, unref, isRef, withCtx, createVNode, openBlock, createBlock, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
import './file-preview-79d105db.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tambah-produk",
  __ssrInlineRender: true,
  setup(__props) {
    const inputFile1 = ref(null);
    const inputFile2 = ref(null);
    const inputFile3 = ref(null);
    const inputFile4 = ref(null);
    const inputFile5 = ref(null);
    const inputFile6 = ref(null);
    const inputFile7 = ref(null);
    const inputFile8 = ref(null);
    const inputFile9 = ref(null);
    const value = ref("default");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$v;
      const _component_BaseInputFileHeadless = _sfc_main$1;
      const _component_center = resolveComponent("center");
      const _component_BaseButtonIcon = _sfc_main$2;
      const _component_Icon = __nuxt_component_2$1;
      const _component_BaseRadio = _sfc_main$3;
      const _component_Field = resolveComponent("Field");
      const _component_BaseTextarea = _sfc_main$4;
      const _component_BaseButton = _sfc_main$a;
      _push(`<form${ssrRenderAttrs(mergeProps({
        action: "",
        method: "POST",
        class: "mx-auto w-full"
      }, _attrs))}><div class="border-muted-200"><div class="nui-card nui-card-rounded-sm nui-card-default"><div class="bg-white dark:bg-muted-800/70 p-10"><div class="mb-2"><h3 class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal"> Informasi Produk </h3><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400"> Ini adalah informasi yang pertama ditampilkan untuk pelanggan </span></div><div class="col-span-12 mt-6"><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Nama Produk",
        placeholder: "Contoh: Jenis/Kategori Produk + Merek + Keterangan"
      }, null, _parent));
      _push(`</div></div><div class="col-span-12 sm:col-span-6 mt-6"><div class="flex w-full flex-col gap-4 sm:flex-row"><div class="relative grow"><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"><label class="nui-input-label" for="nui-input-f39c7d2d-067e-400e-ac21-d2292df2f668">Kategori</label><div class="nui-select-wrapper nui-select-default nui-select-md nui-select-rounded-sm"><div><select class="nui-select border-unset" id="nui-input-fa27fa71-0023-45d5-ac67-2b807f99916e"><option value="" hidden="">Pilih Opsi</option><option value="kategori a">kategori a</option><option value="kategori b">kategori b</option><option value="kategori c">kategori c</option><option value="kategori d">kategori d</option></select><div class="nui-select-chevron nui-chevron border-unset"><svg aria-hidden="true" viewBox="0 0 24 24" class="nui-select-chevron-inner"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"></path></svg></div></div></div></div></div><div class="relative grow"><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"><label class="nui-input-label" for="nui-input-88972005-df30-4290-8090-d7a6fff8b790">Etalase</label><div class="nui-select-wrapper nui-select-default nui-select-md nui-select-rounded-sm"><div><select class="nui-select border-unset" id="nui-input-fa27fa71-0023-45d5-ac67-2b807f99916e"><option value="" hidden="">Pilih Opsi</option><option value="etalase a">etalase a</option><option value="etalase b">etalase b</option><option value="etalase c">etalase c</option><option value="etalase d">etalase d</option></select><div class="nui-select-chevron nui-chevron"><svg aria-hidden="true" viewBox="0 0 24 24" class="nui-select-chevron-inner"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"></path></svg></div></div></div></div></div></div><div class="vc-popover-content-wrapper is-interactive"></div></div><br><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal"><h4> Nama Produk </h4><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400"> Ini adalah informasi yang pertama ditampilkan untuk pelanggan </span></div><div>`);
      _push(ssrRenderComponent(_component_BaseInput, { placeholder: "Contoh: Jenis/Kategori Produk + Merek + Keterangan" }, null, _parent));
      _push(`</div></div></div></div></div><div class="border-muted-200"><div class="nui-card nui-card-rounded-sm nui-card-default"><div class="bg-white dark:bg-muted-800/70 p-10"><div class="mb-2"><h3 class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal"> Detail Produk </h3><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400"> Ini adalah informasi yang pertama ditampilkan untuk pelanggan </span></div><div class="col-span-2"><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"><label class="nui-input-label" for="nui-input-89b0cb01-2c29-4d47-9e2d-2a62d6ead7cf">Foto Produk</label><div class="flex items-center w-auto"><div class="line-height-normal"><div class="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 p-4"><div>`);
      _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
        modelValue: unref(inputFile1),
        "onUpdate:modelValue": ($event) => isRef(inputFile1) ? inputFile1.value = $event : null,
        accept: "image/*"
      }, {
        default: withCtx(({ open, remove, preview, files }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative size-20"${_scopeId}>`);
            if (files?.length && files.item(0)) {
              _push2(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto"${_scopeId}>`);
            } else {
              _push2(`<div class="kotak-dotted"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_center, null, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<br${_scopeId}> Foto Utama </div>`);
            }
            if (files?.length && files.item(0)) {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                rounded: "full",
                "data-nui-tooltip": "Remove image",
                class: "scale-90",
                onClick: ($event) => remove(files.item(0))
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:x",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}><div class="relative" data-nui-tooltip="Upload image"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                rounded: "full",
                class: "button-foto",
                onClick: open
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:plus",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:plus",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative size-20" }, [
                files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: preview(files.item(0)).value,
                  alt: "Upload preview",
                  class: "img-close-foto"
                }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "kotak-dotted"
                }, [
                  createVNode(_component_center, null, {
                    default: withCtx(() => [
                      createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                    ]),
                    _: 1
                  }),
                  createVNode("br"),
                  createTextVNode(" Foto Utama ")
                ])),
                files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode(_component_BaseButtonIcon, {
                    size: "sm",
                    rounded: "full",
                    "data-nui-tooltip": "Remove image",
                    class: "scale-90",
                    onClick: ($event) => remove(files.item(0))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])) : (openBlock(), createBlock("div", {
                  key: 3,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode("div", {
                    class: "relative",
                    "data-nui-tooltip": "Upload image"
                  }, [
                    createVNode(_component_BaseButtonIcon, {
                      size: "sm",
                      rounded: "full",
                      class: "button-foto",
                      onClick: open
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "size-4"
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
        modelValue: unref(inputFile2),
        "onUpdate:modelValue": ($event) => isRef(inputFile2) ? inputFile2.value = $event : null,
        accept: "image/*"
      }, {
        default: withCtx(({ open, remove, preview, files }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative size-20"${_scopeId}>`);
            if (files?.length && files.item(0)) {
              _push2(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto"${_scopeId}>`);
            } else {
              _push2(`<div class="kotak-dotted"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_center, null, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<br${_scopeId}> Foto Ke - 2 </div>`);
            }
            if (files?.length && files.item(0)) {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                rounded: "full",
                "data-nui-tooltip": "Remove image",
                class: "scale-90",
                onClick: ($event) => remove(files.item(0))
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:x",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}><div class="relative" data-nui-tooltip="Upload image"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                class: "button-foto",
                rounded: "full",
                onClick: open
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:plus",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:plus",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative size-20" }, [
                files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: preview(files.item(0)).value,
                  alt: "Upload preview",
                  class: "img-close-foto"
                }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "kotak-dotted"
                }, [
                  createVNode(_component_center, null, {
                    default: withCtx(() => [
                      createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                    ]),
                    _: 1
                  }),
                  createVNode("br"),
                  createTextVNode(" Foto Ke - 2 ")
                ])),
                files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode(_component_BaseButtonIcon, {
                    size: "sm",
                    rounded: "full",
                    "data-nui-tooltip": "Remove image",
                    class: "scale-90",
                    onClick: ($event) => remove(files.item(0))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])) : (openBlock(), createBlock("div", {
                  key: 3,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode("div", {
                    class: "relative",
                    "data-nui-tooltip": "Upload image"
                  }, [
                    createVNode(_component_BaseButtonIcon, {
                      size: "sm",
                      class: "button-foto",
                      rounded: "full",
                      onClick: open
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "size-4"
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
        modelValue: unref(inputFile3),
        "onUpdate:modelValue": ($event) => isRef(inputFile3) ? inputFile3.value = $event : null,
        accept: "image/*"
      }, {
        default: withCtx(({ open, remove, preview, files }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative size-20"${_scopeId}>`);
            if (files?.length && files.item(0)) {
              _push2(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto"${_scopeId}>`);
            } else {
              _push2(`<div class="kotak-dotted"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_center, null, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<br${_scopeId}> Foto Ke - 3 </div>`);
            }
            if (files?.length && files.item(0)) {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                rounded: "full",
                "data-nui-tooltip": "Remove image",
                class: "scale-90",
                onClick: ($event) => remove(files.item(0))
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:x",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}><div class="relative" data-nui-tooltip="Upload image"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                class: "button-foto",
                rounded: "full",
                onClick: open
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:plus",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:plus",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative size-20" }, [
                files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: preview(files.item(0)).value,
                  alt: "Upload preview",
                  class: "img-close-foto"
                }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "kotak-dotted"
                }, [
                  createVNode(_component_center, null, {
                    default: withCtx(() => [
                      createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                    ]),
                    _: 1
                  }),
                  createVNode("br"),
                  createTextVNode(" Foto Ke - 3 ")
                ])),
                files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode(_component_BaseButtonIcon, {
                    size: "sm",
                    rounded: "full",
                    "data-nui-tooltip": "Remove image",
                    class: "scale-90",
                    onClick: ($event) => remove(files.item(0))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])) : (openBlock(), createBlock("div", {
                  key: 3,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode("div", {
                    class: "relative",
                    "data-nui-tooltip": "Upload image"
                  }, [
                    createVNode(_component_BaseButtonIcon, {
                      size: "sm",
                      class: "button-foto",
                      rounded: "full",
                      onClick: open
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "size-4"
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
        modelValue: unref(inputFile4),
        "onUpdate:modelValue": ($event) => isRef(inputFile4) ? inputFile4.value = $event : null,
        accept: "image/*"
      }, {
        default: withCtx(({ open, remove, preview, files }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative size-20"${_scopeId}>`);
            if (files?.length && files.item(0)) {
              _push2(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto"${_scopeId}>`);
            } else {
              _push2(`<div class="kotak-dotted"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_center, null, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<br${_scopeId}> Foto Ke - 4 </div>`);
            }
            if (files?.length && files.item(0)) {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                rounded: "full",
                "data-nui-tooltip": "Remove image",
                class: "scale-90",
                onClick: ($event) => remove(files.item(0))
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:x",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}><div class="relative" data-nui-tooltip="Upload image"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                class: "button-foto",
                rounded: "full",
                onClick: open
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:plus",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:plus",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative size-20" }, [
                files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: preview(files.item(0)).value,
                  alt: "Upload preview",
                  class: "img-close-foto"
                }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "kotak-dotted"
                }, [
                  createVNode(_component_center, null, {
                    default: withCtx(() => [
                      createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                    ]),
                    _: 1
                  }),
                  createVNode("br"),
                  createTextVNode(" Foto Ke - 4 ")
                ])),
                files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode(_component_BaseButtonIcon, {
                    size: "sm",
                    rounded: "full",
                    "data-nui-tooltip": "Remove image",
                    class: "scale-90",
                    onClick: ($event) => remove(files.item(0))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])) : (openBlock(), createBlock("div", {
                  key: 3,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode("div", {
                    class: "relative",
                    "data-nui-tooltip": "Upload image"
                  }, [
                    createVNode(_component_BaseButtonIcon, {
                      size: "sm",
                      class: "button-foto",
                      rounded: "full",
                      onClick: open
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "size-4"
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
        modelValue: unref(inputFile5),
        "onUpdate:modelValue": ($event) => isRef(inputFile5) ? inputFile5.value = $event : null,
        accept: "image/*"
      }, {
        default: withCtx(({ open, remove, preview, files }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative size-20"${_scopeId}>`);
            if (files?.length && files.item(0)) {
              _push2(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto"${_scopeId}>`);
            } else {
              _push2(`<div class="kotak-dotted"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_center, null, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<br${_scopeId}> Foto Ke - 5 </div>`);
            }
            if (files?.length && files.item(0)) {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                rounded: "full",
                "data-nui-tooltip": "Remove image",
                class: "scale-90",
                onClick: ($event) => remove(files.item(0))
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:x",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}><div class="relative" data-nui-tooltip="Upload image"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                class: "button-foto",
                rounded: "full",
                onClick: open
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:plus",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:plus",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative size-20" }, [
                files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: preview(files.item(0)).value,
                  alt: "Upload preview",
                  class: "img-close-foto"
                }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "kotak-dotted"
                }, [
                  createVNode(_component_center, null, {
                    default: withCtx(() => [
                      createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                    ]),
                    _: 1
                  }),
                  createVNode("br"),
                  createTextVNode(" Foto Ke - 5 ")
                ])),
                files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode(_component_BaseButtonIcon, {
                    size: "sm",
                    rounded: "full",
                    "data-nui-tooltip": "Remove image",
                    class: "scale-90",
                    onClick: ($event) => remove(files.item(0))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])) : (openBlock(), createBlock("div", {
                  key: 3,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode("div", {
                    class: "relative",
                    "data-nui-tooltip": "Upload image"
                  }, [
                    createVNode(_component_BaseButtonIcon, {
                      size: "sm",
                      class: "button-foto",
                      rounded: "full",
                      onClick: open
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "size-4"
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
        modelValue: unref(inputFile6),
        "onUpdate:modelValue": ($event) => isRef(inputFile6) ? inputFile6.value = $event : null,
        accept: "image/*"
      }, {
        default: withCtx(({ open, remove, preview, files }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative size-20"${_scopeId}>`);
            if (files?.length && files.item(0)) {
              _push2(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto"${_scopeId}>`);
            } else {
              _push2(`<div class="kotak-dotted"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_center, null, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<br${_scopeId}> Foto Ke - 6 </div>`);
            }
            if (files?.length && files.item(0)) {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                rounded: "full",
                "data-nui-tooltip": "Remove image",
                class: "scale-90",
                onClick: ($event) => remove(files.item(0))
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:x",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}><div class="relative" data-nui-tooltip="Upload image"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                class: "button-foto",
                rounded: "full",
                onClick: open
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:plus",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:plus",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative size-20" }, [
                files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: preview(files.item(0)).value,
                  alt: "Upload preview",
                  class: "img-close-foto"
                }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "kotak-dotted"
                }, [
                  createVNode(_component_center, null, {
                    default: withCtx(() => [
                      createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                    ]),
                    _: 1
                  }),
                  createVNode("br"),
                  createTextVNode(" Foto Ke - 6 ")
                ])),
                files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode(_component_BaseButtonIcon, {
                    size: "sm",
                    rounded: "full",
                    "data-nui-tooltip": "Remove image",
                    class: "scale-90",
                    onClick: ($event) => remove(files.item(0))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])) : (openBlock(), createBlock("div", {
                  key: 3,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode("div", {
                    class: "relative",
                    "data-nui-tooltip": "Upload image"
                  }, [
                    createVNode(_component_BaseButtonIcon, {
                      size: "sm",
                      class: "button-foto",
                      rounded: "full",
                      onClick: open
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "size-4"
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
        modelValue: unref(inputFile7),
        "onUpdate:modelValue": ($event) => isRef(inputFile7) ? inputFile7.value = $event : null,
        accept: "image/*"
      }, {
        default: withCtx(({ open, remove, preview, files }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative size-20"${_scopeId}>`);
            if (files?.length && files.item(0)) {
              _push2(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto"${_scopeId}>`);
            } else {
              _push2(`<div class="kotak-dotted"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_center, null, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<br${_scopeId}> Foto Ke - 7 </div>`);
            }
            if (files?.length && files.item(0)) {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                rounded: "full",
                "data-nui-tooltip": "Remove image",
                class: "scale-90",
                onClick: ($event) => remove(files.item(0))
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:x",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}><div class="relative" data-nui-tooltip="Upload image"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                class: "button-foto",
                rounded: "full",
                onClick: open
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:plus",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:plus",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative size-20" }, [
                files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: preview(files.item(0)).value,
                  alt: "Upload preview",
                  class: "img-close-foto"
                }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "kotak-dotted"
                }, [
                  createVNode(_component_center, null, {
                    default: withCtx(() => [
                      createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                    ]),
                    _: 1
                  }),
                  createVNode("br"),
                  createTextVNode(" Foto Ke - 7 ")
                ])),
                files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode(_component_BaseButtonIcon, {
                    size: "sm",
                    rounded: "full",
                    "data-nui-tooltip": "Remove image",
                    class: "scale-90",
                    onClick: ($event) => remove(files.item(0))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])) : (openBlock(), createBlock("div", {
                  key: 3,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode("div", {
                    class: "relative",
                    "data-nui-tooltip": "Upload image"
                  }, [
                    createVNode(_component_BaseButtonIcon, {
                      size: "sm",
                      class: "button-foto",
                      rounded: "full",
                      onClick: open
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "size-4"
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
        modelValue: unref(inputFile8),
        "onUpdate:modelValue": ($event) => isRef(inputFile8) ? inputFile8.value = $event : null,
        accept: "image/*"
      }, {
        default: withCtx(({ open, remove, preview, files }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative size-20"${_scopeId}>`);
            if (files?.length && files.item(0)) {
              _push2(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto"${_scopeId}>`);
            } else {
              _push2(`<div class="kotak-dotted"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_center, null, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<br${_scopeId}> Foto Ke - 8 </div>`);
            }
            if (files?.length && files.item(0)) {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                rounded: "full",
                "data-nui-tooltip": "Remove image",
                class: "scale-90",
                onClick: ($event) => remove(files.item(0))
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:x",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}><div class="relative" data-nui-tooltip="Upload image"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                class: "button-foto",
                rounded: "full",
                onClick: open
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:plus",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:plus",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative size-20" }, [
                files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: preview(files.item(0)).value,
                  alt: "Upload preview",
                  class: "img-close-foto"
                }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "kotak-dotted"
                }, [
                  createVNode(_component_center, null, {
                    default: withCtx(() => [
                      createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                    ]),
                    _: 1
                  }),
                  createVNode("br"),
                  createTextVNode(" Foto Ke - 8 ")
                ])),
                files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode(_component_BaseButtonIcon, {
                    size: "sm",
                    rounded: "full",
                    "data-nui-tooltip": "Remove image",
                    class: "scale-90",
                    onClick: ($event) => remove(files.item(0))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])) : (openBlock(), createBlock("div", {
                  key: 3,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode("div", {
                    class: "relative",
                    "data-nui-tooltip": "Upload image"
                  }, [
                    createVNode(_component_BaseButtonIcon, {
                      size: "sm",
                      class: "button-foto",
                      rounded: "full",
                      onClick: open
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "size-4"
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
        modelValue: unref(inputFile9),
        "onUpdate:modelValue": ($event) => isRef(inputFile9) ? inputFile9.value = $event : null,
        accept: "image/*"
      }, {
        default: withCtx(({ open, remove, preview, files }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative size-20"${_scopeId}>`);
            if (files?.length && files.item(0)) {
              _push2(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto"${_scopeId}>`);
            } else {
              _push2(`<div class="kotak-dotted"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_center, null, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<br${_scopeId}> Foto Ke - 9 </div>`);
            }
            if (files?.length && files.item(0)) {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                rounded: "full",
                "data-nui-tooltip": "Remove image",
                class: "scale-90",
                onClick: ($event) => remove(files.item(0))
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:x",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}><div class="relative" data-nui-tooltip="Upload image"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                class: "button-foto",
                rounded: "full",
                onClick: open
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:plus",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:plus",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative size-20" }, [
                files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: preview(files.item(0)).value,
                  alt: "Upload preview",
                  class: "img-close-foto"
                }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "kotak-dotted"
                }, [
                  createVNode(_component_center, null, {
                    default: withCtx(() => [
                      createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                    ]),
                    _: 1
                  }),
                  createVNode("br"),
                  createTextVNode(" Foto Ke - 9 ")
                ])),
                files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode(_component_BaseButtonIcon, {
                    size: "sm",
                    rounded: "full",
                    "data-nui-tooltip": "Remove image",
                    class: "scale-90",
                    onClick: ($event) => remove(files.item(0))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])) : (openBlock(), createBlock("div", {
                  key: 3,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode("div", {
                    class: "relative",
                    "data-nui-tooltip": "Upload image"
                  }, [
                    createVNode(_component_BaseButtonIcon, {
                      size: "sm",
                      class: "button-foto",
                      rounded: "full",
                      onClick: open
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "size-4"
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div><div class="col-span-12 sm:col-span-6 mt-6"><div class="flex w-full flex-col gap-4 sm:flex-row"><div class="relative grow"><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Url Video Produk",
        placeholder: "Contoh: www.commerce.com"
      }, null, _parent));
      _push(`</div></div><div class="relative grow"><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"><label class="nui-input-label" for="nui-input-f39c7d2d-067e-400e-ac21-d2292df2f668">Kondisi</label><div class="nui-select-wrapper nui-select-default nui-select-md nui-select-rounded-sm"><div><select name="checkbox_base" value="default" label="baru" color="warning"></select>`);
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "checkbox_base",
        value: "warning",
        label: "bekas",
        color: "warning"
      }, null, _parent));
      _push(`</div></div></div></div></div><div class="col-span-12 sm:col-span-6 mt-6"><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_Field, { name: "event.longDesc" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseTextarea, {
              label: "Deskripsi Produk",
              shape: "curved",
              placeholder: "Tuliskan detail Produk...",
              rows: "4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseTextarea, {
                label: "Deskripsi Produk",
                shape: "curved",
                placeholder: "Tuliskan detail Produk...",
                rows: "4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div><br><div class="border-muted-200"><div class="nui-card nui-card-rounded-sm nui-card-default"><div class="bg-white dark:bg-muted-800/70 p-10"><h4 class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal"> Varian Produk </h4><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400"> Tambah varian agar pembeli dapat memilih produk yang sesuai. </span><div class="cklsa">`);
      _push(ssrRenderComponent(_component_BaseButton, { class: "!h-12" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:plus",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(` \xA0 Tambah Varian `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:plus",
                class: "h-4 w-4"
              }),
              createTextVNode(" \xA0 Tambah Varian ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div><br><div class="border-muted-200"><div class="nui-card nui-card-rounded-sm nui-card-default"><div class="bg-white dark:bg-muted-800/70 p-10"><div class="mb-2"><h3 class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal"> Harga </h3><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400"> Ini adalah informasi yang pertama ditampilkan untuk pelanggan </span></div><div class="col-span-12 sm:col-span-6 mt-6"><div class="flex w-full flex-col gap-4 sm:flex-row"><div class="relative grow"><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Minimum Pesanan",
        placeholder: "Contoh: 1"
      }, null, _parent));
      _push(`</div></div><div class="relative grow"><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Minimum Pesanan",
        placeholder: "Contoh: 1"
      }, null, _parent));
      _push(`</div></div></div></div></div></div></div><br><div class="border-muted-200"><div class="nui-card nui-card-rounded-sm nui-card-default"><div class="bg-white dark:bg-muted-800/70 p-10"><table width="100%"><tr><td width="33%" class="tdss2"><div class="mb-2"><h3 class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal"> Varian Produk </h3><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400"> Tambah varian agar pembeli dapat memilih produk yang sesuai. </span></div></td><td width="33%" align="center" class="tdss2"><div class="flex jkss"><div class="card-tabs">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        shape: "curved",
        class: "!h-12 w-dsb"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Batal`);
          } else {
            return [
              createTextVNode("Batal")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` \xA0 `);
      _push(ssrRenderComponent(_component_BaseButton, {
        type: "submit",
        shape: "curved",
        color: "primary",
        class: "!h-12 w-dsb"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Simpan`);
          } else {
            return [
              createTextVNode("Simpan")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></td><td class="tdss2" align="right">`);
      _push(ssrRenderComponent(_component_BaseButton, { class: "!h-12" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:plus",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(` \xA0 Tambah Varian `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:plus",
                class: "h-4 w-4"
              }),
              createTextVNode(" \xA0 Tambah Varian ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</td></tr></table></div></div></div></form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/produk/tambah-produk.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
