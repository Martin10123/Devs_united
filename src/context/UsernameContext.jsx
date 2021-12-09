import { createContext, useContext, useEffect, useState } from "react";
import { firestore } from "../firebase/firebaseConfig";
import { UserGoogleContext } from "./UserGoogleContext";

const UserContext = createContext();

const UsernameContext = ({ children }) => {
  const { user } = useContext(UserGoogleContext);
  const [usersName, setUsersName] = useState({});
  const [loadingUsername, setLoadingUsername] = useState(true);

  useEffect(() => {
    if (user) {
      firestore
        .collection("users")
        .get()
        .then((querySnapshot) => {
          setLoadingUsername(false);
          querySnapshot.forEach((doc) => {
            if (user?.uid === doc.data().uid) {
              setUsersName({ doc_id: doc.id, ...doc.data() });
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  const returns = {
    usersName,
    setUsersName,
    loadingUsername,
  };

  return (
    <UserContext.Provider value={returns}>{children}</UserContext.Provider>
  );
};

export { UsernameContext, UserContext };
