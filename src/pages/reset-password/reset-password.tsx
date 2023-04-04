import { FC } from "react";
import AuthenticationForm from "../../components/AuthenticationForm/AuthenticationForm";
import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm";
import { useHistory, Redirect } from "react-router-dom";

export const ResetPasswordPage: FC = () => {
  const history = useHistory();
  const redirect = history.location.state !== "forgot-password";
  return (
    <>
      <AuthenticationForm>
        <ResetPasswordForm />
      </AuthenticationForm>
      {redirect && <Redirect to="/" />}
    </>
  );
};
