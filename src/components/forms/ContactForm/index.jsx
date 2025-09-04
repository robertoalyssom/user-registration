import "./style.css";
import { useState, useEffect } from "react";
import { useFormContext } from "../../../context/FormContext/useFormContext.js";
import useAuthContext from "../../../context/AuthContext/useAuthContext.js";
import useForm from "../../../hooks/useForm.jsx";
import FormField from "../../ui/FormField/index.jsx";
import BtnSubmit from "../../ui/BtnSubmit/index.jsx";
import Modal from "../../Modal/index.jsx";
import useServerErrorMsgContext from "../../../context/AuthContext/useAuthContext.js";
import ServerErrorMsg from "../../ui/ServerErrorMsg/index.jsx";

const formBlueprint = {
  name: "",
  age: "",
  email: "",
};

export default function FormContact() {
  const [isMaxContacts, setIsMaxContacts] = useState(false);
  const {
    contacts,
    createNewContact,
    updateContact,
    editedContact,
    setEditedContact,
    setIsLoading,
  } = useFormContext();
  const { verifyToken } = useAuthContext();
  const {
    formData,
    setFormData,
    formMessage,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(formBlueprint, submitFormCallback);
  const { errorMsg, setErrorMsg } = useServerErrorMsgContext();

  useEffect(() => {
    const editedContactData = {
      id: editedContact.id,
      name: editedContact.name,
      age: editedContact.age,
      email: editedContact.email,
    };
    Object.keys(editedContact).length > 0 && setFormData(editedContactData);
  }, [editedContact]);

  async function submitFormCallback(formData) {
    setIsLoading(true);

    // check if user has reached max contacts
    if (contacts.length >= 10 && !editedContact.name) {
      setIsLoading(false);
      return setIsMaxContacts(true);
    }

    // verify token before making API calls
    await verifyToken();

    // if editing a contact, update it, otherwise create a new one
    if (editedContact.name) updateContact(formData);
    else createNewContact(formData);

    // reset form
    setFormData(formBlueprint);
    setEditedContact({});
  }

  return (
    <form className="form">
      <ServerErrorMsg serverError={errorMsg} />
      <FormField
        type="text"
        placeholder="Name"
        id="name"
        name="name"
        value={formData.name}
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
        formMessage={formMessage.name}
      />

      <FormField
        type="number"
        placeholder="age"
        id="age"
        name="age"
        value={formData.age}
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
        formMessage={formMessage.age}
      />

      <FormField
        type="email"
        placeholder="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
        formMessage={formMessage.email}
      />

      <BtnSubmit handleSubmit={handleSubmit} />

      {isMaxContacts && (
        <Modal
          onClose={() => setIsMaxContacts(false)}
          message="You have reached the maximum number of contacts."
        />
      )}
    </form>
  );
}
