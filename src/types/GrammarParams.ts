// 定義網址上允許存在的篩選參數（全為字串，因為 URL 只能存字串）
export interface GrammarQueryParams {
  page?: string;
  keyword?: string;
  tags?: string;
  episodeNumber?: string;
  limit?: string;
}

// 根據的後端 API 的參數型別（供對照或匯入使用）
export interface GetGrammarsParams {
  keyword?: string;
  tags?: string;
  episodeNumber?: number;
  page: number;
  limit: number;
}
