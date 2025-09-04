import { useContext } from "react";
// import ServerErrorMsgProvider from "./ServerErrorMsgProvider.jsx";
import ServerErrorMsgContext from "./ServerErrorMsgContext.js";

const useServerErrorMsg = () => useContext(ServerErrorMsgContext);

export default useServerErrorMsg;
