import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AuthenticationForm.module.css"

const AuthenticationForm = ({ children }) => (
  <div className={`${styles.container} ${styles.flexColumnCenter}`}>
    <Logo />
    { children }
  </div>
);

export default AuthenticationForm;