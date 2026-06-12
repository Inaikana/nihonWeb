import { useQuery } from "@tanstack/react-query";
import { fetchGrammarByJid } from "../api/grammarId";

export function useGrammarByJid(jid: string) {
  return useQuery({
    queryKey: ["grammarByJid", jid],
    queryFn: () => fetchGrammarByJid(jid),
    enabled: Boolean(jid),
  });
}
