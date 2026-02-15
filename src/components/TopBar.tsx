import logo from "../assets/images/logo.png";

export function TopBar() {
  return (
    <>
      <header className=" bg-white z-10 w-full flex justify-between text-[20px] ">
        <a href="#">
          <img src={logo} alt="栞" className="h-21.5" />
        </a>
        <div className="flex gap-16 py-5 pr-16">
          <button
            className="cursor-pointer bg-sub px-5 py-2 rounded-xl"
            type="button"
          >
            文法
          </button>
          <button
            className="cursor-pointer  bg-sub px-5 py-2 rounded-xl"
            type="button"
          >
            單字
          </button>
          <button
            className="cursor-pointer  bg-sub px-5 py-2 rounded-xl"
            type="button"
          >
            動詞變化
          </button>
        </div>
      </header>
    </>
  );
}
