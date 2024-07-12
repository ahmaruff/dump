import { o as useNuxtApp, f as useRouter$1, w as useRuntimeConfig, g as _sfc_main$3 } from './server.mjs';
import { u as useJwtAuth } from './composables-DmWjNlaH.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, withModifiers, Transition, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { Menu, MenuButton, MenuItems } from '@headlessui/vue';
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
import '../runtime.mjs';
import 'fs';
import 'path';
import 'unhead';
import 'wretch';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import '@unhead/shared';

const _imports_0 = publicAssetsURL("/placeholder-file.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ToolbarAccountMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { $jwtAuth } = useNuxtApp();
    const router = useRouter$1();
    const { user, loggedIn } = useJwtAuth();
    function onLogout() {
      console.log("logout");
      $jwtAuth.logout(() => {
        router.push(useRuntimeConfig().public.auth.redirects.logout);
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group inline-flex items-center justify-center text-right" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Menu), {
        as: "div",
        class: "relative h-9 w-9 text-left rtl:text-right"
      }, {
        default: withCtx(({ close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MenuButton), { as: "template" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button type="button" class="group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"${_scopeId2}><div class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId2}></div></button>`);
                } else {
                  return [
                    createVNode("button", {
                      type: "button",
                      class: "group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                    }, [
                      createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                        createVNode("img", {
                          src: _imports_0,
                          class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                          alt: ""
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(``);
            _push2(ssrRenderComponent(unref(MenuItems), { class: "divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute end-0 mt-2 w-64 origin-top-right divide-y rounded-md border bg-white shadow-lg focus:outline-none" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6 text-center"${_scopeId2}><div class="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId2}></div><div class="mt-3"${_scopeId2}><h6 class="font-heading text-muted-800 text-sm font-medium dark:text-white"${_scopeId2}>${ssrInterpolate(unref(user).name)}</h6><p class="text-muted-400 mb-4 font-sans text-xs"${_scopeId2}>${ssrInterpolate(unref(user).email)}</p>`);
                  _push3(ssrRenderComponent(_component_BaseButton, {
                    to: "/layouts/profile-edit",
                    shape: "curved",
                    class: "w-full",
                    onClick: close
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Manage Account `);
                      } else {
                        return [
                          createTextVNode("Manage Account ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="p-6"${_scopeId2}><form action="#" method="post"${_scopeId2}><button type="submit" shape="curved" class="w-full"${_scopeId2}>Logout</button></form></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-6 text-center" }, [
                      createVNode("div", { class: "relative mx-auto flex h-20 w-20 items-center justify-center rounded-full" }, [
                        createVNode("img", {
                          src: _imports_0,
                          class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                          alt: ""
                        })
                      ]),
                      createVNode("div", { class: "mt-3" }, [
                        createVNode("h6", { class: "font-heading text-muted-800 text-sm font-medium dark:text-white" }, toDisplayString(unref(user).name), 1),
                        createVNode("p", { class: "text-muted-400 mb-4 font-sans text-xs" }, toDisplayString(unref(user).email), 1),
                        createVNode(_component_BaseButton, {
                          to: "/layouts/profile-edit",
                          shape: "curved",
                          class: "w-full",
                          onClickPassive: close
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Manage Account ")
                          ]),
                          _: 2
                        }, 1032, ["onClickPassive"])
                      ])
                    ]),
                    createVNode("div", { class: "p-6" }, [
                      createVNode("form", {
                        action: "#",
                        method: "post",
                        onSubmit: withModifiers(onLogout, ["prevent"])
                      }, [
                        createVNode("button", {
                          type: "submit",
                          shape: "curved",
                          class: "w-full"
                        }, "Logout")
                      ], 32)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MenuButton), { as: "template" }, {
                default: withCtx(() => [
                  createVNode("button", {
                    type: "button",
                    class: "group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                  }, [
                    createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                      createVNode("img", {
                        src: _imports_0,
                        class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                        alt: ""
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(Transition, {
                "enter-active-class": "transition duration-100 ease-out",
                "enter-from-class": "transform scale-95 opacity-0",
                "enter-to-class": "transform scale-100 opacity-100",
                "leave-active-class": "transition duration-75 ease-in",
                "leave-from-class": "transform scale-100 opacity-100",
                "leave-to-class": "transform scale-95 opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode(unref(MenuItems), { class: "divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute end-0 mt-2 w-64 origin-top-right divide-y rounded-md border bg-white shadow-lg focus:outline-none" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "p-6 text-center" }, [
                        createVNode("div", { class: "relative mx-auto flex h-20 w-20 items-center justify-center rounded-full" }, [
                          createVNode("img", {
                            src: _imports_0,
                            class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                            alt: ""
                          })
                        ]),
                        createVNode("div", { class: "mt-3" }, [
                          createVNode("h6", { class: "font-heading text-muted-800 text-sm font-medium dark:text-white" }, toDisplayString(unref(user).name), 1),
                          createVNode("p", { class: "text-muted-400 mb-4 font-sans text-xs" }, toDisplayString(unref(user).email), 1),
                          createVNode(_component_BaseButton, {
                            to: "/layouts/profile-edit",
                            shape: "curved",
                            class: "w-full",
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Manage Account ")
                            ]),
                            _: 2
                          }, 1032, ["onClickPassive"])
                        ])
                      ]),
                      createVNode("div", { class: "p-6" }, [
                        createVNode("form", {
                          action: "#",
                          method: "post",
                          onSubmit: withModifiers(onLogout, ["prevent"])
                        }, [
                          createVNode("button", {
                            type: "submit",
                            shape: "curved",
                            class: "w-full"
                          }, "Logout")
                        ], 32)
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/ToolbarAccountMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
