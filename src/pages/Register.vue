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
import AppLogo from "../components/AppLogo.vue";
import AppBtn from "../components/AppBtn.vue";
import UserAPI from "../api/UserApi";
import rules from "../datas/rules";

export default {
  components: {
    AppLogo,
    AppBtn,
  },
  data: () => {
    return {
      user: {},
      rules,
    };
  },
  methods: {
    async create() {
      const validate = await this.$refs["form"].validate()
      if(validate.valid) {
        try {
          await UserAPI.create(this.user)
          this.$router.push("/home")
        } catch (error) {
          alert("Erro ao salvar usuário")
        }
      } else {
        alert("Formulário contém erros")
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
