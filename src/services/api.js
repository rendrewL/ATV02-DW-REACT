import axios from "axios";

const api = axios.create({
  baseURL: "https://api.balldontlie.io/v1",
  headers: {
    Authorization: "c2cb8f35-e4f4-4a30-b724-b83cf4ff486c"
  }
});

export default api;