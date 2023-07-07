import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import Login from "../pages/login.vue";
import Register from "../pages/register.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "home" && !localStorage.access_token) {
    next({ name: "login" });
  } else if (to.name === "login" && localStorage.access_token) {
    next({ name: "home" });
  } else if (to.name === "register" && localStorage.access_token) {
    next({ name: "home" });
  } else {
    next();
  }
});
export default router;
