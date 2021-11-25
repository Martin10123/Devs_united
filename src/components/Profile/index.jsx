import React, { useContext, useState } from "react";

import { CollectionContext } from "../../context/efectTweets";
import { firebase } from "../../firebase/firebaseConfig";
import { IoIosArrowBack, IoIosLogOut } from "react-icons/io";

import userPhoto from "../../images/user.png";
import Posted from "./Posted";
import Favorites from "./Favorite";

import "./profile.css";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const Profile = () => {
  const [tabs, setTabs] = useState(0);

  const { user, tweets } = useContext(CollectionContext);

  const history = useHistory();

  const logout = async () => {
    try {
      await firebase.auth().signOut();
      Swal.fire("", "Se ha deslogueado con exito", "success");
    } catch (error) {
      Swal.fire("", error.mesagge, "error");
    }
  };

  const returnHome = () => {
    history.replace("/home");
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
          <button onClick={logout}>
            <span>Logout</span>
            <IoIosLogOut />
          </button>
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
                  posted.username.uid === user.uid && (
                    <Posted key={posted.id} {...posted.username} />
                  )
              )}
            </div>
            <div hidden={tabs !== 1}>
              <Favorites />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
