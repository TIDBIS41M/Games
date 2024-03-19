import GameCard from "./components/GameCard";
import Filter from "./components/Filter";
export default async function Home() {
  const steamUrl = "http://10.100.0.207:3000/steam"
  const xboxUrl = "http://10.100.1.153:3000/xbox"
  const psUrl = "http://10.100.0.207:3000/steam"
  const nintendoUrl = "http://10.100.1.153:3000/xbox"

  
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
  
  const responseNintendo = await fetch(nintendoUrl, {
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
    <main className="grid w-full  pt-36 bg-[#1c1c1c] bg-no-repeat">
      <div className="grid grid-cols-2 justify-end items-center h-full grid-flow-col ">
        <div className="flex h-full text-left text-[4rem] items-center justify-center pl-20 bg-[url('/images/purpleblur.png')] bg-cover bg-center bg-no-repeat text-white">
          <p className="text-center">Universe of games, at the tap of your finger</p>
        </div>
        <div className="grid grid-flow-row absolute z-10">
          <div className="">
            <img src="/images/greenblur.png" alt="" className="w-1/3 translate-x-[40rem] -translate-y-8" />
          </div>
          <div className="flex">
            <img src="/images/redblur (1).png" alt="" className="w-1/3 translate-x-[35rem] -translate-y-36"/>
            <img src="/images/Blue-Glow-Transparent.png" alt="" className="w-1/3 translate-x-[25rem] -translate-y-36"/>
          </div>
        </div>
        <div className="w-full z-20">
          <img
            src="/images/HologramLGirl2.png"
            width={200}
            height={200}
            alt="HoloGirl"
            className="w-10/12"
          />
        </div>
        
      </div>
      
      <div className="w-[25px] ">

      </div>
      <section className="mt-10 mb-10" >
        <h1 class="text-[47px] text-white font-bold text-center mb-[140px] mt-7" >Explore Our Featured Platforms</h1>
        <div className="flex justify-evenly items-center  bg-[#292929ff] bg-no-repeat rounded-[20px] h-[183px] ml-[15px] mr-[15px]">        
            <div className="flex justify-center items-center w-[250px] h-[320px] rounded-[34px]
                        bg-gradient-to-t from-[#b3b3b3ff] to-[#fff]
                        shadow-ps">               
                <img className="max-w-max max-h-max logo" src="/images/playstation.png"/>
            </div>
            <div className="flex justify-center items-center w-[250px] h-[320px] rounded-[34px]
                        bg-gradient-to-t from-[#067706ff] to-[#0ab90aff]
                        shadow-xb">
                <img className="max-w-max max-h-max logo" src="/images/xbox.png"/>
            </div>
            <div className="flex justify-center items-center w-[250px] h-[320px] rounded-[34px]
                        bg-gradient-to-t from-[#820505ff] to-[#ff0000ff]
                        shadow-nin">                                           
                <img className="max-w-max max-h-max logo" src="/images/nintendo.png"/>
            </div>
            <div className="flex justify-center items-center w-[250px] h-[320px] rounded-[34px]
                        bg-gradient-to-t from-[#093153ff] to-[#1077d2ff]
                        shadow-ste">
                <img className="max-w-max max-h-max" src="/images/steam.png"/>
            </div>
        </div>
      </section>

     
      
   <section className="my-10">
    <img src="/images/GamesTag.png" alt="Games" class="w-full h-full object-cover"></img>
    <div class="w-full flex justify-center">
      <h2
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Explore Our Game Catalogue
      </h2>
    </div>
    <br></br>
    <form class="flex items-center max-w-screen-lg mx-auto">
      <button type="submit"
        class="p-2.5 text-sm font-medium text-white bg-black rounded-full border border-black hover:bg-black dark:bg-black dark:hover:bg-black mx-2  hover:shadow-purple-600 hover:shadow-ste">
        <img src="/images/tres.png" alt="dados" class="w-6 h-6"></img>
      </button>
      <span class="sr-only">Dados</span>
      <label for="simple-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
         <img src="/images/lupa gris.png" alt="dados" class="w-6 h-6"/>
        </div>
        <input type="text" id="simple-search"
          class="bg-purple-50 border border-purple-300 text-gray-900 text-sm rounded-full focus:ring-purple-500 focus:border-purple-500 block w-full ps-10 p-2.5  dark:bg-black dark:border-dark dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          placeholder="Search..." required />
      </div>
      <button type="submit"
        class="p-2.5 text-sm font-medium text-white bg-black rounded-full border border-black hover:bg-black dark:bg-black dark:hover:bg-black mx-2  hover:shadow-purple-600 hover:shadow-ste">
        <img src="/images/filtrar.png" alt="Filter" class="w-6 h-6"></img>
      </button>
      <span class="sr-only">Filtro</span>
        </form>
      </section>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>      
  
      <section className="mt-10">
      <Filter
          games={games} // Arreglo de todos los juegos
          gamesSteam={gamesSteam} // Arreglo de juegos de Steam
          gamesNintendo={gamesNintendo} // Arreglo de juegos de Nintendo
          gamesPlay={gamesPlay} // Arreglo de juegos de PlayStation
          gamesXbox={gamesXbox} // Arreglo de juegos de Xbox
        />
      </section>
    </main>
  );
}
