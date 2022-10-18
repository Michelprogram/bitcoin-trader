import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import Home from "@/components/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/bitcoin-trader/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
