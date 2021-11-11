import React from "react";
import moment from "moment";
import "moment/locale/es";

import user from "../../../images/user.png";
import trash from "../../../images/trash.svg";

import "./posted.css";

const Posted = ({ tweet, likes, autor, date, url }) => {
  const dateNote = moment(date);

  return (
    <div className="posted__box">
      <div className="posted__content">
        {url ? (
          <img src={url} alt="imagen usuario" />
        ) : (
          <img src={user} alt="imagen usuario" />
        )}
        <div className="posted__contain__info_posted">
          <div className="posted__info_user">
            <p>{autor}</p> <b>__</b> <p>{dateNote.calendar()}</p>
          </div>
          <div className="posted__description">
            <p>{tweet}</p>
          </div>
          <div className="posted__btns">
            <button>
              <img src={trash} alt="trash" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posted;
