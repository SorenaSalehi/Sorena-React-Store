import { data } from "react-router";
import supabase from "./supabase";

export async function signup({ email, password }) {
  if (!email || !password) return;
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error("something wrong in signup");

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

export async function getCurrentUser() {
  // //*get this from local
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  return user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) console.error("Logout Error:", error.message);
  else console.log("Logged out successfully");
}
