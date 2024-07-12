import { z as useAppConfig, u as useRoute$1, b as __nuxt_component_1$1, a as _sfc_main$7$1, d as _export_sfc } from './server.mjs';
import { a as useSidebarConfig, u as useSidebar } from './sidebar-menu-B7IQtp6V.mjs';
import { r as resolveComponentOrNative, _ as _sfc_main$8 } from './TairoPanels-gzs3q6GY.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, renderSlot, resolveDynamicComponent, unref, openBlock, createBlock, createCommentVNode, computed, createTextVNode, toDisplayString, ref } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrInterpolate, ssrRenderVNode, ssrRenderClass, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SidebarNavigationItem",
  __ssrInlineRender: true,
  props: {
    sidebar: {}
  },
  setup(__props) {
    const props = __props;
    const { currentName, isOpen } = useSidebar();
    function onSidebarItemClick() {
      if (typeof props.sidebar.click === "function") {
        return props.sidebar.click();
      }
      currentName.value = props.sidebar.title;
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-16 w-full items-center justify-center" }, _attrs))}><span>${ssrInterpolate(props.sidebar.order)}</span>`);
      if (props.sidebar.component) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(props.sidebar.component)), props.sidebar.props, null), _parent);
      } else if (props.sidebar.to && props.sidebar.icon) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: props.sidebar.to,
          class: "text-muted-400 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300",
          "data-nui-tooltip-position": "right",
          "data-nui-tooltip": props.sidebar.title,
          onClick: ($event) => onSidebarItemClick()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              if (props.sidebar.icon) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(props.sidebar.icon.name)), {
                  name: props.sidebar.title,
                  to: (_a2 = props.sidebar) == null ? void 0 : _a2.to
                }, null), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                props.sidebar.icon ? (openBlock(), createBlock(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(props.sidebar.icon.name)), {
                  key: 0,
                  name: props.sidebar.title,
                  to: (_b = props.sidebar) == null ? void 0 : _b.to
                }, null, 8, ["name", "to"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (props.sidebar.icon) {
        _push(`<button type="button" class="${ssrRenderClass([
          unref(currentName) === props.sidebar.title ? "text-primary-500" : "text-muted-400",
          "flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300"
        ])}" data-nui-tooltip-position="right"${ssrRenderAttr("data-nui-tooltip", props.sidebar.title)}>`);
        if (props.sidebar.icon) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(props.sidebar.icon.name)), {
            name: props.sidebar.title,
            to: (_a = props.sidebar) == null ? void 0 : _a.to
          }, null), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/SidebarNavigationItem.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SidebarNavigation",
  __ssrInlineRender: true,
  props: {
    subsidebar: { type: Boolean, default: true },
    expanded: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const { isOpen, current, sidebars } = useSidebar();
    const startSidebars = computed(
      () => {
        var _a;
        return (_a = sidebars.value) == null ? void 0 : _a.filter(
          (sidebar2) => !sidebar2.position || sidebar2.position === "start"
        );
      }
    );
    const endSidebars = computed(
      () => {
        var _a;
        return (_a = sidebars.value) == null ? void 0 : _a.filter((sidebar2) => sidebar2.position === "end");
      }
    );
    const subsidebarEnabled = computed(() => {
      var _a, _b;
      return Boolean(
        props.subsidebar !== false && ((_b = (_a = current.value) == null ? void 0 : _a.subsidebar) == null ? void 0 : _b.component)
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashboardSidebarNavigationItem = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pointer-events-none fixed start-0 top-0 z-[60] flex h-full xl:z-10" }, _attrs))}><div class="${ssrRenderClass([
        unref(isOpen) ? "" : "-translate-x-full rtl:translate-x-full xl:translate-x-0 rtl:xl:-translate-x-0",
        "border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-20 flex h-full w-[80px] flex-col border-r bg-white transition-all duration-300"
      ])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div>`);
      ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<!--[-->`);
      ssrRenderList(unref(startSidebars), (item) => {
        _push(ssrRenderComponent(_component_DashboardSidebarNavigationItem, {
          key: item.title,
          sidebar: item
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="mt-auto"><!--[-->`);
      ssrRenderList(unref(endSidebars), (item) => {
        _push(ssrRenderComponent(_component_DashboardSidebarNavigationItem, {
          key: item.title,
          sidebar: item
        }, null, _parent));
      });
      _push(`<!--]-->`);
      ssrRenderSlot(_ctx.$slots, "end", {}, null, _push, _parent);
      _push(`</div></div>`);
      if (unref(subsidebarEnabled)) {
        _push(`<div class="${ssrRenderClass([
          unref(isOpen) ? "translate-plus-2" : "translate-plus",
          "border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-10 h-full w-[220px] border-r bg-white transition-all duration-300"
        ])}">`);
        ssrRenderSlot(_ctx.$slots, "subnav", {}, () => {
          var _a, _b, _c, _d, _e;
          if ((_b = (_a = unref(current)) == null ? void 0 : _a.subsidebar) == null ? void 0 : _b.component) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))((_c = unref(current).subsidebar) == null ? void 0 : _c.component)), {
              key: (_e = (_d = unref(current)) == null ? void 0 : _d.subsidebar) == null ? void 0 : _e.component
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/SidebarNavigation.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SidebarTools",
  __ssrInlineRender: true,
  setup(__props) {
    useAppConfig();
    const { hasSubsidebar, sidebarConfiguration } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-2 z-10" }, _attrs))}><!--[-->`);
      ssrRenderList((_b = (_a = unref(sidebarConfiguration)) == null ? void 0 : _a.toolbar) == null ? void 0 : _b.tools, (tool) => {
        _push(`<!--[-->`);
        if (tool.component) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), mergeProps({
            key: tool.component,
            ref_for: true
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/SidebarTools.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SidebarToolbar",
  __ssrInlineRender: true,
  props: {
    sidebar: { type: Boolean, default: true },
    horizontalScroll: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { hasSubsidebar, sidebarConfiguration } = useSidebar();
    const route = useRoute$1();
    computed(() => {
      var _a;
      return props.sidebar && ((_a = sidebarConfiguration.value.toolbar) == null ? void 0 : _a.showNavBurger) || hasSubsidebar.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_BaseHeading = _sfc_main$7$1;
      const _component_DashboardSidebarTools = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative mb-5 flex h-16 items-center gap-2", props.horizontalScroll && "pe-4 xl:pe-10"]
      }, _attrs))}>`);
      if ((_a = unref(sidebarConfiguration).toolbar) == null ? void 0 : _a.showTitle) {
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
      _push(`<div class="ms-auto"></div>`);
      _push(ssrRenderComponent(_component_DashboardSidebarTools, { class: "h-16" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/SidebarToolbar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
function useNinjaWindowScroll() {
  const x = ref(0);
  const y = ref(0);
  return { x, y };
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SidebarCircularMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useNinjaWindowScroll();
    const { sidebarConfiguration } = useSidebar();
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
      var _a, _b;
      return ((_b = (_a = sidebarConfiguration.value.circularMenu) == null ? void 0 : _a.tools) == null ? void 0 : _b.slice(0, 4)) || [];
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
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), mergeProps({ ref_for: true }, tool.props), null), _parent);
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/SidebarCircularMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
    const { setup, currentName, isOpen, toggle, sidebarConfiguration } = useSidebar();
    setup();
    const sidebarEnabled = computed(() => {
      var _a;
      return ((_a = sidebarConfiguration.value.navigation) == null ? void 0 : _a.enabled) !== false && props.sidebar !== false;
    });
    const toolbarEnabled = computed(() => {
      var _a;
      return ((_a = sidebarConfiguration.value.toolbar) == null ? void 0 : _a.enabled) !== false && props.toolbar !== false;
    });
    const circularMenuEnabled = computed(() => {
      var _a;
      return ((_a = sidebarConfiguration.value.circularMenu) == null ? void 0 : _a.enabled) !== false && props.circularMenu !== false;
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
      list.push("xl:max-w-[calc(100%_-_80px)] xl:ms-[80px]");
      if (props.horizontalScroll) {
        list.push("!pe-0 xl:!pe-0");
      }
      return list;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashboardSidebarNavigation = _sfc_main$6;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_DashboardSidebarToolbar = _sfc_main$4;
      const _component_TairoPanels = _sfc_main$8;
      const _component_DashboardSidebarCircularMenu = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-muted-100 dark:bg-muted-900 pb-20" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
        if (unref(sidebarEnabled)) {
          _push(ssrRenderComponent(_component_DashboardSidebarNavigation, {
            subsidebar: props.subsidebar
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a, _b, _c, _d;
              if (_push2) {
                if ((_b = (_a = unref(sidebarConfiguration).navigation) == null ? void 0 : _a.logo) == null ? void 0 : _b.component) {
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
                              unref(sidebarConfiguration).navigation.logo.component
                            )
                          ), unref(sidebarConfiguration).navigation.logo.props, null), _parent3, _scopeId2);
                        } else {
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(
                              ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                                unref(sidebarConfiguration).navigation.logo.component
                              )
                            ), unref(sidebarConfiguration).navigation.logo.props, null, 16))
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
                  ((_d = (_c = unref(sidebarConfiguration).navigation) == null ? void 0 : _c.logo) == null ? void 0 : _d.component) ? (openBlock(), createBlock("div", {
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
                              unref(sidebarConfiguration).navigation.logo.component
                            )
                          ), unref(sidebarConfiguration).navigation.logo.props, null, 16))
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
          _push(ssrRenderComponent(_component_DashboardSidebarToolbar, {
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
        _push(ssrRenderComponent(_component_DashboardSidebarCircularMenu, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/SidebarLayout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<img${ssrRenderAttrs(mergeProps({ src: "https://res.cloudinary.com/daraki09f/image/upload/v1713948129/waktoo-commerce/logo-waktoo-commerce.png" }, _attrs))}>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/logo/Commerce.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const circularMenu = false;
const horizontalScroll = true;
const sidebar = true;
const subsidebar = true;
const toolbar = true;
const condensed = false;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarCfg = {
      circularMenu: {
        enabled: false,
        tools: []
      },
      navigation: {
        enabled: true,
        logo: {
          component: "LogoCommerce",
          props: {}
        },
        startOpen: false,
        items: [
          {
            title: "Beranda",
            to: "/home",
            icon: {
              name: "IconDashboard"
            }
          },
          {
            title: "Pesanan",
            to: "/Pesanan",
            icon: {
              name: "IconOrder"
            }
          },
          {
            title: "Toko",
            to: "/toko-admin",
            icon: {
              name: "IconShop"
            },
            subsidebar: {
              component: "ShopSubsidebarDashboard"
            }
          },
          {
            title: "Produk",
            to: "/admin-produk",
            icon: {
              name: "IconProduct"
            }
          }
        ]
      },
      toolbar: {
        enabled: true,
        showNavBurger: true,
        showTitle: true,
        tools: [
          {
            component: "ToolbarAccountMenu"
          }
        ]
      }
    };
    const { setSidebarConfig } = useSidebarConfig();
    setSidebarConfig(sidebarCfg);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashboardSidebarLayout = _sfc_main$2;
      const _component_LogoCommerce = __nuxt_component_1;
      _push(ssrRenderComponent(_component_DashboardSidebarLayout, mergeProps({
        "circular-menu": circularMenu,
        "horizontal-scroll": horizontalScroll,
        sidebar,
        condensed,
        subsidebar,
        toolbar
      }, _attrs), {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LogoCommerce, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LogoCommerce)
            ];
          }
        }),
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
