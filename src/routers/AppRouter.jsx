import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LoadingPage from "../components/Loading";

import { UserGoogleContext } from "../context/UserGoogleContext";
import { UserContext } from "../context/UsernameContext";
import Login from "../components/LoggingIn/Login";
import Register from "../components/LoggingIn/Register";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import SecondRouter from "./SecondRouter";
import PublicRouteLogin from "./PublicRouteLogin";

const AppRouter = () => {
  const { loading, authenticated } = useContext(UserGoogleContext);
  const { usersName, loadingUsername } = useContext(UserContext);

  if (loading || loadingUsername) {
    return <LoadingPage />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={authenticated}
            exact
            path="/register"
            component={Register}
          />
          <PublicRouteLogin
            isAuthenticated={authenticated}
            usersName={usersName}
            exact
            path="/login"
            component={Login}
          />
          <PrivateRoute
            isAuthenticated={authenticated}
            usersName={usersName}
            exact
            path=""
            component={SecondRouter}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
