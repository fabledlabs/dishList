import { User } from "@prisma/client";
import { useMatches } from "remix";

export const useCurrentUser = (): User | null => {
  return useMatches()[0]?.data?.user;
}