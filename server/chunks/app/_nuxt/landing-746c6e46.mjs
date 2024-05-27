import { g as _export_sfc, S as useWindowScroll, h as useState, T as useMetaKey, I as usePanels, U as useNinjaWindowScroll, O as _sfc_main$k } from '../server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LandingNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    useWindowScroll();
    useState("search-open", () => false);
    ref(false);
    useMetaKey();
    usePanels();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-nvbr" }, _attrs))}><div class="group/nav ltablet:max-w-[1000px] ptablet:max-w-[47rem] fixed inset-x-0 top-0 z-50 mx-auto group-[&amp;.scrolled]/landing:mt-2 group-[&amp;:not(.scrolled)]/landing:mt-4 motion-safe:transition-all motion-safe:duration-200 lg:max-w-7xl bg-landingpage"><div class="group-[&amp;.scrolled]/landing:dark:bg-muted-950/95 group-[&amp;.scrolled]/landing:border-muted-200 group-[&amp;.scrolled]/landing:dark:border-muted-700 group-[&amp;.scrolled]/landing:motion-safe:shadow-muted-300/30 group-[&amp;.scrolled]/landing:motion-safe:dark:shadow-muted-800/20 flex items-center justify-between border p-4 group-[&amp;:not(.scrolled)]/landing:border-transparent group-[&amp;.scrolled]/landing:bg-white/95 motion-safe:transition-all motion-safe:duration-200 group-[&amp;.scrolled]/landing:motion-safe:shadow-xl border-white-2"><img src="https://res.cloudinary.com/daraki09f/image/upload/v1715803177/waktoo-commerce/Logo.svg" class="img-logo-header"><div class="right-nav-users"><div class="txt-users"><span id="mobile">Arnold Suasanasegar</span><img src="https://res.cloudinary.com/daraki09f/image/upload/v1715804900/waktoo-commerce/foto_user.jpg" class="img-user-nav"></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/landing/components/LandingNavbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LandingLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useNinjaWindowScroll();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingNavbar = _sfc_main$2;
      const _component_TairoPanels = _sfc_main$k;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["group/landing overflow-hidden", unref(y) > 60 ? "scrolled" : ""]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_LandingNavbar, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_TairoPanels, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/landing/components/LandingLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LandingLayout = _sfc_main$1;
  _push(ssrRenderComponent(_component_LandingLayout, _attrs, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/landing/layouts/landing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const landing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { landing as default };
