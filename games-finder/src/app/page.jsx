import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
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
