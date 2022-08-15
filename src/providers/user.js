import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@Breshopee:user")) || {}
  );

  const setCurrentUser = (object) => {
    setUser(object);
  };

  const deleteCurrentUser = () => {
    setUser({});
  };

  return (
    <UserContext.Provider value={{ user, setCurrentUser, deleteCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
