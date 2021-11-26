import { createContext, useContext, useEffect, useState } from "react";
import { firestore } from "../firebase/firebaseConfig";
import { CollectionContext } from "./efectTweets";

const UserContext = createContext();

const UsernameContext = ({ children }) => {
  const { user } = useContext(CollectionContext);
  const [usersName, setUsersName] = useState([]);

  useEffect(() => {
    firestore
      .collection(`username/${user?.uid}/data`)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (user?.uid === doc.data().uid) {
            setUsersName(doc.data());
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.uid]);

  const returns = {
    usersName,
  };

  return (
    <UserContext.Provider value={returns}>{children}</UserContext.Provider>
  );
};

export { UsernameContext, UserContext };
