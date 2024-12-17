import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchUserItems } from "../../services/apiUserData";

export function useWishlist({ userId, from }) {
  console.log(userId, from);
  const { data: wishlist = [], isLoading: isWishlistLoading } = useQuery({
    queryKey: ["wishlist"],
    queryFn: () => fetchUserItems({ userId, from }),

    enabled: !!userId,
  });

  return { wishlist, isWishlistLoading };
}
