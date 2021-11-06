import React, { useContext } from "react";
import moment from "moment";
import "moment/locale/es";

import { CollectionContext } from "../../../context/efectTweets";
import { ColorsContext } from "../../../context/PainterColor";
import userImg from "../../../images/user.png";
import noLike from "../../../images/noLike.svg";
// import like from "../../../images/like.svg";
import trash from "../../../images/trash.svg";

import "./viewTweets.css";

const ViewTweets = ({ data, handleDelete, clickSubmitLike }) => {
  const { user } = useContext(CollectionContext);
  const { colorSelect } = useContext(ColorsContext);
  const dateNote = moment(data.date);

  return (
    <div className="tweet__box">
      <div className="tweet__content">
        {data.url ? (
          <img src={data.url} alt="imagen usuario" />
        ) : (
          <img src={userImg} alt="imagen usuario" />
        )}
        <div className="tweet__contain__info_tweet">
          <div className="tweet__info_user">
            <p
              className="tweet__info_autor"
              style={{ backgroundColor: colorSelect.hex }}
            >
              {data.autor}
            </p>
            <b>__</b> <p>{dateNote.calendar()}</p>
          </div>
          <div className="tweet__description">
            <p>{data.tweet}</p>
          </div>
          <div className="tweet__btns">
            <button onClick={() => clickSubmitLike(data.id, data.likes)}>
              <img src={noLike} alt="no like" />
              <p>{data.likes ? data.likes : 0}</p>
            </button>
            {data.uid === user.uid && (
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
