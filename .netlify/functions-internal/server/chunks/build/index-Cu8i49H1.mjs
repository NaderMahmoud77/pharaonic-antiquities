function mounted(el, binding) {
  return;
}
function unmounted(el, binding) {
  const observe = el._observe?.[binding.instance.$.uid];
  if (!observe) return;
  observe.observer.unobserve(el);
  delete el._observe[binding.instance.$.uid];
}
const Intersect = {
  mounted,
  unmounted
};

export { Intersect as I };
//# sourceMappingURL=index-Cu8i49H1.mjs.map
