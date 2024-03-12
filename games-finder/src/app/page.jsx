import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="grid grid-cols-1 max-h-max p-24">
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
