import { a as _sfc_main$7 } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseCheckbox-BfPzSTfU.mjs';
import { u as useMultiStepForm } from './multi-step-form-BjeY9Jgk.mjs';
import { defineComponent, ref, watch, withCtx, createTextVNode, unref, isRef, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "step-5",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const { data, nextNotOk } = useMultiStepForm();
    const dataQna = ref({
      question: "Apa yang ingin Anda jual terlebih dahulu?",
      answer: ((_a = data.value.qna[3]) == null ? void 0 : _a.answer) || []
    });
    const checkboxData = ref(dataQna.value.answer || []);
    watch(checkboxData, (newVal) => {
      dataQna.value.answer = checkboxData.value;
      data.value.qna[3] = { ...dataQna.value };
      checkNext();
    });
    const checkNext = () => {
      nextNotOk.value = checkboxData.value.length === 0;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$7;
      const _component_BaseCheckbox = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        class: "txt-onboarding-1 margin-40 text-center",
        weight: "medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Apa yang ingin Anda jual terlebih dahulu? `);
          } else {
            return [
              createTextVNode(" Apa yang ingin Anda jual terlebih dahulu? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm text-center">Kami akan bantu Anda untuk mengisi stok toko Anda.</p><div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2"><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Produk yang saya beli atau buat sendiri",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Produk yang saya beli atau buat sendiri</p><p class="text-xs text-muted"${_scopeId}>Pengiriman oleh saya sendiri</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Produk yang saya beli atau buat sendiri"),
                createVNode("p", { class: "text-xs text-muted" }, "Pengiriman oleh saya sendiri")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Produk Digital",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Produk Digital</p><p class="text-xs text-muted"${_scopeId}>Musik, Seni Digital, NFT</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Produk Digital"),
                createVNode("p", { class: "text-xs text-muted" }, "Musik, Seni Digital, NFT")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Pelayanan",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Pelayanan</p><p class="text-xs text-muted"${_scopeId}>Jasa, konsultan, housekeeping</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Pelayanan"),
                createVNode("p", { class: "text-xs text-muted" }, "Jasa, konsultan, housekeeping")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Produk Cetak Sesuai Permintaan",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Produk Cetak Sesuai Permintaan</p><p class="text-xs text-muted"${_scopeId}>Desain saya, dicetak dan dikirim oleh pihak ketiga</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Produk Cetak Sesuai Permintaan"),
                createVNode("p", { class: "text-xs text-muted" }, "Desain saya, dicetak dan dikirim oleh pihak ketiga")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Produk Dropship",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Produk Dropship</p><p class="text-xs text-muted"${_scopeId}>Produk dan pengiriman oleh pihak ketiga</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Produk Dropship"),
                createVNode("p", { class: "text-xs text-muted" }, "Produk dan pengiriman oleh pihak ketiga")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Saya akan putuskan nanti",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-400"${_scopeId}>Saya akan putuskan nanti</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-400" }, "Saya akan putuskan nanti")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="h-32 w-full"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/onboarding/step-5.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
