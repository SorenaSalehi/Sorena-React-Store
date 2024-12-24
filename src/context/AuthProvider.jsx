import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);

  return (
    <AuthContext.Provider value={{ setUser, user, email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) throw new Error("Auth Context Was used OutSide the provider!!");

  return context;
}

export { AuthProvider, useAuthContext };
