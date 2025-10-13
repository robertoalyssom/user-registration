import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import AuthContext from "./AuthContext.js";
import refreshToken from "../../services/refreshToken.js";
import { attachTokenInterceptor } from "../../services/api.js";

/*
  AuthProvider is a context provider that manages authentication state.
*/
export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Attach token interceptor to API requests
    attachTokenInterceptor(() => userToken);

    if (!userToken) verifyToken();
    else login();
  }, [userToken]);

  useEffect(() => {
    isAuthenticated && navigate("/");
  }, [isAuthenticated]);

  async function verifyToken() {
    try {
      const data = await refreshToken();
      if (!data) {
        setUserToken("");
        setUserData({});
        logout();
        return;
      }
      setUserToken(data.token);
      setUserData(data.user);
    } catch (error) {
      console.error("Token verification failed:", error);
    }
  }

  const login = () => setIsAuthenticated(true); // this function log in user
  const logout = () => {
    setUserToken("");
    setIsAuthenticated(false); // log out user
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        userToken,
        setUserToken,
        userData,
        setUserData,
        verifyToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
