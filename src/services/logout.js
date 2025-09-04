import api from "./api.js";

export default async function logoutUser() {
  try {
    await api.post("/auth/logout");
  } catch (err) {
    console.log(err.data.error);
  }
}
