import React from "react";

import { EfectTweets } from "./context/efectTweets";
import { ColorsProvider } from "./context/PainterColor";
import AppRouter from "./routers/AppRouter";
import { UsernameContext } from "./context/UsernameContext";

import "./App.css";

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
