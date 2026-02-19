import { MainLayout } from "../layouts/MainLayout";
import { FaYoutube } from "react-icons/fa";

export function Grammars() {
  return (
    <MainLayout className="flex justify-center w-full">
      <div className="bg-main inline-block mt-8 px-12 py-8 rounded-2xl">
        <div className="text-center text-[40px] font-bold tracking-wider">
          聲明
        </div>

        <div className="text-[20px] mt-4">
          <p>本網站之日文文法內容參考自Yuka先生的Youtube教學影片</p>
          <p>感謝Yuka先生無私的優質教學</p>
        </div>

        <div className="text-[20px] mt-4">
          <p>
            当サイトの日本語文法内容は、Yuka先生のYouTubeチャンネルの解説動画を参考にさせていただいております
          </p>
          <p>
            Yuka先生の素晴らしいご指導と、惜しみない知識の共有に心より感謝申し上げます
          </p>
        </div>

        <div className="text-[20px]  mt-4">
          <p>參考連結 :</p>
          <div className="flex items-center ">
            <FaYoutube className="mr-2 " />
            <a
              href="https://www.youtube.com/@yuka_japaneseteacher"
              target="_blank"
            >
              Yuka先生
            </a>
          </div>

          <div className="flex items-center ">
            <FaYoutube className="mr-2 " />
            <a
              href="https://www.youtube.com/playlist?list=PLN-ztDeY62dAE8yGu0AeZ6S_7-7HBdaIu"
              target="_blank"
            >
              初級文法 Basic Grammar
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
