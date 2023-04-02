import { FC } from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import AuthenticationForm from "../../components/AuthenticationForm/AuthenticationForm";
import ForgotPasswordForm from "../../components/ForgotPasswordForm/ForgotPasswordForm";

export const ForgotPasswordPage: FC = () => {
  return (
    <>
      <AppHeader />
      <AuthenticationForm>
        <ForgotPasswordForm />
      </AuthenticationForm>
    </>
  );
};
