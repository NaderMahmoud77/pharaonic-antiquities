import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { q as useFavoritesStore, l as useNuxtApp, c as VBtn, V as VIcon } from './server.mjs';
import { unref, withCtx, createVNode, useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$1 = {
  __name: "UIBtnShowDeteils",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object
    }
  },
  setup(__props) {
    let { $emitter } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-461907b0><button class="group/button text-textsecondary! relative inline-flex items-center justify-center overflow-hidden rounded-md bg-textmain! dark:bg-gray-800/30! backdrop-blur-lg px-6 py-2 text-base font-semibold text- transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border! border-white/20" data-v-461907b0><span class="text-lg" data-v-461907b0>${ssrInterpolate(_ctx.$t("all.detailsBtn"))}</span><div class="absolute inset-0 flex h-full w-full justify-center transform-[skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:transform-[skew(-13deg)_translateX(100%)]" data-v-461907b0><div class="relative h-full w-10 bg-white/20" data-v-461907b0></div></div></button></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/BtnShowDeteils.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BtnShowDeteils = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-461907b0"]]);
const _sfc_main = {
  __name: "UIBtnFavorites",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object
    }
  },
  setup(__props) {
    let props = __props;
    const favorites = useFavoritesStore();
    let { $emitter } = useNuxtApp();
    function showSnackFavorite(data) {
      $emitter.emit("snackFavorite", data);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VBtn, {
        onClick: ($event) => (unref(favorites).toggleFavorite(unref(props).item), showSnackFavorite(unref(props).item)),
        variant: "tonal",
        height: "42",
        "min-width": "0",
        class: "px-4 hover:scale-110! transition! duration-300!"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              class: [
                unref(favorites).isFavorite(unref(props).item.id) ? "mdi mdi-heart text-red" : "mdi mdi-heart-outline",
                "text-red"
              ],
              size: "18"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, {
                class: [
                  unref(favorites).isFavorite(unref(props).item.id) ? "mdi mdi-heart text-red" : "mdi mdi-heart-outline",
                  "text-red"
                ],
                size: "18"
              }, null, 8, ["class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/BtnFavorites.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { BtnShowDeteils as B, _sfc_main as _ };
//# sourceMappingURL=BtnFavorites-B9fHbHbR.mjs.map
