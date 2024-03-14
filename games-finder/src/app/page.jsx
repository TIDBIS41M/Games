import GameCard from "./components/GameCard";

export default async function Home() {
  const steamUrl = "http://10.100.1.60:3000/nintendo"
  const xboxUrl = "http://10.100.1.60:3000/nintendo"
  const psUrl = "http://10.100.1.60:3000/nintendo"
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
    <main className="grid w-full h-screen py-5">
    <header className="flex mt-0 mb-4 justify-center items-center p-6 text-2xl font-semibold">
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
      <div className="grid grid-cols-2 justify-end items-center grid-flow-col ">
        <div className="h-3/4 text-left text-[4rem] items-center pl-20 bg-[url('/images/purpleblur.png')] bg-top bg-no-repeat text-blue-200">Universe of games, at the tap of your finger
        </div>
        <div className="grid grid-flow-row absolute -z-10">
          <div className="">
            <img src="/images/greenblur.png" alt="" className="w-1/3 translate-x-[40rem] -translate-y-8" />
          </div>
          <div className="flex">
            <img src="/images/redblur (1).png" alt="" className="w-1/3 translate-x-[35rem] -translate-y-36"/>
            <img src="/images/Blue-Glow-Transparent.png" alt="" className="w-1/3 translate-x-[25rem] -translate-y-36"/>
          </div>
        </div>
        <div className="w-full">
          <img
            src="/images/HologramLGirl2.png"
            width={200}
            height={200}
            alt="HoloGirl"
            className="w-10/12"
          />
        </div>
        
      </div>
      <section className="mt-10 mb-10" >
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
      <section className="mt-10">
        <div className="grid max-md:grid-flow-row max-md:m-5 md:grid-cols-4 gap-8 mt-10">
          {games.map((game, index) => (
            <GameCard game={game} key={game}/>
          ))}

        </div>
      </section>
    </main>
  );
}
