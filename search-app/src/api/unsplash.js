import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Y8YJuWWLSBTeBYvapFEilky0WynQbU_eME-B7Vmf7XE",
  },
});
