import { _ as __nuxt_component_4 } from './Loading-DgGIgVLA.mjs';
import { _ as _sfc_main$6 } from './BaseBreadcrumb-cZDskCmn.mjs';
import { e as useNuiDefaultProperty, o as useNuxtApp, p as useRouter, g as _sfc_main$3$1, _ as __nuxt_component_0$2, d as _export_sfc } from './server.mjs';
import { _ as _sfc_main$4 } from './BaseInput-BgsoGXSG.mjs';
import { _ as _sfc_main$5 } from './BaseSelect-BU4F-qvb.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$7 } from './BaseButtonIcon-BwaQtzFl.mjs';
import { _ as _sfc_main$8 } from './BaseRadio-Bcx0iNXD.mjs';
import { _ as _sfc_main$9 } from './BaseTextarea-BxXCnKx0.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, ref, watch, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$a } from './BaseSwitchThin-Cj-cBPdI.mjs';
import { u as useJwtAuth } from './composables-DmWjNlaH.mjs';
import { u as useToaster } from './toaster-B1V8z_xL.mjs';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BaseTag",
  __ssrInlineRender: true,
  props: {
    shadow: { default: void 0 },
    color: { default: void 0 },
    rounded: { default: void 0 },
    size: { default: void 0 },
    variant: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const color = useNuiDefaultProperty(props, "BaseTag", "color");
    const rounded = useNuiDefaultProperty(props, "BaseTag", "rounded");
    const size = useNuiDefaultProperty(props, "BaseTag", "size");
    const variant = useNuiDefaultProperty(props, "BaseTag", "variant");
    const variants = {
      solid: "nui-tag-solid",
      pastel: "nui-tag-pastel",
      outline: "nui-tag-outline"
    };
    const radiuses = {
      none: "",
      sm: "nui-tag-rounded-sm",
      md: "nui-tag-rounded-md",
      lg: "nui-tag-rounded-lg",
      full: "nui-tag-rounded-full"
    };
    const colors = {
      default: "nui-tag-default",
      "default-contrast": "nui-tag-default-contrast",
      muted: "nui-tag-muted",
      "muted-contrast": "nui-tag-muted-contrast",
      light: "nui-tag-light",
      dark: "nui-tag-dark",
      black: "nui-tag-black",
      primary: "nui-tag-primary",
      info: "nui-tag-info",
      success: "nui-tag-success",
      warning: "nui-tag-warning",
      danger: "nui-tag-danger"
    };
    const sizes = {
      sm: "nui-tag-sm",
      md: "nui-tag-md"
    };
    const shadows = {
      flat: "nui-tag-shadow",
      hover: "nui-tag-shadow-hover"
    };
    const classes = computed(() => [
      "nui-tag",
      size.value && sizes[size.value],
      rounded.value && radiuses[rounded.value],
      variant.value && variants[variant.value],
      color.value && colors[color.value],
      props.shadow && shadows[props.shadow]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: unref(classes) }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.2.1_nuxt@3.12.3/node_modules/@shuriken-ui/nuxt/components/base/BaseTag.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TagSelector",
  __ssrInlineRender: true,
  setup(__props) {
    const newVarian = ref("");
    const newVarian2 = ref("");
    const options = ref([]);
    const options1 = ref([]);
    const tags = ref([]);
    const tags1 = ref([]);
    const newOption = ref("");
    const selectedOption = ref("");
    const newOption1 = ref("");
    const selectedOption1 = ref("");
    const prices = ref([]);
    const stocks = ref([]);
    const skus = ref([]);
    const is_actives = ref([]);
    const initializeIsActives = () => {
      for (let i = 0; i < tags.length; i++) {
        is_actives.value.push(true);
      }
    };
    initializeIsActives();
    const addVarian = () => {
      if (newVarian.value && !options.value.includes(newVarian.value)) {
        options.value.push(newVarian.value);
        newVarian.value = "";
      }
    };
    const addVarian2 = () => {
      if (newVarian2.value && !options1.value.includes(newVarian2.value)) {
        options1.value.push(newVarian2.value);
        newVarian2.value = "";
      }
    };
    const combinedTags = computed(() => {
      const combinations = [];
      tags.value.forEach((tag) => {
        tags1.value.forEach((tag1) => {
          combinations.push({ variant_1: tag, variant_2: tag1 });
        });
      });
      return combinations;
    });
    const saveProductDataToSessionStorage = () => {
      if (!newVarian2.value) {
        const productData = {
          variant_1: {
            name: newVarian.value,
            options: options.value
          },
          variant_2: {
            name: null,
            options: null
          },
          variant_combination: tags.value.map((tag, index) => ({
            name: tag,
            variant_1: tag,
            variant_2: null,
            description: null,
            images: null,
            sku: skus.value[index] || null,
            stock: stocks.value[index] || 0,
            price: prices.value[index] || 0,
            is_active: is_actives.value[index] || true
          }))
        };
        sessionStorage.setItem("productData", JSON.stringify(productData));
      } else {
        const productData = {
          variant_1: {
            name: newVarian.value,
            options: options.value
          },
          variant_2: {
            name: newVarian2.value,
            options: options1.value
          },
          variant_combination: combinedTags.value.map((combination, index) => ({
            name: `${combination.variant_1} - ${combination.variant_2}`,
            variant_1: combination.variant_1,
            variant_2: combination.variant_2,
            description: null,
            images: null,
            sku: skus.value[index] || null,
            stock: stocks.value[index] || 0,
            price: prices.value[index] || 0,
            is_active: is_actives.value[index] || true
          }))
        };
        sessionStorage.setItem("productData", JSON.stringify(productData));
      }
    };
    watch([tags, tags1, prices, stocks, skus, is_actives], saveProductDataToSessionStorage, { immediate: true, deep: true });
    const addOption = () => {
      if (newOption.value && !options.value.includes(newOption.value)) {
        options.value.push(newOption.value);
        newOption.value = "";
      }
    };
    const addTag = () => {
      if (selectedOption.value && !tags.value.includes(selectedOption.value)) {
        tags.value.push(selectedOption.value);
        prices.value.push(0);
        stocks.value.push(0);
        selectedOption.value = "";
      }
    };
    const addOption1 = () => {
      if (newOption1.value && !options1.value.includes(newOption1.value)) {
        options1.value.push(newOption1.value);
        newOption1.value = "";
      }
    };
    const addTag1 = () => {
      if (selectedOption1.value && !tags1.value.includes(selectedOption1.value)) {
        tags1.value.push(selectedOption1.value);
        prices.value.push(0);
        stocks.value.push(0);
        selectedOption1.value = "";
      }
    };
    const loadProductDataFromSessionStorage = () => {
      const storedData = sessionStorage.getItem("productData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        newVarian.value = parsedData.variant_1.name;
        newVarian2.value = parsedData.variant_2.name;
        options.value = parsedData.variant_1.options;
        options1.value = parsedData.variant_2.options || [];
        const variantCombinations = parsedData.variant_combination;
        variantCombinations.forEach((combination) => {
          tags.value.push(combination.variant_1);
          tags1.value.push(combination.variant_2);
          prices.value.push(combination.price);
          stocks.value.push(combination.stock);
          skus.value.push(combination.sku);
          is_actives.value.push(combination.is_active);
        });
      }
    };
    loadProductDataFromSessionStorage();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$4;
      const _component_BaseButton = _sfc_main$3$1;
      const _component_BaseSelect = _sfc_main$5;
      const _component_BaseTag = _sfc_main$3;
      _push(`<!--[--><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-0cfa93fc><div class="line-height-normal" data-v-0cfa93fc><span class="title-m-3" data-v-0cfa93fc>Nama Varian</span><br data-v-0cfa93fc><div class="flex" data-v-0cfa93fc>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: newVarian.value,
        "onUpdate:modelValue": ($event) => newVarian.value = $event,
        onKeyup: addVarian,
        placeholder: "Tambahkan Varian baru,Contoh: warna",
        class: "mr-2"
      }, null, _parent));
      _push(`</div><br data-v-0cfa93fc><div class="flex" data-v-0cfa93fc>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: newOption.value,
        "onUpdate:modelValue": ($event) => newOption.value = $event,
        onKeyup: addOption,
        placeholder: "Tambahkan opsi baru",
        class: "mr-2"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseButton, { onClick: addOption }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tambah Opsi`);
          } else {
            return [
              createTextVNode("Tambah Opsi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><br data-v-0cfa93fc>`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: selectedOption.value,
        "onUpdate:modelValue": ($event) => selectedOption.value = $event,
        onChange: addTag
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option disabled value="" data-v-0cfa93fc${_scopeId}>Pilih sebuah opsi</option><!--[-->`);
            ssrRenderList(options.value, (option) => {
              _push2(`<option${ssrRenderAttr("value", option)} data-v-0cfa93fc${_scopeId}>${ssrInterpolate(option)}</option>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("option", {
                disabled: "",
                value: ""
              }, "Pilih sebuah opsi"),
              (openBlock(true), createBlock(Fragment, null, renderList(options.value, (option) => {
                return openBlock(), createBlock("option", {
                  key: option,
                  value: option
                }, toDisplayString(option), 9, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div data-v-0cfa93fc><!--[-->`);
      ssrRenderList(tags.value, (tag, index) => {
        _push(`<span class="tag" data-v-0cfa93fc>`);
        _push(ssrRenderComponent(_component_BaseTag, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tag)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tag), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<button data-v-0cfa93fc>x</button></span>`);
      });
      _push(`<!--]--></div></div><div class="line-height-normal" data-v-0cfa93fc><span class="title-m-3" data-v-0cfa93fc>Nama Varian 2</span><br data-v-0cfa93fc><div class="flex" data-v-0cfa93fc>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: newVarian2.value,
        "onUpdate:modelValue": ($event) => newVarian2.value = $event,
        onKeyup: addVarian2,
        placeholder: "Tambahkan Varian 2 baru,Contoh: ukuran",
        class: "mr-2"
      }, null, _parent));
      _push(`</div><br data-v-0cfa93fc><div class="flex" data-v-0cfa93fc>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: newOption1.value,
        "onUpdate:modelValue": ($event) => newOption1.value = $event,
        onKeyup: addOption1,
        placeholder: "Tambahkan opsi baru",
        class: "mr-2"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseButton, { onClick: addOption1 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tambah Opsi`);
          } else {
            return [
              createTextVNode("Tambah Opsi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><br data-v-0cfa93fc>`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: selectedOption1.value,
        "onUpdate:modelValue": ($event) => selectedOption1.value = $event,
        onChange: addTag1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option disabled value="" data-v-0cfa93fc${_scopeId}>Pilih sebuah opsi</option><!--[-->`);
            ssrRenderList(options1.value, (option) => {
              _push2(`<option${ssrRenderAttr("value", option)} data-v-0cfa93fc${_scopeId}>${ssrInterpolate(option)}</option>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("option", {
                disabled: "",
                value: ""
              }, "Pilih sebuah opsi"),
              (openBlock(true), createBlock(Fragment, null, renderList(options1.value, (option) => {
                return openBlock(), createBlock("option", {
                  key: option,
                  value: option
                }, toDisplayString(option), 9, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div data-v-0cfa93fc><!--[-->`);
      ssrRenderList(tags1.value, (tag1, index1) => {
        _push(`<span class="tag" data-v-0cfa93fc>`);
        _push(ssrRenderComponent(_component_BaseTag, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tag1)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tag1), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<button data-v-0cfa93fc>x</button></span>`);
      });
      _push(`<!--]--></div></div></div><div class="mb-2" data-v-0cfa93fc><h3 class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal" data-v-0cfa93fc> Varian Produk </h3><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400" data-v-0cfa93fc> Tambah varian agar pembeli dapat memilih produk yang sesuai </span><br data-v-0cfa93fc><table data-v-0cfa93fc><thead data-v-0cfa93fc>`);
      if (tags.value.length > 0 && tags1.value.length === 0 || newVarian.value && !newVarian2.value) {
        _push(`<tr data-v-0cfa93fc><th data-v-0cfa93fc>${ssrInterpolate(newVarian.value)}</th><th data-v-0cfa93fc>Harga</th><th data-v-0cfa93fc>Stock</th><th data-v-0cfa93fc>SKU</th></tr>`);
      } else if (tags.value.length > 0 && tags1.value.length > 0 || newVarian.value && newVarian2.value) {
        _push(`<tr data-v-0cfa93fc><th data-v-0cfa93fc>${ssrInterpolate(newVarian.value)}</th><th data-v-0cfa93fc>${ssrInterpolate(newVarian2.value)}</th><th data-v-0cfa93fc>Harga</th><th data-v-0cfa93fc>Stock</th><th data-v-0cfa93fc>SKU</th></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</thead>`);
      if (tags.value.length > 0 && tags1.value.length === 0 || newVarian.value && !newVarian2.value) {
        _push(`<tbody data-v-0cfa93fc><!--[-->`);
        ssrRenderList(tags.value, (tag, index) => {
          _push(`<tr data-v-0cfa93fc><td data-v-0cfa93fc>${ssrInterpolate(tag)}</td><td data-v-0cfa93fc>`);
          _push(ssrRenderComponent(_component_BaseInput, {
            modelValue: prices.value[index],
            "onUpdate:modelValue": ($event) => prices.value[index] = $event,
            placeholder: "Contoh: ",
            type: "number"
          }, null, _parent));
          _push(`</td><td data-v-0cfa93fc>`);
          _push(ssrRenderComponent(_component_BaseInput, {
            modelValue: stocks.value[index],
            "onUpdate:modelValue": ($event) => stocks.value[index] = $event,
            placeholder: "Contoh: ",
            type: "number"
          }, null, _parent));
          _push(`</td><td data-v-0cfa93fc>`);
          _push(ssrRenderComponent(_component_BaseInput, {
            modelValue: skus.value[index],
            "onUpdate:modelValue": ($event) => skus.value[index] = $event,
            placeholder: "Contoh: ",
            type: "text"
          }, null, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody>`);
      } else if (tags.value.length > 0 && tags1.value.length > 0 || newVarian.value && newVarian2.value) {
        _push(`<tbody data-v-0cfa93fc><!--[-->`);
        ssrRenderList(combinedTags.value, (combination, index) => {
          _push(`<tr data-v-0cfa93fc><td data-v-0cfa93fc>${ssrInterpolate(combination.variant_1)}</td><td data-v-0cfa93fc>${ssrInterpolate(combination.variant_2)}</td><td data-v-0cfa93fc>`);
          _push(ssrRenderComponent(_component_BaseInput, {
            modelValue: prices.value[index],
            "onUpdate:modelValue": ($event) => prices.value[index] = $event,
            placeholder: "Contoh: ",
            type: "number"
          }, null, _parent));
          _push(`</td><td data-v-0cfa93fc>`);
          _push(ssrRenderComponent(_component_BaseInput, {
            modelValue: stocks.value[index],
            "onUpdate:modelValue": ($event) => stocks.value[index] = $event,
            placeholder: "Contoh: ",
            type: "number"
          }, null, _parent));
          _push(`</td><td data-v-0cfa93fc>`);
          _push(ssrRenderComponent(_component_BaseInput, {
            modelValue: skus.value[index],
            "onUpdate:modelValue": ($event) => skus.value[index] = $event,
            placeholder: "Contoh: ",
            type: "text"
          }, null, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</table></div><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TagSelector.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0cfa93fc"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProdukCreate",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    useJwtAuth();
    useRouter();
    useToaster();
    const showSelect = ref(false);
    const categories = ref([]);
    const selectedCategory = ref(null);
    const selectedCategoryFields = ref([]);
    const etalases = ref([]);
    const selectedEtalase = ref(null);
    ref([]);
    const formData = ref({
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
      product_category_id: null,
      attributes: null
    });
    const selectedCategoryId = computed({
      get: () => selectedCategory.value ? selectedCategory.value.id : null,
      set: (value) => {
        selectedCategory.value = categories.value.find((category) => category.id === value) || null;
      }
    });
    watch(selectedCategory, async (newCategory) => {
      if (newCategory) {
        selectedCategoryFields.value = newCategory.form_definition;
      } else {
        selectedCategoryFields.value = [];
      }
    });
    computed({
      get: () => selectedEtalase.value ? selectedEtalase.value.id : null,
      set: (value) => {
        selectedEtalase.value = etalases.value.find((etalase) => etalase.id === value) || null;
      }
    });
    ref(null);
    const loading = ref(false);
    const images = ref(Array(10).fill(null));
    const showModal = ref(false);
    const confirmDelete = () => {
      showSelect.value = !showSelect.value;
      showModal.value = false;
    };
    const cancelDelete = () => {
      showModal.value = false;
    };
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
        label: "Tambah Produk",
        hideLabel: false,
        to: "#"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loading = __nuxt_component_4;
      const _component_BaseBreadcrumb = _sfc_main$6;
      const _component_Icon = __nuxt_component_0$2;
      const _component_BaseInput = _sfc_main$4;
      const _component_BaseSelect = _sfc_main$5;
      const _component_BaseInputFileHeadless = _sfc_main$1$1;
      const _component_center = resolveComponent("center");
      const _component_BaseButtonIcon = _sfc_main$7;
      const _component_BaseRadio = _sfc_main$8;
      const _component_BaseTextarea = _sfc_main$9;
      const _component_BaseButton = _sfc_main$3$1;
      const _component_TagSelector = __nuxt_component_10;
      const _component_BaseSwitchThin = _sfc_main$a;
      if (loading.value) {
        _push(ssrRenderComponent(_component_Loading, mergeProps({ type: "spinner" }, _attrs), null, _parent));
      } else {
        _push(`<form${ssrRenderAttrs(_attrs)} data-v-8f4948c2><div class="mb-2" data-v-8f4948c2>`);
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
        _push(`</div><div class="border-muted-200" data-v-8f4948c2><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-8f4948c2><div class="bg-white dark:bg-muted-800/70 p-10" data-v-8f4948c2><div class="mb-2" data-v-8f4948c2><div class="mlls" data-v-8f4948c2><div class="title-m-1" data-v-8f4948c2>Informasi Produk</div><div class="title-m-2" data-v-8f4948c2>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-8f4948c2><div class="line-height-normal" data-v-8f4948c2><span class="title-m-3" data-v-8f4948c2>Nama Produk</span> <span class="alert-red" data-v-8f4948c2>Wajib</span><br data-v-8f4948c2><span class="title-m-2" data-v-8f4948c2>Nama produk minimal mempunyai 40 karakter dengan memasukkan merek, jenis produk, warna, bahan, atau tipe.</span></div><div class="line-height-normal" data-v-8f4948c2>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          placeholder: "Contoh: Jenis/Kategori Produk + Merek + Keterangan",
          modelValue: formData.value.name,
          "onUpdate:modelValue": ($event) => formData.value.name = $event
        }, null, _parent));
        _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-8f4948c2><div class="line-height-normal" data-v-8f4948c2><span class="title-m-3" data-v-8f4948c2>Kategori</span> <span class="alert-red" data-v-8f4948c2>Wajib</span><br data-v-8f4948c2><span class="title-m-2" data-v-8f4948c2>Pilih kategori yang sesuai dengan produk. Pemilihan kategori yang tepat akan mempermudah barang untuk dicari oleh pembeli.</span></div><div class="line-height-normal" data-v-8f4948c2>`);
        _push(ssrRenderComponent(_component_BaseSelect, {
          rounded: "sm",
          modelValue: selectedCategoryId.value,
          "onUpdate:modelValue": ($event) => selectedCategoryId.value = $event
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<option${ssrRenderAttr("value", null)} data-v-8f4948c2${_scopeId}>Pilih Kategori</option><!--[-->`);
              ssrRenderList(categories.value, (category) => {
                _push2(`<option${ssrRenderAttr("value", category.id)} data-v-8f4948c2${_scopeId}>${ssrInterpolate(category.name)}</option>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                createVNode("option", { value: null }, "Pilih Kategori"),
                (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category) => {
                  return openBlock(), createBlock("option", {
                    key: category.id,
                    value: category.id
                  }, toDisplayString(category.name), 9, ["value"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
        if (selectedCategoryFields.value.length > 0) {
          _push(`<div data-v-8f4948c2><!--[-->`);
          ssrRenderList(selectedCategoryFields.value, (field, index) => {
            _push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-8f4948c2><div class="line-height-normal" data-v-8f4948c2><span class="title-m-3" data-v-8f4948c2>${ssrInterpolate(field.label)}</span>`);
            if (field.required) {
              _push(`<span class="alert-red" data-v-8f4948c2>Wajib</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<br data-v-8f4948c2></div><div class="line-height-normal" data-v-8f4948c2>`);
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
                      _push2(`<option${ssrRenderAttr("value", option)} data-v-8f4948c2${_scopeId}>${ssrInterpolate(option)}</option>`);
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
        _push(`</div></div></div></div><br data-v-8f4948c2><div class="border-muted-200" data-v-8f4948c2><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-8f4948c2><div class="bg-white dark:bg-muted-800/70 p-10" data-v-8f4948c2><div class="mb-2" data-v-8f4948c2><div class="mlls" data-v-8f4948c2><div class="title-m-1" data-v-8f4948c2>Detail Produk</div><div class="title-m-2" data-v-8f4948c2>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-8f4948c2><div class="line-height-normal" data-v-8f4948c2><span class="title-m-3" data-v-8f4948c2>Foto Produk</span> <span class="alert-red" data-v-8f4948c2>Wajib</span><br data-v-8f4948c2><span class="title-m-2" data-v-8f4948c2>Wajib menambahkan minimal 1 dari 10 foto produk.<br data-v-8f4948c2>Format foto harus jpg jpeg ong dan mempunyai ukuran minimal 300 \xD7 300 px (untuk gambar optimal, gunakan ukuran min. 1.200 x 1.200 px).</span></div><div class="line-height-normal" data-v-8f4948c2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4" data-v-8f4948c2><!--[-->`);
        ssrRenderList(10, (index) => {
          _push(`<div class="photo-upload-item" data-v-8f4948c2>`);
          _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
            modelValue: images.value[index - 1],
            "onUpdate:modelValue": ($event) => images.value[index - 1] = $event,
            accept: "image/*"
          }, {
            default: withCtx(({ open, remove, preview, files }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="relative size-20" data-v-8f4948c2${_scopeId}>`);
                if ((files == null ? void 0 : files.length) && files.item(0)) {
                  _push2(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto" data-v-8f4948c2${_scopeId}>`);
                } else {
                  _push2(`<div class="kotak-dotted" data-v-8f4948c2${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_center, null, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" data-v-8f4948c2${_scopeId2}>`);
                      } else {
                        return [
                          createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`<br data-v-8f4948c2${_scopeId}> ${ssrInterpolate(index === 1 ? "Foto Utama" : "Foto Ke - " + index)}</div>`);
                }
                if ((files == null ? void 0 : files.length) && files.item(0)) {
                  _push2(`<div class="absolute bottom-0 end-0 z-20" data-v-8f4948c2${_scopeId}>`);
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
                  _push2(`<div class="absolute bottom-0 end-0 z-20" data-v-8f4948c2${_scopeId}><div class="relative" data-nui-tooltip="Upload image" data-v-8f4948c2${_scopeId}>`);
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
                    (files == null ? void 0 : files.length) && files.item(0) ? (openBlock(), createBlock("div", {
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
        _push(`<!--]--></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-8f4948c2><div class="line-height-normal" data-v-8f4948c2><span class="title-m-3" data-v-8f4948c2>URL Video Produk</span><br data-v-8f4948c2><span class="title-m-2" data-v-8f4948c2>Tambah video agar pembeli semakin tertarik dengan produkmu.</span><br data-v-8f4948c2><span class="title-m-2" data-v-8f4948c2>Hanya dapat menambahkan video yang berasal dari sosial media yang</span><span class="title-m-2" data-v-8f4948c2>dapat diakses oleh publik.</span></div><div class="line-height-normal" data-v-8f4948c2>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          placeholder: "Contoh: www.commerce.com",
          modelValue: formData.value.video_url,
          "onUpdate:modelValue": ($event) => formData.value.video_url = $event
        }, null, _parent));
        _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-8f4948c2><div class="line-height-normal" data-v-8f4948c2><span class="title-m-3" data-v-8f4948c2>Kondisi</span> <span class="alert-red" data-v-8f4948c2>Wajib</span><br data-v-8f4948c2><span class="title-m-2" data-v-8f4948c2>Wajib menambahkan keterangan kondisi produk baru atau bekas</span></div><div class="line-height-normal" style="${ssrRenderStyle({ "margin-left": "15px" })}" data-v-8f4948c2><div class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4" data-v-8f4948c2>`);
        _push(ssrRenderComponent(_component_BaseRadio, {
          modelValue: formData.value.condition,
          "onUpdate:modelValue": ($event) => formData.value.condition = $event,
          name: "checkbox_base",
          value: "1",
          label: "Baru",
          color: "warning",
          type: "number"
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseRadio, {
          modelValue: formData.value.condition,
          "onUpdate:modelValue": ($event) => formData.value.condition = $event,
          name: "checkbox_base",
          value: "0",
          label: "Bekas",
          color: "warning",
          type: "number"
        }, null, _parent));
        _push(`</div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-8f4948c2><div class="line-height-normal" data-v-8f4948c2><span class="title-m-3" data-v-8f4948c2>Deskripsi Produk</span><br data-v-8f4948c2><span class="title-m-2" data-v-8f4948c2>Pastikan deskripsi produk memuat penjelasan detail terkait produkmu.</span><br data-v-8f4948c2><span class="title-m-2" data-v-8f4948c2>agar pembeli mudah mengerti dan menemukan produkmu.</span></div><div class="line-height-normal" data-v-8f4948c2>`);
        _push(ssrRenderComponent(_component_BaseTextarea, {
          placeholder: "Tuliskan detail Produk....",
          modelValue: formData.value.description,
          "onUpdate:modelValue": ($event) => formData.value.description = $event
        }, null, _parent));
        _push(`</div></div></div></div></div></div><br data-v-8f4948c2><div class="border-muted-200" data-v-8f4948c2><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-8f4948c2><div class="bg-white dark:bg-muted-800/70 p-10" data-v-8f4948c2><div class="mb-2" data-v-8f4948c2><h3 class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal" data-v-8f4948c2> Varian Produk </h3><span class="nui-text nui-content-xs nui-weight-normal nui-lead-normal text-muted-400" data-v-8f4948c2> tambah varian agar pembeli dapat memilih produk yang sesuai </span>`);
        if (showSelect.value) {
          _push(`<button class="nui-button nui-button-small nui-button-rounded nui-button-solid float-right" data-v-8f4948c2>${ssrInterpolate(showSelect.value ? "Hapus Varian" : "Tambah Varian")}</button>`);
        } else {
          _push(`<button class="nui-button nui-button-small nui-button-rounded nui-button-solid float-right" data-v-8f4948c2>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:plus",
            class: "h-4 w-4"
          }, null, _parent));
          _push(` ${ssrInterpolate(showSelect.value ? "Hapus Varian" : "Tambah Varian")}</button>`);
        }
        if (showModal.value) {
          _push(`<div class="modal" data-v-8f4948c2><div class="modal-content" data-v-8f4948c2><p data-v-8f4948c2>Yakin akan menghapus?</p>`);
          _push(ssrRenderComponent(_component_BaseButton, { onClick: confirmDelete }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Yes`);
              } else {
                return [
                  createTextVNode("Yes")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_BaseButton, { onClick: cancelDelete }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`No`);
              } else {
                return [
                  createTextVNode("No")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><br data-v-8f4948c2>`);
        if (showSelect.value) {
          _push(`<div class="mb-2" data-v-8f4948c2>`);
          _push(ssrRenderComponent(_component_TagSelector, null, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><br data-v-8f4948c2><div class="border-muted-200" data-v-8f4948c2><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-8f4948c2><div class="bg-white dark:bg-muted-800/70 p-10" data-v-8f4948c2><div class="mb-2" data-v-8f4948c2><div class="mlls" data-v-8f4948c2><div class="title-m-1" data-v-8f4948c2>Harga</div><div class="title-m-2" data-v-8f4948c2>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-8f4948c2><div class="line-height-normal" data-v-8f4948c2><span class="title-m-3" data-v-8f4948c2>Minimum Pesanan</span> <span class="alert-red" data-v-8f4948c2>Wajib</span><br data-v-8f4948c2><span class="title-m-2" data-v-8f4948c2>Atur jumlah minimum yang harus dibeli untuk produk ini.</span></div><div class="line-height-normal" data-v-8f4948c2>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          placeholder: "Contoh: 3",
          modelValue: formData.value.min_order,
          "onUpdate:modelValue": ($event) => formData.value.min_order = $event,
          type: "number"
        }, null, _parent));
        _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-8f4948c2><div class="line-height-normal" data-v-8f4948c2><span class="title-m-3" data-v-8f4948c2>Harga Satuan</span> <span class="alert-red" data-v-8f4948c2>Wajib</span><br data-v-8f4948c2><span class="title-m-2" data-v-8f4948c2>Atur jumlah minimum yang harus dibeli untuk produk ini.</span></div><div class="line-height-normal" data-v-8f4948c2>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          placeholder: "Contoh: Rp10.000",
          modelValue: formData.value.price,
          "onUpdate:modelValue": ($event) => formData.value.price = $event,
          type: "number"
        }, null, _parent));
        _push(`</div></div></div></div></div></div><br data-v-8f4948c2><div class="border-muted-200" data-v-8f4948c2><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-8f4948c2><div class="bg-white dark:bg-muted-800/70 p-10" data-v-8f4948c2><div class="mb-2" data-v-8f4948c2><div class="mlls" data-v-8f4948c2><div class="title-m-1" data-v-8f4948c2>Pengelolaan Produk</div><div class="title-m-2" data-v-8f4948c2>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-8f4948c2><div class="line-height-normal" data-v-8f4948c2><span class="title-m-3" data-v-8f4948c2>Status Produk</span><br data-v-8f4948c2><span class="title-m-2" data-v-8f4948c2>Jika status aktif, produkmu dapat dicari oleh calon pembeli.</span></div><div class="line-height-normal" data-v-8f4948c2>`);
        _push(ssrRenderComponent(_component_BaseSwitchThin, {
          label: "Aktifkan Produk",
          color: "primary",
          modelValue: formData.value.is_active,
          "onUpdate:modelValue": ($event) => formData.value.is_active = $event
        }, null, _parent));
        _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-8f4948c2><div class="line-height-normal" data-v-8f4948c2><span class="title-m-3" data-v-8f4948c2>Stok Produk</span> <span class="alert-red" data-v-8f4948c2>Wajib</span><br data-v-8f4948c2><span class="title-m-2" data-v-8f4948c2>Jumlah barang atau unit yang tersedia untuk dijual.</span></div><div class="line-height-normal" data-v-8f4948c2>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          placeholder: "Contoh: 3",
          modelValue: formData.value.stock,
          "onUpdate:modelValue": ($event) => formData.value.stock = $event,
          type: "number"
        }, null, _parent));
        _push(`</div></div></div></div></div></div><br data-v-8f4948c2><div class="border-muted-200" data-v-8f4948c2><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-8f4948c2><div class="bg-white dark:bg-muted-800/70 p-10" data-v-8f4948c2><div class="mb-2" data-v-8f4948c2><div class="mlls" data-v-8f4948c2><div class="title-m-1" data-v-8f4948c2>Berat &amp; Pengiriman</div><div class="title-m-2" data-v-8f4948c2>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-8f4948c2><div class="line-height-normal" data-v-8f4948c2><span class="title-m-3" data-v-8f4948c2>Berat Produk</span><br data-v-8f4948c2><span class="title-m-2" data-v-8f4948c2>Jumlah barang atau unit yang tersedia untuk dijual.</span></div><div class="line-height-normal" data-v-8f4948c2>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          placeholder: "Contoh: 1",
          modelValue: formData.value.weight,
          "onUpdate:modelValue": ($event) => formData.value.weight = $event,
          type: "number"
        }, null, _parent));
        _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-8f4948c2><div class="line-height-normal" data-v-8f4948c2><span class="title-m-3" data-v-8f4948c2>Ukuran Produk</span><br data-v-8f4948c2><span class="title-m-2" data-v-8f4948c2>Masukkan ukuran produk setelah dikemas untuk menghitung berat volume.</span></div><div class="line-height-normal grid grid-cols-1 md:grid-cols-3 gap-4" data-v-8f4948c2>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          placeholder: "Panjang (cm)",
          modelValue: formData.value.length,
          "onUpdate:modelValue": ($event) => formData.value.length = $event,
          type: "number"
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseInput, {
          placeholder: "Lebar (cm)",
          modelValue: formData.value.width,
          "onUpdate:modelValue": ($event) => formData.value.width = $event,
          type: "number"
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseInput, {
          placeholder: "Tinggi (cm)",
          modelValue: formData.value.height,
          "onUpdate:modelValue": ($event) => formData.value.height = $event,
          type: "number"
        }, null, _parent));
        _push(`</div></div></div></div></div></div><div class="flex justify-center fixed bottom-8 inset-x-0" data-v-8f4948c2><div class="p-6 rounded-lg shadow-inner bg-white w-fit line-height-normal" data-v-8f4948c2><button type="button" class="static nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-default !h-12 sm:w-40 mx-2 transform transition-transform duration-300 hover:scale-105" data-v-8f4948c2> Cancel </button><button type="submit" class="static nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-primary !h-12 sm:w-40 mx-2 transform transition-transform duration-300 hover:scale-105" data-v-8f4948c2> Submit </button></div></div></form>`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/produk/ProdukCreate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8f4948c2"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tambah-produk",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProdukCreate = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ProdukCreate, { class: "pe-4 xl:pe-10" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin-produk/tambah-produk.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
