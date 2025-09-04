import api from "./api";
import getContacts from "./getContacts";
import refreshToken from "./refreshToken.js";

export default async function createContact(params) {
  const {
    name,
    age,
    email,
    contacts,
    setContacts,
    setIsModalOpen,
    setIsLoading,
  } = params;
  const clearName = name.trim().replace(/\s+/g, " ");
  const isRepeatedEmail = contacts.some((contact) => contact.email === email);

  if (isRepeatedEmail) {
    setIsModalOpen(true);
    setIsLoading(false);
    return;
  }

  try {
    await api.post("/auth/contacts", {
      name: clearName,
      age: age,
      email: email,
    });
    getContacts(setContacts, setIsLoading);
  } catch (err) {
    const errorType = err.response.data.error;
    console.log("Error type from createContac: ", errorType);

    errorType === "token_expired" && refreshToken();
  }
}
