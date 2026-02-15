import _sfc_main$2 from './AppNav-DuP9Yheb.mjs';
import _sfc_main$3 from './AppFooter-CQXf8LHU.mjs';
import { ref, mergeProps, withCtx, unref, createVNode, renderSlot, createBlock, createCommentVNode, openBlock, createElementVNode, normalizeStyle, normalizeClass, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { au as useRoute$1, g as genericComponent, p as propsFactory, ar as createLayout, e as useDimension, f as useRender, at as useLayout, a as useLang, _ as __nuxt_component_0$1, as as makeLayoutProps, h as makeDimensionProps, i as makeComponentProps, m as makeTagProps } from './server.mjs';
import { u as useDrawer, n as navLinks } from './useDrawer-C1aMvQWA.mjs';
import { j as useSsrBoot } from './VMenu-CPLb6S0I.mjs';
import './nuxt-link-XQJOkYip.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue-router';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import './VDivider-CgNue33A.mjs';
import 'pinia';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './index-Cu8i49H1.mjs';

const _sfc_main$1 = {
  __name: "UIDrawerLink",
  __ssrInlineRender: true,
  setup(__props) {
    useLang();
    useDrawer();
    const openGroups = ref([]);
    openGroups.value = navLinks.map(() => false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/DrawerLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const makeVLayoutProps = propsFactory({
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeLayoutProps()
}, "VLayout");
const VLayout = genericComponent()({
  name: "VLayout",
  props: makeVLayoutProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      layoutClasses,
      layoutStyles,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout(props);
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => createElementVNode("div", {
      "ref": layoutRef,
      "class": normalizeClass([layoutClasses.value, props.class]),
      "style": normalizeStyle([dimensionStyles.value, layoutStyles.value, props.style])
    }, [slots.default?.()]));
    return {
      getLayoutItem,
      items
    };
  }
});
const makeVMainProps = propsFactory({
  scrollable: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps({
    tag: "main"
  })
}, "VMain");
const VMain = genericComponent()({
  name: "VMain",
  props: makeVMainProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      mainStyles
    } = useLayout();
    const {
      ssrBootStyles
    } = useSsrBoot();
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-main", {
        "v-main--scrollable": props.scrollable
      }, props.class]),
      "style": normalizeStyle([mainStyles.value, ssrBootStyles.value, dimensionStyles.value, props.style])
    }, {
      default: () => [props.scrollable ? createElementVNode("div", {
        "class": "v-main__scroller"
      }, [slots.default?.()]) : slots.default?.()]
    }));
    return {};
  }
});
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    let scrollclint = ref(null);
    let route = useRoute$1();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNav = _sfc_main$2;
      const _component_AppFooter = _sfc_main$3;
      _push(ssrRenderComponent(VLayout, mergeProps({ class: "relative min-h-screen!" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(scrollclint) >= 130 || unref(route).path != "/" && unref(route).path != "/en" && unref(route).path != "/ar") {
              _push2(ssrRenderComponent(_component_AppNav, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    createVNode(_sfc_main$1),
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_AppFooter, null, null, _parent2, _scopeId));
          } else {
            return [
              unref(scrollclint) >= 130 || unref(route).path != "/" && unref(route).path != "/en" && unref(route).path != "/ar" ? (openBlock(), createBlock(_component_AppNav, { key: 0 })) : createCommentVNode("", true),
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1),
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }),
              createVNode(_component_AppFooter)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CIdFnA0O.mjs.map
