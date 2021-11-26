import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Profile from "../components/Profile";
// import LoadingPage from "../components/Loading";

// import { CollectionContext } from "../context/efectTweets";
// import { UserContext } from "../context/UsernameContext";
// import Login from "../components/LoggingIn/Login";
// import Register from "../components/LoggingIn/Register";
// import PrivateRoute from "./PrivateRoute";
// import PublicRoute from "./PublicRoute";
// import SecondRouter from "./SecondRouter";
// import PublicRouteLogin from "./PublicRouteLogin";

const AppRouter = () => {
  // const { loading, authenticated } = useContext(CollectionContext);
  // const { usersName } = useContext(UserContext);

  // if (loading) {
  //   return <LoadingPage />;
  // }

  return (
    <Router>
      <div>
        <Switch>
          <Profile />
          {/* <PublicRoute
            isAuthenticated={authenticated}
            exact
            path="/register"
            component={Register}
          />
          <PublicRouteLogin
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
          /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
