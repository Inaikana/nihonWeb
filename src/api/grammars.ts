import api from "./axiosInstance";
import type { GrammarRule } from "../types/GrammarRule";

export async function fetchGrammars(): Promise<GrammarRule[]> {
  const { data } = await api.get("/api/grammars");
  return data;
}

// export async function fetchGrammarById(id: string) {
//   const { data } = await api.get(`/grammars/${id}`);
//   return data;
// }
