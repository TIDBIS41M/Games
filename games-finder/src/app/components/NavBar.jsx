import Image from "next/image";

async function NavBar() {
  
  return (
    <div className="fixed translate-x-[475px] translate-y-[470px] w-full">
        <ul className="grid grid-flow-col rounded-xl w-3/12 justify-around items-center bg-neutral-600 ">
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


