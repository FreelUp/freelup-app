<template>
  <v-app-bar color="primary" class="elevation-0">
    <v-app-bar-nav-icon :icon="navIcon" @click="toggleDrawer"></v-app-bar-nav-icon>
    <v-app-bar-title>FreelUp</v-app-bar-title>
  </v-app-bar>
</template>
<script>
export default {
  methods: {
    toggleDrawer() {
      if (this.$store.state.drawer.show) {
        this.$store.dispatch("drawer/close");
      } else {
        this.$store.dispatch("drawer/open");
      }
    },
  },
  computed: {
    navIcon() {
       if (this.$store.state.drawer.show) {
        return "mdi-arrow-left"
      } else {
        return "mdi-menu"
      }
    }
  }
};
</script>
