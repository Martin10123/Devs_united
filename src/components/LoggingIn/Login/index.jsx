import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import { CollectionContext } from "../../../context/efectTweets";
import { firestore } from "../../../firebase/firebaseConfig";

import logo from "../../../images/logo.svg";

import "./login.css";

const colors = [
  { name: "rosado", hex: "#ffa6c9" },
  { name: "naranja", hex: "#FF865C" },
  { name: "amarillo", hex: "#FFEA5C" },
  { name: "verde", hex: "#00DA76" },
  { name: "azul", hex: "#0096CE" },
  { name: "morado", hex: "#800FFF" },
];

const Login = () => {
  const { user } = useContext(CollectionContext);
  const [colorSelect, setColorSelect] = useState(colors[0]);
  const [disabledUser, setDisabledUser] = useState(false);
  const [sentUser, setSentUser] = useState({
    user: "",
  });

  const history = useHistory();

  const handleChangeUser = ({ target }) => {
    const newData = {
      user: target.value,
      color: colorSelect.hex,
      uid: user.uid,
    };

    console.log(newData);
    setSentUser(newData);
  };

  useEffect(() => {
    if (
      sentUser.user?.trim().length <= 4 &&
      sentUser.user?.trim().length <= 25
    ) {
      setDisabledUser(false);
    } else {
      setDisabledUser(true);
    }
  }, [sentUser.user]);

  const handleChangeColor = (color) => {
    setColorSelect(color);
  };

  const handleInputChange = async (e) => {
    e.preventDefault();
    try {
      await firestore.collection(`username/${user?.uid}/data`).add(sentUser);
      setSentUser({ user: "" });
      history.go(0);
    } catch (error) {
      Swal.fire("", error.message, "error");
    }
  };

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
              WELCOME <b>{user?.displayName}!</b>
            </h1>
            <form onSubmit={handleInputChange} className="form__login">
              <input
                name="user"
                value={sentUser?.user}
                onChange={handleChangeUser}
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
                      onClick={() => handleChangeColor(color)}
                    />
                  ))}
                </div>
                {!disabledUser ? (
                  <button className="btn_disable">Continue</button>
                ) : (
                  <button type="submit" className="btn_on">
                    Continue
                  </button>
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
