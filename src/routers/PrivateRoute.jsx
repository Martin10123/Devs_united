import React from "react";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  isAuthenticated,
  usersName,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        usersName.uid === undefined || !isAuthenticated ? (
          <Redirect to="/register" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
