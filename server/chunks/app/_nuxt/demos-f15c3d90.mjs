import { u as useRouter, _ as __nuxt_component_1$1, o as _sfc_main$D, b as _sfc_main$q, m as _sfc_main$t, a as __nuxt_component_2$1, d as _sfc_main$p, f as _sfc_main$a, g as _export_sfc } from '../server.mjs';
import { _ as _sfc_main$5 } from './BaseRadio-017acd77.mjs';
import { _ as __nuxt_component_1$2 } from './nuxt-img-285f3071.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, ref, computed, unref, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$4 } from './LandingFooter-843f9743.mjs';
import '../../nitro/node-server.mjs';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LandingDemoLink",
  __ssrInlineRender: true,
  props: {
    name: {},
    preview: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_NuxtImg = __nuxt_component_1$2;
      const _component_BaseCard = _sfc_main$D;
      const _component_BaseHeading = _sfc_main$q;
      const _component_BaseText = _sfc_main$t;
      const _component_Icon = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: { name: props.name, params: props.preview?.params },
        class: "group relative block"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: ["border-muted-200 block rounded-lg border motion-safe:transition-opacity motion-safe:duration-200 motion-safe:group-hover:opacity-75", props.preview?.srcDark ? "dark:hidden" : ""],
              src: props.preview?.src,
              alt: `Tairo - ${props.preview?.title}`,
              height: "271",
              width: "487",
              sizes: "sm:100vw md:50vw lg:974px",
              format: "webp",
              loading: "lazy",
              decoding: "async"
            }, null, _parent2, _scopeId));
            if (props.preview?.srcDark) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                class: "border-muted-800 hidden rounded-lg border motion-safe:transition-opacity motion-safe:duration-200 motion-safe:group-hover:opacity-75 dark:block",
                src: props.preview?.srcDark,
                alt: `Tairo - ${props.preview?.title}`,
                height: "271",
                width: "487",
                sizes: "sm:100vw md:50vw lg:974px",
                format: "webp",
                loading: "lazy",
                decoding: "async"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="absolute inset-x-0 -bottom-2 mx-auto max-w-[85%]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCard, {
              shape: "curved",
              class: "flex items-center p-4",
              elevated: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h3",
                    size: "sm",
                    weight: "medium",
                    lead: "none",
                    class: "text-muted-800 mx-auto dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.preview?.title)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.preview?.title), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.preview?.description)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.preview?.description), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="bg-primary-500/10 text-primary-500 me-2 ms-auto flex h-8 w-8 items-center justify-center rounded-full motion-safe:opacity-0 motion-safe:transition-opacity motion-safe:duration-300 motion-safe:group-hover:opacity-100"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "h-4 w-4 motion-safe:-translate-x-2 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-0 motion-reduce:translate-x-0"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h3",
                        size: "sm",
                        weight: "medium",
                        lead: "none",
                        class: "text-muted-800 mx-auto dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.preview?.title), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-500 dark:text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.preview?.description), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "bg-primary-500/10 text-primary-500 me-2 ms-auto flex h-8 w-8 items-center justify-center rounded-full motion-safe:opacity-0 motion-safe:transition-opacity motion-safe:duration-300 motion-safe:group-hover:opacity-100" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:arrow-right",
                        class: "h-4 w-4 motion-safe:-translate-x-2 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-0 motion-reduce:translate-x-0"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_NuxtImg, {
                  class: ["border-muted-200 block rounded-lg border motion-safe:transition-opacity motion-safe:duration-200 motion-safe:group-hover:opacity-75", props.preview?.srcDark ? "dark:hidden" : ""],
                  src: props.preview?.src,
                  alt: `Tairo - ${props.preview?.title}`,
                  height: "271",
                  width: "487",
                  sizes: "sm:100vw md:50vw lg:974px",
                  format: "webp",
                  loading: "lazy",
                  decoding: "async"
                }, null, 8, ["class", "src", "alt"]),
                props.preview?.srcDark ? (openBlock(), createBlock(_component_NuxtImg, {
                  key: 0,
                  class: "border-muted-800 hidden rounded-lg border motion-safe:transition-opacity motion-safe:duration-200 motion-safe:group-hover:opacity-75 dark:block",
                  src: props.preview?.srcDark,
                  alt: `Tairo - ${props.preview?.title}`,
                  height: "271",
                  width: "487",
                  sizes: "sm:100vw md:50vw lg:974px",
                  format: "webp",
                  loading: "lazy",
                  decoding: "async"
                }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                createVNode("div", { class: "absolute inset-x-0 -bottom-2 mx-auto max-w-[85%]" }, [
                  createVNode(_component_BaseCard, {
                    shape: "curved",
                    class: "flex items-center p-4",
                    elevated: ""
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode(_component_BaseHeading, {
                          as: "h3",
                          size: "sm",
                          weight: "medium",
                          lead: "none",
                          class: "text-muted-800 mx-auto dark:text-white"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.preview?.title), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-500 dark:text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.preview?.description), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "bg-primary-500/10 text-primary-500 me-2 ms-auto flex h-8 w-8 items-center justify-center rounded-full motion-safe:opacity-0 motion-safe:transition-opacity motion-safe:duration-300 motion-safe:group-hover:opacity-100" }, [
                        createVNode(_component_Icon, {
                          name: "lucide:arrow-right",
                          class: "h-4 w-4 motion-safe:-translate-x-2 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-0 motion-reduce:translate-x-0"
                        })
                      ])
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/landing/components/LandingDemoLink.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LandingDemos",
  __ssrInlineRender: true,
  props: {
    limit: { default: void 0 },
    cta: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const selectedCategory = ref("");
    const router = useRouter();
    const demoPages = computed(() => {
      const match = [];
      function traverseRoutes(routes) {
        for (const route of routes) {
          if (route.children) {
            traverseRoutes(route.children);
          } else if (route.path.includes(":") && Array.isArray(route.meta?.preview)) {
            match.push(route);
          } else if (!route.path.includes(":") && route.meta?.preview) {
            match.push(route);
          }
        }
      }
      traverseRoutes(router.options.routes);
      return match.sort((a, b) => {
        if (a.meta?.preview?.order === void 0)
          return 0;
        if (b.meta?.preview?.order === void 0)
          return 0;
        if (a.meta.preview?.order < b.meta.preview?.order)
          return -1;
        if (a.meta.preview?.order > b.meta.preview?.order)
          return 1;
        return 0;
      });
    });
    const categories = computed(() => {
      const categories2 = /* @__PURE__ */ new Set();
      function extractPreview(preview) {
        if (!preview) {
          return;
        }
        if (Array.isArray(preview)) {
          for (const item of preview) {
            extractPreview(item);
          }
          return;
        }
        if (!preview.categories) {
          return;
        }
        if (!Array.isArray(preview.categories)) {
          return;
        }
        for (const category of preview.categories) {
          categories2.add(category);
        }
      }
      for (const route of demoPages.value) {
        extractPreview(route.meta?.preview);
      }
      return Array.from(categories2).sort((a, b) => {
        return a.localeCompare(b);
      });
    });
    const filteredDemos = computed(() => {
      if (selectedCategory.value.length === 0) {
        return demoPages.value;
      }
      function filterPreview(preview) {
        if (!preview) {
          return false;
        }
        if (Array.isArray(preview)) {
          for (const item of preview) {
            if (filterPreview(item)) {
              return true;
            }
          }
          return false;
        }
        if (!preview.categories) {
          return false;
        }
        if (!Array.isArray(preview.categories)) {
          return false;
        }
        return preview.categories.some(
          (category) => selectedCategory.value.includes(category)
        );
      }
      return demoPages.value.filter((page) => {
        return filterPreview(page.meta?.preview);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseText = _sfc_main$t;
      const _component_BaseHeading = _sfc_main$q;
      const _component_BaseParagraph = _sfc_main$p;
      const _component_BaseRadio = _sfc_main$5;
      const _component_LandingDemoLink = _sfc_main$3;
      const _component_BaseButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 bg-white py-24" }, _attrs))}><div class="mx-auto w-full max-w-7xl px-4"><div class="mb-16 max-w-2xl">`);
      _push(ssrRenderComponent(_component_BaseText, { class: "text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Prebuilt pages`);
          } else {
            return [
              createTextVNode("Prebuilt pages")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "4xl",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 mx-auto mb-4 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(demoPages).length)}+ Amazing demos `);
          } else {
            return [
              createTextVNode(toDisplayString(unref(demoPages).length) + "+ Amazing demos ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "lg",
        class: "text-muted-500 dark:text-muted-100 mx-auto mb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tairo ships with ${ssrInterpolate(unref(demoPages).length)}+ prebuilt pages, including dashboard and app examples, as well as collections like lists, grids, profile and personal pages and many other authentication and utility pages. `);
          } else {
            return [
              createTextVNode(" Tairo ships with " + toDisplayString(unref(demoPages).length) + "+ prebuilt pages, including dashboard and app examples, as well as collections like lists, grids, profile and personal pages and many other authentication and utility pages. ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-2 ltablet:block relative col-span-12 hidden lg:col-span-2 lg:block"><ul class="space-y-3 lg:sticky lg:top-28"><li class="capitalize">`);
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(selectedCategory),
        "onUpdate:modelValue": ($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null,
        value: "",
        color: "primary",
        label: "All"
      }, null, _parent));
      _push(`</li><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        _push(`<li class="capitalize">`);
        _push(ssrRenderComponent(_component_BaseRadio, {
          modelValue: unref(selectedCategory),
          "onUpdate:modelValue": ($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null,
          value: category,
          color: "primary",
          label: category
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="ltablet:col-span-10 col-span-12 lg:col-span-10"><div class="grid gap-8 sm:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(filteredDemos).slice(0, props.limit), (page) => {
        _push(`<!--[-->`);
        if (!Array.isArray(page.meta?.preview)) {
          _push(ssrRenderComponent(_component_LandingDemoLink, {
            name: page.name,
            preview: page.meta?.preview
          }, null, _parent));
        } else {
          _push(`<!--[-->`);
          ssrRenderList(page.meta?.preview, (preview) => {
            _push(ssrRenderComponent(_component_LandingDemoLink, {
              key: preview.title,
              name: page.name,
              preview
            }, null, _parent));
          });
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
      if (props.cta) {
        _push(`<div class="mt-24 flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          shape: "curved",
          color: "primary",
          flavor: "outline",
          to: "/demos"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`View All ${ssrInterpolate(unref(demoPages).length)} Demos`);
            } else {
              return [
                createTextVNode("View All " + toDisplayString(unref(demoPages).length) + " Demos", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/landing/components/LandingDemos.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseButton = _sfc_main$a;
  const _component_NuxtImg = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 bg-white py-24" }, _attrs))}><div class="mx-auto w-full max-w-7xl px-4"><div class="mx-auto w-full max-w-6xl"><div class="bg-primary-900 dark:bg-primary-900/40 ltablet:grid ltablet:grid-cols-2 ltablet:gap-4 overflow-hidden rounded-3xl shadow-xl lg:grid lg:grid-cols-2 lg:gap-4"><div class="ltablet:py-28 ltablet:pr-0 flex items-center px-6 pb-12 pt-10 sm:px-16 sm:pt-16 lg:py-28 lg:pr-0 xl:px-20"><div class="ltablet:self-center font-sans lg:self-center"><h2 class="text-3xl font-medium text-white sm:text-4xl"><span class="block">Ready to dive in?</span><span class="block">Explore all available components.</span></h2><p class="mt-4 text-lg leading-6 text-white"> We built a great documentation to help you get started. Each component has a demo page and code snippets showing how to use them. </p><div class="mt-8 flex items-center gap-2">`);
  _push(ssrRenderComponent(_component_BaseButton, {
    to: "/documentation",
    shape: "curved",
    class: "!h-11"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Open Documentation`);
      } else {
        return [
          createTextVNode("Open Documentation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 -mt-6">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "ltablet:translate-y-20 block translate-x-6 translate-y-6 rounded-md object-cover object-left-top dark:hidden sm:translate-x-16 lg:translate-y-20",
    src: "/img/apps/tairo-screen-full.png",
    alt: "Tairo demo screenshot lightmode",
    format: "webp",
    width: "568",
    height: "532",
    loading: "lazy",
    decoding: "async"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "ltablet:translate-y-20 hidden translate-x-6 translate-y-6 rounded-md object-cover object-left-top dark:block sm:translate-x-16 lg:translate-y-20",
    src: "/img/apps/tairo-screen-full-dark.png",
    alt: "Tairo demo screenshot darkmode",
    format: "webp",
    width: "568",
    height: "532",
    loading: "lazy",
    decoding: "async"
  }, null, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/landing/components/LandingCta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "demos",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingDemos = _sfc_main$2;
      const _component_LandingCta = __nuxt_component_1;
      const _component_LandingFooter = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 bg-white pt-16" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_LandingDemos, { cta: false }, null, _parent));
      _push(ssrRenderComponent(_component_LandingCta, null, null, _parent));
      _push(ssrRenderComponent(_component_LandingFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/landing/pages/demos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
