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

async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) console.error("Login Error:", error.message);
  else console.log("Login Successful:", data);
}

async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) console.error("Logout Error:", error.message);
  else console.log("Logged out successfully");
}

const user = supabase.auth.getUser();
console.log(user);
