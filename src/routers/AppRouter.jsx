import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingPage from "../components/Loading";

import { CollectionContext } from "../context/efectTweets";
import Login from "../components/LoggingIn/Login";
import Register from "../components/LoggingIn/Register";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import SecondRouter from "./SecondRouter";

const AppRouter = () => {
  const { loading, authenticated } = useContext(CollectionContext);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PublicRoute
            isAuthenticated={authenticated}
            exact
            path="/register"
            component={Register}
          />
          <PrivateRoute
            isAuthenticated={authenticated}
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
