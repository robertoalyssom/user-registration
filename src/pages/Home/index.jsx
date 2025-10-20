import "./style.css";
import { useState, useEffect } from "react";
import getContacts from "../../services/getContacts.js";
import deleteContact from "../../services/deleteContact.js";
import Logout from "../../components/Logout";
import FormContact from "../../components/forms/ContactForm";
import Card from "../../components/Card";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import Modal from "../../components/Modal";
import { FormProvider } from "../../context/FormContext/FormProvider.jsx";
import useAuthContext from "../../context/AuthContext/useAuthContext.js";
import PageContainer from "../../components/ui/PageContainer/index.jsx";

function Home() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedContact, setEditedContact] = useState({});
  const { userToken, userData, setUserData } = useAuthContext();

  useEffect(() => {
    setContacts([]);

    // Fetch contacts if userToken is available
    userToken && getContacts(setContacts, setIsLoading);
    setUserData(userData);
  }, [userToken]);

  const contactCard =
    contacts.length > 0 &&
    contacts.map((contact) => {
      return (
        <Card
          key={contact.id}
          contact={contact}
          deleteContact={(id) =>
            deleteContact({ id, setContacts, setIsLoading })
          }
          setEditedContact={(id, newName, newAge, newEmail) =>
            setEditedContact({
              id: id,
              name: newName,
              age: newAge,
              email: newEmail,
            })
          }
        />
      );
    });

  function takeFirstName(name) {
    const firstName = name.substring(0, name.indexOf(" "));
    return !firstName ? name : firstName;
  }

  return (
    <>
      <main className="main-home">
        <Logout />
        <div className="main-form-ctn">
          <h2 className="user-welcome">
            Welcome {takeFirstName(userData.name)}
          </h2>
          <PageContainer>
            <FormProvider
              contacts={contacts}
              setContacts={setContacts}
              setIsModalOpen={setIsModalOpen}
              setIsLoading={setIsLoading}
              editedContact={editedContact}
              setEditedContact={setEditedContact}
            >
              <FormContact />
            </FormProvider>
          </PageContainer>
        </div>

        {isLoading && <LoadingSpinner />}

        <div className="container-cards">{contactCard}</div>
      </main>

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          message="This email is already in use. Please try a different one."
        />
      )}
      {/* </div> */}
    </>
  );
}

export default Home;
