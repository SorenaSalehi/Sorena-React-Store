import { useMutation } from "@tanstack/react-query";
import { changeQuantity } from "../../services/apiUserData";

export function useUpdateQuantity() {
  const { mutate: updateQuantity, isLoading: isUpdatingQuantity } = useMutation(
    {
      mutationFn: () => changeQuantity({ productId, quantity, type }),
    }
  );

  return { updateQuantity, isUpdatingQuantity };
}
