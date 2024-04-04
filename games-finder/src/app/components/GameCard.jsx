import React from 'react'
function generateStarImages(rate) {
  const totalStars = 5; // Total de estrellas
  const starImages = [];
  for (let i = 1; i <= totalStars; i++) {
    // Agregar estrella completa si la puntuación es mayor o igual a i
    if (i <= rate) {
      starImages.push(
        <img
          key={i}
          src="/images/estrella.png" // Ruta de la imagen de la estrella llena
          alt="star-filled"
          className="w-6 h-6"
        />
      );
    } else { 
      // Agregar estrella vacía si la puntuación es menor a i
      starImages.push(
        <img
          key={i}
          src="/images/estrellaVacia.png" // Ruta de la imagen de la estrella vacía
          alt="star-empty"
          className="w-6 h-6"
        />
      );
    }
  }
  return starImages;
}
function GameCard({ game }) {

  const getShadow = (company) => {
    switch (company) {
      case 'Nintendo':
        return 'shadow-nintendo';
      case 'PlayStation':
        return 'shadow-playstation';
      case 'Xbox':
        return 'shadow-xbox';
      case 'Steam':
        return 'shadow-steam';
      default:
        return 'shadow';
    }
  };

  return (
    <div className={`text-center transition-all duration-500 ease-in-out rounded-3xl hover:scale-105 p-1 hover:cursor-pointer hover:text-white justify-center relative ${getShadow(game.company)} shadow bg-cardBg`}>
      <div className="relative">
        <img 
          src={game.image}
          width={100}
          height={100}
          alt="HoloGirl"
          style={{ maxHeight: '250px' }}
          className="mx-auto w-full max-md:w-10/12 sm:rounded-3xl max-md:mt-10 my-auto h-50%"
        />
        <img 
          src={game.logo}
          className='rounded-t-md max-md:hidden absolute top-0 left-0 mt-4'w
          style={{ width: '130px', height: '38px' }} // Ajusta el tamaño del logo según tus necesidades
        />  
      </div>
      <img 
          src={game.logo}
          className='rounded-t-md sm:hidden absolute top-0 left-4 mt-4'w
          style={{ width: '130px', height: '38px' }} // Ajusta el tamaño del logo según tus necesidades
        />  
      <div className='flex-col justify-between max-md:h-[120px] h-[100px] '>
        <div className=' mt-4'>
          <h3 className="font-semibold text-lg">{game.name}</h3>
        </div>
        <div className="absolute bottom-0 left-0 w-full mt-4  mb-3">
          <h3 className="font-semibold text-xl max-md:text-center text-left md:pl-4">${game.price}</h3>
          <div className="flex items-center absolute max-md:bottom-7 md:bottom-0 right-0 mt-4 mr-4">
            {generateStarImages(game.rate)}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default GameCard