import { e as _sfc_main$v } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseTextarea-9479699a.mjs';
import { defineComponent, ref, watch, useSSRContext } from 'vue';
import { u as useJwtAuth } from './composables-91439df8.mjs';
import { ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import wretch from 'wretch';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
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
    const iDId = ref(null);
    const selectedCityId = ref(null);
    const selectedDistrictId = ref(null);
    const loading = ref(false);
    const error = ref(null);
    const fetchProvinces = async () => {
      try {
        loading.value = true;
        const response = await wretch("https://api.dev.commerce.waktoo.com:443/api/shipping/province").headers({ "Content-Type": "application/json" }).get().json();
        if (response && response.status === "success") {
          provinces.value = response.data.province;
        } else {
          console.error("Failed to fetch data from provinces API:", response);
        }
      } catch (err) {
        error.value = err.message;
        console.error("Error:", err);
      } finally {
        loading.value = false;
      }
    };
    const fetchCities = async () => {
      if (!iDId.value)
        return;
      console.log("provinsi id", iDId.value);
      console.log("city id", selectedCityId.value);
      console.log("district id", selectedDistrictId.value);
      try {
        loading.value = true;
        const response = await wretch(`https://api.dev.commerce.waktoo.com:443/api/shipping/city?province_id=${iDId.value}`).headers({ "Content-Type": "application/json" }).get().json();
        if (response && response.status === "success") {
          cities.value = response.data.city;
        } else {
          console.error("Failed to fetch data from cities API:", response);
        }
        if (response && response.status === "success") {
          cities.value = response.data.city;
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
    const fetchDistricts = async () => {
      console.log("district city id", selectedCityId.value);
      if (!selectedCityId.value)
        return;
      try {
        loading.value = true;
        const response = await wretch(`https://api.dev.commerce.waktoo.com:443/api/shipping/subdistrict?city_id=${selectedCityId.value}`).headers({ "Content-Type": "application/json" }).get().json();
        if (response && response.status === "success") {
          districts.value = response.data.subdistrict;
        } else {
          console.error("Failed to fetch data from districts API:", response);
        }
      } catch (err) {
        error.value = err.message;
        console.error("Error:", err);
      } finally {
        loading.value = false;
      }
    };
    fetchProvinces();
    fetchCities();
    fetchDistricts();
    watch(() => shop.value.province_id, async (newProvinceId) => {
      if (newProvinceId) {
        iDId.value = newProvinceId;
        await fetchCities();
        selectedCityId.value = shop.value.city_id;
        await fetchDistricts();
        selectedDistrictId.value = shop.value.origin_id;
      }
    });
    const fetchShopData = async () => {
      try {
        loading.value = true;
        const responseShop = await wretch(`https://api.dev.commerce.waktoo.com:443/api/shops/${shopId}`).headers({ "Content-Type": "application/json" }).get().json();
        if (responseShop && responseShop.status === "success") {
          shop.value = responseShop.data.shop;
        } else {
          console.error("Failed to fetch data from shop API:", responseShop);
        }
      } catch (err) {
        error.value = err.message;
        console.error("Error:", err);
      } finally {
        loading.value = false;
      }
    };
    fetchShopData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$v;
      const _component_BaseTextarea = _sfc_main$1;
      _push(`<!--[--><div class="flex w-full flex-wrap items-center justify-between px-3 ml-5 -mt-16"><h1 class="mb-2 mt-0 text-2xl font-medium leading-tight text-black"> Edit Toko </h1></div> ${ssrInterpolate(shop.value)} <form class="mx-auto w-full"><div class="border-muted-200"><div class="nui-card nui-card-rounded-sm nui-card-default"><div class="bg-white dark:bg-muted-800/70 p-10"><div class="col-span-12 mt-6"><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Name",
        placeholder: "Masukan Nama",
        modelValue: shop.value.name,
        "onUpdate:modelValue": ($event) => shop.value.name = $event
      }, null, _parent));
      _push(`</div></div><div class="col-span-12 mt-6"><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseTextarea, {
        label: "Deskripsi",
        shape: "curved",
        placeholder: "Masukan Deskripsi",
        rows: "4",
        modelValue: shop.value.description,
        "onUpdate:modelValue": ($event) => shop.value.description = $event
      }, null, _parent));
      _push(`</div></div><div class="col-span-12 mt-6"><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Phone",
        placeholder: "Masukan No Telepon",
        modelValue: shop.value.phone,
        "onUpdate:modelValue": ($event) => shop.value.phone = $event
      }, null, _parent));
      _push(`</div></div><div class="col-span-12 sm:col-span-6 mt-6"><div class="flex w-full flex-col gap-4 sm:flex-row"><div class="relative grow"><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"><label class="nui-input-label" for="nui-input-f39c7d2d-067e-400e-ac21-d2292df2f668">Provinsi</label><div class="nui-select-wrapper nui-select-default nui-select-md nui-select-rounded-sm"><div><select class="nui-select nui-select border-unset" id="province"><option${ssrRenderAttr("value", null)}>Pilih Provinsi</option><!--[-->`);
      ssrRenderList(provinces.value, (province) => {
        _push(`<option${ssrRenderAttr("value", province.province_id)}>${ssrInterpolate(province.province_name)}</option>`);
      });
      _push(`<!--]--></select><div class="nui-select-chevron nui-chevron border-unset"><svg aria-hidden="true" viewBox="0 0 24 24" class="nui-select-chevron-inner"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"></path></svg></div></div></div></div></div></div><div class="vc-popover-content-wrapper is-interactive"></div></div><div class="col-span-12 sm:col-span-6 mt-6"><div class="flex w-full flex-col gap-4 sm:flex-row"><div class="relative grow"><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"><label class="nui-input-label" for="nui-input-f39c7d2d-067e-400e-ac21-d2292df2f668">Kota / Kabupaten</label><div class="nui-select-wrapper nui-select-default nui-select-md nui-select-rounded-sm"><div><select${ssrIncludeBooleanAttr(!iDId.value) ? " disabled" : ""} class="nui-select nui-select border-unset" id="city"><option${ssrRenderAttr("value", null)}>Pilih Kota / Kabupaten</option><!--[-->`);
      ssrRenderList(cities.value, (city) => {
        _push(`<option${ssrRenderAttr("value", city.city_id)}>${ssrInterpolate(city.city_name)}</option>`);
      });
      _push(`<!--]--></select><div class="nui-select-chevron nui-chevron border-unset"><svg aria-hidden="true" viewBox="0 0 24 24" class="nui-select-chevron-inner"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"></path></svg></div></div></div></div></div></div><div class="vc-popover-content-wrapper is-interactive"></div></div><div class="col-span-12 sm:col-span-6 mt-6"><div class="flex w-full flex-col gap-4 sm:flex-row"><div class="relative grow"><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"><label class="nui-input-label" for="nui-input-f39c7d2d-067e-400e-ac21-d2292df2f668">Kecamatan</label><div class="nui-select-wrapper nui-select-default nui-select-md nui-select-rounded-sm"><div><select${ssrIncludeBooleanAttr(!selectedCityId.value) ? " disabled" : ""} class="nui-select nui-select border-unset" id="district"><option${ssrRenderAttr("value", null)}>Pilih Kecamatan</option><!--[-->`);
      ssrRenderList(districts.value, (district) => {
        _push(`<option${ssrRenderAttr("value", district.subdistrict_id)}>${ssrInterpolate(district.subdistrict_name)}</option>`);
      });
      _push(`<!--]--></select><div class="nui-select-chevron nui-chevron border-unset"><svg aria-hidden="true" viewBox="0 0 24 24" class="nui-select-chevron-inner"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"></path></svg></div></div></div></div></div></div><div class="vc-popover-content-wrapper is-interactive"></div></div><div class="col-span-12 mt-6"><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Alamat",
        placeholder: "Masukan Alamat",
        modelValue: shop.value.address,
        "onUpdate:modelValue": ($event) => shop.value.address = $event
      }, null, _parent));
      _push(`</div></div><div class="col-span-12 mt-6"><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Kode POS",
        placeholder: "Masukan Kode Pos",
        modelValue: shop.value.postal_code,
        "onUpdate:modelValue": ($event) => shop.value.postal_code = $event
      }, null, _parent));
      _push(`</div></div></div></div></div><br><div class="text-center md:col-span-5"><div class="-mt-4 inline-flex w-full items-center justify-center gap-2 sm:w-auto"><button type="button" rel="" target="" class="nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-default !h-12 w-full sm:w-40"> Cancel </button><button type="submit" rel="" target="" class="nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-primary !h-12 w-full sm:w-40"> Submit </button></div></div></form><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/toko/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
