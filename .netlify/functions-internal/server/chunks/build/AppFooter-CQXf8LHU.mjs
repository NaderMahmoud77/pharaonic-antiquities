import { resolveDirective, mergeProps, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, createTextVNode, ref, shallowRef, computed, toRef, watchEffect, normalizeStyle, normalizeClass, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { g as genericComponent, c as VBtn, p as propsFactory, s as provideTheme, H as useBackgroundColor, a7 as useBorder, K as useElevation, J as useRounded, w as useResizeObserver, a1 as useToggleScope, aw as useLayoutItem, f as useRender, N as convertToUnit, z as makeThemeProps, m as makeTagProps, B as makeRoundedProps, av as makeLayoutItemProps, C as makeElevationProps, i as makeComponentProps, E as makeBorderProps } from './server.mjs';
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

const makeVFooterProps = propsFactory({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "footer"
  }),
  ...makeThemeProps()
}, "VFooter");
const VFooter = genericComponent()({
  name: "VFooter",
  props: makeVFooterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const layoutItemStyles = ref();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const autoHeight = shallowRef(32);
    const {
      resizeRef
    } = useResizeObserver();
    const height = computed(() => props.height === "auto" ? autoHeight.value : parseInt(props.height, 10));
    useToggleScope(() => props.app, () => {
      const layout = useLayoutItem({
        id: props.name,
        order: computed(() => parseInt(props.order, 10)),
        position: toRef(() => "bottom"),
        layoutSize: height,
        elementSize: computed(() => props.height === "auto" ? void 0 : height.value),
        active: toRef(() => props.app),
        absolute: toRef(() => props.absolute)
      });
      watchEffect(() => {
        layoutItemStyles.value = layout.layoutItemStyles.value;
      });
    });
    useRender(() => createVNode(props.tag, {
      "ref": resizeRef,
      "class": normalizeClass(["v-footer", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, props.class]),
      "style": normalizeStyle([backgroundColorStyles.value, props.app ? layoutItemStyles.value : {
        height: convertToUnit(props.height)
      }, props.style])
    }, slots));
    return {};
  }
});
const _sfc_main = {
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_gsap = resolveDirective("gsap");
      _push(ssrRenderComponent(VFooter, mergeProps({
        app: "",
        absolute: "",
        class: "text-center d-flex flex-column ga-2 py-4 bg-[#F2F2F2]! dark:bg-[#12083a]/80! text-textmain! dark:text-white!",
        color: "indigo-lighten-1"
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_gsap, {
        duration: 1.5,
        stagger: 1,
        threshold: 0.3
      }, void 0, {
        entrance: true,
        "slide-top": true,
        stagger: true
      })), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex ga-3"${_scopeId}><!--[-->`);
            ssrRenderList(icons, (icon) => {
              _push2(ssrRenderComponent(VBtn, {
                key: icon,
                icon,
                density: "comfortable",
                variant: "text"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(VDivider, {
              class: "my-2",
              thickness: "2",
              width: "50"
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-caption font-semibold! opacity-70 text-[18px]!"${_scopeId}>${ssrInterpolate(_ctx.$t("footer.desc"))}</div>`);
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} — <strong${_scopeId}>Nader</strong></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex ga-3" }, [
                (openBlock(), createBlock(Fragment, null, renderList(icons, (icon) => {
                  return createVNode(VBtn, {
                    key: icon,
                    icon,
                    density: "comfortable",
                    variant: "text"
                  }, null, 8, ["icon"]);
                }), 64))
              ]),
              createVNode(VDivider, {
                class: "my-2",
                thickness: "2",
                width: "50"
              }),
              createVNode("div", { class: "text-caption font-semibold! opacity-70 text-[18px]!" }, toDisplayString(_ctx.$t("footer.desc")), 1),
              createVNode(VDivider),
              createVNode("div", null, [
                createTextVNode(toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " — ", 1),
                createVNode("strong", null, "Nader")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/AppFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AppFooter-CQXf8LHU.mjs.map
