import { defineComponent, computed, ref, watchEffect, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrLooseEqual, ssrGetDynamicModelProps, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { i as useAppConfig, j as useVModel, k as useNinjaId, g as _export_sfc } from '../server.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "aria-hidden": "true",
    viewBox: "0 0 17 12"
  }, _attrs))}><path fill="currentColor" d="M16.576.414a1.386 1.386 0 0 1 0 1.996l-9.404 9.176A1.461 1.461 0 0 1 6.149 12c-.37 0-.74-.139-1.023-.414L.424 6.998a1.386 1.386 0 0 1 0-1.996 1.47 1.47 0 0 1 2.046 0l3.68 3.59L14.53.414a1.47 1.47 0 0 1 2.046 0z"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/icon/IconCheck.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "aria-hidden": "true",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M2 12h20"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/icon/IconIndeterminate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseCheckbox",
  __ssrInlineRender: true,
  props: {
    label: { default: void 0 },
    trueValue: { default: true },
    falseValue: { default: false },
    modelValue: { default: void 0 },
    id: { default: void 0 },
    error: { type: [String, Boolean], default: "" },
    disabled: { type: Boolean },
    indeterminate: { type: Boolean },
    shape: { default: void 0 },
    color: { default: void 0 },
    classes: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input);
    const inputRef = ref();
    const value = useVModel(props, "modelValue", emits, {
      passive: true
    });
    const shapeStyle = {
      straight: "",
      rounded: "nui-checkbox-rounded",
      smooth: "nui-checkbox-smooth",
      curved: "nui-checkbox-curved",
      full: "nui-checkbox-full"
    };
    const colorStyle = {
      default: "nui-checkbox-default",
      light: "nui-checkbox-light",
      muted: "nui-checkbox-muted",
      primary: "nui-checkbox-primary",
      info: "nui-checkbox-info",
      success: "nui-checkbox-success",
      warning: "nui-checkbox-warning",
      danger: "nui-checkbox-danger"
    };
    watchEffect(() => {
      if (inputRef.value) {
        inputRef.value.indeterminate = props.indeterminate ?? false;
      }
    });
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: inputRef
    });
    const id = useNinjaId(() => props.id);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconCheck = __nuxt_component_0;
      const _component_IconIndeterminate = __nuxt_component_1;
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-checkbox", [
          props.disabled && "opacity-50",
          unref(shape) && shapeStyle[unref(shape)],
          props.color && colorStyle[props.color],
          props.classes?.wrapper
        ]]
      }, _attrs))}><div class="nui-checkbox-outer"><input${ssrRenderAttrs((_temp0 = mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        checked: ssrLooseEqual(unref(value), props.trueValue),
        "true-value": props.trueValue,
        "false-value": props.falseValue,
        class: props.classes?.input,
        disabled: props.disabled
      }, _ctx.$attrs, {
        class: "nui-checkbox-input",
        type: "checkbox"
      }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(value)))))}><div class="nui-checkbox-inner"></div>`);
      _push(ssrRenderComponent(_component_IconCheck, { class: "nui-icon-check" }, null, _parent));
      _push(ssrRenderComponent(_component_IconIndeterminate, { class: "nui-icon-indeterminate" }, null, _parent));
      _push(`</div><div class="nui-checkbox-label-wrapper">`);
      if (props.label || "default" in _ctx.$slots) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes?.label, "nui-checkbox-label-text"])}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      if (props.error && typeof props.error === "string") {
        _push(`<div class="nui-checkbox-error">${ssrInterpolate(props.error)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/form/BaseCheckbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, __nuxt_component_0 as a };
