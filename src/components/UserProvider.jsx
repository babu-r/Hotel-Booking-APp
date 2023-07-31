import React, { useState, createContext, useContext } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userName: "",
    userImg: "",
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;