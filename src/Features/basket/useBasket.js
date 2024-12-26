import { useQuery } from "@tanstack/react-query";
import { fetchUserItems } from "../../services/apiUserData";

export function useBasket({ user_id, from }) {
  const {
    data: basket = [],
    isLoading: isBasketLoading,
    error: basketError,
  } = useQuery({
    queryKey: ["basket"],
    queryFn: () => fetchUserItems({ user_id, from }),

    enabled: !!user_id,
  });

  return { basket, isBasketLoading, basketError };
}
