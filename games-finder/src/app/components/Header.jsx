import Image from "next/image";

async function Header() {
  
    return (

<header className="flex mt-0 mb-4 justify-center items-center bg bg-[#242424ff
] p-6 text-2xl font-semibold">
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

);
}

export default Header;