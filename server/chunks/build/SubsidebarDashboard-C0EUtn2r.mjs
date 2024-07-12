import { useSSRContext, defineComponent, withCtx, createVNode, mergeProps, unref, toDisplayString, ref, computed, watchEffect } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { u as useRoute$1, d as _export_sfc, _ as __nuxt_component_0$2, b as __nuxt_component_1 } from './server.mjs';
import { u as useSidebar } from './sidebar-menu-B7IQtp6V.mjs';
import { a as useTailwindBreakpoints } from './tailwind-DxNoTA1-.mjs';
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
import './index-CwDpmA7v.mjs';

const _sfc_main$6 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-screen flex-col z-10" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
  _push(`<div class="nui-slimscroll relative h-full w-full overflow-y-auto"><div class="px-6 pb-8">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="dark:from-muted-800 pointer-events-none fixed bottom-0 z-10 h-10 w-[212px] bg-gradient-to-t from-white to-transparent"></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/Subsidebar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SubsidebarHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { current, isOpen } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-16 w-full items-center px-6" }, _attrs))}>`);
      if (unref(current)) {
        _push(`<div class="font-heading text-muted-700 text-lg font-light capitalize dark:text-white">${ssrInterpolate(unref(current).title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="button" class="text-muted-400 hover:bg-muted-100 hover:text-muted-600 ms-auto flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 xl:hidden">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "feather:chevron-left",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</button></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/SubsidebarHeader.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<li${ssrRenderAttrs(mergeProps({ class: "border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t" }, _attrs))}></li>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/SubsidebarMenuDivider.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SubsidebarMenuLink",
  __ssrInlineRender: true,
  props: {
    name: {},
    to: {}
  },
  setup(__props) {
    const props = __props;
    const { toggle } = useSidebar();
    const { xl } = useTailwindBreakpoints();
    function onClick() {
      console.log("onClick", props.name, xl.value);
      if (xl.value) {
        return;
      }
      toggle();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "mb-1 flex min-h-[2rem] items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: props.to,
        class: "nui-focus text-muted-400 hover:text-primary-500 flex w-full items-center transition-colors duration-300",
        onClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-sans text-sm"${_scopeId}>${ssrInterpolate(props.name)}</span>`);
          } else {
            return [
              createVNode("span", { class: "font-sans text-sm" }, toDisplayString(props.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/SubsidebarMenuLink.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SubsidebarMenuCollapseLinks",
  __ssrInlineRender: true,
  props: {
    name: {},
    children: {}
  },
  setup(__props) {
    const props = __props;
    const open = ref(false);
    const route = useRoute$1();
    ref();
    const hasActiveChild = computed(() => {
      return props.children.some((item) => {
        if (item.exact === true) {
          return route.path === item.to;
        }
        return route.path.startsWith(item.to);
      });
    });
    watchEffect(() => {
      if (hasActiveChild.value) {
        open.value = true;
      }
    });
    function isChildActive(link) {
      return link.exact && route.path === link.to || !link.exact && route.path.startsWith(link.to);
    }
    const { toggle } = useSidebar();
    const { xl } = useTailwindBreakpoints();
    function onLinkClick() {
      if (xl.value) {
        return;
      }
      toggle();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "group mb-1 min-h-[2rem]" }, _attrs))}><a href="#" class="nui-focus relative top-0.5 flex items-center"><span class="text-muted-400 group-hover:text-primary-500 relative inline-flex items-center gap-2 font-sans text-sm transition-colors duration-300">`);
      if (unref(hasActiveChild)) {
        _push(`<span class="bg-primary-500 absolute -start-3 top-2 h-1 w-1 rounded-full"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(props.name)}</span></span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "feather:chevron-down",
        class: ["text-muted-400 ms-auto block h-4 w-4 transition-transform duration-300", {
          "group-focus-within:rotate-180": !unref(open),
          "rotate-180": unref(open)
        }]
      }, null, _parent));
      _push(`</a><div class="${ssrRenderClass([{
        "max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100": !unref(open),
        "max-h-max opacity-100": unref(open)
      }, "transition-all duration-150"])}">`);
      if (props == null ? void 0 : props.children) {
        _push(`<ul class="py-2"><!--[-->`);
        ssrRenderList(props.children, (link) => {
          _push(`<li class="flex h-8 w-full items-center">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: link.to,
            class: [{
              "text-primary-500": isChildActive(link)
            }, "nui-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"],
            onClick: onLinkClick
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: link.icon,
                  class: "me-2 h-5 w-5"
                }, null, _parent2, _scopeId));
                _push2(`<span class="font-sans text-xs"${_scopeId}>${ssrInterpolate(link.name)}</span>`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: link.icon,
                    class: "me-2 h-5 w-5"
                  }, null, 8, ["name"]),
                  createVNode("span", { class: "font-sans text-xs" }, toDisplayString(link.name), 1)
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
      _push(`</div></li>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/SubsidebarMenuCollapseLinks.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SubsidebarMenu",
  __ssrInlineRender: true,
  props: {
    navigation: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashboardSubsidebarMenuDivider = __nuxt_component_0;
      const _component_DashboardSubsidebarMenuLink = _sfc_main$3;
      const _component_DashboardSubsidebarMenuCollapseLinks = _sfc_main$2;
      _push(`<ul${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(props.navigation, (group, index) => {
        _push(`<!--[-->`);
        if ("divider" in group) {
          _push(ssrRenderComponent(_component_DashboardSubsidebarMenuDivider, {
            key: `${index}-divider`
          }, null, _parent));
        } else if ("to" in group) {
          _push(ssrRenderComponent(_component_DashboardSubsidebarMenuLink, mergeProps({ ref_for: true }, group, {
            key: `${index}-link`
          }), null, _parent));
        } else if ("children" in group) {
          _push(ssrRenderComponent(_component_DashboardSubsidebarMenuCollapseLinks, mergeProps({ ref_for: true }, group, {
            key: `${index}-collapse`
          }), null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/SubsidebarMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SubsidebarDashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const navigation = [
      {
        name: "Shop",
        children: [
          {
            name: "Shop 1",
            icon: "ic:baseline-storefront",
            to: "/produk",
            exact: true
          },
          {
            name: "Shop 2",
            icon: "ic:baseline-storefront",
            to: "/produk"
          },
          {
            name: "Shop 3",
            icon: "ic:baseline-storefront",
            to: "/produk"
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashboardSubsidebar = __nuxt_component_0$1;
      const _component_DashboardSubsidebarHeader = _sfc_main$5;
      const _component_DashboardSubsidebarMenu = _sfc_main$1;
      _push(ssrRenderComponent(_component_DashboardSubsidebar, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DashboardSubsidebarHeader, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DashboardSubsidebarHeader)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DashboardSubsidebarMenu, { navigation }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DashboardSubsidebarMenu, { navigation })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/shop/SubsidebarDashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
