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
  __name: "Dashboard",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center" }, _attrs))}><div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M8.92066 8.54498C8.4828 9.08984 7.92385 9.33711 7.24206 9.33547C5.52765 9.33136 3.81322 9.33495 2.0988 9.33383C0.862873 9.33303 0.00217951 8.47627 0.00116537 7.24495C-0.000252269 5.52358 -0.000557118 3.80222 0.00127185 2.08086C0.002566 0.862692 0.865593 0.00316726 2.08744 0.0021312C3.8088 0.000671445 5.53016 0.000492617 7.25152 0.00219239C8.4716 0.00339705 9.33136 0.863945 9.33268 2.08577C9.33456 3.81408 9.33214 5.54238 9.33384 7.27068C9.33429 7.73605 9.21077 8.15904 8.92066 8.54498Z" fill="#A2A5B9"></path><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M19.2577 0.449307C19.7687 0.887807 20.0015 1.43299 20 2.08972C19.9961 3.81108 20.0002 5.53245 19.9982 7.25381C19.9967 8.47367 19.1348 9.33253 17.9126 9.33361C16.1912 9.33514 14.4698 9.33529 12.7485 9.33357C11.5293 9.33235 10.6679 8.47003 10.6667 7.24981C10.6651 5.52845 10.6651 3.80708 10.6667 2.08571C10.6679 0.865344 11.5288 0.00327955 12.748 0.00207868C14.4694 0.000383405 16.1907 0.00426173 17.9121 8.31834e-06C18.4087 -0.00121892 18.8542 0.13328 19.2577 0.449307Z" fill="#A2A5B9"></path><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M9.32944 18.1125C9.2 19.2703 8.38778 19.9983 7.24131 19.9991C5.52629 20.0004 3.81127 20.0003 2.09625 19.9992C0.860708 19.9983 0.0018964 19.1408 0.000956041 17.9068C-0.000350985 16.1917 -0.000277724 14.4767 0.000930771 12.7617C0.00180093 11.5267 0.859599 10.6683 2.09376 10.6674C3.80878 10.6662 5.52381 10.6662 7.23883 10.6674C8.47462 10.6683 9.33192 11.5246 9.33252 12.7606C9.33338 14.5381 9.3311 16.3156 9.32944 18.1125Z" fill="#A2A5B9"></path><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M19.9875 15.6921C19.8409 17.1183 19.2194 18.264 18.0772 19.1025C15.3009 21.1409 11.3194 19.5265 10.7411 16.1354C10.2992 13.5443 12.0171 11.1458 14.621 10.7184C17.0752 10.3157 19.504 12.0467 19.9201 14.4912C19.9869 14.8835 20.0129 15.2762 19.9875 15.6921Z" fill="#A2A5B9"></path><path class="${ssrRenderClass({ "fill-commerce-100 dark:fill-muted-800": unref(isActive), "fill-white dark:fill-muted-800": !unref(isActive) })}" d="M3.75031 8.00088C3.1744 8.00088 2.61932 8.00211 2.06425 8.00049C1.61085 7.99917 1.3348 7.72781 1.33447 7.27921C1.33318 5.53766 1.33316 3.7961 1.33449 2.05455C1.33482 1.61271 1.6073 1.33606 2.04425 1.33566C3.79274 1.33406 5.54124 1.33409 7.28973 1.33565C7.7157 1.33603 7.99834 1.61314 7.99887 2.03512C8.00109 3.79055 8.00113 5.54598 7.99884 7.30141C7.99829 7.72555 7.7182 7.99941 7.28894 8.00016C6.11635 8.00222 4.94374 8.00088 3.75031 8.00088Z" fill="#FFF6E8"></path><path class="${ssrRenderClass({ "fill-commerce-100 dark:fill-muted-800": unref(isActive), "fill-white dark:fill-muted-800": !unref(isActive) })}" d="M17.8677 8.00057C16.1546 8.00057 14.4615 8.00081 12.7684 8.00042C12.2606 8.0003 11.9999 7.74042 11.9998 7.234C11.9994 5.52008 11.9994 3.80617 11.9999 2.09225C12 1.59547 12.2599 1.33501 12.7553 1.33487C14.4762 1.33437 16.197 1.3343 17.9179 1.33491C18.3976 1.33509 18.665 1.60145 18.6653 2.08055C18.6661 3.79447 18.6658 5.50839 18.6654 7.22231C18.6653 7.74613 18.4137 7.99714 17.8677 8.00057Z" fill="#FFF6E8"></path><path class="${ssrRenderClass({ "fill-commerce-100 dark:fill-muted-800": unref(isActive), "fill-white dark:fill-muted-800": !unref(isActive) })}" d="M4.75021 12.0003C5.59672 12.0003 6.4224 11.9998 7.24808 12.0005C7.72892 12.0009 7.99923 12.2666 7.99948 12.742C8.00039 14.4697 8.00039 16.1974 7.99947 17.9251C7.99923 18.3945 7.73211 18.6655 7.26817 18.6658C5.53355 18.6669 3.79893 18.6668 2.06431 18.6658C1.61089 18.6655 1.33481 18.3932 1.33448 17.9446C1.33319 16.203 1.33314 14.4615 1.33451 12.7199C1.33486 12.2686 1.60771 12.0014 2.06502 12.0007C2.95314 11.9994 3.84126 12.0003 4.75021 12.0003Z" fill="#FFF6E8"></path><path class="${ssrRenderClass({ "fill-commerce-100 dark:fill-muted-800": unref(isActive), "fill-white dark:fill-muted-800": !unref(isActive) })}" d="M18.0848 17.2082C16.5644 19.2802 13.5598 19.1143 12.3926 16.8881C11.7741 15.7083 11.8455 14.5191 12.6104 13.4284C13.3644 12.3533 14.4389 11.865 15.7475 12.038C18.2394 12.3675 19.4672 15.0934 18.0848 17.2082Z" fill="#FFF6E8"></path></svg></div><p class="${ssrRenderClass([{ "text-commerce-600": unref(isActive), "text-muted-500": !unref(isActive) }, "text-[8px] text-center pt-2 uppercase"])}">${ssrInterpolate(props.name)}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/icon/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
