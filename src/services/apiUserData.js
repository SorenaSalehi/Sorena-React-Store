import supabase from "./supabase";

//*fetch user items
export async function fetchUserItems({ user_id, from }) {
  if (!user_id || !from) return;
  const { data, error } = await supabase.from(from).select("*");

  if (error) throw new Error("something wrong to fetch user items");

  return data;
}

//*add to basket or wishlist
export async function addTo({ user_id, productId, quantity = 1, to }) {
  if (!user_id || !productId || !to) return;

  let insert;

  if (to === "basket") insert = [{ user_id, productId, quantity }];

  if (to === "wishlist") insert = [{ user_id, productId }];

  const { error } = await supabase.from(to).insert(insert).select();
  if (error) throw new Error("something wrong to add item");
}

//*remove from basket or wishlist
export async function removeFrom({ productId, from }) {
  if (!productId || !from) return;
  const { error } = await supabase.from(from).delete().match({ productId });

  if (error) throw new Error("something wrong to remove item");
}

//*change quantity
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
