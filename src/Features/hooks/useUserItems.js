import { useQuery } from "@tanstack/react-query";
import { fetchUserItems } from "../../services/apiUserData";

export function useUserItems({ user_id, from }) {
  const { data: items = [], isLoading: isItemsLoading } = useQuery({
    queryKey: [from, user_id],
    queryFn: () => fetchUserItems({ user_id, from }),

    enabled: !!user_id,
  });

  return { items, isItemsLoading };
}
