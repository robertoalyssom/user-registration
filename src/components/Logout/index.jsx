import "./style.css";
import useAuthContext from "../../context/AuthContext/useAuthContext.js";
import logoutUser from "../../services/logout.js";
import deleteUser from "../../services/deleteUser.js";

export default function Logout() {
  const { logout } = useAuthContext();

  function handleLogout() {
    logoutUser();
    logout();
  }

  async function handleDeleteAccount() {
    const data = await deleteUser();
    data.message && logout();
  }

  return (
    <div className="logout-ctn">
      <button className="delete-account_btn" onClick={handleDeleteAccount}>
        Delete account
      </button>
      <p>Log out</p>
      <button className="logout-btn" onClick={handleLogout}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </button>
    </div>
  );
}
