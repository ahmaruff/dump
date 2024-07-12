import { _ as _sfc_main$2 } from './BaseBreadcrumb-cZDskCmn.mjs';
import { f as useRouter$1, m as useRoute, _ as __nuxt_component_0$2, d as _export_sfc } from './server.mjs';
import { _ as _sfc_main$3 } from './BaseInput-BgsoGXSG.mjs';
import { _ as _sfc_main$4 } from './BaseSelect-BU4F-qvb.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$5 } from './BaseButtonIcon-BwaQtzFl.mjs';
import { _ as _sfc_main$6 } from './BaseRadio-Bcx0iNXD.mjs';
import { _ as _sfc_main$7 } from './BaseTextarea-BxXCnKx0.mjs';
import { _ as _sfc_main$8 } from './BaseSwitchThin-Cj-cBPdI.mjs';
import { u as useJwtAuth } from './composables-DmWjNlaH.mjs';
import { u as useToaster } from './toaster-B1V8z_xL.mjs';
import { useSSRContext, defineComponent, ref, reactive, resolveComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import './BaseDropdownItem-eyL-Ji7e.mjs';
import '@headlessui/vue';
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
import './BaseInputHelpText-CmEQTnIf.mjs';
import './input-id-Bz_TYZXb.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProdukEdit",
  __ssrInlineRender: true,
  setup(__props) {
    useJwtAuth();
    useRouter$1();
    useToaster();
    const categories = ref([]);
    ref(null);
    const selectedCategoryFields = ref([]);
    ref([]);
    ref(null);
    ref([]);
    ref(Array(10).fill(null));
    ref(Array(10).fill(null));
    ref([]);
    const product = reactive({
      name: "",
      description: "",
      stock: "",
      price: "",
      min_order: "",
      weight: "",
      length: "",
      width: "",
      height: "",
      is_active: true,
      product_category_id: "",
      images: []
    });
    const images = ref(Array(10).fill(null));
    useRoute();
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
      const _component_BaseBreadcrumb = _sfc_main$2;
      const _component_Icon = __nuxt_component_0$2;
      const _component_BaseInput = _sfc_main$3;
      const _component_BaseSelect = _sfc_main$4;
      const _component_BaseInputFileHeadless = _sfc_main$1$1;
      const _component_center = resolveComponent("center");
      const _component_BaseButtonIcon = _sfc_main$5;
      const _component_BaseRadio = _sfc_main$6;
      const _component_BaseTextarea = _sfc_main$7;
      const _component_BaseSwitchThin = _sfc_main$8;
      _push(`<form${ssrRenderAttrs(_attrs)} data-v-6813f880><div class="border-muted-200" data-v-6813f880><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-6813f880><div class="bg-white dark:bg-muted-800/70 p-10" data-v-6813f880><div class="mb-2" data-v-6813f880>`);
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
      _push(`</div><div class="mb-2" data-v-6813f880><div class="mlls" data-v-6813f880><div class="title-m-1" data-v-6813f880>Informasi Produk</div><div class="title-m-2" data-v-6813f880>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-6813f880><div class="line-height-normal" data-v-6813f880><span class="title-m-3" data-v-6813f880>Nama Produk</span> <span class="alert-red" data-v-6813f880>Wajib</span><br data-v-6813f880><span class="title-m-2" data-v-6813f880>Nama produk minimal mempunyai 40 karakter dengan memasukkan merek, jenis produk, warna, bahan, atau tipe.</span></div><div class="line-height-normal" data-v-6813f880>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        placeholder: "Contoh: Jenis/Kategori Produk + Merek + Keterangan",
        modelValue: product.name,
        "onUpdate:modelValue": ($event) => product.name = $event
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-6813f880><div class="line-height-normal" data-v-6813f880><span class="title-m-3" data-v-6813f880>Kategori</span> <span class="alert-red" data-v-6813f880>Wajib</span><br data-v-6813f880><span class="title-m-2" data-v-6813f880>Pilih kategori yang sesuai dengan produk. Pemilihan kategori yang tepat akan mempermudah barang untuk dicari oleh pembeli.</span></div><div class="line-height-normal" data-v-6813f880>`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        rounded: "sm",
        modelValue: _ctx.selectedCategoryId,
        "onUpdate:modelValue": ($event) => _ctx.selectedCategoryId = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option${ssrRenderAttr("value", null)} data-v-6813f880${_scopeId}>Pilih Kategori</option><!--[-->`);
            ssrRenderList(categories.value, (category) => {
              _push2(`<option${ssrRenderAttr("value", category.product_id)} data-v-6813f880${_scopeId}>${ssrInterpolate(category.name)}</option>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("option", { value: null }, "Pilih Kategori"),
              (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category) => {
                return openBlock(), createBlock("option", {
                  key: category.id,
                  value: category.product_id
                }, toDisplayString(category.name), 9, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (selectedCategoryFields.value.length > 0) {
        _push(`<div data-v-6813f880><!--[-->`);
        ssrRenderList(selectedCategoryFields.value, (field, index) => {
          _push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-6813f880><div class="line-height-normal" data-v-6813f880><span class="title-m-3" data-v-6813f880>${ssrInterpolate(field.label)}</span>`);
          if (field.required) {
            _push(`<span class="alert-red" data-v-6813f880>Wajib</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<br data-v-6813f880></div><div class="line-height-normal" data-v-6813f880>`);
          _push(ssrRenderComponent(_component_BaseInput, {
            modelValue: field.id,
            "onUpdate:modelValue": ($event) => field.id = $event,
            type: "hidden"
          }, null, _parent));
          _push(ssrRenderComponent(_component_BaseInput, {
            modelValue: field.name,
            "onUpdate:modelValue": ($event) => field.name = $event,
            type: "hidden"
          }, null, _parent));
          _push(ssrRenderComponent(_component_BaseInput, {
            modelValue: field.type,
            "onUpdate:modelValue": ($event) => field.type = $event,
            type: "hidden"
          }, null, _parent));
          _push(ssrRenderComponent(_component_BaseInput, {
            modelValue: field.label,
            "onUpdate:modelValue": ($event) => field.label = $event,
            type: "hidden"
          }, null, _parent));
          _push(ssrRenderComponent(_component_BaseInput, {
            modelValue: field.required,
            "onUpdate:modelValue": ($event) => field.required = $event,
            type: "hidden"
          }, null, _parent));
          _push(ssrRenderComponent(_component_BaseInput, {
            modelValue: field.placeholder,
            "onUpdate:modelValue": ($event) => field.placeholder = $event,
            type: "hidden"
          }, null, _parent));
          if (field.type === "text" || field.type === "number") {
            _push(ssrRenderComponent(_component_BaseInput, {
              type: field.type,
              name: field.name,
              modelValue: field.value,
              "onUpdate:modelValue": ($event) => field.value = $event,
              placeholder: field.placeholder
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (field.type === "select") {
            _push(ssrRenderComponent(_component_BaseSelect, {
              modelValue: field.value,
              "onUpdate:modelValue": ($event) => field.value = $event
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<!--[-->`);
                  ssrRenderList(field.options, (option) => {
                    _push2(`<option${ssrRenderAttr("value", option)} data-v-6813f880${_scopeId}>${ssrInterpolate(option)}</option>`);
                  });
                  _push2(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(field.options, (option) => {
                      return openBlock(), createBlock("option", {
                        key: option,
                        value: option
                      }, toDisplayString(option), 9, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><br data-v-6813f880><div class="border-muted-200" data-v-6813f880><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-6813f880><div class="bg-white dark:bg-muted-800/70 p-10" data-v-6813f880><div class="mb-2" data-v-6813f880><div class="mlls" data-v-6813f880><div class="title-m-1" data-v-6813f880>Detail Produk</div><div class="title-m-2" data-v-6813f880>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-6813f880><div class="line-height-normal" data-v-6813f880><span class="title-m-3" data-v-6813f880>Foto Produk</span> <span class="alert-red" data-v-6813f880>Wajib</span><br data-v-6813f880><span class="title-m-2" data-v-6813f880>Wajib menambahkan minimal 1 dari 10 foto produk.<br data-v-6813f880>Format foto harus jpg jpeg ong dan mempunyai ukuran minimal 300 \xD7 300 px (untuk gambar optimal, gunakan ukuran min. 1.200 x 1.200 px).</span></div><div class="line-height-normal" data-v-6813f880><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4" data-v-6813f880><!--[-->`);
      ssrRenderList(10, (index) => {
        _push(`<div class="photo-upload-item" data-v-6813f880>`);
        _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
          modelValue: images.value[index - 1],
          "onUpdate:modelValue": ($event) => images.value[index - 1] = $event,
          accept: "image/*"
        }, {
          default: withCtx(({ open, remove, preview, files }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative size-20" data-v-6813f880${_scopeId}>`);
              if ((files == null ? void 0 : files.length) && files.item(0)) {
                _push2(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto" data-v-6813f880${_scopeId}>`);
              } else if (product == null ? void 0 : product.images[index - 1]) {
                _push2(`<img${ssrRenderAttr("src", product == null ? void 0 : product.images[index - 1])} alt="Upload preview" class="img-close-foto" data-v-6813f880${_scopeId}>`);
              } else {
                _push2(`<div class="kotak-dotted" data-v-6813f880${_scopeId}>`);
                _push2(ssrRenderComponent(_component_center, null, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" data-v-6813f880${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<br data-v-6813f880${_scopeId}> ${ssrInterpolate(index === 1 ? "Foto Utama" : "Foto Ke - " + index)}</div>`);
              }
              if ((files == null ? void 0 : files.length) && files.item(0)) {
                _push2(`<div class="absolute bottom-0 end-0 z-20" data-v-6813f880${_scopeId}>`);
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
                _push2(`<div class="absolute bottom-0 end-0 z-20" data-v-6813f880${_scopeId}><div class="relative" data-nui-tooltip="Upload image" data-v-6813f880${_scopeId}>`);
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
                  (files == null ? void 0 : files.length) && files.item(0) ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: preview(files.item(0)).value,
                    alt: "Upload preview",
                    class: "img-close-foto"
                  }, null, 8, ["src"])) : (product == null ? void 0 : product.images[index - 1]) ? (openBlock(), createBlock("img", {
                    key: 1,
                    src: product == null ? void 0 : product.images[index - 1],
                    alt: "Upload preview",
                    class: "img-close-foto"
                  }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                    key: 2,
                    class: "kotak-dotted"
                  }, [
                    createVNode(_component_center, null, {
                      default: withCtx(() => [
                        createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                      ]),
                      _: 1
                    }),
                    createVNode("br"),
                    createTextVNode(" " + toDisplayString(index === 1 ? "Foto Utama" : "Foto Ke - " + index), 1)
                  ])),
                  (files == null ? void 0 : files.length) && files.item(0) ? (openBlock(), createBlock("div", {
                    key: 3,
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
                    key: 4,
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
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-6813f880><div class="line-height-normal" data-v-6813f880><span class="title-m-3" data-v-6813f880>URL Video Produk</span><br data-v-6813f880><span class="title-m-2" data-v-6813f880>Tambah video agar pembeli semakin tertarik dengan produkmu.</span><br data-v-6813f880><span class="title-m-2" data-v-6813f880>Hanya dapat menambahkan video yang berasal dari sosial media yang</span><span class="title-m-2" data-v-6813f880>dapat diakses oleh publik.</span></div><div class="line-height-normal" data-v-6813f880>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        placeholder: "Contoh: www.commerce.com",
        modelValue: product.video_url,
        "onUpdate:modelValue": ($event) => product.video_url = $event
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-6813f880><div class="line-height-normal" data-v-6813f880><span class="title-m-3" data-v-6813f880>Kondisi</span> <span class="alert-red" data-v-6813f880>Wajib</span><br data-v-6813f880><span class="title-m-2" data-v-6813f880>Wajib menambahkan keterangan kondisi produk baru atau bekas</span></div><div class="line-height-normal" style="${ssrRenderStyle({ "margin-left": "15px" })}" data-v-6813f880><div class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4" data-v-6813f880>`);
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: product.condition,
        "onUpdate:modelValue": ($event) => product.condition = $event,
        name: "checkbox_base",
        value: "1",
        label: "Baru",
        color: "warning",
        type: "number"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: product.condition,
        "onUpdate:modelValue": ($event) => product.condition = $event,
        name: "checkbox_base",
        value: "0",
        label: "Bekas",
        color: "warning",
        type: "number"
      }, null, _parent));
      _push(`</div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-6813f880><div class="line-height-normal" data-v-6813f880><span class="title-m-3" data-v-6813f880>Deskripsi Produk</span><br data-v-6813f880><span class="title-m-2" data-v-6813f880>Pastikan deskripsi produk memuat penjelasan detail terkait produkmu.</span><br data-v-6813f880><span class="title-m-2" data-v-6813f880>agar pembeli mudah mengerti dan menemukan produkmu.</span></div><div class="line-height-normal" data-v-6813f880>`);
      _push(ssrRenderComponent(_component_BaseTextarea, {
        placeholder: "Tuliskan detail Produk....",
        modelValue: product.description,
        "onUpdate:modelValue": ($event) => product.description = $event
      }, null, _parent));
      _push(`</div></div></div></div></div></div><br data-v-6813f880><div class="border-muted-200" data-v-6813f880><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-6813f880><div class="bg-white dark:bg-muted-800/70 p-10" data-v-6813f880><div class="mb-2" data-v-6813f880><div class="mlls" data-v-6813f880><div class="title-m-1" data-v-6813f880>Harga</div><div class="title-m-2" data-v-6813f880>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-6813f880><div class="line-height-normal" data-v-6813f880><span class="title-m-3" data-v-6813f880>Minimum Pesanan</span> <span class="alert-red" data-v-6813f880>Wajib</span><br data-v-6813f880><span class="title-m-2" data-v-6813f880>Atur jumlah minimum yang harus dibeli untuk produk ini.</span></div><div class="line-height-normal" data-v-6813f880>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        placeholder: "Contoh: 3",
        modelValue: product.min_order,
        "onUpdate:modelValue": ($event) => product.min_order = $event,
        type: "number"
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-6813f880><div class="line-height-normal" data-v-6813f880><span class="title-m-3" data-v-6813f880>Harga Satuan</span> <span class="alert-red" data-v-6813f880>Wajib</span><br data-v-6813f880><span class="title-m-2" data-v-6813f880>Atur jumlah minimum yang harus dibeli untuk produk ini.</span></div><div class="line-height-normal" data-v-6813f880>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        placeholder: "Contoh: Rp10.000",
        modelValue: product.price,
        "onUpdate:modelValue": ($event) => product.price = $event,
        type: "number"
      }, null, _parent));
      _push(`</div></div></div></div></div></div><br data-v-6813f880><div class="border-muted-200" data-v-6813f880><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-6813f880><div class="bg-white dark:bg-muted-800/70 p-10" data-v-6813f880><div class="mb-2" data-v-6813f880><div class="mlls" data-v-6813f880><div class="title-m-1" data-v-6813f880>Pengelolaan Produk</div><div class="title-m-2" data-v-6813f880>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-6813f880><div class="line-height-normal" data-v-6813f880><span class="title-m-3" data-v-6813f880>Status Produk</span><br data-v-6813f880><span class="title-m-2" data-v-6813f880>Jika status aktif, produkmu dapat dicari oleh calon pembeli.</span></div><div class="line-height-normal" data-v-6813f880>`);
      _push(ssrRenderComponent(_component_BaseSwitchThin, {
        label: "Aktifkan Produk",
        color: "primary",
        modelValue: product.is_active,
        "onUpdate:modelValue": ($event) => product.is_active = $event
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-6813f880><div class="line-height-normal" data-v-6813f880><span class="title-m-3" data-v-6813f880>Stok Produk</span><br data-v-6813f880><span class="title-m-2" data-v-6813f880>Jumlah barang atau unit yang tersedia untuk dijual.</span></div><div class="line-height-normal" data-v-6813f880>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        placeholder: "Contoh: 3",
        modelValue: product.stock,
        "onUpdate:modelValue": ($event) => product.stock = $event,
        type: "number"
      }, null, _parent));
      _push(`</div></div></div></div></div></div><br data-v-6813f880><div class="border-muted-200" data-v-6813f880><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-6813f880><div class="bg-white dark:bg-muted-800/70 p-10" data-v-6813f880><div class="mb-2" data-v-6813f880><div class="mlls" data-v-6813f880><div class="title-m-1" data-v-6813f880>Berat &amp; Pengiriman</div><div class="title-m-2" data-v-6813f880>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-6813f880><div class="line-height-normal" data-v-6813f880><span class="title-m-3" data-v-6813f880>Berat Produk</span><br data-v-6813f880><span class="title-m-2" data-v-6813f880>Jumlah barang atau unit yang tersedia untuk dijual.</span></div><div class="line-height-normal" data-v-6813f880>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        placeholder: "Contoh: 1",
        modelValue: product.weight,
        "onUpdate:modelValue": ($event) => product.weight = $event,
        type: "number"
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-6813f880><div class="line-height-normal" data-v-6813f880><span class="title-m-3" data-v-6813f880>Ukuran Produk</span><br data-v-6813f880><span class="title-m-2" data-v-6813f880>Masukkan ukuran produk setelah dikemas untuk menghitung berat volume.</span></div><div class="line-height-normal grid grid-cols-1 md:grid-cols-3 gap-4" data-v-6813f880>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        placeholder: "Panjang (cm)",
        modelValue: product.length,
        "onUpdate:modelValue": ($event) => product.length = $event,
        type: "number"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInput, {
        placeholder: "Lebar (cm)",
        modelValue: product.width,
        "onUpdate:modelValue": ($event) => product.width = $event,
        type: "number"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInput, {
        placeholder: "Tinggi (cm)",
        modelValue: product.height,
        "onUpdate:modelValue": ($event) => product.height = $event,
        type: "number"
      }, null, _parent));
      _push(`</div></div></div></div></div></div><div class="flex justify-center fixed bottom-8 inset-x-0" data-v-6813f880><div class="p-6 rounded-lg shadow-inner bg-white w-fit line-height-normal" data-v-6813f880><button type="button" class="static nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-default !h-12 sm:w-40 mx-2 transform transition-transform duration-300 hover:scale-105" data-v-6813f880> Cancel </button><button type="submit" class="static nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-primary !h-12 sm:w-40 mx-2 transform transition-transform duration-300 hover:scale-105" data-v-6813f880> Submit </button></div></div></form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/produk/ProdukEdit.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6813f880"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProdukEdit = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ProdukEdit, { class: "pe-4 xl:pe-10" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin-produk/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
