import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import Home from "@/pages/Home.vue";
import Wallet from "@/pages/Wallet.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/bitcoin-trader/",
    name: "Dashboard",
    component: Home,
  },
  {
    path: "/bitcoin-trader/wallet",
    name: "Wallet",
    component: Wallet,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
