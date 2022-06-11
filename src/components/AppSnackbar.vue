<template>
  <v-snackbar v-model="$store.state.snackbar.show">
    {{ $store.state.snackbar.text }}
    <template v-slot:actions>
      <v-btn
        color="primary"
        variant="text"
        @click="$store.dispatch('snackbar/close')"
      >
        Fechar
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data: () => {},
};
</script>
