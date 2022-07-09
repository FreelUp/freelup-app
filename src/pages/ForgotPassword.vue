<template>
  <v-row>
    <v-col cols="10" offset="1">
      <h1 class="text-h3">Esqueci minha senha</h1>
      <h2 class="mt-5">Informe seu e-mail</h2>

      <v-form class="mt-5" ref="form">
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.required, rules.email]"
              v-model="email"
              type="email"
              label="E-mail"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
      <div class="d-flex justify-center">
        <app-btn @click="sendEmail" size="x-large" block>Confirmar</app-btn>
      </div>
      <div class="d-flex justify-center mt-5">
        <app-btn size="x-large" to="/" block text>Voltar</app-btn>
      </div>
    </v-col>
  </v-row>
  <v-dialog v-model="dialog">
    <v-card>
      <v-card-text>
        Por gentileza, verifique seu e-email. Te enviamos o link para fazer a
        redefinição da sua senha. Não esqueça de conferir sua
        <strong>Caixa de Spam</strong>, <strong>Lixo Eletrônico</strong> ou
        <strong>Promoções</strong> para encontrar o e-mail enviado.
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="dialog = false">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import rules from "../datas/rules";
import UserApi from "./../api/UserAPI";
import { getErrorMessage } from "../utils/error.util";

export default {
  data: () => ({
    rules,
    email: "",
    dialog: false,
  }),
  methods: {
    async sendEmail() {
      try {
        const validate = await this.$refs.form.validate();
        if (validate.valid) {
          this.$loading.open("Por favor aguarde...");
          await UserApi.forgotPassword(this.email)
          this.dialog = true;
        } else {
          this.$snackbar.open("Formulário contém erros");
        }
      } catch (error) {
        this.$snackbar.open(getErrorMessage(error));
      } finally {
        this.$loading.close();
      }
    },
  },
};
</script>
