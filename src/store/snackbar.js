export default {
    namespaced: true,
    state() {
      return {
        show: false,
        text: "Mensagem padrão"
      };
    },
    actions: {
      open({ state }, text) {
        state.show = true;
        state.text = text;
      },
      close({ state }) {
        state.show = false;
        state.text = "";
      },
    },
  };
  