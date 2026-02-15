import mitt from "mitt";

export default defineNuxtPlugin(() => {
  let emitter  = mitt();

  return {
    provide: {
      emitter ,
    },
  };
});
