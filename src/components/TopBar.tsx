import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

export function TopBar() {
  return (
    <>
      <header className=" bg-main z-10 w-full flex justify-between  ">
        <Link to="/">
          <img src={logo} alt="栞" className="h-14" />
        </Link>
        <div className="flex gap-10 py-3 pr-10">
          <NavLink
            to="/grammars"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer bg-heavyPink font-bold px-5 py-1 rounded-xl"
                : "cursor-pointer bg-sub px-5 py-1 rounded-xl"
            }
          >
            文法
          </NavLink>
          <Link
            to="/words"
            className="cursor-pointer  bg-sub px-5 py-1 rounded-xl"
          >
            單字
          </Link>
          <Link
            to="/verbrule"
            className="cursor-pointer  bg-sub px-5 py-1 rounded-xl"
          >
            動詞變化
          </Link>
        </div>
      </header>
    </>
  );
}
