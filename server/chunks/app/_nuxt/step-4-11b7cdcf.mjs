import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _sfc_main$1 } from './DemoWizardStepTitle-e69157c5.mjs';
import { v as useHead, D as _sfc_main$3, a as __nuxt_component_2$1 } from '../server.mjs';
import { _ as _sfc_main$2 } from './BaseInputFileHeadless-563a3359.mjs';
import { _ as _sfc_main$4 } from './BaseProgress-794c9ac3.mjs';
import { defineComponent, ref, unref, withCtx, createVNode, withModifiers, openBlock, createBlock, withKeys, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { u as useMultiStepForm } from './multi-step-form-c44d03a1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_1 } from './placeholder-file-199db96b.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
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
import './file-preview-79d105db.mjs';
import 'fast-copy';

function formatFileSize(bytes, si = true, dp = 1) {
  const thresh = si ? 1e3 : 1024;
  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }
  const units = si ? ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let u = -1;
  const r = 10 ** dp;
  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
  return bytes.toFixed(dp) + " " + units[u];
}
const _imports_0 = "" + publicAssetsURL("img/illustrations/wizard/upload.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "step-4",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: project } = useMultiStepForm();
    useHead({
      title: "Project files"
    });
    const toggled = ref(Boolean(project.value.files?.length));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoWizardStepTitle = _sfc_main$1;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseInputFileHeadless = _sfc_main$2;
      const _component_Icon = __nuxt_component_2$1;
      const _component_BaseProgress = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DemoWizardStepTitle, null, null, _parent));
      _push(`<div class="px-4">`);
      if (!unref(toggled)) {
        _push(ssrRenderComponent(_component_BasePlaceholderPage, {
          title: "Upload project files",
          subtitle: "Add files to your project if you have them handy. Don't worry, you can also manage files later."
        }, {
          image: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} class="mx-auto max-w-[210px] rounded-full" alt="Upload files"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  class: "mx-auto max-w-[210px] rounded-full",
                  alt: "Upload files"
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mt-2 text-center"${_scopeId}><button type="button" class="text-primary-500 font-sans underline underline-offset-4"${_scopeId}> Upload files </button></div>`);
            } else {
              return [
                createVNode("div", { class: "mt-2 text-center" }, [
                  createVNode("button", {
                    type: "button",
                    class: "text-primary-500 font-sans underline underline-offset-4",
                    onClick: ($event) => toggled.value = true
                  }, " Upload files ", 8, ["onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="relative mx-auto max-w-3xl">`);
        _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
          multiple: "",
          modelValue: unref(project).files,
          "onUpdate:modelValue": ($event) => unref(project).files = $event
        }, {
          default: withCtx(({ open, remove, preview, drop, files }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-4 flex items-center gap-2"${_scopeId}><button type="button" class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" tooltip="Select files"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:plus",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`<span class="sr-only"${_scopeId}>Select files</span></button><button type="button" class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" tooltip="Start Upload"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`<span class="sr-only"${_scopeId}>Start Upload</span></button></div><div class=""${_scopeId}>`);
              if (!files?.length) {
                _push2(`<div class="nui-focus border-muted-300 dark:border-muted-800 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-700 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300" tabindex="0" role="button"${_scopeId}><div class="p-5 text-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "mdi-light:cloud-upload",
                  class: "text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 h-12 w-12 transition-colors duration-300"
                }, null, _parent2, _scopeId));
                _push2(`<h4 class="text-muted-400 font-sans text-base"${_scopeId}> Drop files to upload </h4><div${_scopeId}><span class="text-muted-400 font-sans text-xs font-semibold uppercase"${_scopeId}> Or </span></div><label for="file" class="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-base underline underline-offset-4 transition-colors duration-300"${_scopeId}> Select files </label></div></div>`);
              } else {
                _push2(`<ul class="mt-6 space-y-2"${_scopeId}><!--[-->`);
                ssrRenderList(files, (file) => {
                  _push2(`<li${_scopeId}><div class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="shrink-0"${_scopeId}>`);
                  if (file.type.startsWith("image")) {
                    _push2(`<img class="h-14 w-14 rounded-xl object-cover object-center"${ssrRenderAttr("src", preview(file).value)} alt="Image preview"${_scopeId}>`);
                  } else {
                    _push2(`<img class="h-14 w-14 rounded-xl object-cover object-center"${ssrRenderAttr("src", _imports_1)} alt="Image preview"${_scopeId}>`);
                  }
                  _push2(`</div><div class="font-sans"${_scopeId}><span class="text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm"${_scopeId}>${ssrInterpolate(file.name)}</span><span class="text-muted-400 block text-xs"${_scopeId}>${ssrInterpolate(("formatFileSize" in _ctx ? _ctx.formatFileSize : unref(formatFileSize))(file.size))}</span></div></div><div class="${ssrRenderClass(["opacity-100", "ms-auto w-32 px-4 transition-opacity duration-300"])}"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_BaseProgress, {
                    value: 0,
                    size: "xs",
                    color: "success"
                  }, null, _parent2, _scopeId));
                  _push2(`</div><div class="flex gap-2"${_scopeId}><button class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60" disabled type="button" tooltip="Cancel"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "lucide:slash",
                    class: "h-4 w-4"
                  }, null, _parent2, _scopeId));
                  _push2(`<span class="sr-only"${_scopeId}>Cancel</span></button><button class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" type="button" tooltip="Upload"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "lucide:arrow-up",
                    class: "h-4 w-4"
                  }, null, _parent2, _scopeId));
                  _push2(`<span class="sr-only"${_scopeId}>Upload</span></button><button class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" type="button" tooltip="Remove"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "lucide:x",
                    class: "h-4 w-4"
                  }, null, _parent2, _scopeId));
                  _push2(`<span class="sr-only"${_scopeId}>Remove</span></button></div></div></li>`);
                });
                _push2(`<!--]--></ul>`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "mb-4 flex items-center gap-2" }, [
                  createVNode("button", {
                    type: "button",
                    class: "nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                    tooltip: "Select files",
                    onClick: open
                  }, [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", { class: "sr-only" }, "Select files")
                  ], 8, ["onClick"]),
                  createVNode("button", {
                    type: "button",
                    class: "nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                    tooltip: "Start Upload"
                  }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", { class: "sr-only" }, "Start Upload")
                  ])
                ]),
                createVNode("div", {
                  class: "",
                  onDragenter: withModifiers(() => {
                  }, ["stop", "prevent"]),
                  onDragover: withModifiers(() => {
                  }, ["stop", "prevent"]),
                  onDrop: drop
                }, [
                  !files?.length ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "nui-focus border-muted-300 dark:border-muted-800 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-700 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300",
                    tabindex: "0",
                    role: "button",
                    onClick: open,
                    onKeydown: withKeys(withModifiers(open, ["prevent"]), ["enter"])
                  }, [
                    createVNode("div", { class: "p-5 text-center" }, [
                      createVNode(_component_Icon, {
                        name: "mdi-light:cloud-upload",
                        class: "text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 h-12 w-12 transition-colors duration-300"
                      }),
                      createVNode("h4", { class: "text-muted-400 font-sans text-base" }, " Drop files to upload "),
                      createVNode("div", null, [
                        createVNode("span", { class: "text-muted-400 font-sans text-xs font-semibold uppercase" }, " Or ")
                      ]),
                      createVNode("label", {
                        for: "file",
                        class: "text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-base underline underline-offset-4 transition-colors duration-300"
                      }, " Select files ")
                    ])
                  ], 40, ["onClick", "onKeydown"])) : (openBlock(), createBlock("ul", {
                    key: 1,
                    class: "mt-6 space-y-2"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(files, (file) => {
                      return openBlock(), createBlock("li", {
                        key: file.name
                      }, [
                        createVNode("div", { class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3" }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("div", { class: "shrink-0" }, [
                              file.type.startsWith("image") ? (openBlock(), createBlock("img", {
                                key: 0,
                                class: "h-14 w-14 rounded-xl object-cover object-center",
                                src: preview(file).value,
                                alt: "Image preview"
                              }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                key: 1,
                                class: "h-14 w-14 rounded-xl object-cover object-center",
                                src: _imports_1,
                                alt: "Image preview"
                              }))
                            ]),
                            createVNode("div", { class: "font-sans" }, [
                              createVNode("span", { class: "text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm" }, toDisplayString(file.name), 1),
                              createVNode("span", { class: "text-muted-400 block text-xs" }, toDisplayString(("formatFileSize" in _ctx ? _ctx.formatFileSize : unref(formatFileSize))(file.size)), 1)
                            ])
                          ]),
                          createVNode("div", {
                            class: ["ms-auto w-32 px-4 transition-opacity duration-300", "opacity-100"]
                          }, [
                            createVNode(_component_BaseProgress, {
                              value: 0,
                              size: "xs",
                              color: "success"
                            })
                          ]),
                          createVNode("div", { class: "flex gap-2" }, [
                            createVNode("button", {
                              class: "border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60",
                              disabled: "",
                              type: "button",
                              tooltip: "Cancel"
                            }, [
                              createVNode(_component_Icon, {
                                name: "lucide:slash",
                                class: "h-4 w-4"
                              }),
                              createVNode("span", { class: "sr-only" }, "Cancel")
                            ]),
                            createVNode("button", {
                              class: "border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                              type: "button",
                              tooltip: "Upload"
                            }, [
                              createVNode(_component_Icon, {
                                name: "lucide:arrow-up",
                                class: "h-4 w-4"
                              }),
                              createVNode("span", { class: "sr-only" }, "Upload")
                            ]),
                            createVNode("button", {
                              class: "border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                              type: "button",
                              tooltip: "Remove",
                              onClick: withModifiers(($event) => remove(file), ["prevent"])
                            }, [
                              createVNode(_component_Icon, {
                                name: "lucide:x",
                                class: "h-4 w-4"
                              }),
                              createVNode("span", { class: "sr-only" }, "Remove")
                            ], 8, ["onClick"])
                          ])
                        ])
                      ]);
                    }), 128))
                  ]))
                ], 40, ["onDragenter", "onDragover", "onDrop"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wizard/step-4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
