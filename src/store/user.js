import UserAPI from "../api/UserApi";
import { getErrorMessage } from "./../utils/error.util";

export default {
  namespaced: true,
  state() {
    return {
      loggedUser: {},
    };
  },
  actions: {
    async login({ state }, user) {
      try {
        state.loggedUser = await UserAPI.login(user);
        sessionStorage.setItem("logged_user", JSON.stringify(state.loggedUser));
      } catch (error) {
        console.log(error);
        throw { message: getErrorMessage(error) };
      }
    },
    logout({ state }) {
      sessionStorage.removeItem("logged_user");
      state.loggedUser = {};
    },
    recoverLoggedUser({ state }) {
      state.loggedUser =
        JSON.parse(sessionStorage.getItem("logged_user")) || {};
    },
    async verifyChangePasswordToken({ state }, token) {
      try {
        return await UserAPI.verifyChangePasswordToken(token);
      } catch (error) {
        throw { message: getErrorMessage(error) };
      }
    },
    async changePassword({ state }, payload) {
      try {
        return await UserAPI.changePassword(payload.token, payload.newPassword);
      } catch (error) {
        throw { message: getErrorMessage(error) };
      }
    },
  },
};
