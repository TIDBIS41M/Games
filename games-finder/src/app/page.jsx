import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    
    <main className=" max-h-max items-center justify-center mx-auto p-4">

    <header className="flex mt-0 mb-4 justify-center items-center bg bg-gray-950 p-6 text-2xl font-semibold">
    <div className="flex items-center gap-x-2">
        <Image
            src= "/images/HeadMashUpW.png"
            width={40}
            height={40}
            alt="logoHeader"
            className=""
          />
          <h1 className="md">Mash-Up</h1>
    </div>
    </header>

      <div className="flex justify-evenly space-x-4 grid-flow-col w-full h-full">
        <div className="w-1/2 text-left text-7xl">Universe of games, at the tap of your finger
        </div>
        <div className="w-full">
          <img
            src="/images/HologramLGirl2.png"
            width={300}
            height={300}
            alt="HoloGirl"
            className="mx-auto w-7/12"
          />
        </div>
      </div>
      <NavBar/>
    </main>
  );
}
