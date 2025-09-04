import api from "./api";

export default async function refreshToken() {
  try {
    const resToken = await api.get("/auth/refresh");
    return resToken.data;
  } catch (err) {
    console.log(err.response.data.error);
    console.log("User needs to create an account or login again");
  }
}
