import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import TesteView from "../views/TesteView.vue";
import SweetAlert from "../views/SweetAlert.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/testeview",
    name: "testeview",
    component: TesteView,
  },
  {
    path: "/sweetalert",
    name: "sweetalert",
    component: SweetAlert,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
