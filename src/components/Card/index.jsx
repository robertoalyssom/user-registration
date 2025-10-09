import "./style.css";
import useAuthContext from "../../context/AuthContext/useAuthContext";

const Card = (props) => {
  const { contact, deleteContact, setEditedContact } = props;
  const { id, name, age, email } = contact;
  const { verifyToken } = useAuthContext();

  async function handleBtnClick(e) {
    await verifyToken();

    const btnId = e.target.id;
    btnId === "btn-trash" && deleteContact(id);
    btnId === "btn-edit" && setEditedContact(id, name, age, email);
  }

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="card"
      key={contact.id}
    >
      <div className="card-info">
        <p>
          <strong>Name:</strong> {contact.name}
        </p>
        <p>
          <strong>Age:</strong> {contact.age}
        </p>
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
      </div>
      <div className="card-btns">
        <a href="#form-ctn">
          <i
            className="fa-solid fa-pen-to-square btn-edit"
            id="btn-edit"
            onClick={handleBtnClick}
          ></i>
        </a>
        <i
          className="fa-solid fa-trash btn-trash"
          id="btn-trash"
          onClick={handleBtnClick}
        ></i>
      </div>
    </div>
  );
};

export default Card;
