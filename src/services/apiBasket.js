import supabase from "./supabase";

async function addToBasket(userId, productId, quantity) {
  const { data, error } = await supabase
    .from("basket")
    .insert([{ userId, productId, quantity }]);
  if (error) console.error("Add to Basket Error:", error.message);
  else console.log("Item added to basket:", data);
}

async function fetchBasket(userId) {
  const { data, error } = await supabase
    .from("basket")
    .select("*")
    .eq("userId", userId);
  if (error) console.error("Fetch Basket Error:", error.message);
  else console.log("Basket:", data);
}
