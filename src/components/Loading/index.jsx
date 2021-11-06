import React from "react";
import loading from "../../images/Loading.svg";

import "./loading.css";

const LoadingPage = () => {
  return (
    <div className="loading_color">
      <div className="loading_content">
        <h1>Por favor espere un momento...</h1>
        <img src={loading} alt="" />
      </div>
    </div>
  );
};

export default LoadingPage;
