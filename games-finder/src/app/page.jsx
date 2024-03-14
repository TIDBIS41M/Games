import Image from "next/image";
import NavBar from "./components/NavBar";
import GameCard from "./components/GameCard";

export default async function Home() {
  const steamUrl = "http://10.100.1.60:3000/nintendo"
  const xboxUrl = "http://10.100.1.60:3000/nintendo"
  const psUrl = "10.100.1.60:3000/nintendo"
  const nintendoUrl = "http://10.100.1.60:3000/nintendo"

  
  const responseSteam = await fetch(steamUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const gamesSteam = await responseSteam.json()
  gamesSteam.forEach((game) => {
    game.company  = "Steam"
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
  })

  const games = [...gamesSteam, ...gamesNintendo, ...gamesPlay, ...gamesXbox]; 
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
            width={400}
            height={400}
            alt="HoloGirl"
            className="mx-auto w-7/12"
          />
        </div>
      </div>
      <section>
        <h1 class="text-[45px] text-center mb-[140px]" >Explore Our Featured Platforms</h1>
        <div class="flex justify-evenly items-center bg-[#292929ff] rounded-[20px] h-[180px]">
            
            <div class="flex justify-center items-center w-[225px] h-[320px] rounded-[34px]
                        bg-gradient-to-t from-[#b3b3b3ff] to-[#fff]">
                <img class="max-w-max max-h-max logo" src="/images/playstation.png"/>
            </div>
            <div class="flex justify-center items-center w-[225px] h-[320px] rounded-[34px]
                        bg-gradient-to-t from-[#067706ff] to-[#0ab90aff]">
                <img class="max-w-max max-h-max logo" src="/images/xbox.png"/>
            </div>
            <div class="flex justify-center items-center w-[225px] h-[320px] rounded-[34px]
                        bg-gradient-to-t from-[#820505ff] to-[#ff0000ff]">                                           
                <img class="max-w-max max-h-max logo" src="/images/nintendo.png"/>
            </div>
            <div class="flex justify-center items-center w-[225px] h-[320px] rounded-[34px]
                        bg-gradient-to-t from-[#093153ff] to-[#1077d2ff]">
                <img class="max-w-max max-h-max" src="/images/steam.png"/>
            </div>
        </div>
      </section>
    </main>
  );
}
