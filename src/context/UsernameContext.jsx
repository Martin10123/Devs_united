import { createContext, useEffect, useState } from "react";
import { firestore } from "../firebase/firebaseConfig";

const UserContext = createContext();

const UsernameContext = ({ children }) => {
  const [usersName, setUsersName] = useState([]);

  useEffect(() => {
    firestore
      .collection("users")
      .get()
      .then((users) => {
        const user = users.docs.map((user) => {
          return {
            id: user.id,
            user: user.data().user,
            color: user.data().color,
            uid: user.data().uid,
          };
        });
        setUsersName(user);
      });
  }, []);

  const returns = {
    usersName,
  };

  return (
    <UserContext.Provider value={returns}>{children}</UserContext.Provider>
  );
};

export { UsernameContext, UserContext };
