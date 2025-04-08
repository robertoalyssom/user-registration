import "./style.css";

const Modal = ({ onClose, message }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>Ok</button>
      </div>
    </div>
  );
};

export default Modal;
