import { e as _sfc_main$v } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseTextarea-9479699a.mjs';
import { u as useJwtAuth } from './composables-91439df8.mjs';
import { defineComponent, reactive, ref, computed, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import wretch from 'wretch';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@headlessui/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
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
    const provinces = ref([]);
    const cities = ref([]);
    const districts = ref([]);
    const selectedProvince = ref(null);
    const selectedCity = ref("");
    const selectedDistrict = ref("");
    const loading = ref(false);
    const error = ref(null);
    const fetchProvinces = async () => {
      try {
        loading.value = true;
        const response = await wretch("https://api.dev.commerce.waktoo.com:443/api/shipping/province").headers({ "Content-Type": "application/json" }).get().json();
        if (response && response.status === "success") {
          provinces.value = response.data.province;
        } else {
          console.error("Failed to fetch data from product-province API:", response);
        }
      } catch (err) {
        error.value = err.message;
        console.error("Error:", err);
      } finally {
        loading.value = false;
      }
    };
    const fetchCities = async () => {
      const idProvince = selectedProvince.value.province_id;
      if (!idProvince)
        return;
      try {
        loading.value = true;
        const response = await wretch(`https://api.dev.commerce.waktoo.com:443/api/shipping/city?province_id=${idProvince}`).headers({ "Content-Type": "application/json" }).get().json();
        if (response && response.status === "success") {
          cities.value = response.data.city;
        } else {
          console.error("Failed to fetch data from product-province API:", response);
        }
      } catch (err) {
        error.value = err.message;
        console.error("Error fetching cities:", err);
      } finally {
        loading.value = false;
      }
    };
    const fetchDistrict = async () => {
      const idCity = selectedCity.value.city_id;
      if (!idCity)
        return;
      try {
        loading.value = true;
        const response2 = await wretch(`https://api.dev.commerce.waktoo.com:443/api/shipping/subdistrict?city_id=${idCity}`).headers({ "Content-Type": "application/json" }).get().json();
        if (response2 && response2.status === "success") {
          districts.value = response2.data.subdistrict;
        } else {
          console.error("Failed to fetch data from product-province API:", response2);
        }
      } catch (err) {
        error.value = err.message;
        console.error("Error fetching cities:", err);
      } finally {
        loading.value = false;
      }
    };
    computed({
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
    computed({
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
    computed({
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$v;
      const _component_BaseTextarea = _sfc_main$1;
      _push(`<!--[--><div class="flex w-full flex-wrap items-center justify-between px-3 ml-5 -mt-16"><h1 class="mb-2 mt-0 text-2xl font-medium leading-tight text-black"> Tambah Toko </h1></div><form class="mx-auto w-full"><div class="border-muted-200"><div class="nui-card nui-card-rounded-sm nui-card-default"><div class="bg-white dark:bg-muted-800/70 p-10"><div class="col-span-12 mt-6"><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Name",
        placeholder: "Masukan Nama",
        modelValue: formData.name,
        "onUpdate:modelValue": ($event) => formData.name = $event
      }, null, _parent));
      _push(`</div></div><div class="col-span-12 mt-6"><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseTextarea, {
        label: "Deskripsi",
        shape: "curved",
        placeholder: "Masukan Deskripsi",
        rows: "4",
        modelValue: formData.description,
        "onUpdate:modelValue": ($event) => formData.description = $event
      }, null, _parent));
      _push(`</div></div><div class="col-span-12 mt-6"><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Phone",
        placeholder: "Masukan No Telepon",
        modelValue: formData.phone,
        "onUpdate:modelValue": ($event) => formData.phone = $event
      }, null, _parent));
      _push(`</div></div><div class="col-span-12 sm:col-span-6 mt-6"><div class="flex w-full flex-col gap-4 sm:flex-row"><div class="relative grow"><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"><label class="nui-input-label" for="nui-input-f39c7d2d-067e-400e-ac21-d2292df2f668">Provinsi</label><div class="nui-select-wrapper nui-select-default nui-select-md nui-select-rounded-sm"><div><select class="nui-select nui-select border-unset" id="province"><option${ssrRenderAttr("value", null)}>Pilih Provinsi</option><!--[-->`);
      ssrRenderList(provinces.value, (province) => {
        _push(`<option${ssrRenderAttr("value", province.province_id)}>${ssrInterpolate(province.province_name)}</option>`);
      });
      _push(`<!--]--></select><div class="nui-select-chevron nui-chevron border-unset"><svg aria-hidden="true" viewBox="0 0 24 24" class="nui-select-chevron-inner"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"></path></svg></div></div></div></div></div></div><div class="vc-popover-content-wrapper is-interactive"></div></div><div class="col-span-12 sm:col-span-6 mt-6"><div class="flex w-full flex-col gap-4 sm:flex-row"><div class="relative grow"><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"><label class="nui-input-label" for="nui-input-f39c7d2d-067e-400e-ac21-d2292df2f668">Kota / Kabupaten</label><div class="nui-select-wrapper nui-select-default nui-select-md nui-select-rounded-sm"><div><select${ssrIncludeBooleanAttr(!selectedProvince.value) ? " disabled" : ""} class="nui-select nui-select border-unset" id="city"><option${ssrRenderAttr("value", null)}>Pilih Kota / Kabupaten</option><!--[-->`);
      ssrRenderList(cities.value, (city) => {
        _push(`<option${ssrRenderAttr("value", city.city_id)}>${ssrInterpolate(city.city_name)}</option>`);
      });
      _push(`<!--]--></select><div class="nui-select-chevron nui-chevron border-unset"><svg aria-hidden="true" viewBox="0 0 24 24" class="nui-select-chevron-inner"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"></path></svg></div></div></div></div></div></div><div class="vc-popover-content-wrapper is-interactive"></div></div><div class="col-span-12 sm:col-span-6 mt-6"><div class="flex w-full flex-col gap-4 sm:flex-row"><div class="relative grow"><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"><label class="nui-input-label" for="nui-input-f39c7d2d-067e-400e-ac21-d2292df2f668">Kecamatan</label><div class="nui-select-wrapper nui-select-default nui-select-md nui-select-rounded-sm"><div><select${ssrIncludeBooleanAttr(!selectedCity.value) ? " disabled" : ""} class="nui-select nui-select border-unset" id="district"><option${ssrRenderAttr("value", null)}>Pilih Kecamatan</option><!--[-->`);
      ssrRenderList(districts.value, (district) => {
        _push(`<option${ssrRenderAttr("value", district.subdistrict_id)}>${ssrInterpolate(district.subdistrict_name)}</option>`);
      });
      _push(`<!--]--></select><div class="nui-select-chevron nui-chevron border-unset"><svg aria-hidden="true" viewBox="0 0 24 24" class="nui-select-chevron-inner"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"></path></svg></div></div></div></div></div></div><div class="vc-popover-content-wrapper is-interactive"></div></div><div class="col-span-12 mt-6"><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Alamat",
        placeholder: "Masukan Alamat",
        modelValue: formData.address,
        "onUpdate:modelValue": ($event) => formData.address = $event
      }, null, _parent));
      _push(`</div></div><div class="col-span-12 mt-6"><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Kode POS",
        placeholder: "Masukan Kode Pos",
        modelValue: formData.postal_code,
        "onUpdate:modelValue": ($event) => formData.postal_code = $event
      }, null, _parent));
      _push(`</div></div></div></div></div><br><div class="text-center md:col-span-5"><div class="-mt-4 inline-flex w-full items-center justify-center gap-2 sm:w-auto"><button type="button" rel="" target="" class="nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-default !h-12 w-full sm:w-40"> Cancel </button><button type="submit" rel="" target="" class="nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-primary !h-12 w-full sm:w-40"> Submit </button></div></div></form><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/toko/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
