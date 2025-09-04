import { Navigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext/useAuthContext.js";

export default function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
