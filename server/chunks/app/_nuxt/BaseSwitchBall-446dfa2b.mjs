import { defineComponent, useSSRContext, mergeProps, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as __nuxt_component_0 } from './BaseCheckbox-bb4e3b0e.mjs';
import { j as useVModel, k as useNinjaId } from '../server.mjs';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TairoContentWrapper",
  __ssrInlineRender: true,
  props: {
    reverse: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if ("left" in _ctx.$slots || "right" in _ctx.$slots) {
        _push(`<div class="${ssrRenderClass([props.reverse && "sm:flex-row-reverse", "mb-6 flex w-full flex-col items-center justify-between gap-4 sm:flex-row"])}"><div class="flex w-full items-center gap-4 sm:w-auto">`);
        ssrRenderSlot(_ctx.$slots, "left", {}, null, _push, _parent);
        _push(`</div><div class="flex w-full items-center justify-end gap-4 sm:w-auto">`);
        ssrRenderSlot(_ctx.$slots, "right", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoContentWrapper.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TairoTable",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" },
    scrollable: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div class="${ssrRenderClass([[
        props.scrollable && "overflow-x-auto nui-slimscroll",
        props.shape === "rounded" && "rounded-md",
        props.shape === "curved" && "rounded-xl"
      ], "border-muted-200 dark:border-muted-700 border"])}"><div class="inline-block min-w-full align-middle"><div class="${ssrRenderClass(props.scrollable && "overflow-hidden")}"><table class="divide-muted-200 dark:divide-muted-700 min-w-full table-fixed divide-y"><thead><tr>`);
      ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
      _push(`</tr></thead><tbody class="divide-muted-200 dark:divide-muted-700 dark:bg-muted-800 divide-y bg-white">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</tbody></table></div></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoTable.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TairoTableHeading",
  __ssrInlineRender: true,
  props: {
    uppercase: { type: Boolean, default: false },
    spaced: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<th${ssrRenderAttrs(mergeProps({
        class: ["text-muted-700 dark:text-muted-400 text-left font-sans font-semibold tracking-wider", [
          props.uppercase ? "text-xs uppercase" : "text-sm",
          props.spaced ? "border-muted-200 dark:border-muted-700 last:border-e-none dark:bg-muted-800 border-r bg-white px-4 py-5" : "bg-muted-50 dark:bg-muted-800 py-3"
        ]]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</th>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoTableHeading.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TairoTableRow",
  __ssrInlineRender: true,
  props: {
    hoverable: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<tr${ssrRenderAttrs(mergeProps({
        class: [
          props.hoverable ? "hover:bg-muted-50 dark:hover:bg-muted-900 transition-colors duration-300" : ""
        ]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</tr>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoTableRow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TairoTableCell",
  __ssrInlineRender: true,
  props: {
    light: { type: Boolean, default: false },
    spaced: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<td${ssrRenderAttrs(mergeProps({
        class: ["font-alt text-sm", [
          props.light ? "text-muted-500 dark:text-white" : "text-muted-800 dark:text-white",
          props.spaced ? "p-4" : "py-4"
        ]]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</td>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoTableCell.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseSwitchBall",
  __ssrInlineRender: true,
  props: {
    id: { default: void 0 },
    modelValue: { type: Boolean, default: void 0 },
    label: { default: void 0 },
    sublabel: { default: void 0 },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const value = useVModel(props, "modelValue", emits, {
      passive: true
    });
    const id = useNinjaId(() => props.id);
    const colorStyle = {
      primary: "nui-switch-ball-primary",
      info: "nui-switch-ball-info",
      success: "nui-switch-ball-success",
      warning: "nui-switch-ball-warning",
      danger: "nui-switch-ball-danger"
    };
    const inputRef = ref();
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: inputRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconCheck = __nuxt_component_0;
      _push(`<label${ssrRenderAttrs(mergeProps({
        for: unref(id),
        class: ["nui-switch-ball", colorStyle[props.color]]
      }, _attrs))}><span class="nui-switch-ball-outer"><input${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        checked: unref(value)
      }, _ctx.$attrs, {
        type: "checkbox",
        class: "nui-switch-ball-input peer"
      }))}><span class="nui-switch-ball-handle"></span><span class="nui-switch-ball-track"></span>`);
      _push(ssrRenderComponent(_component_IconCheck, { class: "nui-switch-ball-icon" }, null, _parent));
      _push(`</span>`);
      if (!props.sublabel) {
        _push(`<span class="nui-switch-ball-single-label">${ssrInterpolate(props.label)}</span>`);
      } else {
        _push(`<span class="nui-switch-ball-dual-label"><span class="nui-switch-ball-label">${ssrInterpolate(props.label)}</span><span class="nui-switch-ball-sublabel">${ssrInterpolate(props.sublabel)}</span></span>`);
      }
      _push(`</label>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/form/BaseSwitchBall.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$5 as _, _sfc_main$4 as a, _sfc_main$3 as b, _sfc_main$2 as c, _sfc_main$1 as d, _sfc_main as e };
