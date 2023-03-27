import AppHeader from "../../components/AppHeader/AppHeader";
import AuthenticationForm from "../../components/AuthenticationForm/AuthenticationForm";
import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm";
import { useHistory, Redirect } from "react-router-dom";

export const ResetPasswordPage = () => {
  const history = useHistory();
  const redirect = history.location.state !== "forgot-password";
  return (
    <>
      <AppHeader />
      <AuthenticationForm>
        <ResetPasswordForm />
      </AuthenticationForm>
      {redirect && <Redirect to="/" />}
    </>
  );
};
