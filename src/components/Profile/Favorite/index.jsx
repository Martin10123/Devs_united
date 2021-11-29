import React from "react";
import moment from "moment";
import "moment/locale/es";

import userImg from "../../../images/user.png";

import "./favorite.css";

const Favorites = ({ id, tweet, color, user, date, url }) => {
  const dateNote = moment(date);

  return (
    <div className="favorite__box">
      <div className="favorite__content">
        {url ? (
          <img src={url} alt="imagen usuario" />
        ) : (
          <img src={userImg} alt="imagen usuario" />
        )}
        <div className="favorite__contain__info_favorite">
          <div className="favorite__info_user">
            <p style={{ background: color }}>{user}</p> <b>__</b>
            <p>{dateNote.startOf("").fromNow()}</p>
          </div>
          <div className="favorite__description">
            <p>{tweet}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
