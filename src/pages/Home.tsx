import homebg from "../assets/images/homebg.png";
import { FaBook } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export function Home() {
  return (
    <>
      <div className="flex">
        <div className=" w-1/2">
          <img src={homebg} alt="首頁banner" />
        </div>
        <div className=" w-1/2 flex flex-col justify-center items-center gap-12">
          <button
            type="button"
            className=" flex bg-main text-[40px] w-[70%] py-3 px-3 items-center cursor-pointer rounded-md"
          >
            <div className="bg-white flex justify-center items-center px-4 py-4 rounded-xl">
              <FaBook className="text-heavyBlue " />
            </div>
            <h2 className="ml-8">文法</h2>
          </button>
          <button
            type="button"
            className=" flex bg-main text-[40px] w-[70%] py-3 px-3 items-center cursor-pointer rounded-md"
          >
            <div className="bg-white flex justify-center items-center px-4 py-4 rounded-xl">
              <FaPen className="text-heavyBlue " />
            </div>
            <h2 className="ml-8">単語</h2>
          </button>
          <button
            type="button"
            className=" flex bg-main text-[40px] w-[70%] py-3 px-3 items-center cursor-pointer rounded-md"
          >
            <div className="bg-white flex justify-center items-center px-4 py-4 rounded-xl">
              <FaStar className="text-heavyBlue " />
            </div>
            <h2 className="ml-8">動詞</h2>
          </button>
        </div>
      </div>
    </>
  );
}
