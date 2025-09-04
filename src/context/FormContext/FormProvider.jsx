import createContact from "../../services/createContact";
import editContact from "../../services/editContact";
import { FormContext } from "./FormContext";

/* 
FormProvider is a context provider that manages form state.
*/
export function FormProvider({
  children,
  contacts,
  setContacts,
  setIsModalOpen,
  setIsLoading,
  editedContact,
  setEditedContact,
}) {
  const createNewContact = (formData) => {
    const { name, age, email } = formData;
    createContact({
      name,
      age,
      email,
      contacts,
      setContacts,
      setIsModalOpen,
      setIsLoading,
    });
  };

  const updateContact = (formData) => {
    const { id, name, age, email } = formData;
    editContact(id, name, age, email, setContacts, setIsLoading);
  };

  return (
    <FormContext.Provider
      value={{
        contacts,
        createNewContact,
        updateContact,
        editedContact,
        setEditedContact,
        setIsLoading,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
