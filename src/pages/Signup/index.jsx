import "./style.css";
import { useState } from "react";
import SignupForm from "../../components/forms/SignupForm";
import PageContainer from "../../components/ui/PageContainer";
import Loading from "../../components/ui/Loading";
import { Navigate } from "react-router";
import useAuthContext from "../../context/AuthContext/useAuthContext";

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <main className="main-signup">
      <PageContainer title="User Registration" subtitle="Sign up">
        <SignupForm setIsLoading={setIsLoading} />

        {isLoading && <Loading />}
      </PageContainer>
    </main>
  );
}
