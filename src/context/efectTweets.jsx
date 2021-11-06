import { createContext, useEffect, useState } from "react";
import { collections, firestore, firebase } from "../firebase/firebaseConfig";

export const CollectionContext = createContext();

export const EfectTweets = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const cancelSuscription = firestore
      .collection(collections.tweets)
      .onSnapshot((snapshot) => {
        const arrayTweets = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            tweet: doc.data().tweet,
            likes: doc.data().likes,
            autor: doc.data().autor,
            uid: doc.data().uid,
            date: doc.data().date,
            url: doc.data().url,
          };
        });

        setTweets(arrayTweets);
      });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });

    setLoading(false);

    return () => {
      return cancelSuscription();
    };
  }, []);

  const returns = {
    user,
    tweets,
    loading,
    authenticated,
  };

  return (
    <CollectionContext.Provider value={returns}>
      {children}
    </CollectionContext.Provider>
  );
};
