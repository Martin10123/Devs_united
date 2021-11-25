import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
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
            username: doc.data(),
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

  const handleDelete = async (id) => {
    try {
      await firestore.doc(`${collections.tweets}/${id}`).delete();
      Swal.fire("", "Su nota se borro con exito", "success");
    } catch (error) {
      Swal.fire("", error.message, "error");
    }
  };

  const returns = {
    user,
    tweets,
    loading,
    authenticated,
    handleDelete,
  };

  return (
    <CollectionContext.Provider value={returns}>
      {children}
    </CollectionContext.Provider>
  );
};
