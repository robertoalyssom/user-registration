import api from "./api"; // axios instance
import refreshToken from "./refreshToken.js";

async function getContacts(setContacts, setIsLoading) {
  try {
    const contactsFromApi = await api.get("/auth/contacts");
    const newContacts = contactsFromApi.data;

    setContacts(newContacts);
    setIsLoading(false);
  } catch (err) {
    const responseError = err.response.data.error;
    responseError === "" && refreshToken();
  }
}

export default getContacts;
