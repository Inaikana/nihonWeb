import { MainLayout } from "../layouts/MainLayout";
import { Hiragana } from "../components/Hiragana";
import { FaPencilAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { FaRegFlag } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useGrammarByJid } from "../hooks/useGrammarByJid";
import { useMemo } from "react";
import { Link } from "react-router-dom";

// ❗❗❗ 之後要再做一個用id直接回傳個別文法的API函數
// ❗❗❗ 現在 F5 或 直接路由 會白屏 等之後做完id抓文法後 再來優化

export function Grammar() {
  const { jid } = useParams<{ jid: string }>(); // 從路由拿到jid
  const { data, isLoading, error } = useGrammarByJid(jid);

  if (isLoading || !data) {
    return <div>讀取中...</div>;
  }

  // 用 useMemo 回傳一個物件 包含單一jid的文法 和 全部文法
  const { currentGrammar, allGrammars } = useMemo(() => {
    const all = data.grammarsData ?? []; // 從大物件裡拿出文法陣列，若不存在則給空陣列
    const current = all.find((g) => g.jid === jid);
    return { currentGrammar: current, allGrammars: all };
  }, [data, jid]);

  if (!currentGrammar) {
    return <div>找不到該文法資料</div>;
  }

  return (
    <MainLayout className="flex flex-col items-center w-full bg-slightWhile">
      <div className="w-[70%] flex shadow-md ">
        {/* 【 左 】文法詳細頁 */}
        <div className=" bg-white   px-12  ">
          {/* 【 1 】 集數 + 順序 */}
          <p className="bg-main text-[20px] mt-6 px-3 py-1 rounded-xl inline-block">
            第{currentGrammar.episodeNumber}集
          </p>

          <div className="text-[20px]  inline-block ml-2">
            {currentGrammar.order}
          </div>

          {/* 【 2 】 文法公式 */}

          <div className="mt-8">
            <h3 className="flex items-center text-[16px]">
              <FaPencilAlt />
              <p className="ml-2">公式</p>
            </h3>

            <h2 className="bg-softBlue mt-2 px-3 py-2 font-bold text-[24px] rounded-lg">
              {currentGrammar.grammarPattern}
            </h2>
            <p className="text-[20px] mt-2">{currentGrammar.chineseMeaning}</p>
          </div>

          {/* 【 3 】 備註 */}
          {currentGrammar.notes && currentGrammar.notes.length > 0 && (
            <div className="mt-10">
              <h3 className="flex items-center text-[16px]">
                <LuNotebookText />
                <p className="ml-2">備註</p>
              </h3>
              <div className="bg-softPink border-2 border-sub rounded-xl mt-2 py-3 px-4">
                {currentGrammar.notes.map((note, index) => (
                  <div key={index}>{note}</div>
                ))}
              </div>
            </div>
          )}

          {/* 【 4 】 例句 */}
          <div className="mt-10">
            <h3 className="flex items-center text-[16px]">
              <FaRegFlag />
              <p className="ml-2">例句</p>
            </h3>

            <div className="mt-2 text-[20px]">
              {currentGrammar.examples.map((example, index) => (
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

            <div className="flex mt-2 mb-20">
              <a href={currentGrammar.referenceUrl} target="_blank">
                <img
                  className="w-50"
                  src={currentGrammar.thumbnail}
                  alt="Youtube縮圖"
                />
              </a>

              <a
                className="mx-4 h-full text-[20px] hover:font-bold hover:text-heavyPink"
                href={currentGrammar.referenceUrl}
                target="_blank"
              >
                {currentGrammar.videoTitle}
              </a>
            </div>
          </div>
        </div>
        {/* 【 右 】選單 */}
        <div className="overflow-scroll whitespace-nowrap w-100 h-200 bg-white  ">
          {/* 【 6 】 其餘集數選單 */}
          <div className="flex flex-col w-fit min-w-full">
            {allGrammars.map((grammar) =>
              jid === grammar.jid ? (
                <div key={grammar.jid}>
                  <p className="bg-softPink text-heavyPink text-[20px] font-bold px-4 py-2 my-1 rounded-xl ">
                    {grammar.grammarSummary}
                  </p>
                </div>
              ) : (
                <Link
                  to={`/grammar/${grammar.jid}`}
                  key={grammar.jid}
                  className="block"
                >
                  <p className="bg-softBlue text-[20px] px-4 py-2 my-1 rounded-xl ">
                    {grammar.grammarSummary}
                  </p>
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
