<template>
  <v-dialog v-model="$store.state.loading.show" hide-overlay persistent>
    <v-card color="primary">
      <v-card-text>
        {{ $store.state.loading.message }}
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => {},
};
</script>
