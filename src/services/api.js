import axios from "axios";

const api = axios.create({
  baseURL: "https://users-api-1-bc3h.onrender.com",
});

export default api;
