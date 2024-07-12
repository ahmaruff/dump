import { defineComponent, mergeModels, useModel, ref, provide, reactive, mergeProps, unref, useSSRContext, computed, createVNode, resolveDynamicComponent, withCtx, renderSlot, openBlock, createBlock, toRef } from 'vue';
import { u as useNinjaId } from './input-id-Bz_TYZXb.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderVNode, ssrRenderComponent } from 'vue/server-renderer';
import { e as useNuiDefaultProperty, h as useNinjaButton, i as __nuxt_component_0 } from './server.mjs';

const previewMap = /* @__PURE__ */ new WeakMap();
function useNinjaFilePreview(_file) {
  const fileReference = toRef(_file);
  const preview = computed(() => {
    var _a, _b;
    const file = fileReference.value;
    if (!file)
      return "";
    if (previewMap.has(file))
      return (_a = previewMap.get(file)) == null ? void 0 : _a.value;
    const reader = new FileReader();
    const source = ref("");
    const listener = () => {
      var _a3;
      var _a2;
      source.value = (_a3 = (_a2 = reader.result) == null ? void 0 : _a2.toString()) != null ? _a3 : "";
      reader.removeEventListener("load", listener);
    };
    reader.addEventListener("load", listener);
    reader.readAsDataURL(file);
    previewMap.set(file, source);
    return (_b = previewMap.get(file)) == null ? void 0 : _b.value;
  });
  return preview;
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseInputFileHeadless",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    id: { default: void 0 },
    multiple: { type: Boolean, default: false },
    filterFileDropped: { type: Function, default: () => true }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const [modelValue] = useModel(__props, "modelValue");
    const inputRef = ref();
    const id = useNinjaId(() => props.id);
    const previewMap2 = /* @__PURE__ */ new WeakMap();
    function open() {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.click();
    }
    function drop(event) {
      event.stopPropagation();
      event.preventDefault();
      const dt = event.dataTransfer;
      const filtered = new DataTransfer();
      if (inputRef.value && dt) {
        for (const file of dt.files) {
          if (props.filterFileDropped(file)) {
            filtered.items.add(file);
          }
        }
        inputRef.value.files = filtered.files;
        modelValue.value = inputRef.value.files;
      }
    }
    function remove(file) {
      if (!file)
        return;
      if (!modelValue.value)
        return;
      if (!inputRef.value)
        return;
      const filtered = new DataTransfer();
      if (previewMap2.has(file)) {
        previewMap2.delete(file);
      }
      for (const f of modelValue.value) {
        if (f !== file) {
          filtered.items.add(f);
        }
      }
      inputRef.value.files = filtered.files;
      modelValue.value = inputRef.value.files;
    }
    provide(
      "BaseInputFileHeadlessContext",
      reactive({
        el: inputRef,
        id,
        files: modelValue,
        open,
        remove,
        preview: useNinjaFilePreview,
        drop
      })
    );
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: inputRef,
      /**
       * The form input identifier.
       */
      id,
      /**
       * The model value of the file input.
       */
      files: modelValue,
      /**
       * Opens the native file input selector.
       */
      open,
      /**
       * Removes a file from the input.
       */
      remove,
      /**
       * Returns the preview DataURL of a file.
       */
      preview: useNinjaFilePreview,
      /**
       * Handles the drop event.
       */
      drop
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group/nui-file-headless relative" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {
        id: unref(id),
        el: unref(inputRef),
        files: unref(modelValue),
        open,
        remove,
        preview: unref(useNinjaFilePreview),
        drop
      }, null, _push, _parent);
      _push(`<input${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        type: "file"
      }, _ctx.$attrs, {
        class: "hidden",
        multiple: props.multiple
      }))}></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.2.1_nuxt@3.12.3/node_modules/@shuriken-ui/nuxt/components/form/BaseInputFileHeadless.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseButtonIcon",
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
    rounded: { default: void 0 },
    size: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const color = useNuiDefaultProperty(props, "BaseButtonIcon", "color");
    const rounded = useNuiDefaultProperty(props, "BaseButtonIcon", "rounded");
    const size = useNuiDefaultProperty(props, "BaseButtonIcon", "size");
    const radiuses = {
      none: "",
      sm: "nui-button-rounded-sm",
      md: "nui-button-rounded-md",
      lg: "nui-button-rounded-lg",
      full: "nui-button-rounded-full"
    };
    const sizes = {
      sm: "nui-button-sm",
      md: "nui-button-md",
      lg: "nui-button-lg",
      xl: "nui-button-xl"
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
      "nui-button-icon",
      props.loading && "nui-button-loading",
      rounded.value && radiuses[rounded.value],
      size.value && sizes[size.value],
      color.value && colors[color.value]
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
              _push2(ssrRenderComponent(_component_BasePlaceload, { class: "size-4 rounded-md" }, null, _parent2, _scopeId));
            }
          } else {
            return [
              !props.loading ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(_component_BasePlaceload, {
                key: 1,
                class: "size-4 rounded-md"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.2.1_nuxt@3.12.3/node_modules/@shuriken-ui/nuxt/components/base/BaseButtonIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
