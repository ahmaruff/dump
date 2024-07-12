import { e as useNuiDefaultProperty, h as useNinjaButton, i as __nuxt_component_0 } from './server.mjs';
import { defineComponent, computed, createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, renderSlot, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseButtonAction",
  __ssrInlineRender: true,
  props: {
    to: { default: void 0 },
    href: { default: void 0 },
    rel: { default: "" },
    target: { default: "" },
    type: { default: void 0 },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    color: { default: void 0 },
    rounded: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const color = useNuiDefaultProperty(props, "BaseButtonAction", "color");
    const rounded = useNuiDefaultProperty(props, "BaseButtonAction", "rounded");
    const radiuses = {
      none: "",
      sm: "nui-button-rounded-sm",
      md: "nui-button-rounded-md",
      lg: "nui-button-rounded-lg",
      full: "nui-button-rounded-full"
    };
    const colors = {
      default: "nui-button-default",
      "default-contrast": "nui-button-default-contrast",
      muted: "nui-button-muted",
      "muted-contrast": "nui-button-muted-contrast",
      light: "nui-button-light",
      dark: "nui-button-dark",
      black: "nui-button-black",
      primary: "nui-button-primary",
      info: "nui-button-info",
      success: "nui-button-success",
      warning: "nui-button-warning",
      danger: "nui-button-danger",
      none: ""
    };
    const classes = computed(() => [
      "nui-button-action",
      props.loading && "nui-button-loading",
      color.value && colors[color.value],
      rounded.value && radiuses[rounded.value]
    ]);
    const { attributes, is } = useNinjaButton(props);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceload = __nuxt_component_0;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(is)), mergeProps(unref(attributes), { class: unref(classes) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!props.loading) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-8 rounded" }, null, _parent2, _scopeId));
            }
          } else {
            return [
              !props.loading ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(_component_BasePlaceload, {
                key: 1,
                class: "h-3 w-8 rounded"
              }))
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.2.1_nuxt@3.12.3/node_modules/@shuriken-ui/nuxt/components/base/BaseButtonAction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
