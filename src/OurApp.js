import React from "react";

import { EfectTweets } from "./context/efectTweets";
import AppRouter from "./routers/AppRouter";
import { UsernameContext } from "./context/UsernameContext";

import "./App.css";

const OurApp = () => {
  return (
    <EfectTweets>
      <UsernameContext>
        <AppRouter />
      </UsernameContext>
    </EfectTweets>
  );
};

export default OurApp;
