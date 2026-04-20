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
