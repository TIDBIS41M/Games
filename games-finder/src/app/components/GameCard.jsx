import React from 'react'

function GameCard({ game }) {
  return (
    <div className="text-center transition-all duration-500 ease-in-out rounded-xl shadow-lg shadow-black hover:scale-105 bg-gray-900 p-3 hover:bg-orange-500 hover:cursor-pointer hover:text-white">
        <h3 className=" font-bold text-3xl mb-2">{game.nombre}</h3>
        <h3 className=" font-semibold text-xl mb-2">${game.precio}</h3>
        <div>
            <img src={game.image} alt="" />
        </div>
    </div>
  )
}

export default GameCard