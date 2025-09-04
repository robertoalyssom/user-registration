import { useContext } from "react";
import AuthContext from "./AuthContext.js";

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
