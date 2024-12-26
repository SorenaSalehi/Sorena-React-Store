import { useQuery } from "@tanstack/react-query";
import { getAllProductsById } from "../../services/apiProducts";

export function useItemsDetails({ queryKey, items }) {
  const ids = items?.length > 0 ? items?.map((item) => item.productId) : null;

  const { data: itemsDetails = [], isLoading: isItemsDetailsLoading } =
    useQuery({
      queryKey: [queryKey, items],
      queryFn: () => getAllProductsById(ids),

      enabled: !!items,
    });

  return { itemsDetails, isItemsDetailsLoading };
}
