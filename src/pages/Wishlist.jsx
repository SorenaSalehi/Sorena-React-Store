import React from "react";
import { useShopContext } from "../context/ShopContext";

export default function Wishlist() {
  const { wishlist } = useShopContext();
  console.log(wishlist);
  return <div>You must first Wish Something 🙂</div>;
}
