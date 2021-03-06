export default {
    namespaced: true,
    state() {
      return {
        show: false,
        message: "Carregando...",
      };
    },
    actions: {
      open({ state }, msg) {
        state.show = true;
        state.message = msg;
      },
      close({ state }) {
        state.show = false;
        state.message = "";
      },
    },
  };
  