<template>
  <v-navigation-drawer v-model="$store.state.drawer.show" bottom temporary>
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        :title="$store.state.user.loggedUser.name"
        :subtitle="$store.state.user.loggedUser.email"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>
    <v-list :items="items"></v-list>

    <v-divider></v-divider>
    <v-list>
      <v-list-item title="Sair" to="/"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
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

  watch: {
    group() {
      this.$store.dispatch("drawer/close");
    },
  },
};
</script>
