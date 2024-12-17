import { useQuery } from "@tanstack/react-query";
import { getAllProductsById } from "../../services/apiProducts";

export function useWishlistDetails(wishlist) {
  const ids =
    wishlist?.length > 1 ? wishlist?.map((item) => item.productId) : null;

  const { data: wishlistDetails, isLoading: isWishlistLoading } = useQuery({
    queryKey: ["wishlistDetails"],
    queryFn: () => getAllProductsById(ids),
  });

  return { wishlistDetails, isWishlistLoading };
}
