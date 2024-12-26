import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchUserItems } from "../../services/apiUserData";

export function useWishlist({ user_id, from }) {
  const { data: wishlist = [], isLoading: isWishlistLoading } = useQuery({
    queryKey: ["wishlist"],
    queryFn: () => fetchUserItems({ user_id, from }),

    enabled: !!user_id,
  });

  return { wishlist, isWishlistLoading };
}
