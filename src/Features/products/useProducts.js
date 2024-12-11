import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../services/apiProducts";

export function useProducts() {
  const {
    data: allProducts = [],
    isLoading,
    error,
  } = useQuery({ queryFn: getAllProducts, queryKey: ["allProducts"] });

  return { allProducts, isLoading, error };
}
