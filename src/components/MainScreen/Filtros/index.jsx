import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { CollectionContext } from "../../../context/efectTweets";
import { UserContext } from "../../../context/UsernameContext";
import { collections, firestore } from "../../../firebase/firebaseConfig";

import userImg from "../../../images/user.png";
import ViewTweets from "../ViewTweets";

import "./filtros.css";

const Filtros = () => {
  const { tweets, user } = useContext(CollectionContext);
  const { sentTweet, handleSentTweet, setSentTweet } = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);

    if (sentTweet.tweet?.trim().length <= 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

    return () => {
      setDidMount(false);
    };
  }, [sentTweet.tweet]);

  const clickSentTweets = async (e) => {
    e.preventDefault();
    try {
      await firestore.collection(collections.tweets).add(sentTweet);
      setSentTweet({
        tweet: "",
      });
    } catch (err) {
      Swal.fire("", err.message, "error");
    }
  };

  const handleLike = async (id, likes) => {
    if (!likes) likes = 0;
    try {
      await firestore
        .doc(`${collections.tweets}/${id}`)
        .update({ likes: likes + 1 });
    } catch (error) {
      Swal.fire("", error.message, "error");
    }
  };

  const handleDelete = async (tweetId) => {
    try {
      await firestore.doc(`${collections.tweets}/${tweetId}`).delete();
      Swal.fire("", "Su nota se borro con exito", "success");
    } catch (error) {
      Swal.fire("", error.message, "error");
    }
  };

  if (!didMount) {
    return null;
  }

  return (
    <>
      <div className="filtros__box">
        <div className="filtros__content">
          <div className="filtros__box_img">
            <Link to="/home/profile">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="" />
              ) : (
                <img src={userImg} alt="" />
              )}
            </Link>
          </div>
          <form onSubmit={clickSentTweets} className="filtros__post_tweet">
            <textarea
              name="tweet"
              value={sentTweet.tweet}
              onChange={handleSentTweet}
              required
              maxLength="500"
              placeholder="What’s happening?"
            />
            <div className="filtros__btn_post">
              <b>{sentTweet.tweet?.length}</b>
              <b>500 max.</b>
              {disabled ? (
                <button type="submit" className="btn_disable_off">
                  Post
                </button>
              ) : (
                <button type="submit" className="btn_disable_on">
                  Post
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="contain_info_box_tweet">
        {tweets.map((data) => {
          return (
            <ViewTweets
              key={data.id}
              data={data}
              clickSubmitLike={handleLike}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default Filtros;
