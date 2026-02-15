import { _ as __nuxt_component_0 } from './nuxt-link-XQJOkYip.mjs';
import { mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useDrawer, b as _imports_0, n as navLinks, c as _sfc_main$1, _ as _imports_1, a as _imports_2 } from './useDrawer-C1aMvQWA.mjs';
import { b as useI18n, a as useLang, V as VIcon, c as VBtn } from './server.mjs';
import { V as VMenu, a as VList, b as VListItem, c as VListItemTitle } from './VMenu-CPLb6S0I.mjs';
import { V as VDivider } from './VDivider-CgNue33A.mjs';
import '../_/nitro.mjs';
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

const _sfc_main = {
  __name: "AppNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { locales, setLocale } = useI18n();
    let { addDirectionAndLang, lang } = useLang();
    const drawer = useDrawer();
    function toggleDrawer() {
      drawer.value = !drawer.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-textsecondary! fixed top-0 left-0 z-2010 w-full h-[85px] dark:bg-primaryTwo/70! shadow-md! shadow-black/30 dark:shadow-gray-300/20 font-bold uppercase" }, _attrs))}><div class="container mx-auto flex! items-center justify-between h-full">`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="object-cover w-[125px]"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Logo",
                class: "object-cover w-[125px]"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden xl:block text-textmain! dark:text-textsecondary!"><ul class="flex items-center gap-2 text-[15px]"><!--[-->`);
      ssrRenderList(unref(navLinks), (link) => {
        _push(`<li>`);
        if (!link.items) {
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: link.to,
            class: "flex items-center gap-2 px-2 py-1 rounded hover:bg-primary/20! hover:text-primaryTwo! hover:dark:text-secondary! transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VIcon, { size: "15" }, {
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
                  createVNode(VIcon, { size: "15" }, {
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
          _push(ssrRenderComponent(VMenu, {
            "open-on-hover": "",
            "z-index": "3000"
          }, {
            activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div${ssrRenderAttrs(mergeProps({ ref_for: true }, props, { class: "flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-primary/20! hover:text-primaryTwo! hover:dark:text-secondary! transition-colors" }))}${_scopeId}>`);
                _push2(ssrRenderComponent(VIcon, { size: "15" }, {
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
                  createVNode("div", mergeProps({ ref_for: true }, props, { class: "flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-primary/20! hover:text-primaryTwo! hover:dark:text-secondary! transition-colors" }), [
                    createVNode(VIcon, { size: "15" }, {
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
                _push2(ssrRenderComponent(VList, { class: "w-[250px]! bg-textsecondary! dark:bg-primaryTwo/70! text-primaryTwo! dark:text-textsecondary!" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<!--[-->`);
                      ssrRenderList(link.items, (child) => {
                        _push3(ssrRenderComponent(VListItem, {
                          key: child.title,
                          to: child.to,
                          class: "hover:bg-primary/20! transition-colors rounded px-3 py-2"
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
                            class: "hover:bg-primary/20! transition-colors rounded px-3 py-2"
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
                  createVNode(VList, { class: "w-[250px]! bg-textsecondary! dark:bg-primaryTwo/70! text-primaryTwo! dark:text-textsecondary!" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(link.items, (child) => {
                        return openBlock(), createBlock(VListItem, {
                          key: child.title,
                          to: child.to,
                          class: "hover:bg-primary/20! transition-colors rounded px-3 py-2"
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
      _push(`<!--]--></ul></nav><div class="flex gap-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(ssrRenderComponent(VMenu, {
        "open-on-hover": "",
        class: "relative! z-2100!"
      }, {
        activator: withCtx(({ props: menu }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, mergeProps({
              color: "secondary!",
              class: "text-primary! text-sm!"
            }, menu), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("nav.lang"))} `);
                  _push3(ssrRenderComponent(VIcon, { class: "ms-1" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-web`);
                      } else {
                        return [
                          createTextVNode("mdi-web")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("nav.lang")) + " ", 1),
                    createVNode(VIcon, { class: "ms-1" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-web")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, mergeProps({
                color: "secondary!",
                class: "text-primary! text-sm!"
              }, menu), {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("nav.lang")) + " ", 1),
                  createVNode(VIcon, { class: "ms-1" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-web")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 16)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VList, { class: "dark:bg-primary/70! dark:text-secondary! text-textmain!" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(locales), (item, index) => {
                    _push3(ssrRenderComponent(VListItem, {
                      key: index,
                      value: index,
                      class: "w-[150px]!"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="${ssrRenderClass([
                            item.code === unref(lang) ? "opacity-50! pointer-events-none!" : "",
                            "flex items-center gap-4 w-full"
                          ])}"${_scopeId3}>`);
                          if (item.name === "العربية") {
                            _push4(`<img${ssrRenderAttr("src", _imports_1)} alt="cuntry" class="object-contain w-5"${_scopeId3}>`);
                          } else {
                            _push4(`<img${ssrRenderAttr("src", _imports_2)} alt="cuntry" class="object-contain w-5"${_scopeId3}>`);
                          }
                          _push4(ssrRenderComponent(VListItemTitle, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: [
                                "flex items-center gap-4 w-full",
                                item.code === unref(lang) ? "opacity-50! pointer-events-none!" : ""
                              ],
                              onClick: ($event) => {
                                unref(setLocale)(item.code);
                                unref(addDirectionAndLang)();
                              }
                            }, [
                              item.name === "العربية" ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: _imports_1,
                                alt: "cuntry",
                                class: "object-contain w-5"
                              })) : (openBlock(), createBlock("img", {
                                key: 1,
                                src: _imports_2,
                                alt: "cuntry",
                                class: "object-contain w-5"
                              })),
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (item, index) => {
                      return openBlock(), createBlock(VListItem, {
                        key: index,
                        value: index,
                        class: "w-[150px]!"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: [
                              "flex items-center gap-4 w-full",
                              item.code === unref(lang) ? "opacity-50! pointer-events-none!" : ""
                            ],
                            onClick: ($event) => {
                              unref(setLocale)(item.code);
                              unref(addDirectionAndLang)();
                            }
                          }, [
                            item.name === "العربية" ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: _imports_1,
                              alt: "cuntry",
                              class: "object-contain w-5"
                            })) : (openBlock(), createBlock("img", {
                              key: 1,
                              src: _imports_2,
                              alt: "cuntry",
                              class: "object-contain w-5"
                            })),
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ], 10, ["onClick"])
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VList, { class: "dark:bg-primary/70! dark:text-secondary! text-textmain!" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (item, index) => {
                    return openBlock(), createBlock(VListItem, {
                      key: index,
                      value: index,
                      class: "w-[150px]!"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: [
                            "flex items-center gap-4 w-full",
                            item.code === unref(lang) ? "opacity-50! pointer-events-none!" : ""
                          ],
                          onClick: ($event) => {
                            unref(setLocale)(item.code);
                            unref(addDirectionAndLang)();
                          }
                        }, [
                          item.name === "العربية" ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: _imports_1,
                            alt: "cuntry",
                            class: "object-contain w-5"
                          })) : (openBlock(), createBlock("img", {
                            key: 1,
                            src: _imports_2,
                            alt: "cuntry",
                            class: "object-contain w-5"
                          })),
                          createVNode(VListItemTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ], 10, ["onClick"])
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        class: "bg-secondary! me-5! xl:hidden!",
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
      _push(`</div></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/AppNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AppNav-DuP9Yheb.mjs.map
