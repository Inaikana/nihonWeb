import api from "./axiosInstance";
import type { GrammarRule } from "../types/GrammarRule";

export async function fetchGrammars(): Promise<GrammarRule[]> {
  const response = await api.get("/api/grammars");

  const data = response.data;

  return data;
}

// 為什麼這裡沒用try catch
// 當axios 請求失敗時 會主動throw錯誤useQuery 接收到錯誤後，會自動把 isError 變成 true，把錯誤訊息塞進 error
// 因為 fetchGrammars 這是要用在useQuery的 它一定要有回傳值
// 如果用常規寫法 成功return data 失敗console.log(error) JS預設會回傳undefined
// useQuery 會把 undefined 當成執行結果回傳(這次打API得到undefined這個東西唷)
