import { useQuery } from "@tanstack/react-query";
import { getAllProductsById } from "../../services/apiProducts";

export function useWishlistDetails(wishlist) {
  const ids =
    wishlist?.length > 0 ? wishlist?.map((item) => item.productId) : null;

  const { data: wishlistDetails = [], isLoading: isWishlistDetailsLoading } =
    useQuery({
      queryKey: ["wishlistDetails", , wishlist],
      queryFn: () => getAllProductsById(ids),

      enabled: !!wishlist,
    });

  return { wishlistDetails, isWishlistDetailsLoading };
}
