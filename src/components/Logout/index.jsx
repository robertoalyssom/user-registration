import "./style.css";
import useAuthContext from "../../context/AuthContext/useAuthContext.js";
import logoutUser from "../../services/logout.js";

export default function Logout() {
  const { logout } = useAuthContext();

  function handleLogout() {
    logoutUser();
    logout();
  }

  return (
    <div className="logout-ctn">
      <p>Log out</p>
      <button className="logout-btn" onClick={handleLogout}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </button>
    </div>
  );
}
