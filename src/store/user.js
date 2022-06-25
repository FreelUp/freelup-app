import UserAPI from "../api/UserApi";

export default {
  namespaced: true,
  state() {
    return {
      loggedUser: {},
    };
  },
  actions: {
    async login({ state }, user) {
      state.loggedUser = await UserAPI.login(user);
      sessionStorage.setItem("logged_user", JSON.stringify(state.loggedUser));
    },
    recoverLoggedUser({ state }) {
      state.loggedUser = JSON.parse(sessionStorage.getItem("logged_user")) || {};
    },
  },
};
