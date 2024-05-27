import { hasInjectionContext, getCurrentInstance, toRef as toRef$1, isRef, inject, version, ref, watchEffect, watch, defineAsyncComponent, onServerPrefetch, readonly, customRef, computed, nextTick, defineComponent, mergeProps, unref, useSSRContext, withCtx, createVNode, renderSlot, openBlock, createBlock, createCommentVNode, onUpdated, h, resolveDynamicComponent, resolveComponent, toDisplayString, onUnmounted, Fragment, renderList, createTextVNode, Suspense, Transition, getCurrentScope, onScopeDispose, withAsyncContext, resolveDirective, withDirectives, provide, shallowReactive, createApp, reactive, onErrorCaptured, shallowRef, isReadonly, isShallow, isReactive, toRaw, vShow, render } from 'vue';
import { i as useRuntimeConfig$1, k as createError$1, o as klona, p as defu, $ as $fetch, q as hasProtocol, r as parseURL, t as parseQuery, v as createHooks, x as withTrailingSlash, y as withoutTrailingSlash, z as withQuery, j as joinURL, A as sanitizeStatusCode, B as parse, C as isEqual, D as setCookie, E as getCookie, F as deleteCookie } from '../nitro/node-server.mjs';
import { RouterView, useRoute as useRoute$1, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { renderSSRHead } from '@unhead/ssr';
import { getActiveHead, createServerHead as createServerHead$1 } from 'unhead';
import { defineHeadPlugin, composableNames } from '@unhead/shared';
import wretch from 'wretch';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrGetDynamicModelProps, ssrRenderVNode, ssrRenderSlotInner, ssrRenderSuspense, ssrRenderList, ssrRenderStyle, ssrGetDirectiveProps } from 'vue/server-renderer';
import { Icon as Icon$1 } from '@iconify/vue/dist/offline';
import { loadIcon } from '@iconify/vue';
import { TransitionRoot, Dialog, TransitionChild, DialogPanel } from '@headlessui/vue';
import { escapeHtml } from '@vue/shared';
import chroma from 'chroma-js';
import colors from 'tailwindcss/colors.js';
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

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey$1 = "__unctx__";
const defaultNamespace = _globalThis[globalKey$1] || (_globalThis[globalKey$1] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (value[0] === '"' && value[value.length - 1] === '"') {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const appConfig =  useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;

const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.6.5";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => callWithNuxt(nuxtApp, fn),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig ;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (plugin.hooks) {
    nuxtApp.hooks.addHooks(plugin.hooks);
  }
  if (typeof plugin === "function") {
    const { provide } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
    if (provide && typeof provide === "object") {
      for (const key in provide) {
        nuxtApp.provide(key, provide[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins) {
  const parallels = [];
  const errors = [];
  for (const plugin of plugins) {
    const promise = applyPlugin(nuxtApp, plugin);
    if (plugin.parallel) {
      parallels.push(promise.catch((e) => errors.push(e)));
    } else {
      await promise;
    }
  }
  await Promise.all(parallels);
  if (errors.length) {
    throw errors[0];
  }
}
/*! @__NO_SIDE_EFFECTS__ */
function  defineNuxtPlugin(plugin) {
  if (typeof plugin === "function") {
    return plugin;
  }
  delete plugin.name;
  return Object.assign(plugin.setup || (() => {
  }), plugin, { [NuxtPluginIndicator]: true });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
/*! @__NO_SIDE_EFFECTS__ */
function useNuxtApp() {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
/*! @__NO_SIDE_EFFECTS__ */
function  useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function defineAppConfig(config) {
  return config;
}

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxt = useNuxtApp();
  const state = toRef$1(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}

const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");

const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
/*! @__NO_SIDE_EFFECTS__ */
function  defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = useNuxtApp();
  const global = options.global || typeof name !== "string";
  const mw = typeof name !== "string" ? name : middleware;
  if (!mw) {
    console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", name);
    return;
  }
  if (global) {
    nuxtApp._middleware.global.push(mw);
  } else {
    nuxtApp._middleware.named[name] = mw;
  }
};
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options?.open) {
    return Promise.resolve();
  }
  const isExternal = options?.external || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal && !options?.external) {
    throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL( useRuntimeConfig().app.baseURL, fullPath);
      async function redirect(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      }
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    if (options?.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return options?.replace ? router.replace(to) : router.push(to);
};

const useError = () => toRef$1(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    const error = useError();
    if (false) ;
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const clearError = async (options = {}) => {
  const nuxtApp = useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await useRouter().replace(options.redirect);
  }
  error.value = null;
};
const isNuxtError = (err) => !!(err && typeof err === "object" && "__nuxt_error" in err);
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};

const __nuxt_page_meta$E = {
      layout: "empty",
      title: "Login",
      preview: {
        title: "Login 1",
        description: "For authentication and sign in",
        categories: ["layouts", "authentication"],
        src: "/img/screens/auth-login-1.png",
        srcDark: "/img/screens/auth-login-1-dark.png",
        order: 96
      }
    };

const __nuxt_page_meta$D = {
      layout: "auth",
      middleware: "guest"
    };

const __nuxt_page_meta$C = {
      layout: "empty",
      title: "Recover Password",
      preview: {
        title: "Recover",
        description: "For password recovery",
        categories: ["layouts", "authentication"],
        src: "/img/screens/auth-recover.png",
        srcDark: "/img/screens/auth-recover-dark.png",
        order: 103
      }
    };

const __nuxt_page_meta$B = {
      layout: "auth",
      middleware: "guest"
    };

const __nuxt_page_meta$A = {
      layout: "empty",
      title: "Signup",
      preview: {
        title: "Signup 1",
        description: "For authentication and sign up",
        categories: ["layouts", "authentication"],
        src: "/img/screens/auth-signup-1.png",
        srcDark: "/img/screens/auth-signup-1-dark.png",
        order: 100
      }
    };

const __nuxt_page_meta$z = {
      layout: "empty",
      title: "Signup",
      preview: {
        title: "Signup 2",
        description: "For authentication and sign up",
        categories: ["layouts", "authentication"],
        src: "/img/screens/auth-signup-2.png",
        srcDark: "/img/screens/auth-signup-2-dark.png",
        order: 101
      }
    };

const __nuxt_page_meta$y = {
      layout: "empty",
      title: "Signup",
      preview: {
        title: "Signup 3",
        description: "For authentication and sign up",
        categories: ["layouts", "authentication"],
        src: "/img/screens/auth-signup-3.png",
        srcDark: "/img/screens/auth-signup-3-dark.png",
        order: 102
      }
    };

const __nuxt_page_meta$x = {
      title: "Waktoo Commerce",
      description: "Waktoo Commerce adalah aplikasi yang memungkinkan pelanggan untuk melakukan pemesanan produk melalui platform digital",
      breadcrumb: {
        label: "Commerce"
      },
      layout: "landing"
    };

const __nuxt_page_meta$w = {
      title: "Dashboard",
      preview: {
        title: "Dashboard",
        description: "Dashboard Waktoo Commerce",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-personal-1.png",
        srcDark: "/img/screens/dashboards-personal-1-dark.png",
        order: 1
      }
    };

const __nuxt_page_meta$v = {
      title: "Waktoo Commerce",
      description: "Waktoo Commerce adalah aplikasi yang memungkinkan pelanggan untuk melakukan pemesanan produk melalui platform digital",
      breadcrumb: {
        label: "Commerce"
      },
      layout: "landing"
    };

const __nuxt_page_meta$u = {
      layout: "admin"
    };

const __nuxt_page_meta$t = {
      layout: "empty",
      title: "Landing - Waktoo Commerce"
    };

const __nuxt_page_meta$s = {
      title: "Waktoo Commerce",
      description: "Waktoo Commerce adalah aplikasi yang memungkinkan pelanggan untuk melakukan pemesanan produk melalui platform digital",
      breadcrumb: {
        label: "Commerce"
      },
      layout: "landing"
    };

const __nuxt_page_meta$r = {};

const __nuxt_page_meta$q = {
      title: "Index"
    };

const __nuxt_page_meta$p = {
  layout: "admin"
};

const __nuxt_page_meta$o = {
      title: "Detail Produk",
      preview: {
        title: "Detail Produk 1",
        description: "Detail Produk 1",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-influencer.png",
        srcDark: "/img/screens/dashboards-influencer-dark.png",
        order: 15
      }
    };

const __nuxt_page_meta$n = {
      title: "Detail Produk",
      preview: {
        title: "Detail Produk 1",
        description: "Detail Produk 1",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-influencer.png",
        srcDark: "/img/screens/dashboards-influencer-dark.png",
        order: 15
      }
    };

const __nuxt_page_meta$m = {
      title: "Edit Produk",
      preview: {
        title: "Edit Produk 1",
        description: "Edit Produk 1",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-influencer.png",
        srcDark: "/img/screens/dashboards-influencer-dark.png",
        order: 15
      }
    };

const __nuxt_page_meta$l = {
      title: "Daftar Produk",
      preview: {
        title: "Daftar Produk",
        description: "For list views and collections",
        categories: ["layouts", "lists"],
        src: "/img/screens/layouts-table-list-1.png",
        srcDark: "/img/screens/layouts-table-list-1-dark.png",
        order: 44
      }
    };

const __nuxt_page_meta$k = {
      title: "Tambah Produk",
      preview: {
        title: "Tambah Produk 1",
        description: "Tambah Produk 1",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-influencer.png",
        srcDark: "/img/screens/dashboards-influencer-dark.png",
        order: 15
      }
    };

const __nuxt_page_meta$j = {
      layout: "admin"
    };

const __nuxt_page_meta$i = {
      layout: "admin"
    };

const __nuxt_page_meta$h = {
      title: "Daftar Produk",
      layout: "admin",
      preview: {
        title: "Daftar Produk",
        description: "For list views and collections",
        categories: ["layouts", "lists"],
        src: "/img/screens/layouts-table-list-1.png",
        srcDark: "/img/screens/layouts-table-list-1-dark.png",
        order: 44
      }
    };

const __nuxt_page_meta$g = {
      title: "Collapse Layout",
      layout: "empty"
    };

const __nuxt_page_meta$f = {
      title: "Sidebar Layout",
      layout: "empty"
    };

const __nuxt_page_meta$e = {
      title: "Waktoo Commerce",
      description: "Waktoo Commerce adalah aplikasi yang memungkinkan pelanggan untuk melakukan pemesanan produk melalui platform digital",
      breadcrumb: {
        label: "Commerce"
      },
      layout: "landing"
    };

const __nuxt_page_meta$d = {
      title: "Waktoo Commerce",
      description: "Waktoo Commerce adalah aplikasi yang memungkinkan pelanggan untuk melakukan pemesanan produk melalui platform digital",
      breadcrumb: {
        label: "Commerce"
      },
      layout: "landing"
    };

const __nuxt_page_meta$c = {
      title: "Waktoo Commerce",
      description: "Waktoo Commerce adalah aplikasi yang memungkinkan pelanggan untuk melakukan pemesanan produk melalui platform digital",
      breadcrumb: {
        label: "Commerce"
      },
      layout: "landing"
    };

const __nuxt_page_meta$b = {
      title: "Waktoo Commerce",
      description: "Waktoo Commerce adalah aplikasi yang memungkinkan pelanggan untuk melakukan pemesanan produk melalui platform digital",
      breadcrumb: {
        label: "Commerce"
      },
      layout: "landing"
    };

const __nuxt_page_meta$a = {
      title: "Waktoo Commerce",
      description: "Waktoo Commerce adalah aplikasi yang memungkinkan pelanggan untuk melakukan pemesanan produk melalui platform digital",
      breadcrumb: {
        label: "Commerce"
      },
      layout: "landing"
    };

const __nuxt_page_meta$9 = {
      title: "Waktoo Commerce",
      description: "Waktoo Commerce adalah aplikasi yang memungkinkan pelanggan untuk melakukan pemesanan produk melalui platform digital",
      breadcrumb: {
        label: "Commerce"
      },
      layout: "landing"
    };

const __nuxt_page_meta$8 = {
      title: "Wizard — Step 1",
      preview: {
        title: "Wizard — Step 1",
        description: "For onboarding and step forms",
        categories: ["dashboards", "wizard", "forms"],
        src: "/img/screens/wizard-1.png",
        srcDark: "/img/screens/wizard-1-dark.png",
        order: 30
      }
    };

const __nuxt_page_meta$7 = {
      title: "Wizard — Step 2",
      preview: {
        title: "Wizard — Step 2",
        description: "For onboarding and step forms",
        categories: ["dashboards", "wizard", "forms"],
        src: "/img/screens/wizard-2.png",
        srcDark: "/img/screens/wizard-2-dark.png",
        order: 31
      }
    };

const __nuxt_page_meta$6 = {
      title: "Wizard — Step 3",
      preview: {
        title: "Wizard — Step 3",
        description: "For onboarding and step forms",
        categories: ["dashboards", "wizard", "forms"],
        src: "/img/screens/wizard-3.png",
        srcDark: "/img/screens/wizard-3-dark.png",
        order: 32
      }
    };

const __nuxt_page_meta$5 = {
      title: "Wizard — Step 4",
      preview: {
        title: "Wizard — Step 4",
        description: "For onboarding and step forms",
        categories: ["dashboards", "wizard", "forms"],
        src: "/img/screens/wizard-4.png",
        srcDark: "/img/screens/wizard-4-dark.png",
        order: 33
      }
    };

const __nuxt_page_meta$4 = {
      title: "Wizard — Step 5",
      preview: {
        title: "Wizard — Step 5",
        description: "For onboarding and step forms",
        categories: ["dashboards", "wizard", "forms"],
        src: "/img/screens/wizard-5.png",
        srcDark: "/img/screens/wizard-5-dark.png",
        order: 34
      }
    };

const __nuxt_page_meta$3 = {
      title: "Wizard — Step 6",
      preview: {
        title: "Wizard — Step 6",
        description: "For onboarding and step forms",
        categories: ["dashboards", "wizard", "forms"],
        src: "/img/screens/wizard-6.png",
        srcDark: "/img/screens/wizard-6-dark.png",
        order: 35
      }
    };

const __nuxt_page_meta$2 = {
      title: "Wizard — Step 7",
      preview: {
        title: "Wizard — Step 7",
        description: "For onboarding and step forms",
        categories: ["dashboards", "wizard", "forms"],
        src: "/img/screens/wizard-7.png",
        srcDark: "/img/screens/wizard-7-dark.png",
        order: 36
      }
    };

const __nuxt_page_meta$1 = {
      layout: "empty"
    };

const __nuxt_page_meta = {
      title: "Prebuilt dashboards pages",
      description: "Explore 100+ prebuilt pages, including dashboards and app examples. Kickstart your project with Nuxt and Tailwind CSS.",
      layout: "landing"
    };

const _routes = [
  {
    name: __nuxt_page_meta$E?.name ?? "auth",
    path: __nuxt_page_meta$E?.path ?? "/auth",
    meta: __nuxt_page_meta$E || {},
    alias: __nuxt_page_meta$E?.alias || [],
    redirect: __nuxt_page_meta$E?.redirect || undefined,
    component: () => import('./_nuxt/index-65c3af84.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$D?.name ?? "auth-login",
    path: __nuxt_page_meta$D?.path ?? "/auth/login",
    meta: __nuxt_page_meta$D || {},
    alias: __nuxt_page_meta$D?.alias || [],
    redirect: __nuxt_page_meta$D?.redirect || undefined,
    component: () => import('./_nuxt/login-fa30a90c.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$C?.name ?? "auth-recover",
    path: __nuxt_page_meta$C?.path ?? "/auth/recover",
    meta: __nuxt_page_meta$C || {},
    alias: __nuxt_page_meta$C?.alias || [],
    redirect: __nuxt_page_meta$C?.redirect || undefined,
    component: () => import('./_nuxt/recover-94bdb69d.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$B?.name ?? "auth-register",
    path: __nuxt_page_meta$B?.path ?? "/auth/register",
    meta: __nuxt_page_meta$B || {},
    alias: __nuxt_page_meta$B?.alias || [],
    redirect: __nuxt_page_meta$B?.redirect || undefined,
    component: () => import('./_nuxt/register-05cae657.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$A?.name ?? "auth-signup-1",
    path: __nuxt_page_meta$A?.path ?? "/auth/signup-1",
    meta: __nuxt_page_meta$A || {},
    alias: __nuxt_page_meta$A?.alias || [],
    redirect: __nuxt_page_meta$A?.redirect || undefined,
    component: () => import('./_nuxt/signup-1-f4a5ed14.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$z?.name ?? "auth-signup-2",
    path: __nuxt_page_meta$z?.path ?? "/auth/signup-2",
    meta: __nuxt_page_meta$z || {},
    alias: __nuxt_page_meta$z?.alias || [],
    redirect: __nuxt_page_meta$z?.redirect || undefined,
    component: () => import('./_nuxt/signup-2-05353889.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$y?.name ?? "auth-signup-3",
    path: __nuxt_page_meta$y?.path ?? "/auth/signup-3",
    meta: __nuxt_page_meta$y || {},
    alias: __nuxt_page_meta$y?.alias || [],
    redirect: __nuxt_page_meta$y?.redirect || undefined,
    component: () => import('./_nuxt/signup-3-2401a38b.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$x?.name ?? "checkout",
    path: __nuxt_page_meta$x?.path ?? "/checkout",
    meta: __nuxt_page_meta$x || {},
    alias: __nuxt_page_meta$x?.alias || [],
    redirect: __nuxt_page_meta$x?.redirect || undefined,
    component: () => import('./_nuxt/checkout-b89a8b1c.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$w?.name ?? "dashboards",
    path: __nuxt_page_meta$w?.path ?? "/dashboards",
    meta: __nuxt_page_meta$w || {},
    alias: __nuxt_page_meta$w?.alias || [],
    redirect: __nuxt_page_meta$w?.redirect || undefined,
    component: () => import('./_nuxt/index-739eed8d.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$v?.name ?? "detail-produk",
    path: __nuxt_page_meta$v?.path ?? "/detail-produk",
    meta: __nuxt_page_meta$v || {},
    alias: __nuxt_page_meta$v?.alias || [],
    redirect: __nuxt_page_meta$v?.redirect || undefined,
    component: () => import('./_nuxt/detail-produk-bf2ca309.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$u?.name ?? "index-old",
    path: __nuxt_page_meta$u?.path ?? "/index-old",
    meta: __nuxt_page_meta$u || {},
    alias: __nuxt_page_meta$u?.alias || [],
    redirect: __nuxt_page_meta$u?.redirect || undefined,
    component: () => import('./_nuxt/index-old-815968e0.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$t?.name ?? "index",
    path: __nuxt_page_meta$t?.path ?? "/",
    meta: __nuxt_page_meta$t || {},
    alias: __nuxt_page_meta$t?.alias || [],
    redirect: __nuxt_page_meta$t?.redirect || undefined,
    component: () => import('./_nuxt/index-ac93feee.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$s?.name ?? "keranjang",
    path: __nuxt_page_meta$s?.path ?? "/keranjang",
    meta: __nuxt_page_meta$s || {},
    alias: __nuxt_page_meta$s?.alias || [],
    redirect: __nuxt_page_meta$s?.redirect || undefined,
    component: () => import('./_nuxt/keranjang-f4cccd1e.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$r?.name ?? "layouts",
    path: __nuxt_page_meta$r?.path ?? "/layouts",
    meta: __nuxt_page_meta$r || {},
    alias: __nuxt_page_meta$r?.alias || [],
    redirect: __nuxt_page_meta$r?.redirect || undefined,
    component: () => import('./_nuxt/layouts-46a2d7e2.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$q?.name ?? "logout",
    path: __nuxt_page_meta$q?.path ?? "/logout",
    meta: __nuxt_page_meta$q || {},
    alias: __nuxt_page_meta$q?.alias || [],
    redirect: __nuxt_page_meta$q?.redirect || undefined,
    component: () => import('./_nuxt/logout-1191ee89.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$p?.name ?? "produk-id",
    path: __nuxt_page_meta$p?.path ?? "/produk/:id()",
    meta: __nuxt_page_meta$p || {},
    alias: __nuxt_page_meta$p?.alias || [],
    redirect: __nuxt_page_meta$p?.redirect || undefined,
    component: () => import('./_nuxt/_id_-2acf5f43.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$o?.name ?? "produk-detail-produk-varian",
    path: __nuxt_page_meta$o?.path ?? "/produk/detail-produk-varian",
    meta: __nuxt_page_meta$o || {},
    alias: __nuxt_page_meta$o?.alias || [],
    redirect: __nuxt_page_meta$o?.redirect || undefined,
    component: () => import('./_nuxt/detail-produk-varian-75170b03.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$n?.name ?? "produk-detail-produk",
    path: __nuxt_page_meta$n?.path ?? "/produk/detail-produk",
    meta: __nuxt_page_meta$n || {},
    alias: __nuxt_page_meta$n?.alias || [],
    redirect: __nuxt_page_meta$n?.redirect || undefined,
    component: () => import('./_nuxt/detail-produk-67f04b70.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$m?.name ?? "produk-edit-produk",
    path: __nuxt_page_meta$m?.path ?? "/produk/edit-produk",
    meta: __nuxt_page_meta$m || {},
    alias: __nuxt_page_meta$m?.alias || [],
    redirect: __nuxt_page_meta$m?.redirect || undefined,
    component: () => import('./_nuxt/edit-produk-a1aee255.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$l?.name ?? "produk",
    path: __nuxt_page_meta$l?.path ?? "/produk",
    meta: __nuxt_page_meta$l || {},
    alias: __nuxt_page_meta$l?.alias || [],
    redirect: __nuxt_page_meta$l?.redirect || undefined,
    component: () => import('./_nuxt/index-26b0a168.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$k?.name ?? "produk-tambah-produk",
    path: __nuxt_page_meta$k?.path ?? "/produk/tambah-produk",
    meta: __nuxt_page_meta$k || {},
    alias: __nuxt_page_meta$k?.alias || [],
    redirect: __nuxt_page_meta$k?.redirect || undefined,
    component: () => import('./_nuxt/tambah-produk-0228df1c.mjs').then(m => m.default || m)
  },
  {
    name: "shop-admin-id",
    path: "/shop-admin/:id()",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/_id_-972edbf4.mjs').then(m => m.default || m)
  },
  {
    name: "shop-admin-create copy",
    path: "/shop-admin/create%20copy",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/create copy-6d3420ca.mjs').then(m => m.default || m)
  },
  {
    name: "shop-admin-create",
    path: "/shop-admin/create",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/create-aa037107.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$j?.name ?? "shop-admin-edit-id copy",
    path: __nuxt_page_meta$j?.path ?? "/shop-admin/edit/:id()%20copy",
    meta: __nuxt_page_meta$j || {},
    alias: __nuxt_page_meta$j?.alias || [],
    redirect: __nuxt_page_meta$j?.redirect || undefined,
    component: () => import('./_nuxt/_id_ copy-358018af.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$i?.name ?? "shop-admin-edit-id",
    path: __nuxt_page_meta$i?.path ?? "/shop-admin/edit/:id()",
    meta: __nuxt_page_meta$i || {},
    alias: __nuxt_page_meta$i?.alias || [],
    redirect: __nuxt_page_meta$i?.redirect || undefined,
    component: () => import('./_nuxt/_id_-14d7737c.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$h?.name ?? "shop-admin",
    path: __nuxt_page_meta$h?.path ?? "/shop-admin",
    meta: __nuxt_page_meta$h || {},
    alias: __nuxt_page_meta$h?.alias || [],
    redirect: __nuxt_page_meta$h?.redirect || undefined,
    component: () => import('./_nuxt/index-f8e9c72f.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$g?.name ?? "starter-collapse",
    path: __nuxt_page_meta$g?.path ?? "/starter-collapse",
    meta: __nuxt_page_meta$g || {},
    alias: __nuxt_page_meta$g?.alias || [],
    redirect: __nuxt_page_meta$g?.redirect || undefined,
    component: () => import('./_nuxt/starter-collapse-d83b2965.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$f?.name ?? "starter-sidebar",
    path: __nuxt_page_meta$f?.path ?? "/starter-sidebar",
    meta: __nuxt_page_meta$f || {},
    alias: __nuxt_page_meta$f?.alias || [],
    redirect: __nuxt_page_meta$f?.redirect || undefined,
    component: () => import('./_nuxt/starter-sidebar-7e08bf15.mjs').then(m => m.default || m)
  },
  {
    name: "test-error",
    path: "/test-error",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/test-error-59227f62.mjs').then(m => m.default || m)
  },
  {
    path: __nuxt_page_meta$c?.path ?? "/toko/:id()",
    children: [
  {
    name: __nuxt_page_meta$e?.name ?? "toko-id",
    path: __nuxt_page_meta$e?.path ?? "",
    meta: __nuxt_page_meta$e || {},
    alias: __nuxt_page_meta$e?.alias || [],
    redirect: __nuxt_page_meta$e?.redirect || undefined,
    component: () => import('./_nuxt/index-73808901.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$d?.name ?? "toko-id-produk-produk",
    path: __nuxt_page_meta$d?.path ?? "produk/produk",
    meta: __nuxt_page_meta$d || {},
    alias: __nuxt_page_meta$d?.alias || [],
    redirect: __nuxt_page_meta$d?.redirect || undefined,
    component: () => import('./_nuxt/produk-971c92e1.mjs').then(m => m.default || m)
  }
],
    name: __nuxt_page_meta$c?.name ?? undefined,
    meta: __nuxt_page_meta$c || {},
    alias: __nuxt_page_meta$c?.alias || [],
    redirect: __nuxt_page_meta$c?.redirect || undefined,
    component: () => import('./_nuxt/_id_-1243b452.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$b?.name ?? "toko-bank-id",
    path: __nuxt_page_meta$b?.path ?? "/toko/bank/:id()",
    meta: __nuxt_page_meta$b || {},
    alias: __nuxt_page_meta$b?.alias || [],
    redirect: __nuxt_page_meta$b?.redirect || undefined,
    component: () => import('./_nuxt/_id_-ab8b53ca.mjs').then(m => m.default || m)
  },
  {
    name: "toko-create",
    path: "/toko/create",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/create-0c148554.mjs').then(m => m.default || m)
  },
  {
    name: "toko-edit-id",
    path: "/toko/edit/:id()",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/_id_-02d60383.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$a?.name ?? "toko",
    path: __nuxt_page_meta$a?.path ?? "/toko",
    meta: __nuxt_page_meta$a || {},
    alias: __nuxt_page_meta$a?.alias || [],
    redirect: __nuxt_page_meta$a?.redirect || undefined,
    component: () => import('./_nuxt/index-ca1623f8.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$9?.name ?? "toko-layanan-id",
    path: __nuxt_page_meta$9?.path ?? "/toko/layanan/:id()",
    meta: __nuxt_page_meta$9 || {},
    alias: __nuxt_page_meta$9?.alias || [],
    redirect: __nuxt_page_meta$9?.redirect || undefined,
    component: () => import('./_nuxt/_id_-af7c1477.mjs').then(m => m.default || m)
  },
  {
    path: __nuxt_page_meta$1?.path ?? "/wizard",
    children: [
  {
    name: __nuxt_page_meta$8?.name ?? "wizard",
    path: __nuxt_page_meta$8?.path ?? "",
    meta: __nuxt_page_meta$8 || {},
    alias: __nuxt_page_meta$8?.alias || [],
    redirect: __nuxt_page_meta$8?.redirect || undefined,
    component: () => import('./_nuxt/index-a551639e.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$7?.name ?? "wizard-step-2",
    path: __nuxt_page_meta$7?.path ?? "step-2",
    meta: __nuxt_page_meta$7 || {},
    alias: __nuxt_page_meta$7?.alias || [],
    redirect: __nuxt_page_meta$7?.redirect || undefined,
    component: () => import('./_nuxt/step-2-47c25c3c.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$6?.name ?? "wizard-step-3",
    path: __nuxt_page_meta$6?.path ?? "step-3",
    meta: __nuxt_page_meta$6 || {},
    alias: __nuxt_page_meta$6?.alias || [],
    redirect: __nuxt_page_meta$6?.redirect || undefined,
    component: () => import('./_nuxt/step-3-8e224fb6.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$5?.name ?? "wizard-step-4",
    path: __nuxt_page_meta$5?.path ?? "step-4",
    meta: __nuxt_page_meta$5 || {},
    alias: __nuxt_page_meta$5?.alias || [],
    redirect: __nuxt_page_meta$5?.redirect || undefined,
    component: () => import('./_nuxt/step-4-11b7cdcf.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$4?.name ?? "wizard-step-5",
    path: __nuxt_page_meta$4?.path ?? "step-5",
    meta: __nuxt_page_meta$4 || {},
    alias: __nuxt_page_meta$4?.alias || [],
    redirect: __nuxt_page_meta$4?.redirect || undefined,
    component: () => import('./_nuxt/step-5-ada39147.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$3?.name ?? "wizard-step-6",
    path: __nuxt_page_meta$3?.path ?? "step-6",
    meta: __nuxt_page_meta$3 || {},
    alias: __nuxt_page_meta$3?.alias || [],
    redirect: __nuxt_page_meta$3?.redirect || undefined,
    component: () => import('./_nuxt/step-6-55f46aa2.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$2?.name ?? "wizard-step-7",
    path: __nuxt_page_meta$2?.path ?? "step-7",
    meta: __nuxt_page_meta$2 || {},
    alias: __nuxt_page_meta$2?.alias || [],
    redirect: __nuxt_page_meta$2?.redirect || undefined,
    component: () => import('./_nuxt/step-7-d4052fb1.mjs').then(m => m.default || m)
  }
],
    name: __nuxt_page_meta$1?.name ?? undefined,
    meta: __nuxt_page_meta$1 || {},
    alias: __nuxt_page_meta$1?.alias || [],
    redirect: __nuxt_page_meta$1?.redirect || undefined,
    component: () => import('./_nuxt/wizard-62709325.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta?.name ?? "demos",
    path: __nuxt_page_meta?.path ?? "/demos",
    meta: __nuxt_page_meta || {},
    alias: __nuxt_page_meta?.alias || [],
    redirect: __nuxt_page_meta?.redirect || undefined,
    component: () => import('./_nuxt/demos-f15c3d90.mjs').then(m => m.default || m)
  }
];

const appPageTransition = {"enterActiveClass":"transition-opacity duration-200 ease-out","enterFromClass":"opacity-0","enterToClass":"opacity-100","leaveActiveClass":"transition-opacity duration-75 ease-in","leaveFromClass":"opacity-100","leaveToClass":"opacity-0"};

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appLayoutTransition = false;

const appKeepalive = false;

const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(from, to) {
  const samePageComponent = to.matched.every((comp, index) => comp.components?.default === from.matched[index]?.components?.default);
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(from.params) !== JSON.stringify(to.params)) {
    return true;
  }
  return false;
}

const configRouterOptions = {};
const routerOptions = {
...configRouterOptions,
...routerOptions0,
};

/* _processed_nuxt_unctx_transform */
const validate = /* #__PURE__ */ defineNuxtRouteMiddleware(async (to) => {let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  useRouter();
  const result = (([__temp,__restore]=executeAsync(()=>Promise.resolve(to.meta.validate(to)))),__temp=await __temp,__restore(),__temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});

const globalMiddleware = [
  validate
];
const namedMiddleware = {};

/* _processed_nuxt_unctx_transform */
const plugin = /* #__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {let __temp, __restore;
    let routerBase =  useRuntimeConfig().app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = routerOptions.history?.(routerBase) ?? (createMemoryHistory(routerBase));
    const routes = routerOptions.routes?.(_routes) ?? _routes;
    let startPosition;
    const initialURL = nuxtApp.ssrContext.url ;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior;
        return routerOptions.scrollBehavior?.(to, START_LOCATION, startPosition || savedPosition);
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;(([__temp,__restore]=executeAsync(()=>router.push(initialURL))),await __temp,__restore());;
      }
      ;(([__temp,__restore]=executeAsync(()=>router.isReady())),await __temp,__restore());;
    } catch (error2) {
(([__temp,__restore]=executeAsync(()=>nuxtApp.runWithContext(() => showError(error2)))),await __temp,__restore());    }
    const initialLayout = useState("_layout");
    router.beforeEach(async (to, from) => {
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout.value && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout.value;
      }
      nuxtApp._processingMiddleware = true;
      if (!nuxtApp.ssrContext?.islandContext) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          if (Array.isArray(componentMiddleware)) {
            for (const entry of componentMiddleware) {
              middlewareEntries.add(entry);
            }
          } else {
            middlewareEntries.add(componentMiddleware);
          }
        }
        for (const entry of middlewareEntries) {
          const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(() => {
      delete nuxtApp._processingMiddleware;
    });
    router.afterEach(async (to, _from, failure) => {
      delete nuxtApp._processingMiddleware;
      if (failure?.type === 4) {
        return;
      }
      if (to.matched.length === 0 && (!nuxtApp.ssrContext?.islandContext)) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`
        })));
      } else if (to.redirectedFrom && to.fullPath !== initialURL) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #4982
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});

const Vue3 = version.startsWith("3");

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__unhead_injection_handler__";
function injectHead() {
  if (globalKey in _global) {
    return _global[globalKey]();
  }
  const head = inject(headSymbol);
  if (!head && "production" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}

function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  getCurrentInstance();
  return entry;
}

const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});

function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}

const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_MZ6tcK7oWF = /* #__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});

const LazyDemoAccountMenu = defineAsyncComponent(() => import('./_nuxt/DemoAccountMenu-728b3fc6.mjs').then(r => r.default));

const LazyDemoCircularMenuActivity = defineAsyncComponent(() => import('./_nuxt/DemoCircularMenuActivity-c9663b6c.mjs').then(r => r.default));

const LazyDemoCircularMenuLanguage = defineAsyncComponent(() => import('./_nuxt/DemoCircularMenuLanguage-6cdaf1fd.mjs').then(r => r.default));

const LazyDemoCircularMenuNotifications = defineAsyncComponent(() => import('./_nuxt/DemoCircularMenuNotifications-7e47741b.mjs').then(r => r.default));

const LazyDemoCollapseNavigationFooter = defineAsyncComponent(() => import('./_nuxt/DemoCollapseNavigationFooter-a926517b.mjs').then(r => r.default));

const LazyDemoCollapseNavigationHeader = defineAsyncComponent(() => import('./_nuxt/DemoCollapseNavigationHeader-24b92ded.mjs').then(r => r.default));

const LazyDemoPanelActivity = defineAsyncComponent(() => import('./_nuxt/DemoPanelActivity-6f7f97e2.mjs').then(r => r.default));

const LazyDemoPanelLanguage = defineAsyncComponent(() => import('./_nuxt/DemoPanelLanguage-449581e7.mjs').then(r => r.default));

const LazyDemoPanelSearch = defineAsyncComponent(() => import('./_nuxt/DemoPanelSearch-80427672.mjs').then(r => r.default));

const LazyDemoPanelTask = defineAsyncComponent(() => import('./_nuxt/DemoPanelTask-4710f623.mjs').then(r => r.default));

const LazyDemoSubsidebarDashboards = defineAsyncComponent(() => import('./_nuxt/DemoSubsidebarDashboards-2600ab2a.mjs').then(r => r.default));

const LazyDemoSubsidebarLayouts = defineAsyncComponent(() => import('./_nuxt/DemoSubsidebarLayouts-6a16c59f.mjs').then(r => r.default));

const LazyDemoThemeToggle = defineAsyncComponent(() => import('./_nuxt/DemoThemeToggle-ad749b3c.mjs').then(r => r.default));

const LazyDemoToolbarAccountMenu = defineAsyncComponent(() => import('./_nuxt/DemoToolbarAccountMenu-1a6f23b4.mjs').then(r => r.default));

const LazyDemoToolbarActivity = defineAsyncComponent(() => import('./_nuxt/DemoToolbarActivity-8ebba6a1.mjs').then(r => r.default));

const LazyDemoToolbarCustomize = defineAsyncComponent(() => import('./_nuxt/DemoToolbarCustomize-5a2f7cb8.mjs').then(r => r.default));

const LazyDemoToolbarLanguage = defineAsyncComponent(() => import('./_nuxt/DemoToolbarLanguage-adfd5e27.mjs').then(r => r.default));

const LazyDemoToolbarNotifications = defineAsyncComponent(() => import('./_nuxt/DemoToolbarNotifications-ab3728ad.mjs').then(r => r.default));

const LazyDemoToolbarSearch = defineAsyncComponent(() => import('./_nuxt/DemoToolbarSearch-4c32cc7c.mjs').then(r => r.default));

const LazyDemoTopnavWorkspaceDropdown = defineAsyncComponent(() => import('./_nuxt/DemoTopnavWorkspaceDropdown-3d8ce20f.mjs').then(r => r.default));

const LazyLogoWaktoo = defineAsyncComponent(() => import('./_nuxt/Waktoo-8a990f48.mjs').then(r => r.default));

const LazyLogoWaktooCommerce = defineAsyncComponent(() => import('./_nuxt/WaktooCommerce-c00a4730.mjs').then(r => r.default));

const LazyLogoIcProduk = defineAsyncComponent(() => import('./_nuxt/ic_produk-aa7f6e85.mjs').then(r => r.default));

const LazyTairoLogo = defineAsyncComponent(() => import('./_nuxt/TairoLogo-a768bb4f.mjs').then(r => r.default));

const LazyTairoLogoText = defineAsyncComponent(() => Promise.resolve().then(function () { return TairoLogoText; }).then(r => r.default));

const LazyTairoToaster = defineAsyncComponent(() => Promise.resolve().then(function () { return TairoToaster; }).then(r => r.default));

const LazyTairoTocAnchor = defineAsyncComponent(() => import('./_nuxt/TairoTocAnchor-6f4827e8.mjs').then(r => r.default));

const LazyIcon = defineAsyncComponent(() => Promise.resolve().then(function () { return Icon; }).then(r => r.default));

const LazyIconCSS = defineAsyncComponent(() => import('./_nuxt/IconCSS-62a8acd8.mjs').then(r => r.default));

const lazyGlobalComponents = [
  ["DemoAccountMenu", LazyDemoAccountMenu],
["DemoCircularMenuActivity", LazyDemoCircularMenuActivity],
["DemoCircularMenuLanguage", LazyDemoCircularMenuLanguage],
["DemoCircularMenuNotifications", LazyDemoCircularMenuNotifications],
["DemoCollapseNavigationFooter", LazyDemoCollapseNavigationFooter],
["DemoCollapseNavigationHeader", LazyDemoCollapseNavigationHeader],
["DemoPanelActivity", LazyDemoPanelActivity],
["DemoPanelLanguage", LazyDemoPanelLanguage],
["DemoPanelSearch", LazyDemoPanelSearch],
["DemoPanelTask", LazyDemoPanelTask],
["DemoSubsidebarDashboards", LazyDemoSubsidebarDashboards],
["DemoSubsidebarLayouts", LazyDemoSubsidebarLayouts],
["DemoThemeToggle", LazyDemoThemeToggle],
["DemoToolbarAccountMenu", LazyDemoToolbarAccountMenu],
["DemoToolbarActivity", LazyDemoToolbarActivity],
["DemoToolbarCustomize", LazyDemoToolbarCustomize],
["DemoToolbarLanguage", LazyDemoToolbarLanguage],
["DemoToolbarNotifications", LazyDemoToolbarNotifications],
["DemoToolbarSearch", LazyDemoToolbarSearch],
["DemoTopnavWorkspaceDropdown", LazyDemoTopnavWorkspaceDropdown],
["LogoWaktoo", LazyLogoWaktoo],
["LogoWaktooCommerce", LazyLogoWaktooCommerce],
["LogoIcProduk", LazyLogoIcProduk],
["TairoLogo", LazyTairoLogo],
["TairoLogoText", LazyTairoLogoText],
["TairoToaster", LazyTairoToaster],
["TairoTocAnchor", LazyTairoTocAnchor],
["Icon", LazyIcon],
["IconCSS", LazyIconCSS]
];

const components_plugin_KR1HBZs4kY = /* #__PURE__ */ defineNuxtPlugin({
  name: 'nuxt:global-components',
  setup (nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component('Lazy' + name, component);
    }
  }
});

const unhead_jQ1eTA4i3J = /* #__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  setup(nuxtApp) {
    const createHead = createServerHead ;
    const head = createHead();
    head.push(appHead);
    nuxtApp.vueApp.use(head);
    {
      nuxtApp.ssrContext.renderMeta = async () => {
        const meta = await renderSSRHead(head);
        return {
          ...meta,
          bodyScriptsPrepend: meta.bodyTagsOpen,
          // resolves naming difference with NuxtMeta and Unhead
          bodyScripts: meta.bodyTags
        };
      };
    }
  }
});

const getDefault = () => null;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  const nuxt = useNuxtApp();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref(getCachedData() ?? options.default()),
      pending: ref(!hasCachedData()),
      error: toRef$1(nuxt.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxt.isHydrating && opts._initial !== false) && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", () => promise);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}

function useRequestEvent(nuxtApp = useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
function useRequestFetch() {
  const event = useNuxtApp().ssrContext?.event;
  return event?.$fetch || globalThis.$fetch;
}

const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref(cookies[name] ?? opts.default?.());
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(useRequestEvent()?.node.req.headers.cookie || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
/*! @__NO_SIDE_EFFECTS__ */
function  defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const resolveTrailingSlashBehavior = (to, resolve) => {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    const normalizeTrailingSlash = options.trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
    if (typeof to === "string") {
      return normalizeTrailingSlash(to, true);
    }
    const path = "path" in to ? to.path : resolve(to).path;
    return {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: normalizeTrailingSlash(path, true)
    };
  };
  return /* #__PURE__ */ defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        const path = props.to || props.href || "";
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, { acceptRelative: true });
      });
      const prefetched = ref(false);
      const el = void 0 ;
      const elRef = void 0 ;
      return () => {
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                // stub properties for compat with vue-router
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, slots.default?.());
      };
    }
  });
}
const __nuxt_component_1 = /* #__PURE__ */ defineNuxtLink({ componentName: "NuxtLink" });

function isObject$1(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject$1(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject$1(value) && isObject$1(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defuFn = createDefu((object, key, currentValue) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

const cfg0 = defineAppConfig({
  nuxtIcon: {},
  nui: {
    defaultShapes: {}
  },
  tairo: {
    title: "Waktoo Commerce",
    sidebar: {
      toolbar: {
        showNavBurger: true,
        tools: [
          {
            component: "DemoThemeToggle",
            props: {
              disableTransitions: true
            }
          },
          {
            component: "DemoToolbarLanguage"
          },
          {
            component: "DemoToolbarNotifications"
          },
          {
            component: "DemoToolbarActivity"
          },
          {
            component: "DemoToolbarAccountMenu"
          }
        ]
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: "DemoThemeToggle",
            props: {
              class: "ms-auto",
              disableTransitions: true,
              inverted: true
            }
          },
          {
            component: "DemoCircularMenuLanguage"
          },
          {
            component: "DemoCircularMenuNotifications"
          },
          {
            component: "DemoCircularMenuActivity"
          }
        ]
      },
      navigation: {
        logo: {
          component: "TairoLogo"
        },
        items: [
          {
            title: "Dashboards",
            to: "/dashboards",
            component: "img",
            props: {
              src: "https://res.cloudinary.com/daraki09f/image/upload/v1713948395/waktoo-commerce/icon-dashboard.svg",
              class: "img-icon-dashboard"
            }
          },
          {
            title: "Chanel",
            to: "/chanel",
            component: "img",
            props: {
              src: "https://res.cloudinary.com/daraki09f/image/upload/v1713950159/waktoo-commerce/icon_channel.svg",
              class: "img-icon-dashboard"
            }
          },
          {
            title: "Kontak",
            to: "/kontak",
            component: "img",
            props: {
              src: "https://res.cloudinary.com/daraki09f/image/upload/v1713948395/waktoo-commerce/icon-kontak.svg",
              class: "img-icon-dashboard"
            }
          },
          {
            title: "Produk",
            to: "/produk",
            component: "img",
            props: {
              src: "https://res.cloudinary.com/daraki09f/image/upload/v1713948395/waktoo-commerce/icon-produk.svg",
              class: "img-icon-dashboard"
            }
          },
          {
            title: "Shop Admin",
            to: "/shop-admin",
            component: "img",
            props: {
              src: "https://res.cloudinary.com/daraki09f/image/upload/v1713948395/waktoo-commerce/icon-produk.svg",
              class: "img-icon-dashboard"
            }
          },
          {
            title: "Kupon",
            to: "/kupon",
            component: "img",
            props: {
              src: "https://res.cloudinary.com/daraki09f/image/upload/v1713948395/waktoo-commerce/icon-kupon.svg",
              class: "img-icon-dashboard"
            }
          },
          {
            title: "Pengiriman",
            to: "/pengiriman",
            component: "img",
            props: {
              src: "https://res.cloudinary.com/daraki09f/image/upload/v1713948395/waktoo-commerce/icon-pengiriman.svg",
              class: "img-icon-dashboard"
            }
          },
          {
            title: "Inventaris",
            to: "/inventaris",
            component: "img",
            props: {
              src: "https://res.cloudinary.com/daraki09f/image/upload/v1713948395/waktoo-commerce/icon-inventaris.svg",
              class: "img-icon-dashboard"
            }
          },
          {
            title: "Laporan",
            to: "/laporan",
            component: "img",
            props: {
              src: "https://res.cloudinary.com/daraki09f/image/upload/v1713948395/waktoo-commerce/icon-laporan.svg",
              class: "img-icon-dashboard"
            }
          },
          {
            title: "Toko",
            to: "/toko/[id]/",
            component: "img",
            props: {
              src: "https://res.cloudinary.com/daraki09f/image/upload/v1713948395/waktoo-commerce/icon-pesan.svg",
              class: "img-icon-dashboard"
            }
          },
          {
            title: "Logout",
            to: "/logout",
            icon: {
              name: "mdi:logout",
              class: "text-waktoo-600 hover:text-waktoo-400 text-2xl"
            }
          },
          {
            title: "Bantuan",
            to: "/bantuan",
            component: "img",
            props: {
              src: "https://res.cloudinary.com/daraki09f/image/upload/v1713948395/waktoo-commerce/icon-bantuan.svg",
              class: "img-icon-dashboard"
            },
            position: "end"
          },
          {
            title: "Pengaturan",
            to: "/pengaturan",
            component: "img",
            props: {
              src: "https://res.cloudinary.com/daraki09f/image/upload/v1713948395/waktoo-commerce/icon-pengaturan.svg",
              class: "img-icon-dashboard"
            },
            position: "end"
          },
          {
            subsidebar: {
              component: "TairoSubsidebar"
            }
          }
        ]
      }
    },
    collapse: {
      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: true,
        tools: [
          {
            component: "DemoThemeToggle"
          },
          {
            component: "DemoToolbarLanguage"
          },
          {
            component: "DemoToolbarNotifications"
          },
          {
            component: "DemoToolbarActivity"
          },
          {
            component: "DemoToolbarAccountMenu"
          }
        ]
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: "DemoThemeToggle",
            props: {
              class: "ms-auto",
              disableTransitions: true,
              inverted: true
            }
          },
          {
            component: "DemoCircularMenuLanguage"
          },
          {
            component: "DemoCircularMenuNotifications"
          },
          {
            component: "DemoCircularMenuActivity"
          }
        ]
      },
      navigation: {
        enabled: true,
        header: {
          component: "DemoCollapseNavigationHeader"
        },
        footer: {
          component: "DemoCollapseNavigationFooter"
        }
      }
    },
    topnav: {
      navigation: {
        enabled: true,
        logo: {
          component: "TairoLogo",
          props: { class: "text-primary-600 h-10 w-10" }
        },
        header: {
          component: "DemoTopnavWorkspaceDropdown"
        }
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: "DemoThemeToggle",
            props: {
              class: "ms-auto",
              disableTransitions: true,
              inverted: true
            }
          },
          {
            component: "DemoCircularMenuLanguage"
          },
          {
            component: "DemoCircularMenuNotifications"
          },
          {
            component: "DemoCircularMenuActivity"
          }
        ]
      },
      toolbar: {
        enabled: true,
        showTitle: false,
        tools: [
          {
            component: "DemoThemeToggle",
            props: {
              disableTransitions: true
            }
          },
          {
            component: "DemoToolbarSearch"
          },
          {
            component: "DemoToolbarCustomize"
          },
          {
            component: "DemoToolbarNotifications"
          },
          {
            component: "DemoAccountMenu",
            props: {
              horizontal: true
            }
          }
        ]
      },
      footer: {
        enabled: true,
        logoSeparator: {
          component: "TairoLogo",
          props: { class: "text-primary-500 h-7 w-7" }
        },
        logo: {
          component: "TairoLogoText",
          props: {
            class: "text-muted-300 ltablet:mx-0 mx-auto h-4 transition-all duration-200 lg:mx-0"
          }
        },
        copyright: {
          name: "Css Ninja",
          to: "https://cssninja.io",
          since: "2018"
        },
        links: [
          {
            name: "Demo pages",
            to: "/demo"
          },
          {
            name: "Documentation",
            to: "/documentation"
          },
          {
            name: "Shuriken UI",
            to: "https://github.com/shuriken-ui",
            rel: "noopener",
            target: "_blank"
          },
          {
            name: "Support",
            to: "https://cssninja.io/faq/support",
            rel: "noopener",
            target: "_blank"
          }
        ]
      }
    },
    panels: [
      {
        name: "language",
        position: "right",
        component: "DemoPanelLanguage"
      },
      {
        name: "activity",
        position: "right",
        component: "DemoPanelActivity"
      },
      {
        name: "search",
        position: "left",
        component: "DemoPanelSearch"
      },
      {
        name: "task",
        position: "right",
        component: "DemoPanelTask"
      }
    ],
    error: {
      logo: {
        component: "img",
        props: {
          src: "/img/illustrations/system/404-1.svg",
          class: "relative z-20 w-full max-w-lg mx-auto"
        }
      }
    }
  }
});

const cfg1 = defineAppConfig({
  tairo: {
    sidebar: {
      circularMenu: {
        enabled: false,
        tools: []
      },
      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: false,
        tools: []
      },
      navigation: {
        enabled: true,
        startOpen: true,
        logo: {
          component: "TairoLogo",
          props: { class: "text-primary-600 h-10" }
        },
        items: []
      }
    }
  }
});

const cfg2 = defineAppConfig({
  tairo: {
    collapse: {
      navigation: {
        enabled: true,
        header: {
          component: ""
        },
        footer: {
          component: ""
        },
        items: []
      },
      circularMenu: {
        enabled: true,
        tools: []
      },
      toolbar: {
        enabled: true,
        showTitle: false,
        showNavBurger: false,
        tools: []
      }
    }
  }
});

const cfg3 = defineAppConfig({
  tairo: {
    topnav: {
      navigation: {
        enabled: true,
        logo: {
          component: "TairoLogo",
          props: { class: "text-primary-500 h-10 w-10" }
        },
        header: {
          component: void 0
        },
        items: []
      },
      circularMenu: {
        enabled: true,
        tools: []
      },
      toolbar: {
        enabled: true,
        showTitle: false,
        tools: []
      },
      footer: {
        enabled: false,
        logoSeparator: {
          component: "TairoLogo",
          props: { class: "text-primary-500 h-7 w-7" }
        },
        logo: {
          component: "TairoLogoText",
          props: {
            class: "text-muted-300 ltablet:mx-0 mx-auto h-4 transition-all duration-200 lg:mx-0"
          }
        },
        copyright: {
          name: "",
          to: "",
          since: ""
        },
        links: []
      }
    }
  }
});

const cfg4 = defineAppConfig({
  tairo: {
    title: "Tairo",
    error: {
      logo: {
        component: "TairoLogo",
        props: { class: "text-primary-500 mx-auto h-40 p-6" }
      }
    },
    panels: []
  },
  toaster: {
    duration: 6e3,
    dismissible: false,
    theme: {
      maxToasts: 1,
      containerClass: [
        "fixed",
        "inset-0",
        "pointer-events-none",
        "p-4",
        "flex",
        "flex-col-reverse",
        "overflow-hidden",
        "z-[200]",
        "items-center",
        "gap-2",
        "space-y-3"
      ],
      wrapperClass: [
        "pointer-events-auto",
        "focus:outline-none",
        "rounded",
        "outline-slate-300",
        "outline-offset-2",
        "focus:outline",
        "focus:outline-2",
        "focus-within:outline",
        "focus-within:outline-2"
      ],
      transition: {
        enterActiveClass: "transition duration-300 ease-out",
        enterFromClass: "transform translate-y-full opacity-0",
        enterToClass: "transform translate-y-0 opacity-100",
        leaveActiveClass: "transition duration-200 ease-in",
        leaveFromClass: "transform translate-y-0 opacity-100",
        leaveToClass: "transform translate-y-full opacity-0"
      }
    }
  }
});

const cfg5 = defineAppConfig({
  nui: {
    defaultShapes: {
      accordion: "rounded",
      autocompleteItem: "rounded",
      avatar: "full",
      button: "rounded",
      buttonAction: "rounded",
      buttonIcon: "rounded",
      buttonClose: "full",
      card: "rounded",
      dropdown: "rounded",
      iconBox: "rounded",
      input: "rounded",
      message: "curved",
      pagination: "rounded",
      progress: "full",
      prose: "rounded",
      tabSlider: "rounded",
      tag: "rounded"
    }
  }
});

const inlineConfig = {};

const __appConfig = /* #__PURE__ */ defuFn(cfg0, cfg1, cfg2, cfg3, cfg4, cfg5, inlineConfig);

function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig) ;
  }
  return nuxtApp._appConfig;
}

const preference = "system";

const plugin_server_bF8jDLQmKq = /* #__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const colorMode = useState("color-mode", () => reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({ htmlAttrs });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});

function createEventBus() {
  const queue = {};
  function on(name, callback) {
    queue[name] = queue[name] || [];
    queue[name].push(callback);
  }
  function off(name, callback) {
    if (queue[name]) {
      for (let i = 0; i < queue[name].length; i++) {
        if (queue[name][i] === callback) {
          queue[name].splice(i, 1);
          break;
        }
      }
    }
  }
  function emit(name, ...args) {
    if (queue[name]) {
      queue[name].forEach((callback) => {
        callback(...args);
      });
    }
  }
  return {
    queue,
    on,
    off,
    emit
  };
}

function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}

function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const isDef = (val) => typeof val !== "undefined";
const notNullish = (val) => val != null;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};

function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({ get: r, set: noop }))) : ref(r);
}

function tryOnBeforeMount(fn, sync = true) {
  if (getCurrentInstance())
      ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}

function tryOnBeforeUnmount(fn) {
  if (getCurrentInstance())
      ;
}

function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
      ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}

function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}

const defaultWindow = void 0;

function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window)
    return;
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window, "click", listener, { passive: true, capture }),
    useEventListener(window, "pointerdown", (e) => {
      const el = unrefElement(target);
      if (el)
        shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e);
    }, { passive: true }),
    detectIframe && useEventListener(window, "blur", (event) => {
      setTimeout(() => {
        var _a;
        const el = unrefElement(target);
        if (((_a = window.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window.document.activeElement)))
          handler(event);
      }, 0);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}

function createKeyPredicate(keyFilter) {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  return () => true;
}
function onKeyStroke(...args) {
  let key;
  let handler;
  let options = {};
  if (args.length === 3) {
    key = args[0];
    handler = args[1];
    options = args[2];
  } else if (args.length === 2) {
    if (typeof args[1] === "object") {
      key = true;
      handler = args[0];
      options = args[1];
    } else {
      key = args[0];
      handler = args[1];
    }
  } else {
    key = true;
    handler = args[0];
  }
  const {
    target = defaultWindow,
    eventName = "keydown",
    passive = false,
    dedupe = false
  } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (e.repeat && toValue(dedupe))
      return;
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}

function useMounted() {
  const isMounted = ref(false);
  if (getCurrentInstance()) ;
  return isMounted;
}

function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}

function useMediaQuery(query, options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = useSupported(() => window && "matchMedia" in window && "undefined".matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = watchEffect(() => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window.matchMedia(toValue(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  tryOnScopeDispose(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches;
}

function cloneFnJSON(source) {
  return JSON.parse(JSON.stringify(source));
}

function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0.1,
    window = defaultWindow,
    immediate = true
  } = options;
  const isSupported = useSupported(() => window && "IntersectionObserver" in window);
  const targets = computed(() => {
    const _target = toValue(target);
    return (Array.isArray(_target) ? _target : [_target]).map(unrefElement).filter(notNullish);
  });
  let cleanup = noop;
  const isActive = ref(immediate);
  const stopWatch = isSupported.value ? watch(
    () => [targets.value, unrefElement(root), isActive.value],
    ([targets2, root2]) => {
      cleanup();
      if (!isActive.value)
        return;
      if (!targets2.length)
        return;
      const observer = new IntersectionObserver(
        callback,
        {
          root: unrefElement(root2),
          rootMargin,
          threshold
        }
      );
      targets2.forEach((el) => el && observer.observe(el));
      cleanup = () => {
        observer.disconnect();
        cleanup = noop;
      };
    },
    { immediate, flush: "post" }
  ) : noop;
  const stop = () => {
    cleanup();
    stopWatch();
    isActive.value = false;
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    isActive,
    pause() {
      cleanup();
      isActive.value = false;
    },
    resume() {
      isActive.value = true;
    },
    stop
  };
}

function useVModel(props, key, emit, options = {}) {
  var _a, _b, _c;
  const {
    clone = false,
    passive = false,
    eventName,
    deep = false,
    defaultValue,
    shouldEmit
  } = options;
  const vm = getCurrentInstance();
  const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm)) || ((_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$emit) == null ? void 0 : _c.bind(vm == null ? void 0 : vm.proxy));
  let event = eventName;
  if (!key) {
    {
      key = "modelValue";
    }
  }
  event = event || `update:${key.toString()}`;
  const cloneFn = (val) => !clone ? val : typeof clone === "function" ? clone(val) : cloneFnJSON(val);
  const getValue = () => isDef(props[key]) ? cloneFn(props[key]) : defaultValue;
  const triggerEmit = (value) => {
    if (shouldEmit) {
      if (shouldEmit(value))
        _emit(event, value);
    } else {
      _emit(event, value);
    }
  };
  if (passive) {
    const initialValue = getValue();
    const proxy = ref(initialValue);
    let isUpdating = false;
    watch(
      () => props[key],
      (v) => {
        if (!isUpdating) {
          isUpdating = true;
          proxy.value = cloneFn(v);
          nextTick(() => isUpdating = false);
        }
      }
    );
    watch(
      proxy,
      (v) => {
        if (!isUpdating && (v !== props[key] || deep))
          triggerEmit(v);
      },
      { deep }
    );
    return proxy;
  } else {
    return computed({
      get() {
        return getValue();
      },
      set(value) {
        triggerEmit(value);
      }
    });
  }
}

function useWindowScroll({ window = defaultWindow } = {}) {
  if (!window) {
    return {
      x: ref(0),
      y: ref(0)
    };
  }
  const x = ref(window.scrollX);
  const y = ref(window.scrollY);
  useEventListener(
    window,
    "scroll",
    () => {
      x.value = window.scrollX;
      y.value = window.scrollY;
    },
    {
      capture: false,
      passive: true
    }
  );
  return { x, y };
}

function useNinjaPausableTimeout(callback, timeout) {
  const pausedAt = ref(0);
  const startedAt = ref(0);
  const remaining = ref(0);
  let timer;
  function stop() {
    if (!timer) {
      return;
    }
    clearTimeout(timer);
    timer = void 0;
  }
  function start() {
    pausedAt.value = 0;
    startedAt.value = Date.now();
    remaining.value = timeout ?? 0;
    stop();
    timer = setTimeout(callback, remaining.value);
  }
  function pause() {
    if (!startedAt.value || pausedAt.value) {
      return;
    }
    stop();
    pausedAt.value = Date.now();
  }
  function resume() {
    if (!pausedAt.value) {
      return;
    }
    stop();
    remaining.value -= pausedAt.value - startedAt.value;
    startedAt.value = Date.now();
    pausedAt.value = 0;
    timer = setTimeout(callback, remaining.value);
  }
  tryOnBeforeUnmount();
  return {
    pausedAt,
    startedAt,
    remaining,
    start,
    stop,
    pause,
    resume
  };
}

function useNinjaToasterContainer(_theme) {
  const theme = toRef(_theme);
  const container = ref(null);
  const containerId = computed(() => theme.value?.containerId ?? "nt-container");
  tryOnBeforeMount(() => {
    container.value = document.getElementById(containerId.value);
    if (!container.value) {
      container.value = document.createElement("div");
      container.value.id = containerId.value;
      document.body.appendChild(container.value);
    }
    if (theme.value?.containerClass) {
      container.value.className = Array.isArray(theme.value.containerClass) ? theme.value.containerClass.join(" ") : theme.value.containerClass;
    }
  });
  return {
    container,
    containerId
  };
}

const NinjaToasterStateKey = Symbol.for(
  "NinjaToasterState"
);
function createNinjaToasterState(state) {
  provide(NinjaToasterStateKey, state);
}
function useNinjaToasterState() {
  const state = inject(NinjaToasterStateKey);
  if (!state) {
    throw new Error("NinjaToasterState is not provided");
  }
  return state;
}
function useNinjaToasterProgress() {
  const state = useNinjaToasterState();
  const now = ref(Date.now());
  const endAt = computed(() => {
    return state.timer.startedAt.value + state.timer.remaining.value;
  });
  const closeIn = computed(() => {
    return now.value - endAt.value;
  });
  const percent = computed(() => {
    if (!state.duration) {
      return 0;
    }
    const ratio = 1 - Math.max(0, Math.abs(closeIn.value)) / state.duration;
    return Math.round(ratio * 1e3) / 1e3;
  });
  tryOnMounted(() => {
    setInterval(() => {
      if (!state.isHovered.value) {
        now.value = Date.now();
      }
    }, 16);
  });
  tryOnBeforeUnmount();
  return {
    percent,
    endAt,
    closeIn
  };
}

function createRenderQueue() {
  const queue = [];
  let timer;
  function add(item) {
    queue.push(item);
    if (!timer) {
      timer = setTimeout(next, 100);
    }
    return () => {
      remove(item);
    };
  }
  function remove(item) {
    const index = queue.indexOf(item);
    if (index !== -1) {
      queue.splice(index, 1);
    }
  }
  function clear() {
    queue.length = 0;
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  }
  function next() {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
    const firstElement = queue[0];
    if (!firstElement) {
      return;
    }
    if (!firstElement.until()) {
      timer = setTimeout(next, 100);
      return;
    }
    queue.shift();
    firstElement.callback();
    if (queue.length > 0) {
      timer = setTimeout(next, 100);
    }
  }
  return {
    add,
    remove,
    clear
  };
}

const NinjaToaster = /* #__PURE__ */ defineComponent({
  name: "NinjaToaster",
  props: {
    content: {
      type: [String, Number, Object, Function],
      required: true
    },
    duration: {
      type: Number,
      default: 5e3
    },
    theme: {
      type: Object,
      default: () => ({})
    },
    dismissible: {
      type: Boolean,
      default: true
    },
    pauseOnHover: {
      type: Boolean,
      default: true
    },
    queues: {
      type: Map,
      default: () => /* @__PURE__ */ new Map()
    },
    events: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["close", "click", "show"],
  setup(props, { emit }) {
    const theme = computed(() => {
      return defu(props.theme ?? {}, {
        containerClass: [],
        wrapperClass: [],
        containerId: "nt-container",
        maxToasts: Infinity,
        transition: void 0
      });
    });
    const { container, containerId } = useNinjaToasterContainer(theme);
    const timer = useNinjaPausableTimeout(() => {
      close();
    }, props.duration);
    const isHovered = ref(false);
    const isActive = ref(false);
    const unqueue = ref();
    const rootElement = ref();
    let queue;
    if (props.queues.has(containerId.value)) {
      queue = props.queues.get(containerId.value);
    } else {
      queue = createRenderQueue();
      props.queues.set(containerId.value, queue);
    }
    const content = computed(() => {
      return typeof props.content === "function" ? props.content() : props.content;
    });
    function toggleTimer(pause) {
      if (!props.pauseOnHover) {
        return;
      }
      if (pause) {
        timer.pause();
        return;
      }
      timer.resume();
    }
    function stopTimer() {
      timer.stop();
      unqueue.value?.();
    }
    function close() {
      stopTimer();
      isActive.value = false;
    }
    function onMouseover() {
      isHovered.value = true;
      toggleTimer(true);
    }
    function onMouseleave() {
      isHovered.value = false;
      toggleTimer(false);
    }
    function onFocus() {
      isHovered.value = true;
      toggleTimer(true);
    }
    function onBlur() {
      isHovered.value = false;
      toggleTimer(false);
    }
    function onClick(event) {
      emit("click", event);
      if (props.dismissible) {
        close();
      }
    }
    function onKeydown(event) {
      if (event.target !== event.currentTarget) {
        return;
      }
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }
      event.preventDefault();
      onClick(event);
    }
    function onAfterLeave(el) {
      emit("close");
      if (typeof theme.value?.transition?.onAfterLeave === "function") {
        theme.value?.transition.onAfterLeave(el);
      }
      if (typeof rootElement.value?.remove !== "undefined") {
        rootElement.value?.remove();
      } else {
        rootElement.value?.parentNode?.removeChild(rootElement.value);
      }
    }
    createNinjaToasterState({
      timer,
      duration: props.duration,
      isHovered,
      isActive,
      click: onClick,
      close
    });
    return () => {
      const wrapper = withDirectives(
        h(
          "div",
          {
            role: "alert",
            tabindex: 0,
            class: theme.value && Array.isArray(theme.value?.wrapperClass) ? theme.value.wrapperClass.join(" ") : theme.value?.wrapperClass,
            onMouseover,
            onMouseleave,
            onFocus,
            onBlur,
            onKeydown,
            onClick
          },
          h(Suspense, null, content.value)
        ),
        [[vShow, isActive.value]]
      );
      return h(
        Transition,
        {
          ref: rootElement,
          ...theme.value?.transition || {},
          onAfterLeave
        },
        () => wrapper
      );
    };
  }
});

function createElement() {
  {
    return null;
  }
}
function mountWithContext(app, component, props) {
  const el = createElement();
  if (el) {
    const vNode = h(component, props);
    if (app && app._context) {
      vNode.appContext = app._context;
    }
    render(vNode, el);
  }
}
function ensureClassesArray(theme) {
  if (theme?.containerClass && !Array.isArray(theme.containerClass)) {
    theme.containerClass = [theme.containerClass];
  }
  if (theme?.wrapperClass && !Array.isArray(theme.wrapperClass)) {
    theme.wrapperClass = [theme.wrapperClass];
  }
}
function createNinjaToaster(createProps = {}) {
  const events = createEventBus();
  const queues = /* @__PURE__ */ new Map();
  function showComponent(name, {
    props,
    children,
    options
  }) {
    const content = () => h(resolveComponent(name), props, children);
    return show({
      ...options,
      content
    });
  }
  function show(options) {
    const appConfigProps = useAppConfig()?.toaster;
    const app = useNuxtApp().vueApp;
    const userProps = typeof options === "string" || typeof options === "number" || typeof options === "function" ? { content: options } : options;
    ensureClassesArray(userProps?.theme);
    ensureClassesArray(createProps?.theme);
    ensureClassesArray(appConfigProps?.theme);
    const props = defu(
      userProps,
      createProps,
      appConfigProps
    );
    return new Promise((resolve) => {
      mountWithContext(app, NinjaToaster, {
        ...props,
        events,
        queues,
        onShow: (toast) => {
          resolve(toast);
          if (props.onShow) {
            props.onShow(toast);
          }
        }
      });
      {
        resolve({
          el: null,
          close: () => {
          }
        });
      }
    });
  }
  function clearAll() {
    events.emit("clear");
    queues.forEach((queue) => {
      queue.clear();
    });
    queues.clear();
  }
  function clear(theme) {
    const containerId = typeof theme === "string" ? theme : theme.containerId ?? "nt-container";
    events.emit(`clear-${containerId}`);
    if (queues.has(containerId)) {
      queues.get(containerId)?.clear();
    }
  }
  return {
    show,
    showComponent,
    clearAll,
    clear
  };
}

const plugin_f2WA7oH9Xj = /* #__PURE__ */ defineNuxtPlugin(() => {
  return {
    provide: {
      nt: createNinjaToaster()
    }
  };
});

const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "BaseCard",
  __ssrInlineRender: true,
  props: {
    shape: { default: void 0 },
    elevated: { type: Boolean, default: false },
    elevatedHover: { type: Boolean, default: false },
    color: { default: "white" }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.card);
    const shapeStyle = {
      straight: "",
      rounded: "nui-card-rounded",
      smooth: "nui-card-smooth",
      curved: "nui-card-curved"
    };
    const colorStyle = {
      white: "nui-card-white",
      "white-contrast": "nui-card-white-contrast",
      muted: "nui-card-muted",
      "muted-contrast": "nui-card-muted-contrast",
      primary: "nui-card-primary",
      info: "nui-card-info",
      success: "nui-card-success",
      warning: "nui-card-warning",
      danger: "nui-card-danger",
      none: ""
    };
    const classes = computed(() => [
      "nui-card",
      shape.value && shapeStyle[shape.value],
      colorStyle[props.color],
      props.elevated && "nui-card-shadow",
      props.elevatedHover && "nui-card-shadow-hover"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: unref(classes) }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/base/BaseCard.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$C = {};

function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "aria-hidden": "true",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6 6 18M6 6l12 12"></path></svg>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/icon/IconClose.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : undefined
};
const __nuxt_component_0$3 = /*#__PURE__*/_export_sfc(_sfc_main$C, [['ssrRender',_sfc_ssrRender$2]]);

const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "BaseButtonClose",
  __ssrInlineRender: true,
  props: {
    shape: { default: void 0 },
    color: { default: "default" }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(
      () => props.shape ?? appConfig.nui.defaultShapes?.buttonClose
    );
    const shapeStyle = {
      straight: "",
      rounded: "nui-button-rounded",
      smooth: "nui-button-smooth",
      curved: "nui-button-curved",
      full: "nui-button-full"
    };
    const colorStyle = {
      default: "nui-button-default",
      muted: "nui-button-muted",
      primary: "nui-button-primary",
      info: "nui-button-info",
      success: "nui-button-success",
      warning: "nui-button-warning",
      danger: "nui-button-danger",
      none: ""
    };
    const classes = computed(() => [
      "nui-button-close",
      shape.value && shapeStyle[shape.value],
      colorStyle[props.color]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconClose = __nuxt_component_0$3;
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: unref(classes)
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_IconClose, { class: "nui-button-icon" }, null, _parent));
      _push(`</button>`);
    };
  }
});

const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/base/BaseButtonClose.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};

const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const nuxtApp = useNuxtApp();
    const appConfig = useAppConfig();
    const state = useState("icons", () => ({}));
    const isFetching = ref(false);
    const iconName = computed(() => ((appConfig.nuxtIcon?.aliases || {})[props.name] || props.name).replace(/^i-/, ""));
    const icon = computed(() => state.value?.[iconName.value]);
    const component = computed(() => nuxtApp.vueApp.component(iconName.value));
    const sSize = computed(() => {
      if (!props.size && typeof appConfig.nuxtIcon?.size === "boolean" && !appConfig.nuxtIcon?.size) {
        return void 0;
      }
      const size = props.size || appConfig.nuxtIcon?.size || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    const className = computed(() => appConfig?.nuxtIcon?.class ?? "icon");
    async function loadIconComponent() {
      if (component.value) {
        return;
      }
      if (!state.value?.[iconName.value]) {
        isFetching.value = true;
        state.value[iconName.value] = await loadIcon(iconName.value).catch(() => void 0);
        isFetching.value = false;
      }
    }
    watch(() => iconName.value, loadIconComponent);
    !component.value && ([__temp, __restore] = withAsyncContext(() => loadIconComponent()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (isFetching.value) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: className.value,
          style: { width: sSize.value, height: sSize.value }
        }, _attrs))} data-v-19d8b417></span>`);
      } else if (icon.value) {
        _push(ssrRenderComponent(unref(Icon$1), mergeProps({
          icon: icon.value,
          class: className.value,
          width: sSize.value,
          height: sSize.value
        }, _attrs), null, _parent));
      } else if (component.value) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.value), mergeProps({
          class: className.value,
          width: sSize.value,
          height: sSize.value
        }, _attrs), null), _parent);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: className.value,
          style: { fontSize: sSize.value, lineHeight: sSize.value, width: sSize.value, height: sSize.value }
        }, _attrs))} data-v-19d8b417>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(__props.name)}`);
        }, _push, _parent);
        _push(`</span>`);
      }
    };
  }
});

const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt-icon@0.5.0_rollup@3.29.2_vue@3.3.4/node_modules/nuxt-icon/dist/runtime/Icon.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-19d8b417"]]);

const Icon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: __nuxt_component_2$1
});

const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "TairoToaster",
  __ssrInlineRender: true,
  props: {
    title: { default: void 0 },
    message: { default: void 0 },
    color: { default: "muted" },
    icon: { default: void 0 },
    closable: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const state = useNinjaToasterState();
    const { percent, closeIn, endAt } = useNinjaToasterProgress();
    const wrapperClasses = computed(() => {
      switch (props.color) {
        case "primary":
          return "dark:border-primary-800 border-primary-200";
        case "success":
          return "dark:border-success-800 border-success-200";
        case "danger":
          return "dark:border-danger-800 border-danger-200";
        case "warning":
          return "dark:border-warning-800 border-warning-200";
        case "info":
          return "dark:border-info-800 border-info-200";
        case "muted":
        default:
          return "dark:border-muted-800 border-muted-200";
      }
    });
    const progressClasses = computed(() => {
      switch (props.color) {
        case "primary":
          return "bg-primary-200 dark:bg-primary-900";
        case "success":
          return "bg-success-200 dark:bg-success-900";
        case "danger":
          return "bg-danger-200 dark:bg-danger-900";
        case "warning":
          return "bg-warning-200 dark:bg-warning-900";
        case "info":
          return "bg-info-200 dark:bg-info-900";
        case "muted":
        default:
          return "bg-muted-200 dark:bg-muted-900";
      }
    });
    const iconBgClasses = computed(() => {
      switch (props.color) {
        case "primary":
          return "bg-primary-50 dark:bg-primary-700";
        case "success":
          return "bg-success-50 dark:bg-success-700";
        case "danger":
          return "bg-danger-50 dark:bg-danger-700";
        case "warning":
          return "bg-warning-50 dark:bg-warning-700";
        case "info":
          return "bg-info-50 dark:bg-info-700";
        case "muted":
        default:
          return "bg-muted-50 dark:bg-muted-700";
      }
    });
    const iconClasses = computed(() => {
      switch (props.color) {
        case "primary":
          return "text-primary-400 dark:text-primary-50";
        case "success":
          return "text-success-400 dark:text-success-50";
        case "danger":
          return "text-danger-400 dark:text-danger-50";
        case "warning":
          return "text-warning-400 dark:text-warning-50";
        case "info":
          return "text-info-400 dark:text-info-50";
        case "muted":
        default:
          return "text-muted-400 dark:text-muted-50";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$D;
      const _component_BaseButtonClose = _sfc_main$B;
      const _component_Icon = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_BaseCard, mergeProps({
        class: ["dark:bg-muted-900 pointer-events-auto relative z-[200] flex border bg-white shadow-md", unref(wrapperClasses)]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute inset-x-0 bottom-0 h-1"${_scopeId}><div class="${ssrRenderClass([unref(progressClasses), "h-1 rounded-es-lg"])}" style="${ssrRenderStyle({
              width: `${unref(percent) * 100}%`
            })}"${_scopeId}></div></div>`);
            if (props.closable) {
              _push2(`<div class="absolute end-2 top-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonClose, {
                onClick: unref(state).close
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (props.icon) {
              _push2(`<div class="${ssrRenderClass([unref(iconBgClasses), "flex w-16 items-center justify-center rounded-s-lg"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: props.icon,
                class: ["h-6 w-6", unref(iconClasses)]
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="text-md min-w-[220px] max-w-xl py-4 pe-12 ps-8"${_scopeId}>`);
            if (props.title) {
              _push2(`<strong class="text-semibold font-heading maw-w-lg block truncate"${_scopeId}>${ssrInterpolate(props.title)}</strong>`);
            } else {
              _push2(`<!---->`);
            }
            if (props.message) {
              _push2(`<p class="text-muted-600 dark:text-muted-400 whitespace-pre-wrap"${_scopeId}>${ssrInterpolate(props.message)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "absolute inset-x-0 bottom-0 h-1" }, [
                createVNode("div", {
                  class: ["h-1 rounded-es-lg", unref(progressClasses)],
                  style: {
                    width: `${unref(percent) * 100}%`
                  }
                }, null, 6)
              ]),
              props.closable ? (openBlock(), createBlock("div", {
                key: 0,
                class: "absolute end-2 top-2"
              }, [
                createVNode(_component_BaseButtonClose, {
                  onClick: unref(state).close
                }, null, 8, ["onClick"])
              ])) : createCommentVNode("", true),
              props.icon ? (openBlock(), createBlock("div", {
                key: 1,
                class: ["flex w-16 items-center justify-center rounded-s-lg", unref(iconBgClasses)]
              }, [
                createVNode(_component_Icon, {
                  name: props.icon,
                  class: ["h-6 w-6", unref(iconClasses)]
                }, null, 8, ["name", "class"])
              ], 2)) : createCommentVNode("", true),
              createVNode("div", { class: "text-md min-w-[220px] max-w-xl py-4 pe-12 ps-8" }, [
                props.title ? (openBlock(), createBlock("strong", {
                  key: 0,
                  class: "text-semibold font-heading maw-w-lg block truncate"
                }, toDisplayString(props.title), 1)) : createCommentVNode("", true),
                props.message ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: "text-muted-600 dark:text-muted-400 whitespace-pre-wrap"
                }, toDisplayString(props.message), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/global/TairoToaster.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};

const TairoToaster = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _sfc_main$z
});

const plugin_L93bAIrZuZ = /* #__PURE__ */ defineNuxtPlugin(() => {
  const config =  useRuntimeConfig().public.auth;
  const cookie = useCookie("jwt-auth-nuxt-token", {
    expires: new Date(Date.now() + 12096e5),
    sameSite: "strict"
  });
  const authData = useState("data", () => cookie.value);
  watch(
    authData,
    () => {
      cookie.value = authData.value;
    },
    { deep: true }
  );
  addRouteMiddleware("auth", async () => {
    if (!cookie.value?.token) {
      return config.redirects.login;
    }
  });
  addRouteMiddleware("guest", async () => {
    if (cookie.value?.token) {
      return config.redirects.home;
    }
  });
  const setAuthData = (data) => {
    authData.value = {
      token: data.token,
      user: data.user
    };
  };
  const setAuthDataByToken = async (token) => {
    if (!config.endpoints.user) {
      console.log("No user auth endpoint configured in the config!");
      return;
    }
    try {
      const response = await wretch(config.baseUrl + config.endpoints.user).auth("Bearer " + token).post().json();
      const authData2 = {
        token,
        user: response.data.user
      };
      localStorage.setItem("token", token);
      setAuthData(authData2);
    } catch (error) {
      throw error.data;
    }
  };
  const setUser = (user) => {
    authData.value = {
      ...authData.value,
      user
    };
  };
  const setToken = (token) => {
    authData.value = {
      ...authData.value,
      token
    };
  };
  const clearAuthData = () => {
    useCookie("jwt-auth-nuxt-token").value = null;
  };
  const authorizedRequestHeaders = ref(
    authData.value?.token ? {
      Accept: "application/json",
      Authorization: "Bearer " + authData.value.token
    } : { Accept: "application/json" }
  );
  const setToaster = (toast) => {
    const { $nt } = useNuxtApp();
    $nt.show(
      () => h(_sfc_main$z, {
        title: toast.title,
        closable: toast.closable,
        icon: toast.icon,
        color: toast.color,
        message: toast.message
      })
    );
  };
  const api = wretch(config.baseUrl).options({
    credentials: "include"
  }).headers(authorizedRequestHeaders.value).errorType("json");
  const login = async (credentials, callback) => {
    if (!config.endpoints.login) {
      console.log("No login endpoint configured in the config!");
      return;
    }
    try {
      const response = await api.url(config.endpoints.login).post(credentials).unauthorized((err, req) => {
        const t = {
          title: "Unauthorized",
          closable: true,
          color: "danger",
          icon: "mdi:account-cancel",
          message: err.json?.message
        };
        setToaster(t);
      }).forbidden((err, req) => {
        const t = {
          title: "Forbidden",
          closable: true,
          color: "danger",
          icon: "mdi:account-cancel",
          message: err.json?.message
        };
        setToaster(t);
      }).internalError((err, req) => {
        const t = {
          title: "Internal Server Error",
          closable: true,
          color: "danger",
          icon: "mdi:server-off",
          message: err.json?.message
        };
        setToaster(t);
      }).badRequest((err, req) => {
        const t = {
          title: "Bad Request",
          closable: true,
          color: "danger",
          icon: "mdi:badupload-off",
          message: err.json?.message
        };
        setToaster(t);
      }).json();
      const token = response.data.credentials.access_token;
      setAuthDataByToken(token);
      if (callback !== void 0) {
        callback(response);
        return;
      }
      window.location.replace(config.redirects.home);
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async (callback) => {
    if (!config.endpoints.logout) {
      console.log("No logout endpoint configured in the config!");
      return;
    }
    try {
      const response = await fetch(config.endpoints.logout, {
        method: "POST"
      });
      if (callback !== void 0) {
        callback(response);
        return;
      }
    } catch (error) {
      console.log(error);
    } finally {
      clearAuthData();
      window.location.replace(config.redirects.home);
    }
  };
  const register = async (data, callback) => {
    if (!config.endpoints.register) {
      console.log("No signup endpoint configured in the config!");
      return;
    }
    try {
      const response = await api.url(config.endpoints.register).post(data).json();
      setUser(response.data.user);
      if (callback !== void 0) {
        callback(response);
        return;
      }
      window.location.replace(config.redirects.login);
    } catch (error) {
      throw error.data;
    }
  };
  return {
    provide: {
      jwtAuth: {
        setTokenAndUser: setAuthData,
        setUser,
        setToken,
        login,
        logout,
        register
      }
    }
  };
});

/* _processed_nuxt_unctx_transform */
const vue_axe_RbYD3MO140 = /* #__PURE__ */ defineNuxtPlugin(async (nuxtApp) => {  const VueAxePopup = /* #__PURE__ */ defineComponent({
    // @ts-ignore
    render: (_, { slots }) => slots ? slots.default() : null
  });
  nuxtApp.vueApp.component("VueAxePopup", VueAxePopup);
});

const directives_yBPzJQtdia = /* #__PURE__ */ defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.directive("focus", {
    mounted(el) {
      if (el && el.tabIndex === -1) {
        const focusable = el.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable) {
          focusable.focus();
        }
        return;
      }
      el.focus();
    }
  });
});

const plugins = [
  plugin,
  revive_payload_server_MZ6tcK7oWF,
  components_plugin_KR1HBZs4kY,
  unhead_jQ1eTA4i3J,
  plugin_server_bF8jDLQmKq,
  plugin_f2WA7oH9Xj,
  plugin_L93bAIrZuZ,
  vue_axe_RbYD3MO140,
  directives_yBPzJQtdia
];

const __default__ = {
  inheritAttrs: false
};
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "TairoModal",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    size: { default: "md" },
    shape: { default: "rounded" },
    footerAlign: { default: "end" },
    classes: { default: () => ({
      wrapper: "",
      dialog: ""
    }) }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const dialogClasses = computed(() => {
      const classes = [];
      if (props.classes.dialog) {
        if (Array.isArray(props.classes.dialog)) {
          classes.push(...props.classes.dialog);
        } else {
          classes.push(props.classes.dialog);
        }
      }
      switch (props.shape) {
        case "rounded":
          classes.push("rounded-lg");
          break;
        case "curved":
          classes.push("rounded-xl");
          break;
      }
      switch (props.size) {
        case "sm":
          classes.push("max-w-sm");
          break;
        case "md":
          classes.push("max-w-md");
          break;
        case "lg":
          classes.push("max-w-xl");
          break;
        case "xl":
          classes.push("max-w-2xl");
          break;
        case "2xl":
          classes.push("max-w-3xl");
          break;
        case "3xl":
          classes.push("max-w-5xl");
          break;
      }
      return classes;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TransitionRoot), mergeProps({
        appear: "",
        show: props.open,
        as: "template"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fixed inset-0 z-[9999] flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Dialog), {
              class: "relative z-[9999]",
              as: "div",
              onClose: ($event) => emit("close")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0"${_scopeId2}><div class="${ssrRenderClass([props.classes.wrapper, "flex min-h-full items-center justify-center p-4 text-center"])}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(DialogPanel), {
                          class: ["dark:bg-muted-800 w-full bg-white text-left align-middle shadow-xl transition-all rtl:text-right", unref(dialogClasses)]
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              ssrRenderSlot(_ctx.$slots, "header", {}, null, _push5, _parent5, _scopeId4);
                              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                              if ("footer" in _ctx.$slots) {
                                _push5(`<div class="${ssrRenderClass([[
                                  props.footerAlign === "center" && "justify-center",
                                  props.footerAlign === "end" && "justify-end",
                                  props.footerAlign === "between" && "justify-between"
                                ], "flex w-full items-center gap-x-2"])}"${_scopeId4}>`);
                                ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push5, _parent5, _scopeId4);
                                _push5(`</div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                renderSlot(_ctx.$slots, "header"),
                                renderSlot(_ctx.$slots, "default"),
                                "footer" in _ctx.$slots ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: ["flex w-full items-center gap-x-2", [
                                    props.footerAlign === "center" && "justify-center",
                                    props.footerAlign === "end" && "justify-end",
                                    props.footerAlign === "between" && "justify-between"
                                  ]]
                                }, [
                                  renderSlot(_ctx.$slots, "footer")
                                ], 2)) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogPanel), {
                            class: ["dark:bg-muted-800 w-full bg-white text-left align-middle shadow-xl transition-all rtl:text-right", unref(dialogClasses)]
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "header"),
                              renderSlot(_ctx.$slots, "default"),
                              "footer" in _ctx.$slots ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: ["flex w-full items-center gap-x-2", [
                                  props.footerAlign === "center" && "justify-center",
                                  props.footerAlign === "end" && "justify-end",
                                  props.footerAlign === "between" && "justify-between"
                                ]]
                              }, [
                                renderSlot(_ctx.$slots, "footer")
                              ], 2)) : createCommentVNode("", true)
                            ]),
                            _: 3
                          }, 8, ["class"])
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0" }, [
                      createVNode("div", {
                        class: ["flex min-h-full items-center justify-center p-4 text-center", props.classes.wrapper]
                      }, [
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "duration-200 ease-in",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), {
                              class: ["dark:bg-muted-800 w-full bg-white text-left align-middle shadow-xl transition-all rtl:text-right", unref(dialogClasses)]
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "header"),
                                renderSlot(_ctx.$slots, "default"),
                                "footer" in _ctx.$slots ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: ["flex w-full items-center gap-x-2", [
                                    props.footerAlign === "center" && "justify-center",
                                    props.footerAlign === "end" && "justify-end",
                                    props.footerAlign === "between" && "justify-between"
                                  ]]
                                }, [
                                  renderSlot(_ctx.$slots, "footer")
                                ], 2)) : createCommentVNode("", true)
                              ]),
                              _: 3
                            }, 8, ["class"])
                          ]),
                          _: 3
                        })
                      ], 2)
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "fixed inset-0 z-[9999] flex items-center justify-center" }, [
                createVNode(unref(Dialog), {
                  class: "relative z-[9999]",
                  as: "div",
                  onClose: ($event) => emit("close")
                }, {
                  default: withCtx(() => [
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0" }, [
                      createVNode("div", {
                        class: ["flex min-h-full items-center justify-center p-4 text-center", props.classes.wrapper]
                      }, [
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "duration-200 ease-in",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), {
                              class: ["dark:bg-muted-800 w-full bg-white text-left align-middle shadow-xl transition-all rtl:text-right", unref(dialogClasses)]
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "header"),
                                renderSlot(_ctx.$slots, "default"),
                                "footer" in _ctx.$slots ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: ["flex w-full items-center gap-x-2", [
                                    props.footerAlign === "center" && "justify-center",
                                    props.footerAlign === "end" && "justify-end",
                                    props.footerAlign === "between" && "justify-between"
                                  ]]
                                }, [
                                  renderSlot(_ctx.$slots, "footer")
                                ], 2)) : createCommentVNode("", true)
                              ]),
                              _: 3
                            }, 8, ["class"])
                          ]),
                          _: 3
                        })
                      ], 2)
                    ])
                  ]),
                  _: 3
                }, 8, ["onClose"])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoModal.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};

const _sfc_main$x = /* #__PURE__ */ defineComponent({
  props: {
    /**
     * The HTML tag to use for the wrapper
     *
     * @default div
     */
    as: {
      type: String,
      default: "div"
    },
    /**
     * Keys to trigger the next focusable element
     *
     * @default PageUp
     * @see https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
     */
    nextKeys: {
      type: [Array, String],
      default: "PageDown"
    },
    /**
     * Keys to trigger the previous focusable element
     *
     * @default PageDown
     */
    prevKeys: {
      type: [Array, String],
      default: "PageUp"
    },
    /**
     * Prevent the default behavior of the keys
     */
    prevent: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { slots }) {
    const wrapper = ref();
    function checkFocusables() {
    }
    onUpdated(checkFocusables);
    onKeyStroke(props.nextKeys, (event) => {
    });
    onKeyStroke(props.prevKeys, (event) => {
    });
    return () => h(props.as, { ref: wrapper }, slots?.default?.());
  }
});

const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/base/BaseFocusLoop.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};

const _sfc_main$w = {};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "nui-placeload animate-nui-placeload" }, _attrs))}></div>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/base/BasePlaceload.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : undefined
};
const __nuxt_component_0$2 = /*#__PURE__*/_export_sfc(_sfc_main$w, [['ssrRender',_sfc_ssrRender$1]]);

let lastId = 0;
function useNinjaId(id) {
  return computed(() => {
    const _id = typeof id === "function" ? id() : isRef(id) ? id.value : id;
    return _id ?? `ninja-input-${++lastId}`;
  });
}

const _sfc_main$v = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseInput",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: void 0 },
    modelModifiers: { default: () => ({}) },
    id: { default: void 0 },
    type: { default: "text" },
    shape: { default: void 0 },
    label: { default: void 0 },
    labelFloat: { type: Boolean },
    placeholder: { default: void 0 },
    icon: { default: void 0 },
    colorFocus: { type: Boolean },
    loading: { type: Boolean },
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
      rounded: "nui-input-rounded",
      smooth: "nui-input-smooth",
      curved: "nui-input-curved",
      full: "nui-input-full"
    };
    const sizeStyle = {
      sm: "nui-input-sm",
      md: "nui-input-md",
      lg: "nui-input-lg"
    };
    const contrastStyle = {
      default: "nui-input-default",
      "default-contrast": "nui-input-default-contrast",
      muted: "nui-input-muted",
      "muted-contrast": "nui-input-muted-contrast"
    };
    function looseToNumber(val) {
      const n = Number.parseFloat(val);
      return Number.isNaN(n) ? val : n;
    }
    const value = useVModel(
      props,
      "modelValue",
      (_, val) => {
        if (props.modelModifiers.number) {
          emits("update:modelValue", looseToNumber(val));
        } else if (props.modelModifiers.trim) {
          emits("update:modelValue", typeof val === "string" ? val.trim() : val);
        } else {
          emits("update:modelValue", val);
        }
      },
      {
        passive: true
      }
    );
    const inputRef = ref();
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: inputRef
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
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-input-wrapper", [
          contrastStyle[props.contrast],
          sizeStyle[props.size],
          unref(shape) && shapeStyle[unref(shape)],
          props.error && !props.loading && "nui-input-error",
          props.loading && "nui-input-loading",
          props.labelFloat && "nui-input-label-float",
          props.icon && "nui-has-icon",
          props.colorFocus && "nui-input-focus",
          props.classes?.wrapper
        ]]
      }, _attrs))}>`);
      if ("label" in _ctx.$slots && !props.labelFloat || props.label && !props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes.label, "nui-input-label"])}">`);
        ssrRenderSlot(_ctx.$slots, "label", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([props.classes?.outer, "nui-input-outer"])}"><div><input${ssrRenderAttrs((_temp0 = mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        type: props.type
      }, _ctx.$attrs, {
        class: ["nui-input", props.classes.input],
        placeholder: unref(placeholder)
      }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(value)))))}>`);
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
        _push(`<div class="nui-input-placeload">`);
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "nui-placeload" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.icon) {
        _push(`<div class="${ssrRenderClass([props.classes.icon, "nui-input-icon"])}">`);
        ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
          _push(ssrRenderComponent(_component_Icon, {
            name: props.icon,
            class: "nui-input-icon-inner"
          }, null, _parent));
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "action", {}, null, _push, _parent);
      _push(`</div>`);
      if (props.error && typeof props.error === "string") {
        _push(`<span class="${ssrRenderClass([props.classes?.error, "nui-input-error-text"])}">${ssrInterpolate(props.error)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/form/BaseInput.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};

function useNinjaMark(_text, _search, _classes) {
  const text = toRef(_text);
  const classes = toRef(_classes);
  const search = toRef(_search);
  return computed(() => {
    const txt = unref(text);
    const srch = unref(search);
    if (!txt) {
      return "";
    }
    if (!srch) {
      return escapeHtml(txt);
    }
    const regex = new RegExp(srch, "gi");
    return txt.replace(regex, (part) => {
      return `<mark class="${classes.value}">${escapeHtml(part)}</mark>`;
    });
  });
}

const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "DemoAppSearchResult",
  __ssrInlineRender: true,
  props: {
    to: {},
    title: {},
    subtitle: {},
    icon: {},
    search: {}
  },
  setup(__props) {
    const props = __props;
    const markedTitle = useNinjaMark(
      () => props.title,
      () => props.search,
      "nui-text-800 group-focus:text-primary-500 underline decoration-muted-500/40 group-focus:decoration-primary-500/40 group-hover:decoration-primary-500/40 group-hover:text-primary-500 dark:group-focus:text-primary-400 dark:group-hover:text-primary-400 bg-transparent"
    );
    const markedSubtitle = useNinjaMark(
      () => props.subtitle,
      () => props.search,
      "nui-text-500 bg-transparent underline decoration-muted-500/30"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "nui-focus hover:bg-muted-50 focus:bg-muted-50 dark:hover:bg-muted-900 dark:focus:bg-muted-900 group flex items-center rounded p-3",
        to: props.to
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex grow flex-col"${_scopeId}>`);
            if (props.title) {
              _push2(`<span class="nui-text-600 font-heading group-hover:text-primary-500 group-focus:text-primary-500 dark:group-hover:text-primary-400 dark:group-focus:text-primary-400 text-sm"${_scopeId}>${unref(markedTitle)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (props.subtitle) {
              _push2(`<span class="nui-text-400 line-clamp-1 text-sm"${_scopeId}>${unref(markedSubtitle)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (props.icon) {
              _push2(`<div class="shrink-0"${_scopeId}><img${ssrRenderAttr("src", props.icon)} class="h-8 w-8"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "flex grow flex-col" }, [
                props.title ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "nui-text-600 font-heading group-hover:text-primary-500 group-focus:text-primary-500 dark:group-hover:text-primary-400 dark:group-focus:text-primary-400 text-sm",
                  innerHTML: unref(markedTitle)
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                props.subtitle ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: "nui-text-400 line-clamp-1 text-sm",
                  innerHTML: unref(markedSubtitle)
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
              ]),
              props.icon ? (openBlock(), createBlock("div", {
                key: 0,
                class: "shrink-0"
              }, [
                createVNode("img", {
                  src: props.icon,
                  class: "h-8 w-8"
                }, null, 8, ["src"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoAppSearchResult.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};

const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "BaseText",
  __ssrInlineRender: true,
  props: {
    size: { default: "md" },
    weight: { default: "normal" },
    lead: { default: "normal" }
  },
  setup(__props) {
    const props = __props;
    const sizeStyle = {
      xs: "nui-content-xs",
      sm: "nui-content-sm",
      md: "nui-content-md",
      lg: "nui-content-lg",
      xl: "nui-content-xl",
      "2xl": "nui-content-2xl",
      "3xl": "nui-content-3xl",
      "4xl": "nui-content-4xl",
      "5xl": "nui-content-5xl",
      "6xl": "nui-content-6xl",
      "7xl": "nui-content-7xl",
      "8xl": "nui-content-8xl",
      "9xl": "nui-content-9xl"
    };
    const weightStyle = {
      light: "nui-weight-light",
      normal: "nui-weight-normal",
      medium: "nui-weight-medium",
      semibold: "nui-weight-semibold",
      bold: "nui-weight-bold",
      extrabold: "nui-weight-extrabold"
    };
    const leadStyle = {
      none: "nui-lead-none",
      tight: "nui-lead-tight",
      snug: "nui-lead-snug",
      normal: "nui-lead-normal",
      relaxed: "nui-lead-relaxed",
      loose: "nui-lead-loose"
    };
    const classes = computed(() => [
      "nui-text",
      sizeStyle[props.size],
      weightStyle[props.weight],
      leadStyle[props.lead]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({ class: unref(classes) }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p>`);
    };
  }
});

const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/base/BaseText.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};

const _sfc_main$s = {};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    class: "shrink-0",
    viewBox: "0 0 1524.6 500"
  }, _attrs))}><defs><path id="a" d="M180.5 391.1c-53-2.4-77.4-18-77.4-74.2V191.3h79.5V88.2h-79.5V1.7H0V321c0 119.2 69.5 168.6 180.5 168.8h2.1v-98.7h-2.1z"></path></defs><use xlink:href="#a" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd"></use><clipPath id="b"><use xlink:href="#a" class="overflow-visible"></use></clipPath><path fill="currentColor" d="M0 1.7h182.6v488.1H0z" clip-path="url(#b)"></path><defs><path id="c" d="M409.2 181.2c59.6 0 107.8 48.3 107.8 107.8 0 59.6-48.3 107.8-107.8 107.8-59.6 0-107.8-48.3-107.8-107.8s48.3-107.8 107.8-107.8m206.7-93h-98.5v43C486.2 98.3 443.2 79.6 394 79.6c-104.7 0-197.2 90.6-197.2 210.2 0 118.8 92.5 209.4 197.2 209.4 49.2 0 92.2-18.8 123.5-51.6v43H616V88.2z"></path></defs><use xlink:href="#c" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd"></use><clipPath id="d"><use xlink:href="#c" class="overflow-visible"></use></clipPath><path fill="currentColor" d="M196.8 79.6H616v419.7H196.8z" clip-path="url(#d)"></path><defs><path id="e" d="M674.2 88.2h103.2v402.5H674.2z"></path></defs><use xlink:href="#e" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd"></use><clipPath id="f"><use xlink:href="#e" class="overflow-visible"></use></clipPath><path fill="currentColor" d="M674.2 88.2h103.2v402.5H674.2z" clip-path="url(#f)"></path><defs><path id="g" d="M1047.4 80.4C913.8 64 834.8 143.7 834.8 257.8v232.9H938V257.8c0-57 43.8-92.2 109.4-80.5V80.4z"></path></defs><use xlink:href="#g" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd"></use><clipPath id="h"><use xlink:href="#g" class="overflow-visible"></use></clipPath><path fill="currentColor" d="M834.8 63.9h212.6v426.7H834.8z" clip-path="url(#h)"></path><defs><path id="i" d="M1270.4 181.2c59.6 0 107.8 48.3 107.8 107.8 0 59.6-48.3 107.8-107.8 107.8-59.6 0-107.8-48.3-107.8-107.8-.1-59.5 48.2-107.8 107.8-107.8m0-103.2c-116.5 0-211 94.5-211 211s94.5 211 211 211 211-94.5 211-211c0-25.2-4.4-49.5-12.6-71.9-5.2-14.4-16.9-24.2-32-26.9-45.1-7.9-82-39.7-97.1-81.9-5.2-14.5-16.8-24.3-31.9-27-12.1-2.1-24.6-3.3-37.4-3.3z"></path></defs><use xlink:href="#i" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd"></use><clipPath id="j"><use xlink:href="#i" class="overflow-visible"></use></clipPath><path fill="currentColor" d="M1059.4 78h422v422h-422z" clip-path="url(#j)"></path><defs><path id="k" d="M1458.8 0c36.3 0 65.8 29.5 65.8 65.8s-29.5 65.8-65.8 65.8-65.8-29.5-65.8-65.8S1422.4 0 1458.8 0"></path></defs><use xlink:href="#k" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd"></use><clipPath id="l"><use xlink:href="#k" class="overflow-visible"></use></clipPath><path fill="currentColor" d="M1393 0h131.6v131.6H1393z" clip-path="url(#l)"></path></svg>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("../layers/tairo/components/global/TairoLogoText.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : undefined
};
const __nuxt_component_5 = /*#__PURE__*/_export_sfc(_sfc_main$s, [['ssrRender',_sfc_ssrRender]]);

const TairoLogoText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: __nuxt_component_5
});

const macLikeRE = /Mac|iP/;
function useIsMacLike() {
  const isMac = ref(false);
  tryOnBeforeMount(() => {
    if (macLikeRE.test(navigator.platform)) {
      isMac.value = true;
    }
  });
  return readonly(isMac);
}
function useMetaKey() {
  const isMac = useIsMacLike();
  return computed(() => {
    return isMac.value ? "⌘" : "ctrl";
  });
}

const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "DemoAppSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const isMacLike = useIsMacLike();
    const isOpen = useState("search-open", () => false);
    const search = ref("");
    onKeyStroke("k", (event) => {
      const modifier = isMacLike.value ? event.metaKey : event.ctrlKey;
      if (modifier) {
        event.preventDefault();
        isOpen.value = !isOpen.value;
      }
    });
    const { data: contentDocs } = useAsyncData(
      () => {
        if (!search.value)
          return Promise.resolve([]);
        return queryContent().where({
          $and: [
            {
              _type: "markdown",
              _draft: false,
              _partial: false
            },
            {
              $or: [
                {
                  components: { $icontains: search.value }
                },
                {
                  title: { $regex: `/${search.value.replaceAll(" ", ".*")}/i` }
                },
                {
                  _path: { $regex: `/${search.value.replaceAll(" ", ".*")}/i` }
                }
              ]
            }
          ]
        }).limit(6).find().catch(() => []);
      },
      {
        watch: [search]
      }
    , '$KyeTl6nybl');
    const router = useRouter();
    const demoPages = computed(() => {
      if (!search.value)
        return [];
      const match = [];
      const searchRe = new RegExp(search.value, "i");
      function traverseRoutes(routes) {
        for (const route of routes) {
          if (route.children) {
            traverseRoutes(route.children);
          } else if (route.path.includes(":")) {
            continue;
          } else if (route.meta?.preview?.title && searchRe.test(route.meta?.preview?.title)) {
            match.push(route);
          } else if (route.meta?.preview?.description && searchRe.test(route.meta?.preview?.description)) {
            match.push(route);
          }
        }
      }
      traverseRoutes(router.options.routes);
      return match.slice(0, 6);
    });
    const contentDocsResults = computed(() => {
      const max = 6 - Math.min(demoPages.value.length, 3);
      return contentDocs.value?.slice(0, max);
    });
    const demoPagesResults = computed(() => {
      const max = 6 - Math.min(contentDocs.value?.length || 0, 3);
      return demoPages.value?.slice(0, max);
    });
    const hasResult = computed(
      () => Boolean(contentDocsResults.value?.length || demoPagesResults.value?.length)
    );
    function onClick() {
      isOpen.value = false;
    }
    const metaKey = useMetaKey();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoModal = _sfc_main$y;
      const _component_BaseFocusLoop = _sfc_main$x;
      const _component_BaseInput = _sfc_main$v;
      const _component_DemoAppSearchResult = _sfc_main$u;
      const _component_BaseText = _sfc_main$t;
      const _component_TairoLogoText = __nuxt_component_5;
      const _directive_focus = resolveDirective("focus");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoModal, {
        classes: {
          wrapper: "!items-start pt-20",
          dialog: "p-3 rounded-xl"
        },
        open: unref(isOpen),
        size: "md",
        onClose: ($event) => isOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseFocusLoop, {
              "next-keys": "ArrowDown",
              "prev-keys": "ArrowUp"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="px-2 pb-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInput, mergeProps({
                    type: "search",
                    shape: "curved",
                    icon: "lucide:search",
                    modelValue: unref(search),
                    "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                    placeholder: "Ex: button or analytics...",
                    "color-focus": ""
                  }, ssrGetDirectiveProps(_ctx, _directive_focus)), {
                    label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="flex w-full justify-between"${_scopeId3}><span${_scopeId3}>Search</span>`);
                        if (unref(hasResult)) {
                          _push4(`<span class="text-xs opacity-60"${_scopeId3}> navigate with <kbd${_scopeId3}>↑</kbd> and <kbd${_scopeId3}>↓</kbd></span>`);
                        } else if (!unref(search)) {
                          _push4(`<span class="text-xs opacity-60"${_scopeId3}> press <kbd${_scopeId3}>${ssrInterpolate(unref(metaKey))}</kbd> + <kbd${_scopeId3}>k</kbd> to open </span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "flex w-full justify-between" }, [
                            createVNode("span", null, "Search"),
                            unref(hasResult) ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-xs opacity-60"
                            }, [
                              createTextVNode(" navigate with "),
                              createVNode("kbd", null, "↑"),
                              createTextVNode(" and "),
                              createVNode("kbd", null, "↓")
                            ])) : !unref(search) ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-xs opacity-60"
                            }, [
                              createTextVNode(" press "),
                              createVNode("kbd", null, toDisplayString(unref(metaKey)), 1),
                              createTextVNode(" + "),
                              createVNode("kbd", null, "k"),
                              createTextVNode(" to open ")
                            ])) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (unref(contentDocsResults)?.length) {
                    _push3(`<div${_scopeId2}><div class="px-3 pt-2"${_scopeId2}><span class="nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider"${_scopeId2}> Documentation Hub </span></div><ul${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(contentDocsResults), (page) => {
                      _push3(`<li class=""${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_DemoAppSearchResult, {
                        to: page?._path,
                        search: unref(search),
                        title: page?.title,
                        subtitle: page?._path,
                        icon: page?.icon?.src,
                        onClick
                      }, null, _parent3, _scopeId2));
                      _push3(`</li>`);
                    });
                    _push3(`<!--]--></ul></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(demoPagesResults)?.length) {
                    _push3(`<div${_scopeId2}><div class="px-3 pt-2"${_scopeId2}><span class="nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider"${_scopeId2}> Demo Pages </span></div><ul${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(demoPagesResults), (page) => {
                      _push3(`<li class=""${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_DemoAppSearchResult, {
                        to: {
                          name: page?.name
                        },
                        search: unref(search),
                        title: page?.meta?.preview?.title,
                        subtitle: page?.meta?.preview?.description,
                        onClick
                      }, null, _parent3, _scopeId2));
                      _push3(`</li>`);
                    });
                    _push3(`<!--]--></ul></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", { class: "px-2 pb-2" }, [
                      withDirectives((openBlock(), createBlock(_component_BaseInput, {
                        type: "search",
                        shape: "curved",
                        icon: "lucide:search",
                        modelValue: unref(search),
                        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                        placeholder: "Ex: button or analytics...",
                        "color-focus": ""
                      }, {
                        label: withCtx(() => [
                          createVNode("span", { class: "flex w-full justify-between" }, [
                            createVNode("span", null, "Search"),
                            unref(hasResult) ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-xs opacity-60"
                            }, [
                              createTextVNode(" navigate with "),
                              createVNode("kbd", null, "↑"),
                              createTextVNode(" and "),
                              createVNode("kbd", null, "↓")
                            ])) : !unref(search) ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-xs opacity-60"
                            }, [
                              createTextVNode(" press "),
                              createVNode("kbd", null, toDisplayString(unref(metaKey)), 1),
                              createTextVNode(" + "),
                              createVNode("kbd", null, "k"),
                              createTextVNode(" to open ")
                            ])) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])), [
                        [_directive_focus]
                      ])
                    ]),
                    unref(contentDocsResults)?.length ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("div", { class: "px-3 pt-2" }, [
                        createVNode("span", { class: "nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider" }, " Documentation Hub ")
                      ]),
                      createVNode("ul", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(contentDocsResults), (page) => {
                          return openBlock(), createBlock("li", {
                            key: page?._path,
                            class: ""
                          }, [
                            createVNode(_component_DemoAppSearchResult, {
                              to: page?._path,
                              search: unref(search),
                              title: page?.title,
                              subtitle: page?._path,
                              icon: page?.icon?.src,
                              onClickPassive: onClick
                            }, null, 8, ["to", "search", "title", "subtitle", "icon"])
                          ]);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true),
                    unref(demoPagesResults)?.length ? (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode("div", { class: "px-3 pt-2" }, [
                        createVNode("span", { class: "nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider" }, " Demo Pages ")
                      ]),
                      createVNode("ul", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(demoPagesResults), (page) => {
                          return openBlock(), createBlock("li", {
                            key: page?.name,
                            class: ""
                          }, [
                            createVNode(_component_DemoAppSearchResult, {
                              to: {
                                name: page?.name
                              },
                              search: unref(search),
                              title: page?.meta?.preview?.title,
                              subtitle: page?.meta?.preview?.description,
                              onClickPassive: onClick
                            }, null, 8, ["to", "search", "title", "subtitle"])
                          ]);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col items-center py-3 text-center"${_scopeId}><div class="scale-[0.8]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "medium",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Search by`);
                } else {
                  return [
                    createTextVNode("Search by")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoLogoText, { class: "text-muted-400 mx-auto w-20" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(_component_BaseFocusLoop, {
                "next-keys": "ArrowDown",
                "prev-keys": "ArrowUp"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "px-2 pb-2" }, [
                    withDirectives((openBlock(), createBlock(_component_BaseInput, {
                      type: "search",
                      shape: "curved",
                      icon: "lucide:search",
                      modelValue: unref(search),
                      "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                      placeholder: "Ex: button or analytics...",
                      "color-focus": ""
                    }, {
                      label: withCtx(() => [
                        createVNode("span", { class: "flex w-full justify-between" }, [
                          createVNode("span", null, "Search"),
                          unref(hasResult) ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs opacity-60"
                          }, [
                            createTextVNode(" navigate with "),
                            createVNode("kbd", null, "↑"),
                            createTextVNode(" and "),
                            createVNode("kbd", null, "↓")
                          ])) : !unref(search) ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-xs opacity-60"
                          }, [
                            createTextVNode(" press "),
                            createVNode("kbd", null, toDisplayString(unref(metaKey)), 1),
                            createTextVNode(" + "),
                            createVNode("kbd", null, "k"),
                            createTextVNode(" to open ")
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])), [
                      [_directive_focus]
                    ])
                  ]),
                  unref(contentDocsResults)?.length ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("div", { class: "px-3 pt-2" }, [
                      createVNode("span", { class: "nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider" }, " Documentation Hub ")
                    ]),
                    createVNode("ul", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(contentDocsResults), (page) => {
                        return openBlock(), createBlock("li", {
                          key: page?._path,
                          class: ""
                        }, [
                          createVNode(_component_DemoAppSearchResult, {
                            to: page?._path,
                            search: unref(search),
                            title: page?.title,
                            subtitle: page?._path,
                            icon: page?.icon?.src,
                            onClickPassive: onClick
                          }, null, 8, ["to", "search", "title", "subtitle", "icon"])
                        ]);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true),
                  unref(demoPagesResults)?.length ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode("div", { class: "px-3 pt-2" }, [
                      createVNode("span", { class: "nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider" }, " Demo Pages ")
                    ]),
                    createVNode("ul", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(demoPagesResults), (page) => {
                        return openBlock(), createBlock("li", {
                          key: page?.name,
                          class: ""
                        }, [
                          createVNode(_component_DemoAppSearchResult, {
                            to: {
                              name: page?.name
                            },
                            search: unref(search),
                            title: page?.meta?.preview?.title,
                            subtitle: page?.meta?.preview?.description,
                            onClickPassive: onClick
                          }, null, 8, ["to", "search", "title", "subtitle"])
                        ]);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex flex-col items-center py-3 text-center" }, [
                createVNode("div", { class: "scale-[0.8]" }, [
                  createVNode(_component_BaseText, {
                    size: "xs",
                    weight: "medium",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Search by")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TairoLogoText, { class: "text-muted-400 mx-auto w-20" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoAppSearch.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};

const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "BaseHeading",
  __ssrInlineRender: true,
  props: {
    as: { default: "p" },
    size: { default: "xl" },
    weight: { default: "semibold" },
    lead: { default: "normal" }
  },
  setup(__props) {
    const props = __props;
    const sizeStyle = {
      xs: "nui-heading-xs",
      sm: "nui-heading-sm",
      md: "nui-heading-md",
      lg: "nui-heading-lg",
      xl: "nui-heading-xl",
      "2xl": "nui-heading-2xl",
      "3xl": "nui-heading-3xl",
      "4xl": "nui-heading-4xl",
      "5xl": "nui-heading-5xl",
      "6xl": "nui-heading-6xl",
      "7xl": "nui-heading-7xl",
      "8xl": "nui-heading-8xl",
      "9xl": "nui-heading-9xl"
    };
    const weightStyle = {
      light: "nui-weight-light",
      normal: "nui-weight-normal",
      medium: "nui-weight-medium",
      semibold: "nui-weight-semibold",
      bold: "nui-weight-bold",
      extrabold: "nui-weight-extrabold"
    };
    const leadStyle = {
      none: "nui-lead-none",
      tight: "nui-lead-tight",
      snug: "nui-lead-snug",
      normal: "nui-lead-normal",
      relaxed: "nui-lead-relaxed",
      loose: "nui-lead-loose"
    };
    const classes = computed(() => [
      "nui-heading",
      sizeStyle[props.size],
      weightStyle[props.weight],
      leadStyle[props.lead]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(props.as), mergeProps({ class: unref(classes) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});

const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/base/BaseHeading.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};

const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "BaseParagraph",
  __ssrInlineRender: true,
  props: {
    as: { default: "p" },
    size: { default: "md" },
    weight: { default: "normal" },
    lead: { default: "normal" }
  },
  setup(__props) {
    const props = __props;
    const sizeStyle = {
      xs: "nui-paragraph-xs",
      sm: "nui-paragraph-sm",
      md: "nui-paragraph-md",
      lg: "nui-paragraph-lg",
      xl: "nui-paragraph-xl",
      "2xl": "nui-paragraph-2xl",
      "3xl": "nui-paragraph-3xl",
      "4xl": "nui-paragraph-4xl",
      "5xl": "nui-paragraph-5xl",
      "6xl": "nui-paragraph-6xl",
      "7xl": "nui-paragraph-7xl",
      "8xl": "nui-paragraph-8xl",
      "9xl": "nui-paragraph-9xl"
    };
    const weightStyle = {
      light: "nui-weight-light",
      normal: "nui-weight-normal",
      medium: "nui-weight-medium",
      semibold: "nui-weight-semibold",
      bold: "nui-weight-bold",
      extrabold: "nui-weight-extrabold"
    };
    const leadStyle = {
      none: "nui-lead-none",
      tight: "nui-lead-tight",
      snug: "nui-lead-snug",
      normal: "nui-lead-normal",
      relaxed: "nui-lead-relaxed",
      loose: "nui-lead-loose"
    };
    const classes = computed(() => [
      "nui-paragraph",
      sizeStyle[props.size],
      weightStyle[props.weight],
      leadStyle[props.lead]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(props.as), mergeProps({ class: unref(classes) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});

const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/base/BaseParagraph.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};

const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "TairoCollapseNavigationCollapseLinks",
  __ssrInlineRender: true,
  props: {
    item: {},
    expanded: { type: Boolean }
  },
  emits: ["clicked"],
  setup(__props, { emit }) {
    const props = __props;
    const route = useRoute();
    const isActive = computed(() => {
      if (!props.item?.activePath) {
        return false;
      }
      return route.path.startsWith(props.item.activePath);
    });
    ref();
    const isOpen = ref(isActive.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2$1;
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group" }, _attrs))}><button class="${ssrRenderClass([props.expanded ? "gap-4 px-4" : "px-2 justify-center", "nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center rounded-lg py-3 transition-colors duration-300"])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: _ctx.item.icon.name,
        class: [[_ctx.item.icon.class, unref(isActive) && "text-primary-500"], "shrink-0"]
      }, null, _parent));
      _push(`<span class="${ssrRenderClass([[
        unref(isActive) && "text-primary-500",
        !props.expanded ? "hidden" : "block"
      ], "block whitespace-nowrap font-sans text-sm"])}">${ssrInterpolate(_ctx.item.name)}</span><span class="${ssrRenderClass([!props.expanded ? "hidden" : "flex", "ms-auto items-center justify-center"])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevron-up",
        class: ["h-4 w-4 transition-transform duration-200", !unref(isOpen) ? "rotate-180" : ""]
      }, null, _parent));
      _push(`</span></button>`);
      if (props.expanded) {
        _push(`<ul class="${ssrRenderClass([{
          "max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100": !unref(isOpen),
          "after:border-muted-200 max-h-max opacity-100": unref(isOpen)
        }, "border-muted-200 relative block ps-4"])}"><!--[-->`);
        ssrRenderList(props.item.children, (child) => {
          _push(`<li class="border-muted-300 dark:border-muted-700 ms-2 border-s-2 first:mt-2">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: child.to,
            "exact-active-class": "!border-primary-500 !text-primary-500 dark:!text-primary-500",
            class: "nui-focus text-muted-500 hover:text-muted-600 dark:text-muted-400/80 dark:hover:text-muted-200 relative -start-0.5 flex cursor-pointer items-center gap-2 border-s-2 border-transparent py-2 ps-4 transition-colors duration-300"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: child.icon.name,
                  class: [child.icon.class, "shrink-0"]
                }, null, _parent2, _scopeId));
                _push2(`<span class="${ssrRenderClass([[!props.expanded ? "hidden" : "block"], "whitespace-nowrap font-sans text-[0.85rem]"])}"${_scopeId}>${ssrInterpolate(child.name)}</span>`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: child.icon.name,
                    class: [child.icon.class, "shrink-0"]
                  }, null, 8, ["name", "class"]),
                  createVNode("span", {
                    class: ["whitespace-nowrap font-sans text-[0.85rem]", [!props.expanded ? "hidden" : "block"]]
                  }, toDisplayString(child.name), 3)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-collapse/components/TairoCollapseNavigationCollapseLinks.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};

const nativeComponent = ["img", "div"];
function resolveComponentOrNative(component) {
  if (nativeComponent.includes(component))
    return component;
  return resolveComponent(component);
}

function useTailwindColors() {
  const primary = ref("transparent") ;
  const success = ref("transparent") ;
  const info = ref("transparent") ;
  const warning = ref("transparent") ;
  const danger = ref("transparent") ;
  const yellow = ref("transparent") ;
  const title = ref("transparent") ;
  const subtitle = ref("transparent") ;
  return {
    primary,
    info,
    success,
    warning,
    danger,
    yellow,
    title,
    subtitle
  };
}
function useTailwindBreakpoints() {
  const xs = useMediaQuery("(max-width: 639px)");
  const sm = useMediaQuery("(min-width: 640px)");
  const md = useMediaQuery("(min-width: 768px)");
  const lg = useMediaQuery("(min-width: 1025px)");
  const ptablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)"
  );
  const ltablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)"
  );
  const xl = useMediaQuery("(min-width: 1280px)");
  const doublexl = useMediaQuery("(min-width: 1536px)");
  return {
    xs,
    sm,
    md,
    lg,
    ptablet,
    ltablet,
    xl,
    doublexl
  };
}

function useCollapse() {
  const app = useAppConfig();
  const menuItems = computed(() => {
    if (app.tairo.collapse?.navigation?.enabled === false || app.tairo.collapse?.navigation?.items?.length === 0) {
      return [];
    }
    return app.tairo.collapse?.navigation?.items?.map(
      (navigation) => ({
        ...navigation,
        position: navigation.position ?? "start"
      })
    );
  });
  const isOpen = useState("collapse-open", () => true);
  const isMobileOpen = useState("collapse-mobile-open", () => false);
  const header = computed(() => {
    return app.tairo.collapse?.navigation?.header;
  });
  const footer = computed(() => {
    return app.tairo.collapse?.navigation?.footer;
  });
  function toggle() {
    const { lg } = useTailwindBreakpoints();
    if (lg.value) {
      isOpen.value = !isOpen.value;
    } else {
      isMobileOpen.value = !isMobileOpen.value;
    }
  }
  return {
    toggle,
    menuItems,
    isOpen,
    isMobileOpen,
    header,
    footer
  };
}

const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "TairoCollapseNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const { isOpen, isMobileOpen, menuItems } = useCollapse();
    const app = useAppConfig();
    const startMenuItems = computed(
      () => menuItems.value?.filter(
        (sidebar) => !sidebar.position || sidebar.position === "start"
      )
    );
    const endMenuItems = computed(
      () => menuItems.value?.filter((sidebar) => sidebar.position === "end")
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoCollapseNavigationCollapseLinks = _sfc_main$o;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_Icon = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["dark:bg-muted-800 border-muted-200 dark:border-muted-700 fixed start-0 top-0 z-[60] flex h-full flex-col border-r bg-white transition-all duration-300", [
          !unref(isOpen) ? "w-[80px]" : "w-[280px]",
          unref(isMobileOpen) ? "translate-x-0 lg:translate-x-0" : "-translate-x-full lg:translate-x-0"
        ]]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "header", {}, () => {
        if (unref(app).tairo.collapse?.navigation?.header?.component) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(
            ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
              unref(app).tairo.collapse?.navigation?.header?.component
            )
          ), null, null), _parent);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="${ssrRenderClass([!unref(isOpen) ? "px-4" : "px-6", "nui-slimscroll relative flex w-full grow flex-col overflow-y-auto py-6"])}">`);
      if (unref(startMenuItems)?.length) {
        _push(`<ul class="space-y-2"><!--[-->`);
        ssrRenderList(unref(startMenuItems), (item, index) => {
          _push(`<li>`);
          if (item?.component?.name) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(item?.component?.name)), item?.component?.props, null), _parent);
          } else if (item.children) {
            _push(ssrRenderComponent(_component_TairoCollapseNavigationCollapseLinks, {
              item,
              expanded: unref(isOpen),
              onClicked: ($event) => isOpen.value = true
            }, null, _parent));
          } else if (item.to) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: item.to,
              "exact-active-class": "!bg-primary-500/10 dark:!bg-primary-500/20 !text-primary-500 dark:!text-primary-500",
              class: ["nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300", !unref(isOpen) ? "px-1 justify-center" : "px-4"]
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: item.icon.name,
                    class: item.icon.class
                  }, null, _parent2, _scopeId));
                  _push2(`<span class="${ssrRenderClass([!unref(isOpen) ? "hidden" : "block", "whitespace-nowrap font-sans text-sm"])}"${_scopeId}>${ssrInterpolate(item.name)}</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: item.icon.name,
                      class: item.icon.class
                    }, null, 8, ["name", "class"]),
                    createVNode("span", {
                      class: ["whitespace-nowrap font-sans text-sm", !unref(isOpen) ? "hidden" : "block"]
                    }, toDisplayString(item.name), 3)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else if (item.divider) {
            _push(`<div class="border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t"></div>`);
          } else {
            _push(`<button class="${ssrRenderClass([!unref(isOpen) ? "px-1 justify-center" : "px-4", "nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300"])}">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: item.icon.name,
              class: item.icon.class
            }, null, _parent));
            _push(`<span class="${ssrRenderClass([!unref(isOpen) ? "hidden" : "block", "whitespace-nowrap font-sans text-sm"])}">${ssrInterpolate(item.name)}</span></button>`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-2 grow"></div>`);
      if (unref(endMenuItems)?.length) {
        _push(`<ul class="space-y-2"><!--[-->`);
        ssrRenderList(unref(endMenuItems), (item, index) => {
          _push(`<li>`);
          if (item?.component?.name) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(item?.component?.name)), item?.component?.props, null), _parent);
          } else if (item.children) {
            _push(ssrRenderComponent(_component_TairoCollapseNavigationCollapseLinks, {
              item,
              expanded: unref(isOpen),
              onClicked: ($event) => isOpen.value = true
            }, null, _parent));
          } else if (item.to) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: item.to,
              "exact-active-class": "!bg-primary-500/10 dark:!bg-primary-500/20 !text-primary-500 dark:!text-primary-500",
              class: ["nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300", !unref(isOpen) ? "px-1 justify-center" : "px-4"]
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: item.icon.name,
                    class: item.icon.class
                  }, null, _parent2, _scopeId));
                  _push2(`<span class="${ssrRenderClass([!unref(isOpen) ? "hidden" : "block", "whitespace-nowrap font-sans text-sm"])}"${_scopeId}>${ssrInterpolate(item.name)}</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: item.icon.name,
                      class: item.icon.class
                    }, null, 8, ["name", "class"]),
                    createVNode("span", {
                      class: ["whitespace-nowrap font-sans text-sm", !unref(isOpen) ? "hidden" : "block"]
                    }, toDisplayString(item.name), 3)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else if (item.divider) {
            _push(`<div class="border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t"></div>`);
          } else {
            _push(`<button class="${ssrRenderClass([!unref(isOpen) ? "px-1 justify-center" : "px-4", "nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300"])}">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: item.icon.name,
              class: item.icon.class
            }, null, _parent));
            _push(`<span class="${ssrRenderClass([!unref(isOpen) ? "hidden" : "block", "whitespace-nowrap font-sans text-sm"])}">${ssrInterpolate(item.name)}</span></button>`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
        if (unref(app).tairo.collapse?.navigation?.footer?.component) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(
            ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
              unref(app).tairo.collapse?.navigation?.footer?.component
            )
          ), null, null), _parent);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-collapse/components/TairoCollapseNavigation.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};

const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "TairoCollapseBurger",
  __ssrInlineRender: true,
  setup(__props) {
    const { isOpen, isMobileOpen, toggle } = useCollapse();
    const { lg } = useTailwindBreakpoints();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "flex h-10 w-10 items-center justify-center"
      }, _attrs))}><div class="${ssrRenderClass([[
        unref(isOpen) && unref(lg) ? "scale-90" : "",
        unref(isMobileOpen) && !unref(lg) ? "scale-90" : ""
      ], "relative h-5 w-5"])}"><span class="${ssrRenderClass([[
        unref(isOpen) && unref(lg) ? "top-1 max-w-[75%] -rotate-45 rtl:rotate-45" : "top-0.5",
        unref(isMobileOpen) && !unref(lg) ? "top-1 max-w-[75%] -rotate-45 rtl:rotate-45" : "top-0.5"
      ], "bg-primary-500 absolute block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([[
        unref(isOpen) && unref(lg) ? "translate-x-4 opacity-0 rtl:-translate-x-4" : "",
        unref(isMobileOpen) && !unref(lg) ? "translate-x-4 opacity-0  rtl:-translate-x-4" : ""
      ], "bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300"])}"></span><span class="${ssrRenderClass([[
        unref(isOpen) && unref(lg) ? "bottom-1 max-w-[75%] rotate-45 rtl:-rotate-45" : "bottom-0",
        unref(isMobileOpen) && !unref(lg) ? "bottom-1 max-w-[75%] rotate-45 rtl:-rotate-45" : "bottom-0"
      ], "bg-primary-500 absolute block h-0.5 w-full transition-all duration-300"])}"></span></div></button>`);
    };
  }
});

const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-collapse/components/TairoCollapseBurger.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};

const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "TairoCollapseToolbar",
  __ssrInlineRender: true,
  props: {
    collapse: { type: Boolean, default: true },
    horizontalScroll: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const app = useAppConfig();
    const route = useRoute();
    const showNavBurger = computed(() => {
      return props.collapse && app.tairo.collapse?.toolbar?.showNavBurger;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoCollapseBurger = _sfc_main$m;
      const _component_BaseHeading = _sfc_main$q;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative z-50 mb-5 flex h-16 items-center gap-2", props.horizontalScroll && "pe-4 xl:pe-10"]
      }, _attrs))}>`);
      if (unref(showNavBurger)) {
        _push(ssrRenderComponent(_component_TairoCollapseBurger, { class: "-ms-3" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(app).tairo.collapse?.toolbar?.showTitle) {
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h1",
          size: "2xl",
          weight: "light",
          class: "text-muted-800 hidden dark:text-white md:block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(unref(route).meta.title)}`);
              }, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "title", {}, () => [
                  createTextVNode(toDisplayString(unref(route).meta.title), 1)
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="ms-auto"></div><!--[-->`);
      ssrRenderList(unref(app).tairo.collapse?.toolbar?.tools, (tool) => {
        _push(`<!--[-->`);
        if (tool.component) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), mergeProps({
            key: tool.component
          }, tool.props), null), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});

const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-collapse/components/TairoCollapseToolbar.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};

function usePanels() {
  const app = useAppConfig();
  const panels = computed(
    () => app.tairo?.panels?.map((panel) => ({
      ...panel,
      position: panel.position ?? "left",
      overlay: panel.overlay ?? true
    })) ?? []
  );
  const currentName = useState("panels-current-name", () => "");
  const transitionFrom = useState("panels-transition-from", () => "left");
  const showOverlay = useState("panels-overlay", () => true);
  const currentProps = useState("panels-current-props", () => ({}));
  const current = computed(() => {
    if (!currentName.value) {
      return void 0;
    }
    return panels.value.find((panel) => panel.name === currentName.value);
  });
  function open(name, props) {
    const panel = panels.value.find(({ name: panelName }) => panelName === name);
    if (panel) {
      transitionFrom.value = panel.position;
      currentName.value = panel.name;
      showOverlay.value = panel.overlay;
      currentProps.value = defu(props ?? {}, panel.props ?? {});
    }
  }
  function close() {
    currentName.value = "";
  }
  return {
    panels,
    current,
    transitionFrom,
    currentProps,
    showOverlay,
    open,
    close
  };
}

const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "TairoPanels",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      panels,
      current,
      transitionFrom,
      currentProps,
      showOverlay,
      open,
      close
    } = usePanels();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      ssrRenderSlotInner(_ctx.$slots, "default", {
        panels: unref(panels),
        current: unref(current),
        transitionFrom: unref(transitionFrom),
        currentProps: unref(currentProps),
        showOverlay: unref(showOverlay),
        open: unref(open),
        close: unref(close)
      }, () => {
        ssrRenderSuspense(_push, {
          default: () => {
            if (unref(current)?.component) {
              ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(current).component)), mergeProps(unref(currentProps), {
                class: ["fixed top-0 z-[100] h-full w-96", [unref(current).position === "left" ? "start-0" : "end-0"]]
              }), null), _parent);
            } else {
              _push(`<!---->`);
            }
          },
          _: 1
        });
      }, _push, _parent, null, true);
      _push(`<div class="${ssrRenderClass([
        unref(current) && unref(showOverlay) ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        "bg-muted-800/60 fixed start-0 top-0 z-[99] h-full w-full cursor-pointer transition-opacity duration-300"
      ])}"></div></div>`);
    };
  }
});

const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoPanels.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};

function useNinjaWindowScroll() {
  const x = ref(0);
  const y = ref(0);
  return { x, y };
}

const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "TairoCollapseCircularMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useNinjaWindowScroll();
    const app = useAppConfig();
    const isOpened = ref(false);
    const isScrolled = computed(() => {
      if (y.value < 60) {
        isOpened.value = false;
      }
      return y.value > 60;
    });
    const toolOffsets = [
      "translate-x-[-6.5em] rtl:translate-x-[6.5em] translate-y-[-0.25em]",
      "translate-x-[-5.75em] rtl:translate-x-[5.75em] translate-y-[3em]",
      "translate-x-[-3.15em] rtl:translate-x-[3.15em] translate-y-[5.5em]",
      "translate-x-[0em] translate-y-[6.5em]"
    ];
    const tools = computed(() => {
      return app.tairo.collapse?.circularMenu?.tools?.slice(0, 4) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["after:bg-primary-600 after:shadow-primary-500/50 dark:after:shadow-muted-800/10 fixed end-[1em] top-[0.6em] z-[90] transition-transform duration-300 after:absolute after:right-0 after:top-0 after:block after:h-12 after:w-12 after:rounded-full after:shadow-lg after:transition-transform after:duration-300 after:content-['']", [
          unref(isOpened) ? "after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)] after:scale-[5.5]" : "",
          unref(isScrolled) ? "" : "-translate-y-24"
        ]]
      }, _attrs))}><button type="button" class="bg-primary-500 shadow-primary-500/50 dark:shadow-muted-800/10 relative z-30 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg"><span class="${ssrRenderClass([unref(isOpened) ? "scale-90 top-0" : "-top-0.5", "relative block h-3 w-3 transition-all duration-300"])}"><span class="${ssrRenderClass([unref(isOpened) ? "-rotate-45 top-1" : "top-0.5", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "opacity-0 translate-x-4" : "", "bg-muted-50 absolute top-1/2 block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "rotate-45 bottom-1.5" : "bottom-0", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span></span></button><div><!--[-->`);
      ssrRenderList(unref(tools), (tool, idx) => {
        _push(`<!--[-->`);
        if (tool.component) {
          _push(`<div class="${ssrRenderClass([unref(isOpened) ? toolOffsets[idx] : "translate-x-0 translate-y-0", "absolute right-[0.2em] top-[0.2em] z-20 flex items-center justify-center transition-all duration-300"])}">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), tool.props, null), _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});

const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-collapse/components/TairoCollapseCircularMenu.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};

const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "TairoCollapseLayout",
  __ssrInlineRender: true,
  props: {
    collapse: { type: Boolean, default: true },
    toolbar: { type: Boolean, default: true },
    circularMenu: { type: Boolean, default: true },
    condensed: { type: Boolean },
    horizontalScroll: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const app = useAppConfig();
    const { isOpen, isMobileOpen, toggle } = useCollapse();
    const collapseEnabled = computed(() => {
      return app.tairo.collapse?.navigation?.enabled !== false && props.collapse !== false;
    });
    const toolbarEnabled = computed(() => {
      return app.tairo.collapse?.toolbar?.enabled !== false && props.toolbar !== false;
    });
    const circularMenuEnabled = computed(() => {
      return app.tairo.collapse?.circularMenu?.enabled !== false && props.circularMenu !== false;
    });
    const mainClass = computed(() => {
      if (props.condensed) {
        return "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden";
      }
      if (!collapseEnabled.value) {
        return "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10";
      }
      const list = [
        "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10"
      ];
      if (isOpen.value) {
        list.push("lg:max-w-[calc(100%_-_280px)] lg:ms-[280px]");
      } else {
        list.push("lg:max-w-[calc(100%_-_80px)] lg:ms-[80px]");
      }
      if (props.horizontalScroll) {
        list.push("!pe-0 xl:!pe-0");
      }
      return list;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoCollapseNavigation = _sfc_main$n;
      const _component_TairoCollapseToolbar = _sfc_main$l;
      const _component_TairoPanels = _sfc_main$k;
      const _component_TairoCollapseCircularMenu = _sfc_main$j;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-muted-100 dark:bg-muted-900 pb-20" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "navigation", {}, () => {
        if (unref(collapseEnabled)) {
          _push(ssrRenderComponent(_component_TairoCollapseNavigation, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div role="button" class="${ssrRenderClass([
          unref(isMobileOpen) ? "opacity-50 dark:opacity-75" : "opacity-0 pointer-events-none",
          "bg-muted-800 dark:bg-muted-900 fixed start-0 top-0 z-[59] block h-full w-full transition-opacity duration-300 lg:hidden"
        ])}"></div>`);
      }, _push, _parent);
      _push(`<div class="${ssrRenderClass(unref(mainClass))}"><div class="${ssrRenderClass([
        props.condensed && !props.horizontalScroll && "w-full",
        !props.condensed && props.horizontalScroll && "mx-auto w-full",
        !props.condensed && !props.horizontalScroll && "mx-auto w-full max-w-7xl"
      ])}">`);
      ssrRenderSlot(_ctx.$slots, "toolbar", {}, () => {
        if (unref(toolbarEnabled)) {
          _push(ssrRenderComponent(_component_TairoCollapseToolbar, {
            collapse: props.collapse,
            "horizontal-scroll": props.horizontalScroll
          }, {
            title: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "toolbar-title", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "toolbar-title")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_TairoPanels, null, null, _parent));
      if (unref(circularMenuEnabled)) {
        _push(ssrRenderComponent(_component_TairoCollapseCircularMenu, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-collapse/components/TairoCollapseLayout.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};

function useSidebar() {
  const app = useAppConfig();
  const route = useRoute();
  const sidebars = computed(() => {
    if (app.tairo.sidebar?.navigation?.enabled === false || app.tairo.sidebar?.navigation?.items?.length === 0) {
      return [];
    }
    return app.tairo.sidebar?.navigation?.items;
  });
  const currentName = useState("sidebar-name", () => "");
  const isOpen = useState("sidebar-open", () => void 0);
  const hasSubsidebar = computed(() => {
    return sidebars.value?.some((sidebar) => sidebar.subsidebar?.component);
  });
  const current = computed(() => {
    if (!currentName.value) {
      return void 0;
    }
    return sidebars.value?.find(({ title }) => title === currentName.value);
  });
  function toggle() {
    if (!currentName.value && !isOpen.value) {
      if (!sidebars.value?.[0]?.title) {
        return;
      }
      currentName.value = sidebars.value[0].title;
    }
    isOpen.value = !isOpen.value;
  }
  function close(unselect = false) {
    isOpen.value = false;
    if (unselect) {
      currentName.value = "";
    }
  }
  function open(name) {
    currentName.value = name;
    isOpen.value = true;
  }
  function detect() {
    if (!app.tairo.sidebar?.navigation?.startOpen) {
      isOpen.value = false;
      return;
    }
    const item = sidebars.value?.find(
      (bar) => bar?.activePath && route.fullPath.startsWith(bar.activePath)
    );
    if (item) {
      currentName.value = item.title;
      {
        isOpen.value = Boolean(currentName.value);
      }
    }
    return;
  }
  function setup() {
    {
      detect();
      return;
    }
  }
  return {
    sidebars,
    hasSubsidebar,
    current,
    currentName,
    isOpen,
    toggle,
    close,
    open,
    detect,
    setup
  };
}

const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarNavigationItem",
  __ssrInlineRender: true,
  props: {
    sidebar: {}
  },
  setup(__props) {
    const props = __props;
    const path = ref("");
    const { currentName, isOpen } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      const _component_Icon = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex h-16 w-full items-center justify-center", { "active-sidebar": props.sidebar.to === path.value, "mtp-1": props.sidebar.to === "/dashboards" }]
      }, _attrs))}><a${ssrRenderAttr("href", props.sidebar.to)} data-nui-tooltip-position="right"${ssrRenderAttr("data-nui-tooltip", props.sidebar.title)}>`);
      if (props.sidebar.component) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(props.sidebar.component)), props.sidebar.props, null), _parent);
      } else if (props.sidebar.to && props.sidebar.icon) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: props.sidebar.to,
          class: "text-muted-400 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300",
          "data-nui-tooltip-position": "right",
          "data-nui-tooltip": props.sidebar.title
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, props.sidebar.icon, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, props.sidebar.icon, null, 16)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (props.sidebar.icon) {
        _push(`<button type="button" class="${ssrRenderClass([
          unref(currentName) === props.sidebar.title ? "bg-primary-100 text-primary-500 dark:bg-primary-500/10" : "text-muted-400",
          "flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300"
        ])}" data-nui-tooltip-position="right"${ssrRenderAttr("data-nui-tooltip", props.sidebar.title)}>`);
        _push(ssrRenderComponent(_component_Icon, props.sidebar.icon, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a></div>`);
    };
  }
});

const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-sidebar/components/TairoSidebarNavigationItem.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};

const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarNavigation",
  __ssrInlineRender: true,
  props: {
    subsidebar: { type: Boolean, default: true },
    expanded: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { isOpen, current, sidebars } = useSidebar();
    const startSidebars = computed(
      () => sidebars.value?.filter(
        (sidebar) => !sidebar.position || sidebar.position === "start"
      )
    );
    const endSidebars = computed(
      () => sidebars.value?.filter((sidebar) => sidebar.position === "end")
    );
    const subsidebarEnabled = computed(() => {
      return Boolean(
        props.subsidebar !== false && current.value?.subsidebar?.component
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSidebarNavigationItem = _sfc_main$h;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pointer-events-none fixed start-0 top-0 z-[60] flex h-full xl:z-10" }, _attrs))}><div class="${ssrRenderClass([
        unref(isOpen) ? "" : "-translate-x-full rtl:translate-x-full xl:translate-x-0 rtl:xl:-translate-x-0",
        "border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-20 flex h-full w-[80px] flex-col border-r bg-white transition-all duration-300"
      ])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div>`);
      ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<!--[-->`);
      ssrRenderList(unref(startSidebars), (item) => {
        _push(ssrRenderComponent(_component_TairoSidebarNavigationItem, {
          key: item.title,
          sidebar: item
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="mt-auto"><!--[-->`);
      ssrRenderList(unref(endSidebars), (item) => {
        _push(ssrRenderComponent(_component_TairoSidebarNavigationItem, {
          key: item.title,
          sidebar: item
        }, null, _parent));
      });
      _push(`<!--]-->`);
      ssrRenderSlot(_ctx.$slots, "end", {}, null, _push, _parent);
      _push(`</div></div>`);
      if (unref(subsidebarEnabled)) {
        _push(`<div class="${ssrRenderClass([
          unref(isOpen) ? "" : "rtl:translate-x-[calc(100%_+_80px)] translate-x-[calc(-100%_-_80px)]",
          "border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-10 h-full w-[220px] border-r bg-white transition-all duration-300"
        ])}">`);
        ssrRenderSlot(_ctx.$slots, "subnav", {}, () => {
          if (unref(current)?.subsidebar?.component) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(current).subsidebar?.component)), {
              key: unref(current)?.subsidebar?.component
            }, null), _parent);
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-sidebar/components/TairoSidebarNavigation.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};

const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarBurger",
  __ssrInlineRender: true,
  setup(__props) {
    const { isOpen, toggle } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "flex h-10 w-10 items-center justify-center"
      }, _attrs))}><div class="${ssrRenderClass([unref(isOpen) ? "scale-90" : "", "relative h-5 w-5"])}"><span class="${ssrRenderClass([
        unref(isOpen) ? "-rotate-45 rtl:rotate-45 max-w-[75%] top-1" : "top-0.5",
        "bg-primary-500 absolute block h-0.5 w-full transition-all duration-300"
      ])}"></span><span class="${ssrRenderClass([unref(isOpen) ? "opacity-0 translate-x-4 rtl:-translate-x-4" : "", "bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300"])}"></span><span class="${ssrRenderClass([
        unref(isOpen) ? "rotate-45 rtl:-rotate-45 max-w-[75%] bottom-1" : "bottom-0",
        "bg-primary-500 absolute block h-0.5 w-full transition-all duration-300"
      ])}"></span></div></button>`);
    };
  }
});

const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-sidebar/components/TairoSidebarBurger.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};

const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarTools",
  __ssrInlineRender: true,
  setup(__props) {
    const app = useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-2" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(app).tairo.sidebar?.toolbar?.tools, (tool) => {
        _push(`<!--[-->`);
        if (tool.component) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), mergeProps({
            key: tool.component
          }, tool.props), null), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});

const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-sidebar/components/TairoSidebarTools.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};

const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarToolbar",
  __ssrInlineRender: true,
  props: {
    sidebar: { type: Boolean, default: true },
    horizontalScroll: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const app = useAppConfig();
    const { hasSubsidebar } = useSidebar();
    const route = useRoute();
    const showNavBurger = computed(() => {
      return props.sidebar && app.tairo.sidebar?.toolbar?.showNavBurger && hasSubsidebar.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSidebarBurger = _sfc_main$f;
      const _component_BaseHeading = _sfc_main$q;
      const _component_TairoSidebarTools = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative z-50 mb-5 flex h-16 items-center gap-2", props.horizontalScroll && "pe-4 xl:pe-10"]
      }, _attrs))}>`);
      if (unref(showNavBurger)) {
        _push(ssrRenderComponent(_component_TairoSidebarBurger, {
          class: "-ms-3",
          id: "dekstop"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(app).tairo.sidebar?.toolbar?.showTitle) {
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h1",
          size: "2xl",
          weight: "light",
          class: "text-muted-800 dark:text-white md:block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`<span class="txt-title"${_scopeId}>${ssrInterpolate(unref(route).meta.title)}</span>`);
              }, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "title", {}, () => [
                  createVNode("span", { class: "txt-title" }, toDisplayString(unref(route).meta.title), 1)
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="ms-auto"></div>`);
      _push(ssrRenderComponent(_component_TairoSidebarTools, { class: "h-16" }, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-sidebar/components/TairoSidebarToolbar.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};

const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarCircularMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useNinjaWindowScroll();
    const app = useAppConfig();
    const isOpened = ref(false);
    const isScrolled = computed(() => {
      if (y.value < 60) {
        isOpened.value = false;
      }
      return y.value > 60;
    });
    const toolOffsets = [
      "translate-x-[-6.5em] rtl:translate-x-[6.5em] translate-y-[-0.25em]",
      "translate-x-[-5.75em] rtl:translate-x-[5.75em] translate-y-[3em]",
      "translate-x-[-3.15em] rtl:translate-x-[3.15em] translate-y-[5.5em]",
      "translate-x-[0em] translate-y-[6.5em]"
    ];
    const tools = computed(() => {
      return app.tairo?.sidebar?.circularMenu?.tools?.slice(0, 4) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["after:bg-primary-600 after:shadow-primary-500/50 dark:after:shadow-muted-800/10 fixed end-[1em] top-[0.6em] z-[90] transition-transform duration-300 after:absolute after:end-0 after:top-0 after:block after:h-12 after:w-12 after:rounded-full after:shadow-lg after:transition-transform after:duration-300 after:content-['']", [
          unref(isOpened) ? "after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)] after:scale-[5.5]" : "",
          unref(isScrolled) ? "" : "-translate-y-24"
        ]]
      }, _attrs))}><button type="button" class="bg-primary-500 shadow-primary-500/50 dark:shadow-muted-800/10 relative z-30 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg"><span class="${ssrRenderClass([unref(isOpened) ? "scale-90 top-0" : "-top-0.5", "relative block h-3 w-3 transition-all duration-300"])}"><span class="${ssrRenderClass([unref(isOpened) ? "-rotate-45 top-1" : "top-0.5", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "opacity-0 translate-x-4" : "", "bg-muted-50 absolute top-1/2 block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "rotate-45 bottom-1.5" : "bottom-0", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span></span></button><div><!--[-->`);
      ssrRenderList(unref(tools), (tool, idx) => {
        _push(`<!--[-->`);
        if (tool.component) {
          _push(`<div class="${ssrRenderClass([unref(isOpened) ? toolOffsets[idx] : "translate-x-0 translate-y-0", "absolute end-[0.2em] top-[0.2em] z-20 flex items-center justify-center transition-all duration-300"])}">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), tool.props, null), _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});

const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-sidebar/components/TairoSidebarCircularMenu.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarLayout",
  __ssrInlineRender: true,
  props: {
    sidebar: { type: Boolean, default: true },
    subsidebar: { type: Boolean, default: true },
    toolbar: { type: Boolean, default: true },
    circularMenu: { type: Boolean, default: true },
    condensed: { type: Boolean },
    horizontalScroll: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const app = useAppConfig();
    const { setup, currentName, isOpen, toggle } = useSidebar();
    setup();
    onUnmounted(() => {
      currentName.value = "";
      isOpen.value = void 0;
    });
    const sidebarEnabled = computed(() => {
      return app.tairo.sidebar?.navigation?.enabled !== false && props.sidebar !== false;
    });
    const toolbarEnabled = computed(() => {
      return app.tairo.sidebar?.toolbar?.enabled !== false && props.toolbar !== false;
    });
    const circularMenuEnabled = computed(() => {
      return app.tairo.sidebar?.circularMenu?.enabled !== false && props.circularMenu !== false;
    });
    const wrapperClass = computed(() => {
      if (props.condensed) {
        return "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden";
      }
      if (!sidebarEnabled.value) {
        return "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10";
      }
      const list = [
        "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10"
      ];
      if (isOpen.value) {
        list.push("xl:max-w-[calc(100%_-_300px)] xl:ms-[300px]");
      } else {
        list.push("xl:max-w-[calc(100%_-_80px)] xl:ms-[80px]");
      }
      if (props.horizontalScroll) {
        list.push("!pe-0 xl:!pe-0");
      }
      return list;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSidebarNavigation = _sfc_main$g;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_TairoSidebarToolbar = _sfc_main$d;
      const _component_TairoPanels = _sfc_main$k;
      const _component_TairoSidebarCircularMenu = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-muted-100 dark:bg-muted-900 pb-20" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
        if (unref(sidebarEnabled)) {
          _push(ssrRenderComponent(_component_TairoSidebarNavigation, {
            subsidebar: props.subsidebar
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(app).tairo.sidebar?.navigation?.logo?.component) {
                  _push2(`<div class="flex h-16 w-full items-center justify-center"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "logo", {}, () => {
                    _push2(ssrRenderComponent(_component_NuxtLink, {
                      to: "/",
                      class: "flex items-center justify-center"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(
                            ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                              unref(app).tairo.sidebar?.navigation.logo.component
                            )
                          ), unref(app).tairo.sidebar?.navigation.logo.props, null), _parent3, _scopeId2);
                        } else {
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(
                              ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                                unref(app).tairo.sidebar?.navigation.logo.component
                              )
                            ), unref(app).tairo.sidebar?.navigation.logo.props, null, 16))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  unref(app).tairo.sidebar?.navigation?.logo?.component ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex h-16 w-full items-center justify-center"
                  }, [
                    renderSlot(_ctx.$slots, "logo", {}, () => [
                      createVNode(_component_NuxtLink, {
                        to: "/",
                        class: "flex items-center justify-center"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(
                            ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                              unref(app).tairo.sidebar?.navigation.logo.component
                            )
                          ), unref(app).tairo.sidebar?.navigation.logo.props, null, 16))
                        ]),
                        _: 1
                      })
                    ])
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div role="button" class="${ssrRenderClass([
          unref(isOpen) ? "opacity-50 dark:opacity-75" : "opacity-0 pointer-events-none",
          "bg-muted-800 dark:bg-muted-900 fixed start-0 top-0 z-[59] block h-full w-full transition-opacity duration-300 lg:hidden"
        ])}"></div>`);
      }, _push, _parent);
      _push(`<div class="${ssrRenderClass(unref(wrapperClass))}"><div class="${ssrRenderClass([
        props.condensed && !props.horizontalScroll && "w-full",
        !props.condensed && props.horizontalScroll && "mx-auto w-full",
        !props.condensed && !props.horizontalScroll && ""
      ])}">`);
      ssrRenderSlot(_ctx.$slots, "toolbar", {}, () => {
        if (unref(toolbarEnabled)) {
          _push(ssrRenderComponent(_component_TairoSidebarToolbar, {
            sidebar: props.sidebar,
            "horizontal-scroll": props.horizontalScroll
          }, {
            title: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "toolbar-title", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "toolbar-title")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
      _push(ssrRenderComponent(_component_TairoPanels, null, null, _parent));
      if (unref(circularMenuEnabled)) {
        _push(ssrRenderComponent(_component_TairoSidebarCircularMenu, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-sidebar/components/TairoSidebarLayout.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};

const useNinjaButton = (properties, {
  // @todo: make this configurable (design tokens)
  externalDefaultRelationship = "noopener noreferrer",
  externalDefaultTarget = "_blank"
} = {}) => {
  const NuxtLink = /* #__PURE__ */ defineNuxtLink({});
  const is = computed(
    () => properties.to ? NuxtLink : properties.href ? "a" : "button"
  );
  const type = computed(() => {
    if (is.value === "button") {
      return properties.type || "button";
    }
    return;
  });
  const external = computed(() => {
    if (typeof properties.to === "string" && properties.to.startsWith("http")) {
      return true;
    } else if (typeof properties.to === "object" && "path" in properties.to && properties.to.path.startsWith("http")) {
      return true;
    }
    return false;
  });
  const relationship = computed(() => {
    if (!external.value) {
      return properties.rel;
    }
    return properties.rel ?? externalDefaultRelationship;
  });
  const target = computed(() => {
    if (!external.value) {
      return properties.target;
    }
    return properties.target ?? externalDefaultTarget;
  });
  const attributes = computed(() => ({
    to: properties.disabled ? void 0 : properties.to,
    href: properties.disabled ? void 0 : properties.href,
    disabled: properties.disabled,
    type: type.value,
    rel: relationship.value,
    target: target.value
  }));
  return {
    attributes,
    is
  };
};

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "BaseButton",
  __ssrInlineRender: true,
  props: {
    type: { default: void 0 },
    to: { default: void 0 },
    href: { default: void 0 },
    disabled: { type: Boolean, default: false },
    rel: { default: "" },
    target: { default: "" },
    size: { default: "md" },
    flavor: { default: "solid" },
    color: { default: "default" },
    shape: { default: void 0 },
    loading: { type: Boolean },
    badge: { type: Boolean, default: false },
    badgePulse: { type: Boolean, default: false },
    shadow: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.button);
    const badgeColorStyle = {
      primary: "nui-badge-primary",
      info: "nui-badge-info",
      success: "nui-badge-success",
      warning: "nui-badge-warning",
      danger: "nui-badge-danger",
      none: "",
      default: "",
      light: "",
      muted: ""
    };
    const sizeStyle = {
      sm: "nui-button-small",
      md: "nui-button-medium",
      lg: "nui-button-large",
      xl: "nui-button-big"
    };
    const shapeStyle = {
      straight: "",
      rounded: "nui-button-rounded",
      curved: "nui-button-curved",
      smooth: "nui-button-smooth",
      full: "nui-button-full"
    };
    const flavorStyle = {
      solid: "nui-button-solid",
      pastel: "nui-button-pastel",
      outline: "nui-button-outline"
    };
    const colorStyle = {
      none: "",
      default: "nui-button-default",
      primary: "nui-button-primary",
      info: "nui-button-info",
      success: "nui-button-success",
      warning: "nui-button-warning",
      danger: "nui-button-danger",
      light: "nui-button-light",
      muted: "nui-button-muted"
    };
    const shadowStyle = {
      flat: "nui-button-shadow",
      hover: "nui-button-shadow-hover"
    };
    const badgeStyle = computed(
      () => props.badge && ["default", "light", "muted", "none"].includes(props.color) ? "" : `nui-button-badge ${badgeColorStyle[props.color]}`
    );
    const classes = computed(() => [
      "nui-button",
      props.loading && "nui-button-loading",
      sizeStyle[props.size],
      shape.value && shapeStyle[shape.value],
      flavorStyle[props.flavor],
      colorStyle[props.color],
      props.shadow && shadowStyle[props.shadow]
    ]);
    const { attributes, is } = useNinjaButton(props);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceload = __nuxt_component_0$2;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(is)), mergeProps(unref(attributes), { class: unref(classes) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!props.loading) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(ssrRenderComponent(_component_BasePlaceload, { class: "h-4 w-12 rounded" }, null, _parent2, _scopeId));
            }
            if (props.badge) {
              _push2(`<span class="${ssrRenderClass(unref(badgeStyle))}"${_scopeId}>`);
              if (props.badgePulse) {
                _push2(`<span class="nui-button-badge-pulse"${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="nui-button-badge-inner"${_scopeId}></span></span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !props.loading ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(_component_BasePlaceload, {
                key: 1,
                class: "h-4 w-12 rounded"
              })),
              props.badge ? (openBlock(), createBlock("span", {
                key: 2,
                class: unref(badgeStyle)
              }, [
                props.badgePulse ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "nui-button-badge-pulse"
                })) : createCommentVNode("", true),
                createVNode("span", { class: "nui-button-badge-inner" })
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});

const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/base/BaseButton.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};

function useTopnav() {
  const route = useRoute();
  const app = useAppConfig();
  const menuItems = computed(() => {
    if (app.tairo.topnav?.navigation?.enabled === false || app.tairo.topnav?.navigation?.items?.length === 0) {
      return [];
    }
    return app.tairo.topnav?.navigation?.items?.map(
      (navigation) => ({
        ...navigation
      })
    );
  });
  const isMobileOpen = useState("collapse-open", () => false);
  const activeMenuItem = computed(() => {
    return menuItems.value?.find((item) => {
      if (item.activePath) {
        return route.path.startsWith(item.activePath);
      }
      if (item.to) {
        return route.path.startsWith(item.to.toString());
      }
      return false;
    });
  });
  const selectedMenuItem = useState(
    "topnav-selected-menu-item",
    () => activeMenuItem.value
  );
  watch(activeMenuItem, (item) => {
    selectedMenuItem.value = item;
  });
  return {
    menuItems,
    activeMenuItem,
    selectedMenuItem,
    isMobileOpen
  };
}

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "TairoTopnavNavigation",
  __ssrInlineRender: true,
  props: {
    display: { default: "expanded-md" },
    position: { default: "absolute" }
  },
  setup(__props) {
    const props = __props;
    const { menuItems, isMobileOpen } = useTopnav();
    useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButtonClose = _sfc_main$B;
      const _component_BaseButton = _sfc_main$a;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_BaseText = _sfc_main$t;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["dark:bg-muted-800 border-muted-200 dark:border-muted-700 left-0 top-0 z-40 w-full border-b bg-white transition-all duration-300", [
          props.position === "fixed" && "fixed",
          props.position === "absolute" && "absolute"
        ]]
      }, _attrs))}><nav class="${ssrRenderClass([[
        props.display === "condensed" && "w-full",
        props.display === "horizontal-scroll" && "mx-auto w-full pe-4",
        props.display === "expanded-sm" && "mx-auto w-full max-w-5xl px-4 lg:px-0",
        props.display === "expanded-md" && "mx-auto w-full max-w-6xl px-4 lg:px-0",
        props.display === "expanded-lg" && "mx-auto w-full max-w-7xl px-4 lg:px-0",
        props.display === "expanded-xl" && "mx-auto w-full px-4 lg:px-0"
      ], "relative"])}"><div class="flex w-full flex-col items-center justify-between md:h-16 md:flex-row"><div class="w-full grow md:w-auto">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="${ssrRenderClass([unref(isMobileOpen) ? "flex" : "hidden", "dark:bg-muted-800 fixed start-0 top-0 z-20 w-full grow items-center bg-white p-3 md:static md:z-0 md:block md:w-auto md:bg-transparent md:p-0"])}"><div class="me-auto block md:hidden">`);
      _push(ssrRenderComponent(_component_BaseButtonClose, {
        color: "muted",
        shape: "full",
        onClick: ($event) => isMobileOpen.value = false
      }, null, _parent));
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "toolbar", {}, () => {
        _push(ssrRenderComponent(_component_BaseButton, {
          to: "#",
          color: "primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Get Started`);
            } else {
              return [
                createTextVNode("Get Started")
              ];
            }
          }),
          _: 1
        }, _parent));
      }, _push, _parent);
      _push(`</div></div></nav><div class="${ssrRenderClass([[
        props.display === "condensed" && "w-full",
        props.display === "horizontal-scroll" && "mx-auto w-full overflow-x-auto",
        props.display === "expanded-sm" && "mx-auto w-full max-w-5xl",
        props.display === "expanded-md" && "mx-auto w-full max-w-6xl",
        props.display === "expanded-lg" && "mx-auto w-full max-w-7xl",
        props.display === "expanded-xl" && "mx-auto w-full"
      ], "flex items-center"])}"><div class="flex overflow-x-auto lg:overflow-x-hidden"><!--[-->`);
      ssrRenderList(unref(menuItems), (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: index,
          to: item.to,
          class: "text-muted-400 hover:text-muted-500 dark:text-muted-500 dark:hover:text-muted-400 flex items-center justify-center border-b-2 border-transparent p-3 text-center transition-colors duration-300",
          "exact-active-class": "!border-primary-500 !text-muted-800 dark:!text-muted-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseText, { size: "sm" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.name), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});

const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-topnav/components/TairoTopnavNavigation.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TairoTopnavCircularMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useNinjaWindowScroll();
    const app = useAppConfig();
    const isOpened = ref(false);
    const isScrolled = computed(() => {
      if (y.value < 60) {
        isOpened.value = false;
      }
      return y.value > 60;
    });
    const toolOffsets = [
      "translate-x-[-6.5em] rtl:translate-x-[6.5em] translate-y-[-0.25em]",
      "translate-x-[-5.75em] rtl:translate-x-[5.75em] translate-y-[3em]",
      "translate-x-[-3.15em] rtl:translate-x-[3.15em] translate-y-[5.5em]",
      "translate-x-[0em] translate-y-[6.5em]"
    ];
    const tools = computed(() => {
      return app.tairo.collapse?.circularMenu?.tools?.slice(0, 4) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["after:bg-primary-600 after:shadow-primary-500/50 dark:after:shadow-muted-800/10 fixed bottom-[0.6em] end-[1em] z-[90] rotate-90 transition-transform duration-300 after:absolute after:end-0 after:top-0 after:block after:h-12 after:w-12 after:rounded-full after:shadow-lg after:transition-transform after:duration-300 after:content-['']", [
          unref(isOpened) ? "after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)] after:scale-[5.5]" : "",
          unref(isScrolled) ? "" : "translate-y-24"
        ]]
      }, _attrs))}><button type="button" class="bg-primary-500 shadow-primary-500/50 dark:shadow-muted-800/10 relative z-30 flex h-12 w-12 -rotate-90 items-center justify-center rounded-full text-white shadow-lg"><span class="${ssrRenderClass([unref(isOpened) ? "scale-90 top-0" : "-top-0.5", "relative block h-3 w-3 transition-all duration-300"])}"><span class="${ssrRenderClass([unref(isOpened) ? "-rotate-45 top-1" : "top-0.5", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "opacity-0 translate-x-4" : "", "bg-muted-50 absolute top-1/2 block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "rotate-45 bottom-1.5" : "bottom-0", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span></span></button><div><!--[-->`);
      ssrRenderList(unref(tools), (tool, idx) => {
        _push(`<!--[-->`);
        if (tool.component) {
          _push(`<div class="${ssrRenderClass([unref(isOpened) ? toolOffsets[idx] : "translate-x-0 translate-y-0", "absolute end-[0.2em] top-[0.2em] z-20 flex -rotate-90 items-center justify-center transition-all duration-300"])}">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), tool.props, null), _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});

const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-topnav/components/TairoTopnavCircularMenu.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "TairoTopnavFooter",
  __ssrInlineRender: true,
  props: {
    display: { default: "expanded-lg" }
  },
  setup(__props) {
    const props = __props;
    const config = useAppConfig().tairo.topnav?.footer;
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 border-muted-200 dark:border-muted-700 bg-muted-50 relative border-t" }, _attrs))}>`);
      if (unref(config)?.logoSeparator?.component) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          "aria-label": "Go to Homepage",
          class: "dark:bg-muted-900 bg-muted-50 absolute inset-x-0 -top-4 mx-auto flex h-9 w-14 items-center justify-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(
                ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                  unref(config).logoSeparator.component
                )
              ), unref(config).logoSeparator.props, null), _parent2, _scopeId);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(
                  ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                    unref(config).logoSeparator.component
                  )
                ), unref(config).logoSeparator.props, null, 16))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([[
        props.display === "expanded-sm" && "mx-auto w-full max-w-5xl",
        props.display === "expanded-md" && "mx-auto w-full max-w-6xl",
        props.display === "expanded-lg" && "mx-auto w-full max-w-7xl",
        props.display === "expanded-xl" && "mx-auto w-full"
      ], "ltablet:flex-row mx-auto flex flex-col items-center justify-between px-6 py-8 lg:flex-row"])}">`);
      if (unref(config)?.logo?.component) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          "aria-label": "Go to Homepage",
          class: "ltablet:w-1/5 block w-full lg:w-1/5"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(
                ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                  unref(config).logo.component
                )
              ), unref(config).logo.props, null), _parent2, _scopeId);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(
                  ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                    unref(config).logo.component
                  )
                ), unref(config).logo.props, null, 16))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="ltablet:w-1/5 block w-full lg:w-1/5"></div>`);
      }
      _push(`<div class="ltablet:mt-0 ltablet:gap-6 mt-6 flex flex-wrap items-center justify-center gap-4 lg:mt-0 lg:gap-6"><!--[-->`);
      ssrRenderList(unref(config)?.links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.to,
          to: link.to,
          rel: link.rel,
          target: link.target,
          class: "text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="text-muted-500 dark:text-muted-400 ltablet:w-1/5 ltablet:justify-end ltablet:mt-0 mt-6 flex w-full items-center justify-center text-sm lg:mt-0 lg:w-1/5 lg:justify-end">`);
      if (unref(config)?.copyright?.name && unref(config)?.copyright?.to) {
        _push(`<span class="inline-flex gap-1"><span>©</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(config).copyright.to,
          target: "_blank",
          rel: "noopener",
          class: "text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(config).copyright.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(config).copyright.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(config)?.copyright?.since) {
          _push(`<span>${ssrInterpolate(unref(config).copyright.since)}-${ssrInterpolate(unref(year))}.</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></footer>`);
    };
  }
});

const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-topnav/components/TairoTopnavFooter.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TairoTopnavLayout",
  __ssrInlineRender: true,
  props: {
    topnav: { type: Boolean, default: true },
    toolbar: { type: Boolean, default: true },
    circularMenu: { type: Boolean, default: true },
    display: { default: "expanded-lg" }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const config = useAppConfig().tairo.topnav;
    const { isMobileOpen } = useTopnav();
    const topnavEnabled = computed(() => {
      return config?.navigation?.enabled !== false && props.topnav !== false;
    });
    const toolbarEnabled = computed(() => {
      return config?.toolbar?.enabled !== false && props.toolbar !== false;
    });
    const circularMenuEnabled = computed(() => {
      return config?.circularMenu?.enabled !== false && props.circularMenu !== false;
    });
    const mainClass = computed(() => {
      if (props.display === "condensed") {
        return "bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden";
      }
      if (!topnavEnabled.value) {
        return "bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10";
      }
      const list = [
        "bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10"
      ];
      if (props.display === "horizontal-scroll") {
        list.push("!pe-0 xl:!pe-0");
      }
      return list;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoTopnavNavigation = _sfc_main$9;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_BaseHeading = _sfc_main$q;
      const _component_Icon = __nuxt_component_2$1;
      const _component_TairoPanels = _sfc_main$k;
      const _component_TairoTopnavCircularMenu = _sfc_main$8;
      const _component_TairoTopnavFooter = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="dark:bg-muted-900 bg-muted-50 pb-20">`);
      ssrRenderSlot(_ctx.$slots, "navigation", {}, () => {
        if (unref(topnavEnabled)) {
          _push(ssrRenderComponent(_component_TairoTopnavNavigation, {
            display: props.display,
            position: "fixed"
          }, {
            toolbar: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(toolbarEnabled)) {
                  _push2(`<div${_scopeId}><div class="flex items-center justify-end gap-4 md:gap-2"${_scopeId}><!--[-->`);
                  ssrRenderList(unref(config)?.toolbar?.tools, (tool) => {
                    _push2(`<!--[-->`);
                    if (tool.component) {
                      ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), mergeProps({
                        key: tool.component
                      }, tool.props), null), _parent2, _scopeId);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<!--]-->`);
                  });
                  _push2(`<!--]--></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  unref(toolbarEnabled) ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("div", { class: "flex items-center justify-end gap-4 md:gap-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(config)?.toolbar?.tools, (tool) => {
                        return openBlock(), createBlock(Fragment, null, [
                          tool.component ? (openBlock(), createBlock(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), mergeProps({
                            key: tool.component
                          }, tool.props), null, 16)) : createCommentVNode("", true)
                        ], 64);
                      }), 256))
                    ])
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(config)?.navigation?.logo?.component) {
                  _push2(`<div class="flex h-16 w-full items-center gap-x-4"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    to: "/",
                    class: "flex items-center justify-center"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(
                          ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                            unref(config)?.navigation.logo.component
                          )
                        ), unref(config)?.navigation.logo.props, null), _parent3, _scopeId2);
                      } else {
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(
                            ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                              unref(config)?.navigation.logo.component
                            )
                          ), unref(config)?.navigation.logo.props, null, 16))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  if (unref(config)?.toolbar?.showTitle) {
                    _push2(ssrRenderComponent(_component_BaseHeading, {
                      as: "h1",
                      size: "lg",
                      weight: "light",
                      class: "text-muted-800 hidden dark:text-white md:block"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                            _push3(`${ssrInterpolate(unref(route).meta.title)}`);
                          }, _push3, _parent3, _scopeId2);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "title", {}, () => [
                              createTextVNode(toDisplayString(unref(route).meta.title), 1)
                            ])
                          ];
                        }
                      }),
                      _: 3
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (unref(config)?.navigation?.header?.component) {
                    ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(
                      ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                        unref(config)?.navigation?.header?.component
                      )
                    ), unref(config)?.navigation?.header?.props, null), _parent2, _scopeId);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<div class="flex items-center justify-center md:hidden"${_scopeId}><button type="button"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "lucide:menu",
                    class: "text-muted-400 h-6 w-6"
                  }, null, _parent2, _scopeId));
                  _push2(`</button></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  unref(config)?.navigation?.logo?.component ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex h-16 w-full items-center gap-x-4"
                  }, [
                    createVNode(_component_NuxtLink, {
                      to: "/",
                      class: "flex items-center justify-center"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(
                          ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                            unref(config)?.navigation.logo.component
                          )
                        ), unref(config)?.navigation.logo.props, null, 16))
                      ]),
                      _: 1
                    }),
                    unref(config)?.toolbar?.showTitle ? (openBlock(), createBlock(_component_BaseHeading, {
                      key: 0,
                      as: "h1",
                      size: "lg",
                      weight: "light",
                      class: "text-muted-800 hidden dark:text-white md:block"
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(unref(route).meta.title), 1)
                        ])
                      ]),
                      _: 3
                    })) : createCommentVNode("", true),
                    unref(config)?.navigation?.header?.component ? (openBlock(), createBlock(resolveDynamicComponent(
                      ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                        unref(config)?.navigation?.header?.component
                      )
                    ), mergeProps({ key: 1 }, unref(config)?.navigation?.header?.props), null, 16)) : createCommentVNode("", true),
                    createVNode("div", { class: "flex items-center justify-center md:hidden" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: ($event) => isMobileOpen.value = true
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:menu",
                          class: "text-muted-400 h-6 w-6"
                        })
                      ], 8, ["onClick"])
                    ])
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="${ssrRenderClass(unref(mainClass))}"><div class="${ssrRenderClass([[
        props.display === "condensed" && "w-full",
        props.display === "horizontal-scroll" && "mx-auto w-full overflow-x-auto",
        props.display === "expanded-sm" && "mx-auto w-full max-w-5xl",
        props.display === "expanded-md" && "mx-auto w-full max-w-6xl",
        props.display === "expanded-lg" && "mx-auto w-full max-w-7xl",
        props.display === "expanded-xl" && "mx-auto w-full"
      ], "pt-40 md:pt-36"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_TairoPanels, null, null, _parent));
      if (unref(circularMenuEnabled)) {
        _push(ssrRenderComponent(_component_TairoTopnavCircularMenu, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(config)?.footer?.enabled) {
        _push(ssrRenderComponent(_component_TairoTopnavFooter, {
          display: props.display
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-topnav/components/TairoTopnavLayout.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};

function useLayoutSwitcher() {
  const layouts = [
    {
      name: "sidebar",
      label: "Sidebar",
      component: _sfc_main$b
    },
    {
      name: "collapse",
      label: "Collapse",
      component: _sfc_main$i
    },
    {
      name: "topnav",
      label: "Top navigation",
      component: _sfc_main$6
    }
  ];
  const activeLayoutName = useState("layout-switcher-active", () => "sidebar");
  const activeLayout = computed(() => {
    return layouts.find((layout) => layout.name === activeLayoutName.value);
  });
  const activeLayoutComponent = computed(() => {
    return activeLayout.value?.component || _sfc_main$b;
  });
  return {
    layouts,
    activeLayout,
    activeLayoutName,
    activeLayoutComponent
  };
}

const EMPTY_COLOR = "0 0 0";
const colorToRgb = (color) => {
  if (!color) {
    return EMPTY_COLOR;
  }
  return chroma(color).rgb().map((v) => {
    if (Number.isNaN(v)) {
      return 0;
    }
    return Math.round(v);
  }).slice(0, 3).join(" ");
};
function switchColorShades(name, shades2) {
  Object.entries(shades2).forEach(([shade, color]) => {
    switchColor(name, shade, color);
  });
}
function switchColor(name, shade, color) {
  const rgb = colorToRgb(color);
  window.document.documentElement.style.setProperty(
    `--color-${name}-${shade}`,
    rgb
  );
}

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DemoAppLayoutSwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    const { layouts, activeLayoutName } = useLayoutSwitcher();
    const route = useRoute();
    const isSwitcherOpen = useState("switcher-open", () => false);
    const currentPrimary = ref("violet");
    const currentMuted = ref("slate");
    watch([currentPrimary, currentMuted], closeModal);
    const canChangeLayout = computed(
      () => !route.meta.layout || route.meta.layout === "default"
    );
    const primaryPresets = [
      {
        name: "indigo",
        label: "Indigo",
        shades: colors.indigo,
        class: "bg-indigo-500"
      },
      {
        name: "sky",
        label: "Sky",
        shades: colors.sky,
        class: "bg-sky-500"
      },
      {
        name: "purple",
        label: "Purple",
        shades: colors.purple,
        class: "bg-purple-500"
      },
      {
        name: "violet",
        label: "Violet",
        shades: colors.violet,
        class: "bg-violet-500"
      },
      {
        name: "lime",
        label: "Lime",
        shades: colors.lime,
        class: "bg-lime-500"
      },
      {
        name: "teal",
        label: "Teal",
        shades: colors.teal,
        class: "bg-teal-500"
      },
      {
        name: "emerald",
        label: "Emerald",
        shades: colors.emerald,
        class: "bg-emerald-500"
      },
      {
        name: "rose",
        label: "Rose",
        shades: colors.rose,
        class: "bg-rose-500"
      },
      {
        name: "pink",
        label: "Pink",
        shades: colors.pink,
        class: "bg-pink-500"
      },
      {
        name: "yellow",
        label: "Yellow",
        shades: colors.yellow,
        class: "bg-yellow-500"
      },
      {
        name: "orange",
        label: "Orange",
        shades: colors.orange,
        class: "bg-orange-500"
      },
      {
        name: "mauve",
        label: "Custom",
        shades: {
          50: "#EEECF9",
          100: "#DCD8F3",
          200: "#B6AEE5",
          300: "#9488D8",
          400: "#6E5DCB",
          500: "#4E3CB9",
          600: "#3E2F92",
          700: "#302470",
          800: "#1F1849",
          900: "#100C27",
          950: "#080613"
        },
        class: "bg-mauve-500"
      }
    ];
    const mutedPresets = [
      {
        name: "gray",
        label: "Gray",
        shades: colors.gray,
        class: "bg-gray-300 dark:bg-gray-900"
      },
      {
        name: "slate",
        label: "Slate",
        shades: colors.slate,
        class: "bg-slate-300 dark:bg-slate-900"
      },
      {
        name: "stone",
        label: "Stone",
        shades: colors.stone,
        class: "bg-stone-300 dark:bg-stone-900"
      },
      {
        name: "zinc",
        label: "Zinc",
        shades: colors.zinc,
        class: "bg-zinc-300 dark:bg-zinc-900"
      },
      {
        name: "neutral",
        label: "Neutral",
        shades: colors.neutral,
        class: "bg-neutral-300 dark:bg-neutral-900"
      }
    ];
    function closeModal() {
      isSwitcherOpen.value = false;
    }
    function switchLayout(layout) {
      activeLayoutName.value = layout;
      closeModal();
    }
    function switchPrimary(color) {
      currentPrimary.value = color.name;
      switchColorShades("primary", color.shades);
    }
    function switchMuted(color) {
      currentMuted.value = color.name;
      switchColorShades("muted", color.shades);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoModal = _sfc_main$y;
      const _component_BaseButtonClose = _sfc_main$B;
      const _component_BaseHeading = _sfc_main$q;
      const _component_BaseParagraph = _sfc_main$p;
      const _component_BaseCard = _sfc_main$D;
      const _component_BaseText = _sfc_main$t;
      const _component_Icon = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_TairoModal, mergeProps({
        open: unref(isSwitcherOpen),
        size: unref(canChangeLayout) ? "2xl" : "sm",
        onClose: ($event) => isSwitcherOpen.value = false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex w-full items-center justify-between p-4 md:p-6"${_scopeId}><h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"${_scopeId}> Theme configuration </h3>`);
            _push2(ssrRenderComponent(_component_BaseButtonClose, { onClick: closeModal }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex w-full items-center justify-between p-4 md:p-6" }, [
                createVNode("h3", { class: "font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white" }, " Theme configuration "),
                createVNode(_component_BaseButtonClose, { onClick: closeModal })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 pb-4 md:px-6 md:pb-6 max-h-[550px] overflow-y-auto nui-slimscroll"${_scopeId}><div class="grid grid-cols-12 gap-6"${_scopeId}>`);
            if (unref(canChangeLayout)) {
              _push2(`<div class="col-span-12 sm:col-span-7 flex flex-col gap-4"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "medium",
                class: "text-muted-900 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Layout selection `);
                  } else {
                    return [
                      createTextVNode(" Layout selection ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Select the layout you want to use for your application `);
                  } else {
                    return [
                      createTextVNode(" Select the layout you want to use for your application ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-muted-100 dark:bg-muted-700/40 rounded-xl"${_scopeId}><!--[-->`);
              ssrRenderList(unref(layouts), (layout) => {
                _push2(ssrRenderComponent(_component_BaseCard, {
                  key: layout.name,
                  role: "button",
                  shape: "curved",
                  class: ["p-2", unref(activeLayoutName) === layout.name && "!border-primary-500"],
                  onClick: ($event) => switchLayout(layout.name)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="bg-muted-50 dark:bg-muted-700/70 flex items-center justify-center rounded-lg py-6 sm:py-3"${_scopeId2}><img${ssrRenderAttr("src", `/img/illustrations/switcher/layout-${layout.name}-default.svg`)} class="${ssrRenderClass([
                        unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-60",
                        "block dark:hidden max-w-[110px] mx-auto transition-opacity duration-200"
                      ])}"${ssrRenderAttr("alt", `${layout.name} layout`)}${_scopeId2}><img${ssrRenderAttr("src", `/img/illustrations/switcher/layout-${layout.name}-default-dark.svg`)} class="${ssrRenderClass([
                        unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-60",
                        "hidden dark:block max-w-[110px] mx-auto transition-opacity duration-200"
                      ])}"${ssrRenderAttr("alt", `${layout.name} layout`)}${_scopeId2}></div><div class="flex items-center justify-between py-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseText, {
                        size: "xs",
                        class: [
                          "capitalize",
                          unref(activeLayoutName) === layout.name ? "text-muted-600 dark:text-muted-100" : "text-muted-400 dark:text-muted-500"
                        ]
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(layout.name)} Layout `);
                          } else {
                            return [
                              createTextVNode(toDisplayString(layout.name) + " Layout ", 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:check-circle-duotone",
                        class: [
                          "w-5 h-5 text-success-500 transition-opacity duration-200",
                          unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-0"
                        ]
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "bg-muted-50 dark:bg-muted-700/70 flex items-center justify-center rounded-lg py-6 sm:py-3" }, [
                          createVNode("img", {
                            src: `/img/illustrations/switcher/layout-${layout.name}-default.svg`,
                            class: [
                              "block dark:hidden max-w-[110px] mx-auto transition-opacity duration-200",
                              unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-60"
                            ],
                            alt: `${layout.name} layout`
                          }, null, 10, ["src", "alt"]),
                          createVNode("img", {
                            src: `/img/illustrations/switcher/layout-${layout.name}-default-dark.svg`,
                            class: [
                              "hidden dark:block max-w-[110px] mx-auto transition-opacity duration-200",
                              unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-60"
                            ],
                            alt: `${layout.name} layout`
                          }, null, 10, ["src", "alt"])
                        ]),
                        createVNode("div", { class: "flex items-center justify-between py-2" }, [
                          createVNode(_component_BaseText, {
                            size: "xs",
                            class: [
                              "capitalize",
                              unref(activeLayoutName) === layout.name ? "text-muted-600 dark:text-muted-100" : "text-muted-400 dark:text-muted-500"
                            ]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(layout.name) + " Layout ", 1)
                            ]),
                            _: 2
                          }, 1032, ["class"]),
                          createVNode(_component_Icon, {
                            name: "ph:check-circle-duotone",
                            class: [
                              "w-5 h-5 text-success-500 transition-opacity duration-200",
                              unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-0"
                            ]
                          }, null, 8, ["class"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass([[unref(canChangeLayout) ? "sm:col-span-5" : ""], "col-span-12 flex flex-col gap-4"])}"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              class: "text-muted-900 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Color selection `);
                } else {
                  return [
                    createTextVNode(" Color selection ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Make changes to the color palette `);
                } else {
                  return [
                    createTextVNode(" Make changes to the color palette ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-1"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4"${_scopeId}><!--[-->`);
            ssrRenderList(primaryPresets, (color) => {
              _push2(`<div${_scopeId}><button type="button" class="${ssrRenderClass([[
                unref(currentPrimary) === color.name ? "ring-1 ring-primary-500 z-10 relative" : "ring-0"
              ], "group w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-700/70 transition-colors duration-200"])}"${_scopeId}><span class="${ssrRenderClass([color.class, "block h-6 w-6 rounded-lg shrink-0"])}"${_scopeId}></span>`);
              _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(color.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(color.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</button></div>`);
            });
            _push2(`<!--]--></div><hr class="border-muted-200 dark:border-muted-700"${_scopeId}><div${_scopeId}><button type="button" class="group w-full flex items-center gap-3 p-2 rounded-lg"${_scopeId}><span class="block h-6 w-6 rounded-lg bg-muted-200 dark:bg-muted-900"${_scopeId}></span>`);
            _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Background shade`);
                } else {
                  return [
                    createTextVNode("Background shade")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</button><div class="flex items-center px-2 pt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Pick a shade`);
                } else {
                  return [
                    createTextVNode("Pick a shade")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="ml-auto flex items-center justify-end gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(mutedPresets, (color) => {
              _push2(`<button type="button" class="${ssrRenderClass([[
                color.class,
                unref(currentMuted) === color.name ? "ring-1 ring-primary-500" : "ring-0"
              ], "block h-6 w-6 rounded-full"])}"${ssrRenderAttr("data-nui-tooltip", color.label)}${_scopeId}></button>`);
            });
            _push2(`<!--]--></div></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 pb-4 md:px-6 md:pb-6 max-h-[550px] overflow-y-auto nui-slimscroll" }, [
                createVNode("div", { class: "grid grid-cols-12 gap-6" }, [
                  unref(canChangeLayout) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "col-span-12 sm:col-span-7 flex flex-col gap-4"
                  }, [
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        class: "text-muted-900 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Layout selection ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "sm",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Select the layout you want to use for your application ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-muted-100 dark:bg-muted-700/40 rounded-xl" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(layouts), (layout) => {
                        return openBlock(), createBlock(_component_BaseCard, {
                          key: layout.name,
                          role: "button",
                          shape: "curved",
                          class: ["p-2", unref(activeLayoutName) === layout.name && "!border-primary-500"],
                          onClick: ($event) => switchLayout(layout.name)
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "bg-muted-50 dark:bg-muted-700/70 flex items-center justify-center rounded-lg py-6 sm:py-3" }, [
                              createVNode("img", {
                                src: `/img/illustrations/switcher/layout-${layout.name}-default.svg`,
                                class: [
                                  "block dark:hidden max-w-[110px] mx-auto transition-opacity duration-200",
                                  unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-60"
                                ],
                                alt: `${layout.name} layout`
                              }, null, 10, ["src", "alt"]),
                              createVNode("img", {
                                src: `/img/illustrations/switcher/layout-${layout.name}-default-dark.svg`,
                                class: [
                                  "hidden dark:block max-w-[110px] mx-auto transition-opacity duration-200",
                                  unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-60"
                                ],
                                alt: `${layout.name} layout`
                              }, null, 10, ["src", "alt"])
                            ]),
                            createVNode("div", { class: "flex items-center justify-between py-2" }, [
                              createVNode(_component_BaseText, {
                                size: "xs",
                                class: [
                                  "capitalize",
                                  unref(activeLayoutName) === layout.name ? "text-muted-600 dark:text-muted-100" : "text-muted-400 dark:text-muted-500"
                                ]
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(layout.name) + " Layout ", 1)
                                ]),
                                _: 2
                              }, 1032, ["class"]),
                              createVNode(_component_Icon, {
                                name: "ph:check-circle-duotone",
                                class: [
                                  "w-5 h-5 text-success-500 transition-opacity duration-200",
                                  unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-0"
                                ]
                              }, null, 8, ["class"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["class", "onClick"]);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", {
                    class: ["col-span-12 flex flex-col gap-4", [unref(canChangeLayout) ? "sm:col-span-5" : ""]]
                  }, [
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        class: "text-muted-900 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Color selection ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "sm",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Make changes to the color palette ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "space-y-1" }, [
                      createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-x-4" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(primaryPresets, (color) => {
                          return createVNode("div", {
                            key: color.name
                          }, [
                            createVNode("button", {
                              type: "button",
                              class: ["group w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-700/70 transition-colors duration-200", [
                                unref(currentPrimary) === color.name ? "ring-1 ring-primary-500 z-10 relative" : "ring-0"
                              ]],
                              onClick: () => switchPrimary(color)
                            }, [
                              createVNode("span", {
                                class: ["block h-6 w-6 rounded-lg shrink-0", color.class]
                              }, null, 2),
                              createVNode(_component_BaseText, { size: "sm" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(color.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, ["onClick"])
                          ]);
                        }), 64))
                      ]),
                      createVNode("hr", { class: "border-muted-200 dark:border-muted-700" }),
                      createVNode("div", null, [
                        createVNode("button", {
                          type: "button",
                          class: "group w-full flex items-center gap-3 p-2 rounded-lg"
                        }, [
                          createVNode("span", { class: "block h-6 w-6 rounded-lg bg-muted-200 dark:bg-muted-900" }),
                          createVNode(_component_BaseText, { size: "sm" }, {
                            default: withCtx(() => [
                              createTextVNode("Background shade")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center px-2 pt-2" }, [
                          createVNode(_component_BaseText, {
                            size: "xs",
                            class: "text-muted-400"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Pick a shade")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "ml-auto flex items-center justify-end gap-2" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(mutedPresets, (color) => {
                              return createVNode("button", {
                                key: color.name,
                                type: "button",
                                class: ["block h-6 w-6 rounded-full", [
                                  color.class,
                                  unref(currentMuted) === color.name ? "ring-1 ring-primary-500" : "ring-0"
                                ]],
                                "data-nui-tooltip": color.label,
                                onClick: () => switchMuted(color)
                              }, null, 10, ["data-nui-tooltip", "onClick"]);
                            }), 64))
                          ])
                        ])
                      ])
                    ])
                  ], 2)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoAppLayoutSwitcher.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};

const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => props ? h(component, props, slots) : slots.default?.() };
};

const layouts = {
  "admin- - -copy": () => import('./_nuxt/admin - Copy-e33bec64.mjs').then(m => m.default || m),
  admin: () => import('./_nuxt/admin-af0c73c0.mjs').then(m => m.default || m),
  auth: () => import('./_nuxt/auth-397492ef.mjs').then(m => m.default || m),
  default: () => import('./_nuxt/default-245824d9.mjs').then(m => m.default || m),
  landing: () => import('./_nuxt/landing-746c6e46.mjs').then(m => m.default || m),
  sidebar: () => import('./_nuxt/sidebar-f5643b89.mjs').then(m => m.default || m),
  collapse: () => import('./_nuxt/collapse-e565eb1d.mjs').then(m => m.default || m),
  topnav: () => import('./_nuxt/topnav-3801acf9.mjs').then(m => m.default || m),
  empty: () => import('./_nuxt/empty-4b2e2391.mjs').then(m => m.default || m)
};

const LayoutLoader = /* #__PURE__ */ defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_2 = /* #__PURE__ */ defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => unref(props.name) ?? route.meta.layout ?? "default");
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            // @ts-expect-error seems to be an issue in vue types
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = /* #__PURE__ */ defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      if (!name || typeof name === "string" && !(name in layouts)) {
        return context.slots.default?.();
      }
      return h(
        // @ts-expect-error seems to be an issue in vue types
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});

const __nuxt_component_0$1 = /* #__PURE__ */ defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    }
  },
  setup(props, { slots }) {
    const indicator = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle
    });
    const nuxtApp = useNuxtApp();
    const router = useRouter();
    globalMiddleware.unshift(indicator.start);
    router.onError(() => {
      indicator.finish();
    });
    router.beforeResolve((to, from) => {
      if (to === from || to.matched.every((comp, index) => comp.components && comp.components?.default === from.matched[index]?.components?.default)) {
        indicator.finish();
      }
    });
    router.afterEach((_to, _from, failure) => {
      if (failure) {
        indicator.finish();
      }
    });
    nuxtApp.hook("page:finish", indicator.finish);
    nuxtApp.hook("vue:error", indicator.finish);
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: indicator.isLoading.value ? 1 : 0,
        background: props.color || void 0,
        backgroundSize: `${100 / indicator.progress.value * 100}% auto`,
        transform: `scaleX(${indicator.progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
function useLoadingIndicator(opts) {
  const progress = ref(0);
  const isLoading = ref(false);
  computed(() => 1e4 / opts.duration);
  let _timer = null;
  let _throttle = null;
  function start() {
    clear();
    progress.value = 0;
    if (opts.throttle && false) {
      _throttle = setTimeout(() => {
        isLoading.value = true;
      }, opts.throttle);
    } else {
      isLoading.value = true;
    }
  }
  function finish() {
    progress.value = 100;
    _hide();
  }
  function clear() {
    clearInterval(_timer);
    clearTimeout(_throttle);
    _timer = null;
    _throttle = null;
  }
  function _hide() {
    clear();
  }
  return {
    progress,
    isLoading,
    start,
    finish,
    clear
  };
}

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components?.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};

const RouteProvider = /* #__PURE__ */ defineComponent({
  name: "RouteProvider",
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});

const __nuxt_component_0 = /* #__PURE__ */ defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, {
                // @ts-expect-error seems to be an issue in vue types
                default: () => h(RouteProvider, {
                  key,
                  vnode: routeProps.Component,
                  route: routeProps.route,
                  renderKey: key,
                  trackRootNodes: hasTransition,
                  vnodeRef: pageRef
                })
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const app = useAppConfig();
    useHead({
      title: () => route.meta?.title ?? "",
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - ${app.tairo.title}` : `${app.tairo.title}`;
      },
      htmlAttrs: {
        lang: "fa",
        dir: "ltr"
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://waktoo.com/public/landingpage/images/icon-waktoo-blanja.png"
        }
      ],
      meta: [
        { name: "description", content: () => route.meta.description ?? "The most advanced Nuxt and Tailwind CSS dashboard template" },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:site",
          content: "@cssninjaStudio"
        },
        {
          name: "og:image:type",
          content: "image/png"
        },
        {
          name: "og:image:width",
          content: "1200"
        },
        {
          name: "og:image:height",
          content: "630"
        },
        {
          name: "og:image",
          content: `https://media.cssninja.io/embed/marketplace/product/wide.png?headline=${encodeURIComponent(
            route.meta.description || (route.meta.preview ? `${route.meta.preview?.title} - ${route.meta.preview?.description}` : "dfsad")
          )}&url=${encodeURIComponent(
            "https://media.cssninja.io/content/products/logos/tairo-text-white.svg"
          )}&previewUrl=${encodeURIComponent(
            `https://tairo.cssninja.io${route.meta.preview?.src || "/img/screens/documentation-hub.png"}`
          )}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoAppSearch = _sfc_main$r;
      const _component_DemoAppLayoutSwitcher = _sfc_main$5;
      const _component_VueAxePopup = resolveComponent("VueAxePopup");
      const _component_NuxtLayout = __nuxt_component_2;
      const _component_NuxtLoadingIndicator = __nuxt_component_0$1;
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DemoAppSearch, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoAppLayoutSwitcher, null, null, _parent));
      _push(ssrRenderComponent(_component_VueAxePopup, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLoadingIndicator, { color: "rgb(var(--color-primary-500))" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLoadingIndicator, { color: "rgb(var(--color-primary-500))" }),
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BasePlaceholderPage",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: { default: void 0 },
    imageSize: { default: "xs" }
  },
  setup(__props) {
    const props = __props;
    const sizeStyle = {
      xs: "nui-placeholder-xs",
      sm: "nui-placeholder-sm",
      md: "nui-placeholder-md",
      lg: "nui-placeholder-lg",
      xl: "nui-placeholder-xl"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$q;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-placeholder-page", sizeStyle[props.imageSize]]
      }, _attrs))}><div class="nui-placeholder-page-inner">`);
      if ("image" in _ctx.$slots) {
        _push(`<div class="nui-placeholder-page-img">`);
        ssrRenderSlot(_ctx.$slots, "image", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="nui-placeholder-page-content">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h4",
        weight: "medium",
        size: "xl",
        class: "nui-placeholder-page-title"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (props.subtitle) {
        _push(`<p class="nui-placeholder-page-subtitle">${ssrInterpolate(props.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});

const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/base/BasePlaceholderPage.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const __nuxt_component_3 = /* #__PURE__ */ defineComponent({
  name: "DevOnly",
  setup(_, props) {
    return () => props.slots.fallback?.();
  }
});

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TairoError",
  __ssrInlineRender: true,
  props: {
    error: {}
  },
  setup(__props) {
    const props = __props;
    const title = computed(() => {
      if (props.error?.statusCode === 401) {
        return "Not authorized";
      }
      if (props.error?.statusCode === 404) {
        return "Page not found";
      }
      return "Oops... Something went wrong";
    });
    const description = computed(() => {
      if (props.error?.statusCode === 401) {
        return "You are not authorized to access this page.";
      }
      if (props.error?.statusCode === 404) {
        return "We couldn't find the page you were looking for, please contact a system administrator or try again later.";
      }
      return "An error has occured. If the problem persists, please contact a system administrator or try again later.";
    });
    const app = useAppConfig();
    const handleError = () => clearError({ redirect: "/" });
    const retry = () => clearError();
    ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseButton = _sfc_main$a;
      const _component_Icon = __nuxt_component_2$1;
      const _component_DevOnly = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-16" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BasePlaceholderPage, {
        title: unref(title),
        subtitle: unref(description),
        "image-size": "md",
        class: "relative !items-end"
      }, {
        image: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(app).tairo.error?.logo?.component) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(app).tairo.error.logo.component)), unref(app).tairo.error.logo.props, null), _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(app).tairo.error?.logo?.component ? (openBlock(), createBlock(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(app).tairo.error.logo.component)), mergeProps({ key: 0 }, unref(app).tairo.error.logo.props), null, 16)) : createCommentVNode("", true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-4"${_scopeId}><div class="text-muted-400/20 dark:text-muted-400/10 absolute inset-x-0 top-1/3 -translate-y-1/2 text-[13rem] font-bold sm:text-[20rem]"${_scopeId}><span${_scopeId}>${ssrInterpolate(props.error?.statusCode)}</span></div><div class="mx-auto flex w-full max-w-xs items-center justify-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              shape: "curved",
              class: "mx-auto !h-12 w-full max-w-[160px] items-center gap-2",
              onClick: handleError
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, { name: "feather:arrow-left" }, null, _parent3, _scopeId2));
                  _push3(` Back to home `);
                } else {
                  return [
                    createVNode(_component_Icon, { name: "feather:arrow-left" }),
                    createTextVNode(" Back to home ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DevOnly, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseButton, {
                    color: "muted",
                    shape: "curved",
                    class: "mx-auto !h-12 w-full max-w-[160px]",
                    onClick: retry
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "feather:refresh-cw",
                          class: "h-3 w-3"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span${_scopeId3}>Clear Error</span>`);
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "feather:refresh-cw",
                            class: "h-3 w-3"
                          }),
                          createVNode("span", null, "Clear Error")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseButton, {
                      color: "muted",
                      shape: "curved",
                      class: "mx-auto !h-12 w-full max-w-[160px]",
                      onClick: retry
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "feather:refresh-cw",
                          class: "h-3 w-3"
                        }),
                        createVNode("span", null, "Clear Error")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "mt-4" }, [
                createVNode("div", { class: "text-muted-400/20 dark:text-muted-400/10 absolute inset-x-0 top-1/3 -translate-y-1/2 text-[13rem] font-bold sm:text-[20rem]" }, [
                  createVNode("span", null, toDisplayString(props.error?.statusCode), 1)
                ]),
                createVNode("div", { class: "mx-auto flex w-full max-w-xs items-center justify-center gap-2" }, [
                  createVNode(_component_BaseButton, {
                    shape: "curved",
                    class: "mx-auto !h-12 w-full max-w-[160px] items-center gap-2",
                    onClick: handleError
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, { name: "feather:arrow-left" }),
                      createTextVNode(" Back to home ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DevOnly, null, {
                    default: withCtx(() => [
                      createVNode(_component_BaseButton, {
                        color: "muted",
                        shape: "curved",
                        class: "mx-auto !h-12 w-full max-w-[160px]",
                        onClick: retry
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "feather:refresh-cw",
                            class: "h-3 w-3"
                          }),
                          createVNode("span", null, "Clear Error")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoError.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: {}
  },
  setup(__props) {
    const props = __props;
    const app = useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSidebarLayout = _sfc_main$b;
      const _component_TairoError = _sfc_main$2;
      _push(ssrRenderComponent(_component_TairoSidebarLayout, mergeProps({ sidebar: false }, _attrs), {
        "toolbar-title": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(app).tairo.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(app).tairo.title), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoError, {
              error: props.error
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoError, {
                error: props.error
              }, null, 8, ["error"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-sidebar/error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {
  __name: 'nuxt-root',
  __ssrInlineRender: true,
  setup(__props) {

const IslandRenderer = /* #__PURE__ */ defineAsyncComponent(() => import('./_nuxt/island-renderer-7c99c529.mjs').then(r => r.default || r))
  ;

const nuxtApp = useNuxtApp();
nuxtApp.deferHydration();

nuxtApp.ssrContext.url ;
const SingleRenderer = false    ;

// Inject default route (outside of pages) as active route
provide(PageRouteSymbol, useRoute());

// vue:setup hook
nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup');

// error handling
const error = useError();
onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError));
  {
    const p = nuxtApp.runWithContext(() => showError(err));
    onServerPrefetch(() => p);
    return false // suppress error from breaking render
  }
});

// Component islands context
const { islandContext } = nuxtApp.ssrContext;

return (_ctx, _push, _parent, _attrs) => {
  ssrRenderSuspense(_push, {
    default: () => {
      if (unref(error)) {
        _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
      } else if (unref(islandContext)) {
        _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
      } else if (unref(SingleRenderer)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
      } else {
        _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      }
    },
    _: 1
  });
}
}

};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("../node_modules/.pnpm/nuxt@3.6.5_@parcel+watcher@2.3.0_@types+node@20.6.2_eslint@8.49.0_meow@9.0.0_optionator@0.9.3_6vadiwalut5cep5bremipouzle/node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const RootComponent = _sfc_main;

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    if (ssrContext?._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { _sfc_main$x as A, _sfc_main$y as B, _sfc_main$B as C, _sfc_main$3 as D, toRef as E, _sfc_main$i as F, _sfc_main$b as G, onClickOutside as H, usePanels as I, useCollapse as J, useTailwindBreakpoints as K, resolveComponentOrNative as L, _sfc_main$g as M, _sfc_main$d as N, _sfc_main$k as O, _sfc_main$c as P, __nuxt_component_0$1 as Q, useLayoutSwitcher as R, useWindowScroll as S, useMetaKey as T, useNinjaWindowScroll as U, _sfc_main$6 as V, __nuxt_component_1 as _, __nuxt_component_2$1 as a, _sfc_main$q as b, createError as c, _sfc_main$p as d, entry$1 as default, _sfc_main$v as e, _sfc_main$a as f, _export_sfc as g, useState as h, useAppConfig as i, useVModel as j, useNinjaId as k, useRuntimeConfig as l, _sfc_main$t as m, useNuxtApp as n, _sfc_main$D as o, __nuxt_component_0$2 as p, useTailwindColors as q, useNinjaButton as r, useIntersectionObserver as s, useRequestEvent as t, useRouter as u, useHead as v, __nuxt_component_0 as w, useAsyncData as x, useRequestFetch as y, useRoute as z };
