import { useQuery } from "@tanstack/react-query";
import { fetchGrammars } from "../api/grammars";
import type { GrammarQueryParams } from "../types/GrammarParams";

export function useGetGrammars(params: GrammarQueryParams) {
  return useQuery({
    queryKey: ["grammars", params],
    queryFn: () => fetchGrammars(params),
  });
}
