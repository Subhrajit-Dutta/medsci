import { createContext, useState, useEffect } from "react";
import {
  auth,
  createUserDocumentFromAuth,
  AuthChangeListener,
} from "../../utils/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  //const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = AuthChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
