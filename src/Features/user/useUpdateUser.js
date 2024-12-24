import { useMutation } from "@tanstack/react-query";
import { updateUserDetails } from "../../services/apiAuth";

export function useUpdateUser() {
  const { mutate, isLoading } = useMutation({ mutationFn: updateUserDetails });

  return { updateUser: mutate, isUpdating: isLoading };
}
