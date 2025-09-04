import "./style.css";

const FormErrorMessage = ({ children }) => {
  if (!children) return null;

  return <span className="form-message">{children}</span>;
};

export default FormErrorMessage;
