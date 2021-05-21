import axios from "axios";

import { BASE_URL } from "@env";

class fakeApi {
  constructor() {
    axios.defaults.baseURL = BASE_URL;
  }

  getAuthors() {
    return axios
      .get("/users")
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err);
      });
  }

  getPosts(id) {
    return axios
      .get(`/posts?userId=${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err);
      });
  }
}

export default new fakeApi();
