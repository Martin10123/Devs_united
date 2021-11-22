import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CollectionContext } from "../../../context/efectTweets";
import { colors, ColorsContext } from "../../../context/PainterColor";
import { firestore } from "../../../firebase/firebaseConfig";
// import { UserContext } from "../../../context/UsernameContext";
import logo from "../../../images/logo.svg";

import "./login.css";

const Login = () => {
  const { user } = useContext(CollectionContext);
  const [disabledUser, setDisabledUser] = useState(false);
  const [sentUser, setSentUser] = useState({
    user: "",
  });
  const { colorSelect, setColorSelect } = useContext(ColorsContext);

  const handleChangeUser = ({ target }) => {
    const newData = {
      user: target.value,
      color: colorSelect.hex,
      uid: user.uid,
    };

    setSentUser(newData);
  };

  useEffect(() => {
    if (sentUser.user?.length <= 4 && sentUser.user?.length <= 25) {
      setDisabledUser(false);
    } else {
      setDisabledUser(true);
    }
  }, [sentUser.user]);

  const handleInputChange = async (e) => {
    e.preventDefault();
    try {
      await firestore.collection("users").add(sentUser);
      setSentUser({ user: "" });
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
              WELCOME <b>NAME!</b>
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
                      onClick={() => setColorSelect(color)}
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
