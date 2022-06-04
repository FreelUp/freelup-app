<template>
  <v-row>
    <v-col cols="10" offset="1">
      <h1 class="text-h3">Registre-se</h1>
      <v-form class="mt-5">
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              type="text"
              label="Nome"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              type="email"
              label="Email"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              type="password"
              label="Senha"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
      <div class="d-flex justify-center">
        <app-btn size="x-large" block>Cadastrar</app-btn>
      </div>
      <div class="d-flex justify-center mt-5">
        <app-btn size="x-large" to="/" block text>Voltar</app-btn>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import AppLogo from "../components/AppLogo.vue";
import AppBtn from "../components/AppBtn.vue";

export default {
  components: {
    AppLogo,
    AppBtn,
  },
};
</script>

<style scoped>
h1 {
  font-weight: 400;
}
</style>
