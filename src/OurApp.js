import React from "react";

import AppRouter from "./routers/AppRouter";
import { EfectTweets } from "./context/efectTweets";
import { UsernameContext } from "./context/UsernameContext";
import { UserContext } from "./context/UserGoogleContext";

import "./App.css";

const OurApp = () => {
  return (
    <UserContext>
      <UsernameContext>
        <EfectTweets>
          <AppRouter />
        </EfectTweets>
      </UsernameContext>
    </UserContext>
  );
};

export default OurApp;
