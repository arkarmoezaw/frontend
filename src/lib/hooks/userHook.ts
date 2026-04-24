import { useMutation, useQuery, useSuspenseQuery } from "@tanstack/react-query";

import { apiLoadAllUsers } from "./apis/authApi";

export function useLoadAllUsers() {
  return useSuspenseQuery({
    queryKey: ["users"],
    queryFn: apiLoadAllUsers,
  });
}
