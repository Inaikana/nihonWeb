import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const buttonCss = ({ isActive }: { isActive: boolean }) => {
  return `cursor-pointer px-5 py-1 rounded-xl ${isActive ? "bg-heavyPink font-bold" : "bg-sub"}`;
};

export function TopBar() {
  return (
    <>
      <header className=" bg-main z-10 w-full flex justify-between sticky top-0 ">
        <Link to="/">
          <img src={logo} alt="栞" className="h-14" />
        </Link>

        <div className="flex gap-10 py-3 pr-10">
          <NavLink to="/grammars" className={buttonCss} end>
            文法
          </NavLink>

          <NavLink to="/words" className={buttonCss} end>
            単語
          </NavLink>
          <NavLink to="/verbrule" className={buttonCss} end>
            動詞
          </NavLink>
        </div>
      </header>
    </>
  );
}
