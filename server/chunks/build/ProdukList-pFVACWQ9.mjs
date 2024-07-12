import { _ as _sfc_main$4, a as _sfc_main$3$1, b as _sfc_main$2$1, c as _sfc_main$1$2, d as _sfc_main$c } from './TairoTableCell-B3KTDGbV.mjs';
import { _ as _sfc_main$2 } from './BaseInput-BgsoGXSG.mjs';
import { d as _export_sfc, e as useNuiDefaultProperty, o as useNuxtApp, m as useRoute, p as useRouter, q as navigateTo, g as _sfc_main$3, _ as __nuxt_component_0$2, r as _sfc_main$b, s as _sfc_main$6$1 } from './server.mjs';
import { _ as _sfc_main$5 } from './TairoModal-Bw9szyQw.mjs';
import { _ as _sfc_main$6 } from './BaseSelect-BU4F-qvb.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$7 } from './BaseButtonIcon-BwaQtzFl.mjs';
import { _ as _sfc_main$8 } from './BaseRadio-Bcx0iNXD.mjs';
import { _ as _sfc_main$9 } from './BaseSwitchThin-Cj-cBPdI.mjs';
import { _ as __nuxt_component_4 } from './Loading-DgGIgVLA.mjs';
import { a as __nuxt_component_0, _ as _sfc_main$a } from './BaseCheckbox-BfPzSTfU.mjs';
import { useSSRContext, defineComponent, mergeModels, useModel, ref, mergeProps, unref, computed, resolveComponent, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, withModifiers, createCommentVNode } from 'vue';
import { u as useNinjaId } from './input-id-Bz_TYZXb.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { u as useJwtAuth } from './composables-DmWjNlaH.mjs';
import { u as useToaster } from './toaster-B1V8z_xL.mjs';
import wretch from 'wretch';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseSwitchBall",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    id: { default: void 0 },
    label: { default: void 0 },
    sublabel: { default: void 0 },
    color: { default: void 0 },
    classes: { default: () => ({}) }
  }, {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const [modelValue] = useModel(__props, "modelValue");
    const inputRef = ref();
    const id = useNinjaId(() => props.id);
    const color = useNuiDefaultProperty(props, "BaseSwitchBall", "color");
    const colors = {
      primary: "nui-switch-ball-primary",
      info: "nui-switch-ball-info",
      success: "nui-switch-ball-success",
      warning: "nui-switch-ball-warning",
      danger: "nui-switch-ball-danger",
      dark: "nui-switch-ball-dark",
      black: "nui-switch-ball-black"
    };
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
      var _a, _b, _c, _d, _e, _f;
      const _component_IconCheck = __nuxt_component_0;
      _push(`<label${ssrRenderAttrs(mergeProps({
        for: unref(id),
        class: ["nui-switch-ball", [unref(color) && colors[unref(color)], (_a = props.classes) == null ? void 0 : _a.wrapper]]
      }, _attrs))}><span class="${ssrRenderClass([(_b = props.classes) == null ? void 0 : _b.outer, "nui-switch-ball-outer"])}"><input${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        checked: unref(modelValue)
      }, _ctx.$attrs, {
        type: "checkbox",
        class: ["nui-switch-ball-input peer", (_c = props.classes) == null ? void 0 : _c.input]
      }))}><span class="${ssrRenderClass([(_d = props.classes) == null ? void 0 : _d.handle, "nui-switch-ball-handle"])}"></span><span class="${ssrRenderClass([(_e = props.classes) == null ? void 0 : _e.track, "nui-switch-ball-track"])}"></span>`);
      _push(ssrRenderComponent(_component_IconCheck, {
        class: ["nui-switch-ball-icon", (_f = props.classes) == null ? void 0 : _f.icon]
      }, null, _parent));
      _push(`</span>`);
      if (!props.sublabel) {
        _push(`<span class="nui-switch-ball-single-label">${ssrInterpolate(props.label)}</span>`);
      } else {
        _push(`<span class="nui-switch-ball-dual-label"><span class="nui-switch-ball-label">${ssrInterpolate(props.label)}</span><span class="nui-switch-ball-sublabel">${ssrInterpolate(props.sublabel)}</span></span>`);
      }
      _push(`</label>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.2.1_nuxt@3.12.3/node_modules/@shuriken-ui/nuxt/components/form/BaseSwitchBall.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProdukList",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    const { token } = useJwtAuth();
    const showSelect = ref(null);
    const toaster = useToaster();
    const products = ref([]);
    const categories = ref([]);
    const selectedCategory = ref(null);
    ref(null);
    const loading = ref(false);
    ref(false);
    const isModal3XlOpen = ref(false);
    const images = ref(Array(10).fill(null));
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
      product_category_id: ""
    });
    const selectedCategoryId = computed({
      get: () => selectedCategory.value ? selectedCategory.value.id : null,
      set: (value2) => {
        selectedCategory.value = categories.value.find((category) => category.id === value2) || null;
      }
    });
    const saveData = () => {
      sessionStorage.setItem("formData", JSON.stringify(formData.value));
      router.push("/admin-produk/tambah-produk");
    };
    useRoute();
    const router = useRouter();
    const page = ref(1);
    const s = ref("");
    const pagination = ref("");
    const per_page = ref(10);
    const fetchAPI = async (url, params) => {
      try {
        const query = Object.keys(params).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join("&");
        const apiUrl = `${url}?${query}`;
        loading.value = true;
        return await wretch(apiUrl).headers({
          Authorization: `Bearer ${token.value}`,
          "Content-Type": "application/json"
        }).get().json();
      } catch (error2) {
        console.error("API Error:", error2);
        throw error2;
      }
    };
    const fetchData = async (shopId) => {
      if (!shopId)
        return;
      try {
        loading.value = true;
        console.log("page", page.value);
        console.log("per_page", per_page.value);
        if (per_page.value > 10) {
          page.value = 1;
          console.log("page baru", page.value);
        }
        const params = {
          per_page: per_page.value,
          page: page.value,
          s: s.value
        };
        const productsResponse = await fetchAPI(`https://api.dev.commerce.waktoo.com:443/api/product-data`, params);
        if ((productsResponse == null ? void 0 : productsResponse.status) === "success") {
          console.log("Products:", productsResponse.data.product_data);
          products.value = productsResponse.data.product_data;
          pagination.value = productsResponse.data.pagination;
        }
        const categoriesResponse = await fetchAPI(`https://api.dev.commerce.waktoo.com:443/api/shops/${shopId}/categories`, {});
        if ((categoriesResponse == null ? void 0 : categoriesResponse.status) === "success") {
          console.log("Categories:", categoriesResponse.data.category);
          categories.value = categoriesResponse.data.category;
        }
        loading.value = false;
      } catch (error2) {
        console.error("Error fetching data:", error2);
        error2.value = "Failed to fetch data";
        loading.value = false;
      }
    };
    const filterProducts = () => {
      let filteredProducts2 = [...products.value];
      if (selectedCategory.value) {
        filteredProducts2 = filteredProducts2.filter((product) => product.product_category_id === selectedCategory.value.id);
      }
      if (s.value) {
        const keyword = s.value.toLowerCase();
        filteredProducts2 = filteredProducts2.filter((product) => product.name.toLowerCase().includes(keyword));
      }
      return filteredProducts2;
    };
    const filteredProducts = computed(() => filterProducts());
    const handlePerPageChange = (event) => {
      per_page.value = parseInt(event.target.value);
      fetchData(sessionStorage.getItem("shopId"));
    };
    const previousPage = () => {
      if (page.value > 1) {
        page.value = page.value - 1;
        fetchData(sessionStorage.getItem("shopId"));
      }
    };
    const nextPage = () => {
      page.value = page.value + 1;
      fetchData(sessionStorage.getItem("shopId"));
      console.log(page.value);
    };
    const totalPages = computed(() => {
      return pagination.value.total_pages;
    });
    const submitForm = async () => {
      try {
        const formDataToSend = {
          ...formData.value,
          product_category_id: selectedCategoryId.value
        };
        if (!token.value) {
          console.error("Token not found");
          return;
        }
        console.log(formDataToSend);
        console.log(token);
        const productResponse = await wretch(`https://api.dev.commerce.waktoo.com:443/api/product-data`).headers({ Authorization: `Bearer ${token.value}` }).post(formDataToSend).json();
        if (productResponse.status === "success") {
          const productId = productResponse.data.product_data.id;
          const body = new FormData();
          images.value.forEach((file, index) => {
            if (file) {
              body.append("images[]", file[0]);
            }
          });
          console.log("Save Images:", body);
          const response = await fetch(`https://api.dev.commerce.waktoo.com:443/api/files/product-images/${productId}`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token.value}`
            },
            body
          });
          const saveImagesResponse = await response.json();
          console.log("Save Images Response:", saveImagesResponse);
          if (saveImagesResponse.status === "success") {
            toaster.show({
              title: "Sukses",
              message: "Berhasil membuat produk",
              closable: true,
              color: "success"
            });
            navigateTo(`/admin-produk`);
          } else {
            toaster.show({
              title: "Gagal",
              message: "Berhasil membuat produk dan gagal upload gambar ",
              closable: true,
              color: "success"
            });
            console.error("Failed to save images:", saveImagesResponse.error);
            navigateTo(`/admin-produk`);
          }
        } else {
          toaster.show({
            title: "Gagal",
            message: "gagal membuat produk",
            closable: true,
            color: "success"
          });
          console.error("Failed to save product:", productResponse.error);
        }
      } catch (error2) {
        console.error("Error:", error2);
      }
    };
    const handleSwitchChange = async (product) => {
      try {
        const apiUrl = "https://api.dev.commerce.waktoo.com:443/api/product-data";
        const newStatus = !product.is_active;
        const productCategoryID = product.product_category_id;
        const response = await wretch(`${apiUrl}/${product.id}`).headers({
          Authorization: `Bearer ${token.value}`,
          "Content-Type": "application/json"
        }).put({
          is_active: newStatus,
          product_category_id: productCategoryID
        }).json();
        if (response.status == "success") {
          toaster.show({
            title: "Sukses",
            message: "Berhasil mengubah status produk",
            closable: true,
            color: "success"
          });
        } else {
          toaster.show({
            title: "Gagal",
            message: "Gagal mengubah status produk",
            closable: true,
            color: "danger"
          });
        }
      } catch (error2) {
        console.error("API Error:", error2);
      }
    };
    const handleSwitchChangeVariant = async (varian) => {
      try {
        const apiUrl = "https://api.dev.commerce.waktoo.com:443/api/product-data";
        console.log("variant", varian);
        const newStatus = !varian.is_active;
        const response = await wretch(`${apiUrl}/${varian.product_data_id}/variants/${varian.id}`).headers({
          Authorization: `Bearer ${token.value}`,
          "Content-Type": "application/json"
        }).put({
          is_active: newStatus
        }).json();
        if (response.status == "success") {
          toaster.show({
            title: "Sukses",
            message: "Berhasil mengubah status varian",
            closable: true,
            color: "success"
          });
        } else {
          toaster.show({
            title: "Gagal",
            message: "Gagal mengubah status varian",
            closable: true,
            color: "danger"
          });
        }
      } catch (error2) {
        console.error("API Error:", error2);
      }
    };
    const formatCurrency = (price) => {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      });
      return formatter.format(price);
    };
    const toggleSelect = (index) => {
      if (showSelect.value == index) {
        showSelect.value = null;
      } else {
        if (index !== -1) {
          console.log(index);
          showSelect.value = index;
          console.log(showSelect);
        }
      }
    };
    const selected = ref([]);
    const isAllVisibleSelected = computed(() => {
      return selected.value.length === products.value.length;
    });
    function toggleAllVisibleSelection() {
      if (isAllVisibleSelected.value) {
        selected.value = [];
      } else {
        selected.value = products.value.map((product) => product.id);
      }
    }
    ref("default");
    ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$4;
      const _component_BaseInput = _sfc_main$2;
      const _component_BaseButton = _sfc_main$3;
      const _component_Icon = __nuxt_component_0$2;
      const _component_TairoModal = _sfc_main$5;
      const _component_BaseButtonClose = _sfc_main$b;
      const _component_BaseSelect = _sfc_main$6;
      const _component_BaseInputFileHeadless = _sfc_main$1$1;
      const _component_center = resolveComponent("center");
      const _component_BaseButtonIcon = _sfc_main$7;
      const _component_BaseRadio = _sfc_main$8;
      const _component_BaseSwitchThin = _sfc_main$9;
      const _component_Loading = __nuxt_component_4;
      const _component_BasePlaceholderPage = _sfc_main$6$1;
      const _component_TairoTable = _sfc_main$3$1;
      const _component_TairoTableHeading = _sfc_main$2$1;
      const _component_BaseCheckbox = _sfc_main$a;
      const _component_TairoTableRow = _sfc_main$1$2;
      const _component_TairoTableCell = _sfc_main$c;
      const _component_router_link = resolveComponent("router-link");
      const _component_BaseSwitchBall = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d47fbff7>`);
      _push(ssrRenderComponent(_component_TairoContentWrapper, null, {
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: s.value,
              "onUpdate:modelValue": ($event) => s.value = $event,
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
                modelValue: s.value,
                "onUpdate:modelValue": ($event) => s.value = $event,
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
              onClick: ($event) => isModal3XlOpen.value = true,
              class: "w-full sm:w-42"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-d47fbff7${_scopeId2}>Tambah Produk</span>`);
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
                onClick: ($event) => isModal3XlOpen.value = true,
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
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoModal, {
              open: isModal3XlOpen.value,
              size: "3xl",
              onClose: ($event) => isModal3XlOpen.value = false
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex w-full items-center justify-between p-4 md:p-6" style="${ssrRenderStyle({ "border": "1px solid #ddd" })}" data-v-d47fbff7${_scopeId2}><h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white" data-v-d47fbff7${_scopeId2}> Tambah Produk </h3>`);
                  _push3(ssrRenderComponent(_component_BaseButtonClose, {
                    onClick: ($event) => isModal3XlOpen.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "flex w-full items-center justify-between p-4 md:p-6",
                      style: { "border": "1px solid #ddd" }
                    }, [
                      createVNode("h3", { class: "font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white" }, " Tambah Produk "),
                      createVNode(_component_BaseButtonClose, {
                        onClick: ($event) => isModal3XlOpen.value = false
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form data-v-d47fbff7${_scopeId2}><div class="p-4 mrgn scroll-y" data-v-d47fbff7${_scopeId2}><div class="mlls" data-v-d47fbff7${_scopeId2}><div class="title-m-1" data-v-d47fbff7${_scopeId2}>Informasi Produk</div><div class="title-m-2" data-v-d47fbff7${_scopeId2}>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-d47fbff7${_scopeId2}><div class="line-height-normal" data-v-d47fbff7${_scopeId2}><span class="title-m-3" data-v-d47fbff7${_scopeId2}>Nama Produk</span> <span class="alert-red" data-v-d47fbff7${_scopeId2}>Wajib</span><br data-v-d47fbff7${_scopeId2}><span class="title-m-2" data-v-d47fbff7${_scopeId2}>Nama produk minimal mempunyai 40 karakter dengan memasukkan merek, jenis produk, warna, bahan, atau tipe.</span></div><div class="line-height-normal" data-v-d47fbff7${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    placeholder: "Contoh: Jenis/Kategori Produk + Merek + Keterangan",
                    modelValue: formData.value.name,
                    "onUpdate:modelValue": ($event) => formData.value.name = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-d47fbff7${_scopeId2}><div class="line-height-normal" data-v-d47fbff7${_scopeId2}><span class="title-m-3" data-v-d47fbff7${_scopeId2}>Kategori</span> <span class="alert-red" data-v-d47fbff7${_scopeId2}>Wajib</span><br data-v-d47fbff7${_scopeId2}><span class="title-m-2" data-v-d47fbff7${_scopeId2}>Pilih kategori yang sesuai dengan produk. Pemilihan kategori yang tepat akan mempermudah barang untuk dicari oleh pembeli.</span></div><div class="line-height-normal" data-v-d47fbff7${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseSelect, {
                    rounded: "sm",
                    modelValue: selectedCategoryId.value,
                    "onUpdate:modelValue": ($event) => selectedCategoryId.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<option${ssrRenderAttr("value", null)} data-v-d47fbff7${_scopeId3}>Pilih Kategori</option><!--[-->`);
                        ssrRenderList(categories.value, (category) => {
                          _push4(`<option${ssrRenderAttr("value", category.id)} data-v-d47fbff7${_scopeId3}>${ssrInterpolate(category.name)}</option>`);
                        });
                        _push4(`<!--]-->`);
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
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-d47fbff7${_scopeId2}><div class="line-height-normal" data-v-d47fbff7${_scopeId2}><span class="title-m-3" data-v-d47fbff7${_scopeId2}>Foto Produk</span> <span class="alert-red" data-v-d47fbff7${_scopeId2}>Wajib</span><br data-v-d47fbff7${_scopeId2}><span class="title-m-2" data-v-d47fbff7${_scopeId2}>Wajib menambahkan minimal 1 dari 10 foto produk.<br data-v-d47fbff7${_scopeId2}>Format foto harus jpg jpeg ong dan mempunyai ukuran minimal 300 \xD7 300 px (untuk gambar optimal, gunakan ukuran min. 1.200 x 1.200 px).</span></div><div class="line-height-normal" data-v-d47fbff7${_scopeId2}><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4" data-v-d47fbff7${_scopeId2}><!--[-->`);
                  ssrRenderList(10, (index) => {
                    _push3(`<div class="photo-upload-item" data-v-d47fbff7${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseInputFileHeadless, {
                      modelValue: images.value[index - 1],
                      "onUpdate:modelValue": ($event) => images.value[index - 1] = $event,
                      accept: "image/*"
                    }, {
                      default: withCtx(({ open, remove, preview, files }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="relative size-20" data-v-d47fbff7${_scopeId3}>`);
                          if ((files == null ? void 0 : files.length) && files.item(0)) {
                            _push4(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto" data-v-d47fbff7${_scopeId3}>`);
                          } else {
                            _push4(`<div class="kotak-dotted" data-v-d47fbff7${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_center, null, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" data-v-d47fbff7${_scopeId4}>`);
                                } else {
                                  return [
                                    createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`<br data-v-d47fbff7${_scopeId3}> ${ssrInterpolate(index === 1 ? "Foto Utama" : "Foto Ke - " + index)}</div>`);
                          }
                          if ((files == null ? void 0 : files.length) && files.item(0)) {
                            _push4(`<div class="absolute bottom-0 end-0 z-20" data-v-d47fbff7${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_BaseButtonIcon, {
                              size: "sm",
                              rounded: "full",
                              "data-nui-tooltip": "Remove image",
                              class: "scale-90",
                              onClick: ($event) => remove(files.item(0))
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "lucide:x",
                                    class: "size-4"
                                  }, null, _parent5, _scopeId4));
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
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            _push4(`<div class="absolute bottom-0 end-0 z-20" data-v-d47fbff7${_scopeId3}><div class="relative" data-nui-tooltip="Upload image" data-v-d47fbff7${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_BaseButtonIcon, {
                              size: "sm",
                              rounded: "full",
                              class: "button-foto",
                              onClick: open
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "lucide:plus",
                                    class: "size-4"
                                  }, null, _parent5, _scopeId4));
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
                            }, _parent4, _scopeId3));
                            _push4(`</div></div>`);
                          }
                          _push4(`</div>`);
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
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-d47fbff7${_scopeId2}><div class="line-height-normal" data-v-d47fbff7${_scopeId2}><span class="title-m-3" data-v-d47fbff7${_scopeId2}>Kondisi</span> <span class="alert-red" data-v-d47fbff7${_scopeId2}>Wajib</span><br data-v-d47fbff7${_scopeId2}><span class="title-m-2" data-v-d47fbff7${_scopeId2}>Wajib menambahkan keterangan kondisi produk baru atau bekas</span></div><div class="line-height-normal" style="${ssrRenderStyle({ "margin-left": "15px" })}" data-v-d47fbff7${_scopeId2}><div class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4" data-v-d47fbff7${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseRadio, {
                    modelValue: formData.value.condition,
                    "onUpdate:modelValue": ($event) => formData.value.condition = $event,
                    name: "checkbox_base",
                    value: "1",
                    label: "baru",
                    color: "warning",
                    type: "number"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseRadio, {
                    modelValue: formData.value.condition,
                    "onUpdate:modelValue": ($event) => formData.value.condition = $event,
                    name: "checkbox_base",
                    value: "0",
                    label: "bekas",
                    color: "warning",
                    type: "number"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-d47fbff7${_scopeId2}><div class="line-height-normal" data-v-d47fbff7${_scopeId2}><span class="title-m-3" data-v-d47fbff7${_scopeId2}>Minimum Pesanan</span> <span class="alert-red" data-v-d47fbff7${_scopeId2}>Wajib</span><br data-v-d47fbff7${_scopeId2}><span class="title-m-2" data-v-d47fbff7${_scopeId2}>Atur jumlah minimum yang harus dibeli untuk produk ini.</span></div><div class="line-height-normal" data-v-d47fbff7${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    placeholder: "Contoh: 3",
                    modelValue: formData.value.min_order,
                    "onUpdate:modelValue": ($event) => formData.value.min_order = $event,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-d47fbff7${_scopeId2}><div class="line-height-normal" data-v-d47fbff7${_scopeId2}><span class="title-m-3" data-v-d47fbff7${_scopeId2}>Harga Satuan</span> <span class="alert-red" data-v-d47fbff7${_scopeId2}>Wajib</span><br data-v-d47fbff7${_scopeId2}><span class="title-m-2" data-v-d47fbff7${_scopeId2}>Atur jumlah minimum yang harus dibeli untuk produk ini.</span></div><div class="line-height-normal" data-v-d47fbff7${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    placeholder: "Contoh: Rp10.000",
                    modelValue: formData.value.price,
                    "onUpdate:modelValue": ($event) => formData.value.price = $event,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-d47fbff7${_scopeId2}><div class="line-height-normal" data-v-d47fbff7${_scopeId2}><span class="title-m-3" data-v-d47fbff7${_scopeId2}>Status Produk</span><br data-v-d47fbff7${_scopeId2}><span class="title-m-2" data-v-d47fbff7${_scopeId2}>Jika status aktif, produkmu dapat dicari oleh calon pembeli.</span></div><div class="line-height-normal" data-v-d47fbff7${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseSwitchThin, {
                    label: "Aktifkan Produk",
                    color: "primary",
                    modelValue: formData.value.is_active,
                    "onUpdate:modelValue": ($event) => formData.value.is_active = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-d47fbff7${_scopeId2}><div class="line-height-normal" data-v-d47fbff7${_scopeId2}><span class="title-m-3" data-v-d47fbff7${_scopeId2}>Stok Produk</span><br data-v-d47fbff7${_scopeId2}><span class="title-m-2" data-v-d47fbff7${_scopeId2}>Jumlah barang atau unit yang tersedia untuk dijual.</span></div><div class="line-height-normal" data-v-d47fbff7${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    placeholder: "Contoh: 3",
                    modelValue: formData.value.stock,
                    "onUpdate:modelValue": ($event) => formData.value.stock = $event,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-d47fbff7${_scopeId2}><div class="line-height-normal" data-v-d47fbff7${_scopeId2}><span class="title-m-3" data-v-d47fbff7${_scopeId2}>Berat Produk</span><br data-v-d47fbff7${_scopeId2}><span class="title-m-2" data-v-d47fbff7${_scopeId2}>Jumlah barang atau unit yang tersedia untuk dijual.</span></div><div class="line-height-normal" data-v-d47fbff7${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    placeholder: "Contoh: 1",
                    modelValue: formData.value.weight,
                    "onUpdate:modelValue": ($event) => formData.value.weight = $event,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-d47fbff7${_scopeId2}><div class="line-height-normal" data-v-d47fbff7${_scopeId2}><span class="title-m-3" data-v-d47fbff7${_scopeId2}>Ukuran Produk</span><br data-v-d47fbff7${_scopeId2}><span class="title-m-2" data-v-d47fbff7${_scopeId2}>Masukkan ukuran produk setelah dikemas untuk menghitung berat volume.</span></div><div class="line-height-normal" data-v-d47fbff7${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    placeholder: "Contoh: 1",
                    modelValue: formData.value.length,
                    "onUpdate:modelValue": ($event) => formData.value.length = $event,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-d47fbff7${_scopeId2}><div class="line-height-normal" data-v-d47fbff7${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseButton, {
                    variant: "solid",
                    onClick: saveData
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Buka Form Selengkapnya `);
                      } else {
                        return [
                          createTextVNode(" Buka Form Selengkapnya ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="line-height-normal text-right" data-v-d47fbff7${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseButton, {
                    onClick: ($event) => isModal3XlOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Batal `);
                      } else {
                        return [
                          createTextVNode(" Batal ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` \xA0 `);
                  _push3(ssrRenderComponent(_component_BaseButton, {
                    type: "submit",
                    color: "primary",
                    variant: "solid",
                    onClick: ($event) => isModal3XlOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Simpan `);
                      } else {
                        return [
                          createTextVNode(" Simpan ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div></form>`);
                } else {
                  return [
                    createVNode("form", { onSubmit: submitForm }, [
                      createVNode("div", { class: "p-4 mrgn scroll-y" }, [
                        createVNode("div", { class: "mlls" }, [
                          createVNode("div", { class: "title-m-1" }, "Informasi Produk"),
                          createVNode("div", { class: "title-m-2" }, "Ini adalah informasi yang pertama ditampilkan untuk pelanggan")
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode("span", { class: "title-m-3" }, "Nama Produk"),
                            createTextVNode(),
                            createVNode("span", { class: "alert-red" }, "Wajib"),
                            createVNode("br"),
                            createVNode("span", { class: "title-m-2" }, "Nama produk minimal mempunyai 40 karakter dengan memasukkan merek, jenis produk, warna, bahan, atau tipe.")
                          ]),
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode(_component_BaseInput, {
                              placeholder: "Contoh: Jenis/Kategori Produk + Merek + Keterangan",
                              modelValue: formData.value.name,
                              "onUpdate:modelValue": ($event) => formData.value.name = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode("span", { class: "title-m-3" }, "Kategori"),
                            createTextVNode(),
                            createVNode("span", { class: "alert-red" }, "Wajib"),
                            createVNode("br"),
                            createVNode("span", { class: "title-m-2" }, "Pilih kategori yang sesuai dengan produk. Pemilihan kategori yang tepat akan mempermudah barang untuk dicari oleh pembeli.")
                          ]),
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode(_component_BaseSelect, {
                              rounded: "sm",
                              modelValue: selectedCategoryId.value,
                              "onUpdate:modelValue": ($event) => selectedCategoryId.value = $event
                            }, {
                              default: withCtx(() => [
                                createVNode("option", { value: null }, "Pilih Kategori"),
                                (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category) => {
                                  return openBlock(), createBlock("option", {
                                    key: category.id,
                                    value: category.id
                                  }, toDisplayString(category.name), 9, ["value"]);
                                }), 128))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode("span", { class: "title-m-3" }, "Foto Produk"),
                            createTextVNode(),
                            createVNode("span", { class: "alert-red" }, "Wajib"),
                            createVNode("br"),
                            createVNode("span", { class: "title-m-2" }, [
                              createTextVNode("Wajib menambahkan minimal 1 dari 10 foto produk."),
                              createVNode("br"),
                              createTextVNode("Format foto harus jpg jpeg ong dan mempunyai ukuran minimal 300 \xD7 300 px (untuk gambar optimal, gunakan ukuran min. 1.200 x 1.200 px).")
                            ])
                          ]),
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(10, (index) => {
                                return createVNode("div", {
                                  key: index,
                                  class: "photo-upload-item"
                                }, [
                                  createVNode(_component_BaseInputFileHeadless, {
                                    modelValue: images.value[index - 1],
                                    "onUpdate:modelValue": ($event) => images.value[index - 1] = $event,
                                    accept: "image/*"
                                  }, {
                                    default: withCtx(({ open, remove, preview, files }) => [
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
                                    ]),
                                    _: 2
                                  }, 1032, ["modelValue", "onUpdate:modelValue"])
                                ]);
                              }), 64))
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode("span", { class: "title-m-3" }, "Kondisi"),
                            createTextVNode(),
                            createVNode("span", { class: "alert-red" }, "Wajib"),
                            createVNode("br"),
                            createVNode("span", { class: "title-m-2" }, "Wajib menambahkan keterangan kondisi produk baru atau bekas")
                          ]),
                          createVNode("div", {
                            class: "line-height-normal",
                            style: { "margin-left": "15px" }
                          }, [
                            createVNode("div", { class: "grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4" }, [
                              createVNode(_component_BaseRadio, {
                                modelValue: formData.value.condition,
                                "onUpdate:modelValue": ($event) => formData.value.condition = $event,
                                name: "checkbox_base",
                                value: "1",
                                label: "baru",
                                color: "warning",
                                type: "number"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_BaseRadio, {
                                modelValue: formData.value.condition,
                                "onUpdate:modelValue": ($event) => formData.value.condition = $event,
                                name: "checkbox_base",
                                value: "0",
                                label: "bekas",
                                color: "warning",
                                type: "number"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode("span", { class: "title-m-3" }, "Minimum Pesanan"),
                            createTextVNode(),
                            createVNode("span", { class: "alert-red" }, "Wajib"),
                            createVNode("br"),
                            createVNode("span", { class: "title-m-2" }, "Atur jumlah minimum yang harus dibeli untuk produk ini.")
                          ]),
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode(_component_BaseInput, {
                              placeholder: "Contoh: 3",
                              modelValue: formData.value.min_order,
                              "onUpdate:modelValue": ($event) => formData.value.min_order = $event,
                              type: "number"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode("span", { class: "title-m-3" }, "Harga Satuan"),
                            createTextVNode(),
                            createVNode("span", { class: "alert-red" }, "Wajib"),
                            createVNode("br"),
                            createVNode("span", { class: "title-m-2" }, "Atur jumlah minimum yang harus dibeli untuk produk ini.")
                          ]),
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode(_component_BaseInput, {
                              placeholder: "Contoh: Rp10.000",
                              modelValue: formData.value.price,
                              "onUpdate:modelValue": ($event) => formData.value.price = $event,
                              type: "number"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode("span", { class: "title-m-3" }, "Status Produk"),
                            createVNode("br"),
                            createVNode("span", { class: "title-m-2" }, "Jika status aktif, produkmu dapat dicari oleh calon pembeli.")
                          ]),
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode(_component_BaseSwitchThin, {
                              label: "Aktifkan Produk",
                              color: "primary",
                              modelValue: formData.value.is_active,
                              "onUpdate:modelValue": ($event) => formData.value.is_active = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode("span", { class: "title-m-3" }, "Stok Produk"),
                            createVNode("br"),
                            createVNode("span", { class: "title-m-2" }, "Jumlah barang atau unit yang tersedia untuk dijual.")
                          ]),
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode(_component_BaseInput, {
                              placeholder: "Contoh: 3",
                              modelValue: formData.value.stock,
                              "onUpdate:modelValue": ($event) => formData.value.stock = $event,
                              type: "number"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode("span", { class: "title-m-3" }, "Berat Produk"),
                            createVNode("br"),
                            createVNode("span", { class: "title-m-2" }, "Jumlah barang atau unit yang tersedia untuk dijual.")
                          ]),
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode(_component_BaseInput, {
                              placeholder: "Contoh: 1",
                              modelValue: formData.value.weight,
                              "onUpdate:modelValue": ($event) => formData.value.weight = $event,
                              type: "number"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode("span", { class: "title-m-3" }, "Ukuran Produk"),
                            createVNode("br"),
                            createVNode("span", { class: "title-m-2" }, "Masukkan ukuran produk setelah dikemas untuk menghitung berat volume.")
                          ]),
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode(_component_BaseInput, {
                              placeholder: "Contoh: 1",
                              modelValue: formData.value.length,
                              "onUpdate:modelValue": ($event) => formData.value.length = $event,
                              type: "number"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                          createVNode("div", { class: "line-height-normal" }, [
                            createVNode(_component_BaseButton, {
                              variant: "solid",
                              onClick: saveData
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Buka Form Selengkapnya ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "line-height-normal text-right" }, [
                            createVNode(_component_BaseButton, {
                              onClick: ($event) => isModal3XlOpen.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Batal ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createTextVNode(" \xA0 "),
                            createVNode(_component_BaseButton, {
                              type: "submit",
                              color: "primary",
                              variant: "solid",
                              onClick: ($event) => isModal3XlOpen.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Simpan ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ])
                      ])
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (loading.value) {
              _push2(ssrRenderComponent(_component_Loading, { type: "spinner" }, null, _parent2, _scopeId));
            } else if (((_a = products.value) == null ? void 0 : _a.length) === 0) {
              _push2(ssrRenderComponent(_component_BasePlaceholderPage, {
                title: "Produk Masih Kosong",
                subtitle: "Data di tabel ini masih kosong. Anda bisa menambahkannya menggunakan tombol \u201CTambah Produk."
              }, {
                image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="block dark:hidden" src="https://res.cloudinary.com/daraki09f/image/upload/v1714112315/waktoo-commerce/data-empty-table.svg" alt="Placeholder image" data-v-d47fbff7${_scopeId2}><img class="hidden dark:block" src="https://res.cloudinary.com/daraki09f/image/upload/v1714112315/waktoo-commerce/data-empty-table.svg" alt="Placeholder image" data-v-d47fbff7${_scopeId2}>`);
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
              }, _parent2, _scopeId));
            } else {
              _push2(`<!--[-->`);
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
                          _push4(`<div class="flex items-center" data-v-d47fbff7${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseCheckbox, {
                            "model-value": isAllVisibleSelected.value,
                            indeterminate: selected.value.length > 0 && !isAllVisibleSelected.value,
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
                                "model-value": isAllVisibleSelected.value,
                                indeterminate: selected.value.length > 0 && !isAllVisibleSelected.value,
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
                              "model-value": isAllVisibleSelected.value,
                              indeterminate: selected.value.length > 0 && !isAllVisibleSelected.value,
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
                                  _push5(` You have selected ${ssrInterpolate(selected.value.length)} items of the total ${ssrInterpolate(products.value.length)} items. <a href="#" class="outline-none hover:underline focus:underline" data-v-d47fbff7${_scopeId4}>Click here to everything</a>`);
                                } else {
                                  return [
                                    createTextVNode(" You have selected " + toDisplayString(selected.value.length) + " items of the total " + toDisplayString(products.value.length) + " items. ", 1),
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
                                  createTextVNode(" You have selected " + toDisplayString(selected.value.length) + " items of the total " + toDisplayString(products.value.length) + " items. ", 1),
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
                    ssrRenderList(filteredProducts.value, (product, index) => {
                      _push3(`<!--[-->`);
                      _push3(ssrRenderComponent(_component_TairoTableRow, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_TairoTableCell, {
                              spaced: "",
                              class: "border-solid"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex items-center" data-v-d47fbff7${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_BaseCheckbox, {
                                    modelValue: selected.value,
                                    "onUpdate:modelValue": ($event) => selected.value = $event,
                                    value: product == null ? void 0 : product.id,
                                    name: `item-checkbox-${product == null ? void 0 : product.id}`,
                                    shape: "rounded",
                                    class: "text-primary-500"
                                  }, null, _parent5, _scopeId4));
                                  if (product == null ? void 0 : product.variants[0]) {
                                    _push5(`<button data-v-d47fbff7${_scopeId4}>`);
                                    _push5(ssrRenderComponent(_component_Icon, {
                                      name: showSelect.value == index ? "ic:baseline-keyboard-arrow-down" : "ic:baseline-keyboard-arrow-right",
                                      size: "24"
                                    }, null, _parent5, _scopeId4));
                                    _push5(`</button>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex items-center" }, [
                                      createVNode(_component_BaseCheckbox, {
                                        modelValue: selected.value,
                                        "onUpdate:modelValue": ($event) => selected.value = $event,
                                        value: product == null ? void 0 : product.id,
                                        name: `item-checkbox-${product == null ? void 0 : product.id}`,
                                        shape: "rounded",
                                        class: "text-primary-500"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"]),
                                      (product == null ? void 0 : product.variants[0]) ? (openBlock(), createBlock("button", {
                                        key: 0,
                                        onClick: withModifiers(($event) => toggleSelect(index), ["prevent"])
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: showSelect.value == index ? "ic:baseline-keyboard-arrow-down" : "ic:baseline-keyboard-arrow-right",
                                          size: "24"
                                        }, null, 8, ["name"])
                                      ], 8, ["onClick"])) : createCommentVNode("", true)
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
                                    to: `/admin-produk/${product == null ? void 0 : product.id}`
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="flex items-center" data-v-d47fbff7${_scopeId5}>`);
                                        if (product == null ? void 0 : product.images) {
                                          _push6(`<img${ssrRenderAttr("src", product == null ? void 0 : product.images[0])} alt="image description" class="img-produk" data-v-d47fbff7${_scopeId5}>`);
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        _push6(`<div class="ms-3 leading-none" data-v-d47fbff7${_scopeId5}><h4 class="font-sans text-sm font-medium dxz-2" data-v-d47fbff7${_scopeId5}>${ssrInterpolate(product == null ? void 0 : product.name)}</h4></div></div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "flex items-center" }, [
                                            (product == null ? void 0 : product.images) ? (openBlock(), createBlock("img", {
                                              key: 0,
                                              src: product == null ? void 0 : product.images[0],
                                              alt: "image description",
                                              class: "img-produk"
                                            }, null, 8, ["src"])) : createCommentVNode("", true),
                                            createVNode("div", { class: "ms-3 leading-none" }, [
                                              createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(product == null ? void 0 : product.name), 1)
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
                                      to: `/admin-produk/${product == null ? void 0 : product.id}`
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center" }, [
                                          (product == null ? void 0 : product.images) ? (openBlock(), createBlock("img", {
                                            key: 0,
                                            src: product == null ? void 0 : product.images[0],
                                            alt: "image description",
                                            class: "img-produk"
                                          }, null, 8, ["src"])) : createCommentVNode("", true),
                                          createVNode("div", { class: "ms-3 leading-none" }, [
                                            createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(product == null ? void 0 : product.name), 1)
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
                                  _push5(`<span class="start-text" data-v-d47fbff7${_scopeId4}>4.7</span><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png" data-v-d47fbff7${_scopeId4}><b data-v-d47fbff7${_scopeId4}>12.049</b> Penilaian `);
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
                                  if (product.variant_price) {
                                    _push5(`<span class="font-bold" data-v-d47fbff7${_scopeId4}>${ssrInterpolate(product.variant_price)}</span>`);
                                  } else if (product.price) {
                                    _push5(`<span class="font-bold" data-v-d47fbff7${_scopeId4}>${ssrInterpolate(formatCurrency(product.price))}</span>`);
                                  } else {
                                    _push5(`<span class="font-bold" data-v-d47fbff7${_scopeId4}> - </span>`);
                                  }
                                } else {
                                  return [
                                    product.variant_price ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "font-bold"
                                    }, toDisplayString(product.variant_price), 1)) : product.price ? (openBlock(), createBlock("span", {
                                      key: 1,
                                      class: "font-bold"
                                    }, toDisplayString(formatCurrency(product.price)), 1)) : (openBlock(), createBlock("span", {
                                      key: 2,
                                      class: "font-bold"
                                    }, " - "))
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
                                  _push5(`<span class="txt-sm-alert4" data-v-d47fbff7${_scopeId4}>${ssrInterpolate(product == null ? void 0 : product.product_category_name)}</span>`);
                                } else {
                                  return [
                                    createVNode("span", { class: "txt-sm-alert4" }, toDisplayString(product == null ? void 0 : product.product_category_name), 1)
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
                                  _push5(`<h4 class="font-sans text-sm font-medium" data-v-d47fbff7${_scopeId4}>${ssrInterpolate(product == null ? void 0 : product.stock)}</h4>`);
                                } else {
                                  return [
                                    createVNode("h4", { class: "font-sans text-sm font-medium" }, toDisplayString(product == null ? void 0 : product.stock), 1)
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
                                  _push5(ssrRenderComponent(_component_BaseSwitchBall, {
                                    modelValue: product.is_active,
                                    "onUpdate:modelValue": ($event) => product.is_active = $event,
                                    color: "success",
                                    onChange: ($event) => handleSwitchChange(product)
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_BaseSwitchBall, {
                                      modelValue: product.is_active,
                                      "onUpdate:modelValue": ($event) => product.is_active = $event,
                                      color: "success",
                                      onChange: ($event) => handleSwitchChange(product)
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
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
                                      value: product == null ? void 0 : product.id,
                                      name: `item-checkbox-${product == null ? void 0 : product.id}`,
                                      shape: "rounded",
                                      class: "text-primary-500"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"]),
                                    (product == null ? void 0 : product.variants[0]) ? (openBlock(), createBlock("button", {
                                      key: 0,
                                      onClick: withModifiers(($event) => toggleSelect(index), ["prevent"])
                                    }, [
                                      createVNode(_component_Icon, {
                                        name: showSelect.value == index ? "ic:baseline-keyboard-arrow-down" : "ic:baseline-keyboard-arrow-right",
                                        size: "24"
                                      }, null, 8, ["name"])
                                    ], 8, ["onClick"])) : createCommentVNode("", true)
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
                                    to: `/admin-produk/${product == null ? void 0 : product.id}`
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-center" }, [
                                        (product == null ? void 0 : product.images) ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          src: product == null ? void 0 : product.images[0],
                                          alt: "image description",
                                          class: "img-produk"
                                        }, null, 8, ["src"])) : createCommentVNode("", true),
                                        createVNode("div", { class: "ms-3 leading-none" }, [
                                          createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(product == null ? void 0 : product.name), 1)
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
                                  product.variant_price ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "font-bold"
                                  }, toDisplayString(product.variant_price), 1)) : product.price ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "font-bold"
                                  }, toDisplayString(formatCurrency(product.price)), 1)) : (openBlock(), createBlock("span", {
                                    key: 2,
                                    class: "font-bold"
                                  }, " - "))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                spaced: "",
                                class: "tdps"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "txt-sm-alert4" }, toDisplayString(product == null ? void 0 : product.product_category_name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                spaced: "",
                                class: "tdps"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "font-sans text-sm font-medium" }, toDisplayString(product == null ? void 0 : product.stock), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                spaced: "",
                                class: "tdps"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseSwitchBall, {
                                    modelValue: product.is_active,
                                    "onUpdate:modelValue": ($event) => product.is_active = $event,
                                    color: "success",
                                    onChange: ($event) => handleSwitchChange(product)
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      if (showSelect.value == index) {
                        _push3(`<!--[-->`);
                        ssrRenderList(product.variants, (varian) => {
                          _push3(ssrRenderComponent(_component_TairoTableRow, { class: "pl-4 !bg-commerce-50 hover:!bg-commerce-100" }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`<div class="flex items-center" data-v-d47fbff7${_scopeId4}>`);
                                      _push5(ssrRenderComponent(_component_BaseCheckbox, {
                                        modelValue: selected.value,
                                        "onUpdate:modelValue": ($event) => selected.value = $event,
                                        value: varian == null ? void 0 : varian.id,
                                        name: `item-checkbox-${varian == null ? void 0 : varian.id}`,
                                        shape: "rounded",
                                        class: "text-primary-500"
                                      }, null, _parent5, _scopeId4));
                                      _push5(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "flex items-center" }, [
                                          createVNode(_component_BaseCheckbox, {
                                            modelValue: selected.value,
                                            "onUpdate:modelValue": ($event) => selected.value = $event,
                                            value: varian == null ? void 0 : varian.id,
                                            name: `item-checkbox-${varian == null ? void 0 : varian.id}`,
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
                                        to: `/admin-produk/${product == null ? void 0 : product.id}`
                                      }, {
                                        default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(`<div class="flex items-center" data-v-d47fbff7${_scopeId5}><div class="ms-3 leading-none" data-v-d47fbff7${_scopeId5}><h4 class="font-sans text-sm font-medium dxz-2" data-v-d47fbff7${_scopeId5}>${ssrInterpolate(varian == null ? void 0 : varian.name)}</h4></div></div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "flex items-center" }, [
                                                createVNode("div", { class: "ms-3 leading-none" }, [
                                                  createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(varian == null ? void 0 : varian.name), 1)
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
                                          to: `/admin-produk/${product == null ? void 0 : product.id}`
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center" }, [
                                              createVNode("div", { class: "ms-3 leading-none" }, [
                                                createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(varian == null ? void 0 : varian.name), 1)
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
                                      _push5(`<span class="start-text" data-v-d47fbff7${_scopeId4}>4.7</span><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png" data-v-d47fbff7${_scopeId4}><b data-v-d47fbff7${_scopeId4}>12.049</b> Penilaian `);
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
                                      if (varian.price) {
                                        _push5(`<span class="font-bold" data-v-d47fbff7${_scopeId4}>${ssrInterpolate(formatCurrency(varian.price))}</span>`);
                                      } else {
                                        _push5(`<span class="font-bold" data-v-d47fbff7${_scopeId4}> - </span>`);
                                      }
                                    } else {
                                      return [
                                        varian.price ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "font-bold"
                                        }, toDisplayString(formatCurrency(varian.price)), 1)) : (openBlock(), createBlock("span", {
                                          key: 1,
                                          class: "font-bold"
                                        }, " - "))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                                _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, null, _parent4, _scopeId3));
                                _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`<h4 class="font-sans text-sm font-medium" data-v-d47fbff7${_scopeId4}>${ssrInterpolate(varian == null ? void 0 : varian.stock)}</h4>`);
                                    } else {
                                      return [
                                        createVNode("h4", { class: "font-sans text-sm font-medium" }, toDisplayString(varian == null ? void 0 : varian.stock), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                                _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(ssrRenderComponent(_component_BaseSwitchBall, {
                                        modelValue: varian.is_active,
                                        "onUpdate:modelValue": ($event) => varian.is_active = $event,
                                        color: "success",
                                        onChange: ($event) => handleSwitchChangeVariant(varian)
                                      }, null, _parent5, _scopeId4));
                                    } else {
                                      return [
                                        createVNode(_component_BaseSwitchBall, {
                                          modelValue: varian.is_active,
                                          "onUpdate:modelValue": ($event) => varian.is_active = $event,
                                          color: "success",
                                          onChange: ($event) => handleSwitchChangeVariant(varian)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
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
                                          modelValue: selected.value,
                                          "onUpdate:modelValue": ($event) => selected.value = $event,
                                          value: varian == null ? void 0 : varian.id,
                                          name: `item-checkbox-${varian == null ? void 0 : varian.id}`,
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
                                        to: `/admin-produk/${product == null ? void 0 : product.id}`
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex items-center" }, [
                                            createVNode("div", { class: "ms-3 leading-none" }, [
                                              createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(varian == null ? void 0 : varian.name), 1)
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
                                      varian.price ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "font-bold"
                                      }, toDisplayString(formatCurrency(varian.price)), 1)) : (openBlock(), createBlock("span", {
                                        key: 1,
                                        class: "font-bold"
                                      }, " - "))
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TairoTableCell, { spaced: "" }),
                                  createVNode(_component_TairoTableCell, { spaced: "" }, {
                                    default: withCtx(() => [
                                      createVNode("h4", { class: "font-sans text-sm font-medium" }, toDisplayString(varian == null ? void 0 : varian.stock), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TairoTableCell, { spaced: "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_BaseSwitchBall, {
                                        modelValue: varian.is_active,
                                        "onUpdate:modelValue": ($event) => varian.is_active = $event,
                                        color: "success",
                                        onChange: ($event) => handleSwitchChangeVariant(varian)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
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
                        _push3(`<!---->`);
                      }
                      _push3(`<!--]-->`);
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
                              createTextVNode(" You have selected " + toDisplayString(selected.value.length) + " items of the total " + toDisplayString(products.value.length) + " items. ", 1),
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
                      (openBlock(true), createBlock(Fragment, null, renderList(filteredProducts.value, (product, index) => {
                        return openBlock(), createBlock(Fragment, {
                          key: product == null ? void 0 : product.id
                        }, [
                          createVNode(_component_TairoTableRow, null, {
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
                                      value: product == null ? void 0 : product.id,
                                      name: `item-checkbox-${product == null ? void 0 : product.id}`,
                                      shape: "rounded",
                                      class: "text-primary-500"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"]),
                                    (product == null ? void 0 : product.variants[0]) ? (openBlock(), createBlock("button", {
                                      key: 0,
                                      onClick: withModifiers(($event) => toggleSelect(index), ["prevent"])
                                    }, [
                                      createVNode(_component_Icon, {
                                        name: showSelect.value == index ? "ic:baseline-keyboard-arrow-down" : "ic:baseline-keyboard-arrow-right",
                                        size: "24"
                                      }, null, 8, ["name"])
                                    ], 8, ["onClick"])) : createCommentVNode("", true)
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
                                    to: `/admin-produk/${product == null ? void 0 : product.id}`
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-center" }, [
                                        (product == null ? void 0 : product.images) ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          src: product == null ? void 0 : product.images[0],
                                          alt: "image description",
                                          class: "img-produk"
                                        }, null, 8, ["src"])) : createCommentVNode("", true),
                                        createVNode("div", { class: "ms-3 leading-none" }, [
                                          createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(product == null ? void 0 : product.name), 1)
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
                                  product.variant_price ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "font-bold"
                                  }, toDisplayString(product.variant_price), 1)) : product.price ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "font-bold"
                                  }, toDisplayString(formatCurrency(product.price)), 1)) : (openBlock(), createBlock("span", {
                                    key: 2,
                                    class: "font-bold"
                                  }, " - "))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                spaced: "",
                                class: "tdps"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "txt-sm-alert4" }, toDisplayString(product == null ? void 0 : product.product_category_name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                spaced: "",
                                class: "tdps"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "font-sans text-sm font-medium" }, toDisplayString(product == null ? void 0 : product.stock), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                spaced: "",
                                class: "tdps"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseSwitchBall, {
                                    modelValue: product.is_active,
                                    "onUpdate:modelValue": ($event) => product.is_active = $event,
                                    color: "success",
                                    onChange: ($event) => handleSwitchChange(product)
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          showSelect.value == index ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(product.variants, (varian) => {
                            return openBlock(), createBlock(_component_TairoTableRow, { class: "pl-4 !bg-commerce-50 hover:!bg-commerce-100" }, {
                              default: withCtx(() => [
                                createVNode(_component_TairoTableCell, { spaced: "" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center" }, [
                                      createVNode(_component_BaseCheckbox, {
                                        modelValue: selected.value,
                                        "onUpdate:modelValue": ($event) => selected.value = $event,
                                        value: varian == null ? void 0 : varian.id,
                                        name: `item-checkbox-${varian == null ? void 0 : varian.id}`,
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
                                      to: `/admin-produk/${product == null ? void 0 : product.id}`
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center" }, [
                                          createVNode("div", { class: "ms-3 leading-none" }, [
                                            createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(varian == null ? void 0 : varian.name), 1)
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
                                    varian.price ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "font-bold"
                                    }, toDisplayString(formatCurrency(varian.price)), 1)) : (openBlock(), createBlock("span", {
                                      key: 1,
                                      class: "font-bold"
                                    }, " - "))
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_TairoTableCell, { spaced: "" }),
                                createVNode(_component_TairoTableCell, { spaced: "" }, {
                                  default: withCtx(() => [
                                    createVNode("h4", { class: "font-sans text-sm font-medium" }, toDisplayString(varian == null ? void 0 : varian.stock), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_TairoTableCell, { spaced: "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_BaseSwitchBall, {
                                      modelValue: varian.is_active,
                                      "onUpdate:modelValue": ($event) => varian.is_active = $event,
                                      color: "success",
                                      onChange: ($event) => handleSwitchChangeVariant(varian)
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 256)) : createCommentVNode("", true)
                        ], 64);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="w-full flex flex-col md:flex-row justify-between items-center mt-6" data-v-d47fbff7${_scopeId}><div class="w-full md:w-52" data-v-d47fbff7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseSelect, {
                modelValue: per_page.value,
                "onUpdate:modelValue": ($event) => per_page.value = $event,
                onChange: ($event) => handlePerPageChange($event),
                label: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<option${ssrRenderAttr("value", 10)} data-v-d47fbff7${_scopeId2}>10 data per halaman</option><option${ssrRenderAttr("value", 25)} data-v-d47fbff7${_scopeId2}>25 data per halaman</option><option${ssrRenderAttr("value", 50)} data-v-d47fbff7${_scopeId2}>50 data per halaman</option><option${ssrRenderAttr("value", 100)} data-v-d47fbff7${_scopeId2}>100 data per halaman</option>`);
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
              _push2(`</div><div class="flex flex-row gap-4 justify-end items-center" data-v-d47fbff7${_scopeId}><p data-v-d47fbff7${_scopeId}>Halaman ke ${ssrInterpolate(page.value)} dari ${ssrInterpolate(totalPages.value)}</p>`);
              _push2(ssrRenderComponent(_component_BaseButton, {
                variant: "solid",
                color: "light",
                onClick: previousPage,
                disabled: page.value <= 1
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
                onClick: nextPage,
                disabled: page.value >= totalPages.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Next`);
                  } else {
                    return [
                      createTextVNode("Next")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><!--]-->`);
            }
          } else {
            return [
              createVNode(_component_TairoModal, {
                open: isModal3XlOpen.value,
                size: "3xl",
                onClose: ($event) => isModal3XlOpen.value = false
              }, {
                header: withCtx(() => [
                  createVNode("div", {
                    class: "flex w-full items-center justify-between p-4 md:p-6",
                    style: { "border": "1px solid #ddd" }
                  }, [
                    createVNode("h3", { class: "font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white" }, " Tambah Produk "),
                    createVNode(_component_BaseButtonClose, {
                      onClick: ($event) => isModal3XlOpen.value = false
                    }, null, 8, ["onClick"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("form", { onSubmit: submitForm }, [
                    createVNode("div", { class: "p-4 mrgn scroll-y" }, [
                      createVNode("div", { class: "mlls" }, [
                        createVNode("div", { class: "title-m-1" }, "Informasi Produk"),
                        createVNode("div", { class: "title-m-2" }, "Ini adalah informasi yang pertama ditampilkan untuk pelanggan")
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Nama Produk"),
                          createTextVNode(),
                          createVNode("span", { class: "alert-red" }, "Wajib"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, "Nama produk minimal mempunyai 40 karakter dengan memasukkan merek, jenis produk, warna, bahan, atau tipe.")
                        ]),
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode(_component_BaseInput, {
                            placeholder: "Contoh: Jenis/Kategori Produk + Merek + Keterangan",
                            modelValue: formData.value.name,
                            "onUpdate:modelValue": ($event) => formData.value.name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Kategori"),
                          createTextVNode(),
                          createVNode("span", { class: "alert-red" }, "Wajib"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, "Pilih kategori yang sesuai dengan produk. Pemilihan kategori yang tepat akan mempermudah barang untuk dicari oleh pembeli.")
                        ]),
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode(_component_BaseSelect, {
                            rounded: "sm",
                            modelValue: selectedCategoryId.value,
                            "onUpdate:modelValue": ($event) => selectedCategoryId.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode("option", { value: null }, "Pilih Kategori"),
                              (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category) => {
                                return openBlock(), createBlock("option", {
                                  key: category.id,
                                  value: category.id
                                }, toDisplayString(category.name), 9, ["value"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Foto Produk"),
                          createTextVNode(),
                          createVNode("span", { class: "alert-red" }, "Wajib"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, [
                            createTextVNode("Wajib menambahkan minimal 1 dari 10 foto produk."),
                            createVNode("br"),
                            createTextVNode("Format foto harus jpg jpeg ong dan mempunyai ukuran minimal 300 \xD7 300 px (untuk gambar optimal, gunakan ukuran min. 1.200 x 1.200 px).")
                          ])
                        ]),
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(10, (index) => {
                              return createVNode("div", {
                                key: index,
                                class: "photo-upload-item"
                              }, [
                                createVNode(_component_BaseInputFileHeadless, {
                                  modelValue: images.value[index - 1],
                                  "onUpdate:modelValue": ($event) => images.value[index - 1] = $event,
                                  accept: "image/*"
                                }, {
                                  default: withCtx(({ open, remove, preview, files }) => [
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
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue"])
                              ]);
                            }), 64))
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Kondisi"),
                          createTextVNode(),
                          createVNode("span", { class: "alert-red" }, "Wajib"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, "Wajib menambahkan keterangan kondisi produk baru atau bekas")
                        ]),
                        createVNode("div", {
                          class: "line-height-normal",
                          style: { "margin-left": "15px" }
                        }, [
                          createVNode("div", { class: "grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4" }, [
                            createVNode(_component_BaseRadio, {
                              modelValue: formData.value.condition,
                              "onUpdate:modelValue": ($event) => formData.value.condition = $event,
                              name: "checkbox_base",
                              value: "1",
                              label: "baru",
                              color: "warning",
                              type: "number"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_BaseRadio, {
                              modelValue: formData.value.condition,
                              "onUpdate:modelValue": ($event) => formData.value.condition = $event,
                              name: "checkbox_base",
                              value: "0",
                              label: "bekas",
                              color: "warning",
                              type: "number"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Minimum Pesanan"),
                          createTextVNode(),
                          createVNode("span", { class: "alert-red" }, "Wajib"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, "Atur jumlah minimum yang harus dibeli untuk produk ini.")
                        ]),
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode(_component_BaseInput, {
                            placeholder: "Contoh: 3",
                            modelValue: formData.value.min_order,
                            "onUpdate:modelValue": ($event) => formData.value.min_order = $event,
                            type: "number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Harga Satuan"),
                          createTextVNode(),
                          createVNode("span", { class: "alert-red" }, "Wajib"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, "Atur jumlah minimum yang harus dibeli untuk produk ini.")
                        ]),
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode(_component_BaseInput, {
                            placeholder: "Contoh: Rp10.000",
                            modelValue: formData.value.price,
                            "onUpdate:modelValue": ($event) => formData.value.price = $event,
                            type: "number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Status Produk"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, "Jika status aktif, produkmu dapat dicari oleh calon pembeli.")
                        ]),
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode(_component_BaseSwitchThin, {
                            label: "Aktifkan Produk",
                            color: "primary",
                            modelValue: formData.value.is_active,
                            "onUpdate:modelValue": ($event) => formData.value.is_active = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Stok Produk"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, "Jumlah barang atau unit yang tersedia untuk dijual.")
                        ]),
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode(_component_BaseInput, {
                            placeholder: "Contoh: 3",
                            modelValue: formData.value.stock,
                            "onUpdate:modelValue": ($event) => formData.value.stock = $event,
                            type: "number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Berat Produk"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, "Jumlah barang atau unit yang tersedia untuk dijual.")
                        ]),
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode(_component_BaseInput, {
                            placeholder: "Contoh: 1",
                            modelValue: formData.value.weight,
                            "onUpdate:modelValue": ($event) => formData.value.weight = $event,
                            type: "number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Ukuran Produk"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, "Masukkan ukuran produk setelah dikemas untuk menghitung berat volume.")
                        ]),
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode(_component_BaseInput, {
                            placeholder: "Contoh: 1",
                            modelValue: formData.value.length,
                            "onUpdate:modelValue": ($event) => formData.value.length = $event,
                            type: "number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode(_component_BaseButton, {
                            variant: "solid",
                            onClick: saveData
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Buka Form Selengkapnya ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "line-height-normal text-right" }, [
                          createVNode(_component_BaseButton, {
                            onClick: ($event) => isModal3XlOpen.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Batal ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createTextVNode(" \xA0 "),
                          createVNode(_component_BaseButton, {
                            type: "submit",
                            color: "primary",
                            variant: "solid",
                            onClick: ($event) => isModal3XlOpen.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Simpan ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ])
                    ])
                  ], 32)
                ]),
                _: 1
              }, 8, ["open", "onClose"]),
              loading.value ? (openBlock(), createBlock(_component_Loading, {
                key: 0,
                type: "spinner"
              })) : ((_b = products.value) == null ? void 0 : _b.length) === 0 ? (openBlock(), createBlock(_component_BasePlaceholderPage, {
                key: 1,
                title: "Produk Masih Kosong",
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
              })) : (openBlock(), createBlock(Fragment, { key: 2 }, [
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
                            "model-value": isAllVisibleSelected.value,
                            indeterminate: selected.value.length > 0 && !isAllVisibleSelected.value,
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
                            createTextVNode(" You have selected " + toDisplayString(selected.value.length) + " items of the total " + toDisplayString(products.value.length) + " items. ", 1),
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
                    (openBlock(true), createBlock(Fragment, null, renderList(filteredProducts.value, (product, index) => {
                      return openBlock(), createBlock(Fragment, {
                        key: product == null ? void 0 : product.id
                      }, [
                        createVNode(_component_TairoTableRow, null, {
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
                                    value: product == null ? void 0 : product.id,
                                    name: `item-checkbox-${product == null ? void 0 : product.id}`,
                                    shape: "rounded",
                                    class: "text-primary-500"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"]),
                                  (product == null ? void 0 : product.variants[0]) ? (openBlock(), createBlock("button", {
                                    key: 0,
                                    onClick: withModifiers(($event) => toggleSelect(index), ["prevent"])
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: showSelect.value == index ? "ic:baseline-keyboard-arrow-down" : "ic:baseline-keyboard-arrow-right",
                                      size: "24"
                                    }, null, 8, ["name"])
                                  ], 8, ["onClick"])) : createCommentVNode("", true)
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
                                  to: `/admin-produk/${product == null ? void 0 : product.id}`
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center" }, [
                                      (product == null ? void 0 : product.images) ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: product == null ? void 0 : product.images[0],
                                        alt: "image description",
                                        class: "img-produk"
                                      }, null, 8, ["src"])) : createCommentVNode("", true),
                                      createVNode("div", { class: "ms-3 leading-none" }, [
                                        createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(product == null ? void 0 : product.name), 1)
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
                                product.variant_price ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "font-bold"
                                }, toDisplayString(product.variant_price), 1)) : product.price ? (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "font-bold"
                                }, toDisplayString(formatCurrency(product.price)), 1)) : (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: "font-bold"
                                }, " - "))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, {
                              spaced: "",
                              class: "tdps"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "txt-sm-alert4" }, toDisplayString(product == null ? void 0 : product.product_category_name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, {
                              spaced: "",
                              class: "tdps"
                            }, {
                              default: withCtx(() => [
                                createVNode("h4", { class: "font-sans text-sm font-medium" }, toDisplayString(product == null ? void 0 : product.stock), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, {
                              spaced: "",
                              class: "tdps"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BaseSwitchBall, {
                                  modelValue: product.is_active,
                                  "onUpdate:modelValue": ($event) => product.is_active = $event,
                                  color: "success",
                                  onChange: ($event) => handleSwitchChange(product)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        showSelect.value == index ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(product.variants, (varian) => {
                          return openBlock(), createBlock(_component_TairoTableRow, { class: "pl-4 !bg-commerce-50 hover:!bg-commerce-100" }, {
                            default: withCtx(() => [
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode(_component_BaseCheckbox, {
                                      modelValue: selected.value,
                                      "onUpdate:modelValue": ($event) => selected.value = $event,
                                      value: varian == null ? void 0 : varian.id,
                                      name: `item-checkbox-${varian == null ? void 0 : varian.id}`,
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
                                    to: `/admin-produk/${product == null ? void 0 : product.id}`
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-center" }, [
                                        createVNode("div", { class: "ms-3 leading-none" }, [
                                          createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, toDisplayString(varian == null ? void 0 : varian.name), 1)
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
                                  varian.price ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "font-bold"
                                  }, toDisplayString(formatCurrency(varian.price)), 1)) : (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "font-bold"
                                  }, " - "))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "font-sans text-sm font-medium" }, toDisplayString(varian == null ? void 0 : varian.stock), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseSwitchBall, {
                                    modelValue: varian.is_active,
                                    "onUpdate:modelValue": ($event) => varian.is_active = $event,
                                    color: "success",
                                    onChange: ($event) => handleSwitchChangeVariant(varian)
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 256)) : createCommentVNode("", true)
                      ], 64);
                    }), 128))
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "w-full flex flex-col md:flex-row justify-between items-center mt-6" }, [
                  createVNode("div", { class: "w-full md:w-52" }, [
                    createVNode(_component_BaseSelect, {
                      modelValue: per_page.value,
                      "onUpdate:modelValue": ($event) => per_page.value = $event,
                      onChange: ($event) => handlePerPageChange($event),
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
                    createVNode("p", null, "Halaman ke " + toDisplayString(page.value) + " dari " + toDisplayString(totalPages.value), 1),
                    createVNode(_component_BaseButton, {
                      variant: "solid",
                      color: "light",
                      onClick: previousPage,
                      disabled: page.value <= 1
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Previous")
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    createVNode(_component_BaseButton, {
                      variant: "solid",
                      color: "success",
                      onClick: nextPage,
                      disabled: page.value >= totalPages.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Next")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ])
                ])
              ], 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/produk/ProdukList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d47fbff7"]]);

export { __nuxt_component_5 as _ };
