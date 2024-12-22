import { useMutation, useQueryClient } from "@tanstack/react-query";

import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: login,
    isLoading,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: ({ user }) => {
      queryClient.setQueryData(["user"], user);
      toast.success("Welcome back", { duration: 4000 });

      navigate("/");
    },
    onError: () => {
      toast.error("Provided Email or password is Wrong!!");
    },
  });

  return { login, isLoading, error };
}
