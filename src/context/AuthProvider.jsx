import { createContext, useContext, useState } from "react";

import { useUser } from "../Features/authentication/useUser";
import { useBasket } from "../Features/basket/useBasket";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ setSession, setUser, session, user }}>
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
