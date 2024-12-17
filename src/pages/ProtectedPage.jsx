import React, { useEffect } from "react";
import { useUser } from "../Features/authentication/useUser";
import { useNavigate } from "react-router";
import { useAuthContext } from "../context/AuthProvider";

export default function ProtectedPage({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "authenticated") navigate("/");
  }, [user?.role, isLoading, navigate]);

  useEffect(() => {
    if (user?.role === "authenticated") return;

    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate, user]);

  if (isLoading) return <div>is Loading...</div>;

  return children;
}
