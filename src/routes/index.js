import Login from "./../pages/Login.vue";
import Register from "./../pages/Register.vue";
import Home from "./../pages/Home.vue";

export default [
  {
    name: "Login",
    path: "/",
    component: Login,
    meta: {
      hideNavbar: true,
    },
  },
  {
    name: "Register",
    path: "/register",
    component: Register,
    meta: {
      hideNavbar: true,
    },
  },
  {
    name: "Home",
    path: "/home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
];
