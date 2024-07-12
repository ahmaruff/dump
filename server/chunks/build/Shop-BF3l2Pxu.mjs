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
  __name: "Shop",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center" }, _attrs))}><div><svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="${ssrRenderClass({ "fill-commerce-100 dark:fill-muted-800": unref(isActive), "fill-white dark:fill-muted-800": !unref(isActive) })}" d="M1.5 7.49854L3.8 4.49854H18.2L20.5 7.49854L18.8 9.9768V18.4985H3.2V15.4551V11.1942V9.9768L2.6 9.3681L1.5 7.49854Z" fill="#FFF6E8"></path><path class="${ssrRenderClass({ "fill-commerce-600": unref(isActive), "fill-muted-500": !unref(isActive) })}" fill-rule="evenodd" clip-rule="evenodd" d="M19.0993 4.06968C18.9713 3.84095 18.7957 3.66511 18.5242 3.56805C18.3362 3.50245 18.1612 3.5021 17.9859 3.50212C16.1322 3.50233 14.2786 3.50231 12.4249 3.5023L11.02 3.50229C10.4011 3.50229 9.78222 3.50251 9.16331 3.50272C7.42522 3.50333 5.68714 3.50394 3.94906 3.49976C3.45312 3.49857 3.09985 3.69754 2.85987 4.13377C2.30805 5.13683 1.74914 6.13607 1.18317 7.13122C1.02341 7.41213 0.967599 7.70217 1.01779 8.01394C1.16234 8.91183 1.61594 9.61168 2.39281 10.0866C2.54147 10.1775 2.58918 10.2666 2.58881 10.4355C2.58415 12.5581 2.58446 14.6807 2.58477 16.8033L2.58492 18.1636C2.58494 18.7279 2.74289 18.8893 3.29603 18.8893C8.43059 18.8894 13.5651 18.8894 18.6997 18.8893C19.255 18.8893 19.4145 18.728 19.4145 18.1671L19.4147 16.8635C19.415 14.722 19.4152 12.5805 19.411 10.439C19.4107 10.2728 19.4516 10.1788 19.6035 10.088C20.2803 9.68352 20.7184 9.08835 20.9165 8.32537C21.0142 7.94885 21.0619 7.57169 20.854 7.20377C20.4438 6.47781 20.0374 5.74971 19.631 5.02161C19.4539 4.70424 19.2767 4.38687 19.0993 4.06968ZM11.522 7.61631C11.5312 8.81041 12.6622 9.70374 13.851 9.39362C14.6752 9.1369 15.1588 8.51544 15.2097 7.66547C15.2302 7.32241 15.4146 7.11265 15.7084 7.09819C16.0405 7.08185 16.2408 7.29175 16.2654 7.6819C16.327 8.65848 17.0395 9.38384 18.0112 9.45919C18.8819 9.52671 19.6968 8.90076 19.9112 8.00822C19.9505 7.84496 19.9343 7.70963 19.8497 7.56049C19.3233 6.63289 18.8028 5.70186 18.2895 4.76697C18.2035 4.61041 18.1095 4.54961 17.9249 4.54985C13.3059 4.55575 8.68686 4.5554 4.06781 4.55082C3.89835 4.55065 3.80496 4.595 3.71994 4.75051C3.20415 5.69393 2.67715 6.63128 2.1468 7.56664C2.06755 7.70639 2.04714 7.83538 2.08237 7.98983C2.28823 8.89236 3.11708 9.5317 3.99513 9.45873C4.96803 9.37787 5.67123 8.6564 5.73421 7.67445C5.75841 7.29709 5.95038 7.09121 6.2719 7.09781C6.57882 7.10411 6.77519 7.31557 6.7881 7.67308C6.79776 7.9407 6.85963 8.1926 6.97718 8.43076C7.35089 9.18796 8.1783 9.58764 9.01786 9.41936C9.82569 9.25744 10.4272 8.53734 10.4721 7.6783C10.4911 7.3161 10.6753 7.10628 10.9817 7.09787C11.286 7.08952 11.5195 7.29321 11.522 7.61631ZM13.3656 14.1285V14.129C13.3647 15.2899 13.3638 16.4402 13.3718 17.5905C13.3733 17.8035 13.3096 17.8419 13.1123 17.8415C10.0362 17.8353 6.96002 17.8347 3.88392 17.8426C3.67143 17.8432 3.63204 17.7811 3.63264 17.5834C3.63956 15.3048 3.63914 13.0262 3.63316 10.7476C3.63267 10.5625 3.65915 10.5072 3.86955 10.5072C4.77773 10.5073 5.53677 10.1567 6.11886 9.45255C6.22516 9.32396 6.26816 9.29466 6.39488 9.44687C7.58111 10.8717 9.68153 10.8715 10.8624 9.44818C10.9833 9.30239 11.0263 9.31652 11.1389 9.45215C12.3101 10.8628 14.4179 10.8686 15.5913 9.46461C15.7049 9.32861 15.754 9.29725 15.8842 9.45472C16.4788 10.1741 17.2568 10.5165 18.1864 10.5099C18.3179 10.5089 18.366 10.5259 18.3657 10.6728C18.3609 13.004 18.3611 15.3352 18.3654 17.6664C18.3657 17.8051 18.3264 17.8388 18.1904 17.8409L18.1739 17.8412C17.9273 17.845 17.8036 17.8469 17.7415 17.786C17.679 17.7246 17.679 17.5996 17.679 17.3488V17.3485L17.6791 16.1453C17.6791 15.1266 17.6792 14.108 17.6788 13.0893C17.6786 12.6016 17.4995 12.4209 17.0162 12.4205L16.7674 12.4203C15.8337 12.4195 14.9001 12.4188 13.9664 12.4211C13.5793 12.4221 13.3998 12.5981 13.3662 13.0179C13.3662 13.3891 13.3659 13.7589 13.3656 14.1276V14.1281V14.1285ZM14.4194 14.6066L14.4194 14.6071C14.4189 14.7355 14.4184 14.8654 14.4184 14.9974C14.4184 15.2257 14.4186 15.4524 14.4188 15.6778V15.6782V15.6783C14.4195 16.3435 14.4201 16.9978 14.415 17.6521C14.4139 17.7998 14.453 17.8427 14.6024 17.8406C15.2156 17.8322 15.829 17.8323 16.4422 17.8406C16.5907 17.8426 16.6308 17.8011 16.6301 17.6527C16.6244 16.321 16.6245 14.9892 16.6301 13.6575C16.6307 13.5099 16.5922 13.4669 16.4428 13.4689C15.8296 13.4773 15.2162 13.4773 14.603 13.469C14.4545 13.467 14.4116 13.5081 14.4149 13.657C14.4219 13.9702 14.4207 14.2836 14.4194 14.6066ZM5.21762 11.3945C5.40382 11.3798 5.56986 11.3694 5.73591 11.3693C7.61979 11.3682 9.50367 11.3683 11.3876 11.3689C11.8709 11.369 12.0511 11.5503 12.0513 12.0362C12.052 13.4032 12.0522 14.7701 12.0511 16.137C12.0508 16.6031 11.8661 16.785 11.3943 16.7852C9.43156 16.7859 7.46882 16.7859 5.50608 16.7852C5.03451 16.785 4.84727 16.602 4.84692 16.1395C4.84654 15.6261 4.84665 15.1126 4.84677 14.5992C4.84696 13.7282 4.84715 12.8572 4.84491 11.9862C4.84422 11.7143 4.93217 11.5085 5.21762 11.3945ZM7.96009 15.7329C8.18293 15.7333 8.40711 15.7336 8.63311 15.7336C8.83231 15.7336 9.0296 15.7332 9.22548 15.7328C9.75341 15.7317 10.2711 15.7305 10.7888 15.7379C10.9604 15.7403 11.0054 15.6946 11.0039 15.5229C10.9952 14.559 10.9952 13.595 11.0039 12.6311C11.0054 12.4592 10.9599 12.4156 10.7887 12.4164C9.22891 12.4233 7.66907 12.4233 6.10928 12.4164C5.93795 12.4156 5.89267 12.4595 5.89421 12.6312C5.90285 13.5951 5.90287 14.5591 5.8942 15.5229C5.89265 15.6948 5.93804 15.7397 6.10939 15.7378C6.72273 15.731 7.33615 15.732 7.96009 15.7329Z" fill="#A2A5B9"></path></svg></div><p class="${ssrRenderClass([{ "text-commerce-600": unref(isActive), "text-muted-500": !unref(isActive) }, "text-[8px] text-center pt-2 uppercase"])}">${ssrInterpolate(props.name)}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/icon/Shop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
