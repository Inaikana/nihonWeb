import api from "./axiosInstance";
import type { BackGrammarIdRule } from "../types/GrammarRule";

export async function fetchGrammarByJid(
  jid: string,
): Promise<BackGrammarIdRule> {
  const response = await api.get<BackGrammarIdRule>(
    `/api/grammar/${encodeURIComponent(jid)}`,
  );

  return response.data;
}
