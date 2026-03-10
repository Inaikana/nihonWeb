import { MainLayout } from "../layouts/MainLayout";
import { grammarsData } from "../FakeData/fakedata";
import { Hiragana } from "../components/Hiragana";
import { LuNotebookText } from "react-icons/lu";
import { FaPencilAlt } from "react-icons/fa";

const id = "0101"; // 篩選集數 這邊先寫定
const filteredGrammar = grammarsData.filter((grammar) => {
  return grammar.jid == id;
});
const grammarData = filteredGrammar[0];

export function Grammar() {
  return (
    <MainLayout className="flex flex-col items-center w-full bg-slightWhile">
      <div className="w-[60%] bg-white shadow-md  px-4">
        {/* 【 1 】 集數 */}
        <p className="bg-main text-[20px] mt-6 px-2 py-1 rounded-md inline-block">
          第{grammarData.episodeNumber}集
        </p>
        {/* <h2 className="text-[32px] font-bold text-black mt-4">
          {grammarData.grammarSummary}
        </h2> */}
        {/* <h3 className="flex items-center">
          <FaPencilAlt />
          <p className="ml-2">文法公式</p>
        </h3> */}

        {/* 【 2 】 文法公式 */}
        <h2 className="bg-softBlue mt-8 px-3 py-2 font-bold text-[24px] rounded-lg">
          {grammarData.grammarPattern}
        </h2>
        <p className="text-[20px] mt-2">{grammarData.chineseMeaning}</p>

        {/* 【 3 】 備註 */}
        <div className="mt-6">
          <h3 className="flex items-center text-[20px]">
            <LuNotebookText />
            <p className="ml-2">備註</p>
          </h3>

          {grammarData.notes.map((note) => (
            <div>{note}</div>
          ))}
        </div>

        {/* 【 4 】 例句 */}
        {grammarData.examples.map((example, index) => (
          <p className="text-[px]" key={index}>
            <Hiragana text={example.japanese}></Hiragana>
          </p>
        ))}

        {/* <p>{grammarData.}</p> */}
      </div>
    </MainLayout>
  );
}
