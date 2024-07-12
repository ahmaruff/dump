import { defineComponent, mergeModels, useModel, ref, mergeProps, unref, useSSRContext } from 'vue';
import { u as useNinjaId } from './input-id-Bz_TYZXb.mjs';
import { e as useNuiDefaultProperty } from './server.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseSwitchThin",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    id: { default: void 0 },
    label: { default: void 0 },
    sublabel: { default: void 0 },
    color: { default: void 0 },
    classes: { default: () => ({}) }
  }, {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const [modelValue] = useModel(__props, "modelValue");
    const inputRef = ref();
    const id = useNinjaId(() => props.id);
    const color = useNuiDefaultProperty(props, "BaseSwitchThin", "color");
    const colors = {
      primary: "nui-switch-thin-primary",
      info: "nui-switch-thin-info",
      success: "nui-switch-thin-success",
      warning: "nui-switch-thin-warning",
      danger: "nui-switch-thin-danger",
      dark: "nui-switch-thin-dark",
      black: "nui-switch-thin-black"
    };
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: inputRef,
      /**
       * The internal id of the radio input.
       */
      id
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      _push(`<label${ssrRenderAttrs(mergeProps({
        for: unref(id),
        class: ["nui-switch-thin", [unref(color) && colors[unref(color)], (_a = props.classes) == null ? void 0 : _a.wrapper]]
      }, _attrs))}><span class="${ssrRenderClass([(_b = props.classes) == null ? void 0 : _b.outer, "nui-switch-thin-outer"])}"><input${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        checked: unref(modelValue)
      }, _ctx.$attrs, {
        type: "checkbox",
        class: ["nui-switch-thin-input peer", (_c = props.classes) == null ? void 0 : _c.input]
      }))}><span class="${ssrRenderClass([(_d = props.classes) == null ? void 0 : _d.handle, "nui-switch-thin-handle"])}"></span><span class="${ssrRenderClass([(_e = props.classes) == null ? void 0 : _e.track, "nui-switch-thin-track"])}"></span></span>`);
      if (!props.sublabel) {
        _push(`<span class="nui-switch-thin-single-label">${ssrInterpolate(props.label)}</span>`);
      } else {
        _push(`<span class="nui-switch-thin-dual-label"><span class="nui-switch-thin-label">${ssrInterpolate(props.label)}</span><span class="nui-switch-thin-sublabel">${ssrInterpolate(props.sublabel)}</span></span>`);
      }
      _push(`</label>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.2.1_nuxt@3.12.3/node_modules/@shuriken-ui/nuxt/components/form/BaseSwitchThin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
