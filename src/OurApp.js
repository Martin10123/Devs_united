import React from "react";

import { EfectTweets } from "./context/efectTweets";
import { ColorsProvider } from "./context/PainterColor";
import AppRouter from "./routers/AppRouter";

import "./App.css";
import { UsernameContext } from "./context/UsernameContext";

const OurApp = () => {
  return (
    <EfectTweets>
      <ColorsProvider>
        <UsernameContext>
          <AppRouter />
        </UsernameContext>
      </ColorsProvider>
    </EfectTweets>
  );
};

export default OurApp;
