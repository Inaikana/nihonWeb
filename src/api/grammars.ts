import api from "./axiosInstance";
import type { GrammarQueryParams } from "../types/GrammarParams";
import type { BackObjRule } from "../types/GrammarRule";

export async function fetchGrammars(
  params: GrammarQueryParams,
): Promise<BackObjRule> {
  const searchParams = new URLSearchParams();

  // 避免undefined、null、空字符串的參數被加入到路由中
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.append(key, value); // append : 不管這個 key 是否存在，它都會直接在後面追加一組key=??? 允許同一個 key 同時擁有複數個值 實現多選功能
    }
  });

  const queryString = searchParams.toString();
  const url = `/api/grammars${queryString ? `?${queryString}` : ""}`;
  const response = await api.get<BackObjRule>(url);
  return response.data;
}

// 為什麼這裡沒用try catch
// 當axios 請求失敗時 會主動throw錯誤useQuery 接收到錯誤後，會自動把 isError 變成 true，把錯誤訊息塞進 error
// 因為 fetchGrammars 這是要用在useQuery的 它一定要有回傳值
// 如果用常規寫法 成功return data 失敗console.log(error) JS預設會回傳undefined
// useQuery 會把 undefined 當成執行結果回傳(這次打API得到undefined這個東西唷)

// export async function fetchGrammarById(id: string) {
//   const { data } = await api.get(`/grammars/${id}`);
//   return data;
// }
