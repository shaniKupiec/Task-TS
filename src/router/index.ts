import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import homePage from "../views/homePage.vue";
import registerPage from "../views/registerPage.vue";
import loginPage from "../views/loginPage.vue";
import dashboardPage from "../views/dashboardPage.vue";
import editTask from "../views/editTaskPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: homePage,
  },
  {
    path: "/register",
    name: "register",
    component: registerPage,
  },
  {
    path: "/login",
    name: "login",
    component: loginPage,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboardPage,
  },
  {
    path: "/editTask/:taskId?",
    name: "editTask",
    component: editTask,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
