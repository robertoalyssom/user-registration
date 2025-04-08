import api from "./api";
import getUsers from "./getUsers";

export default async function editUser(
  id,
  userName,
  userAge,
  userEmail,
  setUsers,
  setIsGettingUsers
) {
  const updatedUser = {
    id: id,
    name: userName,
    age: userAge,
    email: userEmail,
  };

  try {
    await api.put(`/users/${id}`, updatedUser);
  } catch (error) {
    console.log(error.message);
  }

  getUsers(setUsers, setIsGettingUsers);
}
