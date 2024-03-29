import {FC, useRef, useEffect, useState } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import styles from "./ResetPasswordForm.module.css";
import {RootState} from "../../services/reducers/rootReducer";
import {
  SET_FORM_PASSWORD,
  SET_CONFIRMATION_CODE,
  UNSET_ERROR,
  setNewPassword,
} from "../../services/actions/authorization-actions";

const ResetPasswordForm: FC = () => {
  const dispatch = useDispatch();
  const { formPassword, formConfirmationCode, error, redirectToLogin } =
    useSelector((store: RootState) => store.authorizationReducer);
  const [isPasswordShow, setPasswordShow] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onIconClick = () => {
    inputRef.current?.focus();
    setPasswordShow(!isPasswordShow);
  };

  useEffect(() => {
    return () => {
      dispatch({ type: UNSET_ERROR })
    }
  }, [dispatch])

  return (
    <>
      <h2 className="mt-20 mb-6 text text_type_main-medium">
        Восстановление пароля
      </h2>
      {error && (
        <h2
          className="mb-6 text text_type_main-medium"
          style={{ textAlign: "center" }}
        >
          {error}
        </h2>
      )}
      <form className={`${styles.flexColumnCenter} mb-20`}>
        <div className="mb-6">
          <Input
            type={isPasswordShow ? "text" : "password"}
            placeholder={"Введите новый пароль"}
            icon={isPasswordShow ? "HideIcon" : "ShowIcon"}
            ref={inputRef}
            onIconClick={onIconClick}
            value={formPassword}
            onChange={(e) => {
              dispatch({
                type: SET_FORM_PASSWORD,
                formPassword: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            value={formConfirmationCode}
            onChange={(e) => {
              dispatch({
                type: SET_CONFIRMATION_CODE,
                formConfirmationCode: e.target.value,
              });
            }}
          />
        </div>
        <Button
          type="primary"
          htmlType="button"
          size="medium"
          onClick={(e) => {
            e.preventDefault();
            dispatch(setNewPassword(formPassword, formConfirmationCode));
          }}
        >
          Сохранить
        </Button>
      </form>
      <div>
        <div className={styles.displayFlex}>
          <p className={`${styles.text} text text_type_main-default`}>
            Вспомнили пароль?
          </p>
          <Link to="/login">
            <p className={`${styles.link} text text_type_main-default`}>
              Войти
            </p>
          </Link>
        </div>
      </div>
      {redirectToLogin && <Redirect to="/login" />}
    </>
  );
};

export default ResetPasswordForm;
