import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { u as usePath } from './usePath-DKeimt0F.mjs';
import './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LandingPage",
  __ssrInlineRender: true,
  props: {
    name: {},
    to: {}
  },
  setup(__props) {
    const props = __props;
    const { path } = usePath();
    const isActive = computed(() => {
      if (props.to) {
        return path.value.startsWith(props.to);
      }
      return false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center" }, _attrs))}><div><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M1.00088 11.0946C1.00088 8.30906 1.00009 5.53919 1.00136 2.76932C1.00176 1.92034 1.52515 1.24216 2.33071 1.05003C2.47077 1.01663 2.61888 1.00378 2.76329 1.0037C6.92329 1.00132 11.0833 1.00067 15.2433 1.00258C16.2496 1.00304 16.998 1.75205 16.9985 2.76016C17.0005 6.92017 17.0005 11.0802 16.9985 15.2402C16.998 16.2486 16.2502 16.9989 15.2447 16.9994C11.0795 17.0014 6.91424 17.0016 2.74902 16.9992C1.75336 16.9986 1.00412 16.2458 1.00173 15.2494C0.998416 13.8696 1.00089 12.4899 1.00088 11.0946ZM15.0152 5.72008C10.6593 5.72008 6.30353 5.72008 1.93831 5.72008C1.93831 5.76581 1.93831 5.79603 1.93831 5.82625C1.93831 8.96567 1.93787 12.1051 1.93877 15.2445C1.93891 15.74 2.2729 16.0626 2.78198 16.0626C6.92622 16.063 11.0705 16.063 15.2147 16.0626C15.7369 16.0626 16.0616 15.7385 16.0617 15.2167C16.0621 12.0981 16.062 8.97955 16.0616 5.86096C16.0616 5.81609 16.0571 5.77122 16.0544 5.72008C15.7114 5.72008 15.3789 5.72008 15.0152 5.72008ZM10.4219 1.93919C8.53737 1.93919 6.65289 1.93918 4.76841 1.93919C4.08645 1.93919 3.40448 1.93648 2.72255 1.94024C2.29249 1.94261 1.94583 2.2706 1.94114 2.69154C1.9335 3.3786 1.93955 4.0658 1.94064 4.75295C1.94066 4.76102 1.95159 4.76909 1.95569 4.77476C6.65601 4.77476 11.3544 4.77476 16.0619 4.77476C16.0619 4.11196 16.0623 3.45703 16.0618 2.80209C16.0614 2.25762 15.7439 1.93935 15.2008 1.93927C13.6182 1.93904 12.0357 1.93919 10.4219 1.93919Z" fill="#A2A5B9"></path><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M9.93752 14.1568C9.14143 14.1567 8.36091 14.1624 7.58051 14.1549C6.78552 14.1473 6.1682 13.4956 6.18916 12.7007C6.2081 11.9823 6.80552 11.3609 7.52424 11.3502C8.50739 11.3355 9.4911 11.3353 10.4742 11.3501C11.2126 11.3613 11.8099 12.0014 11.8119 12.7458C11.8139 13.4913 11.2218 14.1208 10.4838 14.1534C10.3072 14.1612 10.13 14.156 9.93752 14.1568ZM9.54694 13.2193C9.82784 13.2193 10.1088 13.2212 10.3896 13.2186C10.6014 13.2167 10.7695 13.103 10.8412 12.9207C10.9652 12.6049 10.7363 12.2837 10.3804 12.2827C9.47531 12.2804 8.57018 12.2817 7.66505 12.2821C7.33862 12.2822 7.12282 12.4721 7.1257 12.7551C7.12852 13.0313 7.34294 13.2189 7.65862 13.2192C8.27764 13.2197 8.89667 13.2193 9.54694 13.2193Z" fill="#A2A5B9"></path><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M9.1251 10.4071C7.53736 10.4071 5.96523 10.4075 4.39311 10.4059C4.31634 10.4059 4.23592 10.3998 4.16351 10.3768C3.94968 10.3086 3.81852 10.0955 3.84702 9.8799C3.87553 9.66425 4.05702 9.49041 4.2758 9.47144C4.32233 9.46741 4.36944 9.46975 4.41629 9.46975C7.47203 9.46969 10.5278 9.46963 13.5835 9.47013C13.6509 9.47014 13.7203 9.4673 13.7852 9.48176C14.022 9.53452 14.1806 9.75715 14.1536 9.98887C14.1254 10.2312 13.9286 10.4055 13.6697 10.4063C12.8888 10.4085 12.108 10.4071 11.3271 10.4071C10.5983 10.4071 9.86952 10.4071 9.1251 10.4071Z" fill="#A2A5B9"></path><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M6.04085 8.50493C5.79018 8.38393 5.67742 8.18173 5.72924 7.96513C5.78513 7.73152 5.97074 7.59515 6.2383 7.59509C8.08148 7.59467 9.92466 7.59455 11.7678 7.59519C12.0699 7.59529 12.281 7.79048 12.2806 8.06406C12.2801 8.33788 12.0695 8.53187 11.7667 8.53198C9.92352 8.53266 8.08033 8.53255 6.23715 8.5313C6.17582 8.53126 6.11451 8.51615 6.04085 8.50493Z" fill="#A2A5B9"></path><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M11.3232 3.50235C11.2225 3.75281 11.0192 3.88035 10.7987 3.84027C10.5818 3.80085 10.4156 3.61267 10.4065 3.39612C10.3973 3.17635 10.541 2.98185 10.7609 2.92345C11.1214 2.82775 11.4247 3.18484 11.3232 3.50235Z" fill="#A2A5B9"></path><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M12.6478 3.83391C12.3854 3.73842 12.2495 3.53747 12.2841 3.31012C12.317 3.09434 12.5036 2.92234 12.7199 2.90845C12.9452 2.89397 13.1458 3.04133 13.2044 3.26772C13.2879 3.59079 12.9906 3.90468 12.6478 3.83391Z" fill="#A2A5B9"></path><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M14.9019 3.75201C14.713 3.87604 14.5315 3.87927 14.3562 3.7564C14.198 3.64557 14.1289 3.48556 14.1636 3.29662C14.1992 3.1027 14.3213 2.97502 14.5142 2.92197C14.709 2.86842 14.9277 2.96409 15.0307 3.14603C15.1462 3.34998 15.1051 3.55701 14.9019 3.75201Z" fill="#A2A5B9"></path></svg></div><p class="${ssrRenderClass([{ "text-commerce-600": unref(isActive), "text-muted-500": !unref(isActive) }, "text-[8px] text-center pt-2 uppercase"])}">${ssrInterpolate(props.name)}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/icon/LandingPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
