import { p as publicAssetsURL } from '../_/nitro.mjs';
import { withCtx, unref, createVNode, toDisplayString, mergeProps, createBlock, openBlock, useId, toRef, ref, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { aA as useState, g as genericComponent, c as VBtn, p as propsFactory, n as useProxiedModel, ax as useScopeId, f as useRender, ay as VOverlay, ak as forwardRefs, Y as omit, az as makeVOverlayProps } from './server.mjs';

const _imports_1 = publicAssetsURL("/images/imgLangCuntry/eg-arabic.png");
const _imports_2 = publicAssetsURL("/images/imgLangCuntry/en-english.png");
const _imports_0 = publicAssetsURL("/images/logo/logoHero.png");
const isDarkMode = ref(false);
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    (void 0).body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    (void 0).body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};
function useDarkMode() {
  return {
    isDarkMode,
    toggleDarkMode
  };
}
const makeVTooltipProps = propsFactory({
  id: String,
  interactive: Boolean,
  text: String,
  ...omit(makeVOverlayProps({
    closeOnBack: false,
    location: "end",
    locationStrategy: "connected",
    eager: true,
    minWidth: 0,
    offset: 10,
    openOnClick: false,
    openOnHover: true,
    origin: "auto",
    scrim: false,
    scrollStrategy: "reposition",
    transition: null
  }), ["absolute", "persistent"])
}, "VTooltip");
const VTooltip = genericComponent()({
  name: "VTooltip",
  props: makeVTooltipProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const uid = useId();
    const id = toRef(() => props.id || `v-tooltip-${uid}`);
    const overlay = ref();
    const location = computed(() => {
      return props.location.split(" ").length > 1 ? props.location : props.location + " center";
    });
    const origin = computed(() => {
      return props.origin === "auto" || props.origin === "overlap" || props.origin.split(" ").length > 1 || props.location.split(" ").length > 1 ? props.origin : props.origin + " center";
    });
    const transition = toRef(() => {
      if (props.transition != null) return props.transition;
      return isActive.value ? "scale-transition" : "fade-transition";
    });
    const activatorProps = computed(() => mergeProps({
      "aria-describedby": id.value
    }, props.activatorProps));
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-tooltip", {
          "v-tooltip--interactive": props.interactive
        }, props.class],
        "style": props.style,
        "id": id.value
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "transition": transition.value,
        "absolute": true,
        "location": location.value,
        "origin": origin.value,
        "persistent": true,
        "role": "tooltip",
        "activatorProps": activatorProps.value,
        "_disableGlobalStack": true
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return slots.default?.(...args) ?? props.text;
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});
const _sfc_main = {
  __name: "UIBtnMode",
  __ssrInlineRender: true,
  setup(__props) {
    const { toggleDarkMode: toggleDarkMode2, isDarkMode: isDarkMode2 } = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VTooltip, { location: "bottom" }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, mergeProps({ class: "h-[37px]! hidden! xl:block! bg-primary! dark:bg-secondary! text-secondary! dark:text-primary!" }, props, { onClick: unref(toggleDarkMode2) }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!unref(isDarkMode2)) {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" class="iconify iconify--line-md text-3xl text-primary"${_scopeId2}><g fill="currentColor" fill-opacity="0"${_scopeId2}><path d="M15.22 6.03l2.53 -1.94l-3.19 -0.09l-1.06 -3l-1.06 3l-3.19 0.09l2.53 1.94l-0.91 3.06l2.63 -1.81l2.63 1.81l-0.91 -3.06Z"${_scopeId2}><animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.4s" values="0;1"${_scopeId2}></animate></path><path d="M19.61 12.25l1.64 -1.25l-2.06 -0.05l-0.69 -1.95l-0.69 1.95l-2.06 0.05l1.64 1.25l-0.59 1.98l1.7 -1.17l1.7 1.17l-0.59 -1.98Z"${_scopeId2}><animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" values="0;1"${_scopeId2}></animate></path></g><path fill="none" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6c0 6.08 4.92 11 11 11c0.53 0 1.05 -0.04 1.56 -0.11c-1.61 2.47 -4.39 4.11 -7.56 4.11c-4.97 0 -9 -4.03 -9 -9c0 -3.17 1.64 -5.95 4.11 -7.56c-0.07 0.51 -0.11 1.03 -0.11 1.56Z"${_scopeId2}><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"${_scopeId2}></animate></path></svg>`);
                  } else {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" class="iconify iconify--line-md text-3xl"${_scopeId2}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId2}><path stroke-dasharray="36" stroke-dashoffset="36" d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5"${_scopeId2}><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="36;0"${_scopeId2}></animate></path><path stroke-dasharray="2" stroke-dashoffset="2" d="M12 19v1M19 12h1M12 5v-1M5 12h-1"${_scopeId2}><animate fill="freeze" attributeName="d" begin="0.5s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"${_scopeId2}></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="2;0"${_scopeId2}></animate></path><path stroke-dasharray="2" stroke-dashoffset="2" d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"${_scopeId2}><animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"${_scopeId2}></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"${_scopeId2}></animate></path></g></svg>`);
                  }
                } else {
                  return [
                    !unref(isDarkMode2) ? (openBlock(), createBlock("svg", {
                      key: 0,
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      "aria-hidden": "true",
                      role: "img",
                      width: "1em",
                      height: "1em",
                      viewBox: "0 0 24 24",
                      class: "iconify iconify--line-md text-3xl text-primary"
                    }, [
                      createVNode("g", {
                        fill: "currentColor",
                        "fill-opacity": "0"
                      }, [
                        createVNode("path", { d: "M15.22 6.03l2.53 -1.94l-3.19 -0.09l-1.06 -3l-1.06 3l-3.19 0.09l2.53 1.94l-0.91 3.06l2.63 -1.81l2.63 1.81l-0.91 -3.06Z" }, [
                          createVNode("animate", {
                            fill: "freeze",
                            attributeName: "fill-opacity",
                            begin: "0.7s",
                            dur: "0.4s",
                            values: "0;1"
                          })
                        ]),
                        createVNode("path", { d: "M19.61 12.25l1.64 -1.25l-2.06 -0.05l-0.69 -1.95l-0.69 1.95l-2.06 0.05l1.64 1.25l-0.59 1.98l1.7 -1.17l1.7 1.17l-0.59 -1.98Z" }, [
                          createVNode("animate", {
                            fill: "freeze",
                            attributeName: "fill-opacity",
                            begin: "1.1s",
                            dur: "0.4s",
                            values: "0;1"
                          })
                        ])
                      ]),
                      createVNode("path", {
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-dasharray": "56",
                        "stroke-dashoffset": "56",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M7 6c0 6.08 4.92 11 11 11c0.53 0 1.05 -0.04 1.56 -0.11c-1.61 2.47 -4.39 4.11 -7.56 4.11c-4.97 0 -9 -4.03 -9 -9c0 -3.17 1.64 -5.95 4.11 -7.56c-0.07 0.51 -0.11 1.03 -0.11 1.56Z"
                      }, [
                        createVNode("animate", {
                          fill: "freeze",
                          attributeName: "stroke-dashoffset",
                          dur: "0.6s",
                          values: "56;0"
                        })
                      ])
                    ])) : (openBlock(), createBlock("svg", {
                      key: 1,
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      "aria-hidden": "true",
                      role: "img",
                      width: "1em",
                      height: "1em",
                      viewBox: "0 0 24 24",
                      class: "iconify iconify--line-md text-3xl"
                    }, [
                      createVNode("g", {
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-dasharray": "36",
                          "stroke-dashoffset": "36",
                          d: "M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5"
                        }, [
                          createVNode("animate", {
                            fill: "freeze",
                            attributeName: "stroke-dashoffset",
                            dur: "0.4s",
                            values: "36;0"
                          })
                        ]),
                        createVNode("path", {
                          "stroke-dasharray": "2",
                          "stroke-dashoffset": "2",
                          d: "M12 19v1M19 12h1M12 5v-1M5 12h-1"
                        }, [
                          createVNode("animate", {
                            fill: "freeze",
                            attributeName: "d",
                            begin: "0.5s",
                            dur: "0.2s",
                            values: "M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                          }),
                          createVNode("animate", {
                            fill: "freeze",
                            attributeName: "stroke-dashoffset",
                            begin: "0.5s",
                            dur: "0.2s",
                            values: "2;0"
                          })
                        ]),
                        createVNode("path", {
                          "stroke-dasharray": "2",
                          "stroke-dashoffset": "2",
                          d: "M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"
                        }, [
                          createVNode("animate", {
                            fill: "freeze",
                            attributeName: "d",
                            begin: "0.7s",
                            dur: "0.2s",
                            values: "M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                          }),
                          createVNode("animate", {
                            fill: "freeze",
                            attributeName: "stroke-dashoffset",
                            begin: "0.7s",
                            dur: "0.2s",
                            values: "2;0"
                          })
                        ])
                      ])
                    ]))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, mergeProps({ class: "h-[37px]! hidden! xl:block! bg-primary! dark:bg-secondary! text-secondary! dark:text-primary!" }, props, { onClick: unref(toggleDarkMode2) }), {
                default: withCtx(() => [
                  !unref(isDarkMode2) ? (openBlock(), createBlock("svg", {
                    key: 0,
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    "aria-hidden": "true",
                    role: "img",
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    class: "iconify iconify--line-md text-3xl text-primary"
                  }, [
                    createVNode("g", {
                      fill: "currentColor",
                      "fill-opacity": "0"
                    }, [
                      createVNode("path", { d: "M15.22 6.03l2.53 -1.94l-3.19 -0.09l-1.06 -3l-1.06 3l-3.19 0.09l2.53 1.94l-0.91 3.06l2.63 -1.81l2.63 1.81l-0.91 -3.06Z" }, [
                        createVNode("animate", {
                          fill: "freeze",
                          attributeName: "fill-opacity",
                          begin: "0.7s",
                          dur: "0.4s",
                          values: "0;1"
                        })
                      ]),
                      createVNode("path", { d: "M19.61 12.25l1.64 -1.25l-2.06 -0.05l-0.69 -1.95l-0.69 1.95l-2.06 0.05l1.64 1.25l-0.59 1.98l1.7 -1.17l1.7 1.17l-0.59 -1.98Z" }, [
                        createVNode("animate", {
                          fill: "freeze",
                          attributeName: "fill-opacity",
                          begin: "1.1s",
                          dur: "0.4s",
                          values: "0;1"
                        })
                      ])
                    ]),
                    createVNode("path", {
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-dasharray": "56",
                      "stroke-dashoffset": "56",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M7 6c0 6.08 4.92 11 11 11c0.53 0 1.05 -0.04 1.56 -0.11c-1.61 2.47 -4.39 4.11 -7.56 4.11c-4.97 0 -9 -4.03 -9 -9c0 -3.17 1.64 -5.95 4.11 -7.56c-0.07 0.51 -0.11 1.03 -0.11 1.56Z"
                    }, [
                      createVNode("animate", {
                        fill: "freeze",
                        attributeName: "stroke-dashoffset",
                        dur: "0.6s",
                        values: "56;0"
                      })
                    ])
                  ])) : (openBlock(), createBlock("svg", {
                    key: 1,
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    "aria-hidden": "true",
                    role: "img",
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    class: "iconify iconify--line-md text-3xl"
                  }, [
                    createVNode("g", {
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2"
                    }, [
                      createVNode("path", {
                        "stroke-dasharray": "36",
                        "stroke-dashoffset": "36",
                        d: "M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5"
                      }, [
                        createVNode("animate", {
                          fill: "freeze",
                          attributeName: "stroke-dashoffset",
                          dur: "0.4s",
                          values: "36;0"
                        })
                      ]),
                      createVNode("path", {
                        "stroke-dasharray": "2",
                        "stroke-dashoffset": "2",
                        d: "M12 19v1M19 12h1M12 5v-1M5 12h-1"
                      }, [
                        createVNode("animate", {
                          fill: "freeze",
                          attributeName: "d",
                          begin: "0.5s",
                          dur: "0.2s",
                          values: "M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                        }),
                        createVNode("animate", {
                          fill: "freeze",
                          attributeName: "stroke-dashoffset",
                          begin: "0.5s",
                          dur: "0.2s",
                          values: "2;0"
                        })
                      ]),
                      createVNode("path", {
                        "stroke-dasharray": "2",
                        "stroke-dashoffset": "2",
                        d: "M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"
                      }, [
                        createVNode("animate", {
                          fill: "freeze",
                          attributeName: "d",
                          begin: "0.7s",
                          dur: "0.2s",
                          values: "M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                        }),
                        createVNode("animate", {
                          fill: "freeze",
                          attributeName: "stroke-dashoffset",
                          begin: "0.7s",
                          dur: "0.2s",
                          values: "2;0"
                        })
                      ])
                    ])
                  ]))
                ]),
                _: 1
              }, 16, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(unref(isDarkMode2) ? _ctx.$t("tooltip.tooltipLight") : _ctx.$t("tooltip.tooltipDark"))}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(isDarkMode2) ? _ctx.$t("tooltip.tooltipLight") : _ctx.$t("tooltip.tooltipDark")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/BtnMode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const navLinks = [
  { title: "links_nav.home", to: "/", icon: "mdi-home" },
  {
    title: "links_nav.collections.label",
    icon: "mdi-book-multiple",
    items: [
      {
        title: "links_nav.collections.sub.collections_timeline",
        to: "/collections/timeline",
        icon: "mdi-timeline-clock-outline"
      },
      {
        title: "links_nav.collections.sub.collections_hieroglyphic_writing",
        to: "/collections/hieroglyphic",
        icon: "mdi-alphabetical"
      }
    ]
  },
  {
    title: "links_nav.relics.label",
    icon: "mdi-bank",
    items: [
      {
        title: "links_nav.relics.sub.relics_temples",
        to: "/relics/temples",
        icon: "mdi-temple-buddhist"
      },
      {
        title: "links_nav.relics.sub.relics_royal_tombs",
        to: "/relics/royal-tombs",
        icon: "mdi-castle"
      }
    ]
  },
  { title: "links_nav.gallery", to: "/gallery", icon: "mdi-image-multiple" },
  { title: "links_nav.museums", to: "/museums", icon: "mdi-domain" },
  {
    title: "links_nav.artifacts_3d",
    to: "/artifacts-3d",
    icon: "mdi-cube-scan"
  },
  {
    title: "links_nav.favorites",
    to: "/favorites",
    icon: "mdi-heart-outline"
  }
];
const useDrawer = () => useState("drawer", () => false);

export { _imports_1 as _, _imports_2 as a, _imports_0 as b, _sfc_main as c, navLinks as n, useDrawer as u };
//# sourceMappingURL=useDrawer-C1aMvQWA.mjs.map
