import { useQuery } from "@tanstack/react-query";
import { getAllProductsById } from "../../services/apiProducts";

export function useBasketDetails(basket) {
  const ids = basket?.length > 0 ? basket?.map((item) => item.productId) : null;

  const { data: basketDetails = [], isLoading: isBasketDetailsLoading } =
    useQuery({
      queryKey: ["basketDetails", basket],
      queryFn: () => getAllProductsById(ids),
      enabled: !!basket,
    });

  return { basketDetails, isBasketDetailsLoading };
}
