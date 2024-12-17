import { useQuery } from "@tanstack/react-query";
import { getAllProductsById } from "../../services/apiProducts";

export function useBasketDetails(basket) {
  const ids = basket?.length > 1 ? basket?.map((item) => item.productId) : null;

  const { data: basketDetails, isLoading: isDetailsLoading } = useQuery({
    queryKey: ["basketDetails"],
    queryFn: () => getAllProductsById(ids),
  });

  return { basketDetails, isDetailsLoading };
}
