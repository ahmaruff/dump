import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { i as useAppConfig } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseAvatar",
  __ssrInlineRender: true,
  props: {
    src: { default: void 0 },
    srcDark: { default: void 0 },
    badgeSrc: { default: void 0 },
    text: { default: "?" },
    size: { default: "sm" },
    shape: { default: void 0 },
    mask: { default: void 0 },
    dot: { type: [Boolean, String], default: false },
    ring: { type: [Boolean, String], default: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.avatar);
    const dotStyle = {
      success: "nui-dot-success",
      primary: "nui-dot-primary",
      info: "nui-dot-info",
      warning: "nui-dot-warning",
      danger: "nui-dot-danger",
      pink: "nui-dot-pink",
      yellow: "nui-dot-yellow"
    };
    const ringStyle = {
      success: "nui-ring-success",
      primary: "nui-ring-primary",
      info: "nui-ring-info",
      warning: "nui-ring-warning",
      danger: "nui-ring-danger",
      pink: "nui-ring-pink",
      yellow: "nui-ring-yellow"
    };
    const sizeStyle = {
      xxs: "nui-avatar-xxs",
      xs: "nui-avatar-xs",
      sm: "nui-avatar-sm",
      md: "nui-avatar-md",
      lg: "nui-avatar-lg",
      xl: "nui-avatar-xl",
      "2xl": "nui-avatar-2xl",
      "3xl": "nui-avatar-3xl",
      "4xl": "nui-avatar-4xl"
    };
    const shapeStyle = {
      straight: "nui-avatar-straight",
      rounded: "nui-avatar-rounded",
      curved: "nui-avatar-curved",
      full: "nui-avatar-full"
    };
    const maskStyle = {
      hex: "nui-mask-hex",
      hexed: "nui-mask-hexed",
      deca: "nui-mask-deca",
      blob: "nui-mask-blob",
      diamond: "nui-mask-diamond"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-avatar", [
          sizeStyle[props.size],
          unref(shape) && shapeStyle[unref(shape)],
          props.mask && `nui-avatar-mask ${maskStyle[props.mask]}`,
          props.ring && (props.ring === true ? `nui-avatar-ring ${ringStyle["primary"]}` : `nui-avatar-ring ${ringStyle[props.ring]}`)
        ]]
      }, _attrs))}><div class="nui-avatar-inner">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        if (props.src) {
          _push(`<img${ssrRenderAttr("src", props.src)} class="${ssrRenderClass([[props.srcDark ? "dark:hidden" : ""], "nui-avatar-img"])}">`);
        } else {
          _push(`<!---->`);
        }
        if (props.src && props.srcDark) {
          _push(`<img${ssrRenderAttr("src", props.srcDark)} class="nui-avatar-img hidden">`);
        } else {
          _push(`<!---->`);
        }
        if (!props.src) {
          _push(`<span class="nui-avatar-text">${ssrInterpolate(props.text)}</span>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div>`);
      if ("badge" in _ctx.$slots || props.badgeSrc) {
        _push(`<div class="nui-avatar-badge">`);
        ssrRenderSlot(_ctx.$slots, "badge", {}, () => {
          if (props.badgeSrc) {
            _push(`<img${ssrRenderAttr("src", props.badgeSrc)} class="nui-badge-img" alt="">`);
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.dot) {
        _push(`<span class="${ssrRenderClass([[props.dot === true ? dotStyle["primary"] : dotStyle[props.dot]], "nui-avatar-dot"])}"></span>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/base/BaseAvatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
