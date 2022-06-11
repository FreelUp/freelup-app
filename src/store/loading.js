export default {
    namespaced: true,
    state() {
      return {
        show: false,
        message: "Carregando...",
      };
    },
    actions: {
      show({ state }, msg) {
        state.show = true;
        state.message = msg;
      },
      hide({ state }) {
        state.show = false;
        state.message = "";
      },
    },
  };
  