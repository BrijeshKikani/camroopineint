import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import App from "../App.vue";
import ContactUs from "../components/ContactUs.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: App,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/ContactUs",
    name: "Contact Us",
    component: ContactUs,
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

router.beforeResolve((to, from, next) => {
  if (!to.matched.length) {
    next("/");
  } else {
    next();
  }
});

export default router;
