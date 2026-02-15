import { unref, resolveDirective, mergeProps, withCtx, createTextVNode, toDisplayString, withDirectives, createBlock, openBlock, createVNode, Fragment, renderList, resolveComponent, ref, shallowRef, toRef, normalizeStyle, normalizeClass, computed, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { a as useLang, g as genericComponent, V as VIcon, _ as __nuxt_component_0$1, p as propsFactory, d as useRtl, e as useDimension, f as useRender, j as VBtnToggle, c as VBtn, b as useI18n, m as makeTagProps, h as makeDimensionProps, i as makeComponentProps } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-XQJOkYip.mjs';
import { u as useDrawer, _ as _imports_1$1, a as _imports_2, b as _imports_0$2, n as navLinks, c as _sfc_main$b } from './useDrawer-C1aMvQWA.mjs';
import { V as VDivider } from './VDivider-CgNue33A.mjs';
import { V as VMenu, a as VList, b as VListItem } from './VMenu-CPLb6S0I.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { B as BtnShowDeteils, _ as _sfc_main$a } from './BtnFavorites-B9fHbHbR.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue-router';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'pinia';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './index-Cu8i49H1.mjs';

const _imports_0$1 = publicAssetsURL("/images/hero/separator.svg");
const _imports_1 = publicAssetsURL("/images/hero/hero.png");
const _sfc_main$9 = {
  __name: "AllSectionNavInHero",
  __ssrInlineRender: true,
  setup(__props) {
    const { lang } = useLang();
    const { locales, setLocale } = useI18n();
    const drawer = useDrawer();
    function toggleDrawer() {
      drawer.value = !drawer.value;
    }
    const contact = [
      {
        href: "tel:+01069208821",
        icon: "mdi-phone-outline",
        title: "01069208821"
      },
      {
        href: "mailto:pharaonic@antiquities.com",
        icon: "mdi-email-outline",
        title: "pharaonic@antiquities.com"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _directive_gsap = resolveDirective("gsap");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative z-50 text-textsecondary" }, _attrs))}><div${ssrRenderAttrs(mergeProps({ class: "container mx-auto flex items-center justify-center md:justify-between! py-2 relative z-50" }, ssrGetDirectiveProps(_ctx, _directive_gsap, {
        duration: 1.5,
        stagger: 0.8
      }, void 0, {
        entrance: true,
        "slide-left": true,
        stagger: true
      })))}><div class="flex items-center gap-2"><button class="${ssrRenderClass([unref(lang) === "ar" ? "opacity-50 pointer-events-none" : "", "flex gap-2 items-center hover:text-secondary! duration-500"])}"> العربية <img${ssrRenderAttr("src", _imports_1$1)} alt="cuntry" class="object-contain w-5"></button>`);
      _push(ssrRenderComponent(VDivider, {
        vertical: "",
        class: "h-6 mx-2"
      }, null, _parent));
      _push(`<button class="${ssrRenderClass([unref(lang) === "en" ? "opacity-50 pointer-events-none" : "", "flex gap-2 items-center hover:text-secondary! duration-500"])}"> English <img${ssrRenderAttr("src", _imports_2)} alt="cuntry" class="object-contain w-5"></button></div><div class="hidden md:block"><div class="flex items-center gap-10 text-[14px]"><!--[-->`);
      ssrRenderList(contact, (c) => {
        _push(`<a${ssrRenderAttr("href", c.href)} target="_blank" class="${ssrRenderClass([unref(lang) == "en" ? "flex-row-reverse" : "", "flex items-center gap-1 hover:text-secondary transition-colors"])}"><p>${ssrInterpolate(c.title)}</p>`);
        _push(ssrRenderComponent(VIcon, {
          size: "17",
          icon: c.icon
        }, null, _parent));
        _push(`</a>`);
      });
      _push(`<!--]--></div></div></div>`);
      _push(ssrRenderComponent(VDivider, null, null, _parent));
      _push(`<div class="flex items-center justify-between container! mx-auto">`);
      _push(ssrRenderComponent(_component_nuxt_link, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$2)} class="w-[120px] sm:w-[125px] md:w-[170px] object-cover scale-125 transition-all duration-300 hover:scale-160 md:-mr-6!" alt="Logo"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$2,
                class: "w-[120px] sm:w-[125px] md:w-[170px] object-cover scale-125 transition-all duration-300 hover:scale-160 md:-mr-6!",
                alt: "Logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden xl:block"><ul class="flex items-center gap-8 text-[17px]"><!--[-->`);
      ssrRenderList(unref(navLinks), (link) => {
        _push(`<li>`);
        if (!link.items) {
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: link.to,
            class: "flex items-center gap-2 px-2 py-1 rounded hover:bg-primary/20! hover:text-secondary! transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VIcon, { size: "18" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(link.icon)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(link.icon), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(_ctx.$t(link.title))}`);
              } else {
                return [
                  createVNode(VIcon, { size: "18" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(link.icon), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createTextVNode(" " + toDisplayString(_ctx.$t(link.title)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(ssrRenderComponent(VMenu, { "open-on-hover": "" }, {
            activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div${ssrRenderAttrs(mergeProps({ ref_for: true }, props, { class: "flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-primary/20! hover:text-secondary! transition-colors" }))}${_scopeId}>`);
                _push2(ssrRenderComponent(VIcon, { size: "18" }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(link.icon)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(link.icon), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(_ctx.$t(link.title))} `);
                _push2(ssrRenderComponent(VIcon, { size: "16" }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`mdi-chevron-down`);
                    } else {
                      return [
                        createTextVNode("mdi-chevron-down")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", mergeProps({ ref_for: true }, props, { class: "flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-primary/20! hover:text-secondary! transition-colors" }), [
                    createVNode(VIcon, { size: "18" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(link.icon), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createTextVNode(" " + toDisplayString(_ctx.$t(link.title)) + " ", 1),
                    createVNode(VIcon, { size: "16" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-chevron-down")
                      ]),
                      _: 1
                    })
                  ], 16)
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VList, { class: "w-[280px]! bg-[#F2F2F2]! dark:bg-primaryTwo/70! text-primaryTwo! dark:text-textsecondary!" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<!--[-->`);
                      ssrRenderList(link.items, (child) => {
                        _push3(ssrRenderComponent(VListItem, {
                          key: child.title,
                          to: child.to,
                          class: "flex items-center justify-between gap-2 hover:bg-primary/20! transition-colors rounded px-3 py-2"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="${ssrRenderClass([unref(lang) == "ar" ? "justify-end!" : "justify-start!", "flex items-center gap-2 mb-2"])}"${_scopeId3}>`);
                              _push4(ssrRenderComponent(VIcon, {
                                size: "14",
                                class: unref(lang) === "ar" ? "order-2!" : "order-1!"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(child.icon)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(child.icon), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`<span class="${ssrRenderClass(unref(lang) === "ar" ? "order-1!" : "order-2!")}"${_scopeId3}>${ssrInterpolate(_ctx.$t(child.title))}</span></div>`);
                              _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode("div", {
                                  class: ["flex items-center gap-2 mb-2", unref(lang) == "ar" ? "justify-end!" : "justify-start!"]
                                }, [
                                  createVNode(VIcon, {
                                    size: "14",
                                    class: unref(lang) === "ar" ? "order-2!" : "order-1!"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(child.icon), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"]),
                                  createVNode("span", {
                                    class: unref(lang) === "ar" ? "order-1!" : "order-2!"
                                  }, toDisplayString(_ctx.$t(child.title)), 3)
                                ], 2),
                                createVNode(VDivider)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]-->`);
                    } else {
                      return [
                        (openBlock(true), createBlock(Fragment, null, renderList(link.items, (child) => {
                          return openBlock(), createBlock(VListItem, {
                            key: child.title,
                            to: child.to,
                            class: "flex items-center justify-between gap-2 hover:bg-primary/20! transition-colors rounded px-3 py-2"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: ["flex items-center gap-2 mb-2", unref(lang) == "ar" ? "justify-end!" : "justify-start!"]
                              }, [
                                createVNode(VIcon, {
                                  size: "14",
                                  class: unref(lang) === "ar" ? "order-2!" : "order-1!"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(child.icon), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class"]),
                                createVNode("span", {
                                  class: unref(lang) === "ar" ? "order-1!" : "order-2!"
                                }, toDisplayString(_ctx.$t(child.title)), 3)
                              ], 2),
                              createVNode(VDivider)
                            ]),
                            _: 2
                          }, 1032, ["to"]);
                        }), 128))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VList, { class: "w-[280px]! bg-[#F2F2F2]! dark:bg-primaryTwo/70! text-primaryTwo! dark:text-textsecondary!" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(link.items, (child) => {
                        return openBlock(), createBlock(VListItem, {
                          key: child.title,
                          to: child.to,
                          class: "flex items-center justify-between gap-2 hover:bg-primary/20! transition-colors rounded px-3 py-2"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: ["flex items-center gap-2 mb-2", unref(lang) == "ar" ? "justify-end!" : "justify-start!"]
                            }, [
                              createVNode(VIcon, {
                                size: "14",
                                class: unref(lang) === "ar" ? "order-2!" : "order-1!"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(child.icon), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"]),
                              createVNode("span", {
                                class: unref(lang) === "ar" ? "order-1!" : "order-2!"
                              }, toDisplayString(_ctx.$t(child.title)), 3)
                            ], 2),
                            createVNode(VDivider)
                          ]),
                          _: 2
                        }, 1032, ["to"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav>`);
      _push(ssrRenderComponent(unref(_sfc_main$b), null, null, _parent));
      _push(ssrRenderComponent(VBtn, {
        class: "bg-secondary! me-5! xl:hidden! hover:text-white! duration-400",
        onClick: toggleDrawer
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-menu`);
                } else {
                  return [
                    createTextVNode("mdi-menu")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, null, {
                default: withCtx(() => [
                  createTextVNode("mdi-menu")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllSection/NavInHero.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
let items = ref([
  {
    id: "one",
    label: "hero.one.label",
    titleOne: "hero.one.title",
    titleTwo: "hero.one.titleTwo",
    desc: "hero.one.desc",
    img: "/images/hero/one.png"
  },
  {
    id: "two",
    label: "hero.two.label",
    titleOne: "hero.two.title",
    titleTwo: "hero.two.titleTwo",
    desc: "hero.two.desc",
    img: "/images/hero/two.png"
  },
  {
    id: "three",
    label: "hero.three.label",
    titleOne: "hero.three.title",
    titleTwo: "hero.three.titleTwo",
    desc: "hero.three.desc",
    img: "/images/hero/three.png"
  }
]);
const makeVContainerProps = propsFactory({
  fluid: {
    type: Boolean,
    default: false
  },
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps()
}, "VContainer");
const VContainer = genericComponent()({
  name: "VContainer",
  props: makeVContainerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      rtlClasses
    } = useRtl();
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-container", {
        "v-container--fluid": props.fluid
      }, rtlClasses.value, props.class]),
      "style": normalizeStyle([dimensionStyles.value, props.style])
    }, slots));
    return {};
  }
});
const _sfc_main$8 = {
  __name: "AllSectionHeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    let { lang } = useLang();
    const one = ref(false);
    const two = ref(true);
    const three = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-center text-textsecondary relative overflow-hidden min-h-screen" }, _attrs))} data-v-52eb8487>`);
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(`<ul class="hero-slider" data-v-52eb8487><!--[-->`);
      ssrRenderList(unref(items), (item) => {
        _push(`<li class="slider-item absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full z-10 grid place-content-center" data-v-52eb8487>`);
        if (item.id === "one" && one.value || item.id === "two" && two.value || item.id === "three" && three.value) {
          _push(`<div data-v-52eb8487><div class="slider-bg absolute top-0 left-0 w-full h-full -z-1 pointer-events-none user-select-none" data-v-52eb8487><img${ssrRenderAttr("src", item.img)} alt="hero" class="w-full h-full object-cover" data-v-52eb8487></div>`);
          _push(ssrRenderComponent(VContainer, { fluid: "" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="relative z-10 tracking-wider container! mx-auto!" data-v-52eb8487${_scopeId}><div class="text-center mb-8 item item-1" data-v-52eb8487${_scopeId}><p class="text-sm font-semibold uppercase text-secondary! tracking-[0.3em]" data-v-52eb8487${_scopeId}>${ssrInterpolate(_ctx.$t(item.label))}</p><img${ssrRenderAttr("src", _imports_0$1)} alt="icon" class="${ssrRenderClass(`mx-auto mt-2 ${_ctx.$i18n.locale === "ar" ? "w-[70px]" : "w-[100px]"}`)}" data-v-52eb8487${_scopeId}></div><div class="item item-2" data-v-52eb8487${_scopeId}><h1 class="text-3xl sm:text-5xl md:text-6xl font-semibold mb-4" data-v-52eb8487${_scopeId}>${ssrInterpolate(_ctx.$t(item.titleOne))}</h1><h2 class="text-2xl sm:text-4xl md:text-5xl font-bold mb-8!" data-v-52eb8487${_scopeId}>${ssrInterpolate(_ctx.$t(item.titleTwo))}</h2></div><p class="text-sm sm:text-base text-gray-300 item item-3" data-v-52eb8487${_scopeId}>${ssrInterpolate(_ctx.$t(item.desc))}</p></div><button class="btn mt-6 item item-4 animate-bounce absolute z-1000 top-[70%] left-1/2 -translate-y-1/2 -translate-x-1/2 text-secondary! hover:text-[#F2F2F2]! transition-colors! font-semibold! p-3! rounded-2xl overflow-hidden w-[150px] border-2! border-secondary" data-v-52eb8487${_scopeId}>${ssrInterpolate(_ctx.$t("links_nav.artifacts_3d"))}</button>`);
              } else {
                return [
                  createVNode("div", { class: "relative z-10 tracking-wider container! mx-auto!" }, [
                    createVNode("div", { class: "text-center mb-8 item item-1" }, [
                      createVNode("p", { class: "text-sm font-semibold uppercase text-secondary! tracking-[0.3em]" }, toDisplayString(_ctx.$t(item.label)), 1),
                      createVNode("img", {
                        src: _imports_0$1,
                        alt: "icon",
                        class: `mx-auto mt-2 ${_ctx.$i18n.locale === "ar" ? "w-[70px]" : "w-[100px]"}`
                      }, null, 2)
                    ]),
                    createVNode("div", { class: "item item-2" }, [
                      createVNode("h1", { class: "text-3xl sm:text-5xl md:text-6xl font-semibold mb-4" }, toDisplayString(_ctx.$t(item.titleOne)), 1),
                      createVNode("h2", { class: "text-2xl sm:text-4xl md:text-5xl font-bold mb-8!" }, toDisplayString(_ctx.$t(item.titleTwo)), 1)
                    ]),
                    createVNode("p", { class: "text-sm sm:text-base text-gray-300 item item-3" }, toDisplayString(_ctx.$t(item.desc)), 1)
                  ]),
                  createVNode("button", { class: "btn mt-6 item item-4 animate-bounce absolute z-1000 top-[70%] left-1/2 -translate-y-1/2 -translate-x-1/2 text-secondary! hover:text-[#F2F2F2]! transition-colors! font-semibold! p-3! rounded-2xl overflow-hidden w-[150px] border-2! border-secondary" }, toDisplayString(_ctx.$t("links_nav.artifacts_3d")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul><div class="${ssrRenderClass([unref(lang) === "ar" ? "left-0" : "right-0", "footer absolute bottom-10 z-50 w-[60px] bg-secondary! me-6! sm:me-8! md:me-15! lg:me-25!"])}" data-v-52eb8487><img${ssrRenderAttr("src", _imports_1)} alt="Logo" class="w-full!" data-v-52eb8487></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllSection/HeroSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-52eb8487"]]);
const _imports_0 = publicAssetsURL("/images/sections/masc.png");
const _sfc_main$7 = {
  __name: "AllSectionPlatformGoal",
  __ssrInlineRender: true,
  setup(__props) {
    let { lang } = useLang();
    let featuer = [
      { icon: "mdi-bank", title: "section_platform_goal.feature1" },
      { icon: "mdi-temple-buddhist", title: "section_platform_goal.feature2" },
      { icon: "mdi-skull", title: "section_platform_goal.feature3" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_gsap = resolveDirective("gsap");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "my-40! text-primaryTwo dark:text-textsecondary" }, _attrs))}><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_gsap, {
        duration: 1.5
        // مدة أطول من default
      }, void 0, {
        entrance: true,
        "slide-left": true
      }))}><h3 class="text-center font-semibold text-2xl md:text-4xl text-primaryTwo dark:text-secondary">${ssrInterpolate(_ctx.$t("section_platform_goal.title"))}</h3><p class="mx-auto w-[42px] h-0.5 bg-textmain dark:bg-textsecondary mt-2"></p></div>`);
      _push(ssrRenderComponent(VContainer, { class: "border rounded-2xl mt-14 shadow-sm backdrop-blur-sm dark:shadow-gray-300/20" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({
              class: [
                unref(lang) === "ar" ? "sm:flex! sm:flex-row-reverse! flex-wrap!" : "sm:flex! flex-wrap!",
                "justify-around items-center"
              ]
            }, ssrGetDirectiveProps(_ctx, _directive_gsap, {
              duration: 1.5,
              // مدة أطول من default
              stagger: 0.6
              // كل عنصر يتأخر عن اللي قبله 0.3s
            }, void 0, {
              entrance: true,
              "slide-right": true,
              stagger: true
            })))}${_scopeId}><p class="leading-[1.9] sm:max-w-[50%] text-[15px] md:text-[18px] text-center text-textmain dark:text-white opacity-80"${_scopeId}>${ssrInterpolate(_ctx.$t("section_platform_goal.paragraph"))}</p><div${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="Pharaonic Statue" class="w-[162px] sm:w-[220px] my-10 sm:mt-0 mx-auto" loading="lazy"${_scopeId}></div></div><div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-3 gap-2 mt-8 text-center text-textmain dark:text-secondary" }, ssrGetDirectiveProps(_ctx, _directive_gsap, {
              duration: 1.5,
              stagger: 0.6
            }, void 0, {
              entrance: true,
              "slide-left": true,
              stagger: true
            })))}${_scopeId}><!--[-->`);
            ssrRenderList(unref(featuer), (item, i) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, { size: "32" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.icon)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.icon), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<p class="mt-2 text-sm opacity-75"${_scopeId}>${ssrInterpolate(_ctx.$t(item.title))}</p></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("div", {
                class: [
                  unref(lang) === "ar" ? "sm:flex! sm:flex-row-reverse! flex-wrap!" : "sm:flex! flex-wrap!",
                  "justify-around items-center"
                ]
              }, [
                createVNode("p", { class: "leading-[1.9] sm:max-w-[50%] text-[15px] md:text-[18px] text-center text-textmain dark:text-white opacity-80" }, toDisplayString(_ctx.$t("section_platform_goal.paragraph")), 1),
                createVNode("div", null, [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "Pharaonic Statue",
                    class: "w-[162px] sm:w-[220px] my-10 sm:mt-0 mx-auto",
                    loading: "lazy"
                  })
                ])
              ], 2)), [
                [
                  _directive_gsap,
                  {
                    duration: 1.5,
                    // مدة أطول من default
                    stagger: 0.6
                    // كل عنصر يتأخر عن اللي قبله 0.3s
                  },
                  void 0,
                  {
                    entrance: true,
                    "slide-right": true,
                    stagger: true
                  }
                ]
              ]),
              withDirectives((openBlock(), createBlock("div", { class: "grid grid-cols-3 gap-2 mt-8 text-center text-textmain dark:text-secondary" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(featuer), (item, i) => {
                  return openBlock(), createBlock("div", { key: i }, [
                    createVNode(VIcon, { size: "32" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.icon), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("p", { class: "mt-2 text-sm opacity-75" }, toDisplayString(_ctx.$t(item.title)), 1)
                  ]);
                }), 128))
              ])), [
                [
                  _directive_gsap,
                  {
                    duration: 1.5,
                    stagger: 0.6
                  },
                  void 0,
                  {
                    entrance: true,
                    "slide-left": true,
                    stagger: true
                  }
                ]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllSection/PlatformGoal.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
let museums = [
  {
    id: "museum-1",
    name: "section_museums.museum1.name",
    location: "section_museums.museum1.location",
    image: "/images/museums/museum1.jpg",
    description: "section_museums.museum1.description",
    desc2: "section_museums.museum1.desc2",
    established: "section_museums.museum1.established",
    highlights: "section_museums.museum1.highlights",
    collections: "section_museums.museum1.collections",
    importance: "section_museums.museum1.importance"
  },
  {
    id: "museum-2",
    name: "section_museums.museum2.name",
    location: "section_museums.museum2.location",
    image: "/images/museums/museum2.jpg",
    description: "section_museums.museum2.description",
    desc2: "section_museums.museum2.desc2",
    established: "section_museums.museum2.established",
    highlights: "section_museums.museum2.highlights",
    collections: "section_museums.museum2.collections",
    importance: "section_museums.museum2.importance"
  },
  {
    id: "museum-3",
    name: "section_museums.museum3.name",
    location: "section_museums.museum3.location",
    image: "/images/museums/museum3.jpg",
    description: "section_museums.museum3.description",
    desc2: "section_museums.museum3.desc2",
    established: "section_museums.museum3.established",
    highlights: "section_museums.museum3.highlights",
    collections: "section_museums.museum3.collections",
    importance: "section_museums.museum3.importance"
  },
  {
    id: "museum-4",
    name: "section_museums.museum4.name",
    location: "section_museums.museum4.location",
    image: "/images/museums/museum4.jpg",
    description: "section_museums.museum4.description",
    desc2: "section_museums.museum4.desc2",
    established: "section_museums.museum4.established",
    highlights: "section_museums.museum4.highlights",
    collections: "section_museums.museum4.collections",
    importance: "section_museums.museum4.importance"
  },
  {
    id: "museum-5",
    name: "section_museums.museum5.name",
    location: "section_museums.museum5.location",
    image: "/images/museums/museum5.webp",
    description: "section_museums.museum5.description",
    desc2: "section_museums.museum5.desc2",
    established: "section_museums.museum5.established",
    highlights: "section_museums.museum5.highlights",
    collections: "section_museums.museum5.collections",
    importance: "section_museums.museum5.importance"
  },
  {
    id: "museum-6",
    name: "section_museums.museum6.name",
    location: "section_museums.museum6.location",
    image: "/images/museums/museum6.jpg",
    description: "section_museums.museum6.description",
    desc2: "section_museums.museum6.desc2",
    established: "section_museums.museum6.established",
    highlights: "section_museums.museum6.highlights",
    collections: "section_museums.museum6.collections",
    importance: "section_museums.museum6.importance"
  }
];
const _sfc_main$6 = {
  __name: "AllSectionMuseumSection",
  __ssrInlineRender: true,
  setup(__props) {
    let truncateWords = (text, limit = 14) => {
      let words = text.split(/\s+/);
      return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _directive_gsap = resolveDirective("gsap");
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="container mx-auto px-4"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_gsap, {
        duration: 1.5,
        // مدة أطول من default
        stagger: 0.6
        // كل عنصر يتأخر عن اللي قبله 0.3s
      }, void 0, {
        entrance: true,
        "slide-right": true,
        stagger: true
      }))}><h2 class="text-4xl font-bold text-center text-primaryTwo dark:text-secondary mb-3">${ssrInterpolate(_ctx.$t("section_museums.museumsTitle"))}</h2><p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">${ssrInterpolate(_ctx.$t("section_museums.museumsSubtitle"))}</p></div><div${ssrRenderAttrs(mergeProps({ class: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8" }, ssrGetDirectiveProps(_ctx, _directive_gsap, {
        duration: 1.5,
        stagger: 0.6
      }, void 0, {
        entrance: true,
        "slide-left": true,
        stagger: true
      })))}><!--[-->`);
      ssrRenderList(unref(museums), (museum) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: museum.name,
          class: "rounded-2xl shadow-sm dark:shadow-gray-300/20 overflow-hidden hover:-translate-y-1 transition-all cursor-pointer"
        }, ssrGetDirectiveProps(_ctx, _directive_gsap, {
          duration: 1.5,
          stagger: 0.8
        }, void 0, {
          entrance: true,
          "slide-left": true,
          stagger: true
        })))}><div class="overflow-hidden"><img${ssrRenderAttr("src", museum.image)}${ssrRenderAttr("alt", _ctx.$t(museum.name))} class="w-full h-60 object-cover hover:scale-105 transition-all duration-300" loading="lazy"></div><div class="p-5! pb-2!"><h3 class="text-lg font-semibold mb-2 text-primaryTwo dark:text-secondary">${ssrInterpolate(_ctx.$t(museum.name))}</h3><div class="flex items-center text-gray-500 text-sm mb-3">`);
        _push(ssrRenderComponent(VIcon, { class: "mr-1" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`mdi-map-marker`);
            } else {
              return [
                createTextVNode("mdi-map-marker")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(` ${ssrInterpolate(_ctx.$t(museum.location))}</div><p class="text-gray-600 dark:text-gray-400 text-[15px] mb-4 line-clamp-3">${ssrInterpolate(unref(truncateWords)(_ctx.$t(museum.description)))}</p></div><div class="flex gap-3 items-center px-5! pb-4!">`);
        _push(ssrRenderComponent(BtnShowDeteils, { data: museum }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$a, { item: museum }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="mt-14">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/museums" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${ssrRenderAttrs(mergeProps({ class: "relative mx-auto bg-textmain! dark:bg-[#ffffff1a]! text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { duration: 2 }, void 0, {
              entrance: true,
              "slide-right": true
            })))}${_scopeId}><span class="mr-10"${_scopeId}>See more</span><div class="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]"${_scopeId}><path fill="none" d="M0 0h24v24H0z"${_scopeId}></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"${_scopeId}></path></svg></div></button>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("button", { class: "relative mx-auto bg-textmain! dark:bg-[#ffffff1a]! text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group" }, [
                createVNode("span", { class: "mr-10" }, "See more"),
                createVNode("div", { class: "absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95" }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "24",
                    height: "24",
                    class: "w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]"
                  }, [
                    createVNode("path", {
                      fill: "none",
                      d: "M0 0h24v24H0z"
                    }),
                    createVNode("path", {
                      fill: "currentColor",
                      d: "M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    })
                  ]))
                ])
              ])), [
                [
                  _directive_gsap,
                  { duration: 2 },
                  void 0,
                  {
                    entrance: true,
                    "slide-right": true
                  }
                ]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllSection/MuseumSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "AllSectionUniqueArtifacts",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref({
      rotate: 0,
      stretch: 0,
      depth: 180,
      modifier: 2.5,
      slideShadows: false
    });
    console.log("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      const _directive_gsap = resolveDirective("gsap");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "my-40! text-primaryTwo dark:text-textsecondary" }, _attrs))}><div class="container mx-auto px-4"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_gsap, {
        duration: 1.5,
        stagger: 0.6
      }, void 0, {
        entrance: true,
        "slide-left": true,
        stagger: true
      }))}><h2 class="text-4xl font-bold text-center text-primaryTwo dark:text-secondary mb-3">${ssrInterpolate(_ctx.$t("section_unique_artifacts.title"))}</h2><p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">${ssrInterpolate(_ctx.$t("section_unique_artifacts.subtitle"))}</p></div><div${ssrRenderAttrs(mergeProps({ class: "button-container flex! m-[21px]!" }, ssrGetDirectiveProps(_ctx, _directive_gsap, {
        duration: 1.5,
        stagger: 0.6
      }, void 0, {
        entrance: true,
        "slide-left": true,
        stagger: true
      })))}><button class="button-3d"><div class="button-top"><span class="material-icons">❮</span></div><div class="button-bottom"></div><div class="button-base"></div></button><button class="button-3d"><div class="button-top"><span class="material-icons">❯</span></div><div class="button-bottom"></div><div class="button-base"></div></button></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="bullet-pagination mt-6 flex justify-center"></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllSection/UniqueArtifacts.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const masterpieces = [
  {
    id: "masterpieces-1",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic1.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic1.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic1.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic1.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic1.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic1.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic1.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic1.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic1.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic1.museum",
    image: "/images/pharaonic_artifacts/pharaonic1.jpg",
    type: "art_sculpture"
  },
  {
    id: "masterpieces-2",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic2.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic2.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic2.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic2.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic2.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic2.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic2.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic2.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic2.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic2.museum",
    image: "/images/pharaonic_artifacts/pharaonic2.jpg",
    type: "art_sculpture"
  },
  {
    id: "masterpieces-3",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic3.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic3.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic3.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic3.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic3.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic3.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic3.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic3.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic3.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic3.museum",
    image: "/images/pharaonic_artifacts/pharaonic3.jpg",
    type: "art_sculpture"
  },
  {
    id: "masterpieces-4",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic4.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic4.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic4.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic4.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic4.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic4.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic4.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic4.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic4.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic4.museum",
    image: "/images/pharaonic_artifacts/pharaonic4.jpeg",
    type: "art_sculpture"
  },
  {
    id: "masterpieces-5",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic5.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic5.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic5.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic5.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic5.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic5.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic5.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic5.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic5.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic5.museum",
    image: "/images/pharaonic_artifacts/pharaonic5.jpg",
    type: "art_sculpture"
  },
  {
    id: "masterpieces-6",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic6.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic6.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic6.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic6.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic6.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic6.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic6.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic6.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic6.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic6.museum",
    image: "/images/pharaonic_artifacts/pharaonic6.jpg",
    type: "art_sculpture"
  },
  {
    id: "masterpieces-7",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic7.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic7.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic7.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic7.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic7.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic7.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic7.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic7.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic7.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic7.museum",
    image: "/images/pharaonic_artifacts/pharaonic7.jpg",
    type: "art_sculpture"
  },
  {
    id: "masterpieces-8",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic8.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic8.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic8.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic8.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic8.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic8.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic8.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic8.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic8.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic8.museum",
    image: "/images/pharaonic_artifacts/pharaonic8.jpg",
    type: "art_sculpture"
  },
  {
    id: "masterpieces-9",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic9.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic9.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic9.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic9.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic9.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic9.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic9.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic9.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic9.importance",
    image: "/images/pharaonic_artifacts/pharaonic9.png",
    type: "architecture"
  },
  ,
  {
    id: "masterpieces-10",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic10.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic10.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic10.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic10.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic10.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic10.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic10.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic10.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic10.importance",
    image: "/images/pharaonic_artifacts/pharaonic10.webp",
    type: "architecture"
  },
  {
    id: "masterpieces-11",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic11.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic11.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic11.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic11.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic11.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic11.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic11.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic11.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic11.importance",
    image: "/images/pharaonic_artifacts/pharaonic11.webp",
    type: "architecture"
  },
  {
    id: "masterpieces-12",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic12.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic12.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic12.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic12.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic12.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic12.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic12.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic12.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic12.importance",
    image: "/images/pharaonic_artifacts/pharaonic12.webp",
    type: "architecture"
  },
  {
    id: "masterpieces-13",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic13.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic13.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic13.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic13.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic13.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic13.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic13.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic13.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic13.importance",
    image: "/images/pharaonic_artifacts/pharaonic13.avif",
    type: "architecture"
  },
  {
    id: "masterpieces-14",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic14.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic14.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic14.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic14.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic14.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic14.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic14.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic14.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic14.importance",
    image: "/images/pharaonic_artifacts/pharaonic14.jpg",
    type: "architecture"
  },
  {
    id: "masterpieces-15",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic15.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic15.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic15.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic15.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic15.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic15.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic15.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic15.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic15.importance",
    image: "/images/pharaonic_artifacts/pharaonic15.jpg",
    type: "architecture"
  },
  {
    id: "masterpieces-16",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic16.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic16.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic16.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic16.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic16.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic16.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic16.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic16.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic16.importance",
    image: "/images/pharaonic_artifacts/pharaonic16.webp",
    type: "architecture"
  },
  {
    id: "masterpieces-17",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic17.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic17.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic17.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic17.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic17.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic17.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic17.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic17.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic17.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic17.museum",
    image: "/images/pharaonic_artifacts/pharaonic17.jpg",
    type: "writing_knowledge"
  },
  {
    id: "masterpieces-18",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic18.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic18.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic18.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic18.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic18.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic18.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic18.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic18.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic18.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic18.museum",
    image: "/images/pharaonic_artifacts/pharaonic18.jpg",
    type: "writing_knowledge"
  },
  {
    id: "masterpieces-19",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic19.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic19.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic19.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic19.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic19.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic19.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic19.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic19.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic19.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic19.museum",
    image: "/images/pharaonic_artifacts/pharaonic19.jpg",
    type: "writing_knowledge"
  },
  {
    id: "masterpieces-20",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic20.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic20.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic20.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic20.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic20.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic20.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic20.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic20.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic20.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic20.museum",
    image: "/images/pharaonic_artifacts/pharaonic20.webp",
    type: "writing_knowledge"
  },
  {
    id: "masterpieces-21",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic21.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic21.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic21.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic21.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic21.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharapharaonic21onic12.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic21.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic21.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic21.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic21.museum",
    image: "/images/pharaonic_artifacts/pharaonic21.jpg",
    type: "writing_knowledge"
  },
  {
    id: "masterpieces-22",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic22.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic22.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic22.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic22.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic22.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic22.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic22.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic22.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic22.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic22.museum",
    image: "/images/pharaonic_artifacts/pharaonic22.jpg",
    type: "writing_knowledge"
  },
  {
    id: "masterpieces-23",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic23.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic23.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic23.location",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic23.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic23.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic23.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic23.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic23.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic23.museum",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic23.description",
    image: "/images/pharaonic_artifacts/pharaonic23.jpg",
    type: "writing_knowledge"
  },
  {
    id: "masterpieces-24",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic24.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic24.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic24.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic24.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic24.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic24.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic24.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic24.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic24.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic24.museum",
    image: "/images/pharaonic_artifacts/pharaonic24.jpg",
    type: "writing_knowledge"
  },
  {
    id: "masterpieces-25",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic25.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic25.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic25.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic25.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic25.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic25.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic25.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic25.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic25.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic25.museum",
    image: "/images/pharaonic_artifacts/pharaonic25.jpg",
    type: "rituals_religion"
  },
  {
    id: "masterpieces-26",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic26.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic26.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic26.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic26.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic26.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic26.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic26.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic26.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic26.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic26.museum",
    image: "/images/pharaonic_artifacts/pharaonic26.jpg",
    type: "rituals_religion"
  },
  {
    id: "masterpieces-27",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic27.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic27.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic27.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic27.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic27.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic27.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic27.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic27.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic27.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic27.museum",
    image: "/images/pharaonic_artifacts/pharaonic27.jpg",
    type: "rituals_religion"
  },
  {
    id: "masterpieces-28",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic28.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic28.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic28.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic28.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic28.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic28.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic28.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic28.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic28.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic28.museum",
    image: "/images/pharaonic_artifacts/pharaonic28.webp",
    type: "rituals_religion"
  },
  {
    id: "masterpieces-29",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic29.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic29.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic29.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic29.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic29.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic29.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic29.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic29.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic29.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic29.museum",
    image: "/images/pharaonic_artifacts/pharaonic29.jpg",
    type: "rituals_religion"
  },
  {
    id: "masterpieces-30",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic30.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic30.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic30.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic30.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic30.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic30.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic30.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic30.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic30.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic30.museum",
    image: "/images/pharaonic_artifacts/pharaonic30.jpg",
    type: "rituals_religion"
  },
  {
    id: "masterpieces-31",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic31.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic31.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic31.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic31.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic31.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic31.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic31.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic31.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic31.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic31.museum",
    image: "/images/pharaonic_artifacts/pharaonic31.jpg",
    type: "rituals_religion"
  },
  {
    id: "masterpieces-32",
    name: "section_pharaonic_masterpieces.artifacts.pharaonic32.name",
    period: "section_pharaonic_masterpieces.artifacts.pharaonic32.period",
    location: "section_pharaonic_masterpieces.artifacts.pharaonic32.location",
    description: "section_pharaonic_masterpieces.artifacts.pharaonic32.description",
    desc2: "section_pharaonic_masterpieces.artifacts.pharaonic32.desc2",
    material: "section_pharaonic_masterpieces.artifacts.pharaonic32.material",
    usage: "section_pharaonic_masterpieces.artifacts.pharaonic32.usage",
    themes: "section_pharaonic_masterpieces.artifacts.pharaonic32.themes",
    importance: "section_pharaonic_masterpieces.artifacts.pharaonic32.importance",
    museum: "section_pharaonic_masterpieces.artifacts.pharaonic32.museum",
    image: "/images/pharaonic_artifacts/pharaonic32.jpeg",
    type: "rituals_religion"
  }
];
const _sfc_main$4 = {
  __name: "AllSectionPharaonicMasterpieces",
  __ssrInlineRender: true,
  setup(__props) {
    let toggle = ref("art_sculpture");
    let data = computed(() => {
      return masterpieces.filter((item) => item.type === toggle.value);
    });
    let truncateWords = (text, limit = 14) => {
      let words = text.split(/\s+/);
      return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
    };
    let buttons = [
      {
        value: "art_sculpture",
        label: "section_pharaonic_masterpieces.categories.art_sculpture"
      },
      {
        value: "architecture",
        label: "section_pharaonic_masterpieces.categories.architecture"
      },
      {
        value: "writing_knowledge",
        label: "section_pharaonic_masterpieces.categories.writing_knowledge"
      },
      {
        value: "rituals_religion",
        label: "section_pharaonic_masterpieces.categories.rituals_religion"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_gsap = resolveDirective("gsap");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-primaryTwo dark:text-[#F2F2F2]" }, _attrs))} data-v-ea7f5d9e><div class="container mx-auto px-4" data-v-ea7f5d9e><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_gsap, {
        duration: 1.5,
        stagger: 0.6
      }, void 0, {
        entrance: true,
        "slide-right": true,
        stagger: true
      }))} data-v-ea7f5d9e><h2 class="text-4xl font-bold text-center text-primaryTwo dark:text-secondary mb-3" data-v-ea7f5d9e>${ssrInterpolate(_ctx.$t("section_pharaonic_masterpieces.title"))}</h2><p class="text-center text-gray-600 max-w-2xl mx-auto mb-14" data-v-ea7f5d9e>${ssrInterpolate(_ctx.$t("section_pharaonic_masterpieces.subtitle"))}</p></div><div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-center mb-16" }, ssrGetDirectiveProps(_ctx, _directive_gsap, {
        duration: 1.5,
        stagger: 0.6
      }, void 0, {
        entrance: true,
        "slide-left": true,
        stagger: true
      })))} data-v-ea7f5d9e>`);
      _push(ssrRenderComponent(VBtnToggle, {
        modelValue: unref(toggle),
        "onUpdate:modelValue": ($event) => isRef(toggle) ? toggle.value = $event : toggle = $event,
        class: "sm:rounded-lg grid! grid-cols-2! gap-0.5! md:grid-cols-4!",
        divided: "",
        mandatory: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(buttons), (button) => {
              _push2(ssrRenderComponent(VBtn, {
                key: button.value,
                value: button.value,
                class: "text-textsecondary! bg-textmain! dark:bg-gray-800/30! text-sm! font-serif!"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t(button.label))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t(button.label)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(buttons), (button) => {
                return openBlock(), createBlock(VBtn, {
                  key: button.value,
                  value: button.value,
                  class: "text-textsecondary! bg-textmain! dark:bg-gray-800/30! text-sm! font-serif!"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t(button.label)), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" data-v-ea7f5d9e><!--[-->`);
      ssrRenderList(unref(data), (artifact) => {
        _push(`<div class="rounded-2xl shadow-sm dark:shadow-gray-300/20 overflow-hidden hover:-translate-y-1 transition-all cursor-pointer" data-v-ea7f5d9e><div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden" }, ssrGetDirectiveProps(_ctx, _directive_gsap, {
          duration: 1.5
        }, void 0, {
          entrance: true,
          "slide-right": true
        })))} data-v-ea7f5d9e><img${ssrRenderAttr("src", artifact.image)}${ssrRenderAttr("alt", _ctx.$t(artifact.name))} class="w-full h-64 object-cover hover:scale-105 duration-300" loading="lazy" data-v-ea7f5d9e></div>`);
        _push(ssrRenderComponent(VDivider, null, null, _parent));
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4!" }, ssrGetDirectiveProps(_ctx, _directive_gsap, {
          duration: 1.5,
          stagger: 0.3
        }, void 0, {
          entrance: true,
          "slide-right": true,
          stagger: true
        })))} data-v-ea7f5d9e><h3 class="text-lg font-semibold my-4 text-primaryTwo dark:text-secondary" data-v-ea7f5d9e>${ssrInterpolate(_ctx.$t(artifact.name))}</h3><p class="flex items-center gap-2 text-sm text-gray-500 mt-1" data-v-ea7f5d9e>`);
        _push(ssrRenderComponent(VIcon, { size: "16" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`mdi-timeline-clock`);
            } else {
              return [
                createTextVNode("mdi-timeline-clock")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(` ${ssrInterpolate(_ctx.$t(artifact.period))}</p><p class="flex items-center gap-2 text-sm text-gray-500 mt-1" data-v-ea7f5d9e>`);
        _push(ssrRenderComponent(VIcon, { size: "16" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`mdi-map-marker`);
            } else {
              return [
                createTextVNode("mdi-map-marker")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(` ${ssrInterpolate(_ctx.$t(artifact.location))}</p><p class="text-gray-600 dark:text-gray-400 text-[13px] my-4" data-v-ea7f5d9e>${ssrInterpolate(unref(truncateWords)(_ctx.$t(artifact.description)))}</p><div class="flex gap-3 items-center" data-v-ea7f5d9e>`);
        _push(ssrRenderComponent(BtnShowDeteils, { data: artifact }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$a, { item: artifact }, null, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllSection/PharaonicMasterpieces.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const PharaonicMasterpieces = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ea7f5d9e"]]);
const _sfc_main$3 = {
  __name: "AllSectionPapyriAndSymbols",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      requerd: true
    },
    title: {
      type: String
    },
    subtitle: {
      type: String
    }
  },
  setup(__props) {
    let props = __props;
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      const _directive_gsap = resolveDirective("gsap");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "my-40! text-primaryTwo dark:text-textsecondary" }, _attrs))}><div class="container mx-auto px-4"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_gsap, {
        duration: 1.5,
        stagger: 0.6
      }, void 0, {
        entrance: true,
        "slide-left": true,
        stagger: true
      }))}><h2 class="text-4xl font-bold text-center mb-3 text-primaryTwo dark:text-secondary">${ssrInterpolate(_ctx.$t(unref(props).title))}</h2><p class="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-14">${ssrInterpolate(_ctx.$t(unref(props).subtitle))}</p></div><div${ssrRenderAttrs(mergeProps({ class: "button-container flex m-[21px] mb-4" }, ssrGetDirectiveProps(_ctx, _directive_gsap, {
        duration: 1.5,
        stagger: 0.6
      }, void 0, {
        entrance: true,
        "slide-left": true,
        stagger: true
      })))}><button class="button-3d"><div class="button-top"><span class="material-icons">❮</span></div><div class="button-bottom"></div><div class="button-base"></div></button><button class="button-3d"><div class="button-top"><span class="material-icons">❯</span></div><div class="button-bottom"></div><div class="button-base"></div></button></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="hieroglyphs-pagination mt-6 flex justify-center"></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllSection/PapyriAndSymbols.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
let royalMummies = [
  {
    id: "royal_1",
    name: "section_royal_mummies.royal_mummies.royal_1.name",
    description: "section_royal_mummies.royal_mummies.royal_1.description",
    desc2: "section_royal_mummies.royal_mummies.royal_1.desc2",
    image: "/images/royal_mummies/royal_1.jpg",
    period: "section_royal_mummies.royal_mummies.royal_1.period",
    location: "section_royal_mummies.royal_mummies.royal_1.location",
    material: "section_royal_mummies.royal_mummies.royal_1.material",
    usage: "section_royal_mummies.royal_mummies.royal_1.usage",
    discoverer: "section_royal_mummies.royal_mummies.royal_1.discoverer",
    themes: "section_royal_mummies.royal_mummies.royal_1.themes",
    importance: "section_royal_mummies.royal_mummies.royal_1.importance",
    museum: "section_royal_mummies.royal_mummies.royal_1.museum"
  },
  {
    id: "royal_2",
    name: "section_royal_mummies.royal_mummies.royal_2.name",
    description: "section_royal_mummies.royal_mummies.royal_2.description",
    desc2: "section_royal_mummies.royal_mummies.royal_2.desc2",
    image: "/images/royal_mummies/royal_2.webp",
    period: "section_royal_mummies.royal_mummies.royal_2.period",
    location: "section_royal_mummies.royal_mummies.royal_2.location",
    material: "section_royal_mummies.royal_mummies.royal_2.material",
    usage: "section_royal_mummies.royal_mummies.royal_2.usage",
    discoverer: "section_royal_mummies.royal_mummies.royal_2.discoverer",
    themes: "section_royal_mummies.royal_mummies.royal_2.themes",
    importance: "section_royal_mummies.royal_mummies.royal_2.importance",
    museum: "section_royal_mummies.royal_mummies.royal_2.museum"
  },
  {
    id: "royal_3",
    name: "section_royal_mummies.royal_mummies.royal_3.name",
    description: "section_royal_mummies.royal_mummies.royal_3.description",
    desc2: "section_royal_mummies.royal_mummies.royal_3.desc2",
    image: "/images/royal_mummies/royal_3.jpg",
    period: "section_royal_mummies.royal_mummies.royal_3.period",
    location: "section_royal_mummies.royal_mummies.royal_3.location",
    material: "section_royal_mummies.royal_mummies.royal_3.material",
    usage: "section_royal_mummies.royal_mummies.royal_3.usage",
    discoverer: "section_royal_mummies.royal_mummies.royal_3.discoverer",
    themes: "section_royal_mummies.royal_mummies.royal_3.themes",
    importance: "section_royal_mummies.royal_mummies.royal_3.importance",
    museum: "section_royal_mummies.royal_mummies.royal_3.museum"
  },
  {
    id: "royal_4",
    name: "section_royal_mummies.royal_mummies.royal_4.name",
    description: "section_royal_mummies.royal_mummies.royal_4.description",
    desc2: "section_royal_mummies.royal_mummies.royal_4.desc2",
    image: "/images/royal_mummies/royal_4.jfif",
    period: "section_royal_mummies.royal_mummies.royal_4.period",
    location: "section_royal_mummies.royal_mummies.royal_4.location",
    material: "section_royal_mummies.royal_mummies.royal_4.material",
    usage: "section_royal_mummies.royal_mummies.royal_4.usage",
    discoverer: "section_royal_mummies.royal_mummies.royal_4.discoverer",
    themes: "section_royal_mummies.royal_mummies.royal_4.themes",
    importance: "section_royal_mummies.royal_mummies.royal_4.importance",
    museum: "section_royal_mummies.royal_mummies.royal_4.museum"
  },
  {
    id: "royal_5",
    name: "section_royal_mummies.royal_mummies.royal_5.name",
    description: "section_royal_mummies.royal_mummies.royal_5.description",
    desc2: "section_royal_mummies.royal_mummies.royal_5.desc2",
    image: "/images/royal_mummies/royal_5.webp",
    period: "section_royal_mummies.royal_mummies.royal_5.period",
    location: "section_royal_mummies.royal_mummies.royal_5.location",
    material: "section_royal_mummies.royal_mummies.royal_5.material",
    usage: "section_royal_mummies.royal_mummies.royal_5.usage",
    discoverer: "section_royal_mummies.royal_mummies.royal_5.discoverer",
    themes: "section_royal_mummies.royal_mummies.royal_5.themes",
    importance: "section_royal_mummies.royal_mummies.royal_5.importance",
    museum: "section_royal_mummies.royal_mummies.royal_5.museum"
  },
  {
    id: "royal_6",
    name: "section_royal_mummies.royal_mummies.royal_6.name",
    description: "section_royal_mummies.royal_mummies.royal_6.description",
    desc2: "section_royal_mummies.royal_mummies.royal_6.desc2",
    image: "/images/royal_mummies/royal_6.jpg",
    period: "section_royal_mummies.royal_mummies.royal_6.period",
    location: "section_royal_mummies.royal_mummies.royal_6.location",
    material: "section_royal_mummies.royal_mummies.royal_6.material",
    usage: "section_royal_mummies.royal_mummies.royal_6.usage",
    discoverer: "section_royal_mummies.royal_mummies.royal_6.discoverer",
    themes: "section_royal_mummies.royal_mummies.royal_6.themes",
    importance: "section_royal_mummies.royal_mummies.royal_6.importance",
    museum: "section_royal_mummies.royal_mummies.royal_6.museum"
  },
  {
    id: "royal_7",
    name: "section_royal_mummies.royal_mummies.royal_7.name",
    description: "section_royal_mummies.royal_mummies.royal_7.description",
    desc2: "section_royal_mummies.royal_mummies.royal_7.desc2",
    image: "/images/royal_mummies/royal_7.jpg",
    period: "section_royal_mummies.royal_mummies.royal_7.period",
    location: "section_royal_mummies.royal_mummies.royal_7.location",
    material: "section_royal_mummies.royal_mummies.royal_7.material",
    usage: "section_royal_mummies.royal_mummies.royal_7.usage",
    discoverer: "section_royal_mummies.royal_mummies.royal_7.discoverer",
    themes: "section_royal_mummies.royal_mummies.royal_7.themes",
    importance: "section_royal_mummies.royal_mummies.royal_7.importance",
    museum: "section_royal_mummies.royal_mummies.royal_7.museum"
  },
  {
    id: "royal_8",
    name: "section_royal_mummies.royal_mummies.royal_8.name",
    description: "section_royal_mummies.royal_mummies.royal_8.description",
    desc2: "section_royal_mummies.royal_mummies.royal_8.desc2",
    image: "/images/royal_mummies/royal_8.webp",
    period: "section_royal_mummies.royal_mummies.royal_8.period",
    location: "section_royal_mummies.royal_mummies.royal_8.location",
    material: "section_royal_mummies.royal_mummies.royal_8.material",
    usage: "section_royal_mummies.royal_mummies.royal_8.usage",
    discoverer: "section_royal_mummies.royal_mummies.royal_8.discoverer",
    themes: "section_royal_mummies.royal_mummies.royal_8.themes",
    importance: "section_royal_mummies.royal_mummies.royal_8.importance",
    museum: "section_royal_mummies.royal_mummies.royal_8.museum"
  },
  {
    id: "royal_9",
    name: "section_royal_mummies.royal_mummies.royal_9.name",
    description: "section_royal_mummies.royal_mummies.royal_9.description",
    desc2: "section_royal_mummies.royal_mummies.royal_9.desc2",
    image: "/images/royal_mummies/royal_9.webp",
    period: "section_royal_mummies.royal_mummies.royal_9.period",
    location: "section_royal_mummies.royal_mummies.royal_9.location",
    material: "section_royal_mummies.royal_mummies.royal_9.material",
    usage: "section_royal_mummies.royal_mummies.royal_9.usage",
    discoverer: "section_royal_mummies.royal_mummies.royal_9.discoverer",
    themes: "section_royal_mummies.royal_mummies.royal_9.themes",
    importance: "section_royal_mummies.royal_mummies.royal_9.importance",
    museum: "section_royal_mummies.royal_mummies.royal_9.museum"
  }
];
const _sfc_main$2 = {
  __name: "AllSectionRoyalMummies",
  __ssrInlineRender: true,
  setup(__props) {
    const currentIndex = shallowRef(0);
    toRef(() => royalMummies[currentIndex.value]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      const _directive_gsap = resolveDirective("gsap");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "px-4" }, _attrs))}><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_gsap, {
        duration: 1.5,
        stagger: 0.6
      }, void 0, {
        entrance: true,
        "slide-left": true,
        stagger: true
      }))}><h2 class="text-4xl font-bold text-center text-primaryTwo dark:text-secondary">${ssrInterpolate(_ctx.$t("section_royal_mummies.title"))}</h2><p class="text-center text-gray-600 max-w-2xl mx-auto mb-20! mt-3">${ssrInterpolate(_ctx.$t("section_royal_mummies.subtitle"))}</p></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllSection/RoyalMummies.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ClientOnly = __nuxt_component_0$1;
  const _directive_gsap = resolveDirective("gsap");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "mb-14" }, _attrs))} data-v-46f5e053><div class="container mx-auto px-4" data-v-46f5e053><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_gsap, {
    duration: 1.5,
    stagger: 0.6
  }, void 0, {
    entrance: true,
    "slide-left": true,
    stagger: true
  }))} data-v-46f5e053><h2 class="text-4xl font-bold text-center mb-3 text-primaryTwo dark:text-secondary" data-v-46f5e053>${ssrInterpolate(_ctx.$t("section_contactUs.title"))}</h2><p class="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-14" data-v-46f5e053>${ssrInterpolate(_ctx.$t("section_contactUs.subtitle"))}</p></div><div class="p-8! grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-2xl shadow-sm dark:shadow-gray-300/20" data-v-46f5e053><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_gsap, {
    duration: 1.5,
    stagger: 0.6
  }, void 0, {
    entrance: true,
    "slide-right": true,
    stagger: true
  }))} data-v-46f5e053><h1 class="text-primaryTwo dark:text-secondary font-semibold text-sm sm:text-3xl" data-v-46f5e053>${ssrInterpolate(_ctx.$t("section_contactUs.content.title"))}</h1><p class="my-4 text-sm sm:text-lg text-textmain dark:text-textsecondary" data-v-46f5e053>${ssrInterpolate(_ctx.$t("section_contactUs.content.description"))}</p><div class="flex flex-col gap-3" data-v-46f5e053><div class="flex items-center gap-2" data-v-46f5e053>`);
  _push(ssrRenderComponent(VIcon, {
    icon: "mdi-map-marker-outline",
    class: "text-primaryTwo! dark:text-secondary!"
  }, null, _parent));
  _push(`<p class="text-gray-400 sm:text-lg" data-v-46f5e053>${ssrInterpolate(_ctx.$t("section_contactUs.content.location"))}</p></div><div class="flex items-center gap-2" data-v-46f5e053>`);
  _push(ssrRenderComponent(VIcon, {
    icon: "mdi-email-outline",
    class: "text-primaryTwo! dark:text-secondary!"
  }, null, _parent));
  _push(`<p class="text-gray-400 sm:text-lg" data-v-46f5e053>pharaonic@antiquities.com</p></div><div class="flex items-center gap-2" data-v-46f5e053>`);
  _push(ssrRenderComponent(VIcon, {
    icon: "mdi-phone-outline",
    class: "text-primaryTwo! dark:text-secondary!"
  }, null, _parent));
  _push(`<p class="text-gray-400 sm:text-lg" dir="ltr" data-v-46f5e053>+20 1069208821</p></div></div></div>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllSection/ContactUs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactUs = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-46f5e053"]]), { __name: "AllSectionContactUs" });
let papyri = [
  {
    id: "papyrus-1",
    name: "section_hieroglyphs.papyri_1.name",
    image: "/images/papyri_hieroglyphs/papyrus_1.jpg",
    period: "section_hieroglyphs.papyri_1.period",
    description: "section_hieroglyphs.papyri_1.description",
    desc2: "section_hieroglyphs.papyri_1.desc2",
    location: "section_hieroglyphs.papyri_1.location",
    material: "section_hieroglyphs.papyri_1.material",
    usage: "section_hieroglyphs.papyri_1.usage",
    discoverer: "section_hieroglyphs.papyri_1.discoverer",
    themes: "section_hieroglyphs.papyri_1.themes",
    importance: "section_hieroglyphs.papyri_1.importance"
  },
  {
    id: "papyrus-2",
    name: "section_hieroglyphs.papyri_2.name",
    image: "/images/papyri_hieroglyphs/papyrus_2.png",
    period: "section_hieroglyphs.papyri_2.period",
    description: "section_hieroglyphs.papyri_2.description",
    desc2: "section_hieroglyphs.papyri_2.desc2",
    location: "section_hieroglyphs.papyri_2.location",
    material: "section_hieroglyphs.papyri_2.material",
    usage: "section_hieroglyphs.papyri_2.usage",
    discoverer: "section_hieroglyphs.papyri_2.discoverer",
    themes: "section_hieroglyphs.papyri_2.themes",
    importance: "section_hieroglyphs.papyri_2.importance"
  },
  {
    id: "papyrus-3",
    name: "section_hieroglyphs.papyri_3.name",
    image: "/images/papyri_hieroglyphs/papyrus_3.jpg",
    period: "section_hieroglyphs.papyri_3.period",
    description: "section_hieroglyphs.papyri_3.description",
    desc2: "section_hieroglyphs.papyri_3.desc2",
    location: "section_hieroglyphs.papyri_3.location",
    material: "section_hieroglyphs.papyri_3.material",
    usage: "section_hieroglyphs.papyri_3.usage",
    discoverer: "section_hieroglyphs.papyri_3.discoverer",
    themes: "section_hieroglyphs.papyri_3.themes",
    importance: "section_hieroglyphs.papyri_3.importance"
  },
  {
    id: "papyrus-4",
    name: "section_hieroglyphs.papyri_4.name",
    image: "/images/papyri_hieroglyphs/papyrus_4.jpg",
    period: "section_hieroglyphs.papyri_4.period",
    description: "section_hieroglyphs.papyri_4.description",
    desc2: "section_hieroglyphs.papyri_4.desc2",
    location: "section_hieroglyphs.papyri_4.location",
    material: "section_hieroglyphs.papyri_4.material",
    usage: "section_hieroglyphs.papyri_4.usage",
    discoverer: "section_hieroglyphs.papyri_4.discoverer",
    themes: "section_hieroglyphs.papyri_4.themes",
    importance: "section_hieroglyphs.papyri_4.importance"
  },
  {
    id: "papyrus-5",
    name: "section_hieroglyphs.papyri_5.name",
    image: "/images/papyri_hieroglyphs/papyrus_5.jpg",
    period: "section_hieroglyphs.papyri_5.period",
    description: "section_hieroglyphs.papyri_5.description",
    desc2: "section_hieroglyphs.papyri_5.desc2",
    location: "section_hieroglyphs.papyri_5.location",
    material: "section_hieroglyphs.papyri_5.material",
    usage: "section_hieroglyphs.papyri_5.usage",
    discoverer: "section_hieroglyphs.papyri_5.discoverer",
    themes: "section_hieroglyphs.papyri_5.themes",
    importance: "section_hieroglyphs.papyri_5.importance"
  },
  {
    id: "papyrus-6",
    name: "section_hieroglyphs.papyri_6.name",
    image: "/images/papyri_hieroglyphs/papyrus_6.jpg",
    period: "section_hieroglyphs.papyri_6.period",
    description: "section_hieroglyphs.papyri_6.description",
    desc2: "section_hieroglyphs.papyri_6.desc2",
    location: "section_hieroglyphs.papyri_6.location",
    material: "section_hieroglyphs.papyri_6.material",
    usage: "section_hieroglyphs.papyri_6.usage",
    discoverer: "section_hieroglyphs.papyri_6.discoverer",
    themes: "section_hieroglyphs.papyri_6.themes",
    importance: "section_hieroglyphs.papyri_6.importance"
  },
  {
    id: "papyrus-7",
    name: "section_hieroglyphs.papyri_7.name",
    image: "/images/papyri_hieroglyphs/papyrus_7.jpg",
    period: "section_hieroglyphs.papyri_7.period",
    description: "section_hieroglyphs.papyri_7.description",
    desc2: "section_hieroglyphs.papyri_7.desc2",
    location: "section_hieroglyphs.papyri_7.location",
    material: "section_hieroglyphs.papyri_7.material",
    usage: "section_hieroglyphs.papyri_7.usage",
    discoverer: "section_hieroglyphs.papyri_7.discoverer",
    themes: "section_hieroglyphs.papyri_7.themes",
    importance: "section_hieroglyphs.papyri_7.importance"
  },
  {
    id: "papyrus-8",
    name: "section_hieroglyphs.papyri_8.name",
    image: "/images/papyri_hieroglyphs/papyrus_8.jpg",
    period: "section_hieroglyphs.papyri_8.period",
    description: "section_hieroglyphs.papyri_8.description",
    desc2: "section_hieroglyphs.papyri_8.desc2",
    location: "section_hieroglyphs.papyri_8.location",
    material: "section_hieroglyphs.papyri_8.material",
    usage: "section_hieroglyphs.papyri_8.usage",
    discoverer: "section_hieroglyphs.papyri_8.discoverer",
    themes: "section_hieroglyphs.papyri_8.themes",
    importance: "section_hieroglyphs.papyri_8.importance"
  },
  {
    id: "papyrus-9",
    name: "section_hieroglyphs.papyri_9.name",
    image: "/images/papyri_hieroglyphs/papyrus_9.jpg",
    period: "section_hieroglyphs.papyri_9.period",
    description: "section_hieroglyphs.papyri_9.description",
    desc2: "section_hieroglyphs.papyri_9.desc2",
    location: "section_hieroglyphs.papyri_9.location",
    material: "section_hieroglyphs.papyri_9.material",
    usage: "section_hieroglyphs.papyri_9.usage",
    discoverer: "section_hieroglyphs.papyri_9.discoverer",
    themes: "section_hieroglyphs.papyri_9.themes",
    importance: "section_hieroglyphs.papyri_9.importance"
  },
  {
    id: "papyrus-10",
    name: "section_hieroglyphs.papyri_10.name",
    image: "/images/papyri_hieroglyphs/papyrus_10.jpg",
    period: "section_hieroglyphs.papyri_10.period",
    description: "section_hieroglyphs.papyri_10.description",
    desc2: "section_hieroglyphs.papyri_10.desc2",
    location: "section_hieroglyphs.papyri_10.location",
    material: "section_hieroglyphs.papyri_10.material",
    usage: "section_hieroglyphs.papyri_10.usage",
    discoverer: "section_hieroglyphs.papyri_10.discoverer",
    themes: "section_hieroglyphs.papyri_10.themes",
    importance: "section_hieroglyphs.papyri_10.importance"
  },
  {
    id: "papyrus-11",
    name: "section_hieroglyphs.papyri_11.name",
    image: "/images/papyri_hieroglyphs/papyrus_11.jpg",
    period: "section_hieroglyphs.papyri_11.period",
    description: "section_hieroglyphs.papyri_11.description",
    desc2: "section_hieroglyphs.papyri_11.desc2",
    location: "section_hieroglyphs.papyri_11.location",
    material: "section_hieroglyphs.papyri_11.material",
    usage: "section_hieroglyphs.papyri_11.usage",
    discoverer: "section_hieroglyphs.papyri_11.discoverer",
    themes: "section_hieroglyphs.papyri_11.themes",
    importance: "section_hieroglyphs.papyri_11.importance"
  },
  {
    id: "papyrus-12",
    name: "section_hieroglyphs.papyri_12.name",
    image: "/images/papyri_hieroglyphs/papyrus_12.jpeg",
    period: "section_hieroglyphs.papyri_12.period",
    description: "section_hieroglyphs.papyri_12.description",
    desc2: "section_hieroglyphs.papyri_12.desc2",
    location: "section_hieroglyphs.papyri_12.location",
    material: "section_hieroglyphs.papyri_12.material",
    usage: "section_hieroglyphs.papyri_12.usage",
    discoverer: "section_hieroglyphs.papyri_12.discoverer",
    themes: "section_hieroglyphs.papyri_12.themes",
    importance: "section_hieroglyphs.papyri_12.importance"
  }
];
let sacredSymbols = [
  {
    id: "symbol-1",
    name: "section_sacred_symbols.sacred_symbols.symbol_1.name",
    image: "/images/sacred_symbols/symbols_1.png",
    period: "section_sacred_symbols.sacred_symbols.symbol_1.period",
    location: "section_sacred_symbols.sacred_symbols.symbol_1.location",
    description: "section_sacred_symbols.sacred_symbols.symbol_1.description",
    desc2: "section_sacred_symbols.sacred_symbols.symbol_1.desc2",
    material: "section_sacred_symbols.sacred_symbols.symbol_1.material",
    usage: "section_sacred_symbols.sacred_symbols.symbol_1.usage",
    discoverer: "section_sacred_symbols.sacred_symbols.symbol_1.discoverer",
    themes: "section_sacred_symbols.sacred_symbols.symbol_1.themes",
    importance: "section_sacred_symbols.sacred_symbols.symbol_1.importance"
  },
  {
    id: "symbol-2",
    name: "section_sacred_symbols.sacred_symbols.symbol_2.name",
    image: "/images/sacred_symbols/symbols_2.jpg",
    period: "section_sacred_symbols.sacred_symbols.symbol_2.period",
    location: "section_sacred_symbols.sacred_symbols.symbol_2.location",
    description: "section_sacred_symbols.sacred_symbols.symbol_2.description",
    desc2: "section_sacred_symbols.sacred_symbols.symbol_2.desc2",
    material: "section_sacred_symbols.sacred_symbols.symbol_2.material",
    usage: "section_sacred_symbols.sacred_symbols.symbol_2.usage",
    discoverer: "section_sacred_symbols.sacred_symbols.symbol_2.discoverer",
    themes: "section_sacred_symbols.sacred_symbols.symbol_2.themes",
    importance: "section_sacred_symbols.sacred_symbols.symbol_2.importance"
  },
  {
    id: "symbol-3",
    name: "section_sacred_symbols.sacred_symbols.symbol_3.name",
    image: "/images/sacred_symbols/symbols_3.jfif",
    period: "section_sacred_symbols.sacred_symbols.symbol_3.period",
    location: "section_sacred_symbols.sacred_symbols.symbol_3.location",
    description: "section_sacred_symbols.sacred_symbols.symbol_3.description",
    desc2: "section_sacred_symbols.sacred_symbols.symbol_3.desc2",
    material: "section_sacred_symbols.sacred_symbols.symbol_3.material",
    usage: "section_sacred_symbols.sacred_symbols.symbol_3.usage",
    discoverer: "section_sacred_symbols.sacred_symbols.symbol_3.discoverer",
    themes: "section_sacred_symbols.sacred_symbols.symbol_3.themes",
    importance: "section_sacred_symbols.sacred_symbols.symbol_3.importance"
  },
  {
    id: "symbol-4",
    name: "section_sacred_symbols.sacred_symbols.symbol_4.name",
    image: "/images/sacred_symbols/symbols_4.jfif",
    period: "section_sacred_symbols.sacred_symbols.symbol_4.period",
    location: "section_sacred_symbols.sacred_symbols.symbol_4.location",
    description: "section_sacred_symbols.sacred_symbols.symbol_4.description",
    desc2: "section_sacred_symbols.sacred_symbols.symbol_4.desc2",
    material: "section_sacred_symbols.sacred_symbols.symbol_4.material",
    usage: "section_sacred_symbols.sacred_symbols.symbol_4.usage",
    discoverer: "section_sacred_symbols.sacred_symbols.symbol_4.discoverer",
    themes: "section_sacred_symbols.sacred_symbols.symbol_4.themes",
    importance: "section_sacred_symbols.sacred_symbols.symbol_4.importance"
  },
  {
    id: "symbol-5",
    name: "section_sacred_symbols.sacred_symbols.symbol_5.name",
    image: "/images/sacred_symbols/symbols_5.jpg",
    period: "section_sacred_symbols.sacred_symbols.symbol_5.period",
    location: "section_sacred_symbols.sacred_symbols.symbol_5.location",
    description: "section_sacred_symbols.sacred_symbols.symbol_5.description",
    desc2: "section_sacred_symbols.sacred_symbols.symbol_5.desc2",
    material: "section_sacred_symbols.sacred_symbols.symbol_5.material",
    usage: "section_sacred_symbols.sacred_symbols.symbol_5.usage",
    discoverer: "section_sacred_symbols.sacred_symbols.symbol_5.discoverer",
    themes: "section_sacred_symbols.sacred_symbols.symbol_5.themes",
    importance: "section_sacred_symbols.sacred_symbols.symbol_5.importance"
  },
  {
    id: "symbol-6",
    name: "section_sacred_symbols.sacred_symbols.symbol_6.name",
    image: "/images/sacred_symbols/symbols_6.jpg",
    period: "section_sacred_symbols.sacred_symbols.symbol_6.period",
    location: "section_sacred_symbols.sacred_symbols.symbol_6.location",
    description: "section_sacred_symbols.sacred_symbols.symbol_6.description",
    desc2: "section_sacred_symbols.sacred_symbols.symbol_6.desc2",
    material: "section_sacred_symbols.sacred_symbols.symbol_6.material",
    usage: "section_sacred_symbols.sacred_symbols.symbol_6.usage",
    discoverer: "section_sacred_symbols.sacred_symbols.symbol_6.discoverer",
    themes: "section_sacred_symbols.sacred_symbols.symbol_6.themes",
    importance: "section_sacred_symbols.sacred_symbols.symbol_6.importance"
  },
  {
    id: "symbol-7",
    name: "section_sacred_symbols.sacred_symbols.symbol_7.name",
    image: "/images/sacred_symbols/symbols_7.webp",
    period: "section_sacred_symbols.sacred_symbols.symbol_7.period",
    location: "section_sacred_symbols.sacred_symbols.symbol_7.location",
    description: "section_sacred_symbols.sacred_symbols.symbol_7.description",
    desc2: "section_sacred_symbols.sacred_symbols.symbol_7.desc2",
    material: "section_sacred_symbols.sacred_symbols.symbol_7.material",
    usage: "section_sacred_symbols.sacred_symbols.symbol_7.usage",
    discoverer: "section_sacred_symbols.sacred_symbols.symbol_7.discoverer",
    themes: "section_sacred_symbols.sacred_symbols.symbol_7.themes",
    importance: "section_sacred_symbols.sacred_symbols.symbol_7.importance"
  },
  {
    id: "symbol-8",
    name: "section_sacred_symbols.sacred_symbols.symbol_8.name",
    image: "/images/sacred_symbols/symbols_8.webp",
    period: "section_sacred_symbols.sacred_symbols.symbol_8.period",
    location: "section_sacred_symbols.sacred_symbols.symbol_8.location",
    description: "section_sacred_symbols.sacred_symbols.symbol_8.description",
    desc2: "section_sacred_symbols.sacred_symbols.symbol_8.desc2",
    material: "section_sacred_symbols.sacred_symbols.symbol_8.material",
    usage: "section_sacred_symbols.sacred_symbols.symbol_8.usage",
    discoverer: "section_sacred_symbols.sacred_symbols.symbol_8.discoverer",
    themes: "section_sacred_symbols.sacred_symbols.symbol_8.themes",
    importance: "section_sacred_symbols.sacred_symbols.symbol_8.importance"
  },
  {
    id: "symbol-9",
    name: "section_sacred_symbols.sacred_symbols.symbol_9.name",
    image: "/images/sacred_symbols/symbols_9.jfif",
    period: "section_sacred_symbols.sacred_symbols.symbol_9.period",
    location: "section_sacred_symbols.sacred_symbols.symbol_9.location",
    description: "section_sacred_symbols.sacred_symbols.symbol_9.description",
    desc2: "section_sacred_symbols.sacred_symbols.symbol_9.desc2",
    material: "section_sacred_symbols.sacred_symbols.symbol_9.material",
    usage: "section_sacred_symbols.sacred_symbols.symbol_9.usage",
    discoverer: "section_sacred_symbols.sacred_symbols.symbol_9.discoverer",
    themes: "section_sacred_symbols.sacred_symbols.symbol_9.themes",
    importance: "section_sacred_symbols.sacred_symbols.symbol_9.importance"
  }
];
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(PharaonicMasterpieces, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        data: unref(papyri),
        title: "section_hieroglyphs.title",
        subtitle: "section_hieroglyphs.subtitle"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        data: unref(sacredSymbols),
        title: "section_sacred_symbols.title",
        subtitle: "section_sacred_symbols.subtitle"
      }, null, _parent));
      _push(ssrRenderComponent(ContactUs, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C4HDqeWl.mjs.map
