import Login from "./../pages/Login.vue";
import Register from "./../pages/Register.vue";
import Home from "./../pages/Home.vue";

export default [
  {
    path: "/",
    component: Login,
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: "/register",
    component: Register,
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: "/home",
    component: Home,
  },
];
