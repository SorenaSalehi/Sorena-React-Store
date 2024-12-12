import { useQuery } from "@tanstack/react-query";
import { getOneProduct } from "../../services/apiProducts";

export function useOneProduct(category) {
  const {
    data: oneProduct = null,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getOneProduct(category),
    queryKey: ["oneCategory", category],
    enabled: !!category,
  });

  return { oneProduct, isLoading };
}
