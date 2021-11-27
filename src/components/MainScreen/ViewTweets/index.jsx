import React, { useContext } from "react";
import moment from "moment";
import "moment/locale/es";

import { UserGoogleContext } from "../../../context/UserGoogleContext";
import userImg from "../../../images/user.png";
import noLike from "../../../images/noLike.svg";
// import like from "../../../images/like.svg";
import trash from "../../../images/trash.svg";

import "./viewTweets.css";

const ViewTweets = ({ data, handleDelete, clickSubmitLike }) => {
  const { user } = useContext(UserGoogleContext);
  const dateNote = moment(data.username.date);

  return (
    <div className="tweet__box">
      <div className="tweet__content">
        {data.username.url ? (
          <img src={data.username.url} alt="imagen usuario" />
        ) : (
          <img src={userImg} alt="imagen usuario" />
        )}
        <div className="tweet__contain__info_tweet">
          <div className="tweet__info_user">
            <p
              className="tweet__info_autor"
              style={{ backgroundColor: data.username.color }}
            >
              {data.username.user}
            </p>
            <b>__</b> <p>{dateNote.calendar()}</p>
          </div>
          <div className="tweet__description">
            <p>{data.username.tweet}</p>
          </div>
          <div className="tweet__btns">
            <button onClick={() => clickSubmitLike(data.id, data.username.uid)}>
              <img src={noLike} alt="no like" />
              <p>{0}</p>
            </button>
            {data.username.uid === user.uid && (
              <button onClick={() => handleDelete(data.id)}>
                <img src={trash} alt="trash" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTweets;
