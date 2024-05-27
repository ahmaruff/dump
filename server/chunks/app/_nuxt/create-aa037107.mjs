import { g as _export_sfc, e as _sfc_main$v, a as __nuxt_component_2$1 } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseInputFileHeadless-563a3359.mjs';
import { _ as _sfc_main$2 } from './BaseButtonIcon-e5109a33.mjs';
import { _ as _sfc_main$3 } from './BaseTextarea-9479699a.mjs';
import { useSSRContext, defineComponent, ref, reactive, computed, resolveComponent, withCtx, createVNode, openBlock, createBlock, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
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
import 'wretch';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@headlessui/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
import './file-preview-79d105db.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const showSelect = ref(false);
    const categories = ref([]);
    const selectedCategory = ref(null);
    ref([]);
    const etalases = ref([]);
    const selectedEtalase = ref(null);
    ref([]);
    const formData = reactive({
      name: "",
      description: "",
      stock: null,
      price: null,
      images: null,
      condition: null,
      video_url: null,
      min_order: null,
      weight: null,
      length: null,
      width: null,
      height: null,
      is_active: true,
      product_category_id: ""
    });
    computed({
      get: () => selectedCategory.value ? selectedCategory.value.id : null,
      set: (value) => {
        selectedCategory.value = categories.value.find((category) => category.id === value) || null;
      }
    });
    computed({
      get: () => selectedEtalase.value ? selectedEtalase.value.id : null,
      set: (value) => {
        selectedEtalase.value = etalases.value.find((etalase) => etalase.id === value) || null;
      }
    });
    ref(null);
    ref(false);
    const images = ref(Array(10).fill(null));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$v;
      const _component_BaseInputFileHeadless = _sfc_main$1;
      const _component_center = resolveComponent("center");
      const _component_BaseButtonIcon = _sfc_main$2;
      const _component_Icon = __nuxt_component_2$1;
      const _component_Field = resolveComponent("Field");
      const _component_BaseTextarea = _sfc_main$3;
      _push(`<!--[--><div class="flex w-full flex-wrap items-center justify-between px-3 ml-5 -mt-16" data-v-66214840><h1 class="mb-2 mt-0 text-2xl font-medium leading-tight text-black" data-v-66214840> Tambah Produk </h1></div><form action="/shop-admin" class="mx-auto w-full" data-v-66214840><div class="border-muted-200" data-v-66214840><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-66214840><div class="bg-white dark:bg-muted-800/70 p-10" data-v-66214840><div class="mb-2" data-v-66214840><h3 class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal" data-v-66214840> Informasi Produk </h3><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400" data-v-66214840> Ini adalah informasi yang pertama ditampilkan untuk pelanggan </span></div><div class="col-span-12 mt-6" data-v-66214840><div class="col-span-12" data-v-66214840>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Nama Produk",
        placeholder: "Contoh: Jenis/Kategori Produk + Merek + Keterangan",
        modelValue: formData.name,
        "onUpdate:modelValue": ($event) => formData.name = $event
      }, null, _parent));
      _push(`</div></div><div class="col-span-12 sm:col-span-6 mt-6" data-v-66214840><div class="flex w-full flex-col gap-4 sm:flex-row" data-v-66214840><div class="relative grow" data-v-66214840><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-66214840><label class="nui-input-label" for="nui-input-f39c7d2d-067e-400e-ac21-d2292df2f668" data-v-66214840>Kategori</label><div class="nui-select-wrapper nui-select-default nui-select-md nui-select-rounded-sm" data-v-66214840><div data-v-66214840><select class="nui-select nui-select border-unset" id="nui-input-fa27fa71-0023-45d5-ac67-2b807f99916e" data-v-66214840><option${ssrRenderAttr("value", null)} data-v-66214840>Pilih Kategori</option><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(`<option${ssrRenderAttr("value", category.id)} data-v-66214840>${ssrInterpolate(category.name)}</option>`);
      });
      _push(`<!--]--></select><div class="nui-select-chevron nui-chevron border-unset" data-v-66214840><svg aria-hidden="true" viewBox="0 0 24 24" class="nui-select-chevron-inner" data-v-66214840><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6" data-v-66214840></path></svg></div></div></div></div></div></div><div class="vc-popover-content-wrapper is-interactive" data-v-66214840></div></div></div></div></div><br data-v-66214840><div class="border-muted-200" data-v-66214840><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-66214840><div class="bg-white dark:bg-muted-800/70 p-10" data-v-66214840><div class="mb-2" data-v-66214840><h3 class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal" data-v-66214840> Detail Produk </h3><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400" data-v-66214840> Ini adalah informasi yang pertama ditampilkan untuk pelanggan </span></div><div class="col-span-2" data-v-66214840><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-66214840><label class="nui-input-label" for="nui-input-89b0cb01-2c29-4d47-9e2d-2a62d6ead7cf" data-v-66214840>Foto Produk</label><div class="flex items-center w-auto" data-v-66214840><!--[-->`);
      ssrRenderList(10, (index) => {
        _push(`<div class="photo-upload-item" data-v-66214840>`);
        _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
          modelValue: images.value[index - 1],
          "onUpdate:modelValue": ($event) => images.value[index - 1] = $event,
          accept: "image/*"
        }, {
          default: withCtx(({ open, remove, preview, files }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative size-20" data-v-66214840${_scopeId}>`);
              if (files?.length && files.item(0)) {
                _push2(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto" data-v-66214840${_scopeId}>`);
              } else {
                _push2(`<div class="kotak-dotted" data-v-66214840${_scopeId}>`);
                _push2(ssrRenderComponent(_component_center, null, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" data-v-66214840${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<br data-v-66214840${_scopeId}> ${ssrInterpolate(index === 1 ? "Foto Utama" : "Foto Ke - " + index)}</div>`);
              }
              if (files?.length && files.item(0)) {
                _push2(`<div class="absolute bottom-0 end-0 z-20" data-v-66214840${_scopeId}>`);
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
                _push2(`<div class="absolute bottom-0 end-0 z-20" data-v-66214840${_scopeId}><div class="relative" data-nui-tooltip="Upload image" data-v-66214840${_scopeId}>`);
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
                    createTextVNode(" " + toDisplayString(index === 1 ? "Foto Utama" : "Foto Ke - " + index), 1)
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
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div><div class="col-span-12 sm:col-span-6 mt-6" data-v-66214840><div class="flex w-full flex-col gap-4 sm:flex-row" data-v-66214840><div class="relative grow" data-v-66214840><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-66214840><label class="nui-input-label" for="nui-input-f39c7d2d-067e-400e-ac21-d2292df2f668" data-v-66214840>Kondisi</label><div class="nui-select-wrapper nui-select-default nui-select-md nui-select-rounded-sm" data-v-66214840><div data-v-66214840><select class="nui-select border-unset" id="nui-input-fa27fa71-0023-45d5-ac67-2b807f99916e" data-v-66214840><option${ssrRenderAttr("value", null)} data-v-66214840>Pilih Kondisi</option><option value="1" data-v-66214840>baru</option><option value="0" data-v-66214840>bekas</option></select><div class="nui-select-chevron nui-chevron" data-v-66214840><svg aria-hidden="true" viewBox="0 0 24 24" class="nui-select-chevron-inner" data-v-66214840><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6" data-v-66214840></path></svg></div></div></div></div></div><div class="relative grow" data-v-66214840><div class="col-span-6" data-v-66214840>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Url Video Produk",
        placeholder: "Contoh: www.commerce.com",
        modelValue: formData.video_url,
        "onUpdate:modelValue": ($event) => formData.video_url = $event
      }, null, _parent));
      _push(`</div></div></div><div class="vc-popover-content-wrapper is-interactive" data-v-66214840></div></div><div class="col-span-12 sm:col-span-6 mt-6" data-v-66214840><div class="col-span-12" data-v-66214840>`);
      _push(ssrRenderComponent(_component_Field, { name: "event.longDesc" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseTextarea, {
              label: "Deskripsi Produk",
              shape: "curved",
              placeholder: "Tuliskan detail Produk...",
              rows: "4",
              modelValue: formData.description,
              "onUpdate:modelValue": ($event) => formData.description = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseTextarea, {
                label: "Deskripsi Produk",
                shape: "curved",
                placeholder: "Tuliskan detail Produk...",
                rows: "4",
                modelValue: formData.description,
                "onUpdate:modelValue": ($event) => formData.description = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div><br data-v-66214840><div class="border-muted-200" data-v-66214840><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-66214840><div class="bg-white dark:bg-muted-800/70 p-10" data-v-66214840><div class="mb-2" data-v-66214840><h3 class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal" data-v-66214840> Varian Produk </h3><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400" data-v-66214840> tambah varian agar pembeli dapat memilih produk yang sesuai </span><button class="nui-button nui-button-small nui-button-rounded nui-button-solid float-right" data-v-66214840>${ssrInterpolate(showSelect.value ? "Hapus Varian" : "Tambah Varian")}</button></div>`);
      if (showSelect.value) {
        _push(`<div class="col-span-12 sm:col-span-6 mt-6" data-v-66214840><div class="flex w-1/2 flex-col gap-4 sm:flex-row" data-v-66214840><div class="relative grow" data-v-66214840><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-66214840><label class="nui-input-label" for="nui-input-f39c7d2d-067e-400e-ac21-d2292df2f668" data-v-66214840>Kondisi</label><div class="nui-select-wrapper nui-select-default nui-select-md nui-select-rounded-sm" data-v-66214840><div data-v-66214840><select class="nui-select" id="nui-input-fa27fa71-0023-45d5-ac67-2b807f99916e" data-v-66214840><option value="" hidden="" data-v-66214840>Pilih Opsi</option><option value="baru" data-v-66214840>baru</option><option value="bekas" data-v-66214840>bekas</option></select><div class="nui-select-chevron nui-chevron" data-v-66214840><svg aria-hidden="true" viewBox="0 0 24 24" class="nui-select-chevron-inner" data-v-66214840><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6" data-v-66214840></path></svg></div></div></div></div></div></div><div class="vc-popover-content-wrapper is-interactive" data-v-66214840></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><br data-v-66214840><div class="border-muted-200" data-v-66214840><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-66214840><div class="bg-white dark:bg-muted-800/70 p-10" data-v-66214840><div class="mb-2" data-v-66214840><h3 class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal" data-v-66214840> Harga </h3><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400" data-v-66214840> ini adalah informasi yang pertama ditampilkan untuk pelanggan </span></div><div class="col-span-12 sm:col-span-6 mt-6" data-v-66214840><div class="flex w-full flex-col gap-4 sm:flex-row" data-v-66214840><div class="relative grow" data-v-66214840><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-66214840><label class="nui-input-label" for="nui-input-88972005-df30-4290-8090-d7a6fff8b790" data-v-66214840>Minimal Pemesanan</label><div class="nui-input-outer" data-v-66214840><div data-v-66214840><input type="number" class="nui-input border-unset" placeholder="Contoh: 1" id="nui-input-b8352d51-a953-4d0e-b5cf-22b183531ed0"${ssrRenderAttr("value", formData.min_order)} data-v-66214840></div></div></div></div><div class="relative grow" data-v-66214840><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-66214840><label class="nui-input-label" for="nui-input-88972005-df30-4290-8090-d7a6fff8b790" data-v-66214840>Harga Satuan</label><div class="nui-input-outer" data-v-66214840><div data-v-66214840><input type="number" class="nui-input border-unset" placeholder="Rp. " id="nui-input-b8352d51-a953-4d0e-b5cf-22b183531ed0"${ssrRenderAttr("value", formData.price)} data-v-66214840></div></div></div></div></div><div class="vc-popover-content-wrapper is-interactive" data-v-66214840></div></div></div></div></div><br data-v-66214840><div class="border-muted-200" data-v-66214840><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-66214840><div class="bg-white dark:bg-muted-800/70 p-10" data-v-66214840><div class="mb-2" data-v-66214840><h3 class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal" data-v-66214840> Pengelolaan Produk </h3><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400" data-v-66214840> ini adalah informasi yang pertama ditampilkan untuk pelanggan </span></div><div class="col-span-12 sm:col-span-6 mt-6" data-v-66214840><div class="flex w-full flex-col gap-4 sm:flex-row" data-v-66214840><div class="relative grow" data-v-66214840><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-66214840><label class="nui-input-label" for="nui-input-88972005-df30-4290-8090-d7a6fff8b790" data-v-66214840>Stok Produk</label><div class="nui-input-outer" data-v-66214840><div data-v-66214840><input type="number" class="nui-input" placeholder="Contoh: 1" id="nui-input-b8352d51-a953-4d0e-b5cf-22b183531ed0"${ssrRenderAttr("value", formData.stock)} data-v-66214840></div></div></div></div></div><div class="vc-popover-content-wrapper is-interactive" data-v-66214840></div></div></div></div></div><br data-v-66214840><div class="border-muted-200" data-v-66214840><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-66214840><div class="bg-white dark:bg-muted-800/70 p-10" data-v-66214840><div class="mb-2" data-v-66214840><h3 class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal" data-v-66214840> Berat &amp; Pengiriman </h3><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400" data-v-66214840> ini adalah informasi yang pertama ditampilkan untuk pelanggan </span></div><div class="col-span-12 sm:col-span-6 mt-6" data-v-66214840><div class="flex w-full flex-col gap-4 sm:flex-row" data-v-66214840><div class="relative grow" data-v-66214840><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-66214840><label class="nui-input-label" for="nui-input-88972005-df30-4290-8090-d7a6fff8b790" data-v-66214840>Berat Produk</label><div class="nui-input-outer" data-v-66214840><div data-v-66214840><input type="number" class="nui-input" placeholder="Contoh: 1" id="nui-input-b8352d51-a953-4d0e-b5cf-22b183531ed0"${ssrRenderAttr("value", formData.weight)} data-v-66214840></div></div></div></div><div class="relative grow" data-v-66214840></div></div><div class="flex w-full flex-col gap-4 sm:flex-row" data-v-66214840><div class="relative grow" data-v-66214840><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-66214840><label class="nui-input-label" for="nui-input-88972005-df30-4290-8090-d7a6fff8b790" data-v-66214840>Ukuran Produk</label><div class="nui-input-outer" data-v-66214840><div data-v-66214840><input type="number" class="nui-input" placeholder="Panjang" id="nui-input-b8352d51-a953-4d0e-b5cf-22b183531ed0"${ssrRenderAttr("value", formData.length)} data-v-66214840></div></div></div></div><div class="relative grow" data-v-66214840><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-66214840><label class="nui-input-label" for="nui-input-88972005-df30-4290-8090-d7a6fff8b790" data-v-66214840>Tinggi</label><div class="nui-input-outer" data-v-66214840><div data-v-66214840><input type="number" class="nui-input" placeholder="Tinggi" id="nui-input-b8352d51-a953-4d0e-b5cf-22b183531ed0"${ssrRenderAttr("value", formData.height)} data-v-66214840></div></div></div></div><div class="relative grow" data-v-66214840><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-66214840><label class="nui-input-label" for="nui-input-88972005-df30-4290-8090-d7a6fff8b790" data-v-66214840>Lebar</label><div class="nui-input-outer" data-v-66214840><div data-v-66214840><input type="number" class="nui-input" placeholder="Lebar" id="nui-input-b8352d51-a953-4d0e-b5cf-22b183531ed0"${ssrRenderAttr("value", formData.width)} data-v-66214840></div></div></div></div><div class="relative grow" data-v-66214840></div></div><div class="vc-popover-content-wrapper is-interactive" data-v-66214840></div></div></div></div></div><br data-v-66214840><div class="text-center md:col-span-5" data-v-66214840><div class="-mt-4 inline-flex w-full items-center justify-center gap-2 sm:w-auto" data-v-66214840><button type="button" rel="" target="" class="nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-default !h-12 w-full sm:w-40" data-v-66214840> Cancel </button><button type="submit" rel="" target="" class="nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-primary !h-12 w-full sm:w-40" data-v-66214840> Submit </button></div></div></form><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop-admin/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-66214840"]]);

export { create as default };
