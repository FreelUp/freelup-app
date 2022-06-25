import { createRouter, createWebHistory } from "vue-router";
import routes from "./../routes";
import Store from "./../plugins/vuex"; // this.$store === Store

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  Store.dispatch("user/recoverLoggedUser");
  const loggedUser = Store.state.user.loggedUser;

  if (loggedUser.token && (to.name == "Login" || to.name == "Register")) {
    return next({ name: "Home" });
  }

  if (to.meta.requiresAuth) {
    if (!loggedUser.token) {
      return next({ name: "Login" });
    }
  }
  next();
});

export default router;
