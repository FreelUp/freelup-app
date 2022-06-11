import axios from "axios";

export default class UserAPI {
  static async create(user) {
    try {
      return await axios.post(import.meta.env.VITE_API_URL + "/user", user);
    } catch (error) {
      throw error;
    }
  }
}
