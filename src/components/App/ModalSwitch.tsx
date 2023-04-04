import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  NotFoundPage,
  ProfilePage,
  OrdersHistoryPage,
  BurgerIngredientPage,
  BurgerIngredientModal,
  OrderDetailsModal,
} from "../../pages";
import { useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import { getUserData } from "../../services/actions/authorization-actions";

const ModalSwitch: FC = () => {
  const location: any = useLocation();
  const history: any = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  let background =
    (history.action === "PUSH" || history.action === "REPLACE") &&
    location.state &&
    location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <ProtectedRoute path="/login"  onlyUnAuth = {false} exact={true}>
          <LoginPage />
        </ProtectedRoute>
        <ProtectedRoute path="/register" onlyUnAuth = {false} exact={true}>
          <RegisterPage />
        </ProtectedRoute>
        <ProtectedRoute path="/forgot-password"  onlyUnAuth = {false} exact={true}>
          <ForgotPasswordPage />
        </ProtectedRoute>
        <ProtectedRoute path="/reset-password"  onlyUnAuth = {false} exact={true}>
          <ResetPasswordPage />
        </ProtectedRoute>
        <ProtectedRoute path="/profile" exact={true} onlyUnAuth={true}>
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/orders" exact={true} onlyUnAuth={true}>
          <OrdersHistoryPage />
        </ProtectedRoute>
        <Route path="/ingredients/:id">
          <BurgerIngredientPage />
        </Route>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      {background && (
        <>
          <Route path="/ingredients/:id" exact={true}>
            <BurgerIngredientModal />
          </Route>
          <Route path="/order-details" exact={true}>
            <OrderDetailsModal />
          </Route>
        </>
      )}
    </>
  );
}

export default ModalSwitch;
