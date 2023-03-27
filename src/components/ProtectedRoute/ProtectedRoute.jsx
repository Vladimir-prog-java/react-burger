import { useSelector } from "react-redux";
import { Route, Redirect, useLocation  } from "react-router-dom";

const ProtectedRoute = ({ children, path, onlyUnAuth = false }) => {
  const authorized = useSelector(
    (store) => store.authorizationReducer.authorized
  );
//   const location  = useLocation();
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
          // return <Redirect to={location?.state?.from || '/'} />;
          return <Redirect to="/login" />;
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
