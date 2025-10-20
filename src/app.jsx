import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import useAuthContext from "./context/AuthContext/useAuthContext.js";
import LoadingSpinner from "./components/ui/LoadingSpinner";

export default function App() {
  const { isLoadingData } = useAuthContext();

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* Private Route */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            {isLoadingData ? <LoadingSpinner /> : <Home />}
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
}
