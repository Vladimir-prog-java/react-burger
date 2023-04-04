import { FC } from "react";
import AuthenticationForm from "../../components/AuthenticationForm/AuthenticationForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm"

export const RegisterPage: FC = () => (
  <>
    <AuthenticationForm>
      <RegisterForm />
    </AuthenticationForm>
  </>
);