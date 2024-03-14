import Image from "next/image";

async function NavBar() {
  
  return (
    <div className="fixed z-50 bottom-2 left-0 right-0 flex justify-center">
      <ul className="flex rounded-full justify-between items-center h-20 bg-[#303030] ">
        <li>
          <button className="m-2 size-16 align-middle rounded-full bg-gray-900 p-5 border-neutral-950 hover:size-20 duration-500 transition-all hover:-translate-y-3 hover:shadow-lg hover:shadow-purple-600 ">
            <Image
              src="/images/casa.png"
              width={100}
              height={100}
              alt="House"
              className="mx-auto"
            />
          </button>
        </li>
        <li>
          <button className="m-2 size-16 align-middle rounded-full bg-gray-900 p-5 border-neutral-950 hover:size-20 duration-500 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-600">
            <Image
              src="/images/lupa.png"
              width={250}
              height={250}
              alt="Lupa"
              className="mx-auto"
            />
          </button>
        </li>
        <li>
          <button className="m-2 size-16 align-middle rounded-full bg-gray-900 p-5 border-neutral-950 hover:size-20 duration-500 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-600">
            <Image
              src="/images/compania.png"
              width={100}
              height={100}
              alt="Lupa"
              className="mx-auto"
            />
          </button>
        </li>
        <li>
          <button className="m-2 size-16 align-middle rounded-full bg-gray-900 p-5 border-neutral-950 hover:size-20 duration-500 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-600">
            <Image
              src="/images/consola.png"
              width={100}
              height={100}
              alt="Lupa"
              className="mx-auto"
            />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
