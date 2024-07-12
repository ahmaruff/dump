import { _ as __nuxt_component_4 } from './Loading-DgGIgVLA.mjs';
import { _ as _sfc_main$2 } from './BaseBreadcrumb-cZDskCmn.mjs';
import { o as useNuxtApp, p as useRouter, _ as __nuxt_component_0$2, d as _export_sfc } from './server.mjs';
import { _ as _sfc_main$3 } from './BaseInput-BgsoGXSG.mjs';
import { _ as _sfc_main$4 } from './BaseTextarea-BxXCnKx0.mjs';
import { _ as _sfc_main$5 } from './BaseSelect-BU4F-qvb.mjs';
import { u as useToaster } from './toaster-B1V8z_xL.mjs';
import { u as useJwtAuth } from './composables-DmWjNlaH.mjs';
import { useSSRContext, defineComponent, reactive, ref, computed, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import wretch from 'wretch';
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
import './BaseInputHelpText-CmEQTnIf.mjs';
import './input-id-Bz_TYZXb.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TokoCreate",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    useRouter();
    useToaster();
    useJwtAuth();
    const { user, loggedIn } = useJwtAuth();
    const formData = reactive({
      user_id: user.value.id,
      name: "",
      description: "",
      phone: null,
      address: "",
      origin_id: "",
      origin_type: "subdistrict",
      postal_code: "",
      latitude: 0,
      longitude: 0,
      city_id: "",
      province_id: ""
    });
    const userId = user.value.id;
    console.log("user", userId);
    const provinces = ref([]);
    const cities = ref([]);
    const districts = ref([]);
    const selectedProvince = ref("");
    const selectedCity = ref("");
    const selectedDistrict = ref("");
    const loadingProv = ref(false);
    const loadingCity = ref(false);
    const loadingDis = ref(false);
    const error = ref(null);
    const fetchProvinces = async () => {
      var _a;
      try {
        loadingProv.value = true;
        const response = await wretch("https://api.dev.commerce.waktoo.com:443/api/shipping/province").headers({ "Content-Type": "application/json" }).get().json();
        if (response && (response == null ? void 0 : response.status) === "success") {
          provinces.value = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.province;
          loadingProv.value = false;
        } else {
          console.error("Failed to fetch data from product-province API:", response);
        }
      } catch (err) {
        error.value = err.message;
        console.error("Error:", err);
      } finally {
        loadingProv.value = false;
      }
    };
    const fetchCities = async () => {
      var _a;
      const idProvince = (_a = selectedProvince == null ? void 0 : selectedProvince.value) == null ? void 0 : _a.province_id;
      if (!idProvince)
        return;
      try {
        loadingCity.value = true;
        const response = await wretch(`https://api.dev.commerce.waktoo.com:443/api/shipping/city?province_id=${idProvince}`).headers({ "Content-Type": "application/json" }).get().json();
        if (response && (response == null ? void 0 : response.status) === "success") {
          cities.value = response.data.city;
          loadingCity.value = false;
        } else {
          console.error("Failed to fetch data from product-province API:", response);
        }
      } catch (err) {
        error.value = err.message;
        console.error("Error fetching cities:", err);
      } finally {
        loadingCity.value = false;
      }
    };
    const fetchDistrict = async () => {
      var _a, _b;
      const idCity = (_a = selectedCity.value) == null ? void 0 : _a.city_id;
      if (!idCity)
        return;
      try {
        loadingDis.value = true;
        const response2 = await wretch(`https://api.dev.commerce.waktoo.com:443/api/shipping/subdistrict?city_id=${idCity}`).headers({ "Content-Type": "application/json" }).get().json();
        if (response2 && (response2 == null ? void 0 : response2.status) === "success") {
          districts.value = (_b = response2 == null ? void 0 : response2.data) == null ? void 0 : _b.subdistrict;
          loadingDis.value = false;
        } else {
          console.error("Failed to fetch data from product-province API:", response2);
        }
      } catch (err) {
        error.value = err == null ? void 0 : err.message;
        console.error("Error fetching cities:", err);
      } finally {
        loadingDis.value = false;
      }
    };
    const selectedProvinceId = computed({
      get: () => {
        const value = selectedProvince.value ? selectedProvince.value.province_id : null;
        console.log("Selected Province ID (get):", value);
        return value;
      },
      set: (value) => {
        console.log("Setting Selected Province ID to:", value);
        selectedProvince.value = provinces.value.find((province) => province.province_id === value) || null;
        console.log("Selected Province:", selectedProvince.value);
      }
    });
    const selectedCityId = computed({
      get: () => {
        const value = selectedCity.value ? selectedCity.value.city_id : null;
        console.log("Selected City ID (get):", value);
        return value;
      },
      set: (value) => {
        console.log("Setting Selected City ID to:", value);
        selectedCity.value = cities.value.find((city) => city.city_id === value) || null;
        console.log("Selected City:", selectedCity.value);
      }
    });
    const selectedDistrictId = computed({
      get: () => {
        console.log(selectedDistrict.value.subdistrict_id);
        const value = selectedDistrict.value ? selectedDistrict.value.subdistrict_id : null;
        console.log("Selected Disctrict ID (get):", value);
        return value;
      },
      set: (value) => {
        console.log("Setting Selected Disctrict ID to:", value);
        selectedDistrict.value = districts.value.find((district) => district.subdistrict_id === value) || null;
        console.log("Selected Disctrict:", selectedDistrict.value);
      }
    });
    fetchProvinces();
    fetchCities();
    fetchDistrict();
    const demoBreadcrumbOne = [
      {
        label: "Home",
        hideLabel: false,
        icon: "lucide:home",
        to: "/toko-admin"
      },
      {
        label: "Tambah Toko",
        hideLabel: false,
        to: "#"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loading = __nuxt_component_4;
      const _component_BaseBreadcrumb = _sfc_main$2;
      const _component_Icon = __nuxt_component_0$2;
      const _component_BaseInput = _sfc_main$3;
      const _component_BaseTextarea = _sfc_main$4;
      const _component_BaseSelect = _sfc_main$5;
      if (_ctx.loading) {
        _push(ssrRenderComponent(_component_Loading, mergeProps({ type: "spinner" }, _attrs), null, _parent));
      } else {
        _push(`<form${ssrRenderAttrs(_attrs)} data-v-e7de8718><div class="mb-2" data-v-e7de8718>`);
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
        _push(`</div><div class="border-muted-200" data-v-e7de8718><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-e7de8718><div class="bg-white dark:bg-muted-800/70 p-10" data-v-e7de8718><div class="mb-2" data-v-e7de8718><div class="mlls" data-v-e7de8718><div class="title-m-1" data-v-e7de8718>Informasi Toko</div><div class="title-m-2" data-v-e7de8718>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-e7de8718><div class="line-height-normal" data-v-e7de8718><span class="title-m-3" data-v-e7de8718>Nama Toko</span> <span class="alert-red" data-v-e7de8718>Wajib</span><br data-v-e7de8718><span class="title-m-2" data-v-e7de8718>Nama toko minimal mempunyai 5 karakter.</span></div><div class="line-height-normal" data-v-e7de8718>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          placeholder: "Masukan Nama Toko",
          modelValue: formData.name,
          "onUpdate:modelValue": ($event) => formData.name = $event
        }, null, _parent));
        _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-e7de8718><div class="line-height-normal" data-v-e7de8718><span class="title-m-3" data-v-e7de8718>Deskripsi Toko</span><br data-v-e7de8718><span class="title-m-2" data-v-e7de8718>Pastikan deskripsi toko memuat penjelasan detail terkait tokomu.</span><br data-v-e7de8718><span class="title-m-2" data-v-e7de8718>agar pembeli mudah mengerti dan menemukan tokomu.</span></div><div class="line-height-normal" data-v-e7de8718>`);
        _push(ssrRenderComponent(_component_BaseTextarea, {
          placeholder: "Tuliskan detail Toko....",
          modelValue: formData.description,
          "onUpdate:modelValue": ($event) => formData.description = $event
        }, null, _parent));
        _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-e7de8718><div class="line-height-normal" data-v-e7de8718><span class="title-m-3" data-v-e7de8718>No Telepon / Wa</span> <span class="alert-red" data-v-e7de8718>Wajib</span><br data-v-e7de8718></div><div class="line-height-normal" data-v-e7de8718>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          placeholder: "Masukan No Telepon",
          modelValue: formData.phone,
          "onUpdate:modelValue": ($event) => formData.phone = $event,
          required: ""
        }, null, _parent));
        _push(`</div></div></div></div></div></div><br data-v-e7de8718><div class="border-muted-200" data-v-e7de8718><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-e7de8718><div class="bg-white dark:bg-muted-800/70 p-10" data-v-e7de8718><div class="mb-2" data-v-e7de8718><div class="mlls" data-v-e7de8718><div class="title-m-1" data-v-e7de8718>Alamat</div><div class="title-m-2" data-v-e7de8718>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-e7de8718><div class="line-height-normal" data-v-e7de8718><span class="title-m-3" data-v-e7de8718>Provinsi</span> <span class="alert-red" data-v-e7de8718>Wajib</span><br data-v-e7de8718><span class="title-m-2" data-v-e7de8718>Pilih Provinsi yang sesuai dengan alamatmu.</span></div><div class="line-height-normal" data-v-e7de8718>`);
        _push(ssrRenderComponent(_component_BaseSelect, {
          rounded: "sm",
          modelValue: selectedProvinceId.value,
          "onUpdate:modelValue": ($event) => selectedProvinceId.value = $event,
          onChange: fetchCities,
          id: "province",
          loading: loadingProv.value,
          required: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<option${ssrRenderAttr("value", null)} data-v-e7de8718${_scopeId}>Pilih Provinsi</option><!--[-->`);
              ssrRenderList(provinces.value, (province) => {
                _push2(`<option${ssrRenderAttr("value", province.province_id)} data-v-e7de8718${_scopeId}>${ssrInterpolate(province.province_name)}</option>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                createVNode("option", { value: null }, "Pilih Provinsi"),
                (openBlock(true), createBlock(Fragment, null, renderList(provinces.value, (province) => {
                  return openBlock(), createBlock("option", {
                    key: province.province_id,
                    value: province.province_id
                  }, toDisplayString(province.province_name), 9, ["value"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-e7de8718><div class="line-height-normal" data-v-e7de8718><span class="title-m-3" data-v-e7de8718>Kota / Kabupaten</span> <span class="alert-red" data-v-e7de8718>Wajib</span><br data-v-e7de8718><span class="title-m-2" data-v-e7de8718>Pilih Kota / Kabupaten yang sesuai dengan alamatmu.</span></div><div class="line-height-normal" data-v-e7de8718>`);
        _push(ssrRenderComponent(_component_BaseSelect, {
          rounded: "sm",
          modelValue: selectedCityId.value,
          "onUpdate:modelValue": ($event) => selectedCityId.value = $event,
          disabled: !selectedProvince.value,
          onChange: fetchDistrict,
          id: "city",
          loading: loadingCity.value,
          required: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<option${ssrRenderAttr("value", null)} data-v-e7de8718${_scopeId}>Pilih Kota / Kabupaten</option><!--[-->`);
              ssrRenderList(cities.value, (city) => {
                _push2(`<option${ssrRenderAttr("value", city.city_id)} data-v-e7de8718${_scopeId}>${ssrInterpolate(city.city_name)}</option>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                createVNode("option", { value: null }, "Pilih Kota / Kabupaten"),
                (openBlock(true), createBlock(Fragment, null, renderList(cities.value, (city) => {
                  return openBlock(), createBlock("option", {
                    key: city.city_id,
                    value: city.city_id
                  }, toDisplayString(city.city_name), 9, ["value"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-e7de8718><div class="line-height-normal" data-v-e7de8718><span class="title-m-3" data-v-e7de8718>Kecamatan</span> <span class="alert-red" data-v-e7de8718>Wajib</span><br data-v-e7de8718><span class="title-m-2" data-v-e7de8718>Pilih Kecamatan yang sesuai dengan alamatmu.</span></div><div class="line-height-normal" data-v-e7de8718>`);
        _push(ssrRenderComponent(_component_BaseSelect, {
          rounded: "sm",
          modelValue: selectedDistrictId.value,
          "onUpdate:modelValue": ($event) => selectedDistrictId.value = $event,
          disabled: !selectedCity.value,
          id: "district",
          loading: loadingDis.value,
          required: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<option${ssrRenderAttr("value", null)} data-v-e7de8718${_scopeId}>Pilih Kecamatan</option><!--[-->`);
              ssrRenderList(districts.value, (district) => {
                _push2(`<option${ssrRenderAttr("value", district.subdistrict_id)} data-v-e7de8718${_scopeId}>${ssrInterpolate(district.subdistrict_name)}</option>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                createVNode("option", { value: null }, "Pilih Kecamatan"),
                (openBlock(true), createBlock(Fragment, null, renderList(districts.value, (district) => {
                  return openBlock(), createBlock("option", {
                    key: district.subdistrict_id,
                    value: district.subdistrict_id
                  }, toDisplayString(district.subdistrict_name), 9, ["value"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-e7de8718><div class="line-height-normal" data-v-e7de8718><span class="title-m-3" data-v-e7de8718>Kode Pos</span> <span class="alert-red" data-v-e7de8718>Wajib</span><br data-v-e7de8718></div><div class="line-height-normal" data-v-e7de8718>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          placeholder: "Masukan kode pos",
          modelValue: formData.postal_code,
          "onUpdate:modelValue": ($event) => formData.postal_code = $event,
          required: ""
        }, null, _parent));
        _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-e7de8718><div class="line-height-normal" data-v-e7de8718><span class="title-m-3" data-v-e7de8718>Alamat</span><br data-v-e7de8718><span class="title-m-2" data-v-e7de8718>Pastikan deskripsi alamat memuat penjelasan detail terkait alamatmu.</span><br data-v-e7de8718></div><div class="line-height-normal" data-v-e7de8718>`);
        _push(ssrRenderComponent(_component_BaseTextarea, {
          placeholder: "Tuliskan detail Alamat....",
          modelValue: formData.address,
          "onUpdate:modelValue": ($event) => formData.address = $event,
          required: ""
        }, null, _parent));
        _push(`</div></div></div></div></div></div><div class="flex justify-center fixed bottom-8 inset-x-0" data-v-e7de8718><div class="p-6 rounded-lg shadow-inner bg-white w-fit line-height-normal" data-v-e7de8718><button type="button" class="static nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-default !h-12 sm:w-40 mx-2 transform transition-transform duration-300 hover:scale-105" data-v-e7de8718> Cancel </button><button type="submit" class="static nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-primary !h-12 sm:w-40 mx-2 transform transition-transform duration-300 hover:scale-105" data-v-e7de8718> Submit </button></div></div></form>`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/toko-admin/TokoCreate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e7de8718"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TokoCreate = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TokoCreate, { class: "pe-4 xl:pe-10" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/toko-admin/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
