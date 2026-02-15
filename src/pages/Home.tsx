import homebg from "../assets/images/homebg.png";

export function Home() {
  return (
    <>
      <main className="">
        <div
          style={{ backgroundImage: `url(${homebg})` }}
          className="h-224  bg-no-repeat  bg-top text-center"
        >
          {/* <p>3333</p> */}
        </div>
      </main>
    </>
  );
}
