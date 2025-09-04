import api from "./api";
import getContacts from "./getContacts";

export default async function editContact(
  id,
  newName,
  newAge,
  newEmail,
  setContacts,
  setIsLoading
) {
  const updatedContact = {
    id: id,
    name: newName,
    age: newAge,
    email: newEmail,
  };

  try {
    await api.put(`/auth/contacts/${id}`, updatedContact);
  } catch (err) {
    console.log(err.message);
  }

  getContacts(setContacts, setIsLoading);
}
