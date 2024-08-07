import { defineComponent, computed, unref, mergeProps, withCtx, createVNode, renderSlot, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { TransitionRoot, Dialog, TransitionChild, DialogPanel } from '@headlessui/vue';

const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "TairoModal",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    size: { default: "md" },
    shape: { default: "rounded" },
    footerAlign: { default: "end" },
    classes: { default: () => ({
      wrapper: "",
      dialog: ""
    }) }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const dialogClasses = computed(() => {
      const classes = [];
      if (props.classes.dialog) {
        if (Array.isArray(props.classes.dialog)) {
          classes.push(...props.classes.dialog);
        } else {
          classes.push(props.classes.dialog);
        }
      }
      switch (props.shape) {
        case "rounded":
          classes.push("rounded-lg");
          break;
        case "curved":
          classes.push("rounded-xl");
          break;
      }
      switch (props.size) {
        case "sm":
          classes.push("max-w-sm");
          break;
        case "md":
          classes.push("max-w-md");
          break;
        case "lg":
          classes.push("max-w-xl");
          break;
        case "xl":
          classes.push("max-w-2xl");
          break;
        case "2xl":
          classes.push("max-w-3xl");
          break;
        case "3xl":
          classes.push("max-w-5xl");
          break;
      }
      return classes;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TransitionRoot), mergeProps({
        appear: "",
        show: props.open,
        as: "template"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fixed inset-0 z-[9999] flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Dialog), {
              class: "relative z-[9999]",
              as: "div",
              onClose: ($event) => emit("close")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0"${_scopeId2}><div class="${ssrRenderClass([props.classes.wrapper, "flex min-h-full items-center justify-center p-4 text-center"])}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(DialogPanel), {
                          class: ["dark:bg-muted-800 w-full bg-white text-left align-middle shadow-xl transition-all rtl:text-right", unref(dialogClasses)]
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              ssrRenderSlot(_ctx.$slots, "header", {}, null, _push5, _parent5, _scopeId4);
                              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                              if ("footer" in _ctx.$slots) {
                                _push5(`<div class="${ssrRenderClass([[
                                  props.footerAlign === "center" && "justify-center",
                                  props.footerAlign === "end" && "justify-end",
                                  props.footerAlign === "between" && "justify-between"
                                ], "flex w-full items-center gap-x-2"])}"${_scopeId4}>`);
                                ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push5, _parent5, _scopeId4);
                                _push5(`</div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                renderSlot(_ctx.$slots, "header"),
                                renderSlot(_ctx.$slots, "default"),
                                "footer" in _ctx.$slots ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: ["flex w-full items-center gap-x-2", [
                                    props.footerAlign === "center" && "justify-center",
                                    props.footerAlign === "end" && "justify-end",
                                    props.footerAlign === "between" && "justify-between"
                                  ]]
                                }, [
                                  renderSlot(_ctx.$slots, "footer")
                                ], 2)) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogPanel), {
                            class: ["dark:bg-muted-800 w-full bg-white text-left align-middle shadow-xl transition-all rtl:text-right", unref(dialogClasses)]
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "header"),
                              renderSlot(_ctx.$slots, "default"),
                              "footer" in _ctx.$slots ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: ["flex w-full items-center gap-x-2", [
                                  props.footerAlign === "center" && "justify-center",
                                  props.footerAlign === "end" && "justify-end",
                                  props.footerAlign === "between" && "justify-between"
                                ]]
                              }, [
                                renderSlot(_ctx.$slots, "footer")
                              ], 2)) : createCommentVNode("", true)
                            ]),
                            _: 3
                          }, 8, ["class"])
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0" }, [
                      createVNode("div", {
                        class: ["flex min-h-full items-center justify-center p-4 text-center", props.classes.wrapper]
                      }, [
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "duration-200 ease-in",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), {
                              class: ["dark:bg-muted-800 w-full bg-white text-left align-middle shadow-xl transition-all rtl:text-right", unref(dialogClasses)]
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "header"),
                                renderSlot(_ctx.$slots, "default"),
                                "footer" in _ctx.$slots ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: ["flex w-full items-center gap-x-2", [
                                    props.footerAlign === "center" && "justify-center",
                                    props.footerAlign === "end" && "justify-end",
                                    props.footerAlign === "between" && "justify-between"
                                  ]]
                                }, [
                                  renderSlot(_ctx.$slots, "footer")
                                ], 2)) : createCommentVNode("", true)
                              ]),
                              _: 3
                            }, 8, ["class"])
                          ]),
                          _: 3
                        })
                      ], 2)
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "fixed inset-0 z-[9999] flex items-center justify-center" }, [
                createVNode(unref(Dialog), {
                  class: "relative z-[9999]",
                  as: "div",
                  onClose: ($event) => emit("close")
                }, {
                  default: withCtx(() => [
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0" }, [
                      createVNode("div", {
                        class: ["flex min-h-full items-center justify-center p-4 text-center", props.classes.wrapper]
                      }, [
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "duration-200 ease-in",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), {
                              class: ["dark:bg-muted-800 w-full bg-white text-left align-middle shadow-xl transition-all rtl:text-right", unref(dialogClasses)]
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "header"),
                                renderSlot(_ctx.$slots, "default"),
                                "footer" in _ctx.$slots ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: ["flex w-full items-center gap-x-2", [
                                    props.footerAlign === "center" && "justify-center",
                                    props.footerAlign === "end" && "justify-end",
                                    props.footerAlign === "between" && "justify-between"
                                  ]]
                                }, [
                                  renderSlot(_ctx.$slots, "footer")
                                ], 2)) : createCommentVNode("", true)
                              ]),
                              _: 3
                            }, 8, ["class"])
                          ]),
                          _: 3
                        })
                      ], 2)
                    ])
                  ]),
                  _: 3
                }, 8, ["onClose"])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
