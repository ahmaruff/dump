import { _ as _sfc_main$5, a as _sfc_main$4$1, b as _sfc_main$3$2, c as _sfc_main$2$1, d as _sfc_main$1$1, e as _sfc_main$9 } from './BaseSwitchBall-446dfa2b.mjs';
import { z as useRoute, u as useRouter, x as useAsyncData, y as useRequestFetch, j as useVModel, k as useNinjaId, i as useAppConfig, e as _sfc_main$v, f as _sfc_main$a, a as __nuxt_component_2$1, B as _sfc_main$y, C as _sfc_main$B, D as _sfc_main$3$1, A as _sfc_main$x, _ as __nuxt_component_1 } from '../server.mjs';
import { _ as _sfc_main$3 } from './BaseSelect-11c1e165.mjs';
import { _ as _sfc_main$4 } from './BaseInputFileHeadless-563a3359.mjs';
import { _ as _sfc_main$6 } from './BaseButtonIcon-e5109a33.mjs';
import { _ as _sfc_main$7 } from './BaseRadio-017acd77.mjs';
import { useSSRContext, defineComponent, computed, ref, watch, withAsyncContext, resolveComponent, withCtx, unref, isRef, createVNode, createTextVNode, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList, reactive, mergeProps, renderSlot, withKeys } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$8 } from './BaseCheckbox-bb4e3b0e.mjs';
import { J as hash } from '../../nitro/node-server.mjs';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'wretch';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@headlessui/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
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
import 'fs';
import 'path';
import 'ipx';
import './file-preview-79d105db.mjs';

function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || hash([autoKey, unref(opts.baseURL), typeof request === "string" ? request : "", unref(opts.params || opts.query)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return unref(r);
  });
  if (!opts.baseURL && typeof _request.value === "string" && _request.value.startsWith("//")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watch2,
    immediate,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    watch: watch2 === false ? [] : [_fetchOptions, _request, ...watch2 || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    controller?.abort?.();
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const isLocalFetch = typeof _request.value === "string" && _request.value.startsWith("/");
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch && isLocalFetch) {
      _$fetch = useRequestFetch();
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseSwitchThin",
  __ssrInlineRender: true,
  props: {
    id: { default: void 0 },
    modelValue: { type: Boolean, default: void 0 },
    label: { default: void 0 },
    sublabel: { default: void 0 },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const value = useVModel(props, "modelValue", emits, {
      passive: true
    });
    const id = useNinjaId(() => props.id);
    const colorStyle = {
      primary: "nui-switch-thin-primary",
      info: "nui-switch-thin-info",
      success: "nui-switch-thin-success",
      warning: "nui-switch-thin-warning",
      danger: "nui-switch-thin-danger"
    };
    const inputRef = ref();
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: inputRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({
        for: unref(id),
        class: ["nui-switch-thin", colorStyle[props.color]]
      }, _attrs))}><span class="nui-switch-thin-outer"><input${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        checked: unref(value)
      }, _ctx.$attrs, {
        type: "checkbox",
        class: "nui-switch-thin-input peer"
      }))}><span class="nui-switch-thin-handle"></span><span class="nui-switch-thin-track"></span></span>`);
      if (!props.sublabel) {
        _push(`<span class="nui-switch-thin-single-label">${ssrInterpolate(props.label)}</span>`);
      } else {
        _push(`<span class="nui-switch-thin-dual-label"><span class="nui-switch-thin-label">${ssrInterpolate(props.label)}</span><span class="nui-switch-thin-sublabel">${ssrInterpolate(props.sublabel)}</span></span>`);
      }
      _push(`</label>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/form/BaseSwitchThin.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BasePagination",
  __ssrInlineRender: true,
  props: {
    itemPerPage: {},
    totalItems: {},
    currentPage: { default: 1 },
    maxLinksDisplayed: { default: 3 },
    noRouter: { type: Boolean },
    routerQueryKey: { default: "page" },
    shape: { default: void 0 },
    previousIcon: { default: "lucide:chevron-left" },
    nextIcon: { default: "lucide:chevron-right" },
    ellipsis: { default: "\u2026" }
  },
  emits: ["update:currentPage"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const appConfig = useAppConfig();
    computed(
      () => props.shape ?? appConfig.nui.defaultShapes?.pagination
    );
    const shapeStyle = {
      straight: "",
      rounded: "nui-pagination-rounded",
      smooth: "nui-pagination-smooth",
      curved: "nui-pagination-curved",
      full: "nui-pagination-full"
    };
    const route = useRoute();
    const lastPage = computed(
      () => Math.ceil(props.totalItems / props.itemPerPage) || 1
    );
    const totalPageDisplayed = computed(
      () => lastPage.value > props.maxLinksDisplayed + 2 ? props.maxLinksDisplayed + 2 : lastPage.value
    );
    const pages = computed(() => {
      const _pages = [];
      let firstButton = props.currentPage - Math.floor(totalPageDisplayed.value / 2);
      let lastButton = firstButton + (totalPageDisplayed.value - Math.ceil(totalPageDisplayed.value % 2));
      if (firstButton < 1) {
        firstButton = 1;
        lastButton = firstButton + (totalPageDisplayed.value - 1);
      }
      if (lastButton > lastPage.value) {
        lastButton = lastPage.value;
        firstButton = lastButton - (totalPageDisplayed.value - 1);
      }
      for (let page = firstButton; page <= lastButton; page += 1) {
        if (page === firstButton || page === lastButton) {
          continue;
        }
        _pages.push(page);
      }
      return _pages;
    });
    const showLastLink = computed(() => lastPage.value > 1);
    const paginatedLink = (page = 1) => {
      if (props.noRouter) {
        return {};
      }
      const _page = Math.max(1, Math.min(page, lastPage.value));
      const query = {
        ...route.query
      };
      if (props.routerQueryKey) {
        query[props.routerQueryKey] = _page <= 1 ? void 0 : _page;
      }
      return {
        name: route.name,
        params: route.params,
        query
      };
    };
    const handleLinkClick = (e, page = 1) => {
      const _page = Math.max(1, Math.min(page, lastPage.value));
      emits("update:currentPage", _page);
      if (props.noRouter) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseFocusLoop = _sfc_main$x;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_Icon = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-pagination", [props.shape && shapeStyle[props.shape]]]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseFocusLoop, {
        as: "ul",
        class: ["nui-pagination-list", props.shape && shapeStyle[props.shape]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "before-pagination", {}, null, _push2, _parent2, _scopeId);
            _push2(`<li${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: paginatedLink(1),
              tabindex: "0",
              class: ["nui-pagination-link", [
                _ctx.currentPage === 1 && "nui-active",
                props.shape && shapeStyle[props.shape]
              ]],
              onKeydown: (e) => e.target.click(),
              onClick: (e) => handleLinkClick(e, 1)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 1 `);
                } else {
                  return [
                    createTextVNode(" 1 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li>`);
            if (unref(showLastLink) && unref(pages).length > 0 && unref(pages)[0] > 2) {
              _push2(`<li${_scopeId}><span class="${ssrRenderClass([[props.shape && shapeStyle[props.shape]], "nui-pagination-ellipsis"])}"${_scopeId}>${ssrInterpolate(props.ellipsis)}</span></li>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(unref(pages), (page) => {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: paginatedLink(page),
                tabindex: "0",
                "aria-current": _ctx.currentPage === page ? "page" : void 0,
                class: ["nui-pagination-link", [
                  _ctx.currentPage === page && "nui-active",
                  props.shape && shapeStyle[props.shape]
                ]],
                onKeydown: (e) => e.target.click(),
                onClick: (e) => handleLinkClick(e, page)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(page)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(page), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]-->`);
            if (unref(showLastLink) && unref(pages)[unref(pages).length - 1] < unref(lastPage) - 1) {
              _push2(`<li${_scopeId}><span class="${ssrRenderClass([[props.shape && shapeStyle[props.shape]], "nui-pagination-ellipsis"])}"${_scopeId}>${ssrInterpolate(props.ellipsis)}</span></li>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(showLastLink)) {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: paginatedLink(unref(lastPage)),
                tabindex: "0",
                class: ["nui-pagination-link", [
                  _ctx.currentPage === unref(lastPage) && "nui-active",
                  props.shape && shapeStyle[props.shape]
                ]],
                onKeydown: (e) => e.target.click(),
                onClick: (e) => handleLinkClick(e, unref(lastPage))
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(lastPage))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(lastPage)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "after-pagination", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "before-pagination"),
              createVNode("li", null, [
                createVNode(_component_NuxtLink, {
                  to: paginatedLink(1),
                  tabindex: "0",
                  class: ["nui-pagination-link", [
                    _ctx.currentPage === 1 && "nui-active",
                    props.shape && shapeStyle[props.shape]
                  ]],
                  onKeydown: withKeys((e) => e.target.click(), ["space"]),
                  onClick: (e) => handleLinkClick(e, 1)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" 1 ")
                  ]),
                  _: 1
                }, 8, ["to", "class", "onKeydown", "onClick"])
              ]),
              unref(showLastLink) && unref(pages).length > 0 && unref(pages)[0] > 2 ? (openBlock(), createBlock("li", { key: 0 }, [
                createVNode("span", {
                  class: ["nui-pagination-ellipsis", [props.shape && shapeStyle[props.shape]]]
                }, toDisplayString(props.ellipsis), 3)
              ])) : createCommentVNode("", true),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(pages), (page) => {
                return openBlock(), createBlock("li", { key: page }, [
                  createVNode(_component_NuxtLink, {
                    to: paginatedLink(page),
                    tabindex: "0",
                    "aria-current": _ctx.currentPage === page ? "page" : void 0,
                    class: ["nui-pagination-link", [
                      _ctx.currentPage === page && "nui-active",
                      props.shape && shapeStyle[props.shape]
                    ]],
                    onKeydown: withKeys((e) => e.target.click(), ["space"]),
                    onClick: (e) => handleLinkClick(e, page)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(page), 1)
                    ]),
                    _: 2
                  }, 1032, ["to", "aria-current", "class", "onKeydown", "onClick"])
                ]);
              }), 128)),
              unref(showLastLink) && unref(pages)[unref(pages).length - 1] < unref(lastPage) - 1 ? (openBlock(), createBlock("li", { key: 1 }, [
                createVNode("span", {
                  class: ["nui-pagination-ellipsis", [props.shape && shapeStyle[props.shape]]]
                }, toDisplayString(props.ellipsis), 3)
              ])) : createCommentVNode("", true),
              unref(showLastLink) ? (openBlock(), createBlock("li", { key: 2 }, [
                createVNode(_component_NuxtLink, {
                  to: paginatedLink(unref(lastPage)),
                  tabindex: "0",
                  class: ["nui-pagination-link", [
                    _ctx.currentPage === unref(lastPage) && "nui-active",
                    props.shape && shapeStyle[props.shape]
                  ]],
                  onKeydown: withKeys((e) => e.target.click(), ["space"]),
                  onClick: (e) => handleLinkClick(e, unref(lastPage))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(lastPage)), 1)
                  ]),
                  _: 1
                }, 8, ["to", "class", "onKeydown", "onClick"])
              ])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "after-pagination")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(_component_BaseFocusLoop, {
        class: ["nui-pagination-buttons", props.shape && shapeStyle[props.shape]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "before-navigation", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: paginatedLink(_ctx.currentPage - 1),
              tabindex: "0",
              class: "nui-pagination-button",
              onKeydown: (e) => e.target.click(),
              onClick: (e) => handleLinkClick(e, _ctx.currentPage - 1)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: _ctx.previousIcon,
                    class: "pagination-button-icon"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: _ctx.previousIcon,
                      class: "pagination-button-icon"
                    }, null, 8, ["name"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: paginatedLink(_ctx.currentPage + 1),
              tabindex: "0",
              class: "nui-pagination-button",
              onKeydown: (e) => e.target.click(),
              onClick: (e) => handleLinkClick(e, _ctx.currentPage + 1)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: _ctx.nextIcon,
                    class: "pagination-button-icon"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: _ctx.nextIcon,
                      class: "pagination-button-icon"
                    }, null, 8, ["name"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "after-navigation", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "before-navigation"),
              createVNode(_component_NuxtLink, {
                to: paginatedLink(_ctx.currentPage - 1),
                tabindex: "0",
                class: "nui-pagination-button",
                onKeydown: withKeys((e) => e.target.click(), ["space"]),
                onClick: (e) => handleLinkClick(e, _ctx.currentPage - 1)
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: _ctx.previousIcon,
                    class: "pagination-button-icon"
                  }, null, 8, ["name"])
                ]),
                _: 1
              }, 8, ["to", "onKeydown", "onClick"]),
              createVNode(_component_NuxtLink, {
                to: paginatedLink(_ctx.currentPage + 1),
                tabindex: "0",
                class: "nui-pagination-button",
                onKeydown: withKeys((e) => e.target.click(), ["space"]),
                onClick: (e) => handleLinkClick(e, _ctx.currentPage + 1)
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: _ctx.nextIcon,
                    class: "pagination-button-icon"
                  }, null, 8, ["name"])
                ]),
                _: 1
              }, 8, ["to", "onKeydown", "onClick"]),
              renderSlot(_ctx.$slots, "after-navigation")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_@vue+composition-api@1.7.2_vue@3.3.4__nuxt@3.6.5_@parcel+watcher@2.3._eyt44qxt5f65uloqcey3pu42ia/node_modules/@shuriken-ui/nuxt/components/base/BasePagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const values = ref(true);
    const filter = ref("");
    const perPage = ref(10);
    watch([filter, perPage], () => {
      router.push({
        query: {
          page: void 0
        }
      });
    });
    const query = computed(() => {
      return {
        filter: filter.value,
        perPage: perPage.value,
        page: page.value
      };
    });
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/company/members/",
      {
        query
      },
      "$pl1Fc7Jokl"
    )), __temp = await __temp, __restore(), __temp);
    const selected = ref([]);
    const isAllVisibleSelected = computed(() => {
      return selected.value.length === data.value?.data.length;
    });
    function toggleAllVisibleSelection() {
      if (isAllVisibleSelected.value) {
        selected.value = [];
      } else {
        selected.value = data.value?.data.map((item) => item.id) ?? [];
      }
    }
    const isModal3XlOpen = ref(false);
    const inputFile1 = ref(null);
    const inputFile2 = ref(null);
    const inputFile3 = ref(null);
    const inputFile4 = ref(null);
    const inputFile5 = ref(null);
    const inputFile6 = ref(null);
    const inputFile7 = ref(null);
    const inputFile8 = ref(null);
    const inputFile9 = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$5;
      const _component_BaseInput = _sfc_main$v;
      const _component_BaseButton = _sfc_main$a;
      const _component_Icon = __nuxt_component_2$1;
      const _component_TairoModal = _sfc_main$y;
      const _component_BaseButtonClose = _sfc_main$B;
      const _component_BaseSelect = _sfc_main$3;
      const _component_BaseInputFileHeadless = _sfc_main$4;
      const _component_center = resolveComponent("center");
      const _component_BaseButtonIcon = _sfc_main$6;
      const _component_BaseRadio = _sfc_main$7;
      const _component_BaseSwitchThin = _sfc_main$2;
      const _component_BasePlaceholderPage = _sfc_main$3$1;
      const _component_TairoTable = _sfc_main$4$1;
      const _component_TairoTableHeading = _sfc_main$3$2;
      const _component_BaseCheckbox = _sfc_main$8;
      const _component_TairoTableRow = _sfc_main$2$1;
      const _component_TairoTableCell = _sfc_main$1$1;
      const _component_router_link = resolveComponent("router-link");
      const _component_BaseSwitchBall = _sfc_main$9;
      const _component_BasePagination = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoContentWrapper, null, {
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(filter),
              "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
              icon: "lucide:search",
              placeholder: "Pencarian",
              classes: {
                wrapper: "w-full"
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, { class: "w-full sm:w-32" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:filter",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(` \xA0 Filter `);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:filter",
                      class: "h-4 w-4"
                    }),
                    createTextVNode(" \xA0 Filter ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                modelValue: unref(filter),
                "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
                icon: "lucide:search",
                placeholder: "Pencarian",
                classes: {
                  wrapper: "w-full"
                }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseButton, { class: "w-full sm:w-32" }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "lucide:filter",
                    class: "h-4 w-4"
                  }),
                  createTextVNode(" \xA0 Filter ")
                ]),
                _: 1
              })
            ];
          }
        }),
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              onClick: ($event) => isModal3XlOpen.value = true,
              class: "w-full sm:w-42"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Tambah Produk</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, "Tambah Produk")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButton, {
                color: "primary",
                onClick: ($event) => isModal3XlOpen.value = true,
                class: "w-full sm:w-42"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "lucide:plus",
                    class: "h-4 w-4"
                  }),
                  createVNode("span", null, "Tambah Produk")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoModal, {
              open: unref(isModal3XlOpen),
              size: "3xl",
              onClose: ($event) => isModal3XlOpen.value = false
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex w-full items-center justify-between p-4 md:p-6" style="${ssrRenderStyle({ "border": "1px solid #ddd" })}"${_scopeId2}><h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"${_scopeId2}> Tambah Produk </h3>`);
                  _push3(ssrRenderComponent(_component_BaseButtonClose, {
                    onClick: ($event) => isModal3XlOpen.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "flex w-full items-center justify-between p-4 md:p-6",
                      style: { "border": "1px solid #ddd" }
                    }, [
                      createVNode("h3", { class: "font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white" }, " Tambah Produk "),
                      createVNode(_component_BaseButtonClose, {
                        onClick: ($event) => isModal3XlOpen.value = false
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<table width="100%" class="crss"${_scopeId2}><tr${_scopeId2}><td align="left" width="50%" class="sdss"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseButton, { variant: "solid" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Buka Form Selengkapnya `);
                      } else {
                        return [
                          createTextVNode(" Buka Form Selengkapnya ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</td><td align="right" class="sdss2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseButton, {
                    onClick: ($event) => isModal3XlOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Batal `);
                      } else {
                        return [
                          createTextVNode(" Batal ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` \xA0 `);
                  _push3(ssrRenderComponent(_component_BaseButton, {
                    color: "primary",
                    variant: "solid",
                    onClick: ($event) => isModal3XlOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Simpan `);
                      } else {
                        return [
                          createTextVNode(" Simpan ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</td></tr></table>`);
                } else {
                  return [
                    createVNode("table", {
                      width: "100%",
                      class: "crss"
                    }, [
                      createVNode("tr", null, [
                        createVNode("td", {
                          align: "left",
                          width: "50%",
                          class: "sdss"
                        }, [
                          createVNode(_component_BaseButton, { variant: "solid" }, {
                            default: withCtx(() => [
                              createTextVNode(" Buka Form Selengkapnya ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("td", {
                          align: "right",
                          class: "sdss2"
                        }, [
                          createVNode(_component_BaseButton, {
                            onClick: ($event) => isModal3XlOpen.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Batal ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createTextVNode(" \xA0 "),
                          createVNode(_component_BaseButton, {
                            color: "primary",
                            variant: "solid",
                            onClick: ($event) => isModal3XlOpen.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Simpan ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 mrgn"${_scopeId2}><div class="mlls"${_scopeId2}><div class="title-m-1"${_scopeId2}>Informasi Produk</div><div class="title-m-2"${_scopeId2}>Ini adalah informasi yang pertama ditampilkan untuk pelanggan</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"${_scopeId2}><div class="line-height-normal"${_scopeId2}><span class="title-m-3"${_scopeId2}>Nama Produk</span> <span class="alert-red"${_scopeId2}>Wajib</span><br${_scopeId2}><span class="title-m-2"${_scopeId2}>Nama produk minimal mempunyai 40 karakter dengan memasukkan merek, jenis produk, warna, bahan, atau tipe.</span></div><div class="line-height-normal"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInput, { placeholder: "Contoh: Jenis/Kategori Produk + Merek + Keterangan" }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"${_scopeId2}><div class="line-height-normal"${_scopeId2}><span class="title-m-3"${_scopeId2}>Kategori</span> <span class="alert-red"${_scopeId2}>Wajib</span><br${_scopeId2}><span class="title-m-2"${_scopeId2}>Pilih kategori yang sesuai dengan produk. Pemilihan kategori yang tepat akan mempermudah barang untuk dicari oleh pembeli.</span></div><div class="line-height-normal"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseSelect, { rounded: "sm" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<option value=""${_scopeId3}> Pilih Opsi </option><option value="Superman"${_scopeId3}> Superman </option><option value="Batman"${_scopeId3}> Batman </option><option value="Iron man"${_scopeId3}> Iron man </option><option value="Magneto"${_scopeId3}> Magneto </option><option value="Cyclops"${_scopeId3}> Cyclops </option><option value="Test 1"${_scopeId3}> Test 1 </option>`);
                      } else {
                        return [
                          createVNode("option", { value: "" }, " Pilih Opsi "),
                          createVNode("option", { value: "Superman" }, " Superman "),
                          createVNode("option", { value: "Batman" }, " Batman "),
                          createVNode("option", { value: "Iron man" }, " Iron man "),
                          createVNode("option", { value: "Magneto" }, " Magneto "),
                          createVNode("option", { value: "Cyclops" }, " Cyclops "),
                          createVNode("option", { value: "Test 1" }, " Test 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"${_scopeId2}><div class="line-height-normal"${_scopeId2}><span class="title-m-3"${_scopeId2}>Etalase</span><br${_scopeId2}><span class="title-m-2"${_scopeId2}>Kamu dapat menambah etalase baru atau memilih dari daftar etalase yang ada.\u2028\u2028<br${_scopeId2}><br${_scopeId2}>Etalase dapat digunakan untuk mengelompokkan produk berdasarkan kriteria tertentu seperti; kategori, merek, tujuan penggunaan, penawaran atau deskon, dan popularitas atau trend.</span></div><div class="line-height-normal"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseSelect, { rounded: "sm" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<option value=""${_scopeId3}> Pilih Opsi </option><option value="Superman"${_scopeId3}> Superman </option><option value="Batman"${_scopeId3}> Batman </option><option value="Iron man"${_scopeId3}> Iron man </option><option value="Magneto"${_scopeId3}> Magneto </option><option value="Cyclops"${_scopeId3}> Cyclops </option>`);
                      } else {
                        return [
                          createVNode("option", { value: "" }, " Pilih Opsi "),
                          createVNode("option", { value: "Superman" }, " Superman "),
                          createVNode("option", { value: "Batman" }, " Batman "),
                          createVNode("option", { value: "Iron man" }, " Iron man "),
                          createVNode("option", { value: "Magneto" }, " Magneto "),
                          createVNode("option", { value: "Cyclops" }, " Cyclops ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"${_scopeId2}><div class="line-height-normal"${_scopeId2}><span class="title-m-3"${_scopeId2}>Foto Produk</span> <span class="alert-red"${_scopeId2}>Wajib</span><br${_scopeId2}><span class="title-m-2"${_scopeId2}>Wajib menambahkan minimal 1 dari 10 foto produk.<br${_scopeId2}>Format foto harus jpg jpeg ong dan mempunyai ukuran minimal 300 \xD7 300 px (untuk gambar optimal, gunakan ukuran min. 1.200 x 1.200 px).</span></div><div class="line-height-normal"${_scopeId2}><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4"${_scopeId2}><div class="mpks"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInputFileHeadless, {
                    modelValue: unref(inputFile1),
                    "onUpdate:modelValue": ($event) => isRef(inputFile1) ? inputFile1.value = $event : null,
                    accept: "image/*"
                  }, {
                    default: withCtx(({ open, remove, preview, files }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="relative size-20"${_scopeId3}>`);
                        if (files?.length && files.item(0)) {
                          _push4(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto"${_scopeId3}>`);
                        } else {
                          _push4(`<div class="kotak-dotted"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_center, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg"${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<br${_scopeId3}> Foto Utama </div>`);
                        }
                        if (files?.length && files.item(0)) {
                          _push4(`<div class="absolute bottom-0 end-0 z-20"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseButtonIcon, {
                            size: "sm",
                            rounded: "full",
                            "data-nui-tooltip": "Remove image",
                            class: "scale-90",
                            onClick: ($event) => remove(files.item(0))
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:x",
                                  class: "size-4"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "size-4"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<div class="absolute bottom-0 end-0 z-20"${_scopeId3}><div class="relative" data-nui-tooltip="Upload image"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseButtonIcon, {
                            size: "sm",
                            rounded: "full",
                            class: "button-foto",
                            onClick: open
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:plus",
                                  class: "size-4"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "lucide:plus",
                                    class: "size-4"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "relative size-20" }, [
                            files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: preview(files.item(0)).value,
                              alt: "Upload preview",
                              class: "img-close-foto"
                            }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "kotak-dotted"
                            }, [
                              createVNode(_component_center, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                ]),
                                _: 1
                              }),
                              createVNode("br"),
                              createTextVNode(" Foto Utama ")
                            ])),
                            files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "absolute bottom-0 end-0 z-20"
                            }, [
                              createVNode(_component_BaseButtonIcon, {
                                size: "sm",
                                rounded: "full",
                                "data-nui-tooltip": "Remove image",
                                class: "scale-90",
                                onClick: ($event) => remove(files.item(0))
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "size-4"
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ])) : (openBlock(), createBlock("div", {
                              key: 3,
                              class: "absolute bottom-0 end-0 z-20"
                            }, [
                              createVNode("div", {
                                class: "relative",
                                "data-nui-tooltip": "Upload image"
                              }, [
                                createVNode(_component_BaseButtonIcon, {
                                  size: "sm",
                                  rounded: "full",
                                  class: "button-foto",
                                  onClick: open
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:plus",
                                      class: "size-4"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ]))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="mpks"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInputFileHeadless, {
                    modelValue: unref(inputFile2),
                    "onUpdate:modelValue": ($event) => isRef(inputFile2) ? inputFile2.value = $event : null,
                    accept: "image/*"
                  }, {
                    default: withCtx(({ open, remove, preview, files }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="relative size-20"${_scopeId3}>`);
                        if (files?.length && files.item(0)) {
                          _push4(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto"${_scopeId3}>`);
                        } else {
                          _push4(`<div class="kotak-dotted"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_center, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg"${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<br${_scopeId3}> Foto Utama </div>`);
                        }
                        if (files?.length && files.item(0)) {
                          _push4(`<div class="absolute bottom-0 end-0 z-20"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseButtonIcon, {
                            size: "sm",
                            rounded: "full",
                            "data-nui-tooltip": "Remove image",
                            class: "scale-90",
                            onClick: ($event) => remove(files.item(0))
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:x",
                                  class: "size-4"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "size-4"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<div class="absolute bottom-0 end-0 z-20"${_scopeId3}><div class="relative" data-nui-tooltip="Upload image"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseButtonIcon, {
                            size: "sm",
                            class: "button-foto",
                            rounded: "full",
                            onClick: open
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:plus",
                                  class: "size-4"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "lucide:plus",
                                    class: "size-4"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "relative size-20" }, [
                            files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: preview(files.item(0)).value,
                              alt: "Upload preview",
                              class: "img-close-foto"
                            }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "kotak-dotted"
                            }, [
                              createVNode(_component_center, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                ]),
                                _: 1
                              }),
                              createVNode("br"),
                              createTextVNode(" Foto Utama ")
                            ])),
                            files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "absolute bottom-0 end-0 z-20"
                            }, [
                              createVNode(_component_BaseButtonIcon, {
                                size: "sm",
                                rounded: "full",
                                "data-nui-tooltip": "Remove image",
                                class: "scale-90",
                                onClick: ($event) => remove(files.item(0))
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "size-4"
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ])) : (openBlock(), createBlock("div", {
                              key: 3,
                              class: "absolute bottom-0 end-0 z-20"
                            }, [
                              createVNode("div", {
                                class: "relative",
                                "data-nui-tooltip": "Upload image"
                              }, [
                                createVNode(_component_BaseButtonIcon, {
                                  size: "sm",
                                  class: "button-foto",
                                  rounded: "full",
                                  onClick: open
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:plus",
                                      class: "size-4"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ]))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="mpks"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInputFileHeadless, {
                    modelValue: unref(inputFile3),
                    "onUpdate:modelValue": ($event) => isRef(inputFile3) ? inputFile3.value = $event : null,
                    accept: "image/*"
                  }, {
                    default: withCtx(({ open, remove, preview, files }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="relative size-20"${_scopeId3}>`);
                        if (files?.length && files.item(0)) {
                          _push4(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto"${_scopeId3}>`);
                        } else {
                          _push4(`<div class="kotak-dotted"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_center, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg"${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<br${_scopeId3}> Foto Utama </div>`);
                        }
                        if (files?.length && files.item(0)) {
                          _push4(`<div class="absolute bottom-0 end-0 z-20"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseButtonIcon, {
                            size: "sm",
                            rounded: "full",
                            "data-nui-tooltip": "Remove image",
                            class: "scale-90",
                            onClick: ($event) => remove(files.item(0))
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:x",
                                  class: "size-4"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "size-4"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<div class="absolute bottom-0 end-0 z-20"${_scopeId3}><div class="relative" data-nui-tooltip="Upload image"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseButtonIcon, {
                            size: "sm",
                            class: "button-foto",
                            rounded: "full",
                            onClick: open
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:plus",
                                  class: "size-4"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "lucide:plus",
                                    class: "size-4"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "relative size-20" }, [
                            files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: preview(files.item(0)).value,
                              alt: "Upload preview",
                              class: "img-close-foto"
                            }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "kotak-dotted"
                            }, [
                              createVNode(_component_center, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                ]),
                                _: 1
                              }),
                              createVNode("br"),
                              createTextVNode(" Foto Utama ")
                            ])),
                            files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "absolute bottom-0 end-0 z-20"
                            }, [
                              createVNode(_component_BaseButtonIcon, {
                                size: "sm",
                                rounded: "full",
                                "data-nui-tooltip": "Remove image",
                                class: "scale-90",
                                onClick: ($event) => remove(files.item(0))
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "size-4"
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ])) : (openBlock(), createBlock("div", {
                              key: 3,
                              class: "absolute bottom-0 end-0 z-20"
                            }, [
                              createVNode("div", {
                                class: "relative",
                                "data-nui-tooltip": "Upload image"
                              }, [
                                createVNode(_component_BaseButtonIcon, {
                                  size: "sm",
                                  class: "button-foto",
                                  rounded: "full",
                                  onClick: open
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:plus",
                                      class: "size-4"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ]))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="mpks"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInputFileHeadless, {
                    modelValue: unref(inputFile4),
                    "onUpdate:modelValue": ($event) => isRef(inputFile4) ? inputFile4.value = $event : null,
                    accept: "image/*"
                  }, {
                    default: withCtx(({ open, remove, preview, files }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="relative size-20"${_scopeId3}>`);
                        if (files?.length && files.item(0)) {
                          _push4(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto"${_scopeId3}>`);
                        } else {
                          _push4(`<div class="kotak-dotted"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_center, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg"${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<br${_scopeId3}> Foto Ke - 4 </div>`);
                        }
                        if (files?.length && files.item(0)) {
                          _push4(`<div class="absolute bottom-0 end-0 z-20"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseButtonIcon, {
                            size: "sm",
                            rounded: "full",
                            "data-nui-tooltip": "Remove image",
                            class: "scale-90",
                            onClick: ($event) => remove(files.item(0))
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:x",
                                  class: "size-4"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "size-4"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<div class="absolute bottom-0 end-0 z-20"${_scopeId3}><div class="relative" data-nui-tooltip="Upload image"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseButtonIcon, {
                            size: "sm",
                            class: "button-foto",
                            rounded: "full",
                            onClick: open
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:plus",
                                  class: "size-4"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "lucide:plus",
                                    class: "size-4"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "relative size-20" }, [
                            files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: preview(files.item(0)).value,
                              alt: "Upload preview",
                              class: "img-close-foto"
                            }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "kotak-dotted"
                            }, [
                              createVNode(_component_center, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                ]),
                                _: 1
                              }),
                              createVNode("br"),
                              createTextVNode(" Foto Ke - 4 ")
                            ])),
                            files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "absolute bottom-0 end-0 z-20"
                            }, [
                              createVNode(_component_BaseButtonIcon, {
                                size: "sm",
                                rounded: "full",
                                "data-nui-tooltip": "Remove image",
                                class: "scale-90",
                                onClick: ($event) => remove(files.item(0))
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "size-4"
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ])) : (openBlock(), createBlock("div", {
                              key: 3,
                              class: "absolute bottom-0 end-0 z-20"
                            }, [
                              createVNode("div", {
                                class: "relative",
                                "data-nui-tooltip": "Upload image"
                              }, [
                                createVNode(_component_BaseButtonIcon, {
                                  size: "sm",
                                  class: "button-foto",
                                  rounded: "full",
                                  onClick: open
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:plus",
                                      class: "size-4"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ]))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="mpks"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInputFileHeadless, {
                    modelValue: unref(inputFile5),
                    "onUpdate:modelValue": ($event) => isRef(inputFile5) ? inputFile5.value = $event : null,
                    accept: "image/*"
                  }, {
                    default: withCtx(({ open, remove, preview, files }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="relative size-20"${_scopeId3}>`);
                        if (files?.length && files.item(0)) {
                          _push4(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto"${_scopeId3}>`);
                        } else {
                          _push4(`<div class="kotak-dotted"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_center, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg"${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<br${_scopeId3}> Foto Ke - 5 </div>`);
                        }
                        if (files?.length && files.item(0)) {
                          _push4(`<div class="scale-90 absolute bottom-0 end-0 z-20" size="sm" rounded="full" data-nui-tooltip="Remove image"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseButtonIcon, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:x",
                                  class: "size-4"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "size-4"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<div class="absolute bottom-0 end-0 z-20"${_scopeId3}><div class="relative" data-nui-tooltip="Upload image"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseButtonIcon, {
                            size: "sm",
                            class: "button-foto",
                            rounded: "full",
                            onClick: open
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:plus",
                                  class: "size-4"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "lucide:plus",
                                    class: "size-4"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "relative size-20" }, [
                            files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: preview(files.item(0)).value,
                              alt: "Upload preview",
                              class: "img-close-foto"
                            }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "kotak-dotted"
                            }, [
                              createVNode(_component_center, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                ]),
                                _: 1
                              }),
                              createVNode("br"),
                              createTextVNode(" Foto Ke - 5 ")
                            ])),
                            files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "scale-90 absolute bottom-0 end-0 z-20",
                              size: "sm",
                              rounded: "full",
                              "data-nui-tooltip": "Remove image",
                              onClick: ($event) => remove(files.item(0))
                            }, [
                              createVNode(_component_BaseButtonIcon, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "size-4"
                                  })
                                ]),
                                _: 1
                              })
                            ], 8, ["onClick"])) : (openBlock(), createBlock("div", {
                              key: 3,
                              class: "absolute bottom-0 end-0 z-20"
                            }, [
                              createVNode("div", {
                                class: "relative",
                                "data-nui-tooltip": "Upload image"
                              }, [
                                createVNode(_component_BaseButtonIcon, {
                                  size: "sm",
                                  class: "button-foto",
                                  rounded: "full",
                                  onClick: open
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:plus",
                                      class: "size-4"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ]))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="mpks"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInputFileHeadless, {
                    modelValue: unref(inputFile6),
                    "onUpdate:modelValue": ($event) => isRef(inputFile6) ? inputFile6.value = $event : null,
                    accept: "image/*"
                  }, {
                    default: withCtx(({ open, remove, preview, files }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="relative size-20"${_scopeId3}>`);
                        if (files?.length && files.item(0)) {
                          _push4(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto"${_scopeId3}>`);
                        } else {
                          _push4(`<div class="kotak-dotted"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_center, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg"${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<br${_scopeId3}> Foto Ke - 6 </div>`);
                        }
                        if (files?.length && files.item(0)) {
                          _push4(`<div class="absolute bottom-0 end-0 z-20"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseButtonIcon, {
                            size: "sm",
                            rounded: "full",
                            "data-nui-tooltip": "Remove image",
                            class: "scale-90",
                            onClick: ($event) => remove(files.item(0))
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:x",
                                  class: "size-4"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "size-4"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<div class="absolute bottom-0 end-0 z-20"${_scopeId3}><div class="relative" data-nui-tooltip="Upload image"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseButtonIcon, {
                            size: "sm",
                            class: "button-foto",
                            rounded: "full",
                            onClick: open
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:plus",
                                  class: "size-4"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "lucide:plus",
                                    class: "size-4"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "relative size-20" }, [
                            files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: preview(files.item(0)).value,
                              alt: "Upload preview",
                              class: "img-close-foto"
                            }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "kotak-dotted"
                            }, [
                              createVNode(_component_center, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                ]),
                                _: 1
                              }),
                              createVNode("br"),
                              createTextVNode(" Foto Ke - 6 ")
                            ])),
                            files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "absolute bottom-0 end-0 z-20"
                            }, [
                              createVNode(_component_BaseButtonIcon, {
                                size: "sm",
                                rounded: "full",
                                "data-nui-tooltip": "Remove image",
                                class: "scale-90",
                                onClick: ($event) => remove(files.item(0))
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "size-4"
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ])) : (openBlock(), createBlock("div", {
                              key: 3,
                              class: "absolute bottom-0 end-0 z-20"
                            }, [
                              createVNode("div", {
                                class: "relative",
                                "data-nui-tooltip": "Upload image"
                              }, [
                                createVNode(_component_BaseButtonIcon, {
                                  size: "sm",
                                  class: "button-foto",
                                  rounded: "full",
                                  onClick: open
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:plus",
                                      class: "size-4"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ]))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="mpks"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInputFileHeadless, {
                    modelValue: unref(inputFile7),
                    "onUpdate:modelValue": ($event) => isRef(inputFile7) ? inputFile7.value = $event : null,
                    accept: "image/*"
                  }, {
                    default: withCtx(({ open, remove, preview, files }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="relative size-20"${_scopeId3}>`);
                        if (files?.length && files.item(0)) {
                          _push4(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto"${_scopeId3}>`);
                        } else {
                          _push4(`<div class="kotak-dotted"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_center, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg"${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<br${_scopeId3}> Foto Ke - 7 </div>`);
                        }
                        if (files?.length && files.item(0)) {
                          _push4(`<div class="absolute bottom-0 end-0 z-20"${_scopeId3}> size=&quot;sm&quot; rounded=&quot;full&quot; data-nui-tooltip=&quot;Remove image&quot; class=&quot;scale-90&quot; @click=&quot;remove(files.item(0)!)&quot; &gt; `);
                          _push4(ssrRenderComponent(_component_BaseButtonIcon, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:x",
                                  class: "size-4"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "size-4"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<div class="absolute bottom-0 end-0 z-20"${_scopeId3}><div class="relative" data-nui-tooltip="Upload image"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseButtonIcon, {
                            size: "sm",
                            class: "button-foto",
                            rounded: "full",
                            onClick: open
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:plus",
                                  class: "size-4"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "lucide:plus",
                                    class: "size-4"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "relative size-20" }, [
                            files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: preview(files.item(0)).value,
                              alt: "Upload preview",
                              class: "img-close-foto"
                            }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "kotak-dotted"
                            }, [
                              createVNode(_component_center, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                ]),
                                _: 1
                              }),
                              createVNode("br"),
                              createTextVNode(" Foto Ke - 7 ")
                            ])),
                            files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "absolute bottom-0 end-0 z-20"
                            }, [
                              createTextVNode(' size="sm" rounded="full" data-nui-tooltip="Remove image" class="scale-90" @click="remove(files.item(0)!)" > '),
                              createVNode(_component_BaseButtonIcon, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "size-4"
                                  })
                                ]),
                                _: 1
                              })
                            ])) : (openBlock(), createBlock("div", {
                              key: 3,
                              class: "absolute bottom-0 end-0 z-20"
                            }, [
                              createVNode("div", {
                                class: "relative",
                                "data-nui-tooltip": "Upload image"
                              }, [
                                createVNode(_component_BaseButtonIcon, {
                                  size: "sm",
                                  class: "button-foto",
                                  rounded: "full",
                                  onClick: open
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:plus",
                                      class: "size-4"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ]))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="mpks"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInputFileHeadless, {
                    modelValue: unref(inputFile8),
                    "onUpdate:modelValue": ($event) => isRef(inputFile8) ? inputFile8.value = $event : null,
                    accept: "image/*"
                  }, {
                    default: withCtx(({ open, remove, preview, files }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="relative size-20"${_scopeId3}>`);
                        if (files?.length && files.item(0)) {
                          _push4(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto"${_scopeId3}>`);
                        } else {
                          _push4(`<div class="kotak-dotted"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_center, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg"${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<br${_scopeId3}> Foto Ke - 8 </div>`);
                        }
                        if (files?.length && files.item(0)) {
                          _push4(`<div class="absolute bottom-0 end-0 z-20"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseButtonIcon, {
                            size: "sm",
                            rounded: "full",
                            "data-nui-tooltip": "Remove image",
                            class: "scale-90",
                            onClick: ($event) => remove(files.item(0))
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:x",
                                  class: "size-4"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "size-4"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<div class="absolute bottom-0 end-0 z-20"${_scopeId3}><div class="relative" data-nui-tooltip="Upload image"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseButtonIcon, {
                            size: "sm",
                            class: "button-foto",
                            rounded: "full",
                            onClick: open
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:plus",
                                  class: "size-4"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "lucide:plus",
                                    class: "size-4"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "relative size-20" }, [
                            files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: preview(files.item(0)).value,
                              alt: "Upload preview",
                              class: "img-close-foto"
                            }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "kotak-dotted"
                            }, [
                              createVNode(_component_center, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                ]),
                                _: 1
                              }),
                              createVNode("br"),
                              createTextVNode(" Foto Ke - 8 ")
                            ])),
                            files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "absolute bottom-0 end-0 z-20"
                            }, [
                              createVNode(_component_BaseButtonIcon, {
                                size: "sm",
                                rounded: "full",
                                "data-nui-tooltip": "Remove image",
                                class: "scale-90",
                                onClick: ($event) => remove(files.item(0))
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "size-4"
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ])) : (openBlock(), createBlock("div", {
                              key: 3,
                              class: "absolute bottom-0 end-0 z-20"
                            }, [
                              createVNode("div", {
                                class: "relative",
                                "data-nui-tooltip": "Upload image"
                              }, [
                                createVNode(_component_BaseButtonIcon, {
                                  size: "sm",
                                  class: "button-foto",
                                  rounded: "full",
                                  onClick: open
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:plus",
                                      class: "size-4"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ]))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="mpks"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInputFileHeadless, {
                    modelValue: unref(inputFile9),
                    "onUpdate:modelValue": ($event) => isRef(inputFile9) ? inputFile9.value = $event : null,
                    accept: "image/*"
                  }, {
                    default: withCtx(({ open, remove, preview, files }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="relative size-20"${_scopeId3}>`);
                        if (files?.length && files.item(0)) {
                          _push4(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="img-close-foto"${_scopeId3}>`);
                        } else {
                          _push4(`<div class="kotak-dotted"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_center, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img src="https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg"${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<br${_scopeId3}> Foto Ke - 9 `);
                          if (files?.length && files.item(0)) {
                            _push4(`<div class="scale-90 absolute bottom-0 end-0 z-20" size="sm" rounded="full" data-nui-tooltip="Remove image"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_BaseButtonIcon, null, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "lucide:x",
                                    class: "size-4"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "lucide:x",
                                      class: "size-4"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            _push4(`<div class="absolute bottom-0 end-0 z-20"${_scopeId3}><div class="relative" data-nui-tooltip="Upload image"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_BaseButtonIcon, {
                              size: "sm",
                              class: "button-foto",
                              rounded: "full",
                              onClick: open
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "lucide:plus",
                                    class: "size-4"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "lucide:plus",
                                      class: "size-4"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div></div>`);
                          }
                          _push4(`</div>`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "relative size-20" }, [
                            files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: preview(files.item(0)).value,
                              alt: "Upload preview",
                              class: "img-close-foto"
                            }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "kotak-dotted"
                            }, [
                              createVNode(_component_center, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                ]),
                                _: 1
                              }),
                              createVNode("br"),
                              createTextVNode(" Foto Ke - 9 "),
                              files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "scale-90 absolute bottom-0 end-0 z-20",
                                size: "sm",
                                rounded: "full",
                                "data-nui-tooltip": "Remove image",
                                onClick: ($event) => remove(files.item(0))
                              }, [
                                createVNode(_component_BaseButtonIcon, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:x",
                                      class: "size-4"
                                    })
                                  ]),
                                  _: 1
                                })
                              ], 8, ["onClick"])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "absolute bottom-0 end-0 z-20"
                              }, [
                                createVNode("div", {
                                  class: "relative",
                                  "data-nui-tooltip": "Upload image"
                                }, [
                                  createVNode(_component_BaseButtonIcon, {
                                    size: "sm",
                                    class: "button-foto",
                                    rounded: "full",
                                    onClick: open
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "lucide:plus",
                                        class: "size-4"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ])
                              ]))
                            ]))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"${_scopeId2}><div class="line-height-normal"${_scopeId2}><span class="title-m-3"${_scopeId2}>Kondisi</span> <span class="alert-red"${_scopeId2}>Wajib</span><br${_scopeId2}><span class="title-m-2"${_scopeId2}>Wajib menambahkan keterangan kondisi produk baru atau bekas</span></div><div class="line-height-normal" style="${ssrRenderStyle({ "margin-left": "15px" })}"${_scopeId2}><div class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseRadio, {
                    modelValue: _ctx.value,
                    "onUpdate:modelValue": ($event) => _ctx.value = $event,
                    name: "checkbox_base",
                    value: "default",
                    label: "baru",
                    color: "warning"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseRadio, {
                    modelValue: _ctx.value,
                    "onUpdate:modelValue": ($event) => _ctx.value = $event,
                    name: "checkbox_base",
                    value: "warning",
                    label: "bekas",
                    color: "warning"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"${_scopeId2}><div class="line-height-normal"${_scopeId2}><span class="title-m-3"${_scopeId2}>Minimum Pesanan</span> <span class="alert-red"${_scopeId2}>Wajib</span><br${_scopeId2}><span class="title-m-2"${_scopeId2}>Atur jumlah minimum yang harus dibeli untuk produk ini.</span></div><div class="line-height-normal"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInput, { placeholder: "Contoh: 3" }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"${_scopeId2}><div class="line-height-normal"${_scopeId2}><span class="title-m-3"${_scopeId2}>Harga Satuan</span> <span class="alert-red"${_scopeId2}>Wajib</span><br${_scopeId2}><span class="title-m-2"${_scopeId2}>Atur jumlah minimum yang harus dibeli untuk produk ini.</span></div><div class="line-height-normal"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInput, { placeholder: "Contoh: Rp10.000" }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"${_scopeId2}><div class="line-height-normal"${_scopeId2}><span class="title-m-3"${_scopeId2}>Status Produk</span><br${_scopeId2}><span class="title-m-2"${_scopeId2}>Jika status aktif, produkmu dapat dicari oleh calon pembeli.</span></div><div class="line-height-normal"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseSwitchThin, {
                    modelValue: _ctx.valuebx,
                    "onUpdate:modelValue": ($event) => _ctx.valuebx = $event,
                    label: "Aktifkan Produk",
                    color: "primary"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"${_scopeId2}><div class="line-height-normal"${_scopeId2}><span class="title-m-3"${_scopeId2}>Stok Produk</span><br${_scopeId2}><span class="title-m-2"${_scopeId2}>Jumlah barang atau unit yang tersedia untuk dijual.</span></div><div class="line-height-normal"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInput, { placeholder: "Contoh: 3" }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"${_scopeId2}><div class="line-height-normal"${_scopeId2}><span class="title-m-3"${_scopeId2}>Berat Produk</span><br${_scopeId2}><span class="title-m-2"${_scopeId2}>Jumlah barang atau unit yang tersedia untuk dijual.</span></div><div class="line-height-normal"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInput, { placeholder: "Contoh: 1" }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mlls"${_scopeId2}><div class="line-height-normal"${_scopeId2}><span class="title-m-3"${_scopeId2}>Ukuran Produk</span><br${_scopeId2}><span class="title-m-2"${_scopeId2}>Masukkan ukuran produk setelah dikemas untuk menghitung berat volume.</span></div><div class="line-height-normal"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInput, { placeholder: "Contoh: 1" }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 mrgn" }, [
                      createVNode("div", { class: "mlls" }, [
                        createVNode("div", { class: "title-m-1" }, "Informasi Produk"),
                        createVNode("div", { class: "title-m-2" }, "Ini adalah informasi yang pertama ditampilkan untuk pelanggan")
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Nama Produk"),
                          createTextVNode(),
                          createVNode("span", { class: "alert-red" }, "Wajib"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, "Nama produk minimal mempunyai 40 karakter dengan memasukkan merek, jenis produk, warna, bahan, atau tipe.")
                        ]),
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode(_component_BaseInput, { placeholder: "Contoh: Jenis/Kategori Produk + Merek + Keterangan" })
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Kategori"),
                          createTextVNode(),
                          createVNode("span", { class: "alert-red" }, "Wajib"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, "Pilih kategori yang sesuai dengan produk. Pemilihan kategori yang tepat akan mempermudah barang untuk dicari oleh pembeli.")
                        ]),
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode(_component_BaseSelect, { rounded: "sm" }, {
                            default: withCtx(() => [
                              createVNode("option", { value: "" }, " Pilih Opsi "),
                              createVNode("option", { value: "Superman" }, " Superman "),
                              createVNode("option", { value: "Batman" }, " Batman "),
                              createVNode("option", { value: "Iron man" }, " Iron man "),
                              createVNode("option", { value: "Magneto" }, " Magneto "),
                              createVNode("option", { value: "Cyclops" }, " Cyclops "),
                              createVNode("option", { value: "Test 1" }, " Test 1 ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Etalase"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, [
                            createTextVNode("Kamu dapat menambah etalase baru atau memilih dari daftar etalase yang ada.\u2028\u2028"),
                            createVNode("br"),
                            createVNode("br"),
                            createTextVNode("Etalase dapat digunakan untuk mengelompokkan produk berdasarkan kriteria tertentu seperti; kategori, merek, tujuan penggunaan, penawaran atau deskon, dan popularitas atau trend.")
                          ])
                        ]),
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode(_component_BaseSelect, { rounded: "sm" }, {
                            default: withCtx(() => [
                              createVNode("option", { value: "" }, " Pilih Opsi "),
                              createVNode("option", { value: "Superman" }, " Superman "),
                              createVNode("option", { value: "Batman" }, " Batman "),
                              createVNode("option", { value: "Iron man" }, " Iron man "),
                              createVNode("option", { value: "Magneto" }, " Magneto "),
                              createVNode("option", { value: "Cyclops" }, " Cyclops ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Foto Produk"),
                          createTextVNode(),
                          createVNode("span", { class: "alert-red" }, "Wajib"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, [
                            createTextVNode("Wajib menambahkan minimal 1 dari 10 foto produk."),
                            createVNode("br"),
                            createTextVNode("Format foto harus jpg jpeg ong dan mempunyai ukuran minimal 300 \xD7 300 px (untuk gambar optimal, gunakan ukuran min. 1.200 x 1.200 px).")
                          ])
                        ]),
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4" }, [
                            createVNode("div", { class: "mpks" }, [
                              createVNode(_component_BaseInputFileHeadless, {
                                modelValue: unref(inputFile1),
                                "onUpdate:modelValue": ($event) => isRef(inputFile1) ? inputFile1.value = $event : null,
                                accept: "image/*"
                              }, {
                                default: withCtx(({ open, remove, preview, files }) => [
                                  createVNode("div", { class: "relative size-20" }, [
                                    files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: preview(files.item(0)).value,
                                      alt: "Upload preview",
                                      class: "img-close-foto"
                                    }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "kotak-dotted"
                                    }, [
                                      createVNode(_component_center, null, {
                                        default: withCtx(() => [
                                          createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("br"),
                                      createTextVNode(" Foto Utama ")
                                    ])),
                                    files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                      key: 2,
                                      class: "absolute bottom-0 end-0 z-20"
                                    }, [
                                      createVNode(_component_BaseButtonIcon, {
                                        size: "sm",
                                        rounded: "full",
                                        "data-nui-tooltip": "Remove image",
                                        class: "scale-90",
                                        onClick: ($event) => remove(files.item(0))
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:x",
                                            class: "size-4"
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])) : (openBlock(), createBlock("div", {
                                      key: 3,
                                      class: "absolute bottom-0 end-0 z-20"
                                    }, [
                                      createVNode("div", {
                                        class: "relative",
                                        "data-nui-tooltip": "Upload image"
                                      }, [
                                        createVNode(_component_BaseButtonIcon, {
                                          size: "sm",
                                          rounded: "full",
                                          class: "button-foto",
                                          onClick: open
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:plus",
                                              class: "size-4"
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ]))
                                  ])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mpks" }, [
                              createVNode(_component_BaseInputFileHeadless, {
                                modelValue: unref(inputFile2),
                                "onUpdate:modelValue": ($event) => isRef(inputFile2) ? inputFile2.value = $event : null,
                                accept: "image/*"
                              }, {
                                default: withCtx(({ open, remove, preview, files }) => [
                                  createVNode("div", { class: "relative size-20" }, [
                                    files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: preview(files.item(0)).value,
                                      alt: "Upload preview",
                                      class: "img-close-foto"
                                    }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "kotak-dotted"
                                    }, [
                                      createVNode(_component_center, null, {
                                        default: withCtx(() => [
                                          createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("br"),
                                      createTextVNode(" Foto Utama ")
                                    ])),
                                    files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                      key: 2,
                                      class: "absolute bottom-0 end-0 z-20"
                                    }, [
                                      createVNode(_component_BaseButtonIcon, {
                                        size: "sm",
                                        rounded: "full",
                                        "data-nui-tooltip": "Remove image",
                                        class: "scale-90",
                                        onClick: ($event) => remove(files.item(0))
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:x",
                                            class: "size-4"
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])) : (openBlock(), createBlock("div", {
                                      key: 3,
                                      class: "absolute bottom-0 end-0 z-20"
                                    }, [
                                      createVNode("div", {
                                        class: "relative",
                                        "data-nui-tooltip": "Upload image"
                                      }, [
                                        createVNode(_component_BaseButtonIcon, {
                                          size: "sm",
                                          class: "button-foto",
                                          rounded: "full",
                                          onClick: open
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:plus",
                                              class: "size-4"
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ]))
                                  ])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mpks" }, [
                              createVNode(_component_BaseInputFileHeadless, {
                                modelValue: unref(inputFile3),
                                "onUpdate:modelValue": ($event) => isRef(inputFile3) ? inputFile3.value = $event : null,
                                accept: "image/*"
                              }, {
                                default: withCtx(({ open, remove, preview, files }) => [
                                  createVNode("div", { class: "relative size-20" }, [
                                    files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: preview(files.item(0)).value,
                                      alt: "Upload preview",
                                      class: "img-close-foto"
                                    }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "kotak-dotted"
                                    }, [
                                      createVNode(_component_center, null, {
                                        default: withCtx(() => [
                                          createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("br"),
                                      createTextVNode(" Foto Utama ")
                                    ])),
                                    files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                      key: 2,
                                      class: "absolute bottom-0 end-0 z-20"
                                    }, [
                                      createVNode(_component_BaseButtonIcon, {
                                        size: "sm",
                                        rounded: "full",
                                        "data-nui-tooltip": "Remove image",
                                        class: "scale-90",
                                        onClick: ($event) => remove(files.item(0))
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:x",
                                            class: "size-4"
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])) : (openBlock(), createBlock("div", {
                                      key: 3,
                                      class: "absolute bottom-0 end-0 z-20"
                                    }, [
                                      createVNode("div", {
                                        class: "relative",
                                        "data-nui-tooltip": "Upload image"
                                      }, [
                                        createVNode(_component_BaseButtonIcon, {
                                          size: "sm",
                                          class: "button-foto",
                                          rounded: "full",
                                          onClick: open
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:plus",
                                              class: "size-4"
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ]))
                                  ])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mpks" }, [
                              createVNode(_component_BaseInputFileHeadless, {
                                modelValue: unref(inputFile4),
                                "onUpdate:modelValue": ($event) => isRef(inputFile4) ? inputFile4.value = $event : null,
                                accept: "image/*"
                              }, {
                                default: withCtx(({ open, remove, preview, files }) => [
                                  createVNode("div", { class: "relative size-20" }, [
                                    files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: preview(files.item(0)).value,
                                      alt: "Upload preview",
                                      class: "img-close-foto"
                                    }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "kotak-dotted"
                                    }, [
                                      createVNode(_component_center, null, {
                                        default: withCtx(() => [
                                          createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("br"),
                                      createTextVNode(" Foto Ke - 4 ")
                                    ])),
                                    files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                      key: 2,
                                      class: "absolute bottom-0 end-0 z-20"
                                    }, [
                                      createVNode(_component_BaseButtonIcon, {
                                        size: "sm",
                                        rounded: "full",
                                        "data-nui-tooltip": "Remove image",
                                        class: "scale-90",
                                        onClick: ($event) => remove(files.item(0))
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:x",
                                            class: "size-4"
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])) : (openBlock(), createBlock("div", {
                                      key: 3,
                                      class: "absolute bottom-0 end-0 z-20"
                                    }, [
                                      createVNode("div", {
                                        class: "relative",
                                        "data-nui-tooltip": "Upload image"
                                      }, [
                                        createVNode(_component_BaseButtonIcon, {
                                          size: "sm",
                                          class: "button-foto",
                                          rounded: "full",
                                          onClick: open
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:plus",
                                              class: "size-4"
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ]))
                                  ])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mpks" }, [
                              createVNode(_component_BaseInputFileHeadless, {
                                modelValue: unref(inputFile5),
                                "onUpdate:modelValue": ($event) => isRef(inputFile5) ? inputFile5.value = $event : null,
                                accept: "image/*"
                              }, {
                                default: withCtx(({ open, remove, preview, files }) => [
                                  createVNode("div", { class: "relative size-20" }, [
                                    files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: preview(files.item(0)).value,
                                      alt: "Upload preview",
                                      class: "img-close-foto"
                                    }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "kotak-dotted"
                                    }, [
                                      createVNode(_component_center, null, {
                                        default: withCtx(() => [
                                          createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("br"),
                                      createTextVNode(" Foto Ke - 5 ")
                                    ])),
                                    files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                      key: 2,
                                      class: "scale-90 absolute bottom-0 end-0 z-20",
                                      size: "sm",
                                      rounded: "full",
                                      "data-nui-tooltip": "Remove image",
                                      onClick: ($event) => remove(files.item(0))
                                    }, [
                                      createVNode(_component_BaseButtonIcon, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:x",
                                            class: "size-4"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ], 8, ["onClick"])) : (openBlock(), createBlock("div", {
                                      key: 3,
                                      class: "absolute bottom-0 end-0 z-20"
                                    }, [
                                      createVNode("div", {
                                        class: "relative",
                                        "data-nui-tooltip": "Upload image"
                                      }, [
                                        createVNode(_component_BaseButtonIcon, {
                                          size: "sm",
                                          class: "button-foto",
                                          rounded: "full",
                                          onClick: open
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:plus",
                                              class: "size-4"
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ]))
                                  ])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mpks" }, [
                              createVNode(_component_BaseInputFileHeadless, {
                                modelValue: unref(inputFile6),
                                "onUpdate:modelValue": ($event) => isRef(inputFile6) ? inputFile6.value = $event : null,
                                accept: "image/*"
                              }, {
                                default: withCtx(({ open, remove, preview, files }) => [
                                  createVNode("div", { class: "relative size-20" }, [
                                    files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: preview(files.item(0)).value,
                                      alt: "Upload preview",
                                      class: "img-close-foto"
                                    }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "kotak-dotted"
                                    }, [
                                      createVNode(_component_center, null, {
                                        default: withCtx(() => [
                                          createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("br"),
                                      createTextVNode(" Foto Ke - 6 ")
                                    ])),
                                    files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                      key: 2,
                                      class: "absolute bottom-0 end-0 z-20"
                                    }, [
                                      createVNode(_component_BaseButtonIcon, {
                                        size: "sm",
                                        rounded: "full",
                                        "data-nui-tooltip": "Remove image",
                                        class: "scale-90",
                                        onClick: ($event) => remove(files.item(0))
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:x",
                                            class: "size-4"
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])) : (openBlock(), createBlock("div", {
                                      key: 3,
                                      class: "absolute bottom-0 end-0 z-20"
                                    }, [
                                      createVNode("div", {
                                        class: "relative",
                                        "data-nui-tooltip": "Upload image"
                                      }, [
                                        createVNode(_component_BaseButtonIcon, {
                                          size: "sm",
                                          class: "button-foto",
                                          rounded: "full",
                                          onClick: open
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:plus",
                                              class: "size-4"
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ]))
                                  ])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mpks" }, [
                              createVNode(_component_BaseInputFileHeadless, {
                                modelValue: unref(inputFile7),
                                "onUpdate:modelValue": ($event) => isRef(inputFile7) ? inputFile7.value = $event : null,
                                accept: "image/*"
                              }, {
                                default: withCtx(({ open, remove, preview, files }) => [
                                  createVNode("div", { class: "relative size-20" }, [
                                    files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: preview(files.item(0)).value,
                                      alt: "Upload preview",
                                      class: "img-close-foto"
                                    }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "kotak-dotted"
                                    }, [
                                      createVNode(_component_center, null, {
                                        default: withCtx(() => [
                                          createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("br"),
                                      createTextVNode(" Foto Ke - 7 ")
                                    ])),
                                    files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                      key: 2,
                                      class: "absolute bottom-0 end-0 z-20"
                                    }, [
                                      createTextVNode(' size="sm" rounded="full" data-nui-tooltip="Remove image" class="scale-90" @click="remove(files.item(0)!)" > '),
                                      createVNode(_component_BaseButtonIcon, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:x",
                                            class: "size-4"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ])) : (openBlock(), createBlock("div", {
                                      key: 3,
                                      class: "absolute bottom-0 end-0 z-20"
                                    }, [
                                      createVNode("div", {
                                        class: "relative",
                                        "data-nui-tooltip": "Upload image"
                                      }, [
                                        createVNode(_component_BaseButtonIcon, {
                                          size: "sm",
                                          class: "button-foto",
                                          rounded: "full",
                                          onClick: open
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:plus",
                                              class: "size-4"
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ]))
                                  ])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mpks" }, [
                              createVNode(_component_BaseInputFileHeadless, {
                                modelValue: unref(inputFile8),
                                "onUpdate:modelValue": ($event) => isRef(inputFile8) ? inputFile8.value = $event : null,
                                accept: "image/*"
                              }, {
                                default: withCtx(({ open, remove, preview, files }) => [
                                  createVNode("div", { class: "relative size-20" }, [
                                    files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: preview(files.item(0)).value,
                                      alt: "Upload preview",
                                      class: "img-close-foto"
                                    }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "kotak-dotted"
                                    }, [
                                      createVNode(_component_center, null, {
                                        default: withCtx(() => [
                                          createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("br"),
                                      createTextVNode(" Foto Ke - 8 ")
                                    ])),
                                    files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                      key: 2,
                                      class: "absolute bottom-0 end-0 z-20"
                                    }, [
                                      createVNode(_component_BaseButtonIcon, {
                                        size: "sm",
                                        rounded: "full",
                                        "data-nui-tooltip": "Remove image",
                                        class: "scale-90",
                                        onClick: ($event) => remove(files.item(0))
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:x",
                                            class: "size-4"
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])) : (openBlock(), createBlock("div", {
                                      key: 3,
                                      class: "absolute bottom-0 end-0 z-20"
                                    }, [
                                      createVNode("div", {
                                        class: "relative",
                                        "data-nui-tooltip": "Upload image"
                                      }, [
                                        createVNode(_component_BaseButtonIcon, {
                                          size: "sm",
                                          class: "button-foto",
                                          rounded: "full",
                                          onClick: open
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:plus",
                                              class: "size-4"
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ]))
                                  ])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mpks" }, [
                              createVNode(_component_BaseInputFileHeadless, {
                                modelValue: unref(inputFile9),
                                "onUpdate:modelValue": ($event) => isRef(inputFile9) ? inputFile9.value = $event : null,
                                accept: "image/*"
                              }, {
                                default: withCtx(({ open, remove, preview, files }) => [
                                  createVNode("div", { class: "relative size-20" }, [
                                    files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: preview(files.item(0)).value,
                                      alt: "Upload preview",
                                      class: "img-close-foto"
                                    }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "kotak-dotted"
                                    }, [
                                      createVNode(_component_center, null, {
                                        default: withCtx(() => [
                                          createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("br"),
                                      createTextVNode(" Foto Ke - 9 "),
                                      files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "scale-90 absolute bottom-0 end-0 z-20",
                                        size: "sm",
                                        rounded: "full",
                                        "data-nui-tooltip": "Remove image",
                                        onClick: ($event) => remove(files.item(0))
                                      }, [
                                        createVNode(_component_BaseButtonIcon, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:x",
                                              class: "size-4"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ], 8, ["onClick"])) : (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "absolute bottom-0 end-0 z-20"
                                      }, [
                                        createVNode("div", {
                                          class: "relative",
                                          "data-nui-tooltip": "Upload image"
                                        }, [
                                          createVNode(_component_BaseButtonIcon, {
                                            size: "sm",
                                            class: "button-foto",
                                            rounded: "full",
                                            onClick: open
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_Icon, {
                                                name: "lucide:plus",
                                                class: "size-4"
                                              })
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])
                                        ])
                                      ]))
                                    ]))
                                  ])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Kondisi"),
                          createTextVNode(),
                          createVNode("span", { class: "alert-red" }, "Wajib"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, "Wajib menambahkan keterangan kondisi produk baru atau bekas")
                        ]),
                        createVNode("div", {
                          class: "line-height-normal",
                          style: { "margin-left": "15px" }
                        }, [
                          createVNode("div", { class: "grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4" }, [
                            createVNode(_component_BaseRadio, {
                              modelValue: _ctx.value,
                              "onUpdate:modelValue": ($event) => _ctx.value = $event,
                              name: "checkbox_base",
                              value: "default",
                              label: "baru",
                              color: "warning"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_BaseRadio, {
                              modelValue: _ctx.value,
                              "onUpdate:modelValue": ($event) => _ctx.value = $event,
                              name: "checkbox_base",
                              value: "warning",
                              label: "bekas",
                              color: "warning"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Minimum Pesanan"),
                          createTextVNode(),
                          createVNode("span", { class: "alert-red" }, "Wajib"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, "Atur jumlah minimum yang harus dibeli untuk produk ini.")
                        ]),
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode(_component_BaseInput, { placeholder: "Contoh: 3" })
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Harga Satuan"),
                          createTextVNode(),
                          createVNode("span", { class: "alert-red" }, "Wajib"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, "Atur jumlah minimum yang harus dibeli untuk produk ini.")
                        ]),
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode(_component_BaseInput, { placeholder: "Contoh: Rp10.000" })
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Status Produk"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, "Jika status aktif, produkmu dapat dicari oleh calon pembeli.")
                        ]),
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode(_component_BaseSwitchThin, {
                            modelValue: _ctx.valuebx,
                            "onUpdate:modelValue": ($event) => _ctx.valuebx = $event,
                            label: "Aktifkan Produk",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Stok Produk"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, "Jumlah barang atau unit yang tersedia untuk dijual.")
                        ]),
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode(_component_BaseInput, { placeholder: "Contoh: 3" })
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Berat Produk"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, "Jumlah barang atau unit yang tersedia untuk dijual.")
                        ]),
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode(_component_BaseInput, { placeholder: "Contoh: 1" })
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode("span", { class: "title-m-3" }, "Ukuran Produk"),
                          createVNode("br"),
                          createVNode("span", { class: "title-m-2" }, "Masukkan ukuran produk setelah dikemas untuk menghitung berat volume.")
                        ]),
                        createVNode("div", { class: "line-height-normal" }, [
                          createVNode(_component_BaseInput, { placeholder: "Contoh: 1" })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            if (!unref(pending) && unref(data)?.data.length === 0) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BasePlaceholderPage, {
                title: "Produk Masih Kosong",
                subtitle: "Data di tabel ini masih kosong. Anda bisa menambahkannya menggunakan tombol \u201CTambah Produk."
              }, {
                image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="block dark:hidden" src="https://res.cloudinary.com/daraki09f/image/upload/v1714112315/waktoo-commerce/data-empty-table.svg" alt="Placeholder image"${_scopeId2}><img class="hidden dark:block" src="https://res.cloudinary.com/daraki09f/image/upload/v1714112315/waktoo-commerce/data-empty-table.svg" alt="Placeholder image"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "block dark:hidden",
                        src: "https://res.cloudinary.com/daraki09f/image/upload/v1714112315/waktoo-commerce/data-empty-table.svg",
                        alt: "Placeholder image"
                      }),
                      createVNode("img", {
                        class: "hidden dark:block",
                        src: "https://res.cloudinary.com/daraki09f/image/upload/v1714112315/waktoo-commerce/data-empty-table.svg",
                        alt: "Placeholder image"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}><div class="w-full"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_TairoTable, {
                shape: "rounded",
                scrollable: false
              }, {
                header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: "",
                      class: "p-4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseCheckbox, {
                            "model-value": unref(isAllVisibleSelected),
                            indeterminate: unref(selected).length > 0 && !unref(isAllVisibleSelected),
                            name: "table-1-main",
                            shape: "rounded",
                            class: "text-primary-500",
                            onClick: toggleAllVisibleSelection
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_BaseCheckbox, {
                                "model-value": unref(isAllVisibleSelected),
                                indeterminate: unref(selected).length > 0 && !unref(isAllVisibleSelected),
                                name: "table-1-main",
                                shape: "rounded",
                                class: "text-primary-500",
                                onClick: toggleAllVisibleSelection
                              }, null, 8, ["model-value", "indeterminate"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` NAMA PRODUK `);
                        } else {
                          return [
                            createTextVNode(" NAMA PRODUK ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`NILAI`);
                        } else {
                          return [
                            createTextVNode("NILAI")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`HARGA`);
                        } else {
                          return [
                            createTextVNode("HARGA")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`DISKON`);
                        } else {
                          return [
                            createTextVNode("DISKON")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`KATEGORI`);
                        } else {
                          return [
                            createTextVNode("KATEGORI")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` STOK `);
                        } else {
                          return [
                            createTextVNode(" STOK ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`AKTIF`);
                        } else {
                          return [
                            createTextVNode("AKTIF")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: "",
                        class: "p-4"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_BaseCheckbox, {
                              "model-value": unref(isAllVisibleSelected),
                              indeterminate: unref(selected).length > 0 && !unref(isAllVisibleSelected),
                              name: "table-1-main",
                              shape: "rounded",
                              class: "text-primary-500",
                              onClick: toggleAllVisibleSelection
                            }, null, 8, ["model-value", "indeterminate"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" NAMA PRODUK ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("NILAI")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("HARGA")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("DISKON")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("KATEGORI")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" STOK ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("AKTIF")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(selected).length > 0) {
                      _push3(ssrRenderComponent(_component_TairoTableRow, { hoverable: false }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_TairoTableCell, {
                              colspan: "8",
                              class: "bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` You have selected ${ssrInterpolate(unref(selected).length)} items of the total ${ssrInterpolate(unref(data)?.total)} items. <a href="#" class="outline-none hover:underline focus:underline"${_scopeId4}>Click here to everything</a>`);
                                } else {
                                  return [
                                    createTextVNode(" You have selected " + toDisplayString(unref(selected).length) + " items of the total " + toDisplayString(unref(data)?.total) + " items. ", 1),
                                    createVNode("a", {
                                      href: "#",
                                      class: "outline-none hover:underline focus:underline"
                                    }, "Click here to everything")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_TairoTableCell, {
                                colspan: "8",
                                class: "bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" You have selected " + toDisplayString(unref(selected).length) + " items of the total " + toDisplayString(unref(data)?.total) + " items. ", 1),
                                  createVNode("a", {
                                    href: "#",
                                    class: "outline-none hover:underline focus:underline"
                                  }, "Click here to everything")
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(data)?.data, (item) => {
                      _push3(ssrRenderComponent(_component_TairoTableRow, {
                        key: item.id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex items-center"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_BaseCheckbox, {
                                    modelValue: unref(selected),
                                    "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                                    value: item.id,
                                    name: `item-checkbox-${item.id}`,
                                    shape: "rounded",
                                    class: "text-primary-500"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex items-center" }, [
                                      createVNode(_component_BaseCheckbox, {
                                        modelValue: unref(selected),
                                        "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                                        value: item.id,
                                        name: `item-checkbox-${item.id}`,
                                        shape: "rounded",
                                        class: "text-primary-500"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TairoTableCell, {
                              spaced: "",
                              style: { "width": "300px" }
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_router_link, { to: "/produk/detail-produk" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="flex items-center"${_scopeId5}><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714039421/waktoo-commerce/22.svg" class="img-produk"${_scopeId5}><div class="ms-3 leading-none"${_scopeId5}><h4 class="font-sans text-sm font-medium dxz-2"${_scopeId5}> Kaos Polos Pria Tanpa Sablon Premium Terbaru Bahan Katun Combed 24s Nyaman </h4></div></div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "flex items-center" }, [
                                            createVNode("img", {
                                              src: "https://res.cloudinary.com/daraki09f/image/upload/v1714039421/waktoo-commerce/22.svg",
                                              class: "img-produk"
                                            }),
                                            createVNode("div", { class: "ms-3 leading-none" }, [
                                              createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, " Kaos Polos Pria Tanpa Sablon Premium Terbaru Bahan Katun Combed 24s Nyaman ")
                                            ])
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_router_link, { to: "/produk/detail-produk" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center" }, [
                                          createVNode("img", {
                                            src: "https://res.cloudinary.com/daraki09f/image/upload/v1714039421/waktoo-commerce/22.svg",
                                            class: "img-produk"
                                          }),
                                          createVNode("div", { class: "ms-3 leading-none" }, [
                                            createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, " Kaos Polos Pria Tanpa Sablon Premium Terbaru Bahan Katun Combed 24s Nyaman ")
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span class="start-text"${_scopeId4}>4.7</span><img src="https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png"${_scopeId4}><b${_scopeId4}>12.049</b> Penilaian `);
                                } else {
                                  return [
                                    createVNode("span", { class: "start-text" }, "4.7"),
                                    createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png" }),
                                    createVNode("b", null, "12.049"),
                                    createTextVNode(" Penilaian ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span class="font-bold"${_scopeId4}>Rp30.000 - Rp120.000</span><br${_scopeId4}><s${_scopeId4}>Rp40.000 - Rp130.000</s>`);
                                } else {
                                  return [
                                    createVNode("span", { class: "font-bold" }, "Rp30.000 - Rp120.000"),
                                    createVNode("br"),
                                    createVNode("s", null, "Rp40.000 - Rp130.000")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TairoTableCell, {
                              spaced: "",
                              class: "capitalize"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (item.status === "available") {
                                    _push5(`<span class="txt-sm-alert1"${_scopeId4}>30%</span>`);
                                  } else if (item.status === "new") {
                                    _push5(`<span class="txt-sm-alert2"${_scopeId4}>Tidak Aktif</span>`);
                                  } else {
                                    _push5(`<span class="txt-sm-alert3"${_scopeId4}>-Rp30.000</span>`);
                                  }
                                } else {
                                  return [
                                    item.status === "available" ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "txt-sm-alert1"
                                    }, "30%")) : item.status === "new" ? (openBlock(), createBlock("span", {
                                      key: 1,
                                      class: "txt-sm-alert2"
                                    }, "Tidak Aktif")) : (openBlock(), createBlock("span", {
                                      key: 2,
                                      class: "txt-sm-alert3"
                                    }, "-Rp30.000"))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (item.status === "available") {
                                    _push5(`<h4 class="font-sans text-sm font-medium"${_scopeId4}>150</h4>`);
                                  } else if (item.status === "new") {
                                    _push5(`<span class="txt-sm-alert2"${_scopeId4}>Kosong</span>`);
                                  } else {
                                    _push5(`<h4 class="font-sans text-sm font-medium"${_scopeId4}>103</h4>`);
                                  }
                                } else {
                                  return [
                                    item.status === "available" ? (openBlock(), createBlock("h4", {
                                      key: 0,
                                      class: "font-sans text-sm font-medium"
                                    }, "150")) : item.status === "new" ? (openBlock(), createBlock("span", {
                                      key: 1,
                                      class: "txt-sm-alert2"
                                    }, "Kosong")) : (openBlock(), createBlock("h4", {
                                      key: 2,
                                      class: "font-sans text-sm font-medium"
                                    }, "103"))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (item.status === "available") {
                                    _push5(`<span class="txt-sm-alert4"${_scopeId4}>Pakaian Pria</span>`);
                                  } else {
                                    _push5(`<span class="txt-sm-alert2"${_scopeId4}>Semua</span>`);
                                  }
                                } else {
                                  return [
                                    item.status === "available" ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "txt-sm-alert4"
                                    }, "Pakaian Pria")) : (openBlock(), createBlock("span", {
                                      key: 1,
                                      class: "txt-sm-alert2"
                                    }, "Semua"))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_BaseSwitchBall, {
                                    modelValue: unref(values).success,
                                    "onUpdate:modelValue": ($event) => unref(values).success = $event,
                                    color: "success"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_BaseSwitchBall, {
                                      modelValue: unref(values).success,
                                      "onUpdate:modelValue": ($event) => unref(values).success = $event,
                                      color: "success"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode(_component_BaseCheckbox, {
                                      modelValue: unref(selected),
                                      "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                                      value: item.id,
                                      name: `item-checkbox-${item.id}`,
                                      shape: "rounded",
                                      class: "text-primary-500"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                spaced: "",
                                style: { "width": "300px" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_router_link, { to: "/produk/detail-produk" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-center" }, [
                                        createVNode("img", {
                                          src: "https://res.cloudinary.com/daraki09f/image/upload/v1714039421/waktoo-commerce/22.svg",
                                          class: "img-produk"
                                        }),
                                        createVNode("div", { class: "ms-3 leading-none" }, [
                                          createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, " Kaos Polos Pria Tanpa Sablon Premium Terbaru Bahan Katun Combed 24s Nyaman ")
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TairoTableCell, {
                                light: "",
                                spaced: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "start-text" }, "4.7"),
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png" }),
                                  createVNode("b", null, "12.049"),
                                  createTextVNode(" Penilaian ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TairoTableCell, {
                                light: "",
                                spaced: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "font-bold" }, "Rp30.000 - Rp120.000"),
                                  createVNode("br"),
                                  createVNode("s", null, "Rp40.000 - Rp130.000")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TairoTableCell, {
                                spaced: "",
                                class: "capitalize"
                              }, {
                                default: withCtx(() => [
                                  item.status === "available" ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "txt-sm-alert1"
                                  }, "30%")) : item.status === "new" ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "txt-sm-alert2"
                                  }, "Tidak Aktif")) : (openBlock(), createBlock("span", {
                                    key: 2,
                                    class: "txt-sm-alert3"
                                  }, "-Rp30.000"))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  item.status === "available" ? (openBlock(), createBlock("h4", {
                                    key: 0,
                                    class: "font-sans text-sm font-medium"
                                  }, "150")) : item.status === "new" ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "txt-sm-alert2"
                                  }, "Kosong")) : (openBlock(), createBlock("h4", {
                                    key: 2,
                                    class: "font-sans text-sm font-medium"
                                  }, "103"))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  item.status === "available" ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "txt-sm-alert4"
                                  }, "Pakaian Pria")) : (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "txt-sm-alert2"
                                  }, "Semua"))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseSwitchBall, {
                                    modelValue: unref(values).success,
                                    "onUpdate:modelValue": ($event) => unref(values).success = $event,
                                    color: "success"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      unref(selected).length > 0 ? (openBlock(), createBlock(_component_TairoTableRow, {
                        key: 0,
                        hoverable: false
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_TairoTableCell, {
                            colspan: "8",
                            class: "bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" You have selected " + toDisplayString(unref(selected).length) + " items of the total " + toDisplayString(unref(data)?.total) + " items. ", 1),
                              createVNode("a", {
                                href: "#",
                                class: "outline-none hover:underline focus:underline"
                              }, "Click here to everything")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.data, (item) => {
                        return openBlock(), createBlock(_component_TairoTableRow, {
                          key: item.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(_component_BaseCheckbox, {
                                    modelValue: unref(selected),
                                    "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                                    value: item.id,
                                    name: `item-checkbox-${item.id}`,
                                    shape: "rounded",
                                    class: "text-primary-500"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, {
                              spaced: "",
                              style: { "width": "300px" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_router_link, { to: "/produk/detail-produk" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center" }, [
                                      createVNode("img", {
                                        src: "https://res.cloudinary.com/daraki09f/image/upload/v1714039421/waktoo-commerce/22.svg",
                                        class: "img-produk"
                                      }),
                                      createVNode("div", { class: "ms-3 leading-none" }, [
                                        createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, " Kaos Polos Pria Tanpa Sablon Premium Terbaru Bahan Katun Combed 24s Nyaman ")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "start-text" }, "4.7"),
                                createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png" }),
                                createVNode("b", null, "12.049"),
                                createTextVNode(" Penilaian ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "font-bold" }, "Rp30.000 - Rp120.000"),
                                createVNode("br"),
                                createVNode("s", null, "Rp40.000 - Rp130.000")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, {
                              spaced: "",
                              class: "capitalize"
                            }, {
                              default: withCtx(() => [
                                item.status === "available" ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "txt-sm-alert1"
                                }, "30%")) : item.status === "new" ? (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "txt-sm-alert2"
                                }, "Tidak Aktif")) : (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: "txt-sm-alert3"
                                }, "-Rp30.000"))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                item.status === "available" ? (openBlock(), createBlock("h4", {
                                  key: 0,
                                  class: "font-sans text-sm font-medium"
                                }, "150")) : item.status === "new" ? (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "txt-sm-alert2"
                                }, "Kosong")) : (openBlock(), createBlock("h4", {
                                  key: 2,
                                  class: "font-sans text-sm font-medium"
                                }, "103"))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                item.status === "available" ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "txt-sm-alert4"
                                }, "Pakaian Pria")) : (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "txt-sm-alert2"
                                }, "Semua"))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_BaseSwitchBall, {
                                  modelValue: unref(values).success,
                                  "onUpdate:modelValue": ($event) => unref(values).success = $event,
                                  color: "success"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="mt-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseSelect, {
                modelValue: unref(perPage),
                "onUpdate:modelValue": ($event) => isRef(perPage) ? perPage.value = $event : null,
                label: "",
                classes: {
                  wrapper: "w-full sm:w-40 absolute-page"
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<option${ssrRenderAttr("value", 10)}${_scopeId2}>10 data per halaman</option><option${ssrRenderAttr("value", 25)}${_scopeId2}>25 data per halaman</option><option${ssrRenderAttr("value", 50)}${_scopeId2}>50 data per halaman</option><option${ssrRenderAttr("value", 100)}${_scopeId2}>100 data per halaman</option>`);
                  } else {
                    return [
                      createVNode("option", { value: 10 }, "10 data per halaman"),
                      createVNode("option", { value: 25 }, "25 data per halaman"),
                      createVNode("option", { value: 50 }, "50 data per halaman"),
                      createVNode("option", { value: 100 }, "100 data per halaman")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BasePagination, {
                "total-items": unref(data)?.total ?? 0,
                "item-per-page": unref(perPage),
                "current-page": unref(page),
                shape: "curved"
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_TairoModal, {
                open: unref(isModal3XlOpen),
                size: "3xl",
                onClose: ($event) => isModal3XlOpen.value = false
              }, {
                header: withCtx(() => [
                  createVNode("div", {
                    class: "flex w-full items-center justify-between p-4 md:p-6",
                    style: { "border": "1px solid #ddd" }
                  }, [
                    createVNode("h3", { class: "font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white" }, " Tambah Produk "),
                    createVNode(_component_BaseButtonClose, {
                      onClick: ($event) => isModal3XlOpen.value = false
                    }, null, 8, ["onClick"])
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode("table", {
                    width: "100%",
                    class: "crss"
                  }, [
                    createVNode("tr", null, [
                      createVNode("td", {
                        align: "left",
                        width: "50%",
                        class: "sdss"
                      }, [
                        createVNode(_component_BaseButton, { variant: "solid" }, {
                          default: withCtx(() => [
                            createTextVNode(" Buka Form Selengkapnya ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("td", {
                        align: "right",
                        class: "sdss2"
                      }, [
                        createVNode(_component_BaseButton, {
                          onClick: ($event) => isModal3XlOpen.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Batal ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createTextVNode(" \xA0 "),
                        createVNode(_component_BaseButton, {
                          color: "primary",
                          variant: "solid",
                          onClick: ($event) => isModal3XlOpen.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Simpan ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 mrgn" }, [
                    createVNode("div", { class: "mlls" }, [
                      createVNode("div", { class: "title-m-1" }, "Informasi Produk"),
                      createVNode("div", { class: "title-m-2" }, "Ini adalah informasi yang pertama ditampilkan untuk pelanggan")
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode("span", { class: "title-m-3" }, "Nama Produk"),
                        createTextVNode(),
                        createVNode("span", { class: "alert-red" }, "Wajib"),
                        createVNode("br"),
                        createVNode("span", { class: "title-m-2" }, "Nama produk minimal mempunyai 40 karakter dengan memasukkan merek, jenis produk, warna, bahan, atau tipe.")
                      ]),
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode(_component_BaseInput, { placeholder: "Contoh: Jenis/Kategori Produk + Merek + Keterangan" })
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode("span", { class: "title-m-3" }, "Kategori"),
                        createTextVNode(),
                        createVNode("span", { class: "alert-red" }, "Wajib"),
                        createVNode("br"),
                        createVNode("span", { class: "title-m-2" }, "Pilih kategori yang sesuai dengan produk. Pemilihan kategori yang tepat akan mempermudah barang untuk dicari oleh pembeli.")
                      ]),
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode(_component_BaseSelect, { rounded: "sm" }, {
                          default: withCtx(() => [
                            createVNode("option", { value: "" }, " Pilih Opsi "),
                            createVNode("option", { value: "Superman" }, " Superman "),
                            createVNode("option", { value: "Batman" }, " Batman "),
                            createVNode("option", { value: "Iron man" }, " Iron man "),
                            createVNode("option", { value: "Magneto" }, " Magneto "),
                            createVNode("option", { value: "Cyclops" }, " Cyclops "),
                            createVNode("option", { value: "Test 1" }, " Test 1 ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode("span", { class: "title-m-3" }, "Etalase"),
                        createVNode("br"),
                        createVNode("span", { class: "title-m-2" }, [
                          createTextVNode("Kamu dapat menambah etalase baru atau memilih dari daftar etalase yang ada.\u2028\u2028"),
                          createVNode("br"),
                          createVNode("br"),
                          createTextVNode("Etalase dapat digunakan untuk mengelompokkan produk berdasarkan kriteria tertentu seperti; kategori, merek, tujuan penggunaan, penawaran atau deskon, dan popularitas atau trend.")
                        ])
                      ]),
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode(_component_BaseSelect, { rounded: "sm" }, {
                          default: withCtx(() => [
                            createVNode("option", { value: "" }, " Pilih Opsi "),
                            createVNode("option", { value: "Superman" }, " Superman "),
                            createVNode("option", { value: "Batman" }, " Batman "),
                            createVNode("option", { value: "Iron man" }, " Iron man "),
                            createVNode("option", { value: "Magneto" }, " Magneto "),
                            createVNode("option", { value: "Cyclops" }, " Cyclops ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode("span", { class: "title-m-3" }, "Foto Produk"),
                        createTextVNode(),
                        createVNode("span", { class: "alert-red" }, "Wajib"),
                        createVNode("br"),
                        createVNode("span", { class: "title-m-2" }, [
                          createTextVNode("Wajib menambahkan minimal 1 dari 10 foto produk."),
                          createVNode("br"),
                          createTextVNode("Format foto harus jpg jpeg ong dan mempunyai ukuran minimal 300 \xD7 300 px (untuk gambar optimal, gunakan ukuran min. 1.200 x 1.200 px).")
                        ])
                      ]),
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4" }, [
                          createVNode("div", { class: "mpks" }, [
                            createVNode(_component_BaseInputFileHeadless, {
                              modelValue: unref(inputFile1),
                              "onUpdate:modelValue": ($event) => isRef(inputFile1) ? inputFile1.value = $event : null,
                              accept: "image/*"
                            }, {
                              default: withCtx(({ open, remove, preview, files }) => [
                                createVNode("div", { class: "relative size-20" }, [
                                  files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: preview(files.item(0)).value,
                                    alt: "Upload preview",
                                    class: "img-close-foto"
                                  }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "kotak-dotted"
                                  }, [
                                    createVNode(_component_center, null, {
                                      default: withCtx(() => [
                                        createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("br"),
                                    createTextVNode(" Foto Utama ")
                                  ])),
                                  files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                    key: 2,
                                    class: "absolute bottom-0 end-0 z-20"
                                  }, [
                                    createVNode(_component_BaseButtonIcon, {
                                      size: "sm",
                                      rounded: "full",
                                      "data-nui-tooltip": "Remove image",
                                      class: "scale-90",
                                      onClick: ($event) => remove(files.item(0))
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:x",
                                          class: "size-4"
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ])) : (openBlock(), createBlock("div", {
                                    key: 3,
                                    class: "absolute bottom-0 end-0 z-20"
                                  }, [
                                    createVNode("div", {
                                      class: "relative",
                                      "data-nui-tooltip": "Upload image"
                                    }, [
                                      createVNode(_component_BaseButtonIcon, {
                                        size: "sm",
                                        rounded: "full",
                                        class: "button-foto",
                                        onClick: open
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:plus",
                                            class: "size-4"
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])
                                  ]))
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mpks" }, [
                            createVNode(_component_BaseInputFileHeadless, {
                              modelValue: unref(inputFile2),
                              "onUpdate:modelValue": ($event) => isRef(inputFile2) ? inputFile2.value = $event : null,
                              accept: "image/*"
                            }, {
                              default: withCtx(({ open, remove, preview, files }) => [
                                createVNode("div", { class: "relative size-20" }, [
                                  files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: preview(files.item(0)).value,
                                    alt: "Upload preview",
                                    class: "img-close-foto"
                                  }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "kotak-dotted"
                                  }, [
                                    createVNode(_component_center, null, {
                                      default: withCtx(() => [
                                        createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("br"),
                                    createTextVNode(" Foto Utama ")
                                  ])),
                                  files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                    key: 2,
                                    class: "absolute bottom-0 end-0 z-20"
                                  }, [
                                    createVNode(_component_BaseButtonIcon, {
                                      size: "sm",
                                      rounded: "full",
                                      "data-nui-tooltip": "Remove image",
                                      class: "scale-90",
                                      onClick: ($event) => remove(files.item(0))
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:x",
                                          class: "size-4"
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ])) : (openBlock(), createBlock("div", {
                                    key: 3,
                                    class: "absolute bottom-0 end-0 z-20"
                                  }, [
                                    createVNode("div", {
                                      class: "relative",
                                      "data-nui-tooltip": "Upload image"
                                    }, [
                                      createVNode(_component_BaseButtonIcon, {
                                        size: "sm",
                                        class: "button-foto",
                                        rounded: "full",
                                        onClick: open
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:plus",
                                            class: "size-4"
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])
                                  ]))
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mpks" }, [
                            createVNode(_component_BaseInputFileHeadless, {
                              modelValue: unref(inputFile3),
                              "onUpdate:modelValue": ($event) => isRef(inputFile3) ? inputFile3.value = $event : null,
                              accept: "image/*"
                            }, {
                              default: withCtx(({ open, remove, preview, files }) => [
                                createVNode("div", { class: "relative size-20" }, [
                                  files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: preview(files.item(0)).value,
                                    alt: "Upload preview",
                                    class: "img-close-foto"
                                  }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "kotak-dotted"
                                  }, [
                                    createVNode(_component_center, null, {
                                      default: withCtx(() => [
                                        createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("br"),
                                    createTextVNode(" Foto Utama ")
                                  ])),
                                  files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                    key: 2,
                                    class: "absolute bottom-0 end-0 z-20"
                                  }, [
                                    createVNode(_component_BaseButtonIcon, {
                                      size: "sm",
                                      rounded: "full",
                                      "data-nui-tooltip": "Remove image",
                                      class: "scale-90",
                                      onClick: ($event) => remove(files.item(0))
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:x",
                                          class: "size-4"
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ])) : (openBlock(), createBlock("div", {
                                    key: 3,
                                    class: "absolute bottom-0 end-0 z-20"
                                  }, [
                                    createVNode("div", {
                                      class: "relative",
                                      "data-nui-tooltip": "Upload image"
                                    }, [
                                      createVNode(_component_BaseButtonIcon, {
                                        size: "sm",
                                        class: "button-foto",
                                        rounded: "full",
                                        onClick: open
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:plus",
                                            class: "size-4"
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])
                                  ]))
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mpks" }, [
                            createVNode(_component_BaseInputFileHeadless, {
                              modelValue: unref(inputFile4),
                              "onUpdate:modelValue": ($event) => isRef(inputFile4) ? inputFile4.value = $event : null,
                              accept: "image/*"
                            }, {
                              default: withCtx(({ open, remove, preview, files }) => [
                                createVNode("div", { class: "relative size-20" }, [
                                  files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: preview(files.item(0)).value,
                                    alt: "Upload preview",
                                    class: "img-close-foto"
                                  }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "kotak-dotted"
                                  }, [
                                    createVNode(_component_center, null, {
                                      default: withCtx(() => [
                                        createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("br"),
                                    createTextVNode(" Foto Ke - 4 ")
                                  ])),
                                  files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                    key: 2,
                                    class: "absolute bottom-0 end-0 z-20"
                                  }, [
                                    createVNode(_component_BaseButtonIcon, {
                                      size: "sm",
                                      rounded: "full",
                                      "data-nui-tooltip": "Remove image",
                                      class: "scale-90",
                                      onClick: ($event) => remove(files.item(0))
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:x",
                                          class: "size-4"
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ])) : (openBlock(), createBlock("div", {
                                    key: 3,
                                    class: "absolute bottom-0 end-0 z-20"
                                  }, [
                                    createVNode("div", {
                                      class: "relative",
                                      "data-nui-tooltip": "Upload image"
                                    }, [
                                      createVNode(_component_BaseButtonIcon, {
                                        size: "sm",
                                        class: "button-foto",
                                        rounded: "full",
                                        onClick: open
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:plus",
                                            class: "size-4"
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])
                                  ]))
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mpks" }, [
                            createVNode(_component_BaseInputFileHeadless, {
                              modelValue: unref(inputFile5),
                              "onUpdate:modelValue": ($event) => isRef(inputFile5) ? inputFile5.value = $event : null,
                              accept: "image/*"
                            }, {
                              default: withCtx(({ open, remove, preview, files }) => [
                                createVNode("div", { class: "relative size-20" }, [
                                  files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: preview(files.item(0)).value,
                                    alt: "Upload preview",
                                    class: "img-close-foto"
                                  }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "kotak-dotted"
                                  }, [
                                    createVNode(_component_center, null, {
                                      default: withCtx(() => [
                                        createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("br"),
                                    createTextVNode(" Foto Ke - 5 ")
                                  ])),
                                  files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                    key: 2,
                                    class: "scale-90 absolute bottom-0 end-0 z-20",
                                    size: "sm",
                                    rounded: "full",
                                    "data-nui-tooltip": "Remove image",
                                    onClick: ($event) => remove(files.item(0))
                                  }, [
                                    createVNode(_component_BaseButtonIcon, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:x",
                                          class: "size-4"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ], 8, ["onClick"])) : (openBlock(), createBlock("div", {
                                    key: 3,
                                    class: "absolute bottom-0 end-0 z-20"
                                  }, [
                                    createVNode("div", {
                                      class: "relative",
                                      "data-nui-tooltip": "Upload image"
                                    }, [
                                      createVNode(_component_BaseButtonIcon, {
                                        size: "sm",
                                        class: "button-foto",
                                        rounded: "full",
                                        onClick: open
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:plus",
                                            class: "size-4"
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])
                                  ]))
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mpks" }, [
                            createVNode(_component_BaseInputFileHeadless, {
                              modelValue: unref(inputFile6),
                              "onUpdate:modelValue": ($event) => isRef(inputFile6) ? inputFile6.value = $event : null,
                              accept: "image/*"
                            }, {
                              default: withCtx(({ open, remove, preview, files }) => [
                                createVNode("div", { class: "relative size-20" }, [
                                  files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: preview(files.item(0)).value,
                                    alt: "Upload preview",
                                    class: "img-close-foto"
                                  }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "kotak-dotted"
                                  }, [
                                    createVNode(_component_center, null, {
                                      default: withCtx(() => [
                                        createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("br"),
                                    createTextVNode(" Foto Ke - 6 ")
                                  ])),
                                  files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                    key: 2,
                                    class: "absolute bottom-0 end-0 z-20"
                                  }, [
                                    createVNode(_component_BaseButtonIcon, {
                                      size: "sm",
                                      rounded: "full",
                                      "data-nui-tooltip": "Remove image",
                                      class: "scale-90",
                                      onClick: ($event) => remove(files.item(0))
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:x",
                                          class: "size-4"
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ])) : (openBlock(), createBlock("div", {
                                    key: 3,
                                    class: "absolute bottom-0 end-0 z-20"
                                  }, [
                                    createVNode("div", {
                                      class: "relative",
                                      "data-nui-tooltip": "Upload image"
                                    }, [
                                      createVNode(_component_BaseButtonIcon, {
                                        size: "sm",
                                        class: "button-foto",
                                        rounded: "full",
                                        onClick: open
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:plus",
                                            class: "size-4"
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])
                                  ]))
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mpks" }, [
                            createVNode(_component_BaseInputFileHeadless, {
                              modelValue: unref(inputFile7),
                              "onUpdate:modelValue": ($event) => isRef(inputFile7) ? inputFile7.value = $event : null,
                              accept: "image/*"
                            }, {
                              default: withCtx(({ open, remove, preview, files }) => [
                                createVNode("div", { class: "relative size-20" }, [
                                  files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: preview(files.item(0)).value,
                                    alt: "Upload preview",
                                    class: "img-close-foto"
                                  }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "kotak-dotted"
                                  }, [
                                    createVNode(_component_center, null, {
                                      default: withCtx(() => [
                                        createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("br"),
                                    createTextVNode(" Foto Ke - 7 ")
                                  ])),
                                  files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                    key: 2,
                                    class: "absolute bottom-0 end-0 z-20"
                                  }, [
                                    createTextVNode(' size="sm" rounded="full" data-nui-tooltip="Remove image" class="scale-90" @click="remove(files.item(0)!)" > '),
                                    createVNode(_component_BaseButtonIcon, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:x",
                                          class: "size-4"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])) : (openBlock(), createBlock("div", {
                                    key: 3,
                                    class: "absolute bottom-0 end-0 z-20"
                                  }, [
                                    createVNode("div", {
                                      class: "relative",
                                      "data-nui-tooltip": "Upload image"
                                    }, [
                                      createVNode(_component_BaseButtonIcon, {
                                        size: "sm",
                                        class: "button-foto",
                                        rounded: "full",
                                        onClick: open
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:plus",
                                            class: "size-4"
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])
                                  ]))
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mpks" }, [
                            createVNode(_component_BaseInputFileHeadless, {
                              modelValue: unref(inputFile8),
                              "onUpdate:modelValue": ($event) => isRef(inputFile8) ? inputFile8.value = $event : null,
                              accept: "image/*"
                            }, {
                              default: withCtx(({ open, remove, preview, files }) => [
                                createVNode("div", { class: "relative size-20" }, [
                                  files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: preview(files.item(0)).value,
                                    alt: "Upload preview",
                                    class: "img-close-foto"
                                  }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "kotak-dotted"
                                  }, [
                                    createVNode(_component_center, null, {
                                      default: withCtx(() => [
                                        createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("br"),
                                    createTextVNode(" Foto Ke - 8 ")
                                  ])),
                                  files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                    key: 2,
                                    class: "absolute bottom-0 end-0 z-20"
                                  }, [
                                    createVNode(_component_BaseButtonIcon, {
                                      size: "sm",
                                      rounded: "full",
                                      "data-nui-tooltip": "Remove image",
                                      class: "scale-90",
                                      onClick: ($event) => remove(files.item(0))
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:x",
                                          class: "size-4"
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ])) : (openBlock(), createBlock("div", {
                                    key: 3,
                                    class: "absolute bottom-0 end-0 z-20"
                                  }, [
                                    createVNode("div", {
                                      class: "relative",
                                      "data-nui-tooltip": "Upload image"
                                    }, [
                                      createVNode(_component_BaseButtonIcon, {
                                        size: "sm",
                                        class: "button-foto",
                                        rounded: "full",
                                        onClick: open
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:plus",
                                            class: "size-4"
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])
                                  ]))
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mpks" }, [
                            createVNode(_component_BaseInputFileHeadless, {
                              modelValue: unref(inputFile9),
                              "onUpdate:modelValue": ($event) => isRef(inputFile9) ? inputFile9.value = $event : null,
                              accept: "image/*"
                            }, {
                              default: withCtx(({ open, remove, preview, files }) => [
                                createVNode("div", { class: "relative size-20" }, [
                                  files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: preview(files.item(0)).value,
                                    alt: "Upload preview",
                                    class: "img-close-foto"
                                  }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "kotak-dotted"
                                  }, [
                                    createVNode(_component_center, null, {
                                      default: withCtx(() => [
                                        createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1715845355/waktoo-commerce/icon-foto.svg" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("br"),
                                    createTextVNode(" Foto Ke - 9 "),
                                    files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "scale-90 absolute bottom-0 end-0 z-20",
                                      size: "sm",
                                      rounded: "full",
                                      "data-nui-tooltip": "Remove image",
                                      onClick: ($event) => remove(files.item(0))
                                    }, [
                                      createVNode(_component_BaseButtonIcon, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:x",
                                            class: "size-4"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ], 8, ["onClick"])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "absolute bottom-0 end-0 z-20"
                                    }, [
                                      createVNode("div", {
                                        class: "relative",
                                        "data-nui-tooltip": "Upload image"
                                      }, [
                                        createVNode(_component_BaseButtonIcon, {
                                          size: "sm",
                                          class: "button-foto",
                                          rounded: "full",
                                          onClick: open
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:plus",
                                              class: "size-4"
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ]))
                                  ]))
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode("span", { class: "title-m-3" }, "Kondisi"),
                        createTextVNode(),
                        createVNode("span", { class: "alert-red" }, "Wajib"),
                        createVNode("br"),
                        createVNode("span", { class: "title-m-2" }, "Wajib menambahkan keterangan kondisi produk baru atau bekas")
                      ]),
                      createVNode("div", {
                        class: "line-height-normal",
                        style: { "margin-left": "15px" }
                      }, [
                        createVNode("div", { class: "grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4" }, [
                          createVNode(_component_BaseRadio, {
                            modelValue: _ctx.value,
                            "onUpdate:modelValue": ($event) => _ctx.value = $event,
                            name: "checkbox_base",
                            value: "default",
                            label: "baru",
                            color: "warning"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_BaseRadio, {
                            modelValue: _ctx.value,
                            "onUpdate:modelValue": ($event) => _ctx.value = $event,
                            name: "checkbox_base",
                            value: "warning",
                            label: "bekas",
                            color: "warning"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode("span", { class: "title-m-3" }, "Minimum Pesanan"),
                        createTextVNode(),
                        createVNode("span", { class: "alert-red" }, "Wajib"),
                        createVNode("br"),
                        createVNode("span", { class: "title-m-2" }, "Atur jumlah minimum yang harus dibeli untuk produk ini.")
                      ]),
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode(_component_BaseInput, { placeholder: "Contoh: 3" })
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode("span", { class: "title-m-3" }, "Harga Satuan"),
                        createTextVNode(),
                        createVNode("span", { class: "alert-red" }, "Wajib"),
                        createVNode("br"),
                        createVNode("span", { class: "title-m-2" }, "Atur jumlah minimum yang harus dibeli untuk produk ini.")
                      ]),
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode(_component_BaseInput, { placeholder: "Contoh: Rp10.000" })
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode("span", { class: "title-m-3" }, "Status Produk"),
                        createVNode("br"),
                        createVNode("span", { class: "title-m-2" }, "Jika status aktif, produkmu dapat dicari oleh calon pembeli.")
                      ]),
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode(_component_BaseSwitchThin, {
                          modelValue: _ctx.valuebx,
                          "onUpdate:modelValue": ($event) => _ctx.valuebx = $event,
                          label: "Aktifkan Produk",
                          color: "primary"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode("span", { class: "title-m-3" }, "Stok Produk"),
                        createVNode("br"),
                        createVNode("span", { class: "title-m-2" }, "Jumlah barang atau unit yang tersedia untuk dijual.")
                      ]),
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode(_component_BaseInput, { placeholder: "Contoh: 3" })
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode("span", { class: "title-m-3" }, "Berat Produk"),
                        createVNode("br"),
                        createVNode("span", { class: "title-m-2" }, "Jumlah barang atau unit yang tersedia untuk dijual.")
                      ]),
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode(_component_BaseInput, { placeholder: "Contoh: 1" })
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mlls" }, [
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode("span", { class: "title-m-3" }, "Ukuran Produk"),
                        createVNode("br"),
                        createVNode("span", { class: "title-m-2" }, "Masukkan ukuran produk setelah dikemas untuk menghitung berat volume.")
                      ]),
                      createVNode("div", { class: "line-height-normal" }, [
                        createVNode(_component_BaseInput, { placeholder: "Contoh: 1" })
                      ])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["open", "onClose"]),
              createVNode("div", null, [
                !unref(pending) && unref(data)?.data.length === 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(_component_BasePlaceholderPage, {
                    title: "Produk Masih Kosong",
                    subtitle: "Data di tabel ini masih kosong. Anda bisa menambahkannya menggunakan tombol \u201CTambah Produk."
                  }, {
                    image: withCtx(() => [
                      createVNode("img", {
                        class: "block dark:hidden",
                        src: "https://res.cloudinary.com/daraki09f/image/upload/v1714112315/waktoo-commerce/data-empty-table.svg",
                        alt: "Placeholder image"
                      }),
                      createVNode("img", {
                        class: "hidden dark:block",
                        src: "https://res.cloudinary.com/daraki09f/image/upload/v1714112315/waktoo-commerce/data-empty-table.svg",
                        alt: "Placeholder image"
                      })
                    ]),
                    _: 1
                  })
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "w-full" }, [
                    createVNode(_component_TairoTable, {
                      shape: "rounded",
                      scrollable: false
                    }, {
                      header: withCtx(() => [
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: "",
                          class: "p-4"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_BaseCheckbox, {
                                "model-value": unref(isAllVisibleSelected),
                                indeterminate: unref(selected).length > 0 && !unref(isAllVisibleSelected),
                                name: "table-1-main",
                                shape: "rounded",
                                class: "text-primary-500",
                                onClick: toggleAllVisibleSelection
                              }, null, 8, ["model-value", "indeterminate"])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" NAMA PRODUK ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("NILAI")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("HARGA")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("DISKON")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("KATEGORI")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" STOK ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("AKTIF")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        unref(selected).length > 0 ? (openBlock(), createBlock(_component_TairoTableRow, {
                          key: 0,
                          hoverable: false
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_TairoTableCell, {
                              colspan: "8",
                              class: "bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" You have selected " + toDisplayString(unref(selected).length) + " items of the total " + toDisplayString(unref(data)?.total) + " items. ", 1),
                                createVNode("a", {
                                  href: "#",
                                  class: "outline-none hover:underline focus:underline"
                                }, "Click here to everything")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.data, (item) => {
                          return openBlock(), createBlock(_component_TairoTableRow, {
                            key: item.id
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode(_component_BaseCheckbox, {
                                      modelValue: unref(selected),
                                      "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                                      value: item.id,
                                      name: `item-checkbox-${item.id}`,
                                      shape: "rounded",
                                      class: "text-primary-500"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                spaced: "",
                                style: { "width": "300px" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_router_link, { to: "/produk/detail-produk" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-center" }, [
                                        createVNode("img", {
                                          src: "https://res.cloudinary.com/daraki09f/image/upload/v1714039421/waktoo-commerce/22.svg",
                                          class: "img-produk"
                                        }),
                                        createVNode("div", { class: "ms-3 leading-none" }, [
                                          createVNode("h4", { class: "font-sans text-sm font-medium dxz-2" }, " Kaos Polos Pria Tanpa Sablon Premium Terbaru Bahan Katun Combed 24s Nyaman ")
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TairoTableCell, {
                                light: "",
                                spaced: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "start-text" }, "4.7"),
                                  createVNode("img", { src: "https://res.cloudinary.com/daraki09f/image/upload/v1714039399/waktoo-commerce/icon-rating.png" }),
                                  createVNode("b", null, "12.049"),
                                  createTextVNode(" Penilaian ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TairoTableCell, {
                                light: "",
                                spaced: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "font-bold" }, "Rp30.000 - Rp120.000"),
                                  createVNode("br"),
                                  createVNode("s", null, "Rp40.000 - Rp130.000")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TairoTableCell, {
                                spaced: "",
                                class: "capitalize"
                              }, {
                                default: withCtx(() => [
                                  item.status === "available" ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "txt-sm-alert1"
                                  }, "30%")) : item.status === "new" ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "txt-sm-alert2"
                                  }, "Tidak Aktif")) : (openBlock(), createBlock("span", {
                                    key: 2,
                                    class: "txt-sm-alert3"
                                  }, "-Rp30.000"))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  item.status === "available" ? (openBlock(), createBlock("h4", {
                                    key: 0,
                                    class: "font-sans text-sm font-medium"
                                  }, "150")) : item.status === "new" ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "txt-sm-alert2"
                                  }, "Kosong")) : (openBlock(), createBlock("h4", {
                                    key: 2,
                                    class: "font-sans text-sm font-medium"
                                  }, "103"))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  item.status === "available" ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "txt-sm-alert4"
                                  }, "Pakaian Pria")) : (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "txt-sm-alert2"
                                  }, "Semua"))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseSwitchBall, {
                                    modelValue: unref(values).success,
                                    "onUpdate:modelValue": ($event) => unref(values).success = $event,
                                    color: "success"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode(_component_BaseSelect, {
                      modelValue: unref(perPage),
                      "onUpdate:modelValue": ($event) => isRef(perPage) ? perPage.value = $event : null,
                      label: "",
                      classes: {
                        wrapper: "w-full sm:w-40 absolute-page"
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode("option", { value: 10 }, "10 data per halaman"),
                        createVNode("option", { value: 25 }, "25 data per halaman"),
                        createVNode("option", { value: 50 }, "50 data per halaman"),
                        createVNode("option", { value: 100 }, "100 data per halaman")
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BasePagination, {
                      "total-items": unref(data)?.total ?? 0,
                      "item-per-page": unref(perPage),
                      "current-page": unref(page),
                      shape: "curved"
                    }, null, 8, ["total-items", "item-per-page", "current-page"])
                  ])
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/produk/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
