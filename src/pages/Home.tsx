import homebg from "../assets/images/homebg.png";
import { FaBook } from "react-icons/fa";

export function Home() {
  return (
    <>
      <main className="flex">
        <div className=" w-1/2">
          <img src={homebg} alt="首頁banner" />
        </div>
        <div className=" w-1/2 flex flex-col justify-center items-center ">
          <button
            type="button"
            className="m-5 flex bg-main text-[40px] w-[70%]"
          >
            <FaBook />
            <h2>文法</h2>
          </button>
          <button type="button" className="flex">
            単語
          </button>
          <button type="button" className="flex">
            動詞
          </button>
        </div>
      </main>
    </>
  );
}
