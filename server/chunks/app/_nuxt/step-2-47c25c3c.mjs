import { _ as _sfc_main$2 } from './DemoWizardStepTitle-e69157c5.mjs';
import { v as useHead, a as __nuxt_component_2$1, e as _sfc_main$v } from '../server.mjs';
import { useSSRContext, defineComponent, ref, watch, unref, isRef, withCtx, createVNode, openBlock, createBlock, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './BaseInputFileHeadless-563a3359.mjs';
import { _ as _sfc_main$4 } from './BaseButtonIcon-e5109a33.mjs';
import { _ as _sfc_main$5 } from './BaseTextarea-9479699a.mjs';
import { u as useMultiStepForm } from './multi-step-form-c44d03a1.mjs';
import { u as useNinjaFilePreview } from './file-preview-79d105db.mjs';
import { _ as _imports_1 } from './placeholder-file-199db96b.mjs';
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
import 'vue-router';
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
import 'fast-copy';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseFullscreenDropfile",
  __ssrInlineRender: true,
  props: {
    label: { default: "Drop your files" },
    icon: { default: "" },
    filterFileDropped: { type: Function, default: () => true }
  },
  emits: ["drop"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const isDropping = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "nui-fullscreen-dropfile" }, _attrs))}>`);
      if (unref(isDropping)) {
        _push(`<div class="nui-fullscreen-dropfile-outer"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div style="${ssrRenderStyle(unref(isDropping) ? null : { display: "none" })}" class="nui-fullscreen-dropfile-inner">`);
      if (unref(isDropping)) {
        _push(`<div class="nui-fullscreen-dropfile-container"><div class="nui-fullscreen-dropfile-content">`);
        if (props.icon) {
          _push(ssrRenderComponent(_component_Icon, {
            name: props.icon,
            class: "nui-fullscreen-dropfile-icon"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="nui-fullscreen-dropfile-label">${ssrInterpolate(props.label)}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/form/BaseFullscreenDropfile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "step-2",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: project } = useMultiStepForm();
    useHead({
      title: "Project info"
    });
    const avatarPreview = useNinjaFilePreview(() => project.value.avatar);
    const inputFile = ref(null);
    watch(inputFile, (value) => {
      const file = value?.item(0) || null;
      project.value.avatar = file;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoWizardStepTitle = _sfc_main$2;
      const _component_BaseFullscreenDropfile = _sfc_main$1;
      const _component_BaseInputFileHeadless = _sfc_main$3;
      const _component_BaseButtonIcon = _sfc_main$4;
      const _component_Icon = __nuxt_component_2$1;
      const _component_BaseInput = _sfc_main$v;
      const _component_BaseTextarea = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DemoWizardStepTitle, null, null, _parent));
      _push(`<div class="mx-auto flex w-full max-w-5xl flex-col px-4"><div class="flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_BaseFullscreenDropfile, {
        icon: "ph:image-duotone",
        "filter-file-dropped": (file) => file.type.startsWith("image"),
        onDrop: (value) => {
          inputFile.value = value;
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
        accept: "image/*",
        modelValue: unref(inputFile),
        "onUpdate:modelValue": ($event) => isRef(inputFile) ? inputFile.value = $event : null
      }, {
        default: withCtx(({ open, remove, files }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative h-20 w-20"${_scopeId}>`);
            if (unref(avatarPreview)) {
              _push2(`<img${ssrRenderAttr("src", unref(avatarPreview))} alt="Upload preview" class="bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"${_scopeId}>`);
            } else {
              _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="Upload preview" class="bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"${_scopeId}>`);
            }
            if (files?.length && files.item(0)) {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                shape: "full",
                onClick: ($event) => remove(files.item(0)),
                tooltip: "Remove image"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:x",
                      class: "h-4 w-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "h-4 w-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}><div class="relative" tooltip="Upload image"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                shape: "full",
                onClick: open
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:plus",
                      class: "h-4 w-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:plus",
                        class: "h-4 w-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative h-20 w-20" }, [
                unref(avatarPreview) ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: unref(avatarPreview),
                  alt: "Upload preview",
                  class: "bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"
                }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                  key: 1,
                  src: _imports_1,
                  alt: "Upload preview",
                  class: "bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"
                })),
                files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode(_component_BaseButtonIcon, {
                    size: "sm",
                    shape: "full",
                    onClick: ($event) => remove(files.item(0)),
                    tooltip: "Remove image"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "h-4 w-4"
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])) : (openBlock(), createBlock("div", {
                  key: 3,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode("div", {
                    class: "relative",
                    tooltip: "Upload image"
                  }, [
                    createVNode(_component_BaseButtonIcon, {
                      size: "sm",
                      shape: "full",
                      onClick: open
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "h-4 w-4"
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="my-4 text-center font-sans"><p class="text-muted-500 text-sm">Upload a project logo</p><p class="text-muted-400 text-xs">File size cannot exceed 2MB</p></div><div class="mx-auto flex w-full max-w-sm flex-col gap-3">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(project).name,
        "onUpdate:modelValue": ($event) => unref(project).name = $event,
        shape: "curved",
        placeholder: "Project name",
        classes: {
          input: "h-12 text-base text-center"
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTextarea, {
        modelValue: unref(project).description,
        "onUpdate:modelValue": ($event) => unref(project).description = $event,
        shape: "curved",
        placeholder: "Describe your project...",
        autogrow: "",
        class: "max-h-52"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wizard/step-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
