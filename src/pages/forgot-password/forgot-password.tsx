import { FC } from "react";
import AuthenticationForm from "../../components/AuthenticationForm/AuthenticationForm";
import ForgotPasswordForm from "../../components/ForgotPasswordForm/ForgotPasswordForm";

export const ForgotPasswordPage: FC = () => {
  return (
    <>
      <AuthenticationForm>
        <ForgotPasswordForm />
      </AuthenticationForm>
    </>
  );
};
