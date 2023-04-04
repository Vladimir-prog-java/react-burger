import { FC } from "react";
import AuthenticationForm from "../../components/AuthenticationForm/AuthenticationForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export const LoginPage: FC = () => (
  <>
    <AuthenticationForm>
      <LoginForm />
    </AuthenticationForm>
  </>
);
