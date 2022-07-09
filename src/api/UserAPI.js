import axios from "axios";

export default class UserAPI {
  static async create(user) {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/user",
        user
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async login(user) {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/auth",
        user
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async forgotPassword(email) {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/forgot-password",
        { email }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
