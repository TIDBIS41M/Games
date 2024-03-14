import React from 'react'
import Image from 'next/image'

function GameCard({ game }) {
    console.log(game)
  return (
    <div className="text-center transition-all duration-500 ease-in-out rounded-3xl shadow-lg shadow-black hover:scale-105 bg-gray-900 p-1 hover:cursor-pointer hover:text-white justify-center relative">
      <div className="relative">
        <img 
          src={game.image}
          width={100}
          height={100}
          alt="HoloGirl"
          style={{ maxHeight: '250px' }}
          className="mx-auto w-full rounded-3xl my-auto h-50%"
        />
        <img 
          src={game.logo}
          className='rounded-t-md absolute top-0 left-0  mt-4'
          style={{ width: '130px', height: '38px' }} // Ajusta el tamaño del logo según tus necesidades
        />  
      </div>
      <div className='justify-center  bottom-0 left-0 p-4'>
        <h3 className="font-bold text-3xl mb-2">{game.name}</h3>
        <h3 className="font-semibold text-xl mb-2">${game.price}</h3>
      </div>
    </div>
  )
}

export default GameCard