import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
// 引入tailwindcss
import "./assets/tailwind.css";
import "@icon-park/vue-next/styles/index.css";
import "highlight.js/styles/dark.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createPinia } from "pinia";
// 引入 i18n库进行国际化
import i18n from "./locals";

// 使用pinia
const pinia = createPinia();
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router).use(pinia).use(i18n).mount("#app");
