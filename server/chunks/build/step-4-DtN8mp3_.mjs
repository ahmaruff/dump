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
  __name: "step-4",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const { data, nextNotOk } = useMultiStepForm();
    const dataQna = ref({
      question: "Di mana Anda akan berjualan?",
      answer: ((_a = data.value.qna[2]) == null ? void 0 : _a.answer) || []
    });
    const checkboxData = ref(dataQna.value.answer || []);
    watch(checkboxData, (newVal) => {
      dataQna.value.answer = checkboxData.value;
      data.value.qna[2] = { ...dataQna.value };
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
            _push2(` Di mana Anda akan berjualan? `);
          } else {
            return [
              createTextVNode(" Di mana Anda akan berjualan? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm text-center">Pilih cara mana saja yang ingin Anda gunakan dalam menjual produk.</p><div class="mt-4 flex flex-col justify-start items-start w-full gap-2"><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Toko Online",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Toko Online</p><p class="text-xs text-muted"${_scopeId}>Buat website toko online anda sendiri</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Toko Online"),
                createVNode("p", { class: "text-xs text-muted" }, "Buat website toko online anda sendiri")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Online Marketplace",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Online Marketplace</p><p class="text-xs text-muted"${_scopeId}>Berjualan dan menampilkan produk di Tokopedia, Shopee dll</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Online Marketplace"),
                createVNode("p", { class: "text-xs text-muted" }, "Berjualan dan menampilkan produk di Tokopedia, Shopee dll")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Media Sosial",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Media Sosial</p><p class="text-xs text-muted"${_scopeId}>Berjualan di Instagram, Facebook, Tiktok, dll</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Media Sosial"),
                createVNode("p", { class: "text-xs text-muted" }, "Berjualan di Instagram, Facebook, Tiktok, dll")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Website atau Blog",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Website atau Blog</p><p class="text-xs text-muted"${_scopeId}>Menambah tautan produk ke website atau blog</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Website atau Blog"),
                createVNode("p", { class: "text-xs text-muted" }, "Menambah tautan produk ke website atau blog")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Toko Fisik",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Toko Fisik</p><p class="text-xs text-muted"${_scopeId}>Berjualan di toko fisik dan retail lainnya</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Toko Fisik"),
                createVNode("p", { class: "text-xs text-muted" }, "Berjualan di toko fisik dan retail lainnya")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/onboarding/step-4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
