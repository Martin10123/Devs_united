import React from "react";

import { EfectTweets } from "./context/efectTweets";
import { ColorsProvider } from "./context/PainterColor";
import AppRouter from "./routers/AppRouter";

import "./App.css";

const OurApp = () => {
  return (
    <EfectTweets>
      <ColorsProvider>
        <AppRouter />
      </ColorsProvider>
    </EfectTweets>
  );
};

export default OurApp;
