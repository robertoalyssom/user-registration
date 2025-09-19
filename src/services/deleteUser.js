import api from "./api.js";

export default async function deleteUser() {
  console.log("Deleting user...");
  try {
    const response = await api.delete("/auth/deleteAccount");
    console.log("User deleted successfully");
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}
