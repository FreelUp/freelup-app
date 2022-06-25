<template>
  <v-navigation-drawer v-model="$store.state.drawer.show" bottom temporary>
    <v-list>
      <!-- prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" -->
      <v-list-item
        :title="loggedUser.name"
        :subtitle="loggedUser.email"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>
    <v-list :items="items"></v-list>

    <v-divider></v-divider>
    <v-list>
      <v-list-item title="Sair" @click="logout"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    group: null,
    items: [
      {
        title: "Foo",
        value: "foo",
      },
      {
        title: "Bar",
        value: "bar",
      },
      {
        title: "Fizz",
        value: "fizz",
      },
      {
        title: "Buzz",
        value: "buzz",
      },
    ],
  }),
  methods: {
    ...mapActions({
      recoverLoggedUser: "user/recoverLoggedUser",
      removeLoggedUser: "user/logout",
    }),
    logout() {
      this.removeLoggedUser();
      this.$router.push({ name: "Login" });
    },
  },
  mounted() {
    this.recoverLoggedUser();
  },
  computed: {
    ...mapState("user", ["loggedUser"]),
  },
  watch: {
    group() {
      this.$store.dispatch("drawer/close");
    },
  },
};
</script>
