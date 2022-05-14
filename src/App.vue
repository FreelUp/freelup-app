<template>
  <v-app :theme="theme">
    <v-main>
      <div class="d-flex justify-end">
        <v-btn flat :icon="themeIcon" @click="toggleTheme"></v-btn>
      </div>
      <app-logo></app-logo>
      <div class="d-flex justify-center">
        <app-btn block size="x-large"></app-btn>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import AppLogo from "./components/AppLogo.vue";
import AppBtn from "./components/AppBtn.vue";

const theme = ref("theme");
theme.value = "light"

let themeIcon = ref("themeIcon");
themeIcon = "mdi-brightness-4"

const toggleTheme = () => { 
  themeIcon = theme.value === "light" ? "mdi-brightness-6" : "mdi-brightness-4"
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
