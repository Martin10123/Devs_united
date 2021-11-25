import React, { useContext } from "react";
import moment from "moment";
import "moment/locale/es";

import { CollectionContext } from "../../../context/efectTweets";
import userImg from "../../../images/user.png";
import trash from "../../../images/trash.svg";

import "./posted.css";

const Posted = ({ id, tweet, color, user, date, url }) => {
  const { handleDelete } = useContext(CollectionContext);
  const dateNote = moment(date);

  return (
    <div className="posted__box">
      <div className="posted__content">
        {url ? (
          <img src={url} alt="imagen usuario" />
        ) : (
          <img src={userImg} alt="imagen usuario" />
        )}
        <div className="posted__contain__info_posted">
          <div className="posted__info_user">
            <p style={{ backgroundColor: color }}>{user}</p> <b>__</b>{" "}
            <p>{dateNote.calendar()}</p>
          </div>
          <div className="posted__description">
            <p>{tweet}</p>
          </div>
          <div className="posted__btns">
            <button onClick={() => handleDelete(id)}>
              <img src={trash} alt="trash" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posted;
