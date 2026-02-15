import { ref, computed, resolveDirective, mergeProps, withCtx, createTextVNode, shallowRef, toRef, createVNode, normalizeStyle, normalizeClass, createElementVNode, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { B as BtnShowDeteils, _ as _sfc_main$1 } from './BtnFavorites-B9fHbHbR.mjs';
import { V as VIcon, g as genericComponent, p as propsFactory, n as useProxiedModel, r as useLocale, d as useRtl, s as provideTheme, t as useDisplay, v as provideDefaults, w as useResizeObserver, x as createRange, f as useRender, c as VBtn, y as makeVariantProps, z as makeThemeProps, m as makeTagProps, A as makeSizeProps, B as makeRoundedProps, C as makeElevationProps, D as makeDensityProps, i as makeComponentProps, E as makeBorderProps, I as IconValue, F as keyValues } from './server.mjs';
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

const royalTombs = [
  {
    id: "tombs-1",
    name: "pages.royal_tombs.tombs_1.name",
    owner: "pages.royal_tombs.tombs_1.owner",
    period: "pages.royal_tombs.tombs_1.period",
    location: "pages.royal_tombs.tombs_1.location",
    description: "pages.royal_tombs.tombs_1.description",
    desc2: "pages.royal_tombs.tombs_1.desc2",
    discovery: "pages.royal_tombs.tombs_1.discovery",
    burialType: "pages.royal_tombs.tombs_1.burialType",
    themes: "pages.royal_tombs.tombs_1.themes",
    importance: "pages.royal_tombs.tombs_1.importance",
    image: "/images/imagePages/royal_tombs/tombs_1.jpg"
  },
  {
    id: "tombs-2",
    name: "pages.royal_tombs.tombs_2.name",
    owner: "pages.royal_tombs.tombs_2.owner",
    period: "pages.royal_tombs.tombs_2.period",
    location: "pages.royal_tombs.tombs_2.location",
    description: "pages.royal_tombs.tombs_2.description",
    desc2: "pages.royal_tombs.tombs_2.desc2",
    discovery: "pages.royal_tombs.tombs_2.discovery",
    burialType: "pages.royal_tombs.tombs_2.burialType",
    themes: "pages.royal_tombs.tombs_2.themes",
    importance: "pages.royal_tombs.tombs_2.importance",
    image: "/images/imagePages/royal_tombs/tombs_2.jpg"
  },
  {
    id: "tombs-3",
    name: "pages.royal_tombs.tombs_3.name",
    owner: "pages.royal_tombs.tombs_3.owner",
    period: "pages.royal_tombs.tombs_3.period",
    location: "pages.royal_tombs.tombs_3.location",
    description: "pages.royal_tombs.tombs_3.description",
    desc2: "pages.royal_tombs.tombs_3.desc2",
    discovery: "pages.royal_tombs.tombs_3.discovery",
    burialType: "pages.royal_tombs.tombs_3.burialType",
    themes: "pages.royal_tombs.tombs_3.themes",
    importance: "pages.royal_tombs.tombs_3.importance",
    image: "/images/imagePages/royal_tombs/tombs_3.jpg"
  },
  {
    id: "tombs-4",
    name: "pages.royal_tombs.tombs_4.name",
    owner: "pages.royal_tombs.tombs_4.owner",
    period: "pages.royal_tombs.tombs_4.period",
    location: "pages.royal_tombs.tombs_4.location",
    description: "pages.royal_tombs.tombs_4.description",
    desc2: "pages.royal_tombs.tombs_4.desc2",
    discovery: "pages.royal_tombs.tombs_4.discovery",
    burialType: "pages.royal_tombs.tombs_4.burialType",
    themes: "pages.royal_tombs.tombs_4.themes",
    importance: "pages.royal_tombs.tombs_4.importance",
    image: "/images/imagePages/royal_tombs/tombs_4.webp"
  },
  {
    id: "tombs-5",
    name: "pages.royal_tombs.tombs_5.name",
    owner: "pages.royal_tombs.tombs_5.owner",
    period: "pages.royal_tombs.tombs_5.period",
    location: "pages.royal_tombs.tombs_5.location",
    description: "pages.royal_tombs.tombs_5.description",
    desc2: "pages.royal_tombs.tombs_5.desc2",
    discovery: "pages.royal_tombs.tombs_5.discovery",
    burialType: "pages.royal_tombs.tombs_5.burialType",
    themes: "pages.royal_tombs.tombs_5.themes",
    importance: "pages.royal_tombs.tombs_5.importance",
    image: "/images/imagePages/royal_tombs/tombs_5.jpg"
  },
  {
    id: "tombs-6",
    name: "pages.royal_tombs.tombs_6.name",
    owner: "pages.royal_tombs.tombs_6.owner",
    period: "pages.royal_tombs.tombs_6.period",
    location: "pages.royal_tombs.tombs_6.location",
    description: "pages.royal_tombs.tombs_6.description",
    desc2: "pages.royal_tombs.tombs_6.desc2",
    discovery: "pages.royal_tombs.tombs_6.discovery",
    burialType: "pages.royal_tombs.tombs_6.burialType",
    themes: "pages.royal_tombs.tombs_6.themes",
    importance: "pages.royal_tombs.tombs_6.importance",
    image: "/images/imagePages/royal_tombs/tombs_6.jpeg"
  },
  {
    id: "tombs-7",
    name: "pages.royal_tombs.tombs_7.name",
    owner: "pages.royal_tombs.tombs_7.owner",
    period: "pages.royal_tombs.tombs_7.period",
    location: "pages.royal_tombs.tombs_7.location",
    description: "pages.royal_tombs.tombs_7.description",
    desc2: "pages.royal_tombs.tombs_7.desc2",
    discovery: "pages.royal_tombs.tombs_7.discovery",
    burialType: "pages.royal_tombs.tombs_7.burialType",
    themes: "pages.royal_tombs.tombs_7.themes",
    importance: "pages.royal_tombs.tombs_7.importance",
    image: "/images/imagePages/royal_tombs/tombs_7.jpg"
  },
  {
    id: "tombs-8",
    name: "pages.royal_tombs.tombs_8.name",
    owner: "pages.royal_tombs.tombs_8.owner",
    period: "pages.royal_tombs.tombs_8.period",
    location: "pages.royal_tombs.tombs_8.location",
    description: "pages.royal_tombs.tombs_8.description",
    desc2: "pages.royal_tombs.tombs_8.desc2",
    discovery: "pages.royal_tombs.tombs_8.discovery",
    burialType: "pages.royal_tombs.tombs_8.burialType",
    themes: "pages.royal_tombs.tombs_8.themes",
    importance: "pages.royal_tombs.tombs_8.importance",
    image: "/images/imagePages/royal_tombs/tombs_8.jpg"
  },
  {
    id: "tombs-9",
    name: "pages.royal_tombs.tombs_9.name",
    owner: "pages.royal_tombs.tombs_9.owner",
    period: "pages.royal_tombs.tombs_9.period",
    location: "pages.royal_tombs.tombs_9.location",
    description: "pages.royal_tombs.tombs_9.description",
    desc2: "pages.royal_tombs.tombs_9.desc2",
    discovery: "pages.royal_tombs.tombs_9.discovery",
    burialType: "pages.royal_tombs.tombs_9.burialType",
    themes: "pages.royal_tombs.tombs_9.themes",
    importance: "pages.royal_tombs.tombs_9.importance",
    image: "/images/imagePages/royal_tombs/tombs_9.jpg"
  },
  {
    id: "tombs-10",
    name: "pages.royal_tombs.tombs_10.name",
    owner: "pages.royal_tombs.tombs_10.owner",
    period: "pages.royal_tombs.tombs_10.period",
    location: "pages.royal_tombs.tombs_10.location",
    description: "pages.royal_tombs.tombs_10.description",
    desc2: "pages.royal_tombs.tombs_10.desc2",
    discovery: "pages.royal_tombs.tombs_10.discovery",
    burialType: "pages.royal_tombs.tombs_10.burialType",
    themes: "pages.royal_tombs.tombs_10.themes",
    importance: "pages.royal_tombs.tombs_10.importance",
    image: "/images/imagePages/royal_tombs/tombs_10.jpg"
  },
  {
    id: "tombs-11",
    name: "pages.royal_tombs.tombs_11.name",
    owner: "pages.royal_tombs.tombs_11.owner",
    period: "pages.royal_tombs.tombs_11.period",
    location: "pages.royal_tombs.tombs_11.location",
    description: "pages.royal_tombs.tombs_11.description",
    desc2: "pages.royal_tombs.tombs_11.desc2",
    discovery: "pages.royal_tombs.tombs_11.discovery",
    burialType: "pages.royal_tombs.tombs_11.burialType",
    themes: "pages.tombs.tombs_11.themes",
    importance: "pages.royal_tombs.tombs_11.importance",
    image: "/images/imagePages/royal_tombs/tombs_11.avif"
  },
  {
    id: "tombs-12",
    name: "pages.royal_tombs.tombs_12.name",
    owner: "pages.royal_tombs.tombs_12.owner",
    period: "pages.royal_tombs.tombs_12.period",
    location: "pages.royal_tombs.tombs_12.location",
    description: "pages.royal_tombs.tombs_12.description",
    desc2: "pages.royal_tombs.tombs_12.desc2",
    discovery: "pages.royal_tombs.tombs_12.discovery",
    burialType: "pages.royal_tombs.tombs_12.burialType",
    themes: "pages.royal_tombs.tombs_12.themes",
    importance: "pages.royal_tombs.tombs_12.importance",
    image: "/images/imagePages/royal_tombs/tombs_12.jpg"
  },
  {
    id: "tombs-13",
    name: "pages.royal_tombs.tombs_13.name",
    owner: "pages.royal_tombs.tombs_13.owner",
    period: "pages.royal_tombs.tombs_13.period",
    location: "pages.royal_tombs.tombs_13.location",
    description: "pages.royal_tombs.tombs_13.description",
    desc2: "pages.royal_tombs.tombs_13.desc2",
    discovery: "pages.royal_tombs.tombs_13.discovery",
    burialType: "pages.royal_tombs.tombs_13.burialType",
    themes: "pages.royal_tombs.tombs_13.themes",
    importance: "pages.royal_tombs.tombs_13.importance",
    image: "/images/imagePages/royal_tombs/tombs_13.webp"
  },
  {
    id: "tombs-14",
    name: "pages.royal_tombs.tombs_14.name",
    owner: "pages.royal_tombs.tombs_14.owner",
    period: "pages.royal_tombs.tombs_14.period",
    location: "pages.royal_tombs.tombs_14.location",
    description: "pages.royal_tombs.tombs_14.description",
    desc2: "pages.royal_tombs.tombs_14.desc2",
    discovery: "pages.royal_tombs.tombs_14.discovery",
    burialType: "pages.royal_tombs.tombs_14.burialType",
    themes: "pages.royal_tombs.tombs_14.themes",
    importance: "pages.royal_tombs.tombs_14.importance",
    image: "/images/imagePages/royal_tombs/tombs_14.jpg"
  }
];
function useRefs() {
  const refs = ref([]);
  function updateRef(e, i) {
    refs.value[i] = e;
  }
  return {
    refs,
    updateRef
  };
}
const makeVPaginationProps = propsFactory({
  activeColor: String,
  start: {
    type: [Number, String],
    default: 1
  },
  modelValue: {
    type: Number,
    default: (props) => props.start
  },
  disabled: Boolean,
  length: {
    type: [Number, String],
    default: 1,
    validator: (val) => val % 1 === 0
  },
  totalVisible: [Number, String],
  firstIcon: {
    type: IconValue,
    default: "$first"
  },
  prevIcon: {
    type: IconValue,
    default: "$prev"
  },
  nextIcon: {
    type: IconValue,
    default: "$next"
  },
  lastIcon: {
    type: IconValue,
    default: "$last"
  },
  ariaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.root"
  },
  pageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.page"
  },
  currentPageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.currentPage"
  },
  firstAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.first"
  },
  previousAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.previous"
  },
  nextAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.next"
  },
  lastAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.last"
  },
  ellipsis: {
    type: String,
    default: "..."
  },
  showFirstLastPage: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "nav"
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "text"
  })
}, "VPagination");
const VPagination = genericComponent()({
  name: "VPagination",
  props: makeVPaginationProps(),
  emits: {
    "update:modelValue": (value) => true,
    first: (value) => true,
    prev: (value) => true,
    next: (value) => true,
    last: (value) => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const page = useProxiedModel(props, "modelValue");
    const {
      t,
      n
    } = useLocale();
    const {
      isRtl
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      width
    } = useDisplay();
    const maxButtons = shallowRef(-1);
    provideDefaults(void 0, {
      scoped: true
    });
    const {
      resizeRef
    } = useResizeObserver();
    const length = computed(() => parseInt(props.length, 10));
    const start = computed(() => parseInt(props.start, 10));
    const totalVisible = computed(() => {
      if (props.totalVisible != null) return parseInt(props.totalVisible, 10);
      else if (maxButtons.value >= 0) return maxButtons.value;
      return getMax(width.value, 58);
    });
    function getMax(totalWidth, itemWidth) {
      const minButtons = props.showFirstLastPage ? 5 : 3;
      return Math.max(0, Math.floor(
        // Round to two decimal places to avoid floating point errors
        Number(((totalWidth - itemWidth * minButtons) / itemWidth).toFixed(2))
      ));
    }
    const range = computed(() => {
      if (length.value <= 0 || isNaN(length.value) || length.value > Number.MAX_SAFE_INTEGER) return [];
      if (totalVisible.value <= 0) return [];
      else if (totalVisible.value === 1) return [page.value];
      if (length.value <= totalVisible.value) {
        return createRange(length.value, start.value);
      }
      const even = totalVisible.value % 2 === 0;
      const middle = even ? totalVisible.value / 2 : Math.floor(totalVisible.value / 2);
      const left = even ? middle : middle + 1;
      const right = length.value - middle;
      if (left - page.value >= 0) {
        return [...createRange(Math.max(1, totalVisible.value - 1), start.value), props.ellipsis, length.value];
      } else if (page.value - right >= (even ? 1 : 0)) {
        const rangeLength = totalVisible.value - 1;
        const rangeStart = length.value - rangeLength + start.value;
        return [start.value, props.ellipsis, ...createRange(rangeLength, rangeStart)];
      } else {
        const rangeLength = Math.max(1, totalVisible.value - 2);
        const rangeStart = rangeLength === 1 ? page.value : page.value - Math.ceil(rangeLength / 2) + start.value;
        return [start.value, props.ellipsis, ...createRange(rangeLength, rangeStart), props.ellipsis, length.value];
      }
    });
    function setValue(e, value, event) {
      e.preventDefault();
      page.value = value;
      event && emit(event, value);
    }
    const {
      refs,
      updateRef
    } = useRefs();
    provideDefaults({
      VPaginationBtn: {
        color: toRef(() => props.color),
        border: toRef(() => props.border),
        density: toRef(() => props.density),
        size: toRef(() => props.size),
        variant: toRef(() => props.variant),
        rounded: toRef(() => props.rounded),
        elevation: toRef(() => props.elevation)
      }
    });
    const items = computed(() => {
      return range.value.map((item, index) => {
        const ref2 = (e) => updateRef(e, index);
        if (typeof item === "string") {
          return {
            isActive: false,
            key: `ellipsis-${index}`,
            page: item,
            props: {
              ref: ref2,
              ellipsis: true,
              icon: true,
              disabled: true
            }
          };
        } else {
          const isActive = item === page.value;
          return {
            isActive,
            key: item,
            page: n(item),
            props: {
              ref: ref2,
              ellipsis: false,
              icon: true,
              disabled: !!props.disabled || Number(props.length) < 2,
              color: isActive ? props.activeColor : props.color,
              "aria-current": isActive,
              "aria-label": t(isActive ? props.currentPageAriaLabel : props.pageAriaLabel, item),
              onClick: (e) => setValue(e, item)
            }
          };
        }
      });
    });
    const controls = computed(() => {
      const prevDisabled = !!props.disabled || page.value <= start.value;
      const nextDisabled = !!props.disabled || page.value >= start.value + length.value - 1;
      return {
        first: props.showFirstLastPage ? {
          icon: isRtl.value ? props.lastIcon : props.firstIcon,
          onClick: (e) => setValue(e, start.value, "first"),
          disabled: prevDisabled,
          "aria-label": t(props.firstAriaLabel),
          "aria-disabled": prevDisabled
        } : void 0,
        prev: {
          icon: isRtl.value ? props.nextIcon : props.prevIcon,
          onClick: (e) => setValue(e, page.value - 1, "prev"),
          disabled: prevDisabled,
          "aria-label": t(props.previousAriaLabel),
          "aria-disabled": prevDisabled
        },
        next: {
          icon: isRtl.value ? props.prevIcon : props.nextIcon,
          onClick: (e) => setValue(e, page.value + 1, "next"),
          disabled: nextDisabled,
          "aria-label": t(props.nextAriaLabel),
          "aria-disabled": nextDisabled
        },
        last: props.showFirstLastPage ? {
          icon: isRtl.value ? props.firstIcon : props.lastIcon,
          onClick: (e) => setValue(e, start.value + length.value - 1, "last"),
          disabled: nextDisabled,
          "aria-label": t(props.lastAriaLabel),
          "aria-disabled": nextDisabled
        } : void 0
      };
    });
    function updateFocus() {
      const currentIndex = page.value - start.value;
      refs.value[currentIndex]?.$el.focus();
    }
    function onKeydown(e) {
      if (e.key === keyValues.left && !props.disabled && page.value > Number(props.start)) {
        page.value = page.value - 1;
        nextTick(updateFocus);
      } else if (e.key === keyValues.right && !props.disabled && page.value < start.value + length.value - 1) {
        page.value = page.value + 1;
        nextTick(updateFocus);
      }
    }
    useRender(() => createVNode(props.tag, {
      "ref": resizeRef,
      "class": normalizeClass(["v-pagination", themeClasses.value, props.class]),
      "style": normalizeStyle(props.style),
      "role": "navigation",
      "aria-label": t(props.ariaLabel),
      "onKeydown": onKeydown,
      "data-test": "v-pagination-root"
    }, {
      default: () => [createElementVNode("ul", {
        "class": "v-pagination__list"
      }, [props.showFirstLastPage && createElementVNode("li", {
        "key": "first",
        "class": "v-pagination__first",
        "data-test": "v-pagination-first"
      }, [slots.first ? slots.first(controls.value.first) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, controls.value.first), null)]), createElementVNode("li", {
        "key": "prev",
        "class": "v-pagination__prev",
        "data-test": "v-pagination-prev"
      }, [slots.prev ? slots.prev(controls.value.prev) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, controls.value.prev), null)]), items.value.map((item, index) => createElementVNode("li", {
        "key": item.key,
        "class": normalizeClass(["v-pagination__item", {
          "v-pagination__item--is-active": item.isActive
        }]),
        "data-test": "v-pagination-item"
      }, [slots.item ? slots.item(item) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, item.props), {
        default: () => [item.page]
      })])), createElementVNode("li", {
        "key": "next",
        "class": "v-pagination__next",
        "data-test": "v-pagination-next"
      }, [slots.next ? slots.next(controls.value.next) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, controls.value.next), null)]), props.showFirstLastPage && createElementVNode("li", {
        "key": "last",
        "class": "v-pagination__last",
        "data-test": "v-pagination-last"
      }, [slots.last ? slots.last(controls.value.last) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, controls.value.last), null)])])]
    }));
    return {};
  }
});
const itemsPerPage = 6;
const _sfc_main = {
  __name: "royal-tombs",
  __ssrInlineRender: true,
  setup(__props) {
    const currentPage = ref(1);
    const totalPages = computed(() => Math.ceil(royalTombs.length / itemsPerPage));
    const paginatedTombs = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return royalTombs.slice(start, end);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_gsap = resolveDirective("gsap");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 my-32!" }, _attrs))}><div${ssrRenderAttrs(mergeProps({ class: "cursor-pointer" }, ssrGetDirectiveProps(_ctx, _directive_gsap, void 0, void 0, {
        magnetic: true,
        strong: true
      })))}><h2 class="animate-pulse text-2xl md:text-4xl font-bold text-center text-primaryTwo dark:text-secondary mb-3">${ssrInterpolate(_ctx.$t("pages.royal_tombs.title"))}</h2><p class="item text-center text-gray-600 max-w-2xl mx-auto mb-16!">${ssrInterpolate(_ctx.$t("pages.royal_tombs.subtitle"))}</p></div><div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(paginatedTombs.value, (tomb) => {
        _push(`<article${ssrRenderAttrs(mergeProps({
          key: tomb.id,
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
        })))}><div class="overflow-hidden"><img${ssrRenderAttr("src", tomb.image)}${ssrRenderAttr("alt", _ctx.$t(tomb.name))} class="w-full h-60 object-cover hover:scale-105 transition-all duration-300" loading="lazy"></div><div class="p-5! pb-2!"><h3 class="text-lg font-semibold mb-2 text-primaryTwo dark:text-secondary">${ssrInterpolate(_ctx.$t(tomb.name))}</h3><p class="flex items-center gap-2 text-sm text-gray-500 mt-1">`);
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
        _push(` ${ssrInterpolate(_ctx.$t(tomb.period))}</p><p class="flex items-center gap-2 text-sm text-gray-500 mt-1">`);
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
        _push(` ${ssrInterpolate(_ctx.$t(tomb.location))}</p><p class="text-gray-600 dark:text-gray-400 text-[15px] mb-4 line-clamp-3">${ssrInterpolate(_ctx.$t(tomb.description))}</p></div><div class="flex gap-3 items-center px-5! pb-4!">`);
        _push(ssrRenderComponent(BtnShowDeteils, { data: tomb }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$1, { item: tomb }, null, _parent));
        _push(`</div></article>`);
      });
      _push(`<!--]--></div><div class="flex justify-center mt-10">`);
      _push(ssrRenderComponent(VPagination, {
        modelValue: currentPage.value,
        "onUpdate:modelValue": ($event) => currentPage.value = $event,
        length: totalPages.value,
        color: "primary",
        size: "large",
        circle: ""
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/relics/royal-tombs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=royal-tombs-uN2W9C47.mjs.map
