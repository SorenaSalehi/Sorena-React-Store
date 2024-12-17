import { useMutation, useQueryClient } from "@tanstack/react-query";

import { removeFrom } from "../../services/apiUserData";
import toast from "react-hot-toast";

export function useRemoveFromBasket() {
  const queryClient = useQueryClient();

  const {
    mutate: removeFromBasket,
    isLoading: isLoadingRemove,
    error,
  } = useMutation({
    mutationFn: removeFrom,

    onSuccess: () => {
      queryClient.invalidateQueries(["basket"]);
    },
  });

  return { removeFromBasket, isLoadingRemove };
}
