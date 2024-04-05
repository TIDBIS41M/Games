
import Filter from "./components/Filter";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";


export default async function Home() {
  const steamUrl = "http://192.168.100.13:3000/ps"
  const xboxUrl = "http://192.168.100.13:3000/ps"
  const psUrl = "http://192.168.100.13:3000/ps"
  const nintendoUrl = "http://192.168.100.13:3000/ps"
  
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
    <main className="grid w-full bg- pt-36 pb-28">
      <Header/>
      <section id="section1" className=" mb-[90px]"></section>
      <div className="grid md:grid-cols-2 max-md:flex max-md:flex-col justify-end max-md:justify-center items-center h-full grid-flow-col ">
        <div className="flex max-md:px-10 h-full text-left text-[4rem] max-md:h-[20rem] max-md:text-5xl items-center justify-center md:pl-20 max-md:bg-none bg-[url('/images/purpleblur.png')] bg-cover bg-center bg-no-repeat text-white">
          <p className="text-center">Universe of games, at the tap of your finger</p>
        </div>
        <div className="w-full max-md:-z-10 md:z-20">
          <img
            src="/images/HologramLGirl2.png"
            width={200}
            height={200}
            alt="HoloGirl"
            className="max-md:absolute w-10/12 max-md:top-32 max-md:left-0 max-md:right-0 max-md:opacity-50 mx-auto max-md:w-3/4"
          />
          <div className="grid grid-flow-row absolute max-lg:hidden top-0 -z-10 ">
          <div className="">
            <img src="/images/greenblur.png" alt="" className="w-full max-md:hidden" />
          </div>
          <div className="grid absolute -bottom-96 grid-flow-col">
            <img src="/images/redblur (1).png" alt="" className="w-full  max-md:hidden"/>
            <img src="/images/Blue-Glow-Transparent.png" alt="" className="w-full -translate-y-6  max-md:hidden"/>
          </div>
        </div>
        </div>
      </div>

      <section id="section3"></section>
          <h1 className="text-[47px] max-md:pt-24 text-white font-bold text-center max-md:mb-12 md:mb-[140px] max-sm:hidden md:text-3xl mt-7" >Explore Our Featured Platforms</h1>
          <div className="flex justify-evenly items-center bg-no-repeat rounded-[20px] max-sm:hidden h-[183px] ml-[15px] mr-[15px]">       
              <div className="flex max-md:w-1/4 max-md:h-1/2 justify-center items-center w-[250px]  h-[320px] rounded-[34px]
                          bg-gradient-to-t from-[#b3b3b3ff] to-[#fff]
                          shadow-ps">
                  <img className="max-w-max max-h-max logo max-md:h-1/2 max-md:w-1/2" src="/images/playstation.png"/>
              </div>
              <div className="flex max-md:w-1/4 max-md:h-1/2 justify-center  items-center w-[250px] h-[320px] rounded-[34px]
                          bg-gradient-to-t from-[#067706ff] to-[#0ab90aff]
                          shadow-xb">
                  <img className="max-w-max max-h-max logo max-md:h-1/2 " src="/images/xbox.png"/>
              </div>
              <div className="flex max-md:w-1/4 max-md:h-1/2 justify-center items-center w-[250px] h-[320px] rounded-[34px]
                          bg-gradient-to-t from-[#820505ff] to-[#ff0000ff]
                          shadow-nin">                                           
                  <img className="max-w-max max-h-max logo max-md:h-full " src="/images/nintendo.png"/>
              </div>
              <div className="flex max-md:w-1/4 max-md:h-1/2 justify-center items-center w-[250px] h-[320px] rounded-[34px]
                          bg-gradient-to-t from-[#093153ff] to-[#1077d2ff]
                          shadow-ste">
                  <img className="max-w-max max-h-max max-md:h-1/2" src="/images/steam.png"/>
              </div>
          </div>  
  
      <section id="section2" className="mb:mt-10"></section>
      <Filter
          games={games} // Arreglo de todos los juegos
          gamesSteam={gamesSteam} // Arreglo de juegos de Steam
          gamesNintendo={gamesNintendo} // Arreglo de juegos de Nintendo
          gamesPlay={gamesPlay} // Arreglo de juegos de PlayStation
          gamesXbox={gamesXbox} // Arreglo de juegos de Xbox
        />
          <section id="section4"></section>
          <div>
    <div className="fixed z-50 bottom-2 left-0 right-0 flex justify-center">
<ul className="flex rounded-full justify-between items-center h-20 bg-gray-900">
  <li>
    <Link scroll={true} spy="true" smooth="true" duration={2000} href="#section1">
      <button className="m-2 size-16 align-middle rounded-full bg-[#303030] p-5 border-neutral-950 hover:size-20 duration-500 transition-all hover:-translate-y-3 hover:shadow-lg hover:shadow-purple-600">
        <Image src="/images/casa.png" width={100} height={100} alt="House" className="mx-auto" />
      </button>
    </Link>
  </li>
  <li>
    <Link scroll={true} spy="true" smooth="true" duration="2000" href="#section2">
      <button className="m-2 size-16 align-middle rounded-full bg-[#303030] p-5 border-neutral-950 hover:size-20 duration-500 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-600">
        <Image src="/images/lupa.png" width={250} height={250} alt="Lupa" className="mx-auto" />
      </button>
    </Link>
  </li>
  <li>
    <Link scroll={true} spy="true" smooth="true" duration="2000" href="#section3">
      <button className="m-2 size-16 align-middle rounded-full bg-[#303030] p-5 border-neutral-950 hover:size-20 duration-500 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-600">
        <Image src="/images/compania.png" width={100} height={100} alt="Compania" className="mx-auto" />
      </button>
    </Link>
  </li>
  <li>
    <Link scroll={true} spy="true" smooth="true" duration="2000" href="#section4">
      <button className="m-2 size-16 align-middle rounded-full bg-[#303030] p-5 border-neutral-950 hover:size-20 duration-500 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-600">
        <Image src="/images/consola.png" width={100} height={100} alt="Consola" className="mx-auto" />
      </button>
    </Link>
  </li>
</ul>
</div>
    </div>
    </main>
    
  );
}
