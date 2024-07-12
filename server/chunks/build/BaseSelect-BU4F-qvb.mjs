import { e as useNuiDefaultProperty, i as __nuxt_component_0, _ as __nuxt_component_0$2, d as _export_sfc } from './server.mjs';
import { defineComponent, mergeModels, useModel, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './BaseInputHelpText-CmEQTnIf.mjs';
import { u as useNinjaId } from './input-id-Bz_TYZXb.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "aria-hidden": "true",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.2.1_nuxt@3.12.3/node_modules/@shuriken-ui/nuxt/components/icon/IconChevronDown.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseSelect",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    id: { default: void 0 },
    label: { default: "" },
    labelFloat: { type: Boolean },
    icon: { default: void 0 },
    placeholder: { default: "" },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    colorFocus: { type: Boolean },
    error: { type: [String, Boolean], default: false },
    contrast: { default: void 0 },
    rounded: { default: void 0 },
    size: { default: void 0 },
    classes: { default: () => ({}) }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    useModel(__props, "modelValue");
    const contrast = useNuiDefaultProperty(props, "BaseSelect", "contrast");
    const rounded = useNuiDefaultProperty(props, "BaseSelect", "rounded");
    const size = useNuiDefaultProperty(props, "BaseSelect", "size");
    const selectRef = ref();
    const id = useNinjaId(() => props.id);
    const radiuses = {
      none: "",
      sm: "nui-select-rounded-sm",
      md: "nui-select-rounded-md",
      lg: "nui-select-rounded-lg",
      full: "nui-select-rounded-full"
    };
    const sizes = {
      sm: "nui-select-sm",
      md: "nui-select-md",
      lg: "nui-select-lg",
      xl: "nui-select-xl"
    };
    const contrasts = {
      default: "nui-select-default",
      "default-contrast": "nui-select-default-contrast",
      muted: "nui-select-muted",
      "muted-contrast": "nui-select-muted-contrast"
    };
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: selectRef,
      /**
       * The internal id of the radio input.
       */
      id
    });
    const placeholder = computed(() => {
      if (props.loading) {
        return;
      }
      if (props.labelFloat) {
        return props.label;
      }
      return props.placeholder;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_BasePlaceload = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$2;
      const _component_IconChevronDown = __nuxt_component_2;
      const _component_BaseInputHelpText = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-select-wrapper", [
          unref(contrast) && contrasts[unref(contrast)],
          unref(size) && sizes[unref(size)],
          unref(rounded) && radiuses[unref(rounded)],
          props.error && !props.loading && "nui-select-error",
          props.loading && "nui-select-loading",
          props.labelFloat && "nui-select-label-float",
          props.icon && "nui-has-icon",
          props.colorFocus && "nui-select-focus",
          (_a = props.classes) == null ? void 0 : _a.wrapper
        ]]
      }, _attrs))}>`);
      if ("label" in _ctx.$slots && !props.labelFloat || props.label && !props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([(_b = props.classes) == null ? void 0 : _b.label, "nui-select-label"])}">`);
        ssrRenderSlot(_ctx.$slots, "label", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([(_c = props.classes) == null ? void 0 : _c.outer, "nui-select-outer"])}"><select${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "selectRef",
        ref: selectRef
      }, _ctx.$attrs, {
        disabled: props.disabled,
        class: ["nui-select", (_d = props.classes) == null ? void 0 : _d.select]
      }))}>`);
      if (unref(placeholder)) {
        _push(`<option value="" disabled hidden>${ssrInterpolate(unref(placeholder))}</option>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</select>`);
      if ("label" in _ctx.$slots && props.labelFloat || props.label && props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([(_e = props.classes) == null ? void 0 : _e.label, "nui-label-float"])}">`);
        ssrRenderSlot(_ctx.$slots, "label", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      if (props.loading) {
        _push(`<div class="nui-select-placeload">`);
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "nui-placeload" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.icon) {
        _push(`<div class="${ssrRenderClass([(_f = props.classes) == null ? void 0 : _f.icon, "nui-select-icon"])}">`);
        ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
          _push(ssrRenderComponent(_component_Icon, {
            class: "nui-select-icon-inner",
            name: props.icon
          }, null, _parent));
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([(_g = props.classes) == null ? void 0 : _g.chevron, "nui-select-chevron nui-chevron"])}">`);
      _push(ssrRenderComponent(_component_IconChevronDown, { class: "nui-select-chevron-inner" }, null, _parent));
      _push(`</div>`);
      if (props.error && typeof props.error === "string") {
        _push(ssrRenderComponent(_component_BaseInputHelpText, {
          color: "danger",
          class: (_h = props.classes) == null ? void 0 : _h.error
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(props.error)}`);
            } else {
              return [
                createTextVNode(toDisplayString(props.error), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.2.1_nuxt@3.12.3/node_modules/@shuriken-ui/nuxt/components/form/BaseSelect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
