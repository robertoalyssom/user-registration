import "./style.css";
import { Link } from "react-router";
import FormField from "../../ui/FormField/index.jsx";
import BtnSubmit from "../../ui/BtnSubmit/index.jsx";
import loginUser from "../../../services/login.js";
import useAuthContext from "../../../context/AuthContext/useAuthContext.js";
import useForm from "../../../hooks/useForm.jsx";
import useServerErrorMsgContext from "../../../context/ServerErrorMsgContext/useServerErrorMsgContext.js";
import ServerErrorMsg from "../../ui/ServerErrorMsg/index.jsx";

const formBlueprint = {
  email: "",
  password: "",
};

export default function LoginForm(props) {
  const { login, setUserToken, setUserData } = useAuthContext();
  const { setIsLoading } = props;
  const { errorMsg, setErrorMsg } = useServerErrorMsgContext();
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
    setUserToken("");
    try {
      const res = await loginUser({
        email: formData.email,
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
        type="password"
        placeholder="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
        formMessage={formMessage.password}
      />

      <BtnSubmit handleSubmit={handleSubmit} />

      <div className="form__links">
        <Link to={"#"}>Forgot password</Link>
        <Link to={"/signup"}>Create an account</Link>
      </div>
    </form>
  );
}
