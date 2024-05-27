import { i as useAppConfig, j as useVModel, k as useNinjaId, p as __nuxt_component_0$2 } from '../server.mjs';
import { defineComponent, computed, ref, watch, nextTick, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseTextarea",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: void 0 },
    modelModifiers: { default: () => ({}) },
    id: { default: void 0 },
    name: { default: void 0 },
    shape: { default: void 0 },
    label: { default: void 0 },
    labelFloat: { type: Boolean },
    colorFocus: { type: Boolean },
    placeholder: { default: "" },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    size: { default: "md" },
    contrast: { default: "default" },
    readonly: { type: Boolean },
    error: { type: [String, Boolean], default: false },
    addon: { type: Boolean },
    rows: { default: 4 },
    resize: { type: Boolean },
    autogrow: { type: Boolean },
    classes: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input);
    const shapeStyle = {
      straight: "",
      rounded: "nui-textarea-rounded",
      smooth: "nui-textarea-smooth",
      curved: "nui-textarea-curved",
      full: "nui-textarea-full"
    };
    const sizeStyle = {
      sm: "nui-textarea-sm",
      md: "nui-textarea-md",
      lg: "nui-textarea-lg"
    };
    const contrastStyle = {
      default: "nui-textarea-default",
      "default-contrast": "nui-textarea-default-contrast",
      muted: "nui-textarea-muted",
      "muted-contrast": "nui-textarea-muted-contrast"
    };
    const value = useVModel(
      props,
      "modelValue",
      (_, val) => {
        if (props.modelModifiers.trim) {
          emits("update:modelValue", typeof val === "string" ? val.trim() : val);
        } else {
          emits("update:modelValue", val);
        }
      },
      {
        passive: true
      }
    );
    const textareaRef = ref();
    function fitSize() {
      if (!textareaRef.value) {
        return;
      }
      if (props.autogrow) {
        textareaRef.value.style.height = "auto";
        textareaRef.value.style.height = textareaRef.value.scrollHeight + "px";
      }
    }
    watch(
      () => props.modelValue,
      async () => {
        await nextTick();
        fitSize();
      }
    );
    __expose({
      /**
       * The underlying HTMLTextAreaElement element.
       */
      el: textareaRef,
      /**
       * A method to resize the textarea to fit its content.
       */
      fitSize
    });
    const id = useNinjaId(() => props.id);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceload = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-textarea-wrapper", [
          contrastStyle[props.contrast],
          sizeStyle[props.size],
          unref(shape) && shapeStyle[unref(shape)],
          props.error && !props.loading && "nui-textarea-error",
          props.loading && "nui-textarea-loading",
          props.labelFloat && "nui-textarea-label-float",
          !props.resize && "nui-textarea-not-resize",
          props.addon && "nui-has-addon",
          props.classes?.wrapper
        ]]
      }, _attrs))}>`);
      if (props.label && !props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes.label, "nui-textarea-label"])}">${ssrInterpolate(props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="nui-textarea-outer"><textarea${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "textareaRef",
        ref: textareaRef
      }, _ctx.$attrs, {
        class: ["nui-textarea", [
          props.colorFocus && "nui-textarea-focus",
          props.classes.textarea
        ]],
        name: props.name,
        placeholder: props.placeholder,
        readonly: props.readonly,
        disabled: props.disabled,
        rows: props.rows
      }), "textarea")}>${ssrInterpolate(unref(value))}</textarea>`);
      if (props.label && props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes.label, "nui-label-float"])}">`);
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
        _push(`<div class="${ssrRenderClass([props.classes.addon, "nui-textarea-addon"])}">`);
        ssrRenderSlot(_ctx.$slots, "addon", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.error && typeof props.error === "string") {
        _push(`<span class="${ssrRenderClass([props.classes?.error, "nui-textarea-error-text"])}">${ssrInterpolate(props.error)}</span>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/form/BaseTextarea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
