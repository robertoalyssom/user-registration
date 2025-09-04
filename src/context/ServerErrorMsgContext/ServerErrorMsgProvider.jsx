import { useState } from "react";
import ServerErrorMsgContext from "./ServerErrorMsgContext.js";

export default function ServerErrorMsgProvider({ children }) {
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <ServerErrorMsgContext.Provider value={{ errorMsg, setErrorMsg }}>
      {children}
    </ServerErrorMsgContext.Provider>
  );
}
