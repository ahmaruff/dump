import { _ as _sfc_main$2 } from './LandingFooter-843f9743.mjs';
import { useSSRContext, defineComponent, reactive, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { z as useRoute, e as _sfc_main$v } from '../server.mjs';
import { u as useJwtAuth } from './composables-91439df8.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BankToko",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const route = useRoute();
    useJwtAuth();
    const shopId = route.params.id;
    console.log(shopId);
    const formData = reactive({
      account_name: "",
      account_number: "",
      shop_id: shopId,
      bank_name: ""
    });
    const banks = [
      "Bank Mandiri",
      "Bank Syariah Mandiri",
      "Bank Rakyat Indonesia (BRI)",
      "Bank BRI Syariah",
      "Bank Central Asia (BCA)",
      "Bank BCA Syariah",
      "Bank Negara Indonesia (BNI)",
      "Bank BNI Syariah",
      "Bank CIMB Niaga",
      "Bank Tabungan Negara (BTN)",
      "Bank Permata",
      "Bank Panin",
      "Bank OCBC NISP",
      "Bank Danamon",
      "Bank Maybank Indonesia",
      "Bank Mega",
      "Bank Sinarmas",
      "Bank BTPN",
      "Bank Bukopin",
      "Bank Muamalat"
    ];
    ref(null);
    ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$v;
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="dark:bg-muted-900 bg-white py-24"><div class="mx-auto w-full max-w-7xl px-4"><div class="ptablet:grid-cols-2 grid gap-6 sm:grid-cols-3"><div><span class="txt-title-2">Tambah Akun Bank</span><br><span class="txt-price-big"></span><br><br><div class="col-span-12 sm:col-span-6 mt-6"><div class="flex w-full flex-col gap-4 sm:flex-row"><div class="relative grow"><div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon"><label class="nui-input-label" for="nui-input-f39c7d2d-067e-400e-ac21-d2292df2f668">Pilih Bank</label><div class="nui-select-wrapper nui-select-default nui-select-md nui-select-rounded-sm"><div><select class="nui-select nui-select border-unset" id="province"><option${ssrRenderAttr("value", null)}>Pilih Bank</option><!--[-->`);
      ssrRenderList(banks, (bank, index) => {
        _push(`<option${ssrRenderAttr("value", bank)}>${ssrInterpolate(bank)}</option>`);
      });
      _push(`<!--]--></select><div class="nui-select-chevron nui-chevron border-unset"><svg aria-hidden="true" viewBox="0 0 24 24" class="nui-select-chevron-inner"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"></path></svg></div></div></div></div></div></div><div class="vc-popover-content-wrapper is-interactive"></div></div><div class="col-span-12 mt-6"><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Nomer Rekening",
        placeholder: "Masukan Nomer Rekening",
        modelValue: formData.account_number,
        "onUpdate:modelValue": ($event) => formData.account_number = $event
      }, null, _parent));
      _push(`</div></div><div class="col-span-12 mt-6"><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Nama Rekening",
        placeholder: "Masukan Nama Rekening",
        modelValue: formData.account_name,
        "onUpdate:modelValue": ($event) => formData.account_name = $event
      }, null, _parent));
      _push(`</div></div></div></div></div></div><br><div class="text-center md:col-span-5"><div class="-mt-4 inline-flex w-full items-center justify-center gap-2 sm:w-auto"><button type="button" rel="" target="" class="nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-default !h-12 w-full sm:w-40"> Cancel </button><button type="submit" rel="" target="" class="nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-primary !h-12 w-full sm:w-40"> Submit </button></div></div></form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BankToko.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_component_LandingFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/toko/bank/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
