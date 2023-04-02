import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";
import {RootState} from "../../services/reducers/rootReducer";

const ProtectedRoute: FC<{
  children: ReactNode;
  path: string;
  onlyUnAuth: boolean;
  exact: boolean;
}>  = ({ children, path, onlyUnAuth = false }) => {
  const authorized = useSelector(
    (store: RootState) => store.authorizationReducer.authorized
  );
  const location  = useLocation();
// console.log("location", location);

  return (
    <Route
      path={path}
      exact={true}
      render={() => {
        if (authorized && onlyUnAuth) {
          return children;
        }
        if (!authorized && onlyUnAuth) {
          return  <Redirect to={{ pathname: "/login", state: { from: location } }} />;
          // return <Redirect to="/login" />;
        }
        if (!authorized && !onlyUnAuth) {
          return children;
        }
        if (authorized && !onlyUnAuth) {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
