import api from "./axiosInstance";
import type { BackObjRule } from "../types/GrammarRule";

export async function fetchGrammars(): Promise<BackObjRule> {
  const { data } = await api.get("/api/grammars");
  return data;
}

// export async function fetchGrammarById(id: string) {
//   const { data } = await api.get(`/grammars/${id}`);
//   return data;
// }
