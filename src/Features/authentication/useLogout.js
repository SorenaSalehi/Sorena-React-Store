import { useMutation, useQueryClient } from "@tanstack/react-query";

import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      queryClient.removeQueries();
      navigate("login", { replace: true });
      toast.success("You have been successfully logged out!!", {
        duration: 4000,
      });
    },

    onError: () => {
      toast.error(
        "Something Went Wrong! Please Try again OR Check Your Connection",
        {
          duration: 4000,
        }
      );
    },
  });

  return { logout, isLoading };
}
