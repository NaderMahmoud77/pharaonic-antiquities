import { useCookie, onBeforeMount } from "#imports";

export function useLang() {
  let lang = useCookie("i18n_redirected").value;
  function addDirectionAndLang() {
    if (useCookie("i18n_redirected").value === "ar") {
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.setAttribute("dir", "ltr");
    }
  }

  onBeforeMount(() => {
    addDirectionAndLang();
  });

  return { addDirectionAndLang, lang };
}
