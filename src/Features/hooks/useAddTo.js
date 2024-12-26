import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTo as addToApi } from "../../services/apiUserData";

export function useAddTo() {
  const queryClient = useQueryClient();

  const { mutate: addTo, isPending: isAddingTo } = useMutation({
    mutationFn: ({ user_id, productId, to }) =>
      addToApi({ user_id, productId, to }),

    onSuccess: (_, { to }) => {
      queryClient.invalidateQueries([to]);
    },
  });

  return { addTo, isAddingTo };
}
