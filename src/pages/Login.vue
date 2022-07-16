<template>
  <v-row>
    <v-col cols="10" offset="1">
      <app-logo></app-logo>
      <v-form ref="form" class="mt-5">
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.required, rules.email]"
              v-model="user.email"
              type="email"
              label="Email"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.required]"
              v-model="user.password"
              type="password"
              label="Senha"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
      <div class="d-flex justify-center">
        <app-btn @click="login" size="x-large" block>Entrar</app-btn>
      </div>
      <div class="d-flex justify-center mt-5">
        <app-btn size="x-large" to="/register" block text
          >Criar minha conta</app-btn
        >
      </div>
      <div class="d-flex justify-center mt-5">
        <app-btn size="x-large" to="/forgot-password" block text
          >Esqueci minha senha</app-btn
        >
      </div>
    </v-col>
  </v-row>
</template>

<script>
import rules from "../datas/rules";

export default {
  data: () => ({
    user: {},
    rules,
  }),
  methods: {
    async login() {
      const validate = await this.$refs.form.validate();
      if (validate.valid) {
        try {
          this.$loading.open("Por favor aguarde...")
          await this.$store.dispatch("user/login", this.user)
          this.$router.push("/home");
        } catch (error) {
          console.log(error);
          this.$snackbar.open(error.message)
        } finally {
          this.$loading.close()
        }
      } else {
        this.$snackbar.open("Formulário contém erros")
      }
    },
  },
};
</script>
