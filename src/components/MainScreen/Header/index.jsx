import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CollectionContext } from "../../../context/efectTweets";

import logo from "../../../images/aloneLogo.svg";
import title from "../../../images/titleLogo.svg";
import userImg from "../../../images/user.png";
import Filtros from "../Filtros";

import "./header.css";

const Header = () => {
  const { user } = useContext(CollectionContext);

  return (
    <>
      <div className="background-color"></div>
      <div className="header__box">
        <div className="header__content">
          <div className="header__user">
            <Link to="/home/profile">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="" />
              ) : (
                <img src={userImg} alt="" />
              )}
            </Link>
          </div>
          <div className="header__logo">
            <img src={logo} alt="" />
            <img src={title} alt="" />
          </div>
        </div>
      </div>
      <Filtros />
    </>
  );
};

export default Header;
