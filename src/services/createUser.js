import api from "./api";

export default async function createUser(formData) {
  try {
    const res = await api.post("/auth/signup", formData);
    return { success: true, data: res.data };
  } catch (err) {
    const errorObj = new Error();
    switch (err.status) {
      case 409:
        errorObj.message = "Email already in use!";
        errorObj.field = "email";
        throw errorObj;
      default:
        throw new Error("Server error!");
    }
  }
}
