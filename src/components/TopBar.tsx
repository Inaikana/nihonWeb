import logo from "../assets/images/logo.png";

export function TopBar() {
  return (
    <>
      <header className=" bg-main z-10 w-full flex justify-between  ">
        <a href="#">
          <img src={logo} alt="栞" className="h-14" />
        </a>
        <div className="flex gap-10 py-3 pr-10">
          <button
            className="cursor-pointer bg-sub px-5 py-1 rounded-xl"
            type="button"
          >
            文法
          </button>
          <button
            className="cursor-pointer  bg-sub px-5 py-1 rounded-xl"
            type="button"
          >
            單字
          </button>
          <button
            className="cursor-pointer  bg-sub px-5 py-1 rounded-xl"
            type="button"
          >
            動詞變化
          </button>
        </div>
      </header>
    </>
  );
}
