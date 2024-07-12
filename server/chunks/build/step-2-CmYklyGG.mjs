import { a as _sfc_main$7 } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseRadio-Bcx0iNXD.mjs';
import { u as useMultiStepForm } from './multi-step-form-BjeY9Jgk.mjs';
import { defineComponent, ref, watch, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
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
  __name: "step-2",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const { data, nextNotOk } = useMultiStepForm();
    const dataQna = ref({
      question: "Mari kita mulai. Manakah di antara berikut yang paling menggambarkan Anda?",
      answer: ((_a = data.value.qna[0]) == null ? void 0 : _a.answer) || ""
    });
    watch(() => dataQna.value.answer, (newAnswer) => {
      if (newAnswer) {
        data.value.qna[0] = { ...dataQna.value };
      }
      checkNext();
    });
    const checkNext = () => {
      if (dataQna.value.answer != "") {
        nextNotOk.value = false;
      } else {
        nextNotOk.value = true;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$7;
      const _component_BaseRadio = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        class: "txt-onboarding-1 margin-40 text-center",
        weight: "medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Mari kita mulai. Manakah di antara berikut yang paling menggambarkan Anda? `);
          } else {
            return [
              createTextVNode(" Mari kita mulai. Manakah di antara berikut yang paling menggambarkan Anda? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm text-center">Pilih kategori yang paling sesuai dengan tujuan bisnis Anda.</p><div class="mt-4"><div class="border-[0.5px] rounded-lg border-muted 200 hover:border-muted-500 p-2 flex justify-start items-center">`);
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(dataQna).answer,
        "onUpdate:modelValue": ($event) => unref(dataQna).answer = $event,
        value: "Saya baru mau memulai usaha.",
        label: "Saya baru mau memulai usaha.",
        rounded: "full",
        color: "primary",
        classes: { label: "text-primary" }
      }, null, _parent));
      _push(`</div><div class="mt-2 border-[0.5px] rounded-lg border-muted 200 hover:border-muted-500 p-2 flex justify-start items-center">`);
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(dataQna).answer,
        "onUpdate:modelValue": ($event) => unref(dataQna).answer = $event,
        value: "Saya sudah berjualan secara online atau melalui toko fisik",
        label: "Saya sudah berjualan secara online atau melalui toko fisik",
        rounded: "full",
        color: "primary",
        classes: { label: "text-muted-600" }
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/onboarding/step-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
