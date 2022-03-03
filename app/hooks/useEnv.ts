import { useMatches } from "remix";

import { Env } from "~/types";

export const useEnv = (): Env => {
  return useMatches()[0].data.ENV;
}