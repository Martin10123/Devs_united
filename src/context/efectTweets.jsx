import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

import { collections, firestore } from "../firebase/firebaseConfig";

export const CollectionContext = createContext();

export const EfectTweets = ({ children }) => {
  const [tweets, setTweets] = useState([]);

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
    tweets,
    handleDelete,
  };

  return (
    <CollectionContext.Provider value={returns}>
      {children}
    </CollectionContext.Provider>
  );
};
