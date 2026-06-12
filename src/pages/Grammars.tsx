import { MainLayout } from "../layouts/MainLayout";
import { FaYoutube } from "react-icons/fa";
import { EpisodesMenu } from "../components/EpisodesMenu";
import { Link } from "react-router-dom";
import { useGetGrammars } from "../hooks/useGetGrammars";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { useSearchParams } from "react-router-dom";
import { FaChevronCircleUp } from "react-icons/fa";
import type { GrammarQueryParams } from "../types/GrammarParams";
import { useEffect } from "react";

export function Grammars() {
  // 設置前端路由
  const [searchParams, setSearchParams] = useSearchParams();

  // 1. 從網址即時解析出目前的篩選條件
  const currentParams: GrammarQueryParams = {
    page: searchParams.get("page") || "1",
    keyword: searchParams.get("keyword") || undefined,
    tags: searchParams.get("tags") || undefined,
    episodeNumber: searchParams.get("episodeNumber") || undefined,
  };

  // 從路由抓取當前頁碼，預設為 1
  // parseInt 第二個參數 10 是為了確保以十進位解析 並順便無條件捨去 + 轉型成數字
  const currentPage = parseInt(currentParams.page || "1", 10);

  const { data, isLoading, isError, error } = useGetGrammars(currentParams);

  const backObj = data;

  const grammarsData = backObj?.grammarsData || []; // 若不存在，直接回傳一個空陣列，避免 map 報錯

  // 同上若還不存在 先給一個預設的分頁物件 確保後續使用 pagination 的屬性不會報錯
  const pagination = backObj?.pagination || {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    limit: 20,
  };

  // : void 表示函式僅執 沒回傳值
  const updateQueryParams = (newParams: GrammarQueryParams): void => {
    // setSearchParams 接收一個callback
    // prev的 URLSearchParams 是型別
    // prev 是網址上最即時、最原始的舊參數物件 這是在使用 setSearchParams 時由 React 定義的
    setSearchParams((prev: URLSearchParams) => {
      // new URLSearchParams(prev) 的URLSearchParams是建模函數
      // new 一個現在網址的物件
      const nextParams = new URLSearchParams(prev);

      // Object.entries(newParams) 會把 newParams 這個物件轉成一個陣列
      // 例如 { keyword: "test", tag: "verb" } 會變成 [ ["keyword", "test"], ["tag", "verb"] ]
      const entries = Object.entries(newParams) as [
        keyof GrammarQueryParams, // 必須是 GrammarQueryParams 其中一個key的名字
        string | undefined, // 型別可以是字串或 undefined（因為 GrammarQueryParams 的屬性都是可選的）
      ][];

      entries.forEach(([key, value]) => {
        if (value === null || value === undefined || value === "") {
          nextParams.delete(key); // 欄位為空時，從網址移除該參數，保持網址乾淨
        } else {
          nextParams.set(key, value); // 用set能直接蓋掉舊的值 如果key不存在 就新增
        }
      });

      // 防呆機制：當觸發「非頁碼」的篩選/搜尋動作時，強制將頁碼歸回第 1 頁
      const isFilterChanged =
        newParams.keyword !== undefined ||
        newParams.tags !== undefined ||
        newParams.episodeNumber !== undefined;

      if (isFilterChanged && !newParams.page) {
        nextParams.set("page", "1");
      }

      return nextParams;
    });
  };

  useEffect(() => {
    // 如果網址沒有 ?page= 主動塞入 page=1
    if (!searchParams.has("page")) {
      updateQueryParams({ page: "1" });
    }
  }, [searchParams]);

  if (isLoading) return <div>載入中...</div>;
  if (isError) return <div>發生錯誤</div>;

  return (
    <MainLayout className="flex flex-col items-center w-full bg-slightWhile">
      <div className="w-[90%] md:w-[80%]  lg:w-[60%] ">
        {/* 【 1 】聲明  */}

        <div className="w-full bg-white border-t-4 border-main inline-block mt-15 px-4 md:px-12 lg:px-12 py-8 rounded-2xl shadow-[0_4px_20px_-3px_rgb(184,231,255,0.7)]">
          {/* 聲明 */}
          <div className="text-black text-center text-[24px] md:text-[40px] lg:text-[40px] font-[1000] tracking-wider ">
            <p>聲明</p>
            <div className="bg-main w-18 h-1.5 mx-auto rounded-full -mt-1"></div>
          </div>

          {/* 中文 */}
          <div className="text-[16px] md:text-[20px] lg:text-[20px] mt-6">
            <p>
              本網站之日文文法內容參考自
              <a
                className="font-bold border-b-2 border-main"
                href="https://www.youtube.com/playlist?list=PLN-ztDeY62dAE8yGu0AeZ6S_7-7HBdaIu"
                target="_blank"
              >
                Yuka先生的Youtube教學影片
              </a>
              ，感謝Yuka先生無私的優質教學
            </p>
          </div>

          {/* 日文 */}
          <div className="text-[16px] md:text-[20px] lg:text-[20px] mt-12">
            <p>
              当サイトの日本語文法内容は、
              <a
                className="font-bold border-b-2 border-main"
                href="https://www.youtube.com/playlist?list=PLN-ztDeY62dAE8yGu0AeZ6S_7-7HBdaIu"
                target="_blank"
              >
                Yuka先生のYouTubeチャンネル
              </a>
              の解説動画を参考にさせていただいております
            </p>
            <p>
              Yuka先生の素晴らしいご指導と、惜しみない知識の共有に心より感謝申し上げます
            </p>
          </div>

          {/* 參考連結 */}
          <div className="mt-8">
            <p className="text-[#757575] mb-4 text-[12px] md:text-[16px] lg:text-[16px]">
              參考連結
            </p>
            <div className="flex flex-col md:flex-row lg:flex-row gap-8 mb-4 ">
              <a
                href="https://www.youtube.com/@yuka_japaneseteacher"
                target="_blank"
                className="flex items-center text-[20px] md:text-[24px] lg:text-[24px] bg-softBlue w-full md:w-1/2 lg:w-1/2 p-4 rounded-lg"
              >
                <div className="bg-youtubeRed p-2 rounded-lg mr-4">
                  <FaYoutube className="text-white" />
                </div>
                <p>Yuka先生</p>
              </a>

              <a
                href="https://www.youtube.com/playlist?list=PLN-ztDeY62dAE8yGu0AeZ6S_7-7HBdaIu"
                target="_blank"
                className="flex items-center text-[20px] md:text-[24px] lg:text-[24px] bg-softBlue w-full md:w-1/2 lg:w-1/2 p-4 rounded-lg"
              >
                <div className="bg-youtubeRed p-2 rounded-lg mr-4">
                  <FaYoutube className="text-white" />
                </div>
                <p>初級文法 Basic Grammar</p>
              </a>
            </div>
          </div>
        </div>
        {/* 【 2 】搜尋框 */}

        {/* 在 <form> 裡的 <input> 一旦按下 Enter或是點擊提交 就會觸發該表單的 submit 事件 */}

        <div className="flex  mt-12 gap-4">
          <form
            className="w-full"
            onSubmit={(e) => {
              // 阻止表單原生重新整理網頁的行為
              e.preventDefault();

              // 透過 FormData 抓輸入框的值（ input 要有一樣的 name 屬性）
              const formData = new FormData(e.currentTarget);
              const keywordValue = formData.get("grammarSearch") as string;

              // 直接更新路由
              updateQueryParams({ keyword: keywordValue });
            }}
          >
            <input
              name="grammarSearch"
              className="bg-white w-full text-[16px] md:text-[20px] lg:text-[20px] border-2 border-main rounded-xl p-2 md:p-4 lg:p-4"
              type="search"
              placeholder="請搜尋文法 ( 例如 : ください　)"
              defaultValue={currentParams.keyword || ""}
            />
          </form>
          <button
            type="button"
            className="cursor-pointer  bg-[#F3F4F6] shrink-0 text-center text-[20px] px-5 border-2 border-[#BBBBBB] rounded-[6px]"
            onClick={() => {
              updateQueryParams({
                page: "1",
                keyword: undefined,
                tags: undefined,
                episodeNumber: undefined,
              });
            }}
          >
            清除篩選
          </button>
        </div>
        {/* 【 3 】 篩選 + 集數 */}

        <div className="flex justify-between mt-4">
          <div className="text-[20px]">
            <button
              className="bg-softBlue mx-2 px-3 py-1.5 rounded-xl border-2 border-main cursor-pointer hover:bg-main hover:font-bold"
              type="button"
              onClick={() => updateQueryParams({ tags: "動詞" })}
            >
              動詞
            </button>
            <button
              className="bg-softBlue mx-2 px-3 py-1.5 rounded-xl border-2 border-main cursor-pointer  hover:bg-main hover:font-bold"
              type="button"
              onClick={() => updateQueryParams({ tags: "形容詞" })}
            >
              形容詞
            </button>
            <button
              className="bg-softBlue mx-2 px-3 py-1.5 rounded-xl border-2 border-main cursor-pointer  hover:bg-main hover:font-bold"
              type="button"
              onClick={() => updateQueryParams({ tags: "因為" })}
            >
              因為
            </button>
            <button
              className="bg-softBlue mx-2 px-3 py-1.5 rounded-xl border-2 border-main cursor-pointer  hover:bg-main hover:font-bold"
              type="button"
              onClick={() => updateQueryParams({ tags: "假設" })}
            >
              假設
            </button>
          </div>
          {/* 使用 props 把路由上的集數 和 更新路由的函數 傳遞給下拉式選單組件 */}
          {/* 為了讓使用者能透過路由分享篩選結果 以及【清除篩選】的功能 所以需要把陸由的集數傳遞給下拉式選單 */}
          <EpisodesMenu
            currentEpisode={currentParams.episodeNumber}
            onSelect={(ep) => updateQueryParams({ episodeNumber: ep })}
          />
        </div>

        {/* 【 4 】 上分頁  */}
        {pagination.totalPages > 0 && (
          <div className="mt-8  flex justify-center text-[20px]">
            <div className="flex items-center justify-center w-full md:w-1/2 lg:w-1/2">
              {/* 上一頁 */}
              <GoChevronLeft
                onClick={() => {
                  if (currentPage <= 1) return;
                  updateQueryParams({ page: String(currentPage - 1) });
                }}
                className={`${currentPage <= 1 ? "opacity-30 pointer-events-none" : ""} text-[28px] cursor-pointer rounded-full  w-10 h-10 p-2 mr-10 bg-softPink text-heavyPink`}
              />

              {/* 當前頁數 抓路由 */}
              <p>{currentPage}</p>

              <p className="mx-4">/</p>

              {/* 總頁數 抓後端給的 */}
              <p>{pagination.totalPages}</p>

              {/* 下一頁 */}
              <GoChevronRight
                onClick={() => {
                  if (currentPage >= pagination.totalPages) return;
                  updateQueryParams({ page: String(currentPage + 1) });
                }}
                className={`${
                  currentPage >= pagination.totalPages
                    ? "opacity-30 pointer-events-none"
                    : ""
                } text-[28px] cursor-pointer rounded-full  w-10 h-10 p-2 ml-10 bg-softPink text-heavyPink`}
              />
            </div>
          </div>
        )}
        {/* 【 5 】 文法區 */}

        <div className="flex flex-col gap-4 mt-8 mb-20">
          {grammarsData?.map((grammar) => (
            <Link
              to={`/grammar/${grammar.jid}`}
              key={grammar.jid}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <h2 className="text-[20px] md:text-[24px] lg:text-[24px] font-bold bg-softBlue px-4 py-3 rounded-lg">
                {grammar.grammarSummary}
              </h2>
              <p className="text-[16px] md:text-[18px] lg:text-[18px] text-[#757575] mt-2 px-4">
                {grammar.chineseSummary}
              </p>
            </Link>
          ))}
        </div>

        {/* 【 6 】 下分頁  */}
        {pagination.totalPages > 0 && (
          <div className="mt-8 mb-24 flex justify-center text-[20px]">
            <div className="flex items-center justify-center w-full md:w-1/2 lg:w-1/2">
              {/* 上一頁 */}
              <GoChevronLeft
                onClick={() => {
                  if (currentPage <= 1) return;
                  updateQueryParams({ page: String(currentPage - 1) });
                }}
                className={`${currentPage <= 1 ? "opacity-30 pointer-events-none" : ""} text-[28px] cursor-pointer rounded-full  w-10 h-10 p-2 mr-10 bg-softPink text-heavyPink`}
              />

              {/* 當前頁數 抓路由 */}
              <p>{currentPage}</p>

              <p className="mx-4">/</p>

              {/* 總頁數 抓後端給的 */}
              <p>{pagination.totalPages}</p>

              {/* 下一頁 */}
              <GoChevronRight
                onClick={() => {
                  if (currentPage >= pagination.totalPages) return;
                  updateQueryParams({ page: String(currentPage + 1) });
                }}
                className={`${
                  currentPage >= pagination.totalPages
                    ? "opacity-30 pointer-events-none"
                    : ""
                } text-[28px] cursor-pointer rounded-full  w-10 h-10 p-2 ml-10 bg-softPink text-heavyPink`}
              />
            </div>
          </div>
        )}
      </div>
      <button
        type="button"
        className="cursor-pointer bg-white rounded-full fixed bottom-[1%] right-[1%] md:bottom-[3%] md:right-[1.5%] lg:bottom-[5%] lg:right-[5%] z-2"
      >
        <FaChevronCircleUp className=" text-main  text-[48px] md:text-[60px] lg:text-[80px]" />
      </button>
    </MainLayout>
  );
}
