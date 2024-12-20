import { useMutation, useQueryClient } from "@tanstack/react-query";

import { removeFrom } from "../../services/apiUserData";
import toast from "react-hot-toast";

export function useRemoveFromWishlist() {
  const queryClient = useQueryClient();

  const {
    mutate: removeFromWishlist,
    isLoading: isRemoving,
    error,
  } = useMutation({
    mutationFn: removeFrom,

    onSuccess: () => {
      queryClient.invalidateQueries(["wishlist"]);
    },
  });

  return { removeFromWishlist, isRemoving };
}
