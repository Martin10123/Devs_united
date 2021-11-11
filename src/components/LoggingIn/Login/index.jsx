import React, { useContext, useEffect, useState } from "react";
import { colors, ColorsContext } from "../../../context/PainterColor";
import { UserContext } from "../../../context/UsernameContext";
import logo from "../../../images/logo.svg";

import "./login.css";

const Login = () => {
  const [disabledUser, setDisabledUser] = useState(false);
  const { sentTweet, handleSentTweet } = useContext(UserContext);
  const { setColorSelect } = useContext(ColorsContext);

  useEffect(() => {
    if (sentTweet.username?.length <= 4 && sentTweet.username?.length <= 25) {
      setDisabledUser(false);
    } else {
      setDisabledUser(true);
    }
  }, [sentTweet.username]);

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
                value={sentTweet?.username}
                onChange={handleSentTweet}
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
