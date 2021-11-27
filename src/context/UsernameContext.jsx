import { createContext, useContext, useEffect, useState } from "react";
import { firestore } from "../firebase/firebaseConfig";
import { UserGoogleContext } from "./UserGoogleContext";

const UserContext = createContext();

const UsernameContext = ({ children }) => {
  const { user } = useContext(UserGoogleContext);
  const [usersName, setUsersName] = useState({});

  useEffect(() => {
    firestore
      .collection("users")
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
    setUsersName,
  };

  return (
    <UserContext.Provider value={returns}>{children}</UserContext.Provider>
  );
};

export { UsernameContext, UserContext };
