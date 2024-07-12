import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { d as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Loading",
  __ssrInlineRender: true,
  props: {
    type: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading-container" }, _attrs))} data-v-fc8c8a78>`);
      if (_ctx.type === "spinner") {
        _push(`<div class="loading-spinner" data-v-fc8c8a78></div>`);
      } else if (_ctx.type === "dots") {
        _push(`<div class="loading-dots" data-v-fc8c8a78><div data-v-fc8c8a78></div><div data-v-fc8c8a78></div><div data-v-fc8c8a78></div></div>`);
      } else if (_ctx.type === "bars") {
        _push(`<div class="loading-bars" data-v-fc8c8a78><div data-v-fc8c8a78></div><div data-v-fc8c8a78></div><div data-v-fc8c8a78></div><div data-v-fc8c8a78></div><div data-v-fc8c8a78></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Loading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fc8c8a78"]]);

export { __nuxt_component_4 as _ };
