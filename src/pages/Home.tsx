import homebg from "../assets/images/homebg.png";

export function Home() {
  return (
    <>
      <main>
        <div
          style={{ backgroundImage: `url(${homebg})` }}
          className="h-screen  bg-no-repeat"
        ></div>
        {/* <img src={homebg} alt="背景圖片" className="" /> */}
      </main>
    </>
  );
}
