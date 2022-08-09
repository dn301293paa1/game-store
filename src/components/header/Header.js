import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import CartBlock from '../cart-block/CartBlock';

const Header = () => {
  return (
    <div className='header'>
      <div className='wrapper'>
        <Link to='/' className='header__store-title'>
          GameStore
        </Link>
      </div>
      <div className='wrapper'>
        <Link to='trash' className='header__cart-btn-wrapper'>
          <CartBlock />
        </Link>
      </div>
    </div>
  );
};

export default Header;
