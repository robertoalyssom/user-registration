import "./style.css";
import { useState, useEffect } from "react";
import { useFormContext } from "../../context/useFormContext";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setIsGettingUsers(true);
    if (editedUser.name) updateUser(formData);
    else createNewUser(formData);

    setFormData({
      name: "",
      age: "",
      email: "",
    });
    setEditedUser({});
  }

  return (
    <form className="form">
      <input
        type="text"
        placeholder="Name"
        id="name"
        name="name"
        value={formData.name}
        onChange={(e) => handleChange(e)}
      />

      <input
        type="age"
        placeholder="Age"
        id="age"
        name="age"
        value={formData.age}
        onChange={(e) => handleChange(e)}
      />

      <input
        type="email"
        placeholder="E-mail"
        id="email"
        name="email"
        value={formData.email}
        onChange={(e) => handleChange(e)}
      />

      <button type="button" className="btn-submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
