import { MainLayout } from "../layouts/MainLayout";
import { FaYoutube } from "react-icons/fa";
import { grammarsData } from "../FakeData/fakedata";

export function Grammars() {
  return (
    <MainLayout className="flex flex-col items-center w-full bg-slightWhile">
      <div className="w-[60%] ">
        {/* 【 1 】聲明  */}
        <div className="w-full bg-white border-t-4 border-main inline-block mt-15 px-12 py-8 rounded-2xl shadow-[0_4px_20px_-3px_rgb(184,231,255,0.7)]">
          {/* 聲明 */}
          <div className="text-black text-center text-[40px] font-[1000] tracking-wider ">
            <p>聲明</p>
            <div className="bg-main w-18 h-1.5 mx-auto rounded-full -mt-1"></div>
          </div>

          {/* 中文 */}
          <div className="text-[20px] mt-6">
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
          <div className="text-[20px] mt-12">
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
            <p className="text-[#757575] mb-4">參考連結</p>
            <div className="flex gap-8 mb-4">
              <a
                href="https://www.youtube.com/@yuka_japaneseteacher"
                target="_blank"
                className="flex items-center text-[24px] bg-softBlue w-1/2 p-4 rounded-lg"
              >
                <div className="bg-youtubeRed p-2 rounded-lg mr-4">
                  <FaYoutube className="text-white" />
                </div>
                <p>Yuka先生</p>
              </a>

              <a
                href="https://www.youtube.com/playlist?list=PLN-ztDeY62dAE8yGu0AeZ6S_7-7HBdaIu"
                target="_blank"
                className="flex items-center text-[24px] bg-softBlue w-1/2 p-4 rounded-lg"
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
        <input
          className="bg-white w-full text-[20px] border-2 border-main rounded-xl mt-12 p-4"
          type="search"
          placeholder="請搜尋文法 ( 例如 : ください　)"
        />
        {/* 【 3 】 篩選區 */}
        {/* 篩選類別: 集數 因為 假設 動詞變化    */}

        {/* 【 4 】 文法區 */}
        <div className="flex flex-col gap-4 mt-8">
          {grammarsData.map((grammar) => (
            <div
              key={grammar.jid}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <h2 className="text-2xl font-bold bg-softBlue px-4 py-3 rounded-lg">
                {grammar.grammarSummary}
              </h2>
              <p className="text-lg text-[#757575] mt-2 px-4">
                {grammar.chineseSummary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
