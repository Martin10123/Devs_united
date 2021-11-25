import React from "react";

import { Route, Redirect } from "react-router-dom";

const PublicRouteLogin = ({
  isAuthenticated,
  usersName,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        usersName.uid !== undefined ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRouteLogin;
