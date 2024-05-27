import { g as _export_sfc, e as _sfc_main$v, a as __nuxt_component_2$1 } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseInputFileHeadless-563a3359.mjs';
import { _ as _sfc_main$2 } from './BaseButtonIcon-e5109a33.mjs';
import { _ as _sfc_main$3 } from './BaseTextarea-9479699a.mjs';
import { useSSRContext, defineComponent, ref, reactive, computed, resolveComponent, withCtx, createVNode, openBlock, createBlock, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "create copy",
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
    const mainImagePreviews = ref(Array(10).fill(null));
    const imagePreviews = ref(Array(10).fill(null));
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
      _push(`<!--[--><div class="flex w-full flex-wrap items-center justify-between px-3 ml-5 -mt-16" data-v-3a91204f><h1 class="mb-2 mt-0 text-2xl font-medium leading-tight text-black" data-v-3a91204f> Tambah Produk </h1></div><form class="mx-auto w-full" data-v-3a91204f><div class="border-muted-200" data-v-3a91204f><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-3a91204f><div class="bg-white dark:bg-muted-800/70 p-10" data-v-3a91204f><div class="mb-2" data-v-3a91204f><h3 class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal" data-v-3a91204f> Informasi Produk </h3><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400" data-v-3a91204f> Ini adalah informasi yang pertama ditampilkan untuk pelanggan </span></div><div class="col-span-12 mt-6" data-v-3a91204f><div class="col-span-12" data-v-3a91204f>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Nama Produk",
        placeholder: "Contoh: Jenis/Kategori Produk + Merek + Keterangan",
        modelValue: formData.name,
        "onUpdate:modelValue": ($event) => formData.name = $event
      }, null, _parent));
      _push(`</div></div><div class="col-span-12 sm:col-span-6 mt-6" data-v-3a91204f><div class="flex w-full flex-col gap-4 sm:flex-row" data-v-3a91204f><div class="relative grow" data-v-3a91204f><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-3a91204f><label class="nui-input-label" for="nui-input-f39c7d2d-067e-400e-ac21-d2292df2f668" data-v-3a91204f>Kategori</label><div class="nui-select-wrapper nui-select-default nui-select-md nui-select-rounded-sm" data-v-3a91204f><div data-v-3a91204f><select class="nui-select nui-select border-unset" id="nui-input-fa27fa71-0023-45d5-ac67-2b807f99916e" data-v-3a91204f><option${ssrRenderAttr("value", null)} data-v-3a91204f>Pilih Kategori</option><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(`<option${ssrRenderAttr("value", category.id)} data-v-3a91204f>${ssrInterpolate(category.name)}</option>`);
      });
      _push(`<!--]--></select><div class="nui-select-chevron nui-chevron border-unset" data-v-3a91204f><svg aria-hidden="true" viewBox="0 0 24 24" class="nui-select-chevron-inner" data-v-3a91204f><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6" data-v-3a91204f></path></svg></div></div></div></div></div></div><div class="vc-popover-content-wrapper is-interactive" data-v-3a91204f></div></div></div></div></div><br data-v-3a91204f><div class="border-muted-200" data-v-3a91204f><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-3a91204f><div class="bg-white dark:bg-muted-800/70 p-10" data-v-3a91204f><div class="mb-2" data-v-3a91204f><h3 class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal" data-v-3a91204f> Detail Produk </h3><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400" data-v-3a91204f> Ini adalah informasi yang pertama ditampilkan untuk pelanggan </span></div><div class="col-span-2" data-v-3a91204f><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-3a91204f><label class="nui-input-label" for="nui-input-89b0cb01-2c29-4d47-9e2d-2a62d6ead7cf" data-v-3a91204f>Foto Produk</label><div class="flex items-center w-auto" data-v-3a91204f><!--[-->`);
      ssrRenderList(10, (index) => {
        _push(`<div class="photo-upload-item" data-v-3a91204f>`);
        _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
          modelValue: images.value[index - 1],
          "onUpdate:modelValue": ($event) => images.value[index - 1] = $event,
          accept: "image/*"
        }, {
          default: withCtx(({ open, remove, preview, files }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative size-20" data-v-3a91204f${_scopeId}>`);
              if (files?.length && files.item(0)) {
                _push2(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto" data-v-3a91204f${_scopeId}>`);
              } else {
                _push2(`<div class="kotak-dotted" data-v-3a91204f${_scopeId}>`);
                _push2(ssrRenderComponent(_component_center, null, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" data-v-3a91204f${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<br data-v-3a91204f${_scopeId}> ${ssrInterpolate(index === 1 ? "Foto Utama" : "Foto Ke - " + index)}</div>`);
              }
              if (files?.length && files.item(0)) {
                _push2(`<div class="absolute bottom-0 end-0 z-20" data-v-3a91204f${_scopeId}>`);
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
                _push2(`<div class="absolute bottom-0 end-0 z-20" data-v-3a91204f${_scopeId}><div class="relative" data-nui-tooltip="Upload image" data-v-3a91204f${_scopeId}>`);
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
      _push(`<!--]--></div><div class="flex items-center w-auto" data-v-3a91204f><!--[-->`);
      ssrRenderList(10, (index) => {
        _push(`<label for="dropzone-file" class="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 p-1 mgks" data-v-3a91204f><div class="flex flex-col items-center justify-center p-2" data-v-3a91204f>`);
        if (mainImagePreviews.value[index]) {
          _push(`<div data-v-3a91204f><img${ssrRenderAttr("src", imagePreviews.value[index])} alt="Main Image" style="${ssrRenderStyle({ "max-width": "60px", "max-height": "60px", "margin": "5px" })}" data-v-3a91204f></div>`);
        } else {
          _push(`<div class="justify-center" data-v-3a91204f><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3a91204f><path fill-rule="evenodd" clip-rule="evenodd" d="M0.50602 14.7539C0.505957 15.5269 0.505893 16.3015 0.505891 17.0785C0.505894 17.2821 0.503119 17.4833 0.500369 17.6826C0.494206 18.1291 0.488171 18.5665 0.51381 19.002L0.515774 19.0354C0.555331 19.7078 0.595453 20.3898 0.742776 21.0433C1.19085 23.0309 2.31302 24.5008 4.22475 25.3031C5.27644 25.7445 6.38435 25.8915 7.51798 25.8908C8.55328 25.8901 9.58859 25.8907 10.6239 25.8912C12.851 25.8924 15.0782 25.8936 17.3053 25.8824C17.9335 25.8793 18.5714 25.8309 19.1874 25.7127C21.387 25.2906 22.9762 24.0866 23.7989 21.962C24.1865 20.9611 24.3044 19.9117 24.3049 18.8462C24.3065 15.6396 24.3071 12.4329 24.3016 9.22621C24.3012 9.04078 24.3506 8.93324 24.5122 8.8264C25.1629 8.39603 25.4922 7.77866 25.4938 6.99585C25.4954 6.25505 25.495 5.51424 25.4947 4.77344C25.4944 4.22231 25.4941 3.67118 25.4946 3.12005C25.4958 1.89316 24.5128 0.902553 23.2882 0.901495C23.101 0.901333 22.9137 0.90115 22.7265 0.900966C21.6125 0.899873 20.4985 0.898781 19.3846 0.9023C18.6125 0.90474 18.0034 1.23372 17.5756 1.87206C17.4638 2.03886 17.3547 2.09608 17.1549 2.09562C13.9668 2.08819 10.7787 2.08218 7.59071 2.09739C6.9618 2.10039 6.32406 2.14245 5.70632 2.2544C3.56448 2.64259 1.96339 3.7654 1.0924 5.81041C0.652858 6.84242 0.505107 7.93278 0.505561 9.04784C0.506332 10.9465 0.506176 12.8452 0.50602 14.7539ZM2.29086 8.99843C2.29113 8.2612 2.37195 7.53548 2.60981 6.83307C3.20824 5.1025 4.45994 4.24351 6.1678 3.97992C6.65191 3.9052 7.1479 3.88093 7.63857 3.87953C9.94186 3.87298 12.2452 3.87378 14.5485 3.87459C15.3112 3.87486 16.074 3.87513 16.8367 3.87513H17.1536C17.1553 3.91394 17.1574 3.94984 17.1593 3.98381C17.1632 4.05154 17.1666 4.11157 17.1664 4.1716L17.1659 4.39053C17.1637 5.26517 17.1615 6.13981 17.1567 7.01443C17.1498 8.27014 18.1791 9.25975 19.4438 9.23804C20.1429 9.22605 20.8422 9.22896 21.5485 9.2319C21.864 9.23322 22.1808 9.23454 22.4997 9.23454V14.6124C22.3837 14.558 22.2679 14.4971 22.1513 14.4358C21.8916 14.2993 21.6276 14.1605 21.3466 14.0851C20.4336 13.8402 19.6063 14.067 18.8868 14.6876C18.0225 15.4331 17.1562 16.1761 16.2899 16.9192C15.9366 17.2223 15.5832 17.5253 15.23 17.8286C15.1168 17.9257 15.0039 18.0232 14.891 18.1206C14.6312 18.3448 14.3714 18.5689 14.1086 18.7896C13.121 19.6192 11.7735 19.6491 10.7465 18.8662C10.6633 18.8027 10.5828 18.7357 10.5023 18.6687C10.4471 18.6228 10.392 18.5769 10.3359 18.5322C9.33977 17.7363 8.14122 17.6787 7.08311 18.3852C6.1604 19.0013 5.23964 19.6203 4.31888 20.2394C3.86936 20.5416 3.41985 20.8438 2.9701 21.1457C2.91957 21.1796 2.86804 21.212 2.80863 21.2494C2.77831 21.2685 2.74595 21.2888 2.71062 21.3114C2.43572 20.6122 2.29735 19.9039 2.29367 19.1722C2.28823 18.0883 2.2891 17.0045 2.28998 15.9206C2.29031 15.4993 2.29065 15.078 2.29062 14.6567C2.2906 14.3856 2.29058 14.1144 2.29056 13.8432C2.29041 12.2283 2.29027 10.6134 2.29086 8.99843ZM22.0359 4.35871H22.7305C22.8428 4.35876 22.9495 4.35837 23.0524 4.35799C23.2726 4.35719 23.4753 4.35645 23.6778 4.36017C24.0866 4.36769 24.3842 4.63209 24.418 5.00891C24.4504 5.37048 24.1607 5.7445 23.7638 5.77964C23.4723 5.80545 23.1783 5.80292 22.8843 5.8004C22.7599 5.79934 22.6356 5.79827 22.5114 5.79935C22.4114 5.80022 22.3114 5.80001 22.202 5.79978C22.149 5.79967 22.0939 5.79955 22.0355 5.79955C22.0355 5.93046 22.0356 6.06087 22.0357 6.19093C22.0359 6.5345 22.0362 6.87559 22.0347 7.21667C22.0345 7.24186 22.0348 7.26722 22.035 7.29263C22.0359 7.39791 22.0369 7.50422 22.014 7.60444C21.9331 7.95911 21.6031 8.1893 21.2499 8.15528C20.9065 8.12221 20.6358 7.85543 20.6245 7.48662C20.6127 7.09864 20.6152 6.71023 20.6179 6.31405C20.619 6.14361 20.6201 5.97173 20.6201 5.79784C20.4867 5.79784 20.3557 5.79805 20.2264 5.79826C19.9084 5.79877 19.6009 5.79927 19.2934 5.79655C19.2725 5.79637 19.2514 5.79627 19.2304 5.79617C19.0843 5.79547 18.9365 5.79476 18.7955 5.76574C18.4358 5.69171 18.2127 5.37448 18.2398 5.00908C18.266 4.65514 18.5513 4.37088 18.9199 4.36369C19.3082 4.35611 19.6967 4.35774 20.0943 4.35941C20.2656 4.36013 20.4387 4.36086 20.6141 4.36086C20.6141 4.19745 20.6136 4.03544 20.6132 3.87442C20.6122 3.50173 20.6112 3.13432 20.6157 2.76697C20.6203 2.38561 20.7959 2.12553 21.0943 2.02771C21.5668 1.87286 22.026 2.20217 22.0341 2.71352C22.0399 3.08545 22.0386 3.4575 22.0372 3.84036C22.0366 4.01069 22.0359 4.18316 22.0359 4.35871ZM9.25586 6.44365C8.11109 6.23917 7.01344 6.79482 6.35732 7.87809C6.09654 8.35618 5.98366 8.84888 6.01841 9.37013C6.09442 10.5102 6.65488 11.3463 7.68979 11.8074C8.74858 12.2791 9.77435 12.1309 10.6585 11.3786C11.5233 10.6427 11.8452 9.67605 11.569 8.57051C11.2699 7.37342 10.4663 6.65985 9.25586 6.44365Z" fill="#A2A5B9" data-v-3a91204f></path></svg><p class="w-auto text-xs mt-1 text-gray-500 dark:text-gray-400" data-v-3a91204f>${ssrInterpolate(index === 1 ? "Foto Utama" : "Foto Ke - " + index)}</p><input width="26" type="file"${ssrRenderAttr("id", "mainImageInput-" + index)} data-v-3a91204f></div>`);
        }
        _push(`</div></label>`);
      });
      _push(`<!--]--></div></div></div><div class="col-span-12 sm:col-span-6 mt-6" data-v-3a91204f><div class="flex w-full flex-col gap-4 sm:flex-row" data-v-3a91204f><div class="relative grow" data-v-3a91204f><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-3a91204f><label class="nui-input-label" for="nui-input-f39c7d2d-067e-400e-ac21-d2292df2f668" data-v-3a91204f>Kondisi</label><div class="nui-select-wrapper nui-select-default nui-select-md nui-select-rounded-sm" data-v-3a91204f><div data-v-3a91204f><select class="nui-select border-unset" id="nui-input-fa27fa71-0023-45d5-ac67-2b807f99916e" data-v-3a91204f><option${ssrRenderAttr("value", null)} data-v-3a91204f>Pilih Kondisi</option><option value="1" data-v-3a91204f>baru</option><option value="0" data-v-3a91204f>bekas</option></select><div class="nui-select-chevron nui-chevron" data-v-3a91204f><svg aria-hidden="true" viewBox="0 0 24 24" class="nui-select-chevron-inner" data-v-3a91204f><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6" data-v-3a91204f></path></svg></div></div></div></div></div><div class="relative grow" data-v-3a91204f><div class="col-span-6" data-v-3a91204f>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Url Video Produk",
        placeholder: "Contoh: www.commerce.com",
        modelValue: formData.video_url,
        "onUpdate:modelValue": ($event) => formData.video_url = $event
      }, null, _parent));
      _push(`</div></div></div><div class="vc-popover-content-wrapper is-interactive" data-v-3a91204f></div></div><div class="col-span-12 sm:col-span-6 mt-6" data-v-3a91204f><div class="col-span-12" data-v-3a91204f>`);
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
      _push(`</div></div></div></div></div><br data-v-3a91204f><div class="border-muted-200" data-v-3a91204f><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-3a91204f><div class="bg-white dark:bg-muted-800/70 p-10" data-v-3a91204f><div class="mb-2" data-v-3a91204f><h3 class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal" data-v-3a91204f> Varian Produk </h3><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400" data-v-3a91204f> tambah varian agar pembeli dapat memilih produk yang sesuai </span><button class="nui-button nui-button-small nui-button-rounded nui-button-solid float-right" data-v-3a91204f>${ssrInterpolate(showSelect.value ? "Hapus Varian" : "Tambah Varian")}</button></div>`);
      if (showSelect.value) {
        _push(`<div class="col-span-12 sm:col-span-6 mt-6" data-v-3a91204f><div class="flex w-1/2 flex-col gap-4 sm:flex-row" data-v-3a91204f><div class="relative grow" data-v-3a91204f><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-3a91204f><label class="nui-input-label" for="nui-input-f39c7d2d-067e-400e-ac21-d2292df2f668" data-v-3a91204f>Kondisi</label><div class="nui-select-wrapper nui-select-default nui-select-md nui-select-rounded-sm" data-v-3a91204f><div data-v-3a91204f><select class="nui-select" id="nui-input-fa27fa71-0023-45d5-ac67-2b807f99916e" data-v-3a91204f><option value="" hidden="" data-v-3a91204f>Pilih Opsi</option><option value="baru" data-v-3a91204f>baru</option><option value="bekas" data-v-3a91204f>bekas</option></select><div class="nui-select-chevron nui-chevron" data-v-3a91204f><svg aria-hidden="true" viewBox="0 0 24 24" class="nui-select-chevron-inner" data-v-3a91204f><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6" data-v-3a91204f></path></svg></div></div></div></div></div></div><div class="vc-popover-content-wrapper is-interactive" data-v-3a91204f></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><br data-v-3a91204f><div class="border-muted-200" data-v-3a91204f><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-3a91204f><div class="bg-white dark:bg-muted-800/70 p-10" data-v-3a91204f><div class="mb-2" data-v-3a91204f><h3 class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal" data-v-3a91204f> Harga </h3><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400" data-v-3a91204f> ini adalah informasi yang pertama ditampilkan untuk pelanggan </span></div><div class="col-span-12 sm:col-span-6 mt-6" data-v-3a91204f><div class="flex w-full flex-col gap-4 sm:flex-row" data-v-3a91204f><div class="relative grow" data-v-3a91204f><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-3a91204f><label class="nui-input-label" for="nui-input-88972005-df30-4290-8090-d7a6fff8b790" data-v-3a91204f>Minimal Pemesanan</label><div class="nui-input-outer" data-v-3a91204f><div data-v-3a91204f><input type="number" class="nui-input border-unset" placeholder="Contoh: 1" id="nui-input-b8352d51-a953-4d0e-b5cf-22b183531ed0"${ssrRenderAttr("value", formData.min_order)} data-v-3a91204f></div></div></div></div><div class="relative grow" data-v-3a91204f><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-3a91204f><label class="nui-input-label" for="nui-input-88972005-df30-4290-8090-d7a6fff8b790" data-v-3a91204f>Harga Satuan</label><div class="nui-input-outer" data-v-3a91204f><div data-v-3a91204f><input type="number" class="nui-input border-unset" placeholder="Rp. " id="nui-input-b8352d51-a953-4d0e-b5cf-22b183531ed0"${ssrRenderAttr("value", formData.price)} data-v-3a91204f></div></div></div></div></div><div class="vc-popover-content-wrapper is-interactive" data-v-3a91204f></div></div></div></div></div><br data-v-3a91204f><div class="border-muted-200" data-v-3a91204f><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-3a91204f><div class="bg-white dark:bg-muted-800/70 p-10" data-v-3a91204f><div class="mb-2" data-v-3a91204f><h3 class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal" data-v-3a91204f> Pengelolaan Produk </h3><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400" data-v-3a91204f> ini adalah informasi yang pertama ditampilkan untuk pelanggan </span></div><div class="col-span-12 sm:col-span-6 mt-6" data-v-3a91204f><div class="flex w-full flex-col gap-4 sm:flex-row" data-v-3a91204f><div class="relative grow" data-v-3a91204f><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-3a91204f><label class="nui-input-label" for="nui-input-88972005-df30-4290-8090-d7a6fff8b790" data-v-3a91204f>Stok Produk</label><div class="nui-input-outer" data-v-3a91204f><div data-v-3a91204f><input type="number" class="nui-input" placeholder="Contoh: 1" id="nui-input-b8352d51-a953-4d0e-b5cf-22b183531ed0"${ssrRenderAttr("value", formData.stock)} data-v-3a91204f></div></div></div></div></div><div class="vc-popover-content-wrapper is-interactive" data-v-3a91204f></div></div></div></div></div><br data-v-3a91204f><div class="border-muted-200" data-v-3a91204f><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-3a91204f><div class="bg-white dark:bg-muted-800/70 p-10" data-v-3a91204f><div class="mb-2" data-v-3a91204f><h3 class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal" data-v-3a91204f> Berat &amp; Pengiriman </h3><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400" data-v-3a91204f> ini adalah informasi yang pertama ditampilkan untuk pelanggan </span></div><div class="col-span-12 sm:col-span-6 mt-6" data-v-3a91204f><div class="flex w-full flex-col gap-4 sm:flex-row" data-v-3a91204f><div class="relative grow" data-v-3a91204f><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-3a91204f><label class="nui-input-label" for="nui-input-88972005-df30-4290-8090-d7a6fff8b790" data-v-3a91204f>Berat Produk</label><div class="nui-input-outer" data-v-3a91204f><div data-v-3a91204f><input type="number" class="nui-input" placeholder="Contoh: 1" id="nui-input-b8352d51-a953-4d0e-b5cf-22b183531ed0"${ssrRenderAttr("value", formData.weight)} data-v-3a91204f></div></div></div></div><div class="relative grow" data-v-3a91204f></div></div><div class="flex w-full flex-col gap-4 sm:flex-row" data-v-3a91204f><div class="relative grow" data-v-3a91204f><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-3a91204f><label class="nui-input-label" for="nui-input-88972005-df30-4290-8090-d7a6fff8b790" data-v-3a91204f>Ukuran Produk</label><div class="nui-input-outer" data-v-3a91204f><div data-v-3a91204f><input type="number" class="nui-input" placeholder="Panjang" id="nui-input-b8352d51-a953-4d0e-b5cf-22b183531ed0"${ssrRenderAttr("value", formData.length)} data-v-3a91204f></div></div></div></div><div class="relative grow" data-v-3a91204f><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-3a91204f><label class="nui-input-label" for="nui-input-88972005-df30-4290-8090-d7a6fff8b790" data-v-3a91204f>Tinggi</label><div class="nui-input-outer" data-v-3a91204f><div data-v-3a91204f><input type="number" class="nui-input" placeholder="Tinggi" id="nui-input-b8352d51-a953-4d0e-b5cf-22b183531ed0"${ssrRenderAttr("value", formData.height)} data-v-3a91204f></div></div></div></div><div class="relative grow" data-v-3a91204f><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon" data-v-3a91204f><label class="nui-input-label" for="nui-input-88972005-df30-4290-8090-d7a6fff8b790" data-v-3a91204f>Lebar</label><div class="nui-input-outer" data-v-3a91204f><div data-v-3a91204f><input type="number" class="nui-input" placeholder="Lebar" id="nui-input-b8352d51-a953-4d0e-b5cf-22b183531ed0"${ssrRenderAttr("value", formData.width)} data-v-3a91204f></div></div></div></div><div class="relative grow" data-v-3a91204f></div></div><div class="vc-popover-content-wrapper is-interactive" data-v-3a91204f></div></div></div></div></div><br data-v-3a91204f><div class="text-center md:col-span-5" data-v-3a91204f><div class="-mt-4 inline-flex w-full items-center justify-center gap-2 sm:w-auto" data-v-3a91204f><button type="button" rel="" target="" class="nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-default !h-12 w-full sm:w-40" data-v-3a91204f> Cancel </button><button type="submit" rel="" target="" class="nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-primary !h-12 w-full sm:w-40" data-v-3a91204f> Submit </button></div></div></form><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop-admin/create copy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create_copy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3a91204f"]]);

export { create_copy as default };
