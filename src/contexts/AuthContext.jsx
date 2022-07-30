
import { createContext } from "react";
import { useContext, useEffect, useState } from "react";
import { userObserver } from "../helpers/firebase";

export const UserContext = createContext();

export const useConsumeContext = () => {
    return useContext(UserContext)
}

const AuthContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [displayName, setDisplayName] = useState("");

  useEffect(() =>{
        userObserver(setCurrentUser)
  }, [])

  return (
    <div>
      <UserContext.Provider value={{ currentUser, setCurrentUser, displayName, setDisplayName }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default AuthContext;
