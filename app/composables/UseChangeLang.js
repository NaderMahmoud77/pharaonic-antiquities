// import { useCookie, onBeforeMount, onMounted } from "#imports";

// export function useLang() {
//   let lang = useCookie("i18n_redirected").value;
//   function addDirectionAndLang() {
//     if (useCookie("i18n_redirected").value === "ar") {
//       document.documentElement.setAttribute("lang", "ar");
//       document.documentElement.setAttribute("dir", "rtl");
//     } else {
//       document.documentElement.setAttribute("lang", "en");
//       document.documentElement.setAttribute("dir", "ltr");
//     }
//   }

//   onBeforeMount(() => {
//     addDirectionAndLang();
//   });

//   return { addDirectionAndLang, lang };
// }

import { watchEffect } from "vue";
import { useI18n } from "#imports";

export function useLang() {
  const { locale } = useI18n();

  // sync html attrs automatically
  watchEffect(() => {
    if (process.client) {
      document.documentElement.lang = locale.value;
      document.documentElement.dir = locale.value === "ar" ? "rtl" : "ltr";
    }
  });

  return {
    lang: locale,
  };
}
