import { createContext, useEffect, useState } from "react";
import { firebase } from "../firebase/firebaseConfig";

export const UserGoogleContext = createContext();

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      const isAuthenticated = user ? true : false;
      setAuthenticated(isAuthenticated);
    });

    setLoading(false);
  }, []);

  const userGoogle = {
    user,
    loading,
    authenticated,
  };

  return (
    <UserGoogleContext.Provider value={userGoogle}>
      {children}
    </UserGoogleContext.Provider>
  );
};
