import axios from "axios";

const api = axios.create({
  baseURL: "https://users-api-1oiw.onrender.com",
});

export default api;
