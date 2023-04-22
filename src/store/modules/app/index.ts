import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "theme",
  state: () => ({
    isDarkMode: false,
  }),
  actions: {
    toggleMode() {
      this.isDarkMode = !this.isDarkMode;
      console.log(this.isDarkMode);
    },
  },
});
