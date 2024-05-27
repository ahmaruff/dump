import { i as useAppConfig, j as useVModel, k as useNinjaId, p as __nuxt_component_0$2, a as __nuxt_component_2$1, g as _export_sfc } from '../server.mjs';
import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/icon/IconChevronDown.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseSelect",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: void 0 },
    id: { default: void 0 },
    shape: { default: void 0 },
    label: { default: "" },
    placeholder: { default: "" },
    labelFloat: { type: Boolean },
    icon: { default: void 0 },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    error: { type: [String, Boolean], default: false },
    size: { default: "md" },
    contrast: { default: "default" },
    classes: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input);
    const shapeStyle = {
      straight: "",
      rounded: "nui-select-rounded",
      smooth: "nui-select-smooth",
      curved: "nui-select-curved",
      full: "nui-select-full"
    };
    const sizeStyle = {
      sm: "nui-select-sm",
      md: "nui-select-md",
      lg: "nui-select-lg"
    };
    const contrastStyle = {
      default: "nui-select-default",
      "default-contrast": "nui-select-default-contrast",
      muted: "nui-select-muted",
      "muted-contrast": "nui-select-muted-contrast"
    };
    const selectRef = ref();
    useVModel(props, "modelValue", emits, {
      passive: true
    });
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: selectRef
    });
    const id = useNinjaId(() => props.id);
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
      const _component_BasePlaceload = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_2$1;
      const _component_IconChevronDown = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-select-wrapper", [
          contrastStyle[props.contrast],
          sizeStyle[props.size],
          unref(shape) && shapeStyle[unref(shape)],
          props.error && !props.loading && "nui-select-error",
          props.loading && "nui-select-loading",
          props.labelFloat && "nui-select-label-float",
          props.icon && "nui-has-icon",
          props.classes?.wrapper
        ]]
      }, _attrs))}>`);
      if ("label" in _ctx.$slots && !props.labelFloat || props.label && !props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes.label, "nui-select-label"])}">`);
        ssrRenderSlot(_ctx.$slots, "label", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="nui-select-outer"><select${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "selectRef",
        ref: selectRef
      }, _ctx.$attrs, {
        disabled: props.disabled,
        readonly: props.readonly,
        class: ["nui-select", props.classes.select]
      }))}>`);
      if (unref(placeholder)) {
        _push(`<option value="" disabled hidden>${ssrInterpolate(unref(placeholder))}</option>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</select>`);
      if ("label" in _ctx.$slots && props.labelFloat || props.label && props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes.label, "nui-label-float"])}">`);
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
        _push(`<div class="${ssrRenderClass([props.classes.icon, "nui-select-icon"])}">`);
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
      _push(`<div class="${ssrRenderClass([props.classes?.chevron, "nui-select-chevron"])}">`);
      _push(ssrRenderComponent(_component_IconChevronDown, { class: "nui-select-chevron-inner" }, null, _parent));
      _push(`</div>`);
      if (props.error && typeof props.error === "string") {
        _push(`<span class="${ssrRenderClass([props.classes?.error, "nui-select-error-text"])}">${ssrInterpolate(props.error)}</span>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/form/BaseSelect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
