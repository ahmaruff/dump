import { z as useAppConfig, j as useState, C as defu } from './server.mjs';
import { resolveComponent, useSSRContext, defineComponent, unref, createVNode, resolveDynamicComponent, mergeProps, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderSlotInner, ssrRenderSuspense, ssrRenderVNode, ssrRenderClass } from 'vue/server-renderer';

const nativeComponent = ["img", "div"];
function resolveComponentOrNative(component) {
  if (nativeComponent.includes(component))
    return component;
  return resolveComponent(component);
}
function usePanels() {
  const app = useAppConfig();
  const panels = computed(
    () => {
      var _a2;
      var _a, _b;
      return (_a2 = (_b = (_a = app.tairo) == null ? void 0 : _a.panels) == null ? void 0 : _b.map((panel) => {
        var _a3, _b2;
        return {
          ...panel,
          position: (_a3 = panel.position) != null ? _a3 : "left",
          overlay: (_b2 = panel.overlay) != null ? _b2 : true
        };
      })) != null ? _a2 : [];
    }
  );
  const currentName = useState("panels-current-name", () => "");
  const transitionFrom = useState("panels-transition-from", () => "left");
  const showOverlay = useState("panels-overlay", () => true);
  const currentProps = useState("panels-current-props", () => ({}));
  const current = computed(() => {
    if (!currentName.value) {
      return void 0;
    }
    return panels.value.find((panel) => panel.name === currentName.value);
  });
  function open(name, props) {
    var _a;
    const panel = panels.value.find(({ name: panelName }) => panelName === name);
    if (panel) {
      transitionFrom.value = panel.position;
      currentName.value = panel.name;
      showOverlay.value = panel.overlay;
      currentProps.value = defu(props != null ? props : {}, (_a = panel.props) != null ? _a : {});
    }
  }
  function close() {
    currentName.value = "";
  }
  return {
    panels,
    current,
    transitionFrom,
    currentProps,
    showOverlay,
    open,
    close
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TairoPanels",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      panels,
      current,
      transitionFrom,
      currentProps,
      showOverlay,
      open,
      close
    } = usePanels();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      ssrRenderSlotInner(_ctx.$slots, "default", {
        panels: unref(panels),
        current: unref(current),
        transitionFrom: unref(transitionFrom),
        currentProps: unref(currentProps),
        showOverlay: unref(showOverlay),
        open: unref(open),
        close: unref(close)
      }, () => {
        ssrRenderSuspense(_push, {
          default: () => {
            var _a;
            if ((_a = unref(current)) == null ? void 0 : _a.component) {
              ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(current).component)), mergeProps(unref(currentProps), {
                class: ["fixed top-0 z-[100] h-full w-96", [unref(current).position === "left" ? "start-0" : "end-0"]]
              }), null), _parent);
            } else {
              _push(`<!---->`);
            }
          },
          _: 1
        });
      }, _push, _parent, null, true);
      _push(`<div class="${ssrRenderClass([
        unref(current) && unref(showOverlay) ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        "bg-muted-800/60 fixed start-0 top-0 z-[99] h-full w-full cursor-pointer transition-opacity duration-300"
      ])}"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TairoPanels.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, resolveComponentOrNative as r };
