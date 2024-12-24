import { useMutation } from "@tanstack/react-query";

import { updatePassword as updatePasswordApi } from "../../services/apiAuth";

export function useUpdatePassword(){
    const { mutate: updatePassword, isPending } = useMutation({
      mutationFn:(newPassword)=> updatePasswordApi(newPassword),
    });
  
    return { updatePassword, isPending };
}