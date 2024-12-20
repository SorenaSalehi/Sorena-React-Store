import supabase from "./supabase";

export async function fetchUserItems({ userId, from }) {
  if (!userId || !from) return;
  const { data, error } = await supabase.from(from).select("*");

  if (error) console.error("Fetch Basket Error:", error.message);
  else console.log("Basket:", data);

  return data;
}

//*add to basket or wishlist
export async function addTo({ user_id, productId, quantity = 1, from }) {
  console.log(user_id, productId, (quantity = 1), from);
  if (!user_id || !productId || !from) return;

  let insert;

  if (from === "basket") insert = [{ user_id, productId, quantity }];

  if (from === "wishlist") insert = [{ user_id, productId }];

  const {  error } = await supabase.from(from).insert(insert).select();
  if (error) console.error("Add to Basket Error:", error.message);
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
