import { FC } from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import AuthenticationForm from "../../components/AuthenticationForm/AuthenticationForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export const LoginPage: FC = () => (
  <>
    <AppHeader />
    <AuthenticationForm>
      <LoginForm />
    </AuthenticationForm>
  </>
);
