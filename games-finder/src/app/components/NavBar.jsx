import Image from "next/image";

async function NavBar() {
  
  return (
    <div className="flex text-poppins items-center mx-auto justify-center rounded-full w-1/4 bg-gray-800 text-white lg:w-3/12 max-lg:px-4 px-4 py-1 fixed lg:translate-x-[28rem] max-md:translate-x-24 translate-y-[30rem] md:translate-x-0 max-sm:-translate-x-4 max-sm:translate-y-[49rem] shadow-lg shadow-gray-600">
        <ul className="flex justify-around w-full items-center">
            <li>
              <button className="m-2 size-16 align-middle rounded-full bg-gray-900 p-5 border-neutral-950 hover:size-20 duration-500 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-600">
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


