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
  const { jid } = useParams<{ jid: string }>();

  // 用抓全部文法的API 因為這頁右側選單也需要整份資料
  // 這裡把 limit 設成一個夠大的值，避免只能拿到第一頁資料
  const { data, isLoading, isError, error } = useGetGrammars({
    page: "1",
    limit: "500",
  });

  // 把自己callback的物件內容解構出來
  const { grammarDetail, grammarList } = useMemo(() => {
    const list = data?.grammarsData ?? [];

    return {
      // 用?? null 是為了確保如果找不到對應的文法，grammarDetail 會是 null 而不是 undefined  null 是一個明確的表示「沒有值」  undefined 可能是還沒抓到
      grammarDetail: list.find((grammar) => grammar.jid === jid) ?? null,
      grammarList: list,
    };
  }, [data, jid]);

  if (isLoading) {
    return <div>讀取中...</div>;
  }

  if (isError) {
    return <div>載入失敗</div>;
  }

  if (!grammarDetail) {
    return <div>找不到該文法資料</div>;
  }

  return (
    <MainLayout className="flex flex-col items-center w-full bg-slightWhile">
      <div className="w-[70%] flex shadow-md ">
        {/* 【 左 】文法詳細頁 */}
        <div className=" bg-white   px-12  ">
          {/* 【 1 】 集數 + 順序 */}
          <p className="bg-main text-[20px] mt-6 px-3 py-1 rounded-xl inline-block">
            第{grammarDetail.episodeNumber}集
          </p>

          <div className="text-[20px]  inline-block ml-2">
            {grammarDetail.order}
          </div>

          {/* 【 2 】 文法公式 */}

          <div className="mt-8">
            <h3 className="flex items-center text-[16px]">
              <FaPencilAlt />
              <p className="ml-2">公式</p>
            </h3>

            <h2 className="bg-softBlue mt-2 px-3 py-2 font-bold text-[24px] rounded-lg">
              {grammarDetail.grammarPattern}
            </h2>
            <p className="text-[20px] mt-2">{grammarDetail.chineseMeaning}</p>
          </div>

          {/* 【 3 】 備註 */}
          {grammarDetail.notes && grammarDetail.notes.length > 0 && (
            <div className="mt-10">
              <h3 className="flex items-center text-[16px]">
                <LuNotebookText />
                <p className="ml-2">備註</p>
              </h3>
              <div className="bg-softPink border-2 border-sub rounded-xl mt-2 py-3 px-4">
                {grammarDetail.notes.map((note, index) => (
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
              {grammarDetail.examples.map((example, index) => (
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
              <a href={grammarDetail.referenceUrl} target="_blank">
                <img
                  className="w-50"
                  src={grammarDetail.thumbnail}
                  alt="Youtube縮圖"
                />
              </a>

              <a
                className="mx-4 h-full text-[20px] hover:font-bold hover:text-heavyPink"
                href={grammarDetail.referenceUrl}
                target="_blank"
              >
                {grammarDetail.videoTitle}
              </a>
            </div>
          </div>
        </div>
        {/* 【 右 】選單 */}
        <div className="overflow-scroll whitespace-nowrap w-100 h-200 bg-white  ">
          {/* 【 6 】 其餘集數選單 */}
          <div className="flex flex-col w-fit min-w-full">
            {grammarList.map((grammar) =>
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
