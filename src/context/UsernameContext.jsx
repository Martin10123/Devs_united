import { createContext, useContext, useState } from "react";
import { CollectionContext } from "./efectTweets";

const UserContext = createContext();

const UsernameContext = ({ children }) => {
  const { user } = useContext(CollectionContext);
  const [sentTweet, setSentTweet] = useState({
    tweet: "",
    username: "",
    autor: "",
    uid: "",
  });

  const handleSentTweet = ({ target }) => {
    let nuevoArrayValues = {
      [target.name]: target.value,
      autor: user?.displayName,
      uid: user?.uid,
      date: new Date().getTime(),
      url: user?.photoURL,
    };
    setSentTweet(nuevoArrayValues);
  };

  const returns = {
    sentTweet,
    handleSentTweet,
    setSentTweet,
  };

  return (
    <UserContext.Provider value={returns}>{children}</UserContext.Provider>
  );
};

export { UsernameContext, UserContext };
