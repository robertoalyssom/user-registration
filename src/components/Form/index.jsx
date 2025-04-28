import "./style.css";
import { useState, useEffect } from "react";
import { useFormContext } from "../../context/useFormContext";
import FormErrorMessage from "../FormErrorMesage";
import { validateForm } from "../../utils/validateForm";

const formNamesBlueprint = {
  name: "",
  age: "",
  email: "",
};

const Form = () => {
  const [formData, setFormData] = useState(formNamesBlueprint);
  const [formMessage, setFormMessage] = useState(formNamesBlueprint);
  const {
    createNewUser,
    updateUser,
    editedUser,
    setEditedUser,
    setIsGettingUsers,
  } = useFormContext();

  useEffect(() => {
    const editedUserData = {
      id: editedUser.id,
      name: editedUser.name,
      age: editedUser.age,
      email: editedUser.email,
    };
    Object.keys(editedUser).length > 0 && setFormData(editedUserData);
  }, [editedUser]);

  function handleChange(e) {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };

    setFormData(updatedFormData);
  }

  function handleBlur(e) {
    e.preventDefault();
    const inputName = e.target.name;

    setFormMessage((prevMessage) => ({
      ...prevMessage,
      [inputName]: validateForm(formData, inputName),
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const messagesList = Object.values(formMessage);
    const withoutFormValues = messagesList.some((msg) => msg === "");
    const isFormValid = messagesList.every((msg) => msg === "");

    if (withoutFormValues || !isFormValid) {
      // display form messages for each enpty field or invalid field
      const newMessages = {};

      Object.keys(formData).forEach((formKey) => {
        newMessages[formKey] = validateForm(formData, formKey);
      });

      setFormMessage((prevMessage) => ({
        ...prevMessage,
        ...newMessages,
      }));
      return;
    }

    setIsGettingUsers(true);
    if (editedUser.name) updateUser(formData);
    else createNewUser(formData);

    setFormData(formNamesBlueprint);
    setEditedUser({});
  }

  return (
    <form className="form">
      <div className="field-ctn">
        <input
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />
        <FormErrorMessage>{formMessage.name}</FormErrorMessage>
      </div>

      <div className="field-ctn">
        <input
          type="number"
          placeholder="Age"
          id="age"
          name="age"
          value={formData.age}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />
        <FormErrorMessage>{formMessage.age}</FormErrorMessage>
      </div>

      <div className="field-ctn">
        <input
          type="email"
          placeholder="E-mail"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />
        <FormErrorMessage>{formMessage.email}</FormErrorMessage>
      </div>

      <button type="button" className="btn-submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
