import "./style.css";

export default function BtnSubmit(props) {
  const { handleSubmit } = props;

  return (
    <button type="button" className="btn-submit" onClick={handleSubmit}>
      Submit
    </button>
  );
}
