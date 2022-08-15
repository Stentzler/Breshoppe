import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Breshopee:token")) || ""
  );

  useEffect(() => {
    token ? setLoggedIn(true) : setLoggedIn(false);
  }, []);

  const onLogin = () => {
    setLoggedIn(true);
  };

  const onLogout = () => {
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
