import "./style.css";
import { useState, useEffect } from "react";
import getUsers from "../../services/getUsers";
import deleteUsers from "../../services/deleteUsers";
import Form from "../../components/Form";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import Modal from "../../components/Modal";
import { FormProvider } from "../../context/FormProvider.jsx";

function Home() {
  const [users, setUsers] = useState([]);
  const [isGettingUsers, setIsGettingUsers] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    getUsers(setUsers, setIsGettingUsers);
  }, []);

  const userCard = users.map((user) => {
    return (
      <Card
        user={user}
        key={user.id}
        deleteUser={(id) => deleteUsers(id, setUsers, setIsGettingUsers)}
        setUsers={setUsers}
        setEditedUser={(id, newName, newAge, newEmail) =>
          setEditedUser({ id: id, name: newName, age: newAge, email: newEmail })
        }
        setIsGettingUsers={setIsGettingUsers}
      />
    );
  });

  return (
    <div className="container">
      <FormProvider
        users={users}
        setUsers={setUsers}
        setIsModalOpen={setIsModalOpen}
        setIsGettingUsers={setIsGettingUsers}
        editedUser={editedUser}
        setEditedUser={setEditedUser}
      >
        <div className="container-form">
          <h2>User Registration</h2>
          <Form />
        </div>
      </FormProvider>

      {isGettingUsers && <Loading />}

      <div className="container-cards">{userCard}</div>

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          message="This email is already in use. Please try a different one."
        />
      )}
    </div>
  );
}

export default Home;
