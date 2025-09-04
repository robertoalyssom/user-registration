import "./style.css";
import FormField from "../../ui/FormField/index.jsx";
import createUser from "../../../services/createUser.js";
import BtnSubmit from "../../ui/BtnSubmit/index.jsx";
import { Link } from "react-router";
import useAuthContext from "../../../context/AuthContext/useAuthContext.js";
import useForm from "../../../hooks/useForm.jsx";
import useServerErrorMsg from "../../../context/ServerErrorMsgContext/useServerErrorMsgContext.js";
import ServerErrorMsg from "../../ui/ServerErrorMsg/index.jsx";

const formBlueprint = {
  email: "",
  name: "",
  password: "",
  repeatPassword: "",
};

export default function SignupForm(props) {
  const { login, setUserToken, setUserData } = useAuthContext();
  const { setIsLoading } = props;
  const { errorMsg, setErrorMsg } = useServerErrorMsg();
  const {
    formData,
    formMessage,
    setFormMessage,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(formBlueprint, submitFormCallback);

  async function submitFormCallback(formData) {
    setIsLoading(true);
    setErrorMsg("");
    try {
      const res = await createUser({
        email: formData.email,
        name: formData.name,
        password: formData.password,
      });
      if (!res.success) throw res;

      setUserToken(res.data.token);
      setUserData(res.data.user);
      login();
    } catch (err) {
      if (!err.field) setErrorMsg(err.message);
      else setFormMessage({ [err.field]: err.message });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="form">
      <ServerErrorMsg serverError={errorMsg} />
      <FormField
        type="email"
        placeholder="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
        formMessage={formMessage.email}
      />

      <FormField
        type="text"
        placeholder="complete Name"
        id="name"
        name="name"
        value={formData.name}
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
        formMessage={formMessage.name}
      />

      <FormField
        type="password"
        placeholder="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
        formMessage={formMessage.password}
      />

      <FormField
        type="password"
        placeholder="repeat password"
        id="repeatPassword"
        name="repeatPassword"
        value={formData.repeatPassword}
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
        formMessage={formMessage.repeatPassword}
      />

      <BtnSubmit handleSubmit={handleSubmit} />

      <div className="form__links">
        <p className="form__links-text">
          Already have an account? <Link to={"/login"}>Log in</Link>
        </p>
      </div>
    </form>
  );
}
