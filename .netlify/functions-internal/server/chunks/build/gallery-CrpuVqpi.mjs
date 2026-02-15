import { mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, computed, h, withDirectives, normalizeStyle, normalizeClass, ref, capitalize, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { l as useNuxtApp, g as genericComponent, p as propsFactory, e as useDimension, n as useProxiedModel, f as useRender, M as MaybeTransition, _ as __nuxt_component_0$1, m as makeTagProps, i as makeComponentProps, o as makeTransitionProps, h as makeDimensionProps, k as breakpoints } from './server.mjs';
import { I as Intersect } from './index-Cu8i49H1.mjs';
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

const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();
const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    const offsetKey = "offset" + capitalize(val);
    props[offsetKey] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const orderProps = (() => {
  return breakpoints.reduce((props, val) => {
    const orderKey = "order" + capitalize(val);
    props[orderKey] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const propMap$1 = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps)
};
function breakpointClass$1(type, prop, val) {
  let className = type;
  if (val == null || val === false) {
    return void 0;
  }
  if (prop) {
    const breakpoint = prop.replace(type, "");
    className += `-${breakpoint}`;
  }
  if (type === "col") {
    className = "v-" + className;
  }
  if (type === "col" && (val === "" || val === true)) {
    return className.toLowerCase();
  }
  className += `-${val}`;
  return className.toLowerCase();
}
const ALIGN_SELF_VALUES = ["auto", "start", "end", "center", "baseline", "stretch"];
const makeVColProps = propsFactory({
  cols: {
    type: [Boolean, String, Number],
    default: false
  },
  ...breakpointProps,
  offset: {
    type: [String, Number],
    default: null
  },
  ...offsetProps,
  order: {
    type: [String, Number],
    default: null
  },
  ...orderProps,
  alignSelf: {
    type: String,
    default: null,
    validator: (str) => ALIGN_SELF_VALUES.includes(str)
  },
  ...makeComponentProps(),
  ...makeTagProps()
}, "VCol");
const VCol = genericComponent()({
  name: "VCol",
  props: makeVColProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const classes = computed(() => {
      const classList = [];
      let type;
      for (type in propMap$1) {
        propMap$1[type].forEach((prop) => {
          const value = props[prop];
          const className = breakpointClass$1(type, prop, value);
          if (className) classList.push(className);
        });
      }
      const hasColClasses = classList.some((className) => className.startsWith("v-col-"));
      classList.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !hasColClasses || !props.cols,
        [`v-col-${props.cols}`]: props.cols,
        [`offset-${props.offset}`]: props.offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      return classList;
    });
    return () => h(props.tag, {
      class: [classes.value, props.class],
      style: props.style
    }, slots.default?.());
  }
});
const ALIGNMENT = ["start", "end", "center"];
const SPACE = ["space-between", "space-around", "space-evenly"];
function makeRowProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    const prefixKey = prefix + capitalize(val);
    props[prefixKey] = def();
    return props;
  }, {});
}
const ALIGN_VALUES = [...ALIGNMENT, "baseline", "stretch"];
const alignValidator = (str) => ALIGN_VALUES.includes(str);
const alignProps = makeRowProps("align", () => ({
  type: String,
  default: null,
  validator: alignValidator
}));
const JUSTIFY_VALUES = [...ALIGNMENT, ...SPACE];
const justifyValidator = (str) => JUSTIFY_VALUES.includes(str);
const justifyProps = makeRowProps("justify", () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));
const ALIGN_CONTENT_VALUES = [...ALIGNMENT, ...SPACE, "stretch"];
const alignContentValidator = (str) => ALIGN_CONTENT_VALUES.includes(str);
const alignContentProps = makeRowProps("alignContent", () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function breakpointClass(type, prop, val) {
  let className = classMap[type];
  if (val == null) {
    return void 0;
  }
  if (prop) {
    const breakpoint = prop.replace(type, "");
    className += `-${breakpoint}`;
  }
  className += `-${val}`;
  return className.toLowerCase();
}
const makeVRowProps = propsFactory({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: alignValidator
  },
  ...alignProps,
  justify: {
    type: String,
    default: null,
    validator: justifyValidator
  },
  ...justifyProps,
  alignContent: {
    type: String,
    default: null,
    validator: alignContentValidator
  },
  ...alignContentProps,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VRow");
const VRow = genericComponent()({
  name: "VRow",
  props: makeVRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const classes = computed(() => {
      const classList = [];
      let type;
      for (type in propMap) {
        propMap[type].forEach((prop) => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }
      classList.push({
        "v-row--no-gutters": props.noGutters,
        "v-row--dense": props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      return classList;
    });
    return () => h(props.tag, {
      class: ["v-row", classes.value, props.class],
      style: props.style
    }, slots.default?.());
  }
});
const imageLayout = [
  {
    cols: 6,
    name: "Tutankhamun's Mask",
    src: "/images/pharaonic_artifacts/pharaonic1.jpg"
  },
  { cols: 6, name: "Ramses II", src: "/images/royal_mummies/royal_1.jpg" },
  {
    cols: 3,
    name: "Faience collar necklace",
    src: "/images/imagePages/gallery/gallery_7.webp"
  },
  {
    cols: 3,
    name: "Statue of King Khafre",
    src: "/images/pharaonic_artifacts/pharaonic2.jpg"
  },
  {
    cols: 3,
    name: "Bust of Queen Nefertiti",
    src: "/images/pharaonic_artifacts/pharaonic3.jpg"
  },
  {
    cols: 3,
    name: "Menkaure Triad",
    src: "/images/pharaonic_artifacts/pharaonic4.jpeg"
  },
  {
    cols: 3,
    name: "Statue of Ra-Horus",
    src: "/images/pharaonic_artifacts/pharaonic5.jpg"
  },
  { cols: 3, name: "Amenhotep I", src: "/images/royal_mummies/royal_5.webp" },
  { cols: 6, name: " Thutmose III", src: "/images/royal_mummies/royal_3.jpg" },
  {
    cols: 3,
    name: "Seated statue of Queen Isis dedicated by her son King Tuthmosis III",
    src: "/images/imagePages/gallery/gallery_47.jpg"
  },
  {
    cols: 3,
    name: "Statue of Amenhotep II holding offering table",
    src: "/images/imagePages/gallery/gallery_48.jpg"
  },
  {
    cols: 3,
    name: "Diorite Statue of Tuthmose III, Kneeling with Nu-Jars in his Hands",
    src: "/images/imagePages/gallery/gallery_49.jpg"
  },
  {
    cols: 3,
    name: "Statue of Tuthmosis III, trampling nine bows.",
    src: "/images/imagePages/gallery/gallery_50.jpg"
  },
  {
    cols: 6,
    name: "Yuya mummy-shaped sarcophagus",
    src: "/images/imagePages/gallery/gallery_51.jpg"
  },
  {
    cols: 6,
    name: "The first wooden shrine of Tutankhamun",
    src: "/images/imagePages/gallery/gallery_52.jpg"
  },
  {
    cols: 3,
    name: "'Tetisheri Stela' - Limestone Round-Topped Stela of Tetisheri with Ahmose I",
    src: "/images/imagePages/gallery/gallery_53.jpg"
  },
  {
    cols: 3,
    name: "Painted Limestone Funerary Stela of Amenemhat with His Wife Iy, and Intef and his wife Hepyt.",
    src: "/images/imagePages/gallery/gallery_54.jpg"
  },
  {
    cols: 6,
    name: "The first wooden shrine of Tutankhamun",
    src: "/images/imagePages/gallery/gallery_55.jpg"
  },
  {
    cols: 6,
    name: "Wooden drawing board with a figure of Thutmose III",
    src: "/images/imagePages/gallery/gallery_13.webp"
  },
  {
    cols: 3,
    name: "Head of a standing figure of King Amasis",
    src: "/images/imagePages/gallery/gallery_14.webp"
  },
  {
    cols: 3,
    name: "Middle Kingdom",
    src: "/images/imagePages/timeline/time_3.png"
  },
  {
    cols: 4,
    name: "Amulet",
    src: "/images/imagePages/gallery/gallery_15.webp"
  },
  {
    cols: 8,
    name: "Coffin of Tpaeus",
    src: "/images/imagePages/gallery/gallery_16.webp"
  },
  {
    cols: 6,
    name: "Statue of the goddess Bastet",
    src: "/images/imagePages/gallery/gallery_1.webp"
  },
  {
    cols: 6,
    name: "Upper arm bracelet of Queen Amanishakheto",
    src: "/images/imagePages/gallery/gallery_2.webp"
  },
  {
    cols: 4,
    name: "Mummification Process Stone Panel",
    src: "/images/pharaonic_artifacts/pharaonic8.jpg "
  },
  {
    cols: 8,
    name: "Religious Manuscripts",
    src: "/images/pharaonic_artifacts/pharaonic21.jpg"
  },
  {
    cols: 3,
    name: "Man Before a False Door, Tomb of Nebamun",
    src: "/images/imagePages/gallery/gallery_8.webp"
  },
  {
    cols: 3,
    name: "Faience vessel decorated with a depiction of the god Heh",
    src: "/images/imagePages/gallery/gallery_9.webp"
  },
  {
    cols: 3,
    name: "Rock inscription of King Zanakht",
    src: "/images/imagePages/gallery/gallery_10.webp"
  },
  {
    cols: 3,
    name: "Fragment of painted plaster from the tomb of Sebekhotep",
    src: "/images/imagePages/gallery/gallery_11.webp"
  },
  {
    cols: 6,
    name: "Royal Funerary Rituals",
    src: "/images/pharaonic_artifacts/pharaonic31.jpg"
  },
  { cols: 6, name: "Seti I", src: "/images/royal_mummies/royal_2.webp" },
  {
    cols: 12,
    name: "Wondrous Tales from the of the Westcar Papyrus (hieratic)",
    src: "/images/imagePages/gallery/gallery_17.webp"
  },
  {
    cols: 3,
    name: "Nebamun hunting in the marshes, fragment of a scene from the",
    src: "/images/imagePages/gallery/gallery_3.webp"
  },
  {
    cols: 3,
    name: "Shrine stela of Amenhotep III and Queen Tiye",
    src: "/images/imagePages/gallery/gallery_4.webp"
  },
  {
    cols: 3,
    name: "Bowl with basket-like handles and female heads on the rim",
    src: "/images/imagePages/gallery/gallery_5.webp"
  },
  {
    cols: 3,
    name: "The Wilbour Plaque",
    src: "/images/imagePages/gallery/gallery_6.webp"
  },
  {
    cols: 8,
    name: "Inner coffin and mummy board of Meritamun",
    src: "/images/imagePages/gallery/gallery_12.jpg"
  },
  {
    cols: 4,
    name: "Inlay, falcon hieroglyph",
    src: "/images/imagePages/gallery/gallery_18.webp"
  },
  {
    cols: 4,
    name: "Gold pectoral of a hovering falcon",
    src: "/images/imagePages/gallery/gallery_19.webp"
  },
  {
    cols: 4,
    name: "Relief of Queen Nefertiti Kissing One of Her Daughters",
    src: "/images/imagePages/gallery/gallery_20.webp"
  },
  {
    cols: 4,
    name: "Relief Fragment",
    src: "/images/imagePages/gallery/gallery_21.webp"
  },
  //
  {
    cols: 3,
    name: "Statuette of Seated Man Clasping a Lotus Blossom",
    src: "/images/imagePages/gallery/gallery_22.webp"
  },
  {
    cols: 3,
    name: "Kneeling figure of Nacht-Hor-heb",
    src: "/images/imagePages/gallery/gallery_23.webp"
  },
  {
    cols: 3,
    name: "Statue of the priest Henat",
    src: "/images/imagePages/gallery/gallery_24.webp"
  },
  {
    cols: 3,
    name: "Egyptian Stele with semicircular top",
    src: "/images/imagePages/gallery/gallery_25.webp"
  },
  {
    cols: 4,
    name: "Limestone stela of Heqaib",
    src: "/images/imagePages/gallery/gallery_26.webp"
  },
  {
    cols: 4,
    name: "Fineware painted cup",
    src: "/images/imagePages/gallery/gallery_27.webp"
  },
  {
    cols: 4,
    name: "Glazed steatite scaraboid",
    src: "/images/imagePages/gallery/gallery_28.webp"
  },
  {
    cols: 6,
    name: "Book of the Dead for the Priest of Bastet, Djoser",
    src: "/images/imagePages/gallery/gallery_29.jpg"
  },
  {
    cols: 6,
    name: "Statuette of seated Isis suckling Hours",
    src: "/images/imagePages/gallery/gallery_30.jpg"
  },
  {
    cols: 3,
    name: "Statue of Psametik Protected by goddess Hathor as a Cow",
    src: "/images/imagePages/gallery/gallery_31.jpg"
  },
  {
    cols: 6,
    name: "Fragment of pavement depicting ducks in papyrus marsh",
    src: "/images/imagePages/gallery/gallery_32.jpg"
  },
  {
    cols: 3,
    name: "Stelophorus Statue of Pashed Inscribed with BD 15, front, face detail",
    src: "/images/imagePages/gallery/gallery_33.webp"
  },
  {
    cols: 3,
    name: "Statue of Ramses III between Horus and Seth",
    src: "/images/imagePages/gallery/gallery_34.jpg"
  },
  {
    cols: 3,
    name: "Granodiorite Seated Statue of Sennefer, his Wife Senetnay and Daughter Mutnofret",
    src: "/images/imagePages/gallery/gallery_35.jpg"
  },
  {
    cols: 3,
    name: "Statue of Osiris, god of the Afterlife",
    src: "/images/imagePages/gallery/gallery_36.jpg"
  },
  {
    cols: 3,
    name: "Limestone Relief of Akhenaten, Nefertiti and Two Princesses Worshipping the Aten",
    src: "/images/imagePages/gallery/gallery_37.jpg"
  },
  {
    cols: 8,
    name: "Coffin of Akhenaten",
    src: "/images/imagePages/gallery/gallery_38.jpg"
  },
  {
    cols: 4,
    name: "Three Canopic Jars of Kiya with Human-headed Stopper",
    src: "/images/imagePages/gallery/gallery_39.jpg"
  },
  {
    cols: 3,
    name: "Head of princess, daughter of Akhenaten",
    src: "/images/imagePages/gallery/gallery_40.jpg"
  },
  {
    cols: 3,
    name: "Bust of Akhenaten, Amonhotep IV",
    src: "/images/imagePages/gallery/gallery_41.jpg"
  },
  {
    cols: 3,
    name: "Statue of Queen Tiye usurped by Henntawy",
    src: "/images/imagePages/gallery/gallery_42.jpg"
  },
  {
    cols: 3,
    name: "Statue of Queen Tiye usurped by Henntawy",
    src: "/images/imagePages/gallery/gallery_43.jpg"
  },
  {
    cols: 4,
    name: "Head from statuette of Queen Tiye",
    src: "/images/imagePages/gallery/gallery_44.jpg"
  },
  {
    cols: 4,
    name: "Seated Statue of Thutmose IV and His Mother, Tiaa",
    src: "/images/imagePages/gallery/gallery_45.jpeg"
  },
  {
    cols: 4,
    name: "Statue of Amenhotep II Protected by Meretseger",
    src: "/images/imagePages/gallery/gallery_46.jpg"
  },
  {
    cols: 3,
    name: "Head of Queen Hatshepsut",
    src: "/images/imagePages/gallery/gallery_56.jpg"
  },
  {
    cols: 3,
    name: "Colossal statuary group of Amenhotep III",
    src: "/images/imagePages/gallery/gallery_57.jpg"
  },
  {
    cols: 3,
    name: "Sedan chair of Queen Hetepheres",
    src: "/images/imagePages/gallery/gallery_58.jpg"
  },
  {
    cols: 3,
    name: "Guardian Statue of Tutankhamun",
    src: "/images/imagePages/gallery/gallery_59.jpg"
  },
  {
    cols: 3,
    name: "Container for canopic vases",
    src: "/images/imagePages/gallery/gallery_60.jpg"
  },
  {
    cols: 9,
    name: "Container for canopic vases",
    src: "/images/imagePages/gallery/gallery_61.jpg"
  },
  //
  {
    cols: 6,
    name: "Narmer Palette",
    src: "/images/imagePages/gallery/gallery_62.jpg"
  },
  {
    cols: 3,
    name: "Triad of Menkaure between Hathor and the Theban god",
    src: "/images/imagePages/gallery/gallery_63.jpg"
  },
  {
    cols: 3,
    name: "Scribe statue CG 36",
    src: "/images/imagePages/gallery/gallery_64.jpg"
  }
];
const _sfc_main$1 = {
  __name: "UIDialogGallery",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    ref({});
    let { $emitter } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/DialogGallery.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const makeVLazyProps = propsFactory({
  modelValue: Boolean,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps(),
  ...makeTransitionProps({
    transition: "fade-transition"
  })
}, "VLazy");
const VLazy = genericComponent()({
  name: "VLazy",
  directives: {
    vIntersect: Intersect
  },
  props: makeVLazyProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const isActive = useProxiedModel(props, "modelValue");
    function onIntersect(isIntersecting) {
      if (isActive.value) return;
      isActive.value = isIntersecting;
    }
    useRender(() => withDirectives(createVNode(props.tag, {
      "class": normalizeClass(["v-lazy", props.class]),
      "style": normalizeStyle([dimensionStyles.value, props.style])
    }, {
      default: () => [isActive.value && createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [slots.default?.()]
      })]
    }), [[Intersect, {
      handler: onIntersect,
      options: props.options
    }, null]]));
    return {};
  }
});
const _sfc_main = {
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    let { $emitter } = useNuxtApp();
    function showDialoggallery(data) {
      $emitter.emit("openDialogGallery", data);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 my-32!" }, _attrs))}><div><h2 class="animate-pulse text-2xl md:text-4xl font-bold text-center text-primaryTwo dark:text-secondary mb-3">${ssrInterpolate(_ctx.$t("pages.galleryPage.title"))}</h2><p class="item text-center text-gray-600 max-w-2xl mx-auto mb-16!">${ssrInterpolate(_ctx.$t("pages.galleryPage.desc"))} - ${ssrInterpolate(unref(imageLayout).length)}</p></div><h1 class="text-textmain! dark:text-textsecondary! mb-4 font-semibold text-lg sm:text-2xl">${ssrInterpolate(_ctx.$t("pages.galleryPage.imageFullscreenHint"))}</h1>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(imageLayout), (image, imgIdx) => {
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                sm: "6",
                md: image.cols
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="overflow-hidden"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VLazy, {
                      "min-height": 280,
                      transition: "fade-transition"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.name)} class="w-full object-cover cursor-pointer h-[500px] md:h-[400px] hover:scale-110 duration-300"${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: image.src,
                              alt: image.name,
                              class: "w-full object-cover cursor-pointer h-[500px] md:h-[400px] hover:scale-110 duration-300",
                              onClick: ($event) => showDialoggallery(image)
                            }, null, 8, ["src", "alt", "onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "overflow-hidden" }, [
                        createVNode(VLazy, {
                          "min-height": 280,
                          transition: "fade-transition"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: image.src,
                              alt: image.name,
                              class: "w-full object-cover cursor-pointer h-[500px] md:h-[400px] hover:scale-110 duration-300",
                              onClick: ($event) => showDialoggallery(image)
                            }, null, 8, ["src", "alt", "onClick"])
                          ]),
                          _: 2
                        }, 1024)
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(imageLayout), (image, imgIdx) => {
                return openBlock(), createBlock(VCol, {
                  key: imgIdx,
                  cols: "12",
                  sm: "6",
                  md: image.cols
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "overflow-hidden" }, [
                      createVNode(VLazy, {
                        "min-height": 280,
                        transition: "fade-transition"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: image.src,
                            alt: image.name,
                            class: "w-full object-cover cursor-pointer h-[500px] md:h-[400px] hover:scale-110 duration-300",
                            onClick: ($event) => showDialoggallery(image)
                          }, null, 8, ["src", "alt", "onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]),
                  _: 2
                }, 1032, ["md"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=gallery-CrpuVqpi.mjs.map
