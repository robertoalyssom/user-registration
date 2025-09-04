import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app.jsx";
import { BrowserRouter } from "react-router";
import AuthProvider from "./context/AuthContext/AuthProvider.jsx";
import ServerErrorMsgProvider from "./context/ServerErrorMsgContext/ServerErrorMsgProvider.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <ServerErrorMsgProvider>
        <App />
      </ServerErrorMsgProvider>
    </AuthProvider>
  </BrowserRouter>
  // </StrictMode>
);
