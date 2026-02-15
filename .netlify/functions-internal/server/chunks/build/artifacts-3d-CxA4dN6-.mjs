import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${ssrRenderAttrs(mergeProps({ class: "m-40! text-4xl" }, _attrs))}>صفحه الاثار 3d</h1>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/artifacts-3d.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const artifacts3d = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { artifacts3d as default };
//# sourceMappingURL=artifacts-3d-CxA4dN6-.mjs.map
