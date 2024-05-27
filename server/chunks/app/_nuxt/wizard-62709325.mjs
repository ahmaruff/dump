import { v as useHead, H as onClickOutside, G as _sfc_main$b, _ as __nuxt_component_1, a as __nuxt_component_2$1, o as _sfc_main$D, f as _sfc_main$a } from '../server.mjs';
import __nuxt_component_1$1 from './TairoLogo-a768bb4f.mjs';
import { _ as _sfc_main$3 } from './BaseThemeToggle-3a34801d.mjs';
import _sfc_main$4 from './DemoAccountMenu-728b3fc6.mjs';
import { _ as _sfc_main$5 } from './BaseProgress-794c9ac3.mjs';
import { c as createMultiStepForm, u as useMultiStepForm } from './multi-step-form-c44d03a1.mjs';
import { useSSRContext, defineComponent, ref, resolveComponent, mergeProps, withCtx, createVNode, withModifiers, unref, computed, openBlock, createBlock } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { u as useToaster } from './toaster-74e9c6eb.mjs';
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
import './2-942b7bb5.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'fast-copy';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoWizardNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const { steps, currentStep, progress, preview, goToStep } = useMultiStepForm();
    const currentStepName = computed(() => {
      const stepData = steps.value.find((step) => step.id === currentStep.value);
      return stepData?.meta?.name;
    });
    const target = ref(null);
    const open = ref(false);
    onClickOutside(target, () => open.value = false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      const _component_TairoLogo = __nuxt_component_1$1;
      const _component_Icon = __nuxt_component_2$1;
      const _component_BaseThemeToggle = _sfc_main$3;
      const _component_DemoAccountMenu = _sfc_main$4;
      const _component_BaseProgress = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-800 absolute start-0 top-0 h-16 w-full bg-white" }, _attrs))}><div class="relative flex h-16 w-full items-center justify-between px-4"><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards",
        class: "border-muted-200 dark:border-muted-700 flex w-14 items-center justify-center border-r pe-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogo, { class: "text-primary-600 h-10 shrink-0" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogo, { class: "text-primary-600 h-10 shrink-0" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden items-center gap-2 ps-6 font-sans sm:flex"><p class="text-muted-500 dark:text-muted-400"> Step ${ssrInterpolate(unref(currentStep) + 1)}: </p><h2 class="text-muted-800 font-semibold dark:text-white">${ssrInterpolate(unref(currentStepName))}</h2></div><div class="relative hidden sm:block"><button type="button" class="flex h-10 w-10 items-center justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevron-down",
        class: ["text-muted-400 h-4 w-4 transition-transform duration-300", unref(open) ? "rotate-180" : ""]
      }, null, _parent));
      _push(`</button><div class="${ssrRenderClass([
        unref(open) ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-1",
        "border-muted-200 dark:border-muted-700 dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-900/30 absolute start-0 top-8 z-20 w-52 rounded-xl border bg-white p-2 shadow-xl transition-all duration-300"
      ])}"><div class="space-y-1"><!--[-->`);
      ssrRenderList(unref(steps), (step) => {
        _push(`<button type="button" class="hover:bg-muted-100 dark:hover:bg-muted-700 flex w-full items-center gap-2 rounded-lg px-3 py-2 font-sans disabled:cursor-not-allowed disabled:opacity-70"><p class="text-muted-500 dark:text-muted-400 text-xs"> Step ${ssrInterpolate(step.id + 1)}: </p><h4 class="text-muted-800 text-xs font-medium dark:text-white">${ssrInterpolate(step.meta.name)}</h4></button>`);
      });
      _push(`<!--]--></div></div></div></div><div class="flex items-center justify-end gap-4">`);
      _push(ssrRenderComponent(_component_BaseThemeToggle, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoAccountMenu, { horizontal: "" }, null, _parent));
      _push(`</div><div class="absolute inset-x-0 bottom-0 z-10 w-full">`);
      _push(ssrRenderComponent(_component_BaseProgress, {
        value: unref(progress),
        size: "xs",
        shape: "full"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoWizardNavigation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoWizardButtons",
  __ssrInlineRender: true,
  setup(__props) {
    const { totalSteps, currentStep, loading, complete, getNextStep, getPrevStep } = useMultiStepForm();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$D;
      const _component_BaseButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(currentStep) > 0 && !unref(complete)) {
        _push(`<div class="fixed inset-x-0 bottom-6 z-20 mx-auto w-full max-w-[304px]">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "shadow-muted-300/30 dark:shadow-muted-800/30 flex items-center justify-between gap-2 rounded-2xl p-4 shadow-xl" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseButton, {
                to: unref(loading) ? void 0 : unref(getPrevStep)()?.to,
                disabled: !unref(getPrevStep)(),
                shape: "curved",
                class: "w-full"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Previous</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Previous")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (unref(currentStep) < unref(totalSteps) - 1) {
                _push2(ssrRenderComponent(_component_BaseButton, {
                  to: unref(getNextStep)()?.to,
                  disabled: !unref(getNextStep)(),
                  shape: "curved",
                  color: "primary",
                  class: "w-full"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>Continue</span>`);
                    } else {
                      return [
                        createVNode("span", null, "Continue")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_BaseButton, {
                  type: "submit",
                  shape: "curved",
                  color: "primary",
                  class: "w-full",
                  loading: unref(loading),
                  disabled: unref(loading)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>Finish</span>`);
                    } else {
                      return [
                        createVNode("span", null, "Finish")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
            } else {
              return [
                createVNode(_component_BaseButton, {
                  to: unref(loading) ? void 0 : unref(getPrevStep)()?.to,
                  disabled: !unref(getPrevStep)(),
                  shape: "curved",
                  class: "w-full"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Previous")
                  ]),
                  _: 1
                }, 8, ["to", "disabled"]),
                unref(currentStep) < unref(totalSteps) - 1 ? (openBlock(), createBlock(_component_BaseButton, {
                  key: 0,
                  to: unref(getNextStep)()?.to,
                  disabled: !unref(getNextStep)(),
                  shape: "curved",
                  color: "primary",
                  class: "w-full"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Continue")
                  ]),
                  _: 1
                }, 8, ["to", "disabled"])) : (openBlock(), createBlock(_component_BaseButton, {
                  key: 1,
                  type: "submit",
                  shape: "curved",
                  color: "primary",
                  class: "w-full",
                  loading: unref(loading),
                  disabled: unref(loading)
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Finish")
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoWizardButtons.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "wizard",
  __ssrInlineRender: true,
  setup(__props) {
    const initialState = ref({
      type: void 0,
      name: "",
      description: "",
      startDate: void 0,
      endDate: void 0,
      customer: {
        name: void 0,
        logo: void 0,
        location: void 0
      },
      files: null,
      avatar: null,
      team: [],
      tools: [],
      budget: "< 5K"
    });
    const wizardSteps = [
      {
        to: "/wizard",
        meta: {
          name: "Project type",
          title: "Select project type",
          subtitle: "Select the type of project you want to create"
        }
      },
      {
        to: "/wizard/step-2",
        meta: {
          name: "Project info",
          title: "What is this project about?",
          subtitle: "Manage better by adding all relevant project information"
        }
      },
      {
        to: "/wizard/step-3",
        meta: {
          name: "Project details",
          title: "Add more details",
          subtitle: "Add useful details to your project. You can edit this later"
        }
      },
      {
        to: "/wizard/step-4",
        meta: {
          name: "Project files",
          title: "Add files to this project",
          subtitle: "Or you can skip this step. You can always add more files later"
        }
      },
      {
        to: "/wizard/step-5",
        meta: {
          name: "Team members",
          title: "Who will be working on this project?",
          subtitle: "Start by adding members to your team"
        }
      },
      {
        to: "/wizard/step-6",
        meta: {
          name: "Project tools",
          title: "What tools will you be using?",
          subtitle: "Choose a set of tools that you'll be using in this project"
        }
      },
      {
        to: "/wizard/step-7",
        meta: {
          preview: true,
          name: "Finish",
          title: "Make sure it looks good",
          subtitle: "You can go back to previous steps if you need to edit anything"
        }
      }
    ];
    const toaster = useToaster();
    const { handleSubmit, currentStep } = createMultiStepForm({
      initialState,
      steps: wizardSteps,
      onSubmit: async (state, ctx) => {
        console.log("multi-step-submit", state);
        if (!state.type) {
          ctx.goToStep(ctx.getStep(0));
          throw new Error("Please select a project type");
        }
        if (!state.name) {
          ctx.goToStep(ctx.getStep(1));
          throw new Error("Enter a project name");
        }
        await new Promise((resolve) => setTimeout(resolve, 4e3));
        toaster.clearAll();
        toaster.show({
          title: "Success",
          message: `Project ${state.name} created!`,
          color: "success",
          icon: "ph:check",
          closable: true
        });
      },
      onError: (error) => {
        console.log("multi-step-error", error);
        toaster.clearAll();
        toaster.show({
          title: "Oops!",
          message: error.message,
          color: "danger",
          icon: "lucide:alert-triangle",
          closable: true
        });
      }
    });
    useHead({
      titleTemplate: (title) => `${title} | Wizard - Step ${currentStep.value + 1}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSidebarLayout = _sfc_main$b;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_Icon = __nuxt_component_2$1;
      const _component_DemoWizardNavigation = _sfc_main$2;
      const _component_RouterView = resolveComponent("RouterView");
      const _component_DemoWizardButtons = _sfc_main$1;
      _push(ssrRenderComponent(_component_TairoSidebarLayout, mergeProps({
        toolbar: false,
        sidebar: false,
        class: "bg-muted-100 dark:bg-muted-900 min-h-screen w-full"
      }, _attrs), {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300",
              onClick: ($event) => _ctx.$router.back()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:arrow-left",
                    class: "h-5 w-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-left",
                      class: "h-5 w-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/",
                class: "text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300",
                onClick: withModifiers(($event) => _ctx.$router.back(), ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "lucide:arrow-left",
                    class: "h-5 w-5"
                  })
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoWizardNavigation, null, null, _parent2, _scopeId));
            _push2(`<form action="" method="POST" novalidate${_scopeId}><div class="pb-32 pt-24"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_RouterView, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoWizardButtons, null, null, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode(_component_DemoWizardNavigation),
              createVNode("form", {
                action: "",
                method: "POST",
                onSubmit: withModifiers(unref(handleSubmit), ["prevent"]),
                novalidate: ""
              }, [
                createVNode("div", { class: "pb-32 pt-24" }, [
                  createVNode(_component_RouterView)
                ]),
                createVNode(_component_DemoWizardButtons)
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wizard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
