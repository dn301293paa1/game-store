import React from 'react';
import './gameItem.css';
import GameCover from './../game-cover/GameCover';
import GameBuy from './../game-buy/GameBuy';
import { GameGenre } from './../gameGenre/GameGenre';

const GameItem = ({ game }) => {
  return (
    <div className='game-item'>
      <GameCover image={game.image} />
      <div className='game-item__details'>
        <span className='game-item__title'> {game.title}</span>
        <div className='game-item__genres'>
          {game.genres.map(пше(genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className='game-item__buy'>
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};

export default GameItem;
