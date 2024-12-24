import { data } from "react-router";
import supabase from "./supabase";

//*signup
export async function signup({ email, password }) {
  if (!email || !password) return;
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error("something wrong in signup");

  return data;
}

//*login
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}

//*logout
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

//*reset password
export async function resetPassword({ email }) {
  if (!email) return;
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/resetPassword`,
  });
  if (error) throw new Error(error.message);
}

//*update password
export async function updatePassword(newPassword) {
  console.log(newPassword);
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error)
    throw new Error(error.message || "something wrong to update user account");

  return data;
}

//*get current user
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
  if (error) throw new Error(error.message || "something wrong to get user");

  return user;
}

//*update user account
export async function updateUserAccount({ email, password }) {
  if (!email || !password) return;
  console.log(email, password);

  const { error } = await supabase.auth.updateUser({ email, password });
  if (error)
    throw new Error(error.message || "something wrong to update user account");
}

//*fetch user details
export async function fetchUserDetails() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  const { data: userDetails, error } = await supabase
    .from("userDetails")
    .select("*");
  if (error)
    throw new Error(error.message || "something wrong to get user details");

  return userDetails.at(0);
}

//*update user details
export async function updateUserDetails({
  user_id,
  name = "",
  lastName = "",
  address = "",
  phoneNumber = "",
  nationalID = "",
  birthday = "",
}) {
  const { data: user, error } = await supabase
    .from("userDetails")
    .update({ name, lastName, address, phoneNumber, nationalID, birthday })
    .eq("user_id", user_id)
    .select("*");

  if (error) throw new Error(error.message || "something wrong to update user");
  return user;
}
