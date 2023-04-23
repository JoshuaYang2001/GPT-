import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("@/views/test.vue"),
    },
    {
      path: "/test1",
      name: "test1",
      component: () => import("@/views/test1.vue"),
    },
  ],
});

export default router;
