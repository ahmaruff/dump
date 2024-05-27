import { s as useIntersectionObserver, p as __nuxt_component_0$2, h as useState } from '../server.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext, createElementBlock, defineAsyncComponent, nextTick } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      if (mounted.value) {
        return slots.default?.();
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const useApexChartLoaded = () => useState("apex-loaded", () => false);
const LazyApexCharts = /* @__PURE__ */ defineAsyncComponent({
  suspensible: false,
  loader: () => import('../../vue3-apexcharts.common.mjs').then(function (n) { return n.v; }).then((module) => {
    nextTick(() => {
      useApexChartLoaded().value = true;
    });
    return module.default;
  })
});
function useLazyApexCharts() {
  const isLoaded = useApexChartLoaded();
  return {
    LazyApexCharts,
    isLoaded
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddonApexcharts",
  __ssrInlineRender: true,
  props: {
    type: {},
    height: {},
    width: {},
    series: {},
    options: {}
  },
  setup(__props) {
    const { isLoaded } = useLazyApexCharts();
    const target = ref(null);
    const targetIsVisible = ref(false);
    const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        targetIsVisible.value = isIntersecting;
        stop();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceload = __nuxt_component_0$2;
      const _component_ClientOnly = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "target",
        ref: target
      }, _attrs))}>`);
      if (!unref(isLoaded) && !unref(targetIsVisible)) {
        _push(ssrRenderComponent(_component_BasePlaceload, {
          class: "m-4 w-[calc(100%-32px)]",
          style: { height: `${_ctx.height - 32}px` }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddonApexcharts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
