import { u as useRouter, l as useRuntimeConfig, b as _sfc_main$q, e as _sfc_main$v, f as _sfc_main$a } from '../server.mjs';
import { defineComponent, reactive, computed, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import useVuelidate from '@vuelidate/core';
import { helpers, required, minLength, email, sameAs } from '@vuelidate/validators';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const formData = reactive({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      app_version: useRuntimeConfig().public.app_version
    });
    const rules = computed(() => {
      return {
        name: {
          required: helpers.withMessage("The name field is required", required),
          minLength: minLength(6)
        },
        email: {
          required: helpers.withMessage("The email field is required", required),
          email: helpers.withMessage("Invalid email format", email)
        },
        password: {
          required: helpers.withMessage("The password field is required", required),
          minLength: minLength(6)
        },
        password_confirmation: {
          required: helpers.withMessage("The password confirmation field is required", required),
          sameAs: helpers.withMessage("Passwords don't match", sameAs(formData.password))
        }
      };
    });
    const v$ = useVuelidate(rules, formData);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$q;
      const _component_BaseInput = _sfc_main$v;
      const _component_BaseButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        size: "xl",
        lead: "loose",
        weight: "bold",
        class: "text-center mt-6 mb-10 w-full text-gray-800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Create an Account`);
          } else {
            return [
              createTextVNode("Create an Account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><form action="#" method="post" class="mt-4">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: formData.name,
        "onUpdate:modelValue": ($event) => formData.name = $event,
        rounded: "md",
        label: "Name",
        type: "text",
        placeholder: "input name",
        onChange: unref(v$).name.$touch,
        class: "mb-4",
        size: "lg"
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(v$).name.$errors, (error) => {
        _push(`<span class="text-red-500">${ssrInterpolate(error.$message)}</span>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: formData.email,
        "onUpdate:modelValue": ($event) => formData.email = $event,
        rounded: "md",
        label: "Email",
        type: "email",
        placeholder: "e.g. example@email.com",
        onChange: unref(v$).email.$touch,
        class: "mb-4",
        size: "lg"
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(v$).email.$errors, (error) => {
        _push(`<span class="text-red-500">${ssrInterpolate(error.$message)}</span>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: formData.password,
        "onUpdate:modelValue": ($event) => formData.password = $event,
        rounded: "md",
        label: "Password",
        type: "password",
        placeholder: "****",
        onChange: unref(v$).password.$touch,
        class: "mb-4",
        size: "lg"
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(v$).password.$errors, (error) => {
        _push(`<span class="text-red-500">${ssrInterpolate(error.$message)}</span>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: formData.password_confirmation,
        "onUpdate:modelValue": ($event) => formData.password_confirmation = $event,
        rounded: "md",
        label: "Password Confirmation",
        type: "password",
        placeholder: "****",
        onChange: unref(v$).password_confirmation.$touch,
        class: "mb-4",
        size: "lg"
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(v$).password_confirmation.$errors, (error) => {
        _push(`<span class="text-red-500">${ssrInterpolate(error.$message)}</span>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_BaseButton, {
        class: "w-full block bg-waktoo-500 text-white mb-4 hover:bg-waktoo-700",
        type: "submit",
        variant: "solid",
        color: "none",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Register `);
          } else {
            return [
              createTextVNode(" Register ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form><div><p class="text-center text-gray-700">Already got an account? <a href="/auth/login" class="text-waktoo-500 pb-8 hover:text-gray-700">Login</a></p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
