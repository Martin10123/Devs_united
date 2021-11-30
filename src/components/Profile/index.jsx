import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { firebase } from "../../firebase/firebaseConfig";
import { UserContext } from "../../context/UsernameContext";
import { CollectionContext } from "../../context/efectTweets";
import { UserGoogleContext } from "../../context/UserGoogleContext";
import { IoIosArrowBack, IoMdArrowDropup } from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";
import {
  MdOutlineChangeCircle,
  // MdDeleteForever,
  MdLogout,
} from "react-icons/md";

import userPhoto from "../../images/user.png";
import Posted from "./Posted";
import Favorites from "./Favorite";

import Swal from "sweetalert2";

import "./profile.css";

const Profile = () => {
  const history = useHistory();

  const [tabs, setTabs] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const { tweets } = useContext(CollectionContext);
  const { user } = useContext(UserGoogleContext);
  const { setUsersName } = useContext(UserContext);

  const logout = async () => {
    try {
      setUsersName({});
      await firebase.auth().signOut();
      Swal.fire("", "Se ha deslogueado con exito", "success");
      history.replace("/register");
    } catch (error) {
      Swal.fire("", error.mesagge, "error");
    }
  };

  const showMenuInfo = () => {
    setShowMenu(!showMenu);
  };

  const returnHome = () => {
    history.push("/home");
  };

  return (
    <>
      <div className="background-color"></div>
      <div className="header__user_profile">
        <div className="header__profile_content">
          <span onClick={returnHome} className="span_user">
            <IoIosArrowBack className="logo_back" />
            {user?.displayName ? <p>{user.displayName}</p> : <p>Username</p>}
          </span>
          <div className="container_dropdown">
            {showMenu ? (
              <button className="dropdown_button" onClick={showMenuInfo}>
                <AiFillCaretDown className="down_icons" />
              </button>
            ) : (
              <button className="dropdown_button" onClick={showMenuInfo}>
                <IoMdArrowDropup className="down_icons" />
              </button>
            )}
            {showMenu && (
              <div className="dropdown_profile">
                <ul>
                  <li>
                    <MdOutlineChangeCircle />
                    <span className="username">Change username</span>
                  </li>
                  <li>
                    <MdLogout />
                    <span onClick={logout} className="logout">
                      Logout
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="header__photo_profile">
        <div className="header__photo_content">
          {user?.photoURL ? (
            <img src={user.photoURL} alt="user" />
          ) : (
            <img src={userPhoto} alt="user" />
          )}
          <p>{user?.displayName}</p>
        </div>
      </div>
      <div className="header__tabs">
        <div className="header__setting_size">
          <div className="header__tabs_content">
            <div
              className={`header__info_post ${tabs === 0 ? "active" : null}`}
              onClick={() => setTabs(0)}
            >
              <h2>Post</h2>
            </div>
            <div
              className={`header__info_favorites ${
                tabs === 1 ? "active" : null
              }`}
              onClick={() => setTabs(1)}
            >
              <h2>Favoritos</h2>
            </div>
          </div>
          <div className="header__tabs_show_info">
            <div hidden={tabs !== 0}>
              {tweets.map(
                (posted) =>
                  user &&
                  posted.username.uid === user.uid && (
                    <Posted
                      key={posted.id}
                      id={posted.id}
                      {...posted.username}
                    />
                  )
              )}
            </div>
            <div hidden={tabs !== 1}>
              {tweets.map(
                (favorite) =>
                  favorite.username.likes.includes(user.uid) && (
                    <Favorites key={favorite.id} {...favorite.username} />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
