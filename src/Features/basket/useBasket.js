import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchUserItems } from "../../services/apiUserData";

export function useBasket({ userId, from }) {
  console.log(userId, from);
  const {
    data: basket = [],
    isLoading: isBasketLoading,
    error: basketError,
  } = useQuery({
    queryKey: ["basket"],
    queryFn: () => fetchUserItems({ userId, from }),

    enabled: !!userId,
  });

  return { basket, isBasketLoading, basketError };
}
