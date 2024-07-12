import { _ as _sfc_main$2 } from './BaseBreadcrumb-cZDskCmn.mjs';
import { o as useNuxtApp, m as useRoute, _ as __nuxt_component_0$2, d as _export_sfc } from './server.mjs';
import { _ as _sfc_main$3 } from './BaseInput-BgsoGXSG.mjs';
import { _ as _sfc_main$4 } from './BaseTextarea-BxXCnKx0.mjs';
import { _ as _sfc_main$5 } from './BaseSelect-BU4F-qvb.mjs';
import { u as useJwtAuth } from './composables-DmWjNlaH.mjs';
import { u as useToaster } from './toaster-B1V8z_xL.mjs';
import { useSSRContext, defineComponent, ref, watch, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
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
  __name: "TokoEdit",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    useJwtAuth();
    useToaster();
    const route = useRoute();
    const shopId = route.params.id;
    const { user, loggedIn } = useJwtAuth();
    const shop = ref({
      user_id: user.value.id,
      name: "",
      description: "",
      phone: "",
      address: "",
      origin_id: "",
      origin_type: "subdistrict",
      postal_code: "",
      latitude: 0,
      longitude: 0,
      city_id: "",
      province_id: ""
    });
    const provinces = ref([]);
    const cities = ref([]);
    const districts = ref([]);
    const selectedProvinceId = ref(null);
    const selectedCityId = ref(null);
    const selectedDistrictId = ref(null);
    const loadingProv = ref(false);
    const loadingCity = ref(false);
    const loadingDis = ref(false);
    const error = ref(null);
    const fetchCities = async () => {
      const provinceId = selectedProvinceId.value;
      if (!provinceId)
        return;
      try {
        loadingCity.value = true;
        const response = await wretch(`https://api.dev.commerce.waktoo.com:443/api/shipping/city?province_id=${provinceId}`).headers({ "Content-Type": "application/json" }).get().json();
        if ((response == null ? void 0 : response.status) === "success") {
          cities.value = response.data.city;
        } else {
          console.error("Failed to fetch cities:", response);
        }
      } catch (err) {
        error.value = err.message;
        console.error("Error fetching cities:", err);
      } finally {
        loadingCity.value = false;
      }
    };
    const fetchDistricts = async () => {
      const cityId = selectedCityId.value;
      if (!cityId)
        return;
      try {
        loadingDis.value = true;
        const response = await wretch(`https://api.dev.commerce.waktoo.com:443/api/shipping/subdistrict?city_id=${cityId}`).headers({ "Content-Type": "application/json" }).get().json();
        if ((response == null ? void 0 : response.status) === "success") {
          districts.value = response.data.subdistrict;
        } else {
          console.error("Failed to fetch districts:", response);
        }
      } catch (err) {
        error.value = err.message;
        console.error("Error fetching districts:", err);
      } finally {
        loadingDis.value = false;
      }
    };
    watch(selectedProvinceId, fetchCities);
    watch(selectedCityId, fetchDistricts);
    const demoBreadcrumbOne = [
      { label: "Home", hideLabel: false, icon: "lucide:home", to: "/toko-admin" },
      { label: "Detail Toko", hideLabel: false, to: `/toko-admin/${shopId}` },
      { label: "Edit Toko", hideLabel: false, to: "#" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseBreadcrumb = _sfc_main$2;
      const _component_Icon = __nuxt_component_0$2;
      const _component_BaseInput = _sfc_main$3;
      const _component_BaseTextarea = _sfc_main$4;
      const _component_BaseSelect = _sfc_main$5;
      _push(`<form${ssrRenderAttrs(_attrs)} data-v-b243ff15><div class="mb-2" data-v-b243ff15>`);
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
      _push(`</div><div class="border-muted-200" data-v-b243ff15><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-b243ff15><div class="bg-white dark:bg-muted-800/70 p-10" data-v-b243ff15><div class="mb-2" data-v-b243ff15><div class="mlls" data-v-b243ff15><div class="title-m-1" data-v-b243ff15>Informasi Toko</div><div class="title-m-2" data-v-b243ff15>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-b243ff15><div class="line-height-normal" data-v-b243ff15><span class="title-m-3" data-v-b243ff15>Nama Toko</span> <span class="alert-red" data-v-b243ff15>Wajib</span><br data-v-b243ff15><span class="title-m-2" data-v-b243ff15>Nama toko minimal mempunyai 5 karakter.</span></div><div class="line-height-normal" data-v-b243ff15>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        placeholder: "Masukan Nama Toko",
        modelValue: shop.value.name,
        "onUpdate:modelValue": ($event) => shop.value.name = $event
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-b243ff15><div class="line-height-normal" data-v-b243ff15><span class="title-m-3" data-v-b243ff15>Deskripsi Toko</span><br data-v-b243ff15><span class="title-m-2" data-v-b243ff15>Pastikan deskripsi toko memuat penjelasan detail terkait tokomu.</span><br data-v-b243ff15><span class="title-m-2" data-v-b243ff15>agar pembeli mudah mengerti dan menemukan tokomu.</span></div><div class="line-height-normal" data-v-b243ff15>`);
      _push(ssrRenderComponent(_component_BaseTextarea, {
        placeholder: "Tuliskan detail Toko....",
        modelValue: shop.value.description,
        "onUpdate:modelValue": ($event) => shop.value.description = $event
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-b243ff15><div class="line-height-normal" data-v-b243ff15><span class="title-m-3" data-v-b243ff15>No Telepon / Wa</span> <span class="alert-red" data-v-b243ff15>Wajib</span><br data-v-b243ff15></div><div class="line-height-normal" data-v-b243ff15>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        placeholder: "Masukan No Telepon",
        modelValue: shop.value.phone,
        "onUpdate:modelValue": ($event) => shop.value.phone = $event,
        required: ""
      }, null, _parent));
      _push(`</div></div></div></div></div></div><br data-v-b243ff15><div class="border-muted-200" data-v-b243ff15><div class="nui-card nui-card-rounded-sm nui-card-default" data-v-b243ff15><div class="bg-white dark:bg-muted-800/70 p-10" data-v-b243ff15><div class="mb-2" data-v-b243ff15><div class="mlls" data-v-b243ff15><div class="title-m-1" data-v-b243ff15>Alamat</div><div class="title-m-2" data-v-b243ff15>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-b243ff15><div class="line-height-normal" data-v-b243ff15><span class="title-m-3" data-v-b243ff15>Provinsi</span> <span class="alert-red" data-v-b243ff15>Wajib</span><br data-v-b243ff15><span class="title-m-2" data-v-b243ff15>Pilih Provinsi yang sesuai dengan alamatmu.</span></div><div class="line-height-normal" data-v-b243ff15>`);
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
            _push2(`<option${ssrRenderAttr("value", null)} data-v-b243ff15${_scopeId}>Pilih Provinsi</option><!--[-->`);
            ssrRenderList(provinces.value, (province) => {
              _push2(`<option${ssrRenderAttr("value", province.province_id)} data-v-b243ff15${_scopeId}>${ssrInterpolate(province.province_name)}</option>`);
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
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-b243ff15><div class="line-height-normal" data-v-b243ff15><span class="title-m-3" data-v-b243ff15>Kota / Kabupaten</span> <span class="alert-red" data-v-b243ff15>Wajib</span><br data-v-b243ff15><span class="title-m-2" data-v-b243ff15>Pilih Kota / Kabupaten yang sesuai dengan alamatmu.</span></div><div class="line-height-normal" data-v-b243ff15>`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        rounded: "sm",
        modelValue: selectedCityId.value,
        "onUpdate:modelValue": ($event) => selectedCityId.value = $event,
        disabled: !selectedProvinceId.value,
        onChange: fetchDistricts,
        id: "city",
        loading: loadingCity.value,
        required: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option${ssrRenderAttr("value", null)} data-v-b243ff15${_scopeId}>Pilih Kota / Kabupaten</option><!--[-->`);
            ssrRenderList(cities.value, (city) => {
              _push2(`<option${ssrRenderAttr("value", city.city_id)} data-v-b243ff15${_scopeId}>${ssrInterpolate(city.city_name)}</option>`);
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
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-b243ff15><div class="line-height-normal" data-v-b243ff15><span class="title-m-3" data-v-b243ff15>Kecamatan</span> <span class="alert-red" data-v-b243ff15>Wajib</span><br data-v-b243ff15><span class="title-m-2" data-v-b243ff15>Pilih Kecamatan yang sesuai dengan alamatmu.</span></div><div class="line-height-normal" data-v-b243ff15>`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        rounded: "sm",
        modelValue: selectedDistrictId.value,
        "onUpdate:modelValue": ($event) => selectedDistrictId.value = $event,
        disabled: !selectedCityId.value,
        id: "district",
        loading: loadingDis.value,
        required: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option${ssrRenderAttr("value", null)} data-v-b243ff15${_scopeId}>Pilih Kecamatan</option><!--[-->`);
            ssrRenderList(districts.value, (district) => {
              _push2(`<option${ssrRenderAttr("value", district.subdistrict_id)} data-v-b243ff15${_scopeId}>${ssrInterpolate(district.subdistrict_name)}</option>`);
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
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-b243ff15><div class="line-height-normal" data-v-b243ff15><span class="title-m-3" data-v-b243ff15>Kode Pos</span> <span class="alert-red" data-v-b243ff15>Wajib</span><br data-v-b243ff15></div><div class="line-height-normal" data-v-b243ff15>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        placeholder: "Masukan kode pos",
        modelValue: shop.value.postal_code,
        "onUpdate:modelValue": ($event) => shop.value.postal_code = $event,
        required: ""
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-b243ff15><div class="line-height-normal" data-v-b243ff15><span class="title-m-3" data-v-b243ff15>Alamat</span><br data-v-b243ff15><span class="title-m-2" data-v-b243ff15>Pastikan deskripsi alamat memuat penjelasan detail terkait alamatmu.</span><br data-v-b243ff15></div><div class="line-height-normal" data-v-b243ff15>`);
      _push(ssrRenderComponent(_component_BaseTextarea, {
        placeholder: "Tuliskan detail Alamat....",
        modelValue: shop.value.address,
        "onUpdate:modelValue": ($event) => shop.value.address = $event,
        required: ""
      }, null, _parent));
      _push(`</div></div></div></div></div></div><div class="flex justify-center fixed bottom-8 inset-x-0" data-v-b243ff15><div class="p-6 rounded-lg shadow-inner bg-white w-fit line-height-normal" data-v-b243ff15><button type="button" class="static nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-default !h-12 sm:w-40 mx-2 transform transition-transform duration-300 hover:scale-105" data-v-b243ff15> Cancel </button><button type="submit" class="static nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-primary !h-12 sm:w-40 mx-2 transform transition-transform duration-300 hover:scale-105" data-v-b243ff15> Submit </button></div></div></form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/toko-admin/TokoEdit.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b243ff15"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TokoEdit = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TokoEdit, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/toko-admin/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
