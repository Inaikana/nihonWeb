import { MainLayout } from "../layouts/MainLayout";
import { grammarsData } from "../FakeData/fakedata";

const id = "1_1"; // 篩選集數 這邊先寫定

const filteredGrammar = grammarsData.filter((grammar) => {
  return grammar.jid == id;
});

const grammarData = filteredGrammar[0];

export function Grammar() {
  return (
    <MainLayout>
      <div>第{grammarData.episodeNumber}集</div>
      <div>{grammarData.grammarSummary}</div>
      <div>{grammarData.grammarPattern}</div>

      {/* <div>{grammarData.}</div> */}
    </MainLayout>
  );
}
