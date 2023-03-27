import AppHeader from "../../components/AppHeader/AppHeader";
import AuthenticationForm from "../../components/AuthenticationForm/AuthenticationForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm"

export const RegisterPage = () => (
  <>
    <AppHeader />
    <AuthenticationForm>
      <RegisterForm />
    </AuthenticationForm>
  </>
);