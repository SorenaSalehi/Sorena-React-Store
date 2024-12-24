import { useMutation } from "@tanstack/react-query";
import { updateUserAccount } from "../../services/apiAuth";

export function useUpdateAccount() {
  const { mutate: updateAccount, isPending: isUpdating } = useMutation({
    mutationFn: updateUserAccount,
  });

  return { updateAccount, isUpdating };
}
