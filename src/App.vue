<template>
  <v-app :theme="theme">
    <app-navbar v-if="!$route.meta.hideNavbar"></app-navbar>
    <app-drawer></app-drawer>
    <app-loading></app-loading>
    <app-snackbar></app-snackbar>
    <div class="d-flex justify-end">
      <v-btn flat :icon="themeIcon" @click="toggleTheme"></v-btn>
    </div>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import AppNavbar from "./components/general/AppNavbar.vue";
import AppDrawer from "./components/general/AppDrawer.vue";

const theme = ref("theme");
theme.value = "light";

let themeIcon = ref("themeIcon");
themeIcon = "mdi-brightness-4";

const toggleTheme = () => {
  themeIcon = theme.value === "light" ? "mdi-brightness-6" : "mdi-brightness-4";
  return (theme.value = theme.value === "light" ? "dark" : "light");
};
</script>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>
