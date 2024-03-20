'use client'
import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';

const Filter = ({ games, gamesSteam, gamesNintendo, gamesPlay, gamesXbox }) => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [filteredGames, setFilteredGames] = useState(games);
  const [searchTerm, setSearchTerm] = useState('');

  // Función para filtrar los juegos por término de búsqueda
  const filterBySearchTerm = (gamesToFilter, term) => {
    return gamesToFilter.filter(game =>
      game.name.toLowerCase().includes(term.toLowerCase())
    );
  };

  // Función para aplicar filtros
  const applyFilters = () => {
    let filteredResults = filteredGames;

      switch (selectedCompany) {
        case 'all':
          filteredResults = games;
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
  };

  useEffect(() => {
    applyFilters();
  }, [searchTerm, selectedCompany]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterByCompany = (company) => {
    setSelectedCompany(company);
  };

  return (
    
    <div>
        <section className="my-10">
        <img src="/images/GamesTag.png" alt="Games" className="w-full h-full object-cover" />

        <div className="w-full flex justify-center">
          <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Explore Our Game Catalogue
          </h2>
        </div>

        <br></br>

        <form className="flex items-center max-w-screen-lg mx-auto">
          <button
            type="submit"
            className="p-2.5 text-sm font-medium text-white bg-black rounded-full border border-black hover:bg-black dark:bg-black dark:hover:bg-black mx-2  hover:shadow-purple-600 hover:shadow-ste"
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
              className="bg-purple-50 border border-purple-300 text-gray-900 text-sm rounded-full focus:ring-purple-500 focus:border-purple-500 block w-full ps-10 p-2.5  dark:bg-black dark:border-dark dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <button
            className="p-2.5 text-sm font-medium text-white bg-black rounded-full border border-black hover:bg-black dark:bg-black dark:hover:bg-black mx-2  hover:shadow-purple-600 hover:shadow-ste"
          >
            <img src="/images/filtrar.png" alt="Filter" className="w-6 h-6" />
          </button>
          <span className="sr-only">Filtro</span>
        </form>
      </section>

     
  <div className='flex justify-center'>
    <button onClick={() => filterByCompany('all')} className='shadow bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2'>
      All
    </button>
    
    <button onClick={() => filterByCompany('steam')} className='shadow-steam mr-2'>
      <img src="/images/steam.jpg" alt="steamBtn" />
    </button>
    
    <button onClick={() => filterByCompany('nintendo')} className='shadow-nintendo mr-2'>
      <img src="/images/Nintendo.jpg" alt="nintendoBtn" />
    </button>
    
    <button onClick={() => filterByCompany('play')} className='shadow-playstation mr-2'>
      <img src="/images/ps.jpg" alt="playBtn" />
    </button>
  
    <button onClick={() => filterByCompany('xbox')} className='shadow-xbox'>
      <img src="/images/xbox.jpg" alt="xboxBtn" />
    </button>
  </div>


      <div className="grid max-md:grid-flow-row max-md:m-5 md:grid-cols-4 gap-12 mt-10 mx-12">
        {filteredGames.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
};


export default Filter;
