import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      loadingShow: false,
      loadingMessage: "Carregando...",
    };
  },
  actions: {
    showLoading({state}, msg) {
      state.loadingShow = true
      state.loadingMessage = msg
    },
    hideLoading({state}) {
      state.loadingShow = false
      state.loadingMessage = ""
    }
  }
});
