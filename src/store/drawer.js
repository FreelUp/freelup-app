export default {
    namespaced: true,
    state() {
      return {
        show: false,
      };
    },
    actions: {
      open({ state }) {
        state.show = true;
      },
      close({ state }) {
        state.show = false;
      },
    },
  };
  