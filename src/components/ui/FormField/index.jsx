import "./style.css";
import Input from "../Input/index.jsx";
import FormErrorMessage from "../FormErrorMesage/index.jsx";

export default function FormField(inputProps) {
  return (
    <div className="field-ctn">
      <Input {...inputProps} />
      <FormErrorMessage>{inputProps.formMessage}</FormErrorMessage>
    </div>
  );
}
