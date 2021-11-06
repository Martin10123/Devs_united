import React from "react";

import user from "../../../images/user.png";
import noLike from "../../../images/noLike.svg";
import trash from "../../../images/trash.svg";

import "./favorite.css";

const Favorites = () => {
  return (
    <div className="favorite__box">
      <div className="favorite__content">
        <img src={user} alt="imagen usuario" />
        <div className="favorite__contain__info_favorite">
          <div className="favorite__info_user">
            <p>Pedro Perez</p> <b>__</b> <p>20 jun</p>
          </div>
          <div className="favorite__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, nihil? Nisi dolorem molestias commodi consequuntur
              modi, impedit asperiores doloribus autem ipsam ex ab pariatur,
              nobis blanditiis. Perspiciatis temporibus facere quam.
            </p>
          </div>
          <div className="favorite__btns">
            <button>
              <img src={noLike} alt="no like" />
              <p>0</p>
            </button>
            <button>
              <img src={trash} alt="trash" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
