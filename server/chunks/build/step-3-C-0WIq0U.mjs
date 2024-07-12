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
  __name: "step-3",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const { data, nextNotOk } = useMultiStepForm();
    const dataQna = ref({
      question: "Apakah Anda saat ini juga berjualan di platfrom lain?",
      answer: ((_a = data.value.qna[1]) == null ? void 0 : _a.answer) || ""
    });
    ref(false);
    watch(() => dataQna.value.answer, (newAnswer) => {
      if (newAnswer) {
        data.value.qna[1] = { ...dataQna.value };
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
    const txt = ref("");
    watch(() => txt, () => {
      data.value.qna[1].answer = txt.value;
    });
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
            _push2(` Apakah Anda saat ini juga berjualan di platfrom lain? `);
          } else {
            return [
              createTextVNode(" Apakah Anda saat ini juga berjualan di platfrom lain? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm text-center">Pilih aplikasi POS, merketplace atau ecommerce yang saat ini Anda gunakan.</p><div class="mt-4 grid grid-cols-2 gap-2"><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center">`);
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(dataQna).answer,
        "onUpdate:modelValue": ($event) => unref(dataQna).answer = $event,
        value: "Tidak menggunakan platform apapun",
        label: "Tidak menggunakan platform apapun",
        rounded: "full",
        color: "primary"
      }, null, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center">`);
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(dataQna).answer,
        "onUpdate:modelValue": ($event) => unref(dataQna).answer = $event,
        value: "eBay",
        label: "eBay",
        rounded: "full",
        color: "primary"
      }, null, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center">`);
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(dataQna).answer,
        "onUpdate:modelValue": ($event) => unref(dataQna).answer = $event,
        value: "Tokopedia",
        label: "Tokopedia",
        rounded: "full",
        color: "primary"
      }, null, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center">`);
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(dataQna).answer,
        "onUpdate:modelValue": ($event) => unref(dataQna).answer = $event,
        value: "Shopee",
        label: "Shopee",
        rounded: "full",
        color: "primary"
      }, null, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center">`);
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(dataQna).answer,
        "onUpdate:modelValue": ($event) => unref(dataQna).answer = $event,
        value: "Lazada",
        label: "Lazada",
        rounded: "full",
        color: "primary"
      }, null, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center">`);
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(dataQna).answer,
        "onUpdate:modelValue": ($event) => unref(dataQna).answer = $event,
        value: "Amazon",
        label: "Amazon",
        rounded: "full",
        color: "primary"
      }, null, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center">`);
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(dataQna).answer,
        "onUpdate:modelValue": ($event) => unref(dataQna).answer = $event,
        value: "WordPress",
        label: "WordPress",
        rounded: "full",
        color: "primary"
      }, null, _parent));
      _push(`</div><div class="border-[0.5px] rounded-lg border-muted-200 hover:border-muted-500 p-2 flex justify-start items-center">`);
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(dataQna).answer,
        "onUpdate:modelValue": ($event) => unref(dataQna).answer = $event,
        value: "BukaLapak",
        label: "BukaLapak",
        rounded: "full",
        color: "primary"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/onboarding/step-3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
