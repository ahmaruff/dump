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
  __name: "Product",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center" }, _attrs))}><div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M17.6163 12.2379C17.6163 13.505 17.6164 14.7573 17.6162 16.0096C17.6161 16.4368 17.3766 16.6778 16.9494 16.6779C12.522 16.6783 8.0946 16.6783 3.66719 16.6778C3.24234 16.6778 3.00259 16.4353 3.00249 16.0065C3.00173 12.925 3.00195 9.84359 3 6.76215C2.99989 6.58398 3.06196 6.43644 3.18113 6.30979C4.13382 5.29733 5.08829 4.28653 6.03868 3.27192C6.21124 3.0877 6.40668 3.00087 6.66422 3.00147C9.09978 3.0071 11.5354 3.00646 13.9709 3.00225C14.2109 3.00183 14.3976 3.08314 14.5592 3.25504C15.5181 4.27513 16.4798 5.29263 17.4399 6.31171C17.5591 6.43823 17.6179 6.58707 17.6177 6.76533C17.6154 8.58459 17.6163 10.4039 17.6163 12.2379Z" fill="#A2A5B9"></path><path class="${ssrRenderClass({ "fill-commerce-100 dark:fill-muted-800": unref(isActive), "fill-white dark:fill-muted-800": !unref(isActive) })}" d="M7.14302 7.33353C7.39448 7.33353 7.63146 7.34058 7.8677 7.3305C7.98267 7.3256 8.00392 7.36248 8.00352 7.4703C7.99937 8.5797 8.00079 9.68911 8.00105 10.7985C8.00118 11.3705 8.43442 11.6338 8.94541 11.37C9.3604 11.1558 9.77391 10.9387 10.1856 10.7183C10.2583 10.6794 10.3127 10.6775 10.3867 10.7172C10.8157 10.9469 11.2459 11.1748 11.6798 11.3951C12.0421 11.5791 12.429 11.4259 12.5437 11.0624C12.5738 10.967 12.5723 10.8681 12.5723 10.7695C12.5722 9.67491 12.5743 8.58029 12.5695 7.48569C12.5689 7.36345 12.6 7.3301 12.7239 7.33061C13.9121 7.33549 15.1004 7.33507 16.2887 7.33103C16.4012 7.33065 16.4361 7.35418 16.4359 7.47405C16.4317 10.1021 16.4317 12.7302 16.4343 15.3582C16.4344 15.4638 16.4159 15.4979 16.3005 15.4978C12.3066 15.4942 8.31273 15.4943 4.31886 15.4976C4.2057 15.4977 4.18346 15.4672 4.18361 15.3592C4.18716 12.7361 4.18797 10.1129 4.18359 7.48981C4.18337 7.35499 4.22076 7.32973 4.34733 7.3305C5.27427 7.33612 6.20125 7.33353 7.14302 7.33353Z" fill="#FFF6E8"></path><path class="${ssrRenderClass({ "fill-commerce-100 dark:fill-muted-800": unref(isActive), "fill-white dark:fill-muted-800": !unref(isActive) })}" d="M5.46316 5.6176C5.88571 5.16841 6.30217 4.72784 6.7153 4.28417C6.77594 4.21905 6.83432 4.18589 6.92866 4.18604C9.18622 4.18962 11.4438 4.18933 13.7014 4.18985C13.7592 4.18987 13.8122 4.18536 13.8614 4.23803C14.4489 4.86715 15.0393 5.49349 15.6428 6.13527C12.082 6.13527 8.54189 6.13527 4.97754 6.13527C5.14424 5.95756 5.30011 5.79139 5.46316 5.6176Z" fill="#FFF6E8"></path><path class="${ssrRenderClass({ "fill-commerce-100 dark:fill-muted-800": unref(isActive), "fill-white dark:fill-muted-800": !unref(isActive) })}" d="M11.3884 7.43013C11.3884 8.25607 11.3884 9.06851 11.3884 9.89378C11.3028 9.87975 11.2407 9.83218 11.1741 9.79787C10.9951 9.70567 10.8158 9.61361 10.6392 9.51688C10.4041 9.3881 10.1734 9.38744 9.93716 9.51671C9.69649 9.64841 9.45137 9.77199 9.2091 9.89866C9.16654 9.87135 9.18526 9.8335 9.18521 9.80359C9.18393 9.02521 9.18683 8.2468 9.18128 7.46844C9.18047 7.35523 9.21185 7.33116 9.32044 7.33206C9.96577 7.33741 10.6112 7.33425 11.2565 7.33546C11.3138 7.33557 11.396 7.3064 11.3884 7.43013Z" fill="#FFF6E8"></path></svg></div><p class="${ssrRenderClass([{ "text-commerce-600": unref(isActive), "text-muted-500": !unref(isActive) }, "text-[8px] text-center pt-2 uppercase"])}">${ssrInterpolate(props.name)}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/icon/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
