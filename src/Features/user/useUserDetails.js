import { useQuery } from "@tanstack/react-query";
import { fetchUserDetails } from "../../services/apiAuth";

export function useUserDetails(id) {
  const { data: userDetails, isLoading } = useQuery({
    queryFn: fetchUserDetails,
    queryKey: ["userDetails", id],
    enabled: !!id,
  });

  return { userDetails, isLoading };
}
