import Image from "next/image";
import NavBar from "./components/NavBar";
import GameCard from "./components/GameCard";

export default async function Home() {
  const response = await fetch("http://10.100.1.94:3000/steam", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const games = await response.json()
  return (
    <main className="grid grid-cols-1 max-h-max p-24">
      <div className="flex justify-center space-x-4 grid-flow-col w-full h-full">
        <div className="w-1/3 text-left text-7xl">Universe of games, at the tap of your finger
        </div>
        <div className="w-full">
          <img
            src="/images/HologramLGirl2.png"
            width={400}
            height={400}
            alt="HoloGirl"
            className="mx-auto w-7/12"
          />
        </div>
      </div>
      <div className="grid max-md:grid-flow-row max-md:m-5 md:grid-cols-2 gap-3 mt-10">
        {games.map((game) => (
          <GameCard game={game} key={game.id_juego} />
        ))}

      </div>
      <NavBar/>
    </main>
  );
}
