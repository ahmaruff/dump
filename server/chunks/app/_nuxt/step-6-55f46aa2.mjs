import { _ as _sfc_main$2 } from './DemoWizardStepTitle-e69157c5.mjs';
import { useSSRContext, defineComponent, unref, withCtx, createVNode, toDisplayString, ref, mergeProps } from 'vue';
import { v as useHead, j as useVModel, k as useNinjaId, o as _sfc_main$D } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrLooseEqual, ssrGetDynamicModelProps, ssrRenderSlot } from 'vue/server-renderer';
import { u as useMultiStepForm } from './multi-step-form-c44d03a1.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseCheckboxHeadless",
  __ssrInlineRender: true,
  props: {
    label: { default: void 0 },
    trueValue: { type: [String, Number, Boolean], default: true },
    falseValue: { type: [String, Number, Boolean], default: false },
    modelValue: { default: void 0 },
    id: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const inputRef = ref();
    const value = useVModel(props, "modelValue", emits, {
      passive: true
    });
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: inputRef
    });
    const id = useNinjaId(() => props.id);
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group/nui-checkbox-headless relative" }, _attrs))}>`);
      if (props.label) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="text-muted-400 mb-1 inline-block cursor-pointer select-none font-sans text-sm">${ssrInterpolate(props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative"><input${ssrRenderAttrs((_temp0 = mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        checked: ssrLooseEqual(unref(value), props.trueValue),
        "true-value": props.trueValue,
        "false-value": props.falseValue
      }, _ctx.$attrs, {
        class: "peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0",
        type: "checkbox"
      }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(value)))))}>`);
      ssrRenderSlot(_ctx.$slots, "default", { value: unref(value) }, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/form/BaseCheckboxHeadless.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "step-6",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: project } = useMultiStepForm();
    useHead({
      title: "Project tools"
    });
    const tools = [
      {
        name: "Illustrator",
        description: "Design Software",
        logo: "/img/logos/tools/illustrator.svg"
      },
      {
        name: "Photoshop",
        description: "Design Software",
        logo: "/img/logos/tools/photoshop.svg"
      },
      {
        name: "Adobe XD",
        description: "Design Software",
        logo: "/img/logos/tools/xd.svg"
      },
      {
        name: "Figma",
        description: "Design Software",
        logo: "/img/logos/tools/xd.svg"
      },
      {
        name: "Invision",
        description: "Design Software",
        logo: "/img/logos/tools/invision.svg"
      },
      {
        name: "Jira",
        description: "Issue Tracker",
        logo: "/img/logos/tools/jira.svg"
      },
      {
        name: "Taiga",
        description: "Scrumboard",
        logo: "/img/logos/tools/taiga.svg"
      },
      {
        name: "Slack",
        description: "Messaging App",
        logo: "/img/logos/tools/slack.svg"
      },
      {
        name: "Asana",
        description: "Task Manager",
        logo: "/img/logos/tools/asana.svg"
      },
      {
        name: "Teamwork",
        description: "Collaborative App",
        logo: "/img/logos/tools/teamwork.svg"
      },
      {
        name: "GitHub",
        description: "Code Repository",
        logo: "/img/logos/tools/github.svg"
      },
      {
        name: "Gitlab",
        description: "Code Repository",
        logo: "/img/logos/tools/gitlab.svg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoWizardStepTitle = _sfc_main$2;
      const _component_BaseCheckboxHeadless = _sfc_main$1;
      const _component_BaseCard = _sfc_main$D;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DemoWizardStepTitle, null, null, _parent));
      _push(`<div class="mx-auto grid max-w-4xl gap-4 px-4 sm:grid-cols-3"><!--[-->`);
      ssrRenderList(tools, (tool) => {
        _push(`<div class="relative">`);
        _push(ssrRenderComponent(_component_BaseCheckboxHeadless, {
          modelValue: unref(project).tools,
          "onUpdate:modelValue": ($event) => unref(project).tools = $event,
          value: tool,
          name: tool.name
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseCard, {
                shape: "curved",
                class: "peer-checked:border-primary-500 peer-checked:shadow-muted-300/30 dark:peer-checked:shadow-muted-900/30 p-4 peer-checked:shadow-xl"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center gap-3"${_scopeId2}><img${ssrRenderAttr("src", tool.logo)} class="h-8 w-8"${_scopeId2}><div${_scopeId2}><div class="text-muted-800 dark:text-muted-100 text-sm font-medium"${_scopeId2}>${ssrInterpolate(tool.name)}</div><div class="text-muted-400 text-xs"${_scopeId2}>${ssrInterpolate(tool.description)}</div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("img", {
                          src: tool.logo,
                          class: "h-8 w-8"
                        }, null, 8, ["src"]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-muted-800 dark:text-muted-100 text-sm font-medium" }, toDisplayString(tool.name), 1),
                          createVNode("div", { class: "text-muted-400 text-xs" }, toDisplayString(tool.description), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseCard, {
                  shape: "curved",
                  class: "peer-checked:border-primary-500 peer-checked:shadow-muted-300/30 dark:peer-checked:shadow-muted-900/30 p-4 peer-checked:shadow-xl"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode("img", {
                        src: tool.logo,
                        class: "h-8 w-8"
                      }, null, 8, ["src"]),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-muted-800 dark:text-muted-100 text-sm font-medium" }, toDisplayString(tool.name), 1),
                        createVNode("div", { class: "text-muted-400 text-xs" }, toDisplayString(tool.description), 1)
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wizard/step-6.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
