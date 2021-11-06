import React from "react";
import Swal from "sweetalert2";

import { firebase, provider } from "../../../firebase/firebaseConfig";
import logo from "../../../images/logo.svg";
import google from "../../../images/google.svg";

import "./register.css";

const Register = () => {
  const startLoginWithGoogle = async () => {
    try {
      await firebase.auth().signInWithPopup(provider);
      Swal.fire("", "Te has registrado con exito", "success");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <>
      <div className="background-color"></div>
      <div className="register__box-info">
        <div className="register__box-img">
          <img src={logo} alt="" />
        </div>
        <div className="register__box-for-register">
          <div className="register__content_info">
            <h1>LOREM IPSUM DOLOR</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div
              onClick={startLoginWithGoogle}
              className="register__login_google"
            >
              <div className="register__logo-google">
                <img src={google} alt="" />
              </div>
              <div className="register__title-logo">
                <p>Sing in with Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
