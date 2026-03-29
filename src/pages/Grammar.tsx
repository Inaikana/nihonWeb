import { MainLayout } from "../layouts/MainLayout";
import { Hiragana } from "../components/Hiragana";
import { FaPencilAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { FaRegFlag } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useGetGrammars } from "../hooks/useGetGrammars";
import { useMemo } from "react";
import { Link } from "react-router-dom";

export function Grammar() {
  const { data } = useGetGrammars();
  const { jid } = useParams<{ jid: string }>();

  const grammarData = useMemo(() => {
    return data?.find((grammar) => grammar.jid === jid);
  }, [data, jid]);

  if (!data) {
    return <div>讀取中...</div>;
  }

  if (!grammarData) {
    return <div>讀取失敗</div>;
  }

  // 若直接用路由到此頁面 useGetGrammars()尚未抓到資料之前
  // grammarData 就會是 undefined 導致頁面錯誤
  // 在這使用 useMemo 加 if 判斷防呆 來處理
  // 雖然一開始一樣會全白 但隨著 useGetGrammars() 抓到資料
  // useMemo的依賴陣列更新 重新渲染一次組件

  const grammars = useGetGrammars().data; // 用變數grammars取得API所有文法 (data上面用過了)
  const grammarsData = grammars ?? [];

  // TODO 直接路由問題

  return (
    <MainLayout className="flex flex-col items-center w-full bg-slightWhile">
      <div className="w-[70%] flex shadow-md ">
        {/* 【 左 】文法詳細頁 */}
        <div className=" bg-white   px-12  ">
          {/* 【 1 】 集數 + 順序 */}
          <p className="bg-main text-[20px] mt-6 px-3 py-1 rounded-xl inline-block">
            第{grammarData.episodeNumber}集
          </p>

          <div className="text-[20px]  inline-block ml-2">
            {grammarData.order}
          </div>

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
          {grammarData.notes && grammarData.notes.length > 0 && (
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
          )}

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

            <div className="flex mt-2 mb-20">
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
        {/* 【 右 】選單 */}
        <div className="overflow-scroll whitespace-nowrap w-100 h-200 bg-white  ">
          {/* 【 6 】 其餘集數選單 */}
          <div className="flex flex-col w-fit min-w-full">
            {grammarsData.map((grammar) =>
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
