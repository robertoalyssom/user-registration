import api from "./api"; // axios instance

export default async function getUsers(setUsers, setIsGettingUsers) {
  const usersFromApi = await api.get("/users");
  const newUsers = usersFromApi.data;
  setUsers(newUsers);

  setIsGettingUsers(false);
}
