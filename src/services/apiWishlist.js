import supabase from "./supabase";

async function addToWishlist({ userId, productId }) {
  const { data, error } = await supabase
    .from("wishlist")
    .insert([{ userId, productId }]);
  if (error) console.error("Add to Wishlist Error:", error.message);
  else console.log("Item added to wishlist:", data);
}

async function fetchWishlist(userId) {
  const { data, error } = await supabase
    .from("wishlist")
    .select("*")
    .eq("userId", userId);
  if (error) console.error("Fetch Wishlist Error:", error.message);
  else console.log("Wishlist:", data);
}
