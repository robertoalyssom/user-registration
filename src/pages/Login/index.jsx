import "./style.css";
import { useState } from "react";
import PageContainer from "../../components/ui/PageContainer";
import LoginForm from "../../components/forms/LoginForm";
import Loading from "../../components/ui/Loading";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <PageContainer title="User Registration" subtitle="Log in">
      <LoginForm setIsLoading={setIsLoading} />

      {isLoading && <Loading />}
    </PageContainer>
  );
}
