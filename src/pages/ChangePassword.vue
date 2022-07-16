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
        <app-btn @click="changePassword" size="x-large" block
          >Confirmar</app-btn
        >
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
  methods: {
    async changePassword() {
      console.log("Trocar senha");
      if (this.password != this.confirmPassword)
        return this.$snackbar.open("As duas senhas devem ser iguais");
      try {
        await this.$store.dispatch("user/changePassword", {
          token: this.token,
          newPassword: this.password,
        });
        this.$snackbar.open("Senha atualizada com sucesso!");
        this.$router.push({ name: "Login" });
      } catch (error) {
        this.$snackbar.open(error.message);
      }
    },
  },
  async mounted() {
    this.token = this.$route.query.token;
    if (!this.token) {
      this.$router.push({ name: "ForgotPassword" });
    } else {
      try {
        await this.$store.dispatch(
          "user/verifyChangePasswordToken",
          this.token
        );
      } catch (error) {
        this.$snackbar.open(error.message);
        this.$router.push({ name: "ForgotPassword" });
      }
    }
  },
};
</script>
