import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/MainScreen/Header";
import Profile from "../components/Profile";

const SecondRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Header} />
        <Route exact path="/home/profile" component={Profile} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default SecondRouter;
