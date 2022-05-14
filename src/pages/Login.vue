<template>
  <v-row>
    <v-col cols="10" offset="1">
      <app-logo></app-logo>
      <v-form class="mt-5">
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field type="email" label="Email" variant="outlined" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field type="password" label="Senha" variant="outlined" required></v-text-field>
          </v-col>
        </v-row>
      </v-form>
      <div class="d-flex justify-center">
        <app-btn block size="x-large"></app-btn>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import AppLogo from "./../components/AppLogo.vue";
import AppBtn from "./../components/AppBtn.vue";

export default {
  components: {
    AppLogo,
    AppBtn,
  },
};
</script>
