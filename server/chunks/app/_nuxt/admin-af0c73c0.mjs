import { g as _export_sfc, i as useAppConfig, L as resolveComponentOrNative, M as _sfc_main$g, _ as __nuxt_component_1, N as _sfc_main$d, O as _sfc_main$k, P as _sfc_main$c } from '../server.mjs';
import { useSSRContext, defineComponent, onUnmounted, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, renderSlot, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderVNode, ssrRenderClass } from 'vue/server-renderer';
import { u as useSidebar } from './sidebar-42eb5269.mjs';
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
  __name: "SidebarLayout",
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
        !props.condensed && !props.horizontalScroll && "mx-auto w-full max-w-7xl"
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sidebar/SidebarLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SidebarLayout = _sfc_main$1;
  _push(ssrRenderComponent(_component_SidebarLayout, _attrs, {
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
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { admin as default };
