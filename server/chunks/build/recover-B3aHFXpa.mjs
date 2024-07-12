import { e as useNuiDefaultProperty, b as __nuxt_component_1$1, a as _sfc_main$7, g as _sfc_main$3$1, j as useState, _ as __nuxt_component_0$2, d as _export_sfc } from './server.mjs';
import __nuxt_component_1$2 from './TairoLogo-BlOTpmFZ.mjs';
import { useSSRContext, defineComponent, computed, ref, mergeProps, withCtx, createVNode, createTextVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { u as useNinjaId } from './input-id-Bz_TYZXb.mjs';
import { _ as _sfc_main$5 } from './BaseParagraph-DtUiLRkC.mjs';
import { _ as _sfc_main$6 } from './BaseInput-BgsoGXSG.mjs';
import { z, u as useForm, F as Field, t as toTypedSchema } from './vee-validate-zod.esm-Bmzui0dy.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'wretch';
import './BaseInputHelpText-CmEQTnIf.mjs';

const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "aria-hidden": "true",
    viewBox: "0 0 24 24"
  }, _attrs))}><g fill="currentColor" stroke="currentColor" class="stroke-2"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></g></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.2.1_nuxt@3.12.3/node_modules/@shuriken-ui/nuxt/components/icon/IconSun.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "aria-hidden": "true",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="currentColor" stroke="currentColor" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" class="stroke-2"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.2.1_nuxt@3.12.3/node_modules/@shuriken-ui/nuxt/components/icon/IconMoon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BaseThemeToggle",
  __ssrInlineRender: true,
  props: {
    id: { default: void 0 },
    inverted: { type: Boolean, default: false },
    disableTransitions: { type: Boolean, default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const id = useNinjaId(() => props.id);
    useNuiDefaultProperty(
      props,
      "BaseThemeToggle",
      "disableTransitions"
    );
    const colorMode = useColorMode();
    const isDark = computed({
      get() {
        return colorMode.value === "dark";
      },
      set(value) {
        colorMode.preference = value ? "dark" : "light";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconSun = __nuxt_component_0;
      const _component_IconMoon = __nuxt_component_1;
      _push(`<label${ssrRenderAttrs(mergeProps({
        class: ["nui-theme-toggle", props.inverted && "nui-theme-toggle-inverted"],
        for: unref(id)
      }, _attrs))}><input${ssrIncludeBooleanAttr(Array.isArray(unref(isDark)) ? ssrLooseContain(unref(isDark), null) : unref(isDark)) ? " checked" : ""}${ssrRenderAttr("id", unref(id))} type="checkbox" class="nui-theme-toggle-input"><span class="nui-theme-toggle-inner">`);
      _push(ssrRenderComponent(_component_IconSun, { class: "nui-sun" }, null, _parent));
      _push(ssrRenderComponent(_component_IconMoon, { class: "nui-moon" }, null, _parent));
      _push(`</span></label>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.2.1_nuxt@3.12.3/node_modules/@shuriken-ui/nuxt/components/base/BaseThemeToggle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseMessage",
  __ssrInlineRender: true,
  props: {
    message: { default: "" },
    icon: { type: [Boolean, String], default: false },
    defaultIcons: { default: void 0 },
    closeIcon: { default: "lucide:x" },
    closable: { type: Boolean },
    color: { default: void 0 },
    rounded: { default: void 0 },
    classes: { default: () => ({}) }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const color = useNuiDefaultProperty(props, "BaseMessage", "color");
    const rounded = useNuiDefaultProperty(props, "BaseMessage", "rounded");
    const icons = useNuiDefaultProperty(props, "BaseMessage", "defaultIcons");
    const radiuses = {
      none: "",
      sm: "nui-message-rounded-sm",
      md: "nui-message-rounded-md",
      lg: "nui-message-rounded-lg",
      full: "nui-message-rounded-full"
    };
    const colors = {
      default: "nui-message-default",
      "default-contrast": "nui-message-default-contrast",
      muted: "nui-message-muted",
      "muted-contrast": "nui-message-muted-contrast",
      primary: "nui-message-primary",
      info: "nui-message-info",
      success: "nui-message-success",
      warning: "nui-message-warning",
      danger: "nui-message-danger"
    };
    const icon = computed(
      () => typeof props.icon === "string" ? props.icon : color.value ? icons.value[color.value] : ""
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-message", [
          unref(rounded) && radiuses[unref(rounded)],
          unref(color) && colors[unref(color)],
          (_a = _ctx.classes) == null ? void 0 : _a.wrapper,
          props.icon ? "nui-has-icon" : "nui-has-text"
        ]]
      }, _attrs))}>`);
      if (props.icon && unref(icon)) {
        _push(`<div class="${ssrRenderClass([(_b = _ctx.classes) == null ? void 0 : _b.icon, "nui-message-icon-outer"])}">`);
        ssrRenderSlot(_ctx.$slots, "icon", { iconName: "icon" }, () => {
          if (unref(icon)) {
            _push(ssrRenderComponent(_component_Icon, {
              name: unref(icon),
              class: "nui-message-icon"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="${ssrRenderClass([(_c = _ctx.classes) == null ? void 0 : _c.text, "nui-message-inner-text"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(props.message)}`);
      }, _push, _parent);
      _push(`</span>`);
      if (props.closable) {
        _push(`<div class="nui-message-close-wrapper"><button type="button" tabindex="0" class="${ssrRenderClass([[unref(rounded) && radiuses[unref(rounded)]], "nui-message-close"])}">`);
        ssrRenderSlot(_ctx.$slots, "close-button", {}, () => {
          _push(ssrRenderComponent(_component_Icon, {
            name: _ctx.closeIcon,
            class: "nui-close-icon"
          }, null, _parent));
        }, _push, _parent);
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.2.1_nuxt@3.12.3/node_modules/@shuriken-ui/nuxt/components/base/BaseMessage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "recover",
  __ssrInlineRender: true,
  setup(__props) {
    const VALIDATION_TEXT = {
      EMAIL_REQUIRED: "A valid email is required"
    };
    const zodSchema = z.object({
      email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED)
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = computed(() => ({
      email: ""
    }));
    const { handleSubmit, isSubmitting } = useForm({
      validationSchema,
      initialValues
    });
    const success = ref(false);
    handleSubmit(async (values) => {
      console.log("recover-success", values);
      try {
        await new Promise((resolve) => setTimeout(resolve, 4e3));
      } catch {
      }
      success.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_TairoLogo = __nuxt_component_1$2;
      const _component_BaseThemeToggle = _sfc_main$2;
      const _component_BaseHeading = _sfc_main$7;
      const _component_BaseParagraph = _sfc_main$5;
      const _component_BaseMessage = _sfc_main$1;
      const _component_BaseInput = _sfc_main$6;
      const _component_BaseButton = _sfc_main$3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4" }, _attrs))}><div class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards",
        class: "text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogo, { class: "h-10 w-10" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogo, { class: "h-10 w-10" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseThemeToggle, null, null, _parent));
      _push(`</div></div><div class="flex w-full items-center justify-center"><div class="relative mx-auto w-full max-w-2xl"><div class="me-auto ms-auto mt-4 w-full"><div class="me-auto ms-auto mt-4 w-full max-w-md"><div class="text-center">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "3xl",
        weight: "medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Recover Password `);
          } else {
            return [
              createTextVNode(" Recover Password ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-400 mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Follow the instuctions sent to your email address `);
          } else {
            return [
              createTextVNode(" Follow the instuctions sent to your email address ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(success)) {
        _push(`<div class="px-8 py-4"><div class="mb-4 space-y-4">`);
        _push(ssrRenderComponent(_component_BaseMessage, {
          class: "p-6",
          closable: false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-base"${_scopeId}> An email has been sent to you with instructions on how to reset your password. </p><small class="block pt-2"${_scopeId}> If you don&#39;t receive an email, please check your spam folder. If you still don&#39;t receive an email, that means you don&#39;t have an account </small>`);
            } else {
              return [
                createVNode("p", { class: "text-base" }, " An email has been sent to you with instructions on how to reset your password. "),
                createVNode("small", { class: "block pt-2" }, " If you don't receive an email, please check your spam folder. If you still don't receive an email, that means you don't have an account ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<form method="POST" action="" class="px-8 py-4" novalidate><div class="mb-4 space-y-4">`);
        _push(ssrRenderComponent(unref(Field), { name: "email" }, {
          default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseInput, {
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting),
                type: "email",
                label: "Email address",
                placeholder: "Email address",
                autocomplete: "email",
                classes: {
                  input: "h-12"
                },
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseInput, {
                  "model-value": field.value,
                  error: errorMessage,
                  disabled: unref(isSubmitting),
                  type: "email",
                  label: "Email address",
                  placeholder: "Email address",
                  autocomplete: "email",
                  classes: {
                    input: "h-12"
                  },
                  "onUpdate:modelValue": handleChange,
                  onBlur: handleBlur
                }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="mb-6">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          disabled: unref(isSubmitting),
          loading: unref(isSubmitting),
          type: "submit",
          color: "primary",
          class: "!h-12 w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Recover Password `);
            } else {
              return [
                createTextVNode(" Recover Password ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><p class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"><span>False alert?</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/auth/login-1",
          class: "text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Sign in `);
            } else {
              return [
                createTextVNode(" Sign in ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p></form>`);
      }
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/recover.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
