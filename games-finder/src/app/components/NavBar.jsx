import Image from "next/image";

async function NavBar() {
  
  return (
    <div className="flex items-center mx-auto justify-center rounded-full h-20 bg-gray-950  text-white w-1/3 max-lg:px-4 px-4 py-1 fixed translate-x-80  translate-y-96" >
        <ul className="flex justify-around w-full">
            <li>
              <button className="m-2 size-16 align-middle rounded-full bg-gray-900 p-5 border-neutral-950 hover:size-18 duration-500 transition-all hover:-translate-y-8 hover:shadow-lg hover:shadow-purple-600">
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
              <button className="m-2 size-16 align-middle rounded-full bg-gray-900 p-5 border-neutral-950 hover:size-18 duration-500 transition-all hover:-translate-y-8 hover:shadow-lg hover:shadow-purple-600">
                <Image
                  src="/images/lupa.png"
                  width={100}
                  height={100}
                  alt="Lupa"
                  className="mx-auto"
                />
              </button>
            </li>
            <li>
              <button className="m-2 size-16 align-middle rounded-full bg-gray-900 p-5 border-neutral-950 hover:size-18 duration-500 transition-all hover:-translate-y-8 hover:shadow-lg hover:shadow-purple-600">
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
              <button className="m-2 size-16 align-middle rounded-full bg-gray-900 p-5 border-neutral-950 hover:size-18 duration-500 transition-all hover:-translate-y-8 hover:shadow-lg hover:shadow-purple-600">
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


