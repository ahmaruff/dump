import { _ as _sfc_main$2 } from './TairoModal-Bw9szyQw.mjs';
import { o as useNuxtApp, m as useRoute, p as useRouter, r as _sfc_main$b, g as _sfc_main$3$1, d as _export_sfc } from './server.mjs';
import { _ as _sfc_main$3 } from './BaseInput-BgsoGXSG.mjs';
import { _ as _sfc_main$4 } from './BaseSwitchThin-Cj-cBPdI.mjs';
import { _ as _sfc_main$5 } from './BaseSelect-BU4F-qvb.mjs';
import { u as useJwtAuth } from './composables-DmWjNlaH.mjs';
import { u as useToaster } from './toaster-B1V8z_xL.mjs';
import { useSSRContext, defineComponent, ref, reactive, withCtx, createVNode, createTextVNode, withModifiers, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "TokoKategori",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    useJwtAuth();
    useToaster();
    const route = useRoute();
    useRouter();
    const shopId = route.params.id;
    const formDefinition = ref([]);
    const formData = reactive({
      name: "",
      shop_id: shopId,
      form_definition: formDefinition.value
    });
    const modalForm = reactive({
      id: "",
      label: "",
      name: "",
      type: "",
      placeholder: "",
      required: false,
      value: "",
      options: []
    });
    ref(false);
    ref(null);
    const submitModal = () => {
      modalForm.name = modalForm.label.split(" ").join("_").toLowerCase();
      formDefinition.value.push({ ...modalForm, id: formDefinition.value.length + 1 });
      resetModalForm();
      isModal3XlOpen.value = false;
    };
    const addOption = () => {
      modalForm.options.push("");
    };
    const removeOption = (index) => {
      modalForm.options.splice(index, 1);
    };
    const resetModalForm = () => {
      modalForm.label = "";
      modalForm.placeholder = "";
      modalForm.type = "";
      modalForm.required = false;
      modalForm.value = "";
      modalForm.options = [];
    };
    const isModal3XlOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoModal = _sfc_main$2;
      const _component_BaseButtonClose = _sfc_main$b;
      const _component_BaseInput = _sfc_main$3;
      const _component_BaseSwitchThin = _sfc_main$4;
      const _component_BaseSelect = _sfc_main$5;
      const _component_BaseButton = _sfc_main$3$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_TairoModal, {
        open: isModal3XlOpen.value,
        size: "3xl",
        onClose: ($event) => isModal3XlOpen.value = false
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex w-full items-center justify-between p-4 md:p-6" style="${ssrRenderStyle({ "border": "1px solid #ddd" })}" data-v-314f012b${_scopeId}><h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white" data-v-314f012b${_scopeId}> Tambah Form Definition </h3>`);
            _push2(ssrRenderComponent(_component_BaseButtonClose, {
              onClick: ($event) => isModal3XlOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "flex w-full items-center justify-between p-4 md:p-6",
                style: { "border": "1px solid #ddd" }
              }, [
                createVNode("h3", { class: "font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white" }, " Tambah Form Definition "),
                createVNode(_component_BaseButtonClose, {
                  onClick: ($event) => isModal3XlOpen.value = false
                }, null, 8, ["onClick"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form data-v-314f012b${_scopeId}><div class="p-4 mrgn scroll-y" data-v-314f012b${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-314f012b${_scopeId}><div class="line-height-normal" data-v-314f012b${_scopeId}><span class="title-m-3" data-v-314f012b${_scopeId}>Label</span> <span class="alert-red" data-v-314f012b${_scopeId}>Wajib</span><br data-v-314f012b${_scopeId}></div><div class="line-height-normal" data-v-314f012b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              placeholder: "Contoh: Label dalam Kategori",
              modelValue: modalForm.label,
              "onUpdate:modelValue": ($event) => modalForm.label = $event
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-314f012b${_scopeId}><div class="line-height-normal" data-v-314f012b${_scopeId}><span class="title-m-3" data-v-314f012b${_scopeId}>Placeholder</span><br data-v-314f012b${_scopeId}></div><div class="line-height-normal" data-v-314f012b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              placeholder: "Contoh: Placeholder dalam Kategori",
              modelValue: modalForm.placeholder,
              "onUpdate:modelValue": ($event) => modalForm.placeholder = $event
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-314f012b${_scopeId}><div class="line-height-normal" data-v-314f012b${_scopeId}><span class="title-m-3" data-v-314f012b${_scopeId}>Required</span><br data-v-314f012b${_scopeId}></div><div class="line-height-normal" data-v-314f012b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseSwitchThin, {
              label: "Required Kategori",
              color: "primary",
              modelValue: modalForm.required,
              "onUpdate:modelValue": ($event) => modalForm.required = $event
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-314f012b${_scopeId}><div class="line-height-normal" data-v-314f012b${_scopeId}><span class="title-m-3" data-v-314f012b${_scopeId}>Type</span> <span class="alert-red" data-v-314f012b${_scopeId}>Wajib</span><br data-v-314f012b${_scopeId}></div><div class="line-height-normal" data-v-314f012b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseSelect, {
              rounded: "sm",
              modelValue: modalForm.type,
              "onUpdate:modelValue": ($event) => modalForm.type = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option${ssrRenderAttr("value", null)} data-v-314f012b${_scopeId2}>Pilih Type</option><option value="text" data-v-314f012b${_scopeId2}>Text</option><option value="number" data-v-314f012b${_scopeId2}>Number</option><option value="select" data-v-314f012b${_scopeId2}>Select</option>`);
                } else {
                  return [
                    createVNode("option", { value: null }, "Pilih Type"),
                    createVNode("option", { value: "text" }, "Text"),
                    createVNode("option", { value: "number" }, "Number"),
                    createVNode("option", { value: "select" }, "Select")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            if (modalForm.type === "select") {
              _push2(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-314f012b${_scopeId}><div class="line-height-normal" data-v-314f012b${_scopeId}><span class="title-m-3" data-v-314f012b${_scopeId}>Options</span> <br data-v-314f012b${_scopeId}></div><div class="line-height-normal" data-v-314f012b${_scopeId}><!--[-->`);
              ssrRenderList(modalForm.options, (option, n) => {
                _push2(`<div class="flex items-center" data-v-314f012b${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseInput, {
                  placeholder: "Enter option",
                  modelValue: modalForm.options[n],
                  "onUpdate:modelValue": ($event) => modalForm.options[n] = $event
                }, null, _parent2, _scopeId));
                _push2(`<button type="button" class="ml-2 p-1 bg-red-500 text-white rounded" data-v-314f012b${_scopeId}>Remove</button></div>`);
              });
              _push2(`<!--]--><button type="button" class="mt-2 p-1 bg-green-500 text-white rounded" data-v-314f012b${_scopeId}>Add Option</button></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" data-v-314f012b${_scopeId}><div class="line-height-normal text-right" data-v-314f012b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              onClick: ($event) => isModal3XlOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Batal`);
                } else {
                  return [
                    createTextVNode("Batal")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` \xA0 `);
            _push2(ssrRenderComponent(_component_BaseButton, {
              type: "submit",
              color: "primary",
              variant: "solid"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Simpan`);
                } else {
                  return [
                    createTextVNode("Simpan")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(submitModal, ["prevent"])
              }, [
                createVNode("div", { class: "p-4 mrgn scroll-y" }, [
                  createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                    createVNode("div", { class: "line-height-normal" }, [
                      createVNode("span", { class: "title-m-3" }, "Label"),
                      createTextVNode(),
                      createVNode("span", { class: "alert-red" }, "Wajib"),
                      createVNode("br")
                    ]),
                    createVNode("div", { class: "line-height-normal" }, [
                      createVNode(_component_BaseInput, {
                        placeholder: "Contoh: Label dalam Kategori",
                        modelValue: modalForm.label,
                        "onUpdate:modelValue": ($event) => modalForm.label = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                    createVNode("div", { class: "line-height-normal" }, [
                      createVNode("span", { class: "title-m-3" }, "Placeholder"),
                      createVNode("br")
                    ]),
                    createVNode("div", { class: "line-height-normal" }, [
                      createVNode(_component_BaseInput, {
                        placeholder: "Contoh: Placeholder dalam Kategori",
                        modelValue: modalForm.placeholder,
                        "onUpdate:modelValue": ($event) => modalForm.placeholder = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                    createVNode("div", { class: "line-height-normal" }, [
                      createVNode("span", { class: "title-m-3" }, "Required"),
                      createVNode("br")
                    ]),
                    createVNode("div", { class: "line-height-normal" }, [
                      createVNode(_component_BaseSwitchThin, {
                        label: "Required Kategori",
                        color: "primary",
                        modelValue: modalForm.required,
                        "onUpdate:modelValue": ($event) => modalForm.required = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                    createVNode("div", { class: "line-height-normal" }, [
                      createVNode("span", { class: "title-m-3" }, "Type"),
                      createTextVNode(),
                      createVNode("span", { class: "alert-red" }, "Wajib"),
                      createVNode("br")
                    ]),
                    createVNode("div", { class: "line-height-normal" }, [
                      createVNode(_component_BaseSelect, {
                        rounded: "sm",
                        modelValue: modalForm.type,
                        "onUpdate:modelValue": ($event) => modalForm.type = $event
                      }, {
                        default: withCtx(() => [
                          createVNode("option", { value: null }, "Pilih Type"),
                          createVNode("option", { value: "text" }, "Text"),
                          createVNode("option", { value: "number" }, "Number"),
                          createVNode("option", { value: "select" }, "Select")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  modalForm.type === "select" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"
                  }, [
                    createVNode("div", { class: "line-height-normal" }, [
                      createVNode("span", { class: "title-m-3" }, "Options"),
                      createTextVNode(),
                      createVNode("br")
                    ]),
                    createVNode("div", { class: "line-height-normal" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(modalForm.options, (option, n) => {
                        return openBlock(), createBlock("div", {
                          key: n,
                          class: "flex items-center"
                        }, [
                          createVNode(_component_BaseInput, {
                            placeholder: "Enter option",
                            modelValue: modalForm.options[n],
                            "onUpdate:modelValue": ($event) => modalForm.options[n] = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("button", {
                            type: "button",
                            onClick: ($event) => removeOption(n),
                            class: "ml-2 p-1 bg-red-500 text-white rounded"
                          }, "Remove", 8, ["onClick"])
                        ]);
                      }), 128)),
                      createVNode("button", {
                        type: "button",
                        onClick: addOption,
                        class: "mt-2 p-1 bg-green-500 text-white rounded"
                      }, "Add Option")
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                    createVNode("div", { class: "line-height-normal text-right" }, [
                      createVNode(_component_BaseButton, {
                        onClick: ($event) => isModal3XlOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Batal")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createTextVNode(" \xA0 "),
                      createVNode(_component_BaseButton, {
                        type: "submit",
                        color: "primary",
                        variant: "solid"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Simpan")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<form class="mx-auto w-full" data-v-314f012b><div class="dark:bg-muted-900 bg-white py-24" data-v-314f012b><div class="mx-auto w-full max-w-7xl px-4" data-v-314f012b><div class="bg-white dark:bg-muted-800/70 p-10" data-v-314f012b><div class="col-span-12 mt-6" data-v-314f012b><div class="col-span-12" data-v-314f012b>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Category Name",
        placeholder: "Enter Category Name",
        modelValue: formData.name,
        "onUpdate:modelValue": ($event) => formData.name = $event
      }, null, _parent));
      _push(`</div></div><div class="col-span-12 mt-6" data-v-314f012b><!--[-->`);
      ssrRenderList(formDefinition.value, (field, index) => {
        _push(`<div class="col-span-12 mt-4" data-v-314f012b>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          label: field.label,
          is: field.type === "select" ? "select" : "input",
          modelValue: field.value,
          "onUpdate:modelValue": ($event) => field.value = $event,
          type: field.type,
          placeholder: field.placeholder,
          required: field.required,
          name: field.name,
          id: `field_${index}`,
          disabled: ""
        }, null, _parent));
        if (field.type === "select") {
          _push(`<!--[-->`);
          ssrRenderList(field.options, (option) => {
            _push(`<option${ssrRenderAttr("value", option)} data-v-314f012b>${ssrInterpolate(option)}</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="button" class="ml-2 p-1 bg-red-500 mt-4 text-white rounded" data-v-314f012b>Remove</button></div>`);
      });
      _push(`<!--]--><div class="col-span-12 mt-4" data-v-314f012b><button type="button" class="p-2 bg-green-500 text-white rounded" data-v-314f012b>Add Field</button></div></div></div></div></div><br data-v-314f012b><div class="text-center md:col-span-5" data-v-314f012b><div class="-mt-4 inline-flex w-full items-center justify-center gap-2 sm:w-auto" data-v-314f012b><button type="button" class="nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-default !h-12 w-full sm:w-40" data-v-314f012b>Cancel</button><button type="submit" class="nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-primary !h-12 w-full sm:w-40" data-v-314f012b>Submit</button></div></div></form><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/toko-admin/TokoKategori.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-314f012b"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TokoKategori = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TokoKategori, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/toko-admin/kategori/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
