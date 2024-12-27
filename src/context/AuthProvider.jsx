import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../services/supabase";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser, user_id: user?.id }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("Auth Context must be used within AuthProvider");
  return context;
}

export { AuthProvider, useAuthContext };
