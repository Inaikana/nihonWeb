import { MainLayout } from "../layouts/MainLayout";
import { grammarsData } from "../FakeData/fakedata";
import { Hiragana } from "../components/Hiragana";

const id = "0101"; // 篩選集數 這邊先寫定
const filteredGrammar = grammarsData.filter((grammar) => {
  return grammar.jid == id;
});
const grammarData = filteredGrammar[0];

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

      {grammarData.examples.map((example, index) => (
        <p className="text-[px]" key={index}>
          <Hiragana text={example.japanese}></Hiragana>
        </p>
      ))}

      {/* <p>{grammarData.}</p> */}
    </MainLayout>
  );
}
