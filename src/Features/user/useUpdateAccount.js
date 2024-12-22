import { useMutation } from "@tanstack/react-query";
import { updateUserAccount } from "../../services/apiUserData";

export function useUpdateAccount() {
  const { mutate: updateAccount, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserAccount,
  });

  return { updateAccount, isUpdating };
}
