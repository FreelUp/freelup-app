import UserAPI from "../api/UserApi";

export default {
    namespaced: true,
    state() {
      return {
        loggedUser: {}
      };
    },
    actions: {
      async login({ state }, user) {
        state.loggedUser = await UserAPI.login(user);
      },
    },
  };
  