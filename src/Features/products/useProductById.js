import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../services/apiProducts";
import { useShopContext } from "../../context/ShopContext";

export function useProductById(id) {

  const { data: productById = [], isLoading: isLoadingProductById } = useQuery({
    queryFn: () => getProductById(id),
    queryKey: ["productById", id],

    enabled: !!id,


  });

  return { productById, isLoadingProductById };
}
