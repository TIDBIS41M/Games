'use client'
import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';

const Filter = ({ games, gamesSteam, gamesNintendo, gamesPlay, gamesXbox }) => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [filteredGames, setFilteredGames] = useState(games);
  const [searchTerm, setSearchTerm] = useState('');

  const filterByCompany = (company) => {
    setSelectedCompany(company);

    switch (company) {
      case 'all':
        setFilteredGames(games);
        break;
      case 'steam':
        setFilteredGames(gamesSteam);
        break;
      case 'nintendo':
        setFilteredGames(gamesNintendo);
        break;
      case 'play':
        setFilteredGames(gamesPlay);
        break;
      case 'xbox':
        setFilteredGames(gamesXbox);
        break;
      default:
        setFilteredGames(games);
        break;
    }
  };

  useEffect(() => {
    const filteredResults = games.filter(game =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGames(filteredResults);
  }, [searchTerm, filteredGames]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
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
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>      
      <button onClick={() => filterByCompany('all')}>All</button>
      <br />
      <button onClick={() => filterByCompany('steam')}>Steam</button>
      <br />
      <button onClick={() => filterByCompany('nintendo')}>Nintendo</button>
    <br />
      <button onClick={() => filterByCompany('play')}>Play</button>
      <br />
      <button onClick={() => filterByCompany('xbox')}>Xbox</button>
      <br />

      <div className="grid max-md:grid-flow-row max-md:m-5 md:grid-cols-4 gap-12 mt-10 mx-12">
        {filteredGames.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
};


export default Filter;
