import { ref, onMounted } from "vue";

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;

  if (isDarkMode.value) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

export function useDarkMode() {
  onMounted(() => {
    const saved = localStorage.getItem("theme") || "dark";
    isDarkMode.value = saved === "dark";

    if (isDarkMode.value) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  return {
    isDarkMode,
    toggleDarkMode,
  };
}
