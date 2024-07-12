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
  __name: "Contact",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center" }, _attrs))}><div><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M5.06109 21.1409C6.00915 21.1438 6.95739 21.1431 7.91235 21.1425C8.3278 21.1422 8.74452 21.1419 9.16306 21.1419C9.85141 21.1419 10.5374 21.1395 11.2218 21.1372C12.8238 21.1317 14.4169 21.1262 16.0103 21.1511C17.6304 21.1764 18.7962 19.96 18.7476 18.4026C18.7179 17.4476 18.725 16.4931 18.7322 15.5353C18.7353 15.1124 18.7385 14.6889 18.7385 14.2644C18.7385 13.3785 18.7384 12.4925 18.7382 11.6066C18.7378 8.9115 18.7374 6.21655 18.7408 3.52157C18.7415 2.94292 18.6212 2.39195 18.263 1.90593C17.7187 1.16734 16.9718 0.850082 16.0752 0.851469C13.5675 0.855348 11.06 0.854928 8.55232 0.854507C7.43738 0.85432 6.3224 0.854133 5.20738 0.854324C5.06575 0.854348 4.92413 0.85855 4.7831 0.866329C3.62808 0.930041 2.62611 1.86439 2.47213 3.00847C2.42679 3.34537 2.43359 3.68415 2.44011 4.00902C2.4415 4.07841 2.44289 4.14717 2.44374 4.21514C2.44401 4.23628 2.44313 4.25144 2.44191 4.26205C2.43031 4.26296 2.41392 4.26329 2.39097 4.2624C2.08873 4.2507 1.78618 4.2521 1.48543 4.26149C1.30331 4.26717 1.14204 4.33244 1.02609 4.44815C0.909774 4.56423 0.847756 4.72259 0.850399 4.89657C0.853047 5.0709 0.920032 5.22593 1.04075 5.33703C1.16057 5.44733 1.32342 5.50546 1.50422 5.50743C1.80931 5.51075 2.11748 5.51363 2.4258 5.5055C2.43037 5.50538 2.4346 5.50531 2.43853 5.50528C2.43854 5.50695 2.43854 5.50868 2.43852 5.51048C2.43201 6.45163 2.43349 7.39267 2.43724 8.33324C2.12815 8.32596 1.81918 8.32688 1.51123 8.33224C1.32462 8.33549 1.15778 8.39672 1.03651 8.51124C0.914297 8.62665 0.848727 8.78664 0.850189 8.96508C0.851651 9.14341 0.919084 9.30145 1.04353 9.41419C1.16667 9.52575 1.33418 9.58286 1.52037 9.58457C1.82481 9.58737 2.1308 9.58894 2.43707 9.5835C2.43369 10.525 2.4335 11.4666 2.43729 12.4083C2.13738 12.4032 1.8377 12.4049 1.53985 12.4071C1.34778 12.4085 1.17519 12.4635 1.04821 12.5751C0.919221 12.6884 0.850847 12.8486 0.850008 13.0305C0.849167 13.213 0.91675 13.3745 1.0447 13.4893C1.17089 13.6025 1.34322 13.6592 1.53508 13.6608C1.58455 13.6613 1.63424 13.6618 1.68411 13.6623C1.93249 13.6649 2.18536 13.6675 2.43735 13.6576C2.43749 13.6576 2.43764 13.6576 2.43779 13.6576C2.43784 13.6617 2.43785 13.6661 2.43783 13.6708C2.43282 14.6011 2.43105 15.5319 2.43906 16.4628C2.43914 16.4725 2.43895 16.4807 2.43857 16.4877C2.42949 16.4879 2.41871 16.4878 2.40581 16.4874C2.15854 16.4786 1.91057 16.481 1.66663 16.4834C1.61926 16.4838 1.57204 16.4843 1.52501 16.4846C1.33848 16.4861 1.17047 16.5411 1.04643 16.651C0.920754 16.7623 0.852853 16.9192 0.850285 17.0972C0.847714 17.2753 0.912134 17.4355 1.03322 17.5518C1.15334 17.6672 1.31927 17.7303 1.50554 17.7362C1.6579 17.741 1.8123 17.7399 1.96317 17.7387C2.02814 17.7383 2.09245 17.7378 2.15567 17.7378C2.26668 17.7378 2.33717 17.738 2.38722 17.7436C2.40489 17.7455 2.41611 17.7478 2.4228 17.7496C2.42454 17.7562 2.42685 17.7673 2.42884 17.7846C2.43453 17.8344 2.435 17.9043 2.43556 18.0147C2.4359 18.0817 2.43538 18.15 2.43486 18.2192C2.43209 18.5843 2.42911 18.9771 2.55039 19.359C2.89828 20.4545 3.85809 21.1373 5.06109 21.1409Z" fill="#A2A5B9" stroke="#A2A5B9" stroke-width="0.3"></path><path class="${ssrRenderClass({ "fill-commerce-100 dark:fill-muted-800": unref(isActive), "fill-white dark:fill-muted-800": !unref(isActive) })}" d="M17.6471 5.10291C17.6471 9.57857 17.6474 14.0334 17.6468 18.4882C17.6467 19.2479 17.2467 19.8083 16.5783 19.9889C16.4235 20.0307 16.2647 20.0419 16.1044 20.0419C12.4267 20.0413 8.74907 20.042 5.07141 20.041C4.15159 20.0407 3.54463 19.4342 3.5425 18.5193C3.54192 18.2695 3.55074 18.0193 3.53914 17.77C3.5326 17.6295 3.5633 17.577 3.71663 17.5836C4.02136 17.5968 4.32716 17.5914 4.63236 17.5855C4.83354 17.5816 4.99559 17.4976 5.08381 17.3072C5.15969 17.1434 5.14612 16.9821 5.04211 16.8342C4.94307 16.6934 4.80303 16.6319 4.63069 16.6334C4.31846 16.636 4.00609 16.6296 3.69398 16.6364C3.58162 16.6388 3.53894 16.6139 3.53961 16.4904C3.54469 15.5468 3.54433 14.603 3.5399 13.6594C3.53936 13.544 3.56746 13.505 3.68766 13.5084C3.99274 13.5168 4.29824 13.5137 4.60352 13.5104C4.91892 13.507 5.1239 13.3209 5.1277 13.0415C5.13165 12.7518 4.92518 12.5603 4.59883 12.5571C4.30048 12.5542 4.00193 12.5511 3.70377 12.5591C3.58328 12.5624 3.53773 12.5408 3.53874 12.404C3.5457 11.4673 3.54487 10.5305 3.53945 9.59378C3.53872 9.46787 3.56652 9.42697 3.69854 9.43161C4.00347 9.44236 4.30908 9.43754 4.61436 9.43428C4.92569 9.43096 5.12944 9.23866 5.12805 8.95649C5.12672 8.68497 4.92723 8.48914 4.62882 8.4826C4.30978 8.47562 3.99042 8.47766 3.67131 8.48277C3.57541 8.4843 3.53968 8.46212 3.5401 8.35774C3.54401 7.40017 3.5437 6.44258 3.54049 5.48501C3.54016 5.3854 3.56972 5.35415 3.66979 5.35591C3.98888 5.36154 4.30817 5.36072 4.62732 5.35713C4.92576 5.35377 5.12584 5.16354 5.12758 4.88978C5.12931 4.61603 4.93505 4.41937 4.6347 4.41115C4.31575 4.40243 3.99637 4.40895 3.67718 4.40869C3.6092 4.40864 3.53842 4.42479 3.54082 4.31163C3.54861 3.9441 3.518 3.57289 3.55914 3.20955C3.63651 2.52626 4.15528 2.04147 4.83797 1.96534C4.92049 1.95614 5.00407 1.95278 5.08716 1.95277C8.75788 1.95217 12.4286 1.95181 16.0993 1.95261C16.8529 1.95278 17.4006 2.3427 17.5888 3.00622C17.6327 3.16097 17.647 3.31919 17.647 3.47922C17.6472 4.01351 17.6471 4.5478 17.6471 5.10291Z" fill="#FFF6E8"></path><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M7.66524 15.9077C9.03214 15.9079 10.3991 15.9079 11.774 15.9078C12.2761 15.9078 12.7792 15.9078 13.2838 15.9078C13.3189 15.9078 13.3525 15.9079 13.3849 15.908C13.4525 15.9082 13.515 15.9084 13.5768 15.9076C13.7822 15.9049 13.9625 15.8497 14.0904 15.719C14.218 15.5884 14.2697 15.4068 14.2698 15.2018C14.2699 14.937 14.2328 14.6798 14.1822 14.4296C13.7702 12.3904 11.7915 11.1088 9.76654 11.5706C8.12355 11.9453 6.99197 13.3669 6.91501 15.1283C6.90474 15.3633 6.94463 15.5698 7.08402 15.7146C7.22319 15.859 7.42857 15.9076 7.66524 15.9077Z" fill="#A2A5B9" stroke="#A2A5B9" stroke-width="0.3"></path><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" d="M12.1191 6.62648L12.1193 6.62628L12.1121 6.62084C11.5732 6.21158 10.9776 6.04436 10.3171 6.11146C8.8938 6.25607 7.91839 7.59935 8.18223 9.03463C8.4315 10.3906 9.8625 11.2942 11.2015 10.9274C12.1539 10.6665 12.7753 10.0358 12.9856 9.06817C13.1969 8.09563 12.8752 7.27548 12.1191 6.62648Z" fill="#A2A5B9" stroke="#A2A5B9" stroke-width="0.3"></path><path class="${ssrRenderClass({ "fill-commerce-100 dark:fill-muted-800": unref(isActive), "fill-white dark:fill-muted-800": !unref(isActive) })}" d="M12.7832 14.8052C11.2585 14.8052 9.75413 14.8034 8.24981 14.8081C8.10383 14.8085 8.04519 14.7973 8.08015 14.6225C8.31871 13.4301 9.39401 12.558 10.6154 12.579C11.889 12.6009 12.9335 13.499 13.1175 14.7312C13.1205 14.7508 13.1162 14.7714 13.1148 14.8052C13.01 14.8052 12.9067 14.8052 12.7832 14.8052Z" fill="#FFF6E8"></path><path class="${ssrRenderClass({ "fill-commerce-100 dark:fill-muted-800": unref(isActive), "fill-white dark:fill-muted-800": !unref(isActive) })}" d="M9.53415 9.39375C9.17281 8.89677 9.12797 8.38102 9.42602 7.86465C9.70661 7.37853 10.1567 7.14469 10.7148 7.19915C11.2978 7.25604 11.6981 7.5833 11.8825 8.14556C12.079 8.74464 11.8173 9.40228 11.2698 9.71907C10.6957 10.0512 10.0239 9.92945 9.53415 9.39375Z" fill="#FFF6E8"></path></svg></div><p class="${ssrRenderClass([{ "text-commerce-600": unref(isActive), "text-muted-500": !unref(isActive) }, "text-[8px] text-center pt-2 uppercase"])}">${ssrInterpolate(props.name)}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/icon/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
