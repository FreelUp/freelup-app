<template>
  <v-row>
    <v-col cols="10" offset="1">
      <h1 class="text-h3">Registre-se</h1>
      <v-form class="mt-5" ref="form">
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.required]"
              v-model="user.name"
              type="text"
              label="Nome"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
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
        <app-btn @click="create" size="x-large" block>Cadastrar</app-btn>
      </div>
      <div class="d-flex justify-center mt-5">
        <app-btn size="x-large" to="/" block text>Voltar</app-btn>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import UserAPI from "../api/UserApi";
import rules from "../datas/rules";
import { getErrorMessage } from "./../utils/error.util"

export default {
  data: () => {
    return {
      user: {},
      rules,
    };
  },
  methods: {
    async create() {
      const validate = await this.$refs.form.validate();
      if (validate.valid) {
        try {
          this.$loading.open("Por favor aguarde...")
          await UserAPI.create(this.user);
          await this.$store.dispatch("user/login", this.user)
          this.$router.push("/home");
          this.$snackbar.open("Usuário cadastrado com sucesso!")
        } catch (error) {
          this.$snackbar.open(getErrorMessage(error));
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

<style scoped>
h1 {
  font-weight: 400;
}
</style>
