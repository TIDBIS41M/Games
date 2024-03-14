import React from 'react'
import Image from 'next/image'

function GameCard({ game }) {
    console.log(game)
  return (
    <div className="text-center transition-all duration-500 ease-in-out rounded-xl shadow-lg shadow-black hover:scale-105 bg-gray-900 p-1 hover:bg-orange-500 hover:cursor-pointer hover:text-white">
        <div className=''>
            <img
                src={game.image}
                width={100}
                height={100}
                alt="HoloGirl"
                className="mx-auto w-3/12 h-3/12 rounded-xl"
            />
        </div>
        <h3 className=" font-bold text-3xl mb-2">{game.name}</h3>
        <h3 className=" font-semibold text-xl mb-2">${game.price}</h3>
        <h3 className=" font-semibold text-xl mb-2">{game.company}</h3>

    </div>
  )
}

export default GameCard