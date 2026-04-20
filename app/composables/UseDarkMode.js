// import { ref, onMounted } from "vue";

// const isDarkMode = ref(true);

// const toggleDarkMode = () => {
//   isDarkMode.value = !isDarkMode.value;
//   window.location.reload();

//   if (isDarkMode.value) {
//     document.body.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   } else {
//     document.body.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   }
// };

// export function useDarkMode() {
//   onMounted(() => {
//     const saved = localStorage.getItem("theme") || "dark";
//     isDarkMode.value = saved === "dark";

//     if (isDarkMode.value) {
//       document.body.classList.add("dark");
//     } else {
//       document.body.classList.remove("dark");
//     }
//   });

//   return {
//     isDarkMode,
//     toggleDarkMode,
//   };
// }

// composables/useDarkMode.js
import { ref, onMounted } from "vue";

const isDarkMode = ref(true);

const applyTheme = (dark) => {
  document.body.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  applyTheme(isDarkMode.value);
};

export function useDarkMode() {
  onMounted(() => {
    // Respect saved preference, then OS preference, then default to dark
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const dark = saved ? saved === "dark" : (prefersDark ?? true);

    isDarkMode.value = dark;
    applyTheme(dark);
  });

  return { isDarkMode, toggleDarkMode };
}
