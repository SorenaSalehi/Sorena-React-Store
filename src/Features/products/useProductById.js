import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../services/apiProducts";

export function useProductById(id) {
  const {
    data: productById = null,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getProductById(id),
    queryKey: ["productById", id],
    enabled: !!id,
  });

  return { productById, isLoading };
}
