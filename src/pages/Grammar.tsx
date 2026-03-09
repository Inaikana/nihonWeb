import { MainLayout } from "../layouts/MainLayout";
import { grammarsData } from "../FakeData/fakedata";

const id = "0101"; // 篩選集數 這邊先寫定
const filteredGrammar = grammarsData.filter((grammar) => {
  return grammar.jid == id;
});
const grammarData = filteredGrammar[0];

const renderFurigana = (text: string) => {
  // 正則表達式：匹配「漢字[讀音]」
  const regex = /([^\[\]]+)\[([^\[\]]+)\]/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // 放入符合之前的純文字
    parts.push(text.substring(lastIndex, match.index));
    // 放入帶有 ruby 的物件
    parts.push(
      <ruby key={match.index}>
        {match[1]}
        <rt>{match[2]}</rt>
      </ruby>,
    );
    lastIndex = regex.lastIndex;
  }
  // 放入剩餘文字
  parts.push(text.substring(lastIndex));
  return parts;
};

export function Grammar() {
  return (
    <MainLayout>
      <p>第{grammarData.episodeNumber}集</p>
      <h2>{grammarData.grammarSummary}</h2>
      <h3>文法公式</h3>
      <p className="">{grammarData.grammarPattern}</p>
      <p>{grammarData.chineseMeaning}</p>
      {grammarData.notes.map((note) => (
        <div>{note}</div>
      ))}

      {grammarData.examples.map((example) => (
        <p>{example.japanese}</p>
      ))}

      {/* <ruby className="mt-80 bg-sub text-4xl">
        湖 <rt>みずうみ</rt>
      </ruby> */}

      {/* <p>{grammarData.}</p> */}
    </MainLayout>
  );
}
