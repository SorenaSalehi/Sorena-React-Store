import supabase from "./supabase";

export async function fetchUserItems({ userId, from }) {
  if (!userId || !from) return;
  const { data, error } = await supabase.from(from).select("*");

  if (error) throw new Error("something wrong to fetch user items");

  return data;
}

//*add to basket or wishlist
export async function addTo({ user_id, productId, quantity = 1, from }) {
  console.log(user_id, productId, (quantity = 1), from);
  if (!user_id || !productId || !from) return;

  let insert;

  if (from === "basket") insert = [{ user_id, productId, quantity }];

  if (from === "wishlist") insert = [{ user_id, productId }];

  const { error } = await supabase.from(from).insert(insert).select();
  if (error) throw new Error("something wrong to add item");
}

//*remove from basket or wishlist
export async function removeFrom({ productId, from }) {
  if (!productId || !from) return;
  const { error } = await supabase.from(from).delete().match({ productId });

  if (error) throw new Error("something wrong to remove item");
}

export async function changeQuantity({ productId, quantity, type }) {
  if (!productId || !quantity || !type) return;

  const value = type === "increase" ? quantity + 1 : quantity - 1;

  const { data, error } = await supabase
    .from("basket")
    .update({ quantity: value })
    .eq("productId", productId + "")
    .select();

  if (error) throw new Error("something wrong to remove item");

  return data;
}

export async function updateUserAccount({ email, password }) {
  console.log(email, password);
  if (!email || !password) return;

  const { data, error } = await supabase.auth.updateUser(email, password);
  if (error) throw new Error("something wrong to remove item");

  console.log(data);
}

export async function fetchUserDetails() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  const { data: userDetails, error } = await supabase
    .from("userDetails")
    .select("*");
  if (error) throw new Error("something wrong to remove item");

  return userDetails.at(0);
}

export async function updateUserDetails({
  user_id,
  name = "",
  lastName = "",
  address = "",
  phoneNumber = "",
  nationalID = "",
  birthday = "",
}) {
  const { data: user } = await supabase
    .from("userDetails")
    .update({ name, lastName, address, phoneNumber, nationalID, birthday })
    .eq("user_id", user_id)
    .select("*");

  if (!user) throw new Error("something wrong to update user");
  return user;
}
