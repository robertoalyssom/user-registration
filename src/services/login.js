import api from "./api";

export default async function loginUser(userData) {
  try {
    const res = await api.post("/auth/login", userData);
    return { success: true, data: res.data };
  } catch (err) {
    const errorObj = new Error();

    switch (err.status) {
      case 404:
        errorObj.message = "Email account doesn't exist!";
        errorObj.field = "email";
        throw errorObj;
      case 401:
        errorObj.message = "Invalid password!";
        errorObj.field = "password";
        throw errorObj;
      default:
        throw new Error("Server Error!");
    }
  }
}
