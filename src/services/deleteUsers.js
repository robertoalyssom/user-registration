import api from "./api";
import getUsers from "./getUsers";

export default async function deleteUsers(id, setUsers, setIsGettingUsers) {
  setIsGettingUsers(true);
  try {
    await api.delete(`/users/${id}`);
  } catch (error) {
    console.log(error.message);
  }

  getUsers(setUsers, setIsGettingUsers);
}
