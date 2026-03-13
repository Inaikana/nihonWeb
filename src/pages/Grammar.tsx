import { MainLayout } from "../layouts/MainLayout";
import { grammarsData } from "../FakeData/fakedata";
import { Hiragana } from "../components/Hiragana";
import { FaPencilAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { FaRegFlag } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const id = "0101"; // 篩選集數 這邊先寫定
const filteredGrammar = grammarsData.filter((grammar) => {
  return grammar.jid == id;
});
const grammarData = filteredGrammar[0];

export function Grammar() {
  return (
    <MainLayout className="flex flex-col items-center w-full bg-slightWhile">
      <div className="w-[60%] bg-white shadow-md  px-12">
        {/* 【 1 】 集數 */}
        <p className="bg-main text-[20px] mt-6 px-2 py-1 rounded-md inline-block">
          第{grammarData.episodeNumber}集
        </p>

        {/* 【 2 】 文法公式 */}

        <div className="mt-8">
          <h3 className="flex items-center text-[16px]">
            <FaPencilAlt />
            <p className="ml-2">公式</p>
          </h3>

          <h2 className="bg-softBlue mt-2 px-3 py-2 font-bold text-[24px] rounded-lg">
            {grammarData.grammarPattern}
          </h2>
          <p className="text-[20px] mt-2">{grammarData.chineseMeaning}</p>
        </div>

        {/* 【 3 】 備註 */}
        <div className="mt-10">
          <h3 className="flex items-center text-[16px]">
            <LuNotebookText />
            <p className="ml-2">備註</p>
          </h3>
          <div className="bg-softPink border-2 border-sub rounded-xl mt-2 py-3 px-4">
            {grammarData.notes.map((note) => (
              <div>{note}</div>
            ))}
          </div>
        </div>

        {/* 【 4 】 例句 */}
        <div className="mt-10">
          <h3 className="flex items-center text-[16px]">
            <FaRegFlag />
            <p className="ml-2">例句</p>
          </h3>

          <div className="mt-2 text-[20px]">
            {grammarData.examples.map((example, index) => (
              <p key={index}>
                <Hiragana text={example.japanese}></Hiragana>
              </p>
            ))}
          </div>
        </div>

        {/* 【 5 】 參考影片 */}
        <div className="mt-10">
          <h3 className="flex items-center text-[16px]">
            <FaYoutube />
            <p className="ml-2">參考影片</p>
          </h3>

          <div className="flex  mt-2">
            <a href={grammarData.referenceUrl} target="_blank">
              <img
                className="w-50"
                src={grammarData.thumbnail}
                alt="Youtube縮圖"
              />
            </a>

            <a
              className="mx-4 h-full text-[20px] hover:font-bold hover:text-heavyPink"
              href={grammarData.referenceUrl}
              target="_blank"
            >
              {grammarData.videoTitle}
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
