import React from 'react';
import './gameBuy.css';
import Button from './../button/Button';

const GameBuy = ({ game }) => {
  return (
    <div className='game-buy'>
      <span className='game-buy__price'> {game.price} грн</span>
      <Button onCLick={() => null} type='primary'>
        В корзину
      </Button>
    </div>
  );
};

export default GameBuy;
