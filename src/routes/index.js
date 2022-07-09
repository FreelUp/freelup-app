import Login from "./../pages/Login.vue";
import Register from "./../pages/Register.vue";
import Home from "./../pages/Home.vue";
import ForgotPassword from "../pages/ForgotPassword.vue";
import ChangePassword from "../pages/ChangePassword.vue";

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
      requiresAuth: true,
    },
  },
  {
    name: "ForgotPassword",
    path: "/forgot-password",
    component: ForgotPassword,
    meta: {
      hideNavbar: true,
    },
  },
  {
    name: "ChangePassword",
    path: "/change-password",
    component: ChangePassword,
    meta: {
      hideNavbar: true,
    },
  },
];
