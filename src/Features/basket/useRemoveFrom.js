import { useMutation, useQueryClient } from "@tanstack/react-query";

import { removeFrom as removeFromApi } from "../../services/apiUserData";
import toast from "react-hot-toast";

export function useRemoveFrom() {
  const queryClient = useQueryClient();

  const { mutate: removeFrom, isPending: isRemovingFrom } =
    useMutation({
      mutationFn:({ user_id, productId, from })=> removeFromApi({ user_id, productId, from }),

      onSuccess: (_,{from}) => {
        queryClient.invalidateQueries([from]);
      },
    });

  return { removeFrom, isRemovingFrom };
}
