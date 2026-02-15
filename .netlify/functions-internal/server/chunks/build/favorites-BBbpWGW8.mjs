import { resolveDirective, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { B as BtnShowDeteils, _ as _sfc_main$1 } from './BtnFavorites-B9fHbHbR.mjs';
import { q as useFavoritesStore, V as VIcon } from './server.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = {
  __name: "favorites",
  __ssrInlineRender: true,
  setup(__props) {
    let store = useFavoritesStore();
    let truncateWords = (text, limit = 14) => {
      let words = text.split(/\s+/);
      return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_gsap = resolveDirective("gsap");
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="container mx-auto px-4 my-32!"><div${ssrRenderAttrs(mergeProps({ class: "cursor-pointer" }, ssrGetDirectiveProps(_ctx, _directive_gsap, void 0, void 0, {
        magnetic: true,
        strong: true
      })))}><h2 class="animate-pulse text-2xl md:text-4xl font-bold text-center text-primaryTwo dark:text-secondary mb-3">${ssrInterpolate(_ctx.$t("pages.temples.templesTitle"))}</h2><p class="item text-center text-gray-600 max-w-2xl mx-auto mb-16!">${ssrInterpolate(_ctx.$t("pages.temples.templesSubtitle"))}</p></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(unref(store).favorites, (temp) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: temp.name,
          class: "rounded-2xl shadow-sm dark:shadow-gray-300/20 overflow-hidden hover:-translate-y-1 transition-all cursor-pointer"
        }, ssrGetDirectiveProps(_ctx, _directive_gsap, {
          duration: 1.5,
          // مدة أطول من default
          stagger: 0.6
          // كل عنصر يتأخر عن اللي قبله 0.3s
        }, void 0, {
          entrance: true,
          "slide-left": true,
          stagger: true
        })))}><div class="overflow-hidden"><img${ssrRenderAttr("src", temp.image)}${ssrRenderAttr("alt", _ctx.$t(temp.name))} class="w-full h-60 object-cover hover:scale-105 transition-all duration-300" loading="lazy"></div><div class="p-5! pb-2!"><h3 class="text-lg font-semibold mb-2 text-primaryTwo dark:text-secondary">${ssrInterpolate(_ctx.$t(temp.name))}</h3><p class="flex items-center gap-2 text-sm text-gray-500 mt-1">`);
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
        _push(` ${ssrInterpolate(_ctx.$t(temp.period))}</p><p class="flex items-center gap-2 text-sm text-gray-500 mt-1">`);
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
        _push(` ${ssrInterpolate(_ctx.$t(temp.location))}</p><p class="text-gray-600 dark:text-gray-400 text-[15px] mb-4 line-clamp-3">${ssrInterpolate(unref(truncateWords)(_ctx.$t(temp.description)))}</p></div><div class="flex gap-3 items-center px-5! pb-4!">`);
        _push(ssrRenderComponent(BtnShowDeteils, { data: temp }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$1, { item: temp }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/favorites.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=favorites-BBbpWGW8.mjs.map
