import api from "./api";
import getUsers from "./getUsers";

export default async function createUsers(params) {
  const {
    name,
    age,
    email,
    users,
    setUsers,
    setIsModalOpen,
    setIsGettingUsers,
  } = params;

  const isRepeatedEmail = users.some((user) => user.email === email);

  if (isRepeatedEmail) {
    setIsModalOpen(true);
    setIsGettingUsers(false);
    return;
  } else {
    await api.post("/users", {
      name: name,
      age: age,
      email: email,
    });
  }

  getUsers(setUsers, setIsGettingUsers);
}
