'use client'
import React, { useState } from 'react';
import GameCard from './GameCard';

const Filter = ({ games, gamesSteam, gamesNintendo, gamesPlay, gamesXbox }) => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [filteredGames, setFilteredGames] = useState(games);

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

  return (
    <div>
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
