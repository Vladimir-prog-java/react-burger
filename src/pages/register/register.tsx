import { FC } from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import AuthenticationForm from "../../components/AuthenticationForm/AuthenticationForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm"

export const RegisterPage: FC = () => (
  <>
    <AppHeader />
    <AuthenticationForm>
      <RegisterForm />
    </AuthenticationForm>
  </>
);