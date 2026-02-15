import { resolveDirective, mergeProps, withCtx, unref, withDirectives, createBlock, openBlock, createCommentVNode, createVNode, toDisplayString, Fragment, renderList, toRef, computed, normalizeStyle, normalizeClass, shallowRef, ref, watch, createElementVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrRenderAttr } from 'vue/server-renderer';
import { a as useLang, g as genericComponent, p as propsFactory, s as provideTheme, O as useDensity, d as useRtl, v as provideDefaults, f as useRender, N as convertToUnit, e as useDimension, z as makeThemeProps, m as makeTagProps, D as makeDensityProps, i as makeComponentProps, P as pick, A as makeSizeProps, B as makeRoundedProps, C as makeElevationProps, h as makeDimensionProps, I as IconValue, G as useSize, H as useBackgroundColor, J as useRounded, K as useElevation, V as VIcon, L as VDefaultsProvider } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const timeline$1 = [
  {
    image: "/images/imagePages/timeline/time_1.png",
    title: "pages.timeline.time_1.title",
    desc: "pages.timeline.time_1.desc"
  },
  {
    image: "/images/imagePages/timeline/time_2.png",
    title: "pages.timeline.time_2.title",
    desc: "pages.timeline.time_2.desc"
  },
  {
    title: "pages.timeline.time_3.title",
    desc: "pages.timeline.time_3.desc"
  },
  {
    image: "/images/imagePages/timeline/time_3.png",
    title: "pages.timeline.time_4.title",
    desc: "pages.timeline.time_4.desc"
  },
  {
    title: "pages.timeline.time_5.title",
    desc: "pages.timeline.time_5.desc"
  },
  {
    image: "/images/imagePages/timeline/time_4.png",
    title: "pages.timeline.time_6.title",
    desc: "pages.timeline.time_6.desc"
  },
  {
    image: "/images/imagePages/timeline/time_5.png",
    title: "pages.timeline.time_7.title",
    desc: "pages.timeline.time_7.desc"
  },
  {
    image: "/images/imagePages/timeline/time_6.png",
    title: "pages.timeline.time_8.title",
    desc: "pages.timeline.time_8.desc"
  },
  {
    image: "/images/imagePages/timeline/time_7.png",
    title: "pages.timeline.time_9.title",
    desc: "pages.timeline.time_9.desc"
  }
];
const makeVTimelineDividerProps = propsFactory({
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  icon: IconValue,
  iconColor: String,
  lineColor: String,
  ...makeComponentProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeElevationProps()
}, "VTimelineDivider");
const VTimelineDivider = genericComponent()({
  name: "VTimelineDivider",
  props: makeVTimelineDividerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props, "v-timeline-divider__dot");
    const {
      backgroundColorStyles,
      backgroundColorClasses
    } = useBackgroundColor(() => props.dotColor);
    const {
      roundedClasses
    } = useRounded(props, "v-timeline-divider__dot");
    const {
      elevationClasses
    } = useElevation(props);
    const {
      backgroundColorClasses: lineColorClasses,
      backgroundColorStyles: lineColorStyles
    } = useBackgroundColor(() => props.lineColor);
    useRender(() => createElementVNode("div", {
      "class": normalizeClass(["v-timeline-divider", {
        "v-timeline-divider--fill-dot": props.fillDot
      }, props.class]),
      "style": normalizeStyle(props.style)
    }, [createElementVNode("div", {
      "class": normalizeClass(["v-timeline-divider__before", lineColorClasses.value]),
      "style": normalizeStyle(lineColorStyles.value)
    }, null), !props.hideDot && createElementVNode("div", {
      "key": "dot",
      "class": normalizeClass(["v-timeline-divider__dot", elevationClasses.value, roundedClasses.value, sizeClasses.value]),
      "style": normalizeStyle(sizeStyles.value)
    }, [createElementVNode("div", {
      "class": normalizeClass(["v-timeline-divider__inner-dot", backgroundColorClasses.value, roundedClasses.value]),
      "style": normalizeStyle(backgroundColorStyles.value)
    }, [!slots.default ? createVNode(VIcon, {
      "key": "icon",
      "color": props.iconColor,
      "icon": props.icon,
      "size": props.size
    }, null) : createVNode(VDefaultsProvider, {
      "key": "icon-defaults",
      "disabled": !props.icon,
      "defaults": {
        VIcon: {
          color: props.iconColor,
          icon: props.icon,
          size: props.size
        }
      }
    }, slots.default)])]), createElementVNode("div", {
      "class": normalizeClass(["v-timeline-divider__after", lineColorClasses.value]),
      "style": normalizeStyle(lineColorStyles.value)
    }, null)]));
    return {};
  }
});
const makeVTimelineItemProps = propsFactory({
  density: String,
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  hideOpposite: {
    type: Boolean,
    default: void 0
  },
  icon: IconValue,
  iconColor: String,
  lineInset: [Number, String],
  side: {
    type: String,
    validator: (v) => v == null || ["start", "end"].includes(v)
  },
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps()
}, "VTimelineItem");
const VTimelineItem = genericComponent()({
  name: "VTimelineItem",
  props: makeVTimelineItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const dotSize = shallowRef(0);
    const dotRef = ref();
    watch(dotRef, (newValue) => {
      if (!newValue) return;
      dotSize.value = newValue.$el.querySelector(".v-timeline-divider__dot")?.getBoundingClientRect().width ?? 0;
    }, {
      flush: "post"
    });
    useRender(() => createElementVNode("div", {
      "class": normalizeClass(["v-timeline-item", {
        "v-timeline-item--fill-dot": props.fillDot,
        "v-timeline-item--side-start": props.side === "start",
        "v-timeline-item--side-end": props.side === "end"
      }, props.class]),
      "style": normalizeStyle([{
        "--v-timeline-dot-size": convertToUnit(dotSize.value),
        "--v-timeline-line-inset": props.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${convertToUnit(props.lineInset)})` : convertToUnit(0)
      }, props.style])
    }, [createElementVNode("div", {
      "class": "v-timeline-item__body",
      "style": normalizeStyle(dimensionStyles.value)
    }, [slots.default?.()]), createVNode(VTimelineDivider, {
      "ref": dotRef,
      "hideDot": props.hideDot,
      "icon": props.icon,
      "iconColor": props.iconColor,
      "size": props.size,
      "elevation": props.elevation,
      "dotColor": props.dotColor,
      "fillDot": props.fillDot,
      "rounded": props.rounded
    }, {
      default: slots.icon
    }), props.density !== "compact" && createElementVNode("div", {
      "class": "v-timeline-item__opposite"
    }, [!props.hideOpposite && slots.opposite?.()])]));
    return {};
  }
});
const makeVTimelineProps = propsFactory({
  align: {
    type: String,
    default: "center",
    validator: (v) => ["center", "start"].includes(v)
  },
  direction: {
    type: String,
    default: "vertical",
    validator: (v) => ["vertical", "horizontal"].includes(v)
  },
  justify: {
    type: String,
    default: "auto",
    validator: (v) => ["auto", "center"].includes(v)
  },
  side: {
    type: String,
    validator: (v) => v == null || ["start", "end"].includes(v)
  },
  lineThickness: {
    type: [String, Number],
    default: 2
  },
  lineColor: String,
  truncateLine: {
    type: String,
    validator: (v) => ["start", "end", "both"].includes(v)
  },
  ...pick(makeVTimelineItemProps({
    lineInset: 0
  }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VTimeline");
const VTimeline = genericComponent()({
  name: "VTimeline",
  props: makeVTimelineProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      rtlClasses
    } = useRtl();
    provideDefaults({
      VTimelineDivider: {
        lineColor: toRef(() => props.lineColor)
      },
      VTimelineItem: {
        density: toRef(() => props.density),
        dotColor: toRef(() => props.dotColor),
        fillDot: toRef(() => props.fillDot),
        hideOpposite: toRef(() => props.hideOpposite),
        iconColor: toRef(() => props.iconColor),
        lineColor: toRef(() => props.lineColor),
        lineInset: toRef(() => props.lineInset),
        size: toRef(() => props.size)
      }
    });
    const sideClasses = computed(() => {
      const side = props.side ? props.side : props.density !== "default" ? "end" : null;
      return side && `v-timeline--side-${side}`;
    });
    const truncateClasses = computed(() => {
      const classes = ["v-timeline--truncate-line-start", "v-timeline--truncate-line-end"];
      switch (props.truncateLine) {
        case "both":
          return classes;
        case "start":
          return classes[0];
        case "end":
          return classes[1];
        default:
          return null;
      }
    });
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-timeline", `v-timeline--${props.direction}`, `v-timeline--align-${props.align}`, `v-timeline--justify-${props.justify}`, truncateClasses.value, {
        "v-timeline--inset-line": !!props.lineInset
      }, themeClasses.value, densityClasses.value, sideClasses.value, rtlClasses.value, props.class]),
      "style": normalizeStyle([{
        "--v-timeline-line-thickness": convertToUnit(props.lineThickness)
      }, props.style])
    }, slots));
    return {};
  }
});
const _sfc_main = {
  __name: "timeline",
  __ssrInlineRender: true,
  setup(__props) {
    let { lang } = useLang();
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_gsap = resolveDirective("gsap");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-3!" }, _attrs))} data-v-217b957b><div class="relative z-50 p-4! my-22! bg-[#ffffff1a]! backdrop-blur-2xl" data-v-217b957b><div class="head text-center" data-v-217b957b><div class="absolute top-1/2 left-1/2 font-semibold text-lg sm:text-4xl -translate-y-1/2 -translate-x-1/2 tracking-widest" data-v-217b957b><h1 class="animate-pulse" data-v-217b957b>Timeline</h1><p class="text-xl sm:text-3xl font-extralight text-textsecondary!" data-v-217b957b>${ssrInterpolate(_ctx.$t("pages.timeline.subtitle"))}</p></div></div></div><div class="back" data-v-217b957b></div>`);
      _push(ssrRenderComponent(VTimeline, {
        align: "start",
        density: _ctx.$vuetify.display.smAndDown ? "comfortable" : void 0,
        class: "mb-6!"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(timeline$1), (time, i) => {
              _push2(ssrRenderComponent(VTimelineItem, {
                key: i,
                "dot-color": "secondary!",
                size: _ctx.$vuetify.display.smAndDown ? "x-small" : "small"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div${ssrRenderAttrs(mergeProps({
                      class: `w-full max-w-[500px] sm:max-w-[420px] md:max-w-[480px] backdrop-blur-2xl bg-textsecondary dark:bg-[#ffffff1a] px-4! py-6! rounded-bl-4xl rounded-tr-4xl ${unref(lang) === "ar" ? "text-end!" : "text-start!"}`
                    }, ssrGetDirectiveProps(_ctx, _directive_gsap, {
                      duration: 1.5,
                      // مدة أطول من default
                      stagger: 0.6
                      // كل عنصر يتأخر عن اللي قبله 0.3s
                    }, void 0, {
                      entrance: true,
                      "slide-left": true,
                      stagger: true
                    })))} data-v-217b957b${_scopeId2}>`);
                    if (time.image) {
                      _push3(`<img${ssrRenderAttr("src", time.image)}${ssrRenderAttr("alt", _ctx.$t(time.title))} class="mb-8!" data-v-217b957b${_scopeId2}>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<h1 class="text-primaryTwo! dark:text-secondary! text-2xl font-semibold mb-4" data-v-217b957b${_scopeId2}>${ssrInterpolate(_ctx.$t(time.title))}</h1><p class="text-textmain dark:text-textsecondary sm:text-lg" data-v-217b957b${_scopeId2}>${ssrInterpolate(_ctx.$t(time.desc))}</p></div>`);
                  } else {
                    return [
                      withDirectives((openBlock(), createBlock("div", {
                        class: `w-full max-w-[500px] sm:max-w-[420px] md:max-w-[480px] backdrop-blur-2xl bg-textsecondary dark:bg-[#ffffff1a] px-4! py-6! rounded-bl-4xl rounded-tr-4xl ${unref(lang) === "ar" ? "text-end!" : "text-start!"}`
                      }, [
                        time.image ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: time.image,
                          alt: _ctx.$t(time.title),
                          class: "mb-8!"
                        }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                        createVNode("h1", { class: "text-primaryTwo! dark:text-secondary! text-2xl font-semibold mb-4" }, toDisplayString(_ctx.$t(time.title)), 1),
                        createVNode("p", { class: "text-textmain dark:text-textsecondary sm:text-lg" }, toDisplayString(_ctx.$t(time.desc)), 1)
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
                            "slide-left": true,
                            stagger: true
                          }
                        ]
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(timeline$1), (time, i) => {
                return openBlock(), createBlock(VTimelineItem, {
                  key: i,
                  "dot-color": "secondary!",
                  size: _ctx.$vuetify.display.smAndDown ? "x-small" : "small"
                }, {
                  default: withCtx(() => [
                    withDirectives((openBlock(), createBlock("div", {
                      class: `w-full max-w-[500px] sm:max-w-[420px] md:max-w-[480px] backdrop-blur-2xl bg-textsecondary dark:bg-[#ffffff1a] px-4! py-6! rounded-bl-4xl rounded-tr-4xl ${unref(lang) === "ar" ? "text-end!" : "text-start!"}`
                    }, [
                      time.image ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: time.image,
                        alt: _ctx.$t(time.title),
                        class: "mb-8!"
                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                      createVNode("h1", { class: "text-primaryTwo! dark:text-secondary! text-2xl font-semibold mb-4" }, toDisplayString(_ctx.$t(time.title)), 1),
                      createVNode("p", { class: "text-textmain dark:text-textsecondary sm:text-lg" }, toDisplayString(_ctx.$t(time.desc)), 1)
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
                          "slide-left": true,
                          stagger: true
                        }
                      ]
                    ])
                  ]),
                  _: 2
                }, 1032, ["size"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collections/timeline.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const timeline = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-217b957b"]]);

export { timeline as default };
//# sourceMappingURL=timeline-Y-u0ZYrg.mjs.map
