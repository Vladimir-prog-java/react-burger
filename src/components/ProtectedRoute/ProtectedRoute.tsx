import { FC, ReactNode } from "react";
// import { useSelector } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";
// import {RootState} from "../../services/reducers/rootReducer";
import {getCookie} from "../../services/utils"

const ProtectedRoute: FC<{
  children: ReactNode;
  path: string;
  onlyUnAuth: boolean;
  exact: boolean;
}>  = ({ onlyUnAuth, children, ...rest}) => {
  // const authorized = useSelector(
  //   (store: RootState) => store.authorizationReducer.authorized
  // );
  const isAuthorized = getCookie("accessToken");
  const location  = useLocation();

  // return (
  //   <Route
  //     path={path}
  //     exact={true}
  //     render={() => {
  //       if (authorized && onlyUnAuth) {
  //         return children;
  //       }
  //       if (!authorized && onlyUnAuth) {
  //         return  <Redirect to={{ pathname: "/login", state: { from: location } }} />;
  //         // return <Redirect to="/login" />;
  //       }
  //       if (!authorized && !onlyUnAuth) {
  //         return children;
  //       }
  //       if (authorized && !onlyUnAuth) {
  //         return <Redirect to="/" />;
  //       }
  //     }}
  //   />
  // );
  if (!onlyUnAuth && isAuthorized) {
    const { from } = location.state as any || { from: { pathname: "/" } };
    return (
      <Route {...rest}>
        <Redirect to={from} />
      </Route>
    );
  }

  if (onlyUnAuth && !isAuthorized) {
    return (
      <Route {...rest}>
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      </Route>
    );
  }

  return <Route {...rest}>{children}</Route>;

};

export default ProtectedRoute;
