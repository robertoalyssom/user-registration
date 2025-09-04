import api from "./api";
import getContacts from "./getContacts";

export default async function deleteContact(params) {
  const { id, setContacts, setIsLoading } = params;

  setIsLoading(true);

  try {
    await api.delete(`/auth/contacts/${id}`);
  } catch (error) {
    console.log(error.message);
  }

  getContacts(setContacts, setIsLoading);
}
