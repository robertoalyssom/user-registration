import createUsers from "../services/createUser";
import editUser from "../services/editUser";
import { FormContext } from "./FormContext";

export function FormProvider({
  children,
  users,
  setUsers,
  setIsModalOpen,
  setIsGettingUsers,
  editedUser,
  setEditedUser,
}) {
  const createNewUser = (formData) => {
    const { name, age, email } = formData;
    createUsers({
      name,
      age,
      email,
      users,
      setUsers,
      setIsModalOpen,
      setIsGettingUsers,
    });
  };

  const updateUser = (formData) => {
    const { id, name, age, email } = formData;
    editUser(id, name, age, email, setUsers, setIsGettingUsers);
  };

  return (
    <FormContext.Provider
      value={{
        createNewUser,
        updateUser,
        editedUser,
        setEditedUser,
        setIsGettingUsers,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
