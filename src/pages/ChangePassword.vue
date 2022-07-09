<template>
  <v-row>
    <v-col cols="10" offset="1">
      <h1 class="text-h3">Digite sua nova senha</h1>

      <v-form class="mt-5" ref="form">
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.required]"
              v-model="password"
              type="password"
              label="Senha"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.required]"
              v-model="confirmPassword"
              type="password"
              label="Confirmar Senha"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
      <div class="d-flex justify-center">
        <app-btn @click="" size="x-large" block>Confirmar</app-btn>
      </div>
      <div class="d-flex justify-center mt-5">
        <app-btn size="x-large" to="/" block text>Voltar</app-btn>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import rules from "../datas/rules";

export default {
  data: () => ({
    rules,
    password: "",
    confirmPassword: "",
    token: "",
  }),
  mounted() {
    this.token = this.$route.query.token;
    if (!this.token) {
      this.$router.push({ name: "ForgotPassword" });
    }
  },
};
</script>
