import { useQuery } from "@tanstack/react-query";
import { fetchGrammars } from "../api/grammars";

export function useGetGrammars() {
  return useQuery({
    queryKey: ["grammars"],
    queryFn: fetchGrammars,
  });
}
