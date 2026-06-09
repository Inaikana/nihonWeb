// 在原生DOM有 Event 物件
// 但 React 為了跨平臺（Chrome、Safari、手機）把原生的事件包裝成一個 合成事件（SyntheticEvent）
// React 給這個合成事件提供 ChangeEvent 型別

import type { ChangeEvent } from "react";

interface EpisodesMenuProps {
  currentEpisode: string | undefined;
  onSelect: (episode: string) => void;
}

export function EpisodesMenu({ currentEpisode, onSelect }: EpisodesMenuProps) {
  // 用迴圈產生 1 ~ 80 的陣列，並把 62.5 塞進去
  const episodes: string[] = [];
  for (let i = 1; i <= 80; i++) {
    episodes.push(String(i));
    if (i === 62) {
      episodes.push("62.5");
    }
  }

  // ChangeEvent<HTMLSelectElement> 意思是 ChangeEvent它發會生在一個下拉選單（HTMLSelectElement）身上
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
  };

  return (
    <select
      value={currentEpisode || ""}
      onChange={handleChange}
      className="cursor-pointer  text-center text-[20px] rounded-lg px-4 border-2 border-main bg-white"
      name="episode"
      id="episode-select"
    >
      <option disabled className=" bg-[#cccccc] " value="">
        選擇集數
      </option>
      {episodes.map((ep) => (
        <option key={ep} value={ep}>
          第 {ep} 集
        </option>
      ))}
    </select>
  );
}
