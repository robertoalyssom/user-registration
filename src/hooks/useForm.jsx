import { useState } from "react";
import { validateForm } from "../utils/validateForm";

/*
  useForm is a custom hook that manages form state and validation.
*/
export default function useForm(formBlueprint, callback) {
  const [formData, setFormData] = useState(formBlueprint);
  const [formMessage, setFormMessage] = useState(formBlueprint);

  function handleChange(e) {
    const inputValue = e.target.value;
    const inputName = e.target.name;

    setFormData((prev) => {
      return {
        ...prev,
        [inputName]: inputValue,
      };
    });
  }

  function handleBlur(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const errorMessage = validateForm(formData, inputName, inputValue);

    setFormMessage((prev) => {
      return { ...prev, [inputName]: errorMessage };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    Object.keys(formMessage).forEach((fieldName) => {
      newErrors[fieldName] = validateForm(
        formData,
        fieldName,
        formData[fieldName]
      );
      setFormMessage(newErrors);
    });
    const isFormValid = Object.values(newErrors).every((error) => error === "");

    if (isFormValid) {
      // submit form
      callback(formData);
    }
  }

  return {
    formData,
    setFormData,
    formMessage,
    setFormMessage,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}
