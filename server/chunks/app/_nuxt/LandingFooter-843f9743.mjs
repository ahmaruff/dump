import { _ as __nuxt_component_1 } from '../server.mjs';
import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LandingFooter",
  __ssrInlineRender: true,
  setup(__props) {
    (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      const _component_center = resolveComponent("center");
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 border-muted-200 dark:border-muted-700 relative border-t bg-white" }, _attrs))}><div class="ltablet:flex-row mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-8 lg:flex-row">`);
      _push(ssrRenderComponent(_component_NuxtLink, { "aria-label": "Go to Tairo homepage" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="txt-footer-1"${_scopeId}>Vostro Solutions</span><br${_scopeId}><span class="txt-footer-2"${_scopeId}>Vostro Solutions - Where Innovation Meets Excellence</span>`);
          } else {
            return [
              createVNode("span", { class: "txt-footer-1" }, "Vostro Solutions"),
              createVNode("br"),
              createVNode("span", { class: "txt-footer-2" }, "Vostro Solutions - Where Innovation Meets Excellence")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-muted-500 dark:text-muted-400 ltablet:w-1/5 ltablet:justify-end ltablet:mt-0 mt-6 flex w-full items-center justify-center text-sm lg:mt-0 lg:w-1/5 lg:justify-end"><span><table><tr><td class="tdss2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://cssninja.io",
        target: "_blank",
        rel: "noopener"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1714678803/waktoo-commerce/social-media-facebook.svg"${_scopeId}>`);
          } else {
            return [
              createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1714678803/waktoo-commerce/social-media-facebook.svg" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</td><td class="tdss2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://cssninja.io",
        target: "_blank",
        rel: "noopener"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1714678803/waktoo-commerce/social-media-tiktok.svg"${_scopeId}>`);
          } else {
            return [
              createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1714678803/waktoo-commerce/social-media-tiktok.svg" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</td><td class="tdss2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://cssninja.io",
        target: "_blank",
        rel: "noopener"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1714678803/waktoo-commerce/social-media-twitter.svg"${_scopeId}>`);
          } else {
            return [
              createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1714678803/waktoo-commerce/social-media-twitter.svg" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</td><td class="tdss2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://cssninja.io",
        target: "_blank",
        rel: "noopener"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1714678803/waktoo-commerce/social-media-instagram.svg"${_scopeId}>`);
          } else {
            return [
              createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1714678803/waktoo-commerce/social-media-instagram.svg" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</td></tr></table></span></div></div><div class="txt-center">`);
      _push(ssrRenderComponent(_component_center, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<table width="200"${_scopeId}><tr${_scopeId}><td class="tdss2" width="60"${_scopeId}><span class="txt-footer-2"${_scopeId}>Made by</span></td><td class="tdss2"${_scopeId}><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714678957/waktoo-commerce/logo-waktoo-small-footer.svg"${_scopeId}></td></tr></table>`);
          } else {
            return [
              createVNode("table", { width: "200" }, [
                createVNode("tr", null, [
                  createVNode("td", {
                    class: "tdss2",
                    width: "60"
                  }, [
                    createVNode("span", { class: "txt-footer-2" }, "Made by")
                  ]),
                  createVNode("td", { class: "tdss2" }, [
                    createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1714678957/waktoo-commerce/logo-waktoo-small-footer.svg" })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><br></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/landing/components/LandingFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
