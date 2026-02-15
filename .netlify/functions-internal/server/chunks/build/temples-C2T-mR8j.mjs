import { resolveDirective, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { B as BtnShowDeteils, _ as _sfc_main$1 } from './BtnFavorites-B9fHbHbR.mjs';
import { V as VIcon } from './server.mjs';
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

const temples = [
  {
    id: "temples-1",
    name: "pages.temples.pharaonic1.name",
    period: "pages.temples.pharaonic1.period",
    location: "pages.temples.pharaonic1.location",
    description: "pages.temples.pharaonic1.description",
    desc2: "pages.temples.pharaonic1.desc2",
    material: "pages.temples.pharaonic1.material",
    usage: "pages.temples.pharaonic1.usage",
    themes: "pages.temples.pharaonic1.themes",
    importance: "pages.temples.pharaonic1.importance",
    image: "/images/pharaonic_artifacts/pharaonic10.webp"
  },
  {
    id: "temples-2",
    name: "pages.temples.pharaonic2.name",
    period: "pages.temples.pharaonic2.period",
    location: "pages.temples.pharaonic2.location",
    description: "pages.temples.pharaonic2.description",
    desc2: "pages.temples.pharaonic2.desc2",
    material: "pages.temples.pharaonic2.material",
    usage: "pages.temples.pharaonic2.usage",
    themes: "pages.temples.pharaonic2.themes",
    importance: "pages.temples.pharaonic2.importance",
    image: "/images/pharaonic_artifacts/pharaonic11.webp"
  },
  {
    id: "temples-3",
    name: "pages.temples.pharaonic3.name",
    period: "pages.temples.pharaonic3.period",
    location: "pages.temples.pharaonic3.location",
    description: "pages.temples.pharaonic3.description",
    desc2: "pages.temples.pharaonic3.desc2",
    material: "pages.temples.pharaonic3.material",
    usage: "pages.temples.pharaonic3.usage",
    themes: "pages.temples.pharaonic3.themes",
    importance: "pages.temples.pharaonic3.importance",
    image: "/images/pharaonic_artifacts/pharaonic13.avif"
  },
  {
    id: "temples-4",
    name: "pages.temples.pharaonic4.name",
    period: "pages.temples.pharaonic4.period",
    location: "pages.temples.pharaonic4.location",
    description: "pages.temples.pharaonic4.description",
    desc2: "pages.temples.pharaonic4.desc2",
    material: "pages.temples.pharaonic4.material",
    usage: "pages.temples.pharaonic4.usage",
    themes: "pages.temples.pharaonic4.themes",
    importance: "pages.temples.pharaonic4.importance",
    image: "/images/pharaonic_artifacts/pharaonic14.jpg"
  },
  {
    id: "temples-5",
    name: "pages.temples.pharaonic5.name",
    period: "pages.temples.pharaonic5.period",
    location: "pages.temples.pharaonic5.location",
    description: "pages.temples.pharaonic5.description",
    desc2: "pages.temples.pharaonic5.desc2",
    material: "pages.temples.pharaonic5.material",
    usage: "pages.temples.pharaonic5.usage",
    themes: "pages.temples.pharaonic5.themes",
    importance: "pages.temples.pharaonic5.importance",
    image: "/images/pharaonic_artifacts/pharaonic15.jpg"
  },
  {
    id: "temples-6",
    name: "pages.temples.pharaonic6.name",
    period: "pages.temples.pharaonic6.period",
    location: "pages.temples.pharaonic6.location",
    description: "pages.temples.pharaonic6.description",
    desc2: "pages.temples.pharaonic6.desc2",
    material: "pages.temples.pharaonic6.material",
    usage: "pages.temples.pharaonic6.usage",
    themes: "pages.temples.pharaonic6.themes",
    importance: "pages.temples.pharaonic6.importance",
    image: "/images/pharaonic_artifacts/pharaonic16.webp"
  },
  {
    id: "temples-7",
    name: "pages.temples.pharaonic7.name",
    period: "pages.temples.pharaonic7.period",
    location: "pages.temples.pharaonic7.location",
    description: "pages.temples.pharaonic7.description",
    desc2: "pages.temples.pharaonic7.desc2",
    material: "pages.temples.pharaonic7.material",
    usage: "pages.temples.pharaonic7.usage",
    themes: "pages.temples.pharaonic7.themes",
    importance: "pages.temples.pharaonic7.importance",
    image: "/images/imagePages/temples/pharaonic7.jpg"
  },
  {
    id: "temples-8",
    name: "pages.temples.pharaonic8.name",
    period: "pages.temples.pharaonic8.period",
    location: "pages.temples.pharaonic8.location",
    description: "pages.temples.pharaonic8.description",
    desc2: "pages.temples.pharaonic8.desc2",
    material: "pages.temples.pharaonic8.material",
    usage: "pages.temples.pharaonic8.usage",
    themes: "pages.temples.pharaonic8.themes",
    importance: "pages.temples.pharaonic8.importance",
    image: "/images/imagePages/temples/pharaonic8.jpg"
  },
  {
    id: "temples-9",
    name: "pages.temples.pharaonic9.name",
    period: "pages.temples.pharaonic9.period",
    location: "pages.temples.pharaonic9.location",
    description: "pages.temples.pharaonic9.description",
    desc2: "pages.temples.pharaonic9.desc2",
    material: "pages.temples.pharaonic9.material",
    usage: "pages.temples.pharaonic9.usage",
    themes: "pages.temples.pharaonic9.themes",
    importance: "pages.temples.pharaonic9.importance",
    image: "/images/imagePages/temples/pharaonic9.webp"
  },
  {
    id: "temples-10",
    name: "pages.temples.pharaonic10.name",
    period: "pages.temples.pharaonic10.period",
    location: "pages.temples.pharaonic10.location",
    description: "pages.temples.pharaonic10.description",
    desc2: "pages.temples.pharaonic10.desc2",
    material: "pages.temples.pharaonic10.material",
    usage: "pages.temples.pharaonic10.usage",
    themes: "pages.temples.pharaonic10.themes",
    importance: "pages.temples.pharaonic10.importance",
    image: "/images/imagePages/temples/pharaonic10.jpg"
  }
];
const _sfc_main = {
  __name: "temples",
  __ssrInlineRender: true,
  setup(__props) {
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
      ssrRenderList(unref(temples), (temp) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/relics/temples.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=temples-C2T-mR8j.mjs.map
