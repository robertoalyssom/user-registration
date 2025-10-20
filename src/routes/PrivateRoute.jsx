import { Navigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext/useAuthContext.js";

export default function PrivateRoute({ children }) {
  const { isAuthenticated, isLoadingData } = useAuthContext();

  // isLoadingData check to prevent redirect during loading state
  if (!isAuthenticated && !isLoadingData) return <Navigate to="/login" />;

  return children;
}
