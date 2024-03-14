import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="grid w-full md:max-h-max py-5">
      <div className="flex lg:grid-cols-2 justify-center items-center mx-auto grid-flow-col w-full h-full">
        <div className="lg:w-1/2 max-md:w-full max-md:h-96 flex text-left text-8xl h-full items-center pl-5 bg-[url('/images/purpleblur.png')] bg-center bg-no-repeat max-lg:text-center text-blue-200">Universe of games, at the tap of your finger
        </div>
        <div className=" grid grid-flow-row absolute w-10/12 -z-50">
          <div className="w-5/12 mx-auto translate-x-56 -translate-y-16">
            <img src="/images/greenblur.png" alt="" />
          </div>
          <div className="flex w-1/3 translate-x-96">
            <img src="/images/redblur (1).png" alt="" className="flex -translate-y-36 translate-x-14"/>
            <img src="/images/Blue-Glow-Transparent.png" alt="" className=" -translate-y-24 translate-x-9" />
          </div>
        </div>
        <div className="flex translate-x-28 lg:w-2/3 max-md:w-full text-right">
          <Image
            src="/images/HologramLGirl2.png"
            width={200}
            height={200}
            alt="HoloGirl"
            className=" flex mx-auto justify-center items-end w-9/12"
          />
        </div>
        
      </div>

      
      
      <section>
        <div>
          <img src="" alt="" />
          </div>
        <div>
          <img src="" alt="" />
          </div>
        <div>
          <img src="" alt="" />
          </div>
        <div>
          <img src="" alt="" />
          </div>
      </section>
      <NavBar/>
    </main>
  );
}
