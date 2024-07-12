import { a as _sfc_main$7, _ as __nuxt_component_0$2 } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseInput-BgsoGXSG.mjs';
import { u as useMultiStepForm } from './multi-step-form-BjeY9Jgk.mjs';
import { defineComponent, ref, computed, watch, mergeProps, withCtx, createTextVNode, unref, createVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
import './input-id-Bz_TYZXb.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { data, nextNotOk, getNextStep } = useMultiStepForm();
    const calculateScore = (password) => {
      let score = 0;
      if (!password)
        return score;
      const letters = {};
      for (let i = 0; i < password.length; i++) {
        letters[password[i]] = (letters[password[i]] || 0) + 1;
        score += 5 / letters[password[i]];
      }
      const variations = {
        digits: /\d/.test(password),
        lower: /[a-z]/.test(password),
        upper: /[A-Z]/.test(password),
        nonWords: /\W/.test(password)
      };
      let variationCount = 0;
      for (let key in variations) {
        if (variations[key]) {
          variationCount++;
        }
      }
      score += (variationCount - 1) * 10;
      return Math.floor(score);
    };
    const checkStrength = () => {
      passwordScore.value = calculateScore(data.value.password);
    };
    const showPasswordField = ref(false);
    const passwordScore = ref(calculateScore(data.value.password));
    const showPasswordField2 = ref(false);
    const passwordMatch = computed(() => {
      if (data.value.password !== data.value.password_confirmation) {
        return "Password do not match!";
      }
    });
    watch(() => data.value.password, () => {
      checkStrength();
      checkNext();
    });
    const getStrengthLabel = (score) => {
      if (score < 65 && score >= 50)
        return "Medium";
      if (score < 50 && score >= 20)
        return "Weak";
      if (score < 20 && score >= 1)
        return "Very Weak";
    };
    const mailErr = ref("");
    function debounce(fn, delay) {
      let timeoutID;
      return function(...args) {
        if (timeoutID) {
          clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
          fn(...args);
        }, delay);
      };
    }
    const checkMail = async () => {
      try {
        const response = await fetch(`https://api.dev.commerce.waktoo.com/api/auth/check-email?email=${data.value.email}`);
        const result = await response.json();
        if (result.status === "success" && result.data) {
          if (result.data.error) {
            mailErr.value = "Email Invalid";
          } else {
            if (!result.data.exists) {
              mailErr.value = "";
            } else {
              mailErr.value = "Email is already taken";
            }
          }
        } else {
          mailErr.value = "Error checking email";
        }
      } catch (error) {
        mailErr.value = "Error checking email";
      }
    };
    const debouncedCheckMail = debounce(checkMail, 1e3);
    watch(() => data.value.email, () => {
      debouncedCheckMail();
      checkNext();
    });
    const checkNext = () => {
      if (mailErr.value == "" && passwordScore.value > 64) {
        if (data.value.password == data.value.password_confirmation) {
          nextNotOk.value = false;
        }
      } else {
        nextNotOk.value = true;
      }
    };
    watch(() => nextNotOk, checkNext);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$7;
      const _component_Icon = __nuxt_component_0$2;
      const _component_BaseInput = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        class: "txt-onboarding-1 margin-40 text-center",
        weight: "medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Registrasi Akun `);
          } else {
            return [
              createTextVNode(" Registrasi Akun ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-wrap justify-between gap-4"><button class="w-full dark:bg-muted-700 text-muted-800 border-muted-300 dark:border-muted-600 nui-focus relative inline-flex grow items-center justify-center gap-2 rounded border bg-white py-3 dark:text-white border-radius">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:google-icon",
        class: "h-3 w-3"
      }, null, _parent));
      _push(`<div class="text-login-google">Masuk menggunakan Google</div></button></div><div class="flex-100 my-4 flex items-center"><hr class="border-muted-200 dark:border-muted-700 flex-auto border-t-2"><span class="text-muted-600 dark:text-muted-300 px-4 font-sans font-light">Atau</span><hr class="border-muted-200 dark:border-muted-700 flex-auto border-t-2"></div><div class="w-full space-y-2"><div class="max-width-lg grid grid-cols-1 md:grid-cols-4 gap-4"><div name="email" class="col-span-1 md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-0"><div class="col-span-1 flex flex-col justify-center"><p class="txt-registration-2">Email</p></div><div class="md:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        class: "w-full",
        type: "email",
        placeholder: "Email",
        autocomplete: "email",
        modelValue: unref(data).email,
        "onUpdate:modelValue": ($event) => unref(data).email = $event,
        required: "",
        error: unref(mailErr)
      }, null, _parent));
      _push(`</div></div><div name="password" class="col-span-1 md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-0" data-nui-tooltip="Sandi harus terdapat angka, huruf besar, huruf kecil, &amp; simbol"><div class="col-span-1 flex flex-col justify-center"><p class="txt-registration-2">Kata Sandi</p></div><div class="md:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        onInput: checkNext,
        modelValue: unref(data).password,
        "onUpdate:modelValue": ($event) => unref(data).password = $event,
        type: unref(showPasswordField) ? "text" : "password",
        placeholder: "Password",
        required: "",
        error: getStrengthLabel(unref(passwordScore))
      }, {
        action: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="leading-0 text-muted-400 peer-focus-within:text-primary-500 absolute right-0 top-0 flex h-10 w-10 items-center justify-center text-center text-xl"${_scopeId}><span class="relative flex h-full w-full items-center justify-center"${ssrRenderAttr("data-nui-tooltip", unref(showPasswordField) ? "Hide password" : "Show password")}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: unref(showPasswordField) ? "mdi:eye-off-outline" : "mdi:eye-outline",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</span></button>`);
          } else {
            return [
              createVNode("button", {
                class: "leading-0 text-muted-400 peer-focus-within:text-primary-500 absolute right-0 top-0 flex h-10 w-10 items-center justify-center text-center text-xl",
                onClick: withModifiers(($event) => showPasswordField.value = !unref(showPasswordField), ["prevent"])
              }, [
                createVNode("span", {
                  class: "relative flex h-full w-full items-center justify-center",
                  "data-nui-tooltip": unref(showPasswordField) ? "Hide password" : "Show password"
                }, [
                  createVNode(_component_Icon, {
                    name: unref(showPasswordField) ? "mdi:eye-off-outline" : "mdi:eye-outline",
                    class: "h-5 w-5"
                  }, null, 8, ["name"])
                ], 8, ["data-nui-tooltip"])
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div name="password_confirmation" class="col-span-1 md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-0"><div class="col-span-1 flex flex-col justify-center"><p class="txt-registration-2">Ulangi Kata Sandi</p></div><div class="md:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        onInput: checkNext,
        modelValue: unref(data).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(data).password_confirmation = $event,
        type: unref(showPasswordField2) ? "text" : "password",
        placeholder: "Password",
        required: "",
        error: unref(passwordMatch)
      }, {
        action: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="leading-0 text-muted-400 peer-focus-within:text-primary-500 absolute right-0 top-0 flex h-10 w-10 items-center justify-center text-center text-xl"${_scopeId}><span class="relative flex h-full w-full items-center justify-center"${ssrRenderAttr("data-nui-tooltip", unref(showPasswordField2) ? "Hide password" : "Show password")}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: unref(showPasswordField2) ? "mdi:eye-off-outline" : "mdi:eye-outline",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</span></button>`);
          } else {
            return [
              createVNode("button", {
                class: "leading-0 text-muted-400 peer-focus-within:text-primary-500 absolute right-0 top-0 flex h-10 w-10 items-center justify-center text-center text-xl",
                onClick: withModifiers(($event) => showPasswordField2.value = !unref(showPasswordField2), ["prevent"])
              }, [
                createVNode("span", {
                  class: "relative flex h-full w-full items-center justify-center",
                  "data-nui-tooltip": unref(showPasswordField2) ? "Hide password" : "Show password"
                }, [
                  createVNode(_component_Icon, {
                    name: unref(showPasswordField2) ? "mdi:eye-off-outline" : "mdi:eye-outline",
                    class: "h-5 w-5"
                  }, null, 8, ["name"])
                ], 8, ["data-nui-tooltip"])
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/onboarding/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
