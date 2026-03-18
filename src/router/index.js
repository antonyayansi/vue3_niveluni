import { createWebHistory, createRouter } from "vue-router";

import routerApp from "../app/router";
import topbar from "topbar";
import isAuth from "../middleware/isAuth";
import routerAuth from "../auth/router";

topbar.config({
    barThickness: 4,
    barColors: { 0: "rgba(99, 102, 241, 1)" },
    shadowBlur: 5,
})

const routes = [
  {
    name: "index",
    ...routerApp,
    beforeEnter: [isAuth],
  },
  {
    name: "auth",
    ...routerAuth,
  },
  {
    name: "callback-google",
    path: "/auth/callback",
    component: () => import("../pages/Callback.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

// Iniciar NProgress antes de cambiar de ruta
router.beforeEach((to, from, next) => {
    topbar.show();
    next();
});

// Detener NProgress una vez que la ruta haya terminado de cargarse
router.afterEach(() => {
    topbar.hide();
});

export default router
