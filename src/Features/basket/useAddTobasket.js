import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTo } from "../../services/apiUserData";

export function useAddToBasket() {
  const queryClient = useQueryClient();

  const { mutate: addToBasket, isLoading: isLoadingAddToBasket } = useMutation({
    mutationFn: addTo,

    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries(["basket"]);
    },

    onError: (err) => {
      console.log(err.message);
    },
  });

  return { addToBasket, isLoadingAddToBasket };
}
