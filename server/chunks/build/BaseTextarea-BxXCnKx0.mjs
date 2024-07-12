import { e as useNuiDefaultProperty, i as __nuxt_component_0 } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseInputHelpText-CmEQTnIf.mjs';
import { defineComponent, mergeModels, useModel, ref, watch, nextTick, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useNinjaId } from './input-id-Bz_TYZXb.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseTextarea",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    id: { default: void 0 },
    name: { default: void 0 },
    label: { default: void 0 },
    labelFloat: { type: Boolean },
    placeholder: { default: "" },
    colorFocus: { type: Boolean },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    error: { type: [String, Boolean], default: false },
    addon: { type: Boolean },
    rows: { default: 4 },
    resize: { type: Boolean },
    autogrow: { type: Boolean },
    maxHeight: { default: void 0 },
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
    const [modelValue, modelModifiers] = useModel(__props, "modelValue", {
      set(value) {
        if (modelModifiers.trim && typeof value === "string") {
          return value.trim();
        }
        return value;
      }
    });
    const contrast = useNuiDefaultProperty(props, "BaseTextarea", "contrast");
    const rounded = useNuiDefaultProperty(props, "BaseTextarea", "rounded");
    const size = useNuiDefaultProperty(props, "BaseTextarea", "size");
    const textareaRef = ref();
    const id = useNinjaId(() => props.id);
    const radiuses = {
      none: "",
      sm: "nui-textarea-rounded-sm",
      md: "nui-textarea-rounded-md",
      lg: "nui-textarea-rounded-lg",
      full: "nui-textarea-rounded-lg"
    };
    const sizes = {
      sm: "nui-textarea-sm",
      md: "nui-textarea-md",
      lg: "nui-textarea-lg"
    };
    const contrasts = {
      default: "nui-textarea-default",
      "default-contrast": "nui-textarea-default-contrast",
      muted: "nui-textarea-muted",
      "muted-contrast": "nui-textarea-muted-contrast"
    };
    function fitSize() {
      var _a;
      if (!textareaRef.value) {
        return;
      }
      if (props.autogrow) {
        textareaRef.value.style.height = "auto";
        textareaRef.value.style.height = Math.min(
          (_a = props.maxHeight) != null ? _a : Number.POSITIVE_INFINITY,
          1 + textareaRef.value.scrollHeight
        ) + "px";
      }
    }
    watch(
      [() => props.autogrow, () => props.maxHeight, textareaRef, modelValue],
      async () => {
        await nextTick();
        fitSize();
      },
      {
        immediate: true
      }
    );
    __expose({
      /**
       * The underlying HTMLTextAreaElement element.
       */
      el: textareaRef,
      /**
       * The internal id of the radio input.
       */
      id,
      /**
       * A method to resize the textarea to fit its content.
       */
      fitSize
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_BasePlaceload = __nuxt_component_0;
      const _component_BaseInputHelpText = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-textarea-wrapper", [
          unref(contrast) && contrasts[unref(contrast)],
          unref(size) && sizes[unref(size)],
          unref(rounded) && radiuses[unref(rounded)],
          props.error && !props.loading && "nui-textarea-error",
          props.loading && "nui-textarea-loading",
          props.labelFloat && "nui-textarea-label-float",
          !props.resize && "nui-textarea-not-resize",
          props.addon && "nui-has-addon",
          props.colorFocus && "nui-textarea-focus",
          (_a = props.classes) == null ? void 0 : _a.wrapper
        ]]
      }, _attrs))}>`);
      if (props.label && !props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([(_b = props.classes) == null ? void 0 : _b.label, "nui-textarea-label"])}">${ssrInterpolate(props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="nui-textarea-outer">`);
      if (unref(modelModifiers).lazy) {
        _push(`<textarea${ssrRenderAttrs(mergeProps({
          id: unref(id),
          ref_key: "textareaRef",
          ref: textareaRef
        }, _ctx.$attrs, {
          class: ["nui-textarea", [(_c = props.classes) == null ? void 0 : _c.textarea]],
          name: props.name,
          placeholder: props.placeholder,
          readonly: props.readonly,
          disabled: props.disabled,
          rows: props.rows
        }), "textarea")}>${ssrInterpolate(unref(modelValue))}</textarea>`);
      } else {
        _push(`<textarea${ssrRenderAttrs(mergeProps({
          id: unref(id),
          ref_key: "textareaRef",
          ref: textareaRef
        }, _ctx.$attrs, {
          class: ["nui-textarea", [
            props.colorFocus && "nui-textarea-focus",
            (_d = props.classes) == null ? void 0 : _d.textarea
          ]],
          name: props.name,
          placeholder: props.placeholder,
          readonly: props.readonly,
          disabled: props.disabled,
          rows: props.rows
        }), "textarea")}>${ssrInterpolate(unref(modelValue))}</textarea>`);
      }
      if (props.label && props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([(_e = props.classes) == null ? void 0 : _e.label, "nui-label-float"])}">`);
        ssrRenderSlot(_ctx.$slots, "label", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      if (props.loading) {
        _push(`<div class="nui-textarea-placeload">`);
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "nui-placeload" }, null, _parent));
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "nui-placeload" }, null, _parent));
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "nui-placeload" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.addon) {
        _push(`<div class="${ssrRenderClass([(_f = props.classes) == null ? void 0 : _f.addon, "nui-textarea-addon"])}">`);
        ssrRenderSlot(_ctx.$slots, "addon", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.error && typeof props.error === "string") {
        _push(ssrRenderComponent(_component_BaseInputHelpText, {
          color: "danger",
          class: (_g = props.classes) == null ? void 0 : _g.error
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.2.1_nuxt@3.12.3/node_modules/@shuriken-ui/nuxt/components/form/BaseTextarea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
