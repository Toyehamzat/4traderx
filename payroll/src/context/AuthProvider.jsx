import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, SetAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, SetAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
