'use client'
import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';

const Filter = ({ games, gamesSteam, gamesNintendo, gamesPlay, gamesXbox }) => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [originalGames, setOriginalGames] = useState(games);
  const [filteredGames, setFilteredGames] = useState(games);
  const [searchTerm, setSearchTerm] = useState('');
  const [noGamesFound, setNoGamesFound] = useState(false);
  const [randomizeActivated, setRandomizeActivated] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    applyFilters();
  }, [searchTerm, selectedCompany]);

  useEffect(() => {
    if (randomizeActivated) {
      setShowAnimation(true);
      setTimeout(() => {
        randomizer();
        setShowAnimation(false);
      }, 7000); // Tiempo de espera en milisegundos antes de mostrar las cartas
    }
  }, [randomizeActivated]);

  const randomizer = () => {
    const randomGames = [];
    const gamesToRandomize = [...filteredGames]; // Clone the original games array

    while (randomGames.length < 10 && gamesToRandomize.length > 0) {
      const randomIndex = Math.floor(Math.random() * gamesToRandomize.length);
      randomGames.push(gamesToRandomize.splice(randomIndex, 1)[0]);
    }

    setFilteredGames(randomGames);
    setRandomizeActivated(true); // Indicate that randomize button has been activated
  };

  const applyFilters = () => {
    let filteredResults = [...originalGames];

    switch (selectedCompany) {
      case 'all':
        break;
      case 'steam':
        filteredResults = gamesSteam;
        break;
      case 'nintendo':
        filteredResults = gamesNintendo;
        break;
      case 'play':
        filteredResults = gamesPlay;
        break;
      case 'xbox':
        filteredResults = gamesXbox;
        break;
      default:
        break;
    }

    if (searchTerm) {
      filteredResults = filterBySearchTerm(filteredResults, searchTerm);
    }

    setFilteredGames(filteredResults);

    if (filteredResults.length === 0) {
      setNoGamesFound(true);
    } else {
      setNoGamesFound(false);
    }
  };

  const filterBySearchTerm = (gamesToFilter, term) => {
    return gamesToFilter.filter(game =>
      game.name.toLowerCase().includes(term.toLowerCase())
    );
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterByCompany = (company) => {
    setSelectedCompany(company);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    applyFilters();
  };

  const toggleRandomizer = () => {
    setFilteredGames(randomizeActivated ? originalGames : filteredGames);
    setRandomizeActivated(!randomizeActivated);
  };


  return (
    
    <div>
        <section className="my-10">
        <img src="/images/GamesTag.png" alt="Games" className="w-full h-full object-cover" />
        <div className="w-full flex justify-center">
          <h2 className="mb-4 max-md:text-center max-md:text-2xl text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Explore Our Game Catalogue
          </h2>
        </div>

        <br></br>

        <form className="flex items-center max-w-screen-lg mx-auto" onSubmit={handleSubmit}>
        <button
          type="button"
          className={`p-2 shadow ${randomizeActivated ? 'bg-gray-9x00' : 'bg-black'} text-white rounded-full border border-black mx-2 hover:shadow-purple-600 `}
          onClick={() => {
            toggleRandomizer(); // Llama a la función randomizer siempre que se haga clic en el botón
          }}
        >
          <img src="/images/tres.png" alt="dados" className="w-6 h-6" />
        </button>

          <span className="sr-only">Dados</span>
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <img src="/images/lupa gris.png" alt="dados" className="w-6 h-6" />
            </div>
            <input
              type="text"
              className="bg-purple-50 border border-purple-300 text-gray-900 text-sm rounded-full focus:ring-purple-500 focus:border-purple-500 block max-md:w-11/12 w-full ps-10 p-2.5  dark:bg-black dark:border-dark dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </form>
      </section>

     
  <div className='flex flex-shrink flex-wrap justify-center'>
    <button onClick={() => filterByCompany('all')} className={`p-2 shadow ${selectedCompany === 'all' ? 'bg-purple-700' : 'bg-purple-500 hover:bg-purple-600 my-2'} text-white font-bold py-2 px-4 rounded mr-2`}>
  All
</button>

<button onClick={() => filterByCompany('steam')} className={`p-2 shadow-steam mr-2 ${selectedCompany === 'steam' ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-600 my-2'} max-md:w-1/3 `}>
  <img src="/images/steam.jpg" alt="steamBtn" />
</button>

<button onClick={() => filterByCompany('nintendo')} className={`p-2 shadow-nintendo mr-2 ${selectedCompany === 'nintendo' ? 'bg-red-700' : 'bg-red-500 hover:bg-red-600 my-2 '} max-md:w-1/3`}>
  <img src="/images/Nintendo.jpg" alt="nintendoBtn" />
</button>

<button onClick={() => filterByCompany('play')} className={`p-2 shadow-playstation mr-2 ${selectedCompany === 'play' ? 'bg-slate-700' : 'bg-slate-500 hover:bg-slate-600 my-2'} max-md:w-1/3`}>
  <img src="/images/ps.jpg" alt="playBtn" />
</button>

<button onClick={() => filterByCompany('xbox')} className={`p-2 shadow-xbox ${selectedCompany === 'xbox' ? 'bg-green-700' : 'bg-green-500 hover:bg-green-600 my-2'} max-md:w-1/3`}>
  <img src="/images/xbox.jpg" alt="xboxBtn" />
</button>

  </div>


  <section className="my-10">
  {/* If anidado para controlar la visualización de la animación y el mensaje de "Juego no encontrado" */}
  {noGamesFound ? (
    <div className="col-span-4 flex justify-center items-center h-full">
      <h1 className="text-slate-100 text-3xl font-bold">Juego no encontrado</h1>
    </div>
  ) : (
    <>
      {showAnimation ? (
        <>
          <div className="col-span-4 flex justify-center items-center h-full">
            <img src="/images/diceAnimation.gif" alt="Loading..." />
          </div>
        </>
      ) : (
        <div className="grid max-md:grid-flow-row max-[400px]:grid-cols-1 max-md:grid-cols-2 sm max-md:m-5 md:gf md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 mt-10 mx-12">
          {/* Renderizar cartas de juego si hay juegos */}
          {filteredGames.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      )}
    </>
  )}
</section>

    </div>
  );
};


export default Filter;
