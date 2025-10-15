import api from "./api.js";

export default async function logoutUser() {
  try {
    await api.post("/auth/logout");
    return true;
  } catch (err) {
    console.log(err.data.error);
    return false;
  }
}
