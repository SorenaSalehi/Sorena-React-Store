import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeQuantity } from "../../services/apiUserData";

export function useUpdateQuantity() {
  const queryClient = useQueryClient();

  const { mutate: updateQuantity, isLoading: isUpdatingQuantity } = useMutation(
    {
      mutationFn: ({ productId, quantity, type }) =>
        changeQuantity({ productId, quantity, type }),

      onSuccess: () => {
        queryClient.invalidateQueries(["basket"]);
      },
    }
  );

  return { updateQuantity, isUpdatingQuantity };
}
