export const Hiragana = ({ text }: { text: string }) => {
  // 用正則表達式：抓取句子中格式如右的內容 【 |漢字[かんじ] 】
  const regex = /\|([^\[]+)\[([^\]]+)\]/g;
  const matches = Array.from(text.matchAll(regex));

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of matches) {
    const matchIndex = match.index ?? 0;

    // 1. 處理匹配項之前的純文字 (如：さんは)
    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }

    // 2. 渲染 Ruby (match[1]是本體，match[2]是讀音)
    parts.push(
      <ruby key={matchIndex}>
        {match[1]}
        <rt>{match[2]}</rt>
      </ruby>,
    );

    lastIndex = matchIndex + match[0].length;
  }

  // 3. 剩餘文字 (如：です)
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return <>{parts}</>;
};
