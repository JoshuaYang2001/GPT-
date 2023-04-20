import { defineStore } from "pinia";

export const themeStore = defineStore({
  id: "theme",
  state: () => ({
    isDarkMode: false,
  }),
  actions: {
    toggleMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
});
