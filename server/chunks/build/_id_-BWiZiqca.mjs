import { _ as _sfc_main$2 } from './BaseBreadcrumb-cZDskCmn.mjs';
import { o as useNuxtApp, p as useRouter, u as useRoute$1, _ as __nuxt_component_0$2 } from './server.mjs';
import { _ as _sfc_main$3 } from './BaseSelect-BU4F-qvb.mjs';
import { _ as _sfc_main$4 } from './BaseInput-BgsoGXSG.mjs';
import { u as useToaster } from './toaster-B1V8z_xL.mjs';
import { u as useJwtAuth } from './composables-DmWjNlaH.mjs';
import { useSSRContext, defineComponent, reactive, ref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "TokoBank",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    useRouter();
    useToaster();
    const { token } = useJwtAuth();
    const route = useRoute$1();
    const shopId = route.params.id;
    console.log(shopId);
    console.log(token.value);
    const formBank = reactive({
      account_name: "",
      account_number: null,
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
    const selectedBank = ref(null);
    ref(false);
    ref(null);
    const demoBreadcrumbOne = [
      {
        label: "Home",
        hideLabel: false,
        icon: "lucide:home",
        to: "/toko-admin"
      },
      {
        label: "Tambah Akun Bank",
        hideLabel: false,
        to: "#"
        // Use backticks for template literals
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseBreadcrumb = _sfc_main$2;
      const _component_Icon = __nuxt_component_0$2;
      const _component_BaseSelect = _sfc_main$3;
      const _component_BaseInput = _sfc_main$4;
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="mb-2">`);
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
      _push(`</div><div class="border-muted-200"><div class="nui-card nui-card-rounded-sm nui-card-default"><div class="bg-white dark:bg-muted-800/70 p-10"><div class="mb-2"><div class="mlls"><div class="title-m-1">Alamat</div><div class="title-m-2">Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"><div class="line-height-normal"><span class="title-m-3">Provinsi</span> <span class="alert-red">Wajib</span><br><span class="title-m-2">Pilih Provinsi yang sesuai dengan alamatmu.</span></div><div class="line-height-normal">`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        rounded: "sm",
        modelValue: selectedBank.value,
        "onUpdate:modelValue": ($event) => selectedBank.value = $event,
        required: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}>Pilih Bank</option><!--[-->`);
            ssrRenderList(banks, (bank, index) => {
              _push2(`<option${ssrRenderAttr("value", bank)}${_scopeId}>${ssrInterpolate(bank)}</option>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("option", { value: null }, "Pilih Bank"),
              (openBlock(), createBlock(Fragment, null, renderList(banks, (bank, index) => {
                return createVNode("option", {
                  key: index,
                  value: bank
                }, toDisplayString(bank), 9, ["value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"><div class="line-height-normal"><span class="title-m-3">Nomer Rekening</span> <span class="alert-red">Wajib</span><br></div><div class="line-height-normal">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        placeholder: "Masukan Nomer Rekening",
        modelValue: formBank.account_number,
        "onUpdate:modelValue": ($event) => formBank.account_number = $event,
        required: ""
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"><div class="line-height-normal"><span class="title-m-3">Nama Rekening</span> <span class="alert-red">Wajib</span><br></div><div class="line-height-normal">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        placeholder: "Masukan Nama Rekening",
        modelValue: formBank.account_name,
        "onUpdate:modelValue": ($event) => formBank.account_name = $event,
        required: ""
      }, null, _parent));
      _push(`</div></div></div></div></div></div><div class="flex justify-center fixed bottom-8 inset-x-0"><div class="p-6 rounded-lg shadow-inner bg-white w-fit line-height-normal"><button type="button" class="static nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-default !h-12 sm:w-40 mx-2 transform transition-transform duration-300 hover:scale-105"> Cancel </button><button type="submit" class="static nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-primary !h-12 sm:w-40 mx-2 transform transition-transform duration-300 hover:scale-105"> Submit </button></div></div></form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/toko-admin/TokoBank.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TokoBank = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TokoBank, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/toko-admin/bank/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
