import Image from "next/image";
import NavBar from "./components/NavBar";
import GameCard from "./components/GameCard";

export default async function Home() {
  const steamUrl = "http://10.100.1.50:3000/steam"
  const xboxUrl = "http://10.100.0.180:3000/xbox"
  const psUrl = "http://10.100.1.50:3001/ps"
  const nintendoUrl = ""

  
  const responseSteam = await fetch(steamUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const gamesSteam = await responseSteam.json()
  gamesSteam.forEach((game) => {
    game.company  = "Steam"
    game.logo = "/images/steam.jpg"
  })
  
  const responseNintendo = await fetch(steamUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const gamesNintendo = await responseNintendo.json()
  gamesNintendo.forEach((game) => {
    game.company  = "Nintendo"
    game.logo = "/images/Nintendo.jpg"
  })

  const responsePlay = await fetch(psUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const gamesPlay = await responsePlay.json()
  gamesPlay.forEach((game) => {
    game.company  = "PlayStation"
    game.logo = "/images/ps.jpg"
  })

  const responseXbox = await fetch(xboxUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const gamesXbox = await responseXbox.json()
  gamesXbox.forEach((game) => {
    game.company  = "Xbox"
    game.logo = "/images/xbox.jpg"
  })

  const games = [...gamesSteam, ...gamesNintendo, ...gamesPlay, ...gamesXbox]; 

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
        {games.map((game, index) => (
          <GameCard game={game} key={index}/>
        ))}

      </div>
      <NavBar/>
    </main>
  );
}
