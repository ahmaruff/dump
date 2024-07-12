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
  __name: "Laporan",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center" }, _attrs))}><div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M16.7929 0.436703C17.6062 1.00285 18.0044 1.7736 18.0047 2.74768C18.006 7.58436 18.0064 12.421 18.0047 17.2577C18.0041 18.84 16.8368 20.0008 15.2525 20.001C11.7503 20.0016 8.24809 20.0017 4.74589 20.001C3.16462 20.0006 2.00131 18.8365 2.00077 17.2509C1.99942 13.28 2.00023 9.30908 2.00038 5.33819C2.00042 4.22833 2.42824 3.3233 3.28884 2.61848C4.01372 2.02482 4.73261 1.4238 5.45019 0.821302C6.10409 0.272263 6.85372 0.000515801 7.70795 0.00146733C10.2337 0.00428076 12.7595 0.00356049 15.2852 0.00161306C15.8262 0.00119586 16.3251 0.137048 16.7929 0.436703Z" fill="#A2A5B9"></path><path class="${ssrRenderClass({ "fill-commerce-100 dark:fill-muted-800": unref(isActive), "fill-white dark:fill-muted-800": !unref(isActive) })}" d="M3.76998 4.00463C3.94956 3.77622 4.17434 3.61782 4.38465 3.44405C5.03665 2.90534 5.69255 2.37133 6.34274 1.83046C6.75005 1.49164 7.21423 1.33018 7.74285 1.33106C10.2424 1.33522 12.742 1.33531 15.2415 1.33815C16.096 1.33911 16.6652 1.8985 16.6657 2.75336C16.6683 7.58327 16.6681 12.4132 16.6659 17.2431C16.6655 18.1079 16.0964 18.6658 15.2291 18.666C11.7401 18.6664 8.25113 18.6665 4.76213 18.6659C3.9018 18.6658 3.33216 18.0968 3.33196 17.2347C3.33107 13.2641 3.33199 9.29338 3.33105 5.3227C3.33094 4.83856 3.46367 4.40043 3.76998 4.00463Z" fill="#FFF6E8"></path><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M14.605 15.7308C14.4371 15.9411 14.2263 16.0063 13.9769 16.006C11.3231 16.003 8.66934 16.0037 6.01554 16.0047C5.57572 16.0048 5.2714 15.732 5.27296 15.3316C5.2745 14.9314 5.5794 14.6697 6.02371 14.67C8.6775 14.6722 11.3313 14.6728 13.9851 14.6685C14.2696 14.668 14.4994 14.7524 14.6431 15.0012C14.7816 15.2411 14.7669 15.4856 14.605 15.7308Z" fill="#A2A5B9"></path><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M14.7285 12.0953C14.6195 12.494 14.405 12.6684 14.0335 12.6685C11.3915 12.6688 8.74942 12.6684 6.10739 12.6674C5.78124 12.6673 5.53592 12.5048 5.4379 12.2305C5.34273 11.9642 5.4229 11.6724 5.64373 11.4908C5.7857 11.3741 5.95061 11.3355 6.13343 11.3356C8.69738 11.3377 11.2613 11.337 13.8253 11.3371C13.9293 11.3371 14.0346 11.3276 14.1373 11.3394C14.5071 11.382 14.7336 11.6686 14.7285 12.0953Z" fill="#A2A5B9"></path><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M12.1403 9.0697C12.0344 8.92019 11.9986 8.7659 11.9987 8.59835C11.9997 7.27691 11.9979 5.95547 11.9988 4.63403C11.9991 4.23717 12.2841 3.94351 12.6638 3.9419C13.049 3.94027 13.331 4.22586 13.3314 4.62632C13.3325 5.95427 13.3317 7.28222 13.33 8.61017C13.3296 8.94579 13.1783 9.18922 12.9045 9.28768C12.6076 9.39449 12.3562 9.31454 12.1403 9.0697Z" fill="#A2A5B9"></path><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M9.33597 6.7209C9.33598 6.48663 9.33332 6.27184 9.3366 6.05714C9.34219 5.69181 9.63517 5.39933 9.99414 5.3965C10.3518 5.39369 10.6619 5.68528 10.6641 6.04636C10.6693 6.91833 10.6693 7.79037 10.6639 8.66234C10.6615 9.04192 10.3581 9.33772 9.99524 9.33441C9.62904 9.33106 9.33968 9.03709 9.33727 8.65362C9.33327 8.01591 9.33605 7.37816 9.33597 6.7209Z" fill="#A2A5B9"></path><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M7.74921 6.07909C7.9233 6.22885 8.00048 6.40917 8.00075 6.62164C8.00158 7.28538 8.00424 7.94917 7.99833 8.61287C7.99381 9.12081 7.57653 9.44433 7.12643 9.29871C6.8401 9.20607 6.67032 8.96382 6.66804 8.62495C6.66423 8.05883 6.66694 7.49267 6.66683 6.92653C6.66682 6.84194 6.67016 6.75714 6.66557 6.67279C6.65007 6.38747 6.75332 6.16025 7.00483 6.01961C7.25541 5.87949 7.50384 5.906 7.74921 6.07909Z" fill="#A2A5B9"></path></svg></div><p class="${ssrRenderClass([{ "text-commerce-600": unref(isActive), "text-muted-500": !unref(isActive) }, "text-[8px] text-center pt-2 uppercase"])}">${ssrInterpolate(props.name)}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/icon/Laporan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
