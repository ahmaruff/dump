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
  __name: "step-6",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const { data, nextNotOk } = useMultiStepForm();
    const dataQna = ref({
      question: "Darimana anda mengetahui Waktoo Commerce?",
      answer: (_a = data.value.qna[4]) == null ? void 0 : _a.answer
    });
    const checkboxData = ref(dataQna.value.answer || []);
    watch(checkboxData, (newVal) => {
      dataQna.value.answer = checkboxData.value;
      data.value.qna[4] = { ...dataQna.value };
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
            _push2(` Darimana anda mengetahui Waktoo Commerce? `);
          } else {
            return [
              createTextVNode(" Darimana anda mengetahui Waktoo Commerce? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm text-center">Pilih jawaban yang paling sesuai dari mana Anda mengetahui di Waktoo Commerce.</p><div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2"><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Penelusuran Google",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Penelusuran Google</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Penelusuran Google")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Seminar atau Workshop",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Seminar atau Workshop</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Seminar atau Workshop")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Rekomendasi Teman",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Rekomendasi Teman</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Rekomendasi Teman")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Pameran",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Pameran</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Pameran")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Iklan Cetak",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Iklan Cetak</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Iklan Cetak")
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
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Media Sosial</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Media Sosial")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Email Marketing",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Email Marketing</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Email Marketing")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Artikel Website",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Artikel Website</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Artikel Website")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Mitra Bisnis",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Mitra Bisnis</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Mitra Bisnis")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center w-full">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        class: "w-full",
        value: "Lainnya",
        modelValue: unref(checkboxData),
        "onUpdate:modelValue": ($event) => isRef(checkboxData) ? checkboxData.value = $event : null,
        color: "primary",
        classes: { wrapper: "flex flex-row justify-start items-center" }
      }, {
        default: withCtx((value, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-md text-muted-800"${_scopeId}>Lainnya</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-md text-muted-800" }, "Lainnya")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/onboarding/step-6.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
