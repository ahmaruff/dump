import { i as useAppConfig, _ as __nuxt_component_1, b as _sfc_main$q, d as _sfc_main$p, e as _sfc_main$v, f as _sfc_main$a, a as __nuxt_component_2$1 } from '../server.mjs';
import __nuxt_component_1$1 from './TairoLogo-a768bb4f.mjs';
import { _ as _sfc_main$2 } from './BaseThemeToggle-3a34801d.mjs';
import { useSSRContext, defineComponent, computed, ref, mergeProps, withCtx, createVNode, createTextVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, Field } from 'vee-validate';
import { z } from 'zod';
import '../../nitro/node-server.mjs';
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
import 'fs';
import 'path';
import 'ipx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'wretch';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@headlessui/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseMessage",
  __ssrInlineRender: true,
  props: {
    type: { default: "success" },
    shape: { default: void 0 },
    message: { default: "" },
    icon: { type: [Boolean, String], default: false },
    closable: { type: Boolean, default: false },
    closeIcon: { default: "lucide:x" }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(
      () => props.shape ?? appConfig.nui.defaultShapes?.message
    );
    const shapeStyle = {
      straight: "",
      rounded: "nui-message-rounded",
      smooth: "nui-message-smooth",
      curved: "nui-message-curved",
      full: "nui-message-full"
    };
    const typeStyle = {
      default: "nui-message-default",
      muted: "nui-message-muted",
      primary: "nui-message-primary",
      info: "nui-message-info",
      success: "nui-message-success",
      warning: "nui-message-warning",
      danger: "nui-message-danger"
    };
    const iconTypeStyle = {
      info: "akar-icons:info-fill",
      warning: "ci:warning",
      danger: "ph:warning-octagon-fill",
      success: "carbon:checkmark-filled",
      primary: "",
      muted: "",
      default: ""
    };
    const icon = computed(
      () => typeof props.icon === "string" ? props.icon : iconTypeStyle[props.type]
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-message", [unref(shape) && shapeStyle[unref(shape)], typeStyle[props.type]]]
      }, _attrs))}>`);
      if (props.icon) {
        _push(`<div class="nui-message-icon-outer">`);
        if (unref(icon)) {
          _push(ssrRenderComponent(_component_Icon, {
            name: unref(icon),
            class: "nui-message-icon"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="nui-message-inner-text">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(props.message)}`);
      }, _push, _parent);
      _push(`</span>`);
      if (props.closable) {
        _push(`<button type="button" tabindex="0" class="${ssrRenderClass([[unref(shape) && shapeStyle[unref(shape)]], "nui-message-close"])}">`);
        ssrRenderSlot(_ctx.$slots, "close-button", {}, () => {
          _push(ssrRenderComponent(_component_Icon, {
            name: _ctx.closeIcon,
            class: "nui-close-icon"
          }, null, _parent));
        }, _push, _parent);
        _push(`</button>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/base/BaseMessage.vue");
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
      const _component_NuxtLink = __nuxt_component_1;
      const _component_TairoLogo = __nuxt_component_1$1;
      const _component_BaseThemeToggle = _sfc_main$2;
      const _component_BaseHeading = _sfc_main$q;
      const _component_BaseParagraph = _sfc_main$p;
      const _component_BaseMessage = _sfc_main$1;
      const _component_BaseInput = _sfc_main$v;
      const _component_BaseButton = _sfc_main$a;
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
