import React, { useContext, useEffect, useState } from "react";
import { colors, ColorsContext } from "../../../context/PainterColor";
import logo from "../../../images/logo.svg";

import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [disabledUser, setDisabledUser] = useState(false);
  const { setColorSelect } = useContext(ColorsContext);

  const handleSentLogin = (e) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    if (username.length <= 4 && username.length <= 25) {
      setDisabledUser(false);
    } else {
      setDisabledUser(true);
    }
  }, [username]);

  return (
    <>
      <div className="background-color"></div>
      <div className="login__box-info">
        <div className="login__box-img">
          <img src={logo} alt="" />
        </div>
        <div className="login__box-in">
          <div className="login__content_info">
            <h1>
              WELCOME <b>NAME!</b>
            </h1>
            <form className="form__login">
              <input
                name="username"
                value={username}
                onChange={handleSentLogin}
                autoComplete="off"
                maxLength="25"
                required
                placeholder="Escribe tu usuario..."
              />
              <div className="login__select-color">
                <p>Select your favorite color</p>
                <div className="login__box-color-select">
                  {colors.map((color, i) => (
                    <div
                      key={i}
                      className="contain_color"
                      style={{ backgroundColor: color.hex }}
                      onClick={() => setColorSelect(color)}
                    />
                  ))}
                </div>
                {!disabledUser ? (
                  <button className="btn_disable">Continue</button>
                ) : (
                  <button className="btn_on">Continue</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
