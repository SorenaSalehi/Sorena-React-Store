import { useQuery } from "@tanstack/react-query";
import { fetchUserDetails } from "../../services/apiUserData";

export function useUserDetails(id) {
  console.log(id);
  const { data: userDetails, isLoading } = useQuery({
    queryFn: fetchUserDetails,
    queryKey: ["userDetails", id],
    enabled: !!id,
  });

  return { userDetails, isLoading };
}
