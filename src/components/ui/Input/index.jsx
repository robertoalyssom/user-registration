import "./style.css";

export default function Input(props) {
  const { type, placeholder, id, name, value, onChange, onBlur } = props;

  return (
    <input
      className="input-form"
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}
