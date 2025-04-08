import "./style.css";

const Card = (props) => {
  const { user, deleteUser, setEditedUser } = props;

  function handleBtnClick(e) {
    const btnId = e.target.id;
    btnId === "btn-trash" && deleteUser(user.id);
    btnId === "btn-edit" &&
      setEditedUser(user.id, user.name, user.age, user.email);
  }

  return (
    <div className="card" key={user.id}>
      <div className="card-info">
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
      </div>
      <div className="card-btns">
        <i
          className="fa-solid fa-pen-to-square btn-edit"
          id="btn-edit"
          onClick={handleBtnClick}
        ></i>
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
