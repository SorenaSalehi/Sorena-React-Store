import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTo } from "../../services/apiUserData";

export function useAddToWishlist() {
  const queryClient = useQueryClient();

  const { mutate: addToWishlist, isPending: isAddingToWishlist } = useMutation({
    mutationFn: addTo,

    onSuccess: () => {
      queryClient.invalidateQueries(["wishlist"]);
    },

    onError: (err) => {
      console.log(err.message);
    },
  });

  return { addToWishlist, isAddingToWishlist };
}
